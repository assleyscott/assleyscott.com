/* Doodle: World Kindness Day (13 November). ONE small flat red heart after the name, one gentle one-off fade. No letter effects. */
Doodle.mount({id:'kindness',from:'2026-11-13',to:'2026-11-13',tip:'World Kindness Day \u00b7 13 November',
 build:function(api){
  var L=api.layer,p=api.el('svg','wk-heart','<path d="M12 20.5s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.6a4.3 4.3 0 0 1 7.5 2.7c0 5.6-7.5 10.2-7.5 10.2z" fill="#D94B5A"/>',true);
  p.setAttribute('viewBox','0 0 24 24');L.appendChild(p);
  function place(){var e=api.end(),s=api.size(),h=20;p.style.left=(e.x+6)+'px';p.style.top=(s.h/2-h/2)+'px'}
  api.onSync(place);place();
  if(!api.rm)api.animate(p,[{opacity:0},{opacity:1}],{duration:900,easing:'ease-out',fill:'backwards',delay:280});
 }});
