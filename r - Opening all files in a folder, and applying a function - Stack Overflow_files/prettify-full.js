var IN_GLOBAL_SCOPE=!0;window.PR_SHOULD_USE_CONTINUATION=!0;var prettyPrintOne,prettyPrint;!function(){function e(e){function t(e){var t=e.charCodeAt(0);if(92!==t)return t;var n=e.charAt(1);return t=d[n],t?t:n>="0"&&"7">=n?parseInt(e.substring(1),8):"u"===n||"x"===n?parseInt(e.substring(2),16):e.charCodeAt(1)}function n(e){if(32>e)return(16>e?"\\x0":"\\x")+e.toString(16);var t=String.fromCharCode(e);return"\\"===t||"-"===t||"]"===t||"^"===t?"\\"+t:t}function i(e){var i=e.substring(1,e.length-1).match(new RegExp("\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]","g")),a=[],r="^"===i[0],o=["["];r&&o.push("^");for(var s=r?1:0,c=i.length;c>s;++s){var l=i[s];if(/\\[bdsw]/i.test(l))o.push(l);else{var u,d=t(l);c>s+2&&"-"===i[s+1]?(u=t(i[s+2]),s+=2):u=d,a.push([d,u]),65>u||d>122||(65>u||d>90||a.push([32|Math.max(65,d),32|Math.min(u,90)]),97>u||d>122||a.push([-33&Math.max(97,d),-33&Math.min(u,122)]))}}a.sort(function(e,t){return e[0]-t[0]||t[1]-e[1]});for(var p=[],f=[],s=0;s<a.length;++s){var h=a[s];h[0]<=f[1]+1?f[1]=Math.max(f[1],h[1]):p.push(f=h)}for(var s=0;s<p.length;++s){var h=p[s];o.push(n(h[0])),h[1]>h[0]&&(h[1]+1>h[0]&&o.push("-"),o.push(n(h[1])))}return o.push("]"),o.join("")}function a(e){for(var t=e.source.match(new RegExp("(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)","g")),a=t.length,s=[],c=0,l=0;a>c;++c){var u=t[c];if("("===u)++l;else if("\\"===u.charAt(0)){var d=+u.substring(1);d&&(l>=d?s[d]=-1:t[c]=n(d))}}for(var c=1;c<s.length;++c)-1===s[c]&&(s[c]=++r);for(var c=0,l=0;a>c;++c){var u=t[c];if("("===u)++l,s[l]||(t[c]="(?:");else if("\\"===u.charAt(0)){var d=+u.substring(1);d&&l>=d&&(t[c]="\\"+s[d])}}for(var c=0;a>c;++c)"^"===t[c]&&"^"!==t[c+1]&&(t[c]="");if(e.ignoreCase&&o)for(var c=0;a>c;++c){var u=t[c],p=u.charAt(0);u.length>=2&&"["===p?t[c]=i(u):"\\"!==p&&(t[c]=u.replace(/[a-zA-Z]/g,function(e){var t=e.charCodeAt(0);return"["+String.fromCharCode(-33&t,32|t)+"]"}))}return t.join("")}for(var r=0,o=!1,s=!1,c=0,l=e.length;l>c;++c){var u=e[c];if(u.ignoreCase)s=!0;else if(/[a-z]/i.test(u.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi,""))){o=!0,s=!1;break}}for(var d={"b":8,"t":9,"n":10,"v":11,"f":12,"r":13},p=[],c=0,l=e.length;l>c;++c){var u=e[c];if(u.global||u.multiline)throw new Error(""+u);p.push("(?:"+a(u)+")")}return new RegExp(p.join("|"),s?"gi":"g")}function t(e,t){function n(e){var c=e.nodeType;if(1==c){if(i.test(e.className))return;for(var l=e.firstChild;l;l=l.nextSibling)n(l);var u=e.nodeName.toLowerCase();("br"===u||"li"===u)&&(a[s]="\n",o[s<<1]=r++,o[s++<<1|1]=e)}else if(3==c||4==c){var d=e.nodeValue;d.length&&(d=t?d.replace(/\r\n?/g,"\n"):d.replace(/[ \t\r\n]+/g," "),a[s]=d,o[s<<1]=r,r+=d.length,o[s++<<1|1]=e)}}var i=/(?:^|\s)nocode(?:\s|$)/,a=[],r=0,o=[],s=0;return n(e),{"sourceCode":a.join("").replace(/\n$/,""),"spans":o}}function n(e,t,n,i){if(t){var a={"sourceCode":t,"basePos":e};n(a),i.push.apply(i,a.decorations)}}function i(e){for(var t=void 0,n=e.firstChild;n;n=n.nextSibling){var i=n.nodeType;t=1===i?t?e:n:3===i?F.test(n.nodeValue)?e:t:t}return t===e?void 0:t}function a(t,i){var a,r={};!function(){for(var n=t.concat(i),o=[],s={},c=0,l=n.length;l>c;++c){var u=n[c],d=u[3];if(d)for(var p=d.length;--p>=0;)r[d.charAt(p)]=u;var f=u[1],h=""+f;s.hasOwnProperty(h)||(o.push(f),s[h]=null)}o.push(/[\0-\uffff]/),a=e(o)}();var o=i.length,s=function(e){for(var t=e.sourceCode,c=e.basePos,u=[c,N],d=0,p=t.match(a)||[],f={},h=0,g=p.length;g>h;++h){var m,v=p[h],b=f[v],x=void 0;if("string"==typeof b)m=!1;else{var $=r[v.charAt(0)];if($)x=v.match($[1]),b=$[0];else{for(var w=0;o>w;++w)if($=i[w],x=v.match($[1])){b=$[0];break}x||(b=N)}m=b.length>=5&&"lang-"===b.substring(0,5),!m||x&&"string"==typeof x[1]||(m=!1,b=q),m||(f[v]=b)}var y=d;if(d+=v.length,m){var k=x[1],S=v.indexOf(k),E=S+k.length;x[2]&&(E=v.length-x[2].length,S=E-k.length);var T=b.substring(5);n(c+y,v.substring(0,S),s,u),n(c+y+S,k,l(T,k),u),n(c+y+E,v.substring(E),s,u)}else u.push(c+y,b)}e.decorations=u};return s}function r(e){var t=[],n=[];e.tripleQuotedStrings?t.push([_,/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,null,"'\""]):e.multiLineStrings?t.push([_,/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,null,"'\"`"]):t.push([_,/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,null,"\"'"]),e.verbatimStrings&&n.push([_,/^@\"(?:[^\"]|\"\")*(?:\"|$)/,null]);var i=e.hashComments;i&&(e.cStyleComments?(i>1?t.push([R,/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,null,"#"]):t.push([R,/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/,null,"#"]),n.push([_,/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,null])):t.push([R,/^#[^\r\n]*/,null,"#"])),e.cStyleComments&&(n.push([R,/^\/\/[^\r\n]*/,null]),n.push([R,/^\/\*[\s\S]*?(?:\*\/|$)/,null]));var r=e.regexLiterals;if(r){var o=r>1?"":"\n\r",s=o?".":"[\\S\\s]",c="/(?=[^/*"+o+"])(?:[^/\\x5B\\x5C"+o+"]|\\x5C"+s+"|\\x5B(?:[^\\x5C\\x5D"+o+"]|\\x5C"+s+")*(?:\\x5D|$))+/";n.push(["lang-regex",RegExp("^"+B+"("+c+")")])}var l=e.types;l&&n.push([A,l]);var u=(""+e.keywords).replace(/^ | $/g,"");u.length&&n.push([P,new RegExp("^(?:"+u.replace(/[\s,]+/g,"|")+")\\b"),null]),t.push([N,/^\s+/,null," \r\n	 "]);var d="^.[^\\s\\w.$@'\"`/\\\\]*";return e.regexLiterals&&(d+="(?!s*/)"),n.push([O,/^@[a-z_$][a-z_$@0-9]*/i,null],[A,/^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/,null],[N,/^[a-z_$][a-z_$@0-9]*/i,null],[O,new RegExp("^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*","i"),null,"0123456789"],[N,/^\\[\s\S]?/,null],[L,new RegExp(d),null]),a(t,n)}function o(e,t,n){function i(e){var t=e.nodeType;if(1!=t||r.test(e.className)){if((3==t||4==t)&&n){var c=e.nodeValue,l=c.match(o);if(l){var u=c.substring(0,l.index);e.nodeValue=u;var d=c.substring(l.index+l[0].length);if(d){var p=e.parentNode;p.insertBefore(s.createTextNode(d),e.nextSibling)}a(e),u||e.parentNode.removeChild(e)}}}else if("br"===e.nodeName)a(e),e.parentNode&&e.parentNode.removeChild(e);else for(var f=e.firstChild;f;f=f.nextSibling)i(f)}function a(e){function t(e,n){var i=n?e.cloneNode(!1):e,a=e.parentNode;if(a){var r=t(a,1),o=e.nextSibling;r.appendChild(i);for(var s=o;s;s=o)o=s.nextSibling,r.appendChild(s)}return i}for(;!e.nextSibling;)if(e=e.parentNode,!e)return;for(var n,i=t(e.nextSibling,0);(n=i.parentNode)&&1===n.nodeType;)i=n;l.push(i)}for(var r=/(?:^|\s)nocode(?:\s|$)/,o=/\r\n?|\n/,s=e.ownerDocument,c=s.createElement("li");e.firstChild;)c.appendChild(e.firstChild);for(var l=[c],u=0;u<l.length;++u)i(l[u]);t===(0|t)&&l[0].setAttribute("value",t);var d=s.createElement("ol");d.className="linenums";for(var p=Math.max(0,t-1|0)||0,u=0,f=l.length;f>u;++u)c=l[u],c.className="L"+(u+p)%10,c.firstChild||c.appendChild(s.createTextNode(" ")),d.appendChild(c);e.appendChild(d)}function s(e){var t=/\bMSIE\s(\d+)/.exec(navigator.userAgent);t=t&&+t[1]<=8;var n=/\n/g,i=e.sourceCode,a=i.length,r=0,o=e.spans,s=o.length,c=0,l=e.decorations,u=l.length,d=0;l[u]=a;var p,f;for(f=p=0;u>f;)l[f]!==l[f+2]?(l[p++]=l[f++],l[p++]=l[f++]):f+=2;for(u=p,f=p=0;u>f;){for(var h=l[f],g=l[f+1],m=f+2;u>=m+2&&l[m+1]===g;)m+=2;l[p++]=h,l[p++]=g,f=m}u=l.length=p;var v,b=e.sourceNode;b&&(v=b.style.display,b.style.display="none");try{for(;s>c;){var x,$=(o[c],o[c+2]||a),w=l[d+2]||a,m=Math.min($,w),y=o[c+1];if(1!==y.nodeType&&(x=i.substring(r,m))){t&&(x=x.replace(n,"\r")),y.nodeValue=x;var k=y.ownerDocument,S=k.createElement("span");S.className=l[d+1];var E=y.parentNode;E.replaceChild(S,y),S.appendChild(y),$>r&&(o[c+1]=y=k.createTextNode(i.substring(m,$)),E.insertBefore(y,S.nextSibling))}r=m,r>=$&&(c+=2),r>=w&&(d+=2)}}finally{b&&(b.style.display=v)}}function c(e,t){for(var n=t.length;--n>=0;){var i=t[n];W.hasOwnProperty(i)?f.console&&console.warn("cannot override language handler %s",i):W[i]=e}}function l(e,t){return e&&W.hasOwnProperty(e)||(e=/^\s*</.test(t)?"default-markup":"default-code"),W[e]}function u(e){var n=e.langExtension;try{var i=t(e.sourceNode,e.pre),a=i.sourceCode;e.sourceCode=a,e.spans=i.spans,e.basePos=0,l(n,a)(e),s(e)}catch(r){f.console&&console.log(r&&r.stack||r)}}function d(e,t,n){var i=document.createElement("div");i.innerHTML="<pre>"+e+"</pre>",i=i.firstChild,n&&o(i,n,!0);var a={"langExtension":t,"numberLines":n,"sourceNode":i,"pre":1};return u(a),i.innerHTML}function p(e,t){function n(e){return r.getElementsByTagName(e)}function a(){for(var t=f.PR_SHOULD_USE_CONTINUATION?g.now()+250:1/0;v<l.length&&g.now()<t;v++){for(var n=l[v],r=S,c=n;c=c.previousSibling;){var d=c.nodeType,p=(7===d||8===d)&&c.nodeValue;if(p?!/^\??prettify\b/.test(p):3!==d||/\S/.test(c.nodeValue))break;if(p){r={},p.replace(/\b(\w+)=([\w:.%+-]+)/g,function(e,t,n){r[t]=n});break}}var h=n.className;if((r!==S||x.test(h))&&!$.test(h)){for(var E=!1,T=n.parentNode;T;T=T.parentNode){var C=T.tagName;if(k.test(C)&&T.className&&x.test(T.className)){E=!0;break}}if(!E){n.className+=" prettyprinted";var I=r.lang;if(!I){I=h.match(b);var _;!I&&(_=i(n))&&y.test(_.tagName)&&(I=_.className.match(b)),I&&(I=I[1])}var P;if(w.test(n.tagName))P=1;else{var R=n.currentStyle,A=s.defaultView,O=R?R.whiteSpace:A&&A.getComputedStyle?A.getComputedStyle(n,null).getPropertyValue("white-space"):0;P=O&&"pre"===O.substring(0,3)}var L=r.linenums;(L="true"===L||+L)||(L=h.match(/\blinenums\b(?::(\d+))?/),L=L?L[1]&&L[1].length?+L[1]:!0:!1),L&&o(n,L,P),m={"langExtension":I,"sourceNode":n,"numberLines":L,"pre":P},u(m)}}}v<l.length?setTimeout(a,250):"function"==typeof e&&e()}for(var r=t||document.body,s=r.ownerDocument||document,c=[n("pre"),n("code"),n("xmp")],l=[],d=0;d<c.length;++d)for(var p=0,h=c[d].length;h>p;++p)l.push(c[d][p]);c=null;var g=Date;g.now||(g={"now":function(){return+new Date}});var m,v=0,b=/\blang(?:uage)?-([\w.]+)(?!\S)/,x=/\bprettyprint\b/,$=/\bprettyprinted\b/,w=/pre|xmp/i,y=/^code$/i,k=/^(?:pre|code|xmp)$/i,S={};a()}var f=window,h=["break,continue,do,else,for,if,return,while"],g=[h,"auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],m=[g,"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],v=[m,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],b=[m,"abstract,assert,boolean,byte,extends,final,finally,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],x=[b,"as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,internal,into,is,let,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],$="all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",w=[m,"debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],y="caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",k=[h,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],S=[h,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],E=[h,"as,assert,const,copy,drop,enum,extern,fail,false,fn,impl,let,log,loop,match,mod,move,mut,priv,pub,pure,ref,self,static,struct,true,trait,type,unsafe,use"],T=[h,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],C=[v,x,w,y,k,S,T],I=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,_="str",P="kwd",R="com",A="typ",O="lit",L="pun",N="pln",M="tag",D="dec",q="src",U="atn",j="atv",H="nocode",B="(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*",F=/\S/,V=r({"keywords":C,"hashComments":!0,"cStyleComments":!0,"multiLineStrings":!0,"regexLiterals":!0}),W={};c(V,["default-code"]),c(a([],[[N,/^[^<?]+/],[D,/^<!\w[^>]*(?:>|$)/],[R,/^<\!--[\s\S]*?(?:-\->|$)/],["lang-",/^<\?([\s\S]+?)(?:\?>|$)/],["lang-",/^<%([\s\S]+?)(?:%>|$)/],[L,/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),["default-markup","htm","html","mxml","xhtml","xml","xsl"]),c(a([[N,/^[\s]+/,null," 	\r\n"],[j,/^(?:\"[^\"]*\"?|\'[^\']*\'?)/,null,"\"'"]],[[M,/^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],[U,/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],[L,/^[=<>\/]+/],["lang-js",/^on\w+\s*=\s*\"([^\"]+)\"/i],["lang-js",/^on\w+\s*=\s*\'([^\']+)\'/i],["lang-js",/^on\w+\s*=\s*([^\"\'>\s]+)/i],["lang-css",/^style\s*=\s*\"([^\"]+)\"/i],["lang-css",/^style\s*=\s*\'([^\']+)\'/i],["lang-css",/^style\s*=\s*([^\"\'>\s]+)/i]]),["in.tag"]),c(a([],[[j,/^[\s\S]+/]]),["uq.val"]),c(r({"keywords":v,"hashComments":!0,"cStyleComments":!0,"types":I}),["c","cc","cpp","cxx","cyc","m"]),c(r({"keywords":"null,true,false"}),["json"]),c(r({"keywords":x,"hashComments":!0,"cStyleComments":!0,"verbatimStrings":!0,"types":I}),["cs"]),c(r({"keywords":b,"cStyleComments":!0}),["java"]),c(r({"keywords":T,"hashComments":!0,"multiLineStrings":!0}),["bash","bsh","csh","sh"]),c(r({"keywords":k,"hashComments":!0,"multiLineStrings":!0,"tripleQuotedStrings":!0}),["cv","py","python"]),c(r({"keywords":y,"hashComments":!0,"multiLineStrings":!0,"regexLiterals":2}),["perl","pl","pm"]),c(r({"keywords":S,"hashComments":!0,"multiLineStrings":!0,"regexLiterals":!0}),["rb","ruby"]),c(r({"keywords":w,"cStyleComments":!0,"regexLiterals":!0}),["javascript","js"]),c(r({"keywords":$,"hashComments":3,"cStyleComments":!0,"multilineStrings":!0,"tripleQuotedStrings":!0,"regexLiterals":!0}),["coffee"]),c(r({"keywords":E,"cStyleComments":!0,"multilineStrings":!0}),["rc","rs","rust"]),c(a([],[[_,/^[\s\S]+/]]),["regex"]);var J=f.PR={"createSimpleLexer":a,"registerLangHandler":c,"sourceDecorator":r,"PR_ATTRIB_NAME":U,"PR_ATTRIB_VALUE":j,"PR_COMMENT":R,"PR_DECLARATION":D,"PR_KEYWORD":P,"PR_LITERAL":O,"PR_NOCODE":H,"PR_PLAIN":N,"PR_PUNCTUATION":L,"PR_SOURCE":q,"PR_STRING":_,"PR_TAG":M,"PR_TYPE":A,"prettyPrintOne":IN_GLOBAL_SCOPE?f.prettyPrintOne=d:prettyPrintOne=d,"prettyPrint":prettyPrint=IN_GLOBAL_SCOPE?f.prettyPrint=p:prettyPrint=p};"function"==typeof define&&define.amd&&define("google-code-prettify",[],function(){return J})}(),PR.registerLangHandler(PR.createSimpleLexer([["opn",/^[\(\{\[]+/,null,"([{"],["clo",/^[\)\}\]]+/,null,")]}"],[PR.PR_COMMENT,/^;[^\r\n]*/,null,";"],[PR.PR_PLAIN,/^[\t\n\r \xA0]+/,null,"	\n\r  "],[PR.PR_STRING,/^\"(?:[^\"\\]|\\[\s\S])*(?:\"|$)/,null,'"']],[[PR.PR_KEYWORD,/^(?:def|if|do|let|quote|var|fn|loop|recur|throw|try|monitor-enter|monitor-exit|defmacro|defn|defn-|macroexpand|macroexpand-1|for|doseq|dosync|dotimes|and|or|when|not|assert|doto|proxy|defstruct|first|rest|cons|defprotocol|deftype|defrecord|reify|defmulti|defmethod|meta|with-meta|ns|in-ns|create-ns|import|intern|refer|alias|namespace|resolve|ref|deref|refset|new|set!|memfn|to-array|into-array|aset|gen-class|reduce|map|filter|find|nil?|empty?|hash-map|hash-set|vec|vector|seq|flatten|reverse|assoc|dissoc|list|list?|disj|get|union|difference|intersection|extend|extend-type|extend-protocol|prn)\b/,null],[PR.PR_TYPE,/^:[0-9a-zA-Z\-]+/]]),["clj"]),PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[ \t\r\n\f]+/,null," 	\r\n\f"]],[[PR.PR_STRING,/^\"(?:[^\n\r\f\\\"]|\\(?:\r\n?|\n|\f)|\\[\s\S])*\"/,null],[PR.PR_STRING,/^\'(?:[^\n\r\f\\\']|\\(?:\r\n?|\n|\f)|\\[\s\S])*\'/,null],["lang-css-str",/^url\(([^\)\"\']+)\)/i],[PR.PR_KEYWORD,/^(?:url|rgb|\!important|@import|@page|@media|@charset|inherit)(?=[^\-\w]|$)/i,null],["lang-css-kw",/^(-?(?:[_a-z]|(?:\\[0-9a-f]+ ?))(?:[_a-z0-9\-]|\\(?:\\[0-9a-f]+ ?))*)\s*:/i],[PR.PR_COMMENT,/^\/\*[^*]*\*+(?:[^\/*][^*]*\*+)*\//],[PR.PR_COMMENT,/^(?:<!--|-->)/],[PR.PR_LITERAL,/^(?:\d+|\d*\.\d+)(?:%|[a-z]+)?/i],[PR.PR_LITERAL,/^#(?:[0-9a-f]{3}){1,2}\b/i],[PR.PR_PLAIN,/^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i],[PR.PR_PUNCTUATION,/^[^\s\w\'\"]+/]]),["css"]),PR.registerLangHandler(PR.createSimpleLexer([],[[PR.PR_KEYWORD,/^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i]]),["css-kw"]),PR.registerLangHandler(PR.createSimpleLexer([],[[PR.PR_STRING,/^[^\)\"\']+/]]),["css-str"]),PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[\t\n\r \xA0]+/,null,"	\n\r  "],[PR.PR_PLAIN,/^(?:\"(?:[^\"\\]|\\[\s\S])*(?:\"|$)|\'(?:[^\'\\]|\\[\s\S])+(?:\'|$)|`[^`]*(?:`|$))/,null,"\"'"]],[[PR.PR_COMMENT,/^(?:\/\/[^\r\n]*|\/\*[\s\S]*?\*\/)/],[PR.PR_PLAIN,/^(?:[^\/\"\'`]|\/(?![\/\*]))+/i]]),["go"]),PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[\t\n\x0B\x0C\r ]+/,null,"	\n\f\r "],[PR.PR_STRING,/^\"(?:[^\"\\\n\x0C\r]|\\[\s\S])*(?:\"|$)/,null,'"'],[PR.PR_STRING,/^\'(?:[^\'\\\n\x0C\r]|\\[^&])\'?/,null,"'"],[PR.PR_LITERAL,/^(?:0o[0-7]+|0x[\da-f]+|\d+(?:\.\d+)?(?:e[+\-]?\d+)?)/i,null,"0123456789"]],[[PR.PR_COMMENT,/^(?:(?:--+(?:[^\r\n\x0C]*)?)|(?:\{-(?:[^-]|-+[^-\}])*-\}))/],[PR.PR_KEYWORD,/^(?:case|class|data|default|deriving|do|else|if|import|in|infix|infixl|infixr|instance|let|module|newtype|of|then|type|where|_)(?=[^a-zA-Z0-9\']|$)/,null],[PR.PR_PLAIN,/^(?:[A-Z][\w\']*\.)*[a-zA-Z][\w\']*/],[PR.PR_PUNCTUATION,/^[^\t\n\x0B\x0C\r a-zA-Z0-9\'\"]+/]]),["hs"]),PR.registerLangHandler(PR.createSimpleLexer([["opn",/^\(+/,null,"("],["clo",/^\)+/,null,")"],[PR.PR_COMMENT,/^;[^\r\n]*/,null,";"],[PR.PR_PLAIN,/^[\t\n\r \xA0]+/,null,"	\n\r  "],[PR.PR_STRING,/^\"(?:[^\"\\]|\\[\s\S])*(?:\"|$)/,null,'"']],[[PR.PR_KEYWORD,/^(?:block|c[ad]+r|catch|con[ds]|def(?:ine|un)|do|eq|eql|equal|equalp|eval-when|flet|format|go|if|labels|lambda|let|load-time-value|locally|macrolet|multiple-value-call|nil|progn|progv|quote|require|return-from|setq|symbol-macrolet|t|tagbody|the|throw|unwind)\b/,null],[PR.PR_LITERAL,/^[+\-]?(?:[0#]x[0-9a-f]+|\d+\/\d+|(?:\.\d+|\d+(?:\.\d*)?)(?:[ed][+\-]?\d+)?)/i],[PR.PR_LITERAL,/^\'(?:-*(?:\w|\\[\x21-\x7e])(?:[\w-]*|\\[\x21-\x7e])[=!?]?)?/],[PR.PR_PLAIN,/^-*(?:[a-z_]|\\[\x21-\x7e])(?:[\w-]*|\\[\x21-\x7e])[=!?]?/i],[PR.PR_PUNCTUATION,/^[^\w\t\n\r \xA0()\"\\\';]+/]]),["cl","el","lisp","lsp","scm","ss","rkt"]),PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[\t\n\r \xA0]+/,null,"	\n\r  "],[PR.PR_STRING,/^(?:\"(?:[^\"\\]|\\[\s\S])*(?:\"|$)|\'(?:[^\'\\]|\\[\s\S])*(?:\'|$))/,null,"\"'"]],[[PR.PR_COMMENT,/^--(?:\[(=*)\[[\s\S]*?(?:\]\1\]|$)|[^\r\n]*)/],[PR.PR_STRING,/^\[(=*)\[[\s\S]*?(?:\]\1\]|$)/],[PR.PR_KEYWORD,/^(?:and|break|do|else|elseif|end|false|for|function|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/,null],[PR.PR_LITERAL,/^[+-]?(?:0x[\da-f]+|(?:(?:\.\d+|\d+(?:\.\d*)?)(?:e[+\-]?\d+)?))/i],[PR.PR_PLAIN,/^[a-z_]\w*/i],[PR.PR_PUNCTUATION,/^[^\w\t\n\r \xA0][^\w\t\n\r \xA0\"\'\-\+=]*/]]),["lua"]),PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[\t\n\r \xA0]+/,null,"	\n\r  "],[PR.PR_COMMENT,/^#(?:if[\t\n\r \xA0]+(?:[a-z_$][\w\']*|``[^\r\n\t`]*(?:``|$))|else|endif|light)/i,null,"#"],[PR.PR_STRING,/^(?:\"(?:[^\"\\]|\\[\s\S])*(?:\"|$)|\'(?:[^\'\\]|\\[\s\S])(?:\'|$))/,null,"\"'"]],[[PR.PR_COMMENT,/^(?:\/\/[^\r\n]*|\(\*[\s\S]*?\*\))/],[PR.PR_KEYWORD,/^(?:abstract|and|as|assert|begin|class|default|delegate|do|done|downcast|downto|elif|else|end|exception|extern|false|finally|for|fun|function|if|in|inherit|inline|interface|internal|lazy|let|match|member|module|mutable|namespace|new|null|of|open|or|override|private|public|rec|return|static|struct|then|to|true|try|type|upcast|use|val|void|when|while|with|yield|asr|land|lor|lsl|lsr|lxor|mod|sig|atomic|break|checked|component|const|constraint|constructor|continue|eager|event|external|fixed|functor|global|include|method|mixin|object|parallel|process|protected|pure|sealed|trait|virtual|volatile)\b/],[PR.PR_LITERAL,/^[+\-]?(?:0x[\da-f]+|(?:(?:\.\d+|\d+(?:\.\d*)?)(?:e[+\-]?\d+)?))/i],[PR.PR_PLAIN,/^(?:[a-z_][\w']*[!?#]?|``[^\r\n\t`]*(?:``|$))/i],[PR.PR_PUNCTUATION,/^[^\t\n\r \xA0\"\'\w]+/]]),["fs","ml"]),PR.registerLangHandler(PR.createSimpleLexer([],[]),["none"]),PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_STRING,/^(?:\'(?:[^\'\r\n]|\\.)*(?:\'|$))/,null,"'"],[PR.PR_PLAIN,/^\s+/,null," \r\n	 "]],[[PR.PR_COMMENT,/^(?:\/\/[^\r\n]*)|\(\*[\s\S]*?(?:\*\)|$)|^\{[\s\S]*?(?:\}|$)/,null],[PR.PR_KEYWORD,/^(?:AND|ARRAY|AS|ASM|BEGIN|CASE|CLASS|CONST|CONSTRUCTOR|DESTRUCTOR|DISPINTERFACE|DIV|DO|DOWNTO|ELSE|END|EXCEPT|EXPORTS|FILE|FINALIZATION|FINALLY|FOR|FUNCTION|GOTO|IF|IMPLEMENTATION|IN|INHERITED|INITIALIZATION|INLINE|INTERFACE|IS|LABEL|LIBRARY|MOD|NIL|NOT|OBJECT|OF|OR|PACKED|PROCEDURE|PROGRAM|PROPERTY|RAISE|RECORD|REPEAT|RESOURCESTRING|SET|SHL|SHR|STRING|THEN|THREADVAR|TO|TRY|TYPE|UNIT|UNTIL|USES|VAR|WHILE|WITH|XOR)\b/i,null],[PR.PR_LITERAL,/^(?:true|false|self|nil)/i,null],[PR.PR_PLAIN,/^[a-z][a-z0-9]*/i,null],[PR.PR_LITERAL,/^(?:\$[a-f0-9]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+\-]?\d+)?)/i,null,"0123456789"],[PR.PR_PUNCTUATION,/^.[^\s\w\.$@\'\/]*/,null]]),["pascal"]),PR.registerLangHandler(PR.sourceDecorator({"keywords":"bytes,default,double,enum,extend,extensions,false,group,import,max,message,option,optional,package,repeated,required,returns,rpc,service,syntax,to,true","types":/^(bool|(double|s?fixed|[su]?int)(32|64)|float|string)\b/,"cStyleComments":!0}),["proto"]),PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[\t\n\r \xA0]+/,null,"	\n\r  "],[PR.PR_STRING,/^(?:"(?:(?:""(?:""?(?!")|[^\\"]|\\.)*"{0,3})|(?:[^"\r\n\\]|\\.)*"?))/,null,'"'],[PR.PR_LITERAL,/^`(?:[^\r\n\\`]|\\.)*`?/,null,"`"],[PR.PR_PUNCTUATION,/^[!#%&()*+,\-:;<=>?@\[\\\]^{|}~]+/,null,"!#%&()*+,-:;<=>?@[\\]^{|}~"]],[[PR.PR_STRING,/^'(?:[^\r\n\\']|\\(?:'|[^\r\n']+))'/],[PR.PR_LITERAL,/^'[a-zA-Z_$][\w$]*(?!['$\w])/],[PR.PR_KEYWORD,/^(?:abstract|case|catch|class|def|do|else|extends|final|finally|for|forSome|if|implicit|import|lazy|match|new|object|override|package|private|protected|requires|return|sealed|super|throw|trait|try|type|val|var|while|with|yield)\b/],[PR.PR_LITERAL,/^(?:true|false|null|this)\b/],[PR.PR_LITERAL,/^(?:(?:0(?:[0-7]+|X[0-9A-F]+))L?|(?:(?:0|[1-9][0-9]*)(?:(?:\.[0-9]+)?(?:E[+\-]?[0-9]+)?F?|L?))|\\.[0-9]+(?:E[+\-]?[0-9]+)?F?)/i],[PR.PR_TYPE,/^[$_]*[A-Z][_$A-Z0-9]*[a-z][\w$]*/],[PR.PR_PLAIN,/^[$a-zA-Z_][\w$]*/],[PR.PR_COMMENT,/^\/(?:\/.*|\*(?:\/|\**[^*/])*(?:\*+\/?)?)/],[PR.PR_PUNCTUATION,/^(?:\.+|\/)/]]),["scala"]),PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[\t\n\r \xA0]+/,null,"	\n\r  "],[PR.PR_STRING,/^(?:"(?:[^\"\\]|\\.)*"|'(?:[^\'\\]|\\.)*')/,null,"\"'"]],[[PR.PR_COMMENT,/^(?:--[^\r\n]*|\/\*[\s\S]*?(?:\*\/|$))/],[PR.PR_KEYWORD,/^(?:ADD|ALL|ALTER|AND|ANY|APPLY|AS|ASC|AUTHORIZATION|BACKUP|BEGIN|BETWEEN|BREAK|BROWSE|BULK|BY|CASCADE|CASE|CHECK|CHECKPOINT|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMN|COMMIT|COMPUTE|CONNECT|CONSTRAINT|CONTAINS|CONTAINSTABLE|CONTINUE|CONVERT|CREATE|CROSS|CURRENT|CURRENT_DATE|CURRENT_TIME|CURRENT_TIMESTAMP|CURRENT_USER|CURSOR|DATABASE|DBCC|DEALLOCATE|DECLARE|DEFAULT|DELETE|DENY|DESC|DISK|DISTINCT|DISTRIBUTED|DOUBLE|DROP|DUMMY|DUMP|ELSE|END|ERRLVL|ESCAPE|EXCEPT|EXEC|EXECUTE|EXISTS|EXIT|FETCH|FILE|FILLFACTOR|FOLLOWING|FOR|FOREIGN|FREETEXT|FREETEXTTABLE|FROM|FULL|FUNCTION|GOTO|GRANT|GROUP|HAVING|HOLDLOCK|IDENTITY|IDENTITYCOL|IDENTITY_INSERT|IF|IN|INDEX|INNER|INSERT|INTERSECT|INTO|IS|JOIN|KEY|KILL|LEFT|LIKE|LINENO|LOAD|MATCH|MATCHED|MERGE|NATURAL|NATIONAL|NOCHECK|NONCLUSTERED|NOCYCLE|NOT|NULL|NULLIF|OF|OFF|OFFSETS|ON|OPEN|OPENDATASOURCE|OPENQUERY|OPENROWSET|OPENXML|OPTION|OR|ORDER|OUTER|OVER|PARTITION|PERCENT|PIVOT|PLAN|PRECEDING|PRECISION|PRIMARY|PRINT|PROC|PROCEDURE|PUBLIC|RAISERROR|READ|READTEXT|RECONFIGURE|REFERENCES|REPLICATION|RESTORE|RESTRICT|RETURN|REVOKE|RIGHT|ROLLBACK|ROWCOUNT|ROWGUIDCOL|ROWS?|RULE|SAVE|SCHEMA|SELECT|SESSION_USER|SET|SETUSER|SHUTDOWN|SOME|START|STATISTICS|SYSTEM_USER|TABLE|TEXTSIZE|THEN|TO|TOP|TRAN|TRANSACTION|TRIGGER|TRUNCATE|TSEQUAL|UNBOUNDED|UNION|UNIQUE|UNPIVOT|UPDATE|UPDATETEXT|USE|USER|USING|VALUES|VARYING|VIEW|WAITFOR|WHEN|WHERE|WHILE|WITH|WITHIN|WRITETEXT|XML)(?=[^\w-]|$)/i,null],[PR.PR_LITERAL,/^[+-]?(?:0x[\da-f]+|(?:(?:\.\d+|\d+(?:\.\d*)?)(?:e[+\-]?\d+)?))/i],[PR.PR_PLAIN,/^[a-z_][\w-]*/i],[PR.PR_PUNCTUATION,/^[^\w\t\n\r \xA0\"\'][^\w\t\n\r \xA0+\-\"\']*/]]),["sql"]),PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[\t\n\r \xA0]+/,null,"	\n\r  "],[PR.PR_COMMENT,/^%[^\r\n]*/,null,"%"]],[[PR.PR_KEYWORD,/^\\[a-zA-Z@]+/],[PR.PR_KEYWORD,/^\\./],[PR.PR_TYPE,/^[$&]/],[PR.PR_LITERAL,/[+-]?(?:\.\d+|\d+(?:\.\d*)?)(cm|em|ex|in|pc|pt|bp|mm)/i],[PR.PR_PUNCTUATION,/^[{}()\[\]=]+/]]),["latex","tex"]),PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[\t\n\r \xA0\u2028\u2029]+/,null,"	\n\r  \u2028\u2029"],[PR.PR_STRING,/^(?:[\"\u201C\u201D](?:[^\"\u201C\u201D]|[\"\u201C\u201D]{2})(?:[\"\u201C\u201D]c|$)|[\"\u201C\u201D](?:[^\"\u201C\u201D]|[\"\u201C\u201D]{2})*(?:[\"\u201C\u201D]|$))/i,null,'"“”'],[PR.PR_COMMENT,/^[\'\u2018\u2019](?:_(?:\r\n?|[^\r]?)|[^\r\n_\u2028\u2029])*/,null,"'‘’"]],[[PR.PR_KEYWORD,/^(?:AddHandler|AddressOf|Alias|And|AndAlso|Ansi|As|Assembly|Auto|Boolean|ByRef|Byte|ByVal|Call|Case|Catch|CBool|CByte|CChar|CDate|CDbl|CDec|Char|CInt|Class|CLng|CObj|Const|CShort|CSng|CStr|CType|Date|Decimal|Declare|Default|Delegate|Dim|DirectCast|Do|Double|Each|Else|ElseIf|End|EndIf|Enum|Erase|Error|Event|Exit|Finally|For|Friend|Function|Get|GetType|GoSub|GoTo|Handles|If|Implements|Imports|In|Inherits|Integer|Interface|Is|Let|Lib|Like|Long|Loop|Me|Mod|Module|MustInherit|MustOverride|MyBase|MyClass|Namespace|New|Next|Not|NotInheritable|NotOverridable|Object|On|Option|Optional|Or|OrElse|Overloads|Overridable|Overrides|ParamArray|Preserve|Private|Property|Protected|Public|RaiseEvent|ReadOnly|ReDim|RemoveHandler|Resume|Return|Select|Set|Shadows|Shared|Short|Single|Static|Step|Stop|String|Structure|Sub|SyncLock|Then|Throw|To|Try|TypeOf|Unicode|Until|Variant|Wend|When|While|With|WithEvents|WriteOnly|Xor|EndIf|GoSub|Let|Variant|Wend)\b/i,null],[PR.PR_COMMENT,/^REM\b[^\r\n\u2028\u2029]*/i],[PR.PR_LITERAL,/^(?:True\b|False\b|Nothing\b|\d+(?:E[+\-]?\d+[FRD]?|[FRDSIL])?|(?:&H[0-9A-F]+|&O[0-7]+)[SIL]?|\d*\.\d+(?:E[+\-]?\d+)?[FRD]?|#\s+(?:\d+[\-\/]\d+[\-\/]\d+(?:\s+\d+:\d+(?::\d+)?(\s*(?:AM|PM))?)?|\d+:\d+(?::\d+)?(\s*(?:AM|PM))?)\s+#)/i],[PR.PR_PLAIN,/^(?:(?:[a-z]|_\w)\w*(?:\[[%&@!#]+\])?|\[(?:[a-z]|_\w)\w*\])/i],[PR.PR_PUNCTUATION,/^[^\w\t\n\r \"\'\[\]\xA0\u2018\u2019\u201C\u201D\u2028\u2029]+/],[PR.PR_PUNCTUATION,/^(?:\[|\])/]]),["vb","vbs"]),PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[\t\n\r \xA0]+/,null,"	\n\r  "]],[[PR.PR_STRING,/^(?:[BOX]?"(?:[^\"]|"")*"|'.')/i],[PR.PR_COMMENT,/^--[^\r\n]*/],[PR.PR_KEYWORD,/^(?:abs|access|after|alias|all|and|architecture|array|assert|attribute|begin|block|body|buffer|bus|case|component|configuration|constant|disconnect|downto|else|elsif|end|entity|exit|file|for|function|generate|generic|group|guarded|if|impure|in|inertial|inout|is|label|library|linkage|literal|loop|map|mod|nand|new|next|nor|not|null|of|on|open|or|others|out|package|port|postponed|procedure|process|pure|range|record|register|reject|rem|report|return|rol|ror|select|severity|shared|signal|sla|sll|sra|srl|subtype|then|to|transport|type|unaffected|units|until|use|variable|wait|when|while|with|xnor|xor)(?=[^\w-]|$)/i,null],[PR.PR_TYPE,/^(?:bit|bit_vector|character|boolean|integer|real|time|string|severity_level|positive|natural|signed|unsigned|line|text|std_u?logic(?:_vector)?)(?=[^\w-]|$)/i,null],[PR.PR_TYPE,/^\'(?:ACTIVE|ASCENDING|BASE|DELAYED|DRIVING|DRIVING_VALUE|EVENT|HIGH|IMAGE|INSTANCE_NAME|LAST_ACTIVE|LAST_EVENT|LAST_VALUE|LEFT|LEFTOF|LENGTH|LOW|PATH_NAME|POS|PRED|QUIET|RANGE|REVERSE_RANGE|RIGHT|RIGHTOF|SIMPLE_NAME|STABLE|SUCC|TRANSACTION|VAL|VALUE)(?=[^\w-]|$)/i,null],[PR.PR_LITERAL,/^\d+(?:_\d+)*(?:#[\w\\.]+#(?:[+\-]?\d+(?:_\d+)*)?|(?:\.\d+(?:_\d+)*)?(?:E[+\-]?\d+(?:_\d+)*)?)/i],[PR.PR_PLAIN,/^(?:[a-z]\w*|\\[^\\]*\\)/i],[PR.PR_PUNCTUATION,/^[^\w\t\n\r \xA0\"\'][^\w\t\n\r \xA0\-\"\']*/]]),["vhdl","vhd"]),StackExchange.prettify={"applyCodeStyling":window.prettyPrint};