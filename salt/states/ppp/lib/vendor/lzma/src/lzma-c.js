/// © 2015 Nathan Rugg <nmrugg@gmail.com> | MIT
/// See LICENSE for more details.
var LZMA=function(){"use strict";var e=1,r=3,t="function"==typeof setImmediate?setImmediate:setTimeout,n=4294967296,s=[4294967295,-n],o=[0,-0x8000000000000000],i=[0,0],_=[1,0];function a(e){var r=[];return r[e-1]=void 0,r}function c(e,r){return m(e[0]+r[0],e[1]+r[1])}function f(e,r){return function(e,r){var t;t=r,r<0&&(t+=n);return[t,e*n]}(~~Math.max(Math.min(e[1]/n,2147483647),-2147483648)&~~Math.max(Math.min(r[1]/n,2147483647),-2147483648),h(e)&h(r))}function u(e,r){var t,n;return e[0]==r[0]&&e[1]==r[1]?0:(t=e[1]<0,n=r[1]<0,t&&!n?-1:!t&&n?1:v(e,r)[1]<0?-1:1)}function m(e,r){var t,s;for(e%=0x10000000000000000,r=(r%=0x10000000000000000)-(t=r%n)+(s=Math.floor(e/n)*n),e=e-s+t;e<0;)e+=n,r-=n;for(;e>4294967295;)e-=n,r+=n;for(r%=0x10000000000000000;r>0x7fffffff00000000;)r-=0x10000000000000000;for(;r<-0x8000000000000000;)r+=0x10000000000000000;return[e,r]}function p(e,r){return e[0]==r[0]&&e[1]==r[1]}function d(e){return e>=0?[e,0]:[e+n,-n]}function h(e){return e[0]>=2147483648?~~Math.max(Math.min(e[0]-n,2147483647),-2147483648):~~Math.max(Math.min(e[0],2147483647),-2147483648)}function P(e){return e<=30?1<<e:P(30)*P(e-30)}function l(e,r){var t,s,_,a;if(r&=63,p(e,o))return r?i:e;if(e[1]<0)throw new Error("Neg");return a=P(r),s=e[1]*a%0x10000000000000000,(s+=t=(_=e[0]*a)-_%n)>=0x8000000000000000&&(s-=0x10000000000000000),[_-=t,s]}function B(e,r){var t;return t=P(r&=63),m(Math.floor(e[0]/t),e[1]/t)}function v(e,r){return m(e[0]-r[0],e[1]-r[1])}function k(e,r,t,n){return e.pos>=e.count?-1:(n=Math.min(n,e.count-e.pos),b(e.buf,e.pos,r,t,n),e.pos+=n,n)}function S(e){var r=e.buf;return r.length=e.count,r}function M(e,r){e.buf[e.count++]=r<<24>>24}function b(e,r,t,n,s){for(var o=0;o<s;++o)t[n+o]=e[r+o]}function E(e,r,t,n,o){var _,c;if(u(n,s)<0)throw new Error("invalid length "+n);for(e.length_0=n,function(e,r){!function(e,r){e._dictionarySize=r;for(var t=0;r>1<<t;++t);e._distTableSize=2*t}(r,1<<e.s),r._numFastBytes=e.f,function(e,r){var t=e._matchFinderType;e._matchFinderType=r,e._matchFinder&&t!=e._matchFinderType&&(e._dictionarySizePrev=-1,e._matchFinder=null)}(r,e.m),r._numLiteralPosStateBits=0,r._numLiteralContextBits=3,r._posStateBits=2,r._posStateMask=3}(o,_=function(e){var r;for(e._repDistances=a(4),e._optimum=[],e._rangeEncoder={},e._isMatch=a(192),e._isRep=a(12),e._isRepG0=a(12),e._isRepG1=a(12),e._isRepG2=a(12),e._isRep0Long=a(192),e._posSlotEncoder=[],e._posEncoders=a(114),e._posAlignEncoder=_e({},4),e._lenEncoder=X({}),e._repMatchLenEncoder=X({}),e._literalEncoder={},e._matchDistances=[],e._posSlotPrices=[],e._distancesPrices=[],e._alignPrices=a(16),e.reps=a(4),e.repLens=a(4),e.processedInSize=[i],e.processedOutSize=[i],e.finished=[0],e.properties=a(5),e.tempPrices=a(128),e._longestMatchLength=0,e._matchFinderType=1,e._numDistancePairs=0,e._numFastBytesPrev=-1,e.backRes=0,r=0;r<4096;++r)e._optimum[r]={};for(r=0;r<4;++r)e._posSlotEncoder[r]=_e({},6);return e}({})),_._writeEndMark=void 0===LZMA.disableEndMark,function(e,r){e.properties[0]=9*(5*e._posStateBits+e._numLiteralPosStateBits)+e._numLiteralContextBits<<24>>24;for(var t=0;t<4;++t)e.properties[1+t]=e._dictionarySize>>8*t<<24>>24;!function(e,r,t,n){b(r,t,e.buf,e.count,n),e.count+=n}(r,e.properties,0,5)}(_,t),c=0;c<64;c+=8)M(t,255&h(B(n,c)));e.chunker=(_._needReleaseMFStream=0,_._inStream=r,_._finished=0,function(e){var r,t;e._matchFinder||(r={},t=4,e._matchFinderType||(t=2),function(e,r){e.HASH_ARRAY=r>2,e.HASH_ARRAY?(e.kNumHashDirectBytes=0,e.kMinMatchCheck=4,e.kFixHashSize=66560):(e.kNumHashDirectBytes=2,e.kMinMatchCheck=3,e.kFixHashSize=0)}(r,t),e._matchFinder=r);if(function(e,r,t){var n,s;if(null==e.m_Coders||e.m_NumPrevBits!=t||e.m_NumPosBits!=r)for(e.m_NumPosBits=r,e.m_PosMask=(1<<r)-1,e.m_NumPrevBits=t,s=1<<e.m_NumPrevBits+e.m_NumPosBits,e.m_Coders=a(s),n=0;n<s;++n)e.m_Coders[n]=se({})}(e._literalEncoder,e._numLiteralPosStateBits,e._numLiteralContextBits),e._dictionarySize==e._dictionarySizePrev&&e._numFastBytesPrev==e._numFastBytes)return;(function(e,r,t,n,s){var o,i;r<1073741567&&(e._cutValue=16+(n>>1),function(e,r,t,n){var s;e._keepSizeBefore=r,e._keepSizeAfter=t,s=r+t+n,(null==e._bufferBase||e._blockSize!=s)&&(e._bufferBase=null,e._blockSize=s,e._bufferBase=a(e._blockSize));e._pointerToLastSafePosition=e._blockSize-t}(e,r+t,n+s,256+~~((r+t+n+s)/2)),e._matchMaxLen=n,o=r+1,e._cyclicBufferSize!=o&&(e._son=a(2*(e._cyclicBufferSize=o))),i=65536,e.HASH_ARRAY&&(i=r-1,i|=i>>1,i|=i>>2,i|=i>>4,i|=i>>8,i>>=1,(i|=65535)>16777216&&(i>>=1),e._hashMask=i,++i,i+=e.kFixHashSize),i!=e._hashSizeSum&&(e._hash=a(e._hashSizeSum=i)))})(e._matchFinder,e._dictionarySize,4096,e._numFastBytes,274),e._dictionarySizePrev=e._dictionarySize,e._numFastBytesPrev=e._numFastBytes}(_),_._rangeEncoder.Stream=t,function(e){(function(e){e._state=0,e._previousByte=0;for(var r=0;r<4;++r)e._repDistances[r]=0})(e),function(e){e._position=i,e.Low=i,e.Range=-1,e._cacheSize=1,e._cache=0}(e._rangeEncoder),de(e._isMatch),de(e._isRep0Long),de(e._isRep),de(e._isRepG0),de(e._isRepG1),de(e._isRepG2),de(e._posEncoders),function(e){var r,t=1<<e.m_NumPrevBits+e.m_NumPosBits;for(r=0;r<t;++r)de(e.m_Coders[r].m_Encoders)}(e._literalEncoder);for(var r=0;r<4;++r)de(e._posSlotEncoder[r].Models);J(e._lenEncoder,1<<e._posStateBits),J(e._repMatchLenEncoder,1<<e._posStateBits),de(e._posAlignEncoder.Models),e._longestMatchWasFound=0,e._optimumEndIndex=0,e._optimumCurrentIndex=0,e._additionalOffset=0}(_),G(_),N(_),_._lenEncoder._tableSize=_._numFastBytes+1-2,ee(_._lenEncoder,1<<_._posStateBits),_._repMatchLenEncoder._tableSize=_._numFastBytes+1-2,ee(_._repMatchLenEncoder,1<<_._posStateBits),_.nowPos64=i,function(e,r){return e.encoder=r,e.decoder=null,e.alive=1,e}({},_))}function g(e,r,t){return e.output=function(e){return e.buf=a(32),e.count=0,e}({}),E(e,function(e,r){return e.buf=r,e.pos=0,e.count=r.length,e}({},r),e.output,d(r.length),t),e}function y(e,r){return e._bufferBase[e._bufferOffset+e._pos+r]}function R(e,r,t,n){var s,o;for(e._streamEndWasReached&&e._pos+r+n>e._streamPos&&(n=e._streamPos-(e._pos+r)),++t,o=e._bufferOffset+e._pos+r,s=0;s<n&&e._bufferBase[o+s]==e._bufferBase[o+s-t];++s);return s}function F(e){return e._streamPos-e._pos}function L(e){var r,t;if(!e._streamEndWasReached)for(;;){if(!(t=-e._bufferOffset+e._blockSize-e._streamPos))return;if(-1==(r=k(e._stream,e._bufferBase,e._bufferOffset+e._streamPos,t)))return e._posLimit=e._streamPos,e._bufferOffset+e._posLimit>e._pointerToLastSafePosition&&(e._posLimit=e._pointerToLastSafePosition-e._bufferOffset),void(e._streamEndWasReached=1);e._streamPos+=r,e._streamPos>=e._pos+e._keepSizeAfter&&(e._posLimit=e._streamPos-e._keepSizeAfter)}}function z(e,r){e._bufferOffset+=r,e._posLimit-=r,e._pos-=r,e._streamPos-=r}var C=function(){var e,r,t,n=[];for(e=0;e<256;++e){for(t=e,r=0;r<8;++r)0!=(1&t)?t=t>>>1^-306674912:t>>>=1;n[e]=t}return n}();function w(e){var r;++e._cyclicBufferPos>=e._cyclicBufferSize&&(e._cyclicBufferPos=0),function(e){++e._pos,e._pos>e._posLimit&&(e._bufferOffset+e._pos>e._pointerToLastSafePosition&&function(e){var r,t,n;for((n=e._bufferOffset+e._pos-e._keepSizeBefore)>0&&--n,t=e._bufferOffset+e._streamPos-n,r=0;r<t;++r)e._bufferBase[r]=e._bufferBase[n+r];e._bufferOffset-=n}(e),L(e))}(e),1073741823==e._pos&&(r=e._pos-e._cyclicBufferSize,x(e._son,2*e._cyclicBufferSize,r),x(e._hash,e._hashSizeSum,r),z(e,r))}function x(e,r,t){var n,s;for(n=0;n<r;++n)(s=e[n]||0)<=t?s=0:s-=t,e[n]=s}function D(e){return(e-=2)<4?e:3}function I(e){return e<4?0:e<10?e-3:e-6}function A(e){if(!e.alive)throw new Error("bad state");if(!e.encoder)throw new Error("No decoding");return function(e){(function(e,r,t,n){var s,o,a,f,m,P,l,B,k,S,M,b,E,g,R;if(r[0]=i,t[0]=i,n[0]=1,e._inStream&&(e._matchFinder._stream=e._inStream,function(e){e._bufferOffset=0,e._pos=0,e._streamPos=0,e._streamEndWasReached=0,L(e),e._cyclicBufferPos=0,z(e,-1)}(e._matchFinder),e._needReleaseMFStream=1,e._inStream=null),!e._finished){if(e._finished=1,g=e.nowPos64,p(e.nowPos64,i)){if(!F(e._matchFinder))return void T(e,h(e.nowPos64));j(e),E=h(e.nowPos64)&e._posStateMask,Pe(e._rangeEncoder,e._isMatch,(e._state<<4)+E,0),e._state=I(e._state),a=y(e._matchFinder,-e._additionalOffset),te(re(e._literalEncoder,h(e.nowPos64),e._previousByte),e._rangeEncoder,a),e._previousByte=a,--e._additionalOffset,e.nowPos64=c(e.nowPos64,_)}if(F(e._matchFinder))for(;;){if(l=W(e,h(e.nowPos64)),S=e.backRes,E=h(e.nowPos64)&e._posStateMask,o=(e._state<<4)+E,1==l&&-1==S)Pe(e._rangeEncoder,e._isMatch,o,0),a=y(e._matchFinder,-e._additionalOffset),R=re(e._literalEncoder,h(e.nowPos64),e._previousByte),e._state<7?te(R,e._rangeEncoder,a):(k=y(e._matchFinder,-e._repDistances[0]-1-e._additionalOffset),ne(R,e._rangeEncoder,k,a)),e._previousByte=a,e._state=I(e._state);else{if(Pe(e._rangeEncoder,e._isMatch,o,1),S<4){if(Pe(e._rangeEncoder,e._isRep,e._state,1),S?(Pe(e._rangeEncoder,e._isRepG0,e._state,1),1==S?Pe(e._rangeEncoder,e._isRepG1,e._state,0):(Pe(e._rangeEncoder,e._isRepG1,e._state,1),Pe(e._rangeEncoder,e._isRepG2,e._state,S-2))):(Pe(e._rangeEncoder,e._isRepG0,e._state,0),Pe(e._rangeEncoder,e._isRep0Long,o,1==l?0:1)),1==l?e._state=e._state<7?9:11:(U(e._repMatchLenEncoder,e._rangeEncoder,l-2,E),e._state=e._state<7?8:11),f=e._repDistances[S],0!=S){for(P=S;P>=1;--P)e._repDistances[P]=e._repDistances[P-1];e._repDistances[0]=f}}else{for(Pe(e._rangeEncoder,e._isRep,e._state,0),e._state=e._state<7?7:10,U(e._lenEncoder,e._rangeEncoder,l-2,E),b=q(S-=4),B=D(l),ae(e._posSlotEncoder[B],e._rangeEncoder,b),b>=4&&(M=S-(s=(2|1&b)<<(m=(b>>1)-1)),b<14?me(e._posEncoders,s-b-1,e._rangeEncoder,m,M):(le(e._rangeEncoder,M>>4,m-4),fe(e._posAlignEncoder,e._rangeEncoder,15&M),++e._alignPriceCount)),f=S,P=3;P>=1;--P)e._repDistances[P]=e._repDistances[P-1];e._repDistances[0]=f,++e._matchPriceCount}e._previousByte=y(e._matchFinder,l-1-e._additionalOffset)}if(e._additionalOffset-=l,e.nowPos64=c(e.nowPos64,d(l)),!e._additionalOffset){if(e._matchPriceCount>=128&&G(e),e._alignPriceCount>=16&&N(e),r[0]=e.nowPos64,t[0]=Be(e._rangeEncoder),!F(e._matchFinder))return void T(e,h(e.nowPos64));if(u(v(e.nowPos64,g),[4096,0])>=0)return e._finished=0,void(n[0]=0)}}else T(e,h(e.nowPos64))}})(e.encoder,e.encoder.processedInSize,e.encoder.processedOutSize,e.encoder.finished),e.inBytesProcessed=e.encoder.processedInSize[0],e.encoder.finished[0]&&(!function(e){K(e),e._rangeEncoder.Stream=null}(e.encoder),e.alive=0)}(e),e.alive}var O=function(){var e,r,t,n=2,s=[0,1];for(t=2;t<22;++t)for(r=1<<(t>>1)-1,e=0;e<r;++e,++n)s[n]=t<<24>>24;return s}();function H(e,r){var t,n,s,o;e._optimumEndIndex=r,s=e._optimum[r].PosPrev,n=e._optimum[r].BackPrev;do{e._optimum[r].Prev1IsChar&&(ie(e._optimum[s]),e._optimum[s].PosPrev=s-1,e._optimum[r].Prev2&&(e._optimum[s-1].Prev1IsChar=0,e._optimum[s-1].PosPrev=e._optimum[r].PosPrev2,e._optimum[s-1].BackPrev=e._optimum[r].BackPrev2)),o=s,t=n,n=e._optimum[o].BackPrev,s=e._optimum[o].PosPrev,e._optimum[o].BackPrev=t,e._optimum[o].PosPrev=r,r=o}while(r>0);return e.backRes=e._optimum[0].BackPrev,e._optimumCurrentIndex=e._optimum[0].PosPrev,e._optimumCurrentIndex}function N(e){for(var r=0;r<16;++r)e._alignPrices[r]=ue(e._posAlignEncoder,r);e._alignPriceCount=0}function G(e){var r,t,n,s,o,i,_,a;for(s=4;s<128;++s)r=(2|1&(i=q(s)))<<(n=(i>>1)-1),e.tempPrices[s]=pe(e._posEncoders,r-i-1,n,s-r);for(o=0;o<4;++o){for(t=e._posSlotEncoder[o],_=o<<6,i=0;i<e._distTableSize;++i)e._posSlotPrices[_+i]=ce(t,i);for(i=14;i<e._distTableSize;++i)e._posSlotPrices[_+i]+=(i>>1)-1-4<<6;for(a=128*o,s=0;s<4;++s)e._distancesPrices[a+s]=e._posSlotPrices[_+s];for(;s<128;++s)e._distancesPrices[a+s]=e._posSlotPrices[_+q(s)]+e.tempPrices[s]}e._matchPriceCount=0}function T(e,r){K(e),function(e,r){if(!e._writeEndMark)return;Pe(e._rangeEncoder,e._isMatch,(e._state<<4)+r,1),Pe(e._rangeEncoder,e._isRep,e._state,0),e._state=e._state<7?7:10,U(e._lenEncoder,e._rangeEncoder,0,r);var t=D(2);ae(e._posSlotEncoder[t],e._rangeEncoder,63),le(e._rangeEncoder,67108863,26),fe(e._posAlignEncoder,e._rangeEncoder,15)}(e,r&e._posStateMask);for(var t=0;t<5;++t)ve(e._rangeEncoder)}function W(e,r){var t,n,s,o,i,_,a,c,f,u,m,p,d,h,P,l,B,v,k,S,M,b,E,g,L,z,C,w,x,D,A,O,N,G,T,W,K,q,J,Q,U,X,ee,te;if(e._optimumEndIndex!=e._optimumCurrentIndex)return d=e._optimum[e._optimumCurrentIndex].PosPrev-e._optimumCurrentIndex,e.backRes=e._optimum[e._optimumCurrentIndex].BackPrev,e._optimumCurrentIndex=e._optimum[e._optimumCurrentIndex].PosPrev,d;if(e._optimumCurrentIndex=e._optimumEndIndex=0,e._longestMatchWasFound?(p=e._longestMatchLength,e._longestMatchWasFound=0):p=j(e),z=e._numDistancePairs,(g=F(e._matchFinder)+1)<2)return e.backRes=-1,1;for(g>273&&(g=273),J=0,f=0;f<4;++f)e.reps[f]=e._repDistances[f],e.repLens[f]=R(e._matchFinder,-1,e.reps[f],273),e.repLens[f]>e.repLens[J]&&(J=f);if(e.repLens[J]>=e._numFastBytes)return e.backRes=J,V(e,(d=e.repLens[J])-1),d;if(p>=e._numFastBytes)return e.backRes=e._matchDistances[z-1]+4,V(e,p-1),p;if(a=y(e._matchFinder,-1),B=y(e._matchFinder,-e._repDistances[0]-1-1),p<2&&a!=B&&e.repLens[J]<2)return e.backRes=-1,1;if(e._optimum[0].State=e._state,N=r&e._posStateMask,e._optimum[1].Price=he[e._isMatch[(e._state<<4)+N]>>>2]+oe(re(e._literalEncoder,r,e._previousByte),e._state>=7,B,a),ie(e._optimum[1]),q=(v=he[2048-e._isMatch[(e._state<<4)+N]>>>2])+he[2048-e._isRep[e._state]>>>2],B==a&&(Q=q+function(e,r,t){return he[e._isRepG0[r]>>>2]+he[e._isRep0Long[(r<<4)+t]>>>2]}(e,e._state,N))<e._optimum[1].Price&&(e._optimum[1].Price=Q,function(e){e.BackPrev=0,e.Prev1IsChar=0}(e._optimum[1])),(m=p>=e.repLens[J]?p:e.repLens[J])<2)return e.backRes=e._optimum[1].BackPrev,1;e._optimum[1].PosPrev=0,e._optimum[0].Backs0=e.reps[0],e._optimum[0].Backs1=e.reps[1],e._optimum[0].Backs2=e.reps[2],e._optimum[0].Backs3=e.reps[3],u=m;do{e._optimum[u--].Price=268435455}while(u>=2);for(f=0;f<4;++f)if(!((K=e.repLens[f])<2)){T=q+Z(e,f,e._state,N);do{(o=T+$(e._repMatchLenEncoder,K-2,N))<(D=e._optimum[K]).Price&&(D.Price=o,D.PosPrev=0,D.BackPrev=f,D.Prev1IsChar=0)}while(--K>=2)}if(E=v+he[e._isRep[e._state]>>>2],(u=e.repLens[0]>=2?e.repLens[0]+1:2)<=p){for(C=0;u>e._matchDistances[C];)C+=2;for(;(o=E+Y(e,c=e._matchDistances[C+1],u,N))<(D=e._optimum[u]).Price&&(D.Price=o,D.PosPrev=0,D.BackPrev=c+4,D.Prev1IsChar=0),u!=e._matchDistances[C]||(C+=2)!=z;++u);}for(t=0;;){if(++t==m)return H(e,t);if(k=j(e),z=e._numDistancePairs,k>=e._numFastBytes)return e._longestMatchLength=k,e._longestMatchWasFound=1,H(e,t);if(++r,O=e._optimum[t].PosPrev,e._optimum[t].Prev1IsChar?(--O,e._optimum[t].Prev2?(X=e._optimum[e._optimum[t].PosPrev2].State,X=e._optimum[t].BackPrev2<4?X<7?8:11:X<7?7:10):X=e._optimum[O].State,X=I(X)):X=e._optimum[O].State,O==t-1?X=e._optimum[t].BackPrev?I(X):X<7?9:11:(e._optimum[t].Prev1IsChar&&e._optimum[t].Prev2?(O=e._optimum[t].PosPrev2,A=e._optimum[t].BackPrev2,X=X<7?8:11):X=(A=e._optimum[t].BackPrev)<4?X<7?8:11:X<7?7:10,x=e._optimum[O],A<4?A?1==A?(e.reps[0]=x.Backs1,e.reps[1]=x.Backs0,e.reps[2]=x.Backs2,e.reps[3]=x.Backs3):2==A?(e.reps[0]=x.Backs2,e.reps[1]=x.Backs0,e.reps[2]=x.Backs1,e.reps[3]=x.Backs3):(e.reps[0]=x.Backs3,e.reps[1]=x.Backs0,e.reps[2]=x.Backs1,e.reps[3]=x.Backs2):(e.reps[0]=x.Backs0,e.reps[1]=x.Backs1,e.reps[2]=x.Backs2,e.reps[3]=x.Backs3):(e.reps[0]=A-4,e.reps[1]=x.Backs0,e.reps[2]=x.Backs1,e.reps[3]=x.Backs2)),e._optimum[t].State=X,e._optimum[t].Backs0=e.reps[0],e._optimum[t].Backs1=e.reps[1],e._optimum[t].Backs2=e.reps[2],e._optimum[t].Backs3=e.reps[3],_=e._optimum[t].Price,a=y(e._matchFinder,-1),B=y(e._matchFinder,-e.reps[0]-1-1),N=r&e._posStateMask,S=0,(n=_+he[e._isMatch[(X<<4)+N]>>>2]+oe(re(e._literalEncoder,r,y(e._matchFinder,-2)),X>=7,B,a))<(M=e._optimum[t+1]).Price&&(M.Price=n,M.PosPrev=t,M.BackPrev=-1,M.Prev1IsChar=0,S=1),q=(v=_+he[2048-e._isMatch[(X<<4)+N]>>>2])+he[2048-e._isRep[X]>>>2],B!=a||M.PosPrev<t&&!M.BackPrev||(Q=q+(he[e._isRepG0[X]>>>2]+he[e._isRep0Long[(X<<4)+N]>>>2]))<=M.Price&&(M.Price=Q,M.PosPrev=t,M.BackPrev=0,M.Prev1IsChar=0,S=1),!((g=L=4095-t<(L=F(e._matchFinder)+1)?4095-t:L)<2)){if(g>e._numFastBytes&&(g=e._numFastBytes),!S&&B!=a&&(te=Math.min(L-1,e._numFastBytes),(P=R(e._matchFinder,0,e.reps[0],te))>=2)){for(ee=I(X),G=r+1&e._posStateMask,b=n+he[2048-e._isMatch[(ee<<4)+G]>>>2]+he[2048-e._isRep[ee]>>>2],w=t+1+P;m<w;)e._optimum[++m].Price=268435455;(o=b+($(e._repMatchLenEncoder,P-2,G)+Z(e,0,ee,G)))<(D=e._optimum[w]).Price&&(D.Price=o,D.PosPrev=t+1,D.BackPrev=0,D.Prev1IsChar=1,D.Prev2=0)}for(U=2,W=0;W<4;++W)if(!((h=R(e._matchFinder,-1,e.reps[W],g))<2)){l=h;do{for(;m<t+h;)e._optimum[++m].Price=268435455;(o=q+($(e._repMatchLenEncoder,h-2,N)+Z(e,W,X,N)))<(D=e._optimum[t+h]).Price&&(D.Price=o,D.PosPrev=t,D.BackPrev=W,D.Prev1IsChar=0)}while(--h>=2);if(h=l,W||(U=h+1),h<L&&(te=Math.min(L-1-h,e._numFastBytes),(P=R(e._matchFinder,h,e.reps[W],te))>=2)){for(ee=X<7?8:11,G=r+h&e._posStateMask,s=q+($(e._repMatchLenEncoder,h-2,N)+Z(e,W,X,N))+he[e._isMatch[(ee<<4)+G]>>>2]+oe(re(e._literalEncoder,r+h,y(e._matchFinder,h-1-1)),1,y(e._matchFinder,h-1-(e.reps[W]+1)),y(e._matchFinder,h-1)),ee=I(ee),G=r+h+1&e._posStateMask,b=s+he[2048-e._isMatch[(ee<<4)+G]>>>2]+he[2048-e._isRep[ee]>>>2],w=h+1+P;m<t+w;)e._optimum[++m].Price=268435455;(o=b+($(e._repMatchLenEncoder,P-2,G)+Z(e,0,ee,G)))<(D=e._optimum[t+w]).Price&&(D.Price=o,D.PosPrev=t+h+1,D.BackPrev=0,D.Prev1IsChar=1,D.Prev2=1,D.PosPrev2=t,D.BackPrev2=W)}}if(k>g){for(k=g,z=0;k>e._matchDistances[z];z+=2);e._matchDistances[z]=k,z+=2}if(k>=U){for(E=v+he[e._isRep[X]>>>2];m<t+k;)e._optimum[++m].Price=268435455;for(C=0;U>e._matchDistances[C];)C+=2;for(h=U;;++h)if((o=E+Y(e,i=e._matchDistances[C+1],h,N))<(D=e._optimum[t+h]).Price&&(D.Price=o,D.PosPrev=t,D.BackPrev=i+4,D.Prev1IsChar=0),h==e._matchDistances[C]){if(h<L&&(te=Math.min(L-1-h,e._numFastBytes),(P=R(e._matchFinder,h,i,te))>=2)){for(ee=X<7?7:10,G=r+h&e._posStateMask,s=o+he[e._isMatch[(ee<<4)+G]>>>2]+oe(re(e._literalEncoder,r+h,y(e._matchFinder,h-1-1)),1,y(e._matchFinder,h-(i+1)-1),y(e._matchFinder,h-1)),ee=I(ee),G=r+h+1&e._posStateMask,b=s+he[2048-e._isMatch[(ee<<4)+G]>>>2]+he[2048-e._isRep[ee]>>>2],w=h+1+P;m<t+w;)e._optimum[++m].Price=268435455;(o=b+($(e._repMatchLenEncoder,P-2,G)+Z(e,0,ee,G)))<(D=e._optimum[t+w]).Price&&(D.Price=o,D.PosPrev=t+h+1,D.BackPrev=0,D.Prev1IsChar=1,D.Prev2=1,D.PosPrev2=t,D.BackPrev2=i+4)}if((C+=2)==z)break}}}}}function Y(e,r,t,n){var s=D(t);return(r<128?e._distancesPrices[128*s+r]:e._posSlotPrices[(s<<6)+function(e){if(e<131072)return O[e>>6]+12;if(e<134217728)return O[e>>16]+32;return O[e>>26]+52}(r)]+e._alignPrices[15&r])+$(e._lenEncoder,t-2,n)}function Z(e,r,t,n){var s;return r?(s=he[2048-e._isRepG0[t]>>>2],1==r?s+=he[e._isRepG1[t]>>>2]:(s+=he[2048-e._isRepG1[t]>>>2],s+=ke(e._isRepG2[t],r-2))):(s=he[e._isRepG0[t]>>>2],s+=he[2048-e._isRep0Long[(t<<4)+n]>>>2]),s}function V(e,r){r>0&&(!function(e,r){var t,n,s,o,i,_,a,c,f,u,m,p,d,h,P,l,B;do{if(e._pos+e._matchMaxLen<=e._streamPos)p=e._matchMaxLen;else if((p=e._streamPos-e._pos)<e.kMinMatchCheck){w(e);continue}for(d=e._pos>e._cyclicBufferSize?e._pos-e._cyclicBufferSize:0,n=e._bufferOffset+e._pos,e.HASH_ARRAY?(_=1023&(B=C[255&e._bufferBase[n]]^255&e._bufferBase[n+1]),e._hash[_]=e._pos,a=65535&(B^=(255&e._bufferBase[n+2])<<8),e._hash[1024+a]=e._pos,c=(B^C[255&e._bufferBase[n+3]]<<5)&e._hashMask):c=255&e._bufferBase[n]^(255&e._bufferBase[n+1])<<8,s=e._hash[e.kFixHashSize+c],e._hash[e.kFixHashSize+c]=e._pos,P=1+(e._cyclicBufferPos<<1),l=e._cyclicBufferPos<<1,u=m=e.kNumHashDirectBytes,t=e._cutValue;;){if(s<=d||0==t--){e._son[P]=e._son[l]=0;break}if(o=((i=e._pos-s)<=e._cyclicBufferPos?e._cyclicBufferPos-i:e._cyclicBufferPos-i+e._cyclicBufferSize)<<1,h=e._bufferOffset+s,f=u<m?u:m,e._bufferBase[h+f]==e._bufferBase[n+f]){for(;++f!=p&&e._bufferBase[h+f]==e._bufferBase[n+f];);if(f==p){e._son[l]=e._son[o],e._son[P]=e._son[o+1];break}}(255&e._bufferBase[h+f])<(255&e._bufferBase[n+f])?(e._son[l]=s,l=o+1,s=e._son[l],m=f):(e._son[P]=s,P=o,s=e._son[P],u=f)}w(e)}while(0!=--r)}(e._matchFinder,r),e._additionalOffset+=r)}function j(e){var r=0;return e._numDistancePairs=function(e,r){var t,n,s,o,i,_,a,c,f,u,m,p,d,h,P,l,B,v,k,S,M;if(e._pos+e._matchMaxLen<=e._streamPos)h=e._matchMaxLen;else if((h=e._streamPos-e._pos)<e.kMinMatchCheck)return w(e),0;for(B=0,P=e._pos>e._cyclicBufferSize?e._pos-e._cyclicBufferSize:0,n=e._bufferOffset+e._pos,l=1,c=0,f=0,e.HASH_ARRAY?(c=1023&(M=C[255&e._bufferBase[n]]^255&e._bufferBase[n+1]),f=65535&(M^=(255&e._bufferBase[n+2])<<8),u=(M^C[255&e._bufferBase[n+3]]<<5)&e._hashMask):u=255&e._bufferBase[n]^(255&e._bufferBase[n+1])<<8,s=e._hash[e.kFixHashSize+u]||0,e.HASH_ARRAY&&(o=e._hash[c]||0,i=e._hash[1024+f]||0,e._hash[c]=e._pos,e._hash[1024+f]=e._pos,o>P&&e._bufferBase[e._bufferOffset+o]==e._bufferBase[n]&&(r[B++]=l=2,r[B++]=e._pos-o-1),i>P&&e._bufferBase[e._bufferOffset+i]==e._bufferBase[n]&&(i==o&&(B-=2),r[B++]=l=3,r[B++]=e._pos-i-1,o=i),0!=B&&o==s&&(B-=2,l=1)),e._hash[e.kFixHashSize+u]=e._pos,k=1+(e._cyclicBufferPos<<1),S=e._cyclicBufferPos<<1,p=d=e.kNumHashDirectBytes,0!=e.kNumHashDirectBytes&&s>P&&e._bufferBase[e._bufferOffset+s+e.kNumHashDirectBytes]!=e._bufferBase[n+e.kNumHashDirectBytes]&&(r[B++]=l=e.kNumHashDirectBytes,r[B++]=e._pos-s-1),t=e._cutValue;;){if(s<=P||0==t--){e._son[k]=e._son[S]=0;break}if(_=((a=e._pos-s)<=e._cyclicBufferPos?e._cyclicBufferPos-a:e._cyclicBufferPos-a+e._cyclicBufferSize)<<1,v=e._bufferOffset+s,m=p<d?p:d,e._bufferBase[v+m]==e._bufferBase[n+m]){for(;++m!=h&&e._bufferBase[v+m]==e._bufferBase[n+m];);if(l<m&&(r[B++]=l=m,r[B++]=a-1,m==h)){e._son[S]=e._son[_],e._son[k]=e._son[_+1];break}}(255&e._bufferBase[v+m])<(255&e._bufferBase[n+m])?(e._son[S]=s,S=_+1,s=e._son[S],d=m):(e._son[k]=s,k=_,s=e._son[k],p=m)}return w(e),B}(e._matchFinder,e._matchDistances),e._numDistancePairs>0&&(r=e._matchDistances[e._numDistancePairs-2])==e._numFastBytes&&(r+=R(e._matchFinder,r-1,e._matchDistances[e._numDistancePairs-1],273-r)),++e._additionalOffset,r}function K(e){e._matchFinder&&e._needReleaseMFStream&&(e._matchFinder._stream=null,e._needReleaseMFStream=0)}function q(e){return e<2048?O[e]:e<2097152?O[e>>10]+20:O[e>>20]+40}function J(e,r){de(e._choice);for(var t=0;t<r;++t)de(e._lowCoder[t].Models),de(e._midCoder[t].Models);de(e._highCoder.Models)}function Q(e,r,t,n,s){var o,i,_,a,c;for(o=he[e._choice[0]>>>2],_=(i=he[2048-e._choice[0]>>>2])+he[e._choice[1]>>>2],a=i+he[2048-e._choice[1]>>>2],c=0,c=0;c<8;++c){if(c>=t)return;n[s+c]=o+ce(e._lowCoder[r],c)}for(;c<16;++c){if(c>=t)return;n[s+c]=_+ce(e._midCoder[r],c-8)}for(;c<t;++c)n[s+c]=a+ce(e._highCoder,c-8-8)}function U(e,r,t,n){!function(e,r,t,n){t<8?(Pe(r,e._choice,0,0),ae(e._lowCoder[n],r,t)):(t-=8,Pe(r,e._choice,0,1),t<8?(Pe(r,e._choice,1,0),ae(e._midCoder[n],r,t)):(Pe(r,e._choice,1,1),ae(e._highCoder,r,t-8)))}(e,r,t,n),0==--e._counters[n]&&(Q(e,n,e._tableSize,e._prices,272*n),e._counters[n]=e._tableSize)}function X(e){return function(e){e._choice=a(2),e._lowCoder=a(16),e._midCoder=a(16),e._highCoder=_e({},8);for(var r=0;r<16;++r)e._lowCoder[r]=_e({},3),e._midCoder[r]=_e({},3)}(e),e._prices=[],e._counters=[],e}function $(e,r,t){return e._prices[272*t+r]}function ee(e,r){for(var t=0;t<r;++t)Q(e,t,e._tableSize,e._prices,272*t),e._counters[t]=e._tableSize}function re(e,r,t){return e.m_Coders[((r&e.m_PosMask)<<e.m_NumPrevBits)+((255&t)>>>8-e.m_NumPrevBits)]}function te(e,r,t){var n,s,o=1;for(s=7;s>=0;--s)n=t>>s&1,Pe(r,e.m_Encoders,o,n),o=o<<1|n}function ne(e,r,t,n){var s,o,i,_,a=1,c=1;for(o=7;o>=0;--o)s=n>>o&1,_=c,a&&(_+=1+(i=t>>o&1)<<8,a=i==s),Pe(r,e.m_Encoders,_,s),c=c<<1|s}function se(e){return e.m_Encoders=a(768),e}function oe(e,r,t,n){var s,o,i=1,_=7,a=0;if(r)for(;_>=0;--_)if(o=t>>_&1,s=n>>_&1,a+=ke(e.m_Encoders[(1+o<<8)+i],s),i=i<<1|s,o!=s){--_;break}for(;_>=0;--_)s=n>>_&1,a+=ke(e.m_Encoders[i],s),i=i<<1|s;return a}function ie(e){e.BackPrev=-1,e.Prev1IsChar=0}function _e(e,r){return e.NumBitLevels=r,e.Models=a(1<<r),e}function ae(e,r,t){var n,s,o=1;for(s=e.NumBitLevels;0!=s;)n=t>>>--s&1,Pe(r,e.Models,o,n),o=o<<1|n}function ce(e,r){var t,n,s=1,o=0;for(n=e.NumBitLevels;0!=n;)t=r>>>--n&1,o+=ke(e.Models[s],t),s=(s<<1)+t;return o}function fe(e,r,t){var n,s,o=1;for(s=0;s<e.NumBitLevels;++s)n=1&t,Pe(r,e.Models,o,n),o=o<<1|n,t>>=1}function ue(e,r){var t,n,s=1,o=0;for(n=e.NumBitLevels;0!=n;--n)t=1&r,r>>>=1,o+=ke(e.Models[s],t),s=s<<1|t;return o}function me(e,r,t,n,s){var o,i,_=1;for(i=0;i<n;++i)Pe(t,e,r+_,o=1&s),_=_<<1|o,s>>=1}function pe(e,r,t,n){var s,o,i=1,_=0;for(o=t;0!=o;--o)s=1&n,n>>>=1,_+=he[(2047&(e[r+i]-s^-s))>>>2],i=i<<1|s;return _}function de(e){for(var r=e.length-1;r>=0;--r)e[r]=1024}var he=function(){var e,r,t,n=[];for(r=8;r>=0;--r)for(e=1<<9-r,t=1<<9-r-1;t<e;++t)n[t]=(r<<6)+(e-t<<6>>>9-r-1);return n}();function Pe(e,r,t,n){var s,o=r[t];s=(e.Range>>>11)*o,n?(e.Low=c(e.Low,f(d(s),[4294967295,0])),e.Range-=s,r[t]=o-(o>>>5)<<16>>16):(e.Range=s,r[t]=o+(2048-o>>>5)<<16>>16),-16777216&e.Range||(e.Range<<=8,ve(e))}function le(e,r,t){for(var n=t-1;n>=0;--n)e.Range>>>=1,1==(r>>>n&1)&&(e.Low=c(e.Low,d(e.Range))),-16777216&e.Range||(e.Range<<=8,ve(e))}function Be(e){return c(c(d(e._cacheSize),e._position),[4,0])}function ve(e){var r,t,n,s,o=h((t=e.Low,n=32,s=B(t,n&=63),t[1]<0&&(s=c(s,l([2,0],63-n))),s));if(0!=o||u(e.Low,[4278190080,0])<0){e._position=c(e._position,d(e._cacheSize)),r=e._cache;do{M(e.Stream,r+o),r=255}while(0!=--e._cacheSize);e._cache=h(e.Low)>>>24}++e._cacheSize,e.Low=l(f(e.Low,[16777215,0]),8)}function ke(e,r){return he[(2047&(e-r^-r))>>>2]}function Se(e){var r,t,n,s=[],o=0,i=e.length;if("object"==typeof e)return e;for(function(e,r,t,n,s){var o;for(o=r;o<t;++o)n[s++]=e.charCodeAt(o)}(e,0,i,s,0),n=0;n<i;++n)(r=s[n])>=1&&r<=127?++o:o+=!r||r>=128&&r<=2047?2:3;for(t=[],o=0,n=0;n<i;++n)(r=s[n])>=1&&r<=127?t[o++]=r<<24>>24:!r||r>=128&&r<=2047?(t[o++]=(192|r>>6&31)<<24>>24,t[o++]=(128|63&r)<<24>>24):(t[o++]=(224|r>>12&15)<<24>>24,t[o++]=(128|r>>6&63)<<24>>24,t[o++]=(128|63&r)<<24>>24);return t}function Me(e){return e[1]+e[0]}var be,Ee=(be=[{s:16,f:64,m:0},{s:20,f:64,m:0},{s:19,f:64,m:1},{s:20,f:64,m:1},{s:21,f:128,m:1},{s:22,f:128,m:1},{s:23,f:128,m:1},{s:24,f:255,m:1},{s:25,f:255,m:1}],function(e){return be[e-1]||be[6]});return"undefined"==typeof onmessage||"undefined"!=typeof window&&void 0!==window.document||(onmessage=function(r){r&&r.data&&r.data.action==e&&LZMA.compress(r.data.data,r.data.mode,r.data.cbn)}),{compress:function(n,s,o,i){var _,a,c={},f=void 0===o&&void 0===i;if("function"!=typeof o&&(a=o,o=i=0),i=i||function(e){if(void 0!==a)return function(e,t){postMessage({action:r,cbn:t,result:e})}(e,a)},o=o||function(r,t){if(void 0!==a)return postMessage({action:e,cbn:a,result:r,error:t})},f){for(c.c=g({},Se(n),Ee(s));A(c.c.chunker););return S(c.c.output)}try{c.c=g({},Se(n),Ee(s)),i(0)}catch(e){return o(null,e)}t(function e(){try{for(var r,n=(new Date).getTime();A(c.c.chunker);)if(_=Me(c.c.chunker.inBytesProcessed)/Me(c.c.length_0),(new Date).getTime()-n>200)return i(_),t(e,0),0;i(1),r=S(c.c.output),t(o.bind(null,r),0)}catch(e){o(null,e)}},0)}}}();this.LZMA=this.LZMA_WORKER=LZMA;
