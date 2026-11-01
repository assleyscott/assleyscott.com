/* Doodle: World Vegan Day 2026 (1 Nov). ONE small flat green leaf after the name, one gentle one-off settle. No letter effects. */
Doodle.mount({id:'vegan',from:'2026-11-01',to:'2026-11-01',tip:'World Vegan Day \u00b7 1 November',
 build:function(api){
  var L=api.layer,lf=api.el('svg','wv-leaf','<path d="M4 20C4 10.5 10 4 21 3.2 21.4 13.6 15 20 6.2 20.2" fill="#4E9A4A" stroke="#16130F" stroke-width="1.4" stroke-linejoin="round"/><path d="M4 20.6C8 15 12 11 17.2 7.4" fill="none" stroke="#16130F" stroke-opacity=".45" stroke-width="1.2" stroke-linecap="round"/>',true);
  lf.setAttribute('viewBox','0 0 24 24');L.appendChild(lf);
  function place(){var e=api.end(),s=api.size(),h=22;lf.style.left=(e.x+6)+'px';lf.style.top=(s.h/2-h/2+1)+'px'}
  api.onSync(place);place();
  if(!api.rm)api.animate(lf,[{transform:'rotate(-14deg)',opacity:0},{transform:'rotate(0deg)',opacity:1}],{duration:900,easing:'ease-out',fill:'backwards',delay:300});
 }});
