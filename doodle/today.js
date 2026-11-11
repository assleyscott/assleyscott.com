/* Doodle: Remembrance Day / Armistice Day 2026 (11 Nov). ONE small flat red poppy after the name, one gentle one-off fade. No letter effects. */
Doodle.mount({id:'remembrance',from:'2026-11-11',to:'2026-11-11',tip:'Remembrance Day \u00b7 11 November',
 build:function(api){
  var L=api.layer,p=api.el('svg','rd-poppy','<g fill="#C8102E"><circle cx="12" cy="7.2" r="4.6"/><circle cx="7.2" cy="11.6" r="4.6"/><circle cx="16.8" cy="11.6" r="4.6"/><circle cx="9.4" cy="16.6" r="4.6"/><circle cx="14.6" cy="16.6" r="4.6"/></g><circle cx="12" cy="12.3" r="2.6" fill="#16130F"/>',true);
  p.setAttribute('viewBox','0 0 24 24');L.appendChild(p);
  function place(){var e=api.end(),s=api.size(),h=22;p.style.left=(e.x+6)+'px';p.style.top=(s.h/2-h/2)+'px'}
  api.onSync(place);place();
  if(!api.rm)api.animate(p,[{opacity:0},{opacity:1}],{duration:900,easing:'ease-out',fill:'backwards',delay:280});
 }});
