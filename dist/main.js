(() => { "use strict"; var e = { 426: (e, n, r) => { r.d(n, { Z: () => i }); var t = r(81), o = r.n(t), a = r(645), c = r.n(a)()(o()); c.push([e.id, "* {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nbody {\r\n  background-color: rgb(214, 207, 198);\r\n}\r\n\r\np {\r\n  margin: 0;\r\n}\r\n\r\ninput {\r\n  background-color: inherit;\r\n  border: none;\r\n}\r\n\r\n.addToDo {\r\n  width: 100%;\r\n}\r\n\r\ninput:focus {\r\n  outline: none;\r\n}\r\n\r\ninput::placeholder {\r\n  font-size: inherit;\r\n  font-style: italic;\r\n}\r\n\r\nli {\r\n  list-style-type: none;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  border-bottom: 1px solid rgb(211, 206, 206);\r\n  padding: 10px;\r\n}\r\n\r\n.ul-container {\r\n  width: 80vw;\r\n  border: 1px solid rgb(199, 196, 196);\r\n  box-shadow: 0 0 5px 4px rgb(163, 156, 156);\r\n  margin: 5% auto;\r\n  padding: 0;\r\n  background-color: aliceblue;\r\n}\r\n\r\n.ul-2 {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.last {\r\n  display: flex;\r\n  justify-content: center;\r\n  border: none;\r\n  color: rgb(155, 151, 151);\r\n  background-color: lightgrey;\r\n  text-decoration: underline;\r\n  cursor: pointer;\r\n}\r\n\r\n#checkbox {\r\n  margin-right: 10px;\r\n}\r\n\r\n.fa-solid {\r\n  cursor: pointer;\r\n  color: rgb(192, 190, 190);\r\n}\r\n\r\n.fa-arrow-turn-down {\r\n  transform: rotate(90deg);\r\n  font-size: 10px;\r\n}\r\n\r\n.hover-list {\r\n  background-color: rgba(255, 255, 0, 0.829);\r\n}\r\n\r\n#checkbox:checked + .input-text {\r\n  text-decoration: line-through;\r\n}\r\n", ""]); const i = c }, 645: e => { e.exports = function (e) { var n = []; return n.toString = function () { return this.map((function (n) { var r = "", t = void 0 !== n[5]; return n[4] && (r += "@supports (".concat(n[4], ") {")), n[2] && (r += "@media ".concat(n[2], " {")), t && (r += "@layer".concat(n[5].length > 0 ? " ".concat(n[5]) : "", " {")), r += e(n), t && (r += "}"), n[2] && (r += "}"), n[4] && (r += "}"), r })).join("") }, n.i = function (e, r, t, o, a) { "string" == typeof e && (e = [[null, e, void 0]]); var c = {}; if (t) for (var i = 0; i < this.length; i++) { var s = this[i][0]; null != s && (c[s] = !0) } for (var l = 0; l < e.length; l++) { var d = [].concat(e[l]); t && c[d[0]] || (void 0 !== a && (void 0 === d[5] || (d[1] = "@layer".concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {").concat(d[1], "}")), d[5] = a), r && (d[2] ? (d[1] = "@media ".concat(d[2], " {").concat(d[1], "}"), d[2] = r) : d[2] = r), o && (d[4] ? (d[1] = "@supports (".concat(d[4], ") {").concat(d[1], "}"), d[4] = o) : d[4] = "".concat(o)), n.push(d)) } }, n } }, 81: e => { e.exports = function (e) { return e[1] } }, 379: e => { var n = []; function r(e) { for (var r = -1, t = 0; t < n.length; t++)if (n[t].identifier === e) { r = t; break } return r } function t(e, t) { for (var a = {}, c = [], i = 0; i < e.length; i++) { var s = e[i], l = t.base ? s[0] + t.base : s[0], d = a[l] || 0, u = "".concat(l, " ").concat(d); a[l] = d + 1; var p = r(u), f = { css: s[1], media: s[2], sourceMap: s[3], supports: s[4], layer: s[5] }; if (-1 !== p) n[p].references++, n[p].updater(f); else { var v = o(f, t); t.byIndex = i, n.splice(i, 0, { identifier: u, updater: v, references: 1 }) } c.push(u) } return c } function o(e, n) { var r = n.domAPI(n); return r.update(e), function (n) { if (n) { if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap && n.supports === e.supports && n.layer === e.layer) return; r.update(e = n) } else r.remove() } } e.exports = function (e, o) { var a = t(e = e || [], o = o || {}); return function (e) { e = e || []; for (var c = 0; c < a.length; c++) { var i = r(a[c]); n[i].references-- } for (var s = t(e, o), l = 0; l < a.length; l++) { var d = r(a[l]); 0 === n[d].references && (n[d].updater(), n.splice(d, 1)) } a = s } } }, 569: e => { var n = {}; e.exports = function (e, r) { var t = function (e) { if (void 0 === n[e]) { var r = document.querySelector(e); if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try { r = r.contentDocument.head } catch (e) { r = null } n[e] = r } return n[e] }(e); if (!t) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."); t.appendChild(r) } }, 216: e => { e.exports = function (e) { var n = document.createElement("style"); return e.setAttributes(n, e.attributes), e.insert(n, e.options), n } }, 565: (e, n, r) => { e.exports = function (e) { var n = r.nc; n && e.setAttribute("nonce", n) } }, 795: e => { e.exports = function (e) { var n = e.insertStyleElement(e); return { update: function (r) { !function (e, n, r) { var t = ""; r.supports && (t += "@supports (".concat(r.supports, ") {")), r.media && (t += "@media ".concat(r.media, " {")); var o = void 0 !== r.layer; o && (t += "@layer".concat(r.layer.length > 0 ? " ".concat(r.layer) : "", " {")), t += r.css, o && (t += "}"), r.media && (t += "}"), r.supports && (t += "}"); var a = r.sourceMap; a && "undefined" != typeof btoa && (t += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")), n.styleTagTransform(t, e, n.options) }(n, e, r) }, remove: function () { !function (e) { if (null === e.parentNode) return !1; e.parentNode.removeChild(e) }(n) } } } }, 589: e => { e.exports = function (e, n) { if (n.styleSheet) n.styleSheet.cssText = e; else { for (; n.firstChild;)n.removeChild(n.firstChild); n.appendChild(document.createTextNode(e)) } } } }, n = {}; function r(t) { var o = n[t]; if (void 0 !== o) return o.exports; var a = n[t] = { id: t, exports: {} }; return e[t](a, a.exports, r), a.exports } r.n = e => { var n = e && e.__esModule ? () => e.default : () => e; return r.d(n, { a: n }), n }, r.d = (e, n) => { for (var t in n) r.o(n, t) && !r.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: n[t] }) }, r.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n), r.nc = void 0, (() => { var e = r(379), n = r.n(e), t = r(795), o = r.n(t), a = r(569), c = r.n(a), i = r(565), s = r.n(i), l = r(216), d = r.n(l), u = r(589), p = r.n(u), f = r(426), v = {}; v.styleTagTransform = p(), v.setAttributes = s(), v.insert = c().bind(null, "head"), v.domAPI = o(), v.insertStyleElement = d(), n()(f.Z, v), f.Z && f.Z.locals && f.Z.locals; const h = document.querySelector(".ul-2"); function m(e) { h.innerHTML = "", e.forEach(((e, n) => { e.id = n + 1; const r = document.createElement("li"); r.className = "added", h.appendChild(r); const t = document.createElement("p"); r.appendChild(t); const o = document.createElement("input"); o.type = "checkbox", o.id = "checkbox", o.className = "checkbox", t.appendChild(o); const a = document.createElement("input"); a.className = "input-text", a.type = "text", a.value = e.description, a.setAttribute("readonly", "readonly"), t.appendChild(a); const c = document.createElement("i"); c.className = "fa-solid fa-ellipsis-vertical", r.appendChild(c) })), document.querySelectorAll(".added") && document.querySelectorAll(".added").forEach((e => { e.addEventListener("mouseover", (() => { e.classList.toggle("hover-list"), e.children[1].classList.toggle("fa-ellipsis-vertical"), e.children[1].classList.toggle("fa-trash-can") })), e.addEventListener("mouseout", (() => { e.classList.toggle("hover-list"), e.children[1].classList.toggle("fa-trash-can"), e.children[1].classList.toggle("fa-ellipsis-vertical") })) })) } function g(e) { const n = JSON.stringify(e); localStorage.setItem("To Do", n) } function y(e) { e.forEach(((e, n) => { e.completed && document.querySelectorAll(".checkbox")[n].setAttribute("checked", "checked") })) } const b = document.querySelector(".addToDo"); let x = localStorage.getItem("To Do") ? JSON.parse(localStorage.getItem("To Do")) : []; b.addEventListener("change", (() => { if (b.value) { const e = { description: b.value, completed: !1 }; x.push(e), b.value = "", m(x), y(x), g(x) } })), h.addEventListener("click", (e => { if (e.target.classList.contains("input-text")) { const n = e.target, r = n.value, t = e.target.value; n.removeAttribute("readonly", "readonly"), n.focus(), n.addEventListener("change", (() => { "" === n.value ? n.value = r : (x.filter((e => e.description === t))[0].description = n.value, g(x), m(x)) })) } if (e.target.classList.contains("fa-trash-can")) { const r = e.target.parentElement, t = [...document.querySelectorAll(".added")].indexOf(r) + 1; n = t, x = x.filter((e => e.id !== n)), m(x), y(x), g(x) } var n; if ("checkbox" === e.target.id) { const n = e.target, r = document.querySelectorAll(".added"), t = n.parentElement.parentElement, o = [...r].indexOf(t); x[o].completed = n.checked, n.addEventListener("change", (() => { m(x), y(x), g(x) })) } })), document.querySelector(".last").addEventListener("click", (() => { x = x.filter((e => !e.completed)), m(x), g(x) })), m(x), y(x) })() })();