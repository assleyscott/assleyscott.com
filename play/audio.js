// ASR: The Collector chiptune engine. Four voices (two pulse, triangle, noise), original tunes.
// Nothing is created until the player's first real tap/key/click; the context suspends when the tab is hidden or the page is left.
// iOS (t307u): with the ringer on silent, Web Audio is muted unless the page's audio session is 'playback'. We ask for that via
// navigator.audioSession (Safari 16.4+/iOS 17) and, where that API is missing, by playing a tiny silent <audio> loop inside the tap,
// which promotes the session the same way. Unlocking also listens for touchend/pointerup/click/keydown at document level
// (capture), because iOS doesn't count touchstart/pointerdown as a gesture that can start audio.
export function makeAudio(){let ac=null,master=null,comp=null,pulse=[],triangle=null,noise=null,gains=[],timer=null,step=0,muted=false,paused=false,track='menu',nextAt=0;
 const hz=n=>440*Math.pow(2,(n-69)/12);
 // menu: relaxed C-major walk; race: driving A-minor with a busier bass and hats. 0 = rest.
 const TR={
  menu:{spb:.16,lead:[64,67,69,0,72,69,67,64,62,64,67,0,69,67,64,60,64,67,72,74,72,69,67,0,62,64,67,69,67,64,62,60],chords:[60,57,53,55],bass:[48,45,41,43],hat:4},
  race:{spb:.115,lead:[69,0,72,76,74,72,69,0,67,69,72,0,74,72,67,64,69,72,76,79,77,76,74,72,71,72,74,76,72,0,69,0],chords:[57,53,55,52],bass:[45,41,43,40],hat:2}};
 function duty(d){const re=new Float32Array(33),im=new Float32Array(33);for(let n=1;n<33;n++){re[n]=Math.sin(2*Math.PI*n*d)/n;im[n]=(1-Math.cos(2*Math.PI*n*d))/n;}return ac.createPeriodicWave(re,im,{disableNormalization:false});}
 // 0.5 s of 8 kHz 8-bit mono silence as a WAV data URI (~4 KB), built once
 let tag=null;const AS=typeof navigator!=='undefined'&&navigator.audioSession;
 function silentTag(){if(tag)return tag;const n=4000,b=new Uint8Array(44+n),v=new DataView(b.buffer),w=(o,t)=>{for(let i=0;i<t.length;i++)b[o+i]=t.charCodeAt(i)};
  w(0,'RIFF');v.setUint32(4,36+n,true);w(8,'WAVEfmt ');v.setUint32(16,16,true);v.setUint16(20,1,true);v.setUint16(22,1,true);v.setUint32(24,8000,true);v.setUint32(28,8000,true);v.setUint16(32,1,true);v.setUint16(34,8,true);w(36,'data');v.setUint32(40,n,true);b.fill(128,44);
  let bin='';for(let i=0;i<b.length;i++)bin+=String.fromCharCode(b[i]);
  tag=document.createElement('audio');tag.setAttribute('x-webkit-airplay','deny');tag.setAttribute('playsinline','');tag.preload='auto';tag.loop=true;tag.controls=false;tag.disableRemotePlayback=true;tag.src='data:audio/wav;base64,'+btoa(bin);return tag}
 function session(on){try{if(AS)AS.type=on?'playback':'auto';}catch{}
  if(AS)return;try{const t=silentTag();if(on){if(t.paused){const p=t.play();if(p&&p.catch)p.catch(()=>{})}}else if(!t.paused)t.pause()}catch{}}
 function init(){if(ac)return true;const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return false;
  try{ac=new AC({latencyHint:'interactive'});}catch{try{ac=new AC();}catch{ac=null;return false}}
  ac.onstatechange=()=>{nextAt=0};
  comp=ac.createDynamicsCompressor();comp.threshold.value=-14;comp.ratio.value=6;comp.attack.value=.003;comp.release.value=.12;comp.connect(ac.destination);
  master=ac.createGain();master.gain.value=muted?0:.22;master.connect(comp);
  for(let i=0;i<4;i++){const g=ac.createGain();g.gain.value=0;g.connect(master);gains.push(g);}
  for(let i=0;i<2;i++){const o=ac.createOscillator();o.setPeriodicWave(duty(i?.125:.25));o.connect(gains[i]);o.start();pulse.push(o);}
  triangle=ac.createOscillator();triangle.type='triangle';triangle.connect(gains[2]);triangle.start();
  const buf=ac.createBuffer(1,ac.sampleRate,ac.sampleRate),a=buf.getChannelData(0);let seed=0x1234;for(let i=0;i<a.length;i++){seed=(seed>>>1)|(((seed^(seed>>>1))&1)<<14);a[i]=(seed&1)?1:-1;}
  noise=ac.createBufferSource();noise.buffer=buf;noise.loop=true;noise.connect(gains[3]);noise.start();
  timer=setInterval(pump,25);return true}
 // envelopes are scheduled at an exact time so notes never click or stack
 function env(ch,v,t,dur){const g=gains[ch].gain;g.cancelScheduledValues(t);g.setValueAtTime(v,t);g.linearRampToValueAtTime(v*.6,t+Math.min(.04,dur*.4));g.linearRampToValueAtTime(0,t+dur);}
 function note(ch,n,t,dur,vol){(ch<2?pulse[ch]:triangle).frequency.setValueAtTime(hz(n),t);env(ch,vol,t,dur)}
 function playStep(t){const T=TR[track],i=step%32,bar=Math.floor(step/8)%4,n=T.lead[i];
  if(n)note(0,n,t,T.spb*.85,.2);
  if(step%2===0)note(1,T.chords[bar]+(step%8===4?7:step%8===6?4:0),t,T.spb*.9,.09);
  if(step%4===0||(track==='race'&&step%4===2))note(2,T.bass[bar]+(step%4===2?12:0),t,T.spb*1.8,.32);
  env(3,step%T.hat===0?(step%8===4?.09:.03):0,t,step%8===4?.07:.02);step++}
 // look-ahead scheduler: keeps time even if the main thread hitches
 function pump(){if(!ac||muted||paused||ac.state!=='running'){nextAt=0;return}const now=ac.currentTime;if(nextAt<now)nextAt=now+.05;while(nextAt<now+.12){playStep(nextAt);nextAt+=TR[track].spb}}
 function silence(){if(!ac)return;const t=ac.currentTime;for(const g of gains){g.gain.cancelScheduledValues(t);g.gain.setValueAtTime(0,t)}nextAt=0}
 function unlock(){if(muted)return;session(true);if(!init())return;if(ac.state!=='running')ac.resume().catch(()=>{});}
 // any real gesture anywhere on the page (capture, so game handlers that preventDefault/stopPropagation can't swallow it);
 // stays attached so a tap after backgrounding or a phone call ('interrupted') brings the sound back
 const onGesture=e=>{if(e.isTrusted===false||muted||paused)return;if(ac&&ac.state==='running'&&(AS||(tag&&!tag.paused)))return;unlock()};
 for(const t of ['touchend','pointerup','click','keydown'])document.addEventListener(t,onGesture,{capture:true,passive:true});
 function setMute(v,gesture=false){muted=!!v;if(!muted&&gesture)unlock();if(master)master.gain.setValueAtTime(muted?0:.22,ac.currentTime);if(muted){silence();session(false)}}
 const FX={hit:[46,40],jump:[67,74],beat:[76,79],award:[72,76,79,84,88],win:[72,76,79,84,88],travel:[60,64,67],water:[79,83],menu:[69],select:[76,81],move:[74],back:[69,62],fail:[52,48,43,36],buy:[79,84,91]};
 function fx(kind){if(!ac||muted||ac.state!=='running')return;const seq=FX[kind]||FX.menu,t=ac.currentTime+.01,d=kind==='move'?.045:.075;
  seq.forEach((n,i)=>note(1,n,t+i*d,d*.95,kind==='move'?.12:.2));if(kind==='hit'||kind==='jump'||kind==='fail')env(3,.1,t,.06);}
 function setTrack(name){if(!TR[name]||name===track)return;track=name;step=0;silence()}
 function suspend(){if(ac&&ac.state==='running'){silence();ac.suspend().catch(()=>{})}if(tag&&!tag.paused)tag.pause()}
 function resumeIfAllowed(){if(ac&&!muted&&!paused){if(tag&&tag.paused)session(true);if(ac.state!=='running')ac.resume().catch(()=>{})}}
 document.addEventListener('visibilitychange',()=>{if(document.hidden)suspend();else resumeIfAllowed()});
 addEventListener('pagehide',()=>{suspend()});addEventListener('pageshow',e=>{if(e.persisted)resumeIfAllowed()});
 return{setMute,fx,setTrack,pause:v=>{paused=!!v;if(paused)silence()},gesture:unlock,get active(){return !!ac&&ac.state==='running'},get muted(){return muted},get track(){return track},_ctx:()=>ac,_tag:()=>tag};
}
