/* Doodle: Halloween 2026 (31 Oct). ONE small, static, flat pumpkin after the name. Nothing else: no effects on the letters, no web, no bat, no glow. */
Doodle.mount({id:'halloween',from:'2026-10-31',to:'2026-10-31',tip:'Happy Halloween \u00b7 31 October',
 build:function(api){
  var L=api.layer,pk=api.el('svg','hw-pk','<path d="M12 6.4C12 4.6 12.6 3.4 14 2.4" fill="none" stroke="#3C6B3F" stroke-width="2" stroke-linecap="round"/><path d="M12 6.2C5 4.8 1 8.6 1 13.4 1 18.6 5.6 21.8 12 21.8S23 18.6 23 13.4C23 8.6 19 4.8 12 6.2z" fill="#F07A1A" stroke="#16130F" stroke-width="1.4" stroke-linejoin="round"/><path d="M12 6.4C9.4 9 9.4 18 12 21.4M12 6.4C14.6 9 14.6 18 12 21.4" fill="none" stroke="#16130F" stroke-opacity=".28" stroke-width="1"/><path d="M7.8 12.4 9.6 14.4 7.4 14.4zM16.2 12.4 17.9 14.4 15.7 14.4z" fill="#16130F"/><path d="M8.4 17.4Q12 19.6 15.6 17.4" fill="none" stroke="#16130F" stroke-width="1.2" stroke-linecap="round"/>',true);
  pk.setAttribute('viewBox','0 0 24 24');L.appendChild(pk);
  function place(){var e=api.end(),s=api.size(),h=22;pk.style.left=(e.x+6)+'px';pk.style.top=(s.h/2-h/2+2)+'px'}
  api.onSync(place);place();
 }});
