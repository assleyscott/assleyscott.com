/* Doodle: Auguste Rodin's birthday (born 12 Nov 1840). ONE small flat bronze sculptor's chisel after the name, one gentle one-off fade. No letter effects. */
Doodle.mount({id:'rodin',from:'2026-11-12',to:'2026-11-12',tip:'Auguste Rodin\u2019s birthday \u00b7 12 November 1840',
 build:function(api){
  var L=api.layer,p=api.el('svg','rb-chisel','<g transform="rotate(-40 12 12)"><rect x="10" y="1.5" width="4" height="10" rx="1.6" fill="#8A5A2B"/><rect x="9.6" y="11" width="4.8" height="1.8" rx=".5" fill="#B08D57"/><path d="M10.6 12.8h2.8v6.4l-1.4 3.3-1.4-3.3z" fill="#C9A86A"/></g>',true);
  p.setAttribute('viewBox','0 0 24 24');L.appendChild(p);
  function place(){var e=api.end(),s=api.size(),h=22;p.style.left=(e.x+6)+'px';p.style.top=(s.h/2-h/2)+'px'}
  api.onSync(place);place();
  if(!api.rm)api.animate(p,[{opacity:0},{opacity:1}],{duration:900,easing:'ease-out',fill:'backwards',delay:280});
 }});
