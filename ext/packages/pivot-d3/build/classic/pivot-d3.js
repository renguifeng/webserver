var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||typeof Object.defineProperties=='function'?Object.defineProperty:function(b,c,a){a=a;if(b==Array.prototype||b==Object.prototype){return}b[c]=a.value};$jscomp.getGlobal=function(a){return typeof window!='undefined'&&window===a?a:typeof global!='undefined'&&global!=null?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.polyfill=function(i,f,j,k){if(!f){return}var a=$jscomp.global;var b=i.split('.');for(var e=0;e<b.length-1;e++){var d=b[e];if(!(d in a)){a[d]={}}a=a[d]}var g=b[b.length-1];var h=a[g];var c=f(h);if(c==h||c==null){return}$jscomp.defineProperty(a,g,{configurable:!0,writable:!0,value:c})};$jscomp.polyfill('Array.prototype.copyWithin',function(a){if(a){return a}var b=function(d,c,b){var e=this.length;d=Number(d);c=Number(c);b=Number(b!=null?b:e);if(d<c){b=Math.min(b,e);while(c<b){if(c in this){this[d++]=this[c++]}else {delete this[d++];c++}}}else {b=Math.min(b,e+c-d);d+=b-c;while(b>c){if(--b in this){this[--d]=this[b]}else {delete this[d]}}}return this};return b},'es6','es3');$jscomp.SYMBOL_PREFIX='jscomp_symbol_';$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};if(!$jscomp.global['Symbol']){$jscomp.global['Symbol']=$jscomp.Symbol}};$jscomp.Symbol=function(){var a=0;function Symbol(b){return $jscomp.SYMBOL_PREFIX+(b||'')+a++}return Symbol}();$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var a=$jscomp.global['Symbol'].iterator;if(!a){a=$jscomp.global['Symbol'].iterator=$jscomp.global['Symbol']('iterator')}if(typeof Array.prototype[a]!='function'){$jscomp.defineProperty(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}})}$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(a){var b=0;return $jscomp.iteratorPrototype(function(){if(b<a.length){return {done:!1,value:a[b++]}}else {return {done:!0}}})};$jscomp.iteratorPrototype=function(b){$jscomp.initSymbolIterator();var a={next:b};a[$jscomp.global['Symbol'].iterator]=function(){return this};return a};$jscomp.iteratorFromArray=function(a,d){$jscomp.initSymbolIterator();if(a instanceof String){a=a+''}var c=0;var b={next:function(){if(c<a.length){var e=c++;return {value:d(e,a[e]),done:!1}}b.next=function(){return {done:!0,value:void 0}};return b.next()}};b[Symbol.iterator]=function(){return b};return b};$jscomp.polyfill('Array.prototype.entries',function(a){if(a){return a}var b=function(){return $jscomp.iteratorFromArray(this,function(b,c){return [b,c]})};return b},'es6','es3');$jscomp.polyfill('Array.prototype.fill',function(a){if(a){return a}var b=function(f,c,b){var d=this.length||0;if(c<0){c=Math.max(0,d+c)}if(b==null||b>d){b=d}b=Number(b);if(b<0){b=Math.max(0,d+b)}for(var e=Number(c||0);e<b;e++){this[e]=f}return this};return b},'es6','es3');$jscomp.findInternal=function(a,d,e){if(a instanceof String){a=String(a)}var f=a.length;for(var b=0;b<f;b++){var c=a[b];if(d.call(e,c,b,a)){return {i:b,v:c}}}return {i:-1,v:void 0}};$jscomp.polyfill('Array.prototype.find',function(a){if(a){return a}var b=function(c,b){return $jscomp.findInternal(this,c,b).v};return b},'es6','es3');$jscomp.polyfill('Array.prototype.findIndex',function(a){if(a){return a}var b=function(c,b){return $jscomp.findInternal(this,c,b).i};return b},'es6','es3');$jscomp.polyfill('Array.from',function(a){if(a){return a}var b=function(b,c,g){$jscomp.initSymbolIterator();c=c!=null?c:function(d){return d};var d=[];var f=b[Symbol.iterator];if(typeof f=='function'){b=f.call(b);var h;while(!(h=b.next()).done){d.push(c.call(g,h.value))}}else {var i=b.length;for(var e=0;e<i;e++){d.push(c.call(g,b[e]))}}return d};return b},'es6','es3');$jscomp.polyfill('Object.is',function(a){if(a){return a}var b=function(b,c){if(b===c){return b!==0||1/b===1/c}else {return b!==b&&c!==c}};return b},'es6','es3');$jscomp.polyfill('Array.prototype.includes',function(a){if(a){return a}var b=function(d,e){var b=this;if(b instanceof String){b=String(b)}var f=b.length;for(var c=e||0;c<f;c++){if(b[c]==d||Object.is(b[c],d)){return !0}}return !1};return b},'es7','es3');$jscomp.polyfill('Array.prototype.keys',function(a){if(a){return a}var b=function(){return $jscomp.iteratorFromArray(this,function(b){return b})};return b},'es6','es3');$jscomp.polyfill('Array.of',function(a){if(a){return a}var b=function(b){return Array.from(arguments)};return b},'es6','es3');$jscomp.polyfill('Array.prototype.values',function(a){if(a){return a}var b=function(){return $jscomp.iteratorFromArray(this,function(c,b){return b})};return b},'es6','es3');$jscomp.makeIterator=function(a){$jscomp.initSymbolIterator();var b=a[Symbol.iterator];return b?b.call(a):$jscomp.arrayIterator(a)};$jscomp.FORCE_POLYFILL_PROMISE=!1;$jscomp.polyfill('Promise',function(c){if(c&&!$jscomp.FORCE_POLYFILL_PROMISE){return c}function AsyncExecutor(){this.batch_=null}AsyncExecutor.prototype.asyncExecute=function(a){if(this.batch_==null){this.batch_=[];this.asyncExecuteBatch_()}this.batch_.push(a);return this};AsyncExecutor.prototype.asyncExecuteBatch_=function(){var a=this;this.asyncExecuteFunction(function(){a.executeBatch_()})};var e=$jscomp.global['setTimeout'];AsyncExecutor.prototype.asyncExecuteFunction=function(a){e(a,0)};AsyncExecutor.prototype.executeBatch_=function(){while(this.batch_&&this.batch_.length){var b=this.batch_;this.batch_=[];for(var a=0;a<b.length;++a){var d=b[a];delete b[a];try{d()}catch(f){this.asyncThrow_(f)}}}this.batch_=null};AsyncExecutor.prototype.asyncThrow_=function(a){this.asyncExecuteFunction(function(){throw a})};var b={PENDING:0,FULFILLED:1,REJECTED:2};var a=function(d){this.state_=b.PENDING;this.result_=undefined;this.onSettledCallbacks_=[];var a=this.createResolveAndReject_();try{d(a.resolve,a.reject)}catch(f){a.reject(f)}};a.prototype.createResolveAndReject_=function(){var b=this;var a=!1;function firstCallWins(d){return function(e){if(!a){a=!0;d.call(b,e)}}}return {resolve:firstCallWins(this.resolveTo_),reject:firstCallWins(this.reject_)}};a.prototype.resolveTo_=function(b){if(b===this){this.reject_(new TypeError('A Promise cannot resolve to itself'))}else {if(b instanceof a){this.settleSameAsPromise_(b)}else {if(isObject(b)){this.resolveToNonPromiseObj_(b)}else {this.fulfill_(b)}}}};a.prototype.resolveToNonPromiseObj_=function(b){var a=undefined;try{a=b.then}catch(f){this.reject_(f);return}if(typeof a=='function'){this.settleSameAsThenable_(a,b)}else {this.fulfill_(b)}};function isObject(a){switch(typeof a){case 'object':return a!=null;case 'function':return !0;default:return !1;}}a.prototype.reject_=function(a){this.settle_(b.REJECTED,a)};a.prototype.fulfill_=function(a){this.settle_(b.FULFILLED,a)};a.prototype.settle_=function(d,a){if(this.state_!=b.PENDING){throw new Error('Cannot settle('+d+', '+a|'): Promise already settled in state'+this.state_)}this.state_=d;this.result_=a;this.executeOnSettledCallbacks_()};a.prototype.executeOnSettledCallbacks_=function(){if(this.onSettledCallbacks_!=null){var b=this.onSettledCallbacks_;for(var a=0;a<b.length;++a){b[a].call();b[a]=null}this.onSettledCallbacks_=null}};var d=new AsyncExecutor();a.prototype.settleSameAsPromise_=function(b){var a=this.createResolveAndReject_();b.callWhenSettled_(a.resolve,a.reject)};a.prototype.settleSameAsThenable_=function(b,d){var a=this.createResolveAndReject_();try{b.call(d,a.resolve,a.reject)}catch(f){a.reject(f)}};a.prototype.then=function(f,g){var b;var d;var e=new a(function(a,e){b=a;d=e});function createCallback(a,e){if(typeof a=='function'){return function(h){try{b(a(h))}catch(i){d(i)}}}else {return e}}this.callWhenSettled_(createCallback(f,b),createCallback(g,d));return e};a.prototype['catch']=function(a){return this.then(undefined,a)};a.prototype.callWhenSettled_=function(e,f){var a=this;function callback(){switch(a.state_){case b.FULFILLED:e(a.result_);break;case b.REJECTED:f(a.result_);break;default:throw new Error('Unexpected state: '+a.state_);}}if(this.onSettledCallbacks_==null){d.asyncExecute(callback)}else {this.onSettledCallbacks_.push(function(){d.asyncExecute(callback)})}};function resolvingPromise(b){if(b instanceof a){return b}else {return new a(function(a,d){a(b)})}}a['resolve']=resolvingPromise;a['reject']=function(b){return new a(function(d,a){a(b)})};a['race']=function(b){return new a(function(e,f){var d=$jscomp.makeIterator(b);for(var a=d.next();!a.done;a=d.next()){resolvingPromise(a.value).callWhenSettled_(e,f)}})};a['all']=function(e){var d=$jscomp.makeIterator(e);var b=d.next();if(b.done){return resolvingPromise([])}else {return new a(function(g,h){var a=[];var f=0;function onFulfilled(b){return function(d){a[b]=d;f--;if(f==0){g(a)}}}do{a.push(undefined);f++;resolvingPromise(b.value).callWhenSettled_(onFulfilled(a.length-1),h);b=d.next()}while(!b.done)})}};return a},'es6','es3');$jscomp.executeAsyncGenerator=function(a){function passValueToGenerator(b){return a.next(b)}function passErrorToGenerator(b){return a['throw'](b)}return new Promise(function(b,c){function handleGeneratorRecord(d){if(d.done){b(d.value)}else {Promise.resolve(d.value).then(passValueToGenerator,passErrorToGenerator).then(handleGeneratorRecord,c)}}handleGeneratorRecord(a.next())})};$jscomp.owns=function(b,a){return Object.prototype.hasOwnProperty.call(b,a)};$jscomp.polyfill('WeakMap',function(c){function isConformant(){if(!c||!Object.seal){return !1}try{var b=Object.seal({});var d=Object.seal({});var a=new c([[b,2],[d,3]]);if(a.get(b)!=2||a.get(d)!=3){return !1}a['delete'](b);a.set(d,4);return !a.has(b)&&a.get(d)==4}catch(e){return !1}}if(isConformant()){return c}var a='$jscomp_hidden_'+Math.random().toString().substring(2);function insert(b){if(!$jscomp.owns(b,a)){var d={};$jscomp.defineProperty(b,a,{value:d})}}function patch(a){var b=Object[a];if(b){Object[a]=function(d){insert(d);return b(d)}}}patch('freeze');patch('preventExtensions');patch('seal');var d=0;var b=function(a){this.id_=(d+=Math.random()+1).toString();if(a){$jscomp.initSymbol();$jscomp.initSymbolIterator();var f=$jscomp.makeIterator(a);var b;while(!(b=f.next()).done){var e=b.value;this.set(e[0],e[1])}}};b.prototype.set=function(b,d){insert(b);if(!$jscomp.owns(b,a)){throw new Error('WeakMap key fail: '+b)}b[a][this.id_]=d;return this};b.prototype.get=function(b){return $jscomp.owns(b,a)?b[a][this.id_]:undefined};b.prototype.has=function(b){return $jscomp.owns(b,a)&&$jscomp.owns(b[a],this.id_)};b.prototype['delete']=function(b){if(!$jscomp.owns(b,a)||!$jscomp.owns(b[a],this.id_)){return !1}return delete b[a][this.id_]};return b},'es6','es3');$jscomp.MapEntry=function(){this.previous;this.next;this.head;this.key;this.value};$jscomp.polyfill('Map',function(b){var g=!$jscomp.ASSUME_NO_NATIVE_MAP&&function(){if(!b||!b.prototype.entries||typeof Object.seal!='function'){return !1}try{b=b;var e=Object.seal({x:4});var c=new b($jscomp.makeIterator([[e,'s']]));if(c.get(e)!='s'||c.size!=1||c.get({x:4})||c.set({x:4},'t')!=c||c.size!=2){return !1}var d=c.entries();var a=d.next();if(a.done||a.value[0]!=e||a.value[1]!='s'){return !1}a=d.next();if(a.done||a.value[0].x!=4||a.value[1]!='t'||!d.next().done){return !1}return !0}catch(j){return !1}}();if(g){return b}$jscomp.initSymbol();$jscomp.initSymbolIterator();var e=new WeakMap();var a=function(a){this.data_={};this.head_=f();this.size=0;if(a){var e=$jscomp.makeIterator(a);var c;while(!(c=e.next()).done){var d=c.value;this.set(d[0],d[1])}}};a.prototype.set=function(e,d){var a=c(this,e);if(!a.list){a.list=this.data_[a.id]=[]}if(!a.entry){a.entry={next:this.head_,previous:this.head_.previous,head:this.head_,key:e,value:d};a.list.push(a.entry);this.head_.previous.next=a.entry;this.head_.previous=a.entry;this.size++}else {a.entry.value=d}return this};a.prototype['delete']=function(d){var a=c(this,d);if(a.entry&&a.list){a.list.splice(a.index,1);if(!a.list.length){delete this.data_[a.id]}a.entry.previous.next=a.entry.next;a.entry.next.previous=a.entry.previous;a.entry.head=null;this.size--;return !0}return !1};a.prototype.clear=function(){this.data_={};this.head_=this.head_.previous=f();this.size=0};a.prototype.has=function(a){return !!c(this,a).entry};a.prototype.get=function(d){var a=c(this,d).entry;return a&&a.value};a.prototype.entries=function(){return d(this,function(a){return [a.key,a.value]})};a.prototype.keys=function(){return d(this,function(a){return a.key})};a.prototype.values=function(){return d(this,function(a){return a.value})};a.prototype.forEach=function(e,d){var f=this.entries();var c;while(!(c=f.next()).done){var a=c.value;e.call(d,a[1],a[0],this)}};a.prototype[Symbol.iterator]=a.prototype.entries;var c=function(g,e){var f=i(e);var a=g.data_[f];if(a&&$jscomp.owns(g.data_,f)){for(var d=0;d<a.length;d++){var c=a[d];if(e!==e&&c.key!==c.key||e===c.key){return {id:f,list:a,index:d,entry:c}}}}return {id:f,list:a,index:-1,entry:undefined}};var d=function(c,d){var a=c.head_;return $jscomp.iteratorPrototype(function(){if(a){while(a.head!=c.head_){a=a.previous}while(a.next!=a.head){a=a.next;return {done:!1,value:d(a)}}a=null}return {done:!0,value:void 0}})};var f=function(){var a={};a.previous=a.next=a.head=a;return a};var h=0;var i=function(a){var c=a&&typeof a;if(c=='object'||c=='function'){a=a;if(!e.has(a)){var d=''+ ++h;e.set(a,d);return d}return e.get(a)}return 'p_'+a};return a},'es6','es3');$jscomp.polyfill('Math.acosh',function(a){if(a){return a}var b=function(b){b=Number(b);return Math.log(b+Math.sqrt(b*b-1))};return b},'es6','es3');$jscomp.polyfill('Math.asinh',function(a){if(a){return a}var b=function(b){b=Number(b);if(b===0){return b}var c=Math.log(Math.abs(b)+Math.sqrt(b*b+1));return b<0?-c:c};return b},'es6','es3');$jscomp.polyfill('Math.log1p',function(a){if(a){return a}var b=function(b){b=Number(b);if(b<0.25&&b>-0.25){var f=b;var g=1;var c=b;var d=0;var e=1;while(d!=c){f*=b;e*=-1;c=(d=c)+e*f/++g}return c}return Math.log(1+b)};return b},'es6','es3');$jscomp.polyfill('Math.atanh',function(b){if(b){return b}var a=Math.log1p;var c=function(c){c=Number(c);return (a(c)-a(-c))/2};return c},'es6','es3');$jscomp.polyfill('Math.cbrt',function(a){if(a){return a}var b=function(b){if(b===0){return b}b=Number(b);var c=Math.pow(Math.abs(b),1/3);return b<0?-c:c};return b},'es6','es3');$jscomp.polyfill('Math.clz32',function(a){if(a){return a}var b=function(b){b=Number(b)>>>0;if(b===0){return 32}var c=0;if((b&4.29490176E9)===0){b<<=16;c+=16}if((b&4.27819008E9)===0){b<<=8;c+=8}if((b&4.02653184E9)===0){b<<=4;c+=4}if((b&3.221225472E9)===0){b<<=2;c+=2}if((b&2.147483648E9)===0){c++}return c};return b},'es6','es3');$jscomp.polyfill('Math.cosh',function(a){if(a){return a}var b=Math.exp;var c=function(c){c=Number(c);return (b(c)+b(-c))/2};return c},'es6','es3');$jscomp.polyfill('Math.expm1',function(a){if(a){return a}var b=function(b){b=Number(b);if(b<0.25&&b>-0.25){var e=b;var f=1;var c=b;var d=0;while(d!=c){e*=b/++f;c=(d=c)+e}return c}return Math.exp(b)-1};return b},'es6','es3');$jscomp.polyfill('Math.hypot',function(a){if(a){return a}var b=function(c,d,h){c=Number(c);d=Number(d);var b,g,f;var e=Math.max(Math.abs(c),Math.abs(d));for(b=2;b<arguments.length;b++){e=Math.max(e,Math.abs(arguments[b]))}if(e>1.0E100||e<1.0E-100){c=c/e;d=d/e;f=c*c+d*d;for(b=2;b<arguments.length;b++){g=Number(arguments[b])/e;f+=g*g}return Math.sqrt(f)*e}else {f=c*c+d*d;for(b=2;b<arguments.length;b++){g=Number(arguments[b]);f+=g*g}return Math.sqrt(f)}};return b},'es6','es3');$jscomp.polyfill('Math.imul',function(a){if(a){return a}var b=function(b,c){b=Number(b);c=Number(c);var f=b>>>16&65535;var d=b&65535;var g=c>>>16&65535;var e=c&65535;var h=f*e+d*g<<16>>>0;return d*e+h|0};return b},'es6','es3');$jscomp.polyfill('Math.log10',function(a){if(a){return a}var b=function(b){return Math.log(b)/Math.LN10};return b},'es6','es3');$jscomp.polyfill('Math.log2',function(a){if(a){return a}var b=function(b){return Math.log(b)/Math.LN2};return b},'es6','es3');$jscomp.polyfill('Math.sign',function(a){if(a){return a}var b=function(b){b=Number(b);return b===0||isNaN(b)?b:b>0?1:-1};return b},'es6','es3');$jscomp.polyfill('Math.sinh',function(a){if(a){return a}var b=Math.exp;var c=function(c){c=Number(c);if(c===0){return c}return (b(c)-b(-c))/2};return c},'es6','es3');$jscomp.polyfill('Math.tanh',function(a){if(a){return a}var b=function(b){b=Number(b);if(b===0){return b}var c=Math.exp(-2*Math.abs(b));var d=(1-c)/(1+c);return b<0?-d:d};return b},'es6','es3');$jscomp.polyfill('Math.trunc',function(a){if(a){return a}var b=function(b){b=Number(b);if(isNaN(b)||b===Infinity||b===-Infinity||b===0){return b}var c=Math.floor(Math.abs(b));return b<0?-c:c};return b},'es6','es3');$jscomp.polyfill('Number.EPSILON',function(a){return Math.pow(2,-52)},'es6','es3');$jscomp.polyfill('Number.MAX_SAFE_INTEGER',function(){return 9.007199254740991E15},'es6','es3');$jscomp.polyfill('Number.MIN_SAFE_INTEGER',function(){return -9.007199254740991E15},'es6','es3');$jscomp.polyfill('Number.isFinite',function(a){if(a){return a}var b=function(b){if(typeof b!=='number'){return !1}return !isNaN(b)&&b!==Infinity&&b!==-Infinity};return b},'es6','es3');$jscomp.polyfill('Number.isInteger',function(a){if(a){return a}var b=function(b){if(!Number.isFinite(b)){return !1}return b===Math.floor(b)};return b},'es6','es3');$jscomp.polyfill('Number.isNaN',function(a){if(a){return a}var b=function(b){return typeof b==='number'&&isNaN(b)};return b},'es6','es3');$jscomp.polyfill('Number.isSafeInteger',function(a){if(a){return a}var b=function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER};return b},'es6','es3');$jscomp.polyfill('Object.assign',function(a){if(a){return a}var b=function(e,f){for(var d=1;d<arguments.length;d++){var b=arguments[d];if(!b){continue}for(var c in b){if($jscomp.owns(b,c)){e[c]=b[c]}}}return e};return b},'es6','es3');$jscomp.polyfill('Object.entries',function(a){if(a){return a}var b=function(c){var d=[];for(var b in c){if($jscomp.owns(c,b)){d.push([b,c[b]])}}return d};return b},'es8','es3');$jscomp.polyfill('Object.getOwnPropertySymbols',function(a){if(a){return a}return function(){return []}},'es6','es5');$jscomp.polyfill('Reflect.ownKeys',function(b){if(b){return b}var a='jscomp_symbol_';function isSymbol(c){return c.substring(0,a.length)==a}var c=function(e){var f=[];var c=Object.getOwnPropertyNames(e);var d=Object.getOwnPropertySymbols(e);for(var a=0;a<c.length;a++){(isSymbol(c[a])?d:f).push(c[a])}return f.concat(d)};return c},'es6','es5');$jscomp.polyfill('Object.getOwnPropertyDescriptors',function(a){if(a){return a}var b=function(e){var d={};var c=Reflect.ownKeys(e);for(var b=0;b<c.length;b++){d[c[b]]=Object.getOwnPropertyDescriptor(e,c[b])}return d};return b},'es8','es5');$jscomp.underscoreProtoCanBeSet=function(){var b={a:!0};var a={};try{a.__proto__=b;return a.a}catch(c){}return !1};$jscomp.setPrototypeOf=typeof Object.setPrototypeOf=='function'?Object.setPrototypeOf:$jscomp.underscoreProtoCanBeSet()?function(a,b){a.__proto__=b;if(a.__proto__!==b){throw new TypeError(a+' is not extensible')}return a}:null;$jscomp.polyfill('Object.setPrototypeOf',function(a){return a||$jscomp.setPrototypeOf},'es6','es5');$jscomp.polyfill('Object.values',function(a){if(a){return a}var b=function(b){var c=[];for(var d in b){if($jscomp.owns(b,d)){c.push(b[d])}}return c};return b},'es8','es3');$jscomp.polyfill('Reflect.apply',function(a){if(a){return a}var c=Function.prototype.apply;var b=function(e,d,b){return c.call(e,d,b)};return b},'es6','es3');$jscomp.objectCreate=$jscomp.ASSUME_ES5||typeof Object.create=='function'?Object.create:function(b){var a=function(){};a.prototype=b;return new a()};$jscomp.construct=function(){function reflectConstructWorks(){function Base(){}function Derived(){}new Base();Reflect.construct(Base,[],Derived);return new Base() instanceof Base}if(typeof Reflect!='undefined'&&Reflect.construct){if(reflectConstructWorks()){return Reflect.construct}var b=Reflect.construct;var a=function(e,d,a){var c=b(e,d);if(a){Reflect.setPrototypeOf(c,a.prototype)}return c};return a}function construct(b,d,a){if(a===undefined){a=b}var f=a.prototype||Object.prototype;var c=$jscomp.objectCreate(f);var e=Function.prototype.apply;var g=e.call(b,c,d);return g||c}return construct}();$jscomp.polyfill('Reflect.construct',function(a){return $jscomp.construct},'es6','es3');$jscomp.polyfill('Reflect.defineProperty',function(a){if(a){return a}var b=function(e,d,c){try{Object.defineProperty(e,d,c);var b=Object.getOwnPropertyDescriptor(e,d);if(!b){return !1}return b.configurable===(c.configurable||!1)&&b.enumerable===(c.enumerable||!1)&&('value' in b?b.value===c.value&&b.writable===(c.writable||!1):b.get===c.get&&b.set===c.set)}catch(f){return !1}};return b},'es6','es5');$jscomp.polyfill('Reflect.deleteProperty',function(a){if(a){return a}var b=function(c,b){if(!$jscomp.owns(c,b)){return !0}try{return delete c[b]}catch(d){return !1}};return b},'es6','es3');$jscomp.polyfill('Reflect.getOwnPropertyDescriptor',function(a){return a||Object.getOwnPropertyDescriptor},'es6','es5');$jscomp.polyfill('Reflect.getPrototypeOf',function(a){return a||Object.getPrototypeOf},'es6','es5');$jscomp.findDescriptor=function(d,c){var a=d;while(a){var b=Reflect.getOwnPropertyDescriptor(a,c);if(b){return b}a=Reflect.getPrototypeOf(a)}return undefined};$jscomp.polyfill('Reflect.get',function(a){if(a){return a}var b=function(d,c,e){if(arguments.length<=2){return d[c]}var b=$jscomp.findDescriptor(d,c);if(b){return b.get?b.get.call(e):b.value}return undefined};return b},'es6','es5');$jscomp.polyfill('Reflect.has',function(a){if(a){return a}var b=function(c,b){return b in c};return b},'es6','es3');$jscomp.polyfill('Reflect.isExtensible',function(a){if(a){return a}if($jscomp.ASSUME_ES5||typeof Object.isExtensible=='function'){return Object.isExtensible}return function(){return !0}},'es6','es3');$jscomp.polyfill('Reflect.preventExtensions',function(a){if(a){return a}if(!($jscomp.ASSUME_ES5||typeof Object.preventExtensions=='function')){return function(){return !1}}var b=function(b){Object.preventExtensions(b);return !Object.isExtensible(b)};return b},'es6','es3');$jscomp.polyfill('Reflect.set',function(a){if(a){return a}var b=function(b,d,e,f){var c=$jscomp.findDescriptor(b,d);if(!c){if(Reflect.isExtensible(b)){b[d]=e;return !0}return !1}if(c.set){c.set.call(arguments.length>3?f:b,e);return !0}else {if(c.writable&&!Object.isFrozen(b)){b[d]=e;return !0}}return !1};return b},'es6','es5');$jscomp.polyfill('Reflect.setPrototypeOf',function(a){if(a){return a}else {if($jscomp.setPrototypeOf){var b=$jscomp.setPrototypeOf;var c=function(c,d){try{b(c,d);return !0}catch(e){return !1}};return c}else {return null}}},'es6','es5');$jscomp.polyfill('Set',function(b){var c=!$jscomp.ASSUME_NO_NATIVE_SET&&function(){if(!b||!b.prototype.entries||typeof Object.seal!='function'){return !1}try{b=b;var d=Object.seal({x:4});var c=new b($jscomp.makeIterator([d]));if(!c.has(d)||c.size!=1||c.add(d)!=c||c.size!=1||c.add({x:4})!=c||c.size!=2){return !1}var e=c.entries();var a=e.next();if(a.done||a.value[0]!=d||a.value[1]!=d){return !1}a=e.next();if(a.done||a.value[0]==d||a.value[0].x!=4||a.value[1]!=a.value[0]){return !1}return e.next().done}catch(f){return !1}}();if(c){return b}$jscomp.initSymbol();$jscomp.initSymbolIterator();var a=function(a){this.map_=new Map();if(a){var e=$jscomp.makeIterator(a);var c;while(!(c=e.next()).done){var d=c.value;this.add(d)}}this.size=this.map_.size};a.prototype.add=function(a){this.map_.set(a,a);this.size=this.map_.size;return this};a.prototype['delete']=function(c){var a=this.map_['delete'](c);this.size=this.map_.size;return a};a.prototype.clear=function(){this.map_.clear();this.size=0};a.prototype.has=function(a){return this.map_.has(a)};a.prototype.entries=function(){return this.map_.entries()};a.prototype.values=function(){return this.map_.values()};a.prototype.keys=a.prototype.values;a.prototype[Symbol.iterator]=a.prototype.values;a.prototype.forEach=function(c,a){var d=this;this.map_.forEach(function(e){return c.call(a,e,e,d)})};return a},'es6','es3');$jscomp.checkStringArgs=function(a,c,b){if(a==null){throw new TypeError("The 'this' value for String.prototype."+b+' must not be null or undefined')}if(c instanceof RegExp){throw new TypeError('First argument to String.prototype.'+b+' must not be a regular expression')}return a+''};$jscomp.polyfill('String.prototype.codePointAt',function(a){if(a){return a}var b=function(b){var e=$jscomp.checkStringArgs(this,null,'codePointAt');var f=e.length;b=Number(b)||0;if(!(b>=0&&b<f)){return void 0}b=b|0;var c=e.charCodeAt(b);if(c<55296||c>56319||b+1===f){return c}var d=e.charCodeAt(b+1);if(d<56320||d>57343){return c}return (c-55296)*1024+d+9216};return b},'es6','es3');$jscomp.polyfill('String.prototype.endsWith',function(a){if(a){return a}var b=function(b,c){var d=$jscomp.checkStringArgs(this,b,'endsWith');b=b+'';if(c===void 0){c=d.length}var f=Math.max(0,Math.min(c|0,d.length));var e=b.length;while(e>0&&f>0){if(d[--f]!=b[--e]){return !1}}return e<=0};return b},'es6','es3');$jscomp.polyfill('String.fromCodePoint',function(a){if(a){return a}var b=function(e){var c='';for(var d=0;d<arguments.length;d++){var b=Number(arguments[d]);if(b<0||b>1114111||b!==Math.floor(b)){throw new RangeError('invalid_code_point '+b)}if(b<=65535){c+=String.fromCharCode(b)}else {b-=65536;c+=String.fromCharCode(b>>>10&1023|55296);c+=String.fromCharCode(b&1023|56320)}}return c};return b},'es6','es3');$jscomp.polyfill('String.prototype.includes',function(a){if(a){return a}var b=function(b,c){var d=$jscomp.checkStringArgs(this,b,'includes');return d.indexOf(b,c||0)!==-1};return b},'es6','es3');$jscomp.polyfill('String.prototype.repeat',function(a){if(a){return a}var b=function(b){var c=$jscomp.checkStringArgs(this,null,'repeat');if(b<0||b>1342177279){throw new RangeError('Invalid count value')}b=b|0;var d='';while(b){if(b&1){d+=c}if(b>>>=1){c+=c}}return d};return b},'es6','es3');$jscomp.stringPadding=function(c,a){var b=c!==undefined?String(c):' ';if(!(a>0)||!b){return ''}var d=Math.ceil(a/b.length);return b.repeat(d).substring(0,a)};$jscomp.polyfill('String.prototype.padEnd',function(a){if(a){return a}var b=function(d,c){var b=$jscomp.checkStringArgs(this,null,'padStart');var e=d-b.length;return b+$jscomp.stringPadding(c,e)};return b},'es8','es3');$jscomp.polyfill('String.prototype.padStart',function(a){if(a){return a}var b=function(d,c){var b=$jscomp.checkStringArgs(this,null,'padStart');var e=d-b.length;return $jscomp.stringPadding(c,e)+b};return b},'es8','es3');$jscomp.polyfill('String.prototype.startsWith',function(a){if(a){return a}var b=function(b,g){var c=$jscomp.checkStringArgs(this,b,'startsWith');b=b+'';var h=c.length;var e=b.length;var f=Math.max(0,Math.min(g|0,c.length));var d=0;while(d<e&&f<h){if(c[f++]!=b[d++]){return !1}}return d>=e};return b},'es6','es3');$jscomp.arrayFromIterator=function(c){var b;var a=[];while(!(b=c.next()).done){a.push(b.value)}return a};$jscomp.arrayFromIterable=function(a){if(a instanceof Array){return a}else {return $jscomp.arrayFromIterator($jscomp.makeIterator(a))}};$jscomp.inherits=function(a,b){a.prototype=$jscomp.objectCreate(b.prototype);a.prototype.constructor=a;if($jscomp.setPrototypeOf){var e=$jscomp.setPrototypeOf;e(a,b)}else {for(var c in b){if(c=='prototype'){continue}if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);if(d){Object.defineProperty(a,c,d)}}else {a[c]=b[c]}}}a.superClass_=b.prototype};$jscomp.polyfill('WeakSet',function(b){function isConformant(){if(!b||!Object.seal){return !1}try{var c=Object.seal({});var d=Object.seal({});var a=new b([c]);if(!a.has(c)||a.has(d)){return !1}a['delete'](c);a.add(d);return !a.has(c)&&a.has(d)}catch(e){return !1}}if(isConformant()){return b}var a=function(a){this.map_=new WeakMap();if(a){$jscomp.initSymbol();$jscomp.initSymbolIterator();var e=$jscomp.makeIterator(a);var c;while(!(c=e.next()).done){var d=c.value;this.add(d)}}};a.prototype.add=function(a){this.map_.set(a,!0);return this};a.prototype.has=function(a){return this.map_.has(a)};a.prototype['delete']=function(a){return this.map_['delete'](a)};return a},'es6','es3');try{if(Array.prototype.values.toString().indexOf('[native code]')==-1){delete Array.prototype.values}}catch(a){}Ext.define('Ext.pivot.d3.HeatMap',{extend:'Ext.d3.HeatMap',xtype:'pivotheatmap',requires:['Ext.pivot.matrix.Local','Ext.pivot.matrix.Remote'],padding:{top:20,right:30,bottom:20,left:80},config:{defaultFormatter:'number("0.00")',matrix:{type:'local',rowGrandTotalsPosition:'none',colGrandTotalsPosition:'none'},xAxis:{axis:{orient:'bottom'},scale:{type:'band'},step:100},yAxis:{axis:{orient:'left'},scale:{type:'band'},step:100},colorAxis:{scale:{type:'linear',range:['white','green']}},tiles:{attr:{'stroke':'green','stroke-width':1},labels:!0},legend:{docked:'bottom',padding:60,items:{count:10,slice:[1],size:{x:40,y:20}}}},destroy:function(){this.setMatrix(null);this.callParent()},applyMatrix:function(a){if(a){if(!a.isPivotMatrix){if(!a.type){a.type='local'}a.cmp=this;a=Ext.Factory.pivotmatrix(a)}}return a},updateMatrix:function(b,c){var a=this;Ext.destroy(c,a.matrixListeners);a.matrixListeners=null;if(b){a.matrixListeners=b.on({done:a.onMatrixDataReady,scope:a,destroyable:!0})}},updateStore:Ext.emptyFn,updateXAxis:Ext.emptyFn,updateYAxis:Ext.emptyFn,updateColorAxis:Ext.emptyFn,onMatrixDataReady:function(b){var e=this,c=e.getXAxis(),d=e.getYAxis(),f=e.getColorAxis(),g=b.topAxis.dimensions,h=b.leftAxis.dimensions,i=b.aggregate,a;if(g.getCount()&&c){a=g.getAt(0);c.setField(a.getDataIndex());c.setTitle({text:a.getHeader()})}if(h.getCount()&&d){a=h.getAt(0);d.setField(a.getDataIndex());d.setTitle({text:a.getHeader()})}if(i.getCount()&&f){a=i.getAt(0);f.setField(a.getId())}this.processData();this.performLayout()},bindFormatter:function(a,b){var c=this;return function(d){return a(d,b||c.resolveListenerScope())}},getStoreData:function(){var c=this,h=c.getMatrix(),i=h.leftAxis.getTree(),n=i.length,j=h.topAxis.getTree(),o=j.length,l=[],r=c.getXAxis(),s=c.getYAxis(),m=c.getColorAxis(),p=r.getField(),q=s.getField(),k=m.getField(),d,e,f,g,b,a,t;for(d=0;d<n;d++){f=i[d];for(e=0;e<o;e++){g=j[e];b=h.results.get(f.key,g.key);a={data:{}};a.data[p]=g.name;a.data[q]=f.name;a.data[k]=b?b.getValue(k):null;a.data['records']=b?b.records.length:0;l.push(a)}}return l},onUpdateTiles:function(e){var b=this,f=b.getMatrix(),i=b.getColorAxis(),h=i.getField(),c,a,g,d;if(f.aggregate.getCount()){c=f.aggregate.getAt(0);a=c.getFormatter()||b.getDefaultFormatter();g=c.getScope();d=Ext.app.bind.Parser.fly(a);a=b.bindFormatter(d.compileFormat(),g);d.release()}b.callParent([e]);e.select('text').text(function(d){var b=d.data[h]||null;if(b!==null&&c&&a){b=a(b)}return b!==null?b:null})}});Ext.define('Ext.pivot.d3.AbstractContainer',{extend:'Ext.panel.Panel',requires:['Ext.pivot.d3.HeatMap','Ext.pivot.plugin.Configurator'],isPivotComponent:!0,config:{matrix:{type:'local'},drawing:{xtype:'pivotheatmap'},configurator:null},destroy:function(){this.setMatrix(null);this.callParent()},addDrawing:function(){this.add(Ext.applyIf({matrix:this.getMatrix()},this.getDrawing()))},applyMatrix:function(a,b){Ext.destroy(b);if(a==null){return a}if(a&&a.isPivotMatrix){a.cmp=this;return a}Ext.applyIf(a,{type:'local'});a.cmp=this;return Ext.Factory.pivotmatrix(a)},applyConfigurator:function(a){return a?this.addPlugin(a):null},updateConfigurator:function(b,a){if(a){this.removePlugin(a)}}});Ext.define('Ext.pivot.d3.TreeMap',{extend:'Ext.d3.hierarchy.TreeMap',xtype:'pivottreemap',requires:['Ext.pivot.matrix.Local','Ext.pivot.matrix.Remote'],config:{autoExpand:!0,matrix:{type:'local',rowGrandTotalsPosition:'none',colGrandTotalsPosition:'none'},store:{type:'tree',fields:['name','value',{name:'records',type:'int'}],root:{expanded:!0,name:'Root',children:[]}},nodeValue:function(a){return a.data.value},colorAxis:{scale:{range:['#E45649','#ECECEC','#50A14F']},processor:function(e,b,c,d){var a=c.data;return a.isLeaf()?b(a.get('depth')-5):'#ececec'}}},destroy:function(){this.setMatrix(null);this.callParent()},applyMatrix:function(a){if(a){if(!a.isPivotMatrix){if(!a.type){a.type='local'}a.cmp=this;a=Ext.Factory.pivotmatrix(a)}}return a},updateMatrix:function(b,c){var a=this;Ext.destroy(c,a.matrixListeners);a.matrixListeners=null;if(b){a.matrixListeners=b.on({done:a.onMatrixDataReady,scope:a,destroyable:!0})}},onMatrixDataReady:function(d){var a=this,e=a.getColorAxis(),f=d.aggregate,b=a.getStore().getRoot(),c;if(f.getCount()&&e){c=f.getAt(0).getId();e.setField(c)}var g=a.getTreeStoreData(d.leftAxis.getTree(),c);if(b){b.removeAll();b.appendChild(g)}a.performLayout()},getTreeStoreData:function(f,g){var i=[],e=this.getMatrix(),j=this.getAutoExpand(),d,h,b,c,a;if(f&&e){h=f.length;for(d=0;d<h;d++){b=f[d];a=e.results.get(b.key,e.grandTotalKey);if(a){c={path:b.key,name:b.name,value:a?a.getValue(g):null,records:a&&a.records?a.records.length:0};if(b.children){c.children=this.getTreeStoreData(b.children,g);c.expanded=j}else {c.leaf=!0}i.push(c)}}}return i}});Ext.define('Ext.pivot.d3.Container',{extend:'Ext.pivot.d3.AbstractContainer',xtype:'pivotd3container',config:{configurator:{id:'configurator',ptype:'pivotconfigurator'}},layout:'fit',beforeRender:function(){this.addDrawing();this.callParent()}});