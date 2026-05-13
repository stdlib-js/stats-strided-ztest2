"use strict";var S=function(i,e){return function(){return e||i((e={exports:{}}).exports,e),e.exports}};var O=S(function(X,p){"use strict";var W=require("@stdlib/stats-base-ztest-alternative-resolve-str"),m=require("@stdlib/math-base-assert-is-nan"),k=require("@stdlib/stats-base-dists-normal-quantile").factory,B=require("@stdlib/stats-base-dists-normal-cdf").factory,b=require("@stdlib/stats-strided-mean").ndarray,G=require("@stdlib/math-base-special-sqrt"),H=require("@stdlib/math-base-special-abs"),J=require("@stdlib/array-float64"),L=require("@stdlib/constants-float64-pinf"),M=require("@stdlib/constants-float64-ninf"),C=B(0,1),I=k(0,1),v=new J(2);function T(i,e,x,a,n,l,F,y,d,q,V,j,Q,r){var u,c,z,A,P,R,t,N,s;return N=W(x),i<=0||e<=0||m(a)||m(n)||m(l)||m(q)||l<=0||q<=0||a<0||a>1?(v[0]=NaN,v[1]=NaN,r.rejected=!1,r.alternative=N,r.alpha=NaN,r.pValue=NaN,r.statistic=NaN,r.ci=v,r.nullValue=NaN,r.xmean=NaN,r.ymean=NaN,r):(P=l*l,R=q*q,c=G(P/i+R/e),z=b(i,F,y,d),A=b(e,V,j,Q),t=(z-A-n)/c,N==="less"?(u=C(t),s=I(1-a),v[0]=M,v[1]=n+(t+s)*c):N==="greater"?(u=1-C(t),s=I(1-a),v[0]=n+(t-s)*c,v[1]=L):(u=2*C(-H(t)),s=I(1-a/2),v[0]=n+(t-s)*c,v[1]=n+(t+s)*c),r.rejected=u<=a,r.alpha=a,r.pValue=u,r.statistic=t,r.ci=v,r.alternative=N,r.nullValue=n,r.xmean=z,r.ymean=A,r)}p.exports=T});var E=S(function(Y,D){"use strict";var w=require("@stdlib/strided-base-stride2offset"),U=O();function Z(i,e,x,a,n,l,F,y,d,q,V,j){return U(i,e,x,a,n,l,F,y,w(i,y),d,q,V,w(e,V),j)}D.exports=Z});var _=require("@stdlib/utils-define-nonenumerable-read-only-property"),K=E(),$=O();_(K,"ndarray",$);module.exports=K;
/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
