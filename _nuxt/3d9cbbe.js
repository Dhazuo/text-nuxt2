(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{251:function(n,r,e){"use strict";var t=e(2),d=e(72).findIndex,o=e(132),f="findIndex",c=!0;f in[]&&Array(1).findIndex((function(){c=!1})),t({target:"Array",proto:!0,forced:c},{findIndex:function(n){return d(this,n,arguments.length>1?arguments[1]:void 0)}}),o(f)},255:function(n,r,e){"use strict";e.r(r);e(43),e(251);var t=[{id:5,name:"algo"},{id:4,name:"fksldfkl"}],d={middleware:function(n){var r=t.findIndex((function(r){return r.id==n.params.id})),e=t.findIndex((function(r){return r.name==n.params.name}));(r<0||e<0)&&n.redirect("/")},methods:{prueba:function(){this.$router.push("/")}}},o=e(42),component=Object(o.a)(d,(function(){var n=this,r=n._self._c;return r("div",[r("div",[r("button",{on:{click:n.prueba}},[n._v("ASDASD")])]),n._v(" "),r("div",[n._v("\r\n                    "+n._s(n.$route.params.id)+"\r\n\r\n        ")]),n._v(" "),r("div",[n._v("\r\n        "+n._s(n.$route.params.name)+"\r\n    ")])])}),[],!1,null,null,null);r.default=component.exports}}]);