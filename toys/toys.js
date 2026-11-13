var Vc=0,nl=1,Hc=2;var Qs=1,Wc=2,ls=3,Ln=0,ke=1,Fe=2,Ai=0,cs=1,il=2,sl=3,rl=4,Xc=5;var Ei=100,qc=101,Yc=102,Zc=103,Jc=104,Kc=200,$c=201,Qc=202,jc=203,al=204,ol=205,th=206,eh=207,nh=208,ih=209,sh=210,rh=211,ah=212,oh=213,lh=214,zr=0,kr=1,Gr=2,Ki=3,Vr=4,Hr=5,Wr=6,Xr=7,ll=0,ch=1,hh=2,Dn=0,cl=1,hl=2,ul=3,dl=4,fl=5,pl=6,ml=7;var gl=300,Ri=301,hs=302,Sa=303,ba=304,qr=1e3,An=1001,Yr=1002,Ue=1003,uh=1004;var js=1005;var Je=1006,wa=1007;var Jn=1008;var Qe=1009,_l=1010,xl=1011,us=1012,Ta=1013,vn=1014,Mn=1015,Sn=1016,Aa=1017,Ea=1018,Ci=1020,yl=35902,vl=35899,Ml=1021,Sl=1022,bn=1023,Xn=1026,Kn=1027,bl=1028,Ra=1029,mi=1030,Ca=1031;var Ia=1033,tr=33776,er=33777,nr=33778,ir=33779,Pa=35840,La=35841,Da=35842,Na=35843,Ua=36196,Fa=37492,Oa=37496,Ba=37488,za=37489,sr=37490,ka=37491,Ga=37808,Va=37809,Ha=37810,Wa=37811,Xa=37812,qa=37813,Ya=37814,Za=37815,Ja=37816,Ka=37817,$a=37818,Qa=37819,ja=37820,to=37821,eo=36492,no=36494,io=36495,so=36283,ro=36284,rr=36285,ao=36286;var Ts=2300,Zr=2301,Or=2302,Xo=2303,qo=2400,Yo=2401,Zo=2402;var dh=3200;var oo=0,fh=1,$n="",Ne="srgb",As="srgb-linear",Es="linear",ue="srgb";var Br=7680;var ph=519,mh=512,gh=513,_h=514,wl=515,xh=516,yh=517,Tl=518,Al=519,vh=35044;var El="300 es",ln=2e3,$i=2001;function Fu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Ou(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Rs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Mh(){let n=Rs("canvas");return n.style.display="block",n}var dc={},Qi=null;function Rl(...n){let t="THREE."+n.shift();Qi?Qi("log",t,...n):console.log(t,...n)}function Sh(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ot(...n){n=Sh(n);let t="THREE."+n.shift();if(Qi)Qi("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Bt(...n){n=Sh(n);let t="THREE."+n.shift();if(Qi)Qi("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function wi(...n){let t=n.join(" ");t in dc||(dc[t]=!0,Ot(...n))}function bh(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var wh={[zr]:zr,[Gr]:Wr,[Vr]:Vr,[Ki]:Hr,[kr]:kr,[Wr]:Gr,[Xr]:Xr,[Hr]:Ki},Rn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fc=1234567,Ms=Math.PI/180,ji=180/Math.PI;function Ii(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]).toLowerCase()}function Jt(n,t,e){return Math.max(t,Math.min(e,n))}function Cl(n,t){return(n%t+t)%t}function Bu(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function zu(n,t,e){return n!==t?(e-n)/(t-n):0}function Ss(n,t,e){return(1-e)*n+e*t}function ku(n,t,e,i){return Ss(n,t,1-Math.exp(-e*i))}function Gu(n,t=1){return t-Math.abs(Cl(n,t*2)-t)}function Vu(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Hu(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Wu(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Xu(n,t){return n+Math.random()*(t-n)}function qu(n){return n*(.5-Math.random())}function Yu(n){n!==void 0&&(fc=n);let t=fc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Zu(n){return n*Ms}function Ju(n){return n*ji}function Ku(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function $u(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Il(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Qu(n,t,e,i,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),h=a((t+i)/2),p=r((t-i)/2),f=a((t-i)/2),d=r((i-t)/2),_=a((i-t)/2);switch(s){case"XYX":n.set(o*h,l*p,l*f,o*c);break;case"YZY":n.set(l*f,o*h,l*p,o*c);break;case"ZXZ":n.set(l*p,l*f,o*h,o*c);break;case"XZX":n.set(o*h,l*_,l*d,o*c);break;case"YXY":n.set(l*d,o*h,l*_,o*c);break;case"ZYZ":n.set(l*_,l*d,o*h,o*c);break;default:Ot("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Pl(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Th(n,t){if(t.constructor===Float32Array)return n;let e=Pl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function Ah(n,t){if(t.constructor===Float32Array)return n;let e=Pl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var Ll={DEG2RAD:Ms,RAD2DEG:ji,generateUUID:Ii,clamp:Jt,euclideanModulo:Cl,mapLinear:Bu,inverseLerp:zu,lerp:Ss,damp:ku,pingpong:Gu,smoothstep:Vu,smootherstep:Hu,randInt:Wu,randFloat:Xu,randFloatSpread:qu,seededRandom:Yu,degToRad:Zu,radToDeg:Ju,isPowerOfTwo:Ku,ceilPowerOfTwo:$u,floorPowerOfTwo:Il,setQuaternionFromProperEuler:Qu,normalize:Ah,denormalize:Th},rt=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Cn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],p=i[s+3],f=r[a+0],d=r[a+1],_=r[a+2],y=r[a+3];if(p!==y||l!==f||c!==d||h!==_){let m=l*f+c*d+h*_+p*y;m<0&&(f=-f,d=-d,_=-_,y=-y,m=-m);let u=1-o;if(m<.9995){let g=Math.acos(m),S=Math.sin(g);u=Math.sin(u*g)/S,o=Math.sin(o*g)/S,l=l*u+f*o,c=c*u+d*o,h=h*u+_*o,p=p*u+y*o}else{l=l*u+f*o,c=c*u+d*o,h=h*u+_*o,p=p*u+y*o;let g=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=g,c*=g,h*=g,p*=g}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=p}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],p=r[a],f=r[a+1],d=r[a+2],_=r[a+3];return t[e]=o*_+h*p+l*d-c*f,t[e+1]=l*_+h*f+c*p-o*d,t[e+2]=c*_+h*d+o*f-l*p,t[e+3]=h*_-o*p-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),p=o(r/2),f=l(i/2),d=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=f*h*p+c*d*_,this._y=c*d*p-f*h*_,this._z=c*h*_+f*d*p,this._w=c*h*p-f*d*_;break;case"YXZ":this._x=f*h*p+c*d*_,this._y=c*d*p-f*h*_,this._z=c*h*_-f*d*p,this._w=c*h*p+f*d*_;break;case"ZXY":this._x=f*h*p-c*d*_,this._y=c*d*p+f*h*_,this._z=c*h*_+f*d*p,this._w=c*h*p-f*d*_;break;case"ZYX":this._x=f*h*p-c*d*_,this._y=c*d*p+f*h*_,this._z=c*h*_-f*d*p,this._w=c*h*p+f*d*_;break;case"YZX":this._x=f*h*p+c*d*_,this._y=c*d*p+f*h*_,this._z=c*h*_-f*d*p,this._w=c*h*p-f*d*_;break;case"XZY":this._x=f*h*p-c*d*_,this._y=c*d*p-f*h*_,this._z=c*h*_+f*d*p,this._w=c*h*p+f*d*_;break;default:Ot("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],p=e[10],f=i+o+p;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>p){let d=2*Math.sqrt(1+i-o-p);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>p){let d=2*Math.sqrt(1+o-i-p);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+p-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(pc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(pc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*e-r*s),p=2*(r*i-a*e);return this.x=e+l*c+a*p-o*h,this.y=i+l*h+o*c-r*p,this.z=s+l*p+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return So.copy(this).projectOnVector(t),this.sub(So)}reflect(t){return this.sub(So.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},So=new U,pc=new Cn,Gt=class{static{this.prototype.isMatrix3=!0}constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],p=i[7],f=i[2],d=i[5],_=i[8],y=s[0],m=s[3],u=s[6],g=s[1],S=s[4],v=s[7],T=s[2],A=s[5],x=s[8];return r[0]=a*y+o*g+l*T,r[3]=a*m+o*S+l*A,r[6]=a*u+o*v+l*x,r[1]=c*y+h*g+p*T,r[4]=c*m+h*S+p*A,r[7]=c*u+h*v+p*x,r[2]=f*y+d*g+_*T,r[5]=f*m+d*S+_*A,r[8]=f*u+d*v+_*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=h*a-o*c,f=o*l-h*r,d=c*r-a*l,_=e*p+i*f+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/_;return t[0]=p*y,t[1]=(s*c-h*i)*y,t[2]=(o*i-s*a)*y,t[3]=f*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=d*y,t[7]=(i*l-c*e)*y,t[8]=(a*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return wi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(bo.makeScale(t,e)),this}rotate(t){return wi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(bo.makeRotation(-t)),this}translate(t,e){return wi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(bo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},bo=new Gt,mc=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gc=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ju(){let n={enabled:!0,workingColorSpace:As,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ue&&(s.r=Wn(s.r),s.g=Wn(s.g),s.b=Wn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ue&&(s.r=Ji(s.r),s.g=Ji(s.g),s.b=Ji(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$n?Es:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[As]:{primaries:t,whitePoint:i,transfer:Es,toXYZ:mc,fromXYZ:gc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:t,whitePoint:i,transfer:ue,toXYZ:mc,fromXYZ:gc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}}),n}var se=ju();function Wn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ji(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Fi,Jr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Fi===void 0&&(Fi=Rs("canvas")),Fi.width=t.width,Fi.height=t.height;let s=Fi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Fi}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Rs("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Wn(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Wn(e[i]/255)*255):e[i]=Wn(e[i]);return{data:e,width:t.width,height:t.height}}else return Ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},td=0,ts=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=Ii(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(wo(s[a].image)):r.push(wo(s[a]))}else r=wo(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function wo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Jr.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ot("Texture: Unable to serialize Texture."),{})}var ed=0,To=new U,Ke=class n extends Rn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=An,s=An,r=Je,a=Jn,o=bn,l=Qe,c=n.DEFAULT_ANISOTROPY,h=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=Ii(),this.name="",this.source=new ts(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(To).x}get height(){return this.source.getSize(To).y}get depth(){return this.source.getSize(To).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Ot(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ot(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qr:t.x=t.x-Math.floor(t.x);break;case An:t.x=t.x<0?0:1;break;case Yr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qr:t.y=t.y-Math.floor(t.y);break;case An:t.y=t.y<0?0:1;break;case Yr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=gl;Ke.DEFAULT_ANISOTROPY=1;var ve=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],p=l[8],f=l[1],d=l[5],_=l[9],y=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(p-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(p+y)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,v=(d+1)/2,T=(u+1)/2,A=(h+f)/4,x=(p+y)/4,M=(_+m)/4;return S>v&&S>T?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=A/i,r=x/i):v>T?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=A/s,r=M/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=x/r,s=M/r),this.set(i,s,r,e),this}let g=Math.sqrt((m-_)*(m-_)+(p-y)*(p-y)+(f-h)*(f-h));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(p-y)/g,this.z=(f-h)/g,this.w=Math.acos((c+d+u-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this.w=Jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this.w=Jt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Kr=class extends Rn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Je,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Ke({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Je,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ts(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},en=class extends Kr{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Cs=class extends Ke{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var $r=class extends Ke{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ye=class n{static{this.prototype.isMatrix4=!0}constructor(t,e,i,s,r,a,o,l,c,h,p,f,d,_,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,h,p,f,d,_,y,m)}set(t,e,i,s,r,a,o,l,c,h,p,f,d,_,y,m){let u=this.elements;return u[0]=t,u[4]=e,u[8]=i,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=p,u[14]=f,u[3]=d,u[7]=_,u[11]=y,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Oi.setFromMatrixColumn(t,0).length(),r=1/Oi.setFromMatrixColumn(t,1).length(),a=1/Oi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let f=a*h,d=a*p,_=o*h,y=o*p;e[0]=l*h,e[4]=-l*p,e[8]=c,e[1]=d+_*c,e[5]=f-y*c,e[9]=-o*l,e[2]=y-f*c,e[6]=_+d*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,d=l*p,_=c*h,y=c*p;e[0]=f+y*o,e[4]=_*o-d,e[8]=a*c,e[1]=a*p,e[5]=a*h,e[9]=-o,e[2]=d*o-_,e[6]=y+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,d=l*p,_=c*h,y=c*p;e[0]=f-y*o,e[4]=-a*p,e[8]=_+d*o,e[1]=d+_*o,e[5]=a*h,e[9]=y-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,d=a*p,_=o*h,y=o*p;e[0]=l*h,e[4]=_*c-d,e[8]=f*c+y,e[1]=l*p,e[5]=y*c+f,e[9]=d*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,d=a*c,_=o*l,y=o*c;e[0]=l*h,e[4]=y-f*p,e[8]=_*p+d,e[1]=p,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*p+_,e[10]=f-y*p}else if(t.order==="XZY"){let f=a*l,d=a*c,_=o*l,y=o*c;e[0]=l*h,e[4]=-p,e[8]=c*h,e[1]=f*p+y,e[5]=a*h,e[9]=d*p-_,e[2]=_*p-d,e[6]=o*h,e[10]=y*p+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(nd,t,id)}lookAt(t,e,i){let s=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),ti.crossVectors(i,je),ti.lengthSq()===0&&(Math.abs(i.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),ti.crossVectors(i,je)),ti.normalize(),mr.crossVectors(je,ti),s[0]=ti.x,s[4]=mr.x,s[8]=je.x,s[1]=ti.y,s[5]=mr.y,s[9]=je.y,s[2]=ti.z,s[6]=mr.z,s[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],p=i[5],f=i[9],d=i[13],_=i[2],y=i[6],m=i[10],u=i[14],g=i[3],S=i[7],v=i[11],T=i[15],A=s[0],x=s[4],M=s[8],I=s[12],R=s[1],P=s[5],F=s[9],H=s[13],C=s[2],z=s[6],W=s[10],V=s[14],et=s[3],O=s[7],X=s[11],q=s[15];return r[0]=a*A+o*R+l*C+c*et,r[4]=a*x+o*P+l*z+c*O,r[8]=a*M+o*F+l*W+c*X,r[12]=a*I+o*H+l*V+c*q,r[1]=h*A+p*R+f*C+d*et,r[5]=h*x+p*P+f*z+d*O,r[9]=h*M+p*F+f*W+d*X,r[13]=h*I+p*H+f*V+d*q,r[2]=_*A+y*R+m*C+u*et,r[6]=_*x+y*P+m*z+u*O,r[10]=_*M+y*F+m*W+u*X,r[14]=_*I+y*H+m*V+u*q,r[3]=g*A+S*R+v*C+T*et,r[7]=g*x+S*P+v*z+T*O,r[11]=g*M+S*F+v*W+T*X,r[15]=g*I+S*H+v*V+T*q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],p=t[6],f=t[10],d=t[14],_=t[3],y=t[7],m=t[11],u=t[15],g=l*d-c*f,S=o*d-c*p,v=o*f-l*p,T=a*d-c*h,A=a*f-l*h,x=a*p-o*h;return e*(y*g-m*S+u*v)-i*(_*g-m*T+u*A)+s*(_*S-y*T+u*x)-r*(_*v-y*A+m*x)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=t[9],f=t[10],d=t[11],_=t[12],y=t[13],m=t[14],u=t[15],g=e*o-i*a,S=e*l-s*a,v=e*c-r*a,T=i*l-s*o,A=i*c-r*o,x=s*c-r*l,M=h*y-p*_,I=h*m-f*_,R=h*u-d*_,P=p*m-f*y,F=p*u-d*y,H=f*u-d*m,C=g*H-S*F+v*P+T*R-A*I+x*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/C;return t[0]=(o*H-l*F+c*P)*z,t[1]=(s*F-i*H-r*P)*z,t[2]=(y*x-m*A+u*T)*z,t[3]=(f*A-p*x-d*T)*z,t[4]=(l*R-a*H-c*I)*z,t[5]=(e*H-s*R+r*I)*z,t[6]=(m*v-_*x-u*S)*z,t[7]=(h*x-f*v+d*S)*z,t[8]=(a*F-o*R+c*M)*z,t[9]=(i*R-e*F-r*M)*z,t[10]=(_*A-y*v+u*g)*z,t[11]=(p*v-h*A-d*g)*z,t[12]=(o*I-a*P-l*M)*z,t[13]=(e*P-i*I+s*M)*z,t[14]=(y*S-_*T-m*g)*z,t[15]=(h*T-p*S+f*g)*z,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,p=o+o,f=r*c,d=r*h,_=r*p,y=a*h,m=a*p,u=o*p,g=l*c,S=l*h,v=l*p,T=i.x,A=i.y,x=i.z;return s[0]=(1-(y+u))*T,s[1]=(d+v)*T,s[2]=(_-S)*T,s[3]=0,s[4]=(d-v)*A,s[5]=(1-(f+u))*A,s[6]=(m+g)*A,s[7]=0,s[8]=(_+S)*x,s[9]=(m-g)*x,s[10]=(1-(f+y))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=Oi.set(s[0],s[1],s[2]).length(),o=Oi.set(s[4],s[5],s[6]).length(),l=Oi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),mn.copy(this);let c=1/a,h=1/o,p=1/l;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=h,mn.elements[5]*=h,mn.elements[6]*=h,mn.elements[8]*=p,mn.elements[9]*=p,mn.elements[10]*=p,e.setFromRotationMatrix(mn),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=ln,l=!1){let c=this.elements,h=2*r/(e-t),p=2*r/(i-s),f=(e+t)/(e-t),d=(i+s)/(i-s),_,y;if(l)_=r/(a-r),y=a*r/(a-r);else if(o===ln)_=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===$i)_=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=p,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=ln,l=!1){let c=this.elements,h=2/(e-t),p=2/(i-s),f=-(e+t)/(e-t),d=-(i+s)/(i-s),_,y;if(l)_=1/(a-r),y=a/(a-r);else if(o===ln)_=-2/(a-r),y=-(a+r)/(a-r);else if(o===$i)_=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=p,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Oi=new U,mn=new ye,nd=new U(0,0,0),id=new U(1,1,1),ti=new U,mr=new U,je=new U,_c=new ye,xc=new Cn,qn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],p=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Jt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return _c.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_c,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return xc.setFromEuler(this),this.setFromQuaternion(xc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qn.DEFAULT_ORDER="XYZ";var Is=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},sd=0,yc=new U,Bi=new Cn,zn=new ye,gr=new U,gs=new U,rd=new U,ad=new Cn,vc=new U(1,0,0),Mc=new U(0,1,0),Sc=new U(0,0,1),bc={type:"added"},od={type:"removed"},zi={type:"childadded",child:null},Ao={type:"childremoved",child:null},Xe=class n extends Rn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new U,e=new qn,i=new Cn,s=new U(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ye},normalMatrix:{value:new Gt}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Is,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Bi.setFromAxisAngle(t,e),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(t,e){return Bi.setFromAxisAngle(t,e),this.quaternion.premultiply(Bi),this}rotateX(t){return this.rotateOnAxis(vc,t)}rotateY(t){return this.rotateOnAxis(Mc,t)}rotateZ(t){return this.rotateOnAxis(Sc,t)}translateOnAxis(t,e){return yc.copy(t).applyQuaternion(this.quaternion),this.position.add(yc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(vc,t)}translateY(t){return this.translateOnAxis(Mc,t)}translateZ(t){return this.translateOnAxis(Sc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?gr.copy(t):gr.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(gs,gr,this.up):zn.lookAt(gr,gs,this.up),this.quaternion.setFromRotationMatrix(zn),s&&(zn.extractRotation(s.matrixWorld),Bi.setFromRotationMatrix(zn),this.quaternion.premultiply(Bi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Bt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bc),zi.child=t,this.dispatchEvent(zi),zi.child=null):Bt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(od),Ao.child=t,this.dispatchEvent(Ao),Ao.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bc),zi.child=t,this.dispatchEvent(zi),zi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,t,rd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,ad,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),p=a(t.shapes),f=a(t.skeletons),d=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Xe.DEFAULT_UP=new U(0,1,0);Xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Re=class extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}},ld={type:"move"},es=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,i),u=this._getHandJoint(c,y);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.quaternion,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],f=h.position.distanceTo(p.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ld)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Re;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Eh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},_r={h:0,s:0,l:0};function Eo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Ht=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=se.workingColorSpace){return this.r=t,this.g=e,this.b=i,se.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=se.workingColorSpace){if(t=Cl(t,1),e=Jt(e,0,1),i=Jt(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Eo(a,r,t+1/3),this.g=Eo(a,r,t),this.b=Eo(a,r,t-1/3)}return se.colorSpaceToWorking(this,s),this}setStyle(t,e=Ne){function i(r){r!==void 0&&parseFloat(r)<1&&Ot("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ot("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ot("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){let i=Eh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Ot("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wn(t.r),this.g=Wn(t.g),this.b=Wn(t.b),this}copyLinearToSRGB(t){return this.r=Ji(t.r),this.g=Ji(t.g),this.b=Ji(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return se.workingToColorSpace(We.copy(this),t),Math.round(Jt(We.r*255,0,255))*65536+Math.round(Jt(We.g*255,0,255))*256+Math.round(Jt(We.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.workingToColorSpace(We.copy(this),e);let i=We.r,s=We.g,r=We.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let p=a-o;switch(c=h<=.5?p/(a+o):p/(2-a-o),a){case i:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-i)/p+2;break;case r:l=(i-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.workingToColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=Ne){se.workingToColorSpace(We.copy(this),t);let e=We.r,i=We.g,s=We.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ei),this.setHSL(ei.h+t,ei.s+e,ei.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ei),t.getHSL(_r);let i=Ss(ei.h,_r.h,e),s=Ss(ei.s,_r.s,e),r=Ss(ei.l,_r.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},We=new Ht;Ht.NAMES=Eh;var Ps=class extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},gn=new U,kn=new U,Ro=new U,Gn=new U,ki=new U,Gi=new U,wc=new U,Co=new U,Io=new U,Po=new U,Lo=new ve,Do=new ve,No=new ve,ri=class n{constructor(t=new U,e=new U,i=new U){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),gn.subVectors(t,e),s.cross(gn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){gn.subVectors(s,e),kn.subVectors(i,e),Ro.subVectors(t,e);let a=gn.dot(gn),o=gn.dot(kn),l=gn.dot(Ro),c=kn.dot(kn),h=kn.dot(Ro),p=a*c-o*o;if(p===0)return r.set(0,0,0),null;let f=1/p,d=(c*l-o*h)*f,_=(a*h-o*l)*f;return r.set(1-d-_,_,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gn.x),l.addScaledVector(a,Gn.y),l.addScaledVector(o,Gn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return Lo.setScalar(0),Do.setScalar(0),No.setScalar(0),Lo.fromBufferAttribute(t,e),Do.fromBufferAttribute(t,i),No.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Lo,r.x),a.addScaledVector(Do,r.y),a.addScaledVector(No,r.z),a}static isFrontFacing(t,e,i,s){return gn.subVectors(i,e),kn.subVectors(t,e),gn.cross(kn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),gn.cross(kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;ki.subVectors(s,i),Gi.subVectors(r,i),Co.subVectors(t,i);let l=ki.dot(Co),c=Gi.dot(Co);if(l<=0&&c<=0)return e.copy(i);Io.subVectors(t,s);let h=ki.dot(Io),p=Gi.dot(Io);if(h>=0&&p<=h)return e.copy(s);let f=l*p-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(i).addScaledVector(ki,a);Po.subVectors(t,r);let d=ki.dot(Po),_=Gi.dot(Po);if(_>=0&&d<=_)return e.copy(r);let y=d*c-l*_;if(y<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(i).addScaledVector(Gi,o);let m=h*_-d*p;if(m<=0&&p-h>=0&&d-_>=0)return wc.subVectors(r,s),o=(p-h)/(p-h+(d-_)),e.copy(s).addScaledVector(wc,o);let u=1/(m+y+f);return a=y*u,o=f*u,e.copy(i).addScaledVector(ki,a).addScaledVector(Gi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},In=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(_n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(_n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=_n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,_n):_n.fromBufferAttribute(r,a),_n.applyMatrix4(t.matrixWorld),this.expandByPoint(_n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xr.copy(i.boundingBox)),xr.applyMatrix4(t.matrixWorld),this.union(xr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_n),_n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_s),yr.subVectors(this.max,_s),Vi.subVectors(t.a,_s),Hi.subVectors(t.b,_s),Wi.subVectors(t.c,_s),ni.subVectors(Hi,Vi),ii.subVectors(Wi,Hi),yi.subVectors(Vi,Wi);let e=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-yi.z,yi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,yi.z,0,-yi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-yi.y,yi.x,0];return!Uo(e,Vi,Hi,Wi,yr)||(e=[1,0,0,0,1,0,0,0,1],!Uo(e,Vi,Hi,Wi,yr))?!1:(vr.crossVectors(ni,ii),e=[vr.x,vr.y,vr.z],Uo(e,Vi,Hi,Wi,yr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Vn=[new U,new U,new U,new U,new U,new U,new U,new U],_n=new U,xr=new In,Vi=new U,Hi=new U,Wi=new U,ni=new U,ii=new U,yi=new U,_s=new U,yr=new U,vr=new U,vi=new U;function Uo(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){vi.fromArray(n,r);let o=s.x*Math.abs(vi.x)+s.y*Math.abs(vi.y)+s.z*Math.abs(vi.z),l=t.dot(vi),c=e.dot(vi),h=i.dot(vi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ee=new U,Mr=new rt,cd=0,En=class extends Rn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=vh,this.updateRanges=[],this.gpuType=Mn,this.version=0,this._normalizationScale=t!==void 0?Pl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Mr.fromBufferAttribute(this,e),Mr.applyMatrix3(t),this.setXY(e,Mr.x,Mr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Th(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Ah(t,this.array)}};var Ls=class extends En{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Ds=class extends En{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var re=class extends En{constructor(t,e,i){super(new Float32Array(t),e,i)}},hd=new In,xs=new U,Fo=new U,ns=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):hd.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xs.subVectors(t,this.center);let e=xs.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(xs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xs.copy(t.center).add(Fo)),this.expandByPoint(xs.copy(t.center).sub(Fo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},ud=0,on=new ye,Oo=new Xe,Xi=new U,tn=new In,ys=new In,De=new U,ze=class n extends Rn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fu(t)?Ds:Ls)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Gt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,i){return on.makeTranslation(t,e,i),this.applyMatrix4(on),this}scale(t,e,i){return on.makeScale(t,e,i),this.applyMatrix4(on),this}lookAt(t){return Oo.lookAt(t),Oo.updateMatrix(),this.applyMatrix4(Oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new re(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new In);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ns);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let i=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ys.setFromBufferAttribute(o),this.morphTargetsRelative?(De.addVectors(tn.min,ys.min),tn.expandByPoint(De),De.addVectors(tn.max,ys.max),tn.expandByPoint(De)):(tn.expandByPoint(ys.min),tn.expandByPoint(ys.max))}tn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)De.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(De));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)De.fromBufferAttribute(o,c),l&&(Xi.fromBufferAttribute(t,c),De.add(Xi)),s=Math.max(s,i.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new En(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let I=0;I<i.count;I++)o[I]=new U,l[I]=new U;let h=new U,p=new U,f=new U,d=new rt,_=new rt,y=new rt,m=new U,u=new U;function g(I,R,P){c[I]=c[R]=c[P]=1,h.fromBufferAttribute(i,I),p.fromBufferAttribute(i,R),f.fromBufferAttribute(i,P),d.fromBufferAttribute(r,I),_.fromBufferAttribute(r,R),y.fromBufferAttribute(r,P),p.sub(h),f.sub(h),_.sub(d),y.sub(d);let F=1/(_.x*y.y-y.x*_.y);isFinite(F)&&(m.copy(p).multiplyScalar(y.y).addScaledVector(f,-_.y).multiplyScalar(F),u.copy(f).multiplyScalar(_.x).addScaledVector(p,-y.x).multiplyScalar(F),o[I].add(m),o[R].add(m),o[P].add(m),l[I].add(u),l[R].add(u),l[P].add(u))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let I=0,R=S.length;I<R;++I){let P=S[I],F=P.start,H=P.count;for(let C=F,z=F+H;C<z;C+=3)g(t.getX(C+0),t.getX(C+1),t.getX(C+2))}let v=new U,T=new U,A=new U,x=new U;function M(I){A.fromBufferAttribute(s,I),x.copy(A);let R=o[I];v.copy(R),v.sub(A.multiplyScalar(A.dot(R))).normalize(),T.crossVectors(x,R);let F=T.dot(l[I])<0?-1:1;a.setXYZW(I,v.x,v.y,v.z,F)}for(let I=0,R=i.count;I<R;++I)c[I]&&M(I);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new En(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,p=new U;if(t)for(let f=0,d=t.count;f<d;f+=3){let _=t.getX(f+0),y=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,p=o.normalized,f=new c.constructor(l.length*h),d=0,_=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?d=l[y]*o.data.stride+o.offset:d=l[y]*h;for(let u=0;u<h;u++)f[_++]=c[d++]}return new En(f,h,p)}if(this.index===null)return Ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,p=c.length;h<p;h++){let f=c[h],d=t(f,i);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,f=c.length;p<f;p++){let d=c[p];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],p=r[c];for(let f=0,d=p.length;f<d;f++)h.push(p[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Bo=new U,dd=new U,fd=new Gt,xn=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Bo.subVectors(i,e).cross(dd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Bo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||fd.getNormalMatrix(t),s=this.coplanarPoint(Bo).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},pd=0,ai=class extends Rn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=cs,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=al,this.blendDst=ol,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=Ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ph,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Br,this.stencilZFail=Br,this.stencilZPass=Br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Ot(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ot(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ht().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new xn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new rt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new rt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Hn=new U,zo=new U,Sr=new U,br=new U,Qr=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hn.copy(this.origin).addScaledVector(this.direction,e),Hn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){zo.copy(t).add(e).multiplyScalar(.5),Sr.copy(e).sub(t).normalize(),br.copy(this.origin).sub(zo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Sr),o=br.dot(this.direction),l=-br.dot(Sr),c=br.lengthSq(),h=Math.abs(1-a*a),p,f,d,_;if(h>0)if(p=a*l-o,f=a*o-l,_=r*h,p>=0)if(f>=-_)if(f<=_){let y=1/h;p*=y,f*=y,d=p*(p+a*f+2*o)+f*(a*p+f+2*l)+c}else f=r,p=Math.max(0,-(a*f+o)),d=-p*p+f*(f+2*l)+c;else f=-r,p=Math.max(0,-(a*f+o)),d=-p*p+f*(f+2*l)+c;else f<=-_?(p=Math.max(0,-(-a*r+o)),f=p>0?-r:Math.min(Math.max(-r,-l),r),d=-p*p+f*(f+2*l)+c):f<=_?(p=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(p=Math.max(0,-(a*r+o)),f=p>0?r:Math.min(Math.max(-r,-l),r),d=-p*p+f*(f+2*l)+c);else f=a>0?-r:r,p=Math.max(0,-(a*f+o)),d=-p*p+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(zo).addScaledVector(Sr,f),d}intersectSphere(t,e){if(t.radius<0)return null;Hn.subVectors(t.center,this.origin);let i=Hn.dot(this.direction),s=Hn.dot(Hn)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(t.min.z-f.z)*p,l=(t.max.z-f.z)*p):(o=(t.max.z-f.z)*p,l=(t.min.z-f.z)*p),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Hn)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,p=t.x-a.x,f=t.y-a.y,d=t.z-a.z,_=e.x-a.x,y=e.y-a.y,m=e.z-a.z,u=i.x-a.x,g=i.y-a.y,S=i.z-a.z,v=Math.abs(l),T=Math.abs(c),A=Math.abs(h),x,M,I,R,P,F,H,C,z,W,V,et;if(v>=T&&v>=A?(I=l,F=p,z=_,et=u,l>=0?(x=c,M=h,R=f,P=d,H=y,C=m,W=g,V=S):(x=h,M=c,R=d,P=f,H=m,C=y,W=S,V=g)):T>=A?(I=c,F=f,z=y,et=g,c>=0?(x=h,M=l,R=d,P=p,H=m,C=_,W=S,V=u):(x=l,M=h,R=p,P=d,H=_,C=m,W=u,V=S)):(I=h,F=d,z=m,et=S,h>=0?(x=l,M=c,R=p,P=f,H=_,C=y,W=u,V=g):(x=c,M=l,R=f,P=p,H=y,C=_,W=g,V=u)),I===0)return null;let O=x/I,X=M/I,q=1/I,ft=R-O*F,wt=P-X*F,Z=H-O*z,at=C-X*z,bt=W-O*et,Ct=V-X*et,xt=bt*at-Ct*Z,Dt=ft*Ct-wt*bt,he=Z*wt-at*ft;if(s){if(xt<0||Dt<0||he<0)return null}else if((xt<0||Dt<0||he<0)&&(xt>0||Dt>0||he>0))return null;let Ut=xt+Dt+he;if(Ut===0)return null;let Xt=q*(xt*F+Dt*z+he*et);return(Ut>0?Xt<0:Xt>0)?null:this.at(Xt/Ut,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Yn=class extends ai{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=ll,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Tc=new ye,Mi=new Qr,wr=new ns,Ac=new U,Tr=new U,Ar=new U,Er=new U,ko=new U,Rr=new U,Ec=new U,Cr=new U,kt=class extends Xe{constructor(t=new ze,e=new Yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Rr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],p=r[l];h!==0&&(ko.fromBufferAttribute(p,t),a?Rr.addScaledVector(ko,h):Rr.addScaledVector(ko.sub(e),h))}e.add(Rr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wr.copy(i.boundingSphere),wr.applyMatrix4(r),Mi.copy(t.ray).recast(t.near),!(wr.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(wr,Ac)===null||Mi.origin.distanceToSquared(Ac)>(t.far-t.near)**2))&&(Tc.copy(r).invert(),Mi.copy(t.ray).applyMatrix4(Tc),!(i.boundingBox!==null&&Mi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Mi)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=f.length;_<y;_++){let m=f[_],u=a[m.materialIndex],g=Math.max(m.start,d.start),S=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=g,T=S;v<T;v+=3){let A=o.getX(v),x=o.getX(v+1),M=o.getX(v+2);s=Ir(this,u,t,i,c,h,p,A,x,M),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,d.start),y=Math.min(o.count,d.start+d.count);for(let m=_,u=y;m<u;m+=3){let g=o.getX(m),S=o.getX(m+1),v=o.getX(m+2);s=Ir(this,a,t,i,c,h,p,g,S,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,y=f.length;_<y;_++){let m=f[_],u=a[m.materialIndex],g=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=g,T=S;v<T;v+=3){let A=v,x=v+1,M=v+2;s=Ir(this,u,t,i,c,h,p,A,x,M),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let m=_,u=y;m<u;m+=3){let g=m,S=m+1,v=m+2;s=Ir(this,a,t,i,c,h,p,g,S,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function md(n,t,e,i,s,r,a,o){let l;if(t.side===ke?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Ln,o),l===null)return null;Cr.copy(o),Cr.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Cr);return c<e.near||c>e.far?null:{distance:c,point:Cr.clone(),object:n}}function Ir(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,Tr),n.getVertexPosition(l,Ar),n.getVertexPosition(c,Er);let h=md(n,t,e,i,Tr,Ar,Er,Ec);if(h){let p=new U;ri.getBarycoord(Ec,Tr,Ar,Er,p),s&&(h.uv=ri.getInterpolatedAttribute(s,o,l,c,p,new rt)),r&&(h.uv1=ri.getInterpolatedAttribute(r,o,l,c,p,new rt)),a&&(h.normal=ri.getInterpolatedAttribute(a,o,l,c,p,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new U,materialIndex:0};ri.getNormal(Tr,Ar,Er,f.normal),h.face=f,h.barycoord=p}return h}var jr=class extends Ke{constructor(t=null,e=1,i=1,s,r,a,o,l,c=Ue,h=Ue,p,f){super(null,a,o,l,c,h,s,r,p,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Si=new ns,gd=new rt(.5,.5),Pr=new U,oi=class{constructor(t=new xn,e=new xn,i=new xn,s=new xn,r=new xn,a=new xn){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ln,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],p=r[5],f=r[6],d=r[7],_=r[8],y=r[9],m=r[10],u=r[11],g=r[12],S=r[13],v=r[14],T=r[15];if(s[0].setComponents(c-a,d-h,u-_,T-g).normalize(),s[1].setComponents(c+a,d+h,u+_,T+g).normalize(),s[2].setComponents(c+o,d+p,u+y,T+S).normalize(),s[3].setComponents(c-o,d-p,u-y,T-S).normalize(),i)s[4].setComponents(l,f,m,v).normalize(),s[5].setComponents(c-l,d-f,u-m,T-v).normalize();else if(s[4].setComponents(c-l,d-f,u-m,T-v).normalize(),e===ln)s[5].setComponents(c+l,d+f,u+m,T+v).normalize();else if(e===$i)s[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(t){Si.center.set(0,0,0);let e=gd.distanceTo(t.center);return Si.radius=.7071067811865476+e,Si.applyMatrix4(t.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Pr.x=s.normal.x>0?t.max.x:t.min.x,Pr.y=s.normal.y>0?t.max.y:t.min.y,Pr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Pr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Rc=new ye,ta=class n{constructor(){this.coordinateSystem=ln,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Rc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new oi),i[s].setFromProjectionMatrix(Rc,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new oi),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var Ns=class extends Ke{constructor(t=[],e=Ri,i,s,r,a,o,l,c,h){super(t,e,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},li=class extends Ke{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Zn=class extends Ke{constructor(t,e,i=vn,s,r,a,o=Ue,l=Ue,c,h=Xn,p=1){if(h!==Xn&&h!==Kn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:p};super(f,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ts(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Us=class extends Zn{constructor(t,e=vn,i=Ri,s,r,a=Ue,o=Ue,l,c=Xn){let h={width:t,height:t,depth:1},p=[h,h,h,h,h,h];super(t,t,e,i,s,r,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Fs=class extends Ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},$e=class n extends ze{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],p=[],f=0,d=0;_("z","y","x",-1,-1,i,e,t,a,r,0),_("z","y","x",1,-1,i,e,-t,a,r,1),_("x","z","y",1,1,t,i,e,s,a,2),_("x","z","y",1,-1,t,i,-e,s,a,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(p,2));function _(y,m,u,g,S,v,T,A,x,M,I){let R=v/x,P=T/M,F=v/2,H=T/2,C=A/2,z=x+1,W=M+1,V=0,et=0,O=new U;for(let X=0;X<W;X++){let q=X*P-H;for(let ft=0;ft<z;ft++){let wt=ft*R-F;O[y]=wt*g,O[m]=q*S,O[u]=C,c.push(O.x,O.y,O.z),O[y]=0,O[m]=0,O[u]=A>0?1:-1,h.push(O.x,O.y,O.z),p.push(ft/x),p.push(1-X/M),V+=1}}for(let X=0;X<M;X++)for(let q=0;q<x;q++){let ft=f+q+z*X,wt=f+q+z*(X+1),Z=f+(q+1)+z*(X+1),at=f+(q+1)+z*X;l.push(ft,wt,at),l.push(wt,Z,at),et+=6}o.addGroup(d,et,I),d+=et,f+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Os=class n extends ze{constructor(t=1,e=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=e/2,p=Math.PI/2*t,f=e,d=2*p+f,_=i*2+r,y=s+1,m=new U,u=new U;for(let g=0;g<=_;g++){let S=0,v=0,T=0,A=0;if(g<=i){let I=g/i,R=I*Math.PI/2;v=-h-t*Math.cos(R),T=t*Math.sin(R),A=-t*Math.cos(R),S=I*p}else if(g<=i+r){let I=(g-i)/r;v=-h+I*e,T=t,A=0,S=p+I*f}else{let I=(g-i-r)/i,R=I*Math.PI/2;v=h+t*Math.sin(R),T=t*Math.cos(R),A=t*Math.sin(R),S=p+f+I*p}let x=Math.max(0,Math.min(1,S/d)),M=0;g===0?M=.5/s:g===_&&(M=-.5/s);for(let I=0;I<=s;I++){let R=I/s,P=R*Math.PI*2,F=Math.sin(P),H=Math.cos(P);u.x=-T*H,u.y=v,u.z=T*F,o.push(u.x,u.y,u.z),m.set(-T*H,A,T*F),m.normalize(),l.push(m.x,m.y,m.z),c.push(R+M,x)}if(g>0){let I=(g-1)*y;for(let R=0;R<s;R++){let P=I+R,F=I+R+1,H=g*y+R,C=g*y+R+1;a.push(P,F,H),a.push(F,C,H)}}}this.setIndex(a),this.setAttribute("position",new re(o,3)),this.setAttribute("normal",new re(l,3)),this.setAttribute("uv",new re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}};var $t=class n extends ze{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],p=[],f=[],d=[],_=0,y=[],m=i/2,u=0;g(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new re(p,3)),this.setAttribute("normal",new re(f,3)),this.setAttribute("uv",new re(d,2));function g(){let v=new U,T=new U,A=0,x=(e-t)/i;for(let M=0;M<=r;M++){let I=[],R=M/r,P=R*(e-t)+t;for(let F=0;F<=s;F++){let H=F/s,C=H*l+o,z=Math.sin(C),W=Math.cos(C);T.x=P*z,T.y=-R*i+m,T.z=P*W,p.push(T.x,T.y,T.z),v.set(z,x,W).normalize(),f.push(v.x,v.y,v.z),d.push(H,1-R),I.push(_++)}y.push(I)}for(let M=0;M<s;M++)for(let I=0;I<r;I++){let R=y[I][M],P=y[I+1][M],F=y[I+1][M+1],H=y[I][M+1];(t>0||I!==0)&&(h.push(R,P,H),A+=3),(e>0||I!==r-1)&&(h.push(P,F,H),A+=3)}c.addGroup(u,A,0),u+=A}function S(v){let T=_,A=new rt,x=new U,M=0,I=v===!0?t:e,R=v===!0?1:-1;for(let F=1;F<=s;F++)p.push(0,m*R,0),f.push(0,R,0),d.push(.5,.5),_++;let P=_;for(let F=0;F<=s;F++){let C=F/s*l+o,z=Math.cos(C),W=Math.sin(C);x.x=I*W,x.y=m*R,x.z=I*z,p.push(x.x,x.y,x.z),f.push(0,R,0),A.x=z*.5+.5,A.y=W*.5*R+.5,d.push(A.x,A.y),_++}for(let F=0;F<s;F++){let H=T+F,C=P+F;v===!0?h.push(C,C+1,H):h.push(C+1,C,H),M+=3}c.addGroup(u,M,v===!0?1:2),u+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Bs=class n extends $t{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var nn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ot("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],f=i[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new rt:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new U,s=[],r=[],a=[],o=new U,l=new ye;for(let d=0;d<=t;d++){let _=d/t;s[d]=this.getTangentAt(_,new U)}r[0]=new U,a[0]=new U;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),p=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),p<=c&&(c=p,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(Jt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,_))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Jt(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],d*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},is=class extends nn{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new rt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*p+this.aX,c=f*p+d*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ea=class extends is{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Dl(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,p){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+p)+(l-o)/p;f*=h,d*=h,s(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}var Cc=new U,Ic=new U,Go=new Dl,Vo=new Dl,Ho=new Dl,na=class extends nn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new U){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Ic.subVectors(s[0],s[1]).add(s[0]),c=Ic);let p=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Cc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Cc),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(p),d),y=Math.pow(p.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);y<1e-4&&(y=1),_<1e-4&&(_=y),m<1e-4&&(m=y),Go.initNonuniformCatmullRom(c.x,p.x,f.x,h.x,_,y,m),Vo.initNonuniformCatmullRom(c.y,p.y,f.y,h.y,_,y,m),Ho.initNonuniformCatmullRom(c.z,p.z,f.z,h.z,_,y,m)}else this.curveType==="catmullrom"&&(Go.initCatmullRom(c.x,p.x,f.x,h.x,this.tension),Vo.initCatmullRom(c.y,p.y,f.y,h.y,this.tension),Ho.initCatmullRom(c.z,p.z,f.z,h.z,this.tension));return i.set(Go.calc(l),Vo.calc(l),Ho.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Pc(n,t,e,i,s){let r=(i-t)*.5,a=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*n+e}function _d(n,t){let e=1-n;return e*e*t}function xd(n,t){return 2*(1-n)*n*t}function yd(n,t){return n*n*t}function bs(n,t,e,i){return _d(n,t)+xd(n,e)+yd(n,i)}function vd(n,t){let e=1-n;return e*e*e*t}function Md(n,t){let e=1-n;return 3*e*e*n*t}function Sd(n,t){return 3*(1-n)*n*n*t}function bd(n,t){return n*n*n*t}function ws(n,t,e,i,s){return vd(n,t)+Md(n,e)+Sd(n,i)+bd(n,s)}var zs=class extends nn{constructor(t=new rt,e=new rt,i=new rt,s=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new rt){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ws(t,s.x,r.x,a.x,o.x),ws(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ia=class extends nn{constructor(t=new U,e=new U,i=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new U){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ws(t,s.x,r.x,a.x,o.x),ws(t,s.y,r.y,a.y,o.y),ws(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ks=class extends nn{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},sa=class extends nn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Gs=class extends nn{constructor(t=new rt,e=new rt,i=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new rt){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(bs(t,s.x,r.x,a.x),bs(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ra=class extends nn{constructor(t=new U,e=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new U){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(bs(t,s.x,r.x,a.x),bs(t,s.y,r.y,a.y),bs(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vs=class extends nn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){let i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],p=s[a>s.length-3?s.length-1:a+2];return i.set(Pc(o,l.x,c.x,h.x,p.x),Pc(o,l.y,c.y,h.y,p.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new rt().fromArray(s))}return this}},Jo=Object.freeze({__proto__:null,ArcCurve:ea,CatmullRomCurve3:na,CubicBezierCurve:zs,CubicBezierCurve3:ia,EllipseCurve:is,LineCurve:ks,LineCurve3:sa,QuadraticBezierCurve:Gs,QuadraticBezierCurve3:ra,SplineCurve:Vs}),aa=class extends nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Jo[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Jo[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},ci=class extends aa{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new ks(this.currentPoint.clone(),new rt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Gs(this.currentPoint.clone(),new rt(t,e),new rt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){let o=new zs(this.currentPoint.clone(),new rt(t,e),new rt(i,s),new rt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Vs(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,a,o,l),this}absellipse(t,e,i,s,r,a,o,l){let c=new is(t,e,i,s,r,a,o,l);if(this.curves.length>0){let p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},sn=class extends ci{constructor(t){super(t),this.uuid=Ii(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new ci().fromJSON(s))}return this}};function wd(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=Rh(n,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=Cd(n,t,r,e)),n.length>80*e){o=n[0],l=n[1];let h=o,p=l;for(let f=e;f<s;f+=e){let d=n[f],_=n[f+1];d<o&&(o=d),_<l&&(l=_),d>h&&(h=d),_>p&&(p=_)}c=Math.max(h-o,p-l),c=c!==0?32767/c:0}return Hs(r,a,e,o,l,c,0),a}function Rh(n,t,e,i,s){let r;if(s===kd(n,t,e,i)>0)for(let a=t;a<e;a+=i)r=Lc(a/i|0,n[a],n[a+1],r);else for(let a=e-i;a>=t;a-=i)r=Lc(a/i|0,n[a],n[a+1],r);return r&&ss(r,r.next)&&(Xs(r),r=r.next),r}function Ti(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(ss(e,e.next)||be(e.prev,e,e.next)===0)){if(Xs(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Hs(n,t,e,i,s,r,a){if(!n)return;!a&&r&&Nd(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?Ad(n,i,s,r):Td(n)){t.push(l.i,n.i,c.i),Xs(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=Ed(Ti(n),t),Hs(n,t,e,i,s,r,2)):a===2&&Rd(n,t,e,i,s,r):Hs(Ti(n),t,e,i,s,r,1);break}}}function Td(n){let t=n.prev,e=n,i=n.next;if(be(t,e,i)>=0)return!1;let s=t.x,r=e.x,a=i.x,o=t.y,l=e.y,c=i.y,h=Math.min(s,r,a),p=Math.min(o,l,c),f=Math.max(s,r,a),d=Math.max(o,l,c),_=i.next;for(;_!==t;){if(_.x>=h&&_.x<=f&&_.y>=p&&_.y<=d&&vs(s,o,r,l,a,c,_.x,_.y)&&be(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Ad(n,t,e,i){let s=n.prev,r=n,a=n.next;if(be(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,p=r.y,f=a.y,d=Math.min(o,l,c),_=Math.min(h,p,f),y=Math.max(o,l,c),m=Math.max(h,p,f),u=Ko(d,_,t,e,i),g=Ko(y,m,t,e,i),S=n.prevZ,v=n.nextZ;for(;S&&S.z>=u&&v&&v.z<=g;){if(S.x>=d&&S.x<=y&&S.y>=_&&S.y<=m&&S!==s&&S!==a&&vs(o,h,l,p,c,f,S.x,S.y)&&be(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=d&&v.x<=y&&v.y>=_&&v.y<=m&&v!==s&&v!==a&&vs(o,h,l,p,c,f,v.x,v.y)&&be(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=u;){if(S.x>=d&&S.x<=y&&S.y>=_&&S.y<=m&&S!==s&&S!==a&&vs(o,h,l,p,c,f,S.x,S.y)&&be(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=g;){if(v.x>=d&&v.x<=y&&v.y>=_&&v.y<=m&&v!==s&&v!==a&&vs(o,h,l,p,c,f,v.x,v.y)&&be(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Ed(n,t){let e=n;do{let i=e.prev,s=e.next.next;!ss(i,s)&&Ih(i,e,e.next,s)&&Ws(i,s)&&Ws(s,i)&&(t.push(i.i,e.i,s.i),Xs(e),Xs(e.next),e=n=s),e=e.next}while(e!==n);return Ti(e)}function Rd(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Od(a,o)){let l=Ph(a,o);a=Ti(a,a.next),l=Ti(l,l.next),Hs(a,t,e,i,s,r,0),Hs(l,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function Cd(n,t,e,i){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*i,l=r<a-1?t[r+1]*i:n.length,c=Rh(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Fd(c))}s.sort(Id);for(let r=0;r<s.length;r++)e=Pd(s[r],e);return e}function Id(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function Pd(n,t){let e=Ld(n,t);if(!e)return t;let i=Ph(e,n);return Ti(i,i.next),Ti(e,e.next)}function Ld(n,t){let e=t,i=n.x,s=n.y,r=-1/0,a;if(ss(n,e))return e;do{if(ss(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let p=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=i&&p>r&&(r=p,a=e.x<e.next.x?e:e.next,p===i))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(i>=e.x&&e.x>=l&&i!==e.x&&Ch(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){let p=Math.abs(s-e.y)/(i-e.x);Ws(e,n)&&(p<h||p===h&&(e.x>a.x||e.x===a.x&&Dd(a,e)))&&(a=e,h=p)}e=e.next}while(e!==o);return a}function Dd(n,t){return be(n.prev,n,t.prev)<0&&be(t.next,n,n.next)<0}function Nd(n,t,e,i){let s=n;do s.z===0&&(s.z=Ko(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Ud(s)}function Ud(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,e*=2}while(t>1);return n}function Ko(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Fd(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Ch(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function vs(n,t,e,i,s,r,a,o){return!(n===a&&t===o)&&Ch(n,t,e,i,s,r,a,o)}function Od(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Bd(n,t)&&(Ws(n,t)&&Ws(t,n)&&zd(n,t)&&(be(n.prev,n,t.prev)||be(n,t.prev,t))||ss(n,t)&&be(n.prev,n,n.next)>0&&be(t.prev,t,t.next)>0)}function be(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function ss(n,t){return n.x===t.x&&n.y===t.y}function Ih(n,t,e,i){let s=Dr(be(n,t,e)),r=Dr(be(n,t,i)),a=Dr(be(e,i,n)),o=Dr(be(e,i,t));return!!(s!==r&&a!==o||s===0&&Lr(n,e,t)||r===0&&Lr(n,i,t)||a===0&&Lr(e,n,i)||o===0&&Lr(e,t,i))}function Lr(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Dr(n){return n>0?1:n<0?-1:0}function Bd(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Ih(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Ws(n,t){return be(n.prev,n,n.next)<0?be(n,t,n.next)>=0&&be(n,n.prev,t)>=0:be(n,t,n.prev)<0||be(n,n.next,t)<0}function zd(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Ph(n,t){let e=$o(n.i,n.x,n.y),i=$o(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Lc(n,t,e,i){let s=$o(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Xs(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function $o(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function kd(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var Qo=class{static triangulate(t,e,i=2){return wd(t,e,i)}},bi=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Dc(t),Nc(i,t);let a=t.length;e.forEach(Dc);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Nc(i,e[l]);let o=Qo.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Dc(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Nc(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var cn=class n extends ze{constructor(t=new sn([new rt(.5,.5),new rt(-.5,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new re(s,3)),this.setAttribute("uv",new re(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,p=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:d-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,u=e.extrudePath,g=e.UVGenerator!==void 0?e.UVGenerator:Gd,S,v=!1,T,A,x,M;if(u){S=u.getSpacedPoints(h),v=!0,f=!1;let tt=u.isCatmullRomCurve3?u.closed:!1;T=u.computeFrenetFrames(h,tt),A=new U,x=new U,M=new U}f||(m=0,d=0,_=0,y=0);let I=o.extractPoints(c),R=I.shape,P=I.holes;if(!bi.isClockWise(R)){R=R.reverse();for(let tt=0,ht=P.length;tt<ht;tt++){let ot=P[tt];bi.isClockWise(ot)&&(P[tt]=ot.reverse())}}function H(tt){let ot=10000000000000001e-36,Tt=tt[0];for(let yt=1;yt<=tt.length;yt++){let Wt=yt%tt.length,Pt=tt[Wt],te=Pt.x-Tt.x,ee=Pt.y-Tt.y,le=te*te+ee*ee,N=Math.max(Math.abs(Pt.x),Math.abs(Pt.y),Math.abs(Tt.x),Math.abs(Tt.y)),Te=ot*N*N;if(le<=Te){tt.splice(Wt,1),yt--;continue}Tt=Pt}}H(R),P.forEach(H);let C=P.length,z=R;for(let tt=0;tt<C;tt++){let ht=P[tt];R=R.concat(ht)}function W(tt,ht,ot){return ht||Bt("ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(ht,ot)}let V=R.length;function et(tt,ht,ot){let Tt,yt,Wt,Pt=tt.x-ht.x,te=tt.y-ht.y,ee=ot.x-tt.x,le=ot.y-tt.y,N=Pt*Pt+te*te,Te=Pt*le-te*ee;if(Math.abs(Te)>Number.EPSILON){let Qt=Math.sqrt(N),fe=Math.sqrt(ee*ee+le*le),mt=ht.x-te/Qt,we=ht.y+Pt/Qt,Ft=ot.x-le/fe,zt=ot.y+ee/fe,E=((Ft-mt)*le-(zt-we)*ee)/(Pt*le-te*ee);Tt=mt+Pt*E-tt.x,yt=we+te*E-tt.y;let b=Tt*Tt+yt*yt;if(b<=2)return new rt(Tt,yt);Wt=Math.sqrt(b/2)}else{let Qt=!1;Pt>Number.EPSILON?ee>Number.EPSILON&&(Qt=!0):Pt<-Number.EPSILON?ee<-Number.EPSILON&&(Qt=!0):Math.sign(te)===Math.sign(le)&&(Qt=!0),Qt?(Tt=-te,yt=Pt,Wt=Math.sqrt(N)):(Tt=Pt,yt=te,Wt=Math.sqrt(N/2))}return new rt(Tt/Wt,yt/Wt)}let O=[];for(let tt=0,ht=z.length,ot=ht-1,Tt=tt+1;tt<ht;tt++,ot++,Tt++)ot===ht&&(ot=0),Tt===ht&&(Tt=0),O[tt]=et(z[tt],z[ot],z[Tt]);let X=[],q,ft=O.concat();for(let tt=0,ht=C;tt<ht;tt++){let ot=P[tt];q=[];for(let Tt=0,yt=ot.length,Wt=yt-1,Pt=Tt+1;Tt<yt;Tt++,Wt++,Pt++)Wt===yt&&(Wt=0),Pt===yt&&(Pt=0),q[Tt]=et(ot[Tt],ot[Wt],ot[Pt]);X.push(q),ft=ft.concat(q)}let wt;if(m===0)wt=bi.triangulateShape(z,P);else{let tt=[],ht=[];for(let ot=0;ot<m;ot++){let Tt=ot/m,yt=d*Math.cos(Tt*Math.PI/2),Wt=_*Math.sin(Tt*Math.PI/2)+y;for(let Pt=0,te=z.length;Pt<te;Pt++){let ee=W(z[Pt],O[Pt],Wt);Dt(ee.x,ee.y,-yt),Tt===0&&tt.push(ee)}for(let Pt=0,te=C;Pt<te;Pt++){let ee=P[Pt];q=X[Pt];let le=[];for(let N=0,Te=ee.length;N<Te;N++){let Qt=W(ee[N],q[N],Wt);Dt(Qt.x,Qt.y,-yt),Tt===0&&le.push(Qt)}Tt===0&&ht.push(le)}}wt=bi.triangulateShape(tt,ht)}let Z=wt.length,at=_+y;for(let tt=0;tt<V;tt++){let ht=f?W(R[tt],ft[tt],at):R[tt];v?(x.copy(T.normals[0]).multiplyScalar(ht.x),A.copy(T.binormals[0]).multiplyScalar(ht.y),M.copy(S[0]).add(x).add(A),Dt(M.x,M.y,M.z)):Dt(ht.x,ht.y,0)}for(let tt=1;tt<=h;tt++)for(let ht=0;ht<V;ht++){let ot=f?W(R[ht],ft[ht],at):R[ht];v?(x.copy(T.normals[tt]).multiplyScalar(ot.x),A.copy(T.binormals[tt]).multiplyScalar(ot.y),M.copy(S[tt]).add(x).add(A),Dt(M.x,M.y,M.z)):Dt(ot.x,ot.y,p/h*tt)}for(let tt=m-1;tt>=0;tt--){let ht=tt/m,ot=d*Math.cos(ht*Math.PI/2),Tt=_*Math.sin(ht*Math.PI/2)+y;for(let yt=0,Wt=z.length;yt<Wt;yt++){let Pt=W(z[yt],O[yt],Tt);Dt(Pt.x,Pt.y,p+ot)}for(let yt=0,Wt=P.length;yt<Wt;yt++){let Pt=P[yt];q=X[yt];for(let te=0,ee=Pt.length;te<ee;te++){let le=W(Pt[te],q[te],Tt);v?Dt(le.x,le.y+S[h-1].y,S[h-1].x+ot):Dt(le.x,le.y,p+ot)}}}bt(),Ct();function bt(){let tt=s.length/3;if(f){let ht=0,ot=V*ht;for(let Tt=0;Tt<Z;Tt++){let yt=wt[Tt];he(yt[2]+ot,yt[1]+ot,yt[0]+ot)}ht=h+m*2,ot=V*ht;for(let Tt=0;Tt<Z;Tt++){let yt=wt[Tt];he(yt[0]+ot,yt[1]+ot,yt[2]+ot)}}else{for(let ht=0;ht<Z;ht++){let ot=wt[ht];he(ot[2],ot[1],ot[0])}for(let ht=0;ht<Z;ht++){let ot=wt[ht];he(ot[0]+V*h,ot[1]+V*h,ot[2]+V*h)}}i.addGroup(tt,s.length/3-tt,0)}function Ct(){let tt=s.length/3,ht=0;xt(z,ht),ht+=z.length;for(let ot=0,Tt=P.length;ot<Tt;ot++){let yt=P[ot];xt(yt,ht),ht+=yt.length}i.addGroup(tt,s.length/3-tt,1)}function xt(tt,ht){let ot=tt.length;for(;--ot>=0;){let Tt=ot,yt=ot-1;yt<0&&(yt=tt.length-1);for(let Wt=0,Pt=h+m*2;Wt<Pt;Wt++){let te=V*Wt,ee=V*(Wt+1),le=ht+Tt+te,N=ht+yt+te,Te=ht+yt+ee,Qt=ht+Tt+ee;Ut(le,N,Te,Qt)}}}function Dt(tt,ht,ot){l.push(tt),l.push(ht),l.push(ot)}function he(tt,ht,ot){Xt(tt),Xt(ht),Xt(ot);let Tt=s.length/3,yt=g.generateTopUV(i,s,Tt-3,Tt-2,Tt-1);jt(yt[0]),jt(yt[1]),jt(yt[2])}function Ut(tt,ht,ot,Tt){Xt(tt),Xt(ht),Xt(Tt),Xt(ht),Xt(ot),Xt(Tt);let yt=s.length/3,Wt=g.generateSideWallUV(i,s,yt-6,yt-3,yt-2,yt-1);jt(Wt[0]),jt(Wt[1]),jt(Wt[3]),jt(Wt[1]),jt(Wt[2]),jt(Wt[3])}function Xt(tt){s.push(l[tt*3+0]),s.push(l[tt*3+1]),s.push(l[tt*3+2])}function jt(tt){r.push(tt.x),r.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Vd(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];i.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Jo[s.type]().fromJSON(s)),new n(i,t.options)}},Gd={generateTopUV:function(n,t,e,i,s){let r=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new rt(r,a),new rt(o,l),new rt(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],p=t[i*3+2],f=t[s*3],d=t[s*3+1],_=t[s*3+2],y=t[r*3],m=t[r*3+1],u=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new rt(a,1-l),new rt(c,1-p),new rt(f,1-_),new rt(y,1-u)]:[new rt(o,1-l),new rt(h,1-p),new rt(d,1-_),new rt(m,1-u)]}};function Vd(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var qs=class n extends ze{constructor(t=[new rt(0,-.5),new rt(.5,0),new rt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=Jt(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,p=new U,f=new rt,d=new U,_=new U,y=new U,m=0,u=0;for(let g=0;g<=t.length-1;g++)switch(g){case 0:m=t[g+1].x-t[g].x,u=t[g+1].y-t[g].y,d.x=u*1,d.y=-m,d.z=u*0,y.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:y.normalize(),l.push(y.x,y.y,y.z);break;default:m=t[g+1].x-t[g].x,u=t[g+1].y-t[g].y,d.x=u*1,d.y=-m,d.z=u*0,_.copy(d),d.x+=y.x,d.y+=y.y,d.z+=y.z,d.normalize(),l.push(d.x,d.y,d.z),y.copy(_)}for(let g=0;g<=e;g++){let S=i+g*h*s,v=Math.sin(S),T=Math.cos(S);for(let A=0;A<=t.length-1;A++){p.x=t[A].x*v,p.y=t[A].y,p.z=t[A].x*T,a.push(p.x,p.y,p.z),f.x=g/e,f.y=A/(t.length-1),o.push(f.x,f.y);let x=l[3*A+0]*v,M=l[3*A+1],I=l[3*A+0]*T;c.push(x,M,I)}}for(let g=0;g<e;g++)for(let S=0;S<t.length-1;S++){let v=S+g*t.length,T=v,A=v+t.length,x=v+t.length+1,M=v+1;r.push(T,A,M),r.push(x,M,A)}this.setIndex(r),this.setAttribute("position",new re(a,3)),this.setAttribute("uv",new re(o,2)),this.setAttribute("normal",new re(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}};var yn=class n extends ze{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,p=t/o,f=e/l,d=[],_=[],y=[],m=[];for(let u=0;u<h;u++){let g=u*f-a;for(let S=0;S<c;S++){let v=S*p-r;_.push(v,-g,0),y.push(0,0,1),m.push(S/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<o;g++){let S=g+c*u,v=g+c*(u+1),T=g+1+c*(u+1),A=g+1+c*u;d.push(S,v,A),d.push(v,T,A)}this.setIndex(d),this.setAttribute("position",new re(_,3)),this.setAttribute("normal",new re(y,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},rs=class n extends ze{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],h=[],p=t,f=(e-t)/s,d=new U,_=new rt;for(let y=0;y<=s;y++){for(let m=0;m<=i;m++){let u=r+m/i*a;d.x=p*Math.cos(u),d.y=p*Math.sin(u),l.push(d.x,d.y,d.z),c.push(0,0,1),_.x=(d.x/e+1)/2,_.y=(d.y/e+1)/2,h.push(_.x,_.y)}p+=f}for(let y=0;y<s;y++){let m=y*(i+1);for(let u=0;u<i;u++){let g=u+m,S=g,v=g+i+1,T=g+i+2,A=g+1;o.push(S,v,A),o.push(v,T,A)}}this.setIndex(o),this.setAttribute("position",new re(l,3)),this.setAttribute("normal",new re(c,3)),this.setAttribute("uv",new re(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Pn=class n extends ze{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],p=new U,f=new U,d=[],_=[],y=[],m=[];for(let u=0;u<=i;u++){let g=[],S=u/i,v=a+S*o,T=t*Math.cos(v),A=Math.sqrt(t*t-T*T),x=0;u===0&&a===0?x=.5/e:u===i&&l===Math.PI&&(x=-.5/e);for(let M=0;M<=e;M++){let I=M/e,R=s+I*r;p.x=-A*Math.cos(R),p.y=T,p.z=A*Math.sin(R),_.push(p.x,p.y,p.z),f.copy(p).normalize(),y.push(f.x,f.y,f.z),m.push(I+x,1-S),g.push(c++)}h.push(g)}for(let u=0;u<i;u++)for(let g=0;g<e;g++){let S=h[u][g+1],v=h[u][g],T=h[u+1][g],A=h[u+1][g+1];(u!==0||a>0)&&d.push(S,v,A),(u!==i-1||l<Math.PI)&&d.push(v,T,A)}this.setIndex(d),this.setAttribute("position",new re(_,3)),this.setAttribute("normal",new re(y,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var hn=class n extends ze{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],p=[],f=new U,d=new U,_=new U;for(let y=0;y<=i;y++){let m=a+y/i*o;for(let u=0;u<=s;u++){let g=u/s*r;d.x=(t+e*Math.cos(m))*Math.cos(g),d.y=(t+e*Math.cos(m))*Math.sin(g),d.z=e*Math.sin(m),c.push(d.x,d.y,d.z),f.x=t*Math.cos(g),f.y=t*Math.sin(g),_.subVectors(d,f).normalize(),h.push(_.x,_.y,_.z),p.push(u/s),p.push(y/i)}}for(let y=1;y<=i;y++)for(let m=1;m<=s;m++){let u=(s+1)*y+m-1,g=(s+1)*(y-1)+m-1,S=(s+1)*(y-1)+m,v=(s+1)*y+m;l.push(u,g,v),l.push(g,S,v)}this.setIndex(l),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Pi(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Uc(s))s.isRenderTargetTexture?(Ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Uc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function qe(n){let t={};for(let e=0;e<n.length;e++){let i=Pi(n[e]);for(let s in i)t[s]=i[s]}return t}function Uc(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Hd(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Nl(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}var Lh={clone:Pi,merge:qe},Wd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,un=class extends ai{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wd,this.fragmentShader=Xd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Pi(t.uniforms),this.uniformsGroups=Hd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Ht().setHex(s.value);break;case"v2":this.uniforms[i].value=new rt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new U().fromArray(s.value);break;case"v4":this.uniforms[i].value=new ve().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Gt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ye().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},oa=class extends un{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},hi=class extends ai{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oo,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ui=class extends hi{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new rt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ht(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ht(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ht(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return wi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){wi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var la=class extends ai{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ca=class extends ai{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function qi(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Nr(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var di=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ha=class extends di{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qo,endingEnd:qo}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Yo:r=t,o=2*e-i;break;case Zo:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Yo:a=t,l=2*i-e;break;case Zo:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,p=this._offsetNext,f=this._weightPrev,d=this._weightNext,_=(i-e)/(s-e),y=_*_,m=y*_,u=-f*m+2*f*y-f*_,g=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*_+1,S=(-1-d)*m+(1.5+d)*y+.5*_,v=d*m-d*y;for(let T=0;T!==o;++T)r[T]=u*a[h+T]+g*a[c+T]+S*a[l+T]+v*a[p+T];return r}},ua=class extends di{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(s-e),p=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*p+a[l+f]*h;return r}},da=class extends di{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},fa=class extends di{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,p=this.outTangents;if(!h||!p){let _=(i-e)/(s-e),y=1-_;for(let m=0;m!==o;++m)r[m]=a[c+m]*y+a[l+m]*_;return r}let f=o*2,d=t-1;for(let _=0;_!==o;++_){let y=a[c+_],m=a[l+_],u=d*f+_*2,g=p[u],S=p[u+1],v=t*f+_*2,T=h[v],A=h[v+1],x=Yd(i,e,g,T,s);r[_]=Dh(x,y,S,A,m)}return r}};function Dh(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function qd(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Yd(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=Dh(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let l=qd(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var rn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=qi(e,this.TimeBufferType),this.values=qi(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:qi(t.times,Array),values:qi(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Nr(t.settings)&&(i.settings={inTangents:qi(t.settings.inTangents,Array),outTangents:qi(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new da(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ua(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ha(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new fa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ts:e=this.InterpolantFactoryMethodDiscrete;break;case Zr:e=this.InterpolantFactoryMethodLinear;break;case Or:e=this.InterpolantFactoryMethodSmooth;break;case Xo:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ot("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ts;case this.InterpolantFactoryMethodLinear:return Zr;case this.InterpolantFactoryMethodSmooth:return Or;case this.InterpolantFactoryMethodBezier:return Xo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;Nr(this.settings)&&(Fc(this.settings.inTangents,t),Fc(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Nr(this.settings)&&(Oc(this.settings.inTangents,t),Oc(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Bt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Bt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Bt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Bt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Ou(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Bt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Or,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*i,f=p-i,d=p+i;for(let _=0;_!==i;++_){let y=e[p+_];if(y!==e[f+_]||y!==e[d+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let p=o*i,f=a*i;for(let d=0;d!==i;++d)e[f+d]=e[p+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Nr(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Fc(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function Oc(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}rn.prototype.ValueTypeName="";rn.prototype.TimeBufferType=Float32Array;rn.prototype.ValueBufferType=Float32Array;rn.prototype.DefaultInterpolation=Zr;var fi=class extends rn{constructor(t,e,i){super(t,e,i)}};fi.prototype.ValueTypeName="bool";fi.prototype.ValueBufferType=Array;fi.prototype.DefaultInterpolation=Ts;fi.prototype.InterpolantFactoryMethodLinear=void 0;fi.prototype.InterpolantFactoryMethodSmooth=void 0;var pa=class extends rn{constructor(t,e,i,s){super(t,e,i,s)}};pa.prototype.ValueTypeName="color";var ma=class extends rn{constructor(t,e,i,s){super(t,e,i,s)}};ma.prototype.ValueTypeName="number";var ga=class extends di{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Cn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ys=class extends rn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new ga(this.times,this.values,this.getValueSize(),t)}};Ys.prototype.ValueTypeName="quaternion";Ys.prototype.InterpolantFactoryMethodSmooth=void 0;var pi=class extends rn{constructor(t,e,i){super(t,e,i)}};pi.prototype.ValueTypeName="string";pi.prototype.ValueBufferType=Array;pi.prototype.DefaultInterpolation=Ts;pi.prototype.InterpolantFactoryMethodLinear=void 0;pi.prototype.InterpolantFactoryMethodSmooth=void 0;var _a=class extends rn{constructor(t,e,i,s){super(t,e,i,s)}};_a.prototype.ValueTypeName="vector";var xa=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){let p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,f=c.length;p<f;p+=2){let d=c[p],_=c[p+1];if(d.global&&(d.lastIndex=0),d.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Nh=new xa,ya=class{constructor(t){this.manager=t!==void 0?t:Nh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};ya.DEFAULT_MATERIAL_NAME="__DEFAULT";var Zs=class extends Xe{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Js=class extends Zs{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Wo=new ye,Bc=new U,zc=new U,va=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.mapType=Qe,this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oi,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Bc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bc),zc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(zc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Wo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Wo,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===$i||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Wo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ur=new U,Fr=new Cn,Tn=new U,Ks=class extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ur,Fr,Tn),Tn.x===1&&Tn.y===1&&Tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ur,Fr,Tn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Ur,Fr,Tn),Tn.x===1&&Tn.y===1&&Tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ur,Fr,Tn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},si=new U,kc=new rt,Gc=new rt,Ze=class extends Ks{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ji*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ms*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ji*2*Math.atan(Math.tan(Ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(si.x,si.y).multiplyScalar(-t/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(si.x,si.y).multiplyScalar(-t/si.z)}getViewSize(t,e){return this.getViewBounds(t,kc,Gc),e.subVectors(Gc,kc)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ms*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var $s=class extends Ks{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},jo=class extends va{constructor(){super(new $s(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},as=class extends Zs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.shadow=new jo}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Yi=-90,Zi=1,os=class extends Xe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ze(Yi,Zi,t,e);s.layers=this.layers,this.add(s);let r=new Ze(Yi,Zi,t,e);r.layers=this.layers,this.add(r);let a=new Ze(Yi,Zi,t,e);a.layers=this.layers,this.add(a);let o=new Ze(Yi,Zi,t,e);o.layers=this.layers,this.add(o);let l=new Ze(Yi,Zi,t,e);l.layers=this.layers,this.add(l);let c=new Ze(Yi,Zi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===ln)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===$i)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,p=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=y,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(p,f,d),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},Ma=class extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Ul="\\[\\]\\.:\\/",Zd=new RegExp("["+Ul+"]","g"),Fl="[^"+Ul+"]",Jd="[^"+Ul.replace("\\.","")+"]",Kd=/((?:WC+[\/:])*)/.source.replace("WC",Fl),$d=/(WCOD+)?/.source.replace("WCOD",Jd),Qd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fl),jd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fl),tf=new RegExp("^"+Kd+$d+Qd+jd+"$"),ef=["material","materials","bones","map"],tl=class{constructor(t,e,i){let s=i||xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},xe=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Zd,"")}static parseTrackName(t){let e=tf.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);ef.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ot("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Bt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Bt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Bt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Bt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Bt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Bt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xe.Composite=tl;xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xe.prototype.GetterByBindingType=[xe.prototype._getValue_direct,xe.prototype._getValue_array,xe.prototype._getValue_arrayElement,xe.prototype._getValue_toArray];xe.prototype.SetterByBindingTypeAndVersioning=[[xe.prototype._setValue_direct,xe.prototype._setValue_direct_setNeedsUpdate,xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_array,xe.prototype._setValue_array_setNeedsUpdate,xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_arrayElement,xe.prototype._setValue_arrayElement_setNeedsUpdate,xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_fromArray,xe.prototype._setValue_fromArray_setNeedsUpdate,xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var a_=new Float32Array(1);var el=class{static{this.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};function Ol(n,t,e,i){let s=nf(i);switch(e){case Ml:return n*t;case bl:return n*t/s.components*s.byteLength;case Ra:return n*t/s.components*s.byteLength;case mi:return n*t*2/s.components*s.byteLength;case Ca:return n*t*2/s.components*s.byteLength;case Sl:return n*t*3/s.components*s.byteLength;case bn:return n*t*4/s.components*s.byteLength;case Ia:return n*t*4/s.components*s.byteLength;case tr:case er:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case nr:case ir:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case La:case Na:return Math.max(n,16)*Math.max(t,8)/4;case Pa:case Da:return Math.max(n,8)*Math.max(t,8)/2;case Ua:case Fa:case Ba:case za:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Oa:case sr:case ka:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ga:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Va:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Ha:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Wa:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case qa:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Za:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ja:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case $a:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Qa:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case ja:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case to:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case eo:case no:case io:return Math.ceil(n/4)*Math.ceil(t/4)*16;case so:case ro:return Math.ceil(n/4)*Math.ceil(t/4)*8;case rr:case ao:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function nf(n){switch(n){case Qe:case _l:return{byteLength:1,components:1};case us:case xl:case Sn:return{byteLength:2,components:1};case Aa:case Ea:return{byteLength:2,components:4};case vn:case Ta:case Mn:return{byteLength:4,components:1};case yl:case vl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function nu(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function rf(n){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,p=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){let h=l.array,p=l.updateRanges;if(n.bindBuffer(c,o),p.length===0)n.bufferSubData(c,0,h);else{p.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<p.length;d++){let _=p[f],y=p[d];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++f,p[f]=y)}p.length=f+1;for(let d=0,_=p.length;d<_;d++){let y=p[d];n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var af=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,of=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,df=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ff=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,mf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_f=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Af=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ef=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Rf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Cf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,If=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Pf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Df=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Uf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ff=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Of=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Bf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,zf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Yf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,$f=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Qf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ep=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,np=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ip=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ap=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,op=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,lp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,up=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_p=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yp=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Sp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ep=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Rp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Cp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ip=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Np=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Up=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Op=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Vp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Wp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Xp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Yp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Jp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$p=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,rm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,am=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lm=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,um=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,dm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,fm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,pm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_m=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ym=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Am=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Em=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Im=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Nm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Um=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Om=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kt={alphahash_fragment:af,alphahash_pars_fragment:of,alphamap_fragment:lf,alphamap_pars_fragment:cf,alphatest_fragment:hf,alphatest_pars_fragment:uf,aomap_fragment:df,aomap_pars_fragment:ff,batching_pars_vertex:pf,batching_vertex:mf,begin_vertex:gf,beginnormal_vertex:_f,bsdfs:xf,iridescence_fragment:yf,bumpmap_pars_fragment:vf,clipping_planes_fragment:Mf,clipping_planes_pars_fragment:Sf,clipping_planes_pars_vertex:bf,clipping_planes_vertex:wf,color_fragment:Tf,color_pars_fragment:Af,color_pars_vertex:Ef,color_vertex:Rf,common:Cf,defaultnormal_vertex:If,displacementmap_pars_vertex:Pf,displacementmap_vertex:Lf,emissivemap_fragment:Df,emissivemap_pars_fragment:Nf,colorspace_fragment:Uf,colorspace_pars_fragment:Ff,envmap_fragment:Of,envmap_common_pars_fragment:Bf,envmap_pars_fragment:zf,envmap_pars_vertex:kf,envmap_physical_pars_fragment:$f,envmap_vertex:Gf,fog_vertex:Vf,fog_pars_vertex:Hf,fog_fragment:Wf,fog_pars_fragment:Xf,gradientmap_pars_fragment:qf,lightmap_pars_fragment:Yf,lights_lambert_fragment:Zf,lights_lambert_pars_fragment:Jf,lights_pars_begin:Kf,lights_toon_fragment:Qf,lights_toon_pars_fragment:jf,lights_phong_fragment:tp,lights_phong_pars_fragment:ep,lights_physical_fragment:np,lights_physical_pars_fragment:ip,lights_fragment_begin:sp,lights_fragment_maps:rp,lights_fragment_end:ap,lightprobes_pars_fragment:op,logdepthbuf_fragment:lp,logdepthbuf_pars_fragment:cp,logdepthbuf_pars_vertex:hp,logdepthbuf_vertex:up,map_fragment:dp,map_pars_fragment:fp,map_particle_fragment:pp,map_particle_pars_fragment:mp,metalnessmap_fragment:gp,metalnessmap_pars_fragment:_p,morphinstance_vertex:xp,morphcolor_vertex:yp,morphnormal_vertex:vp,morphtarget_pars_vertex:Mp,morphtarget_vertex:Sp,normal_fragment_begin:bp,normal_fragment_maps:wp,normal_pars_fragment:Tp,normal_pars_vertex:Ap,normal_vertex:Ep,normalmap_pars_fragment:Rp,clearcoat_normal_fragment_begin:Cp,clearcoat_normal_fragment_maps:Ip,clearcoat_pars_fragment:Pp,iridescence_pars_fragment:Lp,opaque_fragment:Dp,packing:Np,premultiplied_alpha_fragment:Up,project_vertex:Fp,dithering_fragment:Op,dithering_pars_fragment:Bp,roughnessmap_fragment:zp,roughnessmap_pars_fragment:kp,shadowmap_pars_fragment:Gp,shadowmap_pars_vertex:Vp,shadowmap_vertex:Hp,shadowmask_pars_fragment:Wp,skinbase_vertex:Xp,skinning_pars_vertex:qp,skinning_vertex:Yp,skinnormal_vertex:Zp,specularmap_fragment:Jp,specularmap_pars_fragment:Kp,tonemapping_fragment:$p,tonemapping_pars_fragment:Qp,transmission_fragment:jp,transmission_pars_fragment:tm,uv_pars_fragment:em,uv_pars_vertex:nm,uv_vertex:im,worldpos_vertex:sm,background_vert:rm,background_frag:am,backgroundCube_vert:om,backgroundCube_frag:lm,cube_vert:cm,cube_frag:hm,depth_vert:um,depth_frag:dm,distance_vert:fm,distance_frag:pm,equirect_vert:mm,equirect_frag:gm,linedashed_vert:_m,linedashed_frag:xm,meshbasic_vert:ym,meshbasic_frag:vm,meshlambert_vert:Mm,meshlambert_frag:Sm,meshmatcap_vert:bm,meshmatcap_frag:wm,meshnormal_vert:Tm,meshnormal_frag:Am,meshphong_vert:Em,meshphong_frag:Rm,meshphysical_vert:Cm,meshphysical_frag:Im,meshtoon_vert:Pm,meshtoon_frag:Lm,points_vert:Dm,points_frag:Nm,shadow_vert:Um,shadow_frag:Fm,sprite_vert:Om,sprite_frag:Bm},Mt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},Un={basic:{uniforms:qe([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:qe([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Ht(0)},envMapIntensity:{value:1}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:qe([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:qe([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:qe([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:qe([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:qe([Mt.points,Mt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:qe([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:qe([Mt.common,Mt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:qe([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:qe([Mt.sprite,Mt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distance:{uniforms:qe([Mt.common,Mt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distance_vert,fragmentShader:Kt.distance_frag},shadow:{uniforms:qe([Mt.lights,Mt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Un.physical={uniforms:qe([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};var lo={r:0,b:0,g:0},zm=new ye,iu=new Gt;iu.set(-1,0,0,0,1,0,0,0,1);function km(n,t,e,i,s,r){let a=new Ht(0),o=s===!0?0:1,l,c,h=null,p=0,f=null;function d(g){let S=g.isScene===!0?g.background:null;if(S&&S.isTexture){let v=g.backgroundBlurriness>0;S=t.get(S,v)}return S}function _(g){let S=!1,v=d(g);v===null?m(a,o):v&&v.isColor&&(m(v,1),S=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(g,S){let v=d(S);v&&v.isCubeTexture?(c===void 0&&(c=new kt(new $e(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:Pi(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,A,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(zm.makeRotationFromEuler(S.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(iu),c.material.toneMapped=se.getTransfer(v.colorSpace)!==ue,(h!==v||p!==v.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,p=v.version,f=n.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new kt(new yn(2,2),new un({name:"BackgroundMaterial",uniforms:Pi(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=se.getTransfer(v.colorSpace)!==ue,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||p!==v.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=v,p=v.version,f=n.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function m(g,S){g.getRGB(lo,Nl(n)),e.buffers.color.setClear(lo.r,lo.g,lo.b,S,r)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,S=1){a.set(g),o=S,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,m(a,o)},render:_,addToRenderList:y,dispose:u}}function Gm(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,a=!1;function o(P,F,H,C,z){let W=!1,V=p(P,C,H,F);r!==V&&(r=V,c(r.object)),W=d(P,C,H,z),W&&_(P,C,H,z),z!==null&&t.update(z,n.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,v(P,F,H,C),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return n.createVertexArray()}function c(P){return n.bindVertexArray(P)}function h(P){return n.deleteVertexArray(P)}function p(P,F,H,C){let z=C.wireframe===!0,W=i[F.id];W===void 0&&(W={},i[F.id]=W);let V=P.isInstancedMesh===!0?P.id:0,et=W[V];et===void 0&&(et={},W[V]=et);let O=et[H.id];O===void 0&&(O={},et[H.id]=O);let X=O[z];return X===void 0&&(X=f(l()),O[z]=X),X}function f(P){let F=[],H=[],C=[];for(let z=0;z<e;z++)F[z]=0,H[z]=0,C[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:H,attributeDivisors:C,object:P,attributes:{},index:null}}function d(P,F,H,C){let z=r.attributes,W=F.attributes,V=0,et=H.getAttributes();for(let O in et)if(et[O].location>=0){let q=z[O],ft=W[O];if(ft===void 0&&(O==="instanceMatrix"&&P.instanceMatrix&&(ft=P.instanceMatrix),O==="instanceColor"&&P.instanceColor&&(ft=P.instanceColor)),q===void 0||q.attribute!==ft||ft&&q.data!==ft.data)return!0;V++}return r.attributesNum!==V||r.index!==C}function _(P,F,H,C){let z={},W=F.attributes,V=0,et=H.getAttributes();for(let O in et)if(et[O].location>=0){let q=W[O];q===void 0&&(O==="instanceMatrix"&&P.instanceMatrix&&(q=P.instanceMatrix),O==="instanceColor"&&P.instanceColor&&(q=P.instanceColor));let ft={};ft.attribute=q,q&&q.data&&(ft.data=q.data),z[O]=ft,V++}r.attributes=z,r.attributesNum=V,r.index=C}function y(){let P=r.newAttributes;for(let F=0,H=P.length;F<H;F++)P[F]=0}function m(P){u(P,0)}function u(P,F){let H=r.newAttributes,C=r.enabledAttributes,z=r.attributeDivisors;H[P]=1,C[P]===0&&(n.enableVertexAttribArray(P),C[P]=1),z[P]!==F&&(n.vertexAttribDivisor(P,F),z[P]=F)}function g(){let P=r.newAttributes,F=r.enabledAttributes;for(let H=0,C=F.length;H<C;H++)F[H]!==P[H]&&(n.disableVertexAttribArray(H),F[H]=0)}function S(P,F,H,C,z,W,V){V===!0?n.vertexAttribIPointer(P,F,H,z,W):n.vertexAttribPointer(P,F,H,C,z,W)}function v(P,F,H,C){y();let z=C.attributes,W=H.getAttributes(),V=F.defaultAttributeValues;for(let et in W){let O=W[et];if(O.location>=0){let X=z[et];if(X===void 0&&(et==="instanceMatrix"&&P.instanceMatrix&&(X=P.instanceMatrix),et==="instanceColor"&&P.instanceColor&&(X=P.instanceColor)),X!==void 0){let q=X.normalized,ft=X.itemSize,wt=t.get(X);if(wt===void 0)continue;let Z=wt.buffer,at=wt.type,bt=wt.bytesPerElement,Ct=at===n.INT||at===n.UNSIGNED_INT||X.gpuType===Ta;if(X.isInterleavedBufferAttribute){let xt=X.data,Dt=xt.isInterleavedBuffer===!0?xt.stride:xt.itemSize,he=X.offset;if(xt.isInstancedInterleavedBuffer||xt.isInstancedBufferAttribute){for(let Ut=0;Ut<O.locationSize;Ut++)u(O.location+Ut,xt.meshPerAttribute);P.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let Ut=0;Ut<O.locationSize;Ut++)m(O.location+Ut);n.bindBuffer(n.ARRAY_BUFFER,Z);for(let Ut=0;Ut<O.locationSize;Ut++)S(O.location+Ut,ft/O.locationSize,at,q,Dt*bt,(he+ft/O.locationSize*Ut)*bt,Ct)}else{if(X.isInstancedBufferAttribute){for(let xt=0;xt<O.locationSize;xt++)u(O.location+xt,X.meshPerAttribute);P.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let xt=0;xt<O.locationSize;xt++)m(O.location+xt);n.bindBuffer(n.ARRAY_BUFFER,Z);for(let xt=0;xt<O.locationSize;xt++)S(O.location+xt,ft/O.locationSize,at,q,ft*bt,ft/O.locationSize*xt*bt,Ct)}}else if(V!==void 0){let q=V[et];if(q!==void 0)switch(q.length){case 2:n.vertexAttrib2fv(O.location,q);break;case 3:n.vertexAttrib3fv(O.location,q);break;case 4:n.vertexAttrib4fv(O.location,q);break;default:n.vertexAttrib1fv(O.location,q)}}}}g()}function T(){I();for(let P in i){let F=i[P];for(let H in F){let C=F[H];for(let z in C){let W=C[z];for(let V in W)h(W[V].object),delete W[V];delete C[z]}}delete i[P]}}function A(P){if(i[P.id]===void 0)return;let F=i[P.id];for(let H in F){let C=F[H];for(let z in C){let W=C[z];for(let V in W)h(W[V].object),delete W[V];delete C[z]}}delete i[P.id]}function x(P){for(let F in i){let H=i[F];for(let C in H){let z=H[C];if(z[P.id]===void 0)continue;let W=z[P.id];for(let V in W)h(W[V].object),delete W[V];delete z[P.id]}}}function M(P){for(let F in i){let H=i[F],C=P.isInstancedMesh===!0?P.id:0,z=H[C];if(z!==void 0){for(let W in z){let V=z[W];for(let et in V)h(V[et].object),delete V[et];delete z[W]}delete H[C],Object.keys(H).length===0&&delete i[F]}}}function I(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:M,releaseStatesOfProgram:x,initAttributes:y,enableAttribute:m,disableUnusedAttributes:g}}function Vm(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Hm(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==bn&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let M=x===Sn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==Qe&&x!==Mn&&!M&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Ot("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&p===!1;e.reversedDepthBuffer===!0&&p===!1&&Ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&p===!0&&Ot("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:p,maxTextures:d,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:g,maxVaryings:S,maxFragmentUniforms:v,maxSamples:T,samples:A}}function Wm(n){let t=this,e=null,i=0,s=!1,r=!1,a=new xn,o=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){let d=p.length!==0||f||i!==0||s;return s=f,i=p.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,f){e=h(p,f,0)},this.setState=function(p,f,d){let _=p.clippingPlanes,y=p.clipIntersection,m=p.clipShadows,u=n.get(p);if(!s||_===null||_.length===0||r&&!m)r?h(null):c();else{let g=r?0:i,S=g*4,v=u.clippingState||null;l.value=v,v=h(_,f,S,d);for(let T=0;T!==S;++T)v[T]=e[T];u.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(p,f,d,_){let y=p!==null?p.length:0,m=null;if(y!==0){if(m=l.value,_!==!0||m===null){let u=d+y*4,g=f.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<u)&&(m=new Float32Array(u));for(let S=0,v=d;S!==y;++S,v+=4)a.copy(p[S]).applyMatrix4(g,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}var lr=class extends en{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Ns(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new $e(5,5,5),r=new un({name:"CubemapFromEquirect",uniforms:Pi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ke,blending:Ai});r.uniforms.tEquirect.value=e;let a=new kt(s,r),o=e.minFilter;return e.minFilter===Jn&&(e.minFilter=Je),new os(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}},Uh=256,Xm=3,qm=20,su=256,ru=16,Ym=3,Zm=new U,Jm=new Ht,ho=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new os(1,10,null),this._boxMesh=new kt(new $e(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=Zm}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let p=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,_=l.autoClearStencil,y=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(t.background=l.getClearColor(Jm));let m=new os(i,s,h);return m.position.copy(o),m.update(l,t),l.autoClear=p,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=_,t.background=y,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Uh,Il(t))}_fromTexture(t,e){t.mapping===Ri||t.mapping===hs?this._setSize(t.image.length===0?Uh:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=Fh(t,!1,!1),i=Math.log2(t)-Xm;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Fh(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Ri||t.mapping===hs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bh()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Oh()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Km(),this._integrationMaterial=$m());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/ru);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-Ym)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(su*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Qm());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}};function Fh(n,t,e){return new lr(n,{minFilter:Jn,generateMipmaps:t,type:Sn,colorSpace:As,depthBuffer:e})}function cr(n,t,e){return new un({name:n,uniforms:t,vertexShader:Kt.cube_vert,fragmentShader:e,side:ke,blending:Ai,depthTest:!1,depthWrite:!1})}function Km(){return cr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${su}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function $m(){return cr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:ru}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Qm(){return cr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${qm}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Oh(){return cr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Bh(){return cr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function jm(n){let t=new WeakMap,e=new WeakMap,i=null;function s(f,d=!1){return f==null?null:d?a(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Sa||d===ba)if(t.has(f)){let _=t.get(f).texture;return o(_,f.mapping)}else{let _=f.image;if(_&&_.height>0){let y=new lr(_.height);return y.fromEquirectangularTexture(n,f),t.set(f,y),f.addEventListener("dispose",c),o(y.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,_=d===Sa||d===ba,y=d===Ri||d===hs;if(_||y){let m=e.get(f),u=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==u)return i===null&&(i=new ho(n)),m=_?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{let g=f.image;return _&&g&&g.height>0||y&&g&&l(g)?(i===null&&(i=new ho(n)),m=_?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function o(f,d){return d===Sa?f.mapping=Ri:d===ba&&(f.mapping=hs),f}function l(f){let d=0,_=6;for(let y=0;y<_;y++)f[y]!==void 0&&d++;return d===_}function c(f){let d=f.target;d.removeEventListener("dispose",c);let _=t.get(d);_!==void 0&&(t.delete(d),_.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let _=e.get(d);_!==void 0&&(e.delete(d),_.dispose())}function p(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:p}}function tg(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&wi("WebGLRenderer: "+i+" extension not supported."),s}}}function eg(n,t,e,i){let s={},r=new WeakMap,a=new FinalizationRegistry(_=>delete s[_]);function o(_){l(_.target)}function l(_){_.index!==null&&t.remove(_.index);for(let m in _.attributes)t.remove(_.attributes[m]);_.removeEventListener("dispose",o),delete s[_.id],a.unregister(_);let y=r.get(_);y&&(t.remove(y),r.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function c(_,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),e.memory.geometries++),y}function h(_){let y=_.attributes;for(let m in y)t.update(y[m],n.ARRAY_BUFFER)}function p(_){let y=_.index,m=_.attributes.position,u=0;if(m===void 0)return;let g=y!==null?y.array.length:m.array.length/3-1,S=m.count>=65535?Ds:Ls,v=new S(Math.ceil(g/3)*6,1),T=v.array;if(y!==null){let x=y.array;u=y.version;for(let M=0,I=0;M<g;M+=3){let R=x[M+0],P=x[M+1],F=x[M+2];T[I++]=R,T[I++]=P,T[I++]=P,T[I++]=F,T[I++]=F,T[I++]=R}}else{u=m.version;for(let x=0,M=0;x<g;x+=3){let I=x+0,R=x+1,P=x+2;T[M++]=I,T[M++]=R,T[M++]=R,T[M++]=P,T[M++]=P,T[M++]=I}}v.version=u;let A=r.get(_);A&&t.remove(A),r.set(_,v)}function f(_){let y=r.get(_);if(y){let m=_.index;m!==null&&y.version<m.version&&p(_)}else p(_);return r.get(_)}function d(){for(let _ in s){let y=s[_].deref();y!==void 0&&l(y)}}return{get:c,update:h,getWireframeAttribute:f,dispose:d}}function ng(n,t,e){let i;function s(p){i=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,f){n.drawElements(i,f,r,p*a),e.update(f,i,1)}function c(p,f,d){d!==0&&(n.drawElementsInstanced(i,f,r,p*a,d),e.update(f,i,d))}function h(p,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,p,0,d);let y=0;for(let m=0;m<d;m++)y+=f[m];e.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function ig(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:Bt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function sg(n,t,e){let i=new WeakMap,s=new ve;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0,f=i.get(o);if(f===void 0||f.count!==p){let I=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",I)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],g=o.morphAttributes.color||[],S=0;d===!0&&(S=1),_===!0&&(S=2),y===!0&&(S=3);let v=o.attributes.position.count*S,T=1;v>t.maxTextureSize&&(T=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let A=new Float32Array(v*T*4*p),x=new Cs(A,v,T,p);x.type=Mn,x.needsUpdate=!0;let M=S*4;for(let R=0;R<p;R++){let P=m[R],F=u[R],H=g[R],C=v*T*4*R;for(let z=0;z<P.count;z++){let W=z*M;d===!0&&(s.fromBufferAttribute(P,z),A[C+W+0]=s.x,A[C+W+1]=s.y,A[C+W+2]=s.z,A[C+W+3]=0),_===!0&&(s.fromBufferAttribute(F,z),A[C+W+4]=s.x,A[C+W+5]=s.y,A[C+W+6]=s.z,A[C+W+7]=0),y===!0&&(s.fromBufferAttribute(H,z),A[C+W+8]=s.x,A[C+W+9]=s.y,A[C+W+10]=s.z,A[C+W+11]=H.itemSize===4?s.w:1)}}f={count:p,texture:x,size:new rt(v,T)},i.set(o,f),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let d=0;for(let y=0;y<c.length;y++)d+=c[y];let _=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function rg(n,t,e,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,p=c.geometry,f=t.get(c,p);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var ag={[cl]:"LINEAR_TONE_MAPPING",[hl]:"REINHARD_TONE_MAPPING",[ul]:"CINEON_TONE_MAPPING",[dl]:"ACES_FILMIC_TONE_MAPPING",[pl]:"AGX_TONE_MAPPING",[ml]:"NEUTRAL_TONE_MAPPING",[fl]:"CUSTOM_TONE_MAPPING"};function og(n,t,e,i,s,r){let a=new en(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new ze;h.setAttribute("position",new re([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new re([0,2,0,0,2,0],2));let p=new oa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new kt(h,p),d=new $s(-1,1,1,-1,0,1),_=null,y=null,m=!1,u,g=null,S=[],v=!1;this.setSize=function(T,A){a.setSize(T,A),o!==null&&o.setSize(T,A),l!==null&&l.setSize(T,A);for(let x=0;x<S.length;x++){let M=S[x];M.setSize&&M.setSize(T,A)}},this.setEffects=function(T){S=T,v=S.length>0&&S[0].isRenderPass===!0;let A=a.width,x=a.height;S.length>0&&o===null&&(o=new en(A,x,{type:Sn,depthBuffer:!1,stencilBuffer:!1}),l=new en(A,x,{type:Sn,depthBuffer:!1,stencilBuffer:!1}));let M=s===!0&&S.some(I=>I.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&c===null&&(c=new Zn(A,x),r===!0&&(c.format=Kn,c.type=Ci)),a.dispose(),a.depthTexture=M?c:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let I=0;I<S.length;I++){let R=S[I];R.setSize&&R.setSize(A,x),M&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(T,A){if(m||T.toneMapping===Dn&&S.length===0)return!1;if(g=A,A!==null){let x=A.width,M=A.height;(a.width!==x||a.height!==M)&&this.setSize(x,M)}return v===!1&&T.setRenderTarget(a),u=T.toneMapping,T.toneMapping=Dn,!0},this.hasRenderPass=function(){return v},this.end=function(T,A){T.toneMapping=u,m=!0;let x=a,M=o;for(let I=0;I<S.length;I++){let R=S[I];R.enabled!==!1&&(R.render(T,M,x,A),R.needsSwap!==!1&&(x=M,M=M===o?l:o))}if(_!==T.outputColorSpace||y!==T.toneMapping){_=T.outputColorSpace,y=T.toneMapping,p.defines={},se.getTransfer(_)===ue&&(p.defines.SRGB_TRANSFER="");let I=ag[y];I&&(p.defines[I]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=x.texture,T.setRenderTarget(g),T.render(f,d),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),p.dispose()}}var au=new Ke,ou=new Zn(1,1),lu=new Us(1),cu=new Cs,hu=new $r,uu=new Ns,zh=[],kh=[],Gh=new Float32Array(16),Vh=new Float32Array(9),Hh=new Float32Array(4);function fs(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=zh[s];if(r===void 0&&(r=new Float32Array(s),zh[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Ce(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ie(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function fo(n,t){let e=kh[t];e===void 0&&(e=new Int32Array(t),kh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function lg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function cg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;n.uniform2fv(this.addr,t),Ie(e,t)}}function hg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;n.uniform3fv(this.addr,t),Ie(e,t)}}function ug(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;n.uniform4fv(this.addr,t),Ie(e,t)}}function dg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ce(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(Ce(e,i))return;Hh.set(i),n.uniformMatrix2fv(this.addr,!1,Hh),Ie(e,i)}}function fg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ce(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(Ce(e,i))return;Vh.set(i),n.uniformMatrix3fv(this.addr,!1,Vh),Ie(e,i)}}function pg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ce(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(Ce(e,i))return;Gh.set(i),n.uniformMatrix4fv(this.addr,!1,Gh),Ie(e,i)}}function mg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function gg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;n.uniform2iv(this.addr,t),Ie(e,t)}}function _g(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;n.uniform3iv(this.addr,t),Ie(e,t)}}function xg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;n.uniform4iv(this.addr,t),Ie(e,t)}}function yg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function vg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;n.uniform2uiv(this.addr,t),Ie(e,t)}}function Mg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;n.uniform3uiv(this.addr,t),Ie(e,t)}}function Sg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;n.uniform4uiv(this.addr,t),Ie(e,t)}}function po(n){return n.version===0&&(n.compareFunction=Al,n.needsUpdate=!0),n}function bg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=po(ou):r=au,e.setTexture2D(t||r,s)}function wg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||hu,s)}function Tg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=po(lu):r=uu,e.setTextureCube(t||r,s)}function Ag(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||cu,s)}function Eg(n){switch(n){case 5126:return lg;case 35664:return cg;case 35665:return hg;case 35666:return ug;case 35674:return dg;case 35675:return fg;case 35676:return pg;case 5124:case 35670:return mg;case 35667:case 35671:return gg;case 35668:case 35672:return _g;case 35669:case 35673:return xg;case 5125:return yg;case 36294:return vg;case 36295:return Mg;case 36296:return Sg;case 35678:case 36198:case 36298:case 36306:case 35682:return bg;case 35679:case 36299:case 36307:return wg;case 35680:case 36300:case 36308:case 36293:return Tg;case 36289:case 36303:case 36311:case 36292:return Ag}}function Rg(n,t){n.uniform1fv(this.addr,t)}function Cg(n,t){let e=fs(t,this.size,2);n.uniform2fv(this.addr,e)}function Ig(n,t){let e=fs(t,this.size,3);n.uniform3fv(this.addr,e)}function Pg(n,t){let e=fs(t,this.size,4);n.uniform4fv(this.addr,e)}function Lg(n,t){let e=fs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Dg(n,t){let e=fs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Ng(n,t){let e=fs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Ug(n,t){n.uniform1iv(this.addr,t)}function Fg(n,t){n.uniform2iv(this.addr,t)}function Og(n,t){n.uniform3iv(this.addr,t)}function Bg(n,t){n.uniform4iv(this.addr,t)}function zg(n,t){n.uniform1uiv(this.addr,t)}function kg(n,t){n.uniform2uiv(this.addr,t)}function Gg(n,t){n.uniform3uiv(this.addr,t)}function Vg(n,t){n.uniform4uiv(this.addr,t)}function Hg(n,t,e){let i=this.cache,s=t.length,r=fo(e,s);Ce(i,r)||(n.uniform1iv(this.addr,r),Ie(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=po(ou):a=au;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Wg(n,t,e){let i=this.cache,s=t.length,r=fo(e,s);Ce(i,r)||(n.uniform1iv(this.addr,r),Ie(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||hu,r[a])}function Xg(n,t,e){let i=this.cache,s=t.length,r=fo(e,s);Ce(i,r)||(n.uniform1iv(this.addr,r),Ie(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=po(lu):a=uu;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function qg(n,t,e){let i=this.cache,s=t.length,r=fo(e,s);Ce(i,r)||(n.uniform1iv(this.addr,r),Ie(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||cu,r[a])}function Yg(n){switch(n){case 5126:return Rg;case 35664:return Cg;case 35665:return Ig;case 35666:return Pg;case 35674:return Lg;case 35675:return Dg;case 35676:return Ng;case 5124:case 35670:return Ug;case 35667:case 35671:return Fg;case 35668:case 35672:return Og;case 35669:case 35673:return Bg;case 5125:return zg;case 36294:return kg;case 36295:return Gg;case 36296:return Vg;case 35678:case 36198:case 36298:case 36306:case 35682:return Hg;case 35679:case 36299:case 36307:return Wg;case 35680:case 36300:case 36308:case 36293:return Xg;case 36289:case 36303:case 36311:case 36292:return qg}}var kl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Eg(e.type)}},Gl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Yg(e.type)}},Vl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},Bl=/(\w+)(\])?(\[|\.)?/g;function Wh(n,t){n.seq.push(t),n.map[t.id]=t}function Zg(n,t,e){let i=n.name,s=i.length;for(Bl.lastIndex=0;;){let r=Bl.exec(i),a=Bl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Wh(e,c===void 0?new kl(o,n,t):new Gl(o,n,t));break}else{let p=e.map[o];p===void 0&&(p=new Vl(o),Wh(e,p)),e=p}}}var ds=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Zg(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function Xh(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Jg=37297,Kg=0;function $g(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var qh=new Gt;function Qg(n){se._getMatrix(qh,se.workingColorSpace,n);let t=`mat3( ${qh.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(n)){case Es:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return Ot("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Yh(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+$g(n.getShaderSource(t),o)}else return r}function jg(n,t){let e=Qg(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var t0={[cl]:"Linear",[hl]:"Reinhard",[ul]:"Cineon",[dl]:"ACESFilmic",[pl]:"AgX",[ml]:"Neutral",[fl]:"Custom"};function e0(n,t){let e=t0[t];return e===void 0?(Ot("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var co=new U;function n0(){se.getLuminanceCoefficients(co);let n=co.x.toFixed(4),t=co.y.toFixed(4),e=co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function i0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(or).join(`
`)}function s0(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function r0(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function or(n){return n!==""}function Zh(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Jh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var a0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hl(n){return n.replace(a0,o0)}function o0(n,t){let e=Kt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Hl(e)}var l0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kh(n){return n.replace(l0,c0)}function c0(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $h(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var h0={[Qs]:"SHADOWMAP_TYPE_PCF",[ls]:"SHADOWMAP_TYPE_VSM"};function u0(n){return h0[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var d0={[hs]:"ENVMAP_MODE_REFRACTION"};function f0(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":d0[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var p0={[ll]:"ENVMAP_BLENDING_MULTIPLY",[ch]:"ENVMAP_BLENDING_MIX",[hh]:"ENVMAP_BLENDING_ADD"};function m0(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":p0[n.combine]||"ENVMAP_BLENDING_NONE"}function g0(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=u0(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=f0(e),p=m0(e),f=i0(e),d=s0(r),_=s.createProgram(),y,m,u=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(or).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(or).join(`
`),m.length>0&&(m+=`
`)):(y=[$h(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(or).join(`
`),m=[$h(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+p:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Dn?"#define TONE_MAPPING":"",e.toneMapping!==Dn?Kt.tonemapping_pars_fragment:"",e.toneMapping!==Dn?e0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,jg("linearToOutputTexel",e.outputColorSpace),n0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(or).join(`
`)),a=Hl(a),a=Zh(a,e),a=Jh(a,e),o=Hl(o),o=Zh(o,e),o=Jh(o,e),a=Kh(a),o=Kh(o),e.isRawShaderMaterial!==!0&&(u=`#version 300 es
`,y=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",e.glslVersion===El?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===El?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let g=u+y+a,S=u+m+o,v=Xh(s,s.VERTEX_SHADER,g),T=Xh(s,s.FRAGMENT_SHADER,S);s.attachShader(_,v),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(R){if(n.debug.checkShaderErrors){let P=s.getProgramInfoLog(_)||"",F=s.getShaderInfoLog(v)||"",H=s.getShaderInfoLog(T)||"",C=P.trim(),z=F.trim(),W=H.trim(),V=!0,et=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,v,T);else{let O=Yh(s,v,"vertex"),X=Yh(s,T,"fragment");Bt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+C+`
`+O+`
`+X)}else C!==""?Ot("WebGLProgram: Program Info Log:",C):(z===""||W==="")&&(et=!1);et&&(R.diagnostics={runnable:V,programLog:C,vertexShader:{log:z,prefix:y},fragmentShader:{log:W,prefix:m}})}s.deleteShader(v),s.deleteShader(T),x=new ds(s,_),M=r0(s,_)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(_,Jg)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Kg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=v,this.fragmentShader=T,this}var _0=0,Wl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Xl(t),e.set(t,i)),i}},Xl=class{constructor(t){this.id=_0++,this.code=t,this.usedTimes=0}};function x0(n){return n===mi||n===sr||n===rr}function y0(n,t,e,i,s,r){let a=new Is,o=new Wl,l=new Set,c=[],h=new Map,p=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,M,I,R,P,F){let H=R.fog,C=P.geometry,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,V=t.get(x.envMap||z,W),et=f[x.type],O=i.precision;x.precision!==null&&(O=i.getMaxPrecision(x.precision),O!==x.precision&&Ot("WebGLProgram.getParameters:",x.precision,"not supported, using",O,"instead."));let X=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,q=X!==void 0?X.length:0,ft=0;C.morphAttributes.position!==void 0&&(ft=1),C.morphAttributes.normal!==void 0&&(ft=2),C.morphAttributes.color!==void 0&&(ft=3);let wt,Z,at,bt;if(et){let vt=Un[et];wt=vt.vertexShader,Z=vt.fragmentShader}else{wt=x.vertexShader,Z=x.fragmentShader;let vt=o.getVertexShaderStage(x),de=o.getFragmentShaderStage(x);o.update(x,vt,de),at=vt.id,bt=de.id}let Ct=n.getRenderTarget(),xt=n.state.buffers.depth.getReversed(),Dt=P.isInstancedMesh===!0,he=P.isBatchedMesh===!0,Ut=!!x.map,Xt=!!x.matcap,jt=!!V,tt=jt&&V.isPMREMTexture===!0,ht=!!x.aoMap,ot=!!x.lightMap,Tt=!!x.bumpMap&&x.wireframe===!1,yt=!!x.normalMap,Wt=!!x.displacementMap,Pt=!!x.emissiveMap,te=!!x.metalnessMap,ee=!!x.roughnessMap,le=x.anisotropy>0,N=x.clearcoat>0,Te=x.diffuseRoughness>0,Qt=x.dispersion>0,fe=x.retroreflectivity>0,mt=x.iridescence>0,we=x.sheen>0,Ft=x.transmission>0,zt=le&&!!x.anisotropyMap,E=N&&!!x.clearcoatMap,b=N&&!!x.clearcoatNormalMap,k=N&&!!x.clearcoatRoughnessMap,nt=Te&&!!x.diffuseRoughnessMap,j=mt&&!!x.iridescenceMap,lt=mt&&!!x.iridescenceThicknessMap,gt=we&&!!x.sheenColorMap,K=we&&!!x.sheenRoughnessMap,$=!!x.specularMap,ut=!!x.specularColorMap,L=!!x.specularIntensityMap,Q=Ft&&!!x.transmissionMap,J=Ft&&!!x.thicknessMap,dt=!!x.gradientMap,st=!!x.alphaMap,ct=x.alphaTest>0,Lt=!!x.alphaHash,Zt=!!x.extensions,it=Dn;x.toneMapped&&(Ct===null||Ct.isXRRenderTarget===!0)&&(it=n.toneMapping);let Nt=tt?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,qt={shaderID:et,shaderType:x.type,shaderName:x.name,vertexShader:wt,fragmentShader:Z,defines:x.defines,customVertexShaderID:at,customFragmentShaderID:bt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:O,batching:he,batchingColor:he&&P._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&P.instanceColor!==null,instancingMorph:Dt&&P.morphTexture!==null,outputColorSpace:Ct===null?n.outputColorSpace:Ct.isXRRenderTarget===!0?Ct.texture.colorSpace:se.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ut,matcap:Xt,envMap:jt,envMapMode:jt&&V.mapping,envMapPMREM:tt,envMapMaxLod:tt?Nt.length-1:null,envMapSize:tt?Nt[0].width:null,aoMap:ht,lightMap:ot,bumpMap:Tt,normalMap:yt,displacementMap:Wt,emissiveMap:Pt,normalMapObjectSpace:yt&&x.normalMapType===fh,normalMapTangentSpace:yt&&x.normalMapType===oo,packedNormalMap:yt&&x.normalMapType===oo&&x0(x.normalMap.format),metalnessMap:te,roughnessMap:ee,anisotropy:le,anisotropyMap:zt,clearcoat:N,clearcoatMap:E,clearcoatNormalMap:b,clearcoatRoughnessMap:k,diffuseRoughness:Te,diffuseRoughnessMap:nt,dispersion:Qt,retroreflection:fe,iridescence:mt,iridescenceMap:j,iridescenceThicknessMap:lt,sheen:we,sheenColorMap:gt,sheenRoughnessMap:K,specularMap:$,specularColorMap:ut,specularIntensityMap:L,transmission:Ft,transmissionMap:Q,thicknessMap:J,gradientMap:dt,opaque:x.transparent===!1&&x.blending===cs&&x.alphaToCoverage===!1,alphaMap:st,alphaTest:ct,alphaHash:Lt,combine:x.combine,mapUv:Ut&&d(x.map.channel),aoMapUv:ht&&d(x.aoMap.channel),lightMapUv:ot&&d(x.lightMap.channel),bumpMapUv:Tt&&d(x.bumpMap.channel),normalMapUv:yt&&d(x.normalMap.channel),displacementMapUv:Wt&&d(x.displacementMap.channel),emissiveMapUv:Pt&&d(x.emissiveMap.channel),metalnessMapUv:te&&d(x.metalnessMap.channel),roughnessMapUv:ee&&d(x.roughnessMap.channel),anisotropyMapUv:zt&&d(x.anisotropyMap.channel),clearcoatMapUv:E&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:b&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&d(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:nt&&d(x.diffuseRoughnessMap.channel),iridescenceMapUv:j&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:K&&d(x.sheenRoughnessMap.channel),specularMapUv:$&&d(x.specularMap.channel),specularColorMapUv:ut&&d(x.specularColorMap.channel),specularIntensityMapUv:L&&d(x.specularIntensityMap.channel),transmissionMapUv:Q&&d(x.transmissionMap.channel),thicknessMapUv:J&&d(x.thicknessMap.channel),alphaMapUv:st&&d(x.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(yt||le),vertexNormals:!!C.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!C.attributes.uv&&(Ut||st),fog:!!H,useFog:x.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||C.attributes.normal===void 0&&yt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:xt,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:ft,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:F.filter(vt=>vt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:it,decodeVideoTexture:Ut&&x.map.isVideoTexture===!0&&se.getTransfer(x.map.colorSpace)===ue,decodeVideoTextureEmissive:Pt&&x.emissiveMap.isVideoTexture===!0&&se.getTransfer(x.emissiveMap.colorSpace)===ue,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Fe,flipSided:x.side===ke,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Zt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&x.extensions.multiDraw===!0||he)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return qt.vertexUv1s=l.has(1),qt.vertexUv2s=l.has(2),qt.vertexUv3s=l.has(3),l.clear(),qt}function y(x){let M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(let I in x.defines)M.push(I),M.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(m(M,x),u(M,x),M.push(n.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function m(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapPMREM),x.push(M.envMapMaxLod),x.push(M.envMapSize),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.diffuseRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.numSunLights),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numSunLightShadows),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.numLightProbeGrids),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function u(x,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function g(x){let M=f[x.type],I;if(M){let R=Un[M];I=Lh.clone(R.uniforms)}else I=x.uniforms;return I}function S(x,M){let I=h.get(M);return I!==void 0?++I.usedTimes:(I=new g0(n,M,x,s),c.push(I),h.set(M,I)),I}function v(x){if(--x.usedTimes===0){let M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function A(){o.dispose()}return{getParameters:_,getProgramCacheKey:y,getUniforms:g,acquireProgram:S,releaseProgram:v,releaseShaderCache:T,programs:c,dispose:A}}function v0(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function M0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Qh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function jh(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,_,y,m,u){let g=n[t];return g===void 0?(g={id:f.id,object:f,geometry:d,material:_,materialVariant:a(f),groupOrder:y,renderOrder:f.renderOrder,z:m,group:u},n[t]=g):(g.id=f.id,g.object=f,g.geometry=d,g.material=_,g.materialVariant=a(f),g.groupOrder=y,g.renderOrder=f.renderOrder,g.z=m,g.group=u),t++,g}function l(f,d,_,y,m,u,g){g.reversedDepth===!0&&(m=-m);let S=o(f,d,_,y,m,u);_.transmission>0?i.push(S):_.transparent===!0?s.push(S):e.push(S)}function c(f,d,_,y,m,u){let g=o(f,d,_,y,m,u);_.transmission>0?i.unshift(g):_.transparent===!0?s.unshift(g):e.unshift(g)}function h(f,d){e.length>1&&e.sort(f||M0),i.length>1&&i.sort(d||Qh),s.length>1&&s.sort(d||Qh)}function p(){for(let f=t,d=n.length;f<d;f++){let _=n[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:p,sort:h}}function S0(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new jh,n.set(i,[a])):s>=r.length?(a=new jh,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function b0(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new U,color:new Ht};break;case"SpotLight":e={position:new U,direction:new U,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new U,halfWidth:new U,halfHeight:new U};break}return n[t.id]=e,e}}}function w0(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var T0=0;function A0(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function E0(n){let t=new b0,e=w0(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);let s=new U,r=new ye,a=new ye;function o(c){let h=0,p=0,f=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let d=0,_=0,y=0,m=0,u=0,g=0,S=0,v=0,T=0,A=0,x=0,M=0,I=0,R=0;c.sort(A0);for(let F=0,H=c.length;F<H;F++){let C=c[F],z=C.color,W=C.intensity,V=C.distance,et=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===mi?et=C.shadow.map.texture:et=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=z.r*W,p+=z.g*W,f+=z.b*W;else if(C.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(C.sh.coefficients[O],W);R++}else if(C.isSunLight){let O=t.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let X=C.shadow,q=e.get(C);q.shadowIntensity=X.intensity,q.shadowBias=X.bias,q.shadowNormalBias=X.normalBias,q.shadowRadius=X.radius,q.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),i.sunShadow[_]=q,i.sunShadowMap[_]=et;let ft=X.getViewportCount();for(let wt=0;wt<ft;wt++)i.sunShadowMatrix[y+wt]=X.getMatrix(wt),i.sunShadowCascade[y+wt]=X._cascadeData[wt];y+=ft,_++}i.sun[d]=O,d++}else if(C.isDirectionalLight){let O=t.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let X=C.shadow,q=e.get(C);q.shadowIntensity=X.intensity,q.shadowBias=X.bias,q.shadowNormalBias=X.normalBias,q.shadowRadius=X.radius,q.shadowMapSize=X.mapSize,i.directionalShadow[m]=q,i.directionalShadowMap[m]=et,i.directionalShadowMatrix[m]=C.shadow.matrix,T++}i.directional[m]=O,m++}else if(C.isSpotLight){let O=t.get(C);O.position.setFromMatrixPosition(C.matrixWorld),O.color.copy(z).multiplyScalar(W),O.distance=V,O.coneCos=Math.cos(C.angle),O.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),O.decay=C.decay,i.spot[g]=O;let X=C.shadow;if(C.map&&(i.spotLightMap[M]=C.map,M++,X.updateMatrices(C),C.castShadow&&I++),i.spotLightMatrix[g]=X.matrix,C.castShadow){let q=e.get(C);q.shadowIntensity=X.intensity,q.shadowBias=X.bias,q.shadowNormalBias=X.normalBias,q.shadowRadius=X.radius,q.shadowMapSize=X.mapSize,i.spotShadow[g]=q,i.spotShadowMap[g]=et,x++}g++}else if(C.isRectAreaLight){let O=t.get(C);O.color.copy(z).multiplyScalar(W),O.halfWidth.set(C.width*.5,0,0),O.halfHeight.set(0,C.height*.5,0),i.rectArea[S]=O,S++}else if(C.isPointLight){let O=t.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),O.distance=C.distance,O.decay=C.decay,C.castShadow){let X=C.shadow,q=e.get(C);q.shadowIntensity=X.intensity,q.shadowBias=X.bias,q.shadowNormalBias=X.normalBias,q.shadowRadius=X.radius,q.shadowMapSize=X.mapSize,q.shadowCameraNear=X.camera.near,q.shadowCameraFar=X.camera.far,i.pointShadow[u]=q,i.pointShadowMap[u]=et,i.pointShadowMatrix[u]=C.shadow.matrix,A++}i.point[u]=O,u++}else if(C.isHemisphereLight){let O=t.get(C);O.skyColor.copy(C.color).multiplyScalar(W),O.groundColor.copy(C.groundColor).multiplyScalar(W),i.hemi[v]=O,v++}}S>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Mt.LTC_FLOAT_1,i.rectAreaLTC2=Mt.LTC_FLOAT_2):(i.rectAreaLTC1=Mt.LTC_HALF_1,i.rectAreaLTC2=Mt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=f;let P=i.hash;(P.sunLength!==d||P.directionalLength!==m||P.pointLength!==u||P.spotLength!==g||P.rectAreaLength!==S||P.hemiLength!==v||P.numSunShadows!==_||P.numDirectionalShadows!==T||P.numPointShadows!==A||P.numSpotShadows!==x||P.numSpotMaps!==M||P.numLightProbes!==R)&&(i.sun.length=d,i.directional.length=m,i.spot.length=g,i.rectArea.length=S,i.point.length=u,i.hemi.length=v,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+M-I,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=R,P.sunLength=d,P.directionalLength=m,P.pointLength=u,P.spotLength=g,P.rectAreaLength=S,P.hemiLength=v,P.numSunShadows=_,P.numDirectionalShadows=T,P.numPointShadows=A,P.numSpotShadows=x,P.numSpotMaps=M,P.numLightProbes=R,i.version=T0++)}function l(c,h){let p=0,f=0,d=0,_=0,y=0,m=0,u=h.matrixWorldInverse;for(let g=0,S=c.length;g<S;g++){let v=c[g];if(v.isSunLight){let T=i.sun[p];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(u),p++}else if(v.isDirectionalLight){let T=i.directional[f];T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(u),f++}else if(v.isSpotLight){let T=i.spot[_];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(u),T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(u),_++}else if(v.isRectAreaLight){let T=i.rectArea[y];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(u),a.identity(),r.copy(v.matrixWorld),r.premultiply(u),a.extractRotation(r),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),y++}else if(v.isPointLight){let T=i.point[d];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(u),d++}else if(v.isHemisphereLight){let T=i.hemi[m];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(u),m++}}}return{setup:o,setupView:l,state:i}}function tu(n){let t=new E0(n),e=[],i=[],s=[];function r(p){h.camera=p,e.length=0,i.length=0,s.length=0}function a(p){p.isLightProbeGrid?s.push(p):e.push(p)}function o(p){i.push(p)}function l(){t.setup(e),s.sort((p,f)=>p.priority-f.priority||p.id-f.id)}function c(p){t.setupView(e,p)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function R0(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new tu(n),t.set(s,[o])):r>=a.length?(o=new tu(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var C0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,I0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,P0=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],L0=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],eu=new ye,ar=new U,zl=new U;function D0(n,t,e){let i=new oi,s=new rt,r=new rt,a=new ve,o=new la,l=new ca,c={},h=e.maxTextureSize,p={[Ln]:ke,[ke]:Ln,[Fe]:Fe},f=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:C0,fragmentShader:I0}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let _=new ze;_.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new kt(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qs;let u=this.type;this.render=function(A,x,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===Wc&&(Ot("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Qs);let I=n.getRenderTarget(),R=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Ai),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let H=u!==this.type;H&&x.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(z=>z.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,z=A.length;C<z;C++){let W=A[C],V=W.shadow;if(V===void 0){Ot("WebGLShadowMap:",W,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let et=V.getFrameExtents();s.multiply(et),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/et.x),s.x=r.x*et.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/et.y),s.y=r.y*et.y,V.mapSize.y=r.y));let O=n.state.buffers.depth.getReversed();if(V.camera._reversedDepth=O,V.map===null||H===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===ls){if(W.isPointLight){Ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new en(s.x,s.y,{format:mi,type:Sn,minFilter:Je,magFilter:Je,generateMipmaps:!1}),V.map.texture.name=W.name+".shadowMap",V.map.depthTexture=new Zn(s.x,s.y,Mn),V.map.depthTexture.name=W.name+".shadowMapDepth",V.map.depthTexture.format=Xn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Ue,V.map.depthTexture.magFilter=Ue}else W.isPointLight?(V.map=new lr(s.x),V.map.depthTexture=new Us(s.x,vn)):(V.map=new en(s.x,s.y),V.map.depthTexture=new Zn(s.x,s.y,vn)),V.map.depthTexture.name=W.name+".shadowMap",V.map.depthTexture.format=Xn,this.type===Qs?(V.map.depthTexture.compareFunction=O?Tl:wl,V.map.depthTexture.minFilter=Je,V.map.depthTexture.magFilter=Je):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Ue,V.map.depthTexture.magFilter=Ue);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let X=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();W.isPointLight!==!0&&V.updateMatrices(W,M);let q=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:M.layers;for(let ft=0;ft<X;ft++){let wt=V.getCamera(ft);if(W.isPointLight){let Z=V.camera,at=V.matrix,bt=W.distance||Z.far;bt!==Z.far&&(Z.far=bt,Z.updateProjectionMatrix()),ar.setFromMatrixPosition(W.matrixWorld),Z.position.copy(ar),zl.copy(Z.position),zl.add(P0[ft]),Z.up.copy(L0[ft]),Z.lookAt(zl),Z.updateMatrixWorld(),at.makeTranslation(-ar.x,-ar.y,-ar.z),eu.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),V._frustum.setFromProjectionMatrix(eu,Z.coordinateSystem,Z.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,ft),n.clear();else{ft===0&&(n.setRenderTarget(V.map),n.clear());let Z=V.getViewport(ft);a.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),F.viewport(a)}i=V.getFrustum(ft),v(x,M,wt,W,q,this.type)}V.isPointLightShadow!==!0&&this.type===ls&&g(V,M),V.needsUpdate=!1}u=this.type,m.needsUpdate=!1,n.setRenderTarget(I,R,P)};function g(A,x){let M=t.update(y);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null?A.mapPass=new en(s.x,s.y,{format:mi,type:Sn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(x,null,M,f,y,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(x,null,M,d,y,null)}function S(A,x,M,I){let R=null,P=M.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)R=P;else if(R=M.isPointLight===!0?l:o,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let F=R.uuid,H=x.uuid,C=c[F];C===void 0&&(C={},c[F]=C);let z=C[H];z===void 0&&(z=R.clone(),C[H]=z,x.addEventListener("dispose",T)),R=z}if(R.visible=x.visible,R.wireframe=x.wireframe,I===ls?R.side=x.shadowSide!==null?x.shadowSide:x.side:R.side=x.shadowSide!==null?x.shadowSide:p[x.side],R.alphaMap=x.alphaMap,R.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,R.map=x.map,R.clipShadows=x.clipShadows,R.clippingPlanes=x.clippingPlanes,R.clipIntersection=x.clipIntersection,R.displacementMap=x.displacementMap,R.displacementScale=x.displacementScale,R.displacementBias=x.displacementBias,R.wireframeLinewidth=x.wireframeLinewidth,R.linewidth=x.linewidth,M.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let F=n.properties.get(R);F.light=M}return R}function v(A,x,M,I,R,P){if(A.visible===!1)return;if(A.layers.test(R)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&P===ls)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,A.matrixWorld);let C=t.update(A),z=A.material;if(Array.isArray(z)){let W=C.groups;for(let V=0,et=W.length;V<et;V++){let O=W[V],X=z[O.materialIndex];if(X&&X.visible){let q=S(A,X,I,P);A.onBeforeShadow(n,A,x,M,C,q,O),n.renderBufferDirect(M,null,C,q,A,O),A.onAfterShadow(n,A,x,M,C,q,O)}}}else if(z.visible){let W=S(A,z,I,P);A.onBeforeShadow(n,A,x,M,C,W,null),n.renderBufferDirect(M,null,C,W,A,null),A.onAfterShadow(n,A,x,M,C,W,null)}}let H=A.children;for(let C=0,z=H.length;C<z;C++)v(H[C],x,M,I,R,P)}function T(A){A.target.removeEventListener("dispose",T);for(let M in c){let I=c[M],R=A.target.uuid;R in I&&(I[R].dispose(),delete I[R])}}}function N0(n,t){function e(){let L=!1,Q=new ve,J=null,dt=new ve(0,0,0,0);return{setMask:function(st){J!==st&&!L&&(n.colorMask(st,st,st,st),J=st)},setLocked:function(st){L=st},setClear:function(st,ct,Lt,Zt,it){it===!0&&(st*=Zt,ct*=Zt,Lt*=Zt),Q.set(st,ct,Lt,Zt),dt.equals(Q)===!1&&(n.clearColor(st,ct,Lt,Zt),dt.copy(Q))},reset:function(){L=!1,J=null,dt.set(-1,0,0,0)}}}function i(){let L=!1,Q=!1,J=null,dt=null,st=null;return{setReversed:function(ct){if(Q!==ct){let Lt=t.get("EXT_clip_control");ct?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT),Q=ct;let Zt=st;st=null,this.setClear(Zt)}},getReversed:function(){return Q},setTest:function(ct){ct?xt(n.DEPTH_TEST):Dt(n.DEPTH_TEST)},setMask:function(ct){J!==ct&&!L&&(n.depthMask(ct),J=ct)},setFunc:function(ct){if(Q&&(ct=wh[ct]),dt!==ct){switch(ct){case zr:n.depthFunc(n.NEVER);break;case kr:n.depthFunc(n.ALWAYS);break;case Gr:n.depthFunc(n.LESS);break;case Ki:n.depthFunc(n.LEQUAL);break;case Vr:n.depthFunc(n.EQUAL);break;case Hr:n.depthFunc(n.GEQUAL);break;case Wr:n.depthFunc(n.GREATER);break;case Xr:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}dt=ct}},setLocked:function(ct){L=ct},setClear:function(ct){st!==ct&&(st=ct,Q&&(ct=1-ct),n.clearDepth(ct))},reset:function(){L=!1,J=null,dt=null,st=null,Q=!1}}}function s(){let L=!1,Q=null,J=null,dt=null,st=null,ct=null,Lt=null,Zt=null,it=null;return{setTest:function(Nt){L||(Nt?xt(n.STENCIL_TEST):Dt(n.STENCIL_TEST))},setMask:function(Nt){Q!==Nt&&!L&&(n.stencilMask(Nt),Q=Nt)},setFunc:function(Nt,qt,vt){(J!==Nt||dt!==qt||st!==vt)&&(n.stencilFunc(Nt,qt,vt),J=Nt,dt=qt,st=vt)},setOp:function(Nt,qt,vt){(ct!==Nt||Lt!==qt||Zt!==vt)&&(n.stencilOp(Nt,qt,vt),ct=Nt,Lt=qt,Zt=vt)},setLocked:function(Nt){L=Nt},setClear:function(Nt){it!==Nt&&(n.clearStencil(Nt),it=Nt)},reset:function(){L=!1,Q=null,J=null,dt=null,st=null,ct=null,Lt=null,Zt=null,it=null}}}let r=new e,a=new i,o=new s,l={},c=new WeakMap,h={},p={},f={},d=new WeakMap,_=[],y=null,m=!1,u=null,g=null,S=null,v=null,T=null,A=null,x=null,M=new Ht(0,0,0),I=0,R=!1,P=null,F=null,H=null,C=null,z=null,W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,et=0,O=n.getParameter(n.VERSION);O.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(O)[1]),V=et>=1):O.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),V=et>=2);let X=null,q={},ft=n.getParameter(n.SCISSOR_BOX),wt=n.getParameter(n.VIEWPORT),Z=new ve().fromArray(ft),at=new ve().fromArray(wt);function bt(L,Q,J,dt){let st=new Uint8Array(4),ct=n.createTexture();n.bindTexture(L,ct),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Lt=0;Lt<J;Lt++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(Q,0,n.RGBA,1,1,dt,0,n.RGBA,n.UNSIGNED_BYTE,st):n.texImage2D(Q+Lt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,st);return ct}let Ct={};Ct[n.TEXTURE_2D]=bt(n.TEXTURE_2D,n.TEXTURE_2D,1),Ct[n.TEXTURE_CUBE_MAP]=bt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ct[n.TEXTURE_2D_ARRAY]=bt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ct[n.TEXTURE_3D]=bt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),xt(n.DEPTH_TEST),a.setFunc(Ki),Tt(!1),yt(nl),xt(n.CULL_FACE),ht(Ai);function xt(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function Dt(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function he(L,Q){return f[L]!==Q?(n.bindFramebuffer(L,Q),f[L]=Q,L===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Q),L===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Q),!0):!1}function Ut(L,Q){let J=_,dt=!1;if(L){J=d.get(Q),J===void 0&&(J=[],d.set(Q,J));let st=L.textures;if(J.length!==st.length||J[0]!==n.COLOR_ATTACHMENT0){for(let ct=0,Lt=st.length;ct<Lt;ct++)J[ct]=n.COLOR_ATTACHMENT0+ct;J.length=st.length,dt=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,dt=!0);dt&&n.drawBuffers(J)}function Xt(L){return y!==L?(n.useProgram(L),y=L,!0):!1}let jt={[Ei]:n.FUNC_ADD,[qc]:n.FUNC_SUBTRACT,[Yc]:n.FUNC_REVERSE_SUBTRACT};jt[Zc]=n.MIN,jt[Jc]=n.MAX;let tt={[Kc]:n.ZERO,[$c]:n.ONE,[Qc]:n.SRC_COLOR,[al]:n.SRC_ALPHA,[sh]:n.SRC_ALPHA_SATURATE,[nh]:n.DST_COLOR,[th]:n.DST_ALPHA,[jc]:n.ONE_MINUS_SRC_COLOR,[ol]:n.ONE_MINUS_SRC_ALPHA,[ih]:n.ONE_MINUS_DST_COLOR,[eh]:n.ONE_MINUS_DST_ALPHA,[rh]:n.CONSTANT_COLOR,[ah]:n.ONE_MINUS_CONSTANT_COLOR,[oh]:n.CONSTANT_ALPHA,[lh]:n.ONE_MINUS_CONSTANT_ALPHA};function ht(L,Q,J,dt,st,ct,Lt,Zt,it,Nt){if(L===Ai){m===!0&&(Dt(n.BLEND),m=!1);return}if(m===!1&&(xt(n.BLEND),m=!0),L!==Xc){if(L!==u||Nt!==R){if((g!==Ei||T!==Ei)&&(n.blendEquation(n.FUNC_ADD),g=Ei,T=Ei),Nt)switch(L){case cs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case il:n.blendFunc(n.ONE,n.ONE);break;case sl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case rl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Bt("WebGLState: Invalid blending: ",L);break}else switch(L){case cs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case il:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case sl:Bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rl:Bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Bt("WebGLState: Invalid blending: ",L);break}S=null,v=null,A=null,x=null,M.set(0,0,0),I=0,u=L,R=Nt}return}st=st||Q,ct=ct||J,Lt=Lt||dt,(Q!==g||st!==T)&&(n.blendEquationSeparate(jt[Q],jt[st]),g=Q,T=st),(J!==S||dt!==v||ct!==A||Lt!==x)&&(n.blendFuncSeparate(tt[J],tt[dt],tt[ct],tt[Lt]),S=J,v=dt,A=ct,x=Lt),(Zt.equals(M)===!1||it!==I)&&(n.blendColor(Zt.r,Zt.g,Zt.b,it),M.copy(Zt),I=it),u=L,R=!1}function ot(L,Q){L.side===Fe?Dt(n.CULL_FACE):xt(n.CULL_FACE);let J=L.side===ke;Q&&(J=!J),Tt(J),L.blending===cs&&L.transparent===!1?ht(Ai):ht(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let dt=L.stencilWrite;o.setTest(dt),dt&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Pt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?xt(n.SAMPLE_ALPHA_TO_COVERAGE):Dt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(L){P!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),P=L)}function yt(L){L!==Vc?(xt(n.CULL_FACE),L!==F&&(L===nl?n.cullFace(n.BACK):L===Hc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Dt(n.CULL_FACE),F=L}function Wt(L){L!==H&&(V&&n.lineWidth(L),H=L)}function Pt(L,Q,J){L?(xt(n.POLYGON_OFFSET_FILL),(C!==Q||z!==J)&&(C=Q,z=J,a.getReversed()&&(Q=-Q,J=-J),n.polygonOffset(Q,J))):Dt(n.POLYGON_OFFSET_FILL)}function te(L){L?xt(n.SCISSOR_TEST):Dt(n.SCISSOR_TEST)}function ee(L){L===void 0&&(L=n.TEXTURE0+W-1),X!==L&&(n.activeTexture(L),X=L)}function le(L,Q,J){J===void 0&&(X===null?J=n.TEXTURE0+W-1:J=X);let dt=q[J];dt===void 0&&(dt={type:void 0,texture:void 0},q[J]=dt),(dt.type!==L||dt.texture!==Q)&&(X!==J&&(n.activeTexture(J),X=J),n.bindTexture(L,Q||Ct[L]),dt.type=L,dt.texture=Q)}function N(){let L=q[X];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Te(){try{n.compressedTexImage2D(...arguments)}catch(L){Bt("WebGLState:",L)}}function Qt(){try{n.compressedTexImage3D(...arguments)}catch(L){Bt("WebGLState:",L)}}function fe(){try{n.texSubImage2D(...arguments)}catch(L){Bt("WebGLState:",L)}}function mt(){try{n.texSubImage3D(...arguments)}catch(L){Bt("WebGLState:",L)}}function we(){try{n.compressedTexSubImage2D(...arguments)}catch(L){Bt("WebGLState:",L)}}function Ft(){try{n.compressedTexSubImage3D(...arguments)}catch(L){Bt("WebGLState:",L)}}function zt(){try{n.texStorage2D(...arguments)}catch(L){Bt("WebGLState:",L)}}function E(){try{n.texStorage3D(...arguments)}catch(L){Bt("WebGLState:",L)}}function b(){try{n.texImage2D(...arguments)}catch(L){Bt("WebGLState:",L)}}function k(){try{n.texImage3D(...arguments)}catch(L){Bt("WebGLState:",L)}}function nt(L){return p[L]!==void 0?p[L]:n.getParameter(L)}function j(L,Q){p[L]!==Q&&(n.pixelStorei(L,Q),p[L]=Q)}function lt(L){Z.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Z.copy(L))}function gt(L){at.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),at.copy(L))}function K(L,Q){let J=c.get(Q);J===void 0&&(J=new WeakMap,c.set(Q,J));let dt=J.get(L);dt===void 0&&(dt=n.getUniformBlockIndex(Q,L.name),n.uniformBlockBinding(Q,dt,dt),J.set(L,dt))}function $(L,Q,J){let st=c.get(Q).get(L);l[st]!==J&&(n.bindBufferBase(n.UNIFORM_BUFFER,st,J),l[st]=J)}function ut(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},p={},X=null,q={},f={},l={},d=new WeakMap,_=[],y=null,m=!1,u=null,g=null,S=null,v=null,T=null,A=null,x=null,M=new Ht(0,0,0),I=0,R=!1,P=null,F=null,H=null,C=null,z=null,Z.set(0,0,n.canvas.width,n.canvas.height),at.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:xt,disable:Dt,bindFramebuffer:he,drawBuffers:Ut,useProgram:Xt,setBlending:ht,setMaterial:ot,setFlipSided:Tt,setCullFace:yt,setLineWidth:Wt,setPolygonOffset:Pt,setScissorTest:te,activeTexture:ee,bindTexture:le,unbindTexture:N,compressedTexImage2D:Te,compressedTexImage3D:Qt,texImage2D:b,texImage3D:k,pixelStorei:j,getParameter:nt,updateUBOMapping:K,uniformBlockBinding:$,texStorage2D:zt,texStorage3D:E,texSubImage2D:fe,texSubImage3D:mt,compressedTexSubImage2D:we,compressedTexSubImage3D:Ft,scissor:lt,viewport:gt,reset:ut}}function U0(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,h=new WeakMap,p=new Set,f,d=new WeakMap,_=new Set,y=new FinalizationRegistry(E=>_.delete(E)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function u(E,b){return m?new OffscreenCanvas(E,b):Rs("canvas")}function g(E,b,k){let nt=1,j=zt(E);if((j.width>k||j.height>k)&&(nt=k/Math.max(j.width,j.height)),nt<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let lt=Math.floor(nt*j.width),gt=Math.floor(nt*j.height);f===void 0&&(f=u(lt,gt));let K=b?u(lt,gt):f;return K.width=lt,K.height=gt,K.getContext("2d").drawImage(E,0,0,lt,gt),Ot("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+lt+"x"+gt+")."),K}else return"data"in E&&Ot("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),E;return E}function S(E){return E.generateMipmaps}function v(E){n.generateMipmap(E)}function T(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(E,b,k,nt,j,lt=!1){if(E!==null){if(n[E]!==void 0)return n[E];Ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let gt;nt&&(gt=t.get("EXT_texture_norm16"),gt||Ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=b;if(b===n.RED&&(k===n.FLOAT&&(K=n.R32F),k===n.HALF_FLOAT&&(K=n.R16F),k===n.UNSIGNED_BYTE&&(K=n.R8),k===n.UNSIGNED_SHORT&&gt&&(K=gt.R16_EXT),k===n.SHORT&&gt&&(K=gt.R16_SNORM_EXT)),b===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.R8UI),k===n.UNSIGNED_SHORT&&(K=n.R16UI),k===n.UNSIGNED_INT&&(K=n.R32UI),k===n.BYTE&&(K=n.R8I),k===n.SHORT&&(K=n.R16I),k===n.INT&&(K=n.R32I)),b===n.RG&&(k===n.FLOAT&&(K=n.RG32F),k===n.HALF_FLOAT&&(K=n.RG16F),k===n.UNSIGNED_BYTE&&(K=n.RG8),k===n.UNSIGNED_SHORT&&gt&&(K=gt.RG16_EXT),k===n.SHORT&&gt&&(K=gt.RG16_SNORM_EXT)),b===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.RG8UI),k===n.UNSIGNED_SHORT&&(K=n.RG16UI),k===n.UNSIGNED_INT&&(K=n.RG32UI),k===n.BYTE&&(K=n.RG8I),k===n.SHORT&&(K=n.RG16I),k===n.INT&&(K=n.RG32I)),b===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.RGB8UI),k===n.UNSIGNED_SHORT&&(K=n.RGB16UI),k===n.UNSIGNED_INT&&(K=n.RGB32UI),k===n.BYTE&&(K=n.RGB8I),k===n.SHORT&&(K=n.RGB16I),k===n.INT&&(K=n.RGB32I)),b===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),k===n.UNSIGNED_INT&&(K=n.RGBA32UI),k===n.BYTE&&(K=n.RGBA8I),k===n.SHORT&&(K=n.RGBA16I),k===n.INT&&(K=n.RGBA32I)),b===n.RGB&&(k===n.UNSIGNED_SHORT&&gt&&(K=gt.RGB16_EXT),k===n.SHORT&&gt&&(K=gt.RGB16_SNORM_EXT),k===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),k===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),b===n.RGBA){let $=lt?Es:se.getTransfer(j);k===n.FLOAT&&(K=n.RGBA32F),k===n.HALF_FLOAT&&(K=n.RGBA16F),k===n.UNSIGNED_BYTE&&(K=$===ue?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT&&gt&&(K=gt.RGBA16_EXT),k===n.SHORT&&gt&&(K=gt.RGBA16_SNORM_EXT),k===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function x(E,b){let k;return E?b===null||b===vn||b===Ci?k=n.DEPTH24_STENCIL8:b===Mn?k=n.DEPTH32F_STENCIL8:b===us&&(k=n.DEPTH24_STENCIL8,Ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===vn||b===Ci?k=n.DEPTH_COMPONENT24:b===Mn?k=n.DEPTH_COMPONENT32F:b===us&&(k=n.DEPTH_COMPONENT16),k}function M(E,b){return S(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ue&&E.minFilter!==Je?Math.log2(Math.max(b.width,b.height))+1:E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?b.mipmaps.length:1}function I(E){let b=new WeakRef(E);i.get(E).__ref=b,_.add(b),y.register(E,b,b)}function R(E){let b=i.get(E).__ref;b!==void 0&&(_.delete(b),y.unregister(b))}function P(E){H(E.target)}function F(E){C(E.target)}function H(E){E.removeEventListener("dispose",P),R(E),W(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&p.delete(E)}function C(E){E.removeEventListener("dispose",F),R(E),et(E)}function z(){for(let E of _){let b=E.deref();b!==void 0&&(b.isRenderTarget===!0?C(b):H(b))}_.clear(),p.clear()}function W(E){let b=i.get(E);if(b.__webglInit===void 0)return;let k=E.source,nt=d.get(k);if(nt){let j=nt[b.__cacheKey];j.usedTimes--,j.usedTimes===0&&V(E),Object.keys(nt).length===0&&d.delete(k)}i.remove(E)}function V(E){let b=i.get(E);n.deleteTexture(b.__webglTexture);let k=E.source,nt=d.get(k);delete nt[b.__cacheKey],a.memory.textures--}function et(E){let b=i.get(E);b.__depthDisposeCallback&&b.__depthDisposeCallback();let k=E.depthTexture;if(k&&k.renderTarget===E&&H(k),E.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(b.__webglFramebuffer[j]))for(let lt=0;lt<b.__webglFramebuffer[j].length;lt++)n.deleteFramebuffer(b.__webglFramebuffer[j][lt]);else n.deleteFramebuffer(b.__webglFramebuffer[j]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[j])}else{if(Array.isArray(b.__webglFramebuffer))for(let j=0;j<b.__webglFramebuffer.length;j++)n.deleteFramebuffer(b.__webglFramebuffer[j]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let j=0;j<b.__webglColorRenderbuffer.length;j++)b.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[j]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let nt=E.textures;for(let j=0,lt=nt.length;j<lt;j++){let gt=i.get(nt[j]);gt.__webglTexture&&(n.deleteTexture(gt.__webglTexture),a.memory.textures--),i.remove(nt[j])}i.remove(E)}let O=0;function X(){O=0}function q(){return O}function ft(E){O=E}function wt(){let E=O;return E>=s.maxTextures&&Ot("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,E}function Z(E){let b=[];return b.push(E.wrapS),b.push(E.wrapT),b.push(E.wrapR||0),b.push(E.magFilter),b.push(E.minFilter),b.push(E.anisotropy),b.push(E.internalFormat),b.push(E.format),b.push(E.type),b.push(E.generateMipmaps),b.push(E.mipmapsAutoUpdate),b.push(E.premultiplyAlpha),b.push(E.flipY),b.push(E.unpackAlignment),b.push(E.colorSpace),b.join()}function at(E,b){let k=i.get(E);if(E.isVideoTexture&&we(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&k.__version!==E.version){let nt=E.image;if(nt===null)Ot("WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)Ot("WebGLRenderer: Texture marked for update but image is incomplete");else{ot(k,E,b);return}}else E.isExternalTexture&&(k.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+b)}function bt(E,b){let k=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){ot(k,E,b);return}else E.isExternalTexture&&(k.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+b)}function Ct(E,b){let k=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){ot(k,E,b);return}e.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+b)}function xt(E,b){let k=i.get(E);if(E.version>0&&k.__version!==E.version){Tt(k,E,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+b)}let Dt={[qr]:n.REPEAT,[An]:n.CLAMP_TO_EDGE,[Yr]:n.MIRRORED_REPEAT},he={[Ue]:n.NEAREST,[uh]:n.NEAREST_MIPMAP_NEAREST,[js]:n.NEAREST_MIPMAP_LINEAR,[Je]:n.LINEAR,[wa]:n.LINEAR_MIPMAP_NEAREST,[Jn]:n.LINEAR_MIPMAP_LINEAR},Ut={[mh]:n.NEVER,[Al]:n.ALWAYS,[gh]:n.LESS,[wl]:n.LEQUAL,[_h]:n.EQUAL,[Tl]:n.GEQUAL,[xh]:n.GREATER,[yh]:n.NOTEQUAL};function Xt(E,b){if(b.type===Mn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Je||b.magFilter===wa||b.magFilter===js||b.magFilter===Jn||b.minFilter===Je||b.minFilter===wa||b.minFilter===js||b.minFilter===Jn)&&Ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,Dt[b.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,Dt[b.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,Dt[b.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,he[b.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,he[b.minFilter]),b.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Ut[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ue||b.minFilter!==js&&b.minFilter!==Jn||b.type===Mn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");n.texParameterf(E,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function jt(E,b){let k=!1;E.__webglInit===void 0&&(E.__webglInit=!0,b.addEventListener("dispose",P),I(b));let nt=b.source,j=d.get(nt);j===void 0&&(j={},d.set(nt,j));let lt=Z(b);if(lt!==E.__cacheKey){j[lt]===void 0&&(j[lt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,k=!0),j[lt].usedTimes++;let gt=j[E.__cacheKey];gt!==void 0&&(j[E.__cacheKey].usedTimes--,gt.usedTimes===0&&V(b)),E.__cacheKey=lt,E.__webglTexture=j[lt].texture}return k}function tt(E,b,k){return Math.floor(Math.floor(E/k)/b)}function ht(E,b,k,nt){let lt=E.updateRanges;if(lt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,k,nt,b.data);else{lt.sort((L,Q)=>L.start-Q.start);let gt=0;for(let L=1;L<lt.length;L++){let Q=lt[gt],J=lt[L],dt=Q.start+Q.count,st=tt(J.start,b.width,4),ct=tt(Q.start,b.width,4);J.start<=dt+1&&st===ct&&tt(J.start+J.count-1,b.width,4)===st?Q.count=Math.max(Q.count,J.start+J.count-Q.start):(++gt,lt[gt]=J)}lt.length=gt+1;let K=e.getParameter(n.UNPACK_ROW_LENGTH),$=e.getParameter(n.UNPACK_SKIP_PIXELS),ut=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let L=0,Q=lt.length;L<Q;L++){let J=lt[L],dt=Math.floor(J.start/4),st=Math.ceil(J.count/4),ct=dt%b.width,Lt=Math.floor(dt/b.width),Zt=st,it=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,ct),e.pixelStorei(n.UNPACK_SKIP_ROWS,Lt),e.texSubImage2D(n.TEXTURE_2D,0,ct,Lt,Zt,it,k,nt,b.data)}E.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,K),e.pixelStorei(n.UNPACK_SKIP_PIXELS,$),e.pixelStorei(n.UNPACK_SKIP_ROWS,ut)}}function ot(E,b,k){let nt=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(nt=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(nt=n.TEXTURE_3D);let j=jt(E,b),lt=b.source;e.bindTexture(nt,E.__webglTexture,n.TEXTURE0+k);let gt=i.get(lt);if(lt.version!==gt.__version||j===!0){if(e.activeTexture(n.TEXTURE0+k),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let it=se.getPrimaries(se.workingColorSpace),Nt=b.colorSpace===$n?null:se.getPrimaries(b.colorSpace),qt=b.colorSpace===$n||it===Nt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt)}e.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment);let $=g(b.image,!1,s.maxTextureSize);$=Ft(b,$);let ut=r.convert(b.format,b.colorSpace),L=r.convert(b.type),Q=A(b.internalFormat,ut,L,b.normalized,b.colorSpace,b.isVideoTexture);Xt(nt,b);let J,dt=b.mipmaps,st=b.isVideoTexture!==!0,ct=gt.__version===void 0||j===!0,Lt=lt.dataReady,Zt=M(b,$);if(b.isDepthTexture)Q=x(b.format===Kn,b.type),ct&&(st?e.texStorage2D(n.TEXTURE_2D,1,Q,$.width,$.height):e.texImage2D(n.TEXTURE_2D,0,Q,$.width,$.height,0,ut,L,null));else if(b.isDataTexture)if(dt.length>0){st&&ct&&e.texStorage2D(n.TEXTURE_2D,Zt,Q,dt[0].width,dt[0].height);for(let it=0,Nt=dt.length;it<Nt;it++)J=dt[it],st?Lt&&e.texSubImage2D(n.TEXTURE_2D,it,0,0,J.width,J.height,ut,L,J.data):e.texImage2D(n.TEXTURE_2D,it,Q,J.width,J.height,0,ut,L,J.data);b.generateMipmaps=!1}else st?(ct&&e.texStorage2D(n.TEXTURE_2D,Zt,Q,$.width,$.height),Lt&&ht(b,$,ut,L)):e.texImage2D(n.TEXTURE_2D,0,Q,$.width,$.height,0,ut,L,$.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){st&&ct&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Zt,Q,dt[0].width,dt[0].height,$.depth);for(let it=0,Nt=dt.length;it<Nt;it++)if(J=dt[it],b.format!==bn)if(ut!==null)if(st){if(Lt)if(b.layerUpdates.size>0){let qt=Ol(J.width,J.height,b.format,b.type);for(let vt of b.layerUpdates){let de=J.data.subarray(vt*qt/J.data.BYTES_PER_ELEMENT,(vt+1)*qt/J.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,vt,J.width,J.height,1,ut,de)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,0,J.width,J.height,$.depth,ut,J.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,it,Q,J.width,J.height,$.depth,0,J.data,0,0);else Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?Lt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,0,J.width,J.height,$.depth,ut,L,J.data):e.texImage3D(n.TEXTURE_2D_ARRAY,it,Q,J.width,J.height,$.depth,0,ut,L,J.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{st&&ct&&e.texStorage2D(n.TEXTURE_2D,Zt,Q,dt[0].width,dt[0].height);for(let it=0,Nt=dt.length;it<Nt;it++)J=dt[it],b.format!==bn?ut!==null?st?Lt&&e.compressedTexSubImage2D(n.TEXTURE_2D,it,0,0,J.width,J.height,ut,J.data):e.compressedTexImage2D(n.TEXTURE_2D,it,Q,J.width,J.height,0,J.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?Lt&&e.texSubImage2D(n.TEXTURE_2D,it,0,0,J.width,J.height,ut,L,J.data):e.texImage2D(n.TEXTURE_2D,it,Q,J.width,J.height,0,ut,L,J.data)}else if(b.isDataArrayTexture)if(st){if(ct&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Zt,Q,$.width,$.height,$.depth),Lt)if(b.layerUpdates.size>0){let it=Ol($.width,$.height,b.format,b.type);for(let Nt of b.layerUpdates){let qt=$.data.subarray(Nt*it/$.data.BYTES_PER_ELEMENT,(Nt+1)*it/$.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Nt,$.width,$.height,1,ut,L,qt)}b.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ut,L,$.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Q,$.width,$.height,$.depth,0,ut,L,$.data);else if(b.isData3DTexture)st?(ct&&e.texStorage3D(n.TEXTURE_3D,Zt,Q,$.width,$.height,$.depth),Lt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ut,L,$.data)):e.texImage3D(n.TEXTURE_3D,0,Q,$.width,$.height,$.depth,0,ut,L,$.data);else if(b.isFramebufferTexture){if(ct)if(st)e.texStorage2D(n.TEXTURE_2D,Zt,Q,$.width,$.height);else{let it=$.width,Nt=$.height;for(let qt=0;qt<Zt;qt++)e.texImage2D(n.TEXTURE_2D,qt,Q,it,Nt,0,ut,L,null),it>>=1,Nt>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in n){let it=n.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),$.parentNode!==it){it.appendChild($),p.add(b),it.onpaint=Nt=>{let qt=Nt.changedElements;for(let vt of p)qt.includes(vt.image)&&(vt.needsUpdate=!0)},it.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,$);else{let qt=n.RGBA,vt=n.RGBA,de=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,qt,vt,de,$)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(dt.length>0){if(st&&ct){let it=zt(dt[0]);e.texStorage2D(n.TEXTURE_2D,Zt,Q,it.width,it.height)}for(let it=0,Nt=dt.length;it<Nt;it++)J=dt[it],st?Lt&&e.texSubImage2D(n.TEXTURE_2D,it,0,0,ut,L,J):e.texImage2D(n.TEXTURE_2D,it,Q,ut,L,J);b.generateMipmaps=!1}else if(st){if(ct){let it=zt($);e.texStorage2D(n.TEXTURE_2D,Zt,Q,it.width,it.height)}Lt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ut,L,$)}else e.texImage2D(n.TEXTURE_2D,0,Q,ut,L,$);S(b)&&b.mipmapsAutoUpdate===!0&&v(nt),gt.__version=lt.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function Tt(E,b,k){if(b.image.length!==6)return;let nt=jt(E,b),j=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+k);let lt=i.get(j);if(j.version!==lt.__version||nt===!0){e.activeTexture(n.TEXTURE0+k);let gt=se.getPrimaries(se.workingColorSpace),K=b.colorSpace===$n?null:se.getPrimaries(b.colorSpace),$=b.colorSpace===$n||gt===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let ut=b.isCompressedTexture||b.image[0].isCompressedTexture,L=b.image[0]&&b.image[0].isDataTexture,Q=[];for(let vt=0;vt<6;vt++)!ut&&!L?Q[vt]=g(b.image[vt],!0,s.maxCubemapSize):Q[vt]=L?b.image[vt].image:b.image[vt],Q[vt]=Ft(b,Q[vt]);let J=Q[0],dt=r.convert(b.format,b.colorSpace),st=r.convert(b.type),ct=A(b.internalFormat,dt,st,b.normalized,b.colorSpace),Lt=b.isVideoTexture!==!0,Zt=lt.__version===void 0||nt===!0,it=j.dataReady,Nt=M(b,J);Xt(n.TEXTURE_CUBE_MAP,b);let qt;if(b.isDepthTexture){if(ct=x(b.format===Kn,b.type),Zt)if(Lt)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,ct,J.width,J.height);else for(let vt=0;vt<6;vt++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ct,J.width,J.height,0,dt,st,null)}else if(ut){Lt&&Zt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Nt,ct,J.width,J.height);for(let vt=0;vt<6;vt++){qt=Q[vt].mipmaps;for(let de=0;de<qt.length;de++){let Pe=qt[de];b.format!==bn?dt!==null?Lt?it&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,de,0,0,Pe.width,Pe.height,dt,Pe.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,de,ct,Pe.width,Pe.height,0,Pe.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,de,0,0,Pe.width,Pe.height,dt,st,Pe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,de,ct,Pe.width,Pe.height,0,dt,st,Pe.data)}}}else{if(qt=b.mipmaps,Lt&&Zt){qt.length>0&&Nt++;let vt=zt(Q[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Nt,ct,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(L){Lt?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Q[vt].width,Q[vt].height,dt,st,Q[vt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ct,Q[vt].width,Q[vt].height,0,dt,st,Q[vt].data);for(let de=0;de<qt.length;de++){let Qn=qt[de].image[vt].image;Lt?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,de+1,0,0,Qn.width,Qn.height,dt,st,Qn.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,de+1,ct,Qn.width,Qn.height,0,dt,st,Qn.data)}}else{Lt?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,dt,st,Q[vt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ct,dt,st,Q[vt]);for(let de=0;de<qt.length;de++){let Pe=qt[de];Lt?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,de+1,0,0,dt,st,Pe.image[vt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,de+1,ct,dt,st,Pe.image[vt])}}}S(b)&&b.mipmapsAutoUpdate===!0&&v(n.TEXTURE_CUBE_MAP),lt.__version=j.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function yt(E,b,k,nt,j,lt){let gt=r.convert(k.format,k.colorSpace),K=r.convert(k.type),$=A(k.internalFormat,gt,K,k.normalized,k.colorSpace),ut=i.get(b),L=i.get(k);if(L.__renderTarget=b,!ut.__hasExternalTextures){let Q=Math.max(1,b.width>>lt),J=Math.max(1,b.height>>lt);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?e.texImage3D(j,lt,$,Q,J,b.depth,0,gt,K,null):e.texImage2D(j,lt,$,Q,J,0,gt,K,null)}e.bindFramebuffer(n.FRAMEBUFFER,E),mt(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,nt,j,L.__webglTexture,0,fe(b)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,nt,j,L.__webglTexture,lt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Wt(E,b,k){if(n.bindRenderbuffer(n.RENDERBUFFER,E),b.depthBuffer){let nt=b.depthTexture,j=nt&&nt.isDepthTexture?nt.type:null,lt=x(b.stencilBuffer,j),gt=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;mt(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe(b),lt,b.width,b.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe(b),lt,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,lt,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,gt,n.RENDERBUFFER,E)}else{let nt=b.textures;for(let j=0;j<nt.length;j++){let lt=nt[j],gt=r.convert(lt.format,lt.colorSpace),K=r.convert(lt.type),$=A(lt.internalFormat,gt,K,lt.normalized,lt.colorSpace);mt(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe(b),$,b.width,b.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe(b),$,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,$,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Pt(E,b,k){let nt=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,E),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=i.get(b.depthTexture);j.__renderTarget=b;let lt=nt?b.depthTexture.image[0]:b.depthTexture.image;(!j.__webglTexture||lt.width!==b.width||lt.height!==b.height)&&(lt.width=b.width,lt.height=b.height,b.depthTexture.needsUpdate=!0),nt?xt(b.depthTexture,0):at(b.depthTexture,0);let gt=j.__webglTexture,K=fe(b),$=nt?n.TEXTURE_CUBE_MAP_POSITIVE_X+k:n.TEXTURE_2D,ut=b.depthTexture.format===Kn?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(b.depthTexture.format===Xn)mt(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ut,$,gt,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,ut,$,gt,0);else if(b.depthTexture.format===Kn)mt(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ut,$,gt,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,ut,$,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function te(E){let b=i.get(E),k=E.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==E.depthTexture){let nt=E.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),nt){let j=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,nt.removeEventListener("dispose",j)};nt.addEventListener("dispose",j),b.__depthDisposeCallback=j}b.__boundDepthTexture=nt}if(E.depthTexture&&!b.__autoAllocateDepthBuffer)if(k)for(let nt=0;nt<6;nt++)Pt(b.__webglFramebuffer[nt],E,nt);else E.texture.mipmaps.length>0?Pt(b.__webglFramebuffer[0],E,0):Pt(b.__webglFramebuffer,E,0);else if(k){b.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[nt]),b.__webglDepthbuffer[nt]===void 0)b.__webglDepthbuffer[nt]=n.createRenderbuffer(),Wt(b.__webglDepthbuffer[nt],E,!1);else{let j=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=b.__webglDepthbuffer[nt];n.bindRenderbuffer(n.RENDERBUFFER,lt),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,lt)}}else if(E.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),Wt(b.__webglDepthbuffer,E,!1);else{let j=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,lt),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,lt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(E,b,k){let nt=i.get(E);b!==void 0&&yt(nt.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&te(E)}function le(E){let b=E.texture,k=i.get(E),nt=i.get(b);E.addEventListener("dispose",F),I(E);let j=E.textures,lt=E.isWebGLCubeRenderTarget===!0,gt=j.length>1;if(gt||(nt.__webglTexture===void 0&&(nt.__webglTexture=n.createTexture()),nt.__version=b.version,a.memory.textures++),lt){k.__webglFramebuffer=[];for(let K=0;K<6;K++)if(b.mipmaps.length>0){k.__webglFramebuffer[K]=[];for(let $=0;$<b.mipmaps.length;$++)k.__webglFramebuffer[K][$]=n.createFramebuffer()}else k.__webglFramebuffer[K]=n.createFramebuffer()}else{if(b.mipmaps.length>0){k.__webglFramebuffer=[];for(let K=0;K<b.mipmaps.length;K++)k.__webglFramebuffer[K]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(gt)for(let K=0,$=j.length;K<$;K++){let ut=i.get(j[K]);ut.__webglTexture===void 0&&(ut.__webglTexture=n.createTexture(),a.memory.textures++)}if(E.samples>0&&mt(E)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let K=0;K<j.length;K++){let $=j[K];k.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[K]);let ut=r.convert($.format,$.colorSpace),L=r.convert($.type),Q=A($.internalFormat,ut,L,$.normalized,$.colorSpace,E.isXRRenderTarget===!0),J=fe(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,J,Q,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,k.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),Wt(k.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(lt){e.bindTexture(n.TEXTURE_CUBE_MAP,nt.__webglTexture),Xt(n.TEXTURE_CUBE_MAP,b);for(let K=0;K<6;K++)if(b.mipmaps.length>0)for(let $=0;$<b.mipmaps.length;$++)yt(k.__webglFramebuffer[K][$],E,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,$);else yt(k.__webglFramebuffer[K],E,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);S(b)?v(n.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}else if(gt){for(let K=0,$=j.length;K<$;K++){let ut=j[K],L=i.get(ut),Q=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Q=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Q,L.__webglTexture),Xt(Q,ut),yt(k.__webglFramebuffer,E,ut,n.COLOR_ATTACHMENT0+K,Q,0),S(ut)&&v(Q)}e.unbindTexture()}else{let K=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(K=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(K,nt.__webglTexture),Xt(K,b),b.mipmaps.length>0)for(let $=0;$<b.mipmaps.length;$++)yt(k.__webglFramebuffer[$],E,b,n.COLOR_ATTACHMENT0,K,$);else yt(k.__webglFramebuffer,E,b,n.COLOR_ATTACHMENT0,K,0);S(b)?v(K):b.mipmaps.length>0&&n.texParameteri(K,n.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}E.depthBuffer&&te(E)}function N(E){let b=E.textures;for(let k=0,nt=b.length;k<nt;k++){let j=b[k];if(S(j)&&j.mipmapsAutoUpdate===!0){let lt=T(E),gt=i.get(j).__webglTexture;e.bindTexture(lt,gt),v(lt),e.unbindTexture()}}}let Te=[];function Qt(E){if(E.samples>0){if(mt(E)===!1){let b=E.textures,k=E.width,nt=E.height,j=n.COLOR_BUFFER_BIT,lt=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,gt=i.get(E),K=b.length>1;if(K)for(let ut=0;ut<b.length;ut++)e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),E.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let ut=0;ut<b.length;ut++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),K){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,gt.__webglColorRenderbuffer[ut]);let L=i.get(b[ut]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,L,0)}n.blitFramebuffer(0,0,k,nt,0,0,k,nt,j,n.NEAREST),l===!0&&(Te.length=0,Te.push(n.COLOR_ATTACHMENT0+ut),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&Te.push(lt),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Te))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let ut=0;ut<b.length;ut++){e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,gt.__webglColorRenderbuffer[ut]);let L=i.get(b[ut]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,L,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let b=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function fe(E){return Math.min(s.maxSamples,E.samples)}function mt(E){let b=i.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function we(E){let b=a.render.frame;h.get(E)!==b&&(h.set(E,b),E.update())}function Ft(E,b){let k=E.colorSpace,nt=E.format,j=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||k!==As&&k!==$n&&(se.getTransfer(k)===ue?(nt!==bn||j!==Qe)&&Ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Bt("WebGLTextures: Unsupported texture color space:",k)),b}function zt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=wt,this.resetTextureUnits=X,this.getTextureUnits=q,this.setTextureUnits=ft,this.setTexture2D=at,this.setTexture2DArray=bt,this.setTexture3D=Ct,this.setTextureCube=xt,this.rebindTextures=ee,this.setupRenderTarget=le,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=Qt,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=mt,this.dispose=z}function F0(n,t){function e(i,s=$n){let r,a=se.getTransfer(s);if(i===Qe)return n.UNSIGNED_BYTE;if(i===Aa)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ea)return n.UNSIGNED_SHORT_5_5_5_1;if(i===yl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===vl)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===_l)return n.BYTE;if(i===xl)return n.SHORT;if(i===us)return n.UNSIGNED_SHORT;if(i===Ta)return n.INT;if(i===vn)return n.UNSIGNED_INT;if(i===Mn)return n.FLOAT;if(i===Sn)return n.HALF_FLOAT;if(i===Ml)return n.ALPHA;if(i===Sl)return n.RGB;if(i===bn)return n.RGBA;if(i===Xn)return n.DEPTH_COMPONENT;if(i===Kn)return n.DEPTH_STENCIL;if(i===bl)return n.RED;if(i===Ra)return n.RED_INTEGER;if(i===mi)return n.RG;if(i===Ca)return n.RG_INTEGER;if(i===Ia)return n.RGBA_INTEGER;if(i===tr||i===er||i===nr||i===ir)if(a===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===tr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===tr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===er)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===nr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ir)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Pa||i===La||i===Da||i===Na)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Pa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===La)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Da)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Na)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ua||i===Fa||i===Oa||i===Ba||i===za||i===sr||i===ka)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ua||i===Fa)return a===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Oa)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ba)return r.COMPRESSED_R11_EAC;if(i===za)return r.COMPRESSED_SIGNED_R11_EAC;if(i===sr)return r.COMPRESSED_RG11_EAC;if(i===ka)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ga||i===Va||i===Ha||i===Wa||i===Xa||i===qa||i===Ya||i===Za||i===Ja||i===Ka||i===$a||i===Qa||i===ja||i===to)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ga)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Va)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ha)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wa)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xa)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===qa)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ya)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Za)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ja)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ka)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===$a)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Qa)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ja)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===to)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===eo||i===no||i===io)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===eo)return a===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===no)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===io)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===so||i===ro||i===rr||i===ao)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===so)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ro)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===rr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ao)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ci?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var O0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,B0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ql=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Fs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new un({vertexShader:O0,fragmentShader:B0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new kt(new yn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Yl=class extends Rn{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,p=null,f=null,d=null,_=null,y=typeof XRWebGLBinding<"u",m=new ql,u={},g=e.getContextAttributes(),S=null,v=null,T=[],A=[],x=new rt,M=null,I=null,R=new Ze;R.viewport=new ve;let P=new Ze;P.viewport=new ve;let F=[R,P],H=new Ma,C=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let at=T[Z];return at===void 0&&(at=new es,T[Z]=at),at.getTargetRaySpace()},this.getControllerGrip=function(Z){let at=T[Z];return at===void 0&&(at=new es,T[Z]=at),at.getGripSpace()},this.getHand=function(Z){let at=T[Z];return at===void 0&&(at=new es,T[Z]=at),at.getHandSpace()};function W(Z){let at=A.indexOf(Z.inputSource);if(at===-1)return;let bt=T[at];bt!==void 0&&(bt.update(Z.inputSource,Z.frame,c||a),bt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function V(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",et);for(let Z=0;Z<T.length;Z++){let at=A[Z];at!==null&&(A[Z]=null,T[Z].disconnect(at))}C=null,z=null,m.reset();for(let Z in u)delete u[Z];if(t.setRenderTarget(S),d=null,f=null,p=null,s=null,v=null,wt.stop(),i.isPresenting=!1,t.setPixelRatio(M),t.setSize(x.width,x.height,!1),I!==null){let Z=I.camera;Z.fov=I.fov,Z.zoom=I.zoom,Z.updateProjectionMatrix(),I=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&Ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&Ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return p===null&&y&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",V),s.addEventListener("inputsourceschange",et),g.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(x),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Ct=null,xt=null;g.depth&&(xt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,bt=g.stencil?Kn:Xn,Ct=g.stencil?Ci:vn);let Dt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};p=this.getBinding(),f=p.createProjectionLayer(Dt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new en(f.textureWidth,f.textureHeight,{format:bn,type:Qe,depthTexture:new Zn(f.textureWidth,f.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let bt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,bt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new en(d.framebufferWidth,d.framebufferHeight,{format:bn,type:Qe,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),wt.setContext(s),wt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function et(Z){for(let at=0;at<Z.removed.length;at++){let bt=Z.removed[at],Ct=A.indexOf(bt);Ct>=0&&(A[Ct]=null,T[Ct].disconnect(bt))}for(let at=0;at<Z.added.length;at++){let bt=Z.added[at],Ct=A.indexOf(bt);if(Ct===-1){for(let Dt=0;Dt<T.length;Dt++)if(Dt>=A.length){A.push(bt),Ct=Dt;break}else if(A[Dt]===null){A[Dt]=bt,Ct=Dt;break}if(Ct===-1)break}let xt=T[Ct];xt&&xt.connect(bt)}}function O(Z,at){at===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(at.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let at=Z.near,bt=Z.far;m.texture!==null&&(m.depthNear>0&&(at=m.depthNear),m.depthFar>0&&(bt=m.depthFar)),H.near=P.near=R.near=at,H.far=P.far=R.far=bt,(C!==H.near||z!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),C=H.near,z=H.far),H.layers.mask=Z.layers.mask|6,R.layers.mask=H.layers.mask&-5,P.layers.mask=H.layers.mask&-3;let Ct=Z.parent,xt=H.cameras;O(H,Ct);for(let Dt=0;Dt<xt.length;Dt++)O(xt[Dt],Ct);H.projectionMatrix.copy(R.projectionMatrix),H.projectionMatrixInverse.copy(R.projectionMatrixInverse),I===null&&Z.isPerspectiveCamera&&(I={camera:Z,fov:Z.fov,zoom:Z.zoom}),X(Z,H,Ct)};function X(Z,at,bt){bt===null?Z.matrix.copy(at.matrixWorld):(Z.matrix.copy(bt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(at.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(at.projectionMatrix),Z.projectionMatrixInverse.copy(at.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ji*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(Z){return u[Z]};let q=null;function ft(Z,at){if(h=at.getViewerPose(c||a),_=at,h!==null){let bt=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let Ct=!1;bt.length!==H.cameras.length&&(H.cameras.length=0,Ct=!0);for(let Ut=0;Ut<bt.length;Ut++){let Xt=bt[Ut],jt=null;if(d!==null)jt=d.getViewport(Xt);else{let ht=p.getViewSubImage(f,Xt);jt=ht.viewport,Ut===0&&(t.setRenderTargetTextures(v,ht.colorTexture,ht.depthStencilTexture),t.setRenderTarget(v))}let tt=F[Ut];tt===void 0&&(tt=new Ze,tt.layers.enable(Ut),tt.viewport=new ve,F[Ut]=tt),tt.matrix.fromArray(Xt.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(Xt.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(jt.x,jt.y,jt.width,jt.height),Ut===0&&(H.matrix.copy(tt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Ct===!0&&H.cameras.push(tt)}let xt=s.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){p=i.getBinding();let Ut=p.getDepthInformation(bt[0]);Ut&&Ut.isValid&&Ut.texture&&m.init(Ut,s.renderState)}if(xt&&xt.includes("camera-access")&&y){t.state.unbindTexture(),p=i.getBinding();for(let Ut=0;Ut<bt.length;Ut++){let Xt=bt[Ut].camera;if(Xt){let jt=u[Xt];jt||(jt=new Fs,u[Xt]=jt);let tt=p.getCameraImage(Xt);jt.sourceTexture=tt}}}}for(let bt=0;bt<T.length;bt++){let Ct=A[bt],xt=T[bt];Ct!==null&&xt!==void 0&&xt.update(Ct,at,c||a)}q&&q(Z,at),at.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:at}),_=null}let wt=new nu;wt.setAnimationLoop(ft),this.setAnimationLoop=function(Z){q=Z},this.dispose=function(){}}},z0=new ye,du=new Gt;du.set(-1,0,0,0,1,0,0,0,1);function k0(n,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,Nl(n)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,g,S,v){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?r(m,u):u.isMeshLambertMaterial?(r(m,u),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(r(m,u),p(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(r(m,u),f(m,u),u.isMeshPhysicalMaterial&&d(m,u,v)):u.isMeshMatcapMaterial?(r(m,u),_(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),y(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,g,S):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===ke&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===ke&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let g=t.get(u),S=g.envMap,v=g.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(z0.makeRotationFromEuler(v)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(du),m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,g,S){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*g,m.scale.value=S*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function p(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function d(m,u,g){m.ior.value=u.ior,u.diffuseRoughness>0&&(m.diffuseRoughness.value=u.diffuseRoughness,u.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=u.diffuseRoughnessMap,e(u.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===ke&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.retroreflectivity>0&&(m.retroreflectivity.value=u.retroreflectivity),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=u.iridescenceThicknessMaximum,u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function y(m,u){let g=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function G0(n,t,e,i){let s={},r={};function a(g,S){let v=S.program;i.uniformBlockBinding(g,v,s[g.id])}function o(g,S){let v=s[g.id];v===void 0&&(_(g),v=l(g),s[g.id]=v,g.addEventListener("dispose",m));let T=S.program;i.updateUBOMapping(g,T);let A=t.render.frame;r[g.id]!==A&&(c(g),r[g.id]=A)}function l(g){let S=n.createBuffer(),v=g.__size,T=g.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,v,T),n.bindBuffer(n.UNIFORM_BUFFER,null),S}function c(g){let S=s[g.id],v=g.uniforms,T=g.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let A=0,x=v.length;A<x;A++){let M=v[A];if(Array.isArray(M))for(let I=0,R=M.length;I<R;I++)h(M[I],A,I,T);else h(M,A,0,T)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(g,S,v,T){if(f(g,S,v,T)===!0){let A=g.__offset,x=g.value;if(Array.isArray(x)){let M=0;for(let I=0;I<x.length;I++){let R=x[I],P=y(R,!0);p(R,g.__data,M),M+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else p(x,g.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,A,g.__data)}}function p(g,S,v){typeof g=="number"||typeof g=="boolean"?S[v]=g:g.isMatrix3?(S[v]=g.elements[0],S[v+1]=g.elements[1],S[v+2]=g.elements[2],S[v+3]=0,S[v+4]=g.elements[3],S[v+5]=g.elements[4],S[v+6]=g.elements[5],S[v+7]=0,S[v+8]=g.elements[6],S[v+9]=g.elements[7],S[v+10]=g.elements[8],S[v+11]=0):ArrayBuffer.isView(g)?S.set(g.subarray(0,S.length-v),v):g.toArray(S,v)}function f(g,S,v,T){let A=g.value,x=S+"_"+v;if(Array.isArray(A)){T[x]===void 0&&(T[x]=[]);let M=T[x],I=!1;for(let R=0;R<A.length;R++)d(A[R],M,R)===!0&&(I=!0);return I}return d(A,T,x)}function d(g,S,v){if(S[v]===void 0)return typeof g=="number"||typeof g=="boolean"?S[v]=g:ArrayBuffer.isView(g)?S[v]=g.slice():S[v]=g.clone(),!0;{let T=S[v];if(typeof g=="number"||typeof g=="boolean"){if(T!==g)return S[v]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(T.equals(g)===!1)return T.copy(g),!0}}return!1}function _(g){let S=g.uniforms,v=0,T=16;for(let x=0,M=S.length;x<M;x++){let I=Array.isArray(S[x])?S[x]:[S[x]];for(let R=0,P=I.length;R<P;R++){let F=I[R],H=Array.isArray(F.value)?F.value:[F.value],C=Array.isArray(S[x])||Array.isArray(F.value),z=v;for(let V=0,et=H.length;V<et;V++){let O=H[V],X=y(O,C),q=v%T,ft=q%X.boundary,wt=q+ft;v+=ft,wt!==0&&T-wt<X.storage&&(v+=T-wt),V===0&&(z=v),v+=X.storage}let W=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new W((v-z)/Float32Array.BYTES_PER_ELEMENT),F.__offset=z}}let A=v%T;return A>0&&(v+=T-A),g.__size=v,g.__cache={},this}function y(g,S){let v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=16,v.storage=48):g.isMatrix4?(v.boundary=16,v.storage=64):g.isTexture?Ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(g)?(v.boundary=16,v.storage=g.byteLength):Ot("WebGLRenderer: Unsupported uniform value type.",g),S===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(g){let S=g.target;S.removeEventListener("dispose",m),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function u(){for(let g in s)n.deleteBuffer(s[g]);s={},r={}}return{bind:a,update:o,dispose:u}}var V0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Nn=null;function H0(){return Nn===null&&(Nn=new jr(V0,16,16,mi,Sn),Nn.name="DFG_LUT",Nn.minFilter=Je,Nn.magFilter=Je,Nn.wrapS=An,Nn.wrapT=An,Nn.generateMipmaps=!1,Nn.needsUpdate=!0),Nn}var uo=class{constructor(t={}){let{canvas:e=Mh(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Qe}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;let y=d,m=new Set([Ia,Ca,Ra]),u=new Set([Qe,vn,us,Ci,Aa,Ea]),g=new Uint32Array(4),S=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},T=null,A=null,x=[],M=[],I=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,P=!1,F=null,H=null,C=null,z=null;this._outputColorSpace=Ne;let W=0,V=0,et=null,O=-1,X=null,q=new ve,ft=new ve,wt=null,Z=new Ht(0),at=0,bt=e.width,Ct=e.height,xt=1,Dt=null,he=null,Ut=new ve(0,0,bt,Ct),Xt=new ve(0,0,bt,Ct),jt=!1,tt=new oi,ht=new ta,ot=!1,Tt=!1,yt=new ye,Wt=new U,Pt=new ve,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ee=!1;function le(){return et===null?xt:1}let N=i;function Te(w,D){return e.getContext(w,D)}let Qt,fe,mt,we,Ft,zt,E,b,k,nt,j,lt,gt,K,$,ut,L,Q,J,dt,st,ct,Lt;try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Nt,!1),e.addEventListener("webglcontextrestored",qt,!1),e.addEventListener("webglcontextcreationerror",vt,!1),N===null){let D="webgl2";if(N=Te(D,w),N===null)throw Te(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Zt()}catch(w){throw e.removeEventListener("webglcontextlost",Nt,!1),e.removeEventListener("webglcontextrestored",qt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),Bt("WebGLRenderer: "+w.message),w}function Zt(){Qt=new tg(N),Qt.init(),st=new F0(N,Qt),fe=new Hm(N,Qt,t,st),mt=new N0(N,Qt),fe.reversedDepthBuffer&&f&&mt.buffers.depth.setReversed(!0),H=N.createFramebuffer(),C=N.createFramebuffer(),z=N.createFramebuffer(),we=new ig(N),Ft=new v0,zt=new U0(N,Qt,mt,Ft,fe,st,we),E=new jm(R),b=new rf(N),ct=new Gm(N,b),k=new eg(N,b,we,ct),nt=new rg(N,k,b,ct,we),Q=new sg(N,fe,zt),$=new Wm(Ft),j=new y0(R,E,Qt,fe,ct,$),lt=new k0(R,Ft),gt=new S0,K=new R0(Qt),L=new km(R,E,mt,nt,_,l),ut=new D0(R,nt,fe),Lt=new G0(N,we,fe,mt),J=new Vm(N,Qt,we),dt=new ng(N,Qt,we),we.programs=j.programs,R.capabilities=fe,R.extensions=Qt,R.properties=Ft,R.renderLists=gt,R.shadowMap=ut,R.state=mt,R.info=we}y!==Qe&&(I=new og(y,e.width,e.height,o,s,r));let it=new Yl(R,N);this.xr=it,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let w=Qt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Qt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return xt},this.setPixelRatio=function(w){w!==void 0&&(xt=w,this.setSize(bt,Ct,!1))},this.getSize=function(w){return w.set(bt,Ct)},this.setSize=function(w,D,Y=!0){if(it.isPresenting){Ot("WebGLRenderer: Can't change size while VR device is presenting.");return}bt=w,Ct=D,e.width=Math.floor(w*xt),e.height=Math.floor(D*xt),Y===!0&&(e.style.width=w+"px",e.style.height=D+"px"),I!==null&&I.setSize(e.width,e.height),this.setViewport(0,0,w,D)},this.getDrawingBufferSize=function(w){return w.set(bt*xt,Ct*xt).floor()},this.setDrawingBufferSize=function(w,D,Y){bt=w,Ct=D,xt=Y,e.width=Math.floor(w*Y),e.height=Math.floor(D*Y),this.setViewport(0,0,w,D)},this.setEffects=function(w){if(y===Qe){Bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let D=0;D<w.length;D++)if(w[D].isOutputPass===!0){Ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(q)},this.getViewport=function(w){return w.copy(Ut)},this.setViewport=function(w,D,Y,B){w.isVector4?Ut.set(w.x,w.y,w.z,w.w):Ut.set(w,D,Y,B),mt.viewport(q.copy(Ut).multiplyScalar(le()).round())},this.getScissor=function(w){return w.copy(Xt)},this.setScissor=function(w,D,Y,B){w.isVector4?Xt.set(w.x,w.y,w.z,w.w):Xt.set(w,D,Y,B),mt.scissor(ft.copy(Xt).multiplyScalar(le()).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(w){mt.setScissorTest(jt=w)},this.setOpaqueSort=function(w){Dt=w},this.setTransparentSort=function(w){he=w},this.getClearColor=function(w){return w.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(w=!0,D=!0,Y=!0){let B=0;if(w){let G=!1;if(et!==null){let _t=et.texture.format;G=m.has(_t)}if(G){let _t=et.texture.type,At=u.has(_t),pt=L.getClearColor(),St=L.getClearAlpha(),It=pt.r,Vt=pt.g,ne=pt.b;At?(g[0]=It,g[1]=Vt,g[2]=ne,g[3]=St,N.clearBufferuiv(N.COLOR,0,g)):(S[0]=It,S[1]=Vt,S[2]=ne,S[3]=St,N.clearBufferiv(N.COLOR,0,S))}else B|=N.COLOR_BUFFER_BIT}D&&(B|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(B|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&N.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),F=w},this.dispose=function(){e.removeEventListener("webglcontextlost",Nt,!1),e.removeEventListener("webglcontextrestored",qt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),L.dispose(),gt.dispose(),K.dispose(),zt.dispose(),Ft.dispose(),E.dispose(),nt.dispose(),k.dispose(),ct.dispose(),Lt.dispose(),j.dispose(),it.dispose(),it.removeEventListener("sessionstart",nc),it.removeEventListener("sessionend",ic),gi.stop()};function Nt(w){w.preventDefault(),Rl("WebGLRenderer: Context Lost."),P=!0}function qt(){Rl("WebGLRenderer: Context Restored."),P=!1;let w=we.autoReset,D=ut.enabled,Y=ut.autoUpdate,B=ut.needsUpdate,G=ut.type;Zt(),we.autoReset=w,ut.enabled=D,ut.autoUpdate=Y,ut.needsUpdate=B,ut.type=G}function vt(w){Bt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function de(w){let D=w.target;D.removeEventListener("dispose",de),Pe(D)}function Pe(w){Qn(w),Ft.remove(w)}function Qn(w){let D=Ft.get(w).programs;D!==void 0&&(D.forEach(function(Y){j.releaseProgram(Y)}),w.isShaderMaterial&&j.releaseShaderCache(w))}this.renderBufferDirect=function(w,D,Y,B,G,_t){D===null&&(D=te);let At=G.isMesh&&G.matrixWorld.determinantAffine()<0,pt=Du(w,D,Y,B,G);mt.setMaterial(B,At);let St=Y.index,It=1;if(B.wireframe===!0){if(St=k.getWireframeAttribute(Y),St===void 0)return;It=2}let Vt=Y.drawRange,ne=Y.attributes.position,Et=Vt.start*It,ie=(Vt.start+Vt.count)*It;_t!==null&&(Et=Math.max(Et,_t.start*It),ie=Math.min(ie,(_t.start+_t.count)*It)),St!==null?(Et=Math.max(Et,0),ie=Math.min(ie,St.count)):ne!=null&&(Et=Math.max(Et,0),ie=Math.min(ie,ne.count));let Ae=ie-Et;if(Ae<0||Ae===1/0)return;ct.setup(G,B,pt,Y,St);let ge,pe=J;if(St!==null&&(ge=b.get(St),pe=dt,pe.setIndex(ge)),G.isMesh)B.wireframe===!0?(mt.setLineWidth(B.wireframeLinewidth*le()),pe.setMode(N.LINES)):pe.setMode(N.TRIANGLES);else if(G.isLine){let Ge=B.linewidth;Ge===void 0&&(Ge=1),mt.setLineWidth(Ge*le()),G.isLineSegments?pe.setMode(N.LINES):G.isLineLoop?pe.setMode(N.LINE_LOOP):pe.setMode(N.LINE_STRIP)}else G.isPoints?pe.setMode(N.POINTS):G.isSprite&&pe.setMode(N.TRIANGLES);if(G.isBatchedMesh)if(Qt.get("WEBGL_multi_draw"))pe.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Ge=G._multiDrawStarts,Rt=G._multiDrawCounts,Ye=G._multiDrawCount,ce=St?b.get(St).bytesPerElement:1,_i=Ft.get(B).currentProgram.getUniforms();for(let Ve=0;Ve<Ye;Ve++)_i.setValue(N,"_gl_DrawID",Ve),pe.render(Ge[Ve]/ce,Rt[Ve])}else if(G.isInstancedMesh)pe.renderInstances(Et,Ae,G.count);else if(Y.isInstancedBufferGeometry){let Ge=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Rt=Math.min(Y.instanceCount,Ge);pe.renderInstances(Et,Ae,Rt)}else pe.render(Et,Ae)};function ec(w,D,Y,B){F!==null&&w.isNodeMaterial&&F.setObject(B,w),ot===!0&&$.setState(w,Y,!1),w.transparent===!0&&w.side===Fe&&w.forceSinglePass===!1?(w.side=ke,w.needsUpdate=!0,ms(w,D,B),w.side=Ln,w.needsUpdate=!0,ms(w,D,B),w.side=Fe):ms(w,D,B)}this.compile=function(w,D,Y=null){Y===null&&(Y=w),F!==null&&F.renderStart(w,D,Y),A=K.get(Y),A.init(D),M.push(A),Y.traverseVisible(function(G){G.isLight&&G.layers.test(D.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),w!==Y&&w.traverseVisible(function(G){G.isLight&&G.layers.test(D.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),A.setupLights(),F!==null&&F.updateLights(A.state.lightsArray),Tt=this.localClippingEnabled,ot=$.init(this.clippingPlanes,Tt),ot===!0&&$.setGlobalState(this.clippingPlanes,D),F!==null&&ut.render(A.state.shadowsArray,Y,D);let B=new Set;return w.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let _t=G.material;if(_t)if(Array.isArray(_t))for(let At=0;At<_t.length;At++){let pt=_t[At];ec(pt,Y,D,G),B.add(pt)}else ec(_t,Y,D,G),B.add(_t)}),A=M.pop(),F!==null&&F.renderEnd(),B},this.compileAsync=function(w,D,Y=null){let B=this.compile(w,D,Y);return new Promise(G=>{function _t(){if(B.forEach(function(At){let St=Ft.get(At).currentProgram;(St===void 0||St.isReady())&&B.delete(At)}),B.size===0){G(w);return}setTimeout(_t,10)}Qt.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let vo=null;function Pu(w){vo&&vo(w)}function nc(){gi.stop()}function ic(){gi.start()}let gi=new nu;gi.setAnimationLoop(Pu),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(w){vo=w,it.setAnimationLoop(w),w===null?gi.stop():gi.start()},it.addEventListener("sessionstart",nc),it.addEventListener("sessionend",ic),this.render=function(w,D){if(D!==void 0&&D.isCamera!==!0){Bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;F!==null&&F.renderStart(w,D);let Y=it.enabled===!0&&it.isPresenting===!0,B=I!==null&&(et===null||Y)&&I.begin(R,et);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(D),D=it.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,D,et),A=K.get(w,M.length),A.init(D),A.state.textureUnits=zt.getTextureUnits(),M.push(A),yt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?ht.setFromArrayCamera(D):tt.setFromProjectionMatrix(yt,ln,D.reversedDepth),Tt=this.localClippingEnabled,ot=$.init(this.clippingPlanes,Tt),T=gt.get(w,x.length),T.init(),x.push(T),this.info.render.frame++,it.enabled===!0&&it.isPresenting===!0){let At=R.xr.getDepthSensingMesh();At!==null&&Mo(At,D,-1/0,R.sortObjects)}Mo(w,D,0,R.sortObjects),T.finish(),F!==null&&F.updateLights(A.state.lightsArray),R.sortObjects===!0&&T.sort(Dt,he),ee=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,ee&&L.addToRenderList(T,w),this.info.autoReset===!0&&this.info.reset(),ot===!0&&$.beginShadows();let G=A.state.shadowsArray;if(ut.render(G,w,D),ot===!0&&$.endShadows(),(B&&I.hasRenderPass())===!1){let At=T.opaque,pt=T.transmissive;if(A.setupLights(),D.isArrayCamera){let St=D.cameras;if(pt.length>0)for(let It=0,Vt=St.length;It<Vt;It++){let ne=St[It];rc(At,pt,w,ne)}ee&&L.render(w);for(let It=0,Vt=St.length;It<Vt;It++){let ne=St[It];sc(T,w,ne,ne.viewport)}}else pt.length>0&&rc(At,pt,w,D),ee&&L.render(w),sc(T,w,D)}et!==null&&V===0&&(zt.updateMultisampleRenderTarget(et),zt.updateRenderTargetMipmap(et)),B&&I.end(R),w.isScene===!0&&w.onAfterRender(R,w,D),ct.resetDefaultState(),O=-1,X=null,M.pop(),M.length>0?(A=M[M.length-1],zt.setTextureUnits(A.state.textureUnits),ot===!0&&$.setGlobalState(R.clippingPlanes,A.state.camera)):A=null,x.pop(),x.length>0?T=x[x.length-1]:T=null,F!==null&&F.renderEnd()};function Mo(w,D,Y,B){if(w.visible===!1)return;if(w.layers.test(D.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(D);else if(w.isLight)A.pushLight(w),w.castShadow&&A.pushShadow(w);else if(w.isSprite){let At=D.isArrayCamera?ht:tt;if(!w.frustumCulled||w.intersectsFrustum(At)){B&&Pt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(yt);let pt=nt.update(w),St=w.material;St.visible&&T.push(w,pt,St,Y,Pt.z,null,D)}}else if(w.isMesh||w.isLine||w.isPoints){let At=D.isArrayCamera?ht:tt;if(!w.frustumCulled||w.intersectsFrustum(At)){let pt=nt.update(w),St=w.material;if(B&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Pt.copy(w.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Pt.copy(pt.boundingSphere.center)),Pt.applyMatrix4(w.matrixWorld).applyMatrix4(yt)),Array.isArray(St)){let It=pt.groups;for(let Vt=0,ne=It.length;Vt<ne;Vt++){let Et=It[Vt],ie=St[Et.materialIndex];ie&&ie.visible&&T.push(w,pt,ie,Y,Pt.z,Et,D)}}else St.visible&&T.push(w,pt,St,Y,Pt.z,null,D)}}}let _t=w.children;for(let At=0,pt=_t.length;At<pt;At++)Mo(_t[At],D,Y,B)}function sc(w,D,Y,B){let{opaque:G,transmissive:_t,transparent:At}=w;A.setupLightsView(Y),ot===!0&&$.setGlobalState(R.clippingPlanes,Y),B&&mt.viewport(q.copy(B)),G.length>0&&fr(G,D,Y),_t.length>0&&fr(_t,D,Y),At.length>0&&fr(At,D,Y),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function rc(w,D,Y,B){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[B.id]===void 0){let Et=Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[B.id]=new en(1,1,{generateMipmaps:!0,type:Et?Sn:Qe,minFilter:Jn,samples:Math.max(4,fe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:se.workingColorSpace})}let _t=A.state.transmissionRenderTarget[B.id],At=B.viewport||q;_t.setSize(At.z*R.transmissionResolutionScale,At.w*R.transmissionResolutionScale);let pt=R.getRenderTarget(),St=R.getActiveCubeFace(),It=R.getActiveMipmapLevel();R.setRenderTarget(_t),R.getClearColor(Z),at=R.getClearAlpha(),at<1&&R.setClearColor(16777215,.5),R.clear(),ee&&L.render(Y);let Vt=R.toneMapping;R.toneMapping=Dn;let ne=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),A.setupLightsView(B),ot===!0&&$.setGlobalState(R.clippingPlanes,B),fr(w,Y,B),zt.updateMultisampleRenderTarget(_t),zt.updateRenderTargetMipmap(_t),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let Et=!1;for(let ie=0,Ae=D.length;ie<Ae;ie++){let ge=D[ie],{object:pe,geometry:Ge,material:Rt,group:Ye}=ge;if(Rt.side===Fe&&pe.layers.test(B.layers)){let ce=Rt.side;Rt.side=ke,Rt.needsUpdate=!0,ac(pe,Y,B,Ge,Rt,Ye),Rt.side=ce,Rt.needsUpdate=!0,Et=!0}}Et===!0&&(zt.updateMultisampleRenderTarget(_t),zt.updateRenderTargetMipmap(_t))}R.setRenderTarget(pt,St,It),R.setClearColor(Z,at),ne!==void 0&&(B.viewport=ne),R.toneMapping=Vt}function fr(w,D,Y){let B=D.isScene===!0?D.overrideMaterial:null;for(let G=0,_t=w.length;G<_t;G++){let At=w[G],{object:pt,geometry:St,group:It}=At,Vt=At.material;Vt.allowOverride===!0&&B!==null&&(Vt=B),pt.layers.test(Y.layers)&&ac(pt,D,Y,St,Vt,It)}}function ac(w,D,Y,B,G,_t){F!==null&&G.isNodeMaterial&&F.setObject(w,G),w.onBeforeRender(R,D,Y,B,G,_t),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),G.onBeforeRender(R,D,Y,B,w,_t),G.transparent===!0&&G.side===Fe&&G.forceSinglePass===!1?(G.side=ke,G.needsUpdate=!0,R.renderBufferDirect(Y,D,B,G,w,_t),G.side=Ln,G.needsUpdate=!0,R.renderBufferDirect(Y,D,B,G,w,_t),G.side=Fe):R.renderBufferDirect(Y,D,B,G,w,_t),w.onAfterRender(R,D,Y,B,G,_t)}function oc(w){let D=0;for(let Y of w)Y.texture!==null&&D++;return D}function ms(w,D,Y){D.isScene!==!0&&(D=te);let B=Ft.get(w),G=A.state.lights,_t=A.state.shadowsArray,At=G.state.version,pt=j.getParameters(w,G.state,_t,D,Y,A.state.lightProbeGridArray),St=j.getProgramCacheKey(pt),It=B.programs;B.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?D.environment:null,B.fog=D.fog;let Vt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;B.envMap=E.get(w.envMap||B.environment,Vt),B.envMapRotation=B.environment!==null&&w.envMap===null?D.environmentRotation:w.envMapRotation,It===void 0&&(w.addEventListener("dispose",de),It=new Map,B.programs=It,B.programVariants=new Map);let ne=It.get(St);if(ne!==void 0){if(B.currentProgram===ne&&B.lightsStateVersion===At)return cc(w,pt),ne}else pt.uniforms=j.getUniforms(w),F!==null&&w.isNodeMaterial&&F.build(w,Y,pt),w.onBeforeCompile(pt,R),ne=j.acquireProgram(pt,St),It.set(St,ne),B.uniforms=pt.uniforms;let Et=B.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Et.clippingPlanes=$.uniform),cc(w,pt),B.needsLights=Uu(w),B.lightsStateVersion=At,B.needsLights&&(Et.ambientLightColor.value=G.state.ambient,Et.lightProbe.value=G.state.probe,Et.sunLights.value=G.state.sun,Et.sunLightShadows.value=G.state.sunShadow,Et.directionalLights.value=G.state.directional,Et.directionalLightShadows.value=G.state.directionalShadow,Et.spotLights.value=G.state.spot,Et.spotLightShadows.value=G.state.spotShadow,Et.rectAreaLights.value=G.state.rectArea,Et.ltc_1.value=G.state.rectAreaLTC1,Et.ltc_2.value=G.state.rectAreaLTC2,Et.pointLights.value=G.state.point,Et.pointLightShadows.value=G.state.pointShadow,Et.hemisphereLights.value=G.state.hemi,Et.sunShadowMatrix.value=G.state.sunShadowMatrix,Et.sunShadowCascade.value=G.state.sunShadowCascade,Et.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Et.spotLightMatrix.value=G.state.spotLightMatrix,Et.spotLightMap.value=G.state.spotLightMap,Et.pointShadowMatrix.value=G.state.pointShadowMatrix),B.numLightProbeGrids=oc(A.state.lightProbeGridArray),B.currentProgram=ne,B.uniformsList=null,ne}function Lu(w,D,Y,B,G){let _t=Ft.get(w),At=_t.currentProgram.id+","+B+","+G,pt=_t.programVariants.get(At);return pt===void 0?(pt=ms(w,D,Y),_t.programVariants.set(At,pt)):(_t.currentProgram=pt,_t.uniformsList=null,_t.outputColorSpace=B,_t.toneMapping=G),pt}function lc(w){if(w.uniformsList===null){let D=w.currentProgram.getUniforms();w.uniformsList=ds.seqWithValue(D.seq,w.uniforms)}return w.uniformsList}function cc(w,D){let Y=Ft.get(w);Y.outputColorSpace=D.outputColorSpace,Y.batching=D.batching,Y.batchingColor=D.batchingColor,Y.instancing=D.instancing,Y.instancingColor=D.instancingColor,Y.instancingMorph=D.instancingMorph,Y.skinning=D.skinning,Y.morphTargets=D.morphTargets,Y.morphNormals=D.morphNormals,Y.morphColors=D.morphColors,Y.morphTargetsCount=D.morphTargetsCount,Y.numClippingPlanes=D.numClippingPlanes,Y.numIntersection=D.numClipIntersection,Y.vertexAlphas=D.vertexAlphas,Y.vertexTangents=D.vertexTangents,Y.toneMapping=D.toneMapping}function Du(w,D,Y,B,G){D.isScene!==!0&&(D=te),zt.resetTextureUnits();let _t=D.fog,At=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?D.environment:null,pt=et===null?R.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:se.workingColorSpace,St=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,It=E.get(B.envMap||At,St),Vt=B.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ne=!!Y.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Et=!!Y.morphAttributes.position,ie=!!Y.morphAttributes.normal,Ae=!!Y.morphAttributes.color,ge=Dn;B.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(ge=R.toneMapping);let pe=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ge=pe!==void 0?pe.length:0,Rt=Ft.get(B),Ye=A.state.lights;if(ot===!0&&(Tt===!0||w!==X)){let Se=w===X&&B.id===O;$.setState(B,w,Se)}let ce=!1,_i=!1;B.version===Rt.__version?Rt.needsLights&&Rt.lightsStateVersion!==Ye.state.version||G.isBatchedMesh&&Rt.batching===!1||!G.isBatchedMesh&&Rt.batching===!0||G.isBatchedMesh&&Rt.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Rt.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Rt.instancing===!1||!G.isInstancedMesh&&Rt.instancing===!0||G.isSkinnedMesh&&Rt.skinning===!1||!G.isSkinnedMesh&&Rt.skinning===!0||G.isInstancedMesh&&Rt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Rt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Rt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Rt.instancingMorph===!1&&G.morphTexture!==null||Rt.envMap!==It||B.fog===!0&&Rt.fog!==_t||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==$.numPlanes||Rt.numIntersection!==$.numIntersection)||Rt.vertexAlphas!==Vt||Rt.vertexTangents!==ne||Rt.morphTargets!==Et||Rt.morphNormals!==ie||Rt.morphColors!==Ae||Rt.morphTargetsCount!==Ge||Rt.numLightProbeGrids!==oc(A.state.lightProbeGridArray)?ce=!0:(Rt.outputColorSpace!==pt||Rt.toneMapping!==ge)&&(_i=!0):(ce=!0,Rt.__version=B.version);let Ve=Rt.currentProgram;(ce===!0||_i===!0)&&(Ve=_i===!0?Lu(B,D,G,pt,ge):ms(B,D,G),F&&B.isNodeMaterial&&F.onUpdateProgram(B,Ve,Rt));let pr=!1,jn=!1,xi=!1,oe=Ve.getUniforms(),Be=Rt.uniforms;if(mt.useProgram(Ve.program)&&(pr=!0,jn=!0,xi=!0),B.id!==O&&(O=B.id,jn=!0),pr||X!==w){mt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),oe.setValue(N,"projectionMatrix",w.projectionMatrix),oe.setValue(N,"viewMatrix",w.matrixWorldInverse);let Le=oe.map.cameraPosition;Le!==void 0&&Le.setValue(N,Wt.setFromMatrixPosition(w.matrixWorld)),fe.logarithmicDepthBuffer&&oe.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&oe.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),X!==w&&(X=w,jn=!0,xi=!0)}if(Rt.needsLights&&(Ye.state.sunShadowMap.length>0&&oe.setValue(N,"sunShadowMap",Ye.state.sunShadowMap,zt),Ye.state.directionalShadowMap.length>0&&oe.setValue(N,"directionalShadowMap",Ye.state.directionalShadowMap,zt),Ye.state.spotShadowMap.length>0&&oe.setValue(N,"spotShadowMap",Ye.state.spotShadowMap,zt),Ye.state.pointShadowMap.length>0&&oe.setValue(N,"pointShadowMap",Ye.state.pointShadowMap,zt)),G.isSkinnedMesh){oe.setOptional(N,G,"bindMatrix"),oe.setOptional(N,G,"bindMatrixInverse");let Se=G.skeleton;Se&&(Se.boneTexture===null&&Se.computeBoneTexture(),oe.setValue(N,"boneTexture",Se.boneTexture,zt))}G.isBatchedMesh&&(oe.setOptional(N,G,"batchingTexture"),oe.setValue(N,"batchingTexture",G._matricesTexture,zt),oe.setOptional(N,G,"batchingIdTexture"),oe.setValue(N,"batchingIdTexture",G._indirectTexture,zt),oe.setOptional(N,G,"batchingColorTexture"),G._colorsTexture!==null&&oe.setValue(N,"batchingColorTexture",G._colorsTexture,zt));let pn=Y.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&Q.update(G,Y,Ve),(jn||Rt.receiveShadow!==G.receiveShadow)&&(Rt.receiveShadow=G.receiveShadow,oe.setValue(N,"receiveShadow",G.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&D.environment!==null&&(Be.envMapIntensity.value=D.environmentIntensity),Be.dfgLUT!==void 0&&(Be.dfgLUT.value=H0()),jn){if(oe.setValue(N,"toneMappingExposure",R.toneMappingExposure),Rt.needsLights&&Nu(Be,xi),_t&&B.fog===!0&&lt.refreshFogUniforms(Be,_t),lt.refreshMaterialUniforms(Be,B,xt,Ct,A.state.transmissionRenderTarget[w.id]),Rt.needsLights&&Rt.numLightProbeGrids>0){let Se=v,Le=0;for(let Bn of A.state.lightProbeGridArray)Bn.texture!==null&&(Se.textures[Le]=Bn.texture,Se.min[Le]=Bn.boundingBox.min,Se.max[Le]=Bn.boundingBox.max,Se.resolution[Le]=Bn.resolution,Le++);for(let Bn in Se)Se[Bn].length=Le;Be.probesSH.value=Se.textures,Be.probesMin.value=Se.min,Be.probesMax.value=Se.max,Be.probesResolution.value=Se.resolution}ds.upload(N,lc(Rt),Be,zt)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ds.upload(N,lc(Rt),Be,zt),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&oe.setValue(N,"center",G.center),oe.setValue(N,"modelViewMatrix",G.modelViewMatrix),oe.setValue(N,"normalMatrix",G.normalMatrix),oe.setValue(N,"modelMatrix",G.matrixWorld),B.uniformsGroups!==void 0){let Se=B.uniformsGroups;for(let Le=0,Bn=Se.length;Le<Bn;Le++){let uc=Se[Le];Lt.update(uc,Ve),Lt.bind(uc,Ve)}}return Ve}function Nu(w,D){w.ambientLightColor.needsUpdate=D,w.lightProbe.needsUpdate=D,w.sunLights.needsUpdate=D,w.sunLightShadows.needsUpdate=D,w.directionalLights.needsUpdate=D,w.directionalLightShadows.needsUpdate=D,w.pointLights.needsUpdate=D,w.pointLightShadows.needsUpdate=D,w.spotLights.needsUpdate=D,w.spotLightShadows.needsUpdate=D,w.rectAreaLights.needsUpdate=D,w.hemisphereLights.needsUpdate=D}function Uu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(w,D,Y){let B=Ft.get(w);B.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Ft.get(w.texture).__webglTexture=D,Ft.get(w.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:Y,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,D){let Y=Ft.get(w);Y.__webglFramebuffer=D,Y.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(w,D=0,Y=0){et=w,W=D,V=Y;let B=null,G=!1,_t=!1;if(w){let pt=Ft.get(w);if(pt.__useDefaultFramebuffer!==void 0){mt.bindFramebuffer(N.FRAMEBUFFER,pt.__webglFramebuffer),q.copy(w.viewport),ft.copy(w.scissor),wt=w.scissorTest,mt.viewport(q),mt.scissor(ft),mt.setScissorTest(wt),O=-1;return}else if(pt.__webglFramebuffer===void 0)zt.setupRenderTarget(w);else if(pt.__hasExternalTextures)zt.rebindTextures(w,Ft.get(w.texture).__webglTexture,Ft.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Vt=w.depthTexture;if(pt.__boundDepthTexture!==Vt){if(Vt!==null&&Ft.has(Vt)&&(w.width!==Vt.image.width||w.height!==Vt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");zt.setupDepthRenderbuffer(w)}}let St=w.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(_t=!0);let It=Ft.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(It[D])?B=It[D][Y]:B=It[D],G=!0):w.samples>0&&zt.useMultisampledRTT(w)===!1?B=Ft.get(w).__webglMultisampledFramebuffer:Array.isArray(It)?B=It[Y]:B=It,q.copy(w.viewport),ft.copy(w.scissor),wt=w.scissorTest}else q.copy(Ut).multiplyScalar(xt).floor(),ft.copy(Xt).multiplyScalar(xt).floor(),wt=jt;if(Y!==0&&(B=H),mt.bindFramebuffer(N.FRAMEBUFFER,B)&&mt.drawBuffers(w,B),mt.viewport(q),mt.scissor(ft),mt.setScissorTest(wt),G){let pt=Ft.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,pt.__webglTexture,Y)}else if(_t){let pt=D;for(let St=0;St<w.textures.length;St++){let It=Ft.get(w.textures[St]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+St,It.__webglTexture,Y,pt)}}else if(w!==null&&Y!==0){let pt=Ft.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,pt.__webglTexture,Y)}O=-1};function hc(w){let D=Ft.get(w);return(D.__readFormat!==w.format||D.__readType!==w.type)&&(D.__readFormat=w.format,D.__readType=w.type,D.__formatReadable=fe.textureFormatReadable(w.format),D.__typeReadable=fe.textureTypeReadable(w.type)),D}this.readRenderTargetPixels=function(w,D,Y,B,G,_t,At,pt=0){if(!(w&&w.isWebGLRenderTarget)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=Ft.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&At!==void 0&&(St=St[At],Array.isArray(St)&&(St=St[0])),St){mt.bindFramebuffer(N.FRAMEBUFFER,St);try{let It=w.textures[pt],Vt=It.format,ne=It.type;w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+pt);let Et=hc(It);if(Et.__formatReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Et.__typeReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=w.width-B&&Y>=0&&Y<=w.height-G&&N.readPixels(D,Y,B,G,st.convert(Vt),st.convert(ne),_t)}finally{let It=et!==null?Ft.get(et).__webglFramebuffer:null;mt.bindFramebuffer(N.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(w,D,Y,B,G,_t,At,pt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=Ft.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&At!==void 0&&(St=St[At],Array.isArray(St)&&(St=St[0])),St)if(D>=0&&D<=w.width-B&&Y>=0&&Y<=w.height-G){mt.bindFramebuffer(N.FRAMEBUFFER,St);let It=w.textures[pt],Vt=It.format,ne=It.type;w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+pt);let Et=hc(It);if(Et.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Et.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ie=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ie),N.bufferData(N.PIXEL_PACK_BUFFER,_t.byteLength,N.STREAM_READ),N.readPixels(D,Y,B,G,st.convert(Vt),st.convert(ne),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let Ae=et!==null?Ft.get(et).__webglFramebuffer:null;mt.bindFramebuffer(N.FRAMEBUFFER,Ae);let ge=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await bh(N,ge,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ie),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,_t),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(ie),N.deleteSync(ge),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,D=null,Y=0){let B=Math.pow(2,-Y),G=Math.floor(w.image.width*B),_t=Math.floor(w.image.height*B),At=D!==null?D.x:0,pt=D!==null?D.y:0;zt.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,Y,0,0,At,pt,G,_t),mt.unbindTexture()},this.copyTextureToTexture=function(w,D,Y=null,B=null,G=0,_t=0){let At,pt,St,It,Vt,ne,Et,ie,Ae,ge=w.isCompressedTexture?w.mipmaps[_t]:w.image;if(Y!==null)At=Y.max.x-Y.min.x,pt=Y.max.y-Y.min.y,St=Y.isBox3?Y.max.z-Y.min.z:1,It=Y.min.x,Vt=Y.min.y,ne=Y.isBox3?Y.min.z:0;else{let oe=Math.pow(2,-G);At=Math.floor(ge.width*oe),pt=Math.floor(ge.height*oe),w.isDataArrayTexture?St=ge.depth:w.isData3DTexture?St=Math.floor(ge.depth*oe):St=1,It=0,Vt=0,ne=0}B!==null?(Et=B.x,ie=B.y,Ae=B.z):(Et=0,ie=0,Ae=0);let pe=st.convert(D.format),Ge=st.convert(D.type),Rt;D.isData3DTexture?(zt.setTexture3D(D,0),Rt=N.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(zt.setTexture2DArray(D,0),Rt=N.TEXTURE_2D_ARRAY):(zt.setTexture2D(D,0),Rt=N.TEXTURE_2D),mt.activeTexture(N.TEXTURE0),mt.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),mt.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),mt.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);let Ye=mt.getParameter(N.UNPACK_ROW_LENGTH),ce=mt.getParameter(N.UNPACK_IMAGE_HEIGHT),_i=mt.getParameter(N.UNPACK_SKIP_PIXELS),Ve=mt.getParameter(N.UNPACK_SKIP_ROWS),pr=mt.getParameter(N.UNPACK_SKIP_IMAGES);mt.pixelStorei(N.UNPACK_ROW_LENGTH,ge.width),mt.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ge.height),mt.pixelStorei(N.UNPACK_SKIP_PIXELS,It),mt.pixelStorei(N.UNPACK_SKIP_ROWS,Vt),mt.pixelStorei(N.UNPACK_SKIP_IMAGES,ne);let jn=w.isDataArrayTexture||w.isData3DTexture,xi=D.isDataArrayTexture||D.isData3DTexture;if(w.isDepthTexture){let oe=Ft.get(w),Be=Ft.get(D),pn=Ft.get(oe.__renderTarget),Se=Ft.get(Be.__renderTarget);mt.bindFramebuffer(N.READ_FRAMEBUFFER,pn.__webglFramebuffer),mt.bindFramebuffer(N.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Le=0;Le<St;Le++)jn&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ft.get(w).__webglTexture,G,ne+Le),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ft.get(D).__webglTexture,_t,Ae+Le)),N.blitFramebuffer(It,Vt,It+At,Vt+pt,Et,ie,Et+At,ie+pt,N.DEPTH_BUFFER_BIT,N.NEAREST);mt.bindFramebuffer(N.READ_FRAMEBUFFER,null),mt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(G!==0||w.isRenderTargetTexture||Ft.has(w)){let oe=Ft.get(w),Be=Ft.get(D);mt.bindFramebuffer(N.READ_FRAMEBUFFER,C),mt.bindFramebuffer(N.DRAW_FRAMEBUFFER,z);for(let pn=0;pn<St;pn++)jn?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,oe.__webglTexture,G,ne+pn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,oe.__webglTexture,G),xi?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Be.__webglTexture,_t,Ae+pn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Be.__webglTexture,_t),G!==0?N.blitFramebuffer(It,Vt,It+At,Vt+pt,Et,ie,Et+At,ie+pt,N.COLOR_BUFFER_BIT,N.NEAREST):xi?N.copyTexSubImage3D(Rt,_t,Et,ie,Ae+pn,It,Vt,At,pt):N.copyTexSubImage2D(Rt,_t,Et,ie,It,Vt,At,pt);mt.bindFramebuffer(N.READ_FRAMEBUFFER,null),mt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else xi?w.isDataTexture||w.isData3DTexture?N.texSubImage3D(Rt,_t,Et,ie,Ae,At,pt,St,pe,Ge,ge.data):D.isCompressedArrayTexture?N.compressedTexSubImage3D(Rt,_t,Et,ie,Ae,At,pt,St,pe,ge.data):N.texSubImage3D(Rt,_t,Et,ie,Ae,At,pt,St,pe,Ge,ge):w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,_t,Et,ie,At,pt,pe,Ge,ge.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,_t,Et,ie,ge.width,ge.height,pe,ge.data):N.texSubImage2D(N.TEXTURE_2D,_t,Et,ie,At,pt,pe,Ge,ge);mt.pixelStorei(N.UNPACK_ROW_LENGTH,Ye),mt.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ce),mt.pixelStorei(N.UNPACK_SKIP_PIXELS,_i),mt.pixelStorei(N.UNPACK_SKIP_ROWS,Ve),mt.pixelStorei(N.UNPACK_SKIP_IMAGES,pr),_t===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&N.generateMipmap(Rt),mt.unbindTexture()},this.initRenderTarget=function(w){Ft.get(w).__webglFramebuffer===void 0&&zt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?zt.setTextureCube(w,0):w.isData3DTexture?zt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?zt.setTexture2DArray(w,0):zt.setTexture2D(w,0),mt.unbindTexture()},this.resetState=function(){W=0,V=0,et=null,mt.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}};var Me=(n,t)=>new hi(Object.assign({color:n,roughness:.55,metalness:.04},t||{})),Fn=(n,t,e)=>Me(n,{emissive:t||n,emissiveIntensity:e??.6,roughness:.15}),W0=()=>Me(13225684,{roughness:.18,metalness:.95});function dn(n,t,e,i,s,r,a,o,l){let c=new kt(t,e);return c.position.set(i||0,s||0,r||0),(a||o||l)&&c.rotation.set(a||0,o||0,l||0),n.add(c),c}var me=(n,t,e,i,s,r,a,o,l,c,h)=>dn(n,new $e(t,e,i),o,s,r,a,l,c,h);function Li(n,t,e,i,s,r){let a=new U(...t),o=new U(...e),l=o.clone().sub(a),c=l.length(),h=new kt(new $t(i,i,c,r||8),s);return h.position.copy(a).add(o).multiplyScalar(.5),h.quaternion.setFromUnitVectors(new U(0,1,0),l.normalize()),n.add(h),h}function fu(n,t,e,i,s,r,a,o,l,c){let h=document.createElement("canvas");h.width=512,h.height=Math.round(512*i/e);let p=h.getContext("2d");c&&(p.fillStyle=c,p.fillRect(0,0,h.width,h.height)),p.fillStyle=l,p.textAlign="center",p.textBaseline="middle",p.font="800 "+Math.round(h.height*.7)+'px "Schibsted Grotesk",Arial,sans-serif',p.fillText(t,h.width/2,h.height/2+h.height*.04);let f=new li(h);f.colorSpace=Ne,f.anisotropy=4;let d=new kt(new yn(e,i),new Yn({map:f,transparent:!0,toneMapped:!1}));return d.position.set(s,r,a),d.rotation.y=o,n.add(d),d}function X0(n,t){let e=n,i=0;for(;i<e.length-2&&t<e[i+1].x;)i++;let s=e[i],r=e[i+1],a=e[Math.max(0,i-1)],o=e[Math.min(e.length-1,i+2)],l=Math.min(1,Math.max(0,(s.x-t)/(s.x-r.x))),c={};for(let h in s){if(h==="x")continue;let p=a[h],f=s[h],d=r[h],_=o[h],y=l*l,m=y*l,u=.5*(2*f+(-p+d)*l+(2*p-5*f+4*d-_)*y+(-p+3*f-3*d+_)*m),g=Math.min(f,d),S=Math.max(f,d);c[h]=Math.min(S+(S-g)*.15+.004,Math.max(g-(S-g)*.15-.004,u))}return c}function q0(n,t){let e=[];for(let s=0;s<n.length-1;s++){let r=n[Math.max(0,s-1)],a=n[s],o=n[s+1],l=n[Math.min(n.length-1,s+2)],c=t[s];for(let h=0;h<c;h++){let p=h/c,f=p*p,d=f*p,_=(y,m,u,g)=>.5*(2*m+(-y+u)*p+(2*y-5*m+4*u-g)*f+(-y+3*m-3*u+g)*d);e.push({z:Math.max(0,_(r[0],a[0],o[0],l[0])),y:_(r[1],a[1],o[1],l[1]),seg:s})}}let i=n[n.length-1];return e.push({z:i[0],y:i[1],seg:n.length-2}),e}var Y0=[3,3,4,4,3,6,4,5];function Z0(n){let t=n.ys-n.yb,e=[[0,n.yb],[n.wl*.86,n.yb],[n.wl*.995,n.yb+t*.22],[n.wl,n.yb+t*(n.wy||.5)],[n.ws,n.ys],[n.ws-.012-(n.tg||0),n.ys+.012],[n.wr+(n.ws-n.wr)*.12,n.ys+(n.yt-n.ys)*.86],[n.wr*.66,n.yt-(n.dbl?0:.002)],[0,n.yt-(n.dbl||0)]];return q0(e,Y0)}function mo(n,t){let e=!1;for(let i=0,s=t.length-1;i<t.length;s=i++){let[r,a]=t[i],[o,l]=t[s];a>n[1]!=l>n[1]&&n[0]<(o-r)*(n[1]-a)/(l-a)+r&&(e=!e)}return e}function Zl(n){let t=n.n||150,e=[];for(let y=0;y<=t;y++)e.push(n.xf-(n.xf-n.xr)*y/t);let i=e.map(y=>{let m=X0(n.keys,y),u=m.yb;for(let[g,S,v]of n.arches||[]){let T=y-g;Math.abs(T)<v&&(u=Math.max(u,S+Math.sqrt(v*v-T*T)))}return m.yb=Math.min(u,m.ys-.04),{x:y,s:m,pts:Z0(m)}}),s=i[0].pts.length,r=[],a=[],o=[],l=new Ht,c=(y,m,u,g,S)=>(r.push(y,m,u),l.setHex(n.colour(y,m,u,g,S)),a.push(l.r,l.g,l.b),r.length/3-1),h=i.map(y=>{let m=[];for(let u=s-1;u>=0;u--){let g=y.pts[u];m.push(c(y.x,g.y,-g.z,g.seg,y.s))}for(let u=1;u<s;u++){let g=y.pts[u];m.push(c(y.x,g.y,g.z,g.seg,y.s))}return m}),p=h[0].length;for(let y=0;y<h.length-1;y++)for(let m=0;m<p-1;m++){let u=h[y][m],g=h[y+1][m],S=h[y+1][m+1],v=h[y][m+1];o.push(u,g,v,g,S,v)}for(let y=0;y<h.length-1;y++)o.push(h[y][p-1],h[y+1][p-1],h[y][0]),o.push(h[y+1][p-1],h[y+1][0],h[y][0]);for(let[y,m]of[[0,!1],[h.length-1,!0]]){let u=i[y],g=0;u.pts.forEach(v=>g+=v.y),g/=s;let S=c(u.x,g,0,9,u.s);for(let v=0;v<p;v++){let T=h[y][v],A=h[y][(v+1)%p];m?o.push(S,A,T):o.push(S,T,A)}}let f=new ze;f.setAttribute("position",new re(r,3)),f.setAttribute("color",new re(a,3)),f.setIndex(o),f.computeVertexNormals();let d=new ui({vertexColors:!0,roughness:n.rough||.28,metalness:n.metal==null?.2:n.metal,clearcoat:1,clearcoatRoughness:.06,side:Fe}),_=new kt(f,d);return _.userData.rings=i,_}function pu(n,t,e){let i=n.userData.rings,s=i[0],r=1e9;for(let l of i){let c=Math.abs(l.x-t);c<r&&(r=c,s=l)}let a=s.pts,o=0;for(let l=0;l<a.length-1;l++){let c=a[l],h=a[l+1];if((c.y-e)*(h.y-e)<=0&&c.y!==h.y){let p=(e-c.y)/(h.y-c.y);o=Math.max(o,c.z+(h.z-c.z)*p)}}return o}function J0(n,t){let e=n.userData.rings,i=e[0],s=1e9;for(let r of e){let a=Math.abs(r.x-t);a<s&&(s=a,i=r)}return i.s.yt}function Jl(n,t,e,i){let s=Math.sign(e),r=i.r,a=i.tw,o=new Re;o.position.set(t,r,e),n.add(o);let l=Me(1184274,{roughness:.9}),c=Me(1184274,{roughness:.9,side:Fe}),h=new kt(new $t(r,r,a,36,1,!0),c);h.rotation.x=Math.PI/2,o.add(h);for(let m of[-1,1]){let u=new kt(new rs(i.rr*.98,r,36),c);u.position.z=m*a*.5,o.add(u)}let p=new kt(new hn(r*.9,r*.1,10,36),l);p.position.z=s*a*.4,o.add(p);let f=Me(i.rim,{roughness:i.rough==null?.3:i.rough,metalness:i.metal==null?.6:i.metal}),d=new kt(new $t(i.rr,i.rr,a*.56,30),Me(526346,{roughness:.7}));if(d.rotation.x=Math.PI/2,o.add(d),i.cal){let m=new kt(new rs(i.rr*.52,i.rr*.88,14,1,i.calA==null?.5:i.calA,1.25),Me(i.cal,{roughness:.35,emissive:i.cal,emissiveIntensity:.12,side:Fe}));m.position.z=s*a*.36,o.add(m)}let _=new kt(new hn(i.rr*.985,.011,8,32),f);if(_.position.z=s*a*.47,o.add(_),i.steel){let m=new kt(new $t(i.rr*.97,i.rr*.97,.014,30),f);m.rotation.x=Math.PI/2,m.position.z=s*a*.43,o.add(m);let u=new kt(new $t(i.rr*.42,i.rr*.5,.04,24),f);u.rotation.x=Math.PI/2,u.position.z=s*a*.46,o.add(u);for(let g=0;g<6;g++){let S=g*Math.PI/3+.3,v=new kt(new $t(.026,.026,.016,12),Me(197379));v.rotation.x=Math.PI/2,v.position.set(Math.cos(S)*i.rr*.7,Math.sin(S)*i.rr*.7,s*a*.44),o.add(v)}}else{let m=i.spokes;for(let u=0;u<m;u++){let g=u*Math.PI*2/m+.25,S=i.sw||.04,v=new kt(new $e(i.rr*.98,S,.024),f);if(v.geometry.translate(i.rr*.5,0,0),v.rotation.z=g,v.position.z=s*a*.43,o.add(v),i.split){let T=new kt(new $e(i.rr*.6,S*.7,.022),f);T.geometry.translate(i.rr*.68,0,0),T.rotation.z=g+Math.PI/m,T.position.z=s*a*.43,o.add(T)}}}let y=new kt(new $t(i.rr*.17,i.rr*.17,.03,18),Me(i.cap||2236962,{roughness:.3,metalness:.7}));return y.rotation.x=Math.PI/2,y.position.z=s*a*.47,o.add(y),o}function Kl(n,t,e,i,s){me(n,.012,.068,s||.2,t,e,0,Me(i>0?15921902:15909376,{roughness:.4})),fu(n,"ASR",(s||.2)*.8,.054,t+i*.008,e,0,i*Math.PI/2,"#16130F",null)}var Di=(n,t,e,i)=>pu(n,t,e)+(i||0);function mu(){let n=new Re,t=1.2,e=-1.19,i=.68,s=-.71,r=.172,a=[{x:1.2,yb:.11,ys:.2,yt:.215,wl:.3,ws:.28,wr:.22,wy:.5},{x:1.18,yb:.075,ys:.28,yt:.29,wl:.4,ws:.38,wr:.3,wy:.5},{x:1.12,yb:.065,ys:.33,yt:.33,wl:.445,ws:.425,wr:.32,wy:.5},{x:1.02,yb:.065,ys:.37,yt:.36,wl:.465,ws:.445,wr:.33,wy:.5},{x:.9,yb:.07,ys:.41,yt:.385,wl:.475,ws:.455,wr:.34,wy:.55},{x:.68,yb:.075,ys:.445,yt:.42,wl:.488,ws:.462,wr:.35,wy:.58},{x:.45,yb:.08,ys:.47,yt:.455,wl:.476,ws:.452,wr:.37,wy:.55},{x:.3,yb:.08,ys:.485,yt:.49,wl:.468,ws:.448,wr:.38,wy:.55},{x:.12,yb:.08,ys:.5,yt:.6,wl:.466,ws:.444,wr:.335,wy:.55},{x:-.06,yb:.08,ys:.508,yt:.675,wl:.466,ws:.444,wr:.31,wy:.55},{x:-.3,yb:.08,ys:.518,yt:.678,wl:.47,ws:.446,wr:.305,wy:.55},{x:-.52,yb:.08,ys:.53,yt:.635,wl:.48,ws:.455,wr:.31,wy:.58},{x:-.71,yb:.085,ys:.535,yt:.575,wl:.495,ws:.466,wr:.33,wy:.6},{x:-.92,yb:.09,ys:.525,yt:.522,wl:.485,ws:.46,wr:.37,wy:.58},{x:-1.08,yb:.11,ys:.5,yt:.505,wl:.465,ws:.445,wr:.38,wy:.55},{x:-1.165,yb:.12,ys:.43,yt:.445,wl:.44,ws:.42,wr:.36,wy:.5},{x:-1.19,yb:.14,ys:.33,yt:.35,wl:.41,ws:.39,wr:.33,wy:.5}],o=[[.29,.497],[.03,.648],[-.3,.655],[-.5,.622],[-.555,.592],[-.52,.566],[-.6,.537],[-.2,.523],[.2,.506]],l=921361,c=6978188,h=328966,p=14673904,f=Zl({xf:t,xr:e,keys:a,arches:[[i,r,.205],[s,r,.205]],rough:.22,metal:.3,colour:(u,g,S,v,T)=>v===0?h:v>=4&&v<=6&&mo([u,g],o)||v>=6&&u<.3&&u>.04&&g>T.ys+.02||v>=6&&u<-.36&&u>-.93&&g>T.ys+.012?c:Math.abs(S)>.27&&v>=2&&v<=5&&mo([u,g],[[1.19,.27],[1.15,.315],[1.04,.358],[.94,.39],[.9,.392],[.97,.36],[1.1,.3],[1.17,.255]])?p:u>1.1&&g<.305&&g>.155&&Math.abs(S)<.25&&!(g<.29&&g>.17&&Math.abs(S)<.23)?10133672:u>1.12&&g<.29&&g>.165&&Math.abs(S)<.23?h:u>1.06&&g<.235&&g>.22&&Math.abs(S)>.32&&Math.abs(S)<.42?p:u>1.1&&g<.165&&g>.085&&Math.abs(S)<.3||u>1.07&&g<.21&&g>.09&&Math.abs(S)>.31&&Math.abs(S)<.43?h:u<-1.1&&g<.25||v<=2&&g<.12&&u<.48&&u>-.48?1381911:l});n.add(f);let d=Me(1908256,{roughness:.32,metalness:.4}),_=Me(13635612,{roughness:.35}),y=Me(921361,{roughness:.25,metalness:.3});me(n,.12,.012,.84,1.15,.058,0,d),me(n,.02,.012,.845,1.205,.058,0,_);for(let u of[-1,1]){me(n,.035,.075,.04,1.165,.125,.285*u,_),me(n,.01,.012,.08,1.165,.15,.37*u,Fn(16777215,16777215,.9)),me(n,.07,.008,.05,.62,J0(f,.62)+.002,.2*u,Me(328965));let g=Di(f,.42,.38,.004);Li(n,[.4,.3,g*u],[.44,.45,g*u],.006,W0());{let v=Di(f,.27,.49);Li(n,[.29,.495,(v-.01)*u],[.26,.53,(v+.04)*u],.008,y);let T=me(n,.07,.045,.06,.25,.535,(v+.06)*u,y);T.rotation.y=.25*u}let S=Di(f,0,.095,.004);me(n,.98,.01,.004,0,.095,S*u,_);for(let v of[.18,.31])dn(n,new $t(.05,.05,.03,26),Fn(12849436,16721459,.55),-1.17,.41,v*u,0,0,Math.PI/2),dn(n,new hn(.03,.008,8,20),Fn(15980246,16769248,.4),-1.188,.41,v*u,0,Math.PI/2,0);for(let v of[.27,.35])dn(n,new $t(.034,.034,.08,18,1,!0),Me(10659500,{roughness:.22,metalness:.9,side:Fe}),-1.17,.13,v*u,0,0,Math.PI/2);Li(n,[-.88,.515,.2*u],[-.93,.64,.2*u],.011,y),Li(n,[-.93,.64,.2*u],[-.99,.628,.2*u],.011,y)}me(n,.04,.01,.6,-1.19,.15,0,_);let m=me(n,.19,.016,.92,-1,.616,0,y);m.rotation.z=.12;for(let u of[-1,1])me(n,.2,.07,.01,-1,.6,.46*u,y);Kl(n,-1.195,.27,-1);for(let u of[i,s])for(let g of[-1,1])Jl(n,u,.405*g,{r,tw:.13,rr:.128,rim:3422012,spokes:6,sw:.034,cal:16741376,cap:4474700,rough:.3,metal:.6});return n.userData={len:2.42,floatY:0,h:.78},n}function gu(){let n=new Re,t=1.12,e=-1.11,i=.6,s=-.64,r=.168,a=[{x:1.12,yb:.11,ys:.17,yt:.19,wl:.16,ws:.15,wr:.12,wy:.5},{x:1.1,yb:.07,ys:.235,yt:.25,wl:.28,ws:.26,wr:.2,wy:.5},{x:1.03,yb:.06,ys:.29,yt:.285,wl:.39,ws:.37,wr:.26,wy:.5},{x:.86,yb:.065,ys:.345,yt:.33,wl:.45,ws:.432,wr:.32,wy:.55},{x:.6,yb:.07,ys:.395,yt:.37,wl:.462,ws:.445,wr:.33,wy:.6},{x:.32,yb:.075,ys:.41,yt:.4,wl:.448,ws:.428,wr:.35,wy:.6},{x:.18,yb:.08,ys:.42,yt:.43,wl:.446,ws:.424,wr:.36,wy:.6},{x:-.02,yb:.08,ys:.43,yt:.56,wl:.45,ws:.425,wr:.34,wy:.6},{x:-.25,yb:.08,ys:.44,yt:.646,wl:.462,ws:.436,wr:.34,wy:.6,dbl:.014},{x:-.5,yb:.085,ys:.47,yt:.615,wl:.49,ws:.466,wr:.33,wy:.62,dbl:.01},{x:-.72,yb:.09,ys:.505,yt:.55,wl:.502,ws:.478,wr:.34,wy:.62},{x:-.95,yb:.1,ys:.505,yt:.508,wl:.48,ws:.455,wr:.36,wy:.6},{x:-1.05,yb:.115,ys:.52,yt:.528,wl:.45,ws:.43,wr:.36,wy:.55},{x:-1.095,yb:.13,ys:.45,yt:.46,wl:.42,ws:.4,wr:.34,wy:.5},{x:-1.11,yb:.16,ys:.37,yt:.38,wl:.39,ws:.37,wr:.31,wy:.5}],o=[[.17,.43],[-.04,.565],[-.28,.625],[-.5,.6],[-.68,.535],[-.4,.47],[0,.44]],l=15856108,c=723725,h=6978188,p=460552,f=14081770,d=12587548,_=Zl({xf:t,xr:e,keys:a,arches:[[i,r,.198],[s,r,.205]],rough:.25,metal:.12,colour:(g,S,v,T,A)=>T===0?p:T>=4&&T<=6&&mo([g,S],o)||T>=6&&g<.18&&g>-.08&&S>A.ys+.02||T>=6&&g<-.5&&g>-.8&&S>A.ys+.012?h:T>=5&&g<.19&&g>-.86&&S>A.ys+.01?c:g<-.9&&Math.abs(v)>.1&&S>.468&&S<.488?d:g>.99&&S<.215&&S>.07&&Math.abs(v)<.27||g>1&&S<.22&&S>.09&&Math.abs(v)>.29&&Math.abs(v)<.4||g<-1&&S<.27?p:T<=2&&S<.105&&g<.4&&g>-.42?1118483:l});n.add(_);let y=Me(1842463,{roughness:.3,metalness:.4}),m=Me(723725,{roughness:.25,metalness:.3});me(n,.12,.012,.8,1.07,.052,0,y);for(let g of[-1,1]){for(let[S,v]of[[.12,-.15],[.165,-.2]]){let T=Di(_,1,S,.005),A=me(n,.08,.008,.05,1,S,(T+.01)*g,y);A.rotation.z=v}{let S=Di(_,.16,.425);Li(n,[.17,.43,(S-.01)*g],[.15,.46,(S+.025)*g],.008,m);let v=me(n,.07,.04,.05,.14,.465,(S+.04)*g,m);v.rotation.y=.25*g}dn(n,new $t(.032,.032,.07,16,1,!0),Me(10659500,{roughness:.22,metalness:.9,side:Fe}),-1.1,.13,.26*g,0,0,Math.PI/2)}me(n,.02,.04,.05,-1.115,.16,0,Fn(12914715,16722474,.5));let u=me(n,.11,.012,.74,-1.04,.548,0,m);u.rotation.z=-.22,dn(n,new $t(.03,.03,.012,20),Me(13898012,{roughness:.3}),-1.07,.47,0,0,0,Math.PI/2),fu(n,"S",.04,.04,-1.077,.47,0,-Math.PI/2,"#0b0b0d",null),Kl(n,-1.115,.33,-1),dn(n,new $t(.026,.026,.01,20),Me(13898012,{roughness:.3}),1.105,.245,0,0,0,Math.PI/2+.5);for(let g of[-1,1]){let S=pu(_,.95,.29),v=new kt(new Pn(1,20,12),Me(2303789,{roughness:.1,metalness:.5}));v.scale.set(.15,.022,.07),v.position.set(.94,.315,(S-.085)*g),v.rotation.set(0,-.5*g,-.3),n.add(v);let T=new kt(new Pn(1,20,12),Fn(15134199,12570869,.3));T.scale.set(.115,.013,.04),T.position.set(.95,.322,(S-.08)*g),T.rotation.set(0,-.5*g,-.3),n.add(T)}for(let g of[i,s])for(let S of[-1,1])Jl(n,g,.4*S,{r,tw:.13,rr:.128,rim:1842464,spokes:10,sw:.022,cal:13636124,cap:2763308,rough:.3,metal:.6});return n.userData={len:2.24,floatY:0,h:.7},n}function _u(){let n=new Re,t=1.2,e=-1.2,i=.77,s=-.585,r=.182,a=[{x:1.2,yb:.2,ys:.42,yt:.44,wl:.42,ws:.4,wr:.34,wy:.5},{x:1.185,yb:.15,ys:.5,yt:.515,wl:.445,ws:.43,wr:.37,wy:.5},{x:1.05,yb:.14,ys:.535,yt:.545,wl:.452,ws:.44,wr:.38,wy:.5},{x:.77,yb:.14,ys:.548,yt:.556,wl:.456,ws:.445,wr:.39,wy:.5},{x:.44,yb:.15,ys:.558,yt:.565,wl:.452,ws:.442,wr:.4,wy:.5,tg:0},{x:.33,yb:.15,ys:.56,yt:.69,wl:.452,ws:.442,wr:.4,wy:.5},{x:.21,yb:.15,ys:.562,yt:.862,wl:.452,ws:.442,wr:.4,wy:.5},{x:0,yb:.15,ys:.565,yt:.868,wl:.452,ws:.442,wr:.4,wy:.5},{x:-.585,yb:.15,ys:.57,yt:.868,wl:.456,ws:.445,wr:.4,wy:.5},{x:-1.1,yb:.16,ys:.572,yt:.866,wl:.452,ws:.442,wr:.4,wy:.5},{x:-1.185,yb:.17,ys:.57,yt:.855,wl:.44,ws:.43,wr:.39,wy:.5},{x:-1.2,yb:.2,ys:.52,yt:.8,wl:.42,ws:.41,wr:.37,wy:.5}],o=867108,l=723980,c=6978188,h=460551,p=[[[.2,.6],[.2,.83],[-.1,.83],[-.1,.6]],[[-.16,.6],[-.16,.83],[-.5,.83],[-.5,.6]],[[-.56,.6],[-.56,.83],[-.98,.83],[-.98,.6]]],f=g=>{let S=-1;for(let[v,T,A]of[[i,r,.235],[s,r,.235]]){let x=g-v;Math.abs(x)<A&&(S=Math.max(S,T+Math.sqrt(A*A-x*x)))}return S},d=Zl({xf:t,xr:e,keys:a,arches:[[i,r,.212],[s,r,.212]],rough:.3,metal:.25,n:170,colour:(g,S,v,T,A)=>{if(T===0)return h;if(T>=4&&T<=6&&p.some(M=>mo([g,S],M))||T>=6&&g<.43&&g>.23&&S>A.ys+.02||T===6&&g<.05&&g>-.95&&S>.8)return c;if(T>=5&&g<.43&&S>A.ys+.01||g<-1.17&&S>.55&&Math.abs(v)>.3)return l;if(g<-1.17&&S>.5&&Math.abs(v)<.3)return c;let x=f(g);return T<=4&&x>0&&S<x+.03||T<=3&&S<.215||g>1.12&&S<.36||g>1.17&&S>.42&&S<.49&&Math.abs(v)<.25||g<-1.12&&S<.33||g>.38&&g<.44&&S>.36&&S<.52&&T<=4?l:o}});n.add(d);let _=Me(723980,{roughness:.4,metalness:.25}),y=Me(1579291,{roughness:.4,metalness:.5}),m=new ui({color:o,roughness:.3,metalness:.25,clearcoat:1,clearcoatRoughness:.06});for(let g of[-1,1]){dn(n,new $t(.052,.052,.02,26),Fn(15265528,12899566,.35),1.19,.47,.33*g,0,0,Math.PI/2),dn(n,new hn(.052,.008,8,26),Fn(16777215,16777215,.5),1.2,.47,.33*g,0,Math.PI/2,0);for(let S of[.75,.66])me(n,.012,.055,.05,-1.205,S,.4*g,Fn(11865880,16722474,.55));me(n,.012,.03,.03,-1.205,.6,.36*g,Fn(11865880,16722474,.5));{let S=Di(d,.36,.6);Li(n,[.37,.6,(S-.01)*g],[.35,.63,(S+.04)*g],.009,_),me(n,.06,.065,.05,.34,.64,(S+.065)*g,_)}me(n,1.42,.026,.03,-.42,.935,.36*g,y);for(let S of[-1.08,-.6,-.1,.25])Li(n,[S,.868,.4*g],[S,.935,.36*g],.012,y);me(n,.6,.03,.05,0,.175,.475*g,_)}for(let g=0;g<8;g++)me(n,.03,.02,.74,-1.1+g*.19,.94,0,y);me(n,.05,.05,.7,.27,.93,0,y);for(let g=0;g<4;g++)dn(n,new $t(.028,.028,.02,16),Fn(16774877,16773312,.8),.297,.93,-.24+g*.16,0,0,Math.PI/2);let u=-(Di(d,-.78,.72)+.04);me(n,.36,.21,.08,-.78,.71,u,m),me(n,.36,.01,.085,-.78,.79,u,_),dn(n,new $t(.21,.21,.1,32),m,-1.255,.6,0,0,0,Math.PI/2),dn(n,new hn(.21,.024,10,32),_,-1.305,.6,0,0,Math.PI/2,0),me(n,.03,.05,.1,-1.22,.42,-.32,_),me(n,.03,.02,.46,1.205,.36,0,Me(2763822)),Kl(n,-1.205,.28,-1,.2);for(let g of[i,s])for(let S of[-1,1])Jl(n,g,.39*S,{r,tw:.16,rr:.12,rim:921360,steel:!0,cap:1842206,rough:.5,metal:.3});return n.userData={len:2.56,floatY:0,h:.96},n}var hr=new U;function fn(n,t,e,i,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;hr.copy(t),hr[i]=0,hr.normalize();let c=.5*a/(a+o),h=1-hr.angleTo(n)/l;return Math.sign(hr[e])===1?h*c:o/(a+o)+c+c*(1-h)}var go=class n extends $e{constructor(t=1,e=1,i=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,i/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new U,c=new U,h=new U(t,e,i).divideScalar(2).subScalar(r),p=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,_=p.length/6,y=new U,m=.5/a;for(let u=0,g=0;u<p.length;u+=3,g+=2)switch(l.fromArray(p,u),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),p[u+0]=h.x*Math.sign(l.x)+c.x*r,p[u+1]=h.y*Math.sign(l.y)+c.y*r,p[u+2]=h.z*Math.sign(l.z)+c.z*r,f[u+0]=c.x,f[u+1]=c.y,f[u+2]=c.z,Math.floor(u/_)){case 0:y.set(1,0,0),d[g+0]=fn(y,c,"z","y",r,i),d[g+1]=1-fn(y,c,"y","z",r,e);break;case 1:y.set(-1,0,0),d[g+0]=1-fn(y,c,"z","y",r,i),d[g+1]=1-fn(y,c,"y","z",r,e);break;case 2:y.set(0,1,0),d[g+0]=1-fn(y,c,"x","z",r,t),d[g+1]=fn(y,c,"z","x",r,i);break;case 3:y.set(0,-1,0),d[g+0]=1-fn(y,c,"x","z",r,t),d[g+1]=1-fn(y,c,"z","x",r,i);break;case 4:y.set(0,0,1),d[g+0]=1-fn(y,c,"x","y",r,t),d[g+1]=1-fn(y,c,"y","x",r,e);break;case 5:y.set(0,0,-1),d[g+0]=fn(y,c,"x","y",r,t),d[g+1]=1-fn(y,c,"y","x",r,e);break}}static fromJSON(t){return new n(t.width,t.height,t.depth,t.segments,t.radius)}};var Yt=(n,t)=>new hi(Object.assign({color:n,roughness:.55,metalness:.04},t||{})),K0=(n,t)=>Yt(n,Object.assign({roughness:.18,metalness:.1,transparent:!0,opacity:.55},t||{}));function _e(n,t,e,i,s,r,a,o,l){let c=new kt(t,e);return c.position.set(i||0,s||0,r||0),(a||o||l)&&c.rotation.set(a||0,o||0,l||0),n.add(c),c}var ae=(n,t,e,i,s,r,a,o,l,c,h)=>_e(n,new $e(t,e,i),o,s,r,a,l,c,h);function Ui(n,t,e,i,s){let r=new U(...t),a=new U(...e),o=a.clone().sub(r),l=o.length(),c=new kt(new $t(i,i,l,6),s);return c.position.copy(r).add(a).multiplyScalar(.5),c.quaternion.setFromUnitVectors(new U(0,1,0),o.normalize()),n.add(c),c}function bu(n,t,e){let i=document.createElement("canvas");i.width=n,i.height=t,e(i.getContext("2d"),n,t);let s=new li(i);return s.colorSpace=Ne,s.anisotropy=4,s}function wu(n,t,e,i,s,r,a,o,l,c,h){let p=bu(512,Math.round(512*i/e),(d,_,y)=>{c&&(d.fillStyle=c,d.fillRect(0,0,_,y)),d.fillStyle=l,d.textAlign="center",d.textBaseline="middle",d.font=h||"700 "+Math.round(y*.62)+'px "Schibsted Grotesk",Arial,sans-serif',d.fillText(t,_/2,y/2+y*.03)}),f=new kt(new yn(e,i),new Yn({map:p,transparent:!0,toneMapped:!1}));return f.position.set(s,r,a),f.rotation.y=o,n.add(f),f}function $0(){let n=new Re,t=2.3,e=15988215,i=2051996,s=5092582,r=[[.012,0],[.1,.012],[.17,.04],[.21,.1],[.225,.2],[.23,.3],[.23,.6],[.2,.76],[.13,.9],[.05,1]],a=r.map(([M,I])=>new rt(M*1.2,(.5-I)*t)),o=bu(512,1024,(M,I,R)=>{M.fillStyle="#f3f5f7",M.fillRect(0,0,I,R);let P=C=>(1-C)*R,F=C=>C*I;M.fillStyle="#1f4f9c",M.fillRect(0,P(.12),I,R*.12),M.fillStyle="#e8eef3",M.fillRect(0,P(.12),I,R*0),M.fillStyle="#4db4e6",M.fillRect(0,0,I,R*.16);let H=(C,z)=>{let W=(V,et,O,X,q,ft,wt)=>{M.fillStyle=V,M.beginPath(),M.moveTo(F(C+z*et),P(X)),M.lineTo(F(C+z*(et+ft)),P(X)),M.lineTo(F(C+z*(O+wt)),P(q)),M.lineTo(F(C+z*O),P(q)),M.closePath(),M.fill()};W("#1f4f9c",.06,.015,.26,.84,.045,.075),W("#4db4e6",.115,.095,.3,.84,.014,.022),W("#4db4e6",.04,-.01,.44,.84,.012,.016)};for(let C of[-1,0,1])M.save(),M.translate(C*I,0),H(.5,1),H(0,1),M.restore();M.fillStyle="#22313c";for(let C=0;C<5;C++){let z=.3+C*.074;for(let W of[.5,0,1]){let V=F(W+.045);M.fillRect(V-I*.012,P(z+.05),I*.024,R*.05)}}for(let C of[.5,0,1])M.fillRect(F(C+.075)-I*.012,P(.22),I*.024,R*.07)}),l=new kt(new qs(a,28),Yt(16777215,{map:o,roughness:.4}));l.rotation.z=-Math.PI/2,l.scale.set(1,1,1),n.add(l);let c=Yt(e,{roughness:.45}),h=Yt(i),p=Yt(s),f=Yt(1909803,{roughness:.35});ae(n,.4,.04,1.8,.12,.31,0,c),ae(n,.4,.045,.15,.12,.311,.9,h),ae(n,.4,.045,.15,.12,.311,-.9,h),ae(n,.05,.05,1.8,-.065,.31,0,p);for(let M of[-1,1])Ui(n,[.26,-.2,.15*M],[.18,.3,.68*M],.016,c),Ui(n,[.12,-.2,.15*M],[.1,.3,.62*M],.012,c);ae(n,.15,.08,.34,.58,.255,0,f,0,0,-.6),ae(n,.56,.07,.42,.18,.3,0,c);let d=new sn;d.moveTo(0,0),d.lineTo(.34,0),d.lineTo(.26,.62),d.lineTo(.12,.66),d.closePath();let _=new cn(d,{depth:.035,bevelEnabled:!1}),y=new kt(_,c);y.position.set(-.78,.06,-.0175),y.scale.set(-1,1,1),n.add(y);let m=new sn;m.moveTo(0,0),m.lineTo(.2,0),m.lineTo(.14,.1),m.lineTo(.04,.1),m.closePath();let u=new kt(new cn(m,{depth:.04,bevelEnabled:!1}),h);u.position.set(-.79,.62,-.02),u.scale.set(-1.45,1.6,1),u.position.y=.51,n.add(u);let g=new sn;g.moveTo(0,0),g.lineTo(.3,0),g.lineTo(.26,.2),g.lineTo(.04,.2),g.closePath();let S=new kt(new cn(g,{depth:.04,bevelEnabled:!1}),p);S.position.set(-.78,.06,-.02),S.scale.set(-1,1,1),n.add(S),ae(n,.3,.025,.8,-.95,.125,0,c),ae(n,.3,.03,.12,-.95,.125,.4,p),ae(n,.3,.03,.12,-.95,.125,-.4,p),ae(n,.04,.12,.02,-.86,-.09,0,c);let v=_e(n,new Bs(.07,.2,14),h,t/2+.09,0,0,0,0,-Math.PI/2),T=new Re;T.position.set(t/2+.03,0,0),n.add(T);for(let M=0;M<3;M++){let I=ae(T,.01,.4,.05,0,0,0,f);I.geometry.translate(0,.18,0),I.rotation.x=M*Math.PI*2/3+.4}for(let M of[-1,1]){let I=new kt(new Os(.11,1.5,8,16),Yt(e,{roughness:.35}));I.rotation.z=Math.PI/2,I.scale.set(1,1,.82),I.position.set(.08,-.62,.46*M),n.add(I),ae(n,1.2,.02,.012,0,-.6,.46*M+.098*M,h),ae(n,.9,.012,.012,.1,-.64,.46*M+.098*M,p),Ui(n,[.38,-.24,.15*M],[.36,-.56,.4*M],.018,c),Ui(n,[-.14,-.24,.14*M],[-.16,-.56,.4*M],.018,c),_e(n,new $t(.05,.05,.03,12),f,.78,-.66,.46*M+.11*M,Math.PI/2,0,0);let R=new kt(new $t(.012,.012,.86,6),c);R.rotation.x=Math.PI/2,R.position.set(.36,-.5,0),n.add(R)}let x=(M=>{let I=.5-M/t,R=.2;for(let P=0;P<r.length-1;P++)if(I>=r[P][1]&&I<=r[P+1][1]){let F=(I-r[P][1])/(r[P+1][1]-r[P][1]);R=r[P][0]+(r[P+1][0]-r[P][0])*F}return R})(-.58)*1.2+.004;for(let M of[-1,1])wu(n,"G-LAUD",.46,.1,-.58,-0,x*M,M>0?0:Math.PI,"#1f4f9c",null);return n.userData={len:t,floatY:-.76,h:1.5},n}function Q0(n,t,e,i){let s=new sn;return s.moveTo(-n,-t*i),s.lineTo(n*.45,-t),s.quadraticCurveTo(n*.82,-t*.85,n*1+e,0),s.quadraticCurveTo(n*.82,t*.85,n*.45,t),s.lineTo(-n,t*i),s.quadraticCurveTo(-n-.06,0,-n,-t*i),s}function tc(n,t,e,i){let s=n,r=new sn(s.getPoints(24)),a=new ci(s.getPoints(24).map(l=>new rt(l.x*i,l.y*i)));r.holes.push(a);let o=new cn(r,{depth:t,bevelEnabled:!1});return o.rotateX(-Math.PI/2),new kt(o,e)}function j0(){let n=new Re,t=13183263,e=10624791,i=13350822,s=Q0(1.1,.34,.12,.7),r=new kt((()=>{let v=new cn(s,{depth:.13,bevelEnabled:!1});return v.rotateX(-Math.PI/2),v})(),Yt(i,{roughness:.8}));r.scale.set(.965,1,.9),n.add(r);let a=new kt((()=>{let v=new cn(s,{depth:.27,bevelEnabled:!0,bevelSize:.012,bevelThickness:.012,bevelSegments:2});return v.rotateX(-Math.PI/2),v})(),[Yt(9382432,{roughness:.7}),Yt(t,{roughness:.38})]);a.position.y=.13,n.add(a);let o=.405,l=tc(s,.07,Yt(e),.955);l.position.y=o,n.add(l);let c=Yt(t,{roughness:.4}),h=Yt(15856110,{roughness:.5}),p=Yt(2040874),f=Yt(2634811,{roughness:.2});ae(n,.88,.24,.5,.23,o+.12,0,c),ae(n,.9,.02,.52,.23,o+.25,0,Yt(e));for(let v=0;v<4;v++)ae(n,.07,.07,.01,.66+0,o+.17,-.17+v*.115,f);for(let v=0;v<5;v++)for(let T of[-1,1])ae(n,.06,.06,.01,.17+v*.11,o+.17,.255*T,f);ae(n,.5,.2,.4,-.62,o+.1,0,h),ae(n,.52,.025,.42,-.62,o+.21,0,c),ae(n,.5,.035,.405,-.62,o+.04,0,c);for(let v=0;v<3;v++)for(let T of[-1,1])ae(n,.07,.06,.01,-.78+v*.14,o+.12,.202*T,f);_e(n,new $t(.012,.012,.7,6),h,-.98,o+.35,0);let d=.02,_=o+.25,y=1.3,m=.17,u=.085,g=[[1,1],[1,-1],[-1,1],[-1,-1]].map(([v,T])=>[[d+v*m,_,T*m],[d+v*u,y-.18,T*u]]);for(let[v,T]of g)Ui(n,v,T,.016,c);for(let v of[.3,.6]){let T=_+(y-.18-_)*v,A=m+(u-m)*v,x=_+(y-.18-_)*(v+.28),M=m+(u-m)*(v+.28);for(let[I,R,P,F]of[[1,1,1,-1],[1,-1,-1,-1],[-1,-1,-1,1],[-1,1,1,1]])Ui(n,[d+I*A,T,R*A],[d+P*M,x,F*M],.008,c),Ui(n,[d+P*A,T,F*A],[d+I*M,x,R*M],.008,c)}ae(n,.3,.1,.3,d,y-.2,0,c);let S=(v,T)=>{let A=new sn;A.moveTo(-T,-T),A.lineTo(T,-T),A.lineTo(T,T),A.lineTo(-T,T),A.closePath();let x=tc(A,.07,c,.88);return x.position.set(d,v,0),n.add(x),x};S(y-.15,.19),_e(n,new $t(.115,.115,.3,18,1,!0),K0(12572382,{side:Fe,opacity:.5}),d,y+0,0),_e(n,new Pn(.045,14,10),Yt(16773296,{emissive:16766330,emissiveIntensity:.6}),d,y,0),_e(n,new $t(.018,.026,.115,10),c,d,y-.0925,0);for(let v of[0,1,2,3])_e(n,new $t(.007,.007,.3,5),c,d+Math.cos(v*Math.PI/2+.78)*.115,y,Math.sin(v*Math.PI/2+.78)*.115);_e(n,new $t(.14,.14,.025,20),c,d,y+.16,0),S(y+.17,.14),_e(n,new $t(.09,.13,.07,16),c,d,y+.21,0),_e(n,new $t(.006,.006,.2,5),c,d,y+.36,0);for(let v of[-1,1]){let T=_e(n,new $t(.03,.03,.02,14),p,1,.27,.173*v,Math.PI/2,0,0);T.rotation.order="YXZ",T.rotation.y=v*.544}_e(n,new $t(.04,.04,.03,14),p,1.2,.26,0,0,0,Math.PI/2);for(let v of[.5,-.2])for(let T of[-1,1])_e(n,new hn(.035,.016,6,12),p,v,.2,.335*T,Math.PI/2,0,0);return n.userData={len:2.5,floatY:0,h:1.9},n}function t_(){let n=new Re,t=3159613,e=11872802,i=15525850,s=new sn;s.moveTo(-1.12,-.3),s.lineTo(.92,-.3),s.quadraticCurveTo(1.12,-.28,1.16,-.1),s.lineTo(1.16,.1),s.quadraticCurveTo(1.12,.28,.92,.3),s.lineTo(-1.12,.3),s.closePath();let r=(u,g)=>{let S=new cn(s,{depth:u,bevelEnabled:!!g,bevelSize:.012,bevelThickness:.012,bevelSegments:2});return S.rotateX(-Math.PI/2),S},a=new kt(r(.05),Yt(e,{roughness:.5}));a.scale.set(.985,1,.97),n.add(a);let o=new kt(r(.36,1),[Yt(5857899,{roughness:.6}),Yt(t,{roughness:.32,metalness:.18})]);o.position.y=.05,n.add(o);let l=.42,c=Yt(14275521,{roughness:.3}),h=Yt(1843494);for(let u of[-1,1])[-.78,-.52,-.26,0,.24].forEach(g=>{_e(n,new $t(.052,.052,.012,16),h,g,.27,.322*u,Math.PI/2,0,0),_e(n,new $t(.04,.04,.016,16),c,g,.27,.33*u,Math.PI/2,0,0)}),[.5,.72].forEach(g=>{let S=_e(n,new $t(.065,.065,.012,18),h,g,.26,.322*u,Math.PI/2,0,0);_e(n,new $t(.052,.052,.016,18),c,g,.26,.33*u,Math.PI/2,0,0)});for(let u of[-1,1])wu(n,"MATRIX ISLAND",.5,.07,.68,.36,.325*u,u>0?0:Math.PI,"#f2f0e8","#242a30",'500 36px "Schibsted Grotesk",Arial,sans-serif');let p=tc(s,.05,Yt(1975079),.965);p.position.y=l-.01,n.add(p);let f=ae(n,2.2,.012,.56,-0,l-.005,0,Yt(6976121,{roughness:.8}));for(let u=0;u<14;u++)for(let g of[-1,1]){let S=-1.05+u*.16;ae(n,.01,.09,.01,S,l+.05,.285*g,Yt(1975079))}let d=Yt(i,{roughness:.6}),_=Yt(3425359,{roughness:.1,metalness:.3}),y=Yt(16052970);ae(n,1,.3,.5,-.5,l+.15,0,d);for(let u of[-1,1])for(let g=0;g<5;g++)ae(n,.14,.19,.012,-.9+g*.19,l+.17,.252*u,_);for(let u=0;u<2;u++)ae(n,.012,.19,.14,0,l+.17,-.15+u*.3,_);ae(n,1.12,.03,.62,-.5,l+.315,0,Yt(2501425,{roughness:.5})),ae(n,.26,.2,.38,-1.04,l+.1,0,d),ae(n,.3,.025,.42,-1.04,l+.21,0,Yt(2501425)),_e(n,new $t(.028,.034,.56,10),Yt(1382427),.62,l+.28,0),_e(n,new Pn(.07,16,8,0,Math.PI*2,0,Math.PI/2),Yt(e),.62,l+.515,0).scale.set(1.4,.7,1),_e(n,new Pn(.04,12,10),Yt(12096330,{roughness:.25,metalness:.6}),.66,l+.36,0);for(let u=0;u<3;u++)_e(n,new $t(.03,.025,.05,10),Yt(e),.4+u*.06,l+.03,.1-u*.02);return _e(n,new hn(.038,.014,8,14),Yt(15099679),-.1,l+.05,.288,0,0,0),ae(n,.1,.04,.05,1,l+.02,-.16,Yt(2106666)),n.userData={len:2.3,floatY:0,h:1.05},n}var $l=3,e_=2.15,Ql=2;function xu(n){return new un({transparent:!0,depthWrite:!1,side:n,uniforms:{},vertexShader:"varying vec3 vN;varying vec3 vV;varying vec3 vP;void main(){vec4 mv=modelViewMatrix*vec4(position,1.);vN=normalize(normalMatrix*normal);vV=-mv.xyz;vP=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*mv;}",fragmentShader:"varying vec3 vN;varying vec3 vV;varying vec3 vP;void main(){vec3 n=normalize(vN);if(!gl_FrontFacing)n=-n;vec3 v=normalize(vV);float f=pow(1.-clamp(abs(dot(n,v)),0.,1.),2.2);vec3 L=normalize(vec3(-.5,.8,.6));float sp=pow(max(dot(reflect(-L,n),v),0.),38.);float a=.02+.34*f+.5*sp;gl_FragColor=vec4(mix(vec3(.86,.93,.98),vec3(1.),sp+f*.4),a);}"})}var Tu,Au,Eu=[];function _o(n,t,e){let i=document.createElement("canvas");i.width=n,i.height=t;let s=new li(i);s.colorSpace=Ne,s.anisotropy=4;let r=()=>{let a=i.getContext("2d");a.clearRect(0,0,n,t),e(a,n,t),s.needsUpdate=!0};return r(),Eu.push(r),s}document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>Eu.forEach(n=>n()));var wn=n=>"italic 900 "+n+'px Impact,"Arial Black","Schibsted Grotesk",Arial,sans-serif',an=(n,t)=>(t||600)+" "+n+'px "IBM Plex Mono","Geist Mono",ui-monospace,Menlo,monospace',On="#F4EEDF",Ni="#FFD84A",dr="#FF5A1F",Oe="#16130F";function Ru(n,t,e,i,s,r,a,o,l){n.beginPath(),n.moveTo(t+r,e),n.lineTo(t+i+r,e),n.lineTo(t+i,e+s),n.lineTo(t,e+s),n.closePath(),a&&(n.fillStyle=a,n.fill()),o&&(n.lineWidth=l||4,n.strokeStyle=o,n.lineJoin="round",n.stroke())}function yu(n,t,e,i,s,r,a){n.beginPath();for(let o=0;o<r*2;o++){let l=o%2?s:i,c=a+o*Math.PI/r;n[o?"lineTo":"moveTo"](t+Math.cos(c)*l,e+Math.sin(c)*l)}n.closePath()}function xo(n,t,e,i,s,r){n.beginPath(),n.moveTo(t+r,e),n.arcTo(t+i,e,t+i,e+s,r),n.arcTo(t+i,e+s,t,e+s,r),n.arcTo(t,e+s,t,e,r),n.arcTo(t,e,t+i,e,r),n.closePath()}function Cu(n,t,e,i,s,r,a){n.fillStyle=a||"#fff",n.fillRect(t,e,i,s),n.fillStyle=Oe;let o=r*9301+49297,l=t+i*.06,c=t+i*.94;for(;l<c;){o=(o*9301+49297)%233280;let h=1+Math.floor(o/233280*4);if(l+h>c)break;n.fillRect(l,e+s*.1,h,s*.8),l+=h+1+Math.floor((o>>3)%3)}}function Iu(n,t,e,i){n.save(),n.translate(t,e),n.scale(i,i),Ru(n,0,0,150,58,14,dr,Oe,5),n.fillStyle=On,n.font=wn(46),n.textBaseline="middle",n.textAlign="left",n.fillText("ASR",14,31),n.restore()}function yo(n,t,e,i,s,r,a){n.save(),n.beginPath(),n.rect(0,r,t,a-r),n.clip(),n.globalAlpha=s,n.fillStyle=i;let o=(a-r)*.55;for(let l=-2;l<t/120+4;l++){let c=l*120;n.beginPath(),n.moveTo(c+o,r),n.lineTo(c+o+46,r),n.lineTo(c+46,a),n.lineTo(c,a),n.closePath(),n.fill()}n.restore()}function n_(n,t,e,i){n.fillStyle=i.c1,n.fillRect(0,0,t,e),yo(n,t,e,i.c2,.5,96,e),n.fillStyle=i.c2,n.fillRect(0,0,t,98),n.fillStyle=dr,n.fillRect(0,92,t,6),Iu(n,34,18,1),n.fillStyle=On,n.font=an(27,600),n.textBaseline="middle",n.textAlign="left","letterSpacing"in n&&(n.letterSpacing="7px"),n.fillText("COLLECTION",212,46),"letterSpacing"in n&&(n.letterSpacing="0px"),n.textAlign="right",n.fillStyle="rgba(244,238,223,.8)",n.font=an(22,500),n.fillText("SERIES 0"+i.n+"/03",t-120,46),n.beginPath(),n.arc(t-60,48,34,0,7),n.fillStyle=Ni,n.fill(),n.lineWidth=4,n.strokeStyle=Oe,n.stroke(),n.fillStyle=Oe,n.textAlign="center",n.font=wn(25),n.fillText("8+",t-60,49);let s=112;for(n.font=wn(s);n.measureText(i.name).width>t-90&&s>40;)s-=2,n.font=wn(s);n.textAlign="left",n.textBaseline="alphabetic",n.lineJoin="round",n.lineWidth=16,n.strokeStyle=Oe,n.strokeText(i.name,57,191),n.fillStyle=Oe,n.fillText(i.name,57,191),n.lineWidth=14,n.strokeStyle=Oe,n.strokeText(i.name,50,184),n.fillStyle=On,n.fillText(i.name,50,184),n.fillStyle=Ni,n.font=an(23,700),"letterSpacing"in n&&(n.letterSpacing="4px"),n.fillText(i.tag,54,216),"letterSpacing"in n&&(n.letterSpacing="0px"),n.save(),xo(n,36,232,t-72,566,26),n.fillStyle=On,n.fill(),n.clip();let r=t/2,a=600;for(let l=0;l<32;l++){n.beginPath(),n.moveTo(r,a);let c=l*Math.PI*2/32,h=c+Math.PI/32;n.lineTo(r+Math.cos(c)*1400,a+Math.sin(c)*1400),n.lineTo(r+Math.cos(h)*1400,a+Math.sin(h)*1400),n.closePath(),n.fillStyle=i.c1,n.globalAlpha=.16,n.fill()}n.globalAlpha=1;let o=n.createRadialGradient(r,a,10,r,a,520);o.addColorStop(0,"rgba(255,255,255,.95)"),o.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=o,n.fillRect(0,232,t,566),n.fillStyle=i.c1,n.globalAlpha=.9,n.fillRect(0,770,t,40),n.globalAlpha=1,yo(n,t,e,On,.5,770,810),n.restore(),xo(n,36,232,t-72,566,26),n.lineWidth=9,n.strokeStyle=Oe,n.stroke(),n.save(),xo(n,36,232,t-72,566,26),n.clip(),n.fillStyle="rgba(255,255,255,.14)",n.beginPath(),n.moveTo(120,232),n.lineTo(300,232),n.lineTo(60,798),n.lineTo(36,798),n.lineTo(36,420),n.closePath(),n.fill(),n.restore(),n.save(),n.translate(46,250),n.rotate(-.05),Ru(n,0,0,236,86,18,Oe,Ni,6),n.fillStyle=On,n.textAlign="left",n.textBaseline="alphabetic",n.font=an(21,700),"letterSpacing"in n&&(n.letterSpacing="5px"),n.fillText("SCALE",34,32),"letterSpacing"in n&&(n.letterSpacing="0px"),n.fillStyle=Ni,n.font=wn(52),n.fillText("1:64",34,76),n.restore(),n.save(),n.translate(t-148,330),n.rotate(-.2),yu(n,0,0,122,92,18,0),n.fillStyle=Ni,n.fill(),n.lineWidth=8,n.strokeStyle=Oe,n.lineJoin="round",n.stroke(),yu(n,0,0,100,78,18,.1),n.lineWidth=3,n.strokeStyle=dr,n.stroke(),n.fillStyle=Oe,n.textAlign="center",n.textBaseline="middle",n.font=an(19,700),n.fillText("SERIES",0,-34),n.font=wn(44),n.fillText(i.burst||"1 OF 3",0,6),n.font=an(17,700),n.fillText("ASR",0,44),n.restore(),n.fillStyle="rgba(244,238,223,.8)",n.font=an(15,500),n.textAlign="left",n.textBaseline="middle",n.fillText("ASR COLLECTION \xB7 DISPLAY MODEL \xB7 NOT FOR RESALE",46,e-14)}function i_(n,t,e,i){n.fillStyle=i.c1,n.fillRect(0,0,t,e),yo(n,t,e,i.c2,.5,70,e),n.fillStyle=i.c2,n.fillRect(0,0,t,74),n.fillStyle=dr,n.fillRect(0,70,t,5),Iu(n,26,12,.72),n.fillStyle=On,n.textBaseline="middle",n.textAlign="right",n.font=an(17,500),n.fillText("SERIES 0"+i.n+"/03",t-26,38),xo(n,28,100,t-56,e-170,16),n.fillStyle=On,n.fill(),n.lineWidth=7,n.strokeStyle=Oe,n.stroke(),n.fillStyle=Oe,n.textAlign="left",n.textBaseline="alphabetic";let s=76;for(n.font=wn(s);n.measureText(i.name).width>t-110&&s>30;)s-=2,n.font=wn(s);n.fillText(i.name,52,190),n.fillStyle=i.c1,n.font=an(17,700),n.fillText(i.tag,54,222),n.fillStyle=Oe,n.font=an(16,500),i.copy.forEach((a,o)=>n.fillText(a,54,268+o*26)),Cu(n,52,e-230,210,70,i.n*7+3+(i.s||0)*31,"#fff"),n.fillStyle=Oe,n.font=an(12,500),n.fillText("0 93022 00"+i.n+" 1",60,e-148),n.beginPath(),n.arc(t-90,e-190,38,0,7),n.fillStyle=Ni,n.fill(),n.lineWidth=4,n.strokeStyle=Oe,n.stroke(),n.fillStyle=Oe,n.textAlign="center",n.textBaseline="middle",n.font=wn(28),n.fillText("8+",t-90,e-190),n.fillStyle=On,n.font=an(13,500),n.textAlign="left",n.fillText("ASR COLLECTION \xB7 TOY VERSION OF A REAL ASSET \xB7 DISPLAY ONLY",30,e-30)}function vu(n,t,e,i,s){n.fillStyle="#1c1915",n.fillRect(0,0,t,e),n.fillStyle=dr,n.fillRect(0,0,t,4);let r=e*1.5;yo(n,t,e,i.c1,1,4,e),n.fillStyle="#1c1915",n.fillRect(t*.07,4,t*.86,e),n.textBaseline="middle",n.fillStyle=On,n.textAlign="left",n.font=wn(Math.round(e*.5)),n.fillText("ASR",t*.09,e*.56),n.font=an(Math.round(e*.3),600),"letterSpacing"in n&&(n.letterSpacing="4px"),n.fillText(s?"COLLECTION \xB7 "+i.name.toUpperCase()+" \xB7 SCALE 1:64":"SERIES 0"+i.n+"/03",t*.09+e*1.7,e*.56),"letterSpacing"in n&&(n.letterSpacing="0px"),Cu(n,t*.93-e*2.1,e*.2,e*2.1,e*.64,i.n*11+(s?1:2)+(i.s||0)*37,"#F4EEDF"),n.beginPath(),n.arc(t*.93-e*2.1-e*.5,e*.52,e*.3,0,7),n.fillStyle=Ni,n.fill(),n.fillStyle=Oe,n.textAlign="center",n.font=wn(Math.round(e*.3)),n.fillText("8+",t*.93-e*2.1-e*.5,e*.54)}function s_(){let i=new sn;i.moveTo(-.92/2,0),i.lineTo(-.92/2,.34-.13),i.quadraticCurveTo(-.92/2,.34,-.92/2+.13,.34),i.lineTo(.92/2-.13,.34),i.quadraticCurveTo(.92/2,.34,.92/2,.34-.13),i.lineTo(.92/2,0),i.lineTo(-.92/2,0);let s=new ci;return s.absarc(0,.34*.55,.085,0,Math.PI*2,!0),i.holes.push(s),new cn(i,{depth:.06,bevelEnabled:!1,curveSegments:14})}var jl=3,ur=2.45,Mu=.16;function ps(n,t,e,i,s,r){let a=new Re,o=new Re;a.add(o),r=Object.assign({n:n+1,name:t.toUpperCase()},r);{let x=_o(1536,80,(F,H,C)=>vu(F,H,C,r,!0)),M=_o(1024,80,(F,H,C)=>vu(F,H,C,r,!1)),I=Yt(1841429,{roughness:.45,metalness:.2}),R=Yt(16777215,{map:x,roughness:.4}),P=Yt(16777215,{map:M,roughness:.4});ae(o,$l+.14,.16,Ql+.14,0,.08,0,[P,P,I,I,R,R])}ae(o,$l-.2,.1,Ql-.2,0,.23,0,Yt(i,{roughness:.25,metalness:.1,transparent:!0,opacity:.92}));let l=-Ql/2+.02,c=Mu+ur/2,h=_o(1024,836,(x,M,I)=>n_(x,M,I,r)),p=_o(768,627,(x,M,I)=>i_(x,M,I,r)),f=x=>new ui(Object.assign({color:14606046,roughness:.42,metalness:0,clearcoat:.9,clearcoatRoughness:.16},x));_e(o,new $e(jl,ur,.06),Yt(15327176,{roughness:.8}),0,c,l+.03),_e(o,new yn(jl,ur),f({map:h}),0,c,l+.061),_e(o,new yn(jl,ur),f({map:p}),0,c,l-.001,0,Math.PI,0);{let x=s_(),M=f({color:new Ht(r.c2).multiplyScalar(.72)}),I=new kt(x,M);I.position.set(0,Mu+ur-.01,l),o.add(I)}let d=e,_=Math.min(($l-.5)/d.userData.len,1.55/d.userData.h,1);d.scale.setScalar(_),d.position.y=s*_+.28-d.userData.floatY*_+.02,o.add(d);let y=2.84,m=1.78,u=1.94,g=.2+m/2,S=l+.06,v=new go(y,m,u,5,.3);v.translate(0,g,S+u/2-.02);let T=new kt(v,Tu);T.renderOrder=2;let A=new kt(v,Au);A.renderOrder=3,o.add(T,A);{let x=new Yn({color:15923194,transparent:!0,opacity:.5,depthWrite:!1}),M=.07,I=y+.12,R=m+.12;for(let P of[-1,1]){let F=ae(o,I,M,.014,0,g+P*(R/2-M/2),S+.007,x);F.renderOrder=3}for(let P of[-1,1]){let F=ae(o,M,R-M*2,.014,P*(I/2-M/2),g,S+.007,x);F.renderOrder=3}}return{slot:a,g:o,toy:d}}var Su=[()=>[ps(0,"208 Amphibian",$0(),6132397,-0,{c1:"#1f6fd6",c2:"#123f85",tag:"G-LAUD \xB7 CESSNA 208 CARAVAN",copy:["Toy version of the real amphibious","Cessna 208 Caravan seaplane, G-LAUD.","Scale 1:64. Display model.","Keep in pack to preserve finish."]}),ps(1,"Lightship 93",j0(),8362639,0,{c1:"#cf2b1f",c2:"#7e150e",tag:"LIGHT VESSEL 93 \xB7 TRINITY HOUSE",copy:["Toy version of the real 1938","steel lightship Light Vessel 93.","Scale 1:64. Display model.","Keep in pack to preserve finish."]}),ps(2,"Matrix Island",t_(),6257267,0,{c1:"#2f6a58",c2:"#16302a",tag:"HOUSEBOAT \xB7 ST KATHARINE DOCKS",copy:["Toy version of the real Thames","barge houseboat Matrix Island.","Scale 1:64. Display model.","Keep in pack to preserve finish."]})],()=>[ps(0,"GT-R Nismo",mu(),4014406,0,{s:2,burst:"SET 2",c1:"#c3141f",c2:"#141416",tag:"2016 \xB7 NISSAN GT-R NISMO",copy:["Toy version of the real 2016","Nissan GT-R Nismo in gloss black.","Scale 1:64. Display model.","Keep in pack to preserve finish."]}),ps(1,"Supra",gu(),4014406,0,{s:2,burst:"SET 2",c1:"#e0461c",c2:"#2a1206",tag:"2019 \xB7 TOYOTA GR SUPRA",copy:["Toy version of the real 2019","Toyota GR Supra, white, black roof.","Scale 1:64. Display model.","Keep in pack to preserve finish."]}),ps(2,"Defender 130",_u(),4014406,0,{s:2,burst:"SET 2",c1:"#1f5a3a",c2:"#0d2418",tag:"2022 \xB7 LAND ROVER DEFENDER 130",copy:["Toy version of the real 2022","Defender 130 in British racing green.","Scale 1:64. Display model.","Keep in pack to preserve finish."]})]];function r_(n,t){t=t||{},n=n&&n.nodeType===1?n.classList.contains("coll-stage")?[n]:[].slice.call(n.querySelectorAll(".coll-stage")):[].slice.call(n||[]);let e=matchMedia("(max-width:700px)").matches||matchMedia("(pointer:coarse)").matches;Tu=xu(ke),Au=xu(Ln);let i=[];if(n.forEach((O,X)=>{if(!Su[X])return;let q=O.querySelector("canvas");if(!q)return;let ft;try{ft=new uo({canvas:q,antialias:!0,alpha:!0,powerPreference:"low-power"})}catch{q.hidden=!0;return}ft.setPixelRatio(Math.min(devicePixelRatio||1,e?1.75:2)),ft.setClearColor(0,0),q.hidden=!1;let wt=new Ps;wt.add(new Js(16777215,10465446,1.15));let Z=new as(16774370,2.1);Z.position.set(-3,6,5),wt.add(Z);let at=new as(13625087,.8);at.position.set(4,3,-5),wt.add(at),i.push({host:O,cv:q,ren:ft,scene:wt,cam:new Ze(28,2,.1,60),items:Su[X](),W:0,H:0,visible:!0})}),!i.length)return null;let s=[].concat.apply([],i.map(O=>O.items)),r=new In,a=0;s.forEach(O=>{O.g.rotation.y=0,r.setFromObject(O.g),a=Math.max(a,Math.hypot(Math.max(-r.min.x,r.max.x),Math.max(-r.min.z,r.max.z)))});let o=2*a+1.05;i.forEach(O=>O.items.forEach((X,q)=>{X.slot.position.x=(q-1)*o,O.scene.add(X.slot),X.g.position.y=-.7}));let l=s[0].toy.children.find(O=>O.type==="Group");function c(O){let X=O.host.getBoundingClientRect(),q=Math.max(120,Math.round(X.width)),ft=Math.max(80,Math.round(X.height));if(q===O.W&&ft===O.H)return;O.W=q,O.H=ft,O.ren.setSize(q,ft,!1);let wt=O.cam;wt.aspect=q/ft;let Z=Math.tan(Ll.degToRad(wt.fov/2)),at=Z*wt.aspect,bt=e_+1.5,Ct=Math.max(1.5*o/at,bt/2/Z);for(let xt=0;xt<60;xt++){let Dt=!0;for(let he=0;he<Math.PI*2;he+=Math.PI/36){let Ut=o+a*Math.cos(he),Xt=a*Math.sin(he);if(Ut/(Ct-Xt)>at*.95){Dt=!1;break}}if(Dt)break;Ct*=1.02}wt.position.set(0,.5+Ct*.16,Ct),wt.lookAt(0,.78,0),wt.updateProjectionMatrix()}i.forEach(c);let h=new ResizeObserver(()=>i.forEach(c));i.forEach(O=>h.observe(O.host));let p=O=>{for(let X of i)(O||X.visible)&&X.ren.render(X.scene,X.cam)},f=[.25,.5,1,2,4],d=2,_=!!t.paused,y=-.5,m=0,u=!1,g=0,S=!1,v=()=>i.some(O=>O.visible),T=.38,A=()=>_?0:T*f[d];function x(O){if(!S)return;let X=Math.max(0,Math.min(.05,(O-g)/1e3))||.016;g=O,u||(m+=(A()-m)*(1-Math.exp(-X*(Math.abs(m)>T*4.5?1.3:2.4))),y+=m*X);for(let q of s)q.g.rotation.y=y;if(l&&(l.rotation.x+=X*18),p(!1),!v()||document.hidden||_&&Math.abs(m)<.002&&!u&&!t.alwaysSpin){S=!1;return}requestAnimationFrame(x)}function M(){S||!v()||document.hidden||(S=!0,g=performance.now(),requestAnimationFrame(x))}let I=new IntersectionObserver(O=>{O.forEach(X=>{let q=i.find(ft=>ft.host===X.target);q&&(q.visible=X.isIntersecting)}),v()&&(p(!1),M())},{rootMargin:"80px"});i.forEach(O=>I.observe(O.host)),document.addEventListener("visibilitychange",()=>{document.hidden||M()});let R=0,P=0,F=-1,H=0,C=0,z=0,W=0,V=null;i.forEach(({cv:O})=>{O.addEventListener("pointerdown",q=>{q.pointerType==="mouse"&&q.button!==0||(F=q.pointerId,V=O,R=H=q.clientX,P=q.clientY,C=performance.now(),W=0,z=0)}),O.addEventListener("pointermove",q=>{if(q.pointerId!==F||O!==V)return;if(!W){let bt=q.clientX-R,Ct=q.clientY-P;if(Math.abs(bt)>5&&Math.abs(bt)>Math.abs(Ct)*1.2){W=1,u=!0;try{O.setPointerCapture(F)}catch{}O.classList.add("grab"),H=q.clientX,C=performance.now()}else Math.abs(Ct)>8&&(W=-1);if(W!==1)return}let ft=performance.now(),wt=q.clientX-H,Z=Math.max(1,ft-C)/1e3;y+=wt*.011;let at=wt*.011/Z;z=z*.6+at*.4,H=q.clientX,C=ft,M(),q.preventDefault()});let X=q=>{q.pointerId!==F||O!==V||(F=-1,u&&(u=!1,O.classList.remove("grab"),m=Math.max(-14,Math.min(14,performance.now()-C<90?z:0)),M()))};O.addEventListener("pointerup",X),O.addEventListener("pointercancel",X),O.addEventListener("lostpointercapture",X)});let et={get speed(){return _?0:f[d]},get paused(){return _},faster(){return d<f.length-1&&d++,_&&(_=!1),M(),et.speed},slower(){return d>0&&d--,_&&(_=!1),M(),et.speed},toggle(){return _=!_,M(),_},setPaused(O){_=!!O,M()},render(){p(!0)},destroy(){S=!1,h.disconnect(),I.disconnect(),i.forEach(O=>O.ren.dispose())},get angle(){return y},_a:O=>{y=O;for(let X of s)X.g.rotation.y=O;p(!0)},_items:s,_rows:i,_cam:i[0].cam,_scene:i[0].scene};return p(!0),M(),et}window.__toys={init:r_};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
