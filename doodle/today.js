/* Doodle: Bittersweet Chocolate with Almonds Day 2026 (7 Nov). ONE small flat chocolate almond after the name, one gentle one-off settle. No letter effects. */
Doodle.mount({id:'choc-almond',from:'2026-11-07',to:'2026-11-07',tip:'Bittersweet Chocolate with Almonds Day \u00b7 7 November',
 build:function(api){
  var L=api.layer,al=api.el('svg','ca-almond','<ellipse cx="12" cy="12" rx="8.2" ry="5.4" transform="rotate(-28 12 12)" fill="#3D2314" stroke="#16130F" stroke-width="1.4"/><ellipse cx="12" cy="12" rx="5.6" ry="3.4" transform="rotate(-28 12 12)" fill="#5C3A22"/><ellipse cx="10.2" cy="10.4" rx="2.2" ry="1.1" transform="rotate(-28 12 12)" fill="#8B6340" opacity=".55"/>',true);
  al.setAttribute('viewBox','0 0 24 24');L.appendChild(al);
  function place(){var e=api.end(),s=api.size(),h=22;al.style.left=(e.x+6)+'px';al.style.top=(s.h/2-h/2+1)+'px'}
  api.onSync(place);place();
  if(!api.rm)api.animate(al,[{transform:'translateY(-4px)',opacity:0},{transform:'translateY(0)',opacity:1}],{duration:800,easing:'ease-out',fill:'backwards',delay:280});
 }});
