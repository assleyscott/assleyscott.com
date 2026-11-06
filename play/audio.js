// Four synthesizer voices: two pulse, one triangle, one noise. No context until opt-in.
export function makeAudio(){let ac=null,master=null,pulse=[],triangle=null,noise=null,gains=[],timer=null,step=0,muted=true,paused=false;
 const lead=[64,67,69,0,72,69,67,64,62,64,67,0,69,67,64,60,64,67,72,74,72,69,67,0,62,64,67,69,67,64,62,60];
 const hz=n=>440*Math.pow(2,(n-69)/12);
 function duty(d){const re=new Float32Array(33),im=new Float32Array(33);for(let n=1;n<33;n++){re[n]=Math.sin(2*Math.PI*n*d)/n;im[n]=(1-Math.cos(2*Math.PI*n*d))/n;}return ac.createPeriodicWave(re,im,{disableNormalization:false});}
 function init(){if(ac)return;ac=new(window.AudioContext||window.webkitAudioContext)();master=ac.createGain();master.gain.value=.20;master.connect(ac.destination);
  for(let i=0;i<4;i++){const g=ac.createGain();g.gain.value=0;g.connect(master);gains.push(g);}for(let i=0;i<2;i++){const o=ac.createOscillator();o.setPeriodicWave(duty(i?.125:.25));o.connect(gains[i]);o.start();pulse.push(o);}triangle=ac.createOscillator();triangle.type='triangle';triangle.connect(gains[2]);triangle.start();const buf=ac.createBuffer(1,ac.sampleRate,ac.sampleRate),a=buf.getChannelData(0);let seed=0x1234;for(let i=0;i<a.length;i++){seed=(seed>>>1)|(((seed^(seed>>>1))&1)<<14);a[i]=(seed&1)?1:-1;}noise=ac.createBufferSource();noise.buffer=buf;noise.loop=true;noise.connect(gains[3]);noise.start();timer=setInterval(tick,125);}
 function envelope(ch,value,dur){if(!ac||muted)return;const t=ac.currentTime,g=gains[ch].gain;g.cancelScheduledValues(t);g.setValueAtTime(value,t);g.setValueAtTime(value*.65,t+.03);g.setValueAtTime(0,t+dur);}
 function note(ch,n,dur=.10,vol=.24){if(!ac||muted)return;(ch<2?pulse[ch]:triangle).frequency.setValueAtTime(hz(n),ac.currentTime);envelope(ch,vol,dur);}
 function tick(){if(muted||paused||!ac)return;const n=lead[step%32];if(n)note(0,n,.10,.24);if(step%2===0)note(1,[60,57,53,55][Math.floor(step/8)%4]+(step%8===4?7:0),.11,.12);if(step%4===0)note(2,[48,45,41,43][Math.floor(step/8)%4],.22,.36);envelope(3,step%4===2?.08:.022,step%4===2?.06:.015);step++;}
 function setMute(v,gesture=false){muted=v;if(!v&&gesture){init();ac.resume();}if(master)master.gain.value=v?0:.20;}
 function fx(kind){if(!ac||muted)return;const seq={hit:[46,40],jump:[67,74],beat:[76,79],award:[72,76,79,84],travel:[60,64,67],water:[79,83],menu:[69],fail:[48,43,36]};(seq[kind]||seq.menu).forEach((n,i)=>setTimeout(()=>note(1,n,.075,.22),i*75));if(kind==='hit'||kind==='jump')envelope(3,.08,.05);}
 return{setMute,fx,pause:v=>paused=v,gesture:()=>{if(!muted){init();ac.resume();}},get active(){return !!ac;}};
}
