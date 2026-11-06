import {C} from './graphics.js';
// All sprites are assembled on 8/16-pixel grids, with three visible colours + transparency.
function grid(w,h,paint){const a=Array.from({length:h},()=>Array(w).fill(0));const r=(x,y,ww,hh,c)=>{for(let j=y;j<y+hh;j++)for(let i=x;i<x+ww;i++)if(a[j]&&i>=0&&i<w)a[j][i]=c;};paint(r);return a;}
function outline(a){const b=a.map(r=>[...r]);for(let y=0;y<a.length;y++)for(let x=0;x<a[0].length;x++)if(!a[y][x]&&[[1,0],[-1,0],[0,1],[0,-1]].some(([u,v])=>a[y+v]?.[x+u]>1))b[y][x]=1;return b.map(r=>r.join(''));}
const dogs={};
function dogFrame(pose,ph){const key=pose+ph;if(dogs[key])return dogs[key];let a=grid(32,24,r=>{r(5,10,17,7,2);r(8,15,12,3,3);r(2,7,5,3,2);r(2,6,3,2,2);r(1,7,2,5,2);r(3,10,4,3,2);r(20,5,8,9,2);r(20,2,3,5,2);r(26,2,2,4,2);r(22,4,1,2,3);r(26,9,5,5,3);r(23,10,6,5,3);r(24,7,1,2,1);r(30,9,1,2,1);r(28,13,3,1,1);
 if(pose==='swim'){r(7,17,6,2,2);r(9+(ph%2)*3,19,5,2,3);r(20,17,7,2,2);r(22-(ph%2)*2,19,5,2,3);}else if(pose==='cycle'){r(6,17,9,2,2);r(9+(ph%2)*2,19,4,2,3);r(20,17,6,2,2);r(22-(ph%2)*2,19,4,2,3);}else if(pose==='idle'){r(5,14,9,7,2);r(6,20,10,2,3);r(20,16,3,6,2);r(20,21,5,1,3);}else if(pose==='jump'||pose==='celebrate'){r(6,17,6,2,2);r(4,19,5,2,3);r(21,17,5,2,2);r(24,19,5,2,3);r(29,14,2,2,2);}else{const p=ph%4;r(7+(p<2?0:2),17,3,p%2?3:5,2);r(6+(p<2?0:2),p%2?20:22,5,1,3);r(20+(p<2?2:0),17,3,p%2?5:3,2);r(20+(p<2?2:0),p%2?22:20,5,1,3);}});return dogs[key]=outline(a);}
const PLANE=outline(grid(32,16,r=>{r(2,7,27,3,3);r(3,3,3,5,2);r(11,2,4,7,3);r(15,10,9,2,3);r(26,5,2,2,2);r(29,4,1,9,1);r(6,14,21,1,2);r(10,10,1,4,1);r(23,10,1,4,1);r(20,6,5,2,1);}));
const BOAT=outline(grid(32,16,r=>{r(2,9,28,3,2);r(4,12,24,2,2);r(7,14,18,1,2);r(8,5,18,4,3);r(14,2,8,3,3);r(3,11,27,1,3);for(let i=0;i<4;i++)r(10+i*4,6,2,2,1);r(4,1,1,8,1);r(2,1,5,2,3);}));
const BIRD=['00000000','00000000','00000000','11001100','00110000','00000000','00000000','00000000'];
const CLOUD=['0001111111000000','0011111111110000','0111111111111100','1111111111111111','1111111111111111','0000000000000000','0000000000000000','0000000000000000'];
const HOUSE=outline(grid(16,16,r=>{for(let j=0;j<6;j++)r(7-j,j,2+j*2,1,2);r(2,6,12,9,3);r(7,10,3,5,1);r(4,9,2,3,1);r(11,9,2,3,1);}));
const LONGHOUSE=outline(grid(32,24,r=>{for(let j=0;j<9;j++)r(15-j*2,j+2,2+j*4,1,3);r(3,11,26,11,2);r(14,14,5,8,1);for(let i=0;i<6;i++)r(3+i*5,12,1,10,1);r(5,16,3,2,3);r(24,16,3,2,3);}));
const MANOR=outline(grid(32,24,r=>{r(2,7,28,15,3);r(5,3,22,5,2);r(3,4,4,4,2);r(25,4,4,4,2);r(14,15,5,7,1);for(let i=0;i<5;i++)for(let j=0;j<2;j++)r(5+i*5,10+j*6,2,3,1);}));
const FORT=outline(grid(32,24,r=>{r(1,8,30,14,2);for(let i=0;i<6;i++)r(1+i*5,4,3,5,3);r(2,10,28,2,3);for(let i=0;i<6;i++)r(3+i*5,13,1,3,1);r(13,16,7,6,1);r(15,13,3,4,1);}));
export function makeArt(g){const {R,text,line,sprite,tri,tile,box}=g;
 function dog(x,y,pose='run',frame=0,scale=1,flip=false){sprite(dogFrame(pose,frame),[0,0,34,48],Math.round(x),Math.round(y)+(pose==='celebrate'?frame%2:0),scale,flip);}
 function plane(x,y){sprite(PLANE,[0,0,21,27],x,y);}
 function vessel(x,y,light=true){sprite(BOAT,[0,0,light?20:14,48],x,y);}
 function pine(x,y,size=1){R(x+7*size,y+12*size,2*size,8*size,9);for(let i=0;i<3;i++)tri(x+i*2*size,y+(2-i)*4*size,(16-i*4)*size,8*size,i%2?24:10);}
 function building(x,y,w,h,color=13){R(x,y-h,w,h,color);R(x+1,y-h+1,w-2,1,1);for(let j=4;j<h-2;j+=6)for(let i=2;i<w-1;i+=4)if((i+j+w)%3)R(x+i,y-h+j,1,2,49);}
 function cloud(x,y,color=42){sprite(CLOUD,[0,color],x,y);}
 function bird(x,y){sprite(BIRD,[0,48],x,y);}
 function terrain(y,w,h,kind='grass'){const pal=kind==='grass'?[0,10,24,37]:kind==='desert'?[0,22,34,49]:[0,9,21,22];for(let j=y;j<h;j+=8)for(let i=0;i<w;i+=8)tile(kind==='desert'?'dirt':kind==='grass'?'grass':'dirt',i,j,pal);}
 function water(y,w,h,frame,night=false){for(let j=y;j<h;j+=8)for(let i=0;i<w;i+=8)tile('water',i,j,night?[0,0,13,3]:[0,13,26,28],frame);}
 function bridge(x,y){for(const z of [0,32]){R(x+z,y-24,8,24,14);R(x+z-1,y-26,10,3,48);tri(x+z-1,y-34,10,8,3);R(x+z+3,y-18,2,5,13);}line(x+3,y-22,x+20,y-8,48);line(x+20,y-8,x+35,y-22,48);R(x-4,y-4,48,4,14);R(x+6,y-24,28,2,27);}
 function manor(x,y){sprite(MANOR,[0,0,1,48],x,y);}
 function place(i,x,y,frame,visited,selected,night=false){const px=x-28,py=y-12;
  // 8x8 terrain and shallow-water tiles. Every location is a different little tilemap.
  for(let row=0;row<3;row++)for(let col=0;col<7;col++){if((row===0||row===2)&&(col===0||col===6))continue;tile('grass',px+col*8,py+16+row*8,night?[0,9,12,10]:[0,9,10,37]);}
  for(let j=0;j<4;j++)R(px+6+j*14,py+39+(j%2),8,1,26);
  if(i===0){for(let j=0;j<5;j++)building(px+6+j*9,py+20,8,8+(j%3)*8,13);tri(px+38,py-8,8,26,14);R(px+41,py-4,1,22,48);bridge(px+7,py+32);}
  if(i===1){tri(px+1,py-13,32,32,13);tri(px+23,py-9,32,24,26);tri(px+11,py-13,12,12,48);sprite(HOUSE,[0,0,9,48],px+29,py+9);R(px+4,py+24,27,8,26);R(px+7+(frame%2)*4,py+27,12,1,28);pine(px+48,py+13);plane(px+4,py+26);}
  if(i===2){pine(px+2,py+5);pine(px+43,py+2);sprite(HOUSE,[0,0,21,48],px+25,py+7);for(let j=0;j<4;j++)tile('wood',px+22,py+22+j*4,[0,9,22,48]);vessel(px-2,py+23);vessel(px+33,py+25,false);}
  if(i===3){sprite(FORT,[0,0,14,48],px+13,py+1);R(px+28,py-3,1,7,48);R(px+29,py-3,10,4,20);}
  if(i===4){sprite(LONGHOUSE,[0,0,9,49],px+13,py+3);R(px+37,py-1,3,8,9);R(px+38+(frame%2),py-6-(frame%3),3,3,1);R(px+42,py-12-(frame%2),2,2,14);pine(px-1,py+10);}
  if(i===5){R(px+3,py+15,50,16,13);bridge(px+9,py+32);R(px+2,py+29,54,3,22);for(let j=0;j<3;j++){R(px+7+j*20,py+21,2,14,48);vessel(px-4+j*19,py+19+j%2*4,j%2===0);}}
  if(i===6){for(let j=0;j<4;j++)line(px+2,py+20+j*5,px+51,py+13+j*5,37);manor(px+13,py+1);pine(px-1,py+7);pine(px+45,py+6);R(px+28,py+27,3,9,48);}
  if(i===7){for(let j=0;j<3;j++){tri(px+3+j*19,py+9,18,16,34);tri(px+8+j*19,py+15,8,10,9);}pine(px+44,py-1);R(px+25,py+28,6,3,9);R(px+27,py+24+(frame%2),2,5,20);}
  if(selected){for(const a of [-1,1]){line(x+a*32,y-26,x+a*32,y-21,49);line(x+a*32,y-26,x+a*27,y-26,49);}}if(visited)text('*',x+25,y+29,49);
 }
 function crowd(x,y,frame=0){for(let i=0;i<5;i++){const xx=x+i*7;R(xx+2,y,3,3,48);R(xx+1,y+3,5,4,20);R(xx+1,y+7,2,2,0);R(xx+4,y+7,2,2,0);if(i%2===frame%2){R(xx-1,y+1,2,3,48);R(xx+6,y+1,2,3,48);}}}
 function gantry(x,y,label='START'){R(x,y-29,3,29,48);R(x+45,y-29,3,29,48);R(x-2,y-32,52,11,0);R(x-2,y-32,52,2,20);text(label,x+24,y-28,27,1,'center');for(let i=0;i<12;i++)R(x+i*4,y,3,2,i%2?27:0);}
 function companion(index,x,y,frame=0){if(index===2){const bird=outline(grid(16,16,r=>{r(6,2,5,6,2);r(9,4,4,3,3);r(6,8,4,6,2);r(3,6,3,6,3);r(1,9,3,4,2);r(7,4,1,1,1);r(8,13,1,3,1);r(9,14,3,1,3);}));sprite(bird,[0,0,15,49],x,y);}else if(index<2){const rows=outline(grid(24,16,r=>{r(3,6,index===0?13:15,6,2);r(15,2,index===0?5:7,7,2);r(19,6,4,4,3);r(15,1,3,3,2);r(18,4,1,1,1);for(const xx of [5,15])r(xx,11,2,index===0?5:4,2);r(1,3,2,6,2);}));sprite(rows,[0,0,index===0?14:9,48],x,y);}else{const paw=['0011001100110000','0033003300330000','0011001100110000','0000000000000000','0000111111000000','0001333333100000','0013333333310000','0013333333310000','0001111111100000'];sprite(paw,[0,0,20,[49,42,29,38,32,14,34,27][(index-3)%8]],x,y+3);}}
 return{dog,plane,vessel,pine,building,cloud,bird,terrain,water,bridge,manor,place,crowd,gantry,companion};
}
