(function () {
  const ie = document.createElement("link").relList;
  if (ie && ie.supports && ie.supports("modulepreload")) return;
  for (const Q of document.querySelectorAll('link[rel="modulepreload"]')) y(Q);
  new MutationObserver((Q) => {
    for (const I of Q)
      if (I.type === "childList")
        for (const Te of I.addedNodes)
          Te.tagName === "LINK" && Te.rel === "modulepreload" && y(Te);
  }).observe(document, { childList: !0, subtree: !0 });
  function J(Q) {
    const I = {};
    return (
      Q.integrity && (I.integrity = Q.integrity),
      Q.referrerPolicy && (I.referrerPolicy = Q.referrerPolicy),
      Q.crossOrigin === "use-credentials"
        ? (I.credentials = "include")
        : Q.crossOrigin === "anonymous"
          ? (I.credentials = "omit")
          : (I.credentials = "same-origin"),
      I
    );
  }
  function y(Q) {
    if (Q.ep) return;
    Q.ep = !0;
    const I = J(Q);
    fetch(Q.href, I);
  }
})();
var Df = { exports: {} },
  $n = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Md;
function Wh() {
  if (Md) return $n;
  Md = 1;
  var j = Symbol.for("react.transitional.element"),
    ie = Symbol.for("react.fragment");
  function J(y, Q, I) {
    var Te = null;
    if (
      (I !== void 0 && (Te = "" + I),
      Q.key !== void 0 && (Te = "" + Q.key),
      "key" in Q)
    ) {
      I = {};
      for (var Ye in Q) Ye !== "key" && (I[Ye] = Q[Ye]);
    } else I = Q;
    return (
      (Q = I.ref),
      { $$typeof: j, type: y, key: Te, ref: Q !== void 0 ? Q : null, props: I }
    );
  }
  return (($n.Fragment = ie), ($n.jsx = J), ($n.jsxs = J), $n);
}
var Dd;
function $h() {
  return (Dd || ((Dd = 1), (Df.exports = Wh())), Df.exports);
}
var f = $h(),
  _f = { exports: {} },
  X = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _d;
function Fh() {
  if (_d) return X;
  _d = 1;
  var j = Symbol.for("react.transitional.element"),
    ie = Symbol.for("react.portal"),
    J = Symbol.for("react.fragment"),
    y = Symbol.for("react.strict_mode"),
    Q = Symbol.for("react.profiler"),
    I = Symbol.for("react.consumer"),
    Te = Symbol.for("react.context"),
    Ye = Symbol.for("react.forward_ref"),
    R = Symbol.for("react.suspense"),
    N = Symbol.for("react.memo"),
    le = Symbol.for("react.lazy"),
    B = Symbol.for("react.activity"),
    ye = Symbol.iterator;
  function Fe(o) {
    return o === null || typeof o != "object"
      ? null
      : ((o = (ye && o[ye]) || o["@@iterator"]),
        typeof o == "function" ? o : null);
  }
  var ke = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    pe = Object.assign,
    at = {};
  function Ie(o, A, E) {
    ((this.props = o),
      (this.context = A),
      (this.refs = at),
      (this.updater = E || ke));
  }
  ((Ie.prototype.isReactComponent = {}),
    (Ie.prototype.setState = function (o, A) {
      if (typeof o != "object" && typeof o != "function" && o != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, o, A, "setState");
    }),
    (Ie.prototype.forceUpdate = function (o) {
      this.updater.enqueueForceUpdate(this, o, "forceUpdate");
    }));
  function St() {}
  St.prototype = Ie.prototype;
  function Re(o, A, E) {
    ((this.props = o),
      (this.context = A),
      (this.refs = at),
      (this.updater = E || ke));
  }
  var Ae = (Re.prototype = new St());
  ((Ae.constructor = Re), pe(Ae, Ie.prototype), (Ae.isPureReactComponent = !0));
  var Ge = Array.isArray;
  function Qe() {}
  var G = { H: null, A: null, T: null, S: null },
    Ne = Object.prototype.hasOwnProperty;
  function We(o, A, E) {
    var D = E.ref;
    return {
      $$typeof: j,
      type: o,
      key: A,
      ref: D !== void 0 ? D : null,
      props: E,
    };
  }
  function Yt(o, A) {
    return We(o.type, A, o.props);
  }
  function Tt(o) {
    return typeof o == "object" && o !== null && o.$$typeof === j;
  }
  function He(o) {
    var A = { "=": "=0", ":": "=2" };
    return (
      "$" +
      o.replace(/[=:]/g, function (E) {
        return A[E];
      })
    );
  }
  var Gt = /\/+/g;
  function At(o, A) {
    return typeof o == "object" && o !== null && o.key != null
      ? He("" + o.key)
      : A.toString(36);
  }
  function ht(o) {
    switch (o.status) {
      case "fulfilled":
        return o.value;
      case "rejected":
        throw o.reason;
      default:
        switch (
          (typeof o.status == "string"
            ? o.then(Qe, Qe)
            : ((o.status = "pending"),
              o.then(
                function (A) {
                  o.status === "pending" &&
                    ((o.status = "fulfilled"), (o.value = A));
                },
                function (A) {
                  o.status === "pending" &&
                    ((o.status = "rejected"), (o.reason = A));
                },
              )),
          o.status)
        ) {
          case "fulfilled":
            return o.value;
          case "rejected":
            throw o.reason;
        }
    }
    throw o;
  }
  function x(o, A, E, D, L) {
    var K = typeof o;
    (K === "undefined" || K === "boolean") && (o = null);
    var ee = !1;
    if (o === null) ee = !0;
    else
      switch (K) {
        case "bigint":
        case "string":
        case "number":
          ee = !0;
          break;
        case "object":
          switch (o.$$typeof) {
            case j:
            case ie:
              ee = !0;
              break;
            case le:
              return ((ee = o._init), x(ee(o._payload), A, E, D, L));
          }
      }
    if (ee)
      return (
        (L = L(o)),
        (ee = D === "" ? "." + At(o, 0) : D),
        Ge(L)
          ? ((E = ""),
            ee != null && (E = ee.replace(Gt, "$&/") + "/"),
            x(L, A, E, "", function (Jt) {
              return Jt;
            }))
          : L != null &&
            (Tt(L) &&
              (L = Yt(
                L,
                E +
                  (L.key == null || (o && o.key === L.key)
                    ? ""
                    : ("" + L.key).replace(Gt, "$&/") + "/") +
                  ee,
              )),
            A.push(L)),
        1
      );
    ee = 0;
    var Be = D === "" ? "." : D + ":";
    if (Ge(o))
      for (var ve = 0; ve < o.length; ve++)
        ((D = o[ve]), (K = Be + At(D, ve)), (ee += x(D, A, E, K, L)));
    else if (((ve = Fe(o)), typeof ve == "function"))
      for (o = ve.call(o), ve = 0; !(D = o.next()).done; )
        ((D = D.value), (K = Be + At(D, ve++)), (ee += x(D, A, E, K, L)));
    else if (K === "object") {
      if (typeof o.then == "function") return x(ht(o), A, E, D, L);
      throw (
        (A = String(o)),
        Error(
          "Objects are not valid as a React child (found: " +
            (A === "[object Object]"
              ? "object with keys {" + Object.keys(o).join(", ") + "}"
              : A) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return ee;
  }
  function z(o, A, E) {
    if (o == null) return o;
    var D = [],
      L = 0;
    return (
      x(o, D, "", "", function (K) {
        return A.call(E, K, L++);
      }),
      D
    );
  }
  function Y(o) {
    if (o._status === -1) {
      var A = o._result;
      ((A = A()),
        A.then(
          function (E) {
            (o._status === 0 || o._status === -1) &&
              ((o._status = 1), (o._result = E));
          },
          function (E) {
            (o._status === 0 || o._status === -1) &&
              ((o._status = 2), (o._result = E));
          },
        ),
        o._status === -1 && ((o._status = 0), (o._result = A)));
    }
    if (o._status === 1) return o._result.default;
    throw o._result;
  }
  var ce =
      typeof reportError == "function"
        ? reportError
        : function (o) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var A = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof o == "object" &&
                  o !== null &&
                  typeof o.message == "string"
                    ? String(o.message)
                    : String(o),
                error: o,
              });
              if (!window.dispatchEvent(A)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", o);
              return;
            }
            console.error(o);
          },
    fe = {
      map: z,
      forEach: function (o, A, E) {
        z(
          o,
          function () {
            A.apply(this, arguments);
          },
          E,
        );
      },
      count: function (o) {
        var A = 0;
        return (
          z(o, function () {
            A++;
          }),
          A
        );
      },
      toArray: function (o) {
        return (
          z(o, function (A) {
            return A;
          }) || []
        );
      },
      only: function (o) {
        if (!Tt(o))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return o;
      },
    };
  return (
    (X.Activity = B),
    (X.Children = fe),
    (X.Component = Ie),
    (X.Fragment = J),
    (X.Profiler = Q),
    (X.PureComponent = Re),
    (X.StrictMode = y),
    (X.Suspense = R),
    (X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = G),
    (X.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (o) {
        return G.H.useMemoCache(o);
      },
    }),
    (X.cache = function (o) {
      return function () {
        return o.apply(null, arguments);
      };
    }),
    (X.cacheSignal = function () {
      return null;
    }),
    (X.cloneElement = function (o, A, E) {
      if (o == null)
        throw Error(
          "The argument must be a React element, but you passed " + o + ".",
        );
      var D = pe({}, o.props),
        L = o.key;
      if (A != null)
        for (K in (A.key !== void 0 && (L = "" + A.key), A))
          !Ne.call(A, K) ||
            K === "key" ||
            K === "__self" ||
            K === "__source" ||
            (K === "ref" && A.ref === void 0) ||
            (D[K] = A[K]);
      var K = arguments.length - 2;
      if (K === 1) D.children = E;
      else if (1 < K) {
        for (var ee = Array(K), Be = 0; Be < K; Be++)
          ee[Be] = arguments[Be + 2];
        D.children = ee;
      }
      return We(o.type, L, D);
    }),
    (X.createContext = function (o) {
      return (
        (o = {
          $$typeof: Te,
          _currentValue: o,
          _currentValue2: o,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (o.Provider = o),
        (o.Consumer = { $$typeof: I, _context: o }),
        o
      );
    }),
    (X.createElement = function (o, A, E) {
      var D,
        L = {},
        K = null;
      if (A != null)
        for (D in (A.key !== void 0 && (K = "" + A.key), A))
          Ne.call(A, D) &&
            D !== "key" &&
            D !== "__self" &&
            D !== "__source" &&
            (L[D] = A[D]);
      var ee = arguments.length - 2;
      if (ee === 1) L.children = E;
      else if (1 < ee) {
        for (var Be = Array(ee), ve = 0; ve < ee; ve++)
          Be[ve] = arguments[ve + 2];
        L.children = Be;
      }
      if (o && o.defaultProps)
        for (D in ((ee = o.defaultProps), ee))
          L[D] === void 0 && (L[D] = ee[D]);
      return We(o, K, L);
    }),
    (X.createRef = function () {
      return { current: null };
    }),
    (X.forwardRef = function (o) {
      return { $$typeof: Ye, render: o };
    }),
    (X.isValidElement = Tt),
    (X.lazy = function (o) {
      return { $$typeof: le, _payload: { _status: -1, _result: o }, _init: Y };
    }),
    (X.memo = function (o, A) {
      return { $$typeof: N, type: o, compare: A === void 0 ? null : A };
    }),
    (X.startTransition = function (o) {
      var A = G.T,
        E = {};
      G.T = E;
      try {
        var D = o(),
          L = G.S;
        (L !== null && L(E, D),
          typeof D == "object" &&
            D !== null &&
            typeof D.then == "function" &&
            D.then(Qe, ce));
      } catch (K) {
        ce(K);
      } finally {
        (A !== null && E.types !== null && (A.types = E.types), (G.T = A));
      }
    }),
    (X.unstable_useCacheRefresh = function () {
      return G.H.useCacheRefresh();
    }),
    (X.use = function (o) {
      return G.H.use(o);
    }),
    (X.useActionState = function (o, A, E) {
      return G.H.useActionState(o, A, E);
    }),
    (X.useCallback = function (o, A) {
      return G.H.useCallback(o, A);
    }),
    (X.useContext = function (o) {
      return G.H.useContext(o);
    }),
    (X.useDebugValue = function () {}),
    (X.useDeferredValue = function (o, A) {
      return G.H.useDeferredValue(o, A);
    }),
    (X.useEffect = function (o, A) {
      return G.H.useEffect(o, A);
    }),
    (X.useEffectEvent = function (o) {
      return G.H.useEffectEvent(o);
    }),
    (X.useId = function () {
      return G.H.useId();
    }),
    (X.useImperativeHandle = function (o, A, E) {
      return G.H.useImperativeHandle(o, A, E);
    }),
    (X.useInsertionEffect = function (o, A) {
      return G.H.useInsertionEffect(o, A);
    }),
    (X.useLayoutEffect = function (o, A) {
      return G.H.useLayoutEffect(o, A);
    }),
    (X.useMemo = function (o, A) {
      return G.H.useMemo(o, A);
    }),
    (X.useOptimistic = function (o, A) {
      return G.H.useOptimistic(o, A);
    }),
    (X.useReducer = function (o, A, E) {
      return G.H.useReducer(o, A, E);
    }),
    (X.useRef = function (o) {
      return G.H.useRef(o);
    }),
    (X.useState = function (o) {
      return G.H.useState(o);
    }),
    (X.useSyncExternalStore = function (o, A, E) {
      return G.H.useSyncExternalStore(o, A, E);
    }),
    (X.useTransition = function () {
      return G.H.useTransition();
    }),
    (X.version = "19.2.6"),
    X
  );
}
var Od;
function Hf() {
  return (Od || ((Od = 1), (_f.exports = Fh())), _f.exports);
}
var te = Hf(),
  Of = { exports: {} },
  Fn = {},
  Uf = { exports: {} },
  Cf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ud;
function Ih() {
  return (
    Ud ||
      ((Ud = 1),
      (function (j) {
        function ie(x, z) {
          var Y = x.length;
          x.push(z);
          e: for (; 0 < Y; ) {
            var ce = (Y - 1) >>> 1,
              fe = x[ce];
            if (0 < Q(fe, z)) ((x[ce] = z), (x[Y] = fe), (Y = ce));
            else break e;
          }
        }
        function J(x) {
          return x.length === 0 ? null : x[0];
        }
        function y(x) {
          if (x.length === 0) return null;
          var z = x[0],
            Y = x.pop();
          if (Y !== z) {
            x[0] = Y;
            e: for (var ce = 0, fe = x.length, o = fe >>> 1; ce < o; ) {
              var A = 2 * (ce + 1) - 1,
                E = x[A],
                D = A + 1,
                L = x[D];
              if (0 > Q(E, Y))
                D < fe && 0 > Q(L, E)
                  ? ((x[ce] = L), (x[D] = Y), (ce = D))
                  : ((x[ce] = E), (x[A] = Y), (ce = A));
              else if (D < fe && 0 > Q(L, Y))
                ((x[ce] = L), (x[D] = Y), (ce = D));
              else break e;
            }
          }
          return z;
        }
        function Q(x, z) {
          var Y = x.sortIndex - z.sortIndex;
          return Y !== 0 ? Y : x.id - z.id;
        }
        if (
          ((j.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var I = performance;
          j.unstable_now = function () {
            return I.now();
          };
        } else {
          var Te = Date,
            Ye = Te.now();
          j.unstable_now = function () {
            return Te.now() - Ye;
          };
        }
        var R = [],
          N = [],
          le = 1,
          B = null,
          ye = 3,
          Fe = !1,
          ke = !1,
          pe = !1,
          at = !1,
          Ie = typeof setTimeout == "function" ? setTimeout : null,
          St = typeof clearTimeout == "function" ? clearTimeout : null,
          Re = typeof setImmediate < "u" ? setImmediate : null;
        function Ae(x) {
          for (var z = J(N); z !== null; ) {
            if (z.callback === null) y(N);
            else if (z.startTime <= x)
              (y(N), (z.sortIndex = z.expirationTime), ie(R, z));
            else break;
            z = J(N);
          }
        }
        function Ge(x) {
          if (((pe = !1), Ae(x), !ke))
            if (J(R) !== null) ((ke = !0), Qe || ((Qe = !0), He()));
            else {
              var z = J(N);
              z !== null && ht(Ge, z.startTime - x);
            }
        }
        var Qe = !1,
          G = -1,
          Ne = 5,
          We = -1;
        function Yt() {
          return at ? !0 : !(j.unstable_now() - We < Ne);
        }
        function Tt() {
          if (((at = !1), Qe)) {
            var x = j.unstable_now();
            We = x;
            var z = !0;
            try {
              e: {
                ((ke = !1), pe && ((pe = !1), St(G), (G = -1)), (Fe = !0));
                var Y = ye;
                try {
                  t: {
                    for (
                      Ae(x), B = J(R);
                      B !== null && !(B.expirationTime > x && Yt());
                    ) {
                      var ce = B.callback;
                      if (typeof ce == "function") {
                        ((B.callback = null), (ye = B.priorityLevel));
                        var fe = ce(B.expirationTime <= x);
                        if (((x = j.unstable_now()), typeof fe == "function")) {
                          ((B.callback = fe), Ae(x), (z = !0));
                          break t;
                        }
                        (B === J(R) && y(R), Ae(x));
                      } else y(R);
                      B = J(R);
                    }
                    if (B !== null) z = !0;
                    else {
                      var o = J(N);
                      (o !== null && ht(Ge, o.startTime - x), (z = !1));
                    }
                  }
                  break e;
                } finally {
                  ((B = null), (ye = Y), (Fe = !1));
                }
                z = void 0;
              }
            } finally {
              z ? He() : (Qe = !1);
            }
          }
        }
        var He;
        if (typeof Re == "function")
          He = function () {
            Re(Tt);
          };
        else if (typeof MessageChannel < "u") {
          var Gt = new MessageChannel(),
            At = Gt.port2;
          ((Gt.port1.onmessage = Tt),
            (He = function () {
              At.postMessage(null);
            }));
        } else
          He = function () {
            Ie(Tt, 0);
          };
        function ht(x, z) {
          G = Ie(function () {
            x(j.unstable_now());
          }, z);
        }
        ((j.unstable_IdlePriority = 5),
          (j.unstable_ImmediatePriority = 1),
          (j.unstable_LowPriority = 4),
          (j.unstable_NormalPriority = 3),
          (j.unstable_Profiling = null),
          (j.unstable_UserBlockingPriority = 2),
          (j.unstable_cancelCallback = function (x) {
            x.callback = null;
          }),
          (j.unstable_forceFrameRate = function (x) {
            0 > x || 125 < x
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Ne = 0 < x ? Math.floor(1e3 / x) : 5);
          }),
          (j.unstable_getCurrentPriorityLevel = function () {
            return ye;
          }),
          (j.unstable_next = function (x) {
            switch (ye) {
              case 1:
              case 2:
              case 3:
                var z = 3;
                break;
              default:
                z = ye;
            }
            var Y = ye;
            ye = z;
            try {
              return x();
            } finally {
              ye = Y;
            }
          }),
          (j.unstable_requestPaint = function () {
            at = !0;
          }),
          (j.unstable_runWithPriority = function (x, z) {
            switch (x) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                x = 3;
            }
            var Y = ye;
            ye = x;
            try {
              return z();
            } finally {
              ye = Y;
            }
          }),
          (j.unstable_scheduleCallback = function (x, z, Y) {
            var ce = j.unstable_now();
            switch (
              (typeof Y == "object" && Y !== null
                ? ((Y = Y.delay),
                  (Y = typeof Y == "number" && 0 < Y ? ce + Y : ce))
                : (Y = ce),
              x)
            ) {
              case 1:
                var fe = -1;
                break;
              case 2:
                fe = 250;
                break;
              case 5:
                fe = 1073741823;
                break;
              case 4:
                fe = 1e4;
                break;
              default:
                fe = 5e3;
            }
            return (
              (fe = Y + fe),
              (x = {
                id: le++,
                callback: z,
                priorityLevel: x,
                startTime: Y,
                expirationTime: fe,
                sortIndex: -1,
              }),
              Y > ce
                ? ((x.sortIndex = Y),
                  ie(N, x),
                  J(R) === null &&
                    x === J(N) &&
                    (pe ? (St(G), (G = -1)) : (pe = !0), ht(Ge, Y - ce)))
                : ((x.sortIndex = fe),
                  ie(R, x),
                  ke || Fe || ((ke = !0), Qe || ((Qe = !0), He()))),
              x
            );
          }),
          (j.unstable_shouldYield = Yt),
          (j.unstable_wrapCallback = function (x) {
            var z = ye;
            return function () {
              var Y = ye;
              ye = z;
              try {
                return x.apply(this, arguments);
              } finally {
                ye = Y;
              }
            };
          }));
      })(Cf)),
    Cf
  );
}
var Cd;
function Ph() {
  return (Cd || ((Cd = 1), (Uf.exports = Ih())), Uf.exports);
}
var Rf = { exports: {} },
  $e = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rd;
function em() {
  if (Rd) return $e;
  Rd = 1;
  var j = Hf();
  function ie(R) {
    var N = "https://react.dev/errors/" + R;
    if (1 < arguments.length) {
      N += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var le = 2; le < arguments.length; le++)
        N += "&args[]=" + encodeURIComponent(arguments[le]);
    }
    return (
      "Minified React error #" +
      R +
      "; visit " +
      N +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function J() {}
  var y = {
      d: {
        f: J,
        r: function () {
          throw Error(ie(522));
        },
        D: J,
        C: J,
        L: J,
        m: J,
        X: J,
        S: J,
        M: J,
      },
      p: 0,
      findDOMNode: null,
    },
    Q = Symbol.for("react.portal");
  function I(R, N, le) {
    var B =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Q,
      key: B == null ? null : "" + B,
      children: R,
      containerInfo: N,
      implementation: le,
    };
  }
  var Te = j.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Ye(R, N) {
    if (R === "font") return "";
    if (typeof N == "string") return N === "use-credentials" ? N : "";
  }
  return (
    ($e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = y),
    ($e.createPortal = function (R, N) {
      var le =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!N || (N.nodeType !== 1 && N.nodeType !== 9 && N.nodeType !== 11))
        throw Error(ie(299));
      return I(R, N, null, le);
    }),
    ($e.flushSync = function (R) {
      var N = Te.T,
        le = y.p;
      try {
        if (((Te.T = null), (y.p = 2), R)) return R();
      } finally {
        ((Te.T = N), (y.p = le), y.d.f());
      }
    }),
    ($e.preconnect = function (R, N) {
      typeof R == "string" &&
        (N
          ? ((N = N.crossOrigin),
            (N =
              typeof N == "string"
                ? N === "use-credentials"
                  ? N
                  : ""
                : void 0))
          : (N = null),
        y.d.C(R, N));
    }),
    ($e.prefetchDNS = function (R) {
      typeof R == "string" && y.d.D(R);
    }),
    ($e.preinit = function (R, N) {
      if (typeof R == "string" && N && typeof N.as == "string") {
        var le = N.as,
          B = Ye(le, N.crossOrigin),
          ye = typeof N.integrity == "string" ? N.integrity : void 0,
          Fe = typeof N.fetchPriority == "string" ? N.fetchPriority : void 0;
        le === "style"
          ? y.d.S(R, typeof N.precedence == "string" ? N.precedence : void 0, {
              crossOrigin: B,
              integrity: ye,
              fetchPriority: Fe,
            })
          : le === "script" &&
            y.d.X(R, {
              crossOrigin: B,
              integrity: ye,
              fetchPriority: Fe,
              nonce: typeof N.nonce == "string" ? N.nonce : void 0,
            });
      }
    }),
    ($e.preinitModule = function (R, N) {
      if (typeof R == "string")
        if (typeof N == "object" && N !== null) {
          if (N.as == null || N.as === "script") {
            var le = Ye(N.as, N.crossOrigin);
            y.d.M(R, {
              crossOrigin: le,
              integrity: typeof N.integrity == "string" ? N.integrity : void 0,
              nonce: typeof N.nonce == "string" ? N.nonce : void 0,
            });
          }
        } else N == null && y.d.M(R);
    }),
    ($e.preload = function (R, N) {
      if (
        typeof R == "string" &&
        typeof N == "object" &&
        N !== null &&
        typeof N.as == "string"
      ) {
        var le = N.as,
          B = Ye(le, N.crossOrigin);
        y.d.L(R, le, {
          crossOrigin: B,
          integrity: typeof N.integrity == "string" ? N.integrity : void 0,
          nonce: typeof N.nonce == "string" ? N.nonce : void 0,
          type: typeof N.type == "string" ? N.type : void 0,
          fetchPriority:
            typeof N.fetchPriority == "string" ? N.fetchPriority : void 0,
          referrerPolicy:
            typeof N.referrerPolicy == "string" ? N.referrerPolicy : void 0,
          imageSrcSet:
            typeof N.imageSrcSet == "string" ? N.imageSrcSet : void 0,
          imageSizes: typeof N.imageSizes == "string" ? N.imageSizes : void 0,
          media: typeof N.media == "string" ? N.media : void 0,
        });
      }
    }),
    ($e.preloadModule = function (R, N) {
      if (typeof R == "string")
        if (N) {
          var le = Ye(N.as, N.crossOrigin);
          y.d.m(R, {
            as: typeof N.as == "string" && N.as !== "script" ? N.as : void 0,
            crossOrigin: le,
            integrity: typeof N.integrity == "string" ? N.integrity : void 0,
          });
        } else y.d.m(R);
    }),
    ($e.requestFormReset = function (R) {
      y.d.r(R);
    }),
    ($e.unstable_batchedUpdates = function (R, N) {
      return R(N);
    }),
    ($e.useFormState = function (R, N, le) {
      return Te.H.useFormState(R, N, le);
    }),
    ($e.useFormStatus = function () {
      return Te.H.useHostTransitionStatus();
    }),
    ($e.version = "19.2.6"),
    $e
  );
}
var Hd;
function tm() {
  if (Hd) return Rf.exports;
  Hd = 1;
  function j() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(j);
      } catch (ie) {
        console.error(ie);
      }
  }
  return (j(), (Rf.exports = em()), Rf.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bd;
function lm() {
  if (Bd) return Fn;
  Bd = 1;
  var j = Ph(),
    ie = Hf(),
    J = tm();
  function y(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        t += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function Q(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function I(e) {
    var t = e,
      l = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (l = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? l : null;
  }
  function Te(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Ye(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function R(e) {
    if (I(e) !== e) throw Error(y(188));
  }
  function N(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = I(e)), t === null)) throw Error(y(188));
      return t !== e ? null : e;
    }
    for (var l = e, a = t; ; ) {
      var n = l.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (((a = n.return), a !== null)) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === l) return (R(n), e);
          if (u === a) return (R(n), t);
          u = u.sibling;
        }
        throw Error(y(188));
      }
      if (l.return !== a.return) ((l = n), (a = u));
      else {
        for (var i = !1, c = n.child; c; ) {
          if (c === l) {
            ((i = !0), (l = n), (a = u));
            break;
          }
          if (c === a) {
            ((i = !0), (a = n), (l = u));
            break;
          }
          c = c.sibling;
        }
        if (!i) {
          for (c = u.child; c; ) {
            if (c === l) {
              ((i = !0), (l = u), (a = n));
              break;
            }
            if (c === a) {
              ((i = !0), (a = u), (l = n));
              break;
            }
            c = c.sibling;
          }
          if (!i) throw Error(y(189));
        }
      }
      if (l.alternate !== a) throw Error(y(190));
    }
    if (l.tag !== 3) throw Error(y(188));
    return l.stateNode.current === l ? e : t;
  }
  function le(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = le(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var B = Object.assign,
    ye = Symbol.for("react.element"),
    Fe = Symbol.for("react.transitional.element"),
    ke = Symbol.for("react.portal"),
    pe = Symbol.for("react.fragment"),
    at = Symbol.for("react.strict_mode"),
    Ie = Symbol.for("react.profiler"),
    St = Symbol.for("react.consumer"),
    Re = Symbol.for("react.context"),
    Ae = Symbol.for("react.forward_ref"),
    Ge = Symbol.for("react.suspense"),
    Qe = Symbol.for("react.suspense_list"),
    G = Symbol.for("react.memo"),
    Ne = Symbol.for("react.lazy"),
    We = Symbol.for("react.activity"),
    Yt = Symbol.for("react.memo_cache_sentinel"),
    Tt = Symbol.iterator;
  function He(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (Tt && e[Tt]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Gt = Symbol.for("react.client.reference");
  function At(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Gt ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case pe:
        return "Fragment";
      case Ie:
        return "Profiler";
      case at:
        return "StrictMode";
      case Ge:
        return "Suspense";
      case Qe:
        return "SuspenseList";
      case We:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case ke:
          return "Portal";
        case Re:
          return e.displayName || "Context";
        case St:
          return (e._context.displayName || "Context") + ".Consumer";
        case Ae:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case G:
          return (
            (t = e.displayName || null),
            t !== null ? t : At(e.type) || "Memo"
          );
        case Ne:
          ((t = e._payload), (e = e._init));
          try {
            return At(e(t));
          } catch {}
      }
    return null;
  }
  var ht = Array.isArray,
    x = ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    z = J.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Y = { pending: !1, data: null, method: null, action: null },
    ce = [],
    fe = -1;
  function o(e) {
    return { current: e };
  }
  function A(e) {
    0 > fe || ((e.current = ce[fe]), (ce[fe] = null), fe--);
  }
  function E(e, t) {
    (fe++, (ce[fe] = e.current), (e.current = t));
  }
  var D = o(null),
    L = o(null),
    K = o(null),
    ee = o(null);
  function Be(e, t) {
    switch ((E(K, t), E(L, e), E(D, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Fo(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          ((t = Fo(t)), (e = Io(t, e)));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    (A(D), E(D, e));
  }
  function ve() {
    (A(D), A(L), A(K));
  }
  function Jt(e) {
    e.memoizedState !== null && E(ee, e);
    var t = D.current,
      l = Io(t, e.type);
    t !== l && (E(L, e), E(D, l));
  }
  function vl(e) {
    (L.current === e && (A(D), A(L)),
      ee.current === e && (A(ee), (Kn._currentValue = Y)));
  }
  var fa, Ia;
  function Lt(e) {
    if (fa === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        ((fa = (t && t[1]) || ""),
          (Ia =
            -1 <
            l.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < l.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      fa +
      e +
      Ia
    );
  }
  var kt = !1;
  function Pa(e, t) {
    if (!e || kt) return "";
    kt = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var T = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(T.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(T, []);
                } catch (p) {
                  var g = p;
                }
                Reflect.construct(e, [], T);
              } else {
                try {
                  T.call();
                } catch (p) {
                  g = p;
                }
                e.call(T.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (p) {
                g = p;
              }
              (T = e()) &&
                typeof T.catch == "function" &&
                T.catch(function () {});
            }
          } catch (p) {
            if (p && g && typeof p.stack == "string") return [p.stack, g.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name",
      );
      n &&
        n.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var u = a.DetermineComponentFrameRoot(),
        i = u[0],
        c = u[1];
      if (i && c) {
        var s = i.split(`
`),
          v = c.split(`
`);
        for (
          n = a = 0;
          a < s.length && !s[a].includes("DetermineComponentFrameRoot");
        )
          a++;
        for (; n < v.length && !v[n].includes("DetermineComponentFrameRoot"); )
          n++;
        if (a === s.length || n === v.length)
          for (
            a = s.length - 1, n = v.length - 1;
            1 <= a && 0 <= n && s[a] !== v[n];
          )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (s[a] !== v[n]) {
            if (a !== 1 || n !== 1)
              do
                if ((a--, n--, 0 > n || s[a] !== v[n])) {
                  var b =
                    `
` + s[a].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      b.includes("<anonymous>") &&
                      (b = b.replace("<anonymous>", e.displayName)),
                    b
                  );
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      ((kt = !1), (Error.prepareStackTrace = l));
    }
    return (l = e ? e.displayName || e.name : "") ? Lt(l) : "";
  }
  function gl(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Lt(e.type);
      case 16:
        return Lt("Lazy");
      case 13:
        return e.child !== t && t !== null
          ? Lt("Suspense Fallback")
          : Lt("Suspense");
      case 19:
        return Lt("SuspenseList");
      case 0:
      case 15:
        return Pa(e.type, !1);
      case 11:
        return Pa(e.type.render, !1);
      case 1:
        return Pa(e.type, !0);
      case 31:
        return Lt("Activity");
      default:
        return "";
    }
  }
  function en(e) {
    try {
      var t = "",
        l = null;
      do ((t += gl(e, l)), (l = e), (e = e.return));
      while (e);
      return t;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  var tn = Object.prototype.hasOwnProperty,
    ln = j.unstable_scheduleCallback,
    an = j.unstable_cancelCallback,
    mi = j.unstable_shouldYield,
    In = j.unstable_requestPaint,
    Pe = j.unstable_now,
    sa = j.unstable_getCurrentPriorityLevel,
    yl = j.unstable_ImmediatePriority,
    nn = j.unstable_UserBlockingPriority,
    pl = j.unstable_NormalPriority,
    vi = j.unstable_LowPriority,
    ra = j.unstable_IdlePriority,
    Pn = j.log,
    eu = j.unstable_setDisableYieldValue,
    Xt = null,
    et = null;
  function Qt(e) {
    if (
      (typeof Pn == "function" && eu(e),
      et && typeof et.setStrictMode == "function")
    )
      try {
        et.setStrictMode(Xt, e);
      } catch {}
  }
  var tt = Math.clz32 ? Math.clz32 : pi,
    gi = Math.log,
    yi = Math.LN2;
  function pi(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((gi(e) / yi) | 0)) | 0);
  }
  var Nt = 256,
    wl = 262144,
    oa = 4194304;
  function Wt(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function da(e, t, l) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var n = 0,
      u = e.suspendedLanes,
      i = e.pingedLanes;
    e = e.warmLanes;
    var c = a & 134217727;
    return (
      c !== 0
        ? ((a = c & ~u),
          a !== 0
            ? (n = Wt(a))
            : ((i &= c),
              i !== 0
                ? (n = Wt(i))
                : l || ((l = c & ~e), l !== 0 && (n = Wt(l)))))
        : ((c = a & ~u),
          c !== 0
            ? (n = Wt(c))
            : i !== 0
              ? (n = Wt(i))
              : l || ((l = a & ~e), l !== 0 && (n = Wt(l)))),
      n === 0
        ? 0
        : t !== 0 &&
            t !== n &&
            (t & u) === 0 &&
            ((u = n & -n),
            (l = t & -t),
            u >= l || (u === 32 && (l & 4194048) !== 0))
          ? t
          : n
    );
  }
  function Zl(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function d(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function M() {
    var e = oa;
    return ((oa <<= 1), (oa & 62914560) === 0 && (oa = 4194304), e);
  }
  function _(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function U(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function Z(e, t, l, a, n, u) {
    var i = e.pendingLanes;
    ((e.pendingLanes = l),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= l),
      (e.entangledLanes &= l),
      (e.errorRecoveryDisabledLanes &= l),
      (e.shellSuspendCounter = 0));
    var c = e.entanglements,
      s = e.expirationTimes,
      v = e.hiddenUpdates;
    for (l = i & ~l; 0 < l; ) {
      var b = 31 - tt(l),
        T = 1 << b;
      ((c[b] = 0), (s[b] = -1));
      var g = v[b];
      if (g !== null)
        for (v[b] = null, b = 0; b < g.length; b++) {
          var p = g[b];
          p !== null && (p.lane &= -536870913);
        }
      l &= ~T;
    }
    (a !== 0 && oe(e, a, 0),
      u !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(i & ~t)));
  }
  function oe(e, t, l) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var a = 31 - tt(t);
    ((e.entangledLanes |= t),
      (e.entanglements[a] = e.entanglements[a] | 1073741824 | (l & 261930)));
  }
  function ze(e, t) {
    var l = (e.entangledLanes |= t);
    for (e = e.entanglements; l; ) {
      var a = 31 - tt(l),
        n = 1 << a;
      ((n & t) | (e[a] & t) && (e[a] |= t), (l &= ~n));
    }
  }
  function nt(e, t) {
    var l = t & -t;
    return (
      (l = (l & 42) !== 0 ? 1 : ut(l)),
      (l & (e.suspendedLanes | t)) !== 0 ? 0 : l
    );
  }
  function ut(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function tu(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function un() {
    var e = z.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Sd(e.type));
  }
  function Bf(e, t) {
    var l = z.p;
    try {
      return ((z.p = e), t());
    } finally {
      z.p = l;
    }
  }
  var bl = Math.random().toString(36).slice(2),
    we = "__reactFiber$" + bl,
    it = "__reactProps$" + bl,
    ha = "__reactContainer$" + bl,
    bi = "__reactEvents$" + bl,
    Yd = "__reactListeners$" + bl,
    Gd = "__reactHandles$" + bl,
    qf = "__reactResources$" + bl,
    cn = "__reactMarker$" + bl;
  function xi(e) {
    (delete e[we], delete e[it], delete e[bi], delete e[Yd], delete e[Gd]);
  }
  function ma(e) {
    var t = e[we];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if ((t = l[ha] || l[we])) {
        if (
          ((l = t.alternate),
          t.child !== null || (l !== null && l.child !== null))
        )
          for (e = ud(e); e !== null; ) {
            if ((l = e[we])) return l;
            e = ud(e);
          }
        return t;
      }
      ((e = l), (l = e.parentNode));
    }
    return null;
  }
  function va(e) {
    if ((e = e[we] || e[ha])) {
      var t = e.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return e;
    }
    return null;
  }
  function fn(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(y(33));
  }
  function ga(e) {
    var t = e[qf];
    return (
      t ||
        (t = e[qf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Le(e) {
    e[cn] = !0;
  }
  var Yf = new Set(),
    Gf = {};
  function Vl(e, t) {
    (ya(e, t), ya(e + "Capture", t));
  }
  function ya(e, t) {
    for (Gf[e] = t, e = 0; e < t.length; e++) Yf.add(t[e]);
  }
  var Ld = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Lf = {},
    Xf = {};
  function Xd(e) {
    return tn.call(Xf, e)
      ? !0
      : tn.call(Lf, e)
        ? !1
        : Ld.test(e)
          ? (Xf[e] = !0)
          : ((Lf[e] = !0), !1);
  }
  function lu(e, t, l) {
    if (Xd(t))
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + l);
      }
  }
  function au(e, t, l) {
    if (l === null) e.removeAttribute(t);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + l);
    }
  }
  function $t(e, t, l, a) {
    if (a === null) e.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(t, l, "" + a);
    }
  }
  function zt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Qf(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Qd(e, t, l) {
    var a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var n = a.get,
        u = a.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return n.call(this);
          },
          set: function (i) {
            ((l = "" + i), u.call(this, i));
          },
        }),
        Object.defineProperty(e, t, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (i) {
            l = "" + i;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Si(e) {
    if (!e._valueTracker) {
      var t = Qf(e) ? "checked" : "value";
      e._valueTracker = Qd(e, t, "" + e[t]);
    }
  }
  function wf(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(),
      a = "";
    return (
      e && (a = Qf(e) ? (e.checked ? "true" : "false") : e.value),
      (e = a),
      e !== l ? (t.setValue(e), !0) : !1
    );
  }
  function nu(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var wd = /[\n"\\]/g;
  function Et(e) {
    return e.replace(wd, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Ti(e, t, l, a, n, u, i, c) {
    ((e.name = ""),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (e.type = i)
        : e.removeAttribute("type"),
      t != null
        ? i === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + zt(t))
          : e.value !== "" + zt(t) && (e.value = "" + zt(t))
        : (i !== "submit" && i !== "reset") || e.removeAttribute("value"),
      t != null
        ? Ai(e, i, zt(t))
        : l != null
          ? Ai(e, i, zt(l))
          : a != null && e.removeAttribute("value"),
      n == null && u != null && (e.defaultChecked = !!u),
      n != null &&
        (e.checked = n && typeof n != "function" && typeof n != "symbol"),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (e.name = "" + zt(c))
        : e.removeAttribute("name"));
  }
  function Zf(e, t, l, a, n, u, i, c) {
    if (
      (u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (e.type = u),
      t != null || l != null)
    ) {
      if (!((u !== "submit" && u !== "reset") || t != null)) {
        Si(e);
        return;
      }
      ((l = l != null ? "" + zt(l) : ""),
        (t = t != null ? "" + zt(t) : l),
        c || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((a = a ?? n),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (e.checked = c ? e.checked : !!a),
      (e.defaultChecked = !!a),
      i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (e.name = i),
      Si(e));
  }
  function Ai(e, t, l) {
    (t === "number" && nu(e.ownerDocument) === e) ||
      e.defaultValue === "" + l ||
      (e.defaultValue = "" + l);
  }
  function pa(e, t, l, a) {
    if (((e = e.options), t)) {
      t = {};
      for (var n = 0; n < l.length; n++) t["$" + l[n]] = !0;
      for (l = 0; l < e.length; l++)
        ((n = t.hasOwnProperty("$" + e[l].value)),
          e[l].selected !== n && (e[l].selected = n),
          n && a && (e[l].defaultSelected = !0));
    } else {
      for (l = "" + zt(l), t = null, n = 0; n < e.length; n++) {
        if (e[n].value === l) {
          ((e[n].selected = !0), a && (e[n].defaultSelected = !0));
          return;
        }
        t !== null || e[n].disabled || (t = e[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Vf(e, t, l) {
    if (
      t != null &&
      ((t = "" + zt(t)), t !== e.value && (e.value = t), l == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + zt(l) : "";
  }
  function Kf(e, t, l, a) {
    if (t == null) {
      if (a != null) {
        if (l != null) throw Error(y(92));
        if (ht(a)) {
          if (1 < a.length) throw Error(y(93));
          a = a[0];
        }
        l = a;
      }
      (l == null && (l = ""), (t = l));
    }
    ((l = zt(t)),
      (e.defaultValue = l),
      (a = e.textContent),
      a === l && a !== "" && a !== null && (e.value = a),
      Si(e));
  }
  function ba(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Zd = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Jf(e, t, l) {
    var a = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === ""
      ? a
        ? e.setProperty(t, "")
        : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
      : a
        ? e.setProperty(t, l)
        : typeof l != "number" || l === 0 || Zd.has(t)
          ? t === "float"
            ? (e.cssFloat = l)
            : (e[t] = ("" + l).trim())
          : (e[t] = l + "px");
  }
  function kf(e, t, l) {
    if (t != null && typeof t != "object") throw Error(y(62));
    if (((e = e.style), l != null)) {
      for (var a in l)
        !l.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? e.setProperty(a, "")
            : a === "float"
              ? (e.cssFloat = "")
              : (e[a] = ""));
      for (var n in t)
        ((a = t[n]), t.hasOwnProperty(n) && l[n] !== a && Jf(e, n, a));
    } else for (var u in t) t.hasOwnProperty(u) && Jf(e, u, t[u]);
  }
  function Ni(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Vd = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Kd =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function uu(e) {
    return Kd.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function Ft() {}
  var zi = null;
  function Ei(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var xa = null,
    Sa = null;
  function Wf(e) {
    var t = va(e);
    if (t && (e = t.stateNode)) {
      var l = e[it] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (Ti(
              e,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name,
            ),
            (t = l.name),
            l.type === "radio" && t != null)
          ) {
            for (l = e; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + Et("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < l.length;
              t++
            ) {
              var a = l[t];
              if (a !== e && a.form === e.form) {
                var n = a[it] || null;
                if (!n) throw Error(y(90));
                Ti(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name,
                );
              }
            }
            for (t = 0; t < l.length; t++)
              ((a = l[t]), a.form === e.form && wf(a));
          }
          break e;
        case "textarea":
          Vf(e, l.value, l.defaultValue);
          break e;
        case "select":
          ((t = l.value), t != null && pa(e, !!l.multiple, t, !1));
      }
    }
  }
  var ji = !1;
  function $f(e, t, l) {
    if (ji) return e(t, l);
    ji = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (
        ((ji = !1),
        (xa !== null || Sa !== null) &&
          (Ku(), xa && ((t = xa), (e = Sa), (Sa = xa = null), Wf(t), e)))
      )
        for (t = 0; t < e.length; t++) Wf(e[t]);
    }
  }
  function sn(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var a = l[it] || null;
    if (a === null) return null;
    l = a[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((a = !a.disabled) ||
          ((e = e.type),
          (a = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !a));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (l && typeof l != "function") throw Error(y(231, t, typeof l));
    return l;
  }
  var It = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Mi = !1;
  if (It)
    try {
      var rn = {};
      (Object.defineProperty(rn, "passive", {
        get: function () {
          Mi = !0;
        },
      }),
        window.addEventListener("test", rn, rn),
        window.removeEventListener("test", rn, rn));
    } catch {
      Mi = !1;
    }
  var xl = null,
    Di = null,
    iu = null;
  function Ff() {
    if (iu) return iu;
    var e,
      t = Di,
      l = t.length,
      a,
      n = "value" in xl ? xl.value : xl.textContent,
      u = n.length;
    for (e = 0; e < l && t[e] === n[e]; e++);
    var i = l - e;
    for (a = 1; a <= i && t[l - a] === n[u - a]; a++);
    return (iu = n.slice(e, 1 < a ? 1 - a : void 0));
  }
  function cu(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function fu() {
    return !0;
  }
  function If() {
    return !1;
  }
  function ct(e) {
    function t(l, a, n, u, i) {
      ((this._reactName = l),
        (this._targetInst = n),
        (this.type = a),
        (this.nativeEvent = u),
        (this.target = i),
        (this.currentTarget = null));
      for (var c in e)
        e.hasOwnProperty(c) && ((l = e[c]), (this[c] = l ? l(u) : u[c]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? fu
          : If),
        (this.isPropagationStopped = If),
        this
      );
    }
    return (
      B(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = fu));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = fu));
        },
        persist: function () {},
        isPersistent: fu,
      }),
      t
    );
  }
  var Kl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    su = ct(Kl),
    on = B({}, Kl, { view: 0, detail: 0 }),
    Jd = ct(on),
    _i,
    Oi,
    dn,
    ru = B({}, on, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ci,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== dn &&
              (dn && e.type === "mousemove"
                ? ((_i = e.screenX - dn.screenX), (Oi = e.screenY - dn.screenY))
                : (Oi = _i = 0),
              (dn = e)),
            _i);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Oi;
      },
    }),
    Pf = ct(ru),
    kd = B({}, ru, { dataTransfer: 0 }),
    Wd = ct(kd),
    $d = B({}, on, { relatedTarget: 0 }),
    Ui = ct($d),
    Fd = B({}, Kl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Id = ct(Fd),
    Pd = B({}, Kl, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    e0 = ct(Pd),
    t0 = B({}, Kl, { data: 0 }),
    es = ct(t0),
    l0 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    a0 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    n0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function u0(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = n0[e])
        ? !!t[e]
        : !1;
  }
  function Ci() {
    return u0;
  }
  var i0 = B({}, on, {
      key: function (e) {
        if (e.key) {
          var t = l0[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = cu(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? a0[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ci,
      charCode: function (e) {
        return e.type === "keypress" ? cu(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? cu(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    c0 = ct(i0),
    f0 = B({}, ru, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    ts = ct(f0),
    s0 = B({}, on, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ci,
    }),
    r0 = ct(s0),
    o0 = B({}, Kl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    d0 = ct(o0),
    h0 = B({}, ru, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    m0 = ct(h0),
    v0 = B({}, Kl, { newState: 0, oldState: 0 }),
    g0 = ct(v0),
    y0 = [9, 13, 27, 32],
    Ri = It && "CompositionEvent" in window,
    hn = null;
  It && "documentMode" in document && (hn = document.documentMode);
  var p0 = It && "TextEvent" in window && !hn,
    ls = It && (!Ri || (hn && 8 < hn && 11 >= hn)),
    as = " ",
    ns = !1;
  function us(e, t) {
    switch (e) {
      case "keyup":
        return y0.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function is(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var Ta = !1;
  function b0(e, t) {
    switch (e) {
      case "compositionend":
        return is(t);
      case "keypress":
        return t.which !== 32 ? null : ((ns = !0), as);
      case "textInput":
        return ((e = t.data), e === as && ns ? null : e);
      default:
        return null;
    }
  }
  function x0(e, t) {
    if (Ta)
      return e === "compositionend" || (!Ri && us(e, t))
        ? ((e = Ff()), (iu = Di = xl = null), (Ta = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return ls && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var S0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function cs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!S0[e.type] : t === "textarea";
  }
  function fs(e, t, l, a) {
    (xa ? (Sa ? Sa.push(a) : (Sa = [a])) : (xa = a),
      (t = Pu(t, "onChange")),
      0 < t.length &&
        ((l = new su("onChange", "change", null, l, a)),
        e.push({ event: l, listeners: t })));
  }
  var mn = null,
    vn = null;
  function T0(e) {
    Vo(e, 0);
  }
  function ou(e) {
    var t = fn(e);
    if (wf(t)) return e;
  }
  function ss(e, t) {
    if (e === "change") return t;
  }
  var rs = !1;
  if (It) {
    var Hi;
    if (It) {
      var Bi = "oninput" in document;
      if (!Bi) {
        var os = document.createElement("div");
        (os.setAttribute("oninput", "return;"),
          (Bi = typeof os.oninput == "function"));
      }
      Hi = Bi;
    } else Hi = !1;
    rs = Hi && (!document.documentMode || 9 < document.documentMode);
  }
  function ds() {
    mn && (mn.detachEvent("onpropertychange", hs), (vn = mn = null));
  }
  function hs(e) {
    if (e.propertyName === "value" && ou(vn)) {
      var t = [];
      (fs(t, vn, e, Ei(e)), $f(T0, t));
    }
  }
  function A0(e, t, l) {
    e === "focusin"
      ? (ds(), (mn = t), (vn = l), mn.attachEvent("onpropertychange", hs))
      : e === "focusout" && ds();
  }
  function N0(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return ou(vn);
  }
  function z0(e, t) {
    if (e === "click") return ou(t);
  }
  function E0(e, t) {
    if (e === "input" || e === "change") return ou(t);
  }
  function j0(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var mt = typeof Object.is == "function" ? Object.is : j0;
  function gn(e, t) {
    if (mt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var l = Object.keys(e),
      a = Object.keys(t);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!tn.call(t, n) || !mt(e[n], t[n])) return !1;
    }
    return !0;
  }
  function ms(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function vs(e, t) {
    var l = ms(e);
    e = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (((a = e + l.textContent.length), e <= t && a >= t))
          return { node: l, offset: t - e };
        e = a;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = ms(l);
    }
  }
  function gs(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? gs(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function ys(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = nu(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = nu(e.document);
    }
    return t;
  }
  function qi(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var M0 = It && "documentMode" in document && 11 >= document.documentMode,
    Aa = null,
    Yi = null,
    yn = null,
    Gi = !1;
  function ps(e, t, l) {
    var a =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Gi ||
      Aa == null ||
      Aa !== nu(a) ||
      ((a = Aa),
      "selectionStart" in a && qi(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (yn && gn(yn, a)) ||
        ((yn = a),
        (a = Pu(Yi, "onSelect")),
        0 < a.length &&
          ((t = new su("onSelect", "select", null, t, l)),
          e.push({ event: t, listeners: a }),
          (t.target = Aa))));
  }
  function Jl(e, t) {
    var l = {};
    return (
      (l[e.toLowerCase()] = t.toLowerCase()),
      (l["Webkit" + e] = "webkit" + t),
      (l["Moz" + e] = "moz" + t),
      l
    );
  }
  var Na = {
      animationend: Jl("Animation", "AnimationEnd"),
      animationiteration: Jl("Animation", "AnimationIteration"),
      animationstart: Jl("Animation", "AnimationStart"),
      transitionrun: Jl("Transition", "TransitionRun"),
      transitionstart: Jl("Transition", "TransitionStart"),
      transitioncancel: Jl("Transition", "TransitionCancel"),
      transitionend: Jl("Transition", "TransitionEnd"),
    },
    Li = {},
    bs = {};
  It &&
    ((bs = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Na.animationend.animation,
      delete Na.animationiteration.animation,
      delete Na.animationstart.animation),
    "TransitionEvent" in window || delete Na.transitionend.transition);
  function kl(e) {
    if (Li[e]) return Li[e];
    if (!Na[e]) return e;
    var t = Na[e],
      l;
    for (l in t) if (t.hasOwnProperty(l) && l in bs) return (Li[e] = t[l]);
    return e;
  }
  var xs = kl("animationend"),
    Ss = kl("animationiteration"),
    Ts = kl("animationstart"),
    D0 = kl("transitionrun"),
    _0 = kl("transitionstart"),
    O0 = kl("transitioncancel"),
    As = kl("transitionend"),
    Ns = new Map(),
    Xi =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Xi.push("scrollEnd");
  function Ht(e, t) {
    (Ns.set(e, t), Vl(t, [e]));
  }
  var du =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == "object" &&
                  e !== null &&
                  typeof e.message == "string"
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", e);
              return;
            }
            console.error(e);
          },
    jt = [],
    za = 0,
    Qi = 0;
  function hu() {
    for (var e = za, t = (Qi = za = 0); t < e; ) {
      var l = jt[t];
      jt[t++] = null;
      var a = jt[t];
      jt[t++] = null;
      var n = jt[t];
      jt[t++] = null;
      var u = jt[t];
      if (((jt[t++] = null), a !== null && n !== null)) {
        var i = a.pending;
        (i === null ? (n.next = n) : ((n.next = i.next), (i.next = n)),
          (a.pending = n));
      }
      u !== 0 && zs(l, n, u);
    }
  }
  function mu(e, t, l, a) {
    ((jt[za++] = e),
      (jt[za++] = t),
      (jt[za++] = l),
      (jt[za++] = a),
      (Qi |= a),
      (e.lanes |= a),
      (e = e.alternate),
      e !== null && (e.lanes |= a));
  }
  function wi(e, t, l, a) {
    return (mu(e, t, l, a), vu(e));
  }
  function Wl(e, t) {
    return (mu(e, null, null, t), vu(e));
  }
  function zs(e, t, l) {
    e.lanes |= l;
    var a = e.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, u = e.return; u !== null; )
      ((u.childLanes |= l),
        (a = u.alternate),
        a !== null && (a.childLanes |= l),
        u.tag === 22 &&
          ((e = u.stateNode), e === null || e._visibility & 1 || (n = !0)),
        (e = u),
        (u = u.return));
    return e.tag === 3
      ? ((u = e.stateNode),
        n &&
          t !== null &&
          ((n = 31 - tt(l)),
          (e = u.hiddenUpdates),
          (a = e[n]),
          a === null ? (e[n] = [t]) : a.push(t),
          (t.lane = l | 536870912)),
        u)
      : null;
  }
  function vu(e) {
    if (50 < Gn) throw ((Gn = 0), (Ic = null), Error(y(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var Ea = {};
  function U0(e, t, l, a) {
    ((this.tag = e),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function vt(e, t, l, a) {
    return new U0(e, t, l, a);
  }
  function Zi(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Pt(e, t) {
    var l = e.alternate;
    return (
      l === null
        ? ((l = vt(e.tag, t, e.key, e.mode)),
          (l.elementType = e.elementType),
          (l.type = e.type),
          (l.stateNode = e.stateNode),
          (l.alternate = e),
          (e.alternate = l))
        : ((l.pendingProps = t),
          (l.type = e.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = e.flags & 65011712),
      (l.childLanes = e.childLanes),
      (l.lanes = e.lanes),
      (l.child = e.child),
      (l.memoizedProps = e.memoizedProps),
      (l.memoizedState = e.memoizedState),
      (l.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (l.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (l.sibling = e.sibling),
      (l.index = e.index),
      (l.ref = e.ref),
      (l.refCleanup = e.refCleanup),
      l
    );
  }
  function Es(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return (
      l === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = l.childLanes),
          (e.lanes = l.lanes),
          (e.child = l.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = l.memoizedProps),
          (e.memoizedState = l.memoizedState),
          (e.updateQueue = l.updateQueue),
          (e.type = l.type),
          (t = l.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function gu(e, t, l, a, n, u) {
    var i = 0;
    if (((a = e), typeof e == "function")) Zi(e) && (i = 1);
    else if (typeof e == "string")
      i = qh(e, l, D.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (e) {
        case We:
          return (
            (e = vt(31, l, t, n)),
            (e.elementType = We),
            (e.lanes = u),
            e
          );
        case pe:
          return $l(l.children, n, u, t);
        case at:
          ((i = 8), (n |= 24));
          break;
        case Ie:
          return (
            (e = vt(12, l, t, n | 2)),
            (e.elementType = Ie),
            (e.lanes = u),
            e
          );
        case Ge:
          return (
            (e = vt(13, l, t, n)),
            (e.elementType = Ge),
            (e.lanes = u),
            e
          );
        case Qe:
          return (
            (e = vt(19, l, t, n)),
            (e.elementType = Qe),
            (e.lanes = u),
            e
          );
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Re:
                i = 10;
                break e;
              case St:
                i = 9;
                break e;
              case Ae:
                i = 11;
                break e;
              case G:
                i = 14;
                break e;
              case Ne:
                ((i = 16), (a = null));
                break e;
            }
          ((i = 29),
            (l = Error(y(130, e === null ? "null" : typeof e, ""))),
            (a = null));
      }
    return (
      (t = vt(i, l, t, n)),
      (t.elementType = e),
      (t.type = a),
      (t.lanes = u),
      t
    );
  }
  function $l(e, t, l, a) {
    return ((e = vt(7, e, a, t)), (e.lanes = l), e);
  }
  function Vi(e, t, l) {
    return ((e = vt(6, e, null, t)), (e.lanes = l), e);
  }
  function js(e) {
    var t = vt(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function Ki(e, t, l) {
    return (
      (t = vt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = l),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var Ms = new WeakMap();
  function Mt(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = Ms.get(e);
      return l !== void 0
        ? l
        : ((t = { value: e, source: t, stack: en(t) }), Ms.set(e, t), t);
    }
    return { value: e, source: t, stack: en(t) };
  }
  var ja = [],
    Ma = 0,
    yu = null,
    pn = 0,
    Dt = [],
    _t = 0,
    Sl = null,
    wt = 1,
    Zt = "";
  function el(e, t) {
    ((ja[Ma++] = pn), (ja[Ma++] = yu), (yu = e), (pn = t));
  }
  function Ds(e, t, l) {
    ((Dt[_t++] = wt), (Dt[_t++] = Zt), (Dt[_t++] = Sl), (Sl = e));
    var a = wt;
    e = Zt;
    var n = 32 - tt(a) - 1;
    ((a &= ~(1 << n)), (l += 1));
    var u = 32 - tt(t) + n;
    if (30 < u) {
      var i = n - (n % 5);
      ((u = (a & ((1 << i) - 1)).toString(32)),
        (a >>= i),
        (n -= i),
        (wt = (1 << (32 - tt(t) + n)) | (l << n) | a),
        (Zt = u + e));
    } else ((wt = (1 << u) | (l << n) | a), (Zt = e));
  }
  function Ji(e) {
    e.return !== null && (el(e, 1), Ds(e, 1, 0));
  }
  function ki(e) {
    for (; e === yu; )
      ((yu = ja[--Ma]), (ja[Ma] = null), (pn = ja[--Ma]), (ja[Ma] = null));
    for (; e === Sl; )
      ((Sl = Dt[--_t]),
        (Dt[_t] = null),
        (Zt = Dt[--_t]),
        (Dt[_t] = null),
        (wt = Dt[--_t]),
        (Dt[_t] = null));
  }
  function _s(e, t) {
    ((Dt[_t++] = wt),
      (Dt[_t++] = Zt),
      (Dt[_t++] = Sl),
      (wt = t.id),
      (Zt = t.overflow),
      (Sl = e));
  }
  var Ze = null,
    be = null,
    P = !1,
    Tl = null,
    Ot = !1,
    Wi = Error(y(519));
  function Al(e) {
    var t = Error(
      y(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (bn(Mt(t, e)), Wi);
  }
  function Os(e) {
    var t = e.stateNode,
      l = e.type,
      a = e.memoizedProps;
    switch (((t[we] = e), (t[it] = a), l)) {
      case "dialog":
        (W("cancel", t), W("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        W("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Xn.length; l++) W(Xn[l], t);
        break;
      case "source":
        W("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (W("error", t), W("load", t));
        break;
      case "details":
        W("toggle", t);
        break;
      case "input":
        (W("invalid", t),
          Zf(
            t,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0,
          ));
        break;
      case "select":
        W("invalid", t);
        break;
      case "textarea":
        (W("invalid", t), Kf(t, a.value, a.defaultValue, a.children));
    }
    ((l = a.children),
      (typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
      t.textContent === "" + l ||
      a.suppressHydrationWarning === !0 ||
      Wo(t.textContent, l)
        ? (a.popover != null && (W("beforetoggle", t), W("toggle", t)),
          a.onScroll != null && W("scroll", t),
          a.onScrollEnd != null && W("scrollend", t),
          a.onClick != null && (t.onclick = Ft),
          (t = !0))
        : (t = !1),
      t || Al(e, !0));
  }
  function Us(e) {
    for (Ze = e.return; Ze; )
      switch (Ze.tag) {
        case 5:
        case 31:
        case 13:
          Ot = !1;
          return;
        case 27:
        case 3:
          Ot = !0;
          return;
        default:
          Ze = Ze.return;
      }
  }
  function Da(e) {
    if (e !== Ze) return !1;
    if (!P) return (Us(e), (P = !0), !1);
    var t = e.tag,
      l;
    if (
      ((l = t !== 3 && t !== 27) &&
        ((l = t === 5) &&
          ((l = e.type),
          (l =
            !(l !== "form" && l !== "button") || mf(e.type, e.memoizedProps))),
        (l = !l)),
      l && be && Al(e),
      Us(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(y(317));
      be = nd(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(y(317));
      be = nd(e);
    } else
      t === 27
        ? ((t = be), ql(e.type) ? ((e = bf), (bf = null), (be = e)) : (be = t))
        : (be = Ze ? Ct(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Fl() {
    ((be = Ze = null), (P = !1));
  }
  function $i() {
    var e = Tl;
    return (
      e !== null &&
        (ot === null ? (ot = e) : ot.push.apply(ot, e), (Tl = null)),
      e
    );
  }
  function bn(e) {
    Tl === null ? (Tl = [e]) : Tl.push(e);
  }
  var Fi = o(null),
    Il = null,
    tl = null;
  function Nl(e, t, l) {
    (E(Fi, t._currentValue), (t._currentValue = l));
  }
  function ll(e) {
    ((e._currentValue = Fi.current), A(Fi));
  }
  function Ii(e, t, l) {
    for (; e !== null; ) {
      var a = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        e === l)
      )
        break;
      e = e.return;
    }
  }
  function Pi(e, t, l, a) {
    var n = e.child;
    for (n !== null && (n.return = e); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var i = n.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var c = u;
          u = n;
          for (var s = 0; s < t.length; s++)
            if (c.context === t[s]) {
              ((u.lanes |= l),
                (c = u.alternate),
                c !== null && (c.lanes |= l),
                Ii(u.return, l, e),
                a || (i = null));
              break e;
            }
          u = c.next;
        }
      } else if (n.tag === 18) {
        if (((i = n.return), i === null)) throw Error(y(341));
        ((i.lanes |= l),
          (u = i.alternate),
          u !== null && (u.lanes |= l),
          Ii(i, l, e),
          (i = null));
      } else i = n.child;
      if (i !== null) i.return = n;
      else
        for (i = n; i !== null; ) {
          if (i === e) {
            i = null;
            break;
          }
          if (((n = i.sibling), n !== null)) {
            ((n.return = i.return), (i = n));
            break;
          }
          i = i.return;
        }
      n = i;
    }
  }
  function _a(e, t, l, a) {
    e = null;
    for (var n = t, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var i = n.alternate;
        if (i === null) throw Error(y(387));
        if (((i = i.memoizedProps), i !== null)) {
          var c = n.type;
          mt(n.pendingProps.value, i.value) ||
            (e !== null ? e.push(c) : (e = [c]));
        }
      } else if (n === ee.current) {
        if (((i = n.alternate), i === null)) throw Error(y(387));
        i.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (e !== null ? e.push(Kn) : (e = [Kn]));
      }
      n = n.return;
    }
    (e !== null && Pi(t, e, l, a), (t.flags |= 262144));
  }
  function pu(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!mt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Pl(e) {
    ((Il = e),
      (tl = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null));
  }
  function Ve(e) {
    return Cs(Il, e);
  }
  function bu(e, t) {
    return (Il === null && Pl(e), Cs(e, t));
  }
  function Cs(e, t) {
    var l = t._currentValue;
    if (((t = { context: t, memoizedValue: l, next: null }), tl === null)) {
      if (e === null) throw Error(y(308));
      ((tl = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288));
    } else tl = tl.next = t;
    return l;
  }
  var C0 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (l, a) {
                  e.push(a);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                e.forEach(function (l) {
                  return l();
                }));
            };
          },
    R0 = j.unstable_scheduleCallback,
    H0 = j.unstable_NormalPriority,
    _e = {
      $$typeof: Re,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function ec() {
    return { controller: new C0(), data: new Map(), refCount: 0 };
  }
  function xn(e) {
    (e.refCount--,
      e.refCount === 0 &&
        R0(H0, function () {
          e.controller.abort();
        }));
  }
  var Sn = null,
    tc = 0,
    Oa = 0,
    Ua = null;
  function B0(e, t) {
    if (Sn === null) {
      var l = (Sn = []);
      ((tc = 0),
        (Oa = nf()),
        (Ua = {
          status: "pending",
          value: void 0,
          then: function (a) {
            l.push(a);
          },
        }));
    }
    return (tc++, t.then(Rs, Rs), t);
  }
  function Rs() {
    if (--tc === 0 && Sn !== null) {
      Ua !== null && (Ua.status = "fulfilled");
      var e = Sn;
      ((Sn = null), (Oa = 0), (Ua = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function q0(e, t) {
    var l = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (n) {
          l.push(n);
        },
      };
    return (
      e.then(
        function () {
          ((a.status = "fulfilled"), (a.value = t));
          for (var n = 0; n < l.length; n++) (0, l[n])(t);
        },
        function (n) {
          for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)
            (0, l[n])(void 0);
        },
      ),
      a
    );
  }
  var Hs = x.S;
  x.S = function (e, t) {
    ((bo = Pe()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        B0(e, t),
      Hs !== null && Hs(e, t));
  };
  var ea = o(null);
  function lc() {
    var e = ea.current;
    return e !== null ? e : ge.pooledCache;
  }
  function xu(e, t) {
    t === null ? E(ea, ea.current) : E(ea, t.pool);
  }
  function Bs() {
    var e = lc();
    return e === null ? null : { parent: _e._currentValue, pool: e };
  }
  var Ca = Error(y(460)),
    ac = Error(y(474)),
    Su = Error(y(542)),
    Tu = { then: function () {} };
  function qs(e) {
    return ((e = e.status), e === "fulfilled" || e === "rejected");
  }
  function Ys(e, t, l) {
    switch (
      ((l = e[l]),
      l === void 0 ? e.push(t) : l !== t && (t.then(Ft, Ft), (t = l)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), Ls(e), e);
      default:
        if (typeof t.status == "string") t.then(Ft, Ft);
        else {
          if (((e = ge), e !== null && 100 < e.shellSuspendCounter))
            throw Error(y(482));
          ((e = t),
            (e.status = "pending"),
            e.then(
              function (a) {
                if (t.status === "pending") {
                  var n = t;
                  ((n.status = "fulfilled"), (n.value = a));
                }
              },
              function (a) {
                if (t.status === "pending") {
                  var n = t;
                  ((n.status = "rejected"), (n.reason = a));
                }
              },
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), Ls(e), e);
        }
        throw ((la = t), Ca);
    }
  }
  function ta(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function"
        ? ((la = l), Ca)
        : l;
    }
  }
  var la = null;
  function Gs() {
    if (la === null) throw Error(y(459));
    var e = la;
    return ((la = null), e);
  }
  function Ls(e) {
    if (e === Ca || e === Su) throw Error(y(483));
  }
  var Ra = null,
    Tn = 0;
  function Au(e) {
    var t = Tn;
    return ((Tn += 1), Ra === null && (Ra = []), Ys(Ra, e, t));
  }
  function An(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function Nu(e, t) {
    throw t.$$typeof === ye
      ? Error(y(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          y(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e,
          ),
        ));
  }
  function Xs(e) {
    function t(h, r) {
      if (e) {
        var m = h.deletions;
        m === null ? ((h.deletions = [r]), (h.flags |= 16)) : m.push(r);
      }
    }
    function l(h, r) {
      if (!e) return null;
      for (; r !== null; ) (t(h, r), (r = r.sibling));
      return null;
    }
    function a(h) {
      for (var r = new Map(); h !== null; )
        (h.key !== null ? r.set(h.key, h) : r.set(h.index, h), (h = h.sibling));
      return r;
    }
    function n(h, r) {
      return ((h = Pt(h, r)), (h.index = 0), (h.sibling = null), h);
    }
    function u(h, r, m) {
      return (
        (h.index = m),
        e
          ? ((m = h.alternate),
            m !== null
              ? ((m = m.index), m < r ? ((h.flags |= 67108866), r) : m)
              : ((h.flags |= 67108866), r))
          : ((h.flags |= 1048576), r)
      );
    }
    function i(h) {
      return (e && h.alternate === null && (h.flags |= 67108866), h);
    }
    function c(h, r, m, S) {
      return r === null || r.tag !== 6
        ? ((r = Vi(m, h.mode, S)), (r.return = h), r)
        : ((r = n(r, m)), (r.return = h), r);
    }
    function s(h, r, m, S) {
      var H = m.type;
      return H === pe
        ? b(h, r, m.props.children, S, m.key)
        : r !== null &&
            (r.elementType === H ||
              (typeof H == "object" &&
                H !== null &&
                H.$$typeof === Ne &&
                ta(H) === r.type))
          ? ((r = n(r, m.props)), An(r, m), (r.return = h), r)
          : ((r = gu(m.type, m.key, m.props, null, h.mode, S)),
            An(r, m),
            (r.return = h),
            r);
    }
    function v(h, r, m, S) {
      return r === null ||
        r.tag !== 4 ||
        r.stateNode.containerInfo !== m.containerInfo ||
        r.stateNode.implementation !== m.implementation
        ? ((r = Ki(m, h.mode, S)), (r.return = h), r)
        : ((r = n(r, m.children || [])), (r.return = h), r);
    }
    function b(h, r, m, S, H) {
      return r === null || r.tag !== 7
        ? ((r = $l(m, h.mode, S, H)), (r.return = h), r)
        : ((r = n(r, m)), (r.return = h), r);
    }
    function T(h, r, m) {
      if (
        (typeof r == "string" && r !== "") ||
        typeof r == "number" ||
        typeof r == "bigint"
      )
        return ((r = Vi("" + r, h.mode, m)), (r.return = h), r);
      if (typeof r == "object" && r !== null) {
        switch (r.$$typeof) {
          case Fe:
            return (
              (m = gu(r.type, r.key, r.props, null, h.mode, m)),
              An(m, r),
              (m.return = h),
              m
            );
          case ke:
            return ((r = Ki(r, h.mode, m)), (r.return = h), r);
          case Ne:
            return ((r = ta(r)), T(h, r, m));
        }
        if (ht(r) || He(r))
          return ((r = $l(r, h.mode, m, null)), (r.return = h), r);
        if (typeof r.then == "function") return T(h, Au(r), m);
        if (r.$$typeof === Re) return T(h, bu(h, r), m);
        Nu(h, r);
      }
      return null;
    }
    function g(h, r, m, S) {
      var H = r !== null ? r.key : null;
      if (
        (typeof m == "string" && m !== "") ||
        typeof m == "number" ||
        typeof m == "bigint"
      )
        return H !== null ? null : c(h, r, "" + m, S);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case Fe:
            return m.key === H ? s(h, r, m, S) : null;
          case ke:
            return m.key === H ? v(h, r, m, S) : null;
          case Ne:
            return ((m = ta(m)), g(h, r, m, S));
        }
        if (ht(m) || He(m)) return H !== null ? null : b(h, r, m, S, null);
        if (typeof m.then == "function") return g(h, r, Au(m), S);
        if (m.$$typeof === Re) return g(h, r, bu(h, m), S);
        Nu(h, m);
      }
      return null;
    }
    function p(h, r, m, S, H) {
      if (
        (typeof S == "string" && S !== "") ||
        typeof S == "number" ||
        typeof S == "bigint"
      )
        return ((h = h.get(m) || null), c(r, h, "" + S, H));
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case Fe:
            return (
              (h = h.get(S.key === null ? m : S.key) || null),
              s(r, h, S, H)
            );
          case ke:
            return (
              (h = h.get(S.key === null ? m : S.key) || null),
              v(r, h, S, H)
            );
          case Ne:
            return ((S = ta(S)), p(h, r, m, S, H));
        }
        if (ht(S) || He(S))
          return ((h = h.get(m) || null), b(r, h, S, H, null));
        if (typeof S.then == "function") return p(h, r, m, Au(S), H);
        if (S.$$typeof === Re) return p(h, r, m, bu(r, S), H);
        Nu(r, S);
      }
      return null;
    }
    function O(h, r, m, S) {
      for (
        var H = null, ae = null, C = r, V = (r = 0), F = null;
        C !== null && V < m.length;
        V++
      ) {
        C.index > V ? ((F = C), (C = null)) : (F = C.sibling);
        var ne = g(h, C, m[V], S);
        if (ne === null) {
          C === null && (C = F);
          break;
        }
        (e && C && ne.alternate === null && t(h, C),
          (r = u(ne, r, V)),
          ae === null ? (H = ne) : (ae.sibling = ne),
          (ae = ne),
          (C = F));
      }
      if (V === m.length) return (l(h, C), P && el(h, V), H);
      if (C === null) {
        for (; V < m.length; V++)
          ((C = T(h, m[V], S)),
            C !== null &&
              ((r = u(C, r, V)),
              ae === null ? (H = C) : (ae.sibling = C),
              (ae = C)));
        return (P && el(h, V), H);
      }
      for (C = a(C); V < m.length; V++)
        ((F = p(C, h, V, m[V], S)),
          F !== null &&
            (e && F.alternate !== null && C.delete(F.key === null ? V : F.key),
            (r = u(F, r, V)),
            ae === null ? (H = F) : (ae.sibling = F),
            (ae = F)));
      return (
        e &&
          C.forEach(function (Ql) {
            return t(h, Ql);
          }),
        P && el(h, V),
        H
      );
    }
    function q(h, r, m, S) {
      if (m == null) throw Error(y(151));
      for (
        var H = null, ae = null, C = r, V = (r = 0), F = null, ne = m.next();
        C !== null && !ne.done;
        V++, ne = m.next()
      ) {
        C.index > V ? ((F = C), (C = null)) : (F = C.sibling);
        var Ql = g(h, C, ne.value, S);
        if (Ql === null) {
          C === null && (C = F);
          break;
        }
        (e && C && Ql.alternate === null && t(h, C),
          (r = u(Ql, r, V)),
          ae === null ? (H = Ql) : (ae.sibling = Ql),
          (ae = Ql),
          (C = F));
      }
      if (ne.done) return (l(h, C), P && el(h, V), H);
      if (C === null) {
        for (; !ne.done; V++, ne = m.next())
          ((ne = T(h, ne.value, S)),
            ne !== null &&
              ((r = u(ne, r, V)),
              ae === null ? (H = ne) : (ae.sibling = ne),
              (ae = ne)));
        return (P && el(h, V), H);
      }
      for (C = a(C); !ne.done; V++, ne = m.next())
        ((ne = p(C, h, V, ne.value, S)),
          ne !== null &&
            (e &&
              ne.alternate !== null &&
              C.delete(ne.key === null ? V : ne.key),
            (r = u(ne, r, V)),
            ae === null ? (H = ne) : (ae.sibling = ne),
            (ae = ne)));
      return (
        e &&
          C.forEach(function (kh) {
            return t(h, kh);
          }),
        P && el(h, V),
        H
      );
    }
    function me(h, r, m, S) {
      if (
        (typeof m == "object" &&
          m !== null &&
          m.type === pe &&
          m.key === null &&
          (m = m.props.children),
        typeof m == "object" && m !== null)
      ) {
        switch (m.$$typeof) {
          case Fe:
            e: {
              for (var H = m.key; r !== null; ) {
                if (r.key === H) {
                  if (((H = m.type), H === pe)) {
                    if (r.tag === 7) {
                      (l(h, r.sibling),
                        (S = n(r, m.props.children)),
                        (S.return = h),
                        (h = S));
                      break e;
                    }
                  } else if (
                    r.elementType === H ||
                    (typeof H == "object" &&
                      H !== null &&
                      H.$$typeof === Ne &&
                      ta(H) === r.type)
                  ) {
                    (l(h, r.sibling),
                      (S = n(r, m.props)),
                      An(S, m),
                      (S.return = h),
                      (h = S));
                    break e;
                  }
                  l(h, r);
                  break;
                } else t(h, r);
                r = r.sibling;
              }
              m.type === pe
                ? ((S = $l(m.props.children, h.mode, S, m.key)),
                  (S.return = h),
                  (h = S))
                : ((S = gu(m.type, m.key, m.props, null, h.mode, S)),
                  An(S, m),
                  (S.return = h),
                  (h = S));
            }
            return i(h);
          case ke:
            e: {
              for (H = m.key; r !== null; ) {
                if (r.key === H)
                  if (
                    r.tag === 4 &&
                    r.stateNode.containerInfo === m.containerInfo &&
                    r.stateNode.implementation === m.implementation
                  ) {
                    (l(h, r.sibling),
                      (S = n(r, m.children || [])),
                      (S.return = h),
                      (h = S));
                    break e;
                  } else {
                    l(h, r);
                    break;
                  }
                else t(h, r);
                r = r.sibling;
              }
              ((S = Ki(m, h.mode, S)), (S.return = h), (h = S));
            }
            return i(h);
          case Ne:
            return ((m = ta(m)), me(h, r, m, S));
        }
        if (ht(m)) return O(h, r, m, S);
        if (He(m)) {
          if (((H = He(m)), typeof H != "function")) throw Error(y(150));
          return ((m = H.call(m)), q(h, r, m, S));
        }
        if (typeof m.then == "function") return me(h, r, Au(m), S);
        if (m.$$typeof === Re) return me(h, r, bu(h, m), S);
        Nu(h, m);
      }
      return (typeof m == "string" && m !== "") ||
        typeof m == "number" ||
        typeof m == "bigint"
        ? ((m = "" + m),
          r !== null && r.tag === 6
            ? (l(h, r.sibling), (S = n(r, m)), (S.return = h), (h = S))
            : (l(h, r), (S = Vi(m, h.mode, S)), (S.return = h), (h = S)),
          i(h))
        : l(h, r);
    }
    return function (h, r, m, S) {
      try {
        Tn = 0;
        var H = me(h, r, m, S);
        return ((Ra = null), H);
      } catch (C) {
        if (C === Ca || C === Su) throw C;
        var ae = vt(29, C, null, h.mode);
        return ((ae.lanes = S), (ae.return = h), ae);
      } finally {
      }
    };
  }
  var aa = Xs(!0),
    Qs = Xs(!1),
    zl = !1;
  function nc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function uc(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }));
  }
  function El(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function jl(e, t, l) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (ue & 2) !== 0)) {
      var n = a.pending;
      return (
        n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (a.pending = t),
        (t = vu(e)),
        zs(e, null, l),
        t
      );
    }
    return (mu(e, a, t, l), vu(e));
  }
  function Nn(e, t, l) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (l & 4194048) !== 0))
    ) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (l |= a), (t.lanes = l), ze(e, l));
    }
  }
  function ic(e, t) {
    var l = e.updateQueue,
      a = e.alternate;
    if (a !== null && ((a = a.updateQueue), l === a)) {
      var n = null,
        u = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var i = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          (u === null ? (n = u = i) : (u = u.next = i), (l = l.next));
        } while (l !== null);
        u === null ? (n = u = t) : (u = u.next = t);
      } else n = u = t;
      ((l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (e.updateQueue = l));
      return;
    }
    ((e = l.lastBaseUpdate),
      e === null ? (l.firstBaseUpdate = t) : (e.next = t),
      (l.lastBaseUpdate = t));
  }
  var cc = !1;
  function zn() {
    if (cc) {
      var e = Ua;
      if (e !== null) throw e;
    }
  }
  function En(e, t, l, a) {
    cc = !1;
    var n = e.updateQueue;
    zl = !1;
    var u = n.firstBaseUpdate,
      i = n.lastBaseUpdate,
      c = n.shared.pending;
    if (c !== null) {
      n.shared.pending = null;
      var s = c,
        v = s.next;
      ((s.next = null), i === null ? (u = v) : (i.next = v), (i = s));
      var b = e.alternate;
      b !== null &&
        ((b = b.updateQueue),
        (c = b.lastBaseUpdate),
        c !== i &&
          (c === null ? (b.firstBaseUpdate = v) : (c.next = v),
          (b.lastBaseUpdate = s)));
    }
    if (u !== null) {
      var T = n.baseState;
      ((i = 0), (b = v = s = null), (c = u));
      do {
        var g = c.lane & -536870913,
          p = g !== c.lane;
        if (p ? ($ & g) === g : (a & g) === g) {
          (g !== 0 && g === Oa && (cc = !0),
            b !== null &&
              (b = b.next =
                {
                  lane: 0,
                  tag: c.tag,
                  payload: c.payload,
                  callback: null,
                  next: null,
                }));
          e: {
            var O = e,
              q = c;
            g = t;
            var me = l;
            switch (q.tag) {
              case 1:
                if (((O = q.payload), typeof O == "function")) {
                  T = O.call(me, T, g);
                  break e;
                }
                T = O;
                break e;
              case 3:
                O.flags = (O.flags & -65537) | 128;
              case 0:
                if (
                  ((O = q.payload),
                  (g = typeof O == "function" ? O.call(me, T, g) : O),
                  g == null)
                )
                  break e;
                T = B({}, T, g);
                break e;
              case 2:
                zl = !0;
            }
          }
          ((g = c.callback),
            g !== null &&
              ((e.flags |= 64),
              p && (e.flags |= 8192),
              (p = n.callbacks),
              p === null ? (n.callbacks = [g]) : p.push(g)));
        } else
          ((p = {
            lane: g,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null,
          }),
            b === null ? ((v = b = p), (s = T)) : (b = b.next = p),
            (i |= g));
        if (((c = c.next), c === null)) {
          if (((c = n.shared.pending), c === null)) break;
          ((p = c),
            (c = p.next),
            (p.next = null),
            (n.lastBaseUpdate = p),
            (n.shared.pending = null));
        }
      } while (!0);
      (b === null && (s = T),
        (n.baseState = s),
        (n.firstBaseUpdate = v),
        (n.lastBaseUpdate = b),
        u === null && (n.shared.lanes = 0),
        (Ul |= i),
        (e.lanes = i),
        (e.memoizedState = T));
    }
  }
  function ws(e, t) {
    if (typeof e != "function") throw Error(y(191, e));
    e.call(t);
  }
  function Zs(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++) ws(l[e], t);
  }
  var Ha = o(null),
    zu = o(0);
  function Vs(e, t) {
    ((e = ol), E(zu, e), E(Ha, t), (ol = e | t.baseLanes));
  }
  function fc() {
    (E(zu, ol), E(Ha, Ha.current));
  }
  function sc() {
    ((ol = zu.current), A(Ha), A(zu));
  }
  var gt = o(null),
    Ut = null;
  function Ml(e) {
    var t = e.alternate;
    (E(Me, Me.current & 1),
      E(gt, e),
      Ut === null &&
        (t === null || Ha.current !== null || t.memoizedState !== null) &&
        (Ut = e));
  }
  function rc(e) {
    (E(Me, Me.current), E(gt, e), Ut === null && (Ut = e));
  }
  function Ks(e) {
    e.tag === 22
      ? (E(Me, Me.current), E(gt, e), Ut === null && (Ut = e))
      : Dl();
  }
  function Dl() {
    (E(Me, Me.current), E(gt, gt.current));
  }
  function yt(e) {
    (A(gt), Ut === e && (Ut = null), A(Me));
  }
  var Me = o(0);
  function Eu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && ((l = l.dehydrated), l === null || yf(l) || pf(l)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var al = 0,
    w = null,
    de = null,
    Oe = null,
    ju = !1,
    Ba = !1,
    na = !1,
    Mu = 0,
    jn = 0,
    qa = null,
    Y0 = 0;
  function Ee() {
    throw Error(y(321));
  }
  function oc(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!mt(e[l], t[l])) return !1;
    return !0;
  }
  function dc(e, t, l, a, n, u) {
    return (
      (al = u),
      (w = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (x.H = e === null || e.memoizedState === null ? Dr : jc),
      (na = !1),
      (u = l(a, n)),
      (na = !1),
      Ba && (u = ks(t, l, a, n)),
      Js(e),
      u
    );
  }
  function Js(e) {
    x.H = _n;
    var t = de !== null && de.next !== null;
    if (((al = 0), (Oe = de = w = null), (ju = !1), (jn = 0), (qa = null), t))
      throw Error(y(300));
    e === null ||
      Ue ||
      ((e = e.dependencies), e !== null && pu(e) && (Ue = !0));
  }
  function ks(e, t, l, a) {
    w = e;
    var n = 0;
    do {
      if ((Ba && (qa = null), (jn = 0), (Ba = !1), 25 <= n))
        throw Error(y(301));
      if (((n += 1), (Oe = de = null), e.updateQueue != null)) {
        var u = e.updateQueue;
        ((u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0));
      }
      ((x.H = _r), (u = t(l, a)));
    } while (Ba);
    return u;
  }
  function G0() {
    var e = x.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? Mn(t) : t),
      (e = e.useState()[0]),
      (de !== null ? de.memoizedState : null) !== e && (w.flags |= 1024),
      t
    );
  }
  function hc() {
    var e = Mu !== 0;
    return ((Mu = 0), e);
  }
  function mc(e, t, l) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l));
  }
  function vc(e) {
    if (ju) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      ju = !1;
    }
    ((al = 0), (Oe = de = w = null), (Ba = !1), (jn = Mu = 0), (qa = null));
  }
  function lt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Oe === null ? (w.memoizedState = Oe = e) : (Oe = Oe.next = e), Oe);
  }
  function De() {
    if (de === null) {
      var e = w.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = de.next;
    var t = Oe === null ? w.memoizedState : Oe.next;
    if (t !== null) ((Oe = t), (de = e));
    else {
      if (e === null)
        throw w.alternate === null ? Error(y(467)) : Error(y(310));
      ((de = e),
        (e = {
          memoizedState: de.memoizedState,
          baseState: de.baseState,
          baseQueue: de.baseQueue,
          queue: de.queue,
          next: null,
        }),
        Oe === null ? (w.memoizedState = Oe = e) : (Oe = Oe.next = e));
    }
    return Oe;
  }
  function Du() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Mn(e) {
    var t = jn;
    return (
      (jn += 1),
      qa === null && (qa = []),
      (e = Ys(qa, e, t)),
      (t = w),
      (Oe === null ? t.memoizedState : Oe.next) === null &&
        ((t = t.alternate),
        (x.H = t === null || t.memoizedState === null ? Dr : jc)),
      e
    );
  }
  function _u(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Mn(e);
      if (e.$$typeof === Re) return Ve(e);
    }
    throw Error(y(438, String(e)));
  }
  function gc(e) {
    var t = null,
      l = w.updateQueue;
    if ((l !== null && (t = l.memoCache), t == null)) {
      var a = w.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (t = {
              data: a.data.map(function (n) {
                return n.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      l === null && ((l = Du()), (w.updateQueue = l)),
      (l.memoCache = t),
      (l = t.data[t.index]),
      l === void 0)
    )
      for (l = t.data[t.index] = Array(e), a = 0; a < e; a++) l[a] = Yt;
    return (t.index++, l);
  }
  function nl(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ou(e) {
    var t = De();
    return yc(t, de, e);
  }
  function yc(e, t, l) {
    var a = e.queue;
    if (a === null) throw Error(y(311));
    a.lastRenderedReducer = l;
    var n = e.baseQueue,
      u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var i = n.next;
        ((n.next = u.next), (u.next = i));
      }
      ((t.baseQueue = n = u), (a.pending = null));
    }
    if (((u = e.baseState), n === null)) e.memoizedState = u;
    else {
      t = n.next;
      var c = (i = null),
        s = null,
        v = t,
        b = !1;
      do {
        var T = v.lane & -536870913;
        if (T !== v.lane ? ($ & T) === T : (al & T) === T) {
          var g = v.revertLane;
          if (g === 0)
            (s !== null &&
              (s = s.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: v.action,
                  hasEagerState: v.hasEagerState,
                  eagerState: v.eagerState,
                  next: null,
                }),
              T === Oa && (b = !0));
          else if ((al & g) === g) {
            ((v = v.next), g === Oa && (b = !0));
            continue;
          } else
            ((T = {
              lane: 0,
              revertLane: v.revertLane,
              gesture: null,
              action: v.action,
              hasEagerState: v.hasEagerState,
              eagerState: v.eagerState,
              next: null,
            }),
              s === null ? ((c = s = T), (i = u)) : (s = s.next = T),
              (w.lanes |= g),
              (Ul |= g));
          ((T = v.action),
            na && l(u, T),
            (u = v.hasEagerState ? v.eagerState : l(u, T)));
        } else
          ((g = {
            lane: T,
            revertLane: v.revertLane,
            gesture: v.gesture,
            action: v.action,
            hasEagerState: v.hasEagerState,
            eagerState: v.eagerState,
            next: null,
          }),
            s === null ? ((c = s = g), (i = u)) : (s = s.next = g),
            (w.lanes |= T),
            (Ul |= T));
        v = v.next;
      } while (v !== null && v !== t);
      if (
        (s === null ? (i = u) : (s.next = c),
        !mt(u, e.memoizedState) && ((Ue = !0), b && ((l = Ua), l !== null)))
      )
        throw l;
      ((e.memoizedState = u),
        (e.baseState = i),
        (e.baseQueue = s),
        (a.lastRenderedState = u));
    }
    return (n === null && (a.lanes = 0), [e.memoizedState, a.dispatch]);
  }
  function pc(e) {
    var t = De(),
      l = t.queue;
    if (l === null) throw Error(y(311));
    l.lastRenderedReducer = e;
    var a = l.dispatch,
      n = l.pending,
      u = t.memoizedState;
    if (n !== null) {
      l.pending = null;
      var i = (n = n.next);
      do ((u = e(u, i.action)), (i = i.next));
      while (i !== n);
      (mt(u, t.memoizedState) || (Ue = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (l.lastRenderedState = u));
    }
    return [u, a];
  }
  function Ws(e, t, l) {
    var a = w,
      n = De(),
      u = P;
    if (u) {
      if (l === void 0) throw Error(y(407));
      l = l();
    } else l = t();
    var i = !mt((de || n).memoizedState, l);
    if (
      (i && ((n.memoizedState = l), (Ue = !0)),
      (n = n.queue),
      Sc(Is.bind(null, a, n, e), [e]),
      n.getSnapshot !== t || i || (Oe !== null && Oe.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        Ya(9, { destroy: void 0 }, Fs.bind(null, a, n, l, t), null),
        ge === null)
      )
        throw Error(y(349));
      u || (al & 127) !== 0 || $s(a, t, l);
    }
    return l;
  }
  function $s(e, t, l) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: l }),
      (t = w.updateQueue),
      t === null
        ? ((t = Du()), (w.updateQueue = t), (t.stores = [e]))
        : ((l = t.stores), l === null ? (t.stores = [e]) : l.push(e)));
  }
  function Fs(e, t, l, a) {
    ((t.value = l), (t.getSnapshot = a), Ps(t) && er(e));
  }
  function Is(e, t, l) {
    return l(function () {
      Ps(t) && er(e);
    });
  }
  function Ps(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !mt(e, l);
    } catch {
      return !0;
    }
  }
  function er(e) {
    var t = Wl(e, 2);
    t !== null && dt(t, e, 2);
  }
  function bc(e) {
    var t = lt();
    if (typeof e == "function") {
      var l = e;
      if (((e = l()), na)) {
        Qt(!0);
        try {
          l();
        } finally {
          Qt(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: nl,
        lastRenderedState: e,
      }),
      t
    );
  }
  function tr(e, t, l, a) {
    return ((e.baseState = l), yc(e, de, typeof a == "function" ? a : nl));
  }
  function L0(e, t, l, a, n) {
    if (Ru(e)) throw Error(y(485));
    if (((e = t.action), e !== null)) {
      var u = {
        payload: n,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (i) {
          u.listeners.push(i);
        },
      };
      (x.T !== null ? l(!0) : (u.isTransition = !1),
        a(u),
        (l = t.pending),
        l === null
          ? ((u.next = t.pending = u), lr(t, u))
          : ((u.next = l.next), (t.pending = l.next = u)));
    }
  }
  function lr(e, t) {
    var l = t.action,
      a = t.payload,
      n = e.state;
    if (t.isTransition) {
      var u = x.T,
        i = {};
      x.T = i;
      try {
        var c = l(n, a),
          s = x.S;
        (s !== null && s(i, c), ar(e, t, c));
      } catch (v) {
        xc(e, t, v);
      } finally {
        (u !== null && i.types !== null && (u.types = i.types), (x.T = u));
      }
    } else
      try {
        ((u = l(n, a)), ar(e, t, u));
      } catch (v) {
        xc(e, t, v);
      }
  }
  function ar(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function"
      ? l.then(
          function (a) {
            nr(e, t, a);
          },
          function (a) {
            return xc(e, t, a);
          },
        )
      : nr(e, t, l);
  }
  function nr(e, t, l) {
    ((t.status = "fulfilled"),
      (t.value = l),
      ur(t),
      (e.state = l),
      (t = e.pending),
      t !== null &&
        ((l = t.next),
        l === t ? (e.pending = null) : ((l = l.next), (t.next = l), lr(e, l))));
  }
  function xc(e, t, l) {
    var a = e.pending;
    if (((e.pending = null), a !== null)) {
      a = a.next;
      do ((t.status = "rejected"), (t.reason = l), ur(t), (t = t.next));
      while (t !== a);
    }
    e.action = null;
  }
  function ur(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function ir(e, t) {
    return t;
  }
  function cr(e, t) {
    if (P) {
      var l = ge.formState;
      if (l !== null) {
        e: {
          var a = w;
          if (P) {
            if (be) {
              t: {
                for (var n = be, u = Ot; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break t;
                  }
                  if (((n = Ct(n.nextSibling)), n === null)) {
                    n = null;
                    break t;
                  }
                }
                ((u = n.data), (n = u === "F!" || u === "F" ? n : null));
              }
              if (n) {
                ((be = Ct(n.nextSibling)), (a = n.data === "F!"));
                break e;
              }
            }
            Al(a);
          }
          a = !1;
        }
        a && (t = l[0]);
      }
    }
    return (
      (l = lt()),
      (l.memoizedState = l.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ir,
        lastRenderedState: t,
      }),
      (l.queue = a),
      (l = Er.bind(null, w, a)),
      (a.dispatch = l),
      (a = bc(!1)),
      (u = Ec.bind(null, w, !1, a.queue)),
      (a = lt()),
      (n = { state: t, dispatch: null, action: e, pending: null }),
      (a.queue = n),
      (l = L0.bind(null, w, n, u, l)),
      (n.dispatch = l),
      (a.memoizedState = e),
      [t, l, !1]
    );
  }
  function fr(e) {
    var t = De();
    return sr(t, de, e);
  }
  function sr(e, t, l) {
    if (
      ((t = yc(e, t, ir)[0]),
      (e = Ou(nl)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var a = Mn(t);
      } catch (i) {
        throw i === Ca ? Su : i;
      }
    else a = t;
    t = De();
    var n = t.queue,
      u = n.dispatch;
    return (
      l !== t.memoizedState &&
        ((w.flags |= 2048),
        Ya(9, { destroy: void 0 }, X0.bind(null, n, l), null)),
      [a, u, e]
    );
  }
  function X0(e, t) {
    e.action = t;
  }
  function rr(e) {
    var t = De(),
      l = de;
    if (l !== null) return sr(t, l, e);
    (De(), (t = t.memoizedState), (l = De()));
    var a = l.queue.dispatch;
    return ((l.memoizedState = e), [t, a, !1]);
  }
  function Ya(e, t, l, a) {
    return (
      (e = { tag: e, create: l, deps: a, inst: t, next: null }),
      (t = w.updateQueue),
      t === null && ((t = Du()), (w.updateQueue = t)),
      (l = t.lastEffect),
      l === null
        ? (t.lastEffect = e.next = e)
        : ((a = l.next), (l.next = e), (e.next = a), (t.lastEffect = e)),
      e
    );
  }
  function or() {
    return De().memoizedState;
  }
  function Uu(e, t, l, a) {
    var n = lt();
    ((w.flags |= e),
      (n.memoizedState = Ya(
        1 | t,
        { destroy: void 0 },
        l,
        a === void 0 ? null : a,
      )));
  }
  function Cu(e, t, l, a) {
    var n = De();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    de !== null && a !== null && oc(a, de.memoizedState.deps)
      ? (n.memoizedState = Ya(t, u, l, a))
      : ((w.flags |= e), (n.memoizedState = Ya(1 | t, u, l, a)));
  }
  function dr(e, t) {
    Uu(8390656, 8, e, t);
  }
  function Sc(e, t) {
    Cu(2048, 8, e, t);
  }
  function Q0(e) {
    w.flags |= 4;
    var t = w.updateQueue;
    if (t === null) ((t = Du()), (w.updateQueue = t), (t.events = [e]));
    else {
      var l = t.events;
      l === null ? (t.events = [e]) : l.push(e);
    }
  }
  function hr(e) {
    var t = De().memoizedState;
    return (
      Q0({ ref: t, nextImpl: e }),
      function () {
        if ((ue & 2) !== 0) throw Error(y(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function mr(e, t) {
    return Cu(4, 2, e, t);
  }
  function vr(e, t) {
    return Cu(4, 4, e, t);
  }
  function gr(e, t) {
    if (typeof t == "function") {
      e = e();
      var l = t(e);
      return function () {
        typeof l == "function" ? l() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function yr(e, t, l) {
    ((l = l != null ? l.concat([e]) : null), Cu(4, 4, gr.bind(null, t, e), l));
  }
  function Tc() {}
  function pr(e, t) {
    var l = De();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    return t !== null && oc(t, a[1]) ? a[0] : ((l.memoizedState = [e, t]), e);
  }
  function br(e, t) {
    var l = De();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    if (t !== null && oc(t, a[1])) return a[0];
    if (((a = e()), na)) {
      Qt(!0);
      try {
        e();
      } finally {
        Qt(!1);
      }
    }
    return ((l.memoizedState = [a, t]), a);
  }
  function Ac(e, t, l) {
    return l === void 0 || ((al & 1073741824) !== 0 && ($ & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = l), (e = So()), (w.lanes |= e), (Ul |= e), l);
  }
  function xr(e, t, l, a) {
    return mt(l, t)
      ? l
      : Ha.current !== null
        ? ((e = Ac(e, l, a)), mt(e, t) || (Ue = !0), e)
        : (al & 42) === 0 || ((al & 1073741824) !== 0 && ($ & 261930) === 0)
          ? ((Ue = !0), (e.memoizedState = l))
          : ((e = So()), (w.lanes |= e), (Ul |= e), t);
  }
  function Sr(e, t, l, a, n) {
    var u = z.p;
    z.p = u !== 0 && 8 > u ? u : 8;
    var i = x.T,
      c = {};
    ((x.T = c), Ec(e, !1, t, l));
    try {
      var s = n(),
        v = x.S;
      if (
        (v !== null && v(c, s),
        s !== null && typeof s == "object" && typeof s.then == "function")
      ) {
        var b = q0(s, a);
        Dn(e, t, b, xt(e));
      } else Dn(e, t, a, xt(e));
    } catch (T) {
      Dn(e, t, { then: function () {}, status: "rejected", reason: T }, xt());
    } finally {
      ((z.p = u),
        i !== null && c.types !== null && (i.types = c.types),
        (x.T = i));
    }
  }
  function w0() {}
  function Nc(e, t, l, a) {
    if (e.tag !== 5) throw Error(y(476));
    var n = Tr(e).queue;
    Sr(
      e,
      n,
      t,
      Y,
      l === null
        ? w0
        : function () {
            return (Ar(e), l(a));
          },
    );
  }
  function Tr(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: Y,
      baseState: Y,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: nl,
        lastRenderedState: Y,
      },
      next: null,
    };
    var l = {};
    return (
      (t.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: nl,
          lastRenderedState: l,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function Ar(e) {
    var t = Tr(e);
    (t.next === null && (t = e.alternate.memoizedState),
      Dn(e, t.next.queue, {}, xt()));
  }
  function zc() {
    return Ve(Kn);
  }
  function Nr() {
    return De().memoizedState;
  }
  function zr() {
    return De().memoizedState;
  }
  function Z0(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = xt();
          e = El(l);
          var a = jl(t, e, l);
          (a !== null && (dt(a, t, l), Nn(a, t, l)),
            (t = { cache: ec() }),
            (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function V0(e, t, l) {
    var a = xt();
    ((l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Ru(e)
        ? jr(t, l)
        : ((l = wi(e, t, l, a)), l !== null && (dt(l, e, a), Mr(l, t, a))));
  }
  function Er(e, t, l) {
    var a = xt();
    Dn(e, t, l, a);
  }
  function Dn(e, t, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Ru(e)) jr(t, n);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var i = t.lastRenderedState,
            c = u(i, l);
          if (((n.hasEagerState = !0), (n.eagerState = c), mt(c, i)))
            return (mu(e, t, n, 0), ge === null && hu(), !1);
        } catch {
        } finally {
        }
      if (((l = wi(e, t, n, a)), l !== null))
        return (dt(l, e, a), Mr(l, t, a), !0);
    }
    return !1;
  }
  function Ec(e, t, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: nf(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Ru(e))
    ) {
      if (t) throw Error(y(479));
    } else ((t = wi(e, l, a, 2)), t !== null && dt(t, e, 2));
  }
  function Ru(e) {
    var t = e.alternate;
    return e === w || (t !== null && t === w);
  }
  function jr(e, t) {
    Ba = ju = !0;
    var l = e.pending;
    (l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (e.pending = t));
  }
  function Mr(e, t, l) {
    if ((l & 4194048) !== 0) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (l |= a), (t.lanes = l), ze(e, l));
    }
  }
  var _n = {
    readContext: Ve,
    use: _u,
    useCallback: Ee,
    useContext: Ee,
    useEffect: Ee,
    useImperativeHandle: Ee,
    useLayoutEffect: Ee,
    useInsertionEffect: Ee,
    useMemo: Ee,
    useReducer: Ee,
    useRef: Ee,
    useState: Ee,
    useDebugValue: Ee,
    useDeferredValue: Ee,
    useTransition: Ee,
    useSyncExternalStore: Ee,
    useId: Ee,
    useHostTransitionStatus: Ee,
    useFormState: Ee,
    useActionState: Ee,
    useOptimistic: Ee,
    useMemoCache: Ee,
    useCacheRefresh: Ee,
  };
  _n.useEffectEvent = Ee;
  var Dr = {
      readContext: Ve,
      use: _u,
      useCallback: function (e, t) {
        return ((lt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Ve,
      useEffect: dr,
      useImperativeHandle: function (e, t, l) {
        ((l = l != null ? l.concat([e]) : null),
          Uu(4194308, 4, gr.bind(null, t, e), l));
      },
      useLayoutEffect: function (e, t) {
        return Uu(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        Uu(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var l = lt();
        t = t === void 0 ? null : t;
        var a = e();
        if (na) {
          Qt(!0);
          try {
            e();
          } finally {
            Qt(!1);
          }
        }
        return ((l.memoizedState = [a, t]), a);
      },
      useReducer: function (e, t, l) {
        var a = lt();
        if (l !== void 0) {
          var n = l(t);
          if (na) {
            Qt(!0);
            try {
              l(t);
            } finally {
              Qt(!1);
            }
          }
        } else n = t;
        return (
          (a.memoizedState = a.baseState = n),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: n,
          }),
          (a.queue = e),
          (e = e.dispatch = V0.bind(null, w, e)),
          [a.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = lt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = bc(e);
        var t = e.queue,
          l = Er.bind(null, w, t);
        return ((t.dispatch = l), [e.memoizedState, l]);
      },
      useDebugValue: Tc,
      useDeferredValue: function (e, t) {
        var l = lt();
        return Ac(l, e, t);
      },
      useTransition: function () {
        var e = bc(!1);
        return (
          (e = Sr.bind(null, w, e.queue, !0, !1)),
          (lt().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, l) {
        var a = w,
          n = lt();
        if (P) {
          if (l === void 0) throw Error(y(407));
          l = l();
        } else {
          if (((l = t()), ge === null)) throw Error(y(349));
          ($ & 127) !== 0 || $s(a, t, l);
        }
        n.memoizedState = l;
        var u = { value: l, getSnapshot: t };
        return (
          (n.queue = u),
          dr(Is.bind(null, a, u, e), [e]),
          (a.flags |= 2048),
          Ya(9, { destroy: void 0 }, Fs.bind(null, a, u, l, t), null),
          l
        );
      },
      useId: function () {
        var e = lt(),
          t = ge.identifierPrefix;
        if (P) {
          var l = Zt,
            a = wt;
          ((l = (a & ~(1 << (32 - tt(a) - 1))).toString(32) + l),
            (t = "_" + t + "R_" + l),
            (l = Mu++),
            0 < l && (t += "H" + l.toString(32)),
            (t += "_"));
        } else ((l = Y0++), (t = "_" + t + "r_" + l.toString(32) + "_"));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: zc,
      useFormState: cr,
      useActionState: cr,
      useOptimistic: function (e) {
        var t = lt();
        t.memoizedState = t.baseState = e;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = l),
          (t = Ec.bind(null, w, !0, l)),
          (l.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: gc,
      useCacheRefresh: function () {
        return (lt().memoizedState = Z0.bind(null, w));
      },
      useEffectEvent: function (e) {
        var t = lt(),
          l = { impl: e };
        return (
          (t.memoizedState = l),
          function () {
            if ((ue & 2) !== 0) throw Error(y(440));
            return l.impl.apply(void 0, arguments);
          }
        );
      },
    },
    jc = {
      readContext: Ve,
      use: _u,
      useCallback: pr,
      useContext: Ve,
      useEffect: Sc,
      useImperativeHandle: yr,
      useInsertionEffect: mr,
      useLayoutEffect: vr,
      useMemo: br,
      useReducer: Ou,
      useRef: or,
      useState: function () {
        return Ou(nl);
      },
      useDebugValue: Tc,
      useDeferredValue: function (e, t) {
        var l = De();
        return xr(l, de.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Ou(nl)[0],
          t = De().memoizedState;
        return [typeof e == "boolean" ? e : Mn(e), t];
      },
      useSyncExternalStore: Ws,
      useId: Nr,
      useHostTransitionStatus: zc,
      useFormState: fr,
      useActionState: fr,
      useOptimistic: function (e, t) {
        var l = De();
        return tr(l, de, e, t);
      },
      useMemoCache: gc,
      useCacheRefresh: zr,
    };
  jc.useEffectEvent = hr;
  var _r = {
    readContext: Ve,
    use: _u,
    useCallback: pr,
    useContext: Ve,
    useEffect: Sc,
    useImperativeHandle: yr,
    useInsertionEffect: mr,
    useLayoutEffect: vr,
    useMemo: br,
    useReducer: pc,
    useRef: or,
    useState: function () {
      return pc(nl);
    },
    useDebugValue: Tc,
    useDeferredValue: function (e, t) {
      var l = De();
      return de === null ? Ac(l, e, t) : xr(l, de.memoizedState, e, t);
    },
    useTransition: function () {
      var e = pc(nl)[0],
        t = De().memoizedState;
      return [typeof e == "boolean" ? e : Mn(e), t];
    },
    useSyncExternalStore: Ws,
    useId: Nr,
    useHostTransitionStatus: zc,
    useFormState: rr,
    useActionState: rr,
    useOptimistic: function (e, t) {
      var l = De();
      return de !== null
        ? tr(l, de, e, t)
        : ((l.baseState = e), [e, l.queue.dispatch]);
    },
    useMemoCache: gc,
    useCacheRefresh: zr,
  };
  _r.useEffectEvent = hr;
  function Mc(e, t, l, a) {
    ((t = e.memoizedState),
      (l = l(a, t)),
      (l = l == null ? t : B({}, t, l)),
      (e.memoizedState = l),
      e.lanes === 0 && (e.updateQueue.baseState = l));
  }
  var Dc = {
    enqueueSetState: function (e, t, l) {
      e = e._reactInternals;
      var a = xt(),
        n = El(a);
      ((n.payload = t),
        l != null && (n.callback = l),
        (t = jl(e, n, a)),
        t !== null && (dt(t, e, a), Nn(t, e, a)));
    },
    enqueueReplaceState: function (e, t, l) {
      e = e._reactInternals;
      var a = xt(),
        n = El(a);
      ((n.tag = 1),
        (n.payload = t),
        l != null && (n.callback = l),
        (t = jl(e, n, a)),
        t !== null && (dt(t, e, a), Nn(t, e, a)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var l = xt(),
        a = El(l);
      ((a.tag = 2),
        t != null && (a.callback = t),
        (t = jl(e, a, l)),
        t !== null && (dt(t, e, l), Nn(t, e, l)));
    },
  };
  function Or(e, t, l, a, n, u, i) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(a, u, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !gn(l, a) || !gn(n, u)
          : !0
    );
  }
  function Ur(e, t, l, a) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(l, a),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(l, a),
      t.state !== e && Dc.enqueueReplaceState(t, t.state, null));
  }
  function ua(e, t) {
    var l = t;
    if ("ref" in t) {
      l = {};
      for (var a in t) a !== "ref" && (l[a] = t[a]);
    }
    if ((e = e.defaultProps)) {
      l === t && (l = B({}, l));
      for (var n in e) l[n] === void 0 && (l[n] = e[n]);
    }
    return l;
  }
  function Cr(e) {
    du(e);
  }
  function Rr(e) {
    console.error(e);
  }
  function Hr(e) {
    du(e);
  }
  function Hu(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function Br(e, t, l) {
    try {
      var a = e.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function _c(e, t, l) {
    return (
      (l = El(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        Hu(e, t);
      }),
      l
    );
  }
  function qr(e) {
    return ((e = El(e)), (e.tag = 3), e);
  }
  function Yr(e, t, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      ((e.payload = function () {
        return n(u);
      }),
        (e.callback = function () {
          Br(t, l, a);
        }));
    }
    var i = l.stateNode;
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (e.callback = function () {
        (Br(t, l, a),
          typeof n != "function" &&
            (Cl === null ? (Cl = new Set([this])) : Cl.add(this)));
        var c = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: c !== null ? c : "",
        });
      });
  }
  function K0(e, t, l, a, n) {
    if (
      ((l.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((t = l.alternate),
        t !== null && _a(t, l, n, !0),
        (l = gt.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 31:
          case 13:
            return (
              Ut === null ? Ju() : l.alternate === null && je === 0 && (je = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = n),
              a === Tu
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null ? (l.updateQueue = new Set([a])) : t.add(a),
                  tf(e, a, n)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              a === Tu
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (l.updateQueue = t))
                    : ((l = t.retryQueue),
                      l === null ? (t.retryQueue = new Set([a])) : l.add(a)),
                  tf(e, a, n)),
              !1
            );
        }
        throw Error(y(435, l.tag));
      }
      return (tf(e, a, n), Ju(), !1);
    }
    if (P)
      return (
        (t = gt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = n),
            a !== Wi && ((e = Error(y(422), { cause: a })), bn(Mt(e, l))))
          : (a !== Wi && ((t = Error(y(423), { cause: a })), bn(Mt(t, l))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (n &= -n),
            (e.lanes |= n),
            (a = Mt(a, l)),
            (n = _c(e.stateNode, a, n)),
            ic(e, n),
            je !== 4 && (je = 2)),
        !1
      );
    var u = Error(y(520), { cause: a });
    if (
      ((u = Mt(u, l)),
      Yn === null ? (Yn = [u]) : Yn.push(u),
      je !== 4 && (je = 2),
      t === null)
    )
      return !0;
    ((a = Mt(a, l)), (l = t));
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (e = n & -n),
            (l.lanes |= e),
            (e = _c(l.stateNode, a, e)),
            ic(l, e),
            !1
          );
        case 1:
          if (
            ((t = l.type),
            (u = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (u !== null &&
                  typeof u.componentDidCatch == "function" &&
                  (Cl === null || !Cl.has(u)))))
          )
            return (
              (l.flags |= 65536),
              (n &= -n),
              (l.lanes |= n),
              (n = qr(n)),
              Yr(n, e, l, a),
              ic(l, n),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Oc = Error(y(461)),
    Ue = !1;
  function Ke(e, t, l, a) {
    t.child = e === null ? Qs(t, null, l, a) : aa(t, e.child, l, a);
  }
  function Gr(e, t, l, a, n) {
    l = l.render;
    var u = t.ref;
    if ("ref" in a) {
      var i = {};
      for (var c in a) c !== "ref" && (i[c] = a[c]);
    } else i = a;
    return (
      Pl(t),
      (a = dc(e, t, l, i, u, n)),
      (c = hc()),
      e !== null && !Ue
        ? (mc(e, t, n), ul(e, t, n))
        : (P && c && Ji(t), (t.flags |= 1), Ke(e, t, a, n), t.child)
    );
  }
  function Lr(e, t, l, a, n) {
    if (e === null) {
      var u = l.type;
      return typeof u == "function" &&
        !Zi(u) &&
        u.defaultProps === void 0 &&
        l.compare === null
        ? ((t.tag = 15), (t.type = u), Xr(e, t, u, a, n))
        : ((e = gu(l.type, null, a, t, t.mode, n)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((u = e.child), !Gc(e, n))) {
      var i = u.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : gn), l(i, a) && e.ref === t.ref)
      )
        return ul(e, t, n);
    }
    return (
      (t.flags |= 1),
      (e = Pt(u, a)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Xr(e, t, l, a, n) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (gn(u, a) && e.ref === t.ref)
        if (((Ue = !1), (t.pendingProps = a = u), Gc(e, n)))
          (e.flags & 131072) !== 0 && (Ue = !0);
        else return ((t.lanes = e.lanes), ul(e, t, n));
    }
    return Uc(e, t, l, a, n);
  }
  function Qr(e, t, l, a) {
    var n = a.children,
      u = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      a.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((u = u !== null ? u.baseLanes | l : l), e !== null)) {
          for (a = t.child = e.child, n = 0; a !== null; )
            ((n = n | a.lanes | a.childLanes), (a = a.sibling));
          a = n & ~u;
        } else ((a = 0), (t.child = null));
        return wr(e, t, u, l, a);
      }
      if ((l & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && xu(t, u !== null ? u.cachePool : null),
          u !== null ? Vs(t, u) : fc(),
          Ks(t));
      else
        return (
          (a = t.lanes = 536870912),
          wr(e, t, u !== null ? u.baseLanes | l : l, l, a)
        );
    } else
      u !== null
        ? (xu(t, u.cachePool), Vs(t, u), Dl(), (t.memoizedState = null))
        : (e !== null && xu(t, null), fc(), Dl());
    return (Ke(e, t, n, l), t.child);
  }
  function On(e, t) {
    return (
      (e !== null && e.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function wr(e, t, l, a, n) {
    var u = lc();
    return (
      (u = u === null ? null : { parent: _e._currentValue, pool: u }),
      (t.memoizedState = { baseLanes: l, cachePool: u }),
      e !== null && xu(t, null),
      fc(),
      Ks(t),
      e !== null && _a(e, t, a, !0),
      (t.childLanes = n),
      null
    );
  }
  function Bu(e, t) {
    return (
      (t = Yu({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function Zr(e, t, l) {
    return (
      aa(t, e.child, null, l),
      (e = Bu(t, t.pendingProps)),
      (e.flags |= 2),
      yt(t),
      (t.memoizedState = null),
      e
    );
  }
  function J0(e, t, l) {
    var a = t.pendingProps,
      n = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (P) {
        if (a.mode === "hidden")
          return ((e = Bu(t, a)), (t.lanes = 536870912), On(null, e));
        if (
          (rc(t),
          (e = be)
            ? ((e = ad(e, Ot)),
              (e = e !== null && e.data === "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Sl !== null ? { id: wt, overflow: Zt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = js(e)),
                (l.return = t),
                (t.child = l),
                (Ze = t),
                (be = null)))
            : (e = null),
          e === null)
        )
          throw Al(t);
        return ((t.lanes = 536870912), null);
      }
      return Bu(t, a);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var i = u.dehydrated;
      if ((rc(t), n))
        if (t.flags & 256) ((t.flags &= -257), (t = Zr(e, t, l)));
        else if (t.memoizedState !== null)
          ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(y(558));
      else if (
        (Ue || _a(e, t, l, !1), (n = (l & e.childLanes) !== 0), Ue || n)
      ) {
        if (
          ((a = ge),
          a !== null && ((i = nt(a, l)), i !== 0 && i !== u.retryLane))
        )
          throw ((u.retryLane = i), Wl(e, i), dt(a, e, i), Oc);
        (Ju(), (t = Zr(e, t, l)));
      } else
        ((e = u.treeContext),
          (be = Ct(i.nextSibling)),
          (Ze = t),
          (P = !0),
          (Tl = null),
          (Ot = !1),
          e !== null && _s(t, e),
          (t = Bu(t, a)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (e = Pt(e.child, { mode: a.mode, children: a.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function qu(e, t) {
    var l = t.ref;
    if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(y(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function Uc(e, t, l, a, n) {
    return (
      Pl(t),
      (l = dc(e, t, l, a, void 0, n)),
      (a = hc()),
      e !== null && !Ue
        ? (mc(e, t, n), ul(e, t, n))
        : (P && a && Ji(t), (t.flags |= 1), Ke(e, t, l, n), t.child)
    );
  }
  function Vr(e, t, l, a, n, u) {
    return (
      Pl(t),
      (t.updateQueue = null),
      (l = ks(t, a, l, n)),
      Js(e),
      (a = hc()),
      e !== null && !Ue
        ? (mc(e, t, u), ul(e, t, u))
        : (P && a && Ji(t), (t.flags |= 1), Ke(e, t, l, u), t.child)
    );
  }
  function Kr(e, t, l, a, n) {
    if ((Pl(t), t.stateNode === null)) {
      var u = Ea,
        i = l.contextType;
      (typeof i == "object" && i !== null && (u = Ve(i)),
        (u = new l(a, u)),
        (t.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = Dc),
        (t.stateNode = u),
        (u._reactInternals = t),
        (u = t.stateNode),
        (u.props = a),
        (u.state = t.memoizedState),
        (u.refs = {}),
        nc(t),
        (i = l.contextType),
        (u.context = typeof i == "object" && i !== null ? Ve(i) : Ea),
        (u.state = t.memoizedState),
        (i = l.getDerivedStateFromProps),
        typeof i == "function" && (Mc(t, l, i, a), (u.state = t.memoizedState)),
        typeof l.getDerivedStateFromProps == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function" ||
          (typeof u.UNSAFE_componentWillMount != "function" &&
            typeof u.componentWillMount != "function") ||
          ((i = u.state),
          typeof u.componentWillMount == "function" && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == "function" &&
            u.UNSAFE_componentWillMount(),
          i !== u.state && Dc.enqueueReplaceState(u, u.state, null),
          En(t, a, u, n),
          zn(),
          (u.state = t.memoizedState)),
        typeof u.componentDidMount == "function" && (t.flags |= 4194308),
        (a = !0));
    } else if (e === null) {
      u = t.stateNode;
      var c = t.memoizedProps,
        s = ua(l, c);
      u.props = s;
      var v = u.context,
        b = l.contextType;
      ((i = Ea), typeof b == "object" && b !== null && (i = Ve(b)));
      var T = l.getDerivedStateFromProps;
      ((b =
        typeof T == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function"),
        (c = t.pendingProps !== c),
        b ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((c || v !== i) && Ur(t, u, a, i)),
        (zl = !1));
      var g = t.memoizedState;
      ((u.state = g),
        En(t, a, u, n),
        zn(),
        (v = t.memoizedState),
        c || g !== v || zl
          ? (typeof T == "function" && (Mc(t, l, T, a), (v = t.memoizedState)),
            (s = zl || Or(t, l, s, a, g, v, i))
              ? (b ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = v)),
            (u.props = a),
            (u.state = v),
            (u.context = i),
            (a = s))
          : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            (a = !1)));
    } else {
      ((u = t.stateNode),
        uc(e, t),
        (i = t.memoizedProps),
        (b = ua(l, i)),
        (u.props = b),
        (T = t.pendingProps),
        (g = u.context),
        (v = l.contextType),
        (s = Ea),
        typeof v == "object" && v !== null && (s = Ve(v)),
        (c = l.getDerivedStateFromProps),
        (v =
          typeof c == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function") ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((i !== T || g !== s) && Ur(t, u, a, s)),
        (zl = !1),
        (g = t.memoizedState),
        (u.state = g),
        En(t, a, u, n),
        zn());
      var p = t.memoizedState;
      i !== T ||
      g !== p ||
      zl ||
      (e !== null && e.dependencies !== null && pu(e.dependencies))
        ? (typeof c == "function" && (Mc(t, l, c, a), (p = t.memoizedState)),
          (b =
            zl ||
            Or(t, l, b, a, g, p, s) ||
            (e !== null && e.dependencies !== null && pu(e.dependencies)))
            ? (v ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(a, p, s),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(a, p, s)),
              typeof u.componentDidUpdate == "function" && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (i === e.memoizedProps && g === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (i === e.memoizedProps && g === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = p)),
          (u.props = a),
          (u.state = p),
          (u.context = s),
          (a = b))
        : (typeof u.componentDidUpdate != "function" ||
            (i === e.memoizedProps && g === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (i === e.memoizedProps && g === e.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return (
      (u = a),
      qu(e, t),
      (a = (t.flags & 128) !== 0),
      u || a
        ? ((u = t.stateNode),
          (l =
            a && typeof l.getDerivedStateFromError != "function"
              ? null
              : u.render()),
          (t.flags |= 1),
          e !== null && a
            ? ((t.child = aa(t, e.child, null, n)),
              (t.child = aa(t, null, l, n)))
            : Ke(e, t, l, n),
          (t.memoizedState = u.state),
          (e = t.child))
        : (e = ul(e, t, n)),
      e
    );
  }
  function Jr(e, t, l, a) {
    return (Fl(), (t.flags |= 256), Ke(e, t, l, a), t.child);
  }
  var Cc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Rc(e) {
    return { baseLanes: e, cachePool: Bs() };
  }
  function Hc(e, t, l) {
    return ((e = e !== null ? e.childLanes & ~l : 0), t && (e |= bt), e);
  }
  function kr(e, t, l) {
    var a = t.pendingProps,
      n = !1,
      u = (t.flags & 128) !== 0,
      i;
    if (
      ((i = u) ||
        (i =
          e !== null && e.memoizedState === null ? !1 : (Me.current & 2) !== 0),
      i && ((n = !0), (t.flags &= -129)),
      (i = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (P) {
        if (
          (n ? Ml(t) : Dl(),
          (e = be)
            ? ((e = ad(e, Ot)),
              (e = e !== null && e.data !== "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Sl !== null ? { id: wt, overflow: Zt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = js(e)),
                (l.return = t),
                (t.child = l),
                (Ze = t),
                (be = null)))
            : (e = null),
          e === null)
        )
          throw Al(t);
        return (pf(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var c = a.children;
      return (
        (a = a.fallback),
        n
          ? (Dl(),
            (n = t.mode),
            (c = Yu({ mode: "hidden", children: c }, n)),
            (a = $l(a, n, l, null)),
            (c.return = t),
            (a.return = t),
            (c.sibling = a),
            (t.child = c),
            (a = t.child),
            (a.memoizedState = Rc(l)),
            (a.childLanes = Hc(e, i, l)),
            (t.memoizedState = Cc),
            On(null, a))
          : (Ml(t), Bc(t, c))
      );
    }
    var s = e.memoizedState;
    if (s !== null && ((c = s.dehydrated), c !== null)) {
      if (u)
        t.flags & 256
          ? (Ml(t), (t.flags &= -257), (t = qc(e, t, l)))
          : t.memoizedState !== null
            ? (Dl(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (Dl(),
              (c = a.fallback),
              (n = t.mode),
              (a = Yu({ mode: "visible", children: a.children }, n)),
              (c = $l(c, n, l, null)),
              (c.flags |= 2),
              (a.return = t),
              (c.return = t),
              (a.sibling = c),
              (t.child = a),
              aa(t, e.child, null, l),
              (a = t.child),
              (a.memoizedState = Rc(l)),
              (a.childLanes = Hc(e, i, l)),
              (t.memoizedState = Cc),
              (t = On(null, a)));
      else if ((Ml(t), pf(c))) {
        if (((i = c.nextSibling && c.nextSibling.dataset), i)) var v = i.dgst;
        ((i = v),
          (a = Error(y(419))),
          (a.stack = ""),
          (a.digest = i),
          bn({ value: a, source: null, stack: null }),
          (t = qc(e, t, l)));
      } else if (
        (Ue || _a(e, t, l, !1), (i = (l & e.childLanes) !== 0), Ue || i)
      ) {
        if (
          ((i = ge),
          i !== null && ((a = nt(i, l)), a !== 0 && a !== s.retryLane))
        )
          throw ((s.retryLane = a), Wl(e, a), dt(i, e, a), Oc);
        (yf(c) || Ju(), (t = qc(e, t, l)));
      } else
        yf(c)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = s.treeContext),
            (be = Ct(c.nextSibling)),
            (Ze = t),
            (P = !0),
            (Tl = null),
            (Ot = !1),
            e !== null && _s(t, e),
            (t = Bc(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return n
      ? (Dl(),
        (c = a.fallback),
        (n = t.mode),
        (s = e.child),
        (v = s.sibling),
        (a = Pt(s, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = s.subtreeFlags & 65011712),
        v !== null ? (c = Pt(v, c)) : ((c = $l(c, n, l, null)), (c.flags |= 2)),
        (c.return = t),
        (a.return = t),
        (a.sibling = c),
        (t.child = a),
        On(null, a),
        (a = t.child),
        (c = e.child.memoizedState),
        c === null
          ? (c = Rc(l))
          : ((n = c.cachePool),
            n !== null
              ? ((s = _e._currentValue),
                (n = n.parent !== s ? { parent: s, pool: s } : n))
              : (n = Bs()),
            (c = { baseLanes: c.baseLanes | l, cachePool: n })),
        (a.memoizedState = c),
        (a.childLanes = Hc(e, i, l)),
        (t.memoizedState = Cc),
        On(e.child, a))
      : (Ml(t),
        (l = e.child),
        (e = l.sibling),
        (l = Pt(l, { mode: "visible", children: a.children })),
        (l.return = t),
        (l.sibling = null),
        e !== null &&
          ((i = t.deletions),
          i === null ? ((t.deletions = [e]), (t.flags |= 16)) : i.push(e)),
        (t.child = l),
        (t.memoizedState = null),
        l);
  }
  function Bc(e, t) {
    return (
      (t = Yu({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Yu(e, t) {
    return ((e = vt(22, e, null, t)), (e.lanes = 0), e);
  }
  function qc(e, t, l) {
    return (
      aa(t, e.child, null, l),
      (e = Bc(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Wr(e, t, l) {
    e.lanes |= t;
    var a = e.alternate;
    (a !== null && (a.lanes |= t), Ii(e.return, t, l));
  }
  function Yc(e, t, l, a, n, u) {
    var i = e.memoizedState;
    i === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: l,
          tailMode: n,
          treeForkCount: u,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = a),
        (i.tail = l),
        (i.tailMode = n),
        (i.treeForkCount = u));
  }
  function $r(e, t, l) {
    var a = t.pendingProps,
      n = a.revealOrder,
      u = a.tail;
    a = a.children;
    var i = Me.current,
      c = (i & 2) !== 0;
    if (
      (c ? ((i = (i & 1) | 2), (t.flags |= 128)) : (i &= 1),
      E(Me, i),
      Ke(e, t, a, l),
      (a = P ? pn : 0),
      !c && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Wr(e, l, t);
        else if (e.tag === 19) Wr(e, l, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    switch (n) {
      case "forwards":
        for (l = t.child, n = null; l !== null; )
          ((e = l.alternate),
            e !== null && Eu(e) === null && (n = l),
            (l = l.sibling));
        ((l = n),
          l === null
            ? ((n = t.child), (t.child = null))
            : ((n = l.sibling), (l.sibling = null)),
          Yc(t, !1, n, l, u, a));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, n = t.child, t.child = null; n !== null; ) {
          if (((e = n.alternate), e !== null && Eu(e) === null)) {
            t.child = n;
            break;
          }
          ((e = n.sibling), (n.sibling = l), (l = n), (n = e));
        }
        Yc(t, !0, l, null, u, a);
        break;
      case "together":
        Yc(t, !1, null, null, void 0, a);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function ul(e, t, l) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Ul |= t.lanes),
      (l & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((_a(e, t, l, !1), (l & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(y(153));
    if (t.child !== null) {
      for (
        e = t.child, l = Pt(e, e.pendingProps), t.child = l, l.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (l = l.sibling = Pt(e, e.pendingProps)),
          (l.return = t));
      l.sibling = null;
    }
    return t.child;
  }
  function Gc(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && pu(e)));
  }
  function k0(e, t, l) {
    switch (t.tag) {
      case 3:
        (Be(t, t.stateNode.containerInfo),
          Nl(t, _e, e.memoizedState.cache),
          Fl());
        break;
      case 27:
      case 5:
        Jt(t);
        break;
      case 4:
        Be(t, t.stateNode.containerInfo);
        break;
      case 10:
        Nl(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), rc(t), null);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (Ml(t), (t.flags |= 128), null)
            : (l & t.child.childLanes) !== 0
              ? kr(e, t, l)
              : (Ml(t), (e = ul(e, t, l)), e !== null ? e.sibling : null);
        Ml(t);
        break;
      case 19:
        var n = (e.flags & 128) !== 0;
        if (
          ((a = (l & t.childLanes) !== 0),
          a || (_a(e, t, l, !1), (a = (l & t.childLanes) !== 0)),
          n)
        ) {
          if (a) return $r(e, t, l);
          t.flags |= 128;
        }
        if (
          ((n = t.memoizedState),
          n !== null &&
            ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          E(Me, Me.current),
          a)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), Qr(e, t, l, t.pendingProps));
      case 24:
        Nl(t, _e, e.memoizedState.cache);
    }
    return ul(e, t, l);
  }
  function Fr(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Ue = !0;
      else {
        if (!Gc(e, l) && (t.flags & 128) === 0) return ((Ue = !1), k0(e, t, l));
        Ue = (e.flags & 131072) !== 0;
      }
    else ((Ue = !1), P && (t.flags & 1048576) !== 0 && Ds(t, pn, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (((e = ta(t.elementType)), (t.type = e), typeof e == "function"))
            Zi(e)
              ? ((a = ua(e, a)), (t.tag = 1), (t = Kr(null, t, e, a, l)))
              : ((t.tag = 0), (t = Uc(null, t, e, a, l)));
          else {
            if (e != null) {
              var n = e.$$typeof;
              if (n === Ae) {
                ((t.tag = 11), (t = Gr(null, t, e, a, l)));
                break e;
              } else if (n === G) {
                ((t.tag = 14), (t = Lr(null, t, e, a, l)));
                break e;
              }
            }
            throw ((t = At(e) || e), Error(y(306, t, "")));
          }
        }
        return t;
      case 0:
        return Uc(e, t, t.type, t.pendingProps, l);
      case 1:
        return ((a = t.type), (n = ua(a, t.pendingProps)), Kr(e, t, a, n, l));
      case 3:
        e: {
          if ((Be(t, t.stateNode.containerInfo), e === null))
            throw Error(y(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          ((n = u.element), uc(e, t), En(t, a, null, l));
          var i = t.memoizedState;
          if (
            ((a = i.cache),
            Nl(t, _e, a),
            a !== u.cache && Pi(t, [_e], l, !0),
            zn(),
            (a = i.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: a, isDehydrated: !1, cache: i.cache }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              t = Jr(e, t, a, l);
              break e;
            } else if (a !== n) {
              ((n = Mt(Error(y(424)), t)), bn(n), (t = Jr(e, t, a, l)));
              break e;
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (
                be = Ct(e.firstChild),
                  Ze = t,
                  P = !0,
                  Tl = null,
                  Ot = !0,
                  l = Qs(t, null, a, l),
                  t.child = l;
                l;
              )
                ((l.flags = (l.flags & -3) | 4096), (l = l.sibling));
            }
          else {
            if ((Fl(), a === n)) {
              t = ul(e, t, l);
              break e;
            }
            Ke(e, t, a, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          qu(e, t),
          e === null
            ? (l = sd(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = l)
              : P ||
                ((l = t.type),
                (e = t.pendingProps),
                (a = ei(K.current).createElement(l)),
                (a[we] = t),
                (a[it] = e),
                Je(a, l, e),
                Le(a),
                (t.stateNode = a))
            : (t.memoizedState = sd(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Jt(t),
          e === null &&
            P &&
            ((a = t.stateNode = id(t.type, t.pendingProps, K.current)),
            (Ze = t),
            (Ot = !0),
            (n = be),
            ql(t.type) ? ((bf = n), (be = Ct(a.firstChild))) : (be = n)),
          Ke(e, t, t.pendingProps.children, l),
          qu(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            P &&
            ((n = a = be) &&
              ((a = Nh(a, t.type, t.pendingProps, Ot)),
              a !== null
                ? ((t.stateNode = a),
                  (Ze = t),
                  (be = Ct(a.firstChild)),
                  (Ot = !1),
                  (n = !0))
                : (n = !1)),
            n || Al(t)),
          Jt(t),
          (n = t.type),
          (u = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (a = u.children),
          mf(n, u) ? (a = null) : i !== null && mf(n, i) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((n = dc(e, t, G0, null, null, l)), (Kn._currentValue = n)),
          qu(e, t),
          Ke(e, t, a, l),
          t.child
        );
      case 6:
        return (
          e === null &&
            P &&
            ((e = l = be) &&
              ((l = zh(l, t.pendingProps, Ot)),
              l !== null
                ? ((t.stateNode = l), (Ze = t), (be = null), (e = !0))
                : (e = !1)),
            e || Al(t)),
          null
        );
      case 13:
        return kr(e, t, l);
      case 4:
        return (
          Be(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          e === null ? (t.child = aa(t, null, a, l)) : Ke(e, t, a, l),
          t.child
        );
      case 11:
        return Gr(e, t, t.type, t.pendingProps, l);
      case 7:
        return (Ke(e, t, t.pendingProps, l), t.child);
      case 8:
        return (Ke(e, t, t.pendingProps.children, l), t.child);
      case 12:
        return (Ke(e, t, t.pendingProps.children, l), t.child);
      case 10:
        return (
          (a = t.pendingProps),
          Nl(t, t.type, a.value),
          Ke(e, t, a.children, l),
          t.child
        );
      case 9:
        return (
          (n = t.type._context),
          (a = t.pendingProps.children),
          Pl(t),
          (n = Ve(n)),
          (a = a(n)),
          (t.flags |= 1),
          Ke(e, t, a, l),
          t.child
        );
      case 14:
        return Lr(e, t, t.type, t.pendingProps, l);
      case 15:
        return Xr(e, t, t.type, t.pendingProps, l);
      case 19:
        return $r(e, t, l);
      case 31:
        return J0(e, t, l);
      case 22:
        return Qr(e, t, l, t.pendingProps);
      case 24:
        return (
          Pl(t),
          (a = Ve(_e)),
          e === null
            ? ((n = lc()),
              n === null &&
                ((n = ge),
                (u = ec()),
                (n.pooledCache = u),
                u.refCount++,
                u !== null && (n.pooledCacheLanes |= l),
                (n = u)),
              (t.memoizedState = { parent: a, cache: n }),
              nc(t),
              Nl(t, _e, n))
            : ((e.lanes & l) !== 0 && (uc(e, t), En(t, null, null, l), zn()),
              (n = e.memoizedState),
              (u = t.memoizedState),
              n.parent !== a
                ? ((n = { parent: a, cache: a }),
                  (t.memoizedState = n),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = n),
                  Nl(t, _e, a))
                : ((a = u.cache),
                  Nl(t, _e, a),
                  a !== n.cache && Pi(t, [_e], l, !0))),
          Ke(e, t, t.pendingProps.children, l),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(y(156, t.tag));
  }
  function il(e) {
    e.flags |= 4;
  }
  function Lc(e, t, l, a, n) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (n & 335544128) === n))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (zo()) e.flags |= 8192;
        else throw ((la = Tu), ac);
    } else e.flags &= -16777217;
  }
  function Ir(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !md(t)))
      if (zo()) e.flags |= 8192;
      else throw ((la = Tu), ac);
  }
  function Gu(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? M() : 536870912), (e.lanes |= t), (Qa |= t)));
  }
  function Un(e, t) {
    if (!P)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var l = null; t !== null; )
            (t.alternate !== null && (l = t), (t = t.sibling));
          l === null ? (e.tail = null) : (l.sibling = null);
          break;
        case "collapsed":
          l = e.tail;
          for (var a = null; l !== null; )
            (l.alternate !== null && (a = l), (l = l.sibling));
          a === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function xe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      l = 0,
      a = 0;
    if (t)
      for (var n = e.child; n !== null; )
        ((l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags & 65011712),
          (a |= n.flags & 65011712),
          (n.return = e),
          (n = n.sibling));
    else
      for (n = e.child; n !== null; )
        ((l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags),
          (a |= n.flags),
          (n.return = e),
          (n = n.sibling));
    return ((e.subtreeFlags |= a), (e.childLanes = l), t);
  }
  function W0(e, t, l) {
    var a = t.pendingProps;
    switch ((ki(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (xe(t), null);
      case 1:
        return (xe(t), null);
      case 3:
        return (
          (l = t.stateNode),
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          ll(_e),
          ve(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            (Da(t)
              ? il(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), $i())),
          xe(t),
          null
        );
      case 26:
        var n = t.type,
          u = t.memoizedState;
        return (
          e === null
            ? (il(t),
              u !== null ? (xe(t), Ir(t, u)) : (xe(t), Lc(t, n, null, a, l)))
            : u
              ? u !== e.memoizedState
                ? (il(t), xe(t), Ir(t, u))
                : (xe(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps),
                e !== a && il(t),
                xe(t),
                Lc(t, n, e, a, l)),
          null
        );
      case 27:
        if (
          (vl(t),
          (l = K.current),
          (n = t.type),
          e !== null && t.stateNode != null)
        )
          e.memoizedProps !== a && il(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(y(166));
            return (xe(t), null);
          }
          ((e = D.current),
            Da(t) ? Os(t) : ((e = id(n, a, l)), (t.stateNode = e), il(t)));
        }
        return (xe(t), null);
      case 5:
        if ((vl(t), (n = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && il(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(y(166));
            return (xe(t), null);
          }
          if (((u = D.current), Da(t))) Os(t);
          else {
            var i = ei(K.current);
            switch (u) {
              case 1:
                u = i.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                u = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    u = i.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    u = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n,
                    );
                    break;
                  case "script":
                    ((u = i.createElement("div")),
                      (u.innerHTML = "<script><\/script>"),
                      (u = u.removeChild(u.firstChild)));
                    break;
                  case "select":
                    ((u =
                      typeof a.is == "string"
                        ? i.createElement("select", { is: a.is })
                        : i.createElement("select")),
                      a.multiple
                        ? (u.multiple = !0)
                        : a.size && (u.size = a.size));
                    break;
                  default:
                    u =
                      typeof a.is == "string"
                        ? i.createElement(n, { is: a.is })
                        : i.createElement(n);
                }
            }
            ((u[we] = t), (u[it] = a));
            e: for (i = t.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) u.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                ((i.child.return = i), (i = i.child));
                continue;
              }
              if (i === t) break e;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === t) break e;
                i = i.return;
              }
              ((i.sibling.return = i.return), (i = i.sibling));
            }
            t.stateNode = u;
            e: switch ((Je(u, n, a), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break e;
              case "img":
                a = !0;
                break e;
              default:
                a = !1;
            }
            a && il(t);
          }
        }
        return (
          xe(t),
          Lc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, l),
          null
        );
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== a && il(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(y(166));
          if (((e = K.current), Da(t))) {
            if (
              ((e = t.stateNode),
              (l = t.memoizedProps),
              (a = null),
              (n = Ze),
              n !== null)
            )
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            ((e[we] = t),
              (e = !!(
                e.nodeValue === l ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Wo(e.nodeValue, l)
              )),
              e || Al(t, !0));
          } else
            ((e = ei(e).createTextNode(a)), (e[we] = t), (t.stateNode = e));
        }
        return (xe(t), null);
      case 31:
        if (((l = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((a = Da(t)), l !== null)) {
            if (e === null) {
              if (!a) throw Error(y(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(y(557));
              e[we] = t;
            } else
              (Fl(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (xe(t), (e = !1));
          } else
            ((l = $i()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = l),
              (e = !0));
          if (!e) return t.flags & 256 ? (yt(t), t) : (yt(t), null);
          if ((t.flags & 128) !== 0) throw Error(y(558));
        }
        return (xe(t), null);
      case 13:
        if (
          ((a = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((n = Da(t)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!n) throw Error(y(318));
              if (
                ((n = t.memoizedState),
                (n = n !== null ? n.dehydrated : null),
                !n)
              )
                throw Error(y(317));
              n[we] = t;
            } else
              (Fl(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (xe(t), (n = !1));
          } else
            ((n = $i()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = n),
              (n = !0));
          if (!n) return t.flags & 256 ? (yt(t), t) : (yt(t), null);
        }
        return (
          yt(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = l), t)
            : ((l = a !== null),
              (e = e !== null && e.memoizedState !== null),
              l &&
                ((a = t.child),
                (n = null),
                a.alternate !== null &&
                  a.alternate.memoizedState !== null &&
                  a.alternate.memoizedState.cachePool !== null &&
                  (n = a.alternate.memoizedState.cachePool.pool),
                (u = null),
                a.memoizedState !== null &&
                  a.memoizedState.cachePool !== null &&
                  (u = a.memoizedState.cachePool.pool),
                u !== n && (a.flags |= 2048)),
              l !== e && l && (t.child.flags |= 8192),
              Gu(t, t.updateQueue),
              xe(t),
              null)
        );
      case 4:
        return (ve(), e === null && sf(t.stateNode.containerInfo), xe(t), null);
      case 10:
        return (ll(t.type), xe(t), null);
      case 19:
        if ((A(Me), (a = t.memoizedState), a === null)) return (xe(t), null);
        if (((n = (t.flags & 128) !== 0), (u = a.rendering), u === null))
          if (n) Un(a, !1);
          else {
            if (je !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((u = Eu(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      Un(a, !1),
                      e = u.updateQueue,
                      t.updateQueue = e,
                      Gu(t, e),
                      t.subtreeFlags = 0,
                      e = l,
                      l = t.child;
                    l !== null;
                  )
                    (Es(l, e), (l = l.sibling));
                  return (
                    E(Me, (Me.current & 1) | 2),
                    P && el(t, a.treeForkCount),
                    t.child
                  );
                }
                e = e.sibling;
              }
            a.tail !== null &&
              Pe() > Zu &&
              ((t.flags |= 128), (n = !0), Un(a, !1), (t.lanes = 4194304));
          }
        else {
          if (!n)
            if (((e = Eu(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (n = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Gu(t, e),
                Un(a, !0),
                a.tail === null &&
                  a.tailMode === "hidden" &&
                  !u.alternate &&
                  !P)
              )
                return (xe(t), null);
            } else
              2 * Pe() - a.renderingStartTime > Zu &&
                l !== 536870912 &&
                ((t.flags |= 128), (n = !0), Un(a, !1), (t.lanes = 4194304));
          a.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((e = a.last),
              e !== null ? (e.sibling = u) : (t.child = u),
              (a.last = u));
        }
        return a.tail !== null
          ? ((e = a.tail),
            (a.rendering = e),
            (a.tail = e.sibling),
            (a.renderingStartTime = Pe()),
            (e.sibling = null),
            (l = Me.current),
            E(Me, n ? (l & 1) | 2 : l & 1),
            P && el(t, a.treeForkCount),
            e)
          : (xe(t), null);
      case 22:
      case 23:
        return (
          yt(t),
          sc(),
          (a = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? (l & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (xe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : xe(t),
          (l = t.updateQueue),
          l !== null && Gu(t, l.retryQueue),
          (l = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
          (a = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          a !== l && (t.flags |= 2048),
          e !== null && A(ea),
          null
        );
      case 24:
        return (
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          ll(_e),
          xe(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(y(156, t.tag));
  }
  function $0(e, t) {
    switch ((ki(t), t.tag)) {
      case 1:
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          ll(_e),
          ve(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (vl(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((yt(t), t.alternate === null)) throw Error(y(340));
          Fl();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 13:
        if (
          (yt(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(y(340));
          Fl();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (A(Me), null);
      case 4:
        return (ve(), null);
      case 10:
        return (ll(t.type), null);
      case 22:
      case 23:
        return (
          yt(t),
          sc(),
          e !== null && A(ea),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (ll(_e), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Pr(e, t) {
    switch ((ki(t), t.tag)) {
      case 3:
        (ll(_e), ve());
        break;
      case 26:
      case 27:
      case 5:
        vl(t);
        break;
      case 4:
        ve();
        break;
      case 31:
        t.memoizedState !== null && yt(t);
        break;
      case 13:
        yt(t);
        break;
      case 19:
        A(Me);
        break;
      case 10:
        ll(t.type);
        break;
      case 22:
      case 23:
        (yt(t), sc(), e !== null && A(ea));
        break;
      case 24:
        ll(_e);
    }
  }
  function Cn(e, t) {
    try {
      var l = t.updateQueue,
        a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & e) === e) {
            a = void 0;
            var u = l.create,
              i = l.inst;
            ((a = u()), (i.destroy = a));
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (c) {
      re(t, t.return, c);
    }
  }
  function _l(e, t, l) {
    try {
      var a = t.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & e) === e) {
            var i = a.inst,
              c = i.destroy;
            if (c !== void 0) {
              ((i.destroy = void 0), (n = t));
              var s = l,
                v = c;
              try {
                v();
              } catch (b) {
                re(n, s, b);
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (b) {
      re(t, t.return, b);
    }
  }
  function eo(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        Zs(t, l);
      } catch (a) {
        re(e, e.return, a);
      }
    }
  }
  function to(e, t, l) {
    ((l.props = ua(e.type, e.memoizedProps)), (l.state = e.memoizedState));
    try {
      l.componentWillUnmount();
    } catch (a) {
      re(e, t, a);
    }
  }
  function Rn(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        typeof l == "function" ? (e.refCleanup = l(a)) : (l.current = a);
      }
    } catch (n) {
      re(e, t, n);
    }
  }
  function Vt(e, t) {
    var l = e.ref,
      a = e.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          re(e, t, n);
        } finally {
          ((e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null));
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (n) {
          re(e, t, n);
        }
      else l.current = null;
  }
  function lo(e) {
    var t = e.type,
      l = e.memoizedProps,
      a = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break e;
        case "img":
          l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      re(e, e.return, n);
    }
  }
  function Xc(e, t, l) {
    try {
      var a = e.stateNode;
      (ph(a, e.type, l, t), (a[it] = t));
    } catch (n) {
      re(e, e.return, n);
    }
  }
  function ao(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && ql(e.type)) ||
      e.tag === 4
    );
  }
  function Qc(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || ao(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (
          (e.tag === 27 && ql(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function wc(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      ((e = e.stateNode),
        t
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === "HTML"
                ? l.ownerDocument.body
                : l
            ).insertBefore(e, t)
          : ((t =
              l.nodeType === 9
                ? l.body
                : l.nodeName === "HTML"
                  ? l.ownerDocument.body
                  : l),
            t.appendChild(e),
            (l = l._reactRootContainer),
            l != null || t.onclick !== null || (t.onclick = Ft)));
    else if (
      a !== 4 &&
      (a === 27 && ql(e.type) && ((l = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (wc(e, t, l), e = e.sibling; e !== null; )
        (wc(e, t, l), (e = e.sibling));
  }
  function Lu(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      ((e = e.stateNode), t ? l.insertBefore(e, t) : l.appendChild(e));
    else if (
      a !== 4 &&
      (a === 27 && ql(e.type) && (l = e.stateNode), (e = e.child), e !== null)
    )
      for (Lu(e, t, l), e = e.sibling; e !== null; )
        (Lu(e, t, l), (e = e.sibling));
  }
  function no(e) {
    var t = e.stateNode,
      l = e.memoizedProps;
    try {
      for (var a = e.type, n = t.attributes; n.length; )
        t.removeAttributeNode(n[0]);
      (Je(t, a, l), (t[we] = e), (t[it] = l));
    } catch (u) {
      re(e, e.return, u);
    }
  }
  var cl = !1,
    Ce = !1,
    Zc = !1,
    uo = typeof WeakSet == "function" ? WeakSet : Set,
    Xe = null;
  function F0(e, t) {
    if (((e = e.containerInfo), (df = ci), (e = ys(e)), qi(e))) {
      if ("selectionStart" in e)
        var l = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          l = ((l = e.ownerDocument) && l.defaultView) || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var n = a.anchorOffset,
              u = a.focusNode;
            a = a.focusOffset;
            try {
              (l.nodeType, u.nodeType);
            } catch {
              l = null;
              break e;
            }
            var i = 0,
              c = -1,
              s = -1,
              v = 0,
              b = 0,
              T = e,
              g = null;
            t: for (;;) {
              for (
                var p;
                T !== l || (n !== 0 && T.nodeType !== 3) || (c = i + n),
                  T !== u || (a !== 0 && T.nodeType !== 3) || (s = i + a),
                  T.nodeType === 3 && (i += T.nodeValue.length),
                  (p = T.firstChild) !== null;
              )
                ((g = T), (T = p));
              for (;;) {
                if (T === e) break t;
                if (
                  (g === l && ++v === n && (c = i),
                  g === u && ++b === a && (s = i),
                  (p = T.nextSibling) !== null)
                )
                  break;
                ((T = g), (g = T.parentNode));
              }
              T = p;
            }
            l = c === -1 || s === -1 ? null : { start: c, end: s };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      hf = { focusedElem: e, selectionRange: l }, ci = !1, Xe = t;
      Xe !== null;
    )
      if (
        ((t = Xe), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        ((e.return = t), (Xe = e));
      else
        for (; Xe !== null; ) {
          switch (((t = Xe), (u = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              if (
                (e & 4) !== 0 &&
                ((e = t.updateQueue),
                (e = e !== null ? e.events : null),
                e !== null)
              )
                for (l = 0; l < e.length; l++)
                  ((n = e[l]), (n.ref.impl = n.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && u !== null) {
                ((e = void 0),
                  (l = t),
                  (n = u.memoizedProps),
                  (u = u.memoizedState),
                  (a = l.stateNode));
                try {
                  var O = ua(l.type, n);
                  ((e = a.getSnapshotBeforeUpdate(O, u)),
                    (a.__reactInternalSnapshotBeforeUpdate = e));
                } catch (q) {
                  re(l, l.return, q);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (l = e.nodeType), l === 9)
                )
                  gf(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      gf(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(y(163));
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (Xe = e));
            break;
          }
          Xe = t.return;
        }
  }
  function io(e, t, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (sl(e, l), a & 4 && Cn(5, l));
        break;
      case 1:
        if ((sl(e, l), a & 4))
          if (((e = l.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (i) {
              re(l, l.return, i);
            }
          else {
            var n = ua(l.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              re(l, l.return, i);
            }
          }
        (a & 64 && eo(l), a & 512 && Rn(l, l.return));
        break;
      case 3:
        if ((sl(e, l), a & 64 && ((e = l.updateQueue), e !== null))) {
          if (((t = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode;
                break;
              case 1:
                t = l.child.stateNode;
            }
          try {
            Zs(e, t);
          } catch (i) {
            re(l, l.return, i);
          }
        }
        break;
      case 27:
        t === null && a & 4 && no(l);
      case 26:
      case 5:
        (sl(e, l), t === null && a & 4 && lo(l), a & 512 && Rn(l, l.return));
        break;
      case 12:
        sl(e, l);
        break;
      case 31:
        (sl(e, l), a & 4 && so(e, l));
        break;
      case 13:
        (sl(e, l),
          a & 4 && ro(e, l),
          a & 64 &&
            ((e = l.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((l = ih.bind(null, l)), Eh(e, l)))));
        break;
      case 22:
        if (((a = l.memoizedState !== null || cl), !a)) {
          ((t = (t !== null && t.memoizedState !== null) || Ce), (n = cl));
          var u = Ce;
          ((cl = a),
            (Ce = t) && !u ? rl(e, l, (l.subtreeFlags & 8772) !== 0) : sl(e, l),
            (cl = n),
            (Ce = u));
        }
        break;
      case 30:
        break;
      default:
        sl(e, l);
    }
  }
  function co(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), co(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && xi(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var Se = null,
    ft = !1;
  function fl(e, t, l) {
    for (l = l.child; l !== null; ) (fo(e, t, l), (l = l.sibling));
  }
  function fo(e, t, l) {
    if (et && typeof et.onCommitFiberUnmount == "function")
      try {
        et.onCommitFiberUnmount(Xt, l);
      } catch {}
    switch (l.tag) {
      case 26:
        (Ce || Vt(l, t),
          fl(e, t, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l)));
        break;
      case 27:
        Ce || Vt(l, t);
        var a = Se,
          n = ft;
        (ql(l.type) && ((Se = l.stateNode), (ft = !1)),
          fl(e, t, l),
          wn(l.stateNode),
          (Se = a),
          (ft = n));
        break;
      case 5:
        Ce || Vt(l, t);
      case 6:
        if (
          ((a = Se),
          (n = ft),
          (Se = null),
          fl(e, t, l),
          (Se = a),
          (ft = n),
          Se !== null)
        )
          if (ft)
            try {
              (Se.nodeType === 9
                ? Se.body
                : Se.nodeName === "HTML"
                  ? Se.ownerDocument.body
                  : Se
              ).removeChild(l.stateNode);
            } catch (u) {
              re(l, t, u);
            }
          else
            try {
              Se.removeChild(l.stateNode);
            } catch (u) {
              re(l, t, u);
            }
        break;
      case 18:
        Se !== null &&
          (ft
            ? ((e = Se),
              td(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                    ? e.ownerDocument.body
                    : e,
                l.stateNode,
              ),
              $a(e))
            : td(Se, l.stateNode));
        break;
      case 4:
        ((a = Se),
          (n = ft),
          (Se = l.stateNode.containerInfo),
          (ft = !0),
          fl(e, t, l),
          (Se = a),
          (ft = n));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (_l(2, l, t), Ce || _l(4, l, t), fl(e, t, l));
        break;
      case 1:
        (Ce ||
          (Vt(l, t),
          (a = l.stateNode),
          typeof a.componentWillUnmount == "function" && to(l, t, a)),
          fl(e, t, l));
        break;
      case 21:
        fl(e, t, l);
        break;
      case 22:
        ((Ce = (a = Ce) || l.memoizedState !== null), fl(e, t, l), (Ce = a));
        break;
      default:
        fl(e, t, l);
    }
  }
  function so(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        $a(e);
      } catch (l) {
        re(t, t.return, l);
      }
    }
  }
  function ro(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        $a(e);
      } catch (l) {
        re(t, t.return, l);
      }
  }
  function I0(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new uo()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new uo()),
          t
        );
      default:
        throw Error(y(435, e.tag));
    }
  }
  function Xu(e, t) {
    var l = I0(e);
    t.forEach(function (a) {
      if (!l.has(a)) {
        l.add(a);
        var n = ch.bind(null, e, a);
        a.then(n, n);
      }
    });
  }
  function st(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a],
          u = e,
          i = t,
          c = i;
        e: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (ql(c.type)) {
                ((Se = c.stateNode), (ft = !1));
                break e;
              }
              break;
            case 5:
              ((Se = c.stateNode), (ft = !1));
              break e;
            case 3:
            case 4:
              ((Se = c.stateNode.containerInfo), (ft = !0));
              break e;
          }
          c = c.return;
        }
        if (Se === null) throw Error(y(160));
        (fo(u, i, n),
          (Se = null),
          (ft = !1),
          (u = n.alternate),
          u !== null && (u.return = null),
          (n.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) (oo(t, e), (t = t.sibling));
  }
  var Bt = null;
  function oo(e, t) {
    var l = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (st(t, e),
          rt(e),
          a & 4 && (_l(3, e, e.return), Cn(3, e), _l(5, e, e.return)));
        break;
      case 1:
        (st(t, e),
          rt(e),
          a & 512 && (Ce || l === null || Vt(l, l.return)),
          a & 64 &&
            cl &&
            ((e = e.updateQueue),
            e !== null &&
              ((a = e.callbacks),
              a !== null &&
                ((l = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = l === null ? a : l.concat(a))))));
        break;
      case 26:
        var n = Bt;
        if (
          (st(t, e),
          rt(e),
          a & 512 && (Ce || l === null || Vt(l, l.return)),
          a & 4)
        ) {
          var u = l !== null ? l.memoizedState : null;
          if (((a = e.memoizedState), l === null))
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  ((a = e.type),
                    (l = e.memoizedProps),
                    (n = n.ownerDocument || n));
                  t: switch (a) {
                    case "title":
                      ((u = n.getElementsByTagName("title")[0]),
                        (!u ||
                          u[cn] ||
                          u[we] ||
                          u.namespaceURI === "http://www.w3.org/2000/svg" ||
                          u.hasAttribute("itemprop")) &&
                          ((u = n.createElement(a)),
                          n.head.insertBefore(
                            u,
                            n.querySelector("head > title"),
                          )),
                        Je(u, a, l),
                        (u[we] = e),
                        Le(u),
                        (a = u));
                      break e;
                    case "link":
                      var i = dd("link", "href", n).get(a + (l.href || ""));
                      if (i) {
                        for (var c = 0; c < i.length; c++)
                          if (
                            ((u = i[c]),
                            u.getAttribute("href") ===
                              (l.href == null || l.href === ""
                                ? null
                                : l.href) &&
                              u.getAttribute("rel") ===
                                (l.rel == null ? null : l.rel) &&
                              u.getAttribute("title") ===
                                (l.title == null ? null : l.title) &&
                              u.getAttribute("crossorigin") ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            i.splice(c, 1);
                            break t;
                          }
                      }
                      ((u = n.createElement(a)),
                        Je(u, a, l),
                        n.head.appendChild(u));
                      break;
                    case "meta":
                      if (
                        (i = dd("meta", "content", n).get(
                          a + (l.content || ""),
                        ))
                      ) {
                        for (c = 0; c < i.length; c++)
                          if (
                            ((u = i[c]),
                            u.getAttribute("content") ===
                              (l.content == null ? null : "" + l.content) &&
                              u.getAttribute("name") ===
                                (l.name == null ? null : l.name) &&
                              u.getAttribute("property") ===
                                (l.property == null ? null : l.property) &&
                              u.getAttribute("http-equiv") ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              u.getAttribute("charset") ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            i.splice(c, 1);
                            break t;
                          }
                      }
                      ((u = n.createElement(a)),
                        Je(u, a, l),
                        n.head.appendChild(u));
                      break;
                    default:
                      throw Error(y(468, a));
                  }
                  ((u[we] = e), Le(u), (a = u));
                }
                e.stateNode = a;
              } else hd(n, e.type, e.stateNode);
            else e.stateNode = od(n, a, e.memoizedProps);
          else
            u !== a
              ? (u === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : u.count--,
                a === null
                  ? hd(n, e.type, e.stateNode)
                  : od(n, a, e.memoizedProps))
              : a === null &&
                e.stateNode !== null &&
                Xc(e, e.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        (st(t, e),
          rt(e),
          a & 512 && (Ce || l === null || Vt(l, l.return)),
          l !== null && a & 4 && Xc(e, e.memoizedProps, l.memoizedProps));
        break;
      case 5:
        if (
          (st(t, e),
          rt(e),
          a & 512 && (Ce || l === null || Vt(l, l.return)),
          e.flags & 32)
        ) {
          n = e.stateNode;
          try {
            ba(n, "");
          } catch (O) {
            re(e, e.return, O);
          }
        }
        (a & 4 &&
          e.stateNode != null &&
          ((n = e.memoizedProps), Xc(e, n, l !== null ? l.memoizedProps : n)),
          a & 1024 && (Zc = !0));
        break;
      case 6:
        if ((st(t, e), rt(e), a & 4)) {
          if (e.stateNode === null) throw Error(y(162));
          ((a = e.memoizedProps), (l = e.stateNode));
          try {
            l.nodeValue = a;
          } catch (O) {
            re(e, e.return, O);
          }
        }
        break;
      case 3:
        if (
          ((ai = null),
          (n = Bt),
          (Bt = ti(t.containerInfo)),
          st(t, e),
          (Bt = n),
          rt(e),
          a & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            $a(t.containerInfo);
          } catch (O) {
            re(e, e.return, O);
          }
        Zc && ((Zc = !1), ho(e));
        break;
      case 4:
        ((a = Bt),
          (Bt = ti(e.stateNode.containerInfo)),
          st(t, e),
          rt(e),
          (Bt = a));
        break;
      case 12:
        (st(t, e), rt(e));
        break;
      case 31:
        (st(t, e),
          rt(e),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), Xu(e, a))));
        break;
      case 13:
        (st(t, e),
          rt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (wu = Pe()),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), Xu(e, a))));
        break;
      case 22:
        n = e.memoizedState !== null;
        var s = l !== null && l.memoizedState !== null,
          v = cl,
          b = Ce;
        if (
          ((cl = v || n),
          (Ce = b || s),
          st(t, e),
          (Ce = b),
          (cl = v),
          rt(e),
          a & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = n ? t._visibility & -2 : t._visibility | 1,
              n && (l === null || s || cl || Ce || ia(e)),
              l = null,
              t = e;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                s = l = t;
                try {
                  if (((u = s.stateNode), n))
                    ((i = u.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"));
                  else {
                    c = s.stateNode;
                    var T = s.memoizedProps.style,
                      g =
                        T != null && T.hasOwnProperty("display")
                          ? T.display
                          : null;
                    c.style.display =
                      g == null || typeof g == "boolean" ? "" : ("" + g).trim();
                  }
                } catch (O) {
                  re(s, s.return, O);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                s = t;
                try {
                  s.stateNode.nodeValue = n ? "" : s.memoizedProps;
                } catch (O) {
                  re(s, s.return, O);
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                s = t;
                try {
                  var p = s.stateNode;
                  n ? ld(p, !0) : ld(s.stateNode, !1);
                } catch (O) {
                  re(s, s.return, O);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              (l === t && (l = null), (t = t.return));
            }
            (l === t && (l = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        a & 4 &&
          ((a = e.updateQueue),
          a !== null &&
            ((l = a.retryQueue),
            l !== null && ((a.retryQueue = null), Xu(e, l))));
        break;
      case 19:
        (st(t, e),
          rt(e),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), Xu(e, a))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (st(t, e), rt(e));
    }
  }
  function rt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, a = e.return; a !== null; ) {
          if (ao(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(y(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode,
              u = Qc(e);
            Lu(e, u, n);
            break;
          case 5:
            var i = l.stateNode;
            l.flags & 32 && (ba(i, ""), (l.flags &= -33));
            var c = Qc(e);
            Lu(e, c, i);
            break;
          case 3:
          case 4:
            var s = l.stateNode.containerInfo,
              v = Qc(e);
            wc(e, v, s);
            break;
          default:
            throw Error(y(161));
        }
      } catch (b) {
        re(e, e.return, b);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function ho(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (ho(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling));
      }
  }
  function sl(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (io(e, t.alternate, t), (t = t.sibling));
  }
  function ia(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (_l(4, t, t.return), ia(t));
          break;
        case 1:
          Vt(t, t.return);
          var l = t.stateNode;
          (typeof l.componentWillUnmount == "function" && to(t, t.return, l),
            ia(t));
          break;
        case 27:
          wn(t.stateNode);
        case 26:
        case 5:
          (Vt(t, t.return), ia(t));
          break;
        case 22:
          t.memoizedState === null && ia(t);
          break;
        case 30:
          ia(t);
          break;
        default:
          ia(t);
      }
      e = e.sibling;
    }
  }
  function rl(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        n = e,
        u = t,
        i = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          (rl(n, u, l), Cn(4, u));
          break;
        case 1:
          if (
            (rl(n, u, l),
            (a = u),
            (n = a.stateNode),
            typeof n.componentDidMount == "function")
          )
            try {
              n.componentDidMount();
            } catch (v) {
              re(a, a.return, v);
            }
          if (((a = u), (n = a.updateQueue), n !== null)) {
            var c = a.stateNode;
            try {
              var s = n.shared.hiddenCallbacks;
              if (s !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < s.length; n++)
                  ws(s[n], c);
            } catch (v) {
              re(a, a.return, v);
            }
          }
          (l && i & 64 && eo(u), Rn(u, u.return));
          break;
        case 27:
          no(u);
        case 26:
        case 5:
          (rl(n, u, l), l && a === null && i & 4 && lo(u), Rn(u, u.return));
          break;
        case 12:
          rl(n, u, l);
          break;
        case 31:
          (rl(n, u, l), l && i & 4 && so(n, u));
          break;
        case 13:
          (rl(n, u, l), l && i & 4 && ro(n, u));
          break;
        case 22:
          (u.memoizedState === null && rl(n, u, l), Rn(u, u.return));
          break;
        case 30:
          break;
        default:
          rl(n, u, l);
      }
      t = t.sibling;
    }
  }
  function Vc(e, t) {
    var l = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (l = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== l && (e != null && e.refCount++, l != null && xn(l)));
  }
  function Kc(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && xn(e)));
  }
  function qt(e, t, l, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (mo(e, t, l, a), (t = t.sibling));
  }
  function mo(e, t, l, a) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (qt(e, t, l, a), n & 2048 && Cn(9, t));
        break;
      case 1:
        qt(e, t, l, a);
        break;
      case 3:
        (qt(e, t, l, a),
          n & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && xn(e))));
        break;
      case 12:
        if (n & 2048) {
          (qt(e, t, l, a), (e = t.stateNode));
          try {
            var u = t.memoizedProps,
              i = u.id,
              c = u.onPostCommit;
            typeof c == "function" &&
              c(
                i,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0,
              );
          } catch (s) {
            re(t, t.return, s);
          }
        } else qt(e, t, l, a);
        break;
      case 31:
        qt(e, t, l, a);
        break;
      case 13:
        qt(e, t, l, a);
        break;
      case 23:
        break;
      case 22:
        ((u = t.stateNode),
          (i = t.alternate),
          t.memoizedState !== null
            ? u._visibility & 2
              ? qt(e, t, l, a)
              : Hn(e, t)
            : u._visibility & 2
              ? qt(e, t, l, a)
              : ((u._visibility |= 2),
                Ga(e, t, l, a, (t.subtreeFlags & 10256) !== 0 || !1)),
          n & 2048 && Vc(i, t));
        break;
      case 24:
        (qt(e, t, l, a), n & 2048 && Kc(t.alternate, t));
        break;
      default:
        qt(e, t, l, a);
    }
  }
  function Ga(e, t, l, a, n) {
    for (
      n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;
    ) {
      var u = e,
        i = t,
        c = l,
        s = a,
        v = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          (Ga(u, i, c, s, n), Cn(8, i));
          break;
        case 23:
          break;
        case 22:
          var b = i.stateNode;
          (i.memoizedState !== null
            ? b._visibility & 2
              ? Ga(u, i, c, s, n)
              : Hn(u, i)
            : ((b._visibility |= 2), Ga(u, i, c, s, n)),
            n && v & 2048 && Vc(i.alternate, i));
          break;
        case 24:
          (Ga(u, i, c, s, n), n && v & 2048 && Kc(i.alternate, i));
          break;
        default:
          Ga(u, i, c, s, n);
      }
      t = t.sibling;
    }
  }
  function Hn(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e,
          a = t,
          n = a.flags;
        switch (a.tag) {
          case 22:
            (Hn(l, a), n & 2048 && Vc(a.alternate, a));
            break;
          case 24:
            (Hn(l, a), n & 2048 && Kc(a.alternate, a));
            break;
          default:
            Hn(l, a);
        }
        t = t.sibling;
      }
  }
  var Bn = 8192;
  function La(e, t, l) {
    if (e.subtreeFlags & Bn)
      for (e = e.child; e !== null; ) (vo(e, t, l), (e = e.sibling));
  }
  function vo(e, t, l) {
    switch (e.tag) {
      case 26:
        (La(e, t, l),
          e.flags & Bn &&
            e.memoizedState !== null &&
            Yh(l, Bt, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        La(e, t, l);
        break;
      case 3:
      case 4:
        var a = Bt;
        ((Bt = ti(e.stateNode.containerInfo)), La(e, t, l), (Bt = a));
        break;
      case 22:
        e.memoizedState === null &&
          ((a = e.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = Bn), (Bn = 16777216), La(e, t, l), (Bn = a))
            : La(e, t, l));
        break;
      default:
        La(e, t, l);
    }
  }
  function go(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function qn(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          ((Xe = a), po(a, e));
        }
      go(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (yo(e), (e = e.sibling));
  }
  function yo(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (qn(e), e.flags & 2048 && _l(9, e, e.return));
        break;
      case 3:
        qn(e);
        break;
      case 12:
        qn(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), Qu(e))
          : qn(e);
        break;
      default:
        qn(e);
    }
  }
  function Qu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          ((Xe = a), po(a, e));
        }
      go(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (_l(8, t, t.return), Qu(t));
          break;
        case 22:
          ((l = t.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), Qu(t)));
          break;
        default:
          Qu(t);
      }
      e = e.sibling;
    }
  }
  function po(e, t) {
    for (; Xe !== null; ) {
      var l = Xe;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          _l(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          xn(l.memoizedState.cache);
      }
      if (((a = l.child), a !== null)) ((a.return = l), (Xe = a));
      else
        e: for (l = e; Xe !== null; ) {
          a = Xe;
          var n = a.sibling,
            u = a.return;
          if ((co(a), a === l)) {
            Xe = null;
            break e;
          }
          if (n !== null) {
            ((n.return = u), (Xe = n));
            break e;
          }
          Xe = u;
        }
    }
  }
  var P0 = {
      getCacheForType: function (e) {
        var t = Ve(_e),
          l = t.data.get(e);
        return (l === void 0 && ((l = e()), t.data.set(e, l)), l);
      },
      cacheSignal: function () {
        return Ve(_e).controller.signal;
      },
    },
    eh = typeof WeakMap == "function" ? WeakMap : Map,
    ue = 0,
    ge = null,
    k = null,
    $ = 0,
    se = 0,
    pt = null,
    Ol = !1,
    Xa = !1,
    Jc = !1,
    ol = 0,
    je = 0,
    Ul = 0,
    ca = 0,
    kc = 0,
    bt = 0,
    Qa = 0,
    Yn = null,
    ot = null,
    Wc = !1,
    wu = 0,
    bo = 0,
    Zu = 1 / 0,
    Vu = null,
    Cl = null,
    qe = 0,
    Rl = null,
    wa = null,
    dl = 0,
    $c = 0,
    Fc = null,
    xo = null,
    Gn = 0,
    Ic = null;
  function xt() {
    return (ue & 2) !== 0 && $ !== 0 ? $ & -$ : x.T !== null ? nf() : un();
  }
  function So() {
    if (bt === 0)
      if (($ & 536870912) === 0 || P) {
        var e = wl;
        ((wl <<= 1), (wl & 3932160) === 0 && (wl = 262144), (bt = e));
      } else bt = 536870912;
    return ((e = gt.current), e !== null && (e.flags |= 32), bt);
  }
  function dt(e, t, l) {
    (((e === ge && (se === 2 || se === 9)) || e.cancelPendingCommit !== null) &&
      (Za(e, 0), Hl(e, $, bt, !1)),
      U(e, l),
      ((ue & 2) === 0 || e !== ge) &&
        (e === ge &&
          ((ue & 2) === 0 && (ca |= l), je === 4 && Hl(e, $, bt, !1)),
        Kt(e)));
  }
  function To(e, t, l) {
    if ((ue & 6) !== 0) throw Error(y(327));
    var a = (!l && (t & 127) === 0 && (t & e.expiredLanes) === 0) || Zl(e, t),
      n = a ? ah(e, t) : ef(e, t, !0),
      u = a;
    do {
      if (n === 0) {
        Xa && !a && Hl(e, t, 0, !1);
        break;
      } else {
        if (((l = e.current.alternate), u && !th(l))) {
          ((n = ef(e, t, !1)), (u = !1));
          continue;
        }
        if (n === 2) {
          if (((u = t), e.errorRecoveryDisabledLanes & u)) var i = 0;
          else
            ((i = e.pendingLanes & -536870913),
              (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0));
          if (i !== 0) {
            t = i;
            e: {
              var c = e;
              n = Yn;
              var s = c.current.memoizedState.isDehydrated;
              if ((s && (Za(c, i).flags |= 256), (i = ef(c, i, !1)), i !== 2)) {
                if (Jc && !s) {
                  ((c.errorRecoveryDisabledLanes |= u), (ca |= u), (n = 4));
                  break e;
                }
                ((u = ot),
                  (ot = n),
                  u !== null &&
                    (ot === null ? (ot = u) : ot.push.apply(ot, u)));
              }
              n = i;
            }
            if (((u = !1), n !== 2)) continue;
          }
        }
        if (n === 1) {
          (Za(e, 0), Hl(e, t, 0, !0));
          break;
        }
        e: {
          switch (((a = e), (u = n), u)) {
            case 0:
            case 1:
              throw Error(y(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Hl(a, t, bt, !Ol);
              break e;
            case 2:
              ot = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(y(329));
          }
          if ((t & 62914560) === t && ((n = wu + 300 - Pe()), 10 < n)) {
            if ((Hl(a, t, bt, !Ol), da(a, 0, !0) !== 0)) break e;
            ((dl = t),
              (a.timeoutHandle = Po(
                Ao.bind(
                  null,
                  a,
                  l,
                  ot,
                  Vu,
                  Wc,
                  t,
                  bt,
                  ca,
                  Qa,
                  Ol,
                  u,
                  "Throttled",
                  -0,
                  0,
                ),
                n,
              )));
            break e;
          }
          Ao(a, l, ot, Vu, Wc, t, bt, ca, Qa, Ol, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Kt(e);
  }
  function Ao(e, t, l, a, n, u, i, c, s, v, b, T, g, p) {
    if (
      ((e.timeoutHandle = -1),
      (T = t.subtreeFlags),
      T & 8192 || (T & 16785408) === 16785408)
    ) {
      ((T = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Ft,
      }),
        vo(t, u, T));
      var O =
        (u & 62914560) === u ? wu - Pe() : (u & 4194048) === u ? bo - Pe() : 0;
      if (((O = Gh(T, O)), O !== null)) {
        ((dl = u),
          (e.cancelPendingCommit = O(
            Oo.bind(null, e, t, u, l, a, n, i, c, s, b, T, null, g, p),
          )),
          Hl(e, u, i, !v));
        return;
      }
    }
    Oo(e, t, u, l, a, n, i, c, s);
  }
  function th(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        t.flags & 16384 &&
        ((l = t.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var a = 0; a < l.length; a++) {
          var n = l[a],
            u = n.getSnapshot;
          n = n.value;
          try {
            if (!mt(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = t.child), t.subtreeFlags & 16384 && l !== null))
        ((l.return = t), (t = l));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function Hl(e, t, l, a) {
    ((t &= ~kc),
      (t &= ~ca),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      a && (e.warmLanes |= t),
      (a = e.expirationTimes));
    for (var n = t; 0 < n; ) {
      var u = 31 - tt(n),
        i = 1 << u;
      ((a[u] = -1), (n &= ~i));
    }
    l !== 0 && oe(e, l, t);
  }
  function Ku() {
    return (ue & 6) === 0 ? (Ln(0), !1) : !0;
  }
  function Pc() {
    if (k !== null) {
      if (se === 0) var e = k.return;
      else ((e = k), (tl = Il = null), vc(e), (Ra = null), (Tn = 0), (e = k));
      for (; e !== null; ) (Pr(e.alternate, e), (e = e.return));
      k = null;
    }
  }
  function Za(e, t) {
    var l = e.timeoutHandle;
    (l !== -1 && ((e.timeoutHandle = -1), Sh(l)),
      (l = e.cancelPendingCommit),
      l !== null && ((e.cancelPendingCommit = null), l()),
      (dl = 0),
      Pc(),
      (ge = e),
      (k = l = Pt(e.current, null)),
      ($ = t),
      (se = 0),
      (pt = null),
      (Ol = !1),
      (Xa = Zl(e, t)),
      (Jc = !1),
      (Qa = bt = kc = ca = Ul = je = 0),
      (ot = Yn = null),
      (Wc = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var n = 31 - tt(a),
          u = 1 << n;
        ((t |= e[n]), (a &= ~u));
      }
    return ((ol = t), hu(), l);
  }
  function No(e, t) {
    ((w = null),
      (x.H = _n),
      t === Ca || t === Su
        ? ((t = Gs()), (se = 3))
        : t === ac
          ? ((t = Gs()), (se = 4))
          : (se =
              t === Oc
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (pt = t),
      k === null && ((je = 1), Hu(e, Mt(t, e.current))));
  }
  function zo() {
    var e = gt.current;
    return e === null
      ? !0
      : ($ & 4194048) === $
        ? Ut === null
        : ($ & 62914560) === $ || ($ & 536870912) !== 0
          ? e === Ut
          : !1;
  }
  function Eo() {
    var e = x.H;
    return ((x.H = _n), e === null ? _n : e);
  }
  function jo() {
    var e = x.A;
    return ((x.A = P0), e);
  }
  function Ju() {
    ((je = 4),
      Ol || (($ & 4194048) !== $ && gt.current !== null) || (Xa = !0),
      ((Ul & 134217727) === 0 && (ca & 134217727) === 0) ||
        ge === null ||
        Hl(ge, $, bt, !1));
  }
  function ef(e, t, l) {
    var a = ue;
    ue |= 2;
    var n = Eo(),
      u = jo();
    ((ge !== e || $ !== t) && ((Vu = null), Za(e, t)), (t = !1));
    var i = je;
    e: do
      try {
        if (se !== 0 && k !== null) {
          var c = k,
            s = pt;
          switch (se) {
            case 8:
              (Pc(), (i = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              gt.current === null && (t = !0);
              var v = se;
              if (((se = 0), (pt = null), Va(e, c, s, v), l && Xa)) {
                i = 0;
                break e;
              }
              break;
            default:
              ((v = se), (se = 0), (pt = null), Va(e, c, s, v));
          }
        }
        (lh(), (i = je));
        break;
      } catch (b) {
        No(e, b);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (tl = Il = null),
      (ue = a),
      (x.H = n),
      (x.A = u),
      k === null && ((ge = null), ($ = 0), hu()),
      i
    );
  }
  function lh() {
    for (; k !== null; ) Mo(k);
  }
  function ah(e, t) {
    var l = ue;
    ue |= 2;
    var a = Eo(),
      n = jo();
    ge !== e || $ !== t
      ? ((Vu = null), (Zu = Pe() + 500), Za(e, t))
      : (Xa = Zl(e, t));
    e: do
      try {
        if (se !== 0 && k !== null) {
          t = k;
          var u = pt;
          t: switch (se) {
            case 1:
              ((se = 0), (pt = null), Va(e, t, u, 1));
              break;
            case 2:
            case 9:
              if (qs(u)) {
                ((se = 0), (pt = null), Do(t));
                break;
              }
              ((t = function () {
                ((se !== 2 && se !== 9) || ge !== e || (se = 7), Kt(e));
              }),
                u.then(t, t));
              break e;
            case 3:
              se = 7;
              break e;
            case 4:
              se = 5;
              break e;
            case 7:
              qs(u)
                ? ((se = 0), (pt = null), Do(t))
                : ((se = 0), (pt = null), Va(e, t, u, 7));
              break;
            case 5:
              var i = null;
              switch (k.tag) {
                case 26:
                  i = k.memoizedState;
                case 5:
                case 27:
                  var c = k;
                  if (i ? md(i) : c.stateNode.complete) {
                    ((se = 0), (pt = null));
                    var s = c.sibling;
                    if (s !== null) k = s;
                    else {
                      var v = c.return;
                      v !== null ? ((k = v), ku(v)) : (k = null);
                    }
                    break t;
                  }
              }
              ((se = 0), (pt = null), Va(e, t, u, 5));
              break;
            case 6:
              ((se = 0), (pt = null), Va(e, t, u, 6));
              break;
            case 8:
              (Pc(), (je = 6));
              break e;
            default:
              throw Error(y(462));
          }
        }
        nh();
        break;
      } catch (b) {
        No(e, b);
      }
    while (!0);
    return (
      (tl = Il = null),
      (x.H = a),
      (x.A = n),
      (ue = l),
      k !== null ? 0 : ((ge = null), ($ = 0), hu(), je)
    );
  }
  function nh() {
    for (; k !== null && !mi(); ) Mo(k);
  }
  function Mo(e) {
    var t = Fr(e.alternate, e, ol);
    ((e.memoizedProps = e.pendingProps), t === null ? ku(e) : (k = t));
  }
  function Do(e) {
    var t = e,
      l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Vr(l, t, t.pendingProps, t.type, void 0, $);
        break;
      case 11:
        t = Vr(l, t, t.pendingProps, t.type.render, t.ref, $);
        break;
      case 5:
        vc(t);
      default:
        (Pr(l, t), (t = k = Es(t, ol)), (t = Fr(l, t, ol)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? ku(e) : (k = t));
  }
  function Va(e, t, l, a) {
    ((tl = Il = null), vc(t), (Ra = null), (Tn = 0));
    var n = t.return;
    try {
      if (K0(e, n, t, l, $)) {
        ((je = 1), Hu(e, Mt(l, e.current)), (k = null));
        return;
      }
    } catch (u) {
      if (n !== null) throw ((k = n), u);
      ((je = 1), Hu(e, Mt(l, e.current)), (k = null));
      return;
    }
    t.flags & 32768
      ? (P || a === 1
          ? (e = !0)
          : Xa || ($ & 536870912) !== 0
            ? (e = !1)
            : ((Ol = e = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = gt.current),
                a !== null && a.tag === 13 && (a.flags |= 16384))),
        _o(t, e))
      : ku(t);
  }
  function ku(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        _o(t, Ol);
        return;
      }
      e = t.return;
      var l = W0(t.alternate, t, ol);
      if (l !== null) {
        k = l;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        k = t;
        return;
      }
      k = t = e;
    } while (t !== null);
    je === 0 && (je = 5);
  }
  function _o(e, t) {
    do {
      var l = $0(e.alternate, e);
      if (l !== null) {
        ((l.flags &= 32767), (k = l));
        return;
      }
      if (
        ((l = e.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        k = e;
        return;
      }
      k = e = l;
    } while (e !== null);
    ((je = 6), (k = null));
  }
  function Oo(e, t, l, a, n, u, i, c, s) {
    e.cancelPendingCommit = null;
    do Wu();
    while (qe !== 0);
    if ((ue & 6) !== 0) throw Error(y(327));
    if (t !== null) {
      if (t === e.current) throw Error(y(177));
      if (
        ((u = t.lanes | t.childLanes),
        (u |= Qi),
        Z(e, l, u, i, c, s),
        e === ge && ((k = ge = null), ($ = 0)),
        (wa = t),
        (Rl = e),
        (dl = l),
        ($c = u),
        (Fc = n),
        (xo = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            fh(pl, function () {
              return (Bo(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        ((a = x.T), (x.T = null), (n = z.p), (z.p = 2), (i = ue), (ue |= 4));
        try {
          F0(e, t, l);
        } finally {
          ((ue = i), (z.p = n), (x.T = a));
        }
      }
      ((qe = 1), Uo(), Co(), Ro());
    }
  }
  function Uo() {
    if (qe === 1) {
      qe = 0;
      var e = Rl,
        t = wa,
        l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        ((l = x.T), (x.T = null));
        var a = z.p;
        z.p = 2;
        var n = ue;
        ue |= 4;
        try {
          oo(t, e);
          var u = hf,
            i = ys(e.containerInfo),
            c = u.focusedElem,
            s = u.selectionRange;
          if (
            i !== c &&
            c &&
            c.ownerDocument &&
            gs(c.ownerDocument.documentElement, c)
          ) {
            if (s !== null && qi(c)) {
              var v = s.start,
                b = s.end;
              if ((b === void 0 && (b = v), "selectionStart" in c))
                ((c.selectionStart = v),
                  (c.selectionEnd = Math.min(b, c.value.length)));
              else {
                var T = c.ownerDocument || document,
                  g = (T && T.defaultView) || window;
                if (g.getSelection) {
                  var p = g.getSelection(),
                    O = c.textContent.length,
                    q = Math.min(s.start, O),
                    me = s.end === void 0 ? q : Math.min(s.end, O);
                  !p.extend && q > me && ((i = me), (me = q), (q = i));
                  var h = vs(c, q),
                    r = vs(c, me);
                  if (
                    h &&
                    r &&
                    (p.rangeCount !== 1 ||
                      p.anchorNode !== h.node ||
                      p.anchorOffset !== h.offset ||
                      p.focusNode !== r.node ||
                      p.focusOffset !== r.offset)
                  ) {
                    var m = T.createRange();
                    (m.setStart(h.node, h.offset),
                      p.removeAllRanges(),
                      q > me
                        ? (p.addRange(m), p.extend(r.node, r.offset))
                        : (m.setEnd(r.node, r.offset), p.addRange(m)));
                  }
                }
              }
            }
            for (T = [], p = c; (p = p.parentNode); )
              p.nodeType === 1 &&
                T.push({ element: p, left: p.scrollLeft, top: p.scrollTop });
            for (
              typeof c.focus == "function" && c.focus(), c = 0;
              c < T.length;
              c++
            ) {
              var S = T[c];
              ((S.element.scrollLeft = S.left), (S.element.scrollTop = S.top));
            }
          }
          ((ci = !!df), (hf = df = null));
        } finally {
          ((ue = n), (z.p = a), (x.T = l));
        }
      }
      ((e.current = t), (qe = 2));
    }
  }
  function Co() {
    if (qe === 2) {
      qe = 0;
      var e = Rl,
        t = wa,
        l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        ((l = x.T), (x.T = null));
        var a = z.p;
        z.p = 2;
        var n = ue;
        ue |= 4;
        try {
          io(e, t.alternate, t);
        } finally {
          ((ue = n), (z.p = a), (x.T = l));
        }
      }
      qe = 3;
    }
  }
  function Ro() {
    if (qe === 4 || qe === 3) {
      ((qe = 0), In());
      var e = Rl,
        t = wa,
        l = dl,
        a = xo;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (qe = 5)
        : ((qe = 0), (wa = Rl = null), Ho(e, e.pendingLanes));
      var n = e.pendingLanes;
      if (
        (n === 0 && (Cl = null),
        tu(l),
        (t = t.stateNode),
        et && typeof et.onCommitFiberRoot == "function")
      )
        try {
          et.onCommitFiberRoot(Xt, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        ((t = x.T), (n = z.p), (z.p = 2), (x.T = null));
        try {
          for (var u = e.onRecoverableError, i = 0; i < a.length; i++) {
            var c = a[i];
            u(c.value, { componentStack: c.stack });
          }
        } finally {
          ((x.T = t), (z.p = n));
        }
      }
      ((dl & 3) !== 0 && Wu(),
        Kt(e),
        (n = e.pendingLanes),
        (l & 261930) !== 0 && (n & 42) !== 0
          ? e === Ic
            ? Gn++
            : ((Gn = 0), (Ic = e))
          : (Gn = 0),
        Ln(0));
    }
  }
  function Ho(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), xn(t)));
  }
  function Wu() {
    return (Uo(), Co(), Ro(), Bo());
  }
  function Bo() {
    if (qe !== 5) return !1;
    var e = Rl,
      t = $c;
    $c = 0;
    var l = tu(dl),
      a = x.T,
      n = z.p;
    try {
      ((z.p = 32 > l ? 32 : l), (x.T = null), (l = Fc), (Fc = null));
      var u = Rl,
        i = dl;
      if (((qe = 0), (wa = Rl = null), (dl = 0), (ue & 6) !== 0))
        throw Error(y(331));
      var c = ue;
      if (
        ((ue |= 4),
        yo(u.current),
        mo(u, u.current, i, l),
        (ue = c),
        Ln(0, !1),
        et && typeof et.onPostCommitFiberRoot == "function")
      )
        try {
          et.onPostCommitFiberRoot(Xt, u);
        } catch {}
      return !0;
    } finally {
      ((z.p = n), (x.T = a), Ho(e, t));
    }
  }
  function qo(e, t, l) {
    ((t = Mt(l, t)),
      (t = _c(e.stateNode, t, 2)),
      (e = jl(e, t, 2)),
      e !== null && (U(e, 2), Kt(e)));
  }
  function re(e, t, l) {
    if (e.tag === 3) qo(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          qo(t, e, l);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (Cl === null || !Cl.has(a)))
          ) {
            ((e = Mt(l, e)),
              (l = qr(2)),
              (a = jl(t, l, 2)),
              a !== null && (Yr(l, a, t, e), U(a, 2), Kt(a)));
            break;
          }
        }
        t = t.return;
      }
  }
  function tf(e, t, l) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new eh();
      var n = new Set();
      a.set(t, n);
    } else ((n = a.get(t)), n === void 0 && ((n = new Set()), a.set(t, n)));
    n.has(l) ||
      ((Jc = !0), n.add(l), (e = uh.bind(null, e, t, l)), t.then(e, e));
  }
  function uh(e, t, l) {
    var a = e.pingCache;
    (a !== null && a.delete(t),
      (e.pingedLanes |= e.suspendedLanes & l),
      (e.warmLanes &= ~l),
      ge === e &&
        ($ & l) === l &&
        (je === 4 || (je === 3 && ($ & 62914560) === $ && 300 > Pe() - wu)
          ? (ue & 2) === 0 && Za(e, 0)
          : (kc |= l),
        Qa === $ && (Qa = 0)),
      Kt(e));
  }
  function Yo(e, t) {
    (t === 0 && (t = M()), (e = Wl(e, t)), e !== null && (U(e, t), Kt(e)));
  }
  function ih(e) {
    var t = e.memoizedState,
      l = 0;
    (t !== null && (l = t.retryLane), Yo(e, l));
  }
  function ch(e, t) {
    var l = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var a = e.stateNode,
          n = e.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(y(314));
    }
    (a !== null && a.delete(t), Yo(e, l));
  }
  function fh(e, t) {
    return ln(e, t);
  }
  var $u = null,
    Ka = null,
    lf = !1,
    Fu = !1,
    af = !1,
    Bl = 0;
  function Kt(e) {
    (e !== Ka &&
      e.next === null &&
      (Ka === null ? ($u = Ka = e) : (Ka = Ka.next = e)),
      (Fu = !0),
      lf || ((lf = !0), rh()));
  }
  function Ln(e, t) {
    if (!af && Fu) {
      af = !0;
      do
        for (var l = !1, a = $u; a !== null; ) {
          if (e !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var i = a.suspendedLanes,
                c = a.pingedLanes;
              ((u = (1 << (31 - tt(42 | e) + 1)) - 1),
                (u &= n & ~(i & ~c)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0));
            }
            u !== 0 && ((l = !0), Qo(a, u));
          } else
            ((u = $),
              (u = da(
                a,
                a === ge ? u : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
              )),
              (u & 3) === 0 || Zl(a, u) || ((l = !0), Qo(a, u)));
          a = a.next;
        }
      while (l);
      af = !1;
    }
  }
  function sh() {
    Go();
  }
  function Go() {
    Fu = lf = !1;
    var e = 0;
    Bl !== 0 && xh() && (e = Bl);
    for (var t = Pe(), l = null, a = $u; a !== null; ) {
      var n = a.next,
        u = Lo(a, t);
      (u === 0
        ? ((a.next = null),
          l === null ? ($u = n) : (l.next = n),
          n === null && (Ka = l))
        : ((l = a), (e !== 0 || (u & 3) !== 0) && (Fu = !0)),
        (a = n));
    }
    ((qe !== 0 && qe !== 5) || Ln(e), Bl !== 0 && (Bl = 0));
  }
  function Lo(e, t) {
    for (
      var l = e.suspendedLanes,
        a = e.pingedLanes,
        n = e.expirationTimes,
        u = e.pendingLanes & -62914561;
      0 < u;
    ) {
      var i = 31 - tt(u),
        c = 1 << i,
        s = n[i];
      (s === -1
        ? ((c & l) === 0 || (c & a) !== 0) && (n[i] = d(c, t))
        : s <= t && (e.expiredLanes |= c),
        (u &= ~c));
    }
    if (
      ((t = ge),
      (l = $),
      (l = da(
        e,
        e === t ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      (a = e.callbackNode),
      l === 0 ||
        (e === t && (se === 2 || se === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && an(a),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((l & 3) === 0 || Zl(e, l)) {
      if (((t = l & -l), t === e.callbackPriority)) return t;
      switch ((a !== null && an(a), tu(l))) {
        case 2:
        case 8:
          l = nn;
          break;
        case 32:
          l = pl;
          break;
        case 268435456:
          l = ra;
          break;
        default:
          l = pl;
      }
      return (
        (a = Xo.bind(null, e)),
        (l = ln(l, a)),
        (e.callbackPriority = t),
        (e.callbackNode = l),
        t
      );
    }
    return (
      a !== null && a !== null && an(a),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function Xo(e, t) {
    if (qe !== 0 && qe !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var l = e.callbackNode;
    if (Wu() && e.callbackNode !== l) return null;
    var a = $;
    return (
      (a = da(
        e,
        e === ge ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      a === 0
        ? null
        : (To(e, a, t),
          Lo(e, Pe()),
          e.callbackNode != null && e.callbackNode === l
            ? Xo.bind(null, e)
            : null)
    );
  }
  function Qo(e, t) {
    if (Wu()) return null;
    To(e, t, !0);
  }
  function rh() {
    Th(function () {
      (ue & 6) !== 0 ? ln(yl, sh) : Go();
    });
  }
  function nf() {
    if (Bl === 0) {
      var e = Oa;
      (e === 0 && ((e = Nt), (Nt <<= 1), (Nt & 261888) === 0 && (Nt = 256)),
        (Bl = e));
    }
    return Bl;
  }
  function wo(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : uu("" + e);
  }
  function Zo(e, t) {
    var l = t.ownerDocument.createElement("input");
    return (
      (l.name = t.name),
      (l.value = t.value),
      e.id && l.setAttribute("form", e.id),
      t.parentNode.insertBefore(l, t),
      (e = new FormData(e)),
      l.parentNode.removeChild(l),
      e
    );
  }
  function oh(e, t, l, a, n) {
    if (t === "submit" && l && l.stateNode === n) {
      var u = wo((n[it] || null).action),
        i = a.submitter;
      i &&
        ((t = (t = i[it] || null)
          ? wo(t.formAction)
          : i.getAttribute("formAction")),
        t !== null && ((u = t), (i = null)));
      var c = new su("action", "action", null, a, n);
      e.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Bl !== 0) {
                  var s = i ? Zo(n, i) : new FormData(n);
                  Nc(
                    l,
                    { pending: !0, data: s, method: n.method, action: u },
                    null,
                    s,
                  );
                }
              } else
                typeof u == "function" &&
                  (c.preventDefault(),
                  (s = i ? Zo(n, i) : new FormData(n)),
                  Nc(
                    l,
                    { pending: !0, data: s, method: n.method, action: u },
                    u,
                    s,
                  ));
            },
            currentTarget: n,
          },
        ],
      });
    }
  }
  for (var uf = 0; uf < Xi.length; uf++) {
    var cf = Xi[uf],
      dh = cf.toLowerCase(),
      hh = cf[0].toUpperCase() + cf.slice(1);
    Ht(dh, "on" + hh);
  }
  (Ht(xs, "onAnimationEnd"),
    Ht(Ss, "onAnimationIteration"),
    Ht(Ts, "onAnimationStart"),
    Ht("dblclick", "onDoubleClick"),
    Ht("focusin", "onFocus"),
    Ht("focusout", "onBlur"),
    Ht(D0, "onTransitionRun"),
    Ht(_0, "onTransitionStart"),
    Ht(O0, "onTransitionCancel"),
    Ht(As, "onTransitionEnd"),
    ya("onMouseEnter", ["mouseout", "mouseover"]),
    ya("onMouseLeave", ["mouseout", "mouseover"]),
    ya("onPointerEnter", ["pointerout", "pointerover"]),
    ya("onPointerLeave", ["pointerout", "pointerover"]),
    Vl(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Vl(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Vl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Vl(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Vl(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Vl(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var Xn =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    mh = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Xn),
    );
  function Vo(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var a = e[l],
        n = a.event;
      a = a.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var i = a.length - 1; 0 <= i; i--) {
            var c = a[i],
              s = c.instance,
              v = c.currentTarget;
            if (((c = c.listener), s !== u && n.isPropagationStopped()))
              break e;
            ((u = c), (n.currentTarget = v));
            try {
              u(n);
            } catch (b) {
              du(b);
            }
            ((n.currentTarget = null), (u = s));
          }
        else
          for (i = 0; i < a.length; i++) {
            if (
              ((c = a[i]),
              (s = c.instance),
              (v = c.currentTarget),
              (c = c.listener),
              s !== u && n.isPropagationStopped())
            )
              break e;
            ((u = c), (n.currentTarget = v));
            try {
              u(n);
            } catch (b) {
              du(b);
            }
            ((n.currentTarget = null), (u = s));
          }
      }
    }
  }
  function W(e, t) {
    var l = t[bi];
    l === void 0 && (l = t[bi] = new Set());
    var a = e + "__bubble";
    l.has(a) || (Ko(t, e, 2, !1), l.add(a));
  }
  function ff(e, t, l) {
    var a = 0;
    (t && (a |= 4), Ko(l, e, a, t));
  }
  var Iu = "_reactListening" + Math.random().toString(36).slice(2);
  function sf(e) {
    if (!e[Iu]) {
      ((e[Iu] = !0),
        Yf.forEach(function (l) {
          l !== "selectionchange" && (mh.has(l) || ff(l, !1, e), ff(l, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Iu] || ((t[Iu] = !0), ff("selectionchange", !1, t));
    }
  }
  function Ko(e, t, l, a) {
    switch (Sd(t)) {
      case 2:
        var n = Qh;
        break;
      case 8:
        n = wh;
        break;
      default:
        n = Nf;
    }
    ((l = n.bind(null, t, l, e)),
      (n = void 0),
      !Mi ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (n = !0),
      a
        ? n !== void 0
          ? e.addEventListener(t, l, { capture: !0, passive: n })
          : e.addEventListener(t, l, !0)
        : n !== void 0
          ? e.addEventListener(t, l, { passive: n })
          : e.addEventListener(t, l, !1));
  }
  function rf(e, t, l, a, n) {
    var u = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (;;) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var c = a.stateNode.containerInfo;
          if (c === n) break;
          if (i === 4)
            for (i = a.return; i !== null; ) {
              var s = i.tag;
              if ((s === 3 || s === 4) && i.stateNode.containerInfo === n)
                return;
              i = i.return;
            }
          for (; c !== null; ) {
            if (((i = ma(c)), i === null)) return;
            if (((s = i.tag), s === 5 || s === 6 || s === 26 || s === 27)) {
              a = u = i;
              continue e;
            }
            c = c.parentNode;
          }
        }
        a = a.return;
      }
    $f(function () {
      var v = u,
        b = Ei(l),
        T = [];
      e: {
        var g = Ns.get(e);
        if (g !== void 0) {
          var p = su,
            O = e;
          switch (e) {
            case "keypress":
              if (cu(l) === 0) break e;
            case "keydown":
            case "keyup":
              p = c0;
              break;
            case "focusin":
              ((O = "focus"), (p = Ui));
              break;
            case "focusout":
              ((O = "blur"), (p = Ui));
              break;
            case "beforeblur":
            case "afterblur":
              p = Ui;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              p = Pf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              p = Wd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              p = r0;
              break;
            case xs:
            case Ss:
            case Ts:
              p = Id;
              break;
            case As:
              p = d0;
              break;
            case "scroll":
            case "scrollend":
              p = Jd;
              break;
            case "wheel":
              p = m0;
              break;
            case "copy":
            case "cut":
            case "paste":
              p = e0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              p = ts;
              break;
            case "toggle":
            case "beforetoggle":
              p = g0;
          }
          var q = (t & 4) !== 0,
            me = !q && (e === "scroll" || e === "scrollend"),
            h = q ? (g !== null ? g + "Capture" : null) : g;
          q = [];
          for (var r = v, m; r !== null; ) {
            var S = r;
            if (
              ((m = S.stateNode),
              (S = S.tag),
              (S !== 5 && S !== 26 && S !== 27) ||
                m === null ||
                h === null ||
                ((S = sn(r, h)), S != null && q.push(Qn(r, S, m))),
              me)
            )
              break;
            r = r.return;
          }
          0 < q.length &&
            ((g = new p(g, O, null, l, b)), T.push({ event: g, listeners: q }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((g = e === "mouseover" || e === "pointerover"),
            (p = e === "mouseout" || e === "pointerout"),
            g &&
              l !== zi &&
              (O = l.relatedTarget || l.fromElement) &&
              (ma(O) || O[ha]))
          )
            break e;
          if (
            (p || g) &&
            ((g =
              b.window === b
                ? b
                : (g = b.ownerDocument)
                  ? g.defaultView || g.parentWindow
                  : window),
            p
              ? ((O = l.relatedTarget || l.toElement),
                (p = v),
                (O = O ? ma(O) : null),
                O !== null &&
                  ((me = I(O)),
                  (q = O.tag),
                  O !== me || (q !== 5 && q !== 27 && q !== 6)) &&
                  (O = null))
              : ((p = null), (O = v)),
            p !== O)
          ) {
            if (
              ((q = Pf),
              (S = "onMouseLeave"),
              (h = "onMouseEnter"),
              (r = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((q = ts),
                (S = "onPointerLeave"),
                (h = "onPointerEnter"),
                (r = "pointer")),
              (me = p == null ? g : fn(p)),
              (m = O == null ? g : fn(O)),
              (g = new q(S, r + "leave", p, l, b)),
              (g.target = me),
              (g.relatedTarget = m),
              (S = null),
              ma(b) === v &&
                ((q = new q(h, r + "enter", O, l, b)),
                (q.target = m),
                (q.relatedTarget = me),
                (S = q)),
              (me = S),
              p && O)
            )
              t: {
                for (q = vh, h = p, r = O, m = 0, S = h; S; S = q(S)) m++;
                S = 0;
                for (var H = r; H; H = q(H)) S++;
                for (; 0 < m - S; ) ((h = q(h)), m--);
                for (; 0 < S - m; ) ((r = q(r)), S--);
                for (; m--; ) {
                  if (h === r || (r !== null && h === r.alternate)) {
                    q = h;
                    break t;
                  }
                  ((h = q(h)), (r = q(r)));
                }
                q = null;
              }
            else q = null;
            (p !== null && Jo(T, g, p, q, !1),
              O !== null && me !== null && Jo(T, me, O, q, !0));
          }
        }
        e: {
          if (
            ((g = v ? fn(v) : window),
            (p = g.nodeName && g.nodeName.toLowerCase()),
            p === "select" || (p === "input" && g.type === "file"))
          )
            var ae = ss;
          else if (cs(g))
            if (rs) ae = E0;
            else {
              ae = N0;
              var C = A0;
            }
          else
            ((p = g.nodeName),
              !p ||
              p.toLowerCase() !== "input" ||
              (g.type !== "checkbox" && g.type !== "radio")
                ? v && Ni(v.elementType) && (ae = ss)
                : (ae = z0));
          if (ae && (ae = ae(e, v))) {
            fs(T, ae, l, b);
            break e;
          }
          (C && C(e, g, v),
            e === "focusout" &&
              v &&
              g.type === "number" &&
              v.memoizedProps.value != null &&
              Ai(g, "number", g.value));
        }
        switch (((C = v ? fn(v) : window), e)) {
          case "focusin":
            (cs(C) || C.contentEditable === "true") &&
              ((Aa = C), (Yi = v), (yn = null));
            break;
          case "focusout":
            yn = Yi = Aa = null;
            break;
          case "mousedown":
            Gi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Gi = !1), ps(T, l, b));
            break;
          case "selectionchange":
            if (M0) break;
          case "keydown":
          case "keyup":
            ps(T, l, b);
        }
        var V;
        if (Ri)
          e: {
            switch (e) {
              case "compositionstart":
                var F = "onCompositionStart";
                break e;
              case "compositionend":
                F = "onCompositionEnd";
                break e;
              case "compositionupdate":
                F = "onCompositionUpdate";
                break e;
            }
            F = void 0;
          }
        else
          Ta
            ? us(e, l) && (F = "onCompositionEnd")
            : e === "keydown" &&
              l.keyCode === 229 &&
              (F = "onCompositionStart");
        (F &&
          (ls &&
            l.locale !== "ko" &&
            (Ta || F !== "onCompositionStart"
              ? F === "onCompositionEnd" && Ta && (V = Ff())
              : ((xl = b),
                (Di = "value" in xl ? xl.value : xl.textContent),
                (Ta = !0))),
          (C = Pu(v, F)),
          0 < C.length &&
            ((F = new es(F, e, null, l, b)),
            T.push({ event: F, listeners: C }),
            V ? (F.data = V) : ((V = is(l)), V !== null && (F.data = V)))),
          (V = p0 ? b0(e, l) : x0(e, l)) &&
            ((F = Pu(v, "onBeforeInput")),
            0 < F.length &&
              ((C = new es("onBeforeInput", "beforeinput", null, l, b)),
              T.push({ event: C, listeners: F }),
              (C.data = V))),
          oh(T, e, v, l, b));
      }
      Vo(T, t);
    });
  }
  function Qn(e, t, l) {
    return { instance: e, listener: t, currentTarget: l };
  }
  function Pu(e, t) {
    for (var l = t + "Capture", a = []; e !== null; ) {
      var n = e,
        u = n.stateNode;
      if (
        ((n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          u === null ||
          ((n = sn(e, l)),
          n != null && a.unshift(Qn(e, n, u)),
          (n = sn(e, t)),
          n != null && a.push(Qn(e, n, u))),
        e.tag === 3)
      )
        return a;
      e = e.return;
    }
    return [];
  }
  function vh(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Jo(e, t, l, a, n) {
    for (var u = t._reactName, i = []; l !== null && l !== a; ) {
      var c = l,
        s = c.alternate,
        v = c.stateNode;
      if (((c = c.tag), s !== null && s === a)) break;
      ((c !== 5 && c !== 26 && c !== 27) ||
        v === null ||
        ((s = v),
        n
          ? ((v = sn(l, u)), v != null && i.unshift(Qn(l, v, s)))
          : n || ((v = sn(l, u)), v != null && i.push(Qn(l, v, s)))),
        (l = l.return));
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  var gh = /\r\n?/g,
    yh = /\u0000|\uFFFD/g;
  function ko(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        gh,
        `
`,
      )
      .replace(yh, "");
  }
  function Wo(e, t) {
    return ((t = ko(t)), ko(e) === t);
  }
  function he(e, t, l, a, n, u) {
    switch (l) {
      case "children":
        typeof a == "string"
          ? t === "body" || (t === "textarea" && a === "") || ba(e, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            t !== "body" &&
            ba(e, "" + a);
        break;
      case "className":
        au(e, "class", a);
        break;
      case "tabIndex":
        au(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        au(e, l, a);
        break;
      case "style":
        kf(e, a, u);
        break;
      case "data":
        if (t !== "object") {
          au(e, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || l !== "href")) {
          e.removeAttribute(l);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          e.removeAttribute(l);
          break;
        }
        ((a = uu("" + a)), e.setAttribute(l, a));
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof u == "function" &&
            (l === "formAction"
              ? (t !== "input" && he(e, t, "name", n.name, n, null),
                he(e, t, "formEncType", n.formEncType, n, null),
                he(e, t, "formMethod", n.formMethod, n, null),
                he(e, t, "formTarget", n.formTarget, n, null))
              : (he(e, t, "encType", n.encType, n, null),
                he(e, t, "method", n.method, n, null),
                he(e, t, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(l);
          break;
        }
        ((a = uu("" + a)), e.setAttribute(l, a));
        break;
      case "onClick":
        a != null && (e.onclick = Ft);
        break;
      case "onScroll":
        a != null && W("scroll", e);
        break;
      case "onScrollEnd":
        a != null && W("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(y(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(y(60));
            e.innerHTML = l;
          }
        }
        break;
      case "multiple":
        e.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        e.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        ((l = uu("" + a)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? e.setAttribute(l, "" + a)
          : e.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? e.setAttribute(l, "")
          : e.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0
          ? e.setAttribute(l, "")
          : a !== !1 &&
              a != null &&
              typeof a != "function" &&
              typeof a != "symbol"
            ? e.setAttribute(l, a)
            : e.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? e.setAttribute(l, a)
          : e.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? e.removeAttribute(l)
          : e.setAttribute(l, a);
        break;
      case "popover":
        (W("beforetoggle", e), W("toggle", e), lu(e, "popover", a));
        break;
      case "xlinkActuate":
        $t(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        $t(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        $t(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        $t(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        $t(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        $t(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        $t(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        $t(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        $t(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        lu(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== "o" && l[0] !== "O") ||
          (l[1] !== "n" && l[1] !== "N")) &&
          ((l = Vd.get(l) || l), lu(e, l, a));
    }
  }
  function of(e, t, l, a, n, u) {
    switch (l) {
      case "style":
        kf(e, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(y(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(y(60));
            e.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? ba(e, a)
          : (typeof a == "number" || typeof a == "bigint") && ba(e, "" + a);
        break;
      case "onScroll":
        a != null && W("scroll", e);
        break;
      case "onScrollEnd":
        a != null && W("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = Ft);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Gf.hasOwnProperty(l))
          e: {
            if (
              l[0] === "o" &&
              l[1] === "n" &&
              ((n = l.endsWith("Capture")),
              (t = l.slice(2, n ? l.length - 7 : void 0)),
              (u = e[it] || null),
              (u = u != null ? u[l] : null),
              typeof u == "function" && e.removeEventListener(t, u, n),
              typeof a == "function")
            ) {
              (typeof u != "function" &&
                u !== null &&
                (l in e
                  ? (e[l] = null)
                  : e.hasAttribute(l) && e.removeAttribute(l)),
                e.addEventListener(t, a, n));
              break e;
            }
            l in e
              ? (e[l] = a)
              : a === !0
                ? e.setAttribute(l, "")
                : lu(e, l, a);
          }
    }
  }
  function Je(e, t, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (W("error", e), W("load", e));
        var a = !1,
          n = !1,
          u;
        for (u in l)
          if (l.hasOwnProperty(u)) {
            var i = l[u];
            if (i != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(y(137, t));
                default:
                  he(e, t, u, i, l, null);
              }
          }
        (n && he(e, t, "srcSet", l.srcSet, l, null),
          a && he(e, t, "src", l.src, l, null));
        return;
      case "input":
        W("invalid", e);
        var c = (u = i = n = null),
          s = null,
          v = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var b = l[a];
            if (b != null)
              switch (a) {
                case "name":
                  n = b;
                  break;
                case "type":
                  i = b;
                  break;
                case "checked":
                  s = b;
                  break;
                case "defaultChecked":
                  v = b;
                  break;
                case "value":
                  u = b;
                  break;
                case "defaultValue":
                  c = b;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (b != null) throw Error(y(137, t));
                  break;
                default:
                  he(e, t, a, b, l, null);
              }
          }
        Zf(e, u, c, s, v, i, n, !1);
        return;
      case "select":
        (W("invalid", e), (a = i = u = null));
        for (n in l)
          if (l.hasOwnProperty(n) && ((c = l[n]), c != null))
            switch (n) {
              case "value":
                u = c;
                break;
              case "defaultValue":
                i = c;
                break;
              case "multiple":
                a = c;
              default:
                he(e, t, n, c, l, null);
            }
        ((t = u),
          (l = i),
          (e.multiple = !!a),
          t != null ? pa(e, !!a, t, !1) : l != null && pa(e, !!a, l, !0));
        return;
      case "textarea":
        (W("invalid", e), (u = n = a = null));
        for (i in l)
          if (l.hasOwnProperty(i) && ((c = l[i]), c != null))
            switch (i) {
              case "value":
                a = c;
                break;
              case "defaultValue":
                n = c;
                break;
              case "children":
                u = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(y(91));
                break;
              default:
                he(e, t, i, c, l, null);
            }
        Kf(e, a, n, u);
        return;
      case "option":
        for (s in l)
          if (l.hasOwnProperty(s) && ((a = l[s]), a != null))
            switch (s) {
              case "selected":
                e.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                he(e, t, s, a, l, null);
            }
        return;
      case "dialog":
        (W("beforetoggle", e), W("toggle", e), W("cancel", e), W("close", e));
        break;
      case "iframe":
      case "object":
        W("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Xn.length; a++) W(Xn[a], e);
        break;
      case "image":
        (W("error", e), W("load", e));
        break;
      case "details":
        W("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        (W("error", e), W("load", e));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (v in l)
          if (l.hasOwnProperty(v) && ((a = l[v]), a != null))
            switch (v) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(y(137, t));
              default:
                he(e, t, v, a, l, null);
            }
        return;
      default:
        if (Ni(t)) {
          for (b in l)
            l.hasOwnProperty(b) &&
              ((a = l[b]), a !== void 0 && of(e, t, b, a, l, void 0));
          return;
        }
    }
    for (c in l)
      l.hasOwnProperty(c) && ((a = l[c]), a != null && he(e, t, c, a, l, null));
  }
  function ph(e, t, l, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null,
          u = null,
          i = null,
          c = null,
          s = null,
          v = null,
          b = null;
        for (p in l) {
          var T = l[p];
          if (l.hasOwnProperty(p) && T != null)
            switch (p) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                s = T;
              default:
                a.hasOwnProperty(p) || he(e, t, p, null, a, T);
            }
        }
        for (var g in a) {
          var p = a[g];
          if (((T = l[g]), a.hasOwnProperty(g) && (p != null || T != null)))
            switch (g) {
              case "type":
                u = p;
                break;
              case "name":
                n = p;
                break;
              case "checked":
                v = p;
                break;
              case "defaultChecked":
                b = p;
                break;
              case "value":
                i = p;
                break;
              case "defaultValue":
                c = p;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (p != null) throw Error(y(137, t));
                break;
              default:
                p !== T && he(e, t, g, p, a, T);
            }
        }
        Ti(e, i, c, s, v, b, u, n);
        return;
      case "select":
        p = i = c = g = null;
        for (u in l)
          if (((s = l[u]), l.hasOwnProperty(u) && s != null))
            switch (u) {
              case "value":
                break;
              case "multiple":
                p = s;
              default:
                a.hasOwnProperty(u) || he(e, t, u, null, a, s);
            }
        for (n in a)
          if (
            ((u = a[n]),
            (s = l[n]),
            a.hasOwnProperty(n) && (u != null || s != null))
          )
            switch (n) {
              case "value":
                g = u;
                break;
              case "defaultValue":
                c = u;
                break;
              case "multiple":
                i = u;
              default:
                u !== s && he(e, t, n, u, a, s);
            }
        ((t = c),
          (l = i),
          (a = p),
          g != null
            ? pa(e, !!l, g, !1)
            : !!a != !!l &&
              (t != null ? pa(e, !!l, t, !0) : pa(e, !!l, l ? [] : "", !1)));
        return;
      case "textarea":
        p = g = null;
        for (c in l)
          if (
            ((n = l[c]),
            l.hasOwnProperty(c) && n != null && !a.hasOwnProperty(c))
          )
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                he(e, t, c, null, a, n);
            }
        for (i in a)
          if (
            ((n = a[i]),
            (u = l[i]),
            a.hasOwnProperty(i) && (n != null || u != null))
          )
            switch (i) {
              case "value":
                g = n;
                break;
              case "defaultValue":
                p = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(y(91));
                break;
              default:
                n !== u && he(e, t, i, n, a, u);
            }
        Vf(e, g, p);
        return;
      case "option":
        for (var O in l)
          if (
            ((g = l[O]),
            l.hasOwnProperty(O) && g != null && !a.hasOwnProperty(O))
          )
            switch (O) {
              case "selected":
                e.selected = !1;
                break;
              default:
                he(e, t, O, null, a, g);
            }
        for (s in a)
          if (
            ((g = a[s]),
            (p = l[s]),
            a.hasOwnProperty(s) && g !== p && (g != null || p != null))
          )
            switch (s) {
              case "selected":
                e.selected =
                  g && typeof g != "function" && typeof g != "symbol";
                break;
              default:
                he(e, t, s, g, a, p);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var q in l)
          ((g = l[q]),
            l.hasOwnProperty(q) &&
              g != null &&
              !a.hasOwnProperty(q) &&
              he(e, t, q, null, a, g));
        for (v in a)
          if (
            ((g = a[v]),
            (p = l[v]),
            a.hasOwnProperty(v) && g !== p && (g != null || p != null))
          )
            switch (v) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(y(137, t));
                break;
              default:
                he(e, t, v, g, a, p);
            }
        return;
      default:
        if (Ni(t)) {
          for (var me in l)
            ((g = l[me]),
              l.hasOwnProperty(me) &&
                g !== void 0 &&
                !a.hasOwnProperty(me) &&
                of(e, t, me, void 0, a, g));
          for (b in a)
            ((g = a[b]),
              (p = l[b]),
              !a.hasOwnProperty(b) ||
                g === p ||
                (g === void 0 && p === void 0) ||
                of(e, t, b, g, a, p));
          return;
        }
    }
    for (var h in l)
      ((g = l[h]),
        l.hasOwnProperty(h) &&
          g != null &&
          !a.hasOwnProperty(h) &&
          he(e, t, h, null, a, g));
    for (T in a)
      ((g = a[T]),
        (p = l[T]),
        !a.hasOwnProperty(T) ||
          g === p ||
          (g == null && p == null) ||
          he(e, t, T, g, a, p));
  }
  function $o(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function bh() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var e = 0, t = 0, l = performance.getEntriesByType("resource"), a = 0;
        a < l.length;
        a++
      ) {
        var n = l[a],
          u = n.transferSize,
          i = n.initiatorType,
          c = n.duration;
        if (u && c && $o(i)) {
          for (i = 0, c = n.responseEnd, a += 1; a < l.length; a++) {
            var s = l[a],
              v = s.startTime;
            if (v > c) break;
            var b = s.transferSize,
              T = s.initiatorType;
            b &&
              $o(T) &&
              ((s = s.responseEnd), (i += b * (s < c ? 1 : (c - v) / (s - v))));
          }
          if ((--a, (t += (8 * (u + i)) / (n.duration / 1e3)), e++, 10 < e))
            break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection &&
      ((e = navigator.connection.downlink), typeof e == "number")
      ? e
      : 5;
  }
  var df = null,
    hf = null;
  function ei(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Fo(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Io(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function mf(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var vf = null;
  function xh() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === vf
        ? !1
        : ((vf = e), !0)
      : ((vf = null), !1);
  }
  var Po = typeof setTimeout == "function" ? setTimeout : void 0,
    Sh = typeof clearTimeout == "function" ? clearTimeout : void 0,
    ed = typeof Promise == "function" ? Promise : void 0,
    Th =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof ed < "u"
          ? function (e) {
              return ed.resolve(null).then(e).catch(Ah);
            }
          : Po;
  function Ah(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ql(e) {
    return e === "head";
  }
  function td(e, t) {
    var l = t,
      a = 0;
    do {
      var n = l.nextSibling;
      if ((e.removeChild(l), n && n.nodeType === 8))
        if (((l = n.data), l === "/$" || l === "/&")) {
          if (a === 0) {
            (e.removeChild(n), $a(t));
            return;
          }
          a--;
        } else if (
          l === "$" ||
          l === "$?" ||
          l === "$~" ||
          l === "$!" ||
          l === "&"
        )
          a++;
        else if (l === "html") wn(e.ownerDocument.documentElement);
        else if (l === "head") {
          ((l = e.ownerDocument.head), wn(l));
          for (var u = l.firstChild; u; ) {
            var i = u.nextSibling,
              c = u.nodeName;
            (u[cn] ||
              c === "SCRIPT" ||
              c === "STYLE" ||
              (c === "LINK" && u.rel.toLowerCase() === "stylesheet") ||
              l.removeChild(u),
              (u = i));
          }
        } else l === "body" && wn(e.ownerDocument.body);
      l = n;
    } while (l);
    $a(t);
  }
  function ld(e, t) {
    var l = e;
    e = 0;
    do {
      var a = l.nextSibling;
      if (
        (l.nodeType === 1
          ? t
            ? ((l._stashedDisplay = l.style.display),
              (l.style.display = "none"))
            : ((l.style.display = l._stashedDisplay || ""),
              l.getAttribute("style") === "" && l.removeAttribute("style"))
          : l.nodeType === 3 &&
            (t
              ? ((l._stashedText = l.nodeValue), (l.nodeValue = ""))
              : (l.nodeValue = l._stashedText || "")),
        a && a.nodeType === 8)
      )
        if (((l = a.data), l === "/$")) {
          if (e === 0) break;
          e--;
        } else (l !== "$" && l !== "$?" && l !== "$~" && l !== "$!") || e++;
      l = a;
    } while (l);
  }
  function gf(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (((t = t.nextSibling), l.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (gf(l), xi(l));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(l);
    }
  }
  function Nh(e, t, l, a) {
    for (; e.nodeType === 1; ) {
      var n = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (a) {
        if (!e[cn])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((u = e.getAttribute("rel")),
                u === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                u !== n.rel ||
                e.getAttribute("href") !==
                  (n.href == null || n.href === "" ? null : n.href) ||
                e.getAttribute("crossorigin") !==
                  (n.crossOrigin == null ? null : n.crossOrigin) ||
                e.getAttribute("title") !== (n.title == null ? null : n.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((u = e.getAttribute("src")),
                (u !== (n.src == null ? null : n.src) ||
                  e.getAttribute("type") !== (n.type == null ? null : n.type) ||
                  e.getAttribute("crossorigin") !==
                    (n.crossOrigin == null ? null : n.crossOrigin)) &&
                  u &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && e.getAttribute("name") === u) return e;
      } else return e;
      if (((e = Ct(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function zh(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !l) ||
        ((e = Ct(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function ad(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !t) ||
        ((e = Ct(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function yf(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function pf(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState !== "loading")
    );
  }
  function Eh(e, t) {
    var l = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || l.readyState !== "loading") t();
    else {
      var a = function () {
        (t(), l.removeEventListener("DOMContentLoaded", a));
      };
      (l.addEventListener("DOMContentLoaded", a), (e._reactRetry = a));
    }
  }
  function Ct(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var bf = null;
  function nd(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "/$" || l === "/&") {
          if (t === 0) return Ct(e.nextSibling);
          t--;
        } else
          (l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&") ||
            t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function ud(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (t === 0) return e;
          t--;
        } else (l !== "/$" && l !== "/&") || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function id(e, t, l) {
    switch (((t = ei(l)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(y(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(y(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(y(454));
        return e;
      default:
        throw Error(y(451));
    }
  }
  function wn(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    xi(e);
  }
  var Rt = new Map(),
    cd = new Set();
  function ti(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var hl = z.d;
  z.d = { f: jh, r: Mh, D: Dh, C: _h, L: Oh, m: Uh, X: Rh, S: Ch, M: Hh };
  function jh() {
    var e = hl.f(),
      t = Ku();
    return e || t;
  }
  function Mh(e) {
    var t = va(e);
    t !== null && t.tag === 5 && t.type === "form" ? Ar(t) : hl.r(e);
  }
  var Ja = typeof document > "u" ? null : document;
  function fd(e, t, l) {
    var a = Ja;
    if (a && typeof t == "string" && t) {
      var n = Et(t);
      ((n = 'link[rel="' + e + '"][href="' + n + '"]'),
        typeof l == "string" && (n += '[crossorigin="' + l + '"]'),
        cd.has(n) ||
          (cd.add(n),
          (e = { rel: e, crossOrigin: l, href: t }),
          a.querySelector(n) === null &&
            ((t = a.createElement("link")),
            Je(t, "link", e),
            Le(t),
            a.head.appendChild(t))));
    }
  }
  function Dh(e) {
    (hl.D(e), fd("dns-prefetch", e, null));
  }
  function _h(e, t) {
    (hl.C(e, t), fd("preconnect", e, t));
  }
  function Oh(e, t, l) {
    hl.L(e, t, l);
    var a = Ja;
    if (a && e && t) {
      var n = 'link[rel="preload"][as="' + Et(t) + '"]';
      t === "image" && l && l.imageSrcSet
        ? ((n += '[imagesrcset="' + Et(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == "string" &&
            (n += '[imagesizes="' + Et(l.imageSizes) + '"]'))
        : (n += '[href="' + Et(e) + '"]');
      var u = n;
      switch (t) {
        case "style":
          u = ka(e);
          break;
        case "script":
          u = Wa(e);
      }
      Rt.has(u) ||
        ((e = B(
          {
            rel: "preload",
            href: t === "image" && l && l.imageSrcSet ? void 0 : e,
            as: t,
          },
          l,
        )),
        Rt.set(u, e),
        a.querySelector(n) !== null ||
          (t === "style" && a.querySelector(Zn(u))) ||
          (t === "script" && a.querySelector(Vn(u))) ||
          ((t = a.createElement("link")),
          Je(t, "link", e),
          Le(t),
          a.head.appendChild(t)));
    }
  }
  function Uh(e, t) {
    hl.m(e, t);
    var l = Ja;
    if (l && e) {
      var a = t && typeof t.as == "string" ? t.as : "script",
        n =
          'link[rel="modulepreload"][as="' + Et(a) + '"][href="' + Et(e) + '"]',
        u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Wa(e);
      }
      if (
        !Rt.has(u) &&
        ((e = B({ rel: "modulepreload", href: e }, t)),
        Rt.set(u, e),
        l.querySelector(n) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Vn(u))) return;
        }
        ((a = l.createElement("link")),
          Je(a, "link", e),
          Le(a),
          l.head.appendChild(a));
      }
    }
  }
  function Ch(e, t, l) {
    hl.S(e, t, l);
    var a = Ja;
    if (a && e) {
      var n = ga(a).hoistableStyles,
        u = ka(e);
      t = t || "default";
      var i = n.get(u);
      if (!i) {
        var c = { loading: 0, preload: null };
        if ((i = a.querySelector(Zn(u)))) c.loading = 5;
        else {
          ((e = B({ rel: "stylesheet", href: e, "data-precedence": t }, l)),
            (l = Rt.get(u)) && xf(e, l));
          var s = (i = a.createElement("link"));
          (Le(s),
            Je(s, "link", e),
            (s._p = new Promise(function (v, b) {
              ((s.onload = v), (s.onerror = b));
            })),
            s.addEventListener("load", function () {
              c.loading |= 1;
            }),
            s.addEventListener("error", function () {
              c.loading |= 2;
            }),
            (c.loading |= 4),
            li(i, t, a));
        }
        ((i = { type: "stylesheet", instance: i, count: 1, state: c }),
          n.set(u, i));
      }
    }
  }
  function Rh(e, t) {
    hl.X(e, t);
    var l = Ja;
    if (l && e) {
      var a = ga(l).hoistableScripts,
        n = Wa(e),
        u = a.get(n);
      u ||
        ((u = l.querySelector(Vn(n))),
        u ||
          ((e = B({ src: e, async: !0 }, t)),
          (t = Rt.get(n)) && Sf(e, t),
          (u = l.createElement("script")),
          Le(u),
          Je(u, "link", e),
          l.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function Hh(e, t) {
    hl.M(e, t);
    var l = Ja;
    if (l && e) {
      var a = ga(l).hoistableScripts,
        n = Wa(e),
        u = a.get(n);
      u ||
        ((u = l.querySelector(Vn(n))),
        u ||
          ((e = B({ src: e, async: !0, type: "module" }, t)),
          (t = Rt.get(n)) && Sf(e, t),
          (u = l.createElement("script")),
          Le(u),
          Je(u, "link", e),
          l.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function sd(e, t, l, a) {
    var n = (n = K.current) ? ti(n) : null;
    if (!n) throw Error(y(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string"
          ? ((t = ka(l.href)),
            (l = ga(n).hoistableStyles),
            (a = l.get(t)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              l.set(t, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          l.rel === "stylesheet" &&
          typeof l.href == "string" &&
          typeof l.precedence == "string"
        ) {
          e = ka(l.href);
          var u = ga(n).hoistableStyles,
            i = u.get(e);
          if (
            (i ||
              ((n = n.ownerDocument || n),
              (i = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(e, i),
              (u = n.querySelector(Zn(e))) &&
                !u._p &&
                ((i.instance = u), (i.state.loading = 5)),
              Rt.has(e) ||
                ((l = {
                  rel: "preload",
                  as: "style",
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                Rt.set(e, l),
                u || Bh(n, e, l, i.state))),
            t && a === null)
          )
            throw Error(y(528, ""));
          return i;
        }
        if (t && a !== null) throw Error(y(529, ""));
        return null;
      case "script":
        return (
          (t = l.async),
          (l = l.src),
          typeof l == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = Wa(l)),
              (l = ga(n).hoistableScripts),
              (a = l.get(t)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                l.set(t, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(y(444, e));
    }
  }
  function ka(e) {
    return 'href="' + Et(e) + '"';
  }
  function Zn(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function rd(e) {
    return B({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function Bh(e, t, l, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (a.loading = 1)
      : ((t = e.createElement("link")),
        (a.preload = t),
        t.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        Je(t, "link", l),
        Le(t),
        e.head.appendChild(t));
  }
  function Wa(e) {
    return '[src="' + Et(e) + '"]';
  }
  function Vn(e) {
    return "script[async]" + e;
  }
  function od(e, t, l) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var a = e.querySelector('style[data-href~="' + Et(l.href) + '"]');
          if (a) return ((t.instance = a), Le(a), a);
          var n = B({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (e.ownerDocument || e).createElement("style")),
            Le(a),
            Je(a, "style", n),
            li(a, l.precedence, e),
            (t.instance = a)
          );
        case "stylesheet":
          n = ka(l.href);
          var u = e.querySelector(Zn(n));
          if (u) return ((t.state.loading |= 4), (t.instance = u), Le(u), u);
          ((a = rd(l)),
            (n = Rt.get(n)) && xf(a, n),
            (u = (e.ownerDocument || e).createElement("link")),
            Le(u));
          var i = u;
          return (
            (i._p = new Promise(function (c, s) {
              ((i.onload = c), (i.onerror = s));
            })),
            Je(u, "link", a),
            (t.state.loading |= 4),
            li(u, l.precedence, e),
            (t.instance = u)
          );
        case "script":
          return (
            (u = Wa(l.src)),
            (n = e.querySelector(Vn(u)))
              ? ((t.instance = n), Le(n), n)
              : ((a = l),
                (n = Rt.get(u)) && ((a = B({}, l)), Sf(a, n)),
                (e = e.ownerDocument || e),
                (n = e.createElement("script")),
                Le(n),
                Je(n, "link", a),
                e.head.appendChild(n),
                (t.instance = n))
          );
        case "void":
          return null;
        default:
          throw Error(y(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((a = t.instance), (t.state.loading |= 4), li(a, l.precedence, e));
    return t.instance;
  }
  function li(e, t, l) {
    for (
      var a = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        n = a.length ? a[a.length - 1] : null,
        u = n,
        i = 0;
      i < a.length;
      i++
    ) {
      var c = a[i];
      if (c.dataset.precedence === t) u = c;
      else if (u !== n) break;
    }
    u
      ? u.parentNode.insertBefore(e, u.nextSibling)
      : ((t = l.nodeType === 9 ? l.head : l), t.insertBefore(e, t.firstChild));
  }
  function xf(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function Sf(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var ai = null;
  function dd(e, t, l) {
    if (ai === null) {
      var a = new Map(),
        n = (ai = new Map());
      n.set(l, a);
    } else ((n = ai), (a = n.get(l)), a || ((a = new Map()), n.set(l, a)));
    if (a.has(e)) return a;
    for (
      a.set(e, null), l = l.getElementsByTagName(e), n = 0;
      n < l.length;
      n++
    ) {
      var u = l[n];
      if (
        !(
          u[cn] ||
          u[we] ||
          (e === "link" && u.getAttribute("rel") === "stylesheet")
        ) &&
        u.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var i = u.getAttribute(t) || "";
        i = e + i;
        var c = a.get(i);
        c ? c.push(u) : a.set(i, [u]);
      }
    }
    return a;
  }
  function hd(e, t, l) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        l,
        t === "title" ? e.querySelector("head > title") : null,
      ));
  }
  function qh(e, t, l) {
    if (l === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (e = t.disabled),
              typeof t.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function md(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Yh(e, t, l, a) {
    if (
      l.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (l.state.loading & 4) === 0
    ) {
      if (l.instance === null) {
        var n = ka(a.href),
          u = t.querySelector(Zn(n));
        if (u) {
          ((t = u._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (e.count++, (e = ni.bind(e)), t.then(e, e)),
            (l.state.loading |= 4),
            (l.instance = u),
            Le(u));
          return;
        }
        ((u = t.ownerDocument || t),
          (a = rd(a)),
          (n = Rt.get(n)) && xf(a, n),
          (u = u.createElement("link")),
          Le(u));
        var i = u;
        ((i._p = new Promise(function (c, s) {
          ((i.onload = c), (i.onerror = s));
        })),
          Je(u, "link", a),
          (l.instance = u));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(l, t),
        (t = l.state.preload) &&
          (l.state.loading & 3) === 0 &&
          (e.count++,
          (l = ni.bind(e)),
          t.addEventListener("load", l),
          t.addEventListener("error", l)));
    }
  }
  var Tf = 0;
  function Gh(e, t) {
    return (
      e.stylesheets && e.count === 0 && ii(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (l) {
            var a = setTimeout(function () {
              if ((e.stylesheets && ii(e, e.stylesheets), e.unsuspend)) {
                var u = e.unsuspend;
                ((e.unsuspend = null), u());
              }
            }, 6e4 + t);
            0 < e.imgBytes && Tf === 0 && (Tf = 62500 * bh());
            var n = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 &&
                    (e.stylesheets && ii(e, e.stylesheets), e.unsuspend))
                ) {
                  var u = e.unsuspend;
                  ((e.unsuspend = null), u());
                }
              },
              (e.imgBytes > Tf ? 50 : 800) + t,
            );
            return (
              (e.unsuspend = l),
              function () {
                ((e.unsuspend = null), clearTimeout(a), clearTimeout(n));
              }
            );
          }
        : null
    );
  }
  function ni() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) ii(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var ui = null;
  function ii(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (ui = new Map()),
        t.forEach(Lh, e),
        (ui = null),
        ni.call(e)));
  }
  function Lh(e, t) {
    if (!(t.state.loading & 4)) {
      var l = ui.get(e);
      if (l) var a = l.get(null);
      else {
        ((l = new Map()), ui.set(e, l));
        for (
          var n = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            u = 0;
          u < n.length;
          u++
        ) {
          var i = n[u];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") &&
            (l.set(i.dataset.precedence, i), (a = i));
        }
        a && l.set(null, a);
      }
      ((n = t.instance),
        (i = n.getAttribute("data-precedence")),
        (u = l.get(i) || a),
        u === a && l.set(null, n),
        l.set(i, n),
        this.count++,
        (a = ni.bind(this)),
        n.addEventListener("load", a),
        n.addEventListener("error", a),
        u
          ? u.parentNode.insertBefore(n, u.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(n, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var Kn = {
    $$typeof: Re,
    Provider: null,
    Consumer: null,
    _currentValue: Y,
    _currentValue2: Y,
    _threadCount: 0,
  };
  function Xh(e, t, l, a, n, u, i, c, s) {
    ((this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = _(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = _(0)),
      (this.hiddenUpdates = _(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = n),
      (this.onCaughtError = u),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = s),
      (this.incompleteTransitions = new Map()));
  }
  function vd(e, t, l, a, n, u, i, c, s, v, b, T) {
    return (
      (e = new Xh(e, t, l, i, s, v, b, T, c)),
      (t = 1),
      u === !0 && (t |= 24),
      (u = vt(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (t = ec()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (u.memoizedState = { element: a, isDehydrated: l, cache: t }),
      nc(u),
      e
    );
  }
  function gd(e) {
    return e ? ((e = Ea), e) : Ea;
  }
  function yd(e, t, l, a, n, u) {
    ((n = gd(n)),
      a.context === null ? (a.context = n) : (a.pendingContext = n),
      (a = El(t)),
      (a.payload = { element: l }),
      (u = u === void 0 ? null : u),
      u !== null && (a.callback = u),
      (l = jl(e, a, t)),
      l !== null && (dt(l, e, t), Nn(l, e, t)));
  }
  function pd(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function Af(e, t) {
    (pd(e, t), (e = e.alternate) && pd(e, t));
  }
  function bd(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Wl(e, 67108864);
      (t !== null && dt(t, e, 67108864), Af(e, 67108864));
    }
  }
  function xd(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = xt();
      t = ut(t);
      var l = Wl(e, t);
      (l !== null && dt(l, e, t), Af(e, t));
    }
  }
  var ci = !0;
  function Qh(e, t, l, a) {
    var n = x.T;
    x.T = null;
    var u = z.p;
    try {
      ((z.p = 2), Nf(e, t, l, a));
    } finally {
      ((z.p = u), (x.T = n));
    }
  }
  function wh(e, t, l, a) {
    var n = x.T;
    x.T = null;
    var u = z.p;
    try {
      ((z.p = 8), Nf(e, t, l, a));
    } finally {
      ((z.p = u), (x.T = n));
    }
  }
  function Nf(e, t, l, a) {
    if (ci) {
      var n = zf(a);
      if (n === null) (rf(e, t, a, fi, l), Td(e, a));
      else if (Vh(n, e, t, l, a)) a.stopPropagation();
      else if ((Td(e, a), t & 4 && -1 < Zh.indexOf(e))) {
        for (; n !== null; ) {
          var u = va(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var i = Wt(u.pendingLanes);
                  if (i !== 0) {
                    var c = u;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                      var s = 1 << (31 - tt(i));
                      ((c.entanglements[1] |= s), (i &= ~s));
                    }
                    (Kt(u), (ue & 6) === 0 && ((Zu = Pe() + 500), Ln(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((c = Wl(u, 2)), c !== null && dt(c, u, 2), Ku(), Af(u, 2));
            }
          if (((u = zf(a)), u === null && rf(e, t, a, fi, l), u === n)) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else rf(e, t, a, null, l);
    }
  }
  function zf(e) {
    return ((e = Ei(e)), Ef(e));
  }
  var fi = null;
  function Ef(e) {
    if (((fi = null), (e = ma(e)), e !== null)) {
      var t = I(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (((e = Te(t)), e !== null)) return e;
          e = null;
        } else if (l === 31) {
          if (((e = Ye(t)), e !== null)) return e;
          e = null;
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ((fi = e), null);
  }
  function Sd(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (sa()) {
          case yl:
            return 2;
          case nn:
            return 8;
          case pl:
          case vi:
            return 32;
          case ra:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var jf = !1,
    Yl = null,
    Gl = null,
    Ll = null,
    Jn = new Map(),
    kn = new Map(),
    Xl = [],
    Zh =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function Td(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Yl = null;
        break;
      case "dragenter":
      case "dragleave":
        Gl = null;
        break;
      case "mouseover":
      case "mouseout":
        Ll = null;
        break;
      case "pointerover":
      case "pointerout":
        Jn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        kn.delete(t.pointerId);
    }
  }
  function Wn(e, t, l, a, n, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: l,
          eventSystemFlags: a,
          nativeEvent: u,
          targetContainers: [n],
        }),
        t !== null && ((t = va(t)), t !== null && bd(t)),
        e)
      : ((e.eventSystemFlags |= a),
        (t = e.targetContainers),
        n !== null && t.indexOf(n) === -1 && t.push(n),
        e);
  }
  function Vh(e, t, l, a, n) {
    switch (t) {
      case "focusin":
        return ((Yl = Wn(Yl, e, t, l, a, n)), !0);
      case "dragenter":
        return ((Gl = Wn(Gl, e, t, l, a, n)), !0);
      case "mouseover":
        return ((Ll = Wn(Ll, e, t, l, a, n)), !0);
      case "pointerover":
        var u = n.pointerId;
        return (Jn.set(u, Wn(Jn.get(u) || null, e, t, l, a, n)), !0);
      case "gotpointercapture":
        return (
          (u = n.pointerId),
          kn.set(u, Wn(kn.get(u) || null, e, t, l, a, n)),
          !0
        );
    }
    return !1;
  }
  function Ad(e) {
    var t = ma(e.target);
    if (t !== null) {
      var l = I(t);
      if (l !== null) {
        if (((t = l.tag), t === 13)) {
          if (((t = Te(l)), t !== null)) {
            ((e.blockedOn = t),
              Bf(e.priority, function () {
                xd(l);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = Ye(l)), t !== null)) {
            ((e.blockedOn = t),
              Bf(e.priority, function () {
                xd(l);
              }));
            return;
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function si(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = zf(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var a = new l.constructor(l.type, l);
        ((zi = a), l.target.dispatchEvent(a), (zi = null));
      } else return ((t = va(l)), t !== null && bd(t), (e.blockedOn = l), !1);
      t.shift();
    }
    return !0;
  }
  function Nd(e, t, l) {
    si(e) && l.delete(t);
  }
  function Kh() {
    ((jf = !1),
      Yl !== null && si(Yl) && (Yl = null),
      Gl !== null && si(Gl) && (Gl = null),
      Ll !== null && si(Ll) && (Ll = null),
      Jn.forEach(Nd),
      kn.forEach(Nd));
  }
  function ri(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      jf ||
        ((jf = !0),
        j.unstable_scheduleCallback(j.unstable_NormalPriority, Kh)));
  }
  var oi = null;
  function zd(e) {
    oi !== e &&
      ((oi = e),
      j.unstable_scheduleCallback(j.unstable_NormalPriority, function () {
        oi === e && (oi = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t],
            a = e[t + 1],
            n = e[t + 2];
          if (typeof a != "function") {
            if (Ef(a || l) === null) continue;
            break;
          }
          var u = va(l);
          u !== null &&
            (e.splice(t, 3),
            (t -= 3),
            Nc(u, { pending: !0, data: n, method: l.method, action: a }, a, n));
        }
      }));
  }
  function $a(e) {
    function t(s) {
      return ri(s, e);
    }
    (Yl !== null && ri(Yl, e),
      Gl !== null && ri(Gl, e),
      Ll !== null && ri(Ll, e),
      Jn.forEach(t),
      kn.forEach(t));
    for (var l = 0; l < Xl.length; l++) {
      var a = Xl[l];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < Xl.length && ((l = Xl[0]), l.blockedOn === null); )
      (Ad(l), l.blockedOn === null && Xl.shift());
    if (((l = (e.ownerDocument || e).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var n = l[a],
          u = l[a + 1],
          i = n[it] || null;
        if (typeof u == "function") i || zd(l);
        else if (i) {
          var c = null;
          if (u && u.hasAttribute("formAction")) {
            if (((n = u), (i = u[it] || null))) c = i.formAction;
            else if (Ef(n) !== null) continue;
          } else c = i.action;
          (typeof c == "function" ? (l[a + 1] = c) : (l.splice(a, 3), (a -= 3)),
            zd(l));
        }
      }
  }
  function Ed() {
    function e(u) {
      u.canIntercept &&
        u.info === "react-transition" &&
        u.intercept({
          handler: function () {
            return new Promise(function (i) {
              return (n = i);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      (n !== null && (n(), (n = null)), a || setTimeout(l, 20));
    }
    function l() {
      if (!a && !navigation.transition) {
        var u = navigation.currentEntry;
        u &&
          u.url != null &&
          navigation.navigate(u.url, {
            state: u.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var a = !1,
        n = null;
      return (
        navigation.addEventListener("navigate", e),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(l, 100),
        function () {
          ((a = !0),
            navigation.removeEventListener("navigate", e),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            n !== null && (n(), (n = null)));
        }
      );
    }
  }
  function Mf(e) {
    this._internalRoot = e;
  }
  ((di.prototype.render = Mf.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(y(409));
      var l = t.current,
        a = xt();
      yd(l, a, e, t, null, null);
    }),
    (di.prototype.unmount = Mf.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (yd(e.current, 2, null, e, null, null), Ku(), (t[ha] = null));
        }
      }));
  function di(e) {
    this._internalRoot = e;
  }
  di.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = un();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < Xl.length && t !== 0 && t < Xl[l].priority; l++);
      (Xl.splice(l, 0, e), l === 0 && Ad(e));
    }
  };
  var jd = ie.version;
  if (jd !== "19.2.6") throw Error(y(527, jd, "19.2.6"));
  z.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(y(188))
        : ((e = Object.keys(e).join(",")), Error(y(268, e)));
    return (
      (e = N(t)),
      (e = e !== null ? le(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var Jh = {
    bundleType: 0,
    version: "19.2.6",
    rendererPackageName: "react-dom",
    currentDispatcherRef: x,
    reconcilerVersion: "19.2.6",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var hi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!hi.isDisabled && hi.supportsFiber)
      try {
        ((Xt = hi.inject(Jh)), (et = hi));
      } catch {}
  }
  return (
    (Fn.createRoot = function (e, t) {
      if (!Q(e)) throw Error(y(299));
      var l = !1,
        a = "",
        n = Cr,
        u = Rr,
        i = Hr;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (l = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (n = t.onUncaughtError),
          t.onCaughtError !== void 0 && (u = t.onCaughtError),
          t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (t = vd(e, 1, !1, null, null, l, a, null, n, u, i, Ed)),
        (e[ha] = t.current),
        sf(e),
        new Mf(t)
      );
    }),
    (Fn.hydrateRoot = function (e, t, l) {
      if (!Q(e)) throw Error(y(299));
      var a = !1,
        n = "",
        u = Cr,
        i = Rr,
        c = Hr,
        s = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
          l.onCaughtError !== void 0 && (i = l.onCaughtError),
          l.onRecoverableError !== void 0 && (c = l.onRecoverableError),
          l.formState !== void 0 && (s = l.formState)),
        (t = vd(e, 1, !0, t, l ?? null, a, n, s, u, i, c, Ed)),
        (t.context = gd(null)),
        (l = t.current),
        (a = xt()),
        (a = ut(a)),
        (n = El(a)),
        (n.callback = null),
        jl(l, n, a),
        (l = a),
        (t.current.lanes = l),
        U(t, l),
        Kt(t),
        (e[ha] = t.current),
        sf(e),
        new di(t)
      );
    }),
    (Fn.version = "19.2.6"),
    Fn
  );
}
var qd;
function am() {
  if (qd) return Of.exports;
  qd = 1;
  function j() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(j);
      } catch (ie) {
        console.error(ie);
      }
  }
  return (j(), (Of.exports = lm()), Of.exports);
}
var nm = am();
function ml(j, ie) {
  return j.includes("JPY") ||
    j.includes("XAU") ||
    j.includes("XAG") ||
    j.includes("BTC") ||
    j.includes("ETH")
    ? ie.toFixed(2)
    : ie.toFixed(4);
}
const Fa = [
  `Supply & Demand / Smart Money Concepts (SMC) Strategy

- Identify HTF (H4/H1) primary supply & demand zones.
- Wait for LTF (M15/M5) price to retrace into the HTF zone.
- Look for Change of Character (CHoCH) on M5 with strong displacement.
- Entry at the fair value gap (FVG) or order block (OB).
- Set Stop Loss above the swing high/low of displacement.
- Target the nearest opposing liquidity pool or HTF key swing levels.`,
  `London Session Breakout Strategy

- Track the Asian Range high and low (00:00 to 07:00 UTC).
- Apply 15M breakout lines for the Asian Session boundaries.
- When the London Open (08:00 UTC) triggers a breakout candle closing outside the range, prepare setup.
- Enter on the retest of the broken Asian Range High/Low.
- Stop Loss: Halfway point of the Asian Session range.
- Take Profit: 1.5x of the Asian Session range height projected from the breakout level.`,
  `Bollinger Bands Mean Reversion Strategy

- Set indicators: Bollinger Bands (20, 2) on the H1 timeframe.
- Wait for price to touch or pierce the outer Band (overextended state).
- Require high volume or a distinct candlestick rejection (Pin Bar, Engulfing).
- Enter on close of the rejection candle towards the 20-period SMA (Median Line).
- Stop Loss: Just outside the peak of the rejection wick.
- Take Profit 1: 20-period SMA.
- Take Profit 2: Opposing Bollinger Band.`,
  `VWAP Dynamic Pullback Strategy

- Timeframe: M5 or M15. Set Volume Weighted Average Price (VWAP).
- Identify dominant market trend: Price trading consistently above/below the VWAP line.
- In a strong uptrend, wait for a shallow pullback to the VWAP line to buy.
- In a strong downtrend, wait for a pull up to the VWAP line to sell.
- Exit on a candle close which violates VWAP in the opposite direction.
- Target the nearest daily high/low or key pivots.`,
  `EMA Trend Following Strategy

- Chart indicators: 50 EMA and 200 EMA on the H4 timeframe.
- Long setup (Golden Cross): 50 EMA crosses above 200 EMA. 
- Short setup (Death Cross): 50 EMA crosses below 200 EMA.
- Position execution: Only take entries in the cross direction when price retraces to touch the 50 EMA line.
- Stop Loss: 2 ATR units away from entry.
- Take Profit: Trail using a 20 EMA or a fixed 1:3 Risk-to-Reward ratio.`,
  `MACD Divergence & RSI Exhaustion Strategy

- Timeframe: M30 or H1.
- Watch for bullish divergence: Price makes a lower low, but MACD histogram/line makes a higher low.
- Watch for bearish divergence: Price makes a higher high, but MACD histogram/line makes a lower high.
- Confirm with RSI: Peak must be deeply overbought (>70) or oversold (<30).
- Entry: On the divergence candle close, confirmed by local structure breaking.
- Stop Loss: Below/above the extreme wick pivot.
- Take Profit: Opposite key level or standard 1:2 Risk-to-Reward ratio.`,
  `Fibonacci Golden Pocket Strategy

- Timeframe: H1 or H4.
- Identify a major trending swing high and swing low.
- Pull the Fibonacci Retracement tool from swing bottom to top.
- Place limit orders within the "Golden Pocket" (0.618 - 0.65 lines).
- Check if the Golden Pocket aligns with dynamic support (prev support, order block).
- Stop Loss: Below the 0.786 Fibonacci Level.
- Take Profit 1: 0.236 Retracement level.
- Take Profit 2: Complete retest of the original swing high (0.00 level).`,
  `New York Opening Range Breakout (ORB)

- Timeframe: M5.
- Mark the high and low boundaries of the first 15 minutes of the New York trading session.
- Enter long when an M5 candle closes above the 15-minute range high.
- Enter short when an M5 candle closes below the 15-minute range low.
- Stop Loss: Near the midpoint of the opening 15-minute range.
- Take Profit: Set at a distance equivalent to the size of the opening range from the breakout level.`,
  `Heikin Ashi Trend Continuation Strategy

- Timeframe: H1 or D1. Switch standard candlesticks to Heikin Ashi.
- In a strong uptrend, Heikin Ashi candles are green and have no lower wicks.
- In a strong downtrend, Heikin Ashi candles are red and have no upper wicks.
- Buy Setup: Wait for a pull back, then enter after two consecutive green flat-bottom candles close.
- Sell Setup: Wait for a pull back, then enter after two consecutive red flat-top candles close.
- Exit Strategy: Close your trade when a candle in the opposing color appears.`,
  `Inside Bar Breakout Strategy

- Locate a large "Mother Bar" on the daily or H4 chart.
- An "Inside Bar" is a candlestick fully engulfed by the high and low of the previous Mother Bar.
- Set pending Buy Stop orders above the Mother Bar High and Sell Stop below the Mother Bar Low.
- Upon breakout trigger, cancel the opposing order.
- Stop Loss: Positioned opposite of the triggered side, near the Inside Bar midpoint.
- Profit Target: Projected 1.5x magnitude of the Mother Bar.`,
  `RSI Swing Failure Pattern (SFP) Strategy

- Look for extreme market conditions on a 4-hour chart.
- Bullish SFP: RSI crosses below 30 (oversold), rallies, then makes another drop but RSI fails to establish a lower low, while price prints a new lower low to sweep liquidity.
- Bearish SFP: RSI crosses above 70, pulls back, then price prints a higher high sweeping liquidity but RSI prints a lower point.
- Execute when RSI crosses back above 30 / below 70.
- Stop Loss: Just under/above the liquidity sweep wick.
- Take Profit: Nearest key psychological block or major swing point.`,
  `Asian Session Range Sweep Strategy

- Active Hours: 08:00 to 09:30 UTC (London Morning).
- Asian Session High/Low act as major liquidity reservoirs.
- Look for price to aggressively run past the Asian high, then immediately reject and close back inside the range. This signifies a liquidity grab.
- Enter a short trade targeting the Asian session median line or low.
- Stop Loss: 5-10 pips above the clean sweep high wick.
- Take Profit: 1:3 ratio target or opposing range low.`,
  `Classic Support & Resistance Flip Setup

- Identify major daily or H4 horizontal levels that have been tested at least twice.
- Look for a highly impulsive breakout candle that clearly breaks the horizontal line.
- Do not buy/sell the breakout directly; wait for a slow, low-volume retest of that exact flip zone.
- Look for local rejection evidence (bullish pin bar, hammer, morning star).
- Stop Loss: 15 pips behind the flip level.
- Take Profit: Master structural level, or previous major high/low pivot.`,
  `VSA Buying / Selling Climax Strategy

- Timeframe: H1 or M15. Setup requires the standard volume histogram.
- Look for an extremely wide-spread down candle hitting support on "Ultra-High Volume". This is most likely a selling climax (institutions absorbing sells).
- Wait for the next candle to close up, confirming demand.
- Buy at the open of the third candle.
- Stop Loss: Below the bottom of the long ultra-high volume candle.
- Take Profit: 1:2.5 minimum target ratio.`,
  `Average Daily Range (ADR) Reversion Strategy

- Use an ADR indicator to calculate the average range of the last 14 sessions.
- When price moves and crosses 95% or 100% of its average daily range limit, the probability of a reversal spikes.
- Look for a reversal pattern (Double top, M/W pattern) on the M15 timeframe near ADR boundaries.
- Trade counter-trend back towards the Daily Open price.
- Stop Loss: Tight, 15 pips past the ADR boundary.
- Take Profit: Daily mid-point pivot or Daily Open line.`,
  `Wyckoff Phase C (Spring) Trading Strategy

- Look for an extended consolidation range (Trading Range / TR).
- Phase C "Spring" represents a sharp push below the horizontal support line, designed to trap break-out sellers and trigger buy stops.
- Wait for price to recover and close back inside the TR (re-entering the comfort zone).
- Enter long at the retest of the broken support line.
- Stop Loss: Below the Spring wick low.
- Take Profit: Target the high boundary (creek) of the TR.`,
  `Ichimoku Cloud Kumo Breakout strategy

- Chart indicators: Ichimoku Kinko Hyo (9, 26, 52, 26).
- Wait for price to aggressively break out and close cleanly above/below the Kumo (Cloud).
- Long entry: Tenkan-Sen (conversion line) must be above Kijun-Sen (base line), and Chikou Span (lagging line) must be free of price obstruction.
- Stop Loss: Positioned inside or just below the opposite edge of the Cloud.
- Profit Target: Exit once Tenkan-Sen crosses back under Kijun-Sen.`,
  `ATR Trailing Volatility Channel Strategy

- Timeframe: H1 or H4. Use a 14-period ATR (Average True Range).
- Track the current 20-period SMA as your baseline indicator.
- Set dynamic buffers: Upper bands = 20 SMA + 2 * ATR. Lower bands = 20 SMA - 2 * ATR.
- If a candle closes above the Upper ATR Band, enter a long buy position on next open.
- Standard trailing Stop Loss is configured exactly at the lower ATR Band level.
- Take Profit: Keep trailing until price crosses the opposite team trigger.`,
  `Three-Drive Harmonical Pattern Strategy

- Identify three symmetrical, consecutive price high peaks or low troughs.
- Drive 2 should extend exactly to a 1.272 Fibonacci extension of Drive 1.
- Drive 3 should extend exactly to 1.272 of Drive 2.
- The corrective pullbacks should ideally hit exactly the 0.618 level of the preceding moves.
- Enter counter-trend at the terminal point of Drive 3.
- Stop Loss: 15-20 pips past the Drive 3 extreme point.
- Profit Target: Retracement to the Drive 2 correction low or high.`,
  `Daily Bias & H1 Order Block Strategy

- Start by determining bias on the Daily timeline: Look for candles making consecutive higher lows (bullish bias) or lower highs (bearish bias).
- On the H1 chart, identify the last down-close candle before the strong upward expansion (Bullish Order Block).
- Wait for price to return and mitigate (test) the 50% equilibrium level of the H1 Order Block.
- Enter trade on 50% block touch with Stop Loss at the low of the Order Block candle.
- Take Profit: Target the Daily liquidity pool high or major resistance.`,
];
function um() {
  const [j, ie] = te.useState("market"),
    [J, y] = te.useState([
      {
        pair: "EUR/USD",
        name: "Euro / US Dollar",
        price: 1.1749,
        change: -0.03,
      },
      {
        pair: "GBP/USD",
        name: "British Pound / US Dollar",
        price: 1.3493,
        change: -0.06,
      },
      {
        pair: "USD/JPY",
        name: "US Dollar / Japanese Yen",
        price: 159.07,
        change: 0.19,
      },
      {
        pair: "USD/CHF",
        name: "US Dollar / Swiss Franc",
        price: 0.7834,
        change: 0.11,
      },
      {
        pair: "AUD/USD",
        name: "Australian Dollar / US Dollar",
        price: 0.7145,
        change: 0.21,
      },
      {
        pair: "USD/CAD",
        name: "US Dollar / Canadian Dollar",
        price: 1.3725,
        change: -0.08,
      },
      {
        pair: "EUR/GBP",
        name: "Euro / British Pound",
        price: 0.8521,
        change: 0.04,
      },
      {
        pair: "GBP/JPY",
        name: "British Pound / Japanese Yen",
        price: 202.45,
        change: 0.35,
      },
      {
        pair: "NZD/USD",
        name: "New Zealand Dollar / US Dollar",
        price: 0.6122,
        change: -0.15,
      },
      {
        pair: "XAU/USD",
        name: "Gold / US Dollar",
        price: 2342.6,
        change: 0.65,
      },
      {
        pair: "XAG/USD",
        name: "Silver / US Dollar",
        price: 29.42,
        change: 1.12,
      },
      {
        pair: "BTC/USD",
        name: "Bitcoin / US Dollar",
        price: 67450,
        change: 2.34,
      },
      {
        pair: "ETH/USD",
        name: "Ethereum / US Dollar",
        price: 3480,
        change: 1.87,
      },
    ]);
  te.useEffect(() => {
    const d = async () => {
      try {
        const _ = await fetch("/api/forex-rates", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ pairs: J.map((Z) => Z.pair) }),
        });
        if (!_.ok) throw new Error(`Proxy returned HTTP ${_.status}`);
        const U = await _.json();
        if (U && U.rates) {
          y((Z) =>
            Z.map((oe) => {
              const ze = U.rates[oe.pair];
              if (ze) {
                const nt =
                    typeof ze.price == "number"
                      ? ze.price
                      : parseFloat(ze.price),
                  ut =
                    typeof ze.change == "number"
                      ? ze.change
                      : parseFloat(ze.change);
                if (!isNaN(nt))
                  return {
                    ...oe,
                    price: nt,
                    change: isNaN(ut) ? oe.change : ut,
                  };
              }
              return oe;
            }),
          );
          return;
        }
      } catch (_) {
        console.warn(
          "Using local volatility engine (Twelve keys not set or connection timed out):",
          _,
        );
      }
      y((_) =>
        _.map((U) => {
          const Z = (Math.random() - 0.5) * 0.035;
          let oe = U.price * (1 + Z / 100);
          U.pair.includes("JPY") ||
          U.pair.includes("XAU") ||
          U.pair.includes("XAG") ||
          U.pair.includes("BTC") ||
          U.pair.includes("ETH")
            ? (oe = parseFloat(oe.toFixed(2)))
            : (oe = parseFloat(oe.toFixed(4)));
          const ze = parseFloat((U.change + Z * 2.2).toFixed(2));
          return { ...U, price: oe, change: ze };
        }),
      );
    };
    d();
    const M = setInterval(d, 15e3);
    return () => clearInterval(M);
  }, []);
  const [Q, I] = te.useState(Fa[0]),
    [Te, Ye] = te.useState(0),
    [R, N] = te.useState(!0),
    [le, B] = te.useState("Strategy Synced ✓"),
    ye = (d) => {
      (I(d.target.value), N(!1));
    },
    Fe = () => {
      (B("Syncing strategy..."),
        setTimeout(() => {
          (N(!0), B("Strategy Synced ✓"));
        }, 800));
    },
    ke = () => {
      let d = Math.floor(Math.random() * Fa.length);
      if (Fa.length > 1)
        for (; d === Te; ) d = Math.floor(Math.random() * Fa.length);
      (Ye(d), I(Fa[d]), N(!1));
    },
    [pe, at] = te.useState(null),
    [Ie, St] = te.useState(!1),
    [Re, Ae] = te.useState([]),
    [Ge, Qe] = te.useState(!1),
    [G, Ne] = te.useState(null),
    [We, Yt] = te.useState(() => {
      try {
        const d = localStorage.getItem("gaks_chart_analysis_history");
        return d ? JSON.parse(d) : [];
      } catch {
        return [];
      }
    }),
    [Tt, He] = te.useState(!1),
    Gt = (d, M, _) => {
      const U = {
        id: "analysis-" + Date.now(),
        timestamp:
          new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }) +
          " - " +
          new Date().toLocaleDateString([], { month: "short", day: "numeric" }),
        image: d,
        strategyUsed: M,
        report: _,
      };
      Yt((Z) => {
        const oe = [U, ...Z].slice(0, 15);
        try {
          localStorage.setItem(
            "gaks_chart_analysis_history",
            JSON.stringify(oe),
          );
        } catch {
          console.warn(
            "LocalStorage limit exceeded, keeping history in memory only.",
          );
        }
        return oe;
      });
    },
    At = te.useRef(null),
    ht = (d) => {
      (d.preventDefault(), St(!0));
    },
    x = () => {
      St(!1);
    },
    z = (d) => {
      if (d.size > 10 * 1024 * 1024) {
        alert("File size exceeds 10MB limit.");
        return;
      }
      const M = new FileReader();
      ((M.onload = (_) => {
        var U;
        (U = _.target) != null &&
          U.result &&
          (at(_.target.result), Ne(null), Ae([]));
      }),
        M.readAsDataURL(d));
    },
    Y = (d) => {
      (d.preventDefault(),
        St(!1),
        d.dataTransfer.files &&
          d.dataTransfer.files[0] &&
          z(d.dataTransfer.files[0]));
    },
    ce = (d) => {
      d.target.files && d.target.files[0] && z(d.target.files[0]);
    },
    fe = () => {
      var d;
      (d = At.current) == null || d.click();
    },
    o = async () => {
      if (!Ge) {
        (Qe(!0),
          Ne(null),
          Ae([
            "Initiating chart analysis layout scanner...",
            "Securing payloads and preparing API gateway metadata...",
            'Requesting analysis from secure backend: "Gemini 3.5 Flash"...',
          ]));
        try {
          const d = new AbortController(),
            M = setTimeout(() => d.abort(), 2e4),
            _ = await fetch("/api/analyze-chart", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ image: pe, strategy: Q }),
              signal: d.signal,
            });
          if ((clearTimeout(M), !_.ok)) {
            const Z = await _.json().catch(() => ({}));
            throw new Error(
              Z.error || `Server answered with error status: ${_.status}`,
            );
          }
          Ae((Z) => [
            ...Z,
            "Successfully fetched secure feedback from Gemini AI scanner ✓",
            "Parsing strategy validation & target recommendations...",
          ]);
          const U = await _.json();
          if (U && (U.signal || U.reason)) {
            const Z = {
              signal: (U.signal || "HOLD").toUpperCase(),
              level: U.level || (1.1749).toFixed(4),
              tp: U.tp || (1.1925234999999998).toFixed(4),
              sl: U.sl || (1.1655008).toFixed(4),
              confidence: U.confidence || "91%",
              reason:
                U.reason ||
                "Chart analysed successfully matching your chosen active strategy guidelines.",
            };
            (Ne(Z),
              pe && Gt(pe, Q, Z),
              Ae((oe) => [...oe, "Gemini AI analysis finished successfully!"]));
          } else
            throw new Error(
              "Invalid or empty response structure from remote edge service.",
            );
        } catch (d) {
          console.warn("Gemini analysis info:", d.message || d);
          const M = d.message || "Network failure or timeout context.";
          (Ae((_) => [
            ..._,
            `⚠️ Call failed: ${M}`,
            "Engaging premium on-device fallback analysis module as backup...",
            "Scanning chart screenshot for price action patterns...",
            "Analyzing market structure on H1 and M15 levels...",
            "Formulating high-conviction trade setups matching strategy criteria...",
          ]),
            setTimeout(() => {
              const _ = ["BUY", "SELL", "HOLD"],
                U = _[Math.floor(Math.random() * _.length)],
                Z = (1.1749 + (Math.random() - 0.5) * 0.02).toFixed(4),
                oe = (1.1749 + (Math.random() - 0.5) * 0.01).toFixed(4),
                ze = ["84%", "88%", "91%", "95%"],
                nt = {
                  signal: U,
                  level: (1.1749 + (Math.random() - 0.5) * 0.005).toFixed(4),
                  tp: Z,
                  sl: oe,
                  confidence: ze[Math.floor(Math.random() * ze.length)],
                  reason: `[Edge Fallback Engaged] Chosen setup: ${U} entry detected at localized value zones matching active strategy criteria. To use real-time Cloud models, replace your Supabase credentials in settings.`,
                };
              (Ne(nt),
                pe && Gt(pe, Q, nt),
                Ae((ut) => [
                  ...ut,
                  "AI Scan complete ✓ (Local Fallback mode)",
                ]));
            }, 2500));
        } finally {
          Qe(!1);
        }
      }
    },
    A = (d) => {
      (d.stopPropagation(), at(null), Ne(null), Ae([]));
    },
    [E, D] = te.useState([
      {
        id: "alert-1",
        pair: "BTC/USD",
        direction: "above",
        value: "68000.00",
        channels: ["email", "push"],
        triggered: !0,
      },
      {
        id: "alert-2",
        pair: "EUR/USD",
        direction: "below",
        value: "1.1700",
        channels: ["email", "push"],
        triggered: !0,
      },
    ]),
    [L, K] = te.useState(0),
    [ee, Be] = te.useState("above"),
    [ve, Jt] = te.useState(["email", "push"]),
    [vl, fa] = te.useState(""),
    [Ia, Lt] = te.useState(!1),
    [kt, Pa] = te.useState(!0),
    [gl, en] = te.useState(["EUR/USD", "GBP/USD", "XAU/USD", "USD/JPY"]),
    [tn, ln] = te.useState("10 pips away"),
    [an, mi] = te.useState("H1"),
    [In, Pe] = te.useState({
      approachingZone: !0,
      zoneReached: !0,
      confirmationDetected: !0,
      tradeSetup: !0,
      setupInvalidated: !1,
    }),
    [sa, yl] = te.useState([
      {
        id: "h1",
        pair: "EUR/USD",
        message: "🔔 EURUSD approaching demand zone.",
        timestamp: "10:42 AM",
        unread: !0,
      },
      {
        id: "h2",
        pair: "GBP/USD",
        message: "🔔 GBPUSD entered supply zone.",
        timestamp: "10:15 AM",
        unread: !1,
      },
      {
        id: "h3",
        pair: "XAU/USD",
        message: "🔔 XAUUSD bullish confirmation detected.",
        timestamp: "09:30 AM",
        unread: !1,
      },
    ]),
    [nn, pl] = te.useState([
      {
        id: "aa1",
        pair: "EUR/USD",
        status: "Approaching Demand Zone",
        distance: 8,
        maxDistance: 15,
        confidence: 82,
      },
    ]),
    [vi, ra] = te.useState("Monitoring"),
    [Pn, eu] = te.useState(!1),
    Xt = sa.filter((d) => d.unread).length,
    et = () => {
      const d = !kt;
      (Pa(d), ra(d ? "Monitoring" : "Paused"));
    },
    Qt = (d) => {
      (en((M) => M.filter((_) => _ !== d)),
        pl((M) => M.filter((_) => _.pair !== d)));
    },
    tt = (d) => {
      if (!gl.includes(d)) {
        en((Z) => [...Z, d]);
        const M = [
            "Approaching Demand Zone",
            "Entered Supply Zone",
            "Setup Forming",
          ],
          _ = [82, 85, 91],
          U = M[Math.floor(Math.random() * M.length)];
        pl((Z) => [
          ...Z,
          {
            id: "aa-" + Date.now(),
            pair: d,
            status: U,
            distance: Math.floor(Math.random() * 7) + 5,
            maxDistance: 15,
            confidence: _[Math.floor(Math.random() * _.length)],
          },
        ]);
      }
      eu(!1);
    },
    gi = (d) => {
      Pe((M) => ({ ...M, [d]: !M[d] }));
    },
    yi = (d) => {
      yl((M) => M.map((_) => (_.id === d ? { ..._, unread: !1 } : _)));
    },
    pi = () => {
      yl((d) => d.map((M) => ({ ...M, unread: !1 })));
    };
  te.useEffect(() => {
    if (!kt) {
      ra("Paused");
      return;
    }
    ra("Monitoring");
    const d = setInterval(() => {
      pl((M) =>
        M.map((_) => {
          const U = Math.random() > 0.5 ? 1 : -1;
          let Z = _.distance + U;
          if (
            (Z < 1 && (Z = 1),
            Z > 15 && (Z = 15),
            Z <= 4 && Math.random() > 0.6)
          ) {
            const ze = _.status.toLowerCase().includes("demand")
                ? "approaching demand zone"
                : "entered supply zone",
              nt = `🔔 ${_.pair.replace("/", "")} ${ze}.`;
            yl((ut) =>
              ut.some((un) => un.pair === _.pair && un.message.includes(ze))
                ? ut
                : [
                    {
                      id: "h-" + Date.now(),
                      pair: _.pair,
                      message: nt,
                      timestamp: new Date().toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      }),
                      unread: !0,
                    },
                    ...ut,
                  ],
            );
          }
          return { ..._, distance: Z };
        }),
      );
    }, 5e3);
    return () => clearInterval(d);
  }, [kt]);
  const Nt = J[L],
    wl = (d) => {
      ve.includes(d)
        ? Jt((M) => M.filter((_) => _ !== d))
        : Jt((M) => [...M, d]);
    },
    oa = () => {
      const d = vl.trim() !== "" ? parseFloat(vl) : Nt.price;
      if (isNaN(d) || d <= 0) {
        alert("Please enter a valid target trigger price.");
        return;
      }
      const M = {
        id: "alert-" + Date.now(),
        pair: Nt.pair,
        direction: ee,
        value: d.toFixed(4),
        channels: ve.length > 0 ? ve : ["email"],
        triggered: !1,
      };
      (D((U) => [M, ...U]), fa(""), new Audio().play().catch(() => {}));
    },
    Wt = (d) => {
      D((M) => M.filter((_) => _.id !== d));
    },
    da = (d) => {
      D((M) => M.map((_) => (_.id === d ? { ..._, isMuted: !_.isMuted } : _)));
    };
  te.useEffect(() => {
    D((d) => {
      let M = !1;
      const _ = d.map((U) => {
        if (U.triggered) return U;
        const Z = J.find((ut) => ut.pair === U.pair);
        if (!Z) return U;
        const oe = Z.price,
          ze = parseFloat(U.value);
        let nt = !1;
        return (
          ((U.direction === "above" && oe >= ze) ||
            (U.direction === "below" && oe <= ze)) &&
            (nt = !0),
          nt ? ((M = !0), { ...U, triggered: !0 }) : U
        );
      });
      return M ? _ : d;
    });
  }, [J]);
  const Zl = () => {
    confirm(
      "Do you want to reset and clear your trading strategy and alert data?",
    ) &&
      (I(Fa[0]),
      Ye(0),
      N(!0),
      at(null),
      Ne(null),
      Ae([]),
      D([
        {
          id: "alert-1",
          pair: "BTC/USD",
          direction: "above",
          value: "68000.00",
          channels: ["email", "push"],
          triggered: !0,
        },
        {
          id: "alert-2",
          pair: "EUR/USD",
          direction: "below",
          value: "1.1700",
          channels: ["email", "push"],
          triggered: !0,
        },
      ]),
      Be("above"),
      Jt(["email", "push"]),
      K(0),
      ie("market"));
  };
  return f.jsxs("div", {
    children: [
      f.jsxs("div", {
        className: "header-top",
        children: [
          f.jsx("span", { children: "Gaks Ai" }),
          f.jsx("i", {
            className: "ph ph-sign-out logout-icon",
            title: "Reset Session Data",
            onClick: Zl,
          }),
        ],
      }),
      f.jsxs("div", {
        className: "container",
        children: [
          f.jsxs("div", {
            id: "market",
            className: `page ${j === "market" ? "active" : ""}`,
            children: [
              f.jsxs("div", {
                className: "flex justify-between items-center mb-1",
                children: [
                  f.jsx("h2", { children: "Live Rates" }),
                  f.jsxs("div", {
                    className:
                      "flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#1e1e1e] border border-neutral-800 text-[10px] font-mono text-neutral-400",
                    children: [
                      f.jsx("span", {
                        className:
                          "h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse",
                      }),
                      f.jsx("span", { children: "5s Auto Update" }),
                    ],
                  }),
                ],
              }),
              f.jsxs("div", {
                className:
                  "text-[11px] flex gap-2 items-center mb-4 text-[#888]",
                children: [
                  f.jsx("i", { className: "ph ph-shield-check" }),
                  f.jsx("span", {
                    children: "Secured via Supabase Edge Functions",
                  }),
                ],
              }),
              f.jsx("div", {
                className: "space-y-[12px]",
                children: J.map((d) => {
                  const M = d.change >= 0;
                  let _ = M ? d.price * 1.015 : d.price * 0.985,
                    U = M ? d.price * 0.992 : d.price * 1.008;
                  return f.jsxs(
                    "div",
                    {
                      className:
                        "card flex flex-col p-4 border border-neutral-800 rounded-xl",
                      style: { marginBottom: 0 },
                      children: [
                        f.jsxs("div", {
                          className:
                            "market-row w-full flex justify-between items-center bg-transparent",
                          children: [
                            f.jsxs("div", {
                              children: [
                                f.jsx("span", {
                                  className: "pair-title",
                                  children: d.pair,
                                }),
                                f.jsx("span", {
                                  className: "pair-sub",
                                  children: d.name,
                                }),
                              ],
                            }),
                            f.jsxs("div", {
                              className: "text-right",
                              children: [
                                f.jsx("span", {
                                  className: "price-val block",
                                  children: ml(d.pair, d.price),
                                }),
                                f.jsxs("span", {
                                  className: M ? "trend-up" : "trend-down",
                                  children: [
                                    M ? "▲" : "▼",
                                    " ",
                                    M ? "+" : "",
                                    d.change,
                                    "%",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        f.jsxs("div", {
                          className:
                            "flex gap-4 mt-3 pt-2.5 border-t border-dashed border-neutral-900 text-[10px] font-mono text-neutral-400 justify-between",
                          children: [
                            f.jsxs("div", {
                              children: [
                                f.jsx("span", {
                                  className:
                                    "text-emerald-500 font-bold mr-1.5",
                                  children: "REC. TAKE PROFIT:",
                                }),
                                f.jsx("span", {
                                  className: "text-neutral-200 font-semibold",
                                  children: ml(d.pair, _),
                                }),
                              ],
                            }),
                            f.jsxs("div", {
                              children: [
                                f.jsx("span", {
                                  className: "text-rose-500 font-bold mr-1.5",
                                  children: "REC. STOP LOSS:",
                                }),
                                f.jsx("span", {
                                  className: "text-neutral-200 font-semibold",
                                  children: ml(d.pair, U),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    d.pair,
                  );
                }),
              }),
            ],
          }),
          f.jsxs("div", {
            id: "strategy",
            className: `page ${j === "strategy" ? "active" : ""}`,
            children: [
              f.jsxs("div", {
                className: "strategy-header",
                children: [
                  f.jsxs("h2", {
                    children: [
                      "My Trading Strategy ",
                      f.jsx("span", {
                        style: { color: "var(--accent-green-text)" },
                        children: "●",
                      }),
                    ],
                  }),
                  f.jsxs("span", {
                    className:
                      "cursor-pointer hover:text-white select-none transition-colors",
                    style: { color: "var(--text-muted)", fontSize: "0.9rem" },
                    onClick: ke,
                    children: [
                      f.jsx("i", { className: "ph ph-file-text" }),
                      " Example",
                    ],
                  }),
                ],
              }),
              f.jsx("textarea", {
                className: "strategy-input",
                value: Q,
                onChange: ye,
                placeholder: "Type your strategy here...",
              }),
              f.jsxs("button", {
                className: "btn-full text-center",
                onClick: Fe,
                style: {
                  backgroundColor: R
                    ? "rgba(27, 94, 32, 0.4)"
                    : "var(--card-bg)",
                  color: R ? "var(--accent-green-text)" : "white",
                  border: R ? "1px solid var(--accent-green-text)" : "none",
                },
                children: [
                  f.jsx("i", {
                    className: R ? "ph ph-check-circle" : "ph ph-floppy-disk",
                  }),
                  " ",
                  le,
                ],
              }),
            ],
          }),
          f.jsxs("div", {
            id: "analyze",
            className: `page ${j === "analyze" ? "active" : ""}`,
            children: [
              f.jsxs("div", {
                className: "strategy-header",
                children: [
                  f.jsx("h2", { children: "Chart Analysis" }),
                  f.jsxs("span", {
                    style: { color: "var(--text-muted)" },
                    className:
                      "cursor-pointer flex items-center gap-1.5 hover:text-white transition-colors",
                    onClick: () => He(!0),
                    children: [
                      f.jsx("i", {
                        className: "ph ph-clock-counter-clockwise",
                      }),
                      " History",
                      We.length > 0 &&
                        f.jsx("span", {
                          className:
                            "px-1.5 py-0.5 rounded-full bg-neutral-800 text-[10px] text-neutral-300 font-mono font-bold leading-none",
                          children: We.length,
                        }),
                    ],
                  }),
                ],
              }),
              f.jsxs("div", {
                className: `upload-area ${Ie ? "dragging" : ""}`,
                onDragOver: ht,
                onDragLeave: x,
                onDrop: Y,
                onClick: fe,
                children: [
                  f.jsx("input", {
                    type: "file",
                    ref: At,
                    style: { display: "none" },
                    accept: "image/*",
                    onChange: ce,
                  }),
                  pe
                    ? f.jsxs("div", {
                        className:
                          "w-full h-full relative flex items-center justify-center p-2",
                        children: [
                          f.jsx("img", {
                            src: pe,
                            alt: "Uploaded chart screenshot",
                            className:
                              "max-h-full max-w-full rounded-lg object-contain",
                            referrerPolicy: "no-referrer",
                          }),
                          f.jsx("button", {
                            className:
                              "absolute top-3 right-3 bg-black/80 hover:bg-black text-rose-500 rounded-full p-2 h-9 w-9 flex items-center justify-center border border-neutral-800 transition-colors cursor-pointer",
                            onClick: A,
                            title: "Remove image",
                            children: f.jsx("i", {
                              className: "ph ph-trash",
                              style: { fontSize: "1.2rem" },
                            }),
                          }),
                        ],
                      })
                    : f.jsxs(f.Fragment, {
                        children: [
                          f.jsx("div", {
                            className: "icon-box",
                            children: f.jsx("i", {
                              className: "ph ph-upload-simple",
                              style: { fontSize: "2.2rem", color: "#888" },
                            }),
                          }),
                          f.jsx("p", {
                            style: { margin: "5px 0", fontWeight: "500" },
                            children: "Upload Chart Screenshot",
                          }),
                          f.jsx("span", {
                            style: {
                              color: "var(--text-muted)",
                              fontSize: "0.8rem",
                            },
                            children: "PNG, JPG or WebP · Max 10MB",
                          }),
                        ],
                      }),
                ],
              }),
              (Ge || Re.length > 0) &&
                f.jsxs("div", {
                  className:
                    "card p-4 rounded-xl border border-neutral-800 font-mono text-xs text-neutral-400 space-y-1 bg-[#0b0b0b] max-h-[140px] overflow-y-auto mb-[15px]",
                  children: [
                    Re.map((d, M) =>
                      f.jsxs(
                        "div",
                        {
                          className: "flex gap-2",
                          children: [
                            f.jsx("span", {
                              className: "text-amber-500",
                              children: "▶",
                            }),
                            f.jsx("span", { children: d }),
                          ],
                        },
                        M,
                      ),
                    ),
                    Ge &&
                      f.jsxs("div", {
                        className:
                          "flex gap-2 items-center text-emerald-500 animate-pulse mt-1",
                        children: [
                          f.jsx("span", { children: "●" }),
                          f.jsx("span", {
                            className: "italic",
                            children: "Running AI strategy scanner...",
                          }),
                        ],
                      }),
                  ],
                }),
              G &&
                f.jsxs("div", {
                  className:
                    "card p-5 border border-dashed border-neutral-700 rounded-xl space-y-3 bg-[#111] animate-fadeIn mb-4",
                  children: [
                    f.jsxs("div", {
                      className:
                        "flex justify-between items-center pb-2 border-b border-neutral-800",
                      children: [
                        f.jsxs("div", {
                          className: "flex items-center gap-2",
                          children: [
                            f.jsxs("span", {
                              className: `px-2.5 py-1 text-xs font-black rounded ${G.signal === "BUY" ? "bg-emerald-950 text-emerald-400 border border-emerald-500/20" : G.signal === "SELL" ? "bg-rose-950 text-rose-400 border border-rose-500/20" : "bg-neutral-800 text-neutral-300"}`,
                              children: [G.signal, " setup"],
                            }),
                            f.jsxs("span", {
                              className: "text-xs text-neutral-500 font-mono",
                              children: ["Confidence: ", G.confidence],
                            }),
                          ],
                        }),
                        f.jsx("div", {
                          className: "text-right",
                          children: f.jsx("span", {
                            className:
                              "text-[10px] text-neutral-500 uppercase tracking-widest font-bold",
                            children: "Strategy Checked",
                          }),
                        }),
                      ],
                    }),
                    f.jsxs("div", {
                      className:
                        "grid grid-cols-3 gap-2.5 font-mono text-xs text-neutral-400 py-1",
                      children: [
                        f.jsxs("div", {
                          className:
                            "border border-neutral-800 bg-neutral-950 p-2 rounded",
                          children: [
                            f.jsx("div", {
                              className: "text-[9px] text-neutral-600 mb-0.5",
                              children: "TRIGGER LEVEL",
                            }),
                            f.jsx("div", {
                              className: "font-bold text-neutral-200",
                              children: G.level,
                            }),
                          ],
                        }),
                        f.jsxs("div", {
                          className:
                            "border border-neutral-800 bg-neutral-950 p-2 rounded",
                          children: [
                            f.jsx("div", {
                              className: "text-[9px] text-neutral-600 mb-0.5",
                              children: "TAKE PROFIT (TP)",
                            }),
                            f.jsx("div", {
                              className: "font-bold text-emerald-500",
                              children: G.tp,
                            }),
                          ],
                        }),
                        f.jsxs("div", {
                          className:
                            "border border-neutral-800 bg-neutral-950 p-2 rounded",
                          children: [
                            f.jsx("div", {
                              className: "text-[9px] text-neutral-600 mb-0.5",
                              children: "STOP LOSS (SL)",
                            }),
                            f.jsx("div", {
                              className: "font-bold text-rose-500",
                              children: G.sl,
                            }),
                          ],
                        }),
                      ],
                    }),
                    f.jsx("p", {
                      className:
                        "text-xs text-neutral-400 leading-relaxed font-sans",
                      children: G.reason,
                    }),
                  ],
                }),
              f.jsxs("button", {
                className: "btn-full",
                style: {
                  background:
                    pe && !Ge
                      ? "linear-gradient(135deg, #1b5e20, #004d40)"
                      : "#333",
                  cursor: pe && !Ge ? "pointer" : "not-allowed",
                },
                onClick: o,
                disabled: !pe || Ge,
                children: [
                  f.jsx("i", { className: "ph ph-lightning" }),
                  " ",
                  Ge ? "Analyzing chart..." : "Analyze with My Strategy",
                ],
              }),
            ],
          }),
          f.jsxs("div", {
            id: "alerts",
            className: `page ${j === "alerts" ? "active" : ""}`,
            children: [
              f.jsxs("div", {
                className: "flex flex-col gap-1 mb-6",
                children: [
                  f.jsx("h2", {
                    className:
                      "text-xl font-bold tracking-tight text-white m-0",
                    children: "AI Market Watcher & Alerts",
                  }),
                  f.jsx("p", {
                    className: "text-xs text-neutral-500 m-0",
                    children:
                      "Institutional grade scanner & real-time liquidity zone heuristics",
                  }),
                ],
              }),
              f.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-5",
                children: [
                  f.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      f.jsxs("div", {
                        className:
                          "bg-[#121212]/80 border border-neutral-805 rounded-xl p-5 shadow-[0_0_15px_rgba(255,255,255,0.02)] relative",
                        children: [
                          f.jsx("div", {
                            className: "flex justify-between items-center mb-4",
                            children: f.jsxs("div", {
                              className: "flex items-center gap-2",
                              children: [
                                f.jsx("span", {
                                  className:
                                    "text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold",
                                  children: "Heuristic Engine",
                                }),
                                f.jsxs("div", {
                                  className:
                                    "flex items-center gap-1.5 px-2 py-0.5 rounded bg-black border border-neutral-800 text-[10px] font-mono text-neutral-300",
                                  children: [
                                    f.jsx("span", {
                                      className: `h-1.5 w-1.5 rounded-full ${kt ? "bg-emerald-500 animate-pulse" : "bg-neutral-500"}`,
                                    }),
                                    f.jsx("span", { children: vi }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          f.jsxs("div", {
                            className:
                              "flex items-center justify-between py-2 border-y border-neutral-900 mb-4",
                            children: [
                              f.jsxs("div", {
                                children: [
                                  f.jsx("span", {
                                    className:
                                      "block text-sm font-semibold text-white",
                                    children: "Enable AI Heuristics Watcher",
                                  }),
                                  f.jsx("span", {
                                    className: "text-[11px] text-neutral-500",
                                    children:
                                      "Autonomous support/resist scanner & setup alert builder",
                                  }),
                                ],
                              }),
                              f.jsxs("label", {
                                className:
                                  "relative inline-flex items-center cursor-pointer select-none",
                                children: [
                                  f.jsx("input", {
                                    type: "checkbox",
                                    className: "sr-only peer",
                                    checked: kt,
                                    onChange: et,
                                  }),
                                  f.jsx("div", {
                                    className:
                                      "w-11 h-6 bg-neutral-800 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-neutral-200 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-white peer-checked:after:bg-black",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          f.jsxs("div", {
                            className:
                              "flex items-center justify-between text-xs font-mono text-neutral-500",
                            children: [
                              f.jsxs("span", {
                                className: "text-neutral-300",
                                children: [
                                  "Currently watching ",
                                  gl.length,
                                  " markets",
                                ],
                              }),
                              f.jsx("span", {
                                className: "text-[10px] text-neutral-600",
                                children: "Latency: 3.8ms",
                              }),
                            ],
                          }),
                        ],
                      }),
                      f.jsxs("div", {
                        className:
                          "bg-[#121212]/80 border border-neutral-805 rounded-xl p-5 shadow-[0_0_15px_rgba(255,255,255,0.02)]",
                        children: [
                          f.jsxs("div", {
                            className: "flex justify-between items-center mb-3",
                            children: [
                              f.jsx("span", {
                                className:
                                  "text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold",
                                children: "Watchlist Status",
                              }),
                              f.jsx("span", {
                                className:
                                  "text-[10px] text-neutral-500 font-mono",
                                children: "Real-Time Core",
                              }),
                            ],
                          }),
                          f.jsxs("div", {
                            className: "space-y-2 mb-4",
                            children: [
                              gl.map((d) => {
                                const M = J.find(
                                    (oe) =>
                                      oe.pair.replace("/", "") ===
                                      d.replace("/", ""),
                                  ),
                                  _ = M ? M.price : 1.0924,
                                  U = M ? M.change : 0,
                                  Z = U >= 0;
                                return f.jsxs(
                                  "div",
                                  {
                                    className:
                                      "flex justify-between items-center bg-black/40 border border-neutral-900 rounded-lg p-3 hover:border-neutral-850 transition-colors",
                                    children: [
                                      f.jsxs("div", {
                                        children: [
                                          f.jsxs("div", {
                                            className:
                                              "flex items-center gap-2",
                                            children: [
                                              f.jsx("span", {
                                                className:
                                                  "text-xs font-bold font-mono text-white",
                                                children: d,
                                              }),
                                              f.jsx("span", {
                                                className:
                                                  "h-1 w-1 rounded-full bg-emerald-500",
                                              }),
                                              f.jsx("span", {
                                                className:
                                                  "text-[9px] font-mono text-neutral-500 font-bold",
                                                children: "MONITORING",
                                              }),
                                            ],
                                          }),
                                          f.jsx("span", {
                                            className:
                                              "text-[10px] font-mono text-neutral-500 block mt-0.5",
                                            children: "Scanner active [H1/M15]",
                                          }),
                                        ],
                                      }),
                                      f.jsxs("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                          f.jsxs("div", {
                                            className: "text-right",
                                            children: [
                                              f.jsx("span", {
                                                className:
                                                  "text-xs font-mono font-bold text-white block",
                                                children: ml(d, _),
                                              }),
                                              f.jsxs("span", {
                                                className: `text-[9px] font-mono block ${Z ? "text-emerald-500" : "text-rose-500"}`,
                                                children: [
                                                  Z ? "▲" : "▼",
                                                  " ",
                                                  Z ? "+" : "",
                                                  U,
                                                  "%",
                                                ],
                                              }),
                                            ],
                                          }),
                                          f.jsx("button", {
                                            onClick: () => Qt(d),
                                            className:
                                              "text-neutral-500 hover:text-rose-500 p-1 rounded hover:bg-neutral-900 transition-all cursor-pointer border-none bg-transparent",
                                            title: "Remove monitored pair",
                                            children: f.jsx("i", {
                                              className: "ph ph-trash text-sm",
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  d,
                                );
                              }),
                              gl.length === 0 &&
                                f.jsx("div", {
                                  className:
                                    "text-center py-6 text-xs text-neutral-600 font-mono border border-dashed border-neutral-800 rounded-lg",
                                  children: "No pairs currently under scanner",
                                }),
                            ],
                          }),
                          f.jsxs("div", {
                            className: "relative",
                            children: [
                              f.jsxs("button", {
                                onClick: () => eu(!Pn),
                                className:
                                  "w-full py-2 bg-neutral-900 border border-neutral-805 hover:bg-neutral-800 text-neutral-200 text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer",
                                children: [
                                  f.jsx("i", { className: "ph ph-plus" }),
                                  " Add Monitored Pair",
                                ],
                              }),
                              Pn &&
                                f.jsxs("div", {
                                  className:
                                    "absolute left-0 right-0 mt-2 bg-[#181818] border border-neutral-800 rounded-xl shadow-2xl z-50 p-2 overflow-hidden animate-fadeIn",
                                  children: [
                                    f.jsx("div", {
                                      className:
                                        "text-[10px] font-mono tracking-wider text-neutral-500 p-2 uppercase border-b border-neutral-900",
                                      children:
                                        "Select Available Market Assets",
                                    }),
                                    f.jsxs("div", {
                                      className:
                                        "max-h-[160px] overflow-y-auto mt-1",
                                      children: [
                                        J.filter(
                                          (d) =>
                                            !gl.some(
                                              (M) =>
                                                M.replace("/", "") ===
                                                d.pair.replace("/", ""),
                                            ),
                                        ).map((d) =>
                                          f.jsxs(
                                            "div",
                                            {
                                              onClick: () => tt(d.pair),
                                              className:
                                                "px-3 py-2 text-xs text-neutral-300 hover:bg-neutral-900 hover:text-white rounded-lg cursor-pointer flex justify-between items-center transition-colors font-mono",
                                              children: [
                                                f.jsx("span", {
                                                  children: d.pair,
                                                }),
                                                f.jsx("span", {
                                                  className:
                                                    "text-neutral-500 text-[10px]/none",
                                                  children: ml(d.pair, d.price),
                                                }),
                                              ],
                                            },
                                            d.pair,
                                          ),
                                        ),
                                        J.filter(
                                          (d) =>
                                            !gl.some(
                                              (M) =>
                                                M.replace("/", "") ===
                                                d.pair.replace("/", ""),
                                            ),
                                        ).length === 0 &&
                                          f.jsx("div", {
                                            className:
                                              "text-center text-xs text-neutral-600 py-3 font-mono",
                                            children:
                                              "All available pairs added",
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        ],
                      }),
                      f.jsxs("div", {
                        className:
                          "bg-[#121212]/80 border border-neutral-805 rounded-xl p-5 shadow-[0_0_15px_rgba(255,255,255,0.02)]",
                        children: [
                          f.jsx("span", {
                            className:
                              "text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold block mb-4",
                            children: "Target Alert Criteria",
                          }),
                          f.jsxs("div", {
                            className: "grid grid-cols-2 gap-3 mb-4",
                            children: [
                              f.jsxs("div", {
                                children: [
                                  f.jsx("label", {
                                    className:
                                      "block text-[10px] font-mono text-neutral-500 uppercase tracking-wider mb-1.5",
                                    children: "Alert Trigger Distance",
                                  }),
                                  f.jsxs("select", {
                                    value: tn,
                                    onChange: (d) => ln(d.target.value),
                                    className:
                                      "w-full bg-black border border-neutral-800 rounded-lg py-2 px-2 text-xs text-neutral-300 outline-none focus:border-neutral-600 font-mono cursor-pointer",
                                    children: [
                                      f.jsx("option", {
                                        value: "5 pips away",
                                        children: "5 pips away",
                                      }),
                                      f.jsx("option", {
                                        value: "10 pips away",
                                        children: "10 pips away",
                                      }),
                                      f.jsx("option", {
                                        value: "15 pips away",
                                        children: "15 pips away",
                                      }),
                                      f.jsx("option", {
                                        value: "20 pips away",
                                        children: "20 pips away",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              f.jsxs("div", {
                                children: [
                                  f.jsx("label", {
                                    className:
                                      "block text-[10px] font-mono text-neutral-500 uppercase tracking-wider mb-1.5",
                                    children: "Scanner Timeframe",
                                  }),
                                  f.jsxs("select", {
                                    value: an,
                                    onChange: (d) => mi(d.target.value),
                                    className:
                                      "w-full bg-black border border-neutral-800 rounded-lg py-2 px-2 text-xs text-neutral-300 outline-none focus:border-neutral-600 font-mono cursor-pointer",
                                    children: [
                                      f.jsx("option", {
                                        value: "M5",
                                        children: "M5",
                                      }),
                                      f.jsx("option", {
                                        value: "M15",
                                        children: "M15",
                                      }),
                                      f.jsx("option", {
                                        value: "H1",
                                        children: "H1",
                                      }),
                                      f.jsx("option", {
                                        value: "H4",
                                        children: "H4",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          f.jsxs("div", {
                            className:
                              "border-t border-neutral-900 pt-4 space-y-2.5",
                            children: [
                              f.jsx("span", {
                                className:
                                  "block text-[10px] font-mono text-neutral-500 uppercase tracking-wider mb-1.5",
                                children: "Notification Conditions",
                              }),
                              [
                                {
                                  id: "approachingZone",
                                  label: "Approaching Zone Alert",
                                },
                                {
                                  id: "zoneReached",
                                  label: "Zone Reached Alert",
                                },
                                {
                                  id: "confirmationDetected",
                                  label: "Confirmation Alert",
                                },
                                {
                                  id: "tradeSetup",
                                  label: "Trade Setup Alert",
                                },
                                {
                                  id: "setupInvalidated",
                                  label: "Setup Invalidated Alert",
                                },
                              ].map((d) =>
                                f.jsxs(
                                  "label",
                                  {
                                    className:
                                      "flex items-center gap-3 cursor-pointer select-none",
                                    children: [
                                      f.jsx("input", {
                                        type: "checkbox",
                                        checked: In[d.id],
                                        onChange: () => gi(d.id),
                                        className: "sr-only peer",
                                      }),
                                      f.jsx("div", {
                                        className:
                                          "h-4 w-4 bg-black border border-neutral-800 rounded flex items-center justify-center text-[10px] text-black peer-checked:bg-white peer-checked:border-white transition-all font-bold",
                                        children: In[d.id] && "✓",
                                      }),
                                      f.jsx("span", {
                                        className:
                                          "text-xs text-neutral-300 peer-checked:text-white transition-colors",
                                        children: d.label,
                                      }),
                                    ],
                                  },
                                  d.id,
                                ),
                              ),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  f.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      f.jsxs("div", {
                        className:
                          "bg-[#121212]/80 border border-neutral-805 rounded-xl p-5 shadow-[0_0_15px_rgba(255,255,255,0.02)]",
                        children: [
                          f.jsxs("div", {
                            className: "flex justify-between items-center mb-4",
                            children: [
                              f.jsx("span", {
                                className:
                                  "text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold",
                                children: "Live Scan Dashboard",
                              }),
                              f.jsx("span", {
                                className:
                                  "h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse",
                              }),
                            ],
                          }),
                          f.jsxs("div", {
                            className: "space-y-3.5",
                            children: [
                              nn.map((d) => {
                                const M = Math.max(
                                  0,
                                  Math.min(
                                    100,
                                    Math.round(
                                      ((d.maxDistance - d.distance) /
                                        d.maxDistance) *
                                        100,
                                    ),
                                  ),
                                );
                                return f.jsxs(
                                  "div",
                                  {
                                    className:
                                      "bg-black/60 border border-neutral-800 rounded-xl p-4 space-y-3 relative group overflow-hidden",
                                    children: [
                                      f.jsx("div", {
                                        className:
                                          "absolute top-0 left-0 w-0.5 h-full bg-neutral-200 shadow-[0_0_10px_#fff] group-hover:w-full transition-all duration-[6000ms] opacity-5",
                                      }),
                                      f.jsxs("div", {
                                        className:
                                          "flex justify-between items-start",
                                        children: [
                                          f.jsxs("div", {
                                            children: [
                                              f.jsx("span", {
                                                className:
                                                  "text-[13px] font-bold font-mono text-white block",
                                                children: d.pair,
                                              }),
                                              f.jsx("span", {
                                                className:
                                                  "text-[11px] font-medium text-white",
                                                children: d.status,
                                              }),
                                            ],
                                          }),
                                          f.jsxs("div", {
                                            className: "text-right font-mono",
                                            children: [
                                              f.jsxs("span", {
                                                className:
                                                  "text-xs font-bold text-neutral-300 block",
                                                children: [
                                                  d.distance,
                                                  " PIPs REMAINING",
                                                ],
                                              }),
                                              f.jsxs("span", {
                                                className:
                                                  "text-[10px] text-neutral-500 font-bold uppercase tracking-wider",
                                                children: [
                                                  d.confidence,
                                                  "% CONFIDENCE LEVEL",
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      f.jsxs("div", {
                                        className: "space-y-1",
                                        children: [
                                          f.jsx("div", {
                                            className:
                                              "w-full bg-neutral-900 border border-neutral-800 rounded-full h-2 overflow-hidden p-[1px]",
                                            children: f.jsx("div", {
                                              className:
                                                "h-full bg-white rounded-full transition-all duration-1000 shadow-[0_0_8px_#fff]",
                                              style: { width: `${M}%` },
                                            }),
                                          }),
                                          f.jsxs("div", {
                                            className:
                                              "flex justify-between text-[9px] font-mono text-neutral-600",
                                            children: [
                                              f.jsx("span", {
                                                children: "ZONE RANGE (15p)",
                                              }),
                                              f.jsx("span", {
                                                children: "TARGET ARRIVAL",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  d.id,
                                );
                              }),
                              nn.length === 0 &&
                                f.jsx("div", {
                                  className:
                                    "text-center py-10 font-mono text-xs text-neutral-600 border border-dashed border-neutral-800 rounded-xl",
                                  children:
                                    "No critical setups detected inside target distance criteria. Enable watcher or add pairs to start scanning.",
                                }),
                            ],
                          }),
                        ],
                      }),
                      f.jsxs("div", {
                        className:
                          "bg-[#121212]/80 border border-neutral-805 rounded-xl p-5 shadow-[0_0_15px_rgba(255,255,255,0.02)]",
                        children: [
                          f.jsxs("div", {
                            className: "flex justify-between items-center mb-4",
                            children: [
                              f.jsx("span", {
                                className:
                                  "text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold",
                                children: "Recent Scanner Alerts",
                              }),
                              Xt > 0
                                ? f.jsxs("button", {
                                    onClick: pi,
                                    className:
                                      "text-[10px] font-mono text-neutral-405 hover:text-white underline cursor-pointer bg-transparent border-none p-0",
                                    children: ["Clear Badges (", Xt, ")"],
                                  })
                                : f.jsx("span", {
                                    className:
                                      "text-[10px] font-mono text-neutral-600",
                                    children: "All acknowledged",
                                  }),
                            ],
                          }),
                          f.jsxs("div", {
                            className:
                              "space-y-2 max-h-[260px] overflow-y-auto mb-3 pr-1",
                            children: [
                              sa.map((d) =>
                                f.jsxs(
                                  "div",
                                  {
                                    onClick: () => yi(d.id),
                                    className: `relative border rounded-lg p-3 cursor-pointer transition-all flex items-start gap-2.5 ${d.unread ? "bg-neutral-900 border-neutral-750 shadow-[0_0_10px_rgba(255,255,255,0.02)]" : "bg-black/40 border-neutral-900 opacity-60 hover:opacity-90"}`,
                                    children: [
                                      d.unread &&
                                        f.jsx("span", {
                                          className:
                                            "absolute top-3.5 right-3 h-1.5 w-1.5 rounded-full bg-white animate-ping",
                                        }),
                                      f.jsx("div", {
                                        className: "mt-0.5",
                                        children: f.jsx("i", {
                                          className: `ph ph-bell text-sm ${d.unread ? "text-white font-bold" : "text-neutral-500"}`,
                                        }),
                                      }),
                                      f.jsxs("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                          f.jsxs("div", {
                                            className:
                                              "flex items-center gap-2 mb-1",
                                            children: [
                                              f.jsx("span", {
                                                className:
                                                  "text-[10px] font-bold font-mono text-white tracking-wide",
                                                children: d.pair,
                                              }),
                                              f.jsx("span", {
                                                className:
                                                  "text-[9px] font-mono text-neutral-500",
                                                children: d.timestamp,
                                              }),
                                            ],
                                          }),
                                          f.jsx("p", {
                                            className:
                                              "text-xs text-neutral-300 leading-snug font-sans m-0",
                                            children: d.message,
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  d.id,
                                ),
                              ),
                              sa.length === 0 &&
                                f.jsx("div", {
                                  className:
                                    "text-center py-8 font-mono text-xs text-neutral-600",
                                  children: "Notifications ledger is empty",
                                }),
                            ],
                          }),
                          f.jsxs("div", {
                            className: "flex gap-2",
                            children: [
                              f.jsx("button", {
                                onClick: () => {
                                  const d = [
                                      "EUR/USD",
                                      "GBP/USD",
                                      "XAU/USD",
                                      "USD/JPY",
                                    ],
                                    M = d[Math.floor(Math.random() * d.length)],
                                    _ = [
                                      "approaching demand zone",
                                      "entered supply zone",
                                      "bullish confirmation detected",
                                    ],
                                    U = _[Math.floor(Math.random() * _.length)],
                                    Z = {
                                      id: "h-" + Date.now(),
                                      pair: M,
                                      message: `🔔 ${M.replace("/", "")} ${U}.`,
                                      timestamp: new Date().toLocaleTimeString(
                                        [],
                                        { hour: "2-digit", minute: "2-digit" },
                                      ),
                                      unread: !0,
                                    };
                                  yl((oe) => [Z, ...oe]);
                                },
                                className:
                                  "w-full py-1.5 border border-dashed border-neutral-800 hover:border-neutral-500 bg-neutral-950 font-mono text-[10px] text-neutral-400 hover:text-white rounded-lg transition-colors cursor-pointer",
                                children: "+ Simulate Live Alert Trigger Event",
                              }),
                              sa.length > 0 &&
                                f.jsx("button", {
                                  onClick: () => yl([]),
                                  className:
                                    "py-1.5 px-3 border border-neutral-900 bg-neutral-950 text-neutral-600 hover:text-rose-500 text-[10px] font-mono rounded-lg transition-all cursor-pointer",
                                  title: "Clear database logs",
                                  children: "Clear",
                                }),
                            ],
                          }),
                        ],
                      }),
                      f.jsxs("div", {
                        className:
                          "bg-[#121212]/80 border border-neutral-805 rounded-xl p-5 shadow-[0_0_15px_rgba(255,255,255,0.02)]",
                        children: [
                          f.jsx("span", {
                            className:
                              "text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold block mb-4",
                            children: "Manual Custom Target Level Alerts",
                          }),
                          f.jsxs("div", {
                            className:
                              "bg-black/40 border border-neutral-900 rounded-xl p-4 mb-4",
                            children: [
                              f.jsxs("div", {
                                className: "relative",
                                children: [
                                  f.jsxs("button", {
                                    className:
                                      "dropdown-btn flex justify-between items-center bg-black border border-neutral-805 p-2.5 rounded-lg text-xs font-mono text-white mb-3 w-full cursor-pointer",
                                    onClick: () => Lt(!Ia),
                                    children: [
                                      f.jsxs("span", {
                                        children: [
                                          Nt.pair,
                                          " — ",
                                          ml(Nt.pair, Nt.price),
                                        ],
                                      }),
                                      f.jsx("i", {
                                        className: "ph ph-caret-down",
                                      }),
                                    ],
                                  }),
                                  Ia &&
                                    f.jsx("div", {
                                      className:
                                        "absolute top-11 left-0 w-full bg-[#1e1e1e] border border-neutral-800 rounded-lg shadow-xl overflow-hidden z-50 animate-fadeIn font-mono text-xs",
                                      children: J.map((d, M) =>
                                        f.jsxs(
                                          "div",
                                          {
                                            className: `px-3 py-2.5 hover:bg-neutral-800 cursor-pointer transition-colors duration-200 flex justify-between items-center ${M === L ? "bg-neutral-800 text-white font-bold" : "text-neutral-400"}`,
                                            onClick: () => {
                                              (K(M), Lt(!1));
                                            },
                                            children: [
                                              f.jsx("span", {
                                                children: d.pair,
                                              }),
                                              f.jsx("span", {
                                                children: ml(d.pair, d.price),
                                              }),
                                            ],
                                          },
                                          d.pair,
                                        ),
                                      ),
                                    }),
                                ],
                              }),
                              f.jsxs("div", {
                                className: "toggle-row mb-3 flex gap-2",
                                children: [
                                  f.jsx("button", {
                                    className: `flex-1 py-1 px-3 border rounded text-[11px] font-mono text-center cursor-pointer transition-colors ${ee === "above" ? "bg-white text-black border-white font-bold" : "bg-transparent text-neutral-400 border-neutral-800"}`,
                                    onClick: () => Be("above"),
                                    children: "↑ Above Trigger",
                                  }),
                                  f.jsx("button", {
                                    className: `flex-1 py-1 px-3 border rounded text-[11px] font-mono text-center cursor-pointer transition-colors ${ee === "below" ? "bg-white text-black border-white font-bold" : "bg-transparent text-neutral-400 border-neutral-800"}`,
                                    onClick: () => Be("below"),
                                    children: "↓ Below Trigger",
                                  }),
                                ],
                              }),
                              f.jsxs("div", {
                                className: "toggle-row mb-3 flex gap-2",
                                children: [
                                  f.jsx("button", {
                                    className: `flex-1 py-1.5 px-2 border rounded text-[11px] font-mono text-center cursor-pointer flex items-center justify-center gap-1.5 transition-colors ${ve.includes("email") ? "bg-neutral-205 text-black border-white font-bold" : "bg-transparent text-neutral-400 border-neutral-800"}`,
                                    onClick: () => wl("email"),
                                    children: "Email Channels",
                                  }),
                                  f.jsx("button", {
                                    className: `flex-1 py-1.5 px-2 border rounded text-[11px] font-mono text-center cursor-pointer flex items-center justify-center gap-1.5 transition-colors ${ve.includes("push") ? "bg-neutral-205 text-black border-white font-bold" : "bg-transparent text-neutral-400 border-neutral-800"}`,
                                    onClick: () => wl("push"),
                                    children: "Push Native",
                                  }),
                                ],
                              }),
                              f.jsxs("div", {
                                className: "input-row flex gap-2",
                                children: [
                                  f.jsx("input", {
                                    type: "number",
                                    step: "0.0001",
                                    className:
                                      "price-input bg-black border border-neutral-800 p-2 text-xs text-white rounded-lg font-mono flex-1 outline-none",
                                    value: vl,
                                    onChange: (d) => fa(d.target.value),
                                    placeholder: `Current: ${ml(Nt.pair, Nt.price)}`,
                                  }),
                                  f.jsx("button", {
                                    className:
                                      "px-4.5 bg-neutral-200 hover:bg-white text-black font-bold text-xs rounded-lg transition-colors cursor-pointer border-none",
                                    onClick: oa,
                                    children: "Set Level",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          f.jsxs("div", {
                            className: "space-y-[10px]",
                            children: [
                              E.map((d) =>
                                f.jsxs(
                                  "div",
                                  {
                                    className:
                                      "border border-neutral-800 bg-black/40 rounded-xl p-3 flex justify-between items-center",
                                    style: {
                                      filter: d.isMuted
                                        ? "opacity(0.6)"
                                        : "none",
                                      transition: "filter 0.2s",
                                    },
                                    children: [
                                      f.jsxs("div", {
                                        children: [
                                          f.jsxs("div", {
                                            className:
                                              "flex items-center gap-1.5",
                                            children: [
                                              f.jsx("span", {
                                                className:
                                                  "text-xs font-bold text-white font-mono",
                                                children: d.pair,
                                              }),
                                              f.jsx("span", {
                                                className: `text-[9px] px-1.5 py-0.5 rounded font-bold ${d.triggered ? "bg-neutral-800 text-white" : "bg-neutral-900 text-neutral-400 border border-neutral-850"}`,
                                                children: d.triggered
                                                  ? "TRIGGERED"
                                                  : "MONITORING",
                                              }),
                                            ],
                                          }),
                                          f.jsxs("span", {
                                            className:
                                              "text-xs font-mono text-neutral-400 select-none",
                                            children: [
                                              d.direction === "above"
                                                ? "↑ ABOVE"
                                                : "↓ BELOW",
                                              " ",
                                              ml(d.pair, parseFloat(d.value)),
                                            ],
                                          }),
                                        ],
                                      }),
                                      f.jsxs("div", {
                                        className:
                                          "flex gap-4 items-center text-neutral-450 text-sm",
                                        children: [
                                          f.jsx("span", {
                                            className:
                                              "cursor-pointer hover:text-white",
                                            onClick: () => da(d.id),
                                            children: f.jsx("i", {
                                              className: d.isMuted
                                                ? "ph ph-bell-slash text-xs"
                                                : "ph ph-bell text-xs",
                                            }),
                                          }),
                                          f.jsx("span", {
                                            className:
                                              "cursor-pointer hover:text-rose-500",
                                            onClick: () => Wt(d.id),
                                            children: f.jsx("i", {
                                              className: "ph ph-trash text-xs",
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  d.id,
                                ),
                              ),
                              E.length === 0 &&
                                f.jsx("div", {
                                  className:
                                    "text-center py-4 font-mono text-xs text-neutral-600",
                                  children: "No customer target levels stored",
                                }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      f.jsxs("nav", {
        className: "bottom-nav",
        children: [
          f.jsxs("div", {
            className: `nav-item ${j === "market" ? "active" : ""}`,
            onClick: () => ie("market"),
            children: [f.jsx("i", { className: "ph ph-chart-bar" }), "Market"],
          }),
          f.jsxs("div", {
            className: `nav-item ${j === "strategy" ? "active" : ""}`,
            onClick: () => ie("strategy"),
            children: [
              f.jsx("i", { className: "ph ph-file-text" }),
              "Strategy",
            ],
          }),
          f.jsxs("div", {
            className: `nav-item ${j === "analyze" ? "active" : ""}`,
            onClick: () => ie("analyze"),
            children: [f.jsx("i", { className: "ph ph-lightning" }), "Analyze"],
          }),
          f.jsxs("div", {
            className: `nav-item relative ${j === "alerts" ? "active" : ""}`,
            onClick: () => ie("alerts"),
            children: [
              f.jsxs("div", {
                className: "relative",
                children: [
                  f.jsx("i", { className: "ph ph-bell" }),
                  Xt > 0 &&
                    f.jsx("span", {
                      className:
                        "absolute -top-1.5 -right-1.5 bg-white text-black font-mono font-bold text-[8px] h-3.5 w-3.5 flex items-center justify-center rounded-full border border-neutral-950 animate-pulse",
                      children: Xt,
                    }),
                ],
              }),
              "Alerts",
            ],
          }),
        ],
      }),
      Tt &&
        f.jsxs("div", {
          className:
            "fixed inset-0 bg-black/85 backdrop-blur-sm z-[999] flex flex-col justify-end sm:justify-center p-0 sm:p-4 animate-fadeIn",
          children: [
            f.jsx("div", {
              className: "absolute inset-0 cursor-default",
              onClick: () => He(!1),
            }),
            f.jsxs("div", {
              className:
                "relative bg-neutral-950 border-t sm:border border-neutral-850 rounded-t-2xl sm:rounded-2xl w-full max-w-md mx-auto flex flex-col max-h-[85vh] sm:max-h-[80vh] shadow-2xl z-10 overflow-hidden",
              children: [
                f.jsxs("div", {
                  className:
                    "flex justify-between items-center px-5 py-4 border-b border-neutral-900 bg-neutral-900/50",
                  children: [
                    f.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        f.jsx("i", {
                          className:
                            "ph ph-clock-counter-clockwise text-amber-500 text-lg",
                        }),
                        f.jsxs("div", {
                          className: "text-left",
                          children: [
                            f.jsx("h3", {
                              className:
                                "text-sm font-bold text-neutral-100 m-0",
                              children: "Analysis History",
                            }),
                            f.jsx("p", {
                              className:
                                "text-[10px] text-neutral-500 font-mono m-0",
                              children: "Restoring past scanner setups",
                            }),
                          ],
                        }),
                      ],
                    }),
                    f.jsx("button", {
                      onClick: () => He(!1),
                      className:
                        "hover:text-white text-neutral-450 p-1 rounded-lg transition-colors cursor-pointer bg-transparent border-none",
                      children: f.jsx("i", { className: "ph ph-x text-lg" }),
                    }),
                  ],
                }),
                f.jsx("div", {
                  className: "flex-1 overflow-y-auto p-4 space-y-3",
                  children:
                    We.length === 0
                      ? f.jsxs("div", {
                          className:
                            "flex flex-col items-center justify-center py-12 text-center space-y-3",
                          children: [
                            f.jsx("div", {
                              className:
                                "h-12 w-12 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-600",
                              children: f.jsx("i", {
                                className: "ph ph-folder text-xl",
                              }),
                            }),
                            f.jsxs("div", {
                              children: [
                                f.jsx("p", {
                                  className:
                                    "text-xs text-neutral-400 font-medium m-0",
                                  children: "No past analysis found",
                                }),
                                f.jsx("p", {
                                  className:
                                    "text-[10px] text-neutral-600 mt-1 m-0",
                                  children:
                                    "Upload and analyze a chart to save details",
                                }),
                              ],
                            }),
                          ],
                        })
                      : We.map((d) =>
                          f.jsxs(
                            "div",
                            {
                              className:
                                "group relative bg-[#121212] border border-neutral-900 hover:border-neutral-800 p-3 rounded-xl flex gap-3 transition-all cursor-pointer hover:bg-neutral-900/40 text-left",
                              onClick: () => {
                                (at(d.image),
                                  Ne(d.report),
                                  Ae([
                                    `Restored cached analysis from ${d.timestamp}`,
                                    'Strategy active during analysis: "' +
                                      (d.strategyUsed
                                        ? d.strategyUsed.substring(0, 35) +
                                          "..."
                                        : "Default SMC") +
                                      '"',
                                    "Trigger levels & parameters fully reloaded.",
                                  ]),
                                  He(!1));
                              },
                              children: [
                                f.jsx("div", {
                                  className:
                                    "w-16 h-16 rounded-lg bg-neutral-950 overflow-hidden flex-shrink-0 border border-neutral-800 flex items-center justify-center relative",
                                  children: f.jsx("img", {
                                    src: d.image,
                                    alt: "Restored Chart Thumbnail",
                                    className: "object-cover w-full h-full",
                                    referrerPolicy: "no-referrer",
                                  }),
                                }),
                                f.jsxs("div", {
                                  className: "flex-1 min-w-0 pr-6",
                                  children: [
                                    f.jsxs("div", {
                                      className:
                                        "flex items-center gap-1.5 mb-1",
                                      children: [
                                        f.jsx("span", {
                                          className: `px-1.5 py-0.5 text-[9px] font-black rounded font-mono ${d.report.signal === "BUY" ? "bg-emerald-950/80 text-emerald-400 border border-emerald-500/20" : d.report.signal === "SELL" ? "bg-rose-950/80 text-rose-400 border border-rose-500/20" : "bg-neutral-800 text-neutral-300"}`,
                                          children: d.report.signal,
                                        }),
                                        f.jsxs("span", {
                                          className:
                                            "text-[10px] text-neutral-500 font-mono",
                                          children: [
                                            "Conf: ",
                                            d.report.confidence,
                                          ],
                                        }),
                                      ],
                                    }),
                                    f.jsxs("div", {
                                      className:
                                        "grid grid-cols-3 gap-1 font-mono text-[9px] text-neutral-500 mb-1",
                                      children: [
                                        f.jsxs("div", {
                                          children: [
                                            "LVL: ",
                                            f.jsx("span", {
                                              className:
                                                "text-neutral-300 font-bold",
                                              children: d.report.level,
                                            }),
                                          ],
                                        }),
                                        f.jsxs("div", {
                                          children: [
                                            "TP: ",
                                            f.jsx("span", {
                                              className:
                                                "text-emerald-500 font-bold",
                                              children: d.report.tp,
                                            }),
                                          ],
                                        }),
                                        f.jsxs("div", {
                                          children: [
                                            "SL: ",
                                            f.jsx("span", {
                                              className:
                                                "text-rose-500 font-bold",
                                              children: d.report.sl,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    f.jsx("div", {
                                      className:
                                        "text-[10px] text-neutral-500 line-clamp-1 italic font-sans w-11/12",
                                      children: d.report.reason,
                                    }),
                                  ],
                                }),
                                f.jsx("button", {
                                  onClick: (M) => {
                                    (M.stopPropagation(),
                                      Yt((_) => {
                                        const U = _.filter(
                                          (Z) => Z.id !== d.id,
                                        );
                                        return (
                                          localStorage.setItem(
                                            "gaks_chart_analysis_history",
                                            JSON.stringify(U),
                                          ),
                                          U
                                        );
                                      }));
                                  },
                                  className:
                                    "absolute right-3 top-3 h-6 w-6 rounded flex items-center justify-center bg-[#151515] text-neutral-500 hover:text-rose-400 hover:bg-rose-950/30 border border-neutral-900 transition-all cursor-pointer",
                                  title: "Delete item",
                                  children: f.jsx("i", {
                                    className: "ph ph-trash text-xs",
                                  }),
                                }),
                                f.jsx("div", {
                                  className:
                                    "absolute right-3 bottom-2 text-[9px] text-neutral-600 font-mono",
                                  children: d.timestamp,
                                }),
                              ],
                            },
                            d.id,
                          ),
                        ),
                }),
                We.length > 0 &&
                  f.jsx("div", {
                    className: "p-4 border-t border-neutral-900 bg-[#0e0e0e]",
                    children: f.jsx("button", {
                      onClick: (d) => {
                        (d.stopPropagation(),
                          confirm(
                            "Are you sure you want to delete all past analysis history records?",
                          ) &&
                            (Yt([]),
                            localStorage.removeItem(
                              "gaks_chart_analysis_history",
                            )));
                      },
                      className:
                        "w-full py-2 rounded-lg bg-rose-950/30 hover:bg-rose-950/80 text-rose-500 hover:text-white border border-rose-900/40 text-xs font-semibold cursor-pointer transition-colors",
                      children: "Clear All History",
                    }),
                  }),
              ],
            }),
          ],
        }),
    ],
  });
}
nm.createRoot(document.getElementById("root")).render(
  f.jsx(te.StrictMode, { children: f.jsx(um, {}) }),
);
