!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 4));
})([
  function (e, t, n) {
    var r;
    /*!
     * jQuery JavaScript Library v3.5.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2020-05-04T22:49Z
     */ !(function (t, n) {
      "use strict";
      "object" == typeof e.exports
        ? (e.exports = t.document
            ? n(t, !0)
            : function (e) {
                if (!e.document)
                  throw new Error("jQuery requires a window with a document");
                return n(e);
              })
        : n(t);
    })("undefined" != typeof window ? window : this, function (n, o) {
      "use strict";
      var i = [],
        a = Object.getPrototypeOf,
        s = i.slice,
        u = i.flat
          ? function (e) {
              return i.flat.call(e);
            }
          : function (e) {
              return i.concat.apply([], e);
            },
        l = i.push,
        c = i.indexOf,
        f = {},
        d = f.toString,
        p = f.hasOwnProperty,
        h = p.toString,
        g = h.call(Object),
        v = {},
        m = function (e) {
          return "function" == typeof e && "number" != typeof e.nodeType;
        },
        y = function (e) {
          return null != e && e === e.window;
        },
        b = n.document,
        x = { type: !0, src: !0, nonce: !0, noModule: !0 };
      function w(e, t, n) {
        var r,
          o,
          i = (n = n || b).createElement("script");
        if (((i.text = e), t))
          for (r in x)
            (o = t[r] || (t.getAttribute && t.getAttribute(r))) &&
              i.setAttribute(r, o);
        n.head.appendChild(i).parentNode.removeChild(i);
      }
      function C(e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? f[d.call(e)] || "object"
          : typeof e;
      }
      var T = function (e, t) {
        return new T.fn.init(e, t);
      };
      function k(e) {
        var t = !!e && "length" in e && e.length,
          n = C(e);
        return (
          !m(e) &&
          !y(e) &&
          ("array" === n ||
            0 === t ||
            ("number" == typeof t && t > 0 && t - 1 in e))
        );
      }
      (T.fn = T.prototype = {
        jquery: "3.5.1",
        constructor: T,
        length: 0,
        toArray: function () {
          return s.call(this);
        },
        get: function (e) {
          return null == e
            ? s.call(this)
            : e < 0
            ? this[e + this.length]
            : this[e];
        },
        pushStack: function (e) {
          var t = T.merge(this.constructor(), e);
          return (t.prevObject = this), t;
        },
        each: function (e) {
          return T.each(this, e);
        },
        map: function (e) {
          return this.pushStack(
            T.map(this, function (t, n) {
              return e.call(t, n, t);
            })
          );
        },
        slice: function () {
          return this.pushStack(s.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        even: function () {
          return this.pushStack(
            T.grep(this, function (e, t) {
              return (t + 1) % 2;
            })
          );
        },
        odd: function () {
          return this.pushStack(
            T.grep(this, function (e, t) {
              return t % 2;
            })
          );
        },
        eq: function (e) {
          var t = this.length,
            n = +e + (e < 0 ? t : 0);
          return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: l,
        sort: i.sort,
        splice: i.splice,
      }),
        (T.extend = T.fn.extend = function () {
          var e,
            t,
            n,
            r,
            o,
            i,
            a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
          for (
            "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
              "object" == typeof a || m(a) || (a = {}),
              s === u && ((a = this), s--);
            s < u;
            s++
          )
            if (null != (e = arguments[s]))
              for (t in e)
                (r = e[t]),
                  "__proto__" !== t &&
                    a !== r &&
                    (l && r && (T.isPlainObject(r) || (o = Array.isArray(r)))
                      ? ((n = a[t]),
                        (i =
                          o && !Array.isArray(n)
                            ? []
                            : o || T.isPlainObject(n)
                            ? n
                            : {}),
                        (o = !1),
                        (a[t] = T.extend(l, i, r)))
                      : void 0 !== r && (a[t] = r));
          return a;
        }),
        T.extend({
          expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (e) {
            throw new Error(e);
          },
          noop: function () {},
          isPlainObject: function (e) {
            var t, n;
            return (
              !(!e || "[object Object]" !== d.call(e)) &&
              (!(t = a(e)) ||
                ("function" ==
                  typeof (n = p.call(t, "constructor") && t.constructor) &&
                  h.call(n) === g))
            );
          },
          isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0;
          },
          globalEval: function (e, t, n) {
            w(e, { nonce: t && t.nonce }, n);
          },
          each: function (e, t) {
            var n,
              r = 0;
            if (k(e))
              for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e;
          },
          makeArray: function (e, t) {
            var n = t || [];
            return (
              null != e &&
                (k(Object(e))
                  ? T.merge(n, "string" == typeof e ? [e] : e)
                  : l.call(n, e)),
              n
            );
          },
          inArray: function (e, t, n) {
            return null == t ? -1 : c.call(t, e, n);
          },
          merge: function (e, t) {
            for (var n = +t.length, r = 0, o = e.length; r < n; r++)
              e[o++] = t[r];
            return (e.length = o), e;
          },
          grep: function (e, t, n) {
            for (var r = [], o = 0, i = e.length, a = !n; o < i; o++)
              !t(e[o], o) !== a && r.push(e[o]);
            return r;
          },
          map: function (e, t, n) {
            var r,
              o,
              i = 0,
              a = [];
            if (k(e))
              for (r = e.length; i < r; i++)
                null != (o = t(e[i], i, n)) && a.push(o);
            else for (i in e) null != (o = t(e[i], i, n)) && a.push(o);
            return u(a);
          },
          guid: 1,
          support: v,
        }),
        "function" == typeof Symbol &&
          (T.fn[Symbol.iterator] = i[Symbol.iterator]),
        T.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (e, t) {
            f["[object " + t + "]"] = t.toLowerCase();
          }
        );
      var S =
        /*!
         * Sizzle CSS Selector Engine v2.3.5
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://js.foundation/
         *
         * Date: 2020-03-14
         */
        (function (e) {
          var t,
            n,
            r,
            o,
            i,
            a,
            s,
            u,
            l,
            c,
            f,
            d,
            p,
            h,
            g,
            v,
            m,
            y,
            b,
            x = "sizzle" + 1 * new Date(),
            w = e.document,
            C = 0,
            T = 0,
            k = ue(),
            S = ue(),
            E = ue(),
            _ = ue(),
            j = function (e, t) {
              return e === t && (f = !0), 0;
            },
            A = {}.hasOwnProperty,
            N = [],
            D = N.pop,
            O = N.push,
            q = N.push,
            L = N.slice,
            H = function (e, t) {
              for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t) return n;
              return -1;
            },
            I =
              "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            P = "[\\x20\\t\\r\\n\\f]",
            M =
              "(?:\\\\[\\da-fA-F]{1,6}" +
              P +
              "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            R =
              "\\[" +
              P +
              "*(" +
              M +
              ")(?:" +
              P +
              "*([*^$|!~]?=)" +
              P +
              "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
              M +
              "))|)" +
              P +
              "*\\]",
            F =
              ":(" +
              M +
              ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
              R +
              ")*)|.*)\\)|)",
            W = new RegExp(P + "+", "g"),
            B = new RegExp(
              "^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$",
              "g"
            ),
            $ = new RegExp("^" + P + "*," + P + "*"),
            z = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
            U = new RegExp(P + "|>"),
            X = new RegExp(F),
            V = new RegExp("^" + M + "$"),
            G = {
              ID: new RegExp("^#(" + M + ")"),
              CLASS: new RegExp("^\\.(" + M + ")"),
              TAG: new RegExp("^(" + M + "|[*])"),
              ATTR: new RegExp("^" + R),
              PSEUDO: new RegExp("^" + F),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                  P +
                  "*(even|odd|(([+-]|)(\\d*)n|)" +
                  P +
                  "*(?:([+-]|)" +
                  P +
                  "*(\\d+)|))" +
                  P +
                  "*\\)|)",
                "i"
              ),
              bool: new RegExp("^(?:" + I + ")$", "i"),
              needsContext: new RegExp(
                "^" +
                  P +
                  "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                  P +
                  "*((?:-\\d)?\\d*)" +
                  P +
                  "*\\)|)(?=[^-]|$)",
                "i"
              ),
            },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp(
              "\\\\[\\da-fA-F]{1,6}" + P + "?|\\\\([^\\r\\n\\f])",
              "g"
            ),
            ne = function (e, t) {
              var n = "0x" + e.slice(1) - 65536;
              return (
                t ||
                (n < 0
                  ? String.fromCharCode(n + 65536)
                  : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
              );
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            oe = function (e, t) {
              return t
                ? "\0" === e
                  ? "�"
                  : e.slice(0, -1) +
                    "\\" +
                    e.charCodeAt(e.length - 1).toString(16) +
                    " "
                : "\\" + e;
            },
            ie = function () {
              d();
            },
            ae = xe(
              function (e) {
                return (
                  !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                );
              },
              { dir: "parentNode", next: "legend" }
            );
          try {
            q.apply((N = L.call(w.childNodes)), w.childNodes),
              N[w.childNodes.length].nodeType;
          } catch (e) {
            q = {
              apply: N.length
                ? function (e, t) {
                    O.apply(e, L.call(t));
                  }
                : function (e, t) {
                    for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                    e.length = n - 1;
                  },
            };
          }
          function se(e, t, r, o) {
            var i,
              s,
              l,
              c,
              f,
              h,
              m,
              y = t && t.ownerDocument,
              w = t ? t.nodeType : 9;
            if (
              ((r = r || []),
              "string" != typeof e || !e || (1 !== w && 9 !== w && 11 !== w))
            )
              return r;
            if (!o && (d(t), (t = t || p), g)) {
              if (11 !== w && (f = Z.exec(e)))
                if ((i = f[1])) {
                  if (9 === w) {
                    if (!(l = t.getElementById(i))) return r;
                    if (l.id === i) return r.push(l), r;
                  } else if (
                    y &&
                    (l = y.getElementById(i)) &&
                    b(t, l) &&
                    l.id === i
                  )
                    return r.push(l), r;
                } else {
                  if (f[2]) return q.apply(r, t.getElementsByTagName(e)), r;
                  if (
                    (i = f[3]) &&
                    n.getElementsByClassName &&
                    t.getElementsByClassName
                  )
                    return q.apply(r, t.getElementsByClassName(i)), r;
                }
              if (
                n.qsa &&
                !_[e + " "] &&
                (!v || !v.test(e)) &&
                (1 !== w || "object" !== t.nodeName.toLowerCase())
              ) {
                if (((m = e), (y = t), 1 === w && (U.test(e) || z.test(e)))) {
                  for (
                    ((y = (ee.test(e) && me(t.parentNode)) || t) === t &&
                      n.scope) ||
                      ((c = t.getAttribute("id"))
                        ? (c = c.replace(re, oe))
                        : t.setAttribute("id", (c = x))),
                      s = (h = a(e)).length;
                    s--;

                  )
                    h[s] = (c ? "#" + c : ":scope") + " " + be(h[s]);
                  m = h.join(",");
                }
                try {
                  return q.apply(r, y.querySelectorAll(m)), r;
                } catch (t) {
                  _(e, !0);
                } finally {
                  c === x && t.removeAttribute("id");
                }
              }
            }
            return u(e.replace(B, "$1"), t, r, o);
          }
          function ue() {
            var e = [];
            return function t(n, o) {
              return (
                e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                (t[n + " "] = o)
              );
            };
          }
          function le(e) {
            return (e[x] = !0), e;
          }
          function ce(e) {
            var t = p.createElement("fieldset");
            try {
              return !!e(t);
            } catch (e) {
              return !1;
            } finally {
              t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
          }
          function fe(e, t) {
            for (var n = e.split("|"), o = n.length; o--; )
              r.attrHandle[n[o]] = t;
          }
          function de(e, t) {
            var n = t && e,
              r =
                n &&
                1 === e.nodeType &&
                1 === t.nodeType &&
                e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
          }
          function pe(e) {
            return function (t) {
              return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
          }
          function he(e) {
            return function (t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e;
            };
          }
          function ge(e) {
            return function (t) {
              return "form" in t
                ? t.parentNode && !1 === t.disabled
                  ? "label" in t
                    ? "label" in t.parentNode
                      ? t.parentNode.disabled === e
                      : t.disabled === e
                    : t.isDisabled === e || (t.isDisabled !== !e && ae(t) === e)
                  : t.disabled === e
                : "label" in t && t.disabled === e;
            };
          }
          function ve(e) {
            return le(function (t) {
              return (
                (t = +t),
                le(function (n, r) {
                  for (var o, i = e([], n.length, t), a = i.length; a--; )
                    n[(o = i[a])] && (n[o] = !(r[o] = n[o]));
                })
              );
            });
          }
          function me(e) {
            return e && void 0 !== e.getElementsByTagName && e;
          }
          for (t in ((n = se.support = {}),
          (i = se.isXML = function (e) {
            var t = e.namespaceURI,
              n = (e.ownerDocument || e).documentElement;
            return !Y.test(t || (n && n.nodeName) || "HTML");
          }),
          (d = se.setDocument = function (e) {
            var t,
              o,
              a = e ? e.ownerDocument || e : w;
            return a != p && 9 === a.nodeType && a.documentElement
              ? ((h = (p = a).documentElement),
                (g = !i(p)),
                w != p &&
                  (o = p.defaultView) &&
                  o.top !== o &&
                  (o.addEventListener
                    ? o.addEventListener("unload", ie, !1)
                    : o.attachEvent && o.attachEvent("onunload", ie)),
                (n.scope = ce(function (e) {
                  return (
                    h.appendChild(e).appendChild(p.createElement("div")),
                    void 0 !== e.querySelectorAll &&
                      !e.querySelectorAll(":scope fieldset div").length
                  );
                })),
                (n.attributes = ce(function (e) {
                  return (e.className = "i"), !e.getAttribute("className");
                })),
                (n.getElementsByTagName = ce(function (e) {
                  return (
                    e.appendChild(p.createComment("")),
                    !e.getElementsByTagName("*").length
                  );
                })),
                (n.getElementsByClassName = K.test(p.getElementsByClassName)),
                (n.getById = ce(function (e) {
                  return (
                    (h.appendChild(e).id = x),
                    !p.getElementsByName || !p.getElementsByName(x).length
                  );
                })),
                n.getById
                  ? ((r.filter.ID = function (e) {
                      var t = e.replace(te, ne);
                      return function (e) {
                        return e.getAttribute("id") === t;
                      };
                    }),
                    (r.find.ID = function (e, t) {
                      if (void 0 !== t.getElementById && g) {
                        var n = t.getElementById(e);
                        return n ? [n] : [];
                      }
                    }))
                  : ((r.filter.ID = function (e) {
                      var t = e.replace(te, ne);
                      return function (e) {
                        var n =
                          void 0 !== e.getAttributeNode &&
                          e.getAttributeNode("id");
                        return n && n.value === t;
                      };
                    }),
                    (r.find.ID = function (e, t) {
                      if (void 0 !== t.getElementById && g) {
                        var n,
                          r,
                          o,
                          i = t.getElementById(e);
                        if (i) {
                          if ((n = i.getAttributeNode("id")) && n.value === e)
                            return [i];
                          for (
                            o = t.getElementsByName(e), r = 0;
                            (i = o[r++]);

                          )
                            if ((n = i.getAttributeNode("id")) && n.value === e)
                              return [i];
                        }
                        return [];
                      }
                    })),
                (r.find.TAG = n.getElementsByTagName
                  ? function (e, t) {
                      return void 0 !== t.getElementsByTagName
                        ? t.getElementsByTagName(e)
                        : n.qsa
                        ? t.querySelectorAll(e)
                        : void 0;
                    }
                  : function (e, t) {
                      var n,
                        r = [],
                        o = 0,
                        i = t.getElementsByTagName(e);
                      if ("*" === e) {
                        for (; (n = i[o++]); ) 1 === n.nodeType && r.push(n);
                        return r;
                      }
                      return i;
                    }),
                (r.find.CLASS =
                  n.getElementsByClassName &&
                  function (e, t) {
                    if (void 0 !== t.getElementsByClassName && g)
                      return t.getElementsByClassName(e);
                  }),
                (m = []),
                (v = []),
                (n.qsa = K.test(p.querySelectorAll)) &&
                  (ce(function (e) {
                    var t;
                    (h.appendChild(e).innerHTML =
                      "<a id='" +
                      x +
                      "'></a><select id='" +
                      x +
                      "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                      e.querySelectorAll("[msallowcapture^='']").length &&
                        v.push("[*^$]=" + P + "*(?:''|\"\")"),
                      e.querySelectorAll("[selected]").length ||
                        v.push("\\[" + P + "*(?:value|" + I + ")"),
                      e.querySelectorAll("[id~=" + x + "-]").length ||
                        v.push("~="),
                      (t = p.createElement("input")).setAttribute("name", ""),
                      e.appendChild(t),
                      e.querySelectorAll("[name='']").length ||
                        v.push(
                          "\\[" + P + "*name" + P + "*=" + P + "*(?:''|\"\")"
                        ),
                      e.querySelectorAll(":checked").length ||
                        v.push(":checked"),
                      e.querySelectorAll("a#" + x + "+*").length ||
                        v.push(".#.+[+~]"),
                      e.querySelectorAll("\\\f"),
                      v.push("[\\r\\n\\f]");
                  }),
                  ce(function (e) {
                    e.innerHTML =
                      "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = p.createElement("input");
                    t.setAttribute("type", "hidden"),
                      e.appendChild(t).setAttribute("name", "D"),
                      e.querySelectorAll("[name=d]").length &&
                        v.push("name" + P + "*[*^$|!~]?="),
                      2 !== e.querySelectorAll(":enabled").length &&
                        v.push(":enabled", ":disabled"),
                      (h.appendChild(e).disabled = !0),
                      2 !== e.querySelectorAll(":disabled").length &&
                        v.push(":enabled", ":disabled"),
                      e.querySelectorAll("*,:x"),
                      v.push(",.*:");
                  })),
                (n.matchesSelector = K.test(
                  (y =
                    h.matches ||
                    h.webkitMatchesSelector ||
                    h.mozMatchesSelector ||
                    h.oMatchesSelector ||
                    h.msMatchesSelector)
                )) &&
                  ce(function (e) {
                    (n.disconnectedMatch = y.call(e, "*")),
                      y.call(e, "[s!='']:x"),
                      m.push("!=", F);
                  }),
                (v = v.length && new RegExp(v.join("|"))),
                (m = m.length && new RegExp(m.join("|"))),
                (t = K.test(h.compareDocumentPosition)),
                (b =
                  t || K.test(h.contains)
                    ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                          r = t && t.parentNode;
                        return (
                          e === r ||
                          !(
                            !r ||
                            1 !== r.nodeType ||
                            !(n.contains
                              ? n.contains(r)
                              : e.compareDocumentPosition &&
                                16 & e.compareDocumentPosition(r))
                          )
                        );
                      }
                    : function (e, t) {
                        if (t)
                          for (; (t = t.parentNode); ) if (t === e) return !0;
                        return !1;
                      }),
                (j = t
                  ? function (e, t) {
                      if (e === t) return (f = !0), 0;
                      var r =
                        !e.compareDocumentPosition - !t.compareDocumentPosition;
                      return (
                        r ||
                        (1 &
                          (r =
                            (e.ownerDocument || e) == (t.ownerDocument || t)
                              ? e.compareDocumentPosition(t)
                              : 1) ||
                        (!n.sortDetached && t.compareDocumentPosition(e) === r)
                          ? e == p || (e.ownerDocument == w && b(w, e))
                            ? -1
                            : t == p || (t.ownerDocument == w && b(w, t))
                            ? 1
                            : c
                            ? H(c, e) - H(c, t)
                            : 0
                          : 4 & r
                          ? -1
                          : 1)
                      );
                    }
                  : function (e, t) {
                      if (e === t) return (f = !0), 0;
                      var n,
                        r = 0,
                        o = e.parentNode,
                        i = t.parentNode,
                        a = [e],
                        s = [t];
                      if (!o || !i)
                        return e == p
                          ? -1
                          : t == p
                          ? 1
                          : o
                          ? -1
                          : i
                          ? 1
                          : c
                          ? H(c, e) - H(c, t)
                          : 0;
                      if (o === i) return de(e, t);
                      for (n = e; (n = n.parentNode); ) a.unshift(n);
                      for (n = t; (n = n.parentNode); ) s.unshift(n);
                      for (; a[r] === s[r]; ) r++;
                      return r
                        ? de(a[r], s[r])
                        : a[r] == w
                        ? -1
                        : s[r] == w
                        ? 1
                        : 0;
                    }),
                p)
              : p;
          }),
          (se.matches = function (e, t) {
            return se(e, null, null, t);
          }),
          (se.matchesSelector = function (e, t) {
            if (
              (d(e),
              n.matchesSelector &&
                g &&
                !_[t + " "] &&
                (!m || !m.test(t)) &&
                (!v || !v.test(t)))
            )
              try {
                var r = y.call(e, t);
                if (
                  r ||
                  n.disconnectedMatch ||
                  (e.document && 11 !== e.document.nodeType)
                )
                  return r;
              } catch (e) {
                _(t, !0);
              }
            return se(t, p, null, [e]).length > 0;
          }),
          (se.contains = function (e, t) {
            return (e.ownerDocument || e) != p && d(e), b(e, t);
          }),
          (se.attr = function (e, t) {
            (e.ownerDocument || e) != p && d(e);
            var o = r.attrHandle[t.toLowerCase()],
              i =
                o && A.call(r.attrHandle, t.toLowerCase())
                  ? o(e, t, !g)
                  : void 0;
            return void 0 !== i
              ? i
              : n.attributes || !g
              ? e.getAttribute(t)
              : (i = e.getAttributeNode(t)) && i.specified
              ? i.value
              : null;
          }),
          (se.escape = function (e) {
            return (e + "").replace(re, oe);
          }),
          (se.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
          }),
          (se.uniqueSort = function (e) {
            var t,
              r = [],
              o = 0,
              i = 0;
            if (
              ((f = !n.detectDuplicates),
              (c = !n.sortStable && e.slice(0)),
              e.sort(j),
              f)
            ) {
              for (; (t = e[i++]); ) t === e[i] && (o = r.push(i));
              for (; o--; ) e.splice(r[o], 1);
            }
            return (c = null), e;
          }),
          (o = se.getText = function (e) {
            var t,
              n = "",
              r = 0,
              i = e.nodeType;
            if (i) {
              if (1 === i || 9 === i || 11 === i) {
                if ("string" == typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
              } else if (3 === i || 4 === i) return e.nodeValue;
            } else for (; (t = e[r++]); ) n += o(t);
            return n;
          }),
          ((r = se.selectors = {
            cacheLength: 50,
            createPseudo: le,
            match: G,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: !0 },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: !0 },
              "~": { dir: "previousSibling" },
            },
            preFilter: {
              ATTR: function (e) {
                return (
                  (e[1] = e[1].replace(te, ne)),
                  (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                  "~=" === e[2] && (e[3] = " " + e[3] + " "),
                  e.slice(0, 4)
                );
              },
              CHILD: function (e) {
                return (
                  (e[1] = e[1].toLowerCase()),
                  "nth" === e[1].slice(0, 3)
                    ? (e[3] || se.error(e[0]),
                      (e[4] = +(e[4]
                        ? e[5] + (e[6] || 1)
                        : 2 * ("even" === e[3] || "odd" === e[3]))),
                      (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                    : e[3] && se.error(e[0]),
                  e
                );
              },
              PSEUDO: function (e) {
                var t,
                  n = !e[6] && e[2];
                return G.CHILD.test(e[0])
                  ? null
                  : (e[3]
                      ? (e[2] = e[4] || e[5] || "")
                      : n &&
                        X.test(n) &&
                        (t = a(n, !0)) &&
                        (t = n.indexOf(")", n.length - t) - n.length) &&
                        ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                    e.slice(0, 3));
              },
            },
            filter: {
              TAG: function (e) {
                var t = e.replace(te, ne).toLowerCase();
                return "*" === e
                  ? function () {
                      return !0;
                    }
                  : function (e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
              },
              CLASS: function (e) {
                var t = k[e + " "];
                return (
                  t ||
                  ((t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) &&
                    k(e, function (e) {
                      return t.test(
                        ("string" == typeof e.className && e.className) ||
                          (void 0 !== e.getAttribute &&
                            e.getAttribute("class")) ||
                          ""
                      );
                    }))
                );
              },
              ATTR: function (e, t, n) {
                return function (r) {
                  var o = se.attr(r, e);
                  return null == o
                    ? "!=" === t
                    : !t ||
                        ((o += ""),
                        "=" === t
                          ? o === n
                          : "!=" === t
                          ? o !== n
                          : "^=" === t
                          ? n && 0 === o.indexOf(n)
                          : "*=" === t
                          ? n && o.indexOf(n) > -1
                          : "$=" === t
                          ? n && o.slice(-n.length) === n
                          : "~=" === t
                          ? (" " + o.replace(W, " ") + " ").indexOf(n) > -1
                          : "|=" === t &&
                            (o === n || o.slice(0, n.length + 1) === n + "-"));
                };
              },
              CHILD: function (e, t, n, r, o) {
                var i = "nth" !== e.slice(0, 3),
                  a = "last" !== e.slice(-4),
                  s = "of-type" === t;
                return 1 === r && 0 === o
                  ? function (e) {
                      return !!e.parentNode;
                    }
                  : function (t, n, u) {
                      var l,
                        c,
                        f,
                        d,
                        p,
                        h,
                        g = i !== a ? "nextSibling" : "previousSibling",
                        v = t.parentNode,
                        m = s && t.nodeName.toLowerCase(),
                        y = !u && !s,
                        b = !1;
                      if (v) {
                        if (i) {
                          for (; g; ) {
                            for (d = t; (d = d[g]); )
                              if (
                                s
                                  ? d.nodeName.toLowerCase() === m
                                  : 1 === d.nodeType
                              )
                                return !1;
                            h = g = "only" === e && !h && "nextSibling";
                          }
                          return !0;
                        }
                        if (((h = [a ? v.firstChild : v.lastChild]), a && y)) {
                          for (
                            b =
                              (p =
                                (l =
                                  (c =
                                    (f = (d = v)[x] || (d[x] = {}))[
                                      d.uniqueID
                                    ] || (f[d.uniqueID] = {}))[e] || [])[0] ===
                                  C && l[1]) && l[2],
                              d = p && v.childNodes[p];
                            (d = (++p && d && d[g]) || (b = p = 0) || h.pop());

                          )
                            if (1 === d.nodeType && ++b && d === t) {
                              c[e] = [C, p, b];
                              break;
                            }
                        } else if (
                          (y &&
                            (b = p =
                              (l =
                                (c =
                                  (f = (d = t)[x] || (d[x] = {}))[d.uniqueID] ||
                                  (f[d.uniqueID] = {}))[e] || [])[0] === C &&
                              l[1]),
                          !1 === b)
                        )
                          for (
                            ;
                            (d =
                              (++p && d && d[g]) || (b = p = 0) || h.pop()) &&
                            ((s
                              ? d.nodeName.toLowerCase() !== m
                              : 1 !== d.nodeType) ||
                              !++b ||
                              (y &&
                                ((c =
                                  (f = d[x] || (d[x] = {}))[d.uniqueID] ||
                                  (f[d.uniqueID] = {}))[e] = [C, b]),
                              d !== t));

                          );
                        return (b -= o) === r || (b % r == 0 && b / r >= 0);
                      }
                    };
              },
              PSEUDO: function (e, t) {
                var n,
                  o =
                    r.pseudos[e] ||
                    r.setFilters[e.toLowerCase()] ||
                    se.error("unsupported pseudo: " + e);
                return o[x]
                  ? o(t)
                  : o.length > 1
                  ? ((n = [e, e, "", t]),
                    r.setFilters.hasOwnProperty(e.toLowerCase())
                      ? le(function (e, n) {
                          for (var r, i = o(e, t), a = i.length; a--; )
                            e[(r = H(e, i[a]))] = !(n[r] = i[a]);
                        })
                      : function (e) {
                          return o(e, 0, n);
                        })
                  : o;
              },
            },
            pseudos: {
              not: le(function (e) {
                var t = [],
                  n = [],
                  r = s(e.replace(B, "$1"));
                return r[x]
                  ? le(function (e, t, n, o) {
                      for (var i, a = r(e, null, o, []), s = e.length; s--; )
                        (i = a[s]) && (e[s] = !(t[s] = i));
                    })
                  : function (e, o, i) {
                      return (
                        (t[0] = e), r(t, null, i, n), (t[0] = null), !n.pop()
                      );
                    };
              }),
              has: le(function (e) {
                return function (t) {
                  return se(e, t).length > 0;
                };
              }),
              contains: le(function (e) {
                return (
                  (e = e.replace(te, ne)),
                  function (t) {
                    return (t.textContent || o(t)).indexOf(e) > -1;
                  }
                );
              }),
              lang: le(function (e) {
                return (
                  V.test(e || "") || se.error("unsupported lang: " + e),
                  (e = e.replace(te, ne).toLowerCase()),
                  function (t) {
                    var n;
                    do {
                      if (
                        (n = g
                          ? t.lang
                          : t.getAttribute("xml:lang") ||
                            t.getAttribute("lang"))
                      )
                        return (
                          (n = n.toLowerCase()) === e ||
                          0 === n.indexOf(e + "-")
                        );
                    } while ((t = t.parentNode) && 1 === t.nodeType);
                    return !1;
                  }
                );
              }),
              target: function (t) {
                var n = e.location && e.location.hash;
                return n && n.slice(1) === t.id;
              },
              root: function (e) {
                return e === h;
              },
              focus: function (e) {
                return (
                  e === p.activeElement &&
                  (!p.hasFocus || p.hasFocus()) &&
                  !!(e.type || e.href || ~e.tabIndex)
                );
              },
              enabled: ge(!1),
              disabled: ge(!0),
              checked: function (e) {
                var t = e.nodeName.toLowerCase();
                return (
                  ("input" === t && !!e.checked) ||
                  ("option" === t && !!e.selected)
                );
              },
              selected: function (e) {
                return (
                  e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                );
              },
              empty: function (e) {
                for (e = e.firstChild; e; e = e.nextSibling)
                  if (e.nodeType < 6) return !1;
                return !0;
              },
              parent: function (e) {
                return !r.pseudos.empty(e);
              },
              header: function (e) {
                return J.test(e.nodeName);
              },
              input: function (e) {
                return Q.test(e.nodeName);
              },
              button: function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t && "button" === e.type) || "button" === t;
              },
              text: function (e) {
                var t;
                return (
                  "input" === e.nodeName.toLowerCase() &&
                  "text" === e.type &&
                  (null == (t = e.getAttribute("type")) ||
                    "text" === t.toLowerCase())
                );
              },
              first: ve(function () {
                return [0];
              }),
              last: ve(function (e, t) {
                return [t - 1];
              }),
              eq: ve(function (e, t, n) {
                return [n < 0 ? n + t : n];
              }),
              even: ve(function (e, t) {
                for (var n = 0; n < t; n += 2) e.push(n);
                return e;
              }),
              odd: ve(function (e, t) {
                for (var n = 1; n < t; n += 2) e.push(n);
                return e;
              }),
              lt: ve(function (e, t, n) {
                for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                  e.push(r);
                return e;
              }),
              gt: ve(function (e, t, n) {
                for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                return e;
              }),
            },
          }).pseudos.nth = r.pseudos.eq),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            r.pseudos[t] = pe(t);
          for (t in { submit: !0, reset: !0 }) r.pseudos[t] = he(t);
          function ye() {}
          function be(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
          }
          function xe(e, t, n) {
            var r = t.dir,
              o = t.next,
              i = o || r,
              a = n && "parentNode" === i,
              s = T++;
            return t.first
              ? function (t, n, o) {
                  for (; (t = t[r]); )
                    if (1 === t.nodeType || a) return e(t, n, o);
                  return !1;
                }
              : function (t, n, u) {
                  var l,
                    c,
                    f,
                    d = [C, s];
                  if (u) {
                    for (; (t = t[r]); )
                      if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                  } else
                    for (; (t = t[r]); )
                      if (1 === t.nodeType || a)
                        if (
                          ((c =
                            (f = t[x] || (t[x] = {}))[t.uniqueID] ||
                            (f[t.uniqueID] = {})),
                          o && o === t.nodeName.toLowerCase())
                        )
                          t = t[r] || t;
                        else {
                          if ((l = c[i]) && l[0] === C && l[1] === s)
                            return (d[2] = l[2]);
                          if (((c[i] = d), (d[2] = e(t, n, u)))) return !0;
                        }
                  return !1;
                };
          }
          function we(e) {
            return e.length > 1
              ? function (t, n, r) {
                  for (var o = e.length; o--; ) if (!e[o](t, n, r)) return !1;
                  return !0;
                }
              : e[0];
          }
          function Ce(e, t, n, r, o) {
            for (var i, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
              (i = e[s]) && ((n && !n(i, r, o)) || (a.push(i), l && t.push(s)));
            return a;
          }
          function Te(e, t, n, r, o, i) {
            return (
              r && !r[x] && (r = Te(r)),
              o && !o[x] && (o = Te(o, i)),
              le(function (i, a, s, u) {
                var l,
                  c,
                  f,
                  d = [],
                  p = [],
                  h = a.length,
                  g =
                    i ||
                    (function (e, t, n) {
                      for (var r = 0, o = t.length; r < o; r++) se(e, t[r], n);
                      return n;
                    })(t || "*", s.nodeType ? [s] : s, []),
                  v = !e || (!i && t) ? g : Ce(g, d, e, s, u),
                  m = n ? (o || (i ? e : h || r) ? [] : a) : v;
                if ((n && n(v, m, s, u), r))
                  for (l = Ce(m, p), r(l, [], s, u), c = l.length; c--; )
                    (f = l[c]) && (m[p[c]] = !(v[p[c]] = f));
                if (i) {
                  if (o || e) {
                    if (o) {
                      for (l = [], c = m.length; c--; )
                        (f = m[c]) && l.push((v[c] = f));
                      o(null, (m = []), l, u);
                    }
                    for (c = m.length; c--; )
                      (f = m[c]) &&
                        (l = o ? H(i, f) : d[c]) > -1 &&
                        (i[l] = !(a[l] = f));
                  }
                } else (m = Ce(m === a ? m.splice(h, m.length) : m)), o ? o(null, a, m, u) : q.apply(a, m);
              })
            );
          }
          function ke(e) {
            for (
              var t,
                n,
                o,
                i = e.length,
                a = r.relative[e[0].type],
                s = a || r.relative[" "],
                u = a ? 1 : 0,
                c = xe(
                  function (e) {
                    return e === t;
                  },
                  s,
                  !0
                ),
                f = xe(
                  function (e) {
                    return H(t, e) > -1;
                  },
                  s,
                  !0
                ),
                d = [
                  function (e, n, r) {
                    var o =
                      (!a && (r || n !== l)) ||
                      ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                    return (t = null), o;
                  },
                ];
              u < i;
              u++
            )
              if ((n = r.relative[e[u].type])) d = [xe(we(d), n)];
              else {
                if ((n = r.filter[e[u].type].apply(null, e[u].matches))[x]) {
                  for (o = ++u; o < i && !r.relative[e[o].type]; o++);
                  return Te(
                    u > 1 && we(d),
                    u > 1 &&
                      be(
                        e
                          .slice(0, u - 1)
                          .concat({ value: " " === e[u - 2].type ? "*" : "" })
                      ).replace(B, "$1"),
                    n,
                    u < o && ke(e.slice(u, o)),
                    o < i && ke((e = e.slice(o))),
                    o < i && be(e)
                  );
                }
                d.push(n);
              }
            return we(d);
          }
          return (
            (ye.prototype = r.filters = r.pseudos),
            (r.setFilters = new ye()),
            (a = se.tokenize = function (e, t) {
              var n,
                o,
                i,
                a,
                s,
                u,
                l,
                c = S[e + " "];
              if (c) return t ? 0 : c.slice(0);
              for (s = e, u = [], l = r.preFilter; s; ) {
                for (a in ((n && !(o = $.exec(s))) ||
                  (o && (s = s.slice(o[0].length) || s), u.push((i = []))),
                (n = !1),
                (o = z.exec(s)) &&
                  ((n = o.shift()),
                  i.push({ value: n, type: o[0].replace(B, " ") }),
                  (s = s.slice(n.length))),
                r.filter))
                  !(o = G[a].exec(s)) ||
                    (l[a] && !(o = l[a](o))) ||
                    ((n = o.shift()),
                    i.push({ value: n, type: a, matches: o }),
                    (s = s.slice(n.length)));
                if (!n) break;
              }
              return t ? s.length : s ? se.error(e) : S(e, u).slice(0);
            }),
            (s = se.compile = function (e, t) {
              var n,
                o = [],
                i = [],
                s = E[e + " "];
              if (!s) {
                for (t || (t = a(e)), n = t.length; n--; )
                  (s = ke(t[n]))[x] ? o.push(s) : i.push(s);
                (s = E(
                  e,
                  (function (e, t) {
                    var n = t.length > 0,
                      o = e.length > 0,
                      i = function (i, a, s, u, c) {
                        var f,
                          h,
                          v,
                          m = 0,
                          y = "0",
                          b = i && [],
                          x = [],
                          w = l,
                          T = i || (o && r.find.TAG("*", c)),
                          k = (C += null == w ? 1 : Math.random() || 0.1),
                          S = T.length;
                        for (
                          c && (l = a == p || a || c);
                          y !== S && null != (f = T[y]);
                          y++
                        ) {
                          if (o && f) {
                            for (
                              h = 0,
                                a || f.ownerDocument == p || (d(f), (s = !g));
                              (v = e[h++]);

                            )
                              if (v(f, a || p, s)) {
                                u.push(f);
                                break;
                              }
                            c && (C = k);
                          }
                          n && ((f = !v && f) && m--, i && b.push(f));
                        }
                        if (((m += y), n && y !== m)) {
                          for (h = 0; (v = t[h++]); ) v(b, x, a, s);
                          if (i) {
                            if (m > 0)
                              for (; y--; ) b[y] || x[y] || (x[y] = D.call(u));
                            x = Ce(x);
                          }
                          q.apply(u, x),
                            c &&
                              !i &&
                              x.length > 0 &&
                              m + t.length > 1 &&
                              se.uniqueSort(u);
                        }
                        return c && ((C = k), (l = w)), b;
                      };
                    return n ? le(i) : i;
                  })(i, o)
                )).selector = e;
              }
              return s;
            }),
            (u = se.select = function (e, t, n, o) {
              var i,
                u,
                l,
                c,
                f,
                d = "function" == typeof e && e,
                p = !o && a((e = d.selector || e));
              if (((n = n || []), 1 === p.length)) {
                if (
                  (u = p[0] = p[0].slice(0)).length > 2 &&
                  "ID" === (l = u[0]).type &&
                  9 === t.nodeType &&
                  g &&
                  r.relative[u[1].type]
                ) {
                  if (
                    !(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0])
                  )
                    return n;
                  d && (t = t.parentNode),
                    (e = e.slice(u.shift().value.length));
                }
                for (
                  i = G.needsContext.test(e) ? 0 : u.length;
                  i-- && ((l = u[i]), !r.relative[(c = l.type)]);

                )
                  if (
                    (f = r.find[c]) &&
                    (o = f(
                      l.matches[0].replace(te, ne),
                      (ee.test(u[0].type) && me(t.parentNode)) || t
                    ))
                  ) {
                    if ((u.splice(i, 1), !(e = o.length && be(u))))
                      return q.apply(n, o), n;
                    break;
                  }
              }
              return (
                (d || s(e, p))(
                  o,
                  t,
                  !g,
                  n,
                  !t || (ee.test(e) && me(t.parentNode)) || t
                ),
                n
              );
            }),
            (n.sortStable = x.split("").sort(j).join("") === x),
            (n.detectDuplicates = !!f),
            d(),
            (n.sortDetached = ce(function (e) {
              return 1 & e.compareDocumentPosition(p.createElement("fieldset"));
            })),
            ce(function (e) {
              return (
                (e.innerHTML = "<a href='#'></a>"),
                "#" === e.firstChild.getAttribute("href")
              );
            }) ||
              fe("type|href|height|width", function (e, t, n) {
                if (!n)
                  return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
              }),
            (n.attributes &&
              ce(function (e) {
                return (
                  (e.innerHTML = "<input/>"),
                  e.firstChild.setAttribute("value", ""),
                  "" === e.firstChild.getAttribute("value")
                );
              })) ||
              fe("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase())
                  return e.defaultValue;
              }),
            ce(function (e) {
              return null == e.getAttribute("disabled");
            }) ||
              fe(I, function (e, t, n) {
                var r;
                if (!n)
                  return !0 === e[t]
                    ? t.toLowerCase()
                    : (r = e.getAttributeNode(t)) && r.specified
                    ? r.value
                    : null;
              }),
            se
          );
        })(n);
      (T.find = S),
        (T.expr = S.selectors),
        (T.expr[":"] = T.expr.pseudos),
        (T.uniqueSort = T.unique = S.uniqueSort),
        (T.text = S.getText),
        (T.isXMLDoc = S.isXML),
        (T.contains = S.contains),
        (T.escapeSelector = S.escape);
      var E = function (e, t, n) {
          for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
              if (o && T(e).is(n)) break;
              r.push(e);
            }
          return r;
        },
        _ = function (e, t) {
          for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
          return n;
        },
        j = T.expr.match.needsContext;
      function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function D(e, t, n) {
        return m(t)
          ? T.grep(e, function (e, r) {
              return !!t.call(e, r, e) !== n;
            })
          : t.nodeType
          ? T.grep(e, function (e) {
              return (e === t) !== n;
            })
          : "string" != typeof t
          ? T.grep(e, function (e) {
              return c.call(t, e) > -1 !== n;
            })
          : T.filter(t, e, n);
      }
      (T.filter = function (e, t, n) {
        var r = t[0];
        return (
          n && (e = ":not(" + e + ")"),
          1 === t.length && 1 === r.nodeType
            ? T.find.matchesSelector(r, e)
              ? [r]
              : []
            : T.find.matches(
                e,
                T.grep(t, function (e) {
                  return 1 === e.nodeType;
                })
              )
        );
      }),
        T.fn.extend({
          find: function (e) {
            var t,
              n,
              r = this.length,
              o = this;
            if ("string" != typeof e)
              return this.pushStack(
                T(e).filter(function () {
                  for (t = 0; t < r; t++) if (T.contains(o[t], this)) return !0;
                })
              );
            for (n = this.pushStack([]), t = 0; t < r; t++) T.find(e, o[t], n);
            return r > 1 ? T.uniqueSort(n) : n;
          },
          filter: function (e) {
            return this.pushStack(D(this, e || [], !1));
          },
          not: function (e) {
            return this.pushStack(D(this, e || [], !0));
          },
          is: function (e) {
            return !!D(
              this,
              "string" == typeof e && j.test(e) ? T(e) : e || [],
              !1
            ).length;
          },
        });
      var O,
        q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((T.fn.init = function (e, t, n) {
        var r, o;
        if (!e) return this;
        if (((n = n || O), "string" == typeof e)) {
          if (
            !(r =
              "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                ? [null, e, null]
                : q.exec(e)) ||
            (!r[1] && t)
          )
            return !t || t.jquery
              ? (t || n).find(e)
              : this.constructor(t).find(e);
          if (r[1]) {
            if (
              ((t = t instanceof T ? t[0] : t),
              T.merge(
                this,
                T.parseHTML(
                  r[1],
                  t && t.nodeType ? t.ownerDocument || t : b,
                  !0
                )
              ),
              N.test(r[1]) && T.isPlainObject(t))
            )
              for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this;
          }
          return (
            (o = b.getElementById(r[2])) && ((this[0] = o), (this.length = 1)),
            this
          );
        }
        return e.nodeType
          ? ((this[0] = e), (this.length = 1), this)
          : m(e)
          ? void 0 !== n.ready
            ? n.ready(e)
            : e(T)
          : T.makeArray(e, this);
      }).prototype = T.fn),
        (O = T(b));
      var L = /^(?:parents|prev(?:Until|All))/,
        H = { children: !0, contents: !0, next: !0, prev: !0 };
      function I(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
      }
      T.fn.extend({
        has: function (e) {
          var t = T(e, this),
            n = t.length;
          return this.filter(function () {
            for (var e = 0; e < n; e++) if (T.contains(this, t[e])) return !0;
          });
        },
        closest: function (e, t) {
          var n,
            r = 0,
            o = this.length,
            i = [],
            a = "string" != typeof e && T(e);
          if (!j.test(e))
            for (; r < o; r++)
              for (n = this[r]; n && n !== t; n = n.parentNode)
                if (
                  n.nodeType < 11 &&
                  (a
                    ? a.index(n) > -1
                    : 1 === n.nodeType && T.find.matchesSelector(n, e))
                ) {
                  i.push(n);
                  break;
                }
          return this.pushStack(i.length > 1 ? T.uniqueSort(i) : i);
        },
        index: function (e) {
          return e
            ? "string" == typeof e
              ? c.call(T(e), this[0])
              : c.call(this, e.jquery ? e[0] : e)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (e, t) {
          return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))));
        },
        addBack: function (e) {
          return this.add(
            null == e ? this.prevObject : this.prevObject.filter(e)
          );
        },
      }),
        T.each(
          {
            parent: function (e) {
              var t = e.parentNode;
              return t && 11 !== t.nodeType ? t : null;
            },
            parents: function (e) {
              return E(e, "parentNode");
            },
            parentsUntil: function (e, t, n) {
              return E(e, "parentNode", n);
            },
            next: function (e) {
              return I(e, "nextSibling");
            },
            prev: function (e) {
              return I(e, "previousSibling");
            },
            nextAll: function (e) {
              return E(e, "nextSibling");
            },
            prevAll: function (e) {
              return E(e, "previousSibling");
            },
            nextUntil: function (e, t, n) {
              return E(e, "nextSibling", n);
            },
            prevUntil: function (e, t, n) {
              return E(e, "previousSibling", n);
            },
            siblings: function (e) {
              return _((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
              return _(e.firstChild);
            },
            contents: function (e) {
              return null != e.contentDocument && a(e.contentDocument)
                ? e.contentDocument
                : (A(e, "template") && (e = e.content || e),
                  T.merge([], e.childNodes));
            },
          },
          function (e, t) {
            T.fn[e] = function (n, r) {
              var o = T.map(this, t, n);
              return (
                "Until" !== e.slice(-5) && (r = n),
                r && "string" == typeof r && (o = T.filter(r, o)),
                this.length > 1 &&
                  (H[e] || T.uniqueSort(o), L.test(e) && o.reverse()),
                this.pushStack(o)
              );
            };
          }
        );
      var P = /[^\x20\t\r\n\f]+/g;
      function M(e) {
        return e;
      }
      function R(e) {
        throw e;
      }
      function F(e, t, n, r) {
        var o;
        try {
          e && m((o = e.promise))
            ? o.call(e).done(t).fail(n)
            : e && m((o = e.then))
            ? o.call(e, t, n)
            : t.apply(void 0, [e].slice(r));
        } catch (e) {
          n.apply(void 0, [e]);
        }
      }
      (T.Callbacks = function (e) {
        e =
          "string" == typeof e
            ? (function (e) {
                var t = {};
                return (
                  T.each(e.match(P) || [], function (e, n) {
                    t[n] = !0;
                  }),
                  t
                );
              })(e)
            : T.extend({}, e);
        var t,
          n,
          r,
          o,
          i = [],
          a = [],
          s = -1,
          u = function () {
            for (o = o || e.once, r = t = !0; a.length; s = -1)
              for (n = a.shift(); ++s < i.length; )
                !1 === i[s].apply(n[0], n[1]) &&
                  e.stopOnFalse &&
                  ((s = i.length), (n = !1));
            e.memory || (n = !1), (t = !1), o && (i = n ? [] : "");
          },
          l = {
            add: function () {
              return (
                i &&
                  (n && !t && ((s = i.length - 1), a.push(n)),
                  (function t(n) {
                    T.each(n, function (n, r) {
                      m(r)
                        ? (e.unique && l.has(r)) || i.push(r)
                        : r && r.length && "string" !== C(r) && t(r);
                    });
                  })(arguments),
                  n && !t && u()),
                this
              );
            },
            remove: function () {
              return (
                T.each(arguments, function (e, t) {
                  for (var n; (n = T.inArray(t, i, n)) > -1; )
                    i.splice(n, 1), n <= s && s--;
                }),
                this
              );
            },
            has: function (e) {
              return e ? T.inArray(e, i) > -1 : i.length > 0;
            },
            empty: function () {
              return i && (i = []), this;
            },
            disable: function () {
              return (o = a = []), (i = n = ""), this;
            },
            disabled: function () {
              return !i;
            },
            lock: function () {
              return (o = a = []), n || t || (i = n = ""), this;
            },
            locked: function () {
              return !!o;
            },
            fireWith: function (e, n) {
              return (
                o ||
                  ((n = [e, (n = n || []).slice ? n.slice() : n]),
                  a.push(n),
                  t || u()),
                this
              );
            },
            fire: function () {
              return l.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!r;
            },
          };
        return l;
      }),
        T.extend({
          Deferred: function (e) {
            var t = [
                [
                  "notify",
                  "progress",
                  T.Callbacks("memory"),
                  T.Callbacks("memory"),
                  2,
                ],
                [
                  "resolve",
                  "done",
                  T.Callbacks("once memory"),
                  T.Callbacks("once memory"),
                  0,
                  "resolved",
                ],
                [
                  "reject",
                  "fail",
                  T.Callbacks("once memory"),
                  T.Callbacks("once memory"),
                  1,
                  "rejected",
                ],
              ],
              r = "pending",
              o = {
                state: function () {
                  return r;
                },
                always: function () {
                  return i.done(arguments).fail(arguments), this;
                },
                catch: function (e) {
                  return o.then(null, e);
                },
                pipe: function () {
                  var e = arguments;
                  return T.Deferred(function (n) {
                    T.each(t, function (t, r) {
                      var o = m(e[r[4]]) && e[r[4]];
                      i[r[1]](function () {
                        var e = o && o.apply(this, arguments);
                        e && m(e.promise)
                          ? e
                              .promise()
                              .progress(n.notify)
                              .done(n.resolve)
                              .fail(n.reject)
                          : n[r[0] + "With"](this, o ? [e] : arguments);
                      });
                    }),
                      (e = null);
                  }).promise();
                },
                then: function (e, r, o) {
                  var i = 0;
                  function a(e, t, r, o) {
                    return function () {
                      var s = this,
                        u = arguments,
                        l = function () {
                          var n, l;
                          if (!(e < i)) {
                            if ((n = r.apply(s, u)) === t.promise())
                              throw new TypeError("Thenable self-resolution");
                            (l =
                              n &&
                              ("object" == typeof n ||
                                "function" == typeof n) &&
                              n.then),
                              m(l)
                                ? o
                                  ? l.call(n, a(i, t, M, o), a(i, t, R, o))
                                  : (i++,
                                    l.call(
                                      n,
                                      a(i, t, M, o),
                                      a(i, t, R, o),
                                      a(i, t, M, t.notifyWith)
                                    ))
                                : (r !== M && ((s = void 0), (u = [n])),
                                  (o || t.resolveWith)(s, u));
                          }
                        },
                        c = o
                          ? l
                          : function () {
                              try {
                                l();
                              } catch (n) {
                                T.Deferred.exceptionHook &&
                                  T.Deferred.exceptionHook(n, c.stackTrace),
                                  e + 1 >= i &&
                                    (r !== R && ((s = void 0), (u = [n])),
                                    t.rejectWith(s, u));
                              }
                            };
                      e
                        ? c()
                        : (T.Deferred.getStackHook &&
                            (c.stackTrace = T.Deferred.getStackHook()),
                          n.setTimeout(c));
                    };
                  }
                  return T.Deferred(function (n) {
                    t[0][3].add(a(0, n, m(o) ? o : M, n.notifyWith)),
                      t[1][3].add(a(0, n, m(e) ? e : M)),
                      t[2][3].add(a(0, n, m(r) ? r : R));
                  }).promise();
                },
                promise: function (e) {
                  return null != e ? T.extend(e, o) : o;
                },
              },
              i = {};
            return (
              T.each(t, function (e, n) {
                var a = n[2],
                  s = n[5];
                (o[n[1]] = a.add),
                  s &&
                    a.add(
                      function () {
                        r = s;
                      },
                      t[3 - e][2].disable,
                      t[3 - e][3].disable,
                      t[0][2].lock,
                      t[0][3].lock
                    ),
                  a.add(n[3].fire),
                  (i[n[0]] = function () {
                    return (
                      i[n[0] + "With"](this === i ? void 0 : this, arguments),
                      this
                    );
                  }),
                  (i[n[0] + "With"] = a.fireWith);
              }),
              o.promise(i),
              e && e.call(i, i),
              i
            );
          },
          when: function (e) {
            var t = arguments.length,
              n = t,
              r = Array(n),
              o = s.call(arguments),
              i = T.Deferred(),
              a = function (e) {
                return function (n) {
                  (r[e] = this),
                    (o[e] = arguments.length > 1 ? s.call(arguments) : n),
                    --t || i.resolveWith(r, o);
                };
              };
            if (
              t <= 1 &&
              (F(e, i.done(a(n)).resolve, i.reject, !t),
              "pending" === i.state() || m(o[n] && o[n].then))
            )
              return i.then();
            for (; n--; ) F(o[n], a(n), i.reject);
            return i.promise();
          },
        });
      var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (T.Deferred.exceptionHook = function (e, t) {
        n.console &&
          n.console.warn &&
          e &&
          W.test(e.name) &&
          n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
      }),
        (T.readyException = function (e) {
          n.setTimeout(function () {
            throw e;
          });
        });
      var B = T.Deferred();
      function $() {
        b.removeEventListener("DOMContentLoaded", $),
          n.removeEventListener("load", $),
          T.ready();
      }
      (T.fn.ready = function (e) {
        return (
          B.then(e).catch(function (e) {
            T.readyException(e);
          }),
          this
        );
      }),
        T.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (e) {
            (!0 === e ? --T.readyWait : T.isReady) ||
              ((T.isReady = !0),
              (!0 !== e && --T.readyWait > 0) || B.resolveWith(b, [T]));
          },
        }),
        (T.ready.then = B.then),
        "complete" === b.readyState ||
        ("loading" !== b.readyState && !b.documentElement.doScroll)
          ? n.setTimeout(T.ready)
          : (b.addEventListener("DOMContentLoaded", $),
            n.addEventListener("load", $));
      var z = function (e, t, n, r, o, i, a) {
          var s = 0,
            u = e.length,
            l = null == n;
          if ("object" === C(n))
            for (s in ((o = !0), n)) z(e, t, s, n[s], !0, i, a);
          else if (
            void 0 !== r &&
            ((o = !0),
            m(r) || (a = !0),
            l &&
              (a
                ? (t.call(e, r), (t = null))
                : ((l = t),
                  (t = function (e, t, n) {
                    return l.call(T(e), n);
                  }))),
            t)
          )
            for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
          return o ? e : l ? t.call(e) : u ? t(e[0], n) : i;
        },
        U = /^-ms-/,
        X = /-([a-z])/g;
      function V(e, t) {
        return t.toUpperCase();
      }
      function G(e) {
        return e.replace(U, "ms-").replace(X, V);
      }
      var Y = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      };
      function Q() {
        this.expando = T.expando + Q.uid++;
      }
      (Q.uid = 1),
        (Q.prototype = {
          cache: function (e) {
            var t = e[this.expando];
            return (
              t ||
                ((t = {}),
                Y(e) &&
                  (e.nodeType
                    ? (e[this.expando] = t)
                    : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0,
                      }))),
              t
            );
          },
          set: function (e, t, n) {
            var r,
              o = this.cache(e);
            if ("string" == typeof t) o[G(t)] = n;
            else for (r in t) o[G(r)] = t[r];
            return o;
          },
          get: function (e, t) {
            return void 0 === t
              ? this.cache(e)
              : e[this.expando] && e[this.expando][G(t)];
          },
          access: function (e, t, n) {
            return void 0 === t || (t && "string" == typeof t && void 0 === n)
              ? this.get(e, t)
              : (this.set(e, t, n), void 0 !== n ? n : t);
          },
          remove: function (e, t) {
            var n,
              r = e[this.expando];
            if (void 0 !== r) {
              if (void 0 !== t) {
                n = (t = Array.isArray(t)
                  ? t.map(G)
                  : (t = G(t)) in r
                  ? [t]
                  : t.match(P) || []).length;
                for (; n--; ) delete r[t[n]];
              }
              (void 0 === t || T.isEmptyObject(r)) &&
                (e.nodeType
                  ? (e[this.expando] = void 0)
                  : delete e[this.expando]);
            }
          },
          hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !T.isEmptyObject(t);
          },
        });
      var J = new Q(),
        K = new Q(),
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ee = /[A-Z]/g;
      function te(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
          if (
            ((r = "data-" + t.replace(ee, "-$&").toLowerCase()),
            "string" == typeof (n = e.getAttribute(r)))
          ) {
            try {
              n = (function (e) {
                return (
                  "true" === e ||
                  ("false" !== e &&
                    ("null" === e
                      ? null
                      : e === +e + ""
                      ? +e
                      : Z.test(e)
                      ? JSON.parse(e)
                      : e))
                );
              })(n);
            } catch (e) {}
            K.set(e, t, n);
          } else n = void 0;
        return n;
      }
      T.extend({
        hasData: function (e) {
          return K.hasData(e) || J.hasData(e);
        },
        data: function (e, t, n) {
          return K.access(e, t, n);
        },
        removeData: function (e, t) {
          K.remove(e, t);
        },
        _data: function (e, t, n) {
          return J.access(e, t, n);
        },
        _removeData: function (e, t) {
          J.remove(e, t);
        },
      }),
        T.fn.extend({
          data: function (e, t) {
            var n,
              r,
              o,
              i = this[0],
              a = i && i.attributes;
            if (void 0 === e) {
              if (
                this.length &&
                ((o = K.get(i)), 1 === i.nodeType && !J.get(i, "hasDataAttrs"))
              ) {
                for (n = a.length; n--; )
                  a[n] &&
                    0 === (r = a[n].name).indexOf("data-") &&
                    ((r = G(r.slice(5))), te(i, r, o[r]));
                J.set(i, "hasDataAttrs", !0);
              }
              return o;
            }
            return "object" == typeof e
              ? this.each(function () {
                  K.set(this, e);
                })
              : z(
                  this,
                  function (t) {
                    var n;
                    if (i && void 0 === t)
                      return void 0 !== (n = K.get(i, e)) ||
                        void 0 !== (n = te(i, e))
                        ? n
                        : void 0;
                    this.each(function () {
                      K.set(this, e, t);
                    });
                  },
                  null,
                  t,
                  arguments.length > 1,
                  null,
                  !0
                );
          },
          removeData: function (e) {
            return this.each(function () {
              K.remove(this, e);
            });
          },
        }),
        T.extend({
          queue: function (e, t, n) {
            var r;
            if (e)
              return (
                (t = (t || "fx") + "queue"),
                (r = J.get(e, t)),
                n &&
                  (!r || Array.isArray(n)
                    ? (r = J.access(e, t, T.makeArray(n)))
                    : r.push(n)),
                r || []
              );
          },
          dequeue: function (e, t) {
            t = t || "fx";
            var n = T.queue(e, t),
              r = n.length,
              o = n.shift(),
              i = T._queueHooks(e, t);
            "inprogress" === o && ((o = n.shift()), r--),
              o &&
                ("fx" === t && n.unshift("inprogress"),
                delete i.stop,
                o.call(
                  e,
                  function () {
                    T.dequeue(e, t);
                  },
                  i
                )),
              !r && i && i.empty.fire();
          },
          _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return (
              J.get(e, n) ||
              J.access(e, n, {
                empty: T.Callbacks("once memory").add(function () {
                  J.remove(e, [t + "queue", n]);
                }),
              })
            );
          },
        }),
        T.fn.extend({
          queue: function (e, t) {
            var n = 2;
            return (
              "string" != typeof e && ((t = e), (e = "fx"), n--),
              arguments.length < n
                ? T.queue(this[0], e)
                : void 0 === t
                ? this
                : this.each(function () {
                    var n = T.queue(this, e, t);
                    T._queueHooks(this, e),
                      "fx" === e && "inprogress" !== n[0] && T.dequeue(this, e);
                  })
            );
          },
          dequeue: function (e) {
            return this.each(function () {
              T.dequeue(this, e);
            });
          },
          clearQueue: function (e) {
            return this.queue(e || "fx", []);
          },
          promise: function (e, t) {
            var n,
              r = 1,
              o = T.Deferred(),
              i = this,
              a = this.length,
              s = function () {
                --r || o.resolveWith(i, [i]);
              };
            for (
              "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
              a--;

            )
              (n = J.get(i[a], e + "queueHooks")) &&
                n.empty &&
                (r++, n.empty.add(s));
            return s(), o.promise(t);
          },
        });
      var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        re = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"),
        oe = ["Top", "Right", "Bottom", "Left"],
        ie = b.documentElement,
        ae = function (e) {
          return T.contains(e.ownerDocument, e);
        },
        se = { composed: !0 };
      ie.getRootNode &&
        (ae = function (e) {
          return (
            T.contains(e.ownerDocument, e) ||
            e.getRootNode(se) === e.ownerDocument
          );
        });
      var ue = function (e, t) {
        return (
          "none" === (e = t || e).style.display ||
          ("" === e.style.display && ae(e) && "none" === T.css(e, "display"))
        );
      };
      function le(e, t, n, r) {
        var o,
          i,
          a = 20,
          s = r
            ? function () {
                return r.cur();
              }
            : function () {
                return T.css(e, t, "");
              },
          u = s(),
          l = (n && n[3]) || (T.cssNumber[t] ? "" : "px"),
          c =
            e.nodeType &&
            (T.cssNumber[t] || ("px" !== l && +u)) &&
            re.exec(T.css(e, t));
        if (c && c[3] !== l) {
          for (u /= 2, l = l || c[3], c = +u || 1; a--; )
            T.style(e, t, c + l),
              (1 - i) * (1 - (i = s() / u || 0.5)) <= 0 && (a = 0),
              (c /= i);
          (c *= 2), T.style(e, t, c + l), (n = n || []);
        }
        return (
          n &&
            ((c = +c || +u || 0),
            (o = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
            r && ((r.unit = l), (r.start = c), (r.end = o))),
          o
        );
      }
      var ce = {};
      function fe(e) {
        var t,
          n = e.ownerDocument,
          r = e.nodeName,
          o = ce[r];
        return (
          o ||
          ((t = n.body.appendChild(n.createElement(r))),
          (o = T.css(t, "display")),
          t.parentNode.removeChild(t),
          "none" === o && (o = "block"),
          (ce[r] = o),
          o)
        );
      }
      function de(e, t) {
        for (var n, r, o = [], i = 0, a = e.length; i < a; i++)
          (r = e[i]).style &&
            ((n = r.style.display),
            t
              ? ("none" === n &&
                  ((o[i] = J.get(r, "display") || null),
                  o[i] || (r.style.display = "")),
                "" === r.style.display && ue(r) && (o[i] = fe(r)))
              : "none" !== n && ((o[i] = "none"), J.set(r, "display", n)));
        for (i = 0; i < a; i++) null != o[i] && (e[i].style.display = o[i]);
        return e;
      }
      T.fn.extend({
        show: function () {
          return de(this, !0);
        },
        hide: function () {
          return de(this);
        },
        toggle: function (e) {
          return "boolean" == typeof e
            ? e
              ? this.show()
              : this.hide()
            : this.each(function () {
                ue(this) ? T(this).show() : T(this).hide();
              });
        },
      });
      var pe,
        he,
        ge = /^(?:checkbox|radio)$/i,
        ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        me = /^$|^module$|\/(?:java|ecma)script/i;
      (pe = b.createDocumentFragment().appendChild(b.createElement("div"))),
        (he = b.createElement("input")).setAttribute("type", "radio"),
        he.setAttribute("checked", "checked"),
        he.setAttribute("name", "t"),
        pe.appendChild(he),
        (v.checkClone = pe.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (pe.innerHTML = "<textarea>x</textarea>"),
        (v.noCloneChecked = !!pe.cloneNode(!0).lastChild.defaultValue),
        (pe.innerHTML = "<option></option>"),
        (v.option = !!pe.lastChild);
      var ye = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
      function be(e, t) {
        var n;
        return (
          (n =
            void 0 !== e.getElementsByTagName
              ? e.getElementsByTagName(t || "*")
              : void 0 !== e.querySelectorAll
              ? e.querySelectorAll(t || "*")
              : []),
          void 0 === t || (t && A(e, t)) ? T.merge([e], n) : n
        );
      }
      function xe(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
          J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
      }
      (ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead),
        (ye.th = ye.td),
        v.option ||
          (ye.optgroup = ye.option = [
            1,
            "<select multiple='multiple'>",
            "</select>",
          ]);
      var we = /<|&#?\w+;/;
      function Ce(e, t, n, r, o) {
        for (
          var i,
            a,
            s,
            u,
            l,
            c,
            f = t.createDocumentFragment(),
            d = [],
            p = 0,
            h = e.length;
          p < h;
          p++
        )
          if ((i = e[p]) || 0 === i)
            if ("object" === C(i)) T.merge(d, i.nodeType ? [i] : i);
            else if (we.test(i)) {
              for (
                a = a || f.appendChild(t.createElement("div")),
                  s = (ve.exec(i) || ["", ""])[1].toLowerCase(),
                  u = ye[s] || ye._default,
                  a.innerHTML = u[1] + T.htmlPrefilter(i) + u[2],
                  c = u[0];
                c--;

              )
                a = a.lastChild;
              T.merge(d, a.childNodes), ((a = f.firstChild).textContent = "");
            } else d.push(t.createTextNode(i));
        for (f.textContent = "", p = 0; (i = d[p++]); )
          if (r && T.inArray(i, r) > -1) o && o.push(i);
          else if (
            ((l = ae(i)), (a = be(f.appendChild(i), "script")), l && xe(a), n)
          )
            for (c = 0; (i = a[c++]); ) me.test(i.type || "") && n.push(i);
        return f;
      }
      var Te = /^key/,
        ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Se = /^([^.]*)(?:\.(.+)|)/;
      function Ee() {
        return !0;
      }
      function _e() {
        return !1;
      }
      function je(e, t) {
        return (
          (e ===
            (function () {
              try {
                return b.activeElement;
              } catch (e) {}
            })()) ==
          ("focus" === t)
        );
      }
      function Ae(e, t, n, r, o, i) {
        var a, s;
        if ("object" == typeof t) {
          for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
            Ae(e, s, n, r, t[s], i);
          return e;
        }
        if (
          (null == r && null == o
            ? ((o = n), (r = n = void 0))
            : null == o &&
              ("string" == typeof n
                ? ((o = r), (r = void 0))
                : ((o = r), (r = n), (n = void 0))),
          !1 === o)
        )
          o = _e;
        else if (!o) return e;
        return (
          1 === i &&
            ((a = o),
            ((o = function (e) {
              return T().off(e), a.apply(this, arguments);
            }).guid = a.guid || (a.guid = T.guid++))),
          e.each(function () {
            T.event.add(this, t, o, r, n);
          })
        );
      }
      function Ne(e, t, n) {
        n
          ? (J.set(e, t, !1),
            T.event.add(e, t, {
              namespace: !1,
              handler: function (e) {
                var r,
                  o,
                  i = J.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                  if (i.length)
                    (T.event.special[t] || {}).delegateType &&
                      e.stopPropagation();
                  else if (
                    ((i = s.call(arguments)),
                    J.set(this, t, i),
                    (r = n(this, t)),
                    this[t](),
                    i !== (o = J.get(this, t)) || r
                      ? J.set(this, t, !1)
                      : (o = {}),
                    i !== o)
                  )
                    return (
                      e.stopImmediatePropagation(), e.preventDefault(), o.value
                    );
                } else
                  i.length &&
                    (J.set(this, t, {
                      value: T.event.trigger(
                        T.extend(i[0], T.Event.prototype),
                        i.slice(1),
                        this
                      ),
                    }),
                    e.stopImmediatePropagation());
              },
            }))
          : void 0 === J.get(e, t) && T.event.add(e, t, Ee);
      }
      (T.event = {
        global: {},
        add: function (e, t, n, r, o) {
          var i,
            a,
            s,
            u,
            l,
            c,
            f,
            d,
            p,
            h,
            g,
            v = J.get(e);
          if (Y(e))
            for (
              n.handler && ((n = (i = n).handler), (o = i.selector)),
                o && T.find.matchesSelector(ie, o),
                n.guid || (n.guid = T.guid++),
                (u = v.events) || (u = v.events = Object.create(null)),
                (a = v.handle) ||
                  (a = v.handle = function (t) {
                    return void 0 !== T && T.event.triggered !== t.type
                      ? T.event.dispatch.apply(e, arguments)
                      : void 0;
                  }),
                l = (t = (t || "").match(P) || [""]).length;
              l--;

            )
              (p = g = (s = Se.exec(t[l]) || [])[1]),
                (h = (s[2] || "").split(".").sort()),
                p &&
                  ((f = T.event.special[p] || {}),
                  (p = (o ? f.delegateType : f.bindType) || p),
                  (f = T.event.special[p] || {}),
                  (c = T.extend(
                    {
                      type: p,
                      origType: g,
                      data: r,
                      handler: n,
                      guid: n.guid,
                      selector: o,
                      needsContext: o && T.expr.match.needsContext.test(o),
                      namespace: h.join("."),
                    },
                    i
                  )),
                  (d = u[p]) ||
                    (((d = u[p] = []).delegateCount = 0),
                    (f.setup && !1 !== f.setup.call(e, r, h, a)) ||
                      (e.addEventListener && e.addEventListener(p, a))),
                  f.add &&
                    (f.add.call(e, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                  o ? d.splice(d.delegateCount++, 0, c) : d.push(c),
                  (T.event.global[p] = !0));
        },
        remove: function (e, t, n, r, o) {
          var i,
            a,
            s,
            u,
            l,
            c,
            f,
            d,
            p,
            h,
            g,
            v = J.hasData(e) && J.get(e);
          if (v && (u = v.events)) {
            for (l = (t = (t || "").match(P) || [""]).length; l--; )
              if (
                ((p = g = (s = Se.exec(t[l]) || [])[1]),
                (h = (s[2] || "").split(".").sort()),
                p)
              ) {
                for (
                  f = T.event.special[p] || {},
                    d = u[(p = (r ? f.delegateType : f.bindType) || p)] || [],
                    s =
                      s[2] &&
                      new RegExp(
                        "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      ),
                    a = i = d.length;
                  i--;

                )
                  (c = d[i]),
                    (!o && g !== c.origType) ||
                      (n && n.guid !== c.guid) ||
                      (s && !s.test(c.namespace)) ||
                      (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                      (d.splice(i, 1),
                      c.selector && d.delegateCount--,
                      f.remove && f.remove.call(e, c));
                a &&
                  !d.length &&
                  ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                    T.removeEvent(e, p, v.handle),
                  delete u[p]);
              } else for (p in u) T.event.remove(e, p + t[l], n, r, !0);
            T.isEmptyObject(u) && J.remove(e, "handle events");
          }
        },
        dispatch: function (e) {
          var t,
            n,
            r,
            o,
            i,
            a,
            s = new Array(arguments.length),
            u = T.event.fix(e),
            l = (J.get(this, "events") || Object.create(null))[u.type] || [],
            c = T.event.special[u.type] || {};
          for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
          if (
            ((u.delegateTarget = this),
            !c.preDispatch || !1 !== c.preDispatch.call(this, u))
          ) {
            for (
              a = T.event.handlers.call(this, u, l), t = 0;
              (o = a[t++]) && !u.isPropagationStopped();

            )
              for (
                u.currentTarget = o.elem, n = 0;
                (i = o.handlers[n++]) && !u.isImmediatePropagationStopped();

              )
                (u.rnamespace &&
                  !1 !== i.namespace &&
                  !u.rnamespace.test(i.namespace)) ||
                  ((u.handleObj = i),
                  (u.data = i.data),
                  void 0 !==
                    (r = (
                      (T.event.special[i.origType] || {}).handle || i.handler
                    ).apply(o.elem, s)) &&
                    !1 === (u.result = r) &&
                    (u.preventDefault(), u.stopPropagation()));
            return c.postDispatch && c.postDispatch.call(this, u), u.result;
          }
        },
        handlers: function (e, t) {
          var n,
            r,
            o,
            i,
            a,
            s = [],
            u = t.delegateCount,
            l = e.target;
          if (u && l.nodeType && !("click" === e.type && e.button >= 1))
            for (; l !== this; l = l.parentNode || this)
              if (
                1 === l.nodeType &&
                ("click" !== e.type || !0 !== l.disabled)
              ) {
                for (i = [], a = {}, n = 0; n < u; n++)
                  void 0 === a[(o = (r = t[n]).selector + " ")] &&
                    (a[o] = r.needsContext
                      ? T(o, this).index(l) > -1
                      : T.find(o, this, null, [l]).length),
                    a[o] && i.push(r);
                i.length && s.push({ elem: l, handlers: i });
              }
          return (
            (l = this),
            u < t.length && s.push({ elem: l, handlers: t.slice(u) }),
            s
          );
        },
        addProp: function (e, t) {
          Object.defineProperty(T.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: m(t)
              ? function () {
                  if (this.originalEvent) return t(this.originalEvent);
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[e];
                },
            set: function (t) {
              Object.defineProperty(this, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              });
            },
          });
        },
        fix: function (e) {
          return e[T.expando] ? e : new T.Event(e);
        },
        special: {
          load: { noBubble: !0 },
          click: {
            setup: function (e) {
              var t = this || e;
              return (
                ge.test(t.type) &&
                  t.click &&
                  A(t, "input") &&
                  Ne(t, "click", Ee),
                !1
              );
            },
            trigger: function (e) {
              var t = this || e;
              return (
                ge.test(t.type) && t.click && A(t, "input") && Ne(t, "click"),
                !0
              );
            },
            _default: function (e) {
              var t = e.target;
              return (
                (ge.test(t.type) &&
                  t.click &&
                  A(t, "input") &&
                  J.get(t, "click")) ||
                A(t, "a")
              );
            },
          },
          beforeunload: {
            postDispatch: function (e) {
              void 0 !== e.result &&
                e.originalEvent &&
                (e.originalEvent.returnValue = e.result);
            },
          },
        },
      }),
        (T.removeEvent = function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n);
        }),
        (T.Event = function (e, t) {
          if (!(this instanceof T.Event)) return new T.Event(e, t);
          e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? Ee
                  : _e),
              (this.target =
                e.target && 3 === e.target.nodeType
                  ? e.target.parentNode
                  : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
            t && T.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            (this[T.expando] = !0);
        }),
        (T.Event.prototype = {
          constructor: T.Event,
          isDefaultPrevented: _e,
          isPropagationStopped: _e,
          isImmediatePropagationStopped: _e,
          isSimulated: !1,
          preventDefault: function () {
            var e = this.originalEvent;
            (this.isDefaultPrevented = Ee),
              e && !this.isSimulated && e.preventDefault();
          },
          stopPropagation: function () {
            var e = this.originalEvent;
            (this.isPropagationStopped = Ee),
              e && !this.isSimulated && e.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = Ee),
              e && !this.isSimulated && e.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        T.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (e) {
              var t = e.button;
              return null == e.which && Te.test(e.type)
                ? null != e.charCode
                  ? e.charCode
                  : e.keyCode
                : !e.which && void 0 !== t && ke.test(e.type)
                ? 1 & t
                  ? 1
                  : 2 & t
                  ? 3
                  : 4 & t
                  ? 2
                  : 0
                : e.which;
            },
          },
          T.event.addProp
        ),
        T.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
          T.event.special[e] = {
            setup: function () {
              return Ne(this, e, je), !1;
            },
            trigger: function () {
              return Ne(this, e), !0;
            },
            delegateType: t,
          };
        }),
        T.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout",
          },
          function (e, t) {
            T.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function (e) {
                var n,
                  r = this,
                  o = e.relatedTarget,
                  i = e.handleObj;
                return (
                  (o && (o === r || T.contains(r, o))) ||
                    ((e.type = i.origType),
                    (n = i.handler.apply(this, arguments)),
                    (e.type = t)),
                  n
                );
              },
            };
          }
        ),
        T.fn.extend({
          on: function (e, t, n, r) {
            return Ae(this, e, t, n, r);
          },
          one: function (e, t, n, r) {
            return Ae(this, e, t, n, r, 1);
          },
          off: function (e, t, n) {
            var r, o;
            if (e && e.preventDefault && e.handleObj)
              return (
                (r = e.handleObj),
                T(e.delegateTarget).off(
                  r.namespace ? r.origType + "." + r.namespace : r.origType,
                  r.selector,
                  r.handler
                ),
                this
              );
            if ("object" == typeof e) {
              for (o in e) this.off(o, t, e[o]);
              return this;
            }
            return (
              (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
              !1 === n && (n = _e),
              this.each(function () {
                T.event.remove(this, e, n, t);
              })
            );
          },
        });
      var De = /<script|<style|<link/i,
        Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function Le(e, t) {
        return (
          (A(e, "table") &&
            A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
            T(e).children("tbody")[0]) ||
          e
        );
      }
      function He(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
      }
      function Ie(e) {
        return (
          "true/" === (e.type || "").slice(0, 5)
            ? (e.type = e.type.slice(5))
            : e.removeAttribute("type"),
          e
        );
      }
      function Pe(e, t) {
        var n, r, o, i, a, s;
        if (1 === t.nodeType) {
          if (J.hasData(e) && (s = J.get(e).events))
            for (o in (J.remove(t, "handle events"), s))
              for (n = 0, r = s[o].length; n < r; n++)
                T.event.add(t, o, s[o][n]);
          K.hasData(e) &&
            ((i = K.access(e)), (a = T.extend({}, i)), K.set(t, a));
        }
      }
      function Me(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && ge.test(e.type)
          ? (t.checked = e.checked)
          : ("input" !== n && "textarea" !== n) ||
            (t.defaultValue = e.defaultValue);
      }
      function Re(e, t, n, r) {
        t = u(t);
        var o,
          i,
          a,
          s,
          l,
          c,
          f = 0,
          d = e.length,
          p = d - 1,
          h = t[0],
          g = m(h);
        if (g || (d > 1 && "string" == typeof h && !v.checkClone && Oe.test(h)))
          return e.each(function (o) {
            var i = e.eq(o);
            g && (t[0] = h.call(this, o, i.html())), Re(i, t, n, r);
          });
        if (
          d &&
          ((i = (o = Ce(t, e[0].ownerDocument, !1, e, r)).firstChild),
          1 === o.childNodes.length && (o = i),
          i || r)
        ) {
          for (s = (a = T.map(be(o, "script"), He)).length; f < d; f++)
            (l = o),
              f !== p &&
                ((l = T.clone(l, !0, !0)), s && T.merge(a, be(l, "script"))),
              n.call(e[f], l, f);
          if (s)
            for (
              c = a[a.length - 1].ownerDocument, T.map(a, Ie), f = 0;
              f < s;
              f++
            )
              (l = a[f]),
                me.test(l.type || "") &&
                  !J.access(l, "globalEval") &&
                  T.contains(c, l) &&
                  (l.src && "module" !== (l.type || "").toLowerCase()
                    ? T._evalUrl &&
                      !l.noModule &&
                      T._evalUrl(
                        l.src,
                        { nonce: l.nonce || l.getAttribute("nonce") },
                        c
                      )
                    : w(l.textContent.replace(qe, ""), l, c));
        }
        return e;
      }
      function Fe(e, t, n) {
        for (var r, o = t ? T.filter(t, e) : e, i = 0; null != (r = o[i]); i++)
          n || 1 !== r.nodeType || T.cleanData(be(r)),
            r.parentNode &&
              (n && ae(r) && xe(be(r, "script")), r.parentNode.removeChild(r));
        return e;
      }
      T.extend({
        htmlPrefilter: function (e) {
          return e;
        },
        clone: function (e, t, n) {
          var r,
            o,
            i,
            a,
            s = e.cloneNode(!0),
            u = ae(e);
          if (
            !(
              v.noCloneChecked ||
              (1 !== e.nodeType && 11 !== e.nodeType) ||
              T.isXMLDoc(e)
            )
          )
            for (a = be(s), r = 0, o = (i = be(e)).length; r < o; r++)
              Me(i[r], a[r]);
          if (t)
            if (n)
              for (
                i = i || be(e), a = a || be(s), r = 0, o = i.length;
                r < o;
                r++
              )
                Pe(i[r], a[r]);
            else Pe(e, s);
          return (
            (a = be(s, "script")).length > 0 && xe(a, !u && be(e, "script")), s
          );
        },
        cleanData: function (e) {
          for (
            var t, n, r, o = T.event.special, i = 0;
            void 0 !== (n = e[i]);
            i++
          )
            if (Y(n)) {
              if ((t = n[J.expando])) {
                if (t.events)
                  for (r in t.events)
                    o[r] ? T.event.remove(n, r) : T.removeEvent(n, r, t.handle);
                n[J.expando] = void 0;
              }
              n[K.expando] && (n[K.expando] = void 0);
            }
        },
      }),
        T.fn.extend({
          detach: function (e) {
            return Fe(this, e, !0);
          },
          remove: function (e) {
            return Fe(this, e);
          },
          text: function (e) {
            return z(
              this,
              function (e) {
                return void 0 === e
                  ? T.text(this)
                  : this.empty().each(function () {
                      (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        (this.textContent = e);
                    });
              },
              null,
              e,
              arguments.length
            );
          },
          append: function () {
            return Re(this, arguments, function (e) {
              (1 !== this.nodeType &&
                11 !== this.nodeType &&
                9 !== this.nodeType) ||
                Le(this, e).appendChild(e);
            });
          },
          prepend: function () {
            return Re(this, arguments, function (e) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var t = Le(this, e);
                t.insertBefore(e, t.firstChild);
              }
            });
          },
          before: function () {
            return Re(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this);
            });
          },
          after: function () {
            return Re(this, arguments, function (e) {
              this.parentNode &&
                this.parentNode.insertBefore(e, this.nextSibling);
            });
          },
          empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++)
              1 === e.nodeType &&
                (T.cleanData(be(e, !1)), (e.textContent = ""));
            return this;
          },
          clone: function (e, t) {
            return (
              (e = null != e && e),
              (t = null == t ? e : t),
              this.map(function () {
                return T.clone(this, e, t);
              })
            );
          },
          html: function (e) {
            return z(
              this,
              function (e) {
                var t = this[0] || {},
                  n = 0,
                  r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if (
                  "string" == typeof e &&
                  !De.test(e) &&
                  !ye[(ve.exec(e) || ["", ""])[1].toLowerCase()]
                ) {
                  e = T.htmlPrefilter(e);
                  try {
                    for (; n < r; n++)
                      1 === (t = this[n] || {}).nodeType &&
                        (T.cleanData(be(t, !1)), (t.innerHTML = e));
                    t = 0;
                  } catch (e) {}
                }
                t && this.empty().append(e);
              },
              null,
              e,
              arguments.length
            );
          },
          replaceWith: function () {
            var e = [];
            return Re(
              this,
              arguments,
              function (t) {
                var n = this.parentNode;
                T.inArray(this, e) < 0 &&
                  (T.cleanData(be(this)), n && n.replaceChild(t, this));
              },
              e
            );
          },
        }),
        T.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
          },
          function (e, t) {
            T.fn[e] = function (e) {
              for (
                var n, r = [], o = T(e), i = o.length - 1, a = 0;
                a <= i;
                a++
              )
                (n = a === i ? this : this.clone(!0)),
                  T(o[a])[t](n),
                  l.apply(r, n.get());
              return this.pushStack(r);
            };
          }
        );
      var We = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"),
        Be = function (e) {
          var t = e.ownerDocument.defaultView;
          return (t && t.opener) || (t = n), t.getComputedStyle(e);
        },
        $e = function (e, t, n) {
          var r,
            o,
            i = {};
          for (o in t) (i[o] = e.style[o]), (e.style[o] = t[o]);
          for (o in ((r = n.call(e)), t)) e.style[o] = i[o];
          return r;
        },
        ze = new RegExp(oe.join("|"), "i");
      function Ue(e, t, n) {
        var r,
          o,
          i,
          a,
          s = e.style;
        return (
          (n = n || Be(e)) &&
            ("" !== (a = n.getPropertyValue(t) || n[t]) ||
              ae(e) ||
              (a = T.style(e, t)),
            !v.pixelBoxStyles() &&
              We.test(a) &&
              ze.test(t) &&
              ((r = s.width),
              (o = s.minWidth),
              (i = s.maxWidth),
              (s.minWidth = s.maxWidth = s.width = a),
              (a = n.width),
              (s.width = r),
              (s.minWidth = o),
              (s.maxWidth = i))),
          void 0 !== a ? a + "" : a
        );
      }
      function Xe(e, t) {
        return {
          get: function () {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get;
          },
        };
      }
      !(function () {
        function e() {
          if (c) {
            (l.style.cssText =
              "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
              (c.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
              ie.appendChild(l).appendChild(c);
            var e = n.getComputedStyle(c);
            (r = "1%" !== e.top),
              (u = 12 === t(e.marginLeft)),
              (c.style.right = "60%"),
              (a = 36 === t(e.right)),
              (o = 36 === t(e.width)),
              (c.style.position = "absolute"),
              (i = 12 === t(c.offsetWidth / 3)),
              ie.removeChild(l),
              (c = null);
          }
        }
        function t(e) {
          return Math.round(parseFloat(e));
        }
        var r,
          o,
          i,
          a,
          s,
          u,
          l = b.createElement("div"),
          c = b.createElement("div");
        c.style &&
          ((c.style.backgroundClip = "content-box"),
          (c.cloneNode(!0).style.backgroundClip = ""),
          (v.clearCloneStyle = "content-box" === c.style.backgroundClip),
          T.extend(v, {
            boxSizingReliable: function () {
              return e(), o;
            },
            pixelBoxStyles: function () {
              return e(), a;
            },
            pixelPosition: function () {
              return e(), r;
            },
            reliableMarginLeft: function () {
              return e(), u;
            },
            scrollboxSize: function () {
              return e(), i;
            },
            reliableTrDimensions: function () {
              var e, t, r, o;
              return (
                null == s &&
                  ((e = b.createElement("table")),
                  (t = b.createElement("tr")),
                  (r = b.createElement("div")),
                  (e.style.cssText = "position:absolute;left:-11111px"),
                  (t.style.height = "1px"),
                  (r.style.height = "9px"),
                  ie.appendChild(e).appendChild(t).appendChild(r),
                  (o = n.getComputedStyle(t)),
                  (s = parseInt(o.height) > 3),
                  ie.removeChild(e)),
                s
              );
            },
          }));
      })();
      var Ve = ["Webkit", "Moz", "ms"],
        Ge = b.createElement("div").style,
        Ye = {};
      function Qe(e) {
        var t = T.cssProps[e] || Ye[e];
        return (
          t ||
          (e in Ge
            ? e
            : (Ye[e] =
                (function (e) {
                  for (
                    var t = e[0].toUpperCase() + e.slice(1), n = Ve.length;
                    n--;

                  )
                    if ((e = Ve[n] + t) in Ge) return e;
                })(e) || e))
        );
      }
      var Je = /^(none|table(?!-c[ea]).+)/,
        Ke = /^--/,
        Ze = { position: "absolute", visibility: "hidden", display: "block" },
        et = { letterSpacing: "0", fontWeight: "400" };
      function tt(e, t, n) {
        var r = re.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
      }
      function nt(e, t, n, r, o, i) {
        var a = "width" === t ? 1 : 0,
          s = 0,
          u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2)
          "margin" === n && (u += T.css(e, n + oe[a], !0, o)),
            r
              ? ("content" === n && (u -= T.css(e, "padding" + oe[a], !0, o)),
                "margin" !== n &&
                  (u -= T.css(e, "border" + oe[a] + "Width", !0, o)))
              : ((u += T.css(e, "padding" + oe[a], !0, o)),
                "padding" !== n
                  ? (u += T.css(e, "border" + oe[a] + "Width", !0, o))
                  : (s += T.css(e, "border" + oe[a] + "Width", !0, o)));
        return (
          !r &&
            i >= 0 &&
            (u +=
              Math.max(
                0,
                Math.ceil(
                  e["offset" + t[0].toUpperCase() + t.slice(1)] -
                    i -
                    u -
                    s -
                    0.5
                )
              ) || 0),
          u
        );
      }
      function rt(e, t, n) {
        var r = Be(e),
          o =
            (!v.boxSizingReliable() || n) &&
            "border-box" === T.css(e, "boxSizing", !1, r),
          i = o,
          a = Ue(e, t, r),
          s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (We.test(a)) {
          if (!n) return a;
          a = "auto";
        }
        return (
          ((!v.boxSizingReliable() && o) ||
            (!v.reliableTrDimensions() && A(e, "tr")) ||
            "auto" === a ||
            (!parseFloat(a) && "inline" === T.css(e, "display", !1, r))) &&
            e.getClientRects().length &&
            ((o = "border-box" === T.css(e, "boxSizing", !1, r)),
            (i = s in e) && (a = e[s])),
          (a = parseFloat(a) || 0) +
            nt(e, t, n || (o ? "border" : "content"), i, r, a) +
            "px"
        );
      }
      function ot(e, t, n, r, o) {
        return new ot.prototype.init(e, t, n, r, o);
      }
      T.extend({
        cssHooks: {
          opacity: {
            get: function (e, t) {
              if (t) {
                var n = Ue(e, "opacity");
                return "" === n ? "1" : n;
              }
            },
          },
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        cssProps: {},
        style: function (e, t, n, r) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var o,
              i,
              a,
              s = G(t),
              u = Ke.test(t),
              l = e.style;
            if (
              (u || (t = Qe(s)),
              (a = T.cssHooks[t] || T.cssHooks[s]),
              void 0 === n)
            )
              return a && "get" in a && void 0 !== (o = a.get(e, !1, r))
                ? o
                : l[t];
            "string" === (i = typeof n) &&
              (o = re.exec(n)) &&
              o[1] &&
              ((n = le(e, t, o)), (i = "number")),
              null != n &&
                n == n &&
                ("number" !== i ||
                  u ||
                  (n += (o && o[3]) || (T.cssNumber[s] ? "" : "px")),
                v.clearCloneStyle ||
                  "" !== n ||
                  0 !== t.indexOf("background") ||
                  (l[t] = "inherit"),
                (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
                  (u ? l.setProperty(t, n) : (l[t] = n)));
          }
        },
        css: function (e, t, n, r) {
          var o,
            i,
            a,
            s = G(t);
          return (
            Ke.test(t) || (t = Qe(s)),
            (a = T.cssHooks[t] || T.cssHooks[s]) &&
              "get" in a &&
              (o = a.get(e, !0, n)),
            void 0 === o && (o = Ue(e, t, r)),
            "normal" === o && t in et && (o = et[t]),
            "" === n || n
              ? ((i = parseFloat(o)), !0 === n || isFinite(i) ? i || 0 : o)
              : o
          );
        },
      }),
        T.each(["height", "width"], function (e, t) {
          T.cssHooks[t] = {
            get: function (e, n, r) {
              if (n)
                return !Je.test(T.css(e, "display")) ||
                  (e.getClientRects().length && e.getBoundingClientRect().width)
                  ? rt(e, t, r)
                  : $e(e, Ze, function () {
                      return rt(e, t, r);
                    });
            },
            set: function (e, n, r) {
              var o,
                i = Be(e),
                a = !v.scrollboxSize() && "absolute" === i.position,
                s = (a || r) && "border-box" === T.css(e, "boxSizing", !1, i),
                u = r ? nt(e, t, r, s, i) : 0;
              return (
                s &&
                  a &&
                  (u -= Math.ceil(
                    e["offset" + t[0].toUpperCase() + t.slice(1)] -
                      parseFloat(i[t]) -
                      nt(e, t, "border", !1, i) -
                      0.5
                  )),
                u &&
                  (o = re.exec(n)) &&
                  "px" !== (o[3] || "px") &&
                  ((e.style[t] = n), (n = T.css(e, t))),
                tt(0, n, u)
              );
            },
          };
        }),
        (T.cssHooks.marginLeft = Xe(v.reliableMarginLeft, function (e, t) {
          if (t)
            return (
              (parseFloat(Ue(e, "marginLeft")) ||
                e.getBoundingClientRect().left -
                  $e(e, { marginLeft: 0 }, function () {
                    return e.getBoundingClientRect().left;
                  })) + "px"
            );
        })),
        T.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
          (T.cssHooks[e + t] = {
            expand: function (n) {
              for (
                var r = 0,
                  o = {},
                  i = "string" == typeof n ? n.split(" ") : [n];
                r < 4;
                r++
              )
                o[e + oe[r] + t] = i[r] || i[r - 2] || i[0];
              return o;
            },
          }),
            "margin" !== e && (T.cssHooks[e + t].set = tt);
        }),
        T.fn.extend({
          css: function (e, t) {
            return z(
              this,
              function (e, t, n) {
                var r,
                  o,
                  i = {},
                  a = 0;
                if (Array.isArray(t)) {
                  for (r = Be(e), o = t.length; a < o; a++)
                    i[t[a]] = T.css(e, t[a], !1, r);
                  return i;
                }
                return void 0 !== n ? T.style(e, t, n) : T.css(e, t);
              },
              e,
              t,
              arguments.length > 1
            );
          },
        }),
        (T.Tween = ot),
        (ot.prototype = {
          constructor: ot,
          init: function (e, t, n, r, o, i) {
            (this.elem = e),
              (this.prop = n),
              (this.easing = o || T.easing._default),
              (this.options = t),
              (this.start = this.now = this.cur()),
              (this.end = r),
              (this.unit = i || (T.cssNumber[n] ? "" : "px"));
          },
          cur: function () {
            var e = ot.propHooks[this.prop];
            return e && e.get ? e.get(this) : ot.propHooks._default.get(this);
          },
          run: function (e) {
            var t,
              n = ot.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = t = T.easing[this.easing](
                    e,
                    this.options.duration * e,
                    0,
                    1,
                    this.options.duration
                  ))
                : (this.pos = t = e),
              (this.now = (this.end - this.start) * t + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : ot.propHooks._default.set(this),
              this
            );
          },
        }),
        (ot.prototype.init.prototype = ot.prototype),
        (ot.propHooks = {
          _default: {
            get: function (e) {
              var t;
              return 1 !== e.elem.nodeType ||
                (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                ? e.elem[e.prop]
                : (t = T.css(e.elem, e.prop, "")) && "auto" !== t
                ? t
                : 0;
            },
            set: function (e) {
              T.fx.step[e.prop]
                ? T.fx.step[e.prop](e)
                : 1 !== e.elem.nodeType ||
                  (!T.cssHooks[e.prop] && null == e.elem.style[Qe(e.prop)])
                ? (e.elem[e.prop] = e.now)
                : T.style(e.elem, e.prop, e.now + e.unit);
            },
          },
        }),
        (ot.propHooks.scrollTop = ot.propHooks.scrollLeft = {
          set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          },
        }),
        (T.easing = {
          linear: function (e) {
            return e;
          },
          swing: function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
          },
          _default: "swing",
        }),
        (T.fx = ot.prototype.init),
        (T.fx.step = {});
      var it,
        at,
        st = /^(?:toggle|show|hide)$/,
        ut = /queueHooks$/;
      function lt() {
        at &&
          (!1 === b.hidden && n.requestAnimationFrame
            ? n.requestAnimationFrame(lt)
            : n.setTimeout(lt, T.fx.interval),
          T.fx.tick());
      }
      function ct() {
        return (
          n.setTimeout(function () {
            it = void 0;
          }),
          (it = Date.now())
        );
      }
      function ft(e, t) {
        var n,
          r = 0,
          o = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
          o["margin" + (n = oe[r])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o;
      }
      function dt(e, t, n) {
        for (
          var r,
            o = (pt.tweeners[t] || []).concat(pt.tweeners["*"]),
            i = 0,
            a = o.length;
          i < a;
          i++
        )
          if ((r = o[i].call(n, t, e))) return r;
      }
      function pt(e, t, n) {
        var r,
          o,
          i = 0,
          a = pt.prefilters.length,
          s = T.Deferred().always(function () {
            delete u.elem;
          }),
          u = function () {
            if (o) return !1;
            for (
              var t = it || ct(),
                n = Math.max(0, l.startTime + l.duration - t),
                r = 1 - (n / l.duration || 0),
                i = 0,
                a = l.tweens.length;
              i < a;
              i++
            )
              l.tweens[i].run(r);
            return (
              s.notifyWith(e, [l, r, n]),
              r < 1 && a
                ? n
                : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
            );
          },
          l = s.promise({
            elem: e,
            props: T.extend({}, t),
            opts: T.extend(
              !0,
              { specialEasing: {}, easing: T.easing._default },
              n
            ),
            originalProperties: t,
            originalOptions: n,
            startTime: it || ct(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
              var r = T.Tween(
                e,
                l.opts,
                t,
                n,
                l.opts.specialEasing[t] || l.opts.easing
              );
              return l.tweens.push(r), r;
            },
            stop: function (t) {
              var n = 0,
                r = t ? l.tweens.length : 0;
              if (o) return this;
              for (o = !0; n < r; n++) l.tweens[n].run(1);
              return (
                t
                  ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t]))
                  : s.rejectWith(e, [l, t]),
                this
              );
            },
          }),
          c = l.props;
        for (
          !(function (e, t) {
            var n, r, o, i, a;
            for (n in e)
              if (
                ((o = t[(r = G(n))]),
                (i = e[n]),
                Array.isArray(i) && ((o = i[1]), (i = e[n] = i[0])),
                n !== r && ((e[r] = i), delete e[n]),
                (a = T.cssHooks[r]) && ("expand" in a))
              )
                for (n in ((i = a.expand(i)), delete e[r], i))
                  (n in e) || ((e[n] = i[n]), (t[n] = o));
              else t[r] = o;
          })(c, l.opts.specialEasing);
          i < a;
          i++
        )
          if ((r = pt.prefilters[i].call(l, e, c, l.opts)))
            return (
              m(r.stop) &&
                (T._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
              r
            );
        return (
          T.map(c, dt, l),
          m(l.opts.start) && l.opts.start.call(e, l),
          l
            .progress(l.opts.progress)
            .done(l.opts.done, l.opts.complete)
            .fail(l.opts.fail)
            .always(l.opts.always),
          T.fx.timer(T.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
          l
        );
      }
      (T.Animation = T.extend(pt, {
        tweeners: {
          "*": [
            function (e, t) {
              var n = this.createTween(e, t);
              return le(n.elem, e, re.exec(t), n), n;
            },
          ],
        },
        tweener: function (e, t) {
          m(e) ? ((t = e), (e = ["*"])) : (e = e.match(P));
          for (var n, r = 0, o = e.length; r < o; r++)
            (n = e[r]),
              (pt.tweeners[n] = pt.tweeners[n] || []),
              pt.tweeners[n].unshift(t);
        },
        prefilters: [
          function (e, t, n) {
            var r,
              o,
              i,
              a,
              s,
              u,
              l,
              c,
              f = "width" in t || "height" in t,
              d = this,
              p = {},
              h = e.style,
              g = e.nodeType && ue(e),
              v = J.get(e, "fxshow");
            for (r in (n.queue ||
              (null == (a = T._queueHooks(e, "fx")).unqueued &&
                ((a.unqueued = 0),
                (s = a.empty.fire),
                (a.empty.fire = function () {
                  a.unqueued || s();
                })),
              a.unqueued++,
              d.always(function () {
                d.always(function () {
                  a.unqueued--, T.queue(e, "fx").length || a.empty.fire();
                });
              })),
            t))
              if (((o = t[r]), st.test(o))) {
                if (
                  (delete t[r],
                  (i = i || "toggle" === o),
                  o === (g ? "hide" : "show"))
                ) {
                  if ("show" !== o || !v || void 0 === v[r]) continue;
                  g = !0;
                }
                p[r] = (v && v[r]) || T.style(e, r);
              }
            if ((u = !T.isEmptyObject(t)) || !T.isEmptyObject(p))
              for (r in (f &&
                1 === e.nodeType &&
                ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                null == (l = v && v.display) && (l = J.get(e, "display")),
                "none" === (c = T.css(e, "display")) &&
                  (l
                    ? (c = l)
                    : (de([e], !0),
                      (l = e.style.display || l),
                      (c = T.css(e, "display")),
                      de([e]))),
                ("inline" === c || ("inline-block" === c && null != l)) &&
                  "none" === T.css(e, "float") &&
                  (u ||
                    (d.done(function () {
                      h.display = l;
                    }),
                    null == l &&
                      ((c = h.display), (l = "none" === c ? "" : c))),
                  (h.display = "inline-block"))),
              n.overflow &&
                ((h.overflow = "hidden"),
                d.always(function () {
                  (h.overflow = n.overflow[0]),
                    (h.overflowX = n.overflow[1]),
                    (h.overflowY = n.overflow[2]);
                })),
              (u = !1),
              p))
                u ||
                  (v
                    ? "hidden" in v && (g = v.hidden)
                    : (v = J.access(e, "fxshow", { display: l })),
                  i && (v.hidden = !g),
                  g && de([e], !0),
                  d.done(function () {
                    for (r in (g || de([e]), J.remove(e, "fxshow"), p))
                      T.style(e, r, p[r]);
                  })),
                  (u = dt(g ? v[r] : 0, r, d)),
                  r in v ||
                    ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
          },
        ],
        prefilter: function (e, t) {
          t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
        },
      })),
        (T.speed = function (e, t, n) {
          var r =
            e && "object" == typeof e
              ? T.extend({}, e)
              : {
                  complete: n || (!n && t) || (m(e) && e),
                  duration: e,
                  easing: (n && t) || (t && !m(t) && t),
                };
          return (
            T.fx.off
              ? (r.duration = 0)
              : "number" != typeof r.duration &&
                (r.duration in T.fx.speeds
                  ? (r.duration = T.fx.speeds[r.duration])
                  : (r.duration = T.fx.speeds._default)),
            (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
            (r.old = r.complete),
            (r.complete = function () {
              m(r.old) && r.old.call(this), r.queue && T.dequeue(this, r.queue);
            }),
            r
          );
        }),
        T.fn.extend({
          fadeTo: function (e, t, n, r) {
            return this.filter(ue)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: t }, e, n, r);
          },
          animate: function (e, t, n, r) {
            var o = T.isEmptyObject(e),
              i = T.speed(t, n, r),
              a = function () {
                var t = pt(this, T.extend({}, e), i);
                (o || J.get(this, "finish")) && t.stop(!0);
              };
            return (
              (a.finish = a),
              o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a)
            );
          },
          stop: function (e, t, n) {
            var r = function (e) {
              var t = e.stop;
              delete e.stop, t(n);
            };
            return (
              "string" != typeof e && ((n = t), (t = e), (e = void 0)),
              t && this.queue(e || "fx", []),
              this.each(function () {
                var t = !0,
                  o = null != e && e + "queueHooks",
                  i = T.timers,
                  a = J.get(this);
                if (o) a[o] && a[o].stop && r(a[o]);
                else for (o in a) a[o] && a[o].stop && ut.test(o) && r(a[o]);
                for (o = i.length; o--; )
                  i[o].elem !== this ||
                    (null != e && i[o].queue !== e) ||
                    (i[o].anim.stop(n), (t = !1), i.splice(o, 1));
                (!t && n) || T.dequeue(this, e);
              })
            );
          },
          finish: function (e) {
            return (
              !1 !== e && (e = e || "fx"),
              this.each(function () {
                var t,
                  n = J.get(this),
                  r = n[e + "queue"],
                  o = n[e + "queueHooks"],
                  i = T.timers,
                  a = r ? r.length : 0;
                for (
                  n.finish = !0,
                    T.queue(this, e, []),
                    o && o.stop && o.stop.call(this, !0),
                    t = i.length;
                  t--;

                )
                  i[t].elem === this &&
                    i[t].queue === e &&
                    (i[t].anim.stop(!0), i.splice(t, 1));
                for (t = 0; t < a; t++)
                  r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish;
              })
            );
          },
        }),
        T.each(["toggle", "show", "hide"], function (e, t) {
          var n = T.fn[t];
          T.fn[t] = function (e, r, o) {
            return null == e || "boolean" == typeof e
              ? n.apply(this, arguments)
              : this.animate(ft(t, !0), e, r, o);
          };
        }),
        T.each(
          {
            slideDown: ft("show"),
            slideUp: ft("hide"),
            slideToggle: ft("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" },
          },
          function (e, t) {
            T.fn[e] = function (e, n, r) {
              return this.animate(t, e, n, r);
            };
          }
        ),
        (T.timers = []),
        (T.fx.tick = function () {
          var e,
            t = 0,
            n = T.timers;
          for (it = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
          n.length || T.fx.stop(), (it = void 0);
        }),
        (T.fx.timer = function (e) {
          T.timers.push(e), T.fx.start();
        }),
        (T.fx.interval = 13),
        (T.fx.start = function () {
          at || ((at = !0), lt());
        }),
        (T.fx.stop = function () {
          at = null;
        }),
        (T.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (T.fn.delay = function (e, t) {
          return (
            (e = (T.fx && T.fx.speeds[e]) || e),
            (t = t || "fx"),
            this.queue(t, function (t, r) {
              var o = n.setTimeout(t, e);
              r.stop = function () {
                n.clearTimeout(o);
              };
            })
          );
        }),
        (function () {
          var e = b.createElement("input"),
            t = b
              .createElement("select")
              .appendChild(b.createElement("option"));
          (e.type = "checkbox"),
            (v.checkOn = "" !== e.value),
            (v.optSelected = t.selected),
            ((e = b.createElement("input")).value = "t"),
            (e.type = "radio"),
            (v.radioValue = "t" === e.value);
        })();
      var ht,
        gt = T.expr.attrHandle;
      T.fn.extend({
        attr: function (e, t) {
          return z(this, T.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
          return this.each(function () {
            T.removeAttr(this, e);
          });
        },
      }),
        T.extend({
          attr: function (e, t, n) {
            var r,
              o,
              i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i)
              return void 0 === e.getAttribute
                ? T.prop(e, t, n)
                : ((1 === i && T.isXMLDoc(e)) ||
                    (o =
                      T.attrHooks[t.toLowerCase()] ||
                      (T.expr.match.bool.test(t) ? ht : void 0)),
                  void 0 !== n
                    ? null === n
                      ? void T.removeAttr(e, t)
                      : o && "set" in o && void 0 !== (r = o.set(e, n, t))
                      ? r
                      : (e.setAttribute(t, n + ""), n)
                    : o && "get" in o && null !== (r = o.get(e, t))
                    ? r
                    : null == (r = T.find.attr(e, t))
                    ? void 0
                    : r);
          },
          attrHooks: {
            type: {
              set: function (e, t) {
                if (!v.radioValue && "radio" === t && A(e, "input")) {
                  var n = e.value;
                  return e.setAttribute("type", t), n && (e.value = n), t;
                }
              },
            },
          },
          removeAttr: function (e, t) {
            var n,
              r = 0,
              o = t && t.match(P);
            if (o && 1 === e.nodeType)
              for (; (n = o[r++]); ) e.removeAttribute(n);
          },
        }),
        (ht = {
          set: function (e, t, n) {
            return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n;
          },
        }),
        T.each(T.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var n = gt[t] || T.find.attr;
          gt[t] = function (e, t, r) {
            var o,
              i,
              a = t.toLowerCase();
            return (
              r ||
                ((i = gt[a]),
                (gt[a] = o),
                (o = null != n(e, t, r) ? a : null),
                (gt[a] = i)),
              o
            );
          };
        });
      var vt = /^(?:input|select|textarea|button)$/i,
        mt = /^(?:a|area)$/i;
      function yt(e) {
        return (e.match(P) || []).join(" ");
      }
      function bt(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
      }
      function xt(e) {
        return Array.isArray(e)
          ? e
          : ("string" == typeof e && e.match(P)) || [];
      }
      T.fn.extend({
        prop: function (e, t) {
          return z(this, T.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
          return this.each(function () {
            delete this[T.propFix[e] || e];
          });
        },
      }),
        T.extend({
          prop: function (e, t, n) {
            var r,
              o,
              i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i)
              return (
                (1 === i && T.isXMLDoc(e)) ||
                  ((t = T.propFix[t] || t), (o = T.propHooks[t])),
                void 0 !== n
                  ? o && "set" in o && void 0 !== (r = o.set(e, n, t))
                    ? r
                    : (e[t] = n)
                  : o && "get" in o && null !== (r = o.get(e, t))
                  ? r
                  : e[t]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (e) {
                var t = T.find.attr(e, "tabindex");
                return t
                  ? parseInt(t, 10)
                  : vt.test(e.nodeName) || (mt.test(e.nodeName) && e.href)
                  ? 0
                  : -1;
              },
            },
          },
          propFix: { for: "htmlFor", class: "className" },
        }),
        v.optSelected ||
          (T.propHooks.selected = {
            get: function (e) {
              var t = e.parentNode;
              return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set: function (e) {
              var t = e.parentNode;
              t &&
                (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            },
          }),
        T.each(
          [
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable",
          ],
          function () {
            T.propFix[this.toLowerCase()] = this;
          }
        ),
        T.fn.extend({
          addClass: function (e) {
            var t,
              n,
              r,
              o,
              i,
              a,
              s,
              u = 0;
            if (m(e))
              return this.each(function (t) {
                T(this).addClass(e.call(this, t, bt(this)));
              });
            if ((t = xt(e)).length)
              for (; (n = this[u++]); )
                if (
                  ((o = bt(n)), (r = 1 === n.nodeType && " " + yt(o) + " "))
                ) {
                  for (a = 0; (i = t[a++]); )
                    r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                  o !== (s = yt(r)) && n.setAttribute("class", s);
                }
            return this;
          },
          removeClass: function (e) {
            var t,
              n,
              r,
              o,
              i,
              a,
              s,
              u = 0;
            if (m(e))
              return this.each(function (t) {
                T(this).removeClass(e.call(this, t, bt(this)));
              });
            if (!arguments.length) return this.attr("class", "");
            if ((t = xt(e)).length)
              for (; (n = this[u++]); )
                if (
                  ((o = bt(n)), (r = 1 === n.nodeType && " " + yt(o) + " "))
                ) {
                  for (a = 0; (i = t[a++]); )
                    for (; r.indexOf(" " + i + " ") > -1; )
                      r = r.replace(" " + i + " ", " ");
                  o !== (s = yt(r)) && n.setAttribute("class", s);
                }
            return this;
          },
          toggleClass: function (e, t) {
            var n = typeof e,
              r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r
              ? t
                ? this.addClass(e)
                : this.removeClass(e)
              : m(e)
              ? this.each(function (n) {
                  T(this).toggleClass(e.call(this, n, bt(this), t), t);
                })
              : this.each(function () {
                  var t, o, i, a;
                  if (r)
                    for (o = 0, i = T(this), a = xt(e); (t = a[o++]); )
                      i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                  else
                    (void 0 !== e && "boolean" !== n) ||
                      ((t = bt(this)) && J.set(this, "__className__", t),
                      this.setAttribute &&
                        this.setAttribute(
                          "class",
                          t || !1 === e
                            ? ""
                            : J.get(this, "__className__") || ""
                        ));
                });
          },
          hasClass: function (e) {
            var t,
              n,
              r = 0;
            for (t = " " + e + " "; (n = this[r++]); )
              if (1 === n.nodeType && (" " + yt(bt(n)) + " ").indexOf(t) > -1)
                return !0;
            return !1;
          },
        });
      var wt = /\r/g;
      T.fn.extend({
        val: function (e) {
          var t,
            n,
            r,
            o = this[0];
          return arguments.length
            ? ((r = m(e)),
              this.each(function (n) {
                var o;
                1 === this.nodeType &&
                  (null == (o = r ? e.call(this, n, T(this).val()) : e)
                    ? (o = "")
                    : "number" == typeof o
                    ? (o += "")
                    : Array.isArray(o) &&
                      (o = T.map(o, function (e) {
                        return null == e ? "" : e + "";
                      })),
                  ((t =
                    T.valHooks[this.type] ||
                    T.valHooks[this.nodeName.toLowerCase()]) &&
                    "set" in t &&
                    void 0 !== t.set(this, o, "value")) ||
                    (this.value = o));
              }))
            : o
            ? (t =
                T.valHooks[o.type] || T.valHooks[o.nodeName.toLowerCase()]) &&
              "get" in t &&
              void 0 !== (n = t.get(o, "value"))
              ? n
              : "string" == typeof (n = o.value)
              ? n.replace(wt, "")
              : null == n
              ? ""
              : n
            : void 0;
        },
      }),
        T.extend({
          valHooks: {
            option: {
              get: function (e) {
                var t = T.find.attr(e, "value");
                return null != t ? t : yt(T.text(e));
              },
            },
            select: {
              get: function (e) {
                var t,
                  n,
                  r,
                  o = e.options,
                  i = e.selectedIndex,
                  a = "select-one" === e.type,
                  s = a ? null : [],
                  u = a ? i + 1 : o.length;
                for (r = i < 0 ? u : a ? i : 0; r < u; r++)
                  if (
                    ((n = o[r]).selected || r === i) &&
                    !n.disabled &&
                    (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))
                  ) {
                    if (((t = T(n).val()), a)) return t;
                    s.push(t);
                  }
                return s;
              },
              set: function (e, t) {
                for (
                  var n, r, o = e.options, i = T.makeArray(t), a = o.length;
                  a--;

                )
                  ((r = o[a]).selected =
                    T.inArray(T.valHooks.option.get(r), i) > -1) && (n = !0);
                return n || (e.selectedIndex = -1), i;
              },
            },
          },
        }),
        T.each(["radio", "checkbox"], function () {
          (T.valHooks[this] = {
            set: function (e, t) {
              if (Array.isArray(t))
                return (e.checked = T.inArray(T(e).val(), t) > -1);
            },
          }),
            v.checkOn ||
              (T.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value;
              });
        }),
        (v.focusin = "onfocusin" in n);
      var Ct = /^(?:focusinfocus|focusoutblur)$/,
        Tt = function (e) {
          e.stopPropagation();
        };
      T.extend(T.event, {
        trigger: function (e, t, r, o) {
          var i,
            a,
            s,
            u,
            l,
            c,
            f,
            d,
            h = [r || b],
            g = p.call(e, "type") ? e.type : e,
            v = p.call(e, "namespace") ? e.namespace.split(".") : [];
          if (
            ((a = d = s = r = r || b),
            3 !== r.nodeType &&
              8 !== r.nodeType &&
              !Ct.test(g + T.event.triggered) &&
              (g.indexOf(".") > -1 &&
                ((v = g.split(".")), (g = v.shift()), v.sort()),
              (l = g.indexOf(":") < 0 && "on" + g),
              ((e = e[T.expando]
                ? e
                : new T.Event(g, "object" == typeof e && e)).isTrigger = o
                ? 2
                : 3),
              (e.namespace = v.join(".")),
              (e.rnamespace = e.namespace
                ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (e.result = void 0),
              e.target || (e.target = r),
              (t = null == t ? [e] : T.makeArray(t, [e])),
              (f = T.event.special[g] || {}),
              o || !f.trigger || !1 !== f.trigger.apply(r, t)))
          ) {
            if (!o && !f.noBubble && !y(r)) {
              for (
                u = f.delegateType || g, Ct.test(u + g) || (a = a.parentNode);
                a;
                a = a.parentNode
              )
                h.push(a), (s = a);
              s === (r.ownerDocument || b) &&
                h.push(s.defaultView || s.parentWindow || n);
            }
            for (i = 0; (a = h[i++]) && !e.isPropagationStopped(); )
              (d = a),
                (e.type = i > 1 ? u : f.bindType || g),
                (c =
                  (J.get(a, "events") || Object.create(null))[e.type] &&
                  J.get(a, "handle")) && c.apply(a, t),
                (c = l && a[l]) &&
                  c.apply &&
                  Y(a) &&
                  ((e.result = c.apply(a, t)),
                  !1 === e.result && e.preventDefault());
            return (
              (e.type = g),
              o ||
                e.isDefaultPrevented() ||
                (f._default && !1 !== f._default.apply(h.pop(), t)) ||
                !Y(r) ||
                (l &&
                  m(r[g]) &&
                  !y(r) &&
                  ((s = r[l]) && (r[l] = null),
                  (T.event.triggered = g),
                  e.isPropagationStopped() && d.addEventListener(g, Tt),
                  r[g](),
                  e.isPropagationStopped() && d.removeEventListener(g, Tt),
                  (T.event.triggered = void 0),
                  s && (r[l] = s))),
              e.result
            );
          }
        },
        simulate: function (e, t, n) {
          var r = T.extend(new T.Event(), n, { type: e, isSimulated: !0 });
          T.event.trigger(r, null, t);
        },
      }),
        T.fn.extend({
          trigger: function (e, t) {
            return this.each(function () {
              T.event.trigger(e, t, this);
            });
          },
          triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return T.event.trigger(e, t, n, !0);
          },
        }),
        v.focusin ||
          T.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            var n = function (e) {
              T.event.simulate(t, e.target, T.event.fix(e));
            };
            T.event.special[t] = {
              setup: function () {
                var r = this.ownerDocument || this.document || this,
                  o = J.access(r, t);
                o || r.addEventListener(e, n, !0), J.access(r, t, (o || 0) + 1);
              },
              teardown: function () {
                var r = this.ownerDocument || this.document || this,
                  o = J.access(r, t) - 1;
                o
                  ? J.access(r, t, o)
                  : (r.removeEventListener(e, n, !0), J.remove(r, t));
              },
            };
          });
      var kt = n.location,
        St = { guid: Date.now() },
        Et = /\?/;
      T.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
          t = new n.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {
          t = void 0;
        }
        return (
          (t && !t.getElementsByTagName("parsererror").length) ||
            T.error("Invalid XML: " + e),
          t
        );
      };
      var _t = /\[\]$/,
        jt = /\r?\n/g,
        At = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;
      function Dt(e, t, n, r) {
        var o;
        if (Array.isArray(t))
          T.each(t, function (t, o) {
            n || _t.test(e)
              ? r(e, o)
              : Dt(
                  e + "[" + ("object" == typeof o && null != o ? t : "") + "]",
                  o,
                  n,
                  r
                );
          });
        else if (n || "object" !== C(t)) r(e, t);
        else for (o in t) Dt(e + "[" + o + "]", t[o], n, r);
      }
      (T.param = function (e, t) {
        var n,
          r = [],
          o = function (e, t) {
            var n = m(t) ? t() : t;
            r[r.length] =
              encodeURIComponent(e) +
              "=" +
              encodeURIComponent(null == n ? "" : n);
          };
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !T.isPlainObject(e)))
          T.each(e, function () {
            o(this.name, this.value);
          });
        else for (n in e) Dt(n, e[n], t, o);
        return r.join("&");
      }),
        T.fn.extend({
          serialize: function () {
            return T.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var e = T.prop(this, "elements");
              return e ? T.makeArray(e) : this;
            })
              .filter(function () {
                var e = this.type;
                return (
                  this.name &&
                  !T(this).is(":disabled") &&
                  Nt.test(this.nodeName) &&
                  !At.test(e) &&
                  (this.checked || !ge.test(e))
                );
              })
              .map(function (e, t) {
                var n = T(this).val();
                return null == n
                  ? null
                  : Array.isArray(n)
                  ? T.map(n, function (e) {
                      return { name: t.name, value: e.replace(jt, "\r\n") };
                    })
                  : { name: t.name, value: n.replace(jt, "\r\n") };
              })
              .get();
          },
        });
      var Ot = /%20/g,
        qt = /#.*$/,
        Lt = /([?&])_=[^&]*/,
        Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        It = /^(?:GET|HEAD)$/,
        Pt = /^\/\//,
        Mt = {},
        Rt = {},
        Ft = "*/".concat("*"),
        Wt = b.createElement("a");
      function Bt(e) {
        return function (t, n) {
          "string" != typeof t && ((n = t), (t = "*"));
          var r,
            o = 0,
            i = t.toLowerCase().match(P) || [];
          if (m(n))
            for (; (r = i[o++]); )
              "+" === r[0]
                ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
                : (e[r] = e[r] || []).push(n);
        };
      }
      function $t(e, t, n, r) {
        var o = {},
          i = e === Rt;
        function a(s) {
          var u;
          return (
            (o[s] = !0),
            T.each(e[s] || [], function (e, s) {
              var l = s(t, n, r);
              return "string" != typeof l || i || o[l]
                ? i
                  ? !(u = l)
                  : void 0
                : (t.dataTypes.unshift(l), a(l), !1);
            }),
            u
          );
        }
        return a(t.dataTypes[0]) || (!o["*"] && a("*"));
      }
      function zt(e, t) {
        var n,
          r,
          o = T.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
        return r && T.extend(!0, e, r), e;
      }
      (Wt.href = kt.href),
        T.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: kt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
              kt.protocol
            ),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": Ft,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript",
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON",
            },
            converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": T.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
          },
          ajaxSetup: function (e, t) {
            return t ? zt(zt(e, T.ajaxSettings), t) : zt(T.ajaxSettings, e);
          },
          ajaxPrefilter: Bt(Mt),
          ajaxTransport: Bt(Rt),
          ajax: function (e, t) {
            "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
            var r,
              o,
              i,
              a,
              s,
              u,
              l,
              c,
              f,
              d,
              p = T.ajaxSetup({}, t),
              h = p.context || p,
              g = p.context && (h.nodeType || h.jquery) ? T(h) : T.event,
              v = T.Deferred(),
              m = T.Callbacks("once memory"),
              y = p.statusCode || {},
              x = {},
              w = {},
              C = "canceled",
              k = {
                readyState: 0,
                getResponseHeader: function (e) {
                  var t;
                  if (l) {
                    if (!a)
                      for (a = {}; (t = Ht.exec(i)); )
                        a[t[1].toLowerCase() + " "] = (
                          a[t[1].toLowerCase() + " "] || []
                        ).concat(t[2]);
                    t = a[e.toLowerCase() + " "];
                  }
                  return null == t ? null : t.join(", ");
                },
                getAllResponseHeaders: function () {
                  return l ? i : null;
                },
                setRequestHeader: function (e, t) {
                  return (
                    null == l &&
                      ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e),
                      (x[e] = t)),
                    this
                  );
                },
                overrideMimeType: function (e) {
                  return null == l && (p.mimeType = e), this;
                },
                statusCode: function (e) {
                  var t;
                  if (e)
                    if (l) k.always(e[k.status]);
                    else for (t in e) y[t] = [y[t], e[t]];
                  return this;
                },
                abort: function (e) {
                  var t = e || C;
                  return r && r.abort(t), S(0, t), this;
                },
              };
            if (
              (v.promise(k),
              (p.url = ((e || p.url || kt.href) + "").replace(
                Pt,
                kt.protocol + "//"
              )),
              (p.type = t.method || t.type || p.method || p.type),
              (p.dataTypes = (p.dataType || "*").toLowerCase().match(P) || [
                "",
              ]),
              null == p.crossDomain)
            ) {
              u = b.createElement("a");
              try {
                (u.href = p.url),
                  (u.href = u.href),
                  (p.crossDomain =
                    Wt.protocol + "//" + Wt.host != u.protocol + "//" + u.host);
              } catch (e) {
                p.crossDomain = !0;
              }
            }
            if (
              (p.data &&
                p.processData &&
                "string" != typeof p.data &&
                (p.data = T.param(p.data, p.traditional)),
              $t(Mt, p, t, k),
              l)
            )
              return k;
            for (f in ((c = T.event && p.global) &&
              0 == T.active++ &&
              T.event.trigger("ajaxStart"),
            (p.type = p.type.toUpperCase()),
            (p.hasContent = !It.test(p.type)),
            (o = p.url.replace(qt, "")),
            p.hasContent
              ? p.data &&
                p.processData &&
                0 ===
                  (p.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                (p.data = p.data.replace(Ot, "+"))
              : ((d = p.url.slice(o.length)),
                p.data &&
                  (p.processData || "string" == typeof p.data) &&
                  ((o += (Et.test(o) ? "&" : "?") + p.data), delete p.data),
                !1 === p.cache &&
                  ((o = o.replace(Lt, "$1")),
                  (d = (Et.test(o) ? "&" : "?") + "_=" + St.guid++ + d)),
                (p.url = o + d)),
            p.ifModified &&
              (T.lastModified[o] &&
                k.setRequestHeader("If-Modified-Since", T.lastModified[o]),
              T.etag[o] && k.setRequestHeader("If-None-Match", T.etag[o])),
            ((p.data && p.hasContent && !1 !== p.contentType) ||
              t.contentType) &&
              k.setRequestHeader("Content-Type", p.contentType),
            k.setRequestHeader(
              "Accept",
              p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                ? p.accepts[p.dataTypes[0]] +
                    ("*" !== p.dataTypes[0] ? ", " + Ft + "; q=0.01" : "")
                : p.accepts["*"]
            ),
            p.headers))
              k.setRequestHeader(f, p.headers[f]);
            if (p.beforeSend && (!1 === p.beforeSend.call(h, k, p) || l))
              return k.abort();
            if (
              ((C = "abort"),
              m.add(p.complete),
              k.done(p.success),
              k.fail(p.error),
              (r = $t(Rt, p, t, k)))
            ) {
              if (((k.readyState = 1), c && g.trigger("ajaxSend", [k, p]), l))
                return k;
              p.async &&
                p.timeout > 0 &&
                (s = n.setTimeout(function () {
                  k.abort("timeout");
                }, p.timeout));
              try {
                (l = !1), r.send(x, S);
              } catch (e) {
                if (l) throw e;
                S(-1, e);
              }
            } else S(-1, "No Transport");
            function S(e, t, a, u) {
              var f,
                d,
                b,
                x,
                w,
                C = t;
              l ||
                ((l = !0),
                s && n.clearTimeout(s),
                (r = void 0),
                (i = u || ""),
                (k.readyState = e > 0 ? 4 : 0),
                (f = (e >= 200 && e < 300) || 304 === e),
                a &&
                  (x = (function (e, t, n) {
                    for (
                      var r, o, i, a, s = e.contents, u = e.dataTypes;
                      "*" === u[0];

                    )
                      u.shift(),
                        void 0 === r &&
                          (r =
                            e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                      for (o in s)
                        if (s[o] && s[o].test(r)) {
                          u.unshift(o);
                          break;
                        }
                    if (u[0] in n) i = u[0];
                    else {
                      for (o in n) {
                        if (!u[0] || e.converters[o + " " + u[0]]) {
                          i = o;
                          break;
                        }
                        a || (a = o);
                      }
                      i = i || a;
                    }
                    if (i) return i !== u[0] && u.unshift(i), n[i];
                  })(p, k, a)),
                !f &&
                  T.inArray("script", p.dataTypes) > -1 &&
                  (p.converters["text script"] = function () {}),
                (x = (function (e, t, n, r) {
                  var o,
                    i,
                    a,
                    s,
                    u,
                    l = {},
                    c = e.dataTypes.slice();
                  if (c[1])
                    for (a in e.converters)
                      l[a.toLowerCase()] = e.converters[a];
                  for (i = c.shift(); i; )
                    if (
                      (e.responseFields[i] && (n[e.responseFields[i]] = t),
                      !u &&
                        r &&
                        e.dataFilter &&
                        (t = e.dataFilter(t, e.dataType)),
                      (u = i),
                      (i = c.shift()))
                    )
                      if ("*" === i) i = u;
                      else if ("*" !== u && u !== i) {
                        if (!(a = l[u + " " + i] || l["* " + i]))
                          for (o in l)
                            if (
                              (s = o.split(" "))[1] === i &&
                              (a = l[u + " " + s[0]] || l["* " + s[0]])
                            ) {
                              !0 === a
                                ? (a = l[o])
                                : !0 !== l[o] && ((i = s[0]), c.unshift(s[1]));
                              break;
                            }
                        if (!0 !== a)
                          if (a && e.throws) t = a(t);
                          else
                            try {
                              t = a(t);
                            } catch (e) {
                              return {
                                state: "parsererror",
                                error: a
                                  ? e
                                  : "No conversion from " + u + " to " + i,
                              };
                            }
                      }
                  return { state: "success", data: t };
                })(p, x, k, f)),
                f
                  ? (p.ifModified &&
                      ((w = k.getResponseHeader("Last-Modified")) &&
                        (T.lastModified[o] = w),
                      (w = k.getResponseHeader("etag")) && (T.etag[o] = w)),
                    204 === e || "HEAD" === p.type
                      ? (C = "nocontent")
                      : 304 === e
                      ? (C = "notmodified")
                      : ((C = x.state), (d = x.data), (f = !(b = x.error))))
                  : ((b = C), (!e && C) || ((C = "error"), e < 0 && (e = 0))),
                (k.status = e),
                (k.statusText = (t || C) + ""),
                f ? v.resolveWith(h, [d, C, k]) : v.rejectWith(h, [k, C, b]),
                k.statusCode(y),
                (y = void 0),
                c &&
                  g.trigger(f ? "ajaxSuccess" : "ajaxError", [k, p, f ? d : b]),
                m.fireWith(h, [k, C]),
                c &&
                  (g.trigger("ajaxComplete", [k, p]),
                  --T.active || T.event.trigger("ajaxStop")));
            }
            return k;
          },
          getJSON: function (e, t, n) {
            return T.get(e, t, n, "json");
          },
          getScript: function (e, t) {
            return T.get(e, void 0, t, "script");
          },
        }),
        T.each(["get", "post"], function (e, t) {
          T[t] = function (e, n, r, o) {
            return (
              m(n) && ((o = o || r), (r = n), (n = void 0)),
              T.ajax(
                T.extend(
                  { url: e, type: t, dataType: o, data: n, success: r },
                  T.isPlainObject(e) && e
                )
              )
            );
          };
        }),
        T.ajaxPrefilter(function (e) {
          var t;
          for (t in e.headers)
            "content-type" === t.toLowerCase() &&
              (e.contentType = e.headers[t] || "");
        }),
        (T._evalUrl = function (e, t, n) {
          return T.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: { "text script": function () {} },
            dataFilter: function (e) {
              T.globalEval(e, t, n);
            },
          });
        }),
        T.fn.extend({
          wrapAll: function (e) {
            var t;
            return (
              this[0] &&
                (m(e) && (e = e.call(this[0])),
                (t = T(e, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function () {
                    for (var e = this; e.firstElementChild; )
                      e = e.firstElementChild;
                    return e;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function (e) {
            return m(e)
              ? this.each(function (t) {
                  T(this).wrapInner(e.call(this, t));
                })
              : this.each(function () {
                  var t = T(this),
                    n = t.contents();
                  n.length ? n.wrapAll(e) : t.append(e);
                });
          },
          wrap: function (e) {
            var t = m(e);
            return this.each(function (n) {
              T(this).wrapAll(t ? e.call(this, n) : e);
            });
          },
          unwrap: function (e) {
            return (
              this.parent(e)
                .not("body")
                .each(function () {
                  T(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (T.expr.pseudos.hidden = function (e) {
          return !T.expr.pseudos.visible(e);
        }),
        (T.expr.pseudos.visible = function (e) {
          return !!(
            e.offsetWidth ||
            e.offsetHeight ||
            e.getClientRects().length
          );
        }),
        (T.ajaxSettings.xhr = function () {
          try {
            return new n.XMLHttpRequest();
          } catch (e) {}
        });
      var Ut = { 0: 200, 1223: 204 },
        Xt = T.ajaxSettings.xhr();
      (v.cors = !!Xt && "withCredentials" in Xt),
        (v.ajax = Xt = !!Xt),
        T.ajaxTransport(function (e) {
          var t, r;
          if (v.cors || (Xt && !e.crossDomain))
            return {
              send: function (o, i) {
                var a,
                  s = e.xhr();
                if (
                  (s.open(e.type, e.url, e.async, e.username, e.password),
                  e.xhrFields)
                )
                  for (a in e.xhrFields) s[a] = e.xhrFields[a];
                for (a in (e.mimeType &&
                  s.overrideMimeType &&
                  s.overrideMimeType(e.mimeType),
                e.crossDomain ||
                  o["X-Requested-With"] ||
                  (o["X-Requested-With"] = "XMLHttpRequest"),
                o))
                  s.setRequestHeader(a, o[a]);
                (t = function (e) {
                  return function () {
                    t &&
                      ((t = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                      "abort" === e
                        ? s.abort()
                        : "error" === e
                        ? "number" != typeof s.status
                          ? i(0, "error")
                          : i(s.status, s.statusText)
                        : i(
                            Ut[s.status] || s.status,
                            s.statusText,
                            "text" !== (s.responseType || "text") ||
                              "string" != typeof s.responseText
                              ? { binary: s.response }
                              : { text: s.responseText },
                            s.getAllResponseHeaders()
                          ));
                  };
                }),
                  (s.onload = t()),
                  (r = s.onerror = s.ontimeout = t("error")),
                  void 0 !== s.onabort
                    ? (s.onabort = r)
                    : (s.onreadystatechange = function () {
                        4 === s.readyState &&
                          n.setTimeout(function () {
                            t && r();
                          });
                      }),
                  (t = t("abort"));
                try {
                  s.send((e.hasContent && e.data) || null);
                } catch (e) {
                  if (t) throw e;
                }
              },
              abort: function () {
                t && t();
              },
            };
        }),
        T.ajaxPrefilter(function (e) {
          e.crossDomain && (e.contents.script = !1);
        }),
        T.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function (e) {
              return T.globalEval(e), e;
            },
          },
        }),
        T.ajaxPrefilter("script", function (e) {
          void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET");
        }),
        T.ajaxTransport("script", function (e) {
          var t, n;
          if (e.crossDomain || e.scriptAttrs)
            return {
              send: function (r, o) {
                (t = T("<script>")
                  .attr(e.scriptAttrs || {})
                  .prop({ charset: e.scriptCharset, src: e.url })
                  .on(
                    "load error",
                    (n = function (e) {
                      t.remove(),
                        (n = null),
                        e && o("error" === e.type ? 404 : 200, e.type);
                    })
                  )),
                  b.head.appendChild(t[0]);
              },
              abort: function () {
                n && n();
              },
            };
        });
      var Vt,
        Gt = [],
        Yt = /(=)\?(?=&|$)|\?\?/;
      T.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var e = Gt.pop() || T.expando + "_" + St.guid++;
          return (this[e] = !0), e;
        },
      }),
        T.ajaxPrefilter("json jsonp", function (e, t, r) {
          var o,
            i,
            a,
            s =
              !1 !== e.jsonp &&
              (Yt.test(e.url)
                ? "url"
                : "string" == typeof e.data &&
                  0 ===
                    (e.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  Yt.test(e.data) &&
                  "data");
          if (s || "jsonp" === e.dataTypes[0])
            return (
              (o = e.jsonpCallback = m(e.jsonpCallback)
                ? e.jsonpCallback()
                : e.jsonpCallback),
              s
                ? (e[s] = e[s].replace(Yt, "$1" + o))
                : !1 !== e.jsonp &&
                  (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
              (e.converters["script json"] = function () {
                return a || T.error(o + " was not called"), a[0];
              }),
              (e.dataTypes[0] = "json"),
              (i = n[o]),
              (n[o] = function () {
                a = arguments;
              }),
              r.always(function () {
                void 0 === i ? T(n).removeProp(o) : (n[o] = i),
                  e[o] && ((e.jsonpCallback = t.jsonpCallback), Gt.push(o)),
                  a && m(i) && i(a[0]),
                  (a = i = void 0);
              }),
              "script"
            );
        }),
        (v.createHTMLDocument =
          (((Vt = b.implementation.createHTMLDocument("").body).innerHTML =
            "<form></form><form></form>"),
          2 === Vt.childNodes.length)),
        (T.parseHTML = function (e, t, n) {
          return "string" != typeof e
            ? []
            : ("boolean" == typeof t && ((n = t), (t = !1)),
              t ||
                (v.createHTMLDocument
                  ? (((r = (t = b.implementation.createHTMLDocument(
                      ""
                    )).createElement("base")).href = b.location.href),
                    t.head.appendChild(r))
                  : (t = b)),
              (i = !n && []),
              (o = N.exec(e))
                ? [t.createElement(o[1])]
                : ((o = Ce([e], t, i)),
                  i && i.length && T(i).remove(),
                  T.merge([], o.childNodes)));
          var r, o, i;
        }),
        (T.fn.load = function (e, t, n) {
          var r,
            o,
            i,
            a = this,
            s = e.indexOf(" ");
          return (
            s > -1 && ((r = yt(e.slice(s))), (e = e.slice(0, s))),
            m(t)
              ? ((n = t), (t = void 0))
              : t && "object" == typeof t && (o = "POST"),
            a.length > 0 &&
              T.ajax({ url: e, type: o || "GET", dataType: "html", data: t })
                .done(function (e) {
                  (i = arguments),
                    a.html(r ? T("<div>").append(T.parseHTML(e)).find(r) : e);
                })
                .always(
                  n &&
                    function (e, t) {
                      a.each(function () {
                        n.apply(this, i || [e.responseText, t, e]);
                      });
                    }
                ),
            this
          );
        }),
        (T.expr.pseudos.animated = function (e) {
          return T.grep(T.timers, function (t) {
            return e === t.elem;
          }).length;
        }),
        (T.offset = {
          setOffset: function (e, t, n) {
            var r,
              o,
              i,
              a,
              s,
              u,
              l = T.css(e, "position"),
              c = T(e),
              f = {};
            "static" === l && (e.style.position = "relative"),
              (s = c.offset()),
              (i = T.css(e, "top")),
              (u = T.css(e, "left")),
              ("absolute" === l || "fixed" === l) &&
              (i + u).indexOf("auto") > -1
                ? ((a = (r = c.position()).top), (o = r.left))
                : ((a = parseFloat(i) || 0), (o = parseFloat(u) || 0)),
              m(t) && (t = t.call(e, n, T.extend({}, s))),
              null != t.top && (f.top = t.top - s.top + a),
              null != t.left && (f.left = t.left - s.left + o),
              "using" in t
                ? t.using.call(e, f)
                : ("number" == typeof f.top && (f.top += "px"),
                  "number" == typeof f.left && (f.left += "px"),
                  c.css(f));
          },
        }),
        T.fn.extend({
          offset: function (e) {
            if (arguments.length)
              return void 0 === e
                ? this
                : this.each(function (t) {
                    T.offset.setOffset(this, e, t);
                  });
            var t,
              n,
              r = this[0];
            return r
              ? r.getClientRects().length
                ? ((t = r.getBoundingClientRect()),
                  (n = r.ownerDocument.defaultView),
                  { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
                : { top: 0, left: 0 }
              : void 0;
          },
          position: function () {
            if (this[0]) {
              var e,
                t,
                n,
                r = this[0],
                o = { top: 0, left: 0 };
              if ("fixed" === T.css(r, "position"))
                t = r.getBoundingClientRect();
              else {
                for (
                  t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement;
                  e &&
                  (e === n.body || e === n.documentElement) &&
                  "static" === T.css(e, "position");

                )
                  e = e.parentNode;
                e &&
                  e !== r &&
                  1 === e.nodeType &&
                  (((o = T(e).offset()).top += T.css(e, "borderTopWidth", !0)),
                  (o.left += T.css(e, "borderLeftWidth", !0)));
              }
              return {
                top: t.top - o.top - T.css(r, "marginTop", !0),
                left: t.left - o.left - T.css(r, "marginLeft", !0),
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var e = this.offsetParent;
                e && "static" === T.css(e, "position");

              )
                e = e.offsetParent;
              return e || ie;
            });
          },
        }),
        T.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function (e, t) {
            var n = "pageYOffset" === t;
            T.fn[e] = function (r) {
              return z(
                this,
                function (e, r, o) {
                  var i;
                  if (
                    (y(e) ? (i = e) : 9 === e.nodeType && (i = e.defaultView),
                    void 0 === o)
                  )
                    return i ? i[t] : e[r];
                  i
                    ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset)
                    : (e[r] = o);
                },
                e,
                r,
                arguments.length
              );
            };
          }
        ),
        T.each(["top", "left"], function (e, t) {
          T.cssHooks[t] = Xe(v.pixelPosition, function (e, n) {
            if (n)
              return (n = Ue(e, t)), We.test(n) ? T(e).position()[t] + "px" : n;
          });
        }),
        T.each({ Height: "height", Width: "width" }, function (e, t) {
          T.each(
            { padding: "inner" + e, content: t, "": "outer" + e },
            function (n, r) {
              T.fn[r] = function (o, i) {
                var a = arguments.length && (n || "boolean" != typeof o),
                  s = n || (!0 === o || !0 === i ? "margin" : "border");
                return z(
                  this,
                  function (t, n, o) {
                    var i;
                    return y(t)
                      ? 0 === r.indexOf("outer")
                        ? t["inner" + e]
                        : t.document.documentElement["client" + e]
                      : 9 === t.nodeType
                      ? ((i = t.documentElement),
                        Math.max(
                          t.body["scroll" + e],
                          i["scroll" + e],
                          t.body["offset" + e],
                          i["offset" + e],
                          i["client" + e]
                        ))
                      : void 0 === o
                      ? T.css(t, n, s)
                      : T.style(t, n, o, s);
                  },
                  t,
                  a ? o : void 0,
                  a
                );
              };
            }
          );
        }),
        T.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend",
          ],
          function (e, t) {
            T.fn[t] = function (e) {
              return this.on(t, e);
            };
          }
        ),
        T.fn.extend({
          bind: function (e, t, n) {
            return this.on(e, null, t, n);
          },
          unbind: function (e, t) {
            return this.off(e, null, t);
          },
          delegate: function (e, t, n, r) {
            return this.on(t, e, n, r);
          },
          undelegate: function (e, t, n) {
            return 1 === arguments.length
              ? this.off(e, "**")
              : this.off(t, e || "**", n);
          },
          hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e);
          },
        }),
        T.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function (e, t) {
            T.fn[t] = function (e, n) {
              return arguments.length > 0
                ? this.on(t, null, e, n)
                : this.trigger(t);
            };
          }
        );
      var Qt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      (T.proxy = function (e, t) {
        var n, r, o;
        if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
          return (
            (r = s.call(arguments, 2)),
            ((o = function () {
              return e.apply(t || this, r.concat(s.call(arguments)));
            }).guid = e.guid = e.guid || T.guid++),
            o
          );
      }),
        (T.holdReady = function (e) {
          e ? T.readyWait++ : T.ready(!0);
        }),
        (T.isArray = Array.isArray),
        (T.parseJSON = JSON.parse),
        (T.nodeName = A),
        (T.isFunction = m),
        (T.isWindow = y),
        (T.camelCase = G),
        (T.type = C),
        (T.now = Date.now),
        (T.isNumeric = function (e) {
          var t = T.type(e);
          return (
            ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
          );
        }),
        (T.trim = function (e) {
          return null == e ? "" : (e + "").replace(Qt, "");
        }),
        void 0 ===
          (r = function () {
            return T;
          }.apply(t, [])) || (e.exports = r);
      var Jt = n.jQuery,
        Kt = n.$;
      return (
        (T.noConflict = function (e) {
          return (
            n.$ === T && (n.$ = Kt), e && n.jQuery === T && (n.jQuery = Jt), T
          );
        }),
        void 0 === o && (n.jQuery = n.$ = T),
        T
      );
    });
  },
  function (e, t, n) {
    var r = n(2),
      o = n(3);
    "string" == typeof (o = o.__esModule ? o.default : o) &&
      (o = [[e.i, o, ""]]);
    var i = { insert: "head", singleton: !1 };
    r(o, i);
    e.exports = o.locals || {};
  },
  function (e, t, n) {
    "use strict";
    var r,
      o = function () {
        return (
          void 0 === r &&
            (r = Boolean(window && document && document.all && !window.atob)),
          r
        );
      },
      i = (function () {
        var e = {};
        return function (t) {
          if (void 0 === e[t]) {
            var n = document.querySelector(t);
            if (
              window.HTMLIFrameElement &&
              n instanceof window.HTMLIFrameElement
            )
              try {
                n = n.contentDocument.head;
              } catch (e) {
                n = null;
              }
            e[t] = n;
          }
          return e[t];
        };
      })(),
      a = [];
    function s(e) {
      for (var t = -1, n = 0; n < a.length; n++)
        if (a[n].identifier === e) {
          t = n;
          break;
        }
      return t;
    }
    function u(e, t) {
      for (var n = {}, r = [], o = 0; o < e.length; o++) {
        var i = e[o],
          u = t.base ? i[0] + t.base : i[0],
          l = n[u] || 0,
          c = "".concat(u, " ").concat(l);
        n[u] = l + 1;
        var f = s(c),
          d = { css: i[1], media: i[2], sourceMap: i[3] };
        -1 !== f
          ? (a[f].references++, a[f].updater(d))
          : a.push({ identifier: c, updater: v(d, t), references: 1 }),
          r.push(c);
      }
      return r;
    }
    function l(e) {
      var t = document.createElement("style"),
        r = e.attributes || {};
      if (void 0 === r.nonce) {
        var o = n.nc;
        o && (r.nonce = o);
      }
      if (
        (Object.keys(r).forEach(function (e) {
          t.setAttribute(e, r[e]);
        }),
        "function" == typeof e.insert)
      )
        e.insert(t);
      else {
        var a = i(e.insert || "head");
        if (!a)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        a.appendChild(t);
      }
      return t;
    }
    var c,
      f =
        ((c = []),
        function (e, t) {
          return (c[e] = t), c.filter(Boolean).join("\n");
        });
    function d(e, t, n, r) {
      var o = n
        ? ""
        : r.media
        ? "@media ".concat(r.media, " {").concat(r.css, "}")
        : r.css;
      if (e.styleSheet) e.styleSheet.cssText = f(t, o);
      else {
        var i = document.createTextNode(o),
          a = e.childNodes;
        a[t] && e.removeChild(a[t]),
          a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
      }
    }
    function p(e, t, n) {
      var r = n.css,
        o = n.media,
        i = n.sourceMap;
      if (
        (o ? e.setAttribute("media", o) : e.removeAttribute("media"),
        i &&
          btoa &&
          (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
            " */"
          )),
        e.styleSheet)
      )
        e.styleSheet.cssText = r;
      else {
        for (; e.firstChild; ) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(r));
      }
    }
    var h = null,
      g = 0;
    function v(e, t) {
      var n, r, o;
      if (t.singleton) {
        var i = g++;
        (n = h || (h = l(t))),
          (r = d.bind(null, n, i, !1)),
          (o = d.bind(null, n, i, !0));
      } else
        (n = l(t)),
          (r = p.bind(null, n, t)),
          (o = function () {
            !(function (e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e);
            })(n);
          });
      return (
        r(e),
        function (t) {
          if (t) {
            if (
              t.css === e.css &&
              t.media === e.media &&
              t.sourceMap === e.sourceMap
            )
              return;
            r((e = t));
          } else o();
        }
      );
    }
    e.exports = function (e, t) {
      (t = t || {}).singleton ||
        "boolean" == typeof t.singleton ||
        (t.singleton = o());
      var n = u((e = e || []), t);
      return function (e) {
        if (
          ((e = e || []),
          "[object Array]" === Object.prototype.toString.call(e))
        ) {
          for (var r = 0; r < n.length; r++) {
            var o = s(n[r]);
            a[o].references--;
          }
          for (var i = u(e, t), l = 0; l < n.length; l++) {
            var c = s(n[l]);
            0 === a[c].references && (a[c].updater(), a.splice(c, 1));
          }
          n = i;
        }
      };
    };
  },
  function (e, t, n) {},
  function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0),
      o = n.n(r);
    n(1);
    o()(document).ready(function () {
      var e = o()(".board24_tab-js");
      o()(".board24_item-js").fadeOut(),
        e.find(".board24_tab-item__title").on("click", function () {
          var e = o()(this).siblings(".board24_item-js");
          e.hasClass("act")
            ? (e.fadeOut().removeClass("act"),
              o()(this)
                .find(".icon-arrow_drop_down")
                .css("transform", "rotate(0deg)"))
            : (e.fadeIn().addClass("act"),
              o()(this)
                .find(".icon-arrow_drop_down")
                .css("transform", "rotate(180deg)"));
        });
      var t = o()(".js-question");
      o()(".js-question-drop").fadeOut(10),
        t.find(".q-js").on("click", function () {
          var e = o()(this).siblings(".js-question-drop");
          e.hasClass("act")
            ? (e.fadeOut().removeClass("act"),
              o()(this).siblings(".icon-arrow_drop_down").css("opacity", "1"))
            : (e.fadeIn().addClass("act"),
              o()(this).siblings(".icon-arrow_drop_down").css("opacity", "0"));
        }),
        o()(".board24_stretch-group-js").on("click", function () {
          o()(this).css("height", "auto");
        });
      var n = o()(".board24_tab-js");
      o()(".board24_inter-4-box1__drop").fadeOut(),
        n.find(".board24_inter-4-box1__title").on("click", function () {
          var e = o()(this).siblings(".board24_inter-4-box1__drop");
          e.hasClass("act")
            ? (e.fadeOut().removeClass("act"),
              o()(this)
                .siblings(".icon-arrow_drop_down")
                .css("transform", "rotate(0deg)"))
            : (e.fadeIn().addClass("act"),
              o()(this)
                .siblings(".icon-arrow_drop_down")
                .css("transform", "rotate(180deg)"));
        });
      var r = o()("#board24_create-meeting1"),
        i = o()("#board24_meet-popup2");
      i.css("display", "none"),
        o()("#board24_meet-popup1").css("display", "none"),
        r.on("click", function () {
          i.fadeIn();
        }),
        i.find(o()(".board24_cross")).on("click", function () {
          i.fadeOut();
        }),
        o()(document).on("mouseup", function (e) {
          s.is(e.target) || 0 !== s.has(e.target).length || i.fadeOut();
        });
      var a = o()("#board24_meet-popup1"),
        s =
          (o()("#board24_meet-popup2").find(o()(".board24_button-blue")),
          a.find(o()(".board24_meet__center")));
      a.find(o()(".board24_cross")).on("click", function () {
        a.fadeOut();
      }),
        o()("#board24_meet-popup2")
          .find(o()(".board24_button-blue"))
          .on("click", function () {
            a.fadeIn(), o()("#board24_meet-popup2").fadeOut();
          }),
        o()(document).on("mouseup", function (e) {
          s.is(e.target) || 0 !== s.has(e.target).length || a.fadeOut();
        }),
        o()("#board24_meet-popup3").fadeOut(),
        o()("#board24_meet-popup2")
          .find(o()(".board24_button-empty"))
          .on("click", function () {
            o()("#board24_meet-popup3").fadeIn(),
              o()("#board24_meet-popup2").fadeOut();
          });
      var u = o()("#board24_meet-popup3").find(o()(".board24_meet__center"));
      o()(document).on("mouseup", function (e) {
        u.is(e.target) ||
          0 !== u.has(e.target).length ||
          o()("#board24_meet-popup3").fadeOut();
      }),
        o()("#board24_meet-popup3")
          .find(o()(".board24_cross"))
          .on("click", function () {
            o()("#board24_meet-popup3").fadeOut();
          });
      var l = o()("#board24_link-meet"),
        c = o()("#board24_person-meet-popup"),
        f = c.find(".board24_popup__body");
      c.fadeOut(),
        l.on("click", function () {
          c.fadeIn();
        }),
        o()(document).on("mouseup", function (e) {
          f.is(e.target) || 0 !== f.has(e.target).length || c.fadeOut();
        }),
        c.find(o()(".board24_cross")).on("click", function () {
          c.fadeOut();
        }),
        o()(".board24_chef__img").on("click", function () {
          var e = o()(this).find(".board24_person");
          o()(this).hasClass("act")
            ? (e.fadeOut(),
              o()(this).removeClass("act"),
              o()(this)
                .parent()
                .css("background-color", "rgba(255, 255, 255, 1)"))
            : (e.fadeIn(200),
              o()(this).addClass("act"),
              o()(this)
                .parent()
                .css("background-color", "rgba(196, 196, 196, 0.3)"));
        });
      var d = o()(".board24_middle-meet-1").find(o()(".board24_column")),
        p = o()(".board24_text1-band-img"),
        h = o()(".board24_text1-band"),
        g = d.width() - 8 + 6,
        v = d.width() / 2 - 4;
      p.css("margin-right", g),
        h.css("margin-left", v),
        o()(window).resize(),
        o()(window).resize(function () {
          var e = o()(".board24_middle-meet-1").find(o()(".board24_column")),
            t = o()(".board24_text1-band-img"),
            n = o()(".board24_text1-band"),
            r = e.width() - 8 + 6,
            i = e.width() / 2 - 4;
          t.css("margin-right", r), n.css("margin-left", i);
        });
      var m = o()(".board24_person-cabinet__body_narrow").find(
          ".board24_person-cabinet__title"
        ),
        y = o()(".board24_person-cabinet__body_wide").find(
          ".board24_person-cabinet__title"
        ),
        b = o()("#board24_drop-narrow"),
        x = o()("#board24_drop-wide");
      b.fadeOut(),
        x.fadeOut(),
        m.on("click", function () {
          var e = o()(this).siblings(x);
          e.hasClass("act")
            ? (e.fadeOut().removeClass("act"),
              o()(this)
                .find(".icon-arrow_drop_down")
                .css("transform", "rotate(0deg)"))
            : (e.fadeIn().addClass("act"),
              o()(this)
                .find(".icon-arrow_drop_down")
                .css("transform", "rotate(180deg)"));
        }),
        y.on("click", function () {
          var e = o()(this).siblings(x);
          e.hasClass("act")
            ? (e.fadeOut().removeClass("act"),
              o()(this)
                .find(".icon-arrow_drop_down")
                .css("transform", "rotate(0deg)"),
              o()(this).parent().css("padding-bottom", "18px"))
            : (e.fadeIn().addClass("act"),
              o()(this)
                .find(".icon-arrow_drop_down")
                .css("transform", "rotate(180deg)"),
              o()(this).parent().css("padding-bottom", "0"));
        });
      var w = o()(".board24_stretsh-meet-1__line_line6");
      o()(".board24_drop").fadeOut();
      var C = o()(".board24_expand"),
        T = o()(".board24_collapse");
      T.fadeOut(),
        w.find(C).on("click", function () {
          o()(this).parent().next().fadeIn(),
            o()(this)
              .parent()
              .css({ "background-color": " #f2f9ff", border: "none" }),
            o()(this).siblings(T).fadeIn(1),
            o()(this).fadeOut(1);
        }),
        w.find(T).on("click", function () {
          o()(this).parent().next().fadeOut(),
            o()(this)
              .parent()
              .css({ "background-color": "#fff", border: "solid 1px #e5e5e5" }),
            o()(this).fadeOut(1),
            o()(this).siblings(C).fadeIn(1);
        });
      var k = o()(".board24_title"),
        S = (o()(".board24_look"), o()(".board24_drop-statistic"));
      S.fadeOut(),
        k.find(".board24_look").on("click", function () {
          o()(this).hasClass("act")
            ? (o()(this).parent().siblings(S).fadeOut(),
              o()(this).removeClass("act"),
              o()(this)
                .parent()
                .siblings(S)
                .find(".board24_drop-sub")
                .fadeOut())
            : (o()(this).parent().siblings(S).fadeIn(),
              o()(this).addClass("act"),
              o()(this)
                .parent()
                .siblings(".board24_del-statistic")
                .css("display", "none"));
        }),
        o()(".board24_load-statistic").fadeOut(),
        o()(".board24_del-statistic").fadeOut(),
        o()(".board24_drop-sub").fadeOut(),
        S.siblings(".board24_load-statistic").on("click", function () {
          o()(this).siblings(S).find(".board24_drop-sub").fadeIn(),
            o()(this).fadeOut(),
            o()(this).siblings(".board24_del-statistic").fadeIn();
        }),
        S.siblings(".board24_del-statistic").on("click", function () {
          o()(this).siblings(".board24_load-statistic").fadeIn(),
            o()(this).css("display", "none"),
            o()(this).siblings(S).find(".board24_drop-sub").fadeOut();
        }),
        o()(".board24_plaha-js").fadeOut(),
        o()(
          ".board24_calendar-table__row-numbers .board24_calendar-table__item"
        ).on("click", function () {
          o()(this).hasClass("act")
            ? (o()(".board24_plaha-js").fadeOut(10),
              o()(this).removeClass("act"))
            : (o()(this).append(o()(".board24_plaha-js")),
              o()(".board24_plaha-js").fadeIn(10),
              o()(this).addClass("act"));
        }),
        o.a.each(o()(".board24_ibg"), function (e, t) {
          o()(this).find("img").length > 0 &&
            o()(this).css(
              "background-image",
              'url("' + o()(this).find("img").attr("src") + '")'
            );
        });
    });
  },
]);
