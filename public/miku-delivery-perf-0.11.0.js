var mikuDeliveryPerf=function(C){"use strict";var ot=Object.defineProperty,nt=Object.defineProperties;var st=Object.getOwnPropertyDescriptors;var We=Object.getOwnPropertySymbols;var ct=Object.prototype.hasOwnProperty,lt=Object.prototype.propertyIsEnumerable;var ye=(C,E,P)=>E in C?ot(C,E,{enumerable:!0,configurable:!0,writable:!0,value:P}):C[E]=P,xe=(C,E)=>{for(var P in E||(E={}))ct.call(E,P)&&ye(C,P,E[P]);if(We)for(var P of We(E))lt.call(E,P)&&ye(C,P,E[P]);return C},Ue=(C,E)=>nt(C,st(E));var U=(C,E,P)=>(ye(C,typeof E!="symbol"?E+"":E,P),P);var q=(C,E,P)=>new Promise((J,O)=>{var le=z=>{try{$(P.next(z))}catch(j){O(j)}},M=z=>{try{$(P.throw(z))}catch(j){O(j)}},$=z=>z.done?J(z.value):Promise.resolve(z.value).then(le,M);$((P=P.apply(C,E)).next())});const E="https://log.qiniuapi.com";function P(h){return Object.keys(h).map(e=>[e,h[e]]).filter(([e,t])=>t!==void 0).map(([e,t])=>t===null?encodeURIComponent(e):[e,t].map(encodeURIComponent).join("=")).join("&")}function J(){const h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",e=h.length;let t="";for(let a=0;a<20;a++)t+=h[Math.floor(Math.random()*e)];return t}function O(h){return parseFloat((h/1e3).toFixed(2))}class le{constructor(){U(this,"locked",!1);U(this,"waitings",[]);this.unlock=this.unlock.bind(this)}lock(){return q(this,null,function*(){return this.locked?(yield new Promise(e=>{this.waitings.push(e)}),this.unlock):(this.locked=!0,this.unlock)})}unlock(){if(this.waitings.length===0){this.locked=!1;return}this.waitings.shift()()}runExclusive(e){return q(this,null,function*(){const t=yield this.lock();try{return yield e()}catch(a){throw a}finally{t()}})}}var M=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function $(h){var e=h.default;if(typeof e=="function"){var t=function(){return e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(h).forEach(function(a){var f=Object.getOwnPropertyDescriptor(h,a);Object.defineProperty(t,a,f.get?f:{enumerable:!0,get:function(){return h[a]}})}),t}var z={exports:{}};(function(h,e){(function(t,a){var f="1.0.2",l="",p="?",T="function",_="undefined",y="object",m="string",x="major",i="model",o="name",r="type",s="vendor",u="version",S="architecture",n="console",c="mobile",d="tablet",w="smarttv",B="wearable",R="embedded",H=255,N="Amazon",V="Apple",Y="ASUS",F="BlackBerry",K="Browser",ie="Chrome",tt="Edge",ae="Firefox",re="Google",Ae="Huawei",pe="LG",me="Microsoft",Pe="Motorola",oe="Opera",we="Samsung",be="Sony",Ce="Xiaomi",ge="Zebra",Re="Facebook",it=function(b,k){var g={};for(var A in b)k[A]&&k[A].length%2===0?g[A]=k[A].concat(b[A]):g[A]=b[A];return g},ne=function(b){for(var k={},g=0;g<b.length;g++)k[b[g].toUpperCase()]=b[g];return k},Oe=function(b,k){return typeof b===m?X(k).indexOf(X(b))!==-1:!1},X=function(b){return b.toLowerCase()},at=function(b){return typeof b===m?b.replace(/[^\d\.]/g,l).split(".")[0]:a},ve=function(b,k){if(typeof b===m)return b=b.replace(/^\s\s*/,l).replace(/\s\s*$/,l),typeof k===_?b:b.substring(0,H)},Z=function(b,k){for(var g=0,A,v,ce,L,Q,I;g<k.length&&!Q;){var ze=k[g],De=k[g+1];for(A=v=0;A<ze.length&&!Q;)if(Q=ze[A++].exec(b),Q)for(ce=0;ce<De.length;ce++)I=Q[++v],L=De[ce],typeof L===y&&L.length>0?L.length===2?typeof L[1]==T?this[L[0]]=L[1].call(this,I):this[L[0]]=L[1]:L.length===3?typeof L[1]===T&&!(L[1].exec&&L[1].test)?this[L[0]]=I?L[1].call(this,I,L[2]):a:this[L[0]]=I?I.replace(L[1],L[2]):a:L.length===4&&(this[L[0]]=I?L[3].call(this,I.replace(L[1],L[2])):a):this[L]=I||a;g+=2}},_e=function(b,k){for(var g in k)if(typeof k[g]===y&&k[g].length>0){for(var A=0;A<k[g].length;A++)if(Oe(k[g][A],b))return g===p?a:g}else if(Oe(k[g],b))return g===p?a:g;return b},rt={"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"},Ne={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},Me={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[u,[o,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[u,[o,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[o,u],[/opios[\/ ]+([\w\.]+)/i],[u,[o,oe+" Mini"]],[/\bopr\/([\w\.]+)/i],[u,[o,oe]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[o,u],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[u,[o,"UC"+K]],[/\bqbcore\/([\w\.]+)/i],[u,[o,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[u,[o,"WeChat"]],[/konqueror\/([\w\.]+)/i],[u,[o,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[u,[o,"IE"]],[/yabrowser\/([\w\.]+)/i],[u,[o,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[o,/(.+)/,"$1 Secure "+K],u],[/\bfocus\/([\w\.]+)/i],[u,[o,ae+" Focus"]],[/\bopt\/([\w\.]+)/i],[u,[o,oe+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[u,[o,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[u,[o,"Dolphin"]],[/coast\/([\w\.]+)/i],[u,[o,oe+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[u,[o,"MIUI "+K]],[/fxios\/([-\w\.]+)/i],[u,[o,ae]],[/\bqihu|(qi?ho?o?|360)browser/i],[[o,"360 "+K]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[o,/(.+)/,"$1 "+K],u],[/(comodo_dragon)\/([\w\.]+)/i],[[o,/_/g," "],u],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[o,u],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i],[o],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[o,Re],u],[/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[o,u],[/\bgsa\/([\w\.]+) .*safari\//i],[u,[o,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[u,[o,ie+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[o,ie+" WebView"],u],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[u,[o,"Android "+K]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[o,u],[/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],[u,[o,"Mobile Safari"]],[/version\/([\w\.]+) .*(mobile ?safari|safari)/i],[u,o],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[o,[u,_e,rt]],[/(webkit|khtml)\/([\w\.]+)/i],[o,u],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[o,"Netscape"],u],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[u,[o,ae+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[o,u]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[S,"amd64"]],[/(ia32(?=;))/i],[[S,X]],[/((?:i[346]|x)86)[;\)]/i],[[S,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[S,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[S,"armhf"]],[/windows (ce|mobile); ppc;/i],[[S,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[S,/ower/,l,X]],[/(sun4\w)[;\)]/i],[[S,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[S,X]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[i,[s,we],[r,d]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[i,[s,we],[r,c]],[/\((ip(?:hone|od)[\w ]*);/i],[i,[s,V],[r,c]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[i,[s,V],[r,d]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[i,[s,Ae],[r,d]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i],[i,[s,Ae],[r,c]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[i,/_/g," "],[s,Ce],[r,c]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[i,/_/g," "],[s,Ce],[r,d]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[i,[s,"OPPO"],[r,c]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[i,[s,"Vivo"],[r,c]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[i,[s,"Realme"],[r,c]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[i,[s,Pe],[r,c]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[i,[s,Pe],[r,d]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[i,[s,pe],[r,d]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[i,[s,pe],[r,c]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[i,[s,"Lenovo"],[r,d]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[i,/_/g," "],[s,"Nokia"],[r,c]],[/(pixel c)\b/i],[i,[s,re],[r,d]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[i,[s,re],[r,c]],[/droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[i,[s,be],[r,c]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[i,"Xperia Tablet"],[s,be],[r,d]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[i,[s,"OnePlus"],[r,c]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[i,[s,N],[r,d]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[i,/(.+)/g,"Fire Phone $1"],[s,N],[r,c]],[/(playbook);[-\w\),; ]+(rim)/i],[i,s,[r,d]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[i,[s,F],[r,c]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[i,[s,Y],[r,d]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[i,[s,Y],[r,c]],[/(nexus 9)/i],[i,[s,"HTC"],[r,d]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i],[s,[i,/_/g," "],[r,c]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[i,[s,"Acer"],[r,d]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[i,[s,"Meizu"],[r,c]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[i,[s,"Sharp"],[r,c]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[s,i,[r,c]],[/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[s,i,[r,d]],[/(surface duo)/i],[i,[s,me],[r,d]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[i,[s,"Fairphone"],[r,c]],[/(u304aa)/i],[i,[s,"AT&T"],[r,c]],[/\bsie-(\w*)/i],[i,[s,"Siemens"],[r,c]],[/\b(rct\w+) b/i],[i,[s,"RCA"],[r,d]],[/\b(venue[\d ]{2,7}) b/i],[i,[s,"Dell"],[r,d]],[/\b(q(?:mv|ta)\w+) b/i],[i,[s,"Verizon"],[r,d]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[i,[s,"Barnes & Noble"],[r,d]],[/\b(tm\d{3}\w+) b/i],[i,[s,"NuVision"],[r,d]],[/\b(k88) b/i],[i,[s,"ZTE"],[r,d]],[/\b(nx\d{3}j) b/i],[i,[s,"ZTE"],[r,c]],[/\b(gen\d{3}) b.+49h/i],[i,[s,"Swiss"],[r,c]],[/\b(zur\d{3}) b/i],[i,[s,"Swiss"],[r,d]],[/\b((zeki)?tb.*\b) b/i],[i,[s,"Zeki"],[r,d]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[s,"Dragon Touch"],i,[r,d]],[/\b(ns-?\w{0,9}) b/i],[i,[s,"Insignia"],[r,d]],[/\b((nxa|next)-?\w{0,9}) b/i],[i,[s,"NextBook"],[r,d]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[s,"Voice"],i,[r,c]],[/\b(lvtel\-)?(v1[12]) b/i],[[s,"LvTel"],i,[r,c]],[/\b(ph-1) /i],[i,[s,"Essential"],[r,c]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[i,[s,"Envizen"],[r,d]],[/\b(trio[-\w\. ]+) b/i],[i,[s,"MachSpeed"],[r,d]],[/\btu_(1491) b/i],[i,[s,"Rotor"],[r,d]],[/(shield[\w ]+) b/i],[i,[s,"Nvidia"],[r,d]],[/(sprint) (\w+)/i],[s,i,[r,c]],[/(kin\.[onetw]{3})/i],[[i,/\./g," "],[s,me],[r,c]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[i,[s,ge],[r,d]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[i,[s,ge],[r,c]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[s,i,[r,n]],[/droid.+; (shield) bui/i],[i,[s,"Nvidia"],[r,n]],[/(playstation [345portablevi]+)/i],[i,[s,be],[r,n]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[i,[s,me],[r,n]],[/smart-tv.+(samsung)/i],[s,[r,w]],[/hbbtv.+maple;(\d+)/i],[[i,/^/,"SmartTV"],[s,we],[r,w]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[s,pe],[r,w]],[/(apple) ?tv/i],[s,[i,V+" TV"],[r,w]],[/crkey/i],[[i,ie+"cast"],[s,re],[r,w]],[/droid.+aft(\w)( bui|\))/i],[i,[s,N],[r,w]],[/\(dtv[\);].+(aquos)/i],[i,[s,"Sharp"],[r,w]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],[[s,ve],[i,ve],[r,w]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[r,w]],[/((pebble))app/i],[s,i,[r,B]],[/droid.+; (glass) \d/i],[i,[s,re],[r,B]],[/droid.+; (wt63?0{2,3})\)/i],[i,[s,ge],[r,B]],[/(quest( 2)?)/i],[i,[s,Re],[r,B]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[s,[r,R]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[i,[r,c]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[i,[r,d]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[r,d]],[/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],[[r,c]],[/(android[-\w\. ]{0,9});.+buil/i],[i,[s,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[u,[o,tt+"HTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[u,[o,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[o,u],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[u,o]],os:[[/microsoft (windows) (vista|xp)/i],[o,u],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[o,[u,_e,Ne]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[o,"Windows"],[u,_e,Ne]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[u,/_/g,"."],[o,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[o,"Mac OS"],[u,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86)/i],[u,o],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[o,u],[/\(bb(10);/i],[u,[o,F]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[u,[o,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[u,[o,ae+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[u,[o,"webOS"]],[/crkey\/([\d\.]+)/i],[u,[o,ie+"cast"]],[/(cros) [\w]+ ([\w\.]+\w)/i],[[o,"Chromium OS"],u],[/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[o,u],[/(sunos) ?([\w\.\d]*)/i],[[o,"Solaris"],u],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[o,u]]},W=function(b,k){if(typeof b===y&&(k=b,b=a),!(this instanceof W))return new W(b,k).getResult();var g=b||(typeof t!==_&&t.navigator&&t.navigator.userAgent?t.navigator.userAgent:l),A=k?it(Me,k):Me;return this.getBrowser=function(){var v={};return v[o]=a,v[u]=a,Z.call(v,g,A.browser),v.major=at(v.version),v},this.getCPU=function(){var v={};return v[S]=a,Z.call(v,g,A.cpu),v},this.getDevice=function(){var v={};return v[s]=a,v[i]=a,v[r]=a,Z.call(v,g,A.device),v},this.getEngine=function(){var v={};return v[o]=a,v[u]=a,Z.call(v,g,A.engine),v},this.getOS=function(){var v={};return v[o]=a,v[u]=a,Z.call(v,g,A.os),v},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return g},this.setUA=function(v){return g=typeof v===m&&v.length>H?ve(v,H):v,this},this.setUA(g),this};W.VERSION=f,W.BROWSER=ne([o,u,x]),W.CPU=ne([S]),W.DEVICE=ne([i,s,r,n,c,w,d,B,R]),W.ENGINE=W.OS=ne([o,u]),h.exports&&(e=h.exports=W),e.UAParser=W;var G=typeof t!==_&&(t.jQuery||t.Zepto);if(G&&!G.ua){var se=new W;G.ua=se.getResult(),G.ua.get=function(){return se.getUA()},G.ua.set=function(b){se.setUA(b);var k=se.getResult();for(var g in k)G.ua[g]=k[g]}}})(typeof window=="object"?window:M)})(z,z.exports);const j=z.exports,Ie="0.11.0";function qe(){var f,l;const{os:h,device:e,browser:t}=j(navigator.userAgent);let a;return typeof window!="undefined"?a=window.location:typeof self!==void 0&&(a=self.location),{os:`${h.name}_${h.version}`,browser:`${t.name}_${t.version}`,app:(f=a==null?void 0:a.host)!=null?f:"",sdk:`Web SDK v${Ie}`,dev_model:(l=e.model)!=null?l:"",dev_id:""}}var ke={exports:{}};function Ve(h){throw new Error('Could not dynamically require "'+h+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var ue={exports:{}};const He=$(Object.freeze(Object.defineProperty({__proto__:null,default:{}},Symbol.toStringTag,{value:"Module"})));var Le;function ee(){return Le||(Le=1,function(h,e){(function(t,a){h.exports=a()})(M,function(){var t=t||function(a,f){var l;if(typeof window!="undefined"&&window.crypto&&(l=window.crypto),typeof self!="undefined"&&self.crypto&&(l=self.crypto),typeof globalThis!="undefined"&&globalThis.crypto&&(l=globalThis.crypto),!l&&typeof window!="undefined"&&window.msCrypto&&(l=window.msCrypto),!l&&typeof M!="undefined"&&M.crypto&&(l=M.crypto),!l&&typeof Ve=="function")try{l=He}catch(n){}var p=function(){if(l){if(typeof l.getRandomValues=="function")try{return l.getRandomValues(new Uint32Array(1))[0]}catch(n){}if(typeof l.randomBytes=="function")try{return l.randomBytes(4).readInt32LE()}catch(n){}}throw new Error("Native crypto module could not be used to get secure random number.")},T=Object.create||function(){function n(){}return function(c){var d;return n.prototype=c,d=new n,n.prototype=null,d}}(),_={},y=_.lib={},m=y.Base=function(){return{extend:function(n){var c=T(this);return n&&c.mixIn(n),(!c.hasOwnProperty("init")||this.init===c.init)&&(c.init=function(){c.$super.init.apply(this,arguments)}),c.init.prototype=c,c.$super=this,c},create:function(){var n=this.extend();return n.init.apply(n,arguments),n},init:function(){},mixIn:function(n){for(var c in n)n.hasOwnProperty(c)&&(this[c]=n[c]);n.hasOwnProperty("toString")&&(this.toString=n.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),x=y.WordArray=m.extend({init:function(n,c){n=this.words=n||[],c!=f?this.sigBytes=c:this.sigBytes=n.length*4},toString:function(n){return(n||o).stringify(this)},concat:function(n){var c=this.words,d=n.words,w=this.sigBytes,B=n.sigBytes;if(this.clamp(),w%4)for(var R=0;R<B;R++){var H=d[R>>>2]>>>24-R%4*8&255;c[w+R>>>2]|=H<<24-(w+R)%4*8}else for(var N=0;N<B;N+=4)c[w+N>>>2]=d[N>>>2];return this.sigBytes+=B,this},clamp:function(){var n=this.words,c=this.sigBytes;n[c>>>2]&=4294967295<<32-c%4*8,n.length=a.ceil(c/4)},clone:function(){var n=m.clone.call(this);return n.words=this.words.slice(0),n},random:function(n){for(var c=[],d=0;d<n;d+=4)c.push(p());return new x.init(c,n)}}),i=_.enc={},o=i.Hex={stringify:function(n){for(var c=n.words,d=n.sigBytes,w=[],B=0;B<d;B++){var R=c[B>>>2]>>>24-B%4*8&255;w.push((R>>>4).toString(16)),w.push((R&15).toString(16))}return w.join("")},parse:function(n){for(var c=n.length,d=[],w=0;w<c;w+=2)d[w>>>3]|=parseInt(n.substr(w,2),16)<<24-w%8*4;return new x.init(d,c/2)}},r=i.Latin1={stringify:function(n){for(var c=n.words,d=n.sigBytes,w=[],B=0;B<d;B++){var R=c[B>>>2]>>>24-B%4*8&255;w.push(String.fromCharCode(R))}return w.join("")},parse:function(n){for(var c=n.length,d=[],w=0;w<c;w++)d[w>>>2]|=(n.charCodeAt(w)&255)<<24-w%4*8;return new x.init(d,c)}},s=i.Utf8={stringify:function(n){try{return decodeURIComponent(escape(r.stringify(n)))}catch(c){throw new Error("Malformed UTF-8 data")}},parse:function(n){return r.parse(unescape(encodeURIComponent(n)))}},u=y.BufferedBlockAlgorithm=m.extend({reset:function(){this._data=new x.init,this._nDataBytes=0},_append:function(n){typeof n=="string"&&(n=s.parse(n)),this._data.concat(n),this._nDataBytes+=n.sigBytes},_process:function(n){var c,d=this._data,w=d.words,B=d.sigBytes,R=this.blockSize,H=R*4,N=B/H;n?N=a.ceil(N):N=a.max((N|0)-this._minBufferSize,0);var V=N*R,Y=a.min(V*4,B);if(V){for(var F=0;F<V;F+=R)this._doProcessBlock(w,F);c=w.splice(0,V),d.sigBytes-=Y}return new x.init(c,Y)},clone:function(){var n=m.clone.call(this);return n._data=this._data.clone(),n},_minBufferSize:0});y.Hasher=u.extend({cfg:m.extend(),init:function(n){this.cfg=this.cfg.extend(n),this.reset()},reset:function(){u.reset.call(this),this._doReset()},update:function(n){return this._append(n),this._process(),this},finalize:function(n){n&&this._append(n);var c=this._doFinalize();return c},blockSize:16,_createHelper:function(n){return function(c,d){return new n.init(d).finalize(c)}},_createHmacHelper:function(n){return function(c,d){return new S.HMAC.init(n,d).finalize(c)}}});var S=_.algo={};return _}(Math);return t})}(ue)),ue.exports}var de={exports:{}},Se;function je(){return Se||(Se=1,function(h,e){(function(t,a){h.exports=a(ee())})(M,function(t){return function(){var a=t,f=a.lib,l=f.WordArray,p=f.Hasher,T=a.algo,_=[],y=T.SHA1=p.extend({_doReset:function(){this._hash=new l.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(m,x){for(var i=this._hash.words,o=i[0],r=i[1],s=i[2],u=i[3],S=i[4],n=0;n<80;n++){if(n<16)_[n]=m[x+n]|0;else{var c=_[n-3]^_[n-8]^_[n-14]^_[n-16];_[n]=c<<1|c>>>31}var d=(o<<5|o>>>27)+S+_[n];n<20?d+=(r&s|~r&u)+1518500249:n<40?d+=(r^s^u)+1859775393:n<60?d+=(r&s|r&u|s&u)-1894007588:d+=(r^s^u)-899497514,S=u,u=s,s=r<<30|r>>>2,r=o,o=d}i[0]=i[0]+o|0,i[1]=i[1]+r|0,i[2]=i[2]+s|0,i[3]=i[3]+u|0,i[4]=i[4]+S|0},_doFinalize:function(){var m=this._data,x=m.words,i=this._nDataBytes*8,o=m.sigBytes*8;return x[o>>>5]|=128<<24-o%32,x[(o+64>>>9<<4)+14]=Math.floor(i/4294967296),x[(o+64>>>9<<4)+15]=i,m.sigBytes=x.length*4,this._process(),this._hash},clone:function(){var m=p.clone.call(this);return m._hash=this._hash.clone(),m}});a.SHA1=p._createHelper(y),a.HmacSHA1=p._createHmacHelper(y)}(),t.SHA1})}(de)),de.exports}var fe={exports:{}},Te;function Fe(){return Te||(Te=1,function(h,e){(function(t,a){h.exports=a(ee())})(M,function(t){(function(){var a=t,f=a.lib,l=f.Base,p=a.enc,T=p.Utf8,_=a.algo;_.HMAC=l.extend({init:function(y,m){y=this._hasher=new y.init,typeof m=="string"&&(m=T.parse(m));var x=y.blockSize,i=x*4;m.sigBytes>i&&(m=y.finalize(m)),m.clamp();for(var o=this._oKey=m.clone(),r=this._iKey=m.clone(),s=o.words,u=r.words,S=0;S<x;S++)s[S]^=1549556828,u[S]^=909522486;o.sigBytes=r.sigBytes=i,this.reset()},reset:function(){var y=this._hasher;y.reset(),y.update(this._iKey)},update:function(y){return this._hasher.update(y),this},finalize:function(y){var m=this._hasher,x=m.finalize(y);m.reset();var i=m.finalize(this._oKey.clone().concat(x));return i}})})()})}(fe)),fe.exports}(function(h,e){(function(t,a,f){h.exports=a(ee(),je(),Fe())})(M,function(t){return t.HmacSHA1})})(ke);const Ke=ke.exports;var Ee={exports:{}};(function(h,e){(function(t,a){h.exports=a(ee())})(M,function(t){return function(){var a=t,f=a.lib,l=f.WordArray,p=a.enc;p.Base64={stringify:function(_){var y=_.words,m=_.sigBytes,x=this._map;_.clamp();for(var i=[],o=0;o<m;o+=3)for(var r=y[o>>>2]>>>24-o%4*8&255,s=y[o+1>>>2]>>>24-(o+1)%4*8&255,u=y[o+2>>>2]>>>24-(o+2)%4*8&255,S=r<<16|s<<8|u,n=0;n<4&&o+n*.75<m;n++)i.push(x.charAt(S>>>6*(3-n)&63));var c=x.charAt(64);if(c)for(;i.length%4;)i.push(c);return i.join("")},parse:function(_){var y=_.length,m=this._map,x=this._reverseMap;if(!x){x=this._reverseMap=[];for(var i=0;i<m.length;i++)x[m.charCodeAt(i)]=i}var o=m.charAt(64);if(o){var r=_.indexOf(o);r!==-1&&(y=r)}return T(_,y,x)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="};function T(_,y,m){for(var x=[],i=0,o=0;o<y;o++)if(o%4){var r=m[_.charCodeAt(o-1)]<<o%4*2,s=m[_.charCodeAt(o)]>>>6-o%4*2,u=r|s;x[i>>>2]|=u<<24-i%4*8,i++}return l.create(x,i)}}(),t.enc.Base64})})(Ee);const Ge=Ee.exports;function $e(h){let e=h.query?`${h.path}?${h.query}
`:`${h.path}
`;return h.body&&(e+=h.body),e}function Ye(h){let e;try{e=new URL(h.path).pathname}catch(T){e=h.path}let t=$e(Ue(xe({},h),{path:e}));const l=Ke(t,h.appSalt).toString(Ge).replace(/\+/g,"-").replace(/\//g,"_");let p=`QApp ${h.appID}:${l}`;return p=p.replace(/\//g,"_"),p=p.replace(/\+/g,"-"),p}const he=200;class Xe{constructor(e,t,a,f,l){U(this,"env",P(qe()));U(this,"flushMutex",new le);U(this,"buffer",[]);this.schemaName=e,this.fetch=t,this.flushNum=a,this.flushWait=f,this.app=l}callApiLog(e){return q(this,null,function*(){const t=this.fetch;try{const a=Ye({appID:this.app.appID,appSalt:this.app.appSalt,path:`${E}/v1/log/${this.schemaName}`}),f=yield t(new Request(`${E}/v1/log/${this.schemaName}`,{method:"POST",headers:{Authorization:a,"Content-Type":"text/csv","X-Env":this.env},body:Qe(e)}));if(!f.ok)throw new Error(`Unexpected response status: ${f.status} ${f.statusText}`)}catch(a){console.warn("Call log API failed:",a)}})}flush(){return q(this,null,function*(){return this.flushMutex.runExclusive(()=>q(this,null,function*(){const e=this.buffer.splice(0);if(e.length===0)return;const t=Math.ceil(e.length/he);return Promise.all(Array.from({length:t}).map((a,f)=>this.callApiLog(e.slice(f*he,(f+1)*he))))}))})}tryFlush(){return q(this,null,function*(){const e=yield this.flushMutex.runExclusive(()=>{const t=this.buffer;if(t.length===0)return!1;if(t.length>=this.flushNum)return!0;const a=Date.now()-t[0].ts;return a>=this.flushWait*1e3?!0:this.flushWait*1e3-a});if(e===!0)return this.flush();typeof e=="number"&&setTimeout(()=>this.tryFlush(),e)})}log(e){this.buffer.push(xe({ts:Date.now()},e)),this.tryFlush()}}class Ze{constructor(e,t=self.fetch,a=100,f=3){U(this,"schemaLoggers",new Map);this.appInfo=e,this.fetch=t,this.flushNum=a,this.flushWait=f}log(e,t){let a=this.schemaLoggers.get(e);a==null&&(a=new Xe(e,this.fetch,this.flushNum,this.flushWait,this.appInfo),this.schemaLoggers.set(e,a)),a.log(t)}}function Qe(h){const e=Object.keys(h[0]),t=["ts",...e.filter(l=>l!=="ts")],a=t.map(Be).join(","),f=h.map(l=>t.map(p=>l[p]).map(p=>p!=null?p+"":"").map(Be).join(","));return[a,...f].join(`
`)}function Be(h){let e=h.replace(/"/g,'""');return/("|,|\n)/.test(e)&&(e='"'+e+'"'),e}j(navigator.userAgent);const Je="miku-delivery/dc/v1",te=class{constructor(e,t,a){U(this,"pageLogData",{r_id:J(),ts:0,url:"",tag:"nocache",tag_reason:"",t_page_load:0,t_full_load:0,t_window_load:0});U(this,"logger");U(this,"lastLiveUrl","");this.tag=e,this.tagReason=t,this.app=a,this.logger=new Ze(a,void 0,void 0,3)}static initInstance(e,t,a){var p;const f=new te(e,t,a);f.pageLoadPerformance(),f.resourceLoadPerformance(),f.videoLoadPerformance(),te.mikuPerformanceInstance=f;const l={mikuDeliveryProxy:!0,type:"get-perf-rid",rid:f.pageLogData.r_id};return(p=navigator.serviceWorker.controller)==null||p.postMessage(l),f}pageLoadPerformance(){let e=new PerformanceObserver(t=>{t.getEntries().forEach(a=>{a.entryType==="navigation"&&a.initiatorType==="navigation"&&(this.pageLogData.ts=Date.now(),this.pageLogData.url=window.location.href,this.pageLogData.tag=this.tag,this.pageLogData.t_window_load=O(a.loadEventEnd-a.fetchStart),performance.getEntriesByType("paint").forEach(l=>{l.name==="first-contentful-paint"?this.pageLogData.t_full_load=O(l.startTime):l.name==="first-paint"&&(this.pageLogData.t_page_load=O(l.startTime))}),Promise.resolve(this.tagReason).then(l=>{this.pageLogData.tag_reason=l,this.submitPageLoadLog()}),e.disconnect())})});e.observe({entryTypes:["navigation"]})}resourceLoadPerformance(){new PerformanceObserver(t=>{t.getEntries().forEach(a=>{const f=new URL(a.name),l=f.pathname,p=f.hostname;a.entryType==="resource"&&p!==new URL(E).hostname&&(/\.(flv|m3u8)$/.test(l)?this.lastLiveUrl=a.name:/\.(3gp|aac|flac|mpe?g|mp3|mp4|m4a|m4v|m4p|oga|ogg|ogv|wav|webm|mov)$/.test(l)&&(this.lastLiveUrl=""),this.submitResourceLoadLog({r_id:this.pageLogData.r_id,ts:Date.now(),url:a.name,t_page_perf:O(a.duration)}))})}).observe({entryTypes:["resource"]})}videoLoadPerformance(){const e=[];new MutationObserver(()=>{const a=document.getElementsByTagName("video");for(const f of Array.from(a)){const l=f;e.includes(l)||(e.push(l),this.addVideoEventListener(l))}}).observe(document.body,{subtree:!0,childList:!0})}addVideoEventListener(e){let t=this.resetVideoLogData(),a="";e.addEventListener("loadstart",l=>{a=this.checknrestartVideoLog(t,e,l,a)}),e.addEventListener("loadedmetadata",l=>{a=this.checknrestartVideoLog(t,e,l,a),t.t_loaded_metadata=O(l.timeStamp-t.start)}),e.addEventListener("loadeddata",l=>{a=this.checknrestartVideoLog(t,e,l,a),t.t_loaded_data=O(l.timeStamp-t.start),t.t_duration=e.duration===1/0||Number.isNaN(e.duration)?-1:Number(e.duration.toFixed(2)),t.playback_rate=e.playbackRate,this.submitVideoLoadLog(t),t.lastSubmitLogTime=performance.now()}),e.addEventListener("seeking",()=>{t.isSeeking=!0,t.lastSeekingTime=performance.now()}),e.addEventListener("playing",l=>{a=this.checknrestartVideoLog(t,e,l,a);const p=performance.now();if(t.lastPlayingTime=p,t.lastWaitingTime){const T=p-t.lastWaitingTime;t.t_jank_total+=T,t.t_play_total+=T,t.lastWaitingTime=0}if(t.lastSeekingTime){const T=p-t.lastSeekingTime;t.t_seek_total+=T,t.t_play_total+=T,t.lastSeekingTime=0}}),e.addEventListener("timeupdate",()=>{performance.now()-t.lastSubmitLogTime>1e4&&(this.submitVideoLoadLog(t),t.lastSubmitLogTime=performance.now())});const f=()=>{const l=performance.now();if(t.lastPlayingTime){const p=l-t.lastPlayingTime;t.t_play_total+=p,t.lastPlayingTime=0}if(t.lastWaitingTime){const p=l-t.lastWaitingTime;t.t_jank_total+=p,t.t_play_total+=p,t.lastWaitingTime=0}if(t.lastSeekingTime){const p=l-t.lastSeekingTime;t.t_seek_total+=p,t.t_play_total+=p,t.lastSeekingTime=0}this.submitVideoLoadLog(t),t.lastSubmitLogTime=performance.now()};e.addEventListener("pause",f),e.addEventListener("stop",f),e.addEventListener("waiting",()=>{const l=performance.now();if(t.lastPlayingTime){const p=l-t.lastPlayingTime;t.t_play_total+=p,t.lastPlayingTime=0}t.isSeeking?t.isSeeking=!1:t.lastWaitingTime=l})}submitResourceLoadLog(e){this.logger.log("PageResourceLoadLog",e)}submitPageLoadLog(){this.logger.log("PageLoadLog",this.pageLogData)}submitVideoLoadLog(e){const t=performance.now(),a=e.lastPlayingTime?O(e.t_play_total+t-e.lastPlayingTime):O(e.t_play_total),f=e.lastWaitingTime?O(e.t_jank_total+t-e.lastWaitingTime):O(e.t_jank_total),l=e.lastSeekingTime?O(e.t_seek_total+t-e.lastSeekingTime):O(e.t_seek_total),p={r_id:e.r_id,s_id:e.s_id,ts:Date.now(),protocol:e.protocol,domain:e.domain,path:e.path,ts_play:e.ts_play,t_loaded_metadata:e.t_loaded_metadata,t_loaded_data:e.t_loaded_data,playback_rate:e.playback_rate,t_duration:e.type===0?e.t_duration:0,type:e.type,t_play_total:a,t_jank_total:e.type===0?f:l+f,t_seek_total:e.type===0?l:0};this.logger.log("PageVideoLoadLog",p)}checknrestartVideoLog(e,t,a,f){return this.isChangeVideoSource(f,t.src)&&(f=t.src,this.submitVideoLoadLog(e),e=this.resetVideoLogData()),this.getVideoBasicMessage(e,t,a),f}isChangeVideoSource(e,t){return e!==""&&e!==t}getVideoBasicMessage(e,t,a){if(e.path)return!1;let f="";this.lastLiveUrl?(f=this.lastLiveUrl,e.type=2):f=t.src,e.path=f;try{const l=new URL(f);e.protocol=l.protocol.slice(0,-1),e.domain=l.host}catch(l){const p=new URL(f.replace("blob:",""));e.protocol=p.protocol.slice(0,-1),e.domain=p.host}e.ts_play=Date.now(),e.start=a.timeStamp}resetVideoLogData(){return{ts:0,r_id:this.pageLogData.r_id,s_id:J(),protocol:"",domain:"",path:"",ts_play:0,t_play_total:0,t_loaded_metadata:0,t_loaded_data:0,t_jank_total:0,t_seek_total:0,playback_rate:0,type:1,t_duration:0,start:0,isSeeking:!1,lastPlayingTime:0,lastWaitingTime:0,lastSeekingTime:0,lastSubmitLogTime:0}}};let D=te;U(D,"mikuPerformanceInstance");const et=(h,e=!0,t)=>q(this,null,function*(){const f=yield(yield caches.open(Je)).keys();return new Promise((l,p)=>{if(D.mikuPerformanceInstance===void 0){if(t){l(D.initInstance(t,"",h));return}"serviceWorker"in navigator?navigator.serviceWorker.getRegistrations().then(function(T){return q(this,null,function*(){if(T.length===0)l(D.initInstance("direct",Promise.resolve(e).then(_=>_?"sw_not_registered":"no_miku"),h));else try{f.length?l(D.initInstance("cache","",h)):l(D.initInstance("nocache","",h))}catch(_){p(_)}})}).catch(T=>{p(T)}):l(D.initInstance("direct",Promise.resolve(e).then(T=>T?"sw_not_supported":"no_miku"),h))}else l(D.mikuPerformanceInstance)})});return C.MikuDeliveryPerformance=D,C.init=et,Object.defineProperties(C,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}}),C}({});
