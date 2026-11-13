var Yc=0,al=1,Zc=2;var ir=1,Jc=2,us=3,Nn=0,He=1,Pe=2,Ci=0,ds=1,ol=2,ll=3,cl=4,Kc=5;var Ii=100,$c=101,Qc=102,jc=103,th=104,eh=200,nh=201,ih=202,sh=203,hl=204,ul=205,rh=206,ah=207,oh=208,lh=209,ch=210,hh=211,uh=212,dh=213,fh=214,Wr=0,Xr=1,qr=2,ji=3,Yr=4,Zr=5,Jr=6,Kr=7,dl=0,ph=1,mh=2,Un=0,fl=1,pl=2,ml=3,gl=4,_l=5,xl=6,yl=7;var vl=300,Pi=301,fs=302,Ea=303,Ra=304,$r=1e3,Cn=1001,Qr=1002,Oe=1003,gh=1004;var sr=1005;var je=1006,Ca=1007;var Qn=1008;var nn=1009,Ml=1010,Sl=1011,ps=1012,Ia=1013,bn=1014,wn=1015,Tn=1016,Pa=1017,La=1018,Li=1020,bl=35902,wl=35899,Tl=1021,Al=1022,An=1023,qn=1026,jn=1027,El=1028,Da=1029,gi=1030,Na=1031;var Ua=1033,rr=33776,ar=33777,or=33778,lr=33779,Fa=35840,Oa=35841,Ba=35842,za=35843,ka=36196,Ga=37492,Va=37496,Ha=37488,Wa=37489,cr=37490,Xa=37491,qa=37808,Ya=37809,Za=37810,Ja=37811,Ka=37812,$a=37813,Qa=37814,ja=37815,to=37816,eo=37817,no=37818,io=37819,so=37820,ro=37821,ao=36492,oo=36494,lo=36495,co=36283,ho=36284,hr=36285,uo=36286;var Is=2300,jr=2301,Vr=2302,Jo=2303,Ko=2400,$o=2401,Qo=2402;var _h=3200;var fo=0,xh=1,ti="",Ie="srgb",Ps="srgb-linear",Ls="linear",fe="srgb";var Hr=7680;var yh=519,vh=512,Mh=513,Sh=514,Rl=515,bh=516,wh=517,Cl=518,Il=519,Th=35044;var Pl="300 es",fn=2e3,ts=2001;function Wu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Xu(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Ds(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ah(){let n=Ds("canvas");return n.style.display="block",n}var _c={},es=null;function Ll(...n){let t="THREE."+n.shift();es?es("log",t,...n):console.log(t,...n)}function Eh(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function zt(...n){n=Eh(n);let t="THREE."+n.shift();if(es)es("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function kt(...n){n=Eh(n);let t="THREE."+n.shift();if(es)es("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Ei(...n){let t=n.join(" ");t in _c||(_c[t]=!0,zt(...n))}function Rh(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Ch={[Wr]:Wr,[qr]:Jr,[Yr]:Yr,[ji]:Zr,[Xr]:Xr,[Jr]:qr,[Kr]:Kr,[Zr]:ji},Pn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xc=1234567,As=Math.PI/180,ns=180/Math.PI;function Di(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]).toLowerCase()}function $t(n,t,e){return Math.max(t,Math.min(e,n))}function Dl(n,t){return(n%t+t)%t}function qu(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Yu(n,t,e){return n!==t?(e-n)/(t-n):0}function Es(n,t,e){return(1-e)*n+e*t}function Zu(n,t,e,i){return Es(n,t,1-Math.exp(-e*i))}function Ju(n,t=1){return t-Math.abs(Dl(n,t*2)-t)}function Ku(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function $u(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Qu(n,t){return n+Math.floor(Math.random()*(t-n+1))}function ju(n,t){return n+Math.random()*(t-n)}function td(n){return n*(.5-Math.random())}function ed(n){n!==void 0&&(xc=n);let t=xc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function nd(n){return n*As}function id(n){return n*ns}function sd(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function rd(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Nl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ad(n,t,e,i,s){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+i)/2),h=a((t+i)/2),m=r((t-i)/2),p=a((t-i)/2),d=r((i-t)/2),_=a((i-t)/2);switch(s){case"XYX":n.set(o*h,c*m,c*p,o*l);break;case"YZY":n.set(c*p,o*h,c*m,o*l);break;case"ZXZ":n.set(c*m,c*p,o*h,o*l);break;case"XZX":n.set(o*h,c*_,c*d,o*l);break;case"YXY":n.set(c*d,o*h,c*_,o*l);break;case"ZYZ":n.set(c*_,c*d,o*h,o*l);break;default:zt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ul(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Ih(n,t){if(t.constructor===Float32Array)return n;let e=Ul(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function Ph(n,t){if(t.constructor===Float32Array)return n;let e=Ul(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var Fl={DEG2RAD:As,RAD2DEG:ns,generateUUID:Di,clamp:$t,euclideanModulo:Dl,mapLinear:qu,inverseLerp:Yu,lerp:Es,damp:Zu,pingpong:Ju,smoothstep:Ku,smootherstep:$u,randInt:Qu,randFloat:ju,randFloatSpread:td,seededRandom:ed,degToRad:nd,radToDeg:id,isPowerOfTwo:sd,ceilPowerOfTwo:rd,floorPowerOfTwo:Nl,setQuaternionFromProperEuler:ad,normalize:Ph,denormalize:Ih},rt=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos($t(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ln=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],m=i[s+3],p=r[a+0],d=r[a+1],_=r[a+2],x=r[a+3];if(m!==x||c!==p||l!==d||h!==_){let f=c*p+l*d+h*_+m*x;f<0&&(p=-p,d=-d,_=-_,x=-x,f=-f);let u=1-o;if(f<.9995){let g=Math.acos(f),y=Math.sin(g);u=Math.sin(u*g)/y,o=Math.sin(o*g)/y,c=c*u+p*o,l=l*u+d*o,h=h*u+_*o,m=m*u+x*o}else{c=c*u+p*o,l=l*u+d*o,h=h*u+_*o,m=m*u+x*o;let g=1/Math.sqrt(c*c+l*l+h*h+m*m);c*=g,l*=g,h*=g,m*=g}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=m}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],m=r[a],p=r[a+1],d=r[a+2],_=r[a+3];return t[e]=o*_+h*m+c*d-l*p,t[e+1]=c*_+h*p+l*m-o*d,t[e+2]=l*_+h*d+o*p-c*m,t[e+3]=h*_-o*m-c*p-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),m=o(r/2),p=c(i/2),d=c(s/2),_=c(r/2);switch(a){case"XYZ":this._x=p*h*m+l*d*_,this._y=l*d*m-p*h*_,this._z=l*h*_+p*d*m,this._w=l*h*m-p*d*_;break;case"YXZ":this._x=p*h*m+l*d*_,this._y=l*d*m-p*h*_,this._z=l*h*_-p*d*m,this._w=l*h*m+p*d*_;break;case"ZXY":this._x=p*h*m-l*d*_,this._y=l*d*m+p*h*_,this._z=l*h*_+p*d*m,this._w=l*h*m-p*d*_;break;case"ZYX":this._x=p*h*m-l*d*_,this._y=l*d*m+p*h*_,this._z=l*h*_-p*d*m,this._w=l*h*m+p*d*_;break;case"YZX":this._x=p*h*m+l*d*_,this._y=l*d*m+p*h*_,this._z=l*h*_-p*d*m,this._w=l*h*m-p*d*_;break;case"XZY":this._x=p*h*m-l*d*_,this._y=l*d*m-p*h*_,this._z=l*h*_+p*d*m,this._w=l*h*m+p*d*_;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],m=e[10],p=i+o+m;if(p>0){let d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(i>o&&i>m){let d=2*Math.sqrt(1+i-o-m);this._w=(h-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>m){let d=2*Math.sqrt(1+o-i-m);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+m-i-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(yc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(yc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*i),h=2*(o*e-r*s),m=2*(r*i-a*e);return this.x=e+c*l+a*m-o*h,this.y=i+c*h+o*l-r*m,this.z=s+c*m+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ao.copy(this).projectOnVector(t),this.sub(Ao)}reflect(t){return this.sub(Ao.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos($t(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ao=new U,yc=new Ln,Vt=class{static{this.prototype.isMatrix3=!0}constructor(t,e,i,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l)}set(t,e,i,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],m=i[7],p=i[2],d=i[5],_=i[8],x=s[0],f=s[3],u=s[6],g=s[1],y=s[4],v=s[7],T=s[2],A=s[5],M=s[8];return r[0]=a*x+o*g+c*T,r[3]=a*f+o*y+c*A,r[6]=a*u+o*v+c*M,r[1]=l*x+h*g+m*T,r[4]=l*f+h*y+m*A,r[7]=l*u+h*v+m*M,r[2]=p*x+d*g+_*T,r[5]=p*f+d*y+_*A,r[8]=p*u+d*v+_*M,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],m=h*a-o*l,p=o*c-h*r,d=l*r-a*c,_=e*m+i*p+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/_;return t[0]=m*x,t[1]=(s*l-h*i)*x,t[2]=(o*i-s*a)*x,t[3]=p*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-o*e)*x,t[6]=d*x,t[7]=(i*c-l*e)*x,t[8]=(a*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return Ei("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Eo.makeScale(t,e)),this}rotate(t){return Ei("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Eo.makeRotation(-t)),this}translate(t,e){return Ei("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Eo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Eo=new Vt,vc=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mc=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function od(){let n={enabled:!0,workingColorSpace:Ps,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===fe&&(s.r=Xn(s.r),s.g=Xn(s.g),s.b=Xn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===fe&&(s.r=Qi(s.r),s.g=Qi(s.g),s.b=Qi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ti?Ls:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ps]:{primaries:t,whitePoint:i,transfer:Ls,toXYZ:vc,fromXYZ:Mc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:t,whitePoint:i,transfer:fe,toXYZ:vc,fromXYZ:Mc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}}),n}var re=od();function Xn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Qi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var zi,ta=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{zi===void 0&&(zi=Ds("canvas")),zi.width=t.width,zi.height=t.height;let s=zi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=zi}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ds("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Xn(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Xn(e[i]/255)*255):e[i]=Xn(e[i]);return{data:e,width:t.width,height:t.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ld=0,is=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=Di(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ro(s[a].image)):r.push(Ro(s[a]))}else r=Ro(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Ro(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ta.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(zt("Texture: Unable to serialize Texture."),{})}var cd=0,Co=new U,tn=class n extends Pn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Cn,s=Cn,r=je,a=Qn,o=An,c=nn,l=n.DEFAULT_ANISOTROPY,h=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=Di(),this.name="",this.source=new is(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Co).x}get height(){return this.source.getSize(Co).y}get depth(){return this.source.getSize(Co).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){zt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $r:t.x=t.x-Math.floor(t.x);break;case Cn:t.x=t.x<0?0:1;break;case Qr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $r:t.y=t.y-Math.floor(t.y);break;case Cn:t.y=t.y<0?0:1;break;case Qr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=vl;tn.DEFAULT_ANISOTROPY=1;var Me=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,l=c[0],h=c[4],m=c[8],p=c[1],d=c[5],_=c[9],x=c[2],f=c[6],u=c[10];if(Math.abs(h-p)<.01&&Math.abs(m-x)<.01&&Math.abs(_-f)<.01){if(Math.abs(h+p)<.1&&Math.abs(m+x)<.1&&Math.abs(_+f)<.1&&Math.abs(l+d+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(l+1)/2,v=(d+1)/2,T=(u+1)/2,A=(h+p)/4,M=(m+x)/4,S=(_+f)/4;return y>v&&y>T?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=A/i,r=M/i):v>T?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=A/s,r=S/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=M/r,s=S/r),this.set(i,s,r,e),this}let g=Math.sqrt((f-_)*(f-_)+(m-x)*(m-x)+(p-h)*(p-h));return Math.abs(g)<.001&&(g=1),this.x=(f-_)/g,this.y=(m-x)/g,this.z=(p-h)/g,this.w=Math.acos((l+d+u-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ea=class extends Pn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:je,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new tn({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:je,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new is(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},an=class extends ea{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Ns=class extends tn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var na=class extends tn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ve=class n{static{this.prototype.isMatrix4=!0}constructor(t,e,i,s,r,a,o,c,l,h,m,p,d,_,x,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l,h,m,p,d,_,x,f)}set(t,e,i,s,r,a,o,c,l,h,m,p,d,_,x,f){let u=this.elements;return u[0]=t,u[4]=e,u[8]=i,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=h,u[10]=m,u[14]=p,u[3]=d,u[7]=_,u[11]=x,u[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/ki.setFromMatrixColumn(t,0).length(),r=1/ki.setFromMatrixColumn(t,1).length(),a=1/ki.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),m=Math.sin(r);if(t.order==="XYZ"){let p=a*h,d=a*m,_=o*h,x=o*m;e[0]=c*h,e[4]=-c*m,e[8]=l,e[1]=d+_*l,e[5]=p-x*l,e[9]=-o*c,e[2]=x-p*l,e[6]=_+d*l,e[10]=a*c}else if(t.order==="YXZ"){let p=c*h,d=c*m,_=l*h,x=l*m;e[0]=p+x*o,e[4]=_*o-d,e[8]=a*l,e[1]=a*m,e[5]=a*h,e[9]=-o,e[2]=d*o-_,e[6]=x+p*o,e[10]=a*c}else if(t.order==="ZXY"){let p=c*h,d=c*m,_=l*h,x=l*m;e[0]=p-x*o,e[4]=-a*m,e[8]=_+d*o,e[1]=d+_*o,e[5]=a*h,e[9]=x-p*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let p=a*h,d=a*m,_=o*h,x=o*m;e[0]=c*h,e[4]=_*l-d,e[8]=p*l+x,e[1]=c*m,e[5]=x*l+p,e[9]=d*l-_,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let p=a*c,d=a*l,_=o*c,x=o*l;e[0]=c*h,e[4]=x-p*m,e[8]=_*m+d,e[1]=m,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=d*m+_,e[10]=p-x*m}else if(t.order==="XZY"){let p=a*c,d=a*l,_=o*c,x=o*l;e[0]=c*h,e[4]=-m,e[8]=l*h,e[1]=p*m+x,e[5]=a*h,e[9]=d*m-_,e[2]=_*m-d,e[6]=o*h,e[10]=x*m+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hd,t,ud)}lookAt(t,e,i){let s=this.elements;return sn.subVectors(t,e),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),ii.crossVectors(i,sn),ii.lengthSq()===0&&(Math.abs(i.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),ii.crossVectors(i,sn)),ii.normalize(),vr.crossVectors(sn,ii),s[0]=ii.x,s[4]=vr.x,s[8]=sn.x,s[1]=ii.y,s[5]=vr.y,s[9]=sn.y,s[2]=ii.z,s[6]=vr.z,s[10]=sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],m=i[5],p=i[9],d=i[13],_=i[2],x=i[6],f=i[10],u=i[14],g=i[3],y=i[7],v=i[11],T=i[15],A=s[0],M=s[4],S=s[8],I=s[12],R=s[1],P=s[5],O=s[9],H=s[13],C=s[2],z=s[6],W=s[10],V=s[14],et=s[3],F=s[7],X=s[11],q=s[15];return r[0]=a*A+o*R+c*C+l*et,r[4]=a*M+o*P+c*z+l*F,r[8]=a*S+o*O+c*W+l*X,r[12]=a*I+o*H+c*V+l*q,r[1]=h*A+m*R+p*C+d*et,r[5]=h*M+m*P+p*z+d*F,r[9]=h*S+m*O+p*W+d*X,r[13]=h*I+m*H+p*V+d*q,r[2]=_*A+x*R+f*C+u*et,r[6]=_*M+x*P+f*z+u*F,r[10]=_*S+x*O+f*W+u*X,r[14]=_*I+x*H+f*V+u*q,r[3]=g*A+y*R+v*C+T*et,r[7]=g*M+y*P+v*z+T*F,r[11]=g*S+y*O+v*W+T*X,r[15]=g*I+y*H+v*V+T*q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],m=t[6],p=t[10],d=t[14],_=t[3],x=t[7],f=t[11],u=t[15],g=c*d-l*p,y=o*d-l*m,v=o*p-c*m,T=a*d-l*h,A=a*p-c*h,M=a*m-o*h;return e*(x*g-f*y+u*v)-i*(_*g-f*T+u*A)+s*(_*y-x*T+u*M)-r*(_*v-x*A+f*M)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-i*(r*h-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],m=t[9],p=t[10],d=t[11],_=t[12],x=t[13],f=t[14],u=t[15],g=e*o-i*a,y=e*c-s*a,v=e*l-r*a,T=i*c-s*o,A=i*l-r*o,M=s*l-r*c,S=h*x-m*_,I=h*f-p*_,R=h*u-d*_,P=m*f-p*x,O=m*u-d*x,H=p*u-d*f,C=g*H-y*O+v*P+T*R-A*I+M*S;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/C;return t[0]=(o*H-c*O+l*P)*z,t[1]=(s*O-i*H-r*P)*z,t[2]=(x*M-f*A+u*T)*z,t[3]=(p*A-m*M-d*T)*z,t[4]=(c*R-a*H-l*I)*z,t[5]=(e*H-s*R+r*I)*z,t[6]=(f*v-_*M-u*y)*z,t[7]=(h*M-p*v+d*y)*z,t[8]=(a*O-o*R+l*S)*z,t[9]=(i*R-e*O-r*S)*z,t[10]=(_*A-x*v+u*g)*z,t[11]=(m*v-h*A-d*g)*z,t[12]=(o*I-a*P-c*S)*z,t[13]=(e*P-i*I+s*S)*z,t[14]=(x*y-_*T-f*g)*z,t[15]=(h*T-m*y+p*g)*z,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,m=o+o,p=r*l,d=r*h,_=r*m,x=a*h,f=a*m,u=o*m,g=c*l,y=c*h,v=c*m,T=i.x,A=i.y,M=i.z;return s[0]=(1-(x+u))*T,s[1]=(d+v)*T,s[2]=(_-y)*T,s[3]=0,s[4]=(d-v)*A,s[5]=(1-(p+u))*A,s[6]=(f+g)*A,s[7]=0,s[8]=(_+y)*M,s[9]=(f-g)*M,s[10]=(1-(p+x))*M,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=ki.set(s[0],s[1],s[2]).length(),o=ki.set(s[4],s[5],s[6]).length(),c=ki.set(s[8],s[9],s[10]).length();r<0&&(a=-a),yn.copy(this);let l=1/a,h=1/o,m=1/c;return yn.elements[0]*=l,yn.elements[1]*=l,yn.elements[2]*=l,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=m,yn.elements[9]*=m,yn.elements[10]*=m,e.setFromRotationMatrix(yn),i.x=a,i.y=o,i.z=c,this}makePerspective(t,e,i,s,r,a,o=fn,c=!1){let l=this.elements,h=2*r/(e-t),m=2*r/(i-s),p=(e+t)/(e-t),d=(i+s)/(i-s),_,x;if(c)_=r/(a-r),x=a*r/(a-r);else if(o===fn)_=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===ts)_=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=m,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=fn,c=!1){let l=this.elements,h=2/(e-t),m=2/(i-s),p=-(e+t)/(e-t),d=-(i+s)/(i-s),_,x;if(c)_=1/(a-r),x=a/(a-r);else if(o===fn)_=-2/(a-r),x=-(a+r)/(a-r);else if(o===ts)_=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=m,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=_,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},ki=new U,yn=new ve,hd=new U(0,0,0),ud=new U(1,1,1),ii=new U,vr=new U,sn=new U,Sc=new ve,bc=new Ln,Yn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],m=s[2],p=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin($t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin($t(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-m,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-$t(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin($t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-$t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Sc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Sc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return bc.setFromEuler(this),this.setFromQuaternion(bc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Yn.DEFAULT_ORDER="XYZ";var Us=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},dd=0,wc=new U,Gi=new Ln,kn=new ve,Mr=new U,Ms=new U,fd=new U,pd=new Ln,Tc=new U(1,0,0),Ac=new U(0,1,0),Ec=new U(0,0,1),Rc={type:"added"},md={type:"removed"},Vi={type:"childadded",child:null},Io={type:"childremoved",child:null},Je=class n extends Pn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=Di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new U,e=new Yn,i=new Ln,s=new U(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new Vt}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Us,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.premultiply(Gi),this}rotateX(t){return this.rotateOnAxis(Tc,t)}rotateY(t){return this.rotateOnAxis(Ac,t)}rotateZ(t){return this.rotateOnAxis(Ec,t)}translateOnAxis(t,e){return wc.copy(t).applyQuaternion(this.quaternion),this.position.add(wc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Tc,t)}translateY(t){return this.translateOnAxis(Ac,t)}translateZ(t){return this.translateOnAxis(Ec,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Mr.copy(t):Mr.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(Ms,Mr,this.up):kn.lookAt(Mr,Ms,this.up),this.quaternion.setFromRotationMatrix(kn),s&&(kn.extractRotation(s.matrixWorld),Gi.setFromRotationMatrix(kn),this.quaternion.premultiply(Gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Rc),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null):kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(md),Io.child=t,this.dispatchEvent(Io),Io.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Rc),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,t,fd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,pd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let m=c[l];r(t.shapes,m)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),m=a(t.shapes),p=a(t.skeletons),d=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),m.length>0&&(i.shapes=m),p.length>0&&(i.skeletons=p),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Je.DEFAULT_UP=new U(0,1,0);Je.DEFAULT_MATRIX_AUTO_UPDATE=!0;Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var we=class extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}},gd={type:"move"},ss=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new we,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new we,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new we,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let x of t.hand.values()){let f=e.getJointPose(x,i),u=this._getHandJoint(l,x);f!==null&&(u.matrix.fromArray(f.transform.matrix),u.matrix.decompose(u.position,u.quaternion,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=f.radius),u.visible=f!==null}let h=l.joints["index-finger-tip"],m=l.joints["thumb-tip"],p=h.position.distanceTo(m.position),d=.02,_=.005;l.inputState.pinching&&p>d+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=d-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(gd)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new we;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Lh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},Sr={h:0,s:0,l:0};function Po(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Wt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=i,re.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=re.workingColorSpace){if(t=Dl(t,1),e=$t(e,0,1),i=$t(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Po(a,r,t+1/3),this.g=Po(a,r,t),this.b=Po(a,r,t-1/3)}return re.colorSpaceToWorking(this,s),this}setStyle(t,e=Ie){function i(r){r!==void 0&&parseFloat(r)<1&&zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){let i=Lh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xn(t.r),this.g=Xn(t.g),this.b=Xn(t.b),this}copyLinearToSRGB(t){return this.r=Qi(t.r),this.g=Qi(t.g),this.b=Qi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return re.workingToColorSpace(Ze.copy(this),t),Math.round($t(Ze.r*255,0,255))*65536+Math.round($t(Ze.g*255,0,255))*256+Math.round($t(Ze.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.workingToColorSpace(Ze.copy(this),e);let i=Ze.r,s=Ze.g,r=Ze.b,a=Math.max(i,s,r),o=Math.min(i,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let m=a-o;switch(l=h<=.5?m/(a+o):m/(2-a-o),a){case i:c=(s-r)/m+(s<r?6:0);break;case s:c=(r-i)/m+2;break;case r:c=(i-s)/m+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.workingToColorSpace(Ze.copy(this),e),t.r=Ze.r,t.g=Ze.g,t.b=Ze.b,t}getStyle(t=Ie){re.workingToColorSpace(Ze.copy(this),t);let e=Ze.r,i=Ze.g,s=Ze.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(si),this.setHSL(si.h+t,si.s+e,si.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(si),t.getHSL(Sr);let i=Es(si.h,Sr.h,e),s=Es(si.s,Sr.s,e),r=Es(si.l,Sr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ze=new Wt;Wt.NAMES=Lh;var Fs=class extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},vn=new U,Gn=new U,Lo=new U,Vn=new U,Hi=new U,Wi=new U,Cc=new U,Do=new U,No=new U,Uo=new U,Fo=new Me,Oo=new Me,Bo=new Me,li=class n{constructor(t=new U,e=new U,i=new U){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),vn.subVectors(t,e),s.cross(vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){vn.subVectors(s,e),Gn.subVectors(i,e),Lo.subVectors(t,e);let a=vn.dot(vn),o=vn.dot(Gn),c=vn.dot(Lo),l=Gn.dot(Gn),h=Gn.dot(Lo),m=a*l-o*o;if(m===0)return r.set(0,0,0),null;let p=1/m,d=(l*c-o*h)*p,_=(a*h-o*c)*p;return r.set(1-d-_,_,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(t,e,i,s,r,a,o,c){return this.getBarycoord(t,e,i,s,Vn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Vn.x),c.addScaledVector(a,Vn.y),c.addScaledVector(o,Vn.z),c)}static getInterpolatedAttribute(t,e,i,s,r,a){return Fo.setScalar(0),Oo.setScalar(0),Bo.setScalar(0),Fo.fromBufferAttribute(t,e),Oo.fromBufferAttribute(t,i),Bo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Fo,r.x),a.addScaledVector(Oo,r.y),a.addScaledVector(Bo,r.z),a}static isFrontFacing(t,e,i,s){return vn.subVectors(i,e),Gn.subVectors(t,e),vn.cross(Gn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),vn.cross(Gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;Hi.subVectors(s,i),Wi.subVectors(r,i),Do.subVectors(t,i);let c=Hi.dot(Do),l=Wi.dot(Do);if(c<=0&&l<=0)return e.copy(i);No.subVectors(t,s);let h=Hi.dot(No),m=Wi.dot(No);if(h>=0&&m<=h)return e.copy(s);let p=c*m-h*l;if(p<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),e.copy(i).addScaledVector(Hi,a);Uo.subVectors(t,r);let d=Hi.dot(Uo),_=Wi.dot(Uo);if(_>=0&&d<=_)return e.copy(r);let x=d*l-c*_;if(x<=0&&l>=0&&_<=0)return o=l/(l-_),e.copy(i).addScaledVector(Wi,o);let f=h*_-d*m;if(f<=0&&m-h>=0&&d-_>=0)return Cc.subVectors(r,s),o=(m-h)/(m-h+(d-_)),e.copy(s).addScaledVector(Cc,o);let u=1/(f+x+p);return a=x*u,o=p*u,e.copy(i).addScaledVector(Hi,a).addScaledVector(Wi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Dn=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Mn):Mn.fromBufferAttribute(r,a),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),br.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),br.copy(i.boundingBox)),br.applyMatrix4(t.matrixWorld),this.union(br)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ss),wr.subVectors(this.max,Ss),Xi.subVectors(t.a,Ss),qi.subVectors(t.b,Ss),Yi.subVectors(t.c,Ss),ri.subVectors(qi,Xi),ai.subVectors(Yi,qi),Si.subVectors(Xi,Yi);let e=[0,-ri.z,ri.y,0,-ai.z,ai.y,0,-Si.z,Si.y,ri.z,0,-ri.x,ai.z,0,-ai.x,Si.z,0,-Si.x,-ri.y,ri.x,0,-ai.y,ai.x,0,-Si.y,Si.x,0];return!zo(e,Xi,qi,Yi,wr)||(e=[1,0,0,0,1,0,0,0,1],!zo(e,Xi,qi,Yi,wr))?!1:(Tr.crossVectors(ri,ai),e=[Tr.x,Tr.y,Tr.z],zo(e,Xi,qi,Yi,wr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Hn=[new U,new U,new U,new U,new U,new U,new U,new U],Mn=new U,br=new Dn,Xi=new U,qi=new U,Yi=new U,ri=new U,ai=new U,Si=new U,Ss=new U,wr=new U,Tr=new U,bi=new U;function zo(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){bi.fromArray(n,r);let o=s.x*Math.abs(bi.x)+s.y*Math.abs(bi.y)+s.z*Math.abs(bi.z),c=t.dot(bi),l=e.dot(bi),h=i.dot(bi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Re=new U,Ar=new rt,_d=0,In=class extends Pn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_d++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Th,this.updateRanges=[],this.gpuType=wn,this.version=0,this._normalizationScale=t!==void 0?Ul(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ar.fromBufferAttribute(this,e),Ar.applyMatrix3(t),this.setXY(e,Ar.x,Ar.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Ih(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Ph(t,this.array)}};var Os=class extends In{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Bs=class extends In{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var oe=class extends In{constructor(t,e,i){super(new Float32Array(t),e,i)}},xd=new Dn,bs=new U,ko=new U,rs=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):xd.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bs.subVectors(t,this.center);let e=bs.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(bs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ko.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bs.copy(t.center).add(ko)),this.expandByPoint(bs.copy(t.center).sub(ko))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},yd=0,dn=new ve,Go=new Je,Zi=new U,rn=new Dn,ws=new Dn,Fe=new U,Ve=class n extends Pn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=Di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wu(t)?Bs:Os)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Vt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return dn.makeRotationFromQuaternion(t),this.applyMatrix4(dn),this}rotateX(t){return dn.makeRotationX(t),this.applyMatrix4(dn),this}rotateY(t){return dn.makeRotationY(t),this.applyMatrix4(dn),this}rotateZ(t){return dn.makeRotationZ(t),this.applyMatrix4(dn),this}translate(t,e,i){return dn.makeTranslation(t,e,i),this.applyMatrix4(dn),this}scale(t,e,i){return dn.makeScale(t,e,i),this.applyMatrix4(dn),this}lookAt(t){return Go.lookAt(t),Go.updateMatrix(),this.applyMatrix4(Go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new oe(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let i=this.boundingSphere.center;if(rn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ws.setFromBufferAttribute(o),this.morphTargetsRelative?(Fe.addVectors(rn.min,ws.min),rn.expandByPoint(Fe),Fe.addVectors(rn.max,ws.max),rn.expandByPoint(Fe)):(rn.expandByPoint(ws.min),rn.expandByPoint(ws.max))}rn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Fe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Fe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Fe.fromBufferAttribute(o,l),c&&(Zi.fromBufferAttribute(t,l),Fe.add(Zi)),s=Math.max(s,i.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new In(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(i.count);for(let I=0;I<i.count;I++)o[I]=new U,c[I]=new U;let h=new U,m=new U,p=new U,d=new rt,_=new rt,x=new rt,f=new U,u=new U;function g(I,R,P){l[I]=l[R]=l[P]=1,h.fromBufferAttribute(i,I),m.fromBufferAttribute(i,R),p.fromBufferAttribute(i,P),d.fromBufferAttribute(r,I),_.fromBufferAttribute(r,R),x.fromBufferAttribute(r,P),m.sub(h),p.sub(h),_.sub(d),x.sub(d);let O=1/(_.x*x.y-x.x*_.y);isFinite(O)&&(f.copy(m).multiplyScalar(x.y).addScaledVector(p,-_.y).multiplyScalar(O),u.copy(p).multiplyScalar(_.x).addScaledVector(m,-x.x).multiplyScalar(O),o[I].add(f),o[R].add(f),o[P].add(f),c[I].add(u),c[R].add(u),c[P].add(u))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let I=0,R=y.length;I<R;++I){let P=y[I],O=P.start,H=P.count;for(let C=O,z=O+H;C<z;C+=3)g(t.getX(C+0),t.getX(C+1),t.getX(C+2))}let v=new U,T=new U,A=new U,M=new U;function S(I){A.fromBufferAttribute(s,I),M.copy(A);let R=o[I];v.copy(R),v.sub(A.multiplyScalar(A.dot(R))).normalize(),T.crossVectors(M,R);let O=T.dot(c[I])<0?-1:1;a.setXYZW(I,v.x,v.y,v.z,O)}for(let I=0,R=i.count;I<R;++I)l[I]&&S(I);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new In(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let p=0,d=i.count;p<d;p++)i.setXYZ(p,0,0,0);let s=new U,r=new U,a=new U,o=new U,c=new U,l=new U,h=new U,m=new U;if(t)for(let p=0,d=t.count;p<d;p+=3){let _=t.getX(p+0),x=t.getX(p+1),f=t.getX(p+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,f),h.subVectors(a,r),m.subVectors(s,r),h.cross(m),o.fromBufferAttribute(i,_),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,f),o.add(h),c.add(h),l.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(f,l.x,l.y,l.z)}else for(let p=0,d=e.count;p<d;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),h.subVectors(a,r),m.subVectors(s,r),h.cross(m),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,m=o.normalized,p=new l.constructor(c.length*h),d=0,_=0;for(let x=0,f=c.length;x<f;x++){o.isInterleavedBufferAttribute?d=c[x]*o.data.stride+o.offset:d=c[x]*h;for(let u=0;u<h;u++)p[_++]=l[d++]}return new In(p,h,m)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,i);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,m=l.length;h<m;h++){let p=l[h],d=t(p,i);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let m=0,p=l.length;m<p;m++){let d=l[m];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],m=r[l];for(let p=0,d=m.length;p<d;p++)h.push(m[p].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let m=a[l];this.addGroup(m.start,m.count,m.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Vo=new U,vd=new U,Md=new Vt,Sn=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Vo.subVectors(i,e).cross(vd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Vo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Md.getNormalMatrix(t),s=this.coplanarPoint(Vo).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Sd=0,ci=class extends Pn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=Di(),this.name="",this.type="Material",this.blending=ds,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hl,this.blendDst=ul,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hr,this.stencilZFail=Hr,this.stencilZPass=Hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){zt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Wt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Sn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new rt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new rt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Wn=new U,Ho=new U,Er=new U,Rr=new U,ia=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wn.copy(this.origin).addScaledVector(this.direction,e),Wn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Ho.copy(t).add(e).multiplyScalar(.5),Er.copy(e).sub(t).normalize(),Rr.copy(this.origin).sub(Ho);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Er),o=Rr.dot(this.direction),c=-Rr.dot(Er),l=Rr.lengthSq(),h=Math.abs(1-a*a),m,p,d,_;if(h>0)if(m=a*c-o,p=a*o-c,_=r*h,m>=0)if(p>=-_)if(p<=_){let x=1/h;m*=x,p*=x,d=m*(m+a*p+2*o)+p*(a*m+p+2*c)+l}else p=r,m=Math.max(0,-(a*p+o)),d=-m*m+p*(p+2*c)+l;else p=-r,m=Math.max(0,-(a*p+o)),d=-m*m+p*(p+2*c)+l;else p<=-_?(m=Math.max(0,-(-a*r+o)),p=m>0?-r:Math.min(Math.max(-r,-c),r),d=-m*m+p*(p+2*c)+l):p<=_?(m=0,p=Math.min(Math.max(-r,-c),r),d=p*(p+2*c)+l):(m=Math.max(0,-(a*r+o)),p=m>0?r:Math.min(Math.max(-r,-c),r),d=-m*m+p*(p+2*c)+l);else p=a>0?-r:r,m=Math.max(0,-(a*p+o)),d=-m*m+p*(p+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(Ho).addScaledVector(Er,p),d}intersectSphere(t,e){if(t.radius<0)return null;Wn.subVectors(t.center,this.origin);let i=Wn.dot(this.direction),s=Wn.dot(Wn)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,m=1/this.direction.z,p=this.origin;return l>=0?(i=(t.min.x-p.x)*l,s=(t.max.x-p.x)*l):(i=(t.max.x-p.x)*l,s=(t.min.x-p.x)*l),h>=0?(r=(t.min.y-p.y)*h,a=(t.max.y-p.y)*h):(r=(t.max.y-p.y)*h,a=(t.min.y-p.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),m>=0?(o=(t.min.z-p.z)*m,c=(t.max.z-p.z)*m):(o=(t.max.z-p.z)*m,c=(t.min.z-p.z)*m),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Wn)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,m=t.x-a.x,p=t.y-a.y,d=t.z-a.z,_=e.x-a.x,x=e.y-a.y,f=e.z-a.z,u=i.x-a.x,g=i.y-a.y,y=i.z-a.z,v=Math.abs(c),T=Math.abs(l),A=Math.abs(h),M,S,I,R,P,O,H,C,z,W,V,et;if(v>=T&&v>=A?(I=c,O=m,z=_,et=u,c>=0?(M=l,S=h,R=p,P=d,H=x,C=f,W=g,V=y):(M=h,S=l,R=d,P=p,H=f,C=x,W=y,V=g)):T>=A?(I=l,O=p,z=x,et=g,l>=0?(M=h,S=c,R=d,P=m,H=f,C=_,W=y,V=u):(M=c,S=h,R=m,P=d,H=_,C=f,W=u,V=y)):(I=h,O=d,z=f,et=y,h>=0?(M=c,S=l,R=m,P=p,H=_,C=x,W=u,V=g):(M=l,S=c,R=p,P=m,H=x,C=_,W=g,V=u)),I===0)return null;let F=M/I,X=S/I,q=1/I,ft=R-F*O,wt=P-X*O,Z=H-F*z,at=C-X*z,bt=W-F*et,Ct=V-X*et,xt=bt*at-Ct*Z,Nt=ft*Ct-wt*bt,de=Z*wt-at*ft;if(s){if(xt<0||Nt<0||de<0)return null}else if((xt<0||Nt<0||de<0)&&(xt>0||Nt>0||de>0))return null;let Ot=xt+Nt+de;if(Ot===0)return null;let Yt=q*(xt*O+Nt*z+de*et);return(Ot>0?Yt<0:Yt>0)?null:this.at(Yt/Ot,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Zn=class extends ci{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=dl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Ic=new ve,wi=new ia,Cr=new rs,Pc=new U,Ir=new U,Pr=new U,Lr=new U,Wo=new U,Dr=new U,Lc=new U,Nr=new U,Ut=class extends Je{constructor(t=new Ve,e=new Zn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Dr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],m=r[c];h!==0&&(Wo.fromBufferAttribute(m,t),a?Dr.addScaledVector(Wo,h):Dr.addScaledVector(Wo.sub(e),h))}e.add(Dr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Cr.copy(i.boundingSphere),Cr.applyMatrix4(r),wi.copy(t.ray).recast(t.near),!(Cr.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Cr,Pc)===null||wi.origin.distanceToSquared(Pc)>(t.far-t.near)**2))&&(Ic.copy(r).invert(),wi.copy(t.ray).applyMatrix4(Ic),!(i.boundingBox!==null&&wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,wi)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,m=r.attributes.normal,p=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=p.length;_<x;_++){let f=p[_],u=a[f.materialIndex],g=Math.max(f.start,d.start),y=Math.min(o.count,Math.min(f.start+f.count,d.start+d.count));for(let v=g,T=y;v<T;v+=3){let A=o.getX(v),M=o.getX(v+1),S=o.getX(v+2);s=Ur(this,u,t,i,l,h,m,A,M,S),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let _=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let f=_,u=x;f<u;f+=3){let g=o.getX(f),y=o.getX(f+1),v=o.getX(f+2);s=Ur(this,a,t,i,l,h,m,g,y,v),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,x=p.length;_<x;_++){let f=p[_],u=a[f.materialIndex],g=Math.max(f.start,d.start),y=Math.min(c.count,Math.min(f.start+f.count,d.start+d.count));for(let v=g,T=y;v<T;v+=3){let A=v,M=v+1,S=v+2;s=Ur(this,u,t,i,l,h,m,A,M,S),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let _=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let f=_,u=x;f<u;f+=3){let g=f,y=f+1,v=f+2;s=Ur(this,a,t,i,l,h,m,g,y,v),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}};function bd(n,t,e,i,s,r,a,o){let c;if(t.side===He?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,t.side===Nn,o),c===null)return null;Nr.copy(o),Nr.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Nr);return l<e.near||l>e.far?null:{distance:l,point:Nr.clone(),object:n}}function Ur(n,t,e,i,s,r,a,o,c,l){n.getVertexPosition(o,Ir),n.getVertexPosition(c,Pr),n.getVertexPosition(l,Lr);let h=bd(n,t,e,i,Ir,Pr,Lr,Lc);if(h){let m=new U;li.getBarycoord(Lc,Ir,Pr,Lr,m),s&&(h.uv=li.getInterpolatedAttribute(s,o,c,l,m,new rt)),r&&(h.uv1=li.getInterpolatedAttribute(r,o,c,l,m,new rt)),a&&(h.normal=li.getInterpolatedAttribute(a,o,c,l,m,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let p={a:o,b:c,c:l,normal:new U,materialIndex:0};li.getNormal(Ir,Pr,Lr,p.normal),h.face=p,h.barycoord=m}return h}var sa=class extends tn{constructor(t=null,e=1,i=1,s,r,a,o,c,l=Oe,h=Oe,m,p){super(null,a,o,c,l,h,s,r,m,p),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ti=new rs,wd=new rt(.5,.5),Fr=new U,hi=class{constructor(t=new Sn,e=new Sn,i=new Sn,s=new Sn,r=new Sn,a=new Sn){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=fn,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],m=r[5],p=r[6],d=r[7],_=r[8],x=r[9],f=r[10],u=r[11],g=r[12],y=r[13],v=r[14],T=r[15];if(s[0].setComponents(l-a,d-h,u-_,T-g).normalize(),s[1].setComponents(l+a,d+h,u+_,T+g).normalize(),s[2].setComponents(l+o,d+m,u+x,T+y).normalize(),s[3].setComponents(l-o,d-m,u-x,T-y).normalize(),i)s[4].setComponents(c,p,f,v).normalize(),s[5].setComponents(l-c,d-p,u-f,T-v).normalize();else if(s[4].setComponents(l-c,d-p,u-f,T-v).normalize(),e===fn)s[5].setComponents(l+c,d+p,u+f,T+v).normalize();else if(e===ts)s[5].setComponents(c,p,f,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(t){Ti.center.set(0,0,0);let e=wd.distanceTo(t.center);return Ti.radius=.7071067811865476+e,Ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Fr.x=s.normal.x>0?t.max.x:t.min.x,Fr.y=s.normal.y>0?t.max.y:t.min.y,Fr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Fr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Dc=new ve,ra=class n{constructor(){this.coordinateSystem=fn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Dc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new hi),i[s].setFromProjectionMatrix(Dc,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new hi),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var zs=class extends tn{constructor(t=[],e=Pi,i,s,r,a,o,c,l,h){super(t,e,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Jn=class extends tn{constructor(t,e,i,s,r,a,o,c,l){super(t,e,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Kn=class extends tn{constructor(t,e,i=bn,s,r,a,o=Oe,c=Oe,l,h=qn,m=1){if(h!==qn&&h!==jn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:t,height:e,depth:m};super(p,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new is(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ks=class extends Kn{constructor(t,e=bn,i=Pi,s,r,a=Oe,o=Oe,c,l=qn){let h={width:t,height:t,depth:1},m=[h,h,h,h,h,h];super(t,t,e,i,s,r,a,o,c,l),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Gs=class extends tn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Be=class n extends Ve{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],m=[],p=0,d=0;_("z","y","x",-1,-1,i,e,t,a,r,0),_("z","y","x",1,-1,i,e,-t,a,r,1),_("x","z","y",1,1,t,i,e,s,a,2),_("x","z","y",1,-1,t,i,-e,s,a,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new oe(l,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(m,2));function _(x,f,u,g,y,v,T,A,M,S,I){let R=v/M,P=T/S,O=v/2,H=T/2,C=A/2,z=M+1,W=S+1,V=0,et=0,F=new U;for(let X=0;X<W;X++){let q=X*P-H;for(let ft=0;ft<z;ft++){let wt=ft*R-O;F[x]=wt*g,F[f]=q*y,F[u]=C,l.push(F.x,F.y,F.z),F[x]=0,F[f]=0,F[u]=A>0?1:-1,h.push(F.x,F.y,F.z),m.push(ft/M),m.push(1-X/S),V+=1}}for(let X=0;X<S;X++)for(let q=0;q<M;q++){let ft=p+q+z*X,wt=p+q+z*(X+1),Z=p+(q+1)+z*(X+1),at=p+(q+1)+z*X;c.push(ft,wt,at),c.push(wt,Z,at),et+=6}o.addGroup(d,et,I),d+=et,p+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Vs=class n extends Ve{constructor(t=1,e=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],c=[],l=[],h=e/2,m=Math.PI/2*t,p=e,d=2*m+p,_=i*2+r,x=s+1,f=new U,u=new U;for(let g=0;g<=_;g++){let y=0,v=0,T=0,A=0;if(g<=i){let I=g/i,R=I*Math.PI/2;v=-h-t*Math.cos(R),T=t*Math.sin(R),A=-t*Math.cos(R),y=I*m}else if(g<=i+r){let I=(g-i)/r;v=-h+I*e,T=t,A=0,y=m+I*p}else{let I=(g-i-r)/i,R=I*Math.PI/2;v=h+t*Math.sin(R),T=t*Math.cos(R),A=t*Math.sin(R),y=m+p+I*m}let M=Math.max(0,Math.min(1,y/d)),S=0;g===0?S=.5/s:g===_&&(S=-.5/s);for(let I=0;I<=s;I++){let R=I/s,P=R*Math.PI*2,O=Math.sin(P),H=Math.cos(P);u.x=-T*H,u.y=v,u.z=T*O,o.push(u.x,u.y,u.z),f.set(-T*H,A,T*O),f.normalize(),c.push(f.x,f.y,f.z),l.push(R+S,M)}if(g>0){let I=(g-1)*x;for(let R=0;R<s;R++){let P=I+R,O=I+R+1,H=g*x+R,C=g*x+R+1;a.push(P,O,H),a.push(O,C,H)}}}this.setIndex(a),this.setAttribute("position",new oe(o,3)),this.setAttribute("normal",new oe(c,3)),this.setAttribute("uv",new oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}};var Xt=class n extends Ve{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],m=[],p=[],d=[],_=0,x=[],f=i/2,u=0;g(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new oe(m,3)),this.setAttribute("normal",new oe(p,3)),this.setAttribute("uv",new oe(d,2));function g(){let v=new U,T=new U,A=0,M=(e-t)/i;for(let S=0;S<=r;S++){let I=[],R=S/r,P=R*(e-t)+t;for(let O=0;O<=s;O++){let H=O/s,C=H*c+o,z=Math.sin(C),W=Math.cos(C);T.x=P*z,T.y=-R*i+f,T.z=P*W,m.push(T.x,T.y,T.z),v.set(z,M,W).normalize(),p.push(v.x,v.y,v.z),d.push(H,1-R),I.push(_++)}x.push(I)}for(let S=0;S<s;S++)for(let I=0;I<r;I++){let R=x[I][S],P=x[I+1][S],O=x[I+1][S+1],H=x[I][S+1];(t>0||I!==0)&&(h.push(R,P,H),A+=3),(e>0||I!==r-1)&&(h.push(P,O,H),A+=3)}l.addGroup(u,A,0),u+=A}function y(v){let T=_,A=new rt,M=new U,S=0,I=v===!0?t:e,R=v===!0?1:-1;for(let O=1;O<=s;O++)m.push(0,f*R,0),p.push(0,R,0),d.push(.5,.5),_++;let P=_;for(let O=0;O<=s;O++){let C=O/s*c+o,z=Math.cos(C),W=Math.sin(C);M.x=I*W,M.y=f*R,M.z=I*z,m.push(M.x,M.y,M.z),p.push(0,R,0),A.x=z*.5+.5,A.y=W*.5*R+.5,d.push(A.x,A.y),_++}for(let O=0;O<s;O++){let H=T+O,C=P+O;v===!0?h.push(C,C+1,H):h.push(C+1,C,H),S+=3}l.addGroup(u,S,v===!0?1:2),u+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Hs=class n extends Xt{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var on=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){zt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=i[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===a)return s/(r-1);let h=i[s],p=i[s+1]-h,d=(a-h)/p;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new rt:new U);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new U,s=[],r=[],a=[],o=new U,c=new ve;for(let d=0;d<=t;d++){let _=d/t;s[d]=this.getTangentAt(_,new U)}r[0]=new U,a[0]=new U;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),m=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),m<=l&&(l=m,i.set(0,1,0)),p<=l&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos($t(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,_))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos($t(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let _=1;_<=t;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],d*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},as=class extends on{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new rt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),m=Math.sin(this.aRotation),p=c-this.aX,d=l-this.aY;c=p*h-d*m+this.aX,l=p*m+d*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},aa=class extends as{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Ol(){let n=0,t=0,e=0,i=0;function s(r,a,o,c){n=r,t=o,e=-3*r+3*a-2*o-c,i=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,m){let p=(a-r)/l-(o-r)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+m)+(c-o)/m;p*=h,d*=h,s(a,o,p,d)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}var Nc=new U,Uc=new U,Xo=new Ol,qo=new Ol,Yo=new Ol,oa=class extends on{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new U){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Uc.subVectors(s[0],s[1]).add(s[0]),l=Uc);let m=s[o%r],p=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Nc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Nc),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,_=Math.pow(l.distanceToSquared(m),d),x=Math.pow(m.distanceToSquared(p),d),f=Math.pow(p.distanceToSquared(h),d);x<1e-4&&(x=1),_<1e-4&&(_=x),f<1e-4&&(f=x),Xo.initNonuniformCatmullRom(l.x,m.x,p.x,h.x,_,x,f),qo.initNonuniformCatmullRom(l.y,m.y,p.y,h.y,_,x,f),Yo.initNonuniformCatmullRom(l.z,m.z,p.z,h.z,_,x,f)}else this.curveType==="catmullrom"&&(Xo.initCatmullRom(l.x,m.x,p.x,h.x,this.tension),qo.initCatmullRom(l.y,m.y,p.y,h.y,this.tension),Yo.initCatmullRom(l.z,m.z,p.z,h.z,this.tension));return i.set(Xo.calc(c),qo.calc(c),Yo.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Fc(n,t,e,i,s){let r=(i-t)*.5,a=(s-e)*.5,o=n*n,c=n*o;return(2*e-2*i+r+a)*c+(-3*e+3*i-2*r-a)*o+r*n+e}function Td(n,t){let e=1-n;return e*e*t}function Ad(n,t){return 2*(1-n)*n*t}function Ed(n,t){return n*n*t}function Rs(n,t,e,i){return Td(n,t)+Ad(n,e)+Ed(n,i)}function Rd(n,t){let e=1-n;return e*e*e*t}function Cd(n,t){let e=1-n;return 3*e*e*n*t}function Id(n,t){return 3*(1-n)*n*n*t}function Pd(n,t){return n*n*n*t}function Cs(n,t,e,i,s){return Rd(n,t)+Cd(n,e)+Id(n,i)+Pd(n,s)}var Ws=class extends on{constructor(t=new rt,e=new rt,i=new rt,s=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new rt){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Cs(t,s.x,r.x,a.x,o.x),Cs(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},la=class extends on{constructor(t=new U,e=new U,i=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new U){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Cs(t,s.x,r.x,a.x,o.x),Cs(t,s.y,r.y,a.y,o.y),Cs(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Xs=class extends on{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ca=class extends on{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},qs=class extends on{constructor(t=new rt,e=new rt,i=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new rt){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Rs(t,s.x,r.x,a.x),Rs(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ha=class extends on{constructor(t=new U,e=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new U){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Rs(t,s.x,r.x,a.x),Rs(t,s.y,r.y,a.y),Rs(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ys=class extends on{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){let i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],m=s[a>s.length-3?s.length-1:a+2];return i.set(Fc(o,c.x,l.x,h.x,m.x),Fc(o,c.y,l.y,h.y,m.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new rt().fromArray(s))}return this}},jo=Object.freeze({__proto__:null,ArcCurve:aa,CatmullRomCurve3:oa,CubicBezierCurve:Ws,CubicBezierCurve3:la,EllipseCurve:as,LineCurve:Xs,LineCurve3:ca,QuadraticBezierCurve:qs,QuadraticBezierCurve3:ha,SplineCurve:Ys}),ua=class extends on{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new jo[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new jo[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},ui=class extends ua{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Xs(this.currentPoint.clone(),new rt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new qs(this.currentPoint.clone(),new rt(t,e),new rt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){let o=new Ws(this.currentPoint.clone(),new rt(t,e),new rt(i,s),new rt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Ys(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,i,s,r,a,o,c),this}absellipse(t,e,i,s,r,a,o,c){let l=new as(t,e,i,s,r,a,o,c);if(this.curves.length>0){let m=l.getPoint(0);m.equals(this.currentPoint)||this.lineTo(m.x,m.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ln=class extends ui{constructor(t){super(t),this.uuid=Di(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new ui().fromJSON(s))}return this}};function Ld(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=Dh(n,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(i&&(r=Od(n,t,r,e)),n.length>80*e){o=n[0],c=n[1];let h=o,m=c;for(let p=e;p<s;p+=e){let d=n[p],_=n[p+1];d<o&&(o=d),_<c&&(c=_),d>h&&(h=d),_>m&&(m=_)}l=Math.max(h-o,m-c),l=l!==0?32767/l:0}return Zs(r,a,e,o,c,l,0),a}function Dh(n,t,e,i,s){let r;if(s===Zd(n,t,e,i)>0)for(let a=t;a<e;a+=i)r=Oc(a/i|0,n[a],n[a+1],r);else for(let a=e-i;a>=t;a-=i)r=Oc(a/i|0,n[a],n[a+1],r);return r&&os(r,r.next)&&(Ks(r),r=r.next),r}function Ri(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(os(e,e.next)||be(e.prev,e,e.next)===0)){if(Ks(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Zs(n,t,e,i,s,r,a){if(!n)return;!a&&r&&Vd(n,i,s,r);let o=n;for(;n.prev!==n.next;){let c=n.prev,l=n.next;if(r?Nd(n,i,s,r):Dd(n)){t.push(c.i,n.i,l.i),Ks(n),n=l.next,o=l.next;continue}if(n=l,n===o){a?a===1?(n=Ud(Ri(n),t),Zs(n,t,e,i,s,r,2)):a===2&&Fd(n,t,e,i,s,r):Zs(Ri(n),t,e,i,s,r,1);break}}}function Dd(n){let t=n.prev,e=n,i=n.next;if(be(t,e,i)>=0)return!1;let s=t.x,r=e.x,a=i.x,o=t.y,c=e.y,l=i.y,h=Math.min(s,r,a),m=Math.min(o,c,l),p=Math.max(s,r,a),d=Math.max(o,c,l),_=i.next;for(;_!==t;){if(_.x>=h&&_.x<=p&&_.y>=m&&_.y<=d&&Ts(s,o,r,c,a,l,_.x,_.y)&&be(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Nd(n,t,e,i){let s=n.prev,r=n,a=n.next;if(be(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,m=r.y,p=a.y,d=Math.min(o,c,l),_=Math.min(h,m,p),x=Math.max(o,c,l),f=Math.max(h,m,p),u=tl(d,_,t,e,i),g=tl(x,f,t,e,i),y=n.prevZ,v=n.nextZ;for(;y&&y.z>=u&&v&&v.z<=g;){if(y.x>=d&&y.x<=x&&y.y>=_&&y.y<=f&&y!==s&&y!==a&&Ts(o,h,c,m,l,p,y.x,y.y)&&be(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=d&&v.x<=x&&v.y>=_&&v.y<=f&&v!==s&&v!==a&&Ts(o,h,c,m,l,p,v.x,v.y)&&be(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=u;){if(y.x>=d&&y.x<=x&&y.y>=_&&y.y<=f&&y!==s&&y!==a&&Ts(o,h,c,m,l,p,y.x,y.y)&&be(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=g;){if(v.x>=d&&v.x<=x&&v.y>=_&&v.y<=f&&v!==s&&v!==a&&Ts(o,h,c,m,l,p,v.x,v.y)&&be(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Ud(n,t){let e=n;do{let i=e.prev,s=e.next.next;!os(i,s)&&Uh(i,e,e.next,s)&&Js(i,s)&&Js(s,i)&&(t.push(i.i,e.i,s.i),Ks(e),Ks(e.next),e=n=s),e=e.next}while(e!==n);return Ri(e)}function Fd(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Xd(a,o)){let c=Fh(a,o);a=Ri(a,a.next),c=Ri(c,c.next),Zs(a,t,e,i,s,r,0),Zs(c,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function Od(n,t,e,i){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*i,c=r<a-1?t[r+1]*i:n.length,l=Dh(n,o,c,i,!1);l===l.next&&(l.steiner=!0),s.push(Wd(l))}s.sort(Bd);for(let r=0;r<s.length;r++)e=zd(s[r],e);return e}function Bd(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function zd(n,t){let e=kd(n,t);if(!e)return t;let i=Fh(e,n);return Ri(i,i.next),Ri(e,e.next)}function kd(n,t){let e=t,i=n.x,s=n.y,r=-1/0,a;if(os(n,e))return e;do{if(os(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let m=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(m<=i&&m>r&&(r=m,a=e.x<e.next.x?e:e.next,m===i))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;e=a;do{if(i>=e.x&&e.x>=c&&i!==e.x&&Nh(s<l?i:r,s,c,l,s<l?r:i,s,e.x,e.y)){let m=Math.abs(s-e.y)/(i-e.x);Js(e,n)&&(m<h||m===h&&(e.x>a.x||e.x===a.x&&Gd(a,e)))&&(a=e,h=m)}e=e.next}while(e!==o);return a}function Gd(n,t){return be(n.prev,n,t.prev)<0&&be(t.next,n,n.next)<0}function Vd(n,t,e,i){let s=n;do s.z===0&&(s.z=tl(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Hd(s)}function Hd(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let l=0;l<e&&(o++,a=a.nextZ,!!a);l++);let c=e;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,e*=2}while(t>1);return n}function tl(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Wd(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Nh(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function Ts(n,t,e,i,s,r,a,o){return!(n===a&&t===o)&&Nh(n,t,e,i,s,r,a,o)}function Xd(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!qd(n,t)&&(Js(n,t)&&Js(t,n)&&Yd(n,t)&&(be(n.prev,n,t.prev)||be(n,t.prev,t))||os(n,t)&&be(n.prev,n,n.next)>0&&be(t.prev,t,t.next)>0)}function be(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function os(n,t){return n.x===t.x&&n.y===t.y}function Uh(n,t,e,i){let s=Br(be(n,t,e)),r=Br(be(n,t,i)),a=Br(be(e,i,n)),o=Br(be(e,i,t));return!!(s!==r&&a!==o||s===0&&Or(n,e,t)||r===0&&Or(n,i,t)||a===0&&Or(e,n,i)||o===0&&Or(e,t,i))}function Or(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Br(n){return n>0?1:n<0?-1:0}function qd(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Uh(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Js(n,t){return be(n.prev,n,n.next)<0?be(n,t,n.next)>=0&&be(n,n.prev,t)>=0:be(n,t,n.prev)<0||be(n,n.next,t)<0}function Yd(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Fh(n,t){let e=el(n.i,n.x,n.y),i=el(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Oc(n,t,e,i){let s=el(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Ks(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function el(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Zd(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var nl=class{static triangulate(t,e,i=2){return Ld(t,e,i)}},Ai=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Bc(t),zc(i,t);let a=t.length;e.forEach(Bc);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,zc(i,e[c]);let o=nl.triangulate(i,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Bc(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function zc(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var pn=class n extends Ve{constructor(t=new ln([new rt(.5,.5),new rt(-.5,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){let l=t[o];a(l)}this.setAttribute("position",new oe(s,3)),this.setAttribute("uv",new oe(r,2)),this.computeVertexNormals();function a(o){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,m=e.depth!==void 0?e.depth:1,p=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,f=e.bevelSegments!==void 0?e.bevelSegments:3,u=e.extrudePath,g=e.UVGenerator!==void 0?e.UVGenerator:Jd,y,v=!1,T,A,M,S;if(u){y=u.getSpacedPoints(h),v=!0,p=!1;let tt=u.isCatmullRomCurve3?u.closed:!1;T=u.computeFrenetFrames(h,tt),A=new U,M=new U,S=new U}p||(f=0,d=0,_=0,x=0);let I=o.extractPoints(l),R=I.shape,P=I.holes;if(!Ai.isClockWise(R)){R=R.reverse();for(let tt=0,ht=P.length;tt<ht;tt++){let ot=P[tt];Ai.isClockWise(ot)&&(P[tt]=ot.reverse())}}function H(tt){let ot=10000000000000001e-36,Tt=tt[0];for(let yt=1;yt<=tt.length;yt++){let qt=yt%tt.length,Lt=tt[qt],ee=Lt.x-Tt.x,ne=Lt.y-Tt.y,he=ee*ee+ne*ne,N=Math.max(Math.abs(Lt.x),Math.abs(Lt.y),Math.abs(Tt.x),Math.abs(Tt.y)),Ae=ot*N*N;if(he<=Ae){tt.splice(qt,1),yt--;continue}Tt=Lt}}H(R),P.forEach(H);let C=P.length,z=R;for(let tt=0;tt<C;tt++){let ht=P[tt];R=R.concat(ht)}function W(tt,ht,ot){return ht||kt("ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(ht,ot)}let V=R.length;function et(tt,ht,ot){let Tt,yt,qt,Lt=tt.x-ht.x,ee=tt.y-ht.y,ne=ot.x-tt.x,he=ot.y-tt.y,N=Lt*Lt+ee*ee,Ae=Lt*he-ee*ne;if(Math.abs(Ae)>Number.EPSILON){let jt=Math.sqrt(N),me=Math.sqrt(ne*ne+he*he),mt=ht.x-ee/jt,Te=ht.y+Lt/jt,Bt=ot.x-he/me,Gt=ot.y+ne/me,E=((Bt-mt)*he-(Gt-Te)*ne)/(Lt*he-ee*ne);Tt=mt+Lt*E-tt.x,yt=Te+ee*E-tt.y;let b=Tt*Tt+yt*yt;if(b<=2)return new rt(Tt,yt);qt=Math.sqrt(b/2)}else{let jt=!1;Lt>Number.EPSILON?ne>Number.EPSILON&&(jt=!0):Lt<-Number.EPSILON?ne<-Number.EPSILON&&(jt=!0):Math.sign(ee)===Math.sign(he)&&(jt=!0),jt?(Tt=-ee,yt=Lt,qt=Math.sqrt(N)):(Tt=Lt,yt=ee,qt=Math.sqrt(N/2))}return new rt(Tt/qt,yt/qt)}let F=[];for(let tt=0,ht=z.length,ot=ht-1,Tt=tt+1;tt<ht;tt++,ot++,Tt++)ot===ht&&(ot=0),Tt===ht&&(Tt=0),F[tt]=et(z[tt],z[ot],z[Tt]);let X=[],q,ft=F.concat();for(let tt=0,ht=C;tt<ht;tt++){let ot=P[tt];q=[];for(let Tt=0,yt=ot.length,qt=yt-1,Lt=Tt+1;Tt<yt;Tt++,qt++,Lt++)qt===yt&&(qt=0),Lt===yt&&(Lt=0),q[Tt]=et(ot[Tt],ot[qt],ot[Lt]);X.push(q),ft=ft.concat(q)}let wt;if(f===0)wt=Ai.triangulateShape(z,P);else{let tt=[],ht=[];for(let ot=0;ot<f;ot++){let Tt=ot/f,yt=d*Math.cos(Tt*Math.PI/2),qt=_*Math.sin(Tt*Math.PI/2)+x;for(let Lt=0,ee=z.length;Lt<ee;Lt++){let ne=W(z[Lt],F[Lt],qt);Nt(ne.x,ne.y,-yt),Tt===0&&tt.push(ne)}for(let Lt=0,ee=C;Lt<ee;Lt++){let ne=P[Lt];q=X[Lt];let he=[];for(let N=0,Ae=ne.length;N<Ae;N++){let jt=W(ne[N],q[N],qt);Nt(jt.x,jt.y,-yt),Tt===0&&he.push(jt)}Tt===0&&ht.push(he)}}wt=Ai.triangulateShape(tt,ht)}let Z=wt.length,at=_+x;for(let tt=0;tt<V;tt++){let ht=p?W(R[tt],ft[tt],at):R[tt];v?(M.copy(T.normals[0]).multiplyScalar(ht.x),A.copy(T.binormals[0]).multiplyScalar(ht.y),S.copy(y[0]).add(M).add(A),Nt(S.x,S.y,S.z)):Nt(ht.x,ht.y,0)}for(let tt=1;tt<=h;tt++)for(let ht=0;ht<V;ht++){let ot=p?W(R[ht],ft[ht],at):R[ht];v?(M.copy(T.normals[tt]).multiplyScalar(ot.x),A.copy(T.binormals[tt]).multiplyScalar(ot.y),S.copy(y[tt]).add(M).add(A),Nt(S.x,S.y,S.z)):Nt(ot.x,ot.y,m/h*tt)}for(let tt=f-1;tt>=0;tt--){let ht=tt/f,ot=d*Math.cos(ht*Math.PI/2),Tt=_*Math.sin(ht*Math.PI/2)+x;for(let yt=0,qt=z.length;yt<qt;yt++){let Lt=W(z[yt],F[yt],Tt);Nt(Lt.x,Lt.y,m+ot)}for(let yt=0,qt=P.length;yt<qt;yt++){let Lt=P[yt];q=X[yt];for(let ee=0,ne=Lt.length;ee<ne;ee++){let he=W(Lt[ee],q[ee],Tt);v?Nt(he.x,he.y+y[h-1].y,y[h-1].x+ot):Nt(he.x,he.y,m+ot)}}}bt(),Ct();function bt(){let tt=s.length/3;if(p){let ht=0,ot=V*ht;for(let Tt=0;Tt<Z;Tt++){let yt=wt[Tt];de(yt[2]+ot,yt[1]+ot,yt[0]+ot)}ht=h+f*2,ot=V*ht;for(let Tt=0;Tt<Z;Tt++){let yt=wt[Tt];de(yt[0]+ot,yt[1]+ot,yt[2]+ot)}}else{for(let ht=0;ht<Z;ht++){let ot=wt[ht];de(ot[2],ot[1],ot[0])}for(let ht=0;ht<Z;ht++){let ot=wt[ht];de(ot[0]+V*h,ot[1]+V*h,ot[2]+V*h)}}i.addGroup(tt,s.length/3-tt,0)}function Ct(){let tt=s.length/3,ht=0;xt(z,ht),ht+=z.length;for(let ot=0,Tt=P.length;ot<Tt;ot++){let yt=P[ot];xt(yt,ht),ht+=yt.length}i.addGroup(tt,s.length/3-tt,1)}function xt(tt,ht){let ot=tt.length;for(;--ot>=0;){let Tt=ot,yt=ot-1;yt<0&&(yt=tt.length-1);for(let qt=0,Lt=h+f*2;qt<Lt;qt++){let ee=V*qt,ne=V*(qt+1),he=ht+Tt+ee,N=ht+yt+ee,Ae=ht+yt+ne,jt=ht+Tt+ne;Ot(he,N,Ae,jt)}}}function Nt(tt,ht,ot){c.push(tt),c.push(ht),c.push(ot)}function de(tt,ht,ot){Yt(tt),Yt(ht),Yt(ot);let Tt=s.length/3,yt=g.generateTopUV(i,s,Tt-3,Tt-2,Tt-1);te(yt[0]),te(yt[1]),te(yt[2])}function Ot(tt,ht,ot,Tt){Yt(tt),Yt(ht),Yt(Tt),Yt(ht),Yt(ot),Yt(Tt);let yt=s.length/3,qt=g.generateSideWallUV(i,s,yt-6,yt-3,yt-2,yt-1);te(qt[0]),te(qt[1]),te(qt[3]),te(qt[1]),te(qt[2]),te(qt[3])}function Yt(tt){s.push(c[tt*3+0]),s.push(c[tt*3+1]),s.push(c[tt*3+2])}function te(tt){r.push(tt.x),r.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Kd(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];i.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new jo[s.type]().fromJSON(s)),new n(i,t.options)}},Jd={generateTopUV:function(n,t,e,i,s){let r=t[e*3],a=t[e*3+1],o=t[i*3],c=t[i*3+1],l=t[s*3],h=t[s*3+1];return[new rt(r,a),new rt(o,c),new rt(l,h)]},generateSideWallUV:function(n,t,e,i,s,r){let a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[i*3],h=t[i*3+1],m=t[i*3+2],p=t[s*3],d=t[s*3+1],_=t[s*3+2],x=t[r*3],f=t[r*3+1],u=t[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new rt(a,1-c),new rt(l,1-m),new rt(p,1-_),new rt(x,1-u)]:[new rt(o,1-c),new rt(h,1-m),new rt(d,1-_),new rt(f,1-u)]}};function Kd(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var $s=class n extends Ve{constructor(t=[new rt(0,-.5),new rt(.5,0),new rt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=$t(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/e,m=new U,p=new rt,d=new U,_=new U,x=new U,f=0,u=0;for(let g=0;g<=t.length-1;g++)switch(g){case 0:f=t[g+1].x-t[g].x,u=t[g+1].y-t[g].y,d.x=u*1,d.y=-f,d.z=u*0,x.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:x.normalize(),c.push(x.x,x.y,x.z);break;default:f=t[g+1].x-t[g].x,u=t[g+1].y-t[g].y,d.x=u*1,d.y=-f,d.z=u*0,_.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),c.push(d.x,d.y,d.z),x.copy(_)}for(let g=0;g<=e;g++){let y=i+g*h*s,v=Math.sin(y),T=Math.cos(y);for(let A=0;A<=t.length-1;A++){m.x=t[A].x*v,m.y=t[A].y,m.z=t[A].x*T,a.push(m.x,m.y,m.z),p.x=g/e,p.y=A/(t.length-1),o.push(p.x,p.y);let M=c[3*A+0]*v,S=c[3*A+1],I=c[3*A+0]*T;l.push(M,S,I)}}for(let g=0;g<e;g++)for(let y=0;y<t.length-1;y++){let v=y+g*t.length,T=v,A=v+t.length,M=v+t.length+1,S=v+1;r.push(T,A,S),r.push(M,S,A)}this.setIndex(r),this.setAttribute("position",new oe(a,3)),this.setAttribute("uv",new oe(o,2)),this.setAttribute("normal",new oe(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}};var mn=class n extends Ve{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,m=t/o,p=e/c,d=[],_=[],x=[],f=[];for(let u=0;u<h;u++){let g=u*p-a;for(let y=0;y<l;y++){let v=y*m-r;_.push(v,-g,0),x.push(0,0,1),f.push(y/o),f.push(1-u/c)}}for(let u=0;u<c;u++)for(let g=0;g<o;g++){let y=g+l*u,v=g+l*(u+1),T=g+1+l*(u+1),A=g+1+l*u;d.push(y,v,A),d.push(v,T,A)}this.setIndex(d),this.setAttribute("position",new oe(_,3)),this.setAttribute("normal",new oe(x,3)),this.setAttribute("uv",new oe(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},ls=class n extends Ve{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],c=[],l=[],h=[],m=t,p=(e-t)/s,d=new U,_=new rt;for(let x=0;x<=s;x++){for(let f=0;f<=i;f++){let u=r+f/i*a;d.x=m*Math.cos(u),d.y=m*Math.sin(u),c.push(d.x,d.y,d.z),l.push(0,0,1),_.x=(d.x/e+1)/2,_.y=(d.y/e+1)/2,h.push(_.x,_.y)}m+=p}for(let x=0;x<s;x++){let f=x*(i+1);for(let u=0;u<i;u++){let g=u+f,y=g,v=g+i+1,T=g+i+2,A=g+1;o.push(y,v,A),o.push(v,T,A)}}this.setIndex(o),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(l,3)),this.setAttribute("uv",new oe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var cn=class n extends Ve{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,h=[],m=new U,p=new U,d=[],_=[],x=[],f=[];for(let u=0;u<=i;u++){let g=[],y=u/i,v=a+y*o,T=t*Math.cos(v),A=Math.sqrt(t*t-T*T),M=0;u===0&&a===0?M=.5/e:u===i&&c===Math.PI&&(M=-.5/e);for(let S=0;S<=e;S++){let I=S/e,R=s+I*r;m.x=-A*Math.cos(R),m.y=T,m.z=A*Math.sin(R),_.push(m.x,m.y,m.z),p.copy(m).normalize(),x.push(p.x,p.y,p.z),f.push(I+M,1-y),g.push(l++)}h.push(g)}for(let u=0;u<i;u++)for(let g=0;g<e;g++){let y=h[u][g+1],v=h[u][g],T=h[u+1][g],A=h[u+1][g+1];(u!==0||a>0)&&d.push(y,v,A),(u!==i-1||c<Math.PI)&&d.push(v,T,A)}this.setIndex(d),this.setAttribute("position",new oe(_,3)),this.setAttribute("normal",new oe(x,3)),this.setAttribute("uv",new oe(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var en=class n extends Ve{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let c=[],l=[],h=[],m=[],p=new U,d=new U,_=new U;for(let x=0;x<=i;x++){let f=a+x/i*o;for(let u=0;u<=s;u++){let g=u/s*r;d.x=(t+e*Math.cos(f))*Math.cos(g),d.y=(t+e*Math.cos(f))*Math.sin(g),d.z=e*Math.sin(f),l.push(d.x,d.y,d.z),p.x=t*Math.cos(g),p.y=t*Math.sin(g),_.subVectors(d,p).normalize(),h.push(_.x,_.y,_.z),m.push(u/s),m.push(x/i)}}for(let x=1;x<=i;x++)for(let f=1;f<=s;f++){let u=(s+1)*x+f-1,g=(s+1)*(x-1)+f-1,y=(s+1)*(x-1)+f,v=(s+1)*x+f;c.push(u,g,v),c.push(g,y,v)}this.setIndex(c),this.setAttribute("position",new oe(l,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Ni(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(kc(s))s.isRenderTargetTexture?(zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(kc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Ke(n){let t={};for(let e=0;e<n.length;e++){let i=Ni(n[e]);for(let s in i)t[s]=i[s]}return t}function kc(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function $d(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Bl(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}var Oh={clone:Ni,merge:Ke},Qd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gn=class extends ci{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qd,this.fragmentShader=jd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ni(t.uniforms),this.uniformsGroups=$d(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Wt().setHex(s.value);break;case"v2":this.uniforms[i].value=new rt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new U().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Me().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Vt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ve().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},da=class extends gn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},di=class extends ci{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fo,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},$n=class extends di{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new rt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Wt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Wt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Wt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return Ei('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){Ei('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var fa=class extends ci{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_h,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},pa=class extends ci{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ji(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function zr(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var fi=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ma=class extends fi{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ko,endingEnd:Ko}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case $o:r=t,o=2*e-i;break;case Qo:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case $o:a=t,c=2*i-e;break;case Qo:a=1,c=i+s[1]-s[0];break;default:a=t-1,c=e}let l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,m=this._offsetNext,p=this._weightPrev,d=this._weightNext,_=(i-e)/(s-e),x=_*_,f=x*_,u=-p*f+2*p*x-p*_,g=(1+p)*f+(-1.5-2*p)*x+(-.5+p)*_+1,y=(-1-d)*f+(1.5+d)*x+.5*_,v=d*f-d*x;for(let T=0;T!==o;++T)r[T]=u*a[h+T]+g*a[l+T]+y*a[c+T]+v*a[m+T];return r}},ga=class extends fi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(i-e)/(s-e),m=1-h;for(let p=0;p!==o;++p)r[p]=a[l+p]*m+a[c+p]*h;return r}},_a=class extends fi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},xa=class extends fi{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this.inTangents,m=this.outTangents;if(!h||!m){let _=(i-e)/(s-e),x=1-_;for(let f=0;f!==o;++f)r[f]=a[l+f]*x+a[c+f]*_;return r}let p=o*2,d=t-1;for(let _=0;_!==o;++_){let x=a[l+_],f=a[c+_],u=d*p+_*2,g=m[u],y=m[u+1],v=t*p+_*2,T=h[v],A=h[v+1],M=ef(i,e,g,T,s);r[_]=Bh(M,x,y,A,f)}return r}};function Bh(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function tf(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function ef(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=Bh(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let c=tf(r,t,e,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var hn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ji(e,this.TimeBufferType),this.values=Ji(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Ji(t.times,Array),values:Ji(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),zr(t.settings)&&(i.settings={inTangents:Ji(t.settings.inTangents,Array),outTangents:Ji(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new _a(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ga(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ma(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new xa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Is:e=this.InterpolantFactoryMethodDiscrete;break;case jr:e=this.InterpolantFactoryMethodLinear;break;case Vr:e=this.InterpolantFactoryMethodSmooth;break;case Jo:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return zt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Is;case this.InterpolantFactoryMethodLinear:return jr;case this.InterpolantFactoryMethodSmooth:return Vr;case this.InterpolantFactoryMethodBezier:return Jo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;zr(this.settings)&&(Gc(this.settings.inTangents,t),Gc(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;zr(this.settings)&&(Vc(this.settings.inTangents,t),Vc(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(kt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(kt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){kt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){kt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&Xu(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){kt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Vr,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let m=o*i,p=m-i,d=m+i;for(let _=0;_!==i;++_){let x=e[m+_];if(x!==e[p+_]||x!==e[d+_]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let m=o*i,p=a*i;for(let d=0;d!==i;++d)e[p+d]=e[m+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,zr(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Gc(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function Vc(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}hn.prototype.ValueTypeName="";hn.prototype.TimeBufferType=Float32Array;hn.prototype.ValueBufferType=Float32Array;hn.prototype.DefaultInterpolation=jr;var pi=class extends hn{constructor(t,e,i){super(t,e,i)}};pi.prototype.ValueTypeName="bool";pi.prototype.ValueBufferType=Array;pi.prototype.DefaultInterpolation=Is;pi.prototype.InterpolantFactoryMethodLinear=void 0;pi.prototype.InterpolantFactoryMethodSmooth=void 0;var ya=class extends hn{constructor(t,e,i,s){super(t,e,i,s)}};ya.prototype.ValueTypeName="color";var va=class extends hn{constructor(t,e,i,s){super(t,e,i,s)}};va.prototype.ValueTypeName="number";var Ma=class extends fi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)Ln.slerpFlat(r,0,a,l-o,a,l,c);return r}},Qs=class extends hn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Ma(this.times,this.values,this.getValueSize(),t)}};Qs.prototype.ValueTypeName="quaternion";Qs.prototype.InterpolantFactoryMethodSmooth=void 0;var mi=class extends hn{constructor(t,e,i){super(t,e,i)}};mi.prototype.ValueTypeName="string";mi.prototype.ValueBufferType=Array;mi.prototype.DefaultInterpolation=Is;mi.prototype.InterpolantFactoryMethodLinear=void 0;mi.prototype.InterpolantFactoryMethodSmooth=void 0;var Sa=class extends hn{constructor(t,e,i,s){super(t,e,i,s)}};Sa.prototype.ValueTypeName="vector";var ba=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,m){return l.push(h,m),this},this.removeHandler=function(h){let m=l.indexOf(h);return m!==-1&&l.splice(m,2),this},this.getHandler=function(h){for(let m=0,p=l.length;m<p;m+=2){let d=l[m],_=l[m+1];if(d.global&&(d.lastIndex=0),d.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},zh=new ba,wa=class{constructor(t){this.manager=t!==void 0?t:zh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};wa.DEFAULT_MATERIAL_NAME="__DEFAULT";var js=class extends Je{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},tr=class extends js{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Zo=new ve,Hc=new U,Wc=new U,Ta=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.mapType=nn,this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hi,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Hc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Hc),Wc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Wc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Zo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Zo,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===ts||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(Zo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},kr=new U,Gr=new Ln,Rn=new U,er=class extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(kr,Gr,Rn),Rn.x===1&&Rn.y===1&&Rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kr,Gr,Rn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(kr,Gr,Rn),Rn.x===1&&Rn.y===1&&Rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kr,Gr,Rn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},oi=new U,Xc=new rt,qc=new rt,Qe=class extends er{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ns*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(As*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ns*2*Math.atan(Math.tan(As*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(oi.x,oi.y).multiplyScalar(-t/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(oi.x,oi.y).multiplyScalar(-t/oi.z)}getViewSize(t,e){return this.getViewBounds(t,Xc,qc),e.subVectors(qc,Xc)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(As*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var nr=class extends er{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},il=class extends Ta{constructor(){super(new nr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},cs=class extends js{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.shadow=new il}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ki=-90,$i=1,hs=class extends Je{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Qe(Ki,$i,t,e);s.layers=this.layers,this.add(s);let r=new Qe(Ki,$i,t,e);r.layers=this.layers,this.add(r);let a=new Qe(Ki,$i,t,e);a.layers=this.layers,this.add(a);let o=new Qe(Ki,$i,t,e);o.layers=this.layers,this.add(o);let c=new Qe(Ki,$i,t,e);c.layers=this.layers,this.add(c);let l=new Qe(Ki,$i,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===fn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ts)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,m=t.getRenderTarget(),p=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let f=!1;t.isWebGLRenderer===!0?f=t.state.buffers.depth.getReversed():f=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.mipmapsAutoUpdate=x,t.setRenderTarget(i,5,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(m,p,d),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},Aa=class extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var zl="\\[\\]\\.:\\/",nf=new RegExp("["+zl+"]","g"),kl="[^"+zl+"]",sf="[^"+zl.replace("\\.","")+"]",rf=/((?:WC+[\/:])*)/.source.replace("WC",kl),af=/(WCOD+)?/.source.replace("WCOD",sf),of=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kl),lf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kl),cf=new RegExp("^"+rf+af+of+lf+"$"),hf=["material","materials","bones","map"],sl=class{constructor(t,e,i){let s=i||ye.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ye=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(nf,"")}static parseTrackName(t){let e=cf.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);hf.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=i(o.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;kt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ye.Composite=sl;ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ye.prototype.GetterByBindingType=[ye.prototype._getValue_direct,ye.prototype._getValue_array,ye.prototype._getValue_arrayElement,ye.prototype._getValue_toArray];ye.prototype.SetterByBindingTypeAndVersioning=[[ye.prototype._setValue_direct,ye.prototype._setValue_direct_setNeedsUpdate,ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_array,ye.prototype._setValue_array_setNeedsUpdate,ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_arrayElement,ye.prototype._setValue_arrayElement_setNeedsUpdate,ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_fromArray,ye.prototype._setValue_fromArray_setNeedsUpdate,ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var p_=new Float32Array(1);var rl=class{static{this.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};function Gl(n,t,e,i){let s=uf(i);switch(e){case Tl:return n*t;case El:return n*t/s.components*s.byteLength;case Da:return n*t/s.components*s.byteLength;case gi:return n*t*2/s.components*s.byteLength;case Na:return n*t*2/s.components*s.byteLength;case Al:return n*t*3/s.components*s.byteLength;case An:return n*t*4/s.components*s.byteLength;case Ua:return n*t*4/s.components*s.byteLength;case rr:case ar:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case or:case lr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Oa:case za:return Math.max(n,16)*Math.max(t,8)/4;case Fa:case Ba:return Math.max(n,8)*Math.max(t,8)/2;case ka:case Ga:case Ha:case Wa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Va:case cr:case Xa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case qa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ya:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Za:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case $a:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case ja:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case to:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case eo:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case no:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case io:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case so:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ro:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ao:case oo:case lo:return Math.ceil(n/4)*Math.ceil(t/4)*16;case co:case ho:return Math.ceil(n/4)*Math.ceil(t/4)*8;case hr:case uo:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function uf(n){switch(n){case nn:case Ml:return{byteLength:1,components:1};case ps:case Sl:case Tn:return{byteLength:2,components:1};case Pa:case La:return{byteLength:2,components:4};case bn:case Ia:case wn:return{byteLength:4,components:1};case bl:case wl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function ou(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function ff(n){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,m=l.byteLength,p=n.createBuffer();n.bindBuffer(c,p),n.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:m}}function i(o,c,l){let h=c.array,m=c.updateRanges;if(n.bindBuffer(l,o),m.length===0)n.bufferSubData(l,0,h);else{m.sort((d,_)=>d.start-_.start);let p=0;for(let d=1;d<m.length;d++){let _=m[p],x=m[d];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++p,m[p]=x)}m.length=p+1;for(let d=0,_=m.length;d<_;d++){let x=m[d];n.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(n.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var pf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mf=`#ifdef USE_ALPHAHASH
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
#endif`,gf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_f=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vf=`#ifdef USE_AOMAP
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
#endif`,Mf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sf=`#ifdef USE_BATCHING
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
#endif`,bf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Af=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ef=`#ifdef USE_IRIDESCENCE
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
#endif`,Rf=`#ifdef USE_BUMPMAP
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
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Df=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Nf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Uf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ff=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Of=`#define PI 3.141592653589793
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
} // validated`,Bf=`vec3 transformedNormal = objectNormal;
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
#endif`,zf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xf=`#ifdef USE_ENVMAP
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
#endif`,qf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Yf=`#ifdef USE_ENVMAP
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
#endif`,Zf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jf=`#ifdef USE_ENVMAP
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
#endif`,Kf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$f=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tp=`#ifdef USE_GRADIENTMAP
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
}`,ep=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,np=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,rp=`#ifdef USE_ENVMAP
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
#endif`,ap=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hp=`PhysicalMaterial material;
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
#endif`,up=`uniform sampler2D dfgLUT;
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
}`,dp=`
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
#endif`,fp=`#if defined( RE_IndirectDiffuse )
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
#endif`,pp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mp=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,gp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_p=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bp=`#if defined( USE_POINTS_UV )
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
#endif`,wp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ap=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ep=`#if defined( USE_MORPHCOLORS )
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
#endif`,Rp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cp=`#ifdef USE_MORPHTARGETS
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
#endif`,Ip=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Up=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Fp=`#ifdef USE_NORMALMAP
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
#endif`,Op=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$p=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qp=`float getShadowMask() {
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
}`,jp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tm=`#ifdef USE_SKINNING
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
#endif`,em=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nm=`#ifdef USE_SKINNING
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
#endif`,im=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,am=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,om=`#ifdef USE_TRANSMISSION
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
#endif`,lm=`#ifdef USE_TRANSMISSION
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
#endif`,cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,fm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pm=`uniform sampler2D t2D;
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
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gm=`uniform float backgroundBlurriness;
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
}`,_m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ym=`#include <common>
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
}`,vm=`#if DEPTH_PACKING == 3200
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
}`,Mm=`#define DISTANCE
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
}`,Sm=`#define DISTANCE
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
}`,bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tm=`uniform float scale;
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
}`,Am=`uniform vec3 diffuse;
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
}`,Em=`#include <common>
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
}`,Rm=`uniform vec3 diffuse;
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
}`,Cm=`#define LAMBERT
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
}`,Im=`#define LAMBERT
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
}`,Pm=`#define MATCAP
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
}`,Lm=`#define MATCAP
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
}`,Dm=`#define NORMAL
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
}`,Nm=`#define NORMAL
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
}`,Um=`#define PHONG
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
}`,Fm=`#define PHONG
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
}`,Om=`#define STANDARD
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
}`,Bm=`#define STANDARD
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
}`,zm=`#define TOON
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
}`,km=`#define TOON
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
}`,Gm=`uniform float size;
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
}`,Vm=`uniform vec3 diffuse;
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
}`,Hm=`#include <common>
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
}`,Wm=`uniform vec3 color;
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
}`,Xm=`uniform float rotation;
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
}`,qm=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:pf,alphahash_pars_fragment:mf,alphamap_fragment:gf,alphamap_pars_fragment:_f,alphatest_fragment:xf,alphatest_pars_fragment:yf,aomap_fragment:vf,aomap_pars_fragment:Mf,batching_pars_vertex:Sf,batching_vertex:bf,begin_vertex:wf,beginnormal_vertex:Tf,bsdfs:Af,iridescence_fragment:Ef,bumpmap_pars_fragment:Rf,clipping_planes_fragment:Cf,clipping_planes_pars_fragment:If,clipping_planes_pars_vertex:Pf,clipping_planes_vertex:Lf,color_fragment:Df,color_pars_fragment:Nf,color_pars_vertex:Uf,color_vertex:Ff,common:Of,defaultnormal_vertex:Bf,displacementmap_pars_vertex:zf,displacementmap_vertex:kf,emissivemap_fragment:Gf,emissivemap_pars_fragment:Vf,colorspace_fragment:Hf,colorspace_pars_fragment:Wf,envmap_fragment:Xf,envmap_common_pars_fragment:qf,envmap_pars_fragment:Yf,envmap_pars_vertex:Zf,envmap_physical_pars_fragment:rp,envmap_vertex:Jf,fog_vertex:Kf,fog_pars_vertex:$f,fog_fragment:Qf,fog_pars_fragment:jf,gradientmap_pars_fragment:tp,lightmap_pars_fragment:ep,lights_lambert_fragment:np,lights_lambert_pars_fragment:ip,lights_pars_begin:sp,lights_toon_fragment:ap,lights_toon_pars_fragment:op,lights_phong_fragment:lp,lights_phong_pars_fragment:cp,lights_physical_fragment:hp,lights_physical_pars_fragment:up,lights_fragment_begin:dp,lights_fragment_maps:fp,lights_fragment_end:pp,lightprobes_pars_fragment:mp,logdepthbuf_fragment:gp,logdepthbuf_pars_fragment:_p,logdepthbuf_pars_vertex:xp,logdepthbuf_vertex:yp,map_fragment:vp,map_pars_fragment:Mp,map_particle_fragment:Sp,map_particle_pars_fragment:bp,metalnessmap_fragment:wp,metalnessmap_pars_fragment:Tp,morphinstance_vertex:Ap,morphcolor_vertex:Ep,morphnormal_vertex:Rp,morphtarget_pars_vertex:Cp,morphtarget_vertex:Ip,normal_fragment_begin:Pp,normal_fragment_maps:Lp,normal_pars_fragment:Dp,normal_pars_vertex:Np,normal_vertex:Up,normalmap_pars_fragment:Fp,clearcoat_normal_fragment_begin:Op,clearcoat_normal_fragment_maps:Bp,clearcoat_pars_fragment:zp,iridescence_pars_fragment:kp,opaque_fragment:Gp,packing:Vp,premultiplied_alpha_fragment:Hp,project_vertex:Wp,dithering_fragment:Xp,dithering_pars_fragment:qp,roughnessmap_fragment:Yp,roughnessmap_pars_fragment:Zp,shadowmap_pars_fragment:Jp,shadowmap_pars_vertex:Kp,shadowmap_vertex:$p,shadowmask_pars_fragment:Qp,skinbase_vertex:jp,skinning_pars_vertex:tm,skinning_vertex:em,skinnormal_vertex:nm,specularmap_fragment:im,specularmap_pars_fragment:sm,tonemapping_fragment:rm,tonemapping_pars_fragment:am,transmission_fragment:om,transmission_pars_fragment:lm,uv_pars_fragment:cm,uv_pars_vertex:hm,uv_vertex:um,worldpos_vertex:dm,background_vert:fm,background_frag:pm,backgroundCube_vert:mm,backgroundCube_frag:gm,cube_vert:_m,cube_frag:xm,depth_vert:ym,depth_frag:vm,distance_vert:Mm,distance_frag:Sm,equirect_vert:bm,equirect_frag:wm,linedashed_vert:Tm,linedashed_frag:Am,meshbasic_vert:Em,meshbasic_frag:Rm,meshlambert_vert:Cm,meshlambert_frag:Im,meshmatcap_vert:Pm,meshmatcap_frag:Lm,meshnormal_vert:Dm,meshnormal_frag:Nm,meshphong_vert:Um,meshphong_frag:Fm,meshphysical_vert:Om,meshphysical_frag:Bm,meshtoon_vert:zm,meshtoon_frag:km,points_vert:Gm,points_frag:Vm,shadow_vert:Hm,shadow_frag:Wm,sprite_vert:Xm,sprite_frag:qm},Mt={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},On={basic:{uniforms:Ke([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:Ke([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Wt(0)},envMapIntensity:{value:1}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:Ke([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:Ke([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:Ke([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:Ke([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:Ke([Mt.points,Mt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:Ke([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:Ke([Mt.common,Mt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:Ke([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:Ke([Mt.sprite,Mt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distance:{uniforms:Ke([Mt.common,Mt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distance_vert,fragmentShader:Qt.distance_frag},shadow:{uniforms:Ke([Mt.lights,Mt.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};On.physical={uniforms:Ke([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Vt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var po={r:0,b:0,g:0},Ym=new ve,lu=new Vt;lu.set(-1,0,0,0,1,0,0,0,1);function Zm(n,t,e,i,s,r){let a=new Wt(0),o=s===!0?0:1,c,l,h=null,m=0,p=null;function d(g){let y=g.isScene===!0?g.background:null;if(y&&y.isTexture){let v=g.backgroundBlurriness>0;y=t.get(y,v)}return y}function _(g){let y=!1,v=d(g);v===null?f(a,o):v&&v.isColor&&(f(v,1),y=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(g,y){let v=d(y);v&&v.isCubeTexture?(l===void 0&&(l=new Ut(new Be(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:Ni(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,A,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ym.makeRotationFromEuler(y.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(lu),l.material.toneMapped=re.getTransfer(v.colorSpace)!==fe,(h!==v||m!==v.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,h=v,m=v.version,p=n.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ut(new mn(2,2),new gn({name:"BackgroundMaterial",uniforms:Ni(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=re.getTransfer(v.colorSpace)!==fe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||m!==v.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,m=v.version,p=n.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function f(g,y){g.getRGB(po,Bl(n)),e.buffers.color.setClear(po.r,po.g,po.b,y,r)}function u(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,y=1){a.set(g),o=y,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,f(a,o)},render:_,addToRenderList:x,dispose:u}}function Jm(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=p(null),r=s,a=!1;function o(P,O,H,C,z){let W=!1,V=m(P,C,H,O);r!==V&&(r=V,l(r.object)),W=d(P,C,H,z),W&&_(P,C,H,z),z!==null&&t.update(z,n.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,v(P,O,H,C),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function c(){return n.createVertexArray()}function l(P){return n.bindVertexArray(P)}function h(P){return n.deleteVertexArray(P)}function m(P,O,H,C){let z=C.wireframe===!0,W=i[O.id];W===void 0&&(W={},i[O.id]=W);let V=P.isInstancedMesh===!0?P.id:0,et=W[V];et===void 0&&(et={},W[V]=et);let F=et[H.id];F===void 0&&(F={},et[H.id]=F);let X=F[z];return X===void 0&&(X=p(c()),F[z]=X),X}function p(P){let O=[],H=[],C=[];for(let z=0;z<e;z++)O[z]=0,H[z]=0,C[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:H,attributeDivisors:C,object:P,attributes:{},index:null}}function d(P,O,H,C){let z=r.attributes,W=O.attributes,V=0,et=H.getAttributes();for(let F in et)if(et[F].location>=0){let q=z[F],ft=W[F];if(ft===void 0&&(F==="instanceMatrix"&&P.instanceMatrix&&(ft=P.instanceMatrix),F==="instanceColor"&&P.instanceColor&&(ft=P.instanceColor)),q===void 0||q.attribute!==ft||ft&&q.data!==ft.data)return!0;V++}return r.attributesNum!==V||r.index!==C}function _(P,O,H,C){let z={},W=O.attributes,V=0,et=H.getAttributes();for(let F in et)if(et[F].location>=0){let q=W[F];q===void 0&&(F==="instanceMatrix"&&P.instanceMatrix&&(q=P.instanceMatrix),F==="instanceColor"&&P.instanceColor&&(q=P.instanceColor));let ft={};ft.attribute=q,q&&q.data&&(ft.data=q.data),z[F]=ft,V++}r.attributes=z,r.attributesNum=V,r.index=C}function x(){let P=r.newAttributes;for(let O=0,H=P.length;O<H;O++)P[O]=0}function f(P){u(P,0)}function u(P,O){let H=r.newAttributes,C=r.enabledAttributes,z=r.attributeDivisors;H[P]=1,C[P]===0&&(n.enableVertexAttribArray(P),C[P]=1),z[P]!==O&&(n.vertexAttribDivisor(P,O),z[P]=O)}function g(){let P=r.newAttributes,O=r.enabledAttributes;for(let H=0,C=O.length;H<C;H++)O[H]!==P[H]&&(n.disableVertexAttribArray(H),O[H]=0)}function y(P,O,H,C,z,W,V){V===!0?n.vertexAttribIPointer(P,O,H,z,W):n.vertexAttribPointer(P,O,H,C,z,W)}function v(P,O,H,C){x();let z=C.attributes,W=H.getAttributes(),V=O.defaultAttributeValues;for(let et in W){let F=W[et];if(F.location>=0){let X=z[et];if(X===void 0&&(et==="instanceMatrix"&&P.instanceMatrix&&(X=P.instanceMatrix),et==="instanceColor"&&P.instanceColor&&(X=P.instanceColor)),X!==void 0){let q=X.normalized,ft=X.itemSize,wt=t.get(X);if(wt===void 0)continue;let Z=wt.buffer,at=wt.type,bt=wt.bytesPerElement,Ct=at===n.INT||at===n.UNSIGNED_INT||X.gpuType===Ia;if(X.isInterleavedBufferAttribute){let xt=X.data,Nt=xt.isInterleavedBuffer===!0?xt.stride:xt.itemSize,de=X.offset;if(xt.isInstancedInterleavedBuffer||xt.isInstancedBufferAttribute){for(let Ot=0;Ot<F.locationSize;Ot++)u(F.location+Ot,xt.meshPerAttribute);P.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let Ot=0;Ot<F.locationSize;Ot++)f(F.location+Ot);n.bindBuffer(n.ARRAY_BUFFER,Z);for(let Ot=0;Ot<F.locationSize;Ot++)y(F.location+Ot,ft/F.locationSize,at,q,Nt*bt,(de+ft/F.locationSize*Ot)*bt,Ct)}else{if(X.isInstancedBufferAttribute){for(let xt=0;xt<F.locationSize;xt++)u(F.location+xt,X.meshPerAttribute);P.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let xt=0;xt<F.locationSize;xt++)f(F.location+xt);n.bindBuffer(n.ARRAY_BUFFER,Z);for(let xt=0;xt<F.locationSize;xt++)y(F.location+xt,ft/F.locationSize,at,q,ft*bt,ft/F.locationSize*xt*bt,Ct)}}else if(V!==void 0){let q=V[et];if(q!==void 0)switch(q.length){case 2:n.vertexAttrib2fv(F.location,q);break;case 3:n.vertexAttrib3fv(F.location,q);break;case 4:n.vertexAttrib4fv(F.location,q);break;default:n.vertexAttrib1fv(F.location,q)}}}}g()}function T(){I();for(let P in i){let O=i[P];for(let H in O){let C=O[H];for(let z in C){let W=C[z];for(let V in W)h(W[V].object),delete W[V];delete C[z]}}delete i[P]}}function A(P){if(i[P.id]===void 0)return;let O=i[P.id];for(let H in O){let C=O[H];for(let z in C){let W=C[z];for(let V in W)h(W[V].object),delete W[V];delete C[z]}}delete i[P.id]}function M(P){for(let O in i){let H=i[O];for(let C in H){let z=H[C];if(z[P.id]===void 0)continue;let W=z[P.id];for(let V in W)h(W[V].object),delete W[V];delete z[P.id]}}}function S(P){for(let O in i){let H=i[O],C=P.isInstancedMesh===!0?P.id:0,z=H[C];if(z!==void 0){for(let W in z){let V=z[W];for(let et in V)h(V[et].object),delete V[et];delete z[W]}delete H[C],Object.keys(H).length===0&&delete i[O]}}}function I(){R(),a=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:S,releaseStatesOfProgram:M,initAttributes:x,enableAttribute:f,disableUnusedAttributes:g}}function Km(n,t,e){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),e.update(l,i,1)}function a(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),e.update(l,i,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let p=0;for(let d=0;d<h;d++)p+=l[d];e.update(p,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function $m(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let M=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(M){return!(M!==An&&i.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(M){let S=M===Tn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(M!==nn&&M!==wn&&!S&&i.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(zt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let m=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=e.logarithmicDepthBuffer===!0&&m===!1;e.reversedDepthBuffer===!0&&m===!1&&zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&m===!0&&zt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),f=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:p,reversedDepthBuffer:m,maxTextures:d,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:f,maxAttributes:u,maxVertexUniforms:g,maxVaryings:y,maxFragmentUniforms:v,maxSamples:T,samples:A}}function Qm(n){let t=this,e=null,i=0,s=!1,r=!1,a=new Sn,o=new Vt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(m,p){let d=m.length!==0||p||i!==0||s;return s=p,i=m.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,p){e=h(m,p,0)},this.setState=function(m,p,d){let _=m.clippingPlanes,x=m.clipIntersection,f=m.clipShadows,u=n.get(m);if(!s||_===null||_.length===0||r&&!f)r?h(null):l();else{let g=r?0:i,y=g*4,v=u.clippingState||null;c.value=v,v=h(_,p,y,d);for(let T=0;T!==y;++T)v[T]=e[T];u.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(m,p,d,_){let x=m!==null?m.length:0,f=null;if(x!==0){if(f=c.value,_!==!0||f===null){let u=d+x*4,g=p.matrixWorldInverse;o.getNormalMatrix(g),(f===null||f.length<u)&&(f=new Float32Array(u));for(let y=0,v=d;y!==x;++y,v+=4)a.copy(m[y]).applyMatrix4(g,o),a.normal.toArray(f,v),f[v+3]=a.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,f}}var fr=class extends an{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new zs(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Be(5,5,5),r=new gn({name:"CubemapFromEquirect",uniforms:Ni(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:He,blending:Ci});r.uniforms.tEquirect.value=e;let a=new Ut(s,r),o=e.minFilter;return e.minFilter===Qn&&(e.minFilter=je),new hs(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}},kh=256,jm=3,t0=20,cu=256,hu=16,e0=3,n0=new U,i0=new Wt,go=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new hs(1,10,null),this._boxMesh=new Ut(new Be(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=n0}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let m=c.autoClear,p=c.autoClearColor,d=c.autoClearDepth,_=c.autoClearStencil,x=t.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,x===null&&(t.background=c.getClearColor(i0));let f=new hs(i,s,h);return f.position.copy(o),f.update(c,t),c.autoClear=m,c.autoClearColor=p,c.autoClearDepth=d,c.autoClearStencil=_,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,e)),this._applyPMREM(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(kh,Nl(t))}_fromTexture(t,e){t.mapping===Pi||t.mapping===fs?this._setSize(t.image.length===0?kh:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=Gh(t,!1,!1),i=Math.log2(t)-jm;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Gh(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Pi||t.mapping===fs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hh()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Vh()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=s0(),this._integrationMaterial=r0());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/hu);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-e0)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let c=o>0?Math.log2(e)+.5*Math.log2(6/(cu*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=a0());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}};function Gh(n,t,e){return new fr(n,{minFilter:Qn,generateMipmaps:t,type:Tn,colorSpace:Ps,depthBuffer:e})}function pr(n,t,e){return new gn({name:n,uniforms:t,vertexShader:Qt.cube_vert,fragmentShader:e,side:He,blending:Ci,depthTest:!1,depthWrite:!1})}function s0(){return pr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${cu}u

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
	`)}function r0(){return pr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:hu}},`

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
	`)}function a0(){return pr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${t0}
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
	`)}function Vh(){return pr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Hh(){return pr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function o0(n){let t=new WeakMap,e=new WeakMap,i=null;function s(p,d=!1){return p==null?null:d?a(p):r(p)}function r(p){if(p&&p.isTexture){let d=p.mapping;if(d===Ea||d===Ra)if(t.has(p)){let _=t.get(p).texture;return o(_,p.mapping)}else{let _=p.image;if(_&&_.height>0){let x=new fr(_.height);return x.fromEquirectangularTexture(n,p),t.set(p,x),p.addEventListener("dispose",l),o(x.texture,p.mapping)}else return null}}return p}function a(p){if(p&&p.isTexture&&p.isPMREMTexture!==!0){let d=p.mapping,_=d===Ea||d===Ra,x=d===Pi||d===fs;if(_||x){let f=e.get(p),u=f!==void 0?f.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==u)return i===null&&(i=new go(n)),f=_?i.fromEquirectangular(p,f):i.fromCubemap(p,f),f.texture.pmremVersion=p.pmremVersion,e.set(p,f),f.texture;if(f!==void 0)return f.texture;{let g=p.image;return _&&g&&g.height>0||x&&g&&c(g)?(i===null&&(i=new go(n)),f=_?i.fromEquirectangular(p):i.fromCubemap(p),f.texture.pmremVersion=p.pmremVersion,e.set(p,f),p.addEventListener("dispose",h),f.texture):null}}}return p}function o(p,d){return d===Ea?p.mapping=Pi:d===Ra&&(p.mapping=fs),p}function c(p){let d=0,_=6;for(let x=0;x<_;x++)p[x]!==void 0&&d++;return d===_}function l(p){let d=p.target;d.removeEventListener("dispose",l);let _=t.get(d);_!==void 0&&(t.delete(d),_.dispose())}function h(p){let d=p.target;d.removeEventListener("dispose",h);let _=e.get(d);_!==void 0&&(e.delete(d),_.dispose())}function m(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:m}}function l0(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Ei("WebGLRenderer: "+i+" extension not supported."),s}}}function c0(n,t,e,i){let s={},r=new WeakMap,a=new FinalizationRegistry(_=>delete s[_]);function o(_){c(_.target)}function c(_){_.index!==null&&t.remove(_.index);for(let f in _.attributes)t.remove(_.attributes[f]);_.removeEventListener("dispose",o),delete s[_.id],a.unregister(_);let x=r.get(_);x&&(t.remove(x),r.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function l(_,x){return s[x.id]!==void 0||(x.addEventListener("dispose",o),s[x.id]=new WeakRef(x),a.register(x,x.id,x),e.memory.geometries++),x}function h(_){let x=_.attributes;for(let f in x)t.update(x[f],n.ARRAY_BUFFER)}function m(_){let x=_.index,f=_.attributes.position,u=0;if(f===void 0)return;let g=x!==null?x.array.length:f.array.length/3-1,y=f.count>=65535?Bs:Os,v=new y(Math.ceil(g/3)*6,1),T=v.array;if(x!==null){let M=x.array;u=x.version;for(let S=0,I=0;S<g;S+=3){let R=M[S+0],P=M[S+1],O=M[S+2];T[I++]=R,T[I++]=P,T[I++]=P,T[I++]=O,T[I++]=O,T[I++]=R}}else{u=f.version;for(let M=0,S=0;M<g;M+=3){let I=M+0,R=M+1,P=M+2;T[S++]=I,T[S++]=R,T[S++]=R,T[S++]=P,T[S++]=P,T[S++]=I}}v.version=u;let A=r.get(_);A&&t.remove(A),r.set(_,v)}function p(_){let x=r.get(_);if(x){let f=_.index;f!==null&&x.version<f.version&&m(_)}else m(_);return r.get(_)}function d(){for(let _ in s){let x=s[_].deref();x!==void 0&&c(x)}}return{get:l,update:h,getWireframeAttribute:p,dispose:d}}function h0(n,t,e){let i;function s(m){i=m}let r,a;function o(m){r=m.type,a=m.bytesPerElement}function c(m,p){n.drawElements(i,p,r,m*a),e.update(p,i,1)}function l(m,p,d){d!==0&&(n.drawElementsInstanced(i,p,r,m*a,d),e.update(p,i,d))}function h(m,p,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,m,0,d);let x=0;for(let f=0;f<d;f++)x+=p[f];e.update(x,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function u0(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:kt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function d0(n,t,e){let i=new WeakMap,s=new Me;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=h!==void 0?h.length:0,p=i.get(o);if(p===void 0||p.count!==m){let I=function(){M.dispose(),i.delete(o),o.removeEventListener("dispose",I)};p!==void 0&&p.texture.dispose();let d=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],g=o.morphAttributes.color||[],y=0;d===!0&&(y=1),_===!0&&(y=2),x===!0&&(y=3);let v=o.attributes.position.count*y,T=1;v>t.maxTextureSize&&(T=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let A=new Float32Array(v*T*4*m),M=new Ns(A,v,T,m);M.type=wn,M.needsUpdate=!0;let S=y*4;for(let R=0;R<m;R++){let P=f[R],O=u[R],H=g[R],C=v*T*4*R;for(let z=0;z<P.count;z++){let W=z*S;d===!0&&(s.fromBufferAttribute(P,z),A[C+W+0]=s.x,A[C+W+1]=s.y,A[C+W+2]=s.z,A[C+W+3]=0),_===!0&&(s.fromBufferAttribute(O,z),A[C+W+4]=s.x,A[C+W+5]=s.y,A[C+W+6]=s.z,A[C+W+7]=0),x===!0&&(s.fromBufferAttribute(H,z),A[C+W+8]=s.x,A[C+W+9]=s.y,A[C+W+10]=s.z,A[C+W+11]=H.itemSize===4?s.w:1)}}p={count:m,texture:M,size:new rt(v,T)},i.set(o,p),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let d=0;for(let x=0;x<l.length;x++)d+=l[x];let _=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:r}}function f0(n,t,e,i,s){let r=new WeakMap;function a(l){let h=s.render.frame,m=l.geometry,p=t.get(l,m);if(r.get(p)!==h&&(t.update(p),r.set(p,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return p}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var p0={[fl]:"LINEAR_TONE_MAPPING",[pl]:"REINHARD_TONE_MAPPING",[ml]:"CINEON_TONE_MAPPING",[gl]:"ACES_FILMIC_TONE_MAPPING",[xl]:"AGX_TONE_MAPPING",[yl]:"NEUTRAL_TONE_MAPPING",[_l]:"CUSTOM_TONE_MAPPING"};function m0(n,t,e,i,s,r){let a=new an(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new Ve;h.setAttribute("position",new oe([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new oe([0,2,0,0,2,0],2));let m=new da({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Ut(h,m),d=new nr(-1,1,1,-1,0,1),_=null,x=null,f=!1,u,g=null,y=[],v=!1;this.setSize=function(T,A){a.setSize(T,A),o!==null&&o.setSize(T,A),c!==null&&c.setSize(T,A);for(let M=0;M<y.length;M++){let S=y[M];S.setSize&&S.setSize(T,A)}},this.setEffects=function(T){y=T,v=y.length>0&&y[0].isRenderPass===!0;let A=a.width,M=a.height;y.length>0&&o===null&&(o=new an(A,M,{type:Tn,depthBuffer:!1,stencilBuffer:!1}),c=new an(A,M,{type:Tn,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&y.some(I=>I.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&l===null&&(l=new Kn(A,M),r===!0&&(l.format=jn,l.type=Li)),a.dispose(),a.depthTexture=S?l:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let I=0;I<y.length;I++){let R=y[I];R.setSize&&R.setSize(A,M),S&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(l)}},this.begin=function(T,A){if(f||T.toneMapping===Un&&y.length===0)return!1;if(g=A,A!==null){let M=A.width,S=A.height;(a.width!==M||a.height!==S)&&this.setSize(M,S)}return v===!1&&T.setRenderTarget(a),u=T.toneMapping,T.toneMapping=Un,!0},this.hasRenderPass=function(){return v},this.end=function(T,A){T.toneMapping=u,f=!0;let M=a,S=o;for(let I=0;I<y.length;I++){let R=y[I];R.enabled!==!1&&(R.render(T,S,M,A),R.needsSwap!==!1&&(M=S,S=S===o?c:o))}if(_!==T.outputColorSpace||x!==T.toneMapping){_=T.outputColorSpace,x=T.toneMapping,m.defines={},re.getTransfer(_)===fe&&(m.defines.SRGB_TRANSFER="");let I=p0[x];I&&(m.defines[I]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=M.texture,T.setRenderTarget(g),T.render(p,d),g=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),m.dispose()}}var uu=new tn,du=new Kn(1,1),fu=new ks(1),pu=new Ns,mu=new na,gu=new zs,Wh=[],Xh=[],qh=new Float32Array(16),Yh=new Float32Array(9),Zh=new Float32Array(4);function gs(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Wh[s];if(r===void 0&&(r=new Float32Array(s),Wh[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Le(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function De(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function xo(n,t){let e=Xh[t];e===void 0&&(e=new Int32Array(t),Xh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function g0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function _0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;n.uniform2fv(this.addr,t),De(e,t)}}function x0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;n.uniform3fv(this.addr,t),De(e,t)}}function y0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;n.uniform4fv(this.addr,t),De(e,t)}}function v0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Le(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Le(e,i))return;Zh.set(i),n.uniformMatrix2fv(this.addr,!1,Zh),De(e,i)}}function M0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Le(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Le(e,i))return;Yh.set(i),n.uniformMatrix3fv(this.addr,!1,Yh),De(e,i)}}function S0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Le(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Le(e,i))return;qh.set(i),n.uniformMatrix4fv(this.addr,!1,qh),De(e,i)}}function b0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function w0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;n.uniform2iv(this.addr,t),De(e,t)}}function T0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;n.uniform3iv(this.addr,t),De(e,t)}}function A0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;n.uniform4iv(this.addr,t),De(e,t)}}function E0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function R0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;n.uniform2uiv(this.addr,t),De(e,t)}}function C0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;n.uniform3uiv(this.addr,t),De(e,t)}}function I0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;n.uniform4uiv(this.addr,t),De(e,t)}}function yo(n){return n.version===0&&(n.compareFunction=Il,n.needsUpdate=!0),n}function P0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=yo(du):r=uu,e.setTexture2D(t||r,s)}function L0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||mu,s)}function D0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=yo(fu):r=gu,e.setTextureCube(t||r,s)}function N0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||pu,s)}function U0(n){switch(n){case 5126:return g0;case 35664:return _0;case 35665:return x0;case 35666:return y0;case 35674:return v0;case 35675:return M0;case 35676:return S0;case 5124:case 35670:return b0;case 35667:case 35671:return w0;case 35668:case 35672:return T0;case 35669:case 35673:return A0;case 5125:return E0;case 36294:return R0;case 36295:return C0;case 36296:return I0;case 35678:case 36198:case 36298:case 36306:case 35682:return P0;case 35679:case 36299:case 36307:return L0;case 35680:case 36300:case 36308:case 36293:return D0;case 36289:case 36303:case 36311:case 36292:return N0}}function F0(n,t){n.uniform1fv(this.addr,t)}function O0(n,t){let e=gs(t,this.size,2);n.uniform2fv(this.addr,e)}function B0(n,t){let e=gs(t,this.size,3);n.uniform3fv(this.addr,e)}function z0(n,t){let e=gs(t,this.size,4);n.uniform4fv(this.addr,e)}function k0(n,t){let e=gs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function G0(n,t){let e=gs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function V0(n,t){let e=gs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function H0(n,t){n.uniform1iv(this.addr,t)}function W0(n,t){n.uniform2iv(this.addr,t)}function X0(n,t){n.uniform3iv(this.addr,t)}function q0(n,t){n.uniform4iv(this.addr,t)}function Y0(n,t){n.uniform1uiv(this.addr,t)}function Z0(n,t){n.uniform2uiv(this.addr,t)}function J0(n,t){n.uniform3uiv(this.addr,t)}function K0(n,t){n.uniform4uiv(this.addr,t)}function $0(n,t,e){let i=this.cache,s=t.length,r=xo(e,s);Le(i,r)||(n.uniform1iv(this.addr,r),De(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=yo(du):a=uu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Q0(n,t,e){let i=this.cache,s=t.length,r=xo(e,s);Le(i,r)||(n.uniform1iv(this.addr,r),De(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||mu,r[a])}function j0(n,t,e){let i=this.cache,s=t.length,r=xo(e,s);Le(i,r)||(n.uniform1iv(this.addr,r),De(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=yo(fu):a=gu;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function tg(n,t,e){let i=this.cache,s=t.length,r=xo(e,s);Le(i,r)||(n.uniform1iv(this.addr,r),De(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||pu,r[a])}function eg(n){switch(n){case 5126:return F0;case 35664:return O0;case 35665:return B0;case 35666:return z0;case 35674:return k0;case 35675:return G0;case 35676:return V0;case 5124:case 35670:return H0;case 35667:case 35671:return W0;case 35668:case 35672:return X0;case 35669:case 35673:return q0;case 5125:return Y0;case 36294:return Z0;case 36295:return J0;case 36296:return K0;case 35678:case 36198:case 36298:case 36306:case 35682:return $0;case 35679:case 36299:case 36307:return Q0;case 35680:case 36300:case 36308:case 36293:return j0;case 36289:case 36303:case 36311:case 36292:return tg}}var Wl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=U0(e.type)}},Xl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=eg(e.type)}},ql=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},Vl=/(\w+)(\])?(\[|\.)?/g;function Jh(n,t){n.seq.push(t),n.map[t.id]=t}function ng(n,t,e){let i=n.name,s=i.length;for(Vl.lastIndex=0;;){let r=Vl.exec(i),a=Vl.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Jh(e,l===void 0?new Wl(o,n,t):new Xl(o,n,t));break}else{let m=e.map[o];m===void 0&&(m=new ql(o),Jh(e,m)),e=m}}}var ms=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);ng(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function Kh(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var ig=37297,sg=0;function rg(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var $h=new Vt;function ag(n){re._getMatrix($h,re.workingColorSpace,n);let t=`mat3( ${$h.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(n)){case Ls:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Qh(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+rg(n.getShaderSource(t),o)}else return r}function og(n,t){let e=ag(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var lg={[fl]:"Linear",[pl]:"Reinhard",[ml]:"Cineon",[gl]:"ACESFilmic",[xl]:"AgX",[yl]:"Neutral",[_l]:"Custom"};function cg(n,t){let e=lg[t];return e===void 0?(zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var mo=new U;function hg(){re.getLuminanceCoefficients(mo);let n=mo.x.toFixed(4),t=mo.y.toFixed(4),e=mo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ug(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dr).join(`
`)}function dg(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function fg(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function dr(n){return n!==""}function jh(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function tu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var pg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yl(n){return n.replace(pg,mg)}function mg(n,t){let e=Qt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Yl(e)}var gg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eu(n){return n.replace(gg,_g)}function _g(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function nu(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var xg={[ir]:"SHADOWMAP_TYPE_PCF",[us]:"SHADOWMAP_TYPE_VSM"};function yg(n){return xg[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var vg={[fs]:"ENVMAP_MODE_REFRACTION"};function Mg(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":vg[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Sg={[dl]:"ENVMAP_BLENDING_MULTIPLY",[ph]:"ENVMAP_BLENDING_MIX",[mh]:"ENVMAP_BLENDING_ADD"};function bg(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Sg[n.combine]||"ENVMAP_BLENDING_NONE"}function wg(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=yg(e),l=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Mg(e),m=bg(e),p=ug(e),d=dg(r),_=s.createProgram(),x,f,u=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(dr).join(`
`),x.length>0&&(x+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(dr).join(`
`),f.length>0&&(f+=`
`)):(x=[nu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),f=[nu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+m:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Un?"#define TONE_MAPPING":"",e.toneMapping!==Un?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Un?cg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,og("linearToOutputTexel",e.outputColorSpace),hg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(dr).join(`
`)),a=Yl(a),a=jh(a,e),a=tu(a,e),o=Yl(o),o=jh(o,e),o=tu(o,e),a=eu(a),o=eu(o),e.isRawShaderMaterial!==!0&&(u=`#version 300 es
`,x=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,f=["#define varying in",e.glslVersion===Pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let g=u+x+a,y=u+f+o,v=Kh(s,s.VERTEX_SHADER,g),T=Kh(s,s.FRAGMENT_SHADER,y);s.attachShader(_,v),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(R){if(n.debug.checkShaderErrors){let P=s.getProgramInfoLog(_)||"",O=s.getShaderInfoLog(v)||"",H=s.getShaderInfoLog(T)||"",C=P.trim(),z=O.trim(),W=H.trim(),V=!0,et=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,v,T);else{let F=Qh(s,v,"vertex"),X=Qh(s,T,"fragment");kt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+C+`
`+F+`
`+X)}else C!==""?zt("WebGLProgram: Program Info Log:",C):(z===""||W==="")&&(et=!1);et&&(R.diagnostics={runnable:V,programLog:C,vertexShader:{log:z,prefix:x},fragmentShader:{log:W,prefix:f}})}s.deleteShader(v),s.deleteShader(T),M=new ms(s,_),S=fg(s,_)}let M;this.getUniforms=function(){return M===void 0&&A(this),M};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(_,ig)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=sg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=v,this.fragmentShader=T,this}var Tg=0,Zl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Jl(t),e.set(t,i)),i}},Jl=class{constructor(t){this.id=Tg++,this.code=t,this.usedTimes=0}};function Ag(n){return n===gi||n===cr||n===hr}function Eg(n,t,e,i,s,r){let a=new Us,o=new Zl,c=new Set,l=[],h=new Map,m=i.logarithmicDepthBuffer,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(M){return c.add(M),M===0?"uv":`uv${M}`}function _(M,S,I,R,P,O){let H=R.fog,C=P.geometry,z=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?R.environment:null,W=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,V=t.get(M.envMap||z,W),et=p[M.type],F=i.precision;M.precision!==null&&(F=i.getMaxPrecision(M.precision),F!==M.precision&&zt("WebGLProgram.getParameters:",M.precision,"not supported, using",F,"instead."));let X=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,q=X!==void 0?X.length:0,ft=0;C.morphAttributes.position!==void 0&&(ft=1),C.morphAttributes.normal!==void 0&&(ft=2),C.morphAttributes.color!==void 0&&(ft=3);let wt,Z,at,bt;if(et){let vt=On[et];wt=vt.vertexShader,Z=vt.fragmentShader}else{wt=M.vertexShader,Z=M.fragmentShader;let vt=o.getVertexShaderStage(M),pe=o.getFragmentShaderStage(M);o.update(M,vt,pe),at=vt.id,bt=pe.id}let Ct=n.getRenderTarget(),xt=n.state.buffers.depth.getReversed(),Nt=P.isInstancedMesh===!0,de=P.isBatchedMesh===!0,Ot=!!M.map,Yt=!!M.matcap,te=!!V,tt=te&&V.isPMREMTexture===!0,ht=!!M.aoMap,ot=!!M.lightMap,Tt=!!M.bumpMap&&M.wireframe===!1,yt=!!M.normalMap,qt=!!M.displacementMap,Lt=!!M.emissiveMap,ee=!!M.metalnessMap,ne=!!M.roughnessMap,he=M.anisotropy>0,N=M.clearcoat>0,Ae=M.diffuseRoughness>0,jt=M.dispersion>0,me=M.retroreflectivity>0,mt=M.iridescence>0,Te=M.sheen>0,Bt=M.transmission>0,Gt=he&&!!M.anisotropyMap,E=N&&!!M.clearcoatMap,b=N&&!!M.clearcoatNormalMap,k=N&&!!M.clearcoatRoughnessMap,nt=Ae&&!!M.diffuseRoughnessMap,j=mt&&!!M.iridescenceMap,lt=mt&&!!M.iridescenceThicknessMap,gt=Te&&!!M.sheenColorMap,K=Te&&!!M.sheenRoughnessMap,$=!!M.specularMap,ut=!!M.specularColorMap,L=!!M.specularIntensityMap,Q=Bt&&!!M.transmissionMap,J=Bt&&!!M.thicknessMap,dt=!!M.gradientMap,st=!!M.alphaMap,ct=M.alphaTest>0,Dt=!!M.alphaHash,Kt=!!M.extensions,it=Un;M.toneMapped&&(Ct===null||Ct.isXRRenderTarget===!0)&&(it=n.toneMapping);let Ft=tt?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,Zt={shaderID:et,shaderType:M.type,shaderName:M.name,vertexShader:wt,fragmentShader:Z,defines:M.defines,customVertexShaderID:at,customFragmentShaderID:bt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:F,batching:de,batchingColor:de&&P._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&P.instanceColor!==null,instancingMorph:Nt&&P.morphTexture!==null,outputColorSpace:Ct===null?n.outputColorSpace:Ct.isXRRenderTarget===!0?Ct.texture.colorSpace:re.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:Ot,matcap:Yt,envMap:te,envMapMode:te&&V.mapping,envMapPMREM:tt,envMapMaxLod:tt?Ft.length-1:null,envMapSize:tt?Ft[0].width:null,aoMap:ht,lightMap:ot,bumpMap:Tt,normalMap:yt,displacementMap:qt,emissiveMap:Lt,normalMapObjectSpace:yt&&M.normalMapType===xh,normalMapTangentSpace:yt&&M.normalMapType===fo,packedNormalMap:yt&&M.normalMapType===fo&&Ag(M.normalMap.format),metalnessMap:ee,roughnessMap:ne,anisotropy:he,anisotropyMap:Gt,clearcoat:N,clearcoatMap:E,clearcoatNormalMap:b,clearcoatRoughnessMap:k,diffuseRoughness:Ae,diffuseRoughnessMap:nt,dispersion:jt,retroreflection:me,iridescence:mt,iridescenceMap:j,iridescenceThicknessMap:lt,sheen:Te,sheenColorMap:gt,sheenRoughnessMap:K,specularMap:$,specularColorMap:ut,specularIntensityMap:L,transmission:Bt,transmissionMap:Q,thicknessMap:J,gradientMap:dt,opaque:M.transparent===!1&&M.blending===ds&&M.alphaToCoverage===!1,alphaMap:st,alphaTest:ct,alphaHash:Dt,combine:M.combine,mapUv:Ot&&d(M.map.channel),aoMapUv:ht&&d(M.aoMap.channel),lightMapUv:ot&&d(M.lightMap.channel),bumpMapUv:Tt&&d(M.bumpMap.channel),normalMapUv:yt&&d(M.normalMap.channel),displacementMapUv:qt&&d(M.displacementMap.channel),emissiveMapUv:Lt&&d(M.emissiveMap.channel),metalnessMapUv:ee&&d(M.metalnessMap.channel),roughnessMapUv:ne&&d(M.roughnessMap.channel),anisotropyMapUv:Gt&&d(M.anisotropyMap.channel),clearcoatMapUv:E&&d(M.clearcoatMap.channel),clearcoatNormalMapUv:b&&d(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&d(M.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:nt&&d(M.diffuseRoughnessMap.channel),iridescenceMapUv:j&&d(M.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&d(M.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&d(M.sheenColorMap.channel),sheenRoughnessMapUv:K&&d(M.sheenRoughnessMap.channel),specularMapUv:$&&d(M.specularMap.channel),specularColorMapUv:ut&&d(M.specularColorMap.channel),specularIntensityMapUv:L&&d(M.specularIntensityMap.channel),transmissionMapUv:Q&&d(M.transmissionMap.channel),thicknessMapUv:J&&d(M.thicknessMap.channel),alphaMapUv:st&&d(M.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(yt||he),vertexNormals:!!C.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!C.attributes.uv&&(Ot||st),fog:!!H,useFog:M.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||C.attributes.normal===void 0&&yt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:xt,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:ft,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:O.filter(vt=>vt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:it,decodeVideoTexture:Ot&&M.map.isVideoTexture===!0&&re.getTransfer(M.map.colorSpace)===fe,decodeVideoTextureEmissive:Lt&&M.emissiveMap.isVideoTexture===!0&&re.getTransfer(M.emissiveMap.colorSpace)===fe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Pe,flipSided:M.side===He,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Kt&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Kt&&M.extensions.multiDraw===!0||de)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Zt.vertexUv1s=c.has(1),Zt.vertexUv2s=c.has(2),Zt.vertexUv3s=c.has(3),c.clear(),Zt}function x(M){let S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(let I in M.defines)S.push(I),S.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(f(S,M),u(S,M),S.push(n.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function f(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapPMREM),M.push(S.envMapMaxLod),M.push(S.envMapSize),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.diffuseRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.numSunLights),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numSunLightShadows),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.numLightProbeGrids),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function u(M,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),M.push(a.mask)}function g(M){let S=p[M.type],I;if(S){let R=On[S];I=Oh.clone(R.uniforms)}else I=M.uniforms;return I}function y(M,S){let I=h.get(S);return I!==void 0?++I.usedTimes:(I=new wg(n,S,M,s),l.push(I),h.set(S,I)),I}function v(M){if(--M.usedTimes===0){let S=l.indexOf(M);l[S]=l[l.length-1],l.pop(),h.delete(M.cacheKey),M.destroy()}}function T(M){o.remove(M)}function A(){o.dispose()}return{getParameters:_,getProgramCacheKey:x,getUniforms:g,acquireProgram:y,releaseProgram:v,releaseShaderCache:T,programs:l,dispose:A}}function Rg(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Cg(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function iu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function su(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(p){let d=0;return p.isInstancedMesh&&(d+=2),p.isSkinnedMesh&&(d+=1),d}function o(p,d,_,x,f,u){let g=n[t];return g===void 0?(g={id:p.id,object:p,geometry:d,material:_,materialVariant:a(p),groupOrder:x,renderOrder:p.renderOrder,z:f,group:u},n[t]=g):(g.id=p.id,g.object=p,g.geometry=d,g.material=_,g.materialVariant=a(p),g.groupOrder=x,g.renderOrder=p.renderOrder,g.z=f,g.group=u),t++,g}function c(p,d,_,x,f,u,g){g.reversedDepth===!0&&(f=-f);let y=o(p,d,_,x,f,u);_.transmission>0?i.push(y):_.transparent===!0?s.push(y):e.push(y)}function l(p,d,_,x,f,u){let g=o(p,d,_,x,f,u);_.transmission>0?i.unshift(g):_.transparent===!0?s.unshift(g):e.unshift(g)}function h(p,d){e.length>1&&e.sort(p||Cg),i.length>1&&i.sort(d||iu),s.length>1&&s.sort(d||iu)}function m(){for(let p=t,d=n.length;p<d;p++){let _=n[p];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:m,sort:h}}function Ig(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new su,n.set(i,[a])):s>=r.length?(a=new su,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Pg(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new U,color:new Wt};break;case"SpotLight":e={position:new U,direction:new U,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new U,halfWidth:new U,halfHeight:new U};break}return n[t.id]=e,e}}}function Lg(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Dg=0;function Ng(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Ug(n){let t=new Pg,e=Lg(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new U);let s=new U,r=new ve,a=new ve;function o(l){let h=0,m=0,p=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let d=0,_=0,x=0,f=0,u=0,g=0,y=0,v=0,T=0,A=0,M=0,S=0,I=0,R=0;l.sort(Ng);for(let O=0,H=l.length;O<H;O++){let C=l[O],z=C.color,W=C.intensity,V=C.distance,et=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===gi?et=C.shadow.map.texture:et=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=z.r*W,m+=z.g*W,p+=z.b*W;else if(C.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(C.sh.coefficients[F],W);R++}else if(C.isSunLight){let F=t.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let X=C.shadow,q=e.get(C);q.shadowIntensity=X.intensity,q.shadowBias=X.bias,q.shadowNormalBias=X.normalBias,q.shadowRadius=X.radius,q.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),i.sunShadow[_]=q,i.sunShadowMap[_]=et;let ft=X.getViewportCount();for(let wt=0;wt<ft;wt++)i.sunShadowMatrix[x+wt]=X.getMatrix(wt),i.sunShadowCascade[x+wt]=X._cascadeData[wt];x+=ft,_++}i.sun[d]=F,d++}else if(C.isDirectionalLight){let F=t.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let X=C.shadow,q=e.get(C);q.shadowIntensity=X.intensity,q.shadowBias=X.bias,q.shadowNormalBias=X.normalBias,q.shadowRadius=X.radius,q.shadowMapSize=X.mapSize,i.directionalShadow[f]=q,i.directionalShadowMap[f]=et,i.directionalShadowMatrix[f]=C.shadow.matrix,T++}i.directional[f]=F,f++}else if(C.isSpotLight){let F=t.get(C);F.position.setFromMatrixPosition(C.matrixWorld),F.color.copy(z).multiplyScalar(W),F.distance=V,F.coneCos=Math.cos(C.angle),F.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),F.decay=C.decay,i.spot[g]=F;let X=C.shadow;if(C.map&&(i.spotLightMap[S]=C.map,S++,X.updateMatrices(C),C.castShadow&&I++),i.spotLightMatrix[g]=X.matrix,C.castShadow){let q=e.get(C);q.shadowIntensity=X.intensity,q.shadowBias=X.bias,q.shadowNormalBias=X.normalBias,q.shadowRadius=X.radius,q.shadowMapSize=X.mapSize,i.spotShadow[g]=q,i.spotShadowMap[g]=et,M++}g++}else if(C.isRectAreaLight){let F=t.get(C);F.color.copy(z).multiplyScalar(W),F.halfWidth.set(C.width*.5,0,0),F.halfHeight.set(0,C.height*.5,0),i.rectArea[y]=F,y++}else if(C.isPointLight){let F=t.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),F.distance=C.distance,F.decay=C.decay,C.castShadow){let X=C.shadow,q=e.get(C);q.shadowIntensity=X.intensity,q.shadowBias=X.bias,q.shadowNormalBias=X.normalBias,q.shadowRadius=X.radius,q.shadowMapSize=X.mapSize,q.shadowCameraNear=X.camera.near,q.shadowCameraFar=X.camera.far,i.pointShadow[u]=q,i.pointShadowMap[u]=et,i.pointShadowMatrix[u]=C.shadow.matrix,A++}i.point[u]=F,u++}else if(C.isHemisphereLight){let F=t.get(C);F.skyColor.copy(C.color).multiplyScalar(W),F.groundColor.copy(C.groundColor).multiplyScalar(W),i.hemi[v]=F,v++}}y>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Mt.LTC_FLOAT_1,i.rectAreaLTC2=Mt.LTC_FLOAT_2):(i.rectAreaLTC1=Mt.LTC_HALF_1,i.rectAreaLTC2=Mt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=p;let P=i.hash;(P.sunLength!==d||P.directionalLength!==f||P.pointLength!==u||P.spotLength!==g||P.rectAreaLength!==y||P.hemiLength!==v||P.numSunShadows!==_||P.numDirectionalShadows!==T||P.numPointShadows!==A||P.numSpotShadows!==M||P.numSpotMaps!==S||P.numLightProbes!==R)&&(i.sun.length=d,i.directional.length=f,i.spot.length=g,i.rectArea.length=y,i.point.length=u,i.hemi.length=v,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=M,i.spotShadowMap.length=M,i.spotLightMatrix.length=M+S-I,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=R,P.sunLength=d,P.directionalLength=f,P.pointLength=u,P.spotLength=g,P.rectAreaLength=y,P.hemiLength=v,P.numSunShadows=_,P.numDirectionalShadows=T,P.numPointShadows=A,P.numSpotShadows=M,P.numSpotMaps=S,P.numLightProbes=R,i.version=Dg++)}function c(l,h){let m=0,p=0,d=0,_=0,x=0,f=0,u=h.matrixWorldInverse;for(let g=0,y=l.length;g<y;g++){let v=l[g];if(v.isSunLight){let T=i.sun[m];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(u),m++}else if(v.isDirectionalLight){let T=i.directional[p];T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(u),p++}else if(v.isSpotLight){let T=i.spot[_];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(u),T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(u),_++}else if(v.isRectAreaLight){let T=i.rectArea[x];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(u),a.identity(),r.copy(v.matrixWorld),r.premultiply(u),a.extractRotation(r),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),x++}else if(v.isPointLight){let T=i.point[d];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(u),d++}else if(v.isHemisphereLight){let T=i.hemi[f];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(u),f++}}}return{setup:o,setupView:c,state:i}}function ru(n){let t=new Ug(n),e=[],i=[],s=[];function r(m){h.camera=m,e.length=0,i.length=0,s.length=0}function a(m){m.isLightProbeGrid?s.push(m):e.push(m)}function o(m){i.push(m)}function c(){t.setup(e),s.sort((m,p)=>m.priority-p.priority||m.id-p.id)}function l(m){t.setupView(e,m)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Fg(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new ru(n),t.set(s,[o])):r>=a.length?(o=new ru(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var Og=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bg=`uniform sampler2D shadow_pass;
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
}`,zg=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],kg=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],au=new ve,ur=new U,Hl=new U;function Gg(n,t,e){let i=new hi,s=new rt,r=new rt,a=new Me,o=new fa,c=new pa,l={},h=e.maxTextureSize,m={[Nn]:He,[He]:Nn,[Pe]:Pe},p=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:Og,fragmentShader:Bg}),d=p.clone();d.defines.HORIZONTAL_PASS=1;let _=new Ve;_.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ut(_,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ir;let u=this.type;this.render=function(A,M,S){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||A.length===0)return;this.type===Jc&&(zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ir);let I=n.getRenderTarget(),R=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Ci),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let H=u!==this.type;H&&M.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(z=>z.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,z=A.length;C<z;C++){let W=A[C],V=W.shadow;if(V===void 0){zt("WebGLShadowMap:",W,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let et=V.getFrameExtents();s.multiply(et),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/et.x),s.x=r.x*et.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/et.y),s.y=r.y*et.y,V.mapSize.y=r.y));let F=n.state.buffers.depth.getReversed();if(V.camera._reversedDepth=F,V.map===null||H===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===us){if(W.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new an(s.x,s.y,{format:gi,type:Tn,minFilter:je,magFilter:je,generateMipmaps:!1}),V.map.texture.name=W.name+".shadowMap",V.map.depthTexture=new Kn(s.x,s.y,wn),V.map.depthTexture.name=W.name+".shadowMapDepth",V.map.depthTexture.format=qn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Oe,V.map.depthTexture.magFilter=Oe}else W.isPointLight?(V.map=new fr(s.x),V.map.depthTexture=new ks(s.x,bn)):(V.map=new an(s.x,s.y),V.map.depthTexture=new Kn(s.x,s.y,bn)),V.map.depthTexture.name=W.name+".shadowMap",V.map.depthTexture.format=qn,this.type===ir?(V.map.depthTexture.compareFunction=F?Cl:Rl,V.map.depthTexture.minFilter=je,V.map.depthTexture.magFilter=je):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Oe,V.map.depthTexture.magFilter=Oe);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let X=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();W.isPointLight!==!0&&V.updateMatrices(W,S);let q=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:S.layers;for(let ft=0;ft<X;ft++){let wt=V.getCamera(ft);if(W.isPointLight){let Z=V.camera,at=V.matrix,bt=W.distance||Z.far;bt!==Z.far&&(Z.far=bt,Z.updateProjectionMatrix()),ur.setFromMatrixPosition(W.matrixWorld),Z.position.copy(ur),Hl.copy(Z.position),Hl.add(zg[ft]),Z.up.copy(kg[ft]),Z.lookAt(Hl),Z.updateMatrixWorld(),at.makeTranslation(-ur.x,-ur.y,-ur.z),au.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),V._frustum.setFromProjectionMatrix(au,Z.coordinateSystem,Z.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,ft),n.clear();else{ft===0&&(n.setRenderTarget(V.map),n.clear());let Z=V.getViewport(ft);a.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),O.viewport(a)}i=V.getFrustum(ft),v(M,S,wt,W,q,this.type)}V.isPointLightShadow!==!0&&this.type===us&&g(V,S),V.needsUpdate=!1}u=this.type,f.needsUpdate=!1,n.setRenderTarget(I,R,P)};function g(A,M){let S=t.update(x);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null?A.mapPass=new an(s.x,s.y,{format:gi,type:Tn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),p.uniforms.shadow_pass.value=A.map.depthTexture,p.uniforms.resolution.value.set(A.map.width,A.map.height),p.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(M,null,S,p,x,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(M,null,S,d,x,null)}function y(A,M,S,I){let R=null,P=S.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)R=P;else if(R=S.isPointLight===!0?c:o,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){let O=R.uuid,H=M.uuid,C=l[O];C===void 0&&(C={},l[O]=C);let z=C[H];z===void 0&&(z=R.clone(),C[H]=z,M.addEventListener("dispose",T)),R=z}if(R.visible=M.visible,R.wireframe=M.wireframe,I===us?R.side=M.shadowSide!==null?M.shadowSide:M.side:R.side=M.shadowSide!==null?M.shadowSide:m[M.side],R.alphaMap=M.alphaMap,R.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,R.map=M.map,R.clipShadows=M.clipShadows,R.clippingPlanes=M.clippingPlanes,R.clipIntersection=M.clipIntersection,R.displacementMap=M.displacementMap,R.displacementScale=M.displacementScale,R.displacementBias=M.displacementBias,R.wireframeLinewidth=M.wireframeLinewidth,R.linewidth=M.linewidth,S.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let O=n.properties.get(R);O.light=S}return R}function v(A,M,S,I,R,P){if(A.visible===!1)return;if(A.layers.test(R)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&P===us)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,A.matrixWorld);let C=t.update(A),z=A.material;if(Array.isArray(z)){let W=C.groups;for(let V=0,et=W.length;V<et;V++){let F=W[V],X=z[F.materialIndex];if(X&&X.visible){let q=y(A,X,I,P);A.onBeforeShadow(n,A,M,S,C,q,F),n.renderBufferDirect(S,null,C,q,A,F),A.onAfterShadow(n,A,M,S,C,q,F)}}}else if(z.visible){let W=y(A,z,I,P);A.onBeforeShadow(n,A,M,S,C,W,null),n.renderBufferDirect(S,null,C,W,A,null),A.onAfterShadow(n,A,M,S,C,W,null)}}let H=A.children;for(let C=0,z=H.length;C<z;C++)v(H[C],M,S,I,R,P)}function T(A){A.target.removeEventListener("dispose",T);for(let S in l){let I=l[S],R=A.target.uuid;R in I&&(I[R].dispose(),delete I[R])}}}function Vg(n,t){function e(){let L=!1,Q=new Me,J=null,dt=new Me(0,0,0,0);return{setMask:function(st){J!==st&&!L&&(n.colorMask(st,st,st,st),J=st)},setLocked:function(st){L=st},setClear:function(st,ct,Dt,Kt,it){it===!0&&(st*=Kt,ct*=Kt,Dt*=Kt),Q.set(st,ct,Dt,Kt),dt.equals(Q)===!1&&(n.clearColor(st,ct,Dt,Kt),dt.copy(Q))},reset:function(){L=!1,J=null,dt.set(-1,0,0,0)}}}function i(){let L=!1,Q=!1,J=null,dt=null,st=null;return{setReversed:function(ct){if(Q!==ct){let Dt=t.get("EXT_clip_control");ct?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),Q=ct;let Kt=st;st=null,this.setClear(Kt)}},getReversed:function(){return Q},setTest:function(ct){ct?xt(n.DEPTH_TEST):Nt(n.DEPTH_TEST)},setMask:function(ct){J!==ct&&!L&&(n.depthMask(ct),J=ct)},setFunc:function(ct){if(Q&&(ct=Ch[ct]),dt!==ct){switch(ct){case Wr:n.depthFunc(n.NEVER);break;case Xr:n.depthFunc(n.ALWAYS);break;case qr:n.depthFunc(n.LESS);break;case ji:n.depthFunc(n.LEQUAL);break;case Yr:n.depthFunc(n.EQUAL);break;case Zr:n.depthFunc(n.GEQUAL);break;case Jr:n.depthFunc(n.GREATER);break;case Kr:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}dt=ct}},setLocked:function(ct){L=ct},setClear:function(ct){st!==ct&&(st=ct,Q&&(ct=1-ct),n.clearDepth(ct))},reset:function(){L=!1,J=null,dt=null,st=null,Q=!1}}}function s(){let L=!1,Q=null,J=null,dt=null,st=null,ct=null,Dt=null,Kt=null,it=null;return{setTest:function(Ft){L||(Ft?xt(n.STENCIL_TEST):Nt(n.STENCIL_TEST))},setMask:function(Ft){Q!==Ft&&!L&&(n.stencilMask(Ft),Q=Ft)},setFunc:function(Ft,Zt,vt){(J!==Ft||dt!==Zt||st!==vt)&&(n.stencilFunc(Ft,Zt,vt),J=Ft,dt=Zt,st=vt)},setOp:function(Ft,Zt,vt){(ct!==Ft||Dt!==Zt||Kt!==vt)&&(n.stencilOp(Ft,Zt,vt),ct=Ft,Dt=Zt,Kt=vt)},setLocked:function(Ft){L=Ft},setClear:function(Ft){it!==Ft&&(n.clearStencil(Ft),it=Ft)},reset:function(){L=!1,Q=null,J=null,dt=null,st=null,ct=null,Dt=null,Kt=null,it=null}}}let r=new e,a=new i,o=new s,c={},l=new WeakMap,h={},m={},p={},d=new WeakMap,_=[],x=null,f=!1,u=null,g=null,y=null,v=null,T=null,A=null,M=null,S=new Wt(0,0,0),I=0,R=!1,P=null,O=null,H=null,C=null,z=null,W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,et=0,F=n.getParameter(n.VERSION);F.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(F)[1]),V=et>=1):F.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),V=et>=2);let X=null,q={},ft=n.getParameter(n.SCISSOR_BOX),wt=n.getParameter(n.VIEWPORT),Z=new Me().fromArray(ft),at=new Me().fromArray(wt);function bt(L,Q,J,dt){let st=new Uint8Array(4),ct=n.createTexture();n.bindTexture(L,ct),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Dt=0;Dt<J;Dt++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(Q,0,n.RGBA,1,1,dt,0,n.RGBA,n.UNSIGNED_BYTE,st):n.texImage2D(Q+Dt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,st);return ct}let Ct={};Ct[n.TEXTURE_2D]=bt(n.TEXTURE_2D,n.TEXTURE_2D,1),Ct[n.TEXTURE_CUBE_MAP]=bt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ct[n.TEXTURE_2D_ARRAY]=bt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ct[n.TEXTURE_3D]=bt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),xt(n.DEPTH_TEST),a.setFunc(ji),Tt(!1),yt(al),xt(n.CULL_FACE),ht(Ci);function xt(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function Nt(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function de(L,Q){return p[L]!==Q?(n.bindFramebuffer(L,Q),p[L]=Q,L===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=Q),L===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=Q),!0):!1}function Ot(L,Q){let J=_,dt=!1;if(L){J=d.get(Q),J===void 0&&(J=[],d.set(Q,J));let st=L.textures;if(J.length!==st.length||J[0]!==n.COLOR_ATTACHMENT0){for(let ct=0,Dt=st.length;ct<Dt;ct++)J[ct]=n.COLOR_ATTACHMENT0+ct;J.length=st.length,dt=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,dt=!0);dt&&n.drawBuffers(J)}function Yt(L){return x!==L?(n.useProgram(L),x=L,!0):!1}let te={[Ii]:n.FUNC_ADD,[$c]:n.FUNC_SUBTRACT,[Qc]:n.FUNC_REVERSE_SUBTRACT};te[jc]=n.MIN,te[th]=n.MAX;let tt={[eh]:n.ZERO,[nh]:n.ONE,[ih]:n.SRC_COLOR,[hl]:n.SRC_ALPHA,[ch]:n.SRC_ALPHA_SATURATE,[oh]:n.DST_COLOR,[rh]:n.DST_ALPHA,[sh]:n.ONE_MINUS_SRC_COLOR,[ul]:n.ONE_MINUS_SRC_ALPHA,[lh]:n.ONE_MINUS_DST_COLOR,[ah]:n.ONE_MINUS_DST_ALPHA,[hh]:n.CONSTANT_COLOR,[uh]:n.ONE_MINUS_CONSTANT_COLOR,[dh]:n.CONSTANT_ALPHA,[fh]:n.ONE_MINUS_CONSTANT_ALPHA};function ht(L,Q,J,dt,st,ct,Dt,Kt,it,Ft){if(L===Ci){f===!0&&(Nt(n.BLEND),f=!1);return}if(f===!1&&(xt(n.BLEND),f=!0),L!==Kc){if(L!==u||Ft!==R){if((g!==Ii||T!==Ii)&&(n.blendEquation(n.FUNC_ADD),g=Ii,T=Ii),Ft)switch(L){case ds:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ol:n.blendFunc(n.ONE,n.ONE);break;case ll:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case cl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:kt("WebGLState: Invalid blending: ",L);break}else switch(L){case ds:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ol:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ll:kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cl:kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:kt("WebGLState: Invalid blending: ",L);break}y=null,v=null,A=null,M=null,S.set(0,0,0),I=0,u=L,R=Ft}return}st=st||Q,ct=ct||J,Dt=Dt||dt,(Q!==g||st!==T)&&(n.blendEquationSeparate(te[Q],te[st]),g=Q,T=st),(J!==y||dt!==v||ct!==A||Dt!==M)&&(n.blendFuncSeparate(tt[J],tt[dt],tt[ct],tt[Dt]),y=J,v=dt,A=ct,M=Dt),(Kt.equals(S)===!1||it!==I)&&(n.blendColor(Kt.r,Kt.g,Kt.b,it),S.copy(Kt),I=it),u=L,R=!1}function ot(L,Q){L.side===Pe?Nt(n.CULL_FACE):xt(n.CULL_FACE);let J=L.side===He;Q&&(J=!J),Tt(J),L.blending===ds&&L.transparent===!1?ht(Ci):ht(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let dt=L.stencilWrite;o.setTest(dt),dt&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Lt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?xt(n.SAMPLE_ALPHA_TO_COVERAGE):Nt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(L){P!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),P=L)}function yt(L){L!==Yc?(xt(n.CULL_FACE),L!==O&&(L===al?n.cullFace(n.BACK):L===Zc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Nt(n.CULL_FACE),O=L}function qt(L){L!==H&&(V&&n.lineWidth(L),H=L)}function Lt(L,Q,J){L?(xt(n.POLYGON_OFFSET_FILL),(C!==Q||z!==J)&&(C=Q,z=J,a.getReversed()&&(Q=-Q,J=-J),n.polygonOffset(Q,J))):Nt(n.POLYGON_OFFSET_FILL)}function ee(L){L?xt(n.SCISSOR_TEST):Nt(n.SCISSOR_TEST)}function ne(L){L===void 0&&(L=n.TEXTURE0+W-1),X!==L&&(n.activeTexture(L),X=L)}function he(L,Q,J){J===void 0&&(X===null?J=n.TEXTURE0+W-1:J=X);let dt=q[J];dt===void 0&&(dt={type:void 0,texture:void 0},q[J]=dt),(dt.type!==L||dt.texture!==Q)&&(X!==J&&(n.activeTexture(J),X=J),n.bindTexture(L,Q||Ct[L]),dt.type=L,dt.texture=Q)}function N(){let L=q[X];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Ae(){try{n.compressedTexImage2D(...arguments)}catch(L){kt("WebGLState:",L)}}function jt(){try{n.compressedTexImage3D(...arguments)}catch(L){kt("WebGLState:",L)}}function me(){try{n.texSubImage2D(...arguments)}catch(L){kt("WebGLState:",L)}}function mt(){try{n.texSubImage3D(...arguments)}catch(L){kt("WebGLState:",L)}}function Te(){try{n.compressedTexSubImage2D(...arguments)}catch(L){kt("WebGLState:",L)}}function Bt(){try{n.compressedTexSubImage3D(...arguments)}catch(L){kt("WebGLState:",L)}}function Gt(){try{n.texStorage2D(...arguments)}catch(L){kt("WebGLState:",L)}}function E(){try{n.texStorage3D(...arguments)}catch(L){kt("WebGLState:",L)}}function b(){try{n.texImage2D(...arguments)}catch(L){kt("WebGLState:",L)}}function k(){try{n.texImage3D(...arguments)}catch(L){kt("WebGLState:",L)}}function nt(L){return m[L]!==void 0?m[L]:n.getParameter(L)}function j(L,Q){m[L]!==Q&&(n.pixelStorei(L,Q),m[L]=Q)}function lt(L){Z.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Z.copy(L))}function gt(L){at.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),at.copy(L))}function K(L,Q){let J=l.get(Q);J===void 0&&(J=new WeakMap,l.set(Q,J));let dt=J.get(L);dt===void 0&&(dt=n.getUniformBlockIndex(Q,L.name),n.uniformBlockBinding(Q,dt,dt),J.set(L,dt))}function $(L,Q,J){let st=l.get(Q).get(L);c[st]!==J&&(n.bindBufferBase(n.UNIFORM_BUFFER,st,J),c[st]=J)}function ut(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},m={},X=null,q={},p={},c={},d=new WeakMap,_=[],x=null,f=!1,u=null,g=null,y=null,v=null,T=null,A=null,M=null,S=new Wt(0,0,0),I=0,R=!1,P=null,O=null,H=null,C=null,z=null,Z.set(0,0,n.canvas.width,n.canvas.height),at.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:xt,disable:Nt,bindFramebuffer:de,drawBuffers:Ot,useProgram:Yt,setBlending:ht,setMaterial:ot,setFlipSided:Tt,setCullFace:yt,setLineWidth:qt,setPolygonOffset:Lt,setScissorTest:ee,activeTexture:ne,bindTexture:he,unbindTexture:N,compressedTexImage2D:Ae,compressedTexImage3D:jt,texImage2D:b,texImage3D:k,pixelStorei:j,getParameter:nt,updateUBOMapping:K,uniformBlockBinding:$,texStorage2D:Gt,texStorage3D:E,texSubImage2D:me,texSubImage3D:mt,compressedTexSubImage2D:Te,compressedTexSubImage3D:Bt,scissor:lt,viewport:gt,reset:ut}}function Hg(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new rt,h=new WeakMap,m=new Set,p,d=new WeakMap,_=new Set,x=new FinalizationRegistry(E=>_.delete(E)),f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function u(E,b){return f?new OffscreenCanvas(E,b):Ds("canvas")}function g(E,b,k){let nt=1,j=Gt(E);if((j.width>k||j.height>k)&&(nt=k/Math.max(j.width,j.height)),nt<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let lt=Math.floor(nt*j.width),gt=Math.floor(nt*j.height);p===void 0&&(p=u(lt,gt));let K=b?u(lt,gt):p;return K.width=lt,K.height=gt,K.getContext("2d").drawImage(E,0,0,lt,gt),zt("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+lt+"x"+gt+")."),K}else return"data"in E&&zt("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),E;return E}function y(E){return E.generateMipmaps}function v(E){n.generateMipmap(E)}function T(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(E,b,k,nt,j,lt=!1){if(E!==null){if(n[E]!==void 0)return n[E];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let gt;nt&&(gt=t.get("EXT_texture_norm16"),gt||zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=b;if(b===n.RED&&(k===n.FLOAT&&(K=n.R32F),k===n.HALF_FLOAT&&(K=n.R16F),k===n.UNSIGNED_BYTE&&(K=n.R8),k===n.UNSIGNED_SHORT&&gt&&(K=gt.R16_EXT),k===n.SHORT&&gt&&(K=gt.R16_SNORM_EXT)),b===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.R8UI),k===n.UNSIGNED_SHORT&&(K=n.R16UI),k===n.UNSIGNED_INT&&(K=n.R32UI),k===n.BYTE&&(K=n.R8I),k===n.SHORT&&(K=n.R16I),k===n.INT&&(K=n.R32I)),b===n.RG&&(k===n.FLOAT&&(K=n.RG32F),k===n.HALF_FLOAT&&(K=n.RG16F),k===n.UNSIGNED_BYTE&&(K=n.RG8),k===n.UNSIGNED_SHORT&&gt&&(K=gt.RG16_EXT),k===n.SHORT&&gt&&(K=gt.RG16_SNORM_EXT)),b===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.RG8UI),k===n.UNSIGNED_SHORT&&(K=n.RG16UI),k===n.UNSIGNED_INT&&(K=n.RG32UI),k===n.BYTE&&(K=n.RG8I),k===n.SHORT&&(K=n.RG16I),k===n.INT&&(K=n.RG32I)),b===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.RGB8UI),k===n.UNSIGNED_SHORT&&(K=n.RGB16UI),k===n.UNSIGNED_INT&&(K=n.RGB32UI),k===n.BYTE&&(K=n.RGB8I),k===n.SHORT&&(K=n.RGB16I),k===n.INT&&(K=n.RGB32I)),b===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),k===n.UNSIGNED_INT&&(K=n.RGBA32UI),k===n.BYTE&&(K=n.RGBA8I),k===n.SHORT&&(K=n.RGBA16I),k===n.INT&&(K=n.RGBA32I)),b===n.RGB&&(k===n.UNSIGNED_SHORT&&gt&&(K=gt.RGB16_EXT),k===n.SHORT&&gt&&(K=gt.RGB16_SNORM_EXT),k===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),k===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),b===n.RGBA){let $=lt?Ls:re.getTransfer(j);k===n.FLOAT&&(K=n.RGBA32F),k===n.HALF_FLOAT&&(K=n.RGBA16F),k===n.UNSIGNED_BYTE&&(K=$===fe?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT&&gt&&(K=gt.RGBA16_EXT),k===n.SHORT&&gt&&(K=gt.RGBA16_SNORM_EXT),k===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function M(E,b){let k;return E?b===null||b===bn||b===Li?k=n.DEPTH24_STENCIL8:b===wn?k=n.DEPTH32F_STENCIL8:b===ps&&(k=n.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===bn||b===Li?k=n.DEPTH_COMPONENT24:b===wn?k=n.DEPTH_COMPONENT32F:b===ps&&(k=n.DEPTH_COMPONENT16),k}function S(E,b){return y(E)===!0||E.isFramebufferTexture&&E.minFilter!==Oe&&E.minFilter!==je?Math.log2(Math.max(b.width,b.height))+1:E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?b.mipmaps.length:1}function I(E){let b=new WeakRef(E);i.get(E).__ref=b,_.add(b),x.register(E,b,b)}function R(E){let b=i.get(E).__ref;b!==void 0&&(_.delete(b),x.unregister(b))}function P(E){H(E.target)}function O(E){C(E.target)}function H(E){E.removeEventListener("dispose",P),R(E),W(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&m.delete(E)}function C(E){E.removeEventListener("dispose",O),R(E),et(E)}function z(){for(let E of _){let b=E.deref();b!==void 0&&(b.isRenderTarget===!0?C(b):H(b))}_.clear(),m.clear()}function W(E){let b=i.get(E);if(b.__webglInit===void 0)return;let k=E.source,nt=d.get(k);if(nt){let j=nt[b.__cacheKey];j.usedTimes--,j.usedTimes===0&&V(E),Object.keys(nt).length===0&&d.delete(k)}i.remove(E)}function V(E){let b=i.get(E);n.deleteTexture(b.__webglTexture);let k=E.source,nt=d.get(k);delete nt[b.__cacheKey],a.memory.textures--}function et(E){let b=i.get(E);b.__depthDisposeCallback&&b.__depthDisposeCallback();let k=E.depthTexture;if(k&&k.renderTarget===E&&H(k),E.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(b.__webglFramebuffer[j]))for(let lt=0;lt<b.__webglFramebuffer[j].length;lt++)n.deleteFramebuffer(b.__webglFramebuffer[j][lt]);else n.deleteFramebuffer(b.__webglFramebuffer[j]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[j])}else{if(Array.isArray(b.__webglFramebuffer))for(let j=0;j<b.__webglFramebuffer.length;j++)n.deleteFramebuffer(b.__webglFramebuffer[j]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let j=0;j<b.__webglColorRenderbuffer.length;j++)b.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[j]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let nt=E.textures;for(let j=0,lt=nt.length;j<lt;j++){let gt=i.get(nt[j]);gt.__webglTexture&&(n.deleteTexture(gt.__webglTexture),a.memory.textures--),i.remove(nt[j])}i.remove(E)}let F=0;function X(){F=0}function q(){return F}function ft(E){F=E}function wt(){let E=F;return E>=s.maxTextures&&zt("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,E}function Z(E){let b=[];return b.push(E.wrapS),b.push(E.wrapT),b.push(E.wrapR||0),b.push(E.magFilter),b.push(E.minFilter),b.push(E.anisotropy),b.push(E.internalFormat),b.push(E.format),b.push(E.type),b.push(E.generateMipmaps),b.push(E.mipmapsAutoUpdate),b.push(E.premultiplyAlpha),b.push(E.flipY),b.push(E.unpackAlignment),b.push(E.colorSpace),b.join()}function at(E,b){let k=i.get(E);if(E.isVideoTexture&&Te(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&k.__version!==E.version){let nt=E.image;if(nt===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{ot(k,E,b);return}}else E.isExternalTexture&&(k.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+b)}function bt(E,b){let k=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){ot(k,E,b);return}else E.isExternalTexture&&(k.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+b)}function Ct(E,b){let k=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){ot(k,E,b);return}e.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+b)}function xt(E,b){let k=i.get(E);if(E.version>0&&k.__version!==E.version){Tt(k,E,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+b)}let Nt={[$r]:n.REPEAT,[Cn]:n.CLAMP_TO_EDGE,[Qr]:n.MIRRORED_REPEAT},de={[Oe]:n.NEAREST,[gh]:n.NEAREST_MIPMAP_NEAREST,[sr]:n.NEAREST_MIPMAP_LINEAR,[je]:n.LINEAR,[Ca]:n.LINEAR_MIPMAP_NEAREST,[Qn]:n.LINEAR_MIPMAP_LINEAR},Ot={[vh]:n.NEVER,[Il]:n.ALWAYS,[Mh]:n.LESS,[Rl]:n.LEQUAL,[Sh]:n.EQUAL,[Cl]:n.GEQUAL,[bh]:n.GREATER,[wh]:n.NOTEQUAL};function Yt(E,b){if(b.type===wn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===je||b.magFilter===Ca||b.magFilter===sr||b.magFilter===Qn||b.minFilter===je||b.minFilter===Ca||b.minFilter===sr||b.minFilter===Qn)&&zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,Nt[b.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,Nt[b.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,Nt[b.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,de[b.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,de[b.minFilter]),b.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Ot[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Oe||b.minFilter!==sr&&b.minFilter!==Qn||b.type===wn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");n.texParameterf(E,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function te(E,b){let k=!1;E.__webglInit===void 0&&(E.__webglInit=!0,b.addEventListener("dispose",P),I(b));let nt=b.source,j=d.get(nt);j===void 0&&(j={},d.set(nt,j));let lt=Z(b);if(lt!==E.__cacheKey){j[lt]===void 0&&(j[lt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,k=!0),j[lt].usedTimes++;let gt=j[E.__cacheKey];gt!==void 0&&(j[E.__cacheKey].usedTimes--,gt.usedTimes===0&&V(b)),E.__cacheKey=lt,E.__webglTexture=j[lt].texture}return k}function tt(E,b,k){return Math.floor(Math.floor(E/k)/b)}function ht(E,b,k,nt){let lt=E.updateRanges;if(lt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,k,nt,b.data);else{lt.sort((L,Q)=>L.start-Q.start);let gt=0;for(let L=1;L<lt.length;L++){let Q=lt[gt],J=lt[L],dt=Q.start+Q.count,st=tt(J.start,b.width,4),ct=tt(Q.start,b.width,4);J.start<=dt+1&&st===ct&&tt(J.start+J.count-1,b.width,4)===st?Q.count=Math.max(Q.count,J.start+J.count-Q.start):(++gt,lt[gt]=J)}lt.length=gt+1;let K=e.getParameter(n.UNPACK_ROW_LENGTH),$=e.getParameter(n.UNPACK_SKIP_PIXELS),ut=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let L=0,Q=lt.length;L<Q;L++){let J=lt[L],dt=Math.floor(J.start/4),st=Math.ceil(J.count/4),ct=dt%b.width,Dt=Math.floor(dt/b.width),Kt=st,it=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,ct),e.pixelStorei(n.UNPACK_SKIP_ROWS,Dt),e.texSubImage2D(n.TEXTURE_2D,0,ct,Dt,Kt,it,k,nt,b.data)}E.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,K),e.pixelStorei(n.UNPACK_SKIP_PIXELS,$),e.pixelStorei(n.UNPACK_SKIP_ROWS,ut)}}function ot(E,b,k){let nt=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(nt=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(nt=n.TEXTURE_3D);let j=te(E,b),lt=b.source;e.bindTexture(nt,E.__webglTexture,n.TEXTURE0+k);let gt=i.get(lt);if(lt.version!==gt.__version||j===!0){if(e.activeTexture(n.TEXTURE0+k),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let it=re.getPrimaries(re.workingColorSpace),Ft=b.colorSpace===ti?null:re.getPrimaries(b.colorSpace),Zt=b.colorSpace===ti||it===Ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt)}e.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment);let $=g(b.image,!1,s.maxTextureSize);$=Bt(b,$);let ut=r.convert(b.format,b.colorSpace),L=r.convert(b.type),Q=A(b.internalFormat,ut,L,b.normalized,b.colorSpace,b.isVideoTexture);Yt(nt,b);let J,dt=b.mipmaps,st=b.isVideoTexture!==!0,ct=gt.__version===void 0||j===!0,Dt=lt.dataReady,Kt=S(b,$);if(b.isDepthTexture)Q=M(b.format===jn,b.type),ct&&(st?e.texStorage2D(n.TEXTURE_2D,1,Q,$.width,$.height):e.texImage2D(n.TEXTURE_2D,0,Q,$.width,$.height,0,ut,L,null));else if(b.isDataTexture)if(dt.length>0){st&&ct&&e.texStorage2D(n.TEXTURE_2D,Kt,Q,dt[0].width,dt[0].height);for(let it=0,Ft=dt.length;it<Ft;it++)J=dt[it],st?Dt&&e.texSubImage2D(n.TEXTURE_2D,it,0,0,J.width,J.height,ut,L,J.data):e.texImage2D(n.TEXTURE_2D,it,Q,J.width,J.height,0,ut,L,J.data);b.generateMipmaps=!1}else st?(ct&&e.texStorage2D(n.TEXTURE_2D,Kt,Q,$.width,$.height),Dt&&ht(b,$,ut,L)):e.texImage2D(n.TEXTURE_2D,0,Q,$.width,$.height,0,ut,L,$.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){st&&ct&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Kt,Q,dt[0].width,dt[0].height,$.depth);for(let it=0,Ft=dt.length;it<Ft;it++)if(J=dt[it],b.format!==An)if(ut!==null)if(st){if(Dt)if(b.layerUpdates.size>0){let Zt=Gl(J.width,J.height,b.format,b.type);for(let vt of b.layerUpdates){let pe=J.data.subarray(vt*Zt/J.data.BYTES_PER_ELEMENT,(vt+1)*Zt/J.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,vt,J.width,J.height,1,ut,pe)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,0,J.width,J.height,$.depth,ut,J.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,it,Q,J.width,J.height,$.depth,0,J.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?Dt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,0,J.width,J.height,$.depth,ut,L,J.data):e.texImage3D(n.TEXTURE_2D_ARRAY,it,Q,J.width,J.height,$.depth,0,ut,L,J.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{st&&ct&&e.texStorage2D(n.TEXTURE_2D,Kt,Q,dt[0].width,dt[0].height);for(let it=0,Ft=dt.length;it<Ft;it++)J=dt[it],b.format!==An?ut!==null?st?Dt&&e.compressedTexSubImage2D(n.TEXTURE_2D,it,0,0,J.width,J.height,ut,J.data):e.compressedTexImage2D(n.TEXTURE_2D,it,Q,J.width,J.height,0,J.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?Dt&&e.texSubImage2D(n.TEXTURE_2D,it,0,0,J.width,J.height,ut,L,J.data):e.texImage2D(n.TEXTURE_2D,it,Q,J.width,J.height,0,ut,L,J.data)}else if(b.isDataArrayTexture)if(st){if(ct&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Kt,Q,$.width,$.height,$.depth),Dt)if(b.layerUpdates.size>0){let it=Gl($.width,$.height,b.format,b.type);for(let Ft of b.layerUpdates){let Zt=$.data.subarray(Ft*it/$.data.BYTES_PER_ELEMENT,(Ft+1)*it/$.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ft,$.width,$.height,1,ut,L,Zt)}b.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ut,L,$.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Q,$.width,$.height,$.depth,0,ut,L,$.data);else if(b.isData3DTexture)st?(ct&&e.texStorage3D(n.TEXTURE_3D,Kt,Q,$.width,$.height,$.depth),Dt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ut,L,$.data)):e.texImage3D(n.TEXTURE_3D,0,Q,$.width,$.height,$.depth,0,ut,L,$.data);else if(b.isFramebufferTexture){if(ct)if(st)e.texStorage2D(n.TEXTURE_2D,Kt,Q,$.width,$.height);else{let it=$.width,Ft=$.height;for(let Zt=0;Zt<Kt;Zt++)e.texImage2D(n.TEXTURE_2D,Zt,Q,it,Ft,0,ut,L,null),it>>=1,Ft>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in n){let it=n.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),$.parentNode!==it){it.appendChild($),m.add(b),it.onpaint=Ft=>{let Zt=Ft.changedElements;for(let vt of m)Zt.includes(vt.image)&&(vt.needsUpdate=!0)},it.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,$);else{let Zt=n.RGBA,vt=n.RGBA,pe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Zt,vt,pe,$)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(dt.length>0){if(st&&ct){let it=Gt(dt[0]);e.texStorage2D(n.TEXTURE_2D,Kt,Q,it.width,it.height)}for(let it=0,Ft=dt.length;it<Ft;it++)J=dt[it],st?Dt&&e.texSubImage2D(n.TEXTURE_2D,it,0,0,ut,L,J):e.texImage2D(n.TEXTURE_2D,it,Q,ut,L,J);b.generateMipmaps=!1}else if(st){if(ct){let it=Gt($);e.texStorage2D(n.TEXTURE_2D,Kt,Q,it.width,it.height)}Dt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ut,L,$)}else e.texImage2D(n.TEXTURE_2D,0,Q,ut,L,$);y(b)&&b.mipmapsAutoUpdate===!0&&v(nt),gt.__version=lt.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function Tt(E,b,k){if(b.image.length!==6)return;let nt=te(E,b),j=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+k);let lt=i.get(j);if(j.version!==lt.__version||nt===!0){e.activeTexture(n.TEXTURE0+k);let gt=re.getPrimaries(re.workingColorSpace),K=b.colorSpace===ti?null:re.getPrimaries(b.colorSpace),$=b.colorSpace===ti||gt===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let ut=b.isCompressedTexture||b.image[0].isCompressedTexture,L=b.image[0]&&b.image[0].isDataTexture,Q=[];for(let vt=0;vt<6;vt++)!ut&&!L?Q[vt]=g(b.image[vt],!0,s.maxCubemapSize):Q[vt]=L?b.image[vt].image:b.image[vt],Q[vt]=Bt(b,Q[vt]);let J=Q[0],dt=r.convert(b.format,b.colorSpace),st=r.convert(b.type),ct=A(b.internalFormat,dt,st,b.normalized,b.colorSpace),Dt=b.isVideoTexture!==!0,Kt=lt.__version===void 0||nt===!0,it=j.dataReady,Ft=S(b,J);Yt(n.TEXTURE_CUBE_MAP,b);let Zt;if(b.isDepthTexture){if(ct=M(b.format===jn,b.type),Kt)if(Dt)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,ct,J.width,J.height);else for(let vt=0;vt<6;vt++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ct,J.width,J.height,0,dt,st,null)}else if(ut){Dt&&Kt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Ft,ct,J.width,J.height);for(let vt=0;vt<6;vt++){Zt=Q[vt].mipmaps;for(let pe=0;pe<Zt.length;pe++){let Ne=Zt[pe];b.format!==An?dt!==null?Dt?it&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,pe,0,0,Ne.width,Ne.height,dt,Ne.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,pe,ct,Ne.width,Ne.height,0,Ne.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,pe,0,0,Ne.width,Ne.height,dt,st,Ne.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,pe,ct,Ne.width,Ne.height,0,dt,st,Ne.data)}}}else{if(Zt=b.mipmaps,Dt&&Kt){Zt.length>0&&Ft++;let vt=Gt(Q[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Ft,ct,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(L){Dt?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Q[vt].width,Q[vt].height,dt,st,Q[vt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ct,Q[vt].width,Q[vt].height,0,dt,st,Q[vt].data);for(let pe=0;pe<Zt.length;pe++){let ei=Zt[pe].image[vt].image;Dt?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,pe+1,0,0,ei.width,ei.height,dt,st,ei.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,pe+1,ct,ei.width,ei.height,0,dt,st,ei.data)}}else{Dt?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,dt,st,Q[vt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ct,dt,st,Q[vt]);for(let pe=0;pe<Zt.length;pe++){let Ne=Zt[pe];Dt?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,pe+1,0,0,dt,st,Ne.image[vt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,pe+1,ct,dt,st,Ne.image[vt])}}}y(b)&&b.mipmapsAutoUpdate===!0&&v(n.TEXTURE_CUBE_MAP),lt.__version=j.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function yt(E,b,k,nt,j,lt){let gt=r.convert(k.format,k.colorSpace),K=r.convert(k.type),$=A(k.internalFormat,gt,K,k.normalized,k.colorSpace),ut=i.get(b),L=i.get(k);if(L.__renderTarget=b,!ut.__hasExternalTextures){let Q=Math.max(1,b.width>>lt),J=Math.max(1,b.height>>lt);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?e.texImage3D(j,lt,$,Q,J,b.depth,0,gt,K,null):e.texImage2D(j,lt,$,Q,J,0,gt,K,null)}e.bindFramebuffer(n.FRAMEBUFFER,E),mt(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,nt,j,L.__webglTexture,0,me(b)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,nt,j,L.__webglTexture,lt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function qt(E,b,k){if(n.bindRenderbuffer(n.RENDERBUFFER,E),b.depthBuffer){let nt=b.depthTexture,j=nt&&nt.isDepthTexture?nt.type:null,lt=M(b.stencilBuffer,j),gt=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;mt(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,me(b),lt,b.width,b.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,me(b),lt,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,lt,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,gt,n.RENDERBUFFER,E)}else{let nt=b.textures;for(let j=0;j<nt.length;j++){let lt=nt[j],gt=r.convert(lt.format,lt.colorSpace),K=r.convert(lt.type),$=A(lt.internalFormat,gt,K,lt.normalized,lt.colorSpace);mt(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,me(b),$,b.width,b.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,me(b),$,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,$,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Lt(E,b,k){let nt=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,E),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=i.get(b.depthTexture);j.__renderTarget=b;let lt=nt?b.depthTexture.image[0]:b.depthTexture.image;(!j.__webglTexture||lt.width!==b.width||lt.height!==b.height)&&(lt.width=b.width,lt.height=b.height,b.depthTexture.needsUpdate=!0),nt?xt(b.depthTexture,0):at(b.depthTexture,0);let gt=j.__webglTexture,K=me(b),$=nt?n.TEXTURE_CUBE_MAP_POSITIVE_X+k:n.TEXTURE_2D,ut=b.depthTexture.format===jn?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(b.depthTexture.format===qn)mt(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ut,$,gt,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,ut,$,gt,0);else if(b.depthTexture.format===jn)mt(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ut,$,gt,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,ut,$,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ee(E){let b=i.get(E),k=E.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==E.depthTexture){let nt=E.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),nt){let j=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,nt.removeEventListener("dispose",j)};nt.addEventListener("dispose",j),b.__depthDisposeCallback=j}b.__boundDepthTexture=nt}if(E.depthTexture&&!b.__autoAllocateDepthBuffer)if(k)for(let nt=0;nt<6;nt++)Lt(b.__webglFramebuffer[nt],E,nt);else E.texture.mipmaps.length>0?Lt(b.__webglFramebuffer[0],E,0):Lt(b.__webglFramebuffer,E,0);else if(k){b.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[nt]),b.__webglDepthbuffer[nt]===void 0)b.__webglDepthbuffer[nt]=n.createRenderbuffer(),qt(b.__webglDepthbuffer[nt],E,!1);else{let j=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=b.__webglDepthbuffer[nt];n.bindRenderbuffer(n.RENDERBUFFER,lt),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,lt)}}else if(E.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),qt(b.__webglDepthbuffer,E,!1);else{let j=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,lt),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,lt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ne(E,b,k){let nt=i.get(E);b!==void 0&&yt(nt.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&ee(E)}function he(E){let b=E.texture,k=i.get(E),nt=i.get(b);E.addEventListener("dispose",O),I(E);let j=E.textures,lt=E.isWebGLCubeRenderTarget===!0,gt=j.length>1;if(gt||(nt.__webglTexture===void 0&&(nt.__webglTexture=n.createTexture()),nt.__version=b.version,a.memory.textures++),lt){k.__webglFramebuffer=[];for(let K=0;K<6;K++)if(b.mipmaps.length>0){k.__webglFramebuffer[K]=[];for(let $=0;$<b.mipmaps.length;$++)k.__webglFramebuffer[K][$]=n.createFramebuffer()}else k.__webglFramebuffer[K]=n.createFramebuffer()}else{if(b.mipmaps.length>0){k.__webglFramebuffer=[];for(let K=0;K<b.mipmaps.length;K++)k.__webglFramebuffer[K]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(gt)for(let K=0,$=j.length;K<$;K++){let ut=i.get(j[K]);ut.__webglTexture===void 0&&(ut.__webglTexture=n.createTexture(),a.memory.textures++)}if(E.samples>0&&mt(E)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let K=0;K<j.length;K++){let $=j[K];k.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[K]);let ut=r.convert($.format,$.colorSpace),L=r.convert($.type),Q=A($.internalFormat,ut,L,$.normalized,$.colorSpace,E.isXRRenderTarget===!0),J=me(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,J,Q,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,k.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),qt(k.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(lt){e.bindTexture(n.TEXTURE_CUBE_MAP,nt.__webglTexture),Yt(n.TEXTURE_CUBE_MAP,b);for(let K=0;K<6;K++)if(b.mipmaps.length>0)for(let $=0;$<b.mipmaps.length;$++)yt(k.__webglFramebuffer[K][$],E,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,$);else yt(k.__webglFramebuffer[K],E,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);y(b)?v(n.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}else if(gt){for(let K=0,$=j.length;K<$;K++){let ut=j[K],L=i.get(ut),Q=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Q=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Q,L.__webglTexture),Yt(Q,ut),yt(k.__webglFramebuffer,E,ut,n.COLOR_ATTACHMENT0+K,Q,0),y(ut)&&v(Q)}e.unbindTexture()}else{let K=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(K=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(K,nt.__webglTexture),Yt(K,b),b.mipmaps.length>0)for(let $=0;$<b.mipmaps.length;$++)yt(k.__webglFramebuffer[$],E,b,n.COLOR_ATTACHMENT0,K,$);else yt(k.__webglFramebuffer,E,b,n.COLOR_ATTACHMENT0,K,0);y(b)?v(K):b.mipmaps.length>0&&n.texParameteri(K,n.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}E.depthBuffer&&ee(E)}function N(E){let b=E.textures;for(let k=0,nt=b.length;k<nt;k++){let j=b[k];if(y(j)&&j.mipmapsAutoUpdate===!0){let lt=T(E),gt=i.get(j).__webglTexture;e.bindTexture(lt,gt),v(lt),e.unbindTexture()}}}let Ae=[];function jt(E){if(E.samples>0){if(mt(E)===!1){let b=E.textures,k=E.width,nt=E.height,j=n.COLOR_BUFFER_BIT,lt=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,gt=i.get(E),K=b.length>1;if(K)for(let ut=0;ut<b.length;ut++)e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),E.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let ut=0;ut<b.length;ut++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),K){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,gt.__webglColorRenderbuffer[ut]);let L=i.get(b[ut]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,L,0)}n.blitFramebuffer(0,0,k,nt,0,0,k,nt,j,n.NEAREST),c===!0&&(Ae.length=0,Ae.push(n.COLOR_ATTACHMENT0+ut),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&Ae.push(lt),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ae))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let ut=0;ut<b.length;ut++){e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,gt.__webglColorRenderbuffer[ut]);let L=i.get(b[ut]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,L,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&c){let b=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function me(E){return Math.min(s.maxSamples,E.samples)}function mt(E){let b=i.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Te(E){let b=a.render.frame;h.get(E)!==b&&(h.set(E,b),E.update())}function Bt(E,b){let k=E.colorSpace,nt=E.format,j=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||k!==Ps&&k!==ti&&(re.getTransfer(k)===fe?(nt!==An||j!==nn)&&zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):kt("WebGLTextures: Unsupported texture color space:",k)),b}function Gt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=wt,this.resetTextureUnits=X,this.getTextureUnits=q,this.setTextureUnits=ft,this.setTexture2D=at,this.setTexture2DArray=bt,this.setTexture3D=Ct,this.setTextureCube=xt,this.rebindTextures=ne,this.setupRenderTarget=he,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=mt,this.dispose=z}function Wg(n,t){function e(i,s=ti){let r,a=re.getTransfer(s);if(i===nn)return n.UNSIGNED_BYTE;if(i===Pa)return n.UNSIGNED_SHORT_4_4_4_4;if(i===La)return n.UNSIGNED_SHORT_5_5_5_1;if(i===bl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===wl)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ml)return n.BYTE;if(i===Sl)return n.SHORT;if(i===ps)return n.UNSIGNED_SHORT;if(i===Ia)return n.INT;if(i===bn)return n.UNSIGNED_INT;if(i===wn)return n.FLOAT;if(i===Tn)return n.HALF_FLOAT;if(i===Tl)return n.ALPHA;if(i===Al)return n.RGB;if(i===An)return n.RGBA;if(i===qn)return n.DEPTH_COMPONENT;if(i===jn)return n.DEPTH_STENCIL;if(i===El)return n.RED;if(i===Da)return n.RED_INTEGER;if(i===gi)return n.RG;if(i===Na)return n.RG_INTEGER;if(i===Ua)return n.RGBA_INTEGER;if(i===rr||i===ar||i===or||i===lr)if(a===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===rr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===rr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ar)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===or)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===lr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fa||i===Oa||i===Ba||i===za)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Fa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Oa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ba)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===za)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ka||i===Ga||i===Va||i===Ha||i===Wa||i===cr||i===Xa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ka||i===Ga)return a===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Va)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ha)return r.COMPRESSED_R11_EAC;if(i===Wa)return r.COMPRESSED_SIGNED_R11_EAC;if(i===cr)return r.COMPRESSED_RG11_EAC;if(i===Xa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===qa||i===Ya||i===Za||i===Ja||i===Ka||i===$a||i===Qa||i===ja||i===to||i===eo||i===no||i===io||i===so||i===ro)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===qa)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ya)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Za)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ja)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ka)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$a)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Qa)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ja)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===to)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===eo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===no)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===io)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===so)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ro)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ao||i===oo||i===lo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ao)return a===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===oo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===lo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===co||i===ho||i===hr||i===uo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===co)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ho)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===hr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===uo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Li?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Xg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qg=`
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

}`,Kl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Gs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new gn({vertexShader:Xg,fragmentShader:qg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ut(new mn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$l=class extends Pn{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,m=null,p=null,d=null,_=null,x=typeof XRWebGLBinding<"u",f=new Kl,u={},g=e.getContextAttributes(),y=null,v=null,T=[],A=[],M=new rt,S=null,I=null,R=new Qe;R.viewport=new Me;let P=new Qe;P.viewport=new Me;let O=[R,P],H=new Aa,C=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let at=T[Z];return at===void 0&&(at=new ss,T[Z]=at),at.getTargetRaySpace()},this.getControllerGrip=function(Z){let at=T[Z];return at===void 0&&(at=new ss,T[Z]=at),at.getGripSpace()},this.getHand=function(Z){let at=T[Z];return at===void 0&&(at=new ss,T[Z]=at),at.getHandSpace()};function W(Z){let at=A.indexOf(Z.inputSource);if(at===-1)return;let bt=T[at];bt!==void 0&&(bt.update(Z.inputSource,Z.frame,l||a),bt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function V(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",et);for(let Z=0;Z<T.length;Z++){let at=A[Z];at!==null&&(A[Z]=null,T[Z].disconnect(at))}C=null,z=null,f.reset();for(let Z in u)delete u[Z];if(t.setRenderTarget(y),d=null,p=null,m=null,s=null,v=null,wt.stop(),i.isPresenting=!1,t.setPixelRatio(S),t.setSize(M.width,M.height,!1),I!==null){let Z=I.camera;Z.fov=I.fov,Z.zoom=I.zoom,Z.updateProjectionMatrix(),I=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return m===null&&x&&(m=new XRWebGLBinding(s,e)),m},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",V),s.addEventListener("inputsourceschange",et),g.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(M),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Ct=null,xt=null;g.depth&&(xt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,bt=g.stencil?jn:qn,Ct=g.stencil?Li:bn);let Nt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};m=this.getBinding(),p=m.createProjectionLayer(Nt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),v=new an(p.textureWidth,p.textureHeight,{format:An,type:nn,depthTexture:new Kn(p.textureWidth,p.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{let bt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,bt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new an(d.framebufferWidth,d.framebufferHeight,{format:An,type:nn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),wt.setContext(s),wt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function et(Z){for(let at=0;at<Z.removed.length;at++){let bt=Z.removed[at],Ct=A.indexOf(bt);Ct>=0&&(A[Ct]=null,T[Ct].disconnect(bt))}for(let at=0;at<Z.added.length;at++){let bt=Z.added[at],Ct=A.indexOf(bt);if(Ct===-1){for(let Nt=0;Nt<T.length;Nt++)if(Nt>=A.length){A.push(bt),Ct=Nt;break}else if(A[Nt]===null){A[Nt]=bt,Ct=Nt;break}if(Ct===-1)break}let xt=T[Ct];xt&&xt.connect(bt)}}function F(Z,at){at===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(at.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let at=Z.near,bt=Z.far;f.texture!==null&&(f.depthNear>0&&(at=f.depthNear),f.depthFar>0&&(bt=f.depthFar)),H.near=P.near=R.near=at,H.far=P.far=R.far=bt,(C!==H.near||z!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),C=H.near,z=H.far),H.layers.mask=Z.layers.mask|6,R.layers.mask=H.layers.mask&-5,P.layers.mask=H.layers.mask&-3;let Ct=Z.parent,xt=H.cameras;F(H,Ct);for(let Nt=0;Nt<xt.length;Nt++)F(xt[Nt],Ct);H.projectionMatrix.copy(R.projectionMatrix),H.projectionMatrixInverse.copy(R.projectionMatrixInverse),I===null&&Z.isPerspectiveCamera&&(I={camera:Z,fov:Z.fov,zoom:Z.zoom}),X(Z,H,Ct)};function X(Z,at,bt){bt===null?Z.matrix.copy(at.matrixWorld):(Z.matrix.copy(bt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(at.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(at.projectionMatrix),Z.projectionMatrixInverse.copy(at.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ns*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(p===null&&d===null))return c},this.setFoveation=function(Z){c=Z,p!==null&&(p.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(H)},this.getCameraTexture=function(Z){return u[Z]};let q=null;function ft(Z,at){if(h=at.getViewerPose(l||a),_=at,h!==null){let bt=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let Ct=!1;bt.length!==H.cameras.length&&(H.cameras.length=0,Ct=!0);for(let Ot=0;Ot<bt.length;Ot++){let Yt=bt[Ot],te=null;if(d!==null)te=d.getViewport(Yt);else{let ht=m.getViewSubImage(p,Yt);te=ht.viewport,Ot===0&&(t.setRenderTargetTextures(v,ht.colorTexture,ht.depthStencilTexture),t.setRenderTarget(v))}let tt=O[Ot];tt===void 0&&(tt=new Qe,tt.layers.enable(Ot),tt.viewport=new Me,O[Ot]=tt),tt.matrix.fromArray(Yt.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(Yt.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(te.x,te.y,te.width,te.height),Ot===0&&(H.matrix.copy(tt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Ct===!0&&H.cameras.push(tt)}let xt=s.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){m=i.getBinding();let Ot=m.getDepthInformation(bt[0]);Ot&&Ot.isValid&&Ot.texture&&f.init(Ot,s.renderState)}if(xt&&xt.includes("camera-access")&&x){t.state.unbindTexture(),m=i.getBinding();for(let Ot=0;Ot<bt.length;Ot++){let Yt=bt[Ot].camera;if(Yt){let te=u[Yt];te||(te=new Gs,u[Yt]=te);let tt=m.getCameraImage(Yt);te.sourceTexture=tt}}}}for(let bt=0;bt<T.length;bt++){let Ct=A[bt],xt=T[bt];Ct!==null&&xt!==void 0&&xt.update(Ct,at,l||a)}q&&q(Z,at),at.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:at}),_=null}let wt=new ou;wt.setAnimationLoop(ft),this.setAnimationLoop=function(Z){q=Z},this.dispose=function(){}}},Yg=new ve,_u=new Vt;_u.set(-1,0,0,0,1,0,0,0,1);function Zg(n,t){function e(f,u){f.matrixAutoUpdate===!0&&f.updateMatrix(),u.value.copy(f.matrix)}function i(f,u){u.color.getRGB(f.fogColor.value,Bl(n)),u.isFog?(f.fogNear.value=u.near,f.fogFar.value=u.far):u.isFogExp2&&(f.fogDensity.value=u.density)}function s(f,u,g,y,v){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?r(f,u):u.isMeshLambertMaterial?(r(f,u),u.envMap&&(f.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(r(f,u),m(f,u)):u.isMeshPhongMaterial?(r(f,u),h(f,u),u.envMap&&(f.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(r(f,u),p(f,u),u.isMeshPhysicalMaterial&&d(f,u,v)):u.isMeshMatcapMaterial?(r(f,u),_(f,u)):u.isMeshDepthMaterial?r(f,u):u.isMeshDistanceMaterial?(r(f,u),x(f,u)):u.isMeshNormalMaterial?r(f,u):u.isLineBasicMaterial?(a(f,u),u.isLineDashedMaterial&&o(f,u)):u.isPointsMaterial?c(f,u,g,y):u.isSpriteMaterial?l(f,u):u.isShadowMaterial?(f.color.value.copy(u.color),f.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(f,u){f.opacity.value=u.opacity,u.color&&f.diffuse.value.copy(u.color),u.emissive&&f.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(f.map.value=u.map,e(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,e(u.alphaMap,f.alphaMapTransform)),u.bumpMap&&(f.bumpMap.value=u.bumpMap,e(u.bumpMap,f.bumpMapTransform),f.bumpScale.value=u.bumpScale,u.side===He&&(f.bumpScale.value*=-1)),u.normalMap&&(f.normalMap.value=u.normalMap,e(u.normalMap,f.normalMapTransform),f.normalScale.value.copy(u.normalScale),u.side===He&&f.normalScale.value.negate()),u.displacementMap&&(f.displacementMap.value=u.displacementMap,e(u.displacementMap,f.displacementMapTransform),f.displacementScale.value=u.displacementScale,f.displacementBias.value=u.displacementBias),u.emissiveMap&&(f.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,f.emissiveMapTransform)),u.specularMap&&(f.specularMap.value=u.specularMap,e(u.specularMap,f.specularMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest);let g=t.get(u),y=g.envMap,v=g.envMapRotation;y&&(f.envMap.value=y,f.envMapRotation.value.setFromMatrix4(Yg.makeRotationFromEuler(v)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(_u),f.reflectivity.value=u.reflectivity,f.ior.value=u.ior,f.refractionRatio.value=u.refractionRatio),u.lightMap&&(f.lightMap.value=u.lightMap,f.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,f.lightMapTransform)),u.aoMap&&(f.aoMap.value=u.aoMap,f.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,f.aoMapTransform))}function a(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,u.map&&(f.map.value=u.map,e(u.map,f.mapTransform))}function o(f,u){f.dashSize.value=u.dashSize,f.totalSize.value=u.dashSize+u.gapSize,f.scale.value=u.scale}function c(f,u,g,y){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.size.value=u.size*g,f.scale.value=y*.5,u.map&&(f.map.value=u.map,e(u.map,f.uvTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,e(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function l(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.rotation.value=u.rotation,u.map&&(f.map.value=u.map,e(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,e(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function h(f,u){f.specular.value.copy(u.specular),f.shininess.value=Math.max(u.shininess,1e-4)}function m(f,u){u.gradientMap&&(f.gradientMap.value=u.gradientMap)}function p(f,u){f.metalness.value=u.metalness,u.metalnessMap&&(f.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,f.metalnessMapTransform)),f.roughness.value=u.roughness,u.roughnessMap&&(f.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,f.roughnessMapTransform)),u.envMap&&(f.envMapIntensity.value=u.envMapIntensity)}function d(f,u,g){f.ior.value=u.ior,u.diffuseRoughness>0&&(f.diffuseRoughness.value=u.diffuseRoughness,u.diffuseRoughnessMap&&(f.diffuseRoughnessMap.value=u.diffuseRoughnessMap,e(u.diffuseRoughnessMap,f.diffuseRoughnessMapTransform))),u.sheen>0&&(f.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),f.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(f.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,f.sheenColorMapTransform)),u.sheenRoughnessMap&&(f.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,f.sheenRoughnessMapTransform))),u.clearcoat>0&&(f.clearcoat.value=u.clearcoat,f.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(f.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,f.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(f.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===He&&f.clearcoatNormalScale.value.negate())),u.dispersion>0&&(f.dispersion.value=u.dispersion),u.retroreflectivity>0&&(f.retroreflectivity.value=u.retroreflectivity),u.iridescence>0&&(f.iridescence.value=u.iridescence,f.iridescenceIOR.value=u.iridescenceIOR,f.iridescenceThicknessMinimum.value=u.iridescenceThicknessMinimum,f.iridescenceThicknessMaximum.value=u.iridescenceThicknessMaximum,u.iridescenceMap&&(f.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,f.iridescenceMapTransform)),u.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),u.transmission>0&&(f.transmission.value=u.transmission,f.transmissionSamplerMap.value=g.texture,f.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(f.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,f.transmissionMapTransform)),f.thickness.value=u.thickness,u.thicknessMap&&(f.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=u.attenuationDistance,f.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(f.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(f.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=u.specularIntensity,f.specularColor.value.copy(u.specularColor),u.specularColorMap&&(f.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,f.specularColorMapTransform)),u.specularIntensityMap&&(f.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,u){u.matcap&&(f.matcap.value=u.matcap)}function x(f,u){let g=t.get(u).light;f.referencePosition.value.setFromMatrixPosition(g.matrixWorld),f.nearDistance.value=g.shadow.camera.near,f.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Jg(n,t,e,i){let s={},r={};function a(g,y){let v=y.program;i.uniformBlockBinding(g,v,s[g.id])}function o(g,y){let v=s[g.id];v===void 0&&(_(g),v=c(g),s[g.id]=v,g.addEventListener("dispose",f));let T=y.program;i.updateUBOMapping(g,T);let A=t.render.frame;r[g.id]!==A&&(l(g),r[g.id]=A)}function c(g){let y=n.createBuffer(),v=g.__size,T=g.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,v,T),n.bindBuffer(n.UNIFORM_BUFFER,null),y}function l(g){let y=s[g.id],v=g.uniforms,T=g.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let A=0,M=v.length;A<M;A++){let S=v[A];if(Array.isArray(S))for(let I=0,R=S.length;I<R;I++)h(S[I],A,I,T);else h(S,A,0,T)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(g,y,v,T){if(p(g,y,v,T)===!0){let A=g.__offset,M=g.value;if(Array.isArray(M)){let S=0;for(let I=0;I<M.length;I++){let R=M[I],P=x(R,!0);m(R,g.__data,S),S+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else m(M,g.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,A,g.__data)}}function m(g,y,v){typeof g=="number"||typeof g=="boolean"?y[v]=g:g.isMatrix3?(y[v]=g.elements[0],y[v+1]=g.elements[1],y[v+2]=g.elements[2],y[v+3]=0,y[v+4]=g.elements[3],y[v+5]=g.elements[4],y[v+6]=g.elements[5],y[v+7]=0,y[v+8]=g.elements[6],y[v+9]=g.elements[7],y[v+10]=g.elements[8],y[v+11]=0):ArrayBuffer.isView(g)?y.set(g.subarray(0,y.length-v),v):g.toArray(y,v)}function p(g,y,v,T){let A=g.value,M=y+"_"+v;if(Array.isArray(A)){T[M]===void 0&&(T[M]=[]);let S=T[M],I=!1;for(let R=0;R<A.length;R++)d(A[R],S,R)===!0&&(I=!0);return I}return d(A,T,M)}function d(g,y,v){if(y[v]===void 0)return typeof g=="number"||typeof g=="boolean"?y[v]=g:ArrayBuffer.isView(g)?y[v]=g.slice():y[v]=g.clone(),!0;{let T=y[v];if(typeof g=="number"||typeof g=="boolean"){if(T!==g)return y[v]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(T.equals(g)===!1)return T.copy(g),!0}}return!1}function _(g){let y=g.uniforms,v=0,T=16;for(let M=0,S=y.length;M<S;M++){let I=Array.isArray(y[M])?y[M]:[y[M]];for(let R=0,P=I.length;R<P;R++){let O=I[R],H=Array.isArray(O.value)?O.value:[O.value],C=Array.isArray(y[M])||Array.isArray(O.value),z=v;for(let V=0,et=H.length;V<et;V++){let F=H[V],X=x(F,C),q=v%T,ft=q%X.boundary,wt=q+ft;v+=ft,wt!==0&&T-wt<X.storage&&(v+=T-wt),V===0&&(z=v),v+=X.storage}let W=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new W((v-z)/Float32Array.BYTES_PER_ELEMENT),O.__offset=z}}let A=v%T;return A>0&&(v+=T-A),g.__size=v,g.__cache={},this}function x(g,y){let v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=16,v.storage=48):g.isMatrix4?(v.boundary=16,v.storage=64):g.isTexture?zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(g)?(v.boundary=16,v.storage=g.byteLength):zt("WebGLRenderer: Unsupported uniform value type.",g),y===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function f(g){let y=g.target;y.removeEventListener("dispose",f),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function u(){for(let g in s)n.deleteBuffer(s[g]);s={},r={}}return{bind:a,update:o,dispose:u}}var Kg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Fn=null;function $g(){return Fn===null&&(Fn=new sa(Kg,16,16,gi,Tn),Fn.name="DFG_LUT",Fn.minFilter=je,Fn.magFilter=je,Fn.wrapS=Cn,Fn.wrapT=Cn,Fn.generateMipmaps=!1,Fn.needsUpdate=!0),Fn}var _o=class{constructor(t={}){let{canvas:e=Ah(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:p=!1,outputBufferType:d=nn}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;let x=d,f=new Set([Ua,Na,Da]),u=new Set([nn,bn,ps,Li,Pa,La]),g=new Uint32Array(4),y=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},T=null,A=null,M=[],S=[],I=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,P=!1,O=null,H=null,C=null,z=null;this._outputColorSpace=Ie;let W=0,V=0,et=null,F=-1,X=null,q=new Me,ft=new Me,wt=null,Z=new Wt(0),at=0,bt=e.width,Ct=e.height,xt=1,Nt=null,de=null,Ot=new Me(0,0,bt,Ct),Yt=new Me(0,0,bt,Ct),te=!1,tt=new hi,ht=new ra,ot=!1,Tt=!1,yt=new ve,qt=new U,Lt=new Me,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ne=!1;function he(){return et===null?xt:1}let N=i;function Ae(w,D){return e.getContext(w,D)}let jt,me,mt,Te,Bt,Gt,E,b,k,nt,j,lt,gt,K,$,ut,L,Q,J,dt,st,ct,Dt;try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Ft,!1),e.addEventListener("webglcontextrestored",Zt,!1),e.addEventListener("webglcontextcreationerror",vt,!1),N===null){let D="webgl2";if(N=Ae(D,w),N===null)throw Ae(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Kt()}catch(w){throw e.removeEventListener("webglcontextlost",Ft,!1),e.removeEventListener("webglcontextrestored",Zt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),kt("WebGLRenderer: "+w.message),w}function Kt(){jt=new l0(N),jt.init(),st=new Wg(N,jt),me=new $m(N,jt,t,st),mt=new Vg(N,jt),me.reversedDepthBuffer&&p&&mt.buffers.depth.setReversed(!0),H=N.createFramebuffer(),C=N.createFramebuffer(),z=N.createFramebuffer(),Te=new u0(N),Bt=new Rg,Gt=new Hg(N,jt,mt,Bt,me,st,Te),E=new o0(R),b=new ff(N),ct=new Jm(N,b),k=new c0(N,b,Te,ct),nt=new f0(N,k,b,ct,Te),Q=new d0(N,me,Gt),$=new Qm(Bt),j=new Eg(R,E,jt,me,ct,$),lt=new Zg(R,Bt),gt=new Ig,K=new Fg(jt),L=new Zm(R,E,mt,nt,_,c),ut=new Gg(R,nt,me),Dt=new Jg(N,Te,me,mt),J=new Km(N,jt,Te),dt=new h0(N,jt,Te),Te.programs=j.programs,R.capabilities=me,R.extensions=jt,R.properties=Bt,R.renderLists=gt,R.shadowMap=ut,R.state=mt,R.info=Te}x!==nn&&(I=new m0(x,e.width,e.height,o,s,r));let it=new $l(R,N);this.xr=it,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let w=jt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=jt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return xt},this.setPixelRatio=function(w){w!==void 0&&(xt=w,this.setSize(bt,Ct,!1))},this.getSize=function(w){return w.set(bt,Ct)},this.setSize=function(w,D,Y=!0){if(it.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}bt=w,Ct=D,e.width=Math.floor(w*xt),e.height=Math.floor(D*xt),Y===!0&&(e.style.width=w+"px",e.style.height=D+"px"),I!==null&&I.setSize(e.width,e.height),this.setViewport(0,0,w,D)},this.getDrawingBufferSize=function(w){return w.set(bt*xt,Ct*xt).floor()},this.setDrawingBufferSize=function(w,D,Y){bt=w,Ct=D,xt=Y,e.width=Math.floor(w*Y),e.height=Math.floor(D*Y),this.setViewport(0,0,w,D)},this.setEffects=function(w){if(x===nn){kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let D=0;D<w.length;D++)if(w[D].isOutputPass===!0){zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(q)},this.getViewport=function(w){return w.copy(Ot)},this.setViewport=function(w,D,Y,B){w.isVector4?Ot.set(w.x,w.y,w.z,w.w):Ot.set(w,D,Y,B),mt.viewport(q.copy(Ot).multiplyScalar(he()).round())},this.getScissor=function(w){return w.copy(Yt)},this.setScissor=function(w,D,Y,B){w.isVector4?Yt.set(w.x,w.y,w.z,w.w):Yt.set(w,D,Y,B),mt.scissor(ft.copy(Yt).multiplyScalar(he()).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(w){mt.setScissorTest(te=w)},this.setOpaqueSort=function(w){Nt=w},this.setTransparentSort=function(w){de=w},this.getClearColor=function(w){return w.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(w=!0,D=!0,Y=!0){let B=0;if(w){let G=!1;if(et!==null){let _t=et.texture.format;G=f.has(_t)}if(G){let _t=et.texture.type,At=u.has(_t),pt=L.getClearColor(),St=L.getClearAlpha(),It=pt.r,Ht=pt.g,ie=pt.b;At?(g[0]=It,g[1]=Ht,g[2]=ie,g[3]=St,N.clearBufferuiv(N.COLOR,0,g)):(y[0]=It,y[1]=Ht,y[2]=ie,y[3]=St,N.clearBufferiv(N.COLOR,0,y))}else B|=N.COLOR_BUFFER_BIT}D&&(B|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(B|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&N.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),O=w},this.dispose=function(){e.removeEventListener("webglcontextlost",Ft,!1),e.removeEventListener("webglcontextrestored",Zt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),L.dispose(),gt.dispose(),K.dispose(),Gt.dispose(),Bt.dispose(),E.dispose(),nt.dispose(),k.dispose(),ct.dispose(),Dt.dispose(),j.dispose(),it.dispose(),it.removeEventListener("sessionstart",oc),it.removeEventListener("sessionend",lc),yi.stop()};function Ft(w){w.preventDefault(),Ll("WebGLRenderer: Context Lost."),P=!0}function Zt(){Ll("WebGLRenderer: Context Restored."),P=!1;let w=Te.autoReset,D=ut.enabled,Y=ut.autoUpdate,B=ut.needsUpdate,G=ut.type;Kt(),Te.autoReset=w,ut.enabled=D,ut.autoUpdate=Y,ut.needsUpdate=B,ut.type=G}function vt(w){kt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function pe(w){let D=w.target;D.removeEventListener("dispose",pe),Ne(D)}function Ne(w){ei(w),Bt.remove(w)}function ei(w){let D=Bt.get(w).programs;D!==void 0&&(D.forEach(function(Y){j.releaseProgram(Y)}),w.isShaderMaterial&&j.releaseShaderCache(w))}this.renderBufferDirect=function(w,D,Y,B,G,_t){D===null&&(D=ee);let At=G.isMesh&&G.matrixWorld.determinantAffine()<0,pt=Gu(w,D,Y,B,G);mt.setMaterial(B,At);let St=Y.index,It=1;if(B.wireframe===!0){if(St=k.getWireframeAttribute(Y),St===void 0)return;It=2}let Ht=Y.drawRange,ie=Y.attributes.position,Et=Ht.start*It,se=(Ht.start+Ht.count)*It;_t!==null&&(Et=Math.max(Et,_t.start*It),se=Math.min(se,(_t.start+_t.count)*It)),St!==null?(Et=Math.max(Et,0),se=Math.min(se,St.count)):ie!=null&&(Et=Math.max(Et,0),se=Math.min(se,ie.count));let Ee=se-Et;if(Ee<0||Ee===1/0)return;ct.setup(G,B,pt,Y,St);let _e,ge=J;if(St!==null&&(_e=b.get(St),ge=dt,ge.setIndex(_e)),G.isMesh)B.wireframe===!0?(mt.setLineWidth(B.wireframeLinewidth*he()),ge.setMode(N.LINES)):ge.setMode(N.TRIANGLES);else if(G.isLine){let Xe=B.linewidth;Xe===void 0&&(Xe=1),mt.setLineWidth(Xe*he()),G.isLineSegments?ge.setMode(N.LINES):G.isLineLoop?ge.setMode(N.LINE_LOOP):ge.setMode(N.LINE_STRIP)}else G.isPoints?ge.setMode(N.POINTS):G.isSprite&&ge.setMode(N.TRIANGLES);if(G.isBatchedMesh)if(jt.get("WEBGL_multi_draw"))ge.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Xe=G._multiDrawStarts,Rt=G._multiDrawCounts,$e=G._multiDrawCount,ue=St?b.get(St).bytesPerElement:1,vi=Bt.get(B).currentProgram.getUniforms();for(let qe=0;qe<$e;qe++)vi.setValue(N,"_gl_DrawID",qe),ge.render(Xe[qe]/ue,Rt[qe])}else if(G.isInstancedMesh)ge.renderInstances(Et,Ee,G.count);else if(Y.isInstancedBufferGeometry){let Xe=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Rt=Math.min(Y.instanceCount,Xe);ge.renderInstances(Et,Ee,Rt)}else ge.render(Et,Ee)};function ac(w,D,Y,B){O!==null&&w.isNodeMaterial&&O.setObject(B,w),ot===!0&&$.setState(w,Y,!1),w.transparent===!0&&w.side===Pe&&w.forceSinglePass===!1?(w.side=He,w.needsUpdate=!0,vs(w,D,B),w.side=Nn,w.needsUpdate=!0,vs(w,D,B),w.side=Pe):vs(w,D,B)}this.compile=function(w,D,Y=null){Y===null&&(Y=w),O!==null&&O.renderStart(w,D,Y),A=K.get(Y),A.init(D),S.push(A),Y.traverseVisible(function(G){G.isLight&&G.layers.test(D.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),w!==Y&&w.traverseVisible(function(G){G.isLight&&G.layers.test(D.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),A.setupLights(),O!==null&&O.updateLights(A.state.lightsArray),Tt=this.localClippingEnabled,ot=$.init(this.clippingPlanes,Tt),ot===!0&&$.setGlobalState(this.clippingPlanes,D),O!==null&&ut.render(A.state.shadowsArray,Y,D);let B=new Set;return w.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let _t=G.material;if(_t)if(Array.isArray(_t))for(let At=0;At<_t.length;At++){let pt=_t[At];ac(pt,Y,D,G),B.add(pt)}else ac(_t,Y,D,G),B.add(_t)}),A=S.pop(),O!==null&&O.renderEnd(),B},this.compileAsync=function(w,D,Y=null){let B=this.compile(w,D,Y);return new Promise(G=>{function _t(){if(B.forEach(function(At){let St=Bt.get(At).currentProgram;(St===void 0||St.isReady())&&B.delete(At)}),B.size===0){G(w);return}setTimeout(_t,10)}jt.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let wo=null;function zu(w){wo&&wo(w)}function oc(){yi.stop()}function lc(){yi.start()}let yi=new ou;yi.setAnimationLoop(zu),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(w){wo=w,it.setAnimationLoop(w),w===null?yi.stop():yi.start()},it.addEventListener("sessionstart",oc),it.addEventListener("sessionend",lc),this.render=function(w,D){if(D!==void 0&&D.isCamera!==!0){kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;O!==null&&O.renderStart(w,D);let Y=it.enabled===!0&&it.isPresenting===!0,B=I!==null&&(et===null||Y)&&I.begin(R,et);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(D),D=it.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,D,et),A=K.get(w,S.length),A.init(D),A.state.textureUnits=Gt.getTextureUnits(),S.push(A),yt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?ht.setFromArrayCamera(D):tt.setFromProjectionMatrix(yt,fn,D.reversedDepth),Tt=this.localClippingEnabled,ot=$.init(this.clippingPlanes,Tt),T=gt.get(w,M.length),T.init(),M.push(T),this.info.render.frame++,it.enabled===!0&&it.isPresenting===!0){let At=R.xr.getDepthSensingMesh();At!==null&&To(At,D,-1/0,R.sortObjects)}To(w,D,0,R.sortObjects),T.finish(),O!==null&&O.updateLights(A.state.lightsArray),R.sortObjects===!0&&T.sort(Nt,de),ne=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,ne&&L.addToRenderList(T,w),this.info.autoReset===!0&&this.info.reset(),ot===!0&&$.beginShadows();let G=A.state.shadowsArray;if(ut.render(G,w,D),ot===!0&&$.endShadows(),(B&&I.hasRenderPass())===!1){let At=T.opaque,pt=T.transmissive;if(A.setupLights(),D.isArrayCamera){let St=D.cameras;if(pt.length>0)for(let It=0,Ht=St.length;It<Ht;It++){let ie=St[It];hc(At,pt,w,ie)}ne&&L.render(w);for(let It=0,Ht=St.length;It<Ht;It++){let ie=St[It];cc(T,w,ie,ie.viewport)}}else pt.length>0&&hc(At,pt,w,D),ne&&L.render(w),cc(T,w,D)}et!==null&&V===0&&(Gt.updateMultisampleRenderTarget(et),Gt.updateRenderTargetMipmap(et)),B&&I.end(R),w.isScene===!0&&w.onAfterRender(R,w,D),ct.resetDefaultState(),F=-1,X=null,S.pop(),S.length>0?(A=S[S.length-1],Gt.setTextureUnits(A.state.textureUnits),ot===!0&&$.setGlobalState(R.clippingPlanes,A.state.camera)):A=null,M.pop(),M.length>0?T=M[M.length-1]:T=null,O!==null&&O.renderEnd()};function To(w,D,Y,B){if(w.visible===!1)return;if(w.layers.test(D.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(D);else if(w.isLight)A.pushLight(w),w.castShadow&&A.pushShadow(w);else if(w.isSprite){let At=D.isArrayCamera?ht:tt;if(!w.frustumCulled||w.intersectsFrustum(At)){B&&Lt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(yt);let pt=nt.update(w),St=w.material;St.visible&&T.push(w,pt,St,Y,Lt.z,null,D)}}else if(w.isMesh||w.isLine||w.isPoints){let At=D.isArrayCamera?ht:tt;if(!w.frustumCulled||w.intersectsFrustum(At)){let pt=nt.update(w),St=w.material;if(B&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Lt.copy(w.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Lt.copy(pt.boundingSphere.center)),Lt.applyMatrix4(w.matrixWorld).applyMatrix4(yt)),Array.isArray(St)){let It=pt.groups;for(let Ht=0,ie=It.length;Ht<ie;Ht++){let Et=It[Ht],se=St[Et.materialIndex];se&&se.visible&&T.push(w,pt,se,Y,Lt.z,Et,D)}}else St.visible&&T.push(w,pt,St,Y,Lt.z,null,D)}}}let _t=w.children;for(let At=0,pt=_t.length;At<pt;At++)To(_t[At],D,Y,B)}function cc(w,D,Y,B){let{opaque:G,transmissive:_t,transparent:At}=w;A.setupLightsView(Y),ot===!0&&$.setGlobalState(R.clippingPlanes,Y),B&&mt.viewport(q.copy(B)),G.length>0&&xr(G,D,Y),_t.length>0&&xr(_t,D,Y),At.length>0&&xr(At,D,Y),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function hc(w,D,Y,B){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[B.id]===void 0){let Et=jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[B.id]=new an(1,1,{generateMipmaps:!0,type:Et?Tn:nn,minFilter:Qn,samples:Math.max(4,me.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:re.workingColorSpace})}let _t=A.state.transmissionRenderTarget[B.id],At=B.viewport||q;_t.setSize(At.z*R.transmissionResolutionScale,At.w*R.transmissionResolutionScale);let pt=R.getRenderTarget(),St=R.getActiveCubeFace(),It=R.getActiveMipmapLevel();R.setRenderTarget(_t),R.getClearColor(Z),at=R.getClearAlpha(),at<1&&R.setClearColor(16777215,.5),R.clear(),ne&&L.render(Y);let Ht=R.toneMapping;R.toneMapping=Un;let ie=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),A.setupLightsView(B),ot===!0&&$.setGlobalState(R.clippingPlanes,B),xr(w,Y,B),Gt.updateMultisampleRenderTarget(_t),Gt.updateRenderTargetMipmap(_t),jt.has("WEBGL_multisampled_render_to_texture")===!1){let Et=!1;for(let se=0,Ee=D.length;se<Ee;se++){let _e=D[se],{object:ge,geometry:Xe,material:Rt,group:$e}=_e;if(Rt.side===Pe&&ge.layers.test(B.layers)){let ue=Rt.side;Rt.side=He,Rt.needsUpdate=!0,uc(ge,Y,B,Xe,Rt,$e),Rt.side=ue,Rt.needsUpdate=!0,Et=!0}}Et===!0&&(Gt.updateMultisampleRenderTarget(_t),Gt.updateRenderTargetMipmap(_t))}R.setRenderTarget(pt,St,It),R.setClearColor(Z,at),ie!==void 0&&(B.viewport=ie),R.toneMapping=Ht}function xr(w,D,Y){let B=D.isScene===!0?D.overrideMaterial:null;for(let G=0,_t=w.length;G<_t;G++){let At=w[G],{object:pt,geometry:St,group:It}=At,Ht=At.material;Ht.allowOverride===!0&&B!==null&&(Ht=B),pt.layers.test(Y.layers)&&uc(pt,D,Y,St,Ht,It)}}function uc(w,D,Y,B,G,_t){O!==null&&G.isNodeMaterial&&O.setObject(w,G),w.onBeforeRender(R,D,Y,B,G,_t),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),G.onBeforeRender(R,D,Y,B,w,_t),G.transparent===!0&&G.side===Pe&&G.forceSinglePass===!1?(G.side=He,G.needsUpdate=!0,R.renderBufferDirect(Y,D,B,G,w,_t),G.side=Nn,G.needsUpdate=!0,R.renderBufferDirect(Y,D,B,G,w,_t),G.side=Pe):R.renderBufferDirect(Y,D,B,G,w,_t),w.onAfterRender(R,D,Y,B,G,_t)}function dc(w){let D=0;for(let Y of w)Y.texture!==null&&D++;return D}function vs(w,D,Y){D.isScene!==!0&&(D=ee);let B=Bt.get(w),G=A.state.lights,_t=A.state.shadowsArray,At=G.state.version,pt=j.getParameters(w,G.state,_t,D,Y,A.state.lightProbeGridArray),St=j.getProgramCacheKey(pt),It=B.programs;B.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?D.environment:null,B.fog=D.fog;let Ht=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;B.envMap=E.get(w.envMap||B.environment,Ht),B.envMapRotation=B.environment!==null&&w.envMap===null?D.environmentRotation:w.envMapRotation,It===void 0&&(w.addEventListener("dispose",pe),It=new Map,B.programs=It,B.programVariants=new Map);let ie=It.get(St);if(ie!==void 0){if(B.currentProgram===ie&&B.lightsStateVersion===At)return pc(w,pt),ie}else pt.uniforms=j.getUniforms(w),O!==null&&w.isNodeMaterial&&O.build(w,Y,pt),w.onBeforeCompile(pt,R),ie=j.acquireProgram(pt,St),It.set(St,ie),B.uniforms=pt.uniforms;let Et=B.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Et.clippingPlanes=$.uniform),pc(w,pt),B.needsLights=Hu(w),B.lightsStateVersion=At,B.needsLights&&(Et.ambientLightColor.value=G.state.ambient,Et.lightProbe.value=G.state.probe,Et.sunLights.value=G.state.sun,Et.sunLightShadows.value=G.state.sunShadow,Et.directionalLights.value=G.state.directional,Et.directionalLightShadows.value=G.state.directionalShadow,Et.spotLights.value=G.state.spot,Et.spotLightShadows.value=G.state.spotShadow,Et.rectAreaLights.value=G.state.rectArea,Et.ltc_1.value=G.state.rectAreaLTC1,Et.ltc_2.value=G.state.rectAreaLTC2,Et.pointLights.value=G.state.point,Et.pointLightShadows.value=G.state.pointShadow,Et.hemisphereLights.value=G.state.hemi,Et.sunShadowMatrix.value=G.state.sunShadowMatrix,Et.sunShadowCascade.value=G.state.sunShadowCascade,Et.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Et.spotLightMatrix.value=G.state.spotLightMatrix,Et.spotLightMap.value=G.state.spotLightMap,Et.pointShadowMatrix.value=G.state.pointShadowMatrix),B.numLightProbeGrids=dc(A.state.lightProbeGridArray),B.currentProgram=ie,B.uniformsList=null,ie}function ku(w,D,Y,B,G){let _t=Bt.get(w),At=_t.currentProgram.id+","+B+","+G,pt=_t.programVariants.get(At);return pt===void 0?(pt=vs(w,D,Y),_t.programVariants.set(At,pt)):(_t.currentProgram=pt,_t.uniformsList=null,_t.outputColorSpace=B,_t.toneMapping=G),pt}function fc(w){if(w.uniformsList===null){let D=w.currentProgram.getUniforms();w.uniformsList=ms.seqWithValue(D.seq,w.uniforms)}return w.uniformsList}function pc(w,D){let Y=Bt.get(w);Y.outputColorSpace=D.outputColorSpace,Y.batching=D.batching,Y.batchingColor=D.batchingColor,Y.instancing=D.instancing,Y.instancingColor=D.instancingColor,Y.instancingMorph=D.instancingMorph,Y.skinning=D.skinning,Y.morphTargets=D.morphTargets,Y.morphNormals=D.morphNormals,Y.morphColors=D.morphColors,Y.morphTargetsCount=D.morphTargetsCount,Y.numClippingPlanes=D.numClippingPlanes,Y.numIntersection=D.numClipIntersection,Y.vertexAlphas=D.vertexAlphas,Y.vertexTangents=D.vertexTangents,Y.toneMapping=D.toneMapping}function Gu(w,D,Y,B,G){D.isScene!==!0&&(D=ee),Gt.resetTextureUnits();let _t=D.fog,At=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?D.environment:null,pt=et===null?R.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:re.workingColorSpace,St=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,It=E.get(B.envMap||At,St),Ht=B.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ie=!!Y.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Et=!!Y.morphAttributes.position,se=!!Y.morphAttributes.normal,Ee=!!Y.morphAttributes.color,_e=Un;B.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(_e=R.toneMapping);let ge=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Xe=ge!==void 0?ge.length:0,Rt=Bt.get(B),$e=A.state.lights;if(ot===!0&&(Tt===!0||w!==X)){let Se=w===X&&B.id===F;$.setState(B,w,Se)}let ue=!1,vi=!1;B.version===Rt.__version?Rt.needsLights&&Rt.lightsStateVersion!==$e.state.version||G.isBatchedMesh&&Rt.batching===!1||!G.isBatchedMesh&&Rt.batching===!0||G.isBatchedMesh&&Rt.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Rt.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Rt.instancing===!1||!G.isInstancedMesh&&Rt.instancing===!0||G.isSkinnedMesh&&Rt.skinning===!1||!G.isSkinnedMesh&&Rt.skinning===!0||G.isInstancedMesh&&Rt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Rt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Rt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Rt.instancingMorph===!1&&G.morphTexture!==null||Rt.envMap!==It||B.fog===!0&&Rt.fog!==_t||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==$.numPlanes||Rt.numIntersection!==$.numIntersection)||Rt.vertexAlphas!==Ht||Rt.vertexTangents!==ie||Rt.morphTargets!==Et||Rt.morphNormals!==se||Rt.morphColors!==Ee||Rt.morphTargetsCount!==Xe||Rt.numLightProbeGrids!==dc(A.state.lightProbeGridArray)?ue=!0:(Rt.outputColorSpace!==pt||Rt.toneMapping!==_e)&&(vi=!0):(ue=!0,Rt.__version=B.version);let qe=Rt.currentProgram;(ue===!0||vi===!0)&&(qe=vi===!0?ku(B,D,G,pt,_e):vs(B,D,G),O&&B.isNodeMaterial&&O.onUpdateProgram(B,qe,Rt));let yr=!1,ni=!1,Mi=!1,ce=qe.getUniforms(),Ge=Rt.uniforms;if(mt.useProgram(qe.program)&&(yr=!0,ni=!0,Mi=!0),B.id!==F&&(F=B.id,ni=!0),yr||X!==w){mt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ce.setValue(N,"projectionMatrix",w.projectionMatrix),ce.setValue(N,"viewMatrix",w.matrixWorldInverse);let Ue=ce.map.cameraPosition;Ue!==void 0&&Ue.setValue(N,qt.setFromMatrixPosition(w.matrixWorld)),me.logarithmicDepthBuffer&&ce.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ce.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),X!==w&&(X=w,ni=!0,Mi=!0)}if(Rt.needsLights&&($e.state.sunShadowMap.length>0&&ce.setValue(N,"sunShadowMap",$e.state.sunShadowMap,Gt),$e.state.directionalShadowMap.length>0&&ce.setValue(N,"directionalShadowMap",$e.state.directionalShadowMap,Gt),$e.state.spotShadowMap.length>0&&ce.setValue(N,"spotShadowMap",$e.state.spotShadowMap,Gt),$e.state.pointShadowMap.length>0&&ce.setValue(N,"pointShadowMap",$e.state.pointShadowMap,Gt)),G.isSkinnedMesh){ce.setOptional(N,G,"bindMatrix"),ce.setOptional(N,G,"bindMatrixInverse");let Se=G.skeleton;Se&&(Se.boneTexture===null&&Se.computeBoneTexture(),ce.setValue(N,"boneTexture",Se.boneTexture,Gt))}G.isBatchedMesh&&(ce.setOptional(N,G,"batchingTexture"),ce.setValue(N,"batchingTexture",G._matricesTexture,Gt),ce.setOptional(N,G,"batchingIdTexture"),ce.setValue(N,"batchingIdTexture",G._indirectTexture,Gt),ce.setOptional(N,G,"batchingColorTexture"),G._colorsTexture!==null&&ce.setValue(N,"batchingColorTexture",G._colorsTexture,Gt));let xn=Y.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&Q.update(G,Y,qe),(ni||Rt.receiveShadow!==G.receiveShadow)&&(Rt.receiveShadow=G.receiveShadow,ce.setValue(N,"receiveShadow",G.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&D.environment!==null&&(Ge.envMapIntensity.value=D.environmentIntensity),Ge.dfgLUT!==void 0&&(Ge.dfgLUT.value=$g()),ni){if(ce.setValue(N,"toneMappingExposure",R.toneMappingExposure),Rt.needsLights&&Vu(Ge,Mi),_t&&B.fog===!0&&lt.refreshFogUniforms(Ge,_t),lt.refreshMaterialUniforms(Ge,B,xt,Ct,A.state.transmissionRenderTarget[w.id]),Rt.needsLights&&Rt.numLightProbeGrids>0){let Se=v,Ue=0;for(let zn of A.state.lightProbeGridArray)zn.texture!==null&&(Se.textures[Ue]=zn.texture,Se.min[Ue]=zn.boundingBox.min,Se.max[Ue]=zn.boundingBox.max,Se.resolution[Ue]=zn.resolution,Ue++);for(let zn in Se)Se[zn].length=Ue;Ge.probesSH.value=Se.textures,Ge.probesMin.value=Se.min,Ge.probesMax.value=Se.max,Ge.probesResolution.value=Se.resolution}ms.upload(N,fc(Rt),Ge,Gt)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ms.upload(N,fc(Rt),Ge,Gt),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ce.setValue(N,"center",G.center),ce.setValue(N,"modelViewMatrix",G.modelViewMatrix),ce.setValue(N,"normalMatrix",G.normalMatrix),ce.setValue(N,"modelMatrix",G.matrixWorld),B.uniformsGroups!==void 0){let Se=B.uniformsGroups;for(let Ue=0,zn=Se.length;Ue<zn;Ue++){let gc=Se[Ue];Dt.update(gc,qe),Dt.bind(gc,qe)}}return qe}function Vu(w,D){w.ambientLightColor.needsUpdate=D,w.lightProbe.needsUpdate=D,w.sunLights.needsUpdate=D,w.sunLightShadows.needsUpdate=D,w.directionalLights.needsUpdate=D,w.directionalLightShadows.needsUpdate=D,w.pointLights.needsUpdate=D,w.pointLightShadows.needsUpdate=D,w.spotLights.needsUpdate=D,w.spotLightShadows.needsUpdate=D,w.rectAreaLights.needsUpdate=D,w.hemisphereLights.needsUpdate=D}function Hu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(w,D,Y){let B=Bt.get(w);B.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Bt.get(w.texture).__webglTexture=D,Bt.get(w.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:Y,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,D){let Y=Bt.get(w);Y.__webglFramebuffer=D,Y.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(w,D=0,Y=0){et=w,W=D,V=Y;let B=null,G=!1,_t=!1;if(w){let pt=Bt.get(w);if(pt.__useDefaultFramebuffer!==void 0){mt.bindFramebuffer(N.FRAMEBUFFER,pt.__webglFramebuffer),q.copy(w.viewport),ft.copy(w.scissor),wt=w.scissorTest,mt.viewport(q),mt.scissor(ft),mt.setScissorTest(wt),F=-1;return}else if(pt.__webglFramebuffer===void 0)Gt.setupRenderTarget(w);else if(pt.__hasExternalTextures)Gt.rebindTextures(w,Bt.get(w.texture).__webglTexture,Bt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Ht=w.depthTexture;if(pt.__boundDepthTexture!==Ht){if(Ht!==null&&Bt.has(Ht)&&(w.width!==Ht.image.width||w.height!==Ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Gt.setupDepthRenderbuffer(w)}}let St=w.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(_t=!0);let It=Bt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(It[D])?B=It[D][Y]:B=It[D],G=!0):w.samples>0&&Gt.useMultisampledRTT(w)===!1?B=Bt.get(w).__webglMultisampledFramebuffer:Array.isArray(It)?B=It[Y]:B=It,q.copy(w.viewport),ft.copy(w.scissor),wt=w.scissorTest}else q.copy(Ot).multiplyScalar(xt).floor(),ft.copy(Yt).multiplyScalar(xt).floor(),wt=te;if(Y!==0&&(B=H),mt.bindFramebuffer(N.FRAMEBUFFER,B)&&mt.drawBuffers(w,B),mt.viewport(q),mt.scissor(ft),mt.setScissorTest(wt),G){let pt=Bt.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,pt.__webglTexture,Y)}else if(_t){let pt=D;for(let St=0;St<w.textures.length;St++){let It=Bt.get(w.textures[St]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+St,It.__webglTexture,Y,pt)}}else if(w!==null&&Y!==0){let pt=Bt.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,pt.__webglTexture,Y)}F=-1};function mc(w){let D=Bt.get(w);return(D.__readFormat!==w.format||D.__readType!==w.type)&&(D.__readFormat=w.format,D.__readType=w.type,D.__formatReadable=me.textureFormatReadable(w.format),D.__typeReadable=me.textureTypeReadable(w.type)),D}this.readRenderTargetPixels=function(w,D,Y,B,G,_t,At,pt=0){if(!(w&&w.isWebGLRenderTarget)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=Bt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&At!==void 0&&(St=St[At],Array.isArray(St)&&(St=St[0])),St){mt.bindFramebuffer(N.FRAMEBUFFER,St);try{let It=w.textures[pt],Ht=It.format,ie=It.type;w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+pt);let Et=mc(It);if(Et.__formatReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Et.__typeReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=w.width-B&&Y>=0&&Y<=w.height-G&&N.readPixels(D,Y,B,G,st.convert(Ht),st.convert(ie),_t)}finally{let It=et!==null?Bt.get(et).__webglFramebuffer:null;mt.bindFramebuffer(N.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(w,D,Y,B,G,_t,At,pt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=Bt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&At!==void 0&&(St=St[At],Array.isArray(St)&&(St=St[0])),St)if(D>=0&&D<=w.width-B&&Y>=0&&Y<=w.height-G){mt.bindFramebuffer(N.FRAMEBUFFER,St);let It=w.textures[pt],Ht=It.format,ie=It.type;w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+pt);let Et=mc(It);if(Et.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Et.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let se=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,se),N.bufferData(N.PIXEL_PACK_BUFFER,_t.byteLength,N.STREAM_READ),N.readPixels(D,Y,B,G,st.convert(Ht),st.convert(ie),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let Ee=et!==null?Bt.get(et).__webglFramebuffer:null;mt.bindFramebuffer(N.FRAMEBUFFER,Ee);let _e=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Rh(N,_e,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,se),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,_t),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(se),N.deleteSync(_e),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,D=null,Y=0){let B=Math.pow(2,-Y),G=Math.floor(w.image.width*B),_t=Math.floor(w.image.height*B),At=D!==null?D.x:0,pt=D!==null?D.y:0;Gt.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,Y,0,0,At,pt,G,_t),mt.unbindTexture()},this.copyTextureToTexture=function(w,D,Y=null,B=null,G=0,_t=0){let At,pt,St,It,Ht,ie,Et,se,Ee,_e=w.isCompressedTexture?w.mipmaps[_t]:w.image;if(Y!==null)At=Y.max.x-Y.min.x,pt=Y.max.y-Y.min.y,St=Y.isBox3?Y.max.z-Y.min.z:1,It=Y.min.x,Ht=Y.min.y,ie=Y.isBox3?Y.min.z:0;else{let ce=Math.pow(2,-G);At=Math.floor(_e.width*ce),pt=Math.floor(_e.height*ce),w.isDataArrayTexture?St=_e.depth:w.isData3DTexture?St=Math.floor(_e.depth*ce):St=1,It=0,Ht=0,ie=0}B!==null?(Et=B.x,se=B.y,Ee=B.z):(Et=0,se=0,Ee=0);let ge=st.convert(D.format),Xe=st.convert(D.type),Rt;D.isData3DTexture?(Gt.setTexture3D(D,0),Rt=N.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Gt.setTexture2DArray(D,0),Rt=N.TEXTURE_2D_ARRAY):(Gt.setTexture2D(D,0),Rt=N.TEXTURE_2D),mt.activeTexture(N.TEXTURE0),mt.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),mt.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),mt.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);let $e=mt.getParameter(N.UNPACK_ROW_LENGTH),ue=mt.getParameter(N.UNPACK_IMAGE_HEIGHT),vi=mt.getParameter(N.UNPACK_SKIP_PIXELS),qe=mt.getParameter(N.UNPACK_SKIP_ROWS),yr=mt.getParameter(N.UNPACK_SKIP_IMAGES);mt.pixelStorei(N.UNPACK_ROW_LENGTH,_e.width),mt.pixelStorei(N.UNPACK_IMAGE_HEIGHT,_e.height),mt.pixelStorei(N.UNPACK_SKIP_PIXELS,It),mt.pixelStorei(N.UNPACK_SKIP_ROWS,Ht),mt.pixelStorei(N.UNPACK_SKIP_IMAGES,ie);let ni=w.isDataArrayTexture||w.isData3DTexture,Mi=D.isDataArrayTexture||D.isData3DTexture;if(w.isDepthTexture){let ce=Bt.get(w),Ge=Bt.get(D),xn=Bt.get(ce.__renderTarget),Se=Bt.get(Ge.__renderTarget);mt.bindFramebuffer(N.READ_FRAMEBUFFER,xn.__webglFramebuffer),mt.bindFramebuffer(N.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Ue=0;Ue<St;Ue++)ni&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Bt.get(w).__webglTexture,G,ie+Ue),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Bt.get(D).__webglTexture,_t,Ee+Ue)),N.blitFramebuffer(It,Ht,It+At,Ht+pt,Et,se,Et+At,se+pt,N.DEPTH_BUFFER_BIT,N.NEAREST);mt.bindFramebuffer(N.READ_FRAMEBUFFER,null),mt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(G!==0||w.isRenderTargetTexture||Bt.has(w)){let ce=Bt.get(w),Ge=Bt.get(D);mt.bindFramebuffer(N.READ_FRAMEBUFFER,C),mt.bindFramebuffer(N.DRAW_FRAMEBUFFER,z);for(let xn=0;xn<St;xn++)ni?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ce.__webglTexture,G,ie+xn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ce.__webglTexture,G),Mi?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ge.__webglTexture,_t,Ee+xn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ge.__webglTexture,_t),G!==0?N.blitFramebuffer(It,Ht,It+At,Ht+pt,Et,se,Et+At,se+pt,N.COLOR_BUFFER_BIT,N.NEAREST):Mi?N.copyTexSubImage3D(Rt,_t,Et,se,Ee+xn,It,Ht,At,pt):N.copyTexSubImage2D(Rt,_t,Et,se,It,Ht,At,pt);mt.bindFramebuffer(N.READ_FRAMEBUFFER,null),mt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Mi?w.isDataTexture||w.isData3DTexture?N.texSubImage3D(Rt,_t,Et,se,Ee,At,pt,St,ge,Xe,_e.data):D.isCompressedArrayTexture?N.compressedTexSubImage3D(Rt,_t,Et,se,Ee,At,pt,St,ge,_e.data):N.texSubImage3D(Rt,_t,Et,se,Ee,At,pt,St,ge,Xe,_e):w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,_t,Et,se,At,pt,ge,Xe,_e.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,_t,Et,se,_e.width,_e.height,ge,_e.data):N.texSubImage2D(N.TEXTURE_2D,_t,Et,se,At,pt,ge,Xe,_e);mt.pixelStorei(N.UNPACK_ROW_LENGTH,$e),mt.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ue),mt.pixelStorei(N.UNPACK_SKIP_PIXELS,vi),mt.pixelStorei(N.UNPACK_SKIP_ROWS,qe),mt.pixelStorei(N.UNPACK_SKIP_IMAGES,yr),_t===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&N.generateMipmap(Rt),mt.unbindTexture()},this.initRenderTarget=function(w){Bt.get(w).__webglFramebuffer===void 0&&Gt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Gt.setTextureCube(w,0):w.isData3DTexture?Gt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Gt.setTexture2DArray(w,0):Gt.setTexture2D(w,0),mt.unbindTexture()},this.resetState=function(){W=0,V=0,et=null,mt.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}};var mr=new U;function _n(n,t,e,i,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;mr.copy(t),mr[i]=0,mr.normalize();let l=.5*a/(a+o),h=1-mr.angleTo(n)/c;return Math.sign(mr[e])===1?h*l:o/(a+o)+l+l*(1-h)}var _s=class n extends Be{constructor(t=1,e=1,i=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,i/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new U,l=new U,h=new U(t,e,i).divideScalar(2).subScalar(r),m=this.attributes.position.array,p=this.attributes.normal.array,d=this.attributes.uv.array,_=m.length/6,x=new U,f=.5/a;for(let u=0,g=0;u<m.length;u+=3,g+=2)switch(c.fromArray(m,u),l.copy(c),l.x-=Math.sign(l.x)*f,l.y-=Math.sign(l.y)*f,l.z-=Math.sign(l.z)*f,l.normalize(),m[u+0]=h.x*Math.sign(c.x)+l.x*r,m[u+1]=h.y*Math.sign(c.y)+l.y*r,m[u+2]=h.z*Math.sign(c.z)+l.z*r,p[u+0]=l.x,p[u+1]=l.y,p[u+2]=l.z,Math.floor(u/_)){case 0:x.set(1,0,0),d[g+0]=_n(x,l,"z","y",r,i),d[g+1]=1-_n(x,l,"y","z",r,e);break;case 1:x.set(-1,0,0),d[g+0]=1-_n(x,l,"z","y",r,i),d[g+1]=1-_n(x,l,"y","z",r,e);break;case 2:x.set(0,1,0),d[g+0]=1-_n(x,l,"x","z",r,t),d[g+1]=_n(x,l,"z","x",r,i);break;case 3:x.set(0,-1,0),d[g+0]=1-_n(x,l,"x","z",r,t),d[g+1]=1-_n(x,l,"z","x",r,i);break;case 4:x.set(0,0,1),d[g+0]=1-_n(x,l,"x","y",r,t),d[g+1]=1-_n(x,l,"y","x",r,e);break;case 5:x.set(0,0,-1),d[g+0]=_n(x,l,"x","y",r,t),d[g+1]=1-_n(x,l,"y","x",r,e);break}}static fromJSON(t){return new n(t.width,t.height,t.depth,t.segments,t.radius)}};var ae=(n,t)=>new di(Object.assign({color:n,roughness:.55,metalness:.04},t||{})),Ce=(n,t,e)=>ae(n,{emissive:t||n,emissiveIntensity:e??.6,roughness:.15}),yu=()=>ae(13225684,{roughness:.18,metalness:.95});function ze(n,t,e,i,s,r,a,o,c){let l=new Ut(t,e);return l.position.set(i||0,s||0,r||0),(a||o||c)&&l.rotation.set(a||0,o||0,c||0),n.add(l),l}var Pt=(n,t,e,i,s,r,a,o,c,l,h)=>ze(n,new Be(t,e,i),o,s,r,a,c,l,h);function We(n,t,e,i,s,r){let a=new U(...t),o=new U(...e),c=o.clone().sub(a),l=c.length(),h=new Ut(new Xt(i,i,l,r||8),s);return h.position.copy(a).add(o).multiplyScalar(.5),h.quaternion.setFromUnitVectors(new U(0,1,0),c.normalize()),n.add(h),h}function vu(n,t,e,i,s,r,a,o,c,l){let h=document.createElement("canvas");h.width=512,h.height=Math.round(512*i/e);let m=h.getContext("2d");l&&(m.fillStyle=l,m.fillRect(0,0,h.width,h.height)),m.fillStyle=c,m.textAlign="center",m.textBaseline="middle",m.font="800 "+Math.round(h.height*.7)+'px "Schibsted Grotesk",Arial,sans-serif',m.fillText(t,h.width/2,h.height/2+h.height*.04);let p=new Jn(h);p.colorSpace=Ie,p.anisotropy=4;let d=new Ut(new mn(e,i),new Zn({map:p,transparent:!0,toneMapped:!1}));return d.position.set(s,r,a),d.rotation.y=o,n.add(d),d}function Qg(n,t){let e=n,i=0;for(;i<e.length-2&&t<e[i+1].x;)i++;let s=e[i],r=e[i+1],a=e[Math.max(0,i-1)],o=e[Math.min(e.length-1,i+2)],c=Math.min(1,Math.max(0,(s.x-t)/(s.x-r.x))),l={};for(let h in s){if(h==="x")continue;let m=a[h],p=s[h],d=r[h],_=o[h],x=c*c,f=x*c,u=.5*(2*p+(-m+d)*c+(2*m-5*p+4*d-_)*x+(-m+3*p-3*d+_)*f),g=Math.min(p,d),y=Math.max(p,d);l[h]=Math.min(y+(y-g)*.15+.004,Math.max(g-(y-g)*.15-.004,u))}return l}function jg(n,t){let e=[];for(let s=0;s<n.length-1;s++){let r=n[Math.max(0,s-1)],a=n[s],o=n[s+1],c=n[Math.min(n.length-1,s+2)],l=t[s];for(let h=0;h<l;h++){let m=h/l,p=m*m,d=p*m,_=(x,f,u,g)=>.5*(2*f+(-x+u)*m+(2*x-5*f+4*u-g)*p+(-x+3*f-3*u+g)*d);e.push({z:Math.max(0,_(r[0],a[0],o[0],c[0])),y:_(r[1],a[1],o[1],c[1]),seg:s})}}let i=n[n.length-1];return e.push({z:i[0],y:i[1],seg:n.length-2}),e}var t_=[3,3,4,4,3,6,4,5];function e_(n){let t=n.ys-n.yb,e=[[0,n.yb],[n.wl*.86,n.yb],[n.wl*.995,n.yb+t*.22],[n.wl,n.yb+t*(n.wy||.5)],[n.ws,n.ys],[n.ws-.012-(n.tg||0),n.ys+.012],[n.wr+(n.ws-n.wr)*.12,n.ys+(n.yt-n.ys)*.86],[n.wr*.66,n.yt-(n.dbl?0:.002)],[0,n.yt-(n.dbl||0)]];return jg(e,t_)}function ys(n,t){let e=!1;for(let i=0,s=t.length-1;i<t.length;s=i++){let[r,a]=t[i],[o,c]=t[s];a>n[1]!=c>n[1]&&n[0]<(o-r)*(n[1]-a)/(c-a)+r&&(e=!e)}return e}function vo(n){let t=n.n||150,e=[];for(let x=0;x<=t;x++)e.push(n.xf-(n.xf-n.xr)*x/t);let i=e.map(x=>{let f=Qg(n.keys,x),u=f.yb;for(let[g,y,v]of n.arches||[]){let T=x-g;Math.abs(T)<v&&(u=Math.max(u,y+Math.sqrt(v*v-T*T)))}return f.yb=Math.min(u,f.ys-.04),{x,s:f,pts:e_(f)}}),s=i[0].pts.length,r=[],a=[],o=[],c=new Wt,l=(x,f,u,g,y)=>(r.push(x,f,u),c.setHex(n.colour(x,f,u,g,y)),a.push(c.r,c.g,c.b),r.length/3-1),h=i.map(x=>{let f=[];for(let u=s-1;u>=0;u--){let g=x.pts[u];f.push(l(x.x,g.y,-g.z,g.seg,x.s))}for(let u=1;u<s;u++){let g=x.pts[u];f.push(l(x.x,g.y,g.z,g.seg,x.s))}return f}),m=h[0].length;for(let x=0;x<h.length-1;x++)for(let f=0;f<m-1;f++){let u=h[x][f],g=h[x+1][f],y=h[x+1][f+1],v=h[x][f+1];o.push(u,g,v,g,y,v)}for(let x=0;x<h.length-1;x++)o.push(h[x][m-1],h[x+1][m-1],h[x][0]),o.push(h[x+1][m-1],h[x+1][0],h[x][0]);for(let[x,f]of[[0,!1],[h.length-1,!0]]){let u=i[x],g=0;u.pts.forEach(v=>g+=v.y),g/=s;let y=l(u.x,g,0,9,u.s);for(let v=0;v<m;v++){let T=h[x][v],A=h[x][(v+1)%m];f?o.push(y,A,T):o.push(y,T,A)}}let p=new Ve;p.setAttribute("position",new oe(r,3)),p.setAttribute("color",new oe(a,3)),p.setIndex(o),p.computeVertexNormals();let d=new $n({vertexColors:!0,roughness:n.rough||.28,metalness:n.metal==null?.2:n.metal,clearcoat:1,clearcoatRoughness:.06,side:Pe}),_=new Ut(p,d);return _.userData.rings=i,_}function jl(n,t,e){let i=n.userData.rings,s=i[0],r=1e9;for(let c of i){let l=Math.abs(c.x-t);l<r&&(r=l,s=c)}let a=s.pts,o=0;for(let c=0;c<a.length-1;c++){let l=a[c],h=a[c+1];if((l.y-e)*(h.y-e)<=0&&l.y!==h.y){let m=(e-l.y)/(h.y-l.y);o=Math.max(o,l.z+(h.z-l.z)*m)}}return o}function n_(n,t){let e=n.userData.rings,i=e[0],s=1e9;for(let r of e){let a=Math.abs(r.x-t);a<s&&(s=a,i=r)}return i.s.yt}function Ui(n,t,e,i){let s=Math.sign(e),r=i.r,a=i.tw,o=new we;o.position.set(t,r,e),n.add(o);let c=ae(1184274,{roughness:.9}),l=ae(1184274,{roughness:.9,side:Pe}),h=new Ut(new Xt(r,r,a,36,1,!0),l);h.rotation.x=Math.PI/2,o.add(h);for(let f of[-1,1]){let u=new Ut(new ls(i.rr*.98,r,36),l);u.position.z=f*a*.5,o.add(u)}let m=new Ut(new en(r*.9,r*.1,10,36),c);m.position.z=s*a*.4,o.add(m);let p=ae(i.rim,{roughness:i.rough==null?.3:i.rough,metalness:i.metal==null?.6:i.metal}),d=new Ut(new Xt(i.rr,i.rr,a*.56,30),ae(526346,{roughness:.7}));if(d.rotation.x=Math.PI/2,o.add(d),i.cal){let f=new Ut(new ls(i.rr*.52,i.rr*.88,14,1,i.calA==null?.5:i.calA,1.25),ae(i.cal,{roughness:.35,emissive:i.cal,emissiveIntensity:.12,side:Pe}));f.position.z=s*a*.36,o.add(f)}let _=new Ut(new en(i.rr*.985,.011,8,32),p);if(_.position.z=s*a*.47,o.add(_),i.steel){let f=new Ut(new Xt(i.rr*.97,i.rr*.97,.014,30),p);f.rotation.x=Math.PI/2,f.position.z=s*a*.43,o.add(f);let u=new Ut(new Xt(i.rr*.42,i.rr*.5,.04,24),p);u.rotation.x=Math.PI/2,u.position.z=s*a*.46,o.add(u);for(let g=0;g<6;g++){let y=g*Math.PI/3+.3,v=new Ut(new Xt(.026,.026,.016,12),ae(197379));v.rotation.x=Math.PI/2,v.position.set(Math.cos(y)*i.rr*.7,Math.sin(y)*i.rr*.7,s*a*.44),o.add(v)}}else{let f=i.spokes;for(let u=0;u<f;u++){let g=u*Math.PI*2/f+.25,y=i.sw||.04,v=new Ut(new Be(i.rr*.98,y,.024),p);if(v.geometry.translate(i.rr*.5,0,0),v.rotation.z=g,v.position.z=s*a*.43,o.add(v),i.split){let T=new Ut(new Be(i.rr*.6,y*.7,.022),p);T.geometry.translate(i.rr*.68,0,0),T.rotation.z=g+Math.PI/f,T.position.z=s*a*.43,o.add(T)}}}let x=new Ut(new Xt(i.rr*.17,i.rr*.17,.03,18),ae(i.cap||2236962,{roughness:.3,metalness:.7}));return x.rotation.x=Math.PI/2,x.position.z=s*a*.47,o.add(x),o}function Fi(n,t,e,i,s){Pt(n,.012,.068,s||.2,t,e,0,ae(i>0?15921902:15909376,{roughness:.4})),vu(n,"ASR",(s||.2)*.8,.054,t+i*.008,e,0,i*Math.PI/2,"#16130F",null)}var _i=(n,t,e,i)=>jl(n,t,e)+(i||0);function Mu(){let n=new we,t=1.2,e=-1.19,i=.68,s=-.71,r=.172,a=[{x:1.2,yb:.11,ys:.2,yt:.215,wl:.3,ws:.28,wr:.22,wy:.5},{x:1.18,yb:.075,ys:.28,yt:.29,wl:.4,ws:.38,wr:.3,wy:.5},{x:1.12,yb:.065,ys:.33,yt:.33,wl:.445,ws:.425,wr:.32,wy:.5},{x:1.02,yb:.065,ys:.37,yt:.36,wl:.465,ws:.445,wr:.33,wy:.5},{x:.9,yb:.07,ys:.41,yt:.385,wl:.475,ws:.455,wr:.34,wy:.55},{x:.68,yb:.075,ys:.445,yt:.42,wl:.488,ws:.462,wr:.35,wy:.58},{x:.45,yb:.08,ys:.47,yt:.455,wl:.476,ws:.452,wr:.37,wy:.55},{x:.3,yb:.08,ys:.485,yt:.49,wl:.468,ws:.448,wr:.38,wy:.55},{x:.12,yb:.08,ys:.5,yt:.6,wl:.466,ws:.444,wr:.335,wy:.55},{x:-.06,yb:.08,ys:.508,yt:.675,wl:.466,ws:.444,wr:.31,wy:.55},{x:-.3,yb:.08,ys:.518,yt:.678,wl:.47,ws:.446,wr:.305,wy:.55},{x:-.52,yb:.08,ys:.53,yt:.635,wl:.48,ws:.455,wr:.31,wy:.58},{x:-.71,yb:.085,ys:.535,yt:.575,wl:.495,ws:.466,wr:.33,wy:.6},{x:-.92,yb:.09,ys:.525,yt:.522,wl:.485,ws:.46,wr:.37,wy:.58},{x:-1.08,yb:.11,ys:.5,yt:.505,wl:.465,ws:.445,wr:.38,wy:.55},{x:-1.165,yb:.12,ys:.43,yt:.445,wl:.44,ws:.42,wr:.36,wy:.5},{x:-1.19,yb:.14,ys:.33,yt:.35,wl:.41,ws:.39,wr:.33,wy:.5}],o=[[.29,.497],[.03,.648],[-.3,.655],[-.5,.622],[-.555,.592],[-.52,.566],[-.6,.537],[-.2,.523],[.2,.506]],c=921361,l=6978188,h=328966,m=14673904,p=vo({xf:t,xr:e,keys:a,arches:[[i,r,.205],[s,r,.205]],rough:.22,metal:.3,colour:(u,g,y,v,T)=>v===0?h:v>=4&&v<=6&&ys([u,g],o)||v>=6&&u<.3&&u>.04&&g>T.ys+.02||v>=6&&u<-.36&&u>-.93&&g>T.ys+.012?l:Math.abs(y)>.27&&v>=2&&v<=5&&ys([u,g],[[1.19,.27],[1.15,.315],[1.04,.358],[.94,.39],[.9,.392],[.97,.36],[1.1,.3],[1.17,.255]])?m:u>1.1&&g<.305&&g>.155&&Math.abs(y)<.25&&!(g<.29&&g>.17&&Math.abs(y)<.23)?10133672:u>1.12&&g<.29&&g>.165&&Math.abs(y)<.23?h:u>1.06&&g<.235&&g>.22&&Math.abs(y)>.32&&Math.abs(y)<.42?m:u>1.1&&g<.165&&g>.085&&Math.abs(y)<.3||u>1.07&&g<.21&&g>.09&&Math.abs(y)>.31&&Math.abs(y)<.43?h:u<-1.1&&g<.25||v<=2&&g<.12&&u<.48&&u>-.48?1381911:c});n.add(p);let d=ae(1908256,{roughness:.32,metalness:.4}),_=ae(13635612,{roughness:.35}),x=ae(921361,{roughness:.25,metalness:.3});Pt(n,.12,.012,.84,1.15,.058,0,d),Pt(n,.02,.012,.845,1.205,.058,0,_);for(let u of[-1,1]){Pt(n,.035,.075,.04,1.165,.125,.285*u,_),Pt(n,.01,.012,.08,1.165,.15,.37*u,Ce(16777215,16777215,.9)),Pt(n,.07,.008,.05,.62,n_(p,.62)+.002,.2*u,ae(328965));let g=_i(p,.42,.38,.004);We(n,[.4,.3,g*u],[.44,.45,g*u],.006,yu());{let v=_i(p,.27,.49);We(n,[.29,.495,(v-.01)*u],[.26,.53,(v+.04)*u],.008,x);let T=Pt(n,.07,.045,.06,.25,.535,(v+.06)*u,x);T.rotation.y=.25*u}let y=_i(p,0,.095,.004);Pt(n,.98,.01,.004,0,.095,y*u,_);for(let v of[.18,.31])ze(n,new Xt(.05,.05,.03,26),Ce(12849436,16721459,.55),-1.17,.41,v*u,0,0,Math.PI/2),ze(n,new en(.03,.008,8,20),Ce(15980246,16769248,.4),-1.188,.41,v*u,0,Math.PI/2,0);for(let v of[.27,.35])ze(n,new Xt(.034,.034,.08,18,1,!0),ae(10659500,{roughness:.22,metalness:.9,side:Pe}),-1.17,.13,v*u,0,0,Math.PI/2);We(n,[-.88,.515,.2*u],[-.93,.64,.2*u],.011,x),We(n,[-.93,.64,.2*u],[-.99,.628,.2*u],.011,x)}Pt(n,.04,.01,.6,-1.19,.15,0,_);let f=Pt(n,.19,.016,.92,-1,.616,0,x);f.rotation.z=.12;for(let u of[-1,1])Pt(n,.2,.07,.01,-1,.6,.46*u,x);Fi(n,-1.195,.27,-1);for(let u of[i,s])for(let g of[-1,1])Ui(n,u,.405*g,{r,tw:.13,rr:.128,rim:3422012,spokes:6,sw:.034,cal:16741376,cap:4474700,rough:.3,metal:.6});return n.userData={len:2.42,floatY:0,h:.78},n}function Su(){let n=new we,t=1.12,e=-1.11,i=.6,s=-.64,r=.168,a=[{x:1.12,yb:.11,ys:.17,yt:.19,wl:.16,ws:.15,wr:.12,wy:.5},{x:1.1,yb:.07,ys:.235,yt:.25,wl:.28,ws:.26,wr:.2,wy:.5},{x:1.03,yb:.06,ys:.29,yt:.285,wl:.39,ws:.37,wr:.26,wy:.5},{x:.86,yb:.065,ys:.345,yt:.33,wl:.45,ws:.432,wr:.32,wy:.55},{x:.6,yb:.07,ys:.395,yt:.37,wl:.462,ws:.445,wr:.33,wy:.6},{x:.32,yb:.075,ys:.41,yt:.4,wl:.448,ws:.428,wr:.35,wy:.6},{x:.18,yb:.08,ys:.42,yt:.43,wl:.446,ws:.424,wr:.36,wy:.6},{x:-.02,yb:.08,ys:.43,yt:.56,wl:.45,ws:.425,wr:.34,wy:.6},{x:-.25,yb:.08,ys:.44,yt:.646,wl:.462,ws:.436,wr:.34,wy:.6,dbl:.014},{x:-.5,yb:.085,ys:.47,yt:.615,wl:.49,ws:.466,wr:.33,wy:.62,dbl:.01},{x:-.72,yb:.09,ys:.505,yt:.55,wl:.502,ws:.478,wr:.34,wy:.62},{x:-.95,yb:.1,ys:.505,yt:.508,wl:.48,ws:.455,wr:.36,wy:.6},{x:-1.05,yb:.115,ys:.52,yt:.528,wl:.45,ws:.43,wr:.36,wy:.55},{x:-1.095,yb:.13,ys:.45,yt:.46,wl:.42,ws:.4,wr:.34,wy:.5},{x:-1.11,yb:.16,ys:.37,yt:.38,wl:.39,ws:.37,wr:.31,wy:.5}],o=[[.17,.43],[-.04,.565],[-.28,.625],[-.5,.6],[-.68,.535],[-.4,.47],[0,.44]],c=15856108,l=723725,h=6978188,m=460552,p=14081770,d=12587548,_=vo({xf:t,xr:e,keys:a,arches:[[i,r,.198],[s,r,.205]],rough:.25,metal:.12,colour:(g,y,v,T,A)=>T===0?m:T>=4&&T<=6&&ys([g,y],o)||T>=6&&g<.18&&g>-.08&&y>A.ys+.02||T>=6&&g<-.5&&g>-.8&&y>A.ys+.012?h:T>=5&&g<.19&&g>-.86&&y>A.ys+.01?l:g<-.9&&Math.abs(v)>.1&&y>.468&&y<.488?d:g>.99&&y<.215&&y>.07&&Math.abs(v)<.27||g>1&&y<.22&&y>.09&&Math.abs(v)>.29&&Math.abs(v)<.4||g<-1&&y<.27?m:T<=2&&y<.105&&g<.4&&g>-.42?1118483:c});n.add(_);let x=ae(1842463,{roughness:.3,metalness:.4}),f=ae(723725,{roughness:.25,metalness:.3});Pt(n,.12,.012,.8,1.07,.052,0,x);for(let g of[-1,1]){for(let[y,v]of[[.12,-.15],[.165,-.2]]){let T=_i(_,1,y,.005),A=Pt(n,.08,.008,.05,1,y,(T+.01)*g,x);A.rotation.z=v}{let y=_i(_,.16,.425);We(n,[.17,.43,(y-.01)*g],[.15,.46,(y+.025)*g],.008,f);let v=Pt(n,.07,.04,.05,.14,.465,(y+.04)*g,f);v.rotation.y=.25*g}ze(n,new Xt(.032,.032,.07,16,1,!0),ae(10659500,{roughness:.22,metalness:.9,side:Pe}),-1.1,.13,.26*g,0,0,Math.PI/2)}Pt(n,.02,.04,.05,-1.115,.16,0,Ce(12914715,16722474,.5));let u=Pt(n,.11,.012,.74,-1.04,.548,0,f);u.rotation.z=-.22,ze(n,new Xt(.03,.03,.012,20),ae(13898012,{roughness:.3}),-1.07,.47,0,0,0,Math.PI/2),vu(n,"S",.04,.04,-1.077,.47,0,-Math.PI/2,"#0b0b0d",null),Fi(n,-1.115,.33,-1),ze(n,new Xt(.026,.026,.01,20),ae(13898012,{roughness:.3}),1.105,.245,0,0,0,Math.PI/2+.5);for(let g of[-1,1]){let y=jl(_,.95,.29),v=new Ut(new cn(1,20,12),ae(2303789,{roughness:.1,metalness:.5}));v.scale.set(.15,.022,.07),v.position.set(.94,.315,(y-.085)*g),v.rotation.set(0,-.5*g,-.3),n.add(v);let T=new Ut(new cn(1,20,12),Ce(15134199,12570869,.3));T.scale.set(.115,.013,.04),T.position.set(.95,.322,(y-.08)*g),T.rotation.set(0,-.5*g,-.3),n.add(T)}for(let g of[i,s])for(let y of[-1,1])Ui(n,g,.4*y,{r,tw:.13,rr:.128,rim:1842464,spokes:10,sw:.022,cal:13636124,cap:2763308,rough:.3,metal:.6});return n.userData={len:2.24,floatY:0,h:.7},n}function bu(){let n=new we,t=1.2,e=-1.2,i=.77,s=-.585,r=.182,a=[{x:1.2,yb:.2,ys:.42,yt:.44,wl:.42,ws:.4,wr:.34,wy:.5},{x:1.185,yb:.15,ys:.5,yt:.515,wl:.445,ws:.43,wr:.37,wy:.5},{x:1.05,yb:.14,ys:.535,yt:.545,wl:.452,ws:.44,wr:.38,wy:.5},{x:.77,yb:.14,ys:.548,yt:.556,wl:.456,ws:.445,wr:.39,wy:.5},{x:.44,yb:.15,ys:.558,yt:.565,wl:.452,ws:.442,wr:.4,wy:.5,tg:0},{x:.33,yb:.15,ys:.56,yt:.69,wl:.452,ws:.442,wr:.4,wy:.5},{x:.21,yb:.15,ys:.562,yt:.862,wl:.452,ws:.442,wr:.4,wy:.5},{x:0,yb:.15,ys:.565,yt:.868,wl:.452,ws:.442,wr:.4,wy:.5},{x:-.585,yb:.15,ys:.57,yt:.868,wl:.456,ws:.445,wr:.4,wy:.5},{x:-1.1,yb:.16,ys:.572,yt:.866,wl:.452,ws:.442,wr:.4,wy:.5},{x:-1.185,yb:.17,ys:.57,yt:.855,wl:.44,ws:.43,wr:.39,wy:.5},{x:-1.2,yb:.2,ys:.52,yt:.8,wl:.42,ws:.41,wr:.37,wy:.5}],o=867108,c=723980,l=6978188,h=460551,m=[[[.2,.6],[.2,.83],[-.1,.83],[-.1,.6]],[[-.16,.6],[-.16,.83],[-.5,.83],[-.5,.6]],[[-.56,.6],[-.56,.83],[-.98,.83],[-.98,.6]]],p=g=>{let y=-1;for(let[v,T,A]of[[i,r,.235],[s,r,.235]]){let M=g-v;Math.abs(M)<A&&(y=Math.max(y,T+Math.sqrt(A*A-M*M)))}return y},d=vo({xf:t,xr:e,keys:a,arches:[[i,r,.212],[s,r,.212]],rough:.3,metal:.25,n:170,colour:(g,y,v,T,A)=>{if(T===0)return h;if(T>=4&&T<=6&&m.some(S=>ys([g,y],S))||T>=6&&g<.43&&g>.23&&y>A.ys+.02||T===6&&g<.05&&g>-.95&&y>.8)return l;if(T>=5&&g<.43&&y>A.ys+.01||g<-1.17&&y>.55&&Math.abs(v)>.3)return c;if(g<-1.17&&y>.5&&Math.abs(v)<.3)return l;let M=p(g);return T<=4&&M>0&&y<M+.03||T<=3&&y<.215||g>1.12&&y<.36||g>1.17&&y>.42&&y<.49&&Math.abs(v)<.25||g<-1.12&&y<.33||g>.38&&g<.44&&y>.36&&y<.52&&T<=4?c:o}});n.add(d);let _=ae(723980,{roughness:.4,metalness:.25}),x=ae(1579291,{roughness:.4,metalness:.5}),f=new $n({color:o,roughness:.3,metalness:.25,clearcoat:1,clearcoatRoughness:.06});for(let g of[-1,1]){ze(n,new Xt(.052,.052,.02,26),Ce(15265528,12899566,.35),1.19,.47,.33*g,0,0,Math.PI/2),ze(n,new en(.052,.008,8,26),Ce(16777215,16777215,.5),1.2,.47,.33*g,0,Math.PI/2,0);for(let y of[.75,.66])Pt(n,.012,.055,.05,-1.205,y,.4*g,Ce(11865880,16722474,.55));Pt(n,.012,.03,.03,-1.205,.6,.36*g,Ce(11865880,16722474,.5));{let y=_i(d,.36,.6);We(n,[.37,.6,(y-.01)*g],[.35,.63,(y+.04)*g],.009,_),Pt(n,.06,.065,.05,.34,.64,(y+.065)*g,_)}Pt(n,1.42,.026,.03,-.42,.935,.36*g,x);for(let y of[-1.08,-.6,-.1,.25])We(n,[y,.868,.4*g],[y,.935,.36*g],.012,x);Pt(n,.6,.03,.05,0,.175,.475*g,_)}for(let g=0;g<8;g++)Pt(n,.03,.02,.74,-1.1+g*.19,.94,0,x);Pt(n,.05,.05,.7,.27,.93,0,x);for(let g=0;g<4;g++)ze(n,new Xt(.028,.028,.02,16),Ce(16774877,16773312,.8),.297,.93,-.24+g*.16,0,0,Math.PI/2);let u=-(_i(d,-.78,.72)+.04);Pt(n,.36,.21,.08,-.78,.71,u,f),Pt(n,.36,.01,.085,-.78,.79,u,_),ze(n,new Xt(.21,.21,.1,32),f,-1.255,.6,0,0,0,Math.PI/2),ze(n,new en(.21,.024,10,32),_,-1.305,.6,0,0,Math.PI/2,0),Pt(n,.03,.05,.1,-1.22,.42,-.32,_),Pt(n,.03,.02,.46,1.205,.36,0,ae(2763822)),Fi(n,-1.205,.28,-1,.2);for(let g of[i,s])for(let y of[-1,1])Ui(n,g,.39*y,{r,tw:.16,rr:.12,rim:921360,steel:!0,cap:1842206,rough:.5,metal:.3});return n.userData={len:2.56,floatY:0,h:.96},n}function tc(n,t,e){let i=document.createElement("canvas");i.width=n,i.height=t,e(i.getContext("2d"),n,t);let s=new Jn(i);return s.colorSpace=Ie,s.anisotropy=4,s}function xs(n,t,e,i,s,r,a,o,c){let l=new Ut(new mn(e,i),ae(16777215,Object.assign({map:t,transparent:!0,roughness:.5},c||{})));return l.position.set(s,r,a),l.rotation.y=o||0,n.add(l),l}var Ql=()=>tc(256,180,(n,t,e)=>{n.fillStyle="#ff7a00",n.fillRect(0,0,t,e),n.lineWidth=14,n.strokeStyle="#111",n.strokeRect(7,7,t-14,e-14),n.fillRect(0,e/2-5,t,10),n.fillStyle="#111",n.font="800 64px Arial,sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText("30",t/2,e*.27),n.fillText("1202",t/2,e*.75)}),xu=()=>tc(256,256,(n,t,e)=>{n.clearRect(0,0,t,e),n.save(),n.translate(t/2,e/2),n.rotate(Math.PI/4),n.fillStyle="#d81e1e",n.fillRect(-88,-88,176,176),n.strokeStyle="#fff",n.lineWidth=7,n.strokeRect(-78,-78,156,156),n.restore(),n.fillStyle="#fff",n.beginPath(),n.moveTo(128,52),n.bezierCurveTo(170,92,160,120,150,128),n.bezierCurveTo(152,110,140,100,136,96),n.bezierCurveTo(140,120,118,128,122,150),n.bezierCurveTo(98,138,96,108,128,52),n.fill(),n.fillRect(92,156,72,8),n.font="800 40px Arial,sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText("3",128,200)}),i_=()=>tc(512,256,(n,t,e)=>{n.clearRect(0,0,t,e),n.lineWidth=20,n.setLineDash([46,26]),n.strokeStyle="#e0141c",n.beginPath(),n.ellipse(t/2,e/2,t/2-14,e/2-14,0,0,7),n.stroke()});function wu(){let n=new we,t=new we;t.scale.setScalar(.5),n.add(t);let e=ae(15659249,{roughness:.32,metalness:.15}),i=ae(1316118,{roughness:.6,metalness:.2}),s=ae(2764080,{roughness:.45,metalness:.4}),r=new $n({color:14673129,roughness:.26,metalness:.32,clearcoat:.8,clearcoatRoughness:.12}),a=ae(12173511,{roughness:.32,metalness:.35}),o=ae(2372159,{roughness:.08,metalness:.5}),c=yu(),l=4.75,h=2.55;for(let y of[-1,1])Pt(t,9,.28,.09,-.15,.86,.45*y,i);Pt(t,1.1,.45,.5,1.35,.82,-.95,a),Pt(t,.6,.42,.5,1.45,.82,.95,i);{let y=new _s(l-h,2,2.5,4,.16),v=new Ut(y,e);v.position.set((l+h)/2,2.08,0),t.add(v)}Pt(t,l-h-.1,.14,2.42,(l+h)/2-.05,3.13,0,e);for(let y of[-1,1])ze(t,new Be(.12,.09,.07),Ce(16753178,16747008,.5),l-.25,3.22,.75*y);ze(t,new Be(.12,.09,.07),Ce(16753178,16747008,.5),l-.25,3.22,0);let m=Pt(t,.05,.95,2.3,l+.03,2.5,0,o);m.rotation.z=.06,Pt(t,.04,.07,2.36,l+.06,2.02,0,i);for(let y of[-1,1]){Pt(t,1.25,.85,.04,l-.72,2.5,1.255*y,o),Pt(t,.12,.03,.03,l-.95,1.92,1.27*y,s);for(let[v,T]of[[.5,.55],[.85,.55]])Pt(t,T,.06,.32,l-.85,v,1.1*y,i);Pt(t,.75,.85,.1,l-.85,.72,1.2*y,i),We(t,[l-.15,2.7,1.22*y],[l+.05,2.75,1.5*y],.03,i),We(t,[l-.15,2,1.22*y],[l+.05,2.1,1.5*y],.03,i),Pt(t,.12,.62,.24,l+.08,2.42,1.55*y,i),Pt(t,.12,.28,.24,l+.08,1.95,1.55*y,i),Pt(t,.06,.22,.5,l+.13,1.02,.85*y,Ce(15331576,13490670,.45)),Pt(t,.06,.1,.14,l+.13,1.02,1.15*y,Ce(16753178,16747008,.4))}Pt(t,.05,.86,1.5,l+.05,1.62,0,s);for(let y=0;y<5;y++)Pt(t,.04,.05,1.48,l+.08,1.3+y*.16,0,c);{let y=new we;y.position.set(l+.12,1.66,0),y.rotation.y=Math.PI/2,t.add(y);let v=new Ut(new en(.2,.03,10,32),c);y.add(v);for(let T=0;T<3;T++){let A=Math.PI/2+T*Math.PI*2/3,M=new Ut(new Be(.035,.2,.03),c);M.position.set(Math.cos(A)*.1,Math.sin(A)*.1,0),M.rotation.z=A-Math.PI/2,y.add(M)}}Pt(t,.22,.42,2.46,l+.08,.82,0,ae(3817026,{roughness:.5,metalness:.3})),Fi(t,l+.2,.7,1,.52),xs(t,Ql(),.4,.3,l+.2,1.17,0,Math.PI/2);let p=2.3,d=-4.35,_=2.12,x=1.22,f=.86,u=p-d;{let y=new Ut(new Xt(1,1,u,48,1,!0),r);y.rotation.z=Math.PI/2,y.scale.set(f,1,x),y.position.set((p+d)/2,_,0),t.add(y);for(let[v,T]of[[p,1],[d,-1]]){let A=new Ut(new cn(1,40,16,0,Math.PI*2,0,Math.PI/2),r);A.rotation.z=-T*Math.PI/2,A.scale.set(f,.2,x),A.position.set(v,_,0),t.add(A)}for(let v of[p-.05,-.2,-2.3,d+.05]){let T=new Ut(new en(1,.022,8,48),a);T.rotation.y=Math.PI/2,T.scale.set(x,f,1),T.position.set(v,_,0),t.add(T)}}Pt(t,u,.2,1.1,(p+d)/2,1.18,0,i),Pt(t,u-.5,.05,.7,(p+d)/2,_+f+.02,0,a);for(let y=0;y<5;y++){let v=p-.55-y*1.25;ze(t,new Xt(.24,.26,.12,24),a,v,_+f+.1,0),ze(t,new Xt(.08,.08,.1,12),s,v,_+f+.2,.12)}for(let y of[-1,1]){Pt(t,u-.4,.04,.04,(p+d)/2,_+f+.5,.55*y,a);for(let v=0;v<8;v++){let T=p-.3-v*(u-.6)/7;We(t,[T,_+f,.5*y],[T,_+f+.5,.55*y],.022,a)}}for(let y of[.25,.65])We(t,[d-.32,.7,y],[d-.32,_+f+.5,y],.025,a),We(t,[d-.32,_+f+.5,y],[d+.1,_+f+.5,y],.025,a);for(let y=0;y<9;y++)We(t,[d-.32,.85+y*.32,.25],[d-.32,.85+y*.32,.65],.018,a);xs(t,i_(),x*2.02,f*2.02,d-.215,_,0,-Math.PI/2,{roughness:.3}),xs(t,xu(),.55,.55,d-.22,_+.05,-.5,-Math.PI/2),Pt(t,.12,.28,2.4,d-.08,.98,0,i);for(let y of[-1,1])Pt(t,.05,.14,.42,d-.15,.98,.9*y,Ce(12717848,16722474,.5)),Pt(t,.05,.14,.14,d-.15,.98,.56*y,Ce(16753178,16747008,.35));xs(t,Ql(),.4,.3,d-.15,1.35,.42,-Math.PI/2),Pt(t,.12,.12,2.2,d+.05,.52,0,a);for(let y of[-1,1])We(t,[d+.05,.52,.7*y],[d+.4,.86,.7*y],.04,i);Fi(t,d-.17,.98,-1,.52);for(let y of[-1,1]){for(let v of[1,1.12])We(t,[d+.2,v,1.18*y],[-2.6,v,1.18*y],.06,a,12);for(let v of[.62,.86])We(t,[1.5,v,1.2*y],[-.05,v,1.2*y],.03,a);Pt(t,.9,.62,.9,-3.35,.75,.7*y,a),Pt(t,.04,.48,.68,-3.35,.75,1.16*y,ae(9278619,{roughness:.35,metalness:.7}),0,0,0),xs(t,Ql(),.4,.3,.9,_-.15,(x+.005)*y,y>0?0:Math.PI),xs(t,xu(),.6,.6,1.45,_-.12,(x+.005)*y,y>0?0:Math.PI);for(let v of[-.6,-1.95])ze(t,new Xt(.6,.6,.6,24,1,!0,0,Math.PI),i,v,.52,.97*y,Math.PI/2,0,0);Pt(t,1.95,.04,.62,-1.27,1.12,.97*y,i),Pt(t,.04,.2,.12,1.9,1.35,(x-.15)*y,Ce(16753178,16747008,.35))}let g={r:.53,tw:.32,rr:.31,rim:13225683,steel:!0,cap:10133928,rough:.3,metal:.7};for(let y of[-1,1])Ui(t,3.9,1.08*y,g),Ui(t,-.6,.95*y,Object.assign({},g,{tw:.62})),Ui(t,-1.95,1*y,Object.assign({},g,{tw:.36}));return n.userData={len:4.75,floatY:0,h:1.72},n}function Tu(){let n=new we,t=1.25,e=-1.26,i=.775,s=-.7,r=.19,a=[{x:1.25,yb:.12,ys:.2,yt:.21,wl:.3,ws:.28,wr:.22,wy:.5},{x:1.22,yb:.08,ys:.27,yt:.285,wl:.42,ws:.4,wr:.3,wy:.5},{x:1.12,yb:.07,ys:.33,yt:.335,wl:.47,ws:.45,wr:.33,wy:.55},{x:.9,yb:.07,ys:.38,yt:.38,wl:.49,ws:.47,wr:.34,wy:.6},{x:.6,yb:.075,ys:.42,yt:.42,wl:.49,ws:.47,wr:.36,wy:.6},{x:.35,yb:.08,ys:.45,yt:.46,wl:.485,ws:.465,wr:.38,wy:.6},{x:.15,yb:.08,ys:.465,yt:.62,wl:.485,ws:.46,wr:.36,wy:.6},{x:-.1,yb:.08,ys:.475,yt:.7,wl:.49,ws:.462,wr:.37,wy:.6},{x:-.5,yb:.085,ys:.485,yt:.71,wl:.5,ws:.47,wr:.37,wy:.6},{x:-.85,yb:.09,ys:.495,yt:.695,wl:.505,ws:.476,wr:.36,wy:.6},{x:-1.06,yb:.1,ys:.5,yt:.655,wl:.495,ws:.466,wr:.35,wy:.58},{x:-1.18,yb:.12,ys:.49,yt:.585,wl:.47,ws:.445,wr:.34,wy:.55},{x:-1.24,yb:.15,ys:.45,yt:.5,wl:.44,ws:.42,wr:.32,wy:.5},{x:-1.26,yb:.18,ys:.38,yt:.42,wl:.41,ws:.39,wr:.3,wy:.5}],o=3877408,c=6253432,l=657931,h=11866138,m=1118740,p=[[.34,.475],[.06,.64],[-.4,.668],[-.9,.648],[-1.07,.6],[-1.04,.508],[-.5,.494],[0,.482]],d=vo({xf:t,xr:e,keys:a,arches:[[i,r,.215],[s,r,.22]],rough:.22,metal:.45,colour:(x,f,u,g,y)=>g===0?l:g>=4&&g<=6&&ys([x,f],p)?c:g>=4&&g<=6&&ys([x,f],[[.36,.468],[.05,.65],[-.42,.678],[-.92,.658],[-1.09,.6],[-1.06,.5],[-.5,.486],[0,.474]])?m:g>=6&&x<.35&&x>.07&&f>y.ys+.02||g>=7&&x<.02&&x>-.8&&Math.abs(u)<.27||g>=6&&x<-1.1&&f>.53?c:x<-1.17&&f>.41&&f<.47&&Math.abs(u)>.3&&Math.abs(u)<.46?h:x<-1.2&&f<.25||x>1.16&&f<.235&&f>.09&&Math.abs(u)<.2||x>1.12&&f<.24&&f>.09&&Math.abs(u)>.25&&Math.abs(u)<.43?l:g<=2&&f<.1&&x<.5&&x>-.45?m:o});n.add(d);let _=ae(723725,{roughness:.25,metalness:.3});for(let x of[-1,1]){let f=jl(d,1.08,.33),u=new Ut(new cn(1,20,12),ae(1974824,{roughness:.1,metalness:.5}));u.scale.set(.11,.03,.075),u.position.set(1.1,.335,(f-.08)*x),u.rotation.set(0,-.45*x,-.25),n.add(u);let g=new Ut(new cn(1,20,12),Ce(14213870,11058400,.2));g.scale.set(.07,.02,.045),g.position.set(1.115,.342,(f-.075)*x),g.rotation.set(0,-.45*x,-.25),n.add(g);{let y=_i(d,.33,.47);We(n,[.34,.47,(y-.01)*x],[.31,.5,(y+.03)*x],.008,_);let v=Pt(n,.075,.045,.055,.3,.505,(y+.05)*x,ae(o,{roughness:.25,metalness:.45}));v.rotation.y=.25*x}for(let y of[.2,.29])ze(n,new Xt(.026,.026,.07,16,1,!0),ae(10462120,{roughness:.22,metalness:.9,side:Pe}),-1.25,.13,y*x,0,0,Math.PI/2)}Pt(n,.08,.012,.42,-1.13,.66,0,_),Pt(n,.012,.022,.8,-1.247,.452,0,Ce(12587548,16722474,.6));for(let x of[-1,1])Pt(n,.012,.05,.12,-1.24,.445,.37*x,Ce(11865880,16722474,.5));Fi(n,-1.262,.32,-1),Fi(n,1.255,.17,1);for(let x of[i,s])for(let f of[-1,1])Ui(n,x,.44*f,{r,tw:.14,rr:.14,rim:1315862,spokes:10,split:!0,sw:.016,cal:13111836,cap:13213770,rough:.3,metal:.6});return n.userData={len:2.52,floatY:0,h:.72},n}var Jt=(n,t)=>new di(Object.assign({color:n,roughness:.55,metalness:.04},t||{})),s_=(n,t)=>Jt(n,Object.assign({roughness:.18,metalness:.1,transparent:!0,opacity:.55},t||{}));function xe(n,t,e,i,s,r,a,o,c){let l=new Ut(t,e);return l.position.set(i||0,s||0,r||0),(a||o||c)&&l.rotation.set(a||0,o||0,c||0),n.add(l),l}var le=(n,t,e,i,s,r,a,o,c,l,h)=>xe(n,new Be(t,e,i),o,s,r,a,c,l,h);function Bi(n,t,e,i,s){let r=new U(...t),a=new U(...e),o=a.clone().sub(r),c=o.length(),l=new Ut(new Xt(i,i,c,6),s);return l.position.copy(r).add(a).multiplyScalar(.5),l.quaternion.setFromUnitVectors(new U(0,1,0),o.normalize()),n.add(l),l}function Pu(n,t,e){let i=document.createElement("canvas");i.width=n,i.height=t,e(i.getContext("2d"),n,t);let s=new Jn(i);return s.colorSpace=Ie,s.anisotropy=4,s}function Lu(n,t,e,i,s,r,a,o,c,l,h){let m=Pu(512,Math.round(512*i/e),(d,_,x)=>{l&&(d.fillStyle=l,d.fillRect(0,0,_,x)),d.fillStyle=c,d.textAlign="center",d.textBaseline="middle",d.font=h||"700 "+Math.round(x*.62)+'px "Schibsted Grotesk",Arial,sans-serif',d.fillText(t,_/2,x/2+x*.03)}),p=new Ut(new mn(e,i),new Zn({map:m,transparent:!0,toneMapped:!1}));return p.position.set(s,r,a),p.rotation.y=o,n.add(p),p}function r_(){let n=new we,t=2.3,e=15988215,i=2051996,s=5092582,r=[[.012,0],[.1,.012],[.17,.04],[.21,.1],[.225,.2],[.23,.3],[.23,.6],[.2,.76],[.13,.9],[.05,1]],a=r.map(([S,I])=>new rt(S*1.2,(.5-I)*t)),o=Pu(512,1024,(S,I,R)=>{S.fillStyle="#f3f5f7",S.fillRect(0,0,I,R);let P=C=>(1-C)*R,O=C=>C*I;S.fillStyle="#1f4f9c",S.fillRect(0,P(.12),I,R*.12),S.fillStyle="#e8eef3",S.fillRect(0,P(.12),I,R*0),S.fillStyle="#4db4e6",S.fillRect(0,0,I,R*.16);let H=(C,z)=>{let W=(V,et,F,X,q,ft,wt)=>{S.fillStyle=V,S.beginPath(),S.moveTo(O(C+z*et),P(X)),S.lineTo(O(C+z*(et+ft)),P(X)),S.lineTo(O(C+z*(F+wt)),P(q)),S.lineTo(O(C+z*F),P(q)),S.closePath(),S.fill()};W("#1f4f9c",.06,.015,.26,.84,.045,.075),W("#4db4e6",.115,.095,.3,.84,.014,.022),W("#4db4e6",.04,-.01,.44,.84,.012,.016)};for(let C of[-1,0,1])S.save(),S.translate(C*I,0),H(.5,1),H(0,1),S.restore();S.fillStyle="#22313c";for(let C=0;C<5;C++){let z=.3+C*.074;for(let W of[.5,0,1]){let V=O(W+.045);S.fillRect(V-I*.012,P(z+.05),I*.024,R*.05)}}for(let C of[.5,0,1])S.fillRect(O(C+.075)-I*.012,P(.22),I*.024,R*.07)}),c=new Ut(new $s(a,28),Jt(16777215,{map:o,roughness:.4}));c.rotation.z=-Math.PI/2,c.scale.set(1,1,1),n.add(c);let l=Jt(e,{roughness:.45}),h=Jt(i),m=Jt(s),p=Jt(1909803,{roughness:.35});le(n,.4,.04,1.8,.12,.31,0,l),le(n,.4,.045,.15,.12,.311,.9,h),le(n,.4,.045,.15,.12,.311,-.9,h),le(n,.05,.05,1.8,-.065,.31,0,m);for(let S of[-1,1])Bi(n,[.26,-.2,.15*S],[.18,.3,.68*S],.016,l),Bi(n,[.12,-.2,.15*S],[.1,.3,.62*S],.012,l);le(n,.15,.08,.34,.58,.255,0,p,0,0,-.6),le(n,.56,.07,.42,.18,.3,0,l);let d=new ln;d.moveTo(0,0),d.lineTo(.34,0),d.lineTo(.26,.62),d.lineTo(.12,.66),d.closePath();let _=new pn(d,{depth:.035,bevelEnabled:!1}),x=new Ut(_,l);x.position.set(-.78,.06,-.0175),x.scale.set(-1,1,1),n.add(x);let f=new ln;f.moveTo(0,0),f.lineTo(.2,0),f.lineTo(.14,.1),f.lineTo(.04,.1),f.closePath();let u=new Ut(new pn(f,{depth:.04,bevelEnabled:!1}),h);u.position.set(-.79,.62,-.02),u.scale.set(-1.45,1.6,1),u.position.y=.51,n.add(u);let g=new ln;g.moveTo(0,0),g.lineTo(.3,0),g.lineTo(.26,.2),g.lineTo(.04,.2),g.closePath();let y=new Ut(new pn(g,{depth:.04,bevelEnabled:!1}),m);y.position.set(-.78,.06,-.02),y.scale.set(-1,1,1),n.add(y),le(n,.3,.025,.8,-.95,.125,0,l),le(n,.3,.03,.12,-.95,.125,.4,m),le(n,.3,.03,.12,-.95,.125,-.4,m),le(n,.04,.12,.02,-.86,-.09,0,l);let v=xe(n,new Hs(.07,.2,14),h,t/2+.09,0,0,0,0,-Math.PI/2),T=new we;T.position.set(t/2+.03,0,0),n.add(T);for(let S=0;S<3;S++){let I=le(T,.01,.4,.05,0,0,0,p);I.geometry.translate(0,.18,0),I.rotation.x=S*Math.PI*2/3+.4}for(let S of[-1,1]){let I=new Ut(new Vs(.11,1.5,8,16),Jt(e,{roughness:.35}));I.rotation.z=Math.PI/2,I.scale.set(1,1,.82),I.position.set(.08,-.62,.46*S),n.add(I),le(n,1.2,.02,.012,0,-.6,.46*S+.098*S,h),le(n,.9,.012,.012,.1,-.64,.46*S+.098*S,m),Bi(n,[.38,-.24,.15*S],[.36,-.56,.4*S],.018,l),Bi(n,[-.14,-.24,.14*S],[-.16,-.56,.4*S],.018,l),xe(n,new Xt(.05,.05,.03,12),p,.78,-.66,.46*S+.11*S,Math.PI/2,0,0);let R=new Ut(new Xt(.012,.012,.86,6),l);R.rotation.x=Math.PI/2,R.position.set(.36,-.5,0),n.add(R)}let M=(S=>{let I=.5-S/t,R=.2;for(let P=0;P<r.length-1;P++)if(I>=r[P][1]&&I<=r[P+1][1]){let O=(I-r[P][1])/(r[P+1][1]-r[P][1]);R=r[P][0]+(r[P+1][0]-r[P][0])*O}return R})(-.58)*1.2+.004;for(let S of[-1,1])Lu(n,"G-LAUD",.46,.1,-.58,-0,M*S,S>0?0:Math.PI,"#1f4f9c",null);return n.userData={len:t,floatY:-.76,h:1.5},n}function a_(n,t,e,i){let s=new ln;return s.moveTo(-n,-t*i),s.lineTo(n*.45,-t),s.quadraticCurveTo(n*.82,-t*.85,n*1+e,0),s.quadraticCurveTo(n*.82,t*.85,n*.45,t),s.lineTo(-n,t*i),s.quadraticCurveTo(-n-.06,0,-n,-t*i),s}function sc(n,t,e,i){let s=n,r=new ln(s.getPoints(24)),a=new ui(s.getPoints(24).map(c=>new rt(c.x*i,c.y*i)));r.holes.push(a);let o=new pn(r,{depth:t,bevelEnabled:!1});return o.rotateX(-Math.PI/2),new Ut(o,e)}function o_(){let n=new we,t=13183263,e=10624791,i=13350822,s=a_(1.1,.34,.12,.7),r=new Ut((()=>{let v=new pn(s,{depth:.13,bevelEnabled:!1});return v.rotateX(-Math.PI/2),v})(),Jt(i,{roughness:.8}));r.scale.set(.965,1,.9),n.add(r);let a=new Ut((()=>{let v=new pn(s,{depth:.27,bevelEnabled:!0,bevelSize:.012,bevelThickness:.012,bevelSegments:2});return v.rotateX(-Math.PI/2),v})(),[Jt(9382432,{roughness:.7}),Jt(t,{roughness:.38})]);a.position.y=.13,n.add(a);let o=.405,c=sc(s,.07,Jt(e),.955);c.position.y=o,n.add(c);let l=Jt(t,{roughness:.4}),h=Jt(15856110,{roughness:.5}),m=Jt(2040874),p=Jt(2634811,{roughness:.2});le(n,.88,.24,.5,.23,o+.12,0,l),le(n,.9,.02,.52,.23,o+.25,0,Jt(e));for(let v=0;v<4;v++)le(n,.07,.07,.01,.66+0,o+.17,-.17+v*.115,p);for(let v=0;v<5;v++)for(let T of[-1,1])le(n,.06,.06,.01,.17+v*.11,o+.17,.255*T,p);le(n,.5,.2,.4,-.62,o+.1,0,h),le(n,.52,.025,.42,-.62,o+.21,0,l),le(n,.5,.035,.405,-.62,o+.04,0,l);for(let v=0;v<3;v++)for(let T of[-1,1])le(n,.07,.06,.01,-.78+v*.14,o+.12,.202*T,p);xe(n,new Xt(.012,.012,.7,6),h,-.98,o+.35,0);let d=.02,_=o+.25,x=1.3,f=.17,u=.085,g=[[1,1],[1,-1],[-1,1],[-1,-1]].map(([v,T])=>[[d+v*f,_,T*f],[d+v*u,x-.18,T*u]]);for(let[v,T]of g)Bi(n,v,T,.016,l);for(let v of[.3,.6]){let T=_+(x-.18-_)*v,A=f+(u-f)*v,M=_+(x-.18-_)*(v+.28),S=f+(u-f)*(v+.28);for(let[I,R,P,O]of[[1,1,1,-1],[1,-1,-1,-1],[-1,-1,-1,1],[-1,1,1,1]])Bi(n,[d+I*A,T,R*A],[d+P*S,M,O*S],.008,l),Bi(n,[d+P*A,T,O*A],[d+I*S,M,R*S],.008,l)}le(n,.3,.1,.3,d,x-.2,0,l);let y=(v,T)=>{let A=new ln;A.moveTo(-T,-T),A.lineTo(T,-T),A.lineTo(T,T),A.lineTo(-T,T),A.closePath();let M=sc(A,.07,l,.88);return M.position.set(d,v,0),n.add(M),M};y(x-.15,.19),xe(n,new Xt(.115,.115,.3,18,1,!0),s_(12572382,{side:Pe,opacity:.5}),d,x+0,0),xe(n,new cn(.045,14,10),Jt(16773296,{emissive:16766330,emissiveIntensity:.6}),d,x,0),xe(n,new Xt(.018,.026,.115,10),l,d,x-.0925,0);for(let v of[0,1,2,3])xe(n,new Xt(.007,.007,.3,5),l,d+Math.cos(v*Math.PI/2+.78)*.115,x,Math.sin(v*Math.PI/2+.78)*.115);xe(n,new Xt(.14,.14,.025,20),l,d,x+.16,0),y(x+.17,.14),xe(n,new Xt(.09,.13,.07,16),l,d,x+.21,0),xe(n,new Xt(.006,.006,.2,5),l,d,x+.36,0);for(let v of[-1,1]){let T=xe(n,new Xt(.03,.03,.02,14),m,1,.27,.173*v,Math.PI/2,0,0);T.rotation.order="YXZ",T.rotation.y=v*.544}xe(n,new Xt(.04,.04,.03,14),m,1.2,.26,0,0,0,Math.PI/2);for(let v of[.5,-.2])for(let T of[-1,1])xe(n,new en(.035,.016,6,12),m,v,.2,.335*T,Math.PI/2,0,0);return n.userData={len:2.5,floatY:0,h:1.9},n}function l_(){let n=new we,t=3159613,e=11872802,i=15525850,s=new ln;s.moveTo(-1.12,-.3),s.lineTo(.92,-.3),s.quadraticCurveTo(1.12,-.28,1.16,-.1),s.lineTo(1.16,.1),s.quadraticCurveTo(1.12,.28,.92,.3),s.lineTo(-1.12,.3),s.closePath();let r=(u,g)=>{let y=new pn(s,{depth:u,bevelEnabled:!!g,bevelSize:.012,bevelThickness:.012,bevelSegments:2});return y.rotateX(-Math.PI/2),y},a=new Ut(r(.05),Jt(e,{roughness:.5}));a.scale.set(.985,1,.97),n.add(a);let o=new Ut(r(.36,1),[Jt(5857899,{roughness:.6}),Jt(t,{roughness:.32,metalness:.18})]);o.position.y=.05,n.add(o);let c=.42,l=Jt(14275521,{roughness:.3}),h=Jt(1843494);for(let u of[-1,1])[-.78,-.52,-.26,0,.24].forEach(g=>{xe(n,new Xt(.052,.052,.012,16),h,g,.27,.322*u,Math.PI/2,0,0),xe(n,new Xt(.04,.04,.016,16),l,g,.27,.33*u,Math.PI/2,0,0)}),[.5,.72].forEach(g=>{let y=xe(n,new Xt(.065,.065,.012,18),h,g,.26,.322*u,Math.PI/2,0,0);xe(n,new Xt(.052,.052,.016,18),l,g,.26,.33*u,Math.PI/2,0,0)});for(let u of[-1,1])Lu(n,"MATRIX ISLAND",.5,.07,.68,.36,.325*u,u>0?0:Math.PI,"#f2f0e8","#242a30",'500 36px "Schibsted Grotesk",Arial,sans-serif');let m=sc(s,.05,Jt(1975079),.965);m.position.y=c-.01,n.add(m);let p=le(n,2.2,.012,.56,-0,c-.005,0,Jt(6976121,{roughness:.8}));for(let u=0;u<14;u++)for(let g of[-1,1]){let y=-1.05+u*.16;le(n,.01,.09,.01,y,c+.05,.285*g,Jt(1975079))}let d=Jt(i,{roughness:.6}),_=Jt(3425359,{roughness:.1,metalness:.3}),x=Jt(16052970);le(n,1,.3,.5,-.5,c+.15,0,d);for(let u of[-1,1])for(let g=0;g<5;g++)le(n,.14,.19,.012,-.9+g*.19,c+.17,.252*u,_);for(let u=0;u<2;u++)le(n,.012,.19,.14,0,c+.17,-.15+u*.3,_);le(n,1.12,.03,.62,-.5,c+.315,0,Jt(2501425,{roughness:.5})),le(n,.26,.2,.38,-1.04,c+.1,0,d),le(n,.3,.025,.42,-1.04,c+.21,0,Jt(2501425)),xe(n,new Xt(.028,.034,.56,10),Jt(1382427),.62,c+.28,0),xe(n,new cn(.07,16,8,0,Math.PI*2,0,Math.PI/2),Jt(e),.62,c+.515,0).scale.set(1.4,.7,1),xe(n,new cn(.04,12,10),Jt(12096330,{roughness:.25,metalness:.6}),.66,c+.36,0);for(let u=0;u<3;u++)xe(n,new Xt(.03,.025,.05,10),Jt(e),.4+u*.06,c+.03,.1-u*.02);return xe(n,new en(.038,.014,8,14),Jt(15099679),-.1,c+.05,.288,0,0,0),le(n,.1,.04,.05,1,c+.02,-.16,Jt(2106666)),n.userData={len:2.3,floatY:0,h:1.05},n}var ec=3,c_=2.15,nc=2;function Au(n){return new gn({transparent:!0,depthWrite:!1,side:n,uniforms:{},vertexShader:"varying vec3 vN;varying vec3 vV;varying vec3 vP;void main(){vec4 mv=modelViewMatrix*vec4(position,1.);vN=normalize(normalMatrix*normal);vV=-mv.xyz;vP=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*mv;}",fragmentShader:"varying vec3 vN;varying vec3 vV;varying vec3 vP;void main(){vec3 n=normalize(vN);if(!gl_FrontFacing)n=-n;vec3 v=normalize(vV);float f=pow(1.-clamp(abs(dot(n,v)),0.,1.),2.2);vec3 L=normalize(vec3(-.5,.8,.6));float sp=pow(max(dot(reflect(-L,n),v),0.),38.);float a=.02+.34*f+.5*sp;gl_FragColor=vec4(mix(vec3(.86,.93,.98),vec3(1.),sp+f*.4),a);}"})}var Du,Nu,Uu=[];function Mo(n,t,e){let i=document.createElement("canvas");i.width=n,i.height=t;let s=new Jn(i);s.colorSpace=Ie,s.anisotropy=4;let r=()=>{let a=i.getContext("2d");a.clearRect(0,0,n,t),e(a,n,t),s.needsUpdate=!0};return r(),Uu.push(r),s}document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>Uu.forEach(n=>n()));var En=n=>"italic 900 "+n+'px Impact,"Arial Black","Schibsted Grotesk",Arial,sans-serif',un=(n,t)=>(t||600)+" "+n+'px "IBM Plex Mono","Geist Mono",ui-monospace,Menlo,monospace',Bn="#F4EEDF",Oi="#FFD84A",_r="#FF5A1F",ke="#16130F";function Fu(n,t,e,i,s,r,a,o,c){n.beginPath(),n.moveTo(t+r,e),n.lineTo(t+i+r,e),n.lineTo(t+i,e+s),n.lineTo(t,e+s),n.closePath(),a&&(n.fillStyle=a,n.fill()),o&&(n.lineWidth=c||4,n.strokeStyle=o,n.lineJoin="round",n.stroke())}function Eu(n,t,e,i,s,r,a){n.beginPath();for(let o=0;o<r*2;o++){let c=o%2?s:i,l=a+o*Math.PI/r;n[o?"lineTo":"moveTo"](t+Math.cos(l)*c,e+Math.sin(l)*c)}n.closePath()}function So(n,t,e,i,s,r){n.beginPath(),n.moveTo(t+r,e),n.arcTo(t+i,e,t+i,e+s,r),n.arcTo(t+i,e+s,t,e+s,r),n.arcTo(t,e+s,t,e,r),n.arcTo(t,e,t+i,e,r),n.closePath()}function Ou(n,t,e,i,s,r,a){n.fillStyle=a||"#fff",n.fillRect(t,e,i,s),n.fillStyle=ke;let o=r*9301+49297,c=t+i*.06,l=t+i*.94;for(;c<l;){o=(o*9301+49297)%233280;let h=1+Math.floor(o/233280*4);if(c+h>l)break;n.fillRect(c,e+s*.1,h,s*.8),c+=h+1+Math.floor((o>>3)%3)}}function Bu(n,t,e,i){n.save(),n.translate(t,e),n.scale(i,i),Fu(n,0,0,150,58,14,_r,ke,5),n.fillStyle=Bn,n.font=En(46),n.textBaseline="middle",n.textAlign="left",n.fillText("ASR",14,31),n.restore()}function bo(n,t,e,i,s,r,a){n.save(),n.beginPath(),n.rect(0,r,t,a-r),n.clip(),n.globalAlpha=s,n.fillStyle=i;let o=(a-r)*.55;for(let c=-2;c<t/120+4;c++){let l=c*120;n.beginPath(),n.moveTo(l+o,r),n.lineTo(l+o+46,r),n.lineTo(l+46,a),n.lineTo(l,a),n.closePath(),n.fill()}n.restore()}function h_(n,t,e,i){n.fillStyle=i.c1,n.fillRect(0,0,t,e),bo(n,t,e,i.c2,.5,96,e),n.fillStyle=i.c2,n.fillRect(0,0,t,98),n.fillStyle=_r,n.fillRect(0,92,t,6),Bu(n,34,18,1),n.fillStyle=Bn,n.font=un(27,600),n.textBaseline="middle",n.textAlign="left","letterSpacing"in n&&(n.letterSpacing="7px"),n.fillText("COLLECTION",212,46),"letterSpacing"in n&&(n.letterSpacing="0px"),n.textAlign="right",n.fillStyle="rgba(244,238,223,.8)",n.font=un(22,500),n.fillText("SERIES 0"+i.n+"/03",t-120,46),n.beginPath(),n.arc(t-60,48,34,0,7),n.fillStyle=Oi,n.fill(),n.lineWidth=4,n.strokeStyle=ke,n.stroke(),n.fillStyle=ke,n.textAlign="center",n.font=En(25),n.fillText("8+",t-60,49);let s=112;for(n.font=En(s);n.measureText(i.name).width>t-90&&s>40;)s-=2,n.font=En(s);n.textAlign="left",n.textBaseline="alphabetic",n.lineJoin="round",n.lineWidth=16,n.strokeStyle=ke,n.strokeText(i.name,57,191),n.fillStyle=ke,n.fillText(i.name,57,191),n.lineWidth=14,n.strokeStyle=ke,n.strokeText(i.name,50,184),n.fillStyle=Bn,n.fillText(i.name,50,184),n.fillStyle=Oi,n.font=un(23,700),"letterSpacing"in n&&(n.letterSpacing="4px"),n.fillText(i.tag,54,216),"letterSpacing"in n&&(n.letterSpacing="0px"),n.save(),So(n,36,232,t-72,566,26),n.fillStyle=Bn,n.fill(),n.clip();let r=t/2,a=600;for(let c=0;c<32;c++){n.beginPath(),n.moveTo(r,a);let l=c*Math.PI*2/32,h=l+Math.PI/32;n.lineTo(r+Math.cos(l)*1400,a+Math.sin(l)*1400),n.lineTo(r+Math.cos(h)*1400,a+Math.sin(h)*1400),n.closePath(),n.fillStyle=i.c1,n.globalAlpha=.16,n.fill()}n.globalAlpha=1;let o=n.createRadialGradient(r,a,10,r,a,520);o.addColorStop(0,"rgba(255,255,255,.95)"),o.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=o,n.fillRect(0,232,t,566),n.fillStyle=i.c1,n.globalAlpha=.9,n.fillRect(0,770,t,40),n.globalAlpha=1,bo(n,t,e,Bn,.5,770,810),n.restore(),So(n,36,232,t-72,566,26),n.lineWidth=9,n.strokeStyle=ke,n.stroke(),n.save(),So(n,36,232,t-72,566,26),n.clip(),n.fillStyle="rgba(255,255,255,.14)",n.beginPath(),n.moveTo(120,232),n.lineTo(300,232),n.lineTo(60,798),n.lineTo(36,798),n.lineTo(36,420),n.closePath(),n.fill(),n.restore(),n.save(),n.translate(46,250),n.rotate(-.05),Fu(n,0,0,236,86,18,ke,Oi,6),n.fillStyle=Bn,n.textAlign="left",n.textBaseline="alphabetic",n.font=un(21,700),"letterSpacing"in n&&(n.letterSpacing="5px"),n.fillText("SCALE",34,32),"letterSpacing"in n&&(n.letterSpacing="0px"),n.fillStyle=Oi,n.font=En(52),n.fillText("1:64",34,76),n.restore(),n.save(),n.translate(t-148,330),n.rotate(-.2),Eu(n,0,0,122,92,18,0),n.fillStyle=Oi,n.fill(),n.lineWidth=8,n.strokeStyle=ke,n.lineJoin="round",n.stroke(),Eu(n,0,0,100,78,18,.1),n.lineWidth=3,n.strokeStyle=_r,n.stroke(),n.fillStyle=ke,n.textAlign="center",n.textBaseline="middle",n.font=un(19,700),n.fillText("SERIES",0,-34),n.font=En(44),n.fillText(i.burst||"1 OF 3",0,6),n.font=un(17,700),n.fillText("ASR",0,44),n.restore(),n.fillStyle="rgba(244,238,223,.8)",n.font=un(15,500),n.textAlign="left",n.textBaseline="middle",n.fillText("ASR COLLECTION \xB7 DISPLAY MODEL \xB7 NOT FOR RESALE",46,e-14)}function u_(n,t,e,i){n.fillStyle=i.c1,n.fillRect(0,0,t,e),bo(n,t,e,i.c2,.5,70,e),n.fillStyle=i.c2,n.fillRect(0,0,t,74),n.fillStyle=_r,n.fillRect(0,70,t,5),Bu(n,26,12,.72),n.fillStyle=Bn,n.textBaseline="middle",n.textAlign="right",n.font=un(17,500),n.fillText("SERIES 0"+i.n+"/03",t-26,38),So(n,28,100,t-56,e-170,16),n.fillStyle=Bn,n.fill(),n.lineWidth=7,n.strokeStyle=ke,n.stroke(),n.fillStyle=ke,n.textAlign="left",n.textBaseline="alphabetic";let s=76;for(n.font=En(s);n.measureText(i.name).width>t-110&&s>30;)s-=2,n.font=En(s);n.fillText(i.name,52,190),n.fillStyle=i.c1,n.font=un(17,700),n.fillText(i.tag,54,222),n.fillStyle=ke,n.font=un(16,500),i.copy.forEach((a,o)=>n.fillText(a,54,268+o*26)),Ou(n,52,e-230,210,70,i.n*7+3+(i.s||0)*31,"#fff"),n.fillStyle=ke,n.font=un(12,500),n.fillText("0 93022 00"+i.n+" 1",60,e-148),n.beginPath(),n.arc(t-90,e-190,38,0,7),n.fillStyle=Oi,n.fill(),n.lineWidth=4,n.strokeStyle=ke,n.stroke(),n.fillStyle=ke,n.textAlign="center",n.textBaseline="middle",n.font=En(28),n.fillText("8+",t-90,e-190),n.fillStyle=Bn,n.font=un(13,500),n.textAlign="left",n.fillText("ASR COLLECTION \xB7 TOY VERSION OF A REAL ASSET \xB7 DISPLAY ONLY",30,e-30)}function Ru(n,t,e,i,s){n.fillStyle="#1c1915",n.fillRect(0,0,t,e),n.fillStyle=_r,n.fillRect(0,0,t,4);let r=e*1.5;bo(n,t,e,i.c1,1,4,e),n.fillStyle="#1c1915",n.fillRect(t*.07,4,t*.86,e),n.textBaseline="middle",n.fillStyle=Bn,n.textAlign="left",n.font=En(Math.round(e*.5)),n.fillText("ASR",t*.09,e*.56),n.font=un(Math.round(e*.3),600),"letterSpacing"in n&&(n.letterSpacing="4px"),n.fillText(s?"COLLECTION \xB7 "+i.name.toUpperCase()+" \xB7 SCALE 1:64":"SERIES 0"+i.n+"/03",t*.09+e*1.7,e*.56),"letterSpacing"in n&&(n.letterSpacing="0px"),Ou(n,t*.93-e*2.1,e*.2,e*2.1,e*.64,i.n*11+(s?1:2)+(i.s||0)*37,"#F4EEDF"),n.beginPath(),n.arc(t*.93-e*2.1-e*.5,e*.52,e*.3,0,7),n.fillStyle=Oi,n.fill(),n.fillStyle=ke,n.textAlign="center",n.font=En(Math.round(e*.3)),n.fillText("8+",t*.93-e*2.1-e*.5,e*.54)}function d_(){let i=new ln;i.moveTo(-.92/2,0),i.lineTo(-.92/2,.34-.13),i.quadraticCurveTo(-.92/2,.34,-.92/2+.13,.34),i.lineTo(.92/2-.13,.34),i.quadraticCurveTo(.92/2,.34,.92/2,.34-.13),i.lineTo(.92/2,0),i.lineTo(-.92/2,0);let s=new ui;return s.absarc(0,.34*.55,.085,0,Math.PI*2,!0),i.holes.push(s),new pn(i,{depth:.06,bevelEnabled:!1,curveSegments:14})}var ic=3,gr=2.45,Cu=.16;function xi(n,t,e,i,s,r){let a=new we,o=new we;a.add(o),r=Object.assign({n:n+1,name:t.toUpperCase()},r);{let M=Mo(1536,80,(O,H,C)=>Ru(O,H,C,r,!0)),S=Mo(1024,80,(O,H,C)=>Ru(O,H,C,r,!1)),I=Jt(1841429,{roughness:.45,metalness:.2}),R=Jt(16777215,{map:M,roughness:.4}),P=Jt(16777215,{map:S,roughness:.4});le(o,ec+.14,.16,nc+.14,0,.08,0,[P,P,I,I,R,R])}le(o,ec-.2,.1,nc-.2,0,.23,0,Jt(i,{roughness:.25,metalness:.1,transparent:!0,opacity:.92}));let c=-nc/2+.02,l=Cu+gr/2,h=Mo(1024,836,(M,S,I)=>h_(M,S,I,r)),m=Mo(768,627,(M,S,I)=>u_(M,S,I,r)),p=M=>new $n(Object.assign({color:14606046,roughness:.42,metalness:0,clearcoat:.9,clearcoatRoughness:.16},M));xe(o,new Be(ic,gr,.06),Jt(15327176,{roughness:.8}),0,l,c+.03),xe(o,new mn(ic,gr),p({map:h}),0,l,c+.061),xe(o,new mn(ic,gr),p({map:m}),0,l,c-.001,0,Math.PI,0);{let M=d_(),S=p({color:new Wt(r.c2).multiplyScalar(.72)}),I=new Ut(M,S);I.position.set(0,Cu+gr-.01,c),o.add(I)}let d=e,_=Math.min((ec-.5)/d.userData.len,1.55/d.userData.h,1);d.scale.setScalar(_),d.position.y=s*_+.28-d.userData.floatY*_+.02,o.add(d);let x=2.84,f=1.78,u=1.94,g=.2+f/2,y=c+.06,v=new _s(x,f,u,5,.3);v.translate(0,g,y+u/2-.02);let T=new Ut(v,Du);T.renderOrder=2;let A=new Ut(v,Nu);A.renderOrder=3,o.add(T,A);{let M=new Zn({color:15923194,transparent:!0,opacity:.5,depthWrite:!1}),S=.07,I=x+.12,R=f+.12;for(let P of[-1,1]){let O=le(o,I,S,.014,0,g+P*(R/2-S/2),y+.007,M);O.renderOrder=3}for(let P of[-1,1]){let O=le(o,S,R-S*2,.014,P*(I/2-S/2),g,y+.007,M);O.renderOrder=3}}return{slot:a,g:o,toy:d}}var rc=null,Iu=[()=>[xi(0,"Lightship 93",o_(),8362639,0,{c1:"#cf2b1f",c2:"#7e150e",tag:"LIGHT VESSEL 93 \xB7 TRINITY HOUSE",copy:["Toy version of the real 1938","steel lightship Light Vessel 93.","Scale 1:64. Display model.","Keep in pack to preserve finish."]}),xi(1,"208 Amphibian",rc=r_(),6132397,-0,{c1:"#1f6fd6",c2:"#123f85",tag:"G-LAUD \xB7 CESSNA 208 CARAVAN",copy:["Toy version of the real amphibious","Cessna 208 Caravan seaplane, G-LAUD.","Scale 1:64. Display model.","Keep in pack to preserve finish."]}),xi(2,"Matrix Island",l_(),6257267,0,{c1:"#2f6a58",c2:"#16302a",tag:"HOUSEBOAT \xB7 ST KATHARINE DOCKS",copy:["Toy version of the real Thames","barge houseboat Matrix Island.","Scale 1:64. Display model.","Keep in pack to preserve finish."]})],()=>[xi(0,"GT-R Nismo",Mu(),4014406,0,{s:2,burst:"SET 2",c1:"#c3141f",c2:"#141416",tag:"2016 \xB7 NISSAN GT-R NISMO",copy:["Toy version of the real 2016","Nissan GT-R Nismo in gloss black.","Scale 1:64. Display model.","Keep in pack to preserve finish."]}),xi(1,"Antos Tanker",wu(),4014406,0,{s:2,burst:"SET 2",c1:"#ff7a00",c2:"#1a1d21",tag:"2020 \xB7 MERCEDES-BENZ ANTOS 2530",copy:["Toy version of the real 2020","Mercedes-Benz Antos fuel tanker.","Scale 1:64. Display model.","Keep in pack to preserve finish."]}),xi(2,"Supra",Su(),4014406,0,{s:2,burst:"SET 2",c1:"#e0461c",c2:"#2a1206",tag:"2019 \xB7 TOYOTA GR SUPRA",copy:["Toy version of the real 2019","Toyota GR Supra, white, black roof.","Scale 1:64. Display model.","Keep in pack to preserve finish."]})],()=>[xi(0,"Defender 130",bu(),4014406,0,{s:3,burst:"SET 3",c1:"#1f5a3a",c2:"#0d2418",tag:"2022 \xB7 LAND ROVER DEFENDER 130",copy:["Toy version of the real 2022","Defender 130 in British racing green.","Scale 1:64. Display model.","Keep in pack to preserve finish."]}),xi(1,"Panamera",Tu(),4014406,0,{s:3,burst:"SET 3",c1:"#8a5a2b",c2:"#22160d",tag:"2022 \xB7 PORSCHE PANAMERA GTS ST",copy:["Toy version of the real 2022","Porsche Panamera GTS Sport Turismo.","Scale 1:64. Display model.","Keep in pack to preserve finish."]})]];function f_(n,t){t=t||{},n=n&&n.nodeType===1?n.classList.contains("coll-stage")?[n]:[].slice.call(n.querySelectorAll(".coll-stage")):[].slice.call(n||[]);let e=matchMedia("(max-width:700px)").matches||matchMedia("(pointer:coarse)").matches;Du=Au(He),Nu=Au(Nn);let i=[];if(n.forEach((F,X)=>{if(!Iu[X])return;let q=F.querySelector("canvas");if(!q)return;let ft;try{ft=new _o({canvas:q,antialias:!0,alpha:!0,powerPreference:"low-power"})}catch{q.hidden=!0;return}ft.setPixelRatio(Math.min(devicePixelRatio||1,e?1.75:2)),ft.setClearColor(0,0),q.hidden=!1;let wt=new Fs;wt.add(new tr(16777215,10465446,1.15));let Z=new cs(16774370,2.1);Z.position.set(-3,6,5),wt.add(Z);let at=new cs(13625087,.8);at.position.set(4,3,-5),wt.add(at),i.push({host:F,cv:q,ren:ft,scene:wt,cam:new Qe(28,2,.1,60),items:Iu[X](),W:0,H:0,visible:!0})}),!i.length)return null;let s=[].concat.apply([],i.map(F=>F.items)),r=new Dn,a=0;s.forEach(F=>{F.g.rotation.y=0,r.setFromObject(F.g),a=Math.max(a,Math.hypot(Math.max(-r.min.x,r.max.x),Math.max(-r.min.z,r.max.z)))});let o=2*a+1.05;i.forEach(F=>F.items.forEach((X,q)=>{X.slot.position.x=(q-1)*o,F.scene.add(X.slot),X.g.position.y=-.7}));let c=rc?rc.children.find(F=>F.type==="Group"):null;function l(F){let X=F.host.getBoundingClientRect(),q=Math.max(120,Math.round(X.width)),ft=Math.max(80,Math.round(X.height));if(q===F.W&&ft===F.H)return;F.W=q,F.H=ft,F.ren.setSize(q,ft,!1);let wt=F.cam;wt.aspect=q/ft;let Z=Math.tan(Fl.degToRad(wt.fov/2)),at=Z*wt.aspect,bt=c_+1.5,Ct=Math.max(1.5*o/at,bt/2/Z);for(let xt=0;xt<60;xt++){let Nt=!0;for(let de=0;de<Math.PI*2;de+=Math.PI/36){let Ot=o+a*Math.cos(de),Yt=a*Math.sin(de);if(Ot/(Ct-Yt)>at*.95){Nt=!1;break}}if(Nt)break;Ct*=1.02}wt.position.set(0,.5+Ct*.16,Ct),wt.lookAt(0,.78,0),wt.updateProjectionMatrix()}i.forEach(l);let h=new ResizeObserver(()=>{i.forEach(l);for(let F of i)F.ren.render(F.scene,F.cam)}),m=F=>{for(let X of i)(F||X.visible)&&X.ren.render(X.scene,X.cam)},p=[.25,.5,1,2,4],d=2,_=!!t.paused,x=-.5,f=0,u=!1,g=0,y=!1,v=()=>i.some(F=>F.visible),T=.38,A=()=>_?0:T*p[d];function M(F){if(!y)return;let X=Math.max(0,Math.min(.05,(F-g)/1e3))||.016;g=F,u||(f+=(A()-f)*(1-Math.exp(-X*(Math.abs(f)>T*4.5?1.3:2.4))),x+=f*X);for(let q of s)q.g.rotation.y=x;if(c&&(c.rotation.x+=X*18),m(!1),!v()||document.hidden||_&&Math.abs(f)<.002&&!u&&!t.alwaysSpin){y=!1;return}requestAnimationFrame(M)}function S(){y||!v()||document.hidden||(y=!0,g=performance.now(),requestAnimationFrame(M))}let I=new IntersectionObserver(F=>{F.forEach(X=>{let q=i.find(ft=>ft.host===X.target);q&&(q.visible=X.isIntersecting)}),v()&&(m(!1),S())},{rootMargin:"80px"});i.forEach(F=>I.observe(F.host)),document.addEventListener("visibilitychange",()=>{document.hidden||S()});let R=0,P=0,O=-1,H=0,C=0,z=0,W=0,V=null;i.forEach(({cv:F})=>{F.addEventListener("pointerdown",q=>{q.pointerType==="mouse"&&q.button!==0||(O=q.pointerId,V=F,R=H=q.clientX,P=q.clientY,C=performance.now(),W=0,z=0)}),F.addEventListener("pointermove",q=>{if(q.pointerId!==O||F!==V)return;if(!W){let bt=q.clientX-R,Ct=q.clientY-P;if(Math.abs(bt)>5&&Math.abs(bt)>Math.abs(Ct)*1.2){W=1,u=!0;try{F.setPointerCapture(O)}catch{}F.classList.add("grab"),H=q.clientX,C=performance.now()}else Math.abs(Ct)>8&&(W=-1);if(W!==1)return}let ft=performance.now(),wt=q.clientX-H,Z=Math.max(1,ft-C)/1e3;x+=wt*.011;let at=wt*.011/Z;z=z*.6+at*.4,H=q.clientX,C=ft,S(),q.preventDefault()});let X=q=>{q.pointerId!==O||F!==V||(O=-1,u&&(u=!1,F.classList.remove("grab"),f=Math.max(-14,Math.min(14,performance.now()-C<90?z:0)),S()))};F.addEventListener("pointerup",X),F.addEventListener("pointercancel",X),F.addEventListener("lostpointercapture",X)});let et={get speed(){return _?0:p[d]},get paused(){return _},faster(){return d<p.length-1&&d++,_&&(_=!1),S(),et.speed},slower(){return d>0&&d--,_&&(_=!1),S(),et.speed},toggle(){return _=!_,S(),_},setPaused(F){_=!!F,S()},render(){m(!0)},destroy(){y=!1,h.disconnect(),I.disconnect(),i.forEach(F=>F.ren.dispose())},get angle(){return x},_a:F=>{x=F;for(let X of s)X.g.rotation.y=F;m(!0)},_items:s,_rows:i,_cam:i[0].cam,_scene:i[0].scene};return m(!0),S(),et}window.__toys={init:f_};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
