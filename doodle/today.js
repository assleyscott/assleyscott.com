/* Doodle: Halloween 2026 (31 Oct). Cobweb on the first letter, a flickering jack-o'-lantern at the end of the name,
   candle-glow on the letters (CSS), a bat that flits out of the "o" in "Scott", and a spider that drops on a thread when you tap the pumpkin. */
Doodle.mount({id:'halloween',from:'2026-10-31',to:'2026-10-31',tip:'Happy Halloween · 31 October',
 build:function(api){
  var NS=true,L=api.layer,mk=api.el;
  /* cobweb draped over the A */
  var web=mk('svg','hw-web','<g fill="none" stroke="currentColor" stroke-linecap="round"><path d="M0 0 46 4M0 0 40 22M0 0 26 38M0 0 6 46M0 0 24 8.5M0 0 36 36" stroke-width=".7"/><path d="M13 1.2Q11 9 3 12.6M24 2.4Q20 16 5 24M35 3.5Q29 24 6 35.5M44 4.5Q36 32 7 45" stroke-width=".7"/></g><g transform="translate(26 21)"><ellipse rx="2.1" ry="2.6" fill="#16130F"/><circle cy="-3.2" r="1.3" fill="#16130F"/><path d="M-1.6-1.2-5-3.4M-1.9 0-5.6-.4M-1.8 1.2-5 3.6M1.6-1.2 5-3.4M1.9 0 5.6-.4M1.8 1.2 5 3.6" stroke="#16130F" stroke-width=".7" fill="none"/></g>',NS);
  web.setAttribute('viewBox','0 0 48 48');L.appendChild(web);
  /* jack-o'-lantern */
  var pk=mk('svg','hw-pk','<defs><radialGradient id="hwg" cx="50%" cy="42%" r="62%"><stop offset="0" stop-color="#FFB04A"/><stop offset=".7" stop-color="#F26A12"/><stop offset="1" stop-color="#C94A08"/></radialGradient></defs><ellipse cx="9" cy="17" rx="8" ry="6.6" fill="url(#hwg)" stroke="#16130F" stroke-width="1.3"/><ellipse cx="19" cy="17" rx="8" ry="6.6" fill="url(#hwg)" stroke="#16130F" stroke-width="1.3"/><ellipse cx="14" cy="17" rx="6" ry="7.4" fill="url(#hwg)" stroke="#16130F" stroke-width="1.3"/><path d="M14 9.6C14 7 14.6 5.2 16.4 3.6" fill="none" stroke="#2F6B3A" stroke-width="2.2" stroke-linecap="round"/><g class="hw-face"><path d="M9.2 14.2 12 14.2 10.6 11.8zM16 14.2 18.8 14.2 17.4 11.8z" fill="#FFE9A8"/><path d="M8.6 19.2 10.4 21.6 12 19.8 14 22 16 19.8 17.6 21.6 19.4 19.2Q14 17.2 8.6 19.2z" fill="#FFE9A8"/></g>',NS);
  pk.setAttribute('viewBox','0 0 28 26');L.appendChild(pk);
  function place(){var e=api.end(),s=api.size(),h=26;pk.style.left=(e.x+7)+'px';pk.style.top=(s.h/2-h/2+3)+'px';web.style.left='-7px';web.style.top='-8px'}
  api.onSync(place);place();
  /* bat that lives in the "o" of Scott */
  var bat=mk('div','hw-bat','<svg viewBox="0 0 30 16" width="26" height="14"><g class="wl"><path d="M15 9C12 3 7 2 1 5 3.2 6 4 7.2 4.2 8.6 6 7.6 7.6 7.8 8.8 9.4 10 8.4 12 8.6 15 9.6z" fill="#16130F"/></g><g class="wr"><path d="M15 9C18 3 23 2 29 5 26.8 6 26 7.2 25.8 8.6 24 7.6 22.4 7.8 21.2 9.4 20 8.4 18 8.6 15 9.6z" fill="#16130F"/></g><ellipse cx="15" cy="9.4" rx="2.3" ry="3.2" fill="#16130F"/><path d="M13.4 6.6 13.8 4.4 15 6.2 16.2 4.4 16.6 6.6z" fill="#16130F"/><circle cx="14.1" cy="8.6" r=".6" fill="#FF8A2A"/><circle cx="15.9" cy="8.6" r=".6" fill="#FF8A2A"/></svg>');
  L.appendChild(bat);var flying=false,idx=9; /* o in Scott */
  function home(){var l=api.letter(idx);return{x:l.x+l.w/2-13,y:l.y+l.h*.62-7}}
  function flit(){if(flying||api.rm)return;flying=true;var o=home(),s=api.size(),W=Math.max(120,Math.min(s.w+120,260)),H=s.h;
   function P(dx,dy,r,sx){return{transform:'translate('+(o.x+dx).toFixed(1)+'px,'+(o.y+dy).toFixed(1)+'px) rotate('+r+'deg) scale('+(sx||1)+')'}}
   var kf=[P(0,0,0,.3),P(4,-10,-14,1),P(30,-22,-8),P(70,-8,12),P(115,-26,-12),P(W*.62,-10,8),P(W*.86,-28,-10),P(W*.7,2,16,-1),P(W*.38,-22,-10,-1),P(70,-4,12,-1),P(22,-14,8,-1),P(2,-2,0,-.35)];
   kf.forEach(function(k,i){k.opacity=(i===0||i===kf.length-1)?0:1;k.offset=i/(kf.length-1)});
   bat.classList.add('fly');var a=api.animate(bat,kf,{duration:5200,easing:'linear'});
   function done(){bat.classList.remove('fly');bat.style.opacity=0;flying=false}
   if(a){a.onfinish=done;a.oncancel=done}else done()}
  var tm=0;function sched(){clearTimeout(tm);tm=setTimeout(function(){if(!document.hidden)flit();sched()},9000+Math.random()*9000)}
  if(!api.rm){setTimeout(flit,1800);sched()}
  /* spider on a thread (tap the pumpkin) */
  var sp=mk('div','hw-sp','<i class="th"></i><svg viewBox="0 0 20 20" width="15" height="15"><g stroke="#16130F" stroke-width="1.1" fill="none" stroke-linecap="round"><path d="M7 8 2 5.5 1 9M7 10 1.5 11 2.5 15M13 8 18 5.5 19 9M13 10l5.500 1L17.500 15M8 7 4.500 3M12 7l3.500-4"/></g><ellipse cx="10" cy="12" rx="4.600" ry="5" fill="#16130F"/><circle cx="10" cy="6.700" r="2.800" fill="#16130F"/><circle cx="9" cy="6.200" r=".7" fill="#FF8A2A"/><circle cx="11" cy="6.200" r=".7" fill="#FF8A2A"/></svg>');
  L.appendChild(sp);var dropping=false;
  function drop(){if(dropping)return;dropping=true;var e=api.end(),x=e.x+46,len=Math.max(30,api.size().h*.62+8);
   sp.style.left=x+'px';sp.style.top='-6px';sp.style.setProperty('--len',len+'px');
   if(api.rm){sp.classList.add('show');sp.style.setProperty('--y',len+'px');setTimeout(function(){sp.classList.remove('show');dropping=false},2600);return}
   sp.classList.add('show');var th=sp.querySelector('.th'),sv=sp.querySelector('svg');
   var o={duration:2900,easing:'cubic-bezier(.3,.8,.3,1)',fill:'forwards'};
   api.animate(th,[{transform:'scaleY(0)'},{transform:'scaleY(1)',offset:.28},{transform:'scaleY(.8)',offset:.4},{transform:'scaleY(1)',offset:.52},{transform:'scaleY(.93)',offset:.64},{transform:'scaleY(1)',offset:.74},{transform:'scaleY(0)'}],o);
   var a=api.animate(sv,[{transform:'translateY(0) rotate(0)'},{transform:'translateY('+len+'px) rotate(-6deg)',offset:.28},{transform:'translateY('+(len*.8)+'px) rotate(8deg)',offset:.4},{transform:'translateY('+len+'px) rotate(-5deg)',offset:.52},{transform:'translateY('+(len*.93)+'px) rotate(4deg)',offset:.64},{transform:'translateY('+len+'px) rotate(0)',offset:.74},{transform:'translateY(0) rotate(0)'}],o);
   function end(){sp.classList.remove('show');dropping=false}
   if(a)a.onfinish=end;else setTimeout(end,2900)}
  return{tap:function(){drop();if(!flying)setTimeout(flit,500)}}
 }});
