!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=r);var o,i,a,u=r("h6c0i"),l=0;document.querySelector("form.form").addEventListener("submit",(function(e){var n=function(e){var n,t;(n=e,t=o,new Promise((function(e,r){var o=Math.random()>.3;setTimeout((function(){o?e({position:n,delayVal:t}):r({position:n,delayVal:t})}),t)}))).then((function(n){return u.Notify.success("✅ Fulfilled promise ".concat(e," in ").concat(l+(e-1)*a,"ms"))})).catch((function(n){return u.Notify.failure("❌ Rejected promise ".concat(e," in ").concat(l+(e-1)*a,"ms"))})),o+=a};e.preventDefault();var t=e.currentTarget.elements,r=t.delay,c=t.step,f=t.amount;o=Number(r.value),a=Number(c.value),i=Number(f.value),l=o;for(var d=1;d<=i;d+=1)n(d)}))}();
//# sourceMappingURL=03-promises.34afbffb.js.map
