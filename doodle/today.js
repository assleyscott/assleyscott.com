/* Doodle: World Science Day for Peace and Development 2026 (10 Nov, UNESCO). ONE small flat flask after the name, one gentle one-off settle. No letter effects. */
Doodle.mount({id:'science-day',from:'2026-11-10',to:'2026-11-10',tip:'World Science Day \u00b7 10 November',
 build:function(api){
  var L=api.layer,fl=api.el('svg','sd-flask','<path d="M9.2 3.5h5.6M10 3.5v6.2L5.2 18.4a1.6 1.6 0 0 0 1.4 2.4h10.8a1.6 1.6 0 0 0 1.4-2.4L14 9.7V3.5" fill="none" stroke="#16130F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.6 14.6h8.8l2 3.8a.9.9 0 0 1-.8 1.4H6.4a.9.9 0 0 1-.8-1.4z" fill="#3FA7D6"/><circle cx="11" cy="16.9" r=".9" fill="#fff" opacity=".8"/><circle cx="13.6" cy="17.9" r=".6" fill="#fff" opacity=".7"/>',true);
  fl.setAttribute('viewBox','0 0 24 24');L.appendChild(fl);
  function place(){var e=api.end(),s=api.size(),h=22;fl.style.left=(e.x+6)+'px';fl.style.top=(s.h/2-h/2)+'px'}
  api.onSync(place);place();
  if(!api.rm)api.animate(fl,[{transform:'translateY(-4px)',opacity:0},{transform:'translateY(0)',opacity:1}],{duration:800,easing:'ease-out',fill:'backwards',delay:280});
 }});
