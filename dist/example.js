(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VQrcode"] = factory();
	else
		root["VQrcode"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _vQrcode = __webpack_require__(1);

	var _vQrcode2 = _interopRequireDefault(_vQrcode);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import { VQrcode } from '../dist/v-qrcode.min'
	// import VQrcode from '../src/index.vue'

	new Vue({
	    el: '#app',

	    components: {
	        VQrcode: _vQrcode2.default
	    }
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*! (c) 2017 wxp. All Rights Reserved */
	!function (t, e) {
	  "object" == ( false ? "undefined" : _typeof(exports)) && "object" == ( false ? "undefined" : _typeof(module)) ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.VQrcode = e() : t.VQrcode = e();
	}(undefined, function () {
	  return function (t) {
	    function e(r) {
	      if (n[r]) return n[r].exports;var i = n[r] = { exports: {}, id: r, loaded: !1 };return t[r].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports;
	    }var n = {};return e.m = t, e.c = n, e.p = "", e(0);
	  }([function (t, e, n) {
	    "use strict";
	    function r(t) {
	      return t && t.__esModule ? t : { default: t };
	    }Object.defineProperty(e, "__esModule", { value: !0 }), e.qrcode = void 0;var i = n(3),
	        s = r(i);e.default = s.default, e.qrcode = s.default;
	  }, function (t, e, n) {
	    "use strict";
	    function r(t) {
	      return t && t.__esModule ? t : { default: t };
	    }Object.defineProperty(e, "__esModule", { value: !0 });var i = n(2),
	        s = r(i);e.default = { props: { value: { type: String, required: !0, default: "" }, cls: { type: String, default: "" }, size: { type: Number, default: 100 }, level: { type: String, default: "L", validator: function validator(t) {
	            return ["L", "Q", "M", "H"].indexOf(t) > -1;
	          } }, background: { type: String, default: "#fff" }, foreground: { type: String, default: "#000" }, mime: { type: String, default: "image/png" }, padding: { type: Number, default: 0 }, type: { type: String, default: "canvas", validator: function validator(t) {
	            return ["canvas", "image"].indexOf(t) > -1;
	          } } }, methods: { render: function render() {
	          var t = new s.default({ background: this.background, foreground: this.foreground, level: this.level, mime: this.mime, padding: this.padding, size: this.size, value: this.value });this.$el.innerHTML = "", this.$el.appendChild(t[this.type]);
	        } }, mounted: function mounted() {
	        var t = this;this.render(), this.$options._propKeys.forEach(function (e) {
	          return t.$watch(e, t.render);
	        });
	      } };
	  }, function (t, e, n) {
	    !function (e, n) {
	      t.exports = n();
	    }(this, function () {
	      "use strict";
	      function t(t) {
	        return t && t.__esModule ? t.default : t;
	      }function e(t, e) {
	        return e = { exports: {} }, t(e, e.exports), e.exports;
	      }var n = function n(t) {
	        if (void 0 == t) throw TypeError("Can't call method on  " + t);return t;
	      },
	          r = n,
	          i = function i(t) {
	        return Object(r(t));
	      },
	          s = {}.hasOwnProperty,
	          o = function o(t, e) {
	        return s.call(t, e);
	      },
	          u = e(function (t) {
	        var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();"number" == typeof __g && (__g = e);
	      }),
	          a = u,
	          f = "__core-js_shared__",
	          c = a[f] || (a[f] = {}),
	          h = function h(t) {
	        return c[t] || (c[t] = {});
	      },
	          l = 0,
	          d = Math.random(),
	          _ = function _(t) {
	        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++l + d).toString(36));
	      },
	          v = h("keys"),
	          p = _,
	          y = function y(t) {
	        return v[t] || (v[t] = p(t));
	      },
	          g = o,
	          b = i,
	          k = y("IE_PROTO"),
	          m = Object.prototype,
	          w = Object.getPrototypeOf || function (t) {
	        return t = b(t), g(t, k) ? t[k] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? m : null;
	      },
	          O = e(function (t) {
	        var e = t.exports = { version: "2.4.0" };"number" == typeof __e && (__e = e);
	      }),
	          B = function B(t) {
	        if ("function" != typeof t) throw TypeError(t + " is not a function!");return t;
	      },
	          M = B,
	          S = function S(t, e, n) {
	        if (M(t), void 0 === e) return t;switch (n) {case 1:
	            return function (n) {
	              return t.call(e, n);
	            };case 2:
	            return function (n, r) {
	              return t.call(e, n, r);
	            };case 3:
	            return function (n, r, i) {
	              return t.call(e, n, r, i);
	            };}return function () {
	          return t.apply(e, arguments);
	        };
	      },
	          E = function E(t) {
	        return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? null !== t : "function" == typeof t;
	      },
	          j = E,
	          A = function A(t) {
	        if (!j(t)) throw TypeError(t + " is not an object!");return t;
	      },
	          L = function L(t) {
	        try {
	          return !!t();
	        } catch (t) {
	          return !0;
	        }
	      },
	          x = !L(function () {
	        return 7 != Object.defineProperty({}, "a", { get: function get() {
	            return 7;
	          } }).a;
	      }),
	          N = E,
	          P = u.document,
	          T = N(P) && N(P.createElement),
	          F = function F(t) {
	        return T ? P.createElement(t) : {};
	      },
	          C = !x && !L(function () {
	        return 7 != Object.defineProperty(F("div"), "a", { get: function get() {
	            return 7;
	          } }).a;
	      }),
	          z = E,
	          U = function U(t, e) {
	        if (!z(t)) return t;var n, r;if (e && "function" == typeof (n = t.toString) && !z(r = n.call(t))) return r;if ("function" == typeof (n = t.valueOf) && !z(r = n.call(t))) return r;if (!e && "function" == typeof (n = t.toString) && !z(r = n.call(t))) return r;throw TypeError("Can't convert object to primitive value");
	      },
	          I = A,
	          D = C,
	          R = U,
	          q = Object.defineProperty,
	          K = x ? Object.defineProperty : function (t, e, n) {
	        if (I(t), e = R(e, !0), I(n), D) try {
	          return q(t, e, n);
	        } catch (t) {}if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");return "value" in n && (t[e] = n.value), t;
	      },
	          G = { f: K },
	          V = function V(t, e) {
	        return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e };
	      },
	          W = G,
	          H = V,
	          Q = x ? function (t, e, n) {
	        return W.f(t, e, H(1, n));
	      } : function (t, e, n) {
	        return t[e] = n, t;
	      },
	          X = u,
	          $ = O,
	          J = S,
	          Y = Q,
	          Z = "prototype",
	          tt = function tt(t, e, n) {
	        var r,
	            i,
	            s,
	            o = t & tt.F,
	            u = t & tt.G,
	            a = t & tt.S,
	            f = t & tt.P,
	            c = t & tt.B,
	            h = t & tt.W,
	            l = u ? $ : $[e] || ($[e] = {}),
	            d = l[Z],
	            _ = u ? X : a ? X[e] : (X[e] || {})[Z];u && (n = e);for (r in n) {
	          i = !o && _ && void 0 !== _[r], i && r in l || (s = i ? _[r] : n[r], l[r] = u && "function" != typeof _[r] ? n[r] : c && i ? J(s, X) : h && _[r] == s ? function (t) {
	            var e = function e(_e2, n, r) {
	              if (this instanceof t) {
	                switch (arguments.length) {case 0:
	                    return new t();case 1:
	                    return new t(_e2);case 2:
	                    return new t(_e2, n);}return new t(_e2, n, r);
	              }return t.apply(this, arguments);
	            };return e[Z] = t[Z], e;
	          }(s) : f && "function" == typeof s ? J(Function.call, s) : s, f && ((l.virtual || (l.virtual = {}))[r] = s, t & tt.R && d && !d[r] && Y(d, r, s)));
	        }
	      };tt.F = 1, tt.G = 2, tt.S = 4, tt.P = 8, tt.B = 16, tt.W = 32, tt.U = 64, tt.R = 128;var et = tt,
	          nt = et,
	          rt = O,
	          it = L,
	          st = function st(t, e) {
	        var n = (rt.Object || {})[t] || Object[t],
	            r = {};r[t] = e(n), nt(nt.S + nt.F * it(function () {
	          n(1);
	        }), "Object", r);
	      },
	          ot = i,
	          ut = w;st("getPrototypeOf", function () {
	        return function (t) {
	          return ut(ot(t));
	        };
	      });var at = O.Object.getPrototypeOf,
	          ft = e(function (t) {
	        t.exports = { default: at, __esModule: !0 };
	      }),
	          ct = t(ft),
	          ht = e(function (t, e) {
	        e.__esModule = !0, e.default = function (t, e) {
	          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
	        };
	      }),
	          lt = t(ht),
	          dt = et;dt(dt.S + dt.F * !x, "Object", { defineProperty: G.f });var _t = O.Object,
	          vt = function vt(t, e, n) {
	        return _t.defineProperty(t, e, n);
	      },
	          pt = e(function (t) {
	        t.exports = { default: vt, __esModule: !0 };
	      }),
	          yt = e(function (t, e) {
	        function n(t) {
	          return t && t.__esModule ? t : { default: t };
	        }e.__esModule = !0;var r = pt,
	            i = n(r);e.default = function () {
	          function t(t, e) {
	            for (var n = 0; n < e.length; n++) {
	              var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0, i.default)(t, r.key, r);
	            }
	          }return function (e, n, r) {
	            return n && t(e.prototype, n), r && t(e, r), e;
	          };
	        }();
	      }),
	          gt = t(yt),
	          bt = Math.ceil,
	          kt = Math.floor,
	          mt = function mt(t) {
	        return isNaN(t = +t) ? 0 : (t > 0 ? kt : bt)(t);
	      },
	          wt = mt,
	          Ot = n,
	          Bt = function Bt(t) {
	        return function (e, n) {
	          var r,
	              i,
	              s = String(Ot(e)),
	              o = wt(n),
	              u = s.length;return o < 0 || o >= u ? t ? "" : void 0 : (r = s.charCodeAt(o), r < 55296 || r > 56319 || o + 1 === u || (i = s.charCodeAt(o + 1)) < 56320 || i > 57343 ? t ? s.charAt(o) : r : t ? s.slice(o, o + 2) : (r - 55296 << 10) + (i - 56320) + 65536);
	        };
	      },
	          Mt = !0,
	          St = Q,
	          Et = {},
	          jt = {}.toString,
	          At = function At(t) {
	        return jt.call(t).slice(8, -1);
	      },
	          Lt = At,
	          xt = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
	        return "String" == Lt(t) ? t.split("") : Object(t);
	      },
	          Nt = xt,
	          Pt = n,
	          Tt = function Tt(t) {
	        return Nt(Pt(t));
	      },
	          Ft = mt,
	          Ct = Math.min,
	          zt = function zt(t) {
	        return t > 0 ? Ct(Ft(t), 9007199254740991) : 0;
	      },
	          Ut = mt,
	          It = Math.max,
	          Dt = Math.min,
	          Rt = function Rt(t, e) {
	        return t = Ut(t), t < 0 ? It(t + e, 0) : Dt(t, e);
	      },
	          qt = Tt,
	          Kt = zt,
	          Gt = Rt,
	          Vt = function Vt(t) {
	        return function (e, n, r) {
	          var i,
	              s = qt(e),
	              o = Kt(s.length),
	              u = Gt(r, o);if (t && n != n) {
	            for (; o > u;) {
	              if (i = s[u++], i != i) return !0;
	            }
	          } else for (; o > u; u++) {
	            if ((t || u in s) && s[u] === n) return t || u || 0;
	          }return !t && -1;
	        };
	      },
	          Wt = o,
	          Ht = Tt,
	          Qt = Vt(!1),
	          Xt = y("IE_PROTO"),
	          $t = function $t(t, e) {
	        var n,
	            r = Ht(t),
	            i = 0,
	            s = [];for (n in r) {
	          n != Xt && Wt(r, n) && s.push(n);
	        }for (; e.length > i;) {
	          Wt(r, n = e[i++]) && (~Qt(s, n) || s.push(n));
	        }return s;
	      },
	          Jt = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),
	          Yt = $t,
	          Zt = Jt,
	          te = Object.keys || function (t) {
	        return Yt(t, Zt);
	      },
	          ee = G,
	          ne = A,
	          re = te,
	          ie = x ? Object.defineProperties : function (t, e) {
	        ne(t);for (var n, r = re(e), i = r.length, s = 0; i > s;) {
	          ee.f(t, n = r[s++], e[n]);
	        }return t;
	      },
	          se = u.document && document.documentElement,
	          oe = A,
	          ue = ie,
	          ae = Jt,
	          fe = y("IE_PROTO"),
	          ce = function ce() {},
	          he = "prototype",
	          _le = function le() {
	        var t,
	            e = F("iframe"),
	            n = ae.length,
	            r = "<",
	            i = ">";for (e.style.display = "none", se.appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write(r + "script" + i + "document.F=Object" + r + "/script" + i), t.close(), _le = t.F; n--;) {
	          delete _le[he][ae[n]];
	        }return _le();
	      },
	          de = Object.create || function (t, e) {
	        var n;return null !== t ? (ce[he] = oe(t), n = new ce(), ce[he] = null, n[fe] = t) : n = _le(), void 0 === e ? n : ue(n, e);
	      },
	          _e = e(function (t) {
	        var e = h("wks"),
	            n = _,
	            r = u.Symbol,
	            i = "function" == typeof r,
	            s = t.exports = function (t) {
	          return e[t] || (e[t] = i && r[t] || (i ? r : n)("Symbol." + t));
	        };s.store = e;
	      }),
	          ve = G.f,
	          pe = o,
	          ye = _e("toStringTag"),
	          ge = function ge(t, e, n) {
	        t && !pe(t = n ? t : t.prototype, ye) && ve(t, ye, { configurable: !0, value: e });
	      },
	          be = de,
	          ke = V,
	          me = ge,
	          we = {};Q(we, _e("iterator"), function () {
	        return this;
	      });var Oe = function Oe(t, e, n) {
	        t.prototype = be(we, { next: ke(1, n) }), me(t, e + " Iterator");
	      },
	          Be = Mt,
	          Me = et,
	          Se = St,
	          Ee = Q,
	          je = o,
	          Ae = Et,
	          Le = Oe,
	          xe = ge,
	          Ne = w,
	          Pe = _e("iterator"),
	          Te = !([].keys && "next" in [].keys()),
	          Fe = "@@iterator",
	          Ce = "keys",
	          ze = "values",
	          Ue = function Ue() {
	        return this;
	      },
	          Ie = function Ie(t, e, n, r, i, s, o) {
	        Le(n, e, r);var u,
	            a,
	            f,
	            c = function c(t) {
	          if (!Te && t in _) return _[t];switch (t) {case Ce:
	              return function () {
	                return new n(this, t);
	              };case ze:
	              return function () {
	                return new n(this, t);
	              };}return function () {
	            return new n(this, t);
	          };
	        },
	            h = e + " Iterator",
	            l = i == ze,
	            d = !1,
	            _ = t.prototype,
	            v = _[Pe] || _[Fe] || i && _[i],
	            p = v || c(i),
	            y = i ? l ? c("entries") : p : void 0,
	            g = "Array" == e ? _.entries || v : v;if (g && (f = Ne(g.call(new t())), f !== Object.prototype && (xe(f, h, !0), Be || je(f, Pe) || Ee(f, Pe, Ue))), l && v && v.name !== ze && (d = !0, p = function p() {
	          return v.call(this);
	        }), Be && !o || !Te && !d && _[Pe] || Ee(_, Pe, p), Ae[e] = p, Ae[h] = Ue, i) if (u = { values: l ? p : c(ze), keys: s ? p : c(Ce), entries: y }, o) for (a in u) {
	          a in _ || Se(_, a, u[a]);
	        } else Me(Me.P + Me.F * (Te || d), e, u);return u;
	      },
	          De = Bt(!0);Ie(String, "String", function (t) {
	        this._t = String(t), this._i = 0;
	      }, function () {
	        var t,
	            e = this._t,
	            n = this._i;return n >= e.length ? { value: void 0, done: !0 } : (t = De(e, n), this._i += t.length, { value: t, done: !1 });
	      });var Re = function Re() {},
	          qe = function qe(t, e) {
	        return { value: e, done: !!t };
	      },
	          Ke = Re,
	          Ge = qe,
	          Ve = Et,
	          We = Tt;Ie(Array, "Array", function (t, e) {
	        this._t = We(t), this._i = 0, this._k = e;
	      }, function () {
	        var t = this._t,
	            e = this._k,
	            n = this._i++;return !t || n >= t.length ? (this._t = void 0, Ge(1)) : "keys" == e ? Ge(0, n) : "values" == e ? Ge(0, t[n]) : Ge(0, [n, t[n]]);
	      }, "values");Ve.Arguments = Ve.Array, Ke("keys"), Ke("values"), Ke("entries");for (var He = u, Qe = Q, Xe = Et, $e = _e("toStringTag"), Je = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], Ye = 0; Ye < 5; Ye++) {
	        var Ze = Je[Ye],
	            tn = He[Ze],
	            en = tn && tn.prototype;en && !en[$e] && Qe(en, $e, Ze), Xe[Ze] = Xe.Array;
	      }var nn = _e,
	          rn = { f: nn },
	          sn = rn.f("iterator"),
	          on = e(function (t) {
	        t.exports = { default: sn, __esModule: !0 };
	      }),
	          un = e(function (t) {
	        var e = _("meta"),
	            n = E,
	            r = o,
	            i = G.f,
	            s = 0,
	            u = Object.isExtensible || function () {
	          return !0;
	        },
	            a = !L(function () {
	          return u(Object.preventExtensions({}));
	        }),
	            f = function f(t) {
	          i(t, e, { value: { i: "O" + ++s, w: {} } });
	        },
	            c = function c(t, i) {
	          if (!n(t)) return "symbol" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? t : ("string" == typeof t ? "S" : "P") + t;if (!r(t, e)) {
	            if (!u(t)) return "F";if (!i) return "E";f(t);
	          }return t[e].i;
	        },
	            h = function h(t, n) {
	          if (!r(t, e)) {
	            if (!u(t)) return !0;if (!n) return !1;f(t);
	          }return t[e].w;
	        },
	            l = function l(t) {
	          return a && d.NEED && u(t) && !r(t, e) && f(t), t;
	        },
	            d = t.exports = { KEY: e, NEED: !1, fastKey: c, getWeak: h, onFreeze: l };
	      }),
	          an = u,
	          fn = O,
	          cn = Mt,
	          hn = rn,
	          ln = G.f,
	          dn = function dn(t) {
	        var e = fn.Symbol || (fn.Symbol = cn ? {} : an.Symbol || {});"_" == t.charAt(0) || t in e || ln(e, t, { value: hn.f(t) });
	      },
	          _n = te,
	          vn = Tt,
	          pn = function pn(t, e) {
	        for (var n, r = vn(t), i = _n(r), s = i.length, o = 0; s > o;) {
	          if (r[n = i[o++]] === e) return n;
	        }
	      },
	          yn = Object.getOwnPropertySymbols,
	          gn = { f: yn },
	          bn = {}.propertyIsEnumerable,
	          kn = { f: bn },
	          mn = te,
	          wn = gn,
	          On = kn,
	          Bn = function Bn(t) {
	        var e = mn(t),
	            n = wn.f;if (n) for (var r, i = n(t), s = On.f, o = 0; i.length > o;) {
	          s.call(t, r = i[o++]) && e.push(r);
	        }return e;
	      },
	          Mn = At,
	          Sn = Array.isArray || function (t) {
	        return "Array" == Mn(t);
	      },
	          En = $t,
	          jn = Jt.concat("length", "prototype"),
	          An = Object.getOwnPropertyNames || function (t) {
	        return En(t, jn);
	      },
	          Ln = { f: An },
	          xn = Tt,
	          Nn = Ln.f,
	          Pn = {}.toString,
	          Tn = "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
	          Fn = function Fn(t) {
	        try {
	          return Nn(t);
	        } catch (t) {
	          return Tn.slice();
	        }
	      },
	          Cn = function Cn(t) {
	        return Tn && "[object Window]" == Pn.call(t) ? Fn(t) : Nn(xn(t));
	      },
	          zn = { f: Cn },
	          Un = kn,
	          In = V,
	          Dn = Tt,
	          Rn = U,
	          qn = o,
	          Kn = C,
	          Gn = Object.getOwnPropertyDescriptor,
	          Vn = x ? Gn : function (t, e) {
	        if (t = Dn(t), e = Rn(e, !0), Kn) try {
	          return Gn(t, e);
	        } catch (t) {}if (qn(t, e)) return In(!Un.f.call(t, e), t[e]);
	      },
	          Wn = { f: Vn },
	          Hn = u,
	          Qn = o,
	          Xn = x,
	          $n = et,
	          Jn = St,
	          Yn = un.KEY,
	          Zn = L,
	          tr = h,
	          er = ge,
	          nr = _,
	          rr = _e,
	          ir = rn,
	          sr = dn,
	          or = pn,
	          ur = Bn,
	          ar = Sn,
	          fr = A,
	          cr = Tt,
	          hr = U,
	          lr = V,
	          dr = de,
	          _r = zn,
	          vr = Wn,
	          pr = G,
	          yr = te,
	          gr = vr.f,
	          br = pr.f,
	          kr = _r.f,
	          _mr = Hn.Symbol,
	          wr = Hn.JSON,
	          Or = wr && wr.stringify,
	          Br = "prototype",
	          Mr = rr("_hidden"),
	          Sr = rr("toPrimitive"),
	          Er = {}.propertyIsEnumerable,
	          jr = tr("symbol-registry"),
	          Ar = tr("symbols"),
	          Lr = tr("op-symbols"),
	          xr = Object[Br],
	          Nr = "function" == typeof _mr,
	          Pr = Hn.QObject,
	          Tr = !Pr || !Pr[Br] || !Pr[Br].findChild,
	          Fr = Xn && Zn(function () {
	        return 7 != dr(br({}, "a", { get: function get() {
	            return br(this, "a", { value: 7 }).a;
	          } })).a;
	      }) ? function (t, e, n) {
	        var r = gr(xr, e);r && delete xr[e], br(t, e, n), r && t !== xr && br(xr, e, r);
	      } : br,
	          Cr = function Cr(t) {
	        var e = Ar[t] = dr(_mr[Br]);return e._k = t, e;
	      },
	          zr = Nr && "symbol" == _typeof(_mr.iterator) ? function (t) {
	        return "symbol" == (typeof t === "undefined" ? "undefined" : _typeof(t));
	      } : function (t) {
	        return t instanceof _mr;
	      },
	          Ur = function Ur(t, e, n) {
	        return t === xr && Ur(Lr, e, n), fr(t), e = hr(e, !0), fr(n), Qn(Ar, e) ? (n.enumerable ? (Qn(t, Mr) && t[Mr][e] && (t[Mr][e] = !1), n = dr(n, { enumerable: lr(0, !1) })) : (Qn(t, Mr) || br(t, Mr, lr(1, {})), t[Mr][e] = !0), Fr(t, e, n)) : br(t, e, n);
	      },
	          Ir = function Ir(t, e) {
	        fr(t);for (var n, r = ur(e = cr(e)), i = 0, s = r.length; s > i;) {
	          Ur(t, n = r[i++], e[n]);
	        }return t;
	      },
	          Dr = function Dr(t, e) {
	        return void 0 === e ? dr(t) : Ir(dr(t), e);
	      },
	          Rr = function Rr(t) {
	        var e = Er.call(this, t = hr(t, !0));return !(this === xr && Qn(Ar, t) && !Qn(Lr, t)) && (!(e || !Qn(this, t) || !Qn(Ar, t) || Qn(this, Mr) && this[Mr][t]) || e);
	      },
	          qr = function qr(t, e) {
	        if (t = cr(t), e = hr(e, !0), t !== xr || !Qn(Ar, e) || Qn(Lr, e)) {
	          var n = gr(t, e);return !n || !Qn(Ar, e) || Qn(t, Mr) && t[Mr][e] || (n.enumerable = !0), n;
	        }
	      },
	          Kr = function Kr(t) {
	        for (var e, n = kr(cr(t)), r = [], i = 0; n.length > i;) {
	          Qn(Ar, e = n[i++]) || e == Mr || e == Yn || r.push(e);
	        }return r;
	      },
	          Gr = function Gr(t) {
	        for (var e, n = t === xr, r = kr(n ? Lr : cr(t)), i = [], s = 0; r.length > s;) {
	          !Qn(Ar, e = r[s++]) || n && !Qn(xr, e) || i.push(Ar[e]);
	        }return i;
	      };Nr || (_mr = function mr() {
	        if (this instanceof _mr) throw TypeError("Symbol is not a constructor!");var t = nr(arguments.length > 0 ? arguments[0] : void 0),
	            e = function e(n) {
	          this === xr && e.call(Lr, n), Qn(this, Mr) && Qn(this[Mr], t) && (this[Mr][t] = !1), Fr(this, t, lr(1, n));
	        };return Xn && Tr && Fr(xr, t, { configurable: !0, set: e }), Cr(t);
	      }, Jn(_mr[Br], "toString", function () {
	        return this._k;
	      }), vr.f = qr, pr.f = Ur, Ln.f = _r.f = Kr, kn.f = Rr, gn.f = Gr, Xn && !Mt && Jn(xr, "propertyIsEnumerable", Rr, !0), ir.f = function (t) {
	        return Cr(rr(t));
	      }), $n($n.G + $n.W + $n.F * !Nr, { Symbol: _mr });for (var Vr = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), Wr = 0; Vr.length > Wr;) {
	        rr(Vr[Wr++]);
	      }for (var Vr = yr(rr.store), Wr = 0; Vr.length > Wr;) {
	        sr(Vr[Wr++]);
	      }$n($n.S + $n.F * !Nr, "Symbol", { for: function _for(t) {
	          return Qn(jr, t += "") ? jr[t] : jr[t] = _mr(t);
	        }, keyFor: function keyFor(t) {
	          if (zr(t)) return or(jr, t);throw TypeError(t + " is not a symbol!");
	        }, useSetter: function useSetter() {
	          Tr = !0;
	        }, useSimple: function useSimple() {
	          Tr = !1;
	        } }), $n($n.S + $n.F * !Nr, "Object", { create: Dr, defineProperty: Ur, defineProperties: Ir, getOwnPropertyDescriptor: qr, getOwnPropertyNames: Kr, getOwnPropertySymbols: Gr }), wr && $n($n.S + $n.F * (!Nr || Zn(function () {
	        var t = _mr();return "[null]" != Or([t]) || "{}" != Or({ a: t }) || "{}" != Or(Object(t));
	      })), "JSON", { stringify: function stringify(t) {
	          if (void 0 !== t && !zr(t)) {
	            for (var e, n, r = [t], i = 1; arguments.length > i;) {
	              r.push(arguments[i++]);
	            }return e = r[1], "function" == typeof e && (n = e), !n && ar(e) || (e = function e(t, _e3) {
	              if (n && (_e3 = n.call(this, t, _e3)), !zr(_e3)) return _e3;
	            }), r[1] = e, Or.apply(wr, r);
	          }
	        } }), _mr[Br][Sr] || Q(_mr[Br], Sr, _mr[Br].valueOf), er(_mr, "Symbol"), er(Math, "Math", !0), er(Hn.JSON, "JSON", !0), dn("asyncIterator"), dn("observable");var Hr = O.Symbol,
	          Qr = e(function (t) {
	        t.exports = { default: Hr, __esModule: !0 };
	      }),
	          Xr = e(function (t, e) {
	        function n(t) {
	          return t && t.__esModule ? t : { default: t };
	        }e.__esModule = !0;var r = on,
	            i = n(r),
	            s = Qr,
	            o = n(s),
	            u = "function" == typeof o.default && "symbol" == _typeof(i.default) ? function (t) {
	          return typeof t === "undefined" ? "undefined" : _typeof(t);
	        } : function (t) {
	          return t && "function" == typeof o.default && t.constructor === o.default && t !== o.default.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
	        };e.default = "function" == typeof o.default && "symbol" === u(i.default) ? function (t) {
	          return "undefined" == typeof t ? "undefined" : u(t);
	        } : function (t) {
	          return t && "function" == typeof o.default && t.constructor === o.default && t !== o.default.prototype ? "symbol" : "undefined" == typeof t ? "undefined" : u(t);
	        };
	      }),
	          $r = e(function (t, e) {
	        function n(t) {
	          return t && t.__esModule ? t : { default: t };
	        }e.__esModule = !0;var r = Xr,
	            i = n(r);e.default = function (t, e) {
	          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" !== ("undefined" == typeof e ? "undefined" : (0, i.default)(e)) && "function" != typeof e ? t : e;
	        };
	      }),
	          Jr = t($r),
	          Yr = E,
	          Zr = A,
	          ti = function ti(t, e) {
	        if (Zr(t), !Yr(e) && null !== e) throw TypeError(e + ": can't set as prototype!");
	      },
	          ei = { set: Object.setPrototypeOf || ("__proto__" in {} ? function (t, e, n) {
	          try {
	            n = S(Function.call, Wn.f(Object.prototype, "__proto__").set, 2), n(t, []), e = !(t instanceof Array);
	          } catch (t) {
	            e = !0;
	          }return function (t, r) {
	            return ti(t, r), e ? t.__proto__ = r : n(t, r), t;
	          };
	        }({}, !1) : void 0), check: ti },
	          ni = et;ni(ni.S, "Object", { setPrototypeOf: ei.set });var ri = O.Object.setPrototypeOf,
	          ii = e(function (t) {
	        t.exports = { default: ri, __esModule: !0 };
	      }),
	          si = et;si(si.S, "Object", { create: de });var oi = O.Object,
	          ui = function ui(t, e) {
	        return oi.create(t, e);
	      },
	          ai = e(function (t) {
	        t.exports = { default: ui, __esModule: !0 };
	      }),
	          fi = e(function (t, e) {
	        function n(t) {
	          return t && t.__esModule ? t : { default: t };
	        }e.__esModule = !0;var r = ii,
	            i = n(r),
	            s = ai,
	            o = n(s),
	            u = Xr,
	            a = n(u);e.default = function (t, e) {
	          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof e ? "undefined" : (0, a.default)(e)));t.prototype = (0, o.default)(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (i.default ? (0, i.default)(t, e) : t.__proto__ = e);
	        };
	      }),
	          ci = t(fi),
	          hi = function () {
	        function t() {
	          lt(this, t);
	        }return gt(t, null, [{ key: "abs", value: function value(t) {
	            return null != t ? Math.abs(t) : null;
	          } }, { key: "privatize", value: function value(t, e) {
	            for (var n in e) {
	              Object.prototype.hasOwnProperty.call(e, n) && (t["_" + n] = e[n]);
	            }return t;
	          } }, { key: "setter", value: function value(t, e, n, r, i) {
	            var s = t[e],
	                o = null != n ? n : r;return "function" == typeof i && (o = i(o)), t[e] = o, o !== s;
	          } }, { key: "throwUnimplemented", value: function value(t, e) {
	            throw new Error('"' + e + '" method must be implemented on the ' + t + " class");
	          } }, { key: "toUpperCase", value: function value(t) {
	            return null != t && t.toUpperCase();
	          } }]), t;
	      }(),
	          li = function () {
	        function t() {
	          lt(this, t);
	        }return gt(t, [{ key: "getName", value: function value() {
	            hi.throwUnimplemented("Service", "getName");
	          } }]), t;
	      }(),
	          di = function (t) {
	        function e() {
	          return lt(this, e), Jr(this, (e.__proto__ || ct(e)).apply(this, arguments));
	        }return ci(e, t), gt(e, [{ key: "createCanvas", value: function value() {
	            hi.throwUnimplemented("ElementService", "createCanvas");
	          } }, { key: "createImage", value: function value() {
	            hi.throwUnimplemented("ElementService", "createImage");
	          } }, { key: "getName", value: function value() {
	            return "element";
	          } }, { key: "isCanvas", value: function value(t) {
	            hi.throwUnimplemented("ElementService", "isCanvas");
	          } }, { key: "isImage", value: function value(t) {
	            hi.throwUnimplemented("ElementService", "isImage");
	          } }]), e;
	      }(li),
	          _i = function (t) {
	        function e() {
	          return lt(this, e), Jr(this, (e.__proto__ || ct(e)).apply(this, arguments));
	        }return ci(e, t), gt(e, [{ key: "createCanvas", value: function value() {
	            return document.createElement("canvas");
	          } }, { key: "createImage", value: function value() {
	            return document.createElement("img");
	          } }, { key: "isCanvas", value: function value(t) {
	            return t instanceof HTMLCanvasElement;
	          } }, { key: "isImage", value: function value(t) {
	            return t instanceof HTMLImageElement;
	          } }]), e;
	      }(di),
	          vi = te,
	          pi = gn,
	          yi = kn,
	          gi = i,
	          bi = xt,
	          ki = Object.assign,
	          mi = !ki || L(function () {
	        var t = {},
	            e = {},
	            n = Symbol(),
	            r = "abcdefghijklmnopqrst";return t[n] = 7, r.split("").forEach(function (t) {
	          e[t] = t;
	        }), 7 != ki({}, t)[n] || Object.keys(ki({}, e)).join("") != r;
	      }) ? function (t, e) {
	        for (var n = gi(t), r = arguments.length, i = 1, s = pi.f, o = yi.f; r > i;) {
	          for (var u, a = bi(arguments[i++]), f = s ? vi(a).concat(s(a)) : vi(a), c = f.length, h = 0; c > h;) {
	            o.call(a, u = f[h++]) && (n[u] = a[u]);
	          }
	        }return n;
	      } : ki,
	          wi = et;wi(wi.S + wi.F, "Object", { assign: mi });var Oi = O.Object.assign,
	          Bi = e(function (t) {
	        t.exports = { default: Oi, __esModule: !0 };
	      }),
	          Mi = t(Bi),
	          Si = function () {
	        function t(e) {
	          lt(this, t), this.qrious = e;
	        }return gt(t, [{ key: "draw", value: function value(t) {
	            hi.throwUnimplemented("Renderer", "draw");
	          } }, { key: "getModuleSize", value: function value(t) {
	            var e = this.qrious.padding || 0,
	                n = Math.floor((this.qrious.size - 2 * e) / t.width);return Math.max(1, n);
	          } }, { key: "getOffset", value: function value(t) {
	            if (null != this.qrious.padding) return this.qrious.padding;var e = this.getModuleSize(t),
	                n = Math.floor((this.qrious.size - e * t.width) / 2);return Math.max(0, n);
	          } }, { key: "render", value: function value(t) {
	            this.resize(), this.reset(), this.draw(t);
	          } }, { key: "reset", value: function value() {
	            hi.throwUnimplemented("Renderer", "reset");
	          } }, { key: "resize", value: function value() {
	            hi.throwUnimplemented("Renderer", "resize");
	          } }]), t;
	      }(),
	          Ei = function (t) {
	        function e() {
	          return lt(this, e), Jr(this, (e.__proto__ || ct(e)).apply(this, arguments));
	        }return ci(e, t), gt(e, [{ key: "draw", value: function value(t) {
	            var e = this.qrious,
	                n = this.getModuleSize(t),
	                r = this.getOffset(t),
	                i = e.canvas.getContext("2d");i.fillStyle = e.foreground, i.globalAlpha = e.foregroundAlpha;for (var s = 0; s < t.width; s++) {
	              for (var o = 0; o < t.width; o++) {
	                t.buffer[o * t.width + s] && i.fillRect(n * s + r, n * o + r, n, n);
	              }
	            }
	          } }, { key: "reset", value: function value() {
	            var t = this.qrious,
	                e = t.canvas.getContext("2d");e.lineWidth = 1, e.clearRect(0, 0, t.size, t.size), e.fillStyle = t.background, e.globalAlpha = t.backgroundAlpha, e.fillRect(0, 0, t.size, t.size);
	          } }, { key: "resize", value: function value() {
	            var t = this.qrious,
	                e = t.canvas;e.width = t.size, e.height = t.size;
	          } }]), e;
	      }(Si),
	          ji = function () {
	        function t() {
	          lt(this, t);
	        }return gt(t, null, [{ key: "BLOCK", get: function get() {
	            return [0, 11, 15, 19, 23, 27, 31, 16, 18, 20, 22, 24, 26, 28, 20, 22, 24, 24, 26, 28, 28, 22, 24, 24, 26, 26, 28, 28, 24, 24, 26, 26, 26, 28, 28, 24, 26, 26, 26, 28, 28];
	          } }]), t;
	      }(),
	          Ai = function () {
	        function t() {
	          lt(this, t);
	        }return gt(t, null, [{ key: "BLOCKS", get: function get() {
	            return [1, 0, 19, 7, 1, 0, 16, 10, 1, 0, 13, 13, 1, 0, 9, 17, 1, 0, 34, 10, 1, 0, 28, 16, 1, 0, 22, 22, 1, 0, 16, 28, 1, 0, 55, 15, 1, 0, 44, 26, 2, 0, 17, 18, 2, 0, 13, 22, 1, 0, 80, 20, 2, 0, 32, 18, 2, 0, 24, 26, 4, 0, 9, 16, 1, 0, 108, 26, 2, 0, 43, 24, 2, 2, 15, 18, 2, 2, 11, 22, 2, 0, 68, 18, 4, 0, 27, 16, 4, 0, 19, 24, 4, 0, 15, 28, 2, 0, 78, 20, 4, 0, 31, 18, 2, 4, 14, 18, 4, 1, 13, 26, 2, 0, 97, 24, 2, 2, 38, 22, 4, 2, 18, 22, 4, 2, 14, 26, 2, 0, 116, 30, 3, 2, 36, 22, 4, 4, 16, 20, 4, 4, 12, 24, 2, 2, 68, 18, 4, 1, 43, 26, 6, 2, 19, 24, 6, 2, 15, 28, 4, 0, 81, 20, 1, 4, 50, 30, 4, 4, 22, 28, 3, 8, 12, 24, 2, 2, 92, 24, 6, 2, 36, 22, 4, 6, 20, 26, 7, 4, 14, 28, 4, 0, 107, 26, 8, 1, 37, 22, 8, 4, 20, 24, 12, 4, 11, 22, 3, 1, 115, 30, 4, 5, 40, 24, 11, 5, 16, 20, 11, 5, 12, 24, 5, 1, 87, 22, 5, 5, 41, 24, 5, 7, 24, 30, 11, 7, 12, 24, 5, 1, 98, 24, 7, 3, 45, 28, 15, 2, 19, 24, 3, 13, 15, 30, 1, 5, 107, 28, 10, 1, 46, 28, 1, 15, 22, 28, 2, 17, 14, 28, 5, 1, 120, 30, 9, 4, 43, 26, 17, 1, 22, 28, 2, 19, 14, 28, 3, 4, 113, 28, 3, 11, 44, 26, 17, 4, 21, 26, 9, 16, 13, 26, 3, 5, 107, 28, 3, 13, 41, 26, 15, 5, 24, 30, 15, 10, 15, 28, 4, 4, 116, 28, 17, 0, 42, 26, 17, 6, 22, 28, 19, 6, 16, 30, 2, 7, 111, 28, 17, 0, 46, 28, 7, 16, 24, 30, 34, 0, 13, 24, 4, 5, 121, 30, 4, 14, 47, 28, 11, 14, 24, 30, 16, 14, 15, 30, 6, 4, 117, 30, 6, 14, 45, 28, 11, 16, 24, 30, 30, 2, 16, 30, 8, 4, 106, 26, 8, 13, 47, 28, 7, 22, 24, 30, 22, 13, 15, 30, 10, 2, 114, 28, 19, 4, 46, 28, 28, 6, 22, 28, 33, 4, 16, 30, 8, 4, 122, 30, 22, 3, 45, 28, 8, 26, 23, 30, 12, 28, 15, 30, 3, 10, 117, 30, 3, 23, 45, 28, 4, 31, 24, 30, 11, 31, 15, 30, 7, 7, 116, 30, 21, 7, 45, 28, 1, 37, 23, 30, 19, 26, 15, 30, 5, 10, 115, 30, 19, 10, 47, 28, 15, 25, 24, 30, 23, 25, 15, 30, 13, 3, 115, 30, 2, 29, 46, 28, 42, 1, 24, 30, 23, 28, 15, 30, 17, 0, 115, 30, 10, 23, 46, 28, 10, 35, 24, 30, 19, 35, 15, 30, 17, 1, 115, 30, 14, 21, 46, 28, 29, 19, 24, 30, 11, 46, 15, 30, 13, 6, 115, 30, 14, 23, 46, 28, 44, 7, 24, 30, 59, 1, 16, 30, 12, 7, 121, 30, 12, 26, 47, 28, 39, 14, 24, 30, 22, 41, 15, 30, 6, 14, 121, 30, 6, 34, 47, 28, 46, 10, 24, 30, 2, 64, 15, 30, 17, 4, 122, 30, 29, 14, 46, 28, 49, 10, 24, 30, 24, 46, 15, 30, 4, 18, 122, 30, 13, 32, 46, 28, 48, 14, 24, 30, 42, 32, 15, 30, 20, 4, 117, 30, 40, 7, 47, 28, 43, 22, 24, 30, 10, 67, 15, 30, 19, 6, 118, 30, 18, 31, 47, 28, 34, 34, 24, 30, 20, 61, 15, 30];
	          } }, { key: "FINAL_FORMAT", get: function get() {
	            return [30660, 29427, 32170, 30877, 26159, 25368, 27713, 26998, 21522, 20773, 24188, 23371, 17913, 16590, 20375, 19104, 13663, 12392, 16177, 14854, 9396, 8579, 11994, 11245, 5769, 5054, 7399, 6608, 1890, 597, 3340, 2107];
	          } }, { key: "LEVELS", get: function get() {
	            return { L: 1, M: 2, Q: 3, H: 4 };
	          } }]), t;
	      }(),
	          Li = function () {
	        function t() {
	          lt(this, t);
	        }return gt(t, null, [{ key: "EXPONENT", get: function get() {
	            return [1, 2, 4, 8, 16, 32, 64, 128, 29, 58, 116, 232, 205, 135, 19, 38, 76, 152, 45, 90, 180, 117, 234, 201, 143, 3, 6, 12, 24, 48, 96, 192, 157, 39, 78, 156, 37, 74, 148, 53, 106, 212, 181, 119, 238, 193, 159, 35, 70, 140, 5, 10, 20, 40, 80, 160, 93, 186, 105, 210, 185, 111, 222, 161, 95, 190, 97, 194, 153, 47, 94, 188, 101, 202, 137, 15, 30, 60, 120, 240, 253, 231, 211, 187, 107, 214, 177, 127, 254, 225, 223, 163, 91, 182, 113, 226, 217, 175, 67, 134, 17, 34, 68, 136, 13, 26, 52, 104, 208, 189, 103, 206, 129, 31, 62, 124, 248, 237, 199, 147, 59, 118, 236, 197, 151, 51, 102, 204, 133, 23, 46, 92, 184, 109, 218, 169, 79, 158, 33, 66, 132, 21, 42, 84, 168, 77, 154, 41, 82, 164, 85, 170, 73, 146, 57, 114, 228, 213, 183, 115, 230, 209, 191, 99, 198, 145, 63, 126, 252, 229, 215, 179, 123, 246, 241, 255, 227, 219, 171, 75, 150, 49, 98, 196, 149, 55, 110, 220, 165, 87, 174, 65, 130, 25, 50, 100, 200, 141, 7, 14, 28, 56, 112, 224, 221, 167, 83, 166, 81, 162, 89, 178, 121, 242, 249, 239, 195, 155, 43, 86, 172, 69, 138, 9, 18, 36, 72, 144, 61, 122, 244, 245, 247, 243, 251, 235, 203, 139, 11, 22, 44, 88, 176, 125, 250, 233, 207, 131, 27, 54, 108, 216, 173, 71, 142, 0];
	          } }, { key: "LOG", get: function get() {
	            return [255, 0, 1, 25, 2, 50, 26, 198, 3, 223, 51, 238, 27, 104, 199, 75, 4, 100, 224, 14, 52, 141, 239, 129, 28, 193, 105, 248, 200, 8, 76, 113, 5, 138, 101, 47, 225, 36, 15, 33, 53, 147, 142, 218, 240, 18, 130, 69, 29, 181, 194, 125, 106, 39, 249, 185, 201, 154, 9, 120, 77, 228, 114, 166, 6, 191, 139, 98, 102, 221, 48, 253, 226, 152, 37, 179, 16, 145, 34, 136, 54, 208, 148, 206, 143, 150, 219, 189, 241, 210, 19, 92, 131, 56, 70, 64, 30, 66, 182, 163, 195, 72, 126, 110, 107, 58, 40, 84, 250, 133, 186, 61, 202, 94, 155, 159, 10, 21, 121, 43, 78, 212, 229, 172, 115, 243, 167, 87, 7, 112, 192, 247, 140, 128, 99, 13, 103, 74, 222, 237, 49, 197, 254, 24, 227, 165, 153, 119, 38, 184, 180, 124, 17, 68, 146, 217, 35, 32, 137, 46, 55, 63, 209, 91, 149, 188, 207, 205, 144, 135, 151, 178, 220, 252, 190, 97, 242, 86, 211, 171, 20, 42, 93, 158, 132, 60, 57, 83, 71, 109, 65, 162, 31, 45, 67, 216, 183, 123, 164, 118, 196, 23, 73, 236, 127, 12, 111, 246, 108, 161, 59, 82, 41, 157, 85, 170, 251, 96, 134, 177, 187, 204, 62, 90, 203, 89, 95, 176, 156, 169, 160, 81, 11, 245, 22, 235, 122, 117, 44, 215, 79, 174, 213, 233, 230, 231, 173, 232, 116, 214, 244, 234, 168, 80, 88, 175];
	          } }]), t;
	      }(),
	          xi = function () {
	        function t() {
	          lt(this, t);
	        }return gt(t, null, [{ key: "BLOCK", get: function get() {
	            return [3220, 1468, 2713, 1235, 3062, 1890, 2119, 1549, 2344, 2936, 1117, 2583, 1330, 2470, 1667, 2249, 2028, 3780, 481, 4011, 142, 3098, 831, 3445, 592, 2517, 1776, 2234, 1951, 2827, 1070, 2660, 1345, 3177];
	          } }]), t;
	      }(),
	          Ni = function () {
	        function t(e) {
	          lt(this, t), this._badness = [], this._level = Ai.LEVELS[e.level], this._polynomial = [], this._value = e.value, this._valueLength = this._value.length, this._version = 0, this._stringBuffer = [];for (var n = void 0, r = void 0, i = void 0, s = void 0; this._version < 40;) {
	            this._version++;var o = 4 * (this._level - 1) + 16 * (this._version - 1);if (i = Ai.BLOCKS[o++], s = Ai.BLOCKS[o++], n = Ai.BLOCKS[o++], r = Ai.BLOCKS[o], o = n * (i + s) + s - 3 + (this._version <= 9), this._valueLength <= o) break;
	          }this._dataBlock = n, this._eccBlock = r, this._neccBlock1 = i, this._neccBlock2 = s, this.width = 17 + 4 * this._version, this.buffer = t._createArray(this.width * this.width), this._ecc = t._createArray(this._dataBlock + (this._dataBlock + this._eccBlock) * (this._neccBlock1 + this._neccBlock2) + this._neccBlock2), this._mask = t._createArray((this.width * (this.width + 1) + 1) / 2), this._insertFinders(), this._insertAlignments(), this.buffer[8 + this.width * (this.width - 8)] = 1, this._insertTimingGap(), this._reverseMask(), this._insertTimingRowAndColumn(), this._insertVersion(), this._syncMask(), this._convertBitStream(this._value.length), this._calculatePolynomial(), this._appendEccToData(), this._interleaveBlocks(), this._pack(), this._finish();
	        }return gt(t, null, [{ key: "_createArray", value: function value(t) {
	            for (var e = [], n = 0; n < t; n++) {
	              e[n] = 0;
	            }return e;
	          } }, { key: "_getMaskBit", value: function value(t, e) {
	            var n = void 0;return t > e && (n = t, t = e, e = n), n = e, n += e * e, n >>= 1, n += t;
	          } }, { key: "_modN", value: function value(t) {
	            for (; t >= 255;) {
	              t -= 255, t = (t >> 8) + (255 & t);
	            }return t;
	          } }, { key: "N1", get: function get() {
	            return 3;
	          } }, { key: "N2", get: function get() {
	            return 3;
	          } }, { key: "N3", get: function get() {
	            return 40;
	          } }, { key: "N4", get: function get() {
	            return 10;
	          } }]), gt(t, [{ key: "_addAlignment", value: function value(t, e) {
	            this.buffer[t + this.width * e] = 1;for (var n = -2; n < 2; n++) {
	              this.buffer[t + n + this.width * (e - 2)] = 1, this.buffer[t - 2 + this.width * (e + n + 1)] = 1, this.buffer[t + 2 + this.width * (e + n)] = 1, this.buffer[t + n + 1 + this.width * (e + 2)] = 1;
	            }for (var r = 0; r < 2; r++) {
	              this._setMask(t - 1, e + r), this._setMask(t + 1, e - r), this._setMask(t - r, e - 1), this._setMask(t + r, e + 1);
	            }
	          } }, { key: "_appendData", value: function value(e, n, r, i) {
	            for (var s = 0; s < i; s++) {
	              this._stringBuffer[r + s] = 0;
	            }for (var o = 0; o < n; o++) {
	              var u = Li.LOG[this._stringBuffer[e + o] ^ this._stringBuffer[r]];if (255 !== u) for (var a = 1; a < i; a++) {
	                this._stringBuffer[r + a - 1] = this._stringBuffer[r + a] ^ Li.EXPONENT[t._modN(u + this._polynomial[i - a])];
	              } else for (var f = r; f < r + i; f++) {
	                this._stringBuffer[f] = this._stringBuffer[f + 1];
	              }this._stringBuffer[r + i - 1] = 255 === u ? 0 : Li.EXPONENT[t._modN(u + this._polynomial[0])];
	            }
	          } }, { key: "_appendEccToData", value: function value() {
	            for (var t = 0, e = this._calculateMaxLength(), n = 0; n < this._neccBlock1; n++) {
	              this._appendData(t, this._dataBlock, e, this._eccBlock), t += this._dataBlock, e += this._eccBlock;
	            }for (var r = 0; r < this._neccBlock2; r++) {
	              this._appendData(t, this._dataBlock + 1, e, this._eccBlock), t += this._dataBlock + 1, e += this._eccBlock;
	            }
	          } }, { key: "_applyMask", value: function value(t) {
	            var e = this.width;switch (t) {case 0:
	                for (var n = 0; n < e; n++) {
	                  for (var r = 0; r < e; r++) {
	                    r + n & 1 || this._isMasked(r, n) || (this.buffer[r + n * e] ^= 1);
	                  }
	                }break;case 1:
	                for (var i = 0; i < e; i++) {
	                  for (var s = 0; s < e; s++) {
	                    1 & i || this._isMasked(s, i) || (this.buffer[s + i * e] ^= 1);
	                  }
	                }break;case 2:
	                for (var o = 0; o < e; o++) {
	                  for (var u = 0, a = 0; a < e; a++, u++) {
	                    3 === u && (u = 0), u || this._isMasked(a, o) || (this.buffer[a + o * e] ^= 1);
	                  }
	                }break;case 3:
	                for (var f = 0, c = 0; c < e; c++, f++) {
	                  3 === f && (f = 0);for (var h = f, l = 0; l < e; l++, h++) {
	                    3 === h && (h = 0), h || this._isMasked(l, c) || (this.buffer[l + c * e] ^= 1);
	                  }
	                }break;case 4:
	                for (var d = 0; d < e; d++) {
	                  for (var _ = 0, v = d >> 1 & 1, p = 0; p < e; p++, _++) {
	                    3 === _ && (_ = 0, v = !v), v || this._isMasked(p, d) || (this.buffer[p + d * e] ^= 1);
	                  }
	                }break;case 5:
	                for (var y = 0, g = 0; g < e; g++, y++) {
	                  3 === y && (y = 0);for (var b = 0, k = 0; k < e; k++, b++) {
	                    3 === b && (b = 0), (k & g & 1) + !(!b | !y) || this._isMasked(k, g) || (this.buffer[k + g * e] ^= 1);
	                  }
	                }break;case 6:
	                for (var m = 0, w = 0; w < e; w++, m++) {
	                  3 === m && (m = 0);for (var O = 0, B = 0; B < e; B++, O++) {
	                    3 === O && (O = 0), (B & w & 1) + (O && O === m) & 1 || this._isMasked(B, w) || (this.buffer[B + w * e] ^= 1);
	                  }
	                }break;case 7:
	                for (var M = 0, S = 0; S < e; S++, M++) {
	                  3 === M && (M = 0);for (var E = 0, j = 0; j < e; j++, E++) {
	                    3 === E && (E = 0), (E && E === M) + (j + S & 1) & 1 || this._isMasked(j, S) || (this.buffer[j + S * e] ^= 1);
	                  }
	                }}
	          } }, { key: "_calculateMaxLength", value: function value() {
	            return this._dataBlock * (this._neccBlock1 + this._neccBlock2) + this._neccBlock2;
	          } }, { key: "_calculatePolynomial", value: function value() {
	            this._polynomial[0] = 1;for (var e = 0; e < this._eccBlock; e++) {
	              this._polynomial[e + 1] = 1;for (var n = e; n > 0; n--) {
	                this._polynomial[n] = this._polynomial[n] ? this._polynomial[n - 1] ^ Li.EXPONENT[t._modN(Li.LOG[this._polynomial[n]] + e)] : this._polynomial[n - 1];
	              }this._polynomial[0] = Li.EXPONENT[t._modN(Li.LOG[this._polynomial[0]] + e)];
	            }for (var r = 0; r <= this._eccBlock; r++) {
	              this._polynomial[r] = Li.LOG[this._polynomial[r]];
	            }
	          } }, { key: "_checkBadness", value: function value() {
	            for (var e = 0, n = this.width, r = 0; r < n - 1; r++) {
	              for (var i = 0; i < n - 1; i++) {
	                (this.buffer[i + n * r] && this.buffer[i + 1 + n * r] && this.buffer[i + n * (r + 1)] && this.buffer[i + 1 + n * (r + 1)] || !(this.buffer[i + n * r] || this.buffer[i + 1 + n * r] || this.buffer[i + n * (r + 1)] || this.buffer[i + 1 + n * (r + 1)])) && (e += t.N2);
	              }
	            }for (var s = 0, o = 0; o < n; o++) {
	              var u = 0;this._badness[0] = 0;for (var a = 0, f = 0; f < n; f++) {
	                var c = this.buffer[f + n * o];a === c ? this._badness[u]++ : this._badness[++u] = 1, a = c, s += a ? 1 : -1;
	              }e += this._getBadness(u);
	            }s < 0 && (s = -s);var h = 0,
	                l = s;for (l += l << 2, l <<= 1; l > n * n;) {
	              l -= n * n, h++;
	            }e += h * t.N4;for (var d = 0; d < n; d++) {
	              var _ = 0;this._badness[0] = 0;for (var v = 0, p = 0; p < n; p++) {
	                var y = this.buffer[d + n * p];v === y ? this._badness[_]++ : this._badness[++_] = 1, v = y;
	              }e += this._getBadness(_);
	            }return e;
	          } }, { key: "_convertBitStream", value: function value(t) {
	            for (var e = 0; e < t; e++) {
	              this._ecc[e] = this._value.charCodeAt(e);
	            }this._stringBuffer = this._ecc.slice(0);var n = this._calculateMaxLength();t >= n - 2 && (t = n - 2, this._version > 9 && t--);var r = t;if (this._version > 9) {
	              for (this._stringBuffer[r + 2] = 0, this._stringBuffer[r + 3] = 0; r--;) {
	                var i = this._stringBuffer[r];this._stringBuffer[r + 3] |= 255 & i << 4, this._stringBuffer[r + 2] = i >> 4;
	              }this._stringBuffer[2] |= 255 & t << 4, this._stringBuffer[1] = t >> 4, this._stringBuffer[0] = 64 | t >> 12;
	            } else {
	              for (this._stringBuffer[r + 1] = 0, this._stringBuffer[r + 2] = 0; r--;) {
	                var s = this._stringBuffer[r];this._stringBuffer[r + 2] |= 255 & s << 4, this._stringBuffer[r + 1] = s >> 4;
	              }this._stringBuffer[1] |= 255 & t << 4, this._stringBuffer[0] = 64 | t >> 4;
	            }for (r = t + 3 - (this._version < 10); r < n;) {
	              this._stringBuffer[r++] = 236, this._stringBuffer[r++] = 17;
	            }
	          } }, { key: "_getBadness", value: function value(e) {
	            for (var n = 0, r = 0; r <= e; r++) {
	              this._badness[r] >= 5 && (n += t.N1 + this._badness[r] - 5);
	            }for (var i = 3; i < e - 1; i += 2) {
	              this._badness[i - 2] === this._badness[i + 2] && this._badness[i + 2] === this._badness[i - 1] && this._badness[i - 1] === this._badness[i + 1] && 3 * this._badness[i - 1] === this._badness[i] && (0 === this._badness[i - 3] || i + 3 > e || 3 * this._badness[i - 3] >= 4 * this._badness[i] || 3 * this._badness[i + 3] >= 4 * this._badness[i]) && (n += t.N3);
	            }return n;
	          } }, { key: "_finish", value: function value() {
	            this._stringBuffer = this.buffer.slice(0);var t = 0,
	                e = void 0,
	                n = 3e4;for (e = 0; e < 8; e++) {
	              this._applyMask(e);var r = this._checkBadness();if (r < n && (n = r, t = e), 7 === t) break;this.buffer = this._stringBuffer.slice(0);
	            }for (t !== e && this._applyMask(t), n = Ai.FINAL_FORMAT[t + (this._level - 1 << 3)], e = 0; e < 8; e++, n >>= 1) {
	              1 & n && (this.buffer[this.width - 1 - e + 8 * this.width] = 1, e < 6 ? this.buffer[8 + this.width * e] = 1 : this.buffer[8 + this.width * (e + 1)] = 1);
	            }for (e = 0; e < 7; e++, n >>= 1) {
	              1 & n && (this.buffer[8 + this.width * (this.width - 7 + e)] = 1, e ? this.buffer[6 - e + 8 * this.width] = 1 : this.buffer[7 + 8 * this.width] = 1);
	            }
	          } }, { key: "_interleaveBlocks", value: function value() {
	            var t = this._calculateMaxLength(),
	                e = void 0,
	                n = 0;for (e = 0; e < this._dataBlock; e++) {
	              for (var r = 0; r < this._neccBlock1; r++) {
	                this._ecc[n++] = this._stringBuffer[e + r * this._dataBlock];
	              }for (var i = 0; i < this._neccBlock2; i++) {
	                this._ecc[n++] = this._stringBuffer[this._neccBlock1 * this._dataBlock + e + i * (this._dataBlock + 1)];
	              }
	            }for (var s = 0; s < this._neccBlock2; s++) {
	              this._ecc[n++] = this._stringBuffer[this._neccBlock1 * this._dataBlock + e + s * (this._dataBlock + 1)];
	            }for (e = 0; e < this._eccBlock; e++) {
	              for (var o = 0; o < this._neccBlock1 + this._neccBlock2; o++) {
	                this._ecc[n++] = this._stringBuffer[t + e + o * this._eccBlock];
	              }
	            }this._stringBuffer = this._ecc;
	          } }, { key: "_insertAlignments", value: function value() {
	            var t = this.width;if (this._version > 1) for (var e = ji.BLOCK[this._version], n = t - 7;;) {
	              for (var r = t - 7; r > e - 3 && (this._addAlignment(r, n), !(r < e));) {
	                r -= e;
	              }if (n <= e + 9) break;n -= e, this._addAlignment(6, n), this._addAlignment(n, 6);
	            }
	          } }, { key: "_insertFinders", value: function value() {
	            for (var t = this.width, e = 0; e < 3; e++) {
	              var n = 0,
	                  r = 0;1 === e && (n = t - 7), 2 === e && (r = t - 7), this.buffer[r + 3 + t * (n + 3)] = 1;for (var i = 0; i < 6; i++) {
	                this.buffer[r + i + t * n] = 1, this.buffer[r + t * (n + i + 1)] = 1, this.buffer[r + 6 + t * (n + i)] = 1, this.buffer[r + i + 1 + t * (n + 6)] = 1;
	              }for (var s = 1; s < 5; s++) {
	                this._setMask(r + s, n + 1), this._setMask(r + 1, n + s + 1), this._setMask(r + 5, n + s), this._setMask(r + s + 1, n + 5);
	              }for (var o = 2; o < 4; o++) {
	                this.buffer[r + o + t * (n + 2)] = 1, this.buffer[r + 2 + t * (n + o + 1)] = 1, this.buffer[r + 4 + t * (n + o)] = 1, this.buffer[r + o + 1 + t * (n + 4)] = 1;
	              }
	            }
	          } }, { key: "_insertTimingGap", value: function value() {
	            for (var t = this.width, e = 0; e < 7; e++) {
	              this._setMask(7, e), this._setMask(t - 8, e), this._setMask(7, e + t - 7);
	            }for (var n = 0; n < 8; n++) {
	              this._setMask(n, 7), this._setMask(n + t - 8, 7), this._setMask(n, t - 8);
	            }
	          } }, { key: "_insertTimingRowAndColumn", value: function value() {
	            for (var t = this.width, e = 0; e < t - 14; e++) {
	              1 & e ? (this._setMask(8 + e, 6), this._setMask(6, 8 + e)) : (this.buffer[8 + e + 6 * t] = 1, this.buffer[6 + t * (8 + e)] = 1);
	            }
	          } }, { key: "_insertVersion", value: function value() {
	            var t = this.width;if (this._version > 6) for (var e = xi.BLOCK[this._version - 7], n = 17, r = 0; r < 6; r++) {
	              for (var i = 0; i < 3; i++, n--) {
	                1 & (n > 11 ? this._version >> n - 12 : e >> n) ? (this.buffer[5 - r + t * (2 - i + t - 11)] = 1, this.buffer[2 - i + t - 11 + t * (5 - r)] = 1) : (this._setMask(5 - r, 2 - i + t - 11), this._setMask(2 - i + t - 11, 5 - r));
	              }
	            }
	          } }, { key: "_isMasked", value: function value(e, n) {
	            var r = t._getMaskBit(e, n);return 1 === this._mask[r];
	          } }, { key: "_pack", value: function value() {
	            for (var t = this.width - 1, e = this.width - 1, n = 1, r = 1, i = (this._dataBlock + this._eccBlock) * (this._neccBlock1 + this._neccBlock2) + this._neccBlock2, s = 0; s < i; s++) {
	              for (var o = this._stringBuffer[s], u = 0; u < 8; u++, o <<= 1) {
	                128 & o && (this.buffer[t + this.width * e] = 1);do {
	                  r ? t-- : (t++, n ? 0 !== e ? e-- : (t -= 2, n = !n, 6 === t && (t--, e = 9)) : e !== this.width - 1 ? e++ : (t -= 2, n = !n, 6 === t && (t--, e -= 8))), r = !r;
	                } while (this._isMasked(t, e));
	              }
	            }
	          } }, { key: "_reverseMask", value: function value() {
	            for (var t = this.width, e = 0; e < 9; e++) {
	              this._setMask(e, 8);
	            }for (var n = 0; n < 8; n++) {
	              this._setMask(n + t - 8, 8), this._setMask(8, n);
	            }for (var r = 0; r < 7; r++) {
	              this._setMask(8, r + t - 7);
	            }
	          } }, { key: "_setMask", value: function value(e, n) {
	            var r = t._getMaskBit(e, n);this._mask[r] = 1;
	          } }, { key: "_syncMask", value: function value() {
	            for (var t = this.width, e = 0; e < t; e++) {
	              for (var n = 0; n <= e; n++) {
	                this.buffer[n + t * e] && this._setMask(n, e);
	              }
	            }
	          } }]), t;
	      }(),
	          Pi = function (t) {
	        function e() {
	          return lt(this, e), Jr(this, (e.__proto__ || ct(e)).apply(this, arguments));
	        }return ci(e, t), gt(e, [{ key: "draw", value: function value() {
	            var t = this.qrious;t.image.src = t.toDataURL();
	          } }, { key: "reset", value: function value() {
	            var t = this.qrious;t.image.src = "";
	          } }, { key: "resize", value: function value() {
	            var t = this.qrious,
	                e = t.image;e.width = t.size, e.height = t.size;
	          } }]), e;
	      }(Si),
	          Ti = function () {
	        function t() {
	          lt(this, t), this._services = {};
	        }return gt(t, [{ key: "getService", value: function value(t) {
	            var e = this._services[t];if (!e) throw new Error("Service is not being managed with name: " + t);return e;
	          } }, { key: "setService", value: function value(t, e) {
	            if (this._services[t]) throw new Error("Service is already managed with name: " + t);e && (this._services[t] = e);
	          } }]), t;
	      }(),
	          Fi = function () {
	        function t(e) {
	          lt(this, t), e = t._parseOptions(e), hi.privatize(this, e);var n = this._element,
	              r = t._serviceManager.getService("element");this.canvas = n && r.isCanvas(n) ? n : r.createCanvas(), this.canvas.qrious = this, this.image = n && r.isImage(n) ? n : r.createImage(), this.image.qrious = this, this._renderers = [new Ei(this), new Pi(this)], this.update();
	        }return gt(t, null, [{ key: "use", value: function value(e) {
	            t._serviceManager.setService(e.getName(), e);
	          } }, { key: "_parseOptions", value: function value(e) {
	            return e = Mi({}, t.DEFAULTS, e), e.backgroundAlpha = hi.abs(e.backgroundAlpha), e.foregroundAlpha = hi.abs(e.foregroundAlpha), e.level = hi.toUpperCase(e.level), e.padding = hi.abs(e.padding), e.size = hi.abs(e.size), e;
	          } }, { key: "DEFAULTS", get: function get() {
	            return { background: "white", backgroundAlpha: 1, foreground: "black", foregroundAlpha: 1, level: "L", mime: "image/png", padding: null, size: 100, value: "" };
	          } }, { key: "VERSION", get: function get() {
	            return "2.2.0";
	          } }]), gt(t, [{ key: "toDataURL", value: function value(t) {
	            return this.canvas.toDataURL(t || this.mime);
	          } }, { key: "update", value: function value() {
	            var t = new Ni({ level: this.level, value: this.value });this._renderers.forEach(function (e) {
	              return e.render(t);
	            });
	          } }, { key: "background", get: function get() {
	            return this._background;
	          }, set: function set(e) {
	            var n = hi.setter(this, "_background", e, t.DEFAULTS.background);n && this.update();
	          } }, { key: "backgroundAlpha", get: function get() {
	            return this._backgroundAlpha;
	          }, set: function set(e) {
	            var n = hi.setter(this, "_backgroundAlpha", e, t.DEFAULTS.backgroundAlpha);n && this.update();
	          } }, { key: "foreground", get: function get() {
	            return this._foreground;
	          }, set: function set(e) {
	            var n = hi.setter(this, "_foreground", e, t.DEFAULTS.foreground);n && this.update();
	          } }, { key: "foregroundAlpha", get: function get() {
	            return this._foregroundAlpha;
	          }, set: function set(e) {
	            var n = hi.setter(this, "_foregroundAlpha", e, t.DEFAULTS.foregroundAlpha);n && this.update();
	          } }, { key: "level", get: function get() {
	            return this._level;
	          }, set: function set(e) {
	            var n = hi.setter(this, "_level", e, t.DEFAULTS.level, hi.toUpperCase);n && this.update();
	          } }, { key: "mime", get: function get() {
	            return this._mime;
	          }, set: function set(e) {
	            var n = hi.setter(this, "_mime", e, t.DEFAULTS.mime);n && this.update();
	          } }, { key: "padding", get: function get() {
	            return this._padding;
	          }, set: function set(e) {
	            var n = hi.setter(this, "_padding", e, t.DEFAULTS.padding, hi.abs);n && this.update();
	          } }, { key: "size", get: function get() {
	            return this._size;
	          }, set: function set(e) {
	            var n = hi.setter(this, "_size", e, t.DEFAULTS.size, hi.abs);n && this.update();
	          } }, { key: "value", get: function get() {
	            return this._value;
	          }, set: function set(e) {
	            var n = hi.setter(this, "_value", e, t.DEFAULTS.value);n && this.update();
	          } }]), t;
	      }();return Fi._serviceManager = new Ti(), Fi.use(new _i()), Fi;
	    });
	  }, function (t, e, n) {
	    var r = n(4)(n(1), n(5), null, null);t.exports = r.exports;
	  }, function (t, e) {
	    t.exports = function (t, e, n, r) {
	      var i,
	          s = t = t || {},
	          o = _typeof(t.default);"object" !== o && "function" !== o || (i = t, s = t.default);var u = "function" == typeof s ? s.options : s;if (e && (u.render = e.render, u.staticRenderFns = e.staticRenderFns), n && (u._scopeId = n), r) {
	        var a = u.computed || (u.computed = {});Object.keys(r).forEach(function (t) {
	          var e = r[t];a[t] = function () {
	            return e;
	          };
	        });
	      }return { esModule: i, exports: s, options: u };
	    };
	  }, function (t, e) {
	    t.exports = { render: function render() {
	        var t = this,
	            e = t.$createElement,
	            n = t._self._c || e;return n("div", { class: t.cls });
	      }, staticRenderFns: [] };
	  }]);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }
/******/ ])
});
;