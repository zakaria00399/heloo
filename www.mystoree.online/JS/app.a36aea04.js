(function (e) {
  function n(n) {
    for (
      var c, o, u = n[0], i = n[1], l = n[2], s = 0, f = [];
      s < u.length;
      s++
    )
      (o = u[s]),
        Object.prototype.hasOwnProperty.call(r, o) && r[o] && f.push(r[o][0]),
        (r[o] = 0);
    for (c in i) Object.prototype.hasOwnProperty.call(i, c) && (e[c] = i[c]);
    h && h(n);
    while (f.length) f.shift()();
    return a.push.apply(a, l || []), t();
  }
  function t() {
    for (var e, n = 0; n < a.length; n++) {
      for (var t = a[n], c = !0, o = 1; o < t.length; o++) {
        var u = t[o];
        0 !== r[u] && (c = !1);
      }
      c && (a.splice(n--, 1), (e = i((i.s = t[0]))));
    }
    return e;
  }
  var c = {},
    o = {
      app: 0
    },
    r = {
      app: 0
    },
    a = [];
  function u(e) {
    return (
      i.p +
      "js/" +
      ({}[e] || e) +
      "." +
      {
        "chunk-0131d8b1": "99be526d",
        "chunk-0a63b2ae": "f7a5c11c",
        "chunk-261a13da": "96ac5255",
        "chunk-274b6494": "9f3cc5c6",
        "chunk-2d0bcde6": "50bcddcd",
        "chunk-2d0cf710": "8e148171",
        "chunk-2d237543": "210ecc83",
        "chunk-32765068": "eaf4d360",
        "chunk-50827d2a": "a5160376",
        "chunk-5cb6767a": "c286a0d0",
        "chunk-f2b8da64": "9b66a3e0",
        "chunk-5833ea8b": "3b73388e",
        "chunk-5e1b3c9b": "e190f058",
        "chunk-ae86cb2e": "6982d680",
        "chunk-b5847e66": "67cd74cf",
        "chunk-d3576466": "47a26cef",
        "chunk-338eb1af": "d9d2c998",
        "chunk-4087a6a2": "d61b4325",
        "chunk-412c09ae": "cbe178ee",
        "chunk-43e11276": "e5c0f7fd",
        "chunk-46233e2e": "f40e795c",
        "chunk-464509b2": "f31935f6",
        "chunk-48ce335a": "fc18de69",
        "chunk-4c5bb440": "cac973e4",
        "chunk-121ca72a": "bf662498",
        "chunk-76ca285f": "0f8873cd",
        "chunk-8ed2b46c": "4bd173a9",
        "chunk-51f03a72": "98e8824f",
        "chunk-5863f2ca": "2ec4336b",
        "chunk-59766cb1": "967cd869",
        "chunk-5c6ecff1": "0f72425b",
        "chunk-607e8b8a": "90b8b073",
        "chunk-638d1d82": "9aaa15fd",
        "chunk-641ba1f8": "59f25cc3",
        "chunk-67ab1034": "61025694",
        "chunk-6a762c9d": "0db61149",
        "chunk-6c97de11": "cb90a53a",
        "chunk-72c84d2c": "5ae62dfd",
        "chunk-73c068cb": "65265ffe",
        "chunk-7769f290": "0316ec29",
        "chunk-94d03f72": "2ad271cd",
        "chunk-ae58fa62": "50c18ec1",
        "chunk-b07e4068": "3f466b9a",
        "chunk-b6319cc2": "b3029113",
        "chunk-bb3f4292": "939bda61",
        "chunk-bc27d656": "b91e124c",
        "chunk-bf1a4b8a": "39274e4b",
        "chunk-c2a90c78": "6892a4ca",
        "chunk-c50746d0": "c28eae17",
        "chunk-d4abc784": "6dbd41fb",
        "chunk-dfa3dee4": "e6e5679e"
      }[e] +
      ".js"
    );
  }
  function i(n) {
    if (c[n]) return c[n].exports;
    var t = (c[n] = {
      i: n,
      l: !1,
      exports: {}
    });
    return e[n].call(t.exports, t, t.exports, i), (t.l = !0), t.exports;
  }
  (i.e = function (e) {
    var n = [],
      t = {
        "chunk-261a13da": 1,
        "chunk-274b6494": 1,
        "chunk-32765068": 1,
        "chunk-50827d2a": 1,
        "chunk-b5847e66": 1,
        "chunk-338eb1af": 1,
        "chunk-4087a6a2": 1,
        "chunk-43e11276": 1,
        "chunk-464509b2": 1,
        "chunk-48ce335a": 1,
        "chunk-121ca72a": 1,
        "chunk-76ca285f": 1,
        "chunk-8ed2b46c": 1,
        "chunk-5863f2ca": 1,
        "chunk-59766cb1": 1,
        "chunk-607e8b8a": 1,
        "chunk-641ba1f8": 1,
        "chunk-94d03f72": 1,
        "chunk-ae58fa62": 1,
        "chunk-b07e4068": 1,
        "chunk-bf1a4b8a": 1,
        "chunk-c2a90c78": 1,
        "chunk-c50746d0": 1,
        "chunk-d4abc784": 1,
        "chunk-dfa3dee4": 1
      };
    o[e]
      ? n.push(o[e])
      : 0 !== o[e] &&
        t[e] &&
        n.push(
          (o[e] = new Promise(function (n, t) {
            for (
              var c =
                  "css/" +
                  ({}[e] || e) +
                  "." +
                  {
                    "chunk-0131d8b1": "31d6cfe0",
                    "chunk-0a63b2ae": "31d6cfe0",
                    "chunk-261a13da": "1a14e6ce",
                    "chunk-274b6494": "f11ee7fc",
                    "chunk-2d0bcde6": "31d6cfe0",
                    "chunk-2d0cf710": "31d6cfe0",
                    "chunk-2d237543": "31d6cfe0",
                    "chunk-32765068": "e6417152",
                    "chunk-50827d2a": "8656d02f",
                    "chunk-5cb6767a": "31d6cfe0",
                    "chunk-f2b8da64": "31d6cfe0",
                    "chunk-5833ea8b": "31d6cfe0",
                    "chunk-5e1b3c9b": "31d6cfe0",
                    "chunk-ae86cb2e": "31d6cfe0",
                    "chunk-b5847e66": "b9f61b8e",
                    "chunk-d3576466": "31d6cfe0",
                    "chunk-338eb1af": "a4e1fdb5",
                    "chunk-4087a6a2": "34ec3fd7",
                    "chunk-412c09ae": "31d6cfe0",
                    "chunk-43e11276": "89e7fc27",
                    "chunk-46233e2e": "31d6cfe0",
                    "chunk-464509b2": "21d25a35",
                    "chunk-48ce335a": "2ead0b8b",
                    "chunk-4c5bb440": "31d6cfe0",
                    "chunk-121ca72a": "63aa6416",
                    "chunk-76ca285f": "4bf1f0a0",
                    "chunk-8ed2b46c": "9a30131e",
                    "chunk-51f03a72": "31d6cfe0",
                    "chunk-5863f2ca": "9c750fc5",
                    "chunk-59766cb1": "f8ba7ace",
                    "chunk-5c6ecff1": "31d6cfe0",
                    "chunk-607e8b8a": "b003cda0",
                    "chunk-638d1d82": "31d6cfe0",
                    "chunk-641ba1f8": "6369a8d7",
                    "chunk-67ab1034": "31d6cfe0",
                    "chunk-6a762c9d": "31d6cfe0",
                    "chunk-6c97de11": "31d6cfe0",
                    "chunk-72c84d2c": "31d6cfe0",
                    "chunk-73c068cb": "31d6cfe0",
                    "chunk-7769f290": "31d6cfe0",
                    "chunk-94d03f72": "65eb56a3",
                    "chunk-ae58fa62": "089fee67",
                    "chunk-b07e4068": "ba6f6f94",
                    "chunk-b6319cc2": "31d6cfe0",
                    "chunk-bb3f4292": "31d6cfe0",
                    "chunk-bc27d656": "31d6cfe0",
                    "chunk-bf1a4b8a": "223628bb",
                    "chunk-c2a90c78": "57ae3252",
                    "chunk-c50746d0": "e0883573",
                    "chunk-d4abc784": "353af7bc",
                    "chunk-dfa3dee4": "2509abdc"
                  }[e] +
                  ".css",
                r = i.p + c,
                a = document.getElementsByTagName("link"),
                u = 0;
              u < a.length;
              u++
            ) {
              var l = a[u],
                s = l.getAttribute("data-href") || l.getAttribute("href");
              if ("stylesheet" === l.rel && (s === c || s === r)) return n();
            }
            var f = document.getElementsByTagName("style");
            for (u = 0; u < f.length; u++) {
              (l = f[u]), (s = l.getAttribute("data-href"));
              if (s === c || s === r) return n();
            }
            var h = document.createElement("link");
            (h.rel = "stylesheet"),
              (h.type = "text/css"),
              (h.onload = n),
              (h.onerror = function (n) {
                var c = (n && n.target && n.target.src) || r,
                  a = new Error(
                    "Loading CSS chunk " + e + " failed.\n(" + c + ")"
                  );
                (a.code = "CSS_CHUNK_LOAD_FAILED"),
                  (a.request = c),
                  delete o[e],
                  h.parentNode.removeChild(h),
                  t(a);
              }),
              (h.href = r);
            var d = document.getElementsByTagName("head")[0];
            d.appendChild(h);
          }).then(function () {
            o[e] = 0;
          }))
        );
    var c = r[e];
    if (0 !== c)
      if (c) n.push(c[2]);
      else {
        var a = new Promise(function (n, t) {
          c = r[e] = [n, t];
        });
        n.push((c[2] = a));
        var l,
          s = document.createElement("script");
        (s.charset = "utf-8"),
          (s.timeout = 120),
          i.nc && s.setAttribute("nonce", i.nc),
          (s.src = u(e));
        var f = new Error();
        l = function (n) {
          (s.onerror = s.onload = null), clearTimeout(h);
          var t = r[e];
          if (0 !== t) {
            if (t) {
              var c = n && ("load" === n.type ? "missing" : n.type),
                o = n && n.target && n.target.src;
              (f.message =
                "Loading chunk " + e + " failed.\n(" + c + ": " + o + ")"),
                (f.name = "ChunkLoadError"),
                (f.type = c),
                (f.request = o),
                t[1](f);
            }
            r[e] = void 0;
          }
        };
        var h = setTimeout(function () {
          l({
            type: "timeout",
            target: s
          });
        }, 12e4);
        (s.onerror = s.onload = l), document.head.appendChild(s);
      }
    return Promise.all(n);
  }),
    (i.m = e),
    (i.c = c),
    (i.d = function (e, n, t) {
      i.o(e, n) ||
        Object.defineProperty(e, n, {
          enumerable: !0,
          get: t
        });
    }),
    (i.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
    }),
    (i.t = function (e, n) {
      if ((1 & n && (e = i(e)), 8 & n)) return e;
      if (4 & n && "object" === typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (i.r(t),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          value: e
        }),
        2 & n && "string" != typeof e)
      )
        for (var c in e)
          i.d(
            t,
            c,
            function (n) {
              return e[n];
            }.bind(null, c)
          );
      return t;
    }),
    (i.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return i.d(n, "a", n), n;
    }),
    (i.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (i.p = "/"),
    (i.oe = function (e) {
      throw (console.error(e), e);
    });
  var l = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    s = l.push.bind(l);
  (l.push = n), (l = l.slice());
  for (var f = 0; f < l.length; f++) n(l[f]);
  var h = s;
  a.push([0, "chunk-vendors"]), t();
})({
  0: function (e, n, t) {
    e.exports = t("56d7");
  },
  3786: function (e, n, t) {
    "use strict";
    t.d(n, "a", function () {
      return p;
    });
    var c = t("a417");
    function o(e) {
      return (
        (o =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        o(e)
      );
    }
    function r(e, n) {
      if (!(e instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    function a(e, n) {
      for (var t = 0; t < n.length; t++) {
        var c = n[t];
        (c.enumerable = c.enumerable || !1),
          (c.configurable = !0),
          "value" in c && (c.writable = !0),
          Object.defineProperty(e, c.key, c);
      }
    }
    function u(e, n, t) {
      return (
        n && a(e.prototype, n),
        t && a(e, t),
        Object.defineProperty(e, "prototype", {
          writable: !1
        }),
        e
      );
    }
    function i(e, n) {
      if ("function" !== typeof n && null !== n)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (e.prototype = Object.create(n && n.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      })),
        Object.defineProperty(e, "prototype", {
          writable: !1
        }),
        n && l(e, n);
    }
    function l(e, n) {
      return (
        (l =
          Object.setPrototypeOf ||
          function (e, n) {
            return (e.__proto__ = n), e;
          }),
        l(e, n)
      );
    }
    function s(e) {
      var n = d();
      return function () {
        var t,
          c = b(e);
        if (n) {
          var o = b(this).constructor;
          t = Reflect.construct(c, arguments, o);
        } else t = c.apply(this, arguments);
        return f(this, t);
      };
    }
    function f(e, n) {
      if (n && ("object" === o(n) || "function" === typeof n)) return n;
      if (void 0 !== n)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return h(e);
    }
    function h(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function d() {
      if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" === typeof Proxy) return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          ),
          !0
        );
      } catch (e) {
        return !1;
      }
    }
    function b(e) {
      return (
        (b = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
        b(e)
      );
    }
    var p = (function (e) {
      i(t, e);
      var n = s(t);
      function t() {
        var e;
        return (
          r(this, t),
          (e = n.call(this)),
          (e.grant_type = "password"),
          (e.client_id = "2"),
          (e.client_secret = "I70L3vzyFu9wybo0HDfjFYCgtu1TQXDYai3rNSON"),
          e
        );
      }
      return (
        u(t, [
          {
            key: "token",
            value: function (e, n) {
              console.log("auth - token"), (this.route = "/api/auth");
              var t = {
                  grant_type: this.grant_type,
                  client_id: this.client_id,
                  client_secret: this.client_secret,
                  username: e,
                  password: n
                },
                c = this;
              return new Promise(function (e, n) {
                console.log("auth - token - promise"),
                  console.log(c.Axios),
                  c
                    .Axios({
                      url: c.route,
                      data: t,
                      method: "POST"
                    })
                    .then(function (n) {
                      console.log("auth - token - promise - success"),
                        e(n.data.access_token);
                    })
                    .catch(function (e) {
                      console.log("auth - token - promise - error"),
                        console.log(e),
                        n(!1);
                    });
              });
            }
          },
          {
            key: "profile",
            value: function () {
              this.route = "/api/user/profile";
              var e = this;
              return new Promise(function (n, t) {
                e.Axios({
                  url: e.route,
                  method: "GET"
                })
                  .then(function (e) {
                    n(e.data);
                  })
                  .catch(function (e) {
                    t(!1);
                  });
              });
            }
          },
          {
            key: "createPassword",
            value: function (e, n) {
              this.route = "/api/auth";
              var t = {
                  code: e,
                  password: n
                },
                c = this;
              return new Promise(function (e, n) {
                c.Axios({
                  url: c.route + "/create-password",
                  data: t,
                  method: "POST"
                })
                  .then(function (n) {
                    e(n.data);
                  })
                  .catch(function (e) {
                    console.log("resp error: "),
                      console.log(e.response.data),
                      n(c.parseErrorResponses(e.response.data));
                  });
              });
            }
          },
          {
            key: "requestPasswordResetLink",
            value: function (e) {
              this.route = "/api/auth";
              var n = {
                  email: e
                },
                t = this;
              return new Promise(function (e, c) {
                t.Axios({
                  url: t.route + "/request-password-reset-link",
                  data: n,
                  method: "POST"
                })
                  .then(function (n) {
                    e(n.data);
                  })
                  .catch(function (e) {
                    c(!1);
                  });
              });
            }
          },
          {
            key: "resetPassword",
            value: function (e, n) {
              this.route = "/api/auth";
              var t = {
                  code: e,
                  password: n
                },
                c = this;
              return new Promise(function (e, n) {
                c.Axios({
                  url: c.route + "/reset-password",
                  data: t,
                  method: "POST"
                })
                  .then(function (n) {
                    e(n.data);
                  })
                  .catch(function (e) {
                    console.log("resp error: "),
                      console.log(e.response.data),
                      n(c.parseErrorResponses(e.response.data));
                  });
              });
            }
          }
        ]),
        t
      );
    })(c["a"]);
  },
  "56d7": function (e, n, t) {
    "use strict";
    t.r(n);
    var c = t("a026"),
      o = t("2f62"),
      r = t("3786");
    c["a"].use(o["a"]);
    var a = new o["a"].Store({
        state: {
          status: "",
          loading: !1,
          alert: {},
          notify: "",
          token: localStorage.getItem("token") || "",
          user: JSON.parse(localStorage.getItem("user")) || "",
          location: JSON.parse(localStorage.getItem("user"))
            ? JSON.parse(localStorage.getItem("user")).location
            : {}
        },
        mutations: {
          auth_request: function (e) {
            e.status = "loading";
          },
          auth_success: function (e, n) {
            console.log("payload:"),
              console.log(n),
              (e.status = "success"),
              (e.token = n.token),
              (e.user = n.user),
              (e.location = n.user.location);
          },
          auth_error: function (e) {
            e.status = "error";
          },
          logout: function (e) {
            ({});
          },
          setLoading: function (e, n) {
            e.loading = n;
          },
          setAlert: function (e, n) {
            e.alert = n;
          },
          setLocation: function () {
            state.location = location;
          }
        },
        actions: {
          loading: function (e) {
            var n = e.commit;
            n("setLoading", !0);
          },
          stopLoading: function (e) {
            var n = e.commit;
            n("setLoading", !1);
          },
          alert: function (e, n) {
            var t = e.commit;
            t("setAlert", n);
          },
          clearAlert: function (e) {
            var n = e.commit;
            n("setAlert", {});
          },
          login: function (e, n) {
            var t = e.commit,
              c = new r["a"]();
            return new Promise(function (e, o) {
              t("auth_request"),
                console.log("store - auth"),
                c
                  .token(n.email, n.password)
                  .then(function (n) {
                    console.log("store - auth - token - then"),
                      localStorage.setItem("token", n),
                      c
                        .profile()
                        .then(function (c) {
                          console.log("store - auth - token - then"),
                            localStorage.setItem("user", JSON.stringify(c)),
                            t("auth_success", {
                              token: n,
                              user: c
                            }),
                            e(n);
                        })
                        .catch(function (e) {
                          console.log("store - auth - profile - catch"),
                            console.log(e),
                            t("auth_error", e),
                            localStorage.removeItem("token"),
                            localStorage.removeItem("user"),
                            o(e);
                        });
                  })
                  .catch(function (e) {
                    console.log("store - auth - token - catch"),
                      t("auth_error", e),
                      o(e);
                  });
            });
          },
          logout: function (e) {
            var n = e.commit;
            return new Promise(function (e, t) {
              n("logout"),
                localStorage.removeItem("token"),
                localStorage.removeItem("user"),
                localStorage.removeItem("location"),
                e();
            });
          }
        },
        getters: {
          isLoggedIn: function (e) {
            return !!e.token;
          },
          isAdmin: function (e) {
            return "admin" === e.user.type;
          },
          isLocationElite: function (e) {
            return "location_elite" === e.user.type;
          },
          isLocationAdmin: function (e) {
            return "location_admin" === e.user.type;
          },
          isLocationRegular: function (e) {
            return "location_regular" === e.user.type;
          },
          authStatus: function (e) {
            return e.status;
          },
          user: function (e) {
            return e.user;
          },
          location: function (e) {
            return e.location;
          },
          alert: function (e) {
            return state.alert;
          },
          loading: function (e) {
            return state.loading;
          }
        }
      }),
      u = function () {
        var e = this,
          n = e.$createElement,
          t = e._self._c || n;
        return t("router-view");
      },
      i = [],
      l = {
        name: "App"
      },
      s = l,
      f = (t("5c0b"), t("2877")),
      h = Object(f["a"])(s, u, i, !1, null, null, null),
      d = h.exports,
      b = t("8c4f"),
      p = function () {
        return t.e("chunk-d4abc784").then(t.bind(null, "f593"));
      },
      m = function () {
        return t.e("chunk-261a13da").then(t.bind(null, "0039"));
      },
      k = function () {
        return t.e("chunk-338eb1af").then(t.bind(null, "3ee6"));
      },
      v = function () {
        return t.e("chunk-c2a90c78").then(t.bind(null, "0cfa"));
      },
      g = function () {
        return t.e("chunk-c50746d0").then(t.bind(null, "1a7c"));
      },
      y = function () {
        return t.e("chunk-607e8b8a").then(t.bind(null, "1fbc"));
      },
      w = function () {
        return t.e("chunk-bf1a4b8a").then(t.bind(null, "7136"));
      },
      P = function () {
        return t.e("chunk-48ce335a").then(t.bind(null, "6ba7"));
      },
      C = function () {
        return t.e("chunk-464509b2").then(t.bind(null, "e5b7"));
      },
      S = function () {
        return t.e("chunk-dfa3dee4").then(t.bind(null, "5326"));
      },
      O = function () {
        return t.e("chunk-ae58fa62").then(t.bind(null, "fa67"));
      },
      _ = function () {
        return t.e("chunk-b07e4068").then(t.bind(null, "0bff"));
      },
      A = function () {
        return t.e("chunk-94d03f72").then(t.bind(null, "6b58"));
      },
      j = function () {
        return Promise.all([t.e("chunk-50827d2a"), t.e("chunk-8ed2b46c")]).then(
          t.bind(null, "02e1")
        );
      },
      E = function () {
        return t.e("chunk-412c09ae").then(t.bind(null, "ad30"));
      },
      L = function () {
        return Promise.all([
          t.e("chunk-2d237543"),
          t.e("chunk-50827d2a"),
          t.e("chunk-f2b8da64")
        ]).then(t.bind(null, "a0e6"));
      },
      x = function () {
        return Promise.all([
          t.e("chunk-2d237543"),
          t.e("chunk-50827d2a"),
          t.e("chunk-5cb6767a")
        ]).then(t.bind(null, "b512"));
      },
      B = function () {
        return t.e("chunk-72c84d2c").then(t.bind(null, "e1f5"));
      },
      D = function () {
        return t.e("chunk-6c97de11").then(t.bind(null, "a258"));
      },
      T = function () {
        return t.e("chunk-b6319cc2").then(t.bind(null, "0794"));
      },
      I = function () {
        return t.e("chunk-274b6494").then(t.bind(null, "d7b4"));
      },
      M = function () {
        return Promise.all([t.e("chunk-50827d2a"), t.e("chunk-76ca285f")]).then(
          t.bind(null, "3ebe3")
        );
      },
      R = function () {
        return Promise.all([t.e("chunk-50827d2a"), t.e("chunk-121ca72a")]).then(
          t.bind(null, "2e40")
        );
      },
      N = function () {
        return t.e("chunk-67ab1034").then(t.bind(null, "fadd"));
      },
      F = function () {
        return t.e("chunk-43e11276").then(t.bind(null, "020c"));
      },
      q = function () {
        return t.e("chunk-638d1d82").then(t.bind(null, "7beb"));
      },
      U = function () {
        return t.e("chunk-bb3f4292").then(t.bind(null, "bc40"));
      },
      $ = function () {
        return t.e("chunk-73c068cb").then(t.bind(null, "b4b2"));
      },
      J = function () {
        return t.e("chunk-59766cb1").then(t.bind(null, "8c1b"));
      },
      G = function () {
        return t.e("chunk-4c5bb440").then(t.bind(null, "e9d3"));
      },
      H = function () {
        return t.e("chunk-6a762c9d").then(t.bind(null, "be30"));
      },
      Y = function () {
        return t.e("chunk-641ba1f8").then(t.bind(null, "9536"));
      },
      z = function () {
        return t.e("chunk-0131d8b1").then(t.bind(null, "3de9"));
      },
      V = function () {
        return Promise.all([t.e("chunk-2d237543"), t.e("chunk-d3576466")]).then(
          t.bind(null, "d987")
        );
      },
      X = function () {
        return Promise.all([t.e("chunk-2d237543"), t.e("chunk-ae86cb2e")]).then(
          t.bind(null, "bac4")
        );
      },
      K = function () {
        return t.e("chunk-7769f290").then(t.bind(null, "722b"));
      },
      Q = function () {
        return t.e("chunk-5863f2ca").then(t.bind(null, "0f37"));
      },
      Z = function () {
        return t.e("chunk-4087a6a2").then(t.bind(null, "d3eb"));
      },
      W = function () {
        return t.e("chunk-0a63b2ae").then(t.bind(null, "dc02"));
      },
      ee = function () {
        return t.e("chunk-5c6ecff1").then(t.bind(null, "7622"));
      },
      ne = function () {
        return t.e("chunk-bc27d656").then(t.bind(null, "4cd8"));
      },
      te = function () {
        return t.e("chunk-51f03a72").then(t.bind(null, "2d22"));
      },
      ce = function () {
        return Promise.all([t.e("chunk-2d237543"), t.e("chunk-5833ea8b")]).then(
          t.bind(null, "ebf7")
        );
      },
      oe = function () {
        return Promise.all([t.e("chunk-2d237543"), t.e("chunk-32765068")]).then(
          t.bind(null, "7a59")
        );
      },
      re = function () {
        return t.e("chunk-46233e2e").then(t.bind(null, "9755"));
      },
      ae = function () {
        return Promise.all([t.e("chunk-2d237543"), t.e("chunk-5e1b3c9b")]).then(
          t.bind(null, "e369")
        );
      },
      ue = function () {
        return Promise.all([t.e("chunk-2d237543"), t.e("chunk-b5847e66")]).then(
          t.bind(null, "c90f")
        );
      },
      ie = function () {
        return t.e("chunk-2d0bcde6").then(t.bind(null, "2a23"));
      },
      le = function () {
        return t.e("chunk-2d0cf710").then(t.bind(null, "6473"));
      };
    c["a"].use(b["a"]);
    var se = new b["a"]({
      mode: "history",
      linkActiveClass: "active",
      scrollBehavior: function () {
        return {
          y: 0
        };
      },
      routes: fe()
    });
    function fe() {
      return [
        {
          path: "*",
          name: "not-found",
          component: ie
        },
        {
          path: "/",
          redirect: "/error-pages/404",
          name: "FrontPage",
          component: k,
          children: [
            {
              path: "",
              name: "Home",
              component: v
            },
            {
              path: "cases",
              name: "Cases",
              component: g
            },
            {
              path: "cases/:id",
              name: "CaseDetail",
              component: y
            },
            {
              path: "articles",
              name: "Articles",
              component: w
            },
            {
              path: "articles/:id",
              name: "ArticleDetail",
              component: P
            },
            {
              path: "contact",
              name: "Contact",
              component: C
            }
          ]
        },
        {
          path: "/auth",
          redirect: "/error-pages/404",
          name: "Auth",
          component: m,
          children: [
            {
              path: "login",
              name: "Login",
              component: S
            },
            {
              path: "forgot-password",
              name: "Forgot Password",
              component: O
            },
            {
              path: "reset-password/:code",
              name: "Reset Password",
              component: _
            },
            {
              path: "create-password/:code",
              name: "Create Password",
              component: A
            }
          ]
        },
        {
          path: "/manager",
          redirect: "/dashboard",
          name: "Dashboard",
          component: p,
          meta: {
            requiresAuth: !0
          },
          children: [
            {
              path: "dashboard/admin",
              name: "Dashboard",
              component: j
            },
            {
              path: "locations",
              name: "Locations",
              component: {
                render: function (e) {
                  return e("router-view");
                }
              },
              children: [
                {
                  path: "",
                  name: "Overview",
                  component: E
                },
                {
                  path: "create",
                  name: "Create a Location",
                  component: L
                },
                {
                  path: ":id",
                  name: "Details of a Location",
                  component: x
                }
              ]
            },
            {
              path: "customers",
              name: "Customers",
              component: {
                render: function (e) {
                  return e("router-view");
                }
              },
              children: [
                {
                  path: "",
                  name: "Overview",
                  component: B
                },
                {
                  path: "create",
                  name: "Create a Customer",
                  component: D
                },
                {
                  path: ":id",
                  name: "Details of a Customer",
                  component: T
                }
              ]
            },
            {
              path: "users",
              name: "Users",
              component: {
                render: function (e) {
                  return e("router-view");
                }
              },
              children: [
                {
                  path: "",
                  name: "Overview",
                  component: W
                },
                {
                  path: "create",
                  name: "Create a User",
                  component: ee
                },
                {
                  path: ":id",
                  name: "Details of a User",
                  component: ne
                }
              ]
            },
            {
              path: "bookings",
              name: "Bookings",
              component: {
                render: function (e) {
                  return e("router-view");
                }
              },
              children: [
                {
                  path: "",
                  name: "Overview",
                  component: I
                },
                {
                  path: "create",
                  name: "Create a Booking",
                  component: M
                },
                {
                  path: ":id",
                  name: "Details of a Booking",
                  component: R
                }
              ]
            },
            {
              path: "products",
              name: "Products",
              component: {
                render: function (e) {
                  return e("router-view");
                }
              },
              children: [
                {
                  path: "",
                  name: "Overview",
                  component: N
                },
                {
                  path: "create",
                  name: "Create a Product",
                  component: F
                },
                {
                  path: ":id",
                  name: "Details of a Product",
                  component: q
                }
              ]
            },
            {
              path: "parts",
              name: "Parts",
              component: {
                render: function (e) {
                  return e("router-view");
                }
              },
              children: [
                {
                  path: "",
                  name: "Overview",
                  component: U
                },
                {
                  path: "create",
                  name: "Create a Part",
                  component: $
                },
                {
                  path: ":id",
                  name: "Details of a Part",
                  component: J
                }
              ]
            },
            {
              path: "part-categories",
              name: "Part Categories",
              component: {
                render: function (e) {
                  return e("router-view");
                }
              },
              children: [
                {
                  path: "",
                  name: "Overview",
                  component: G
                },
                {
                  path: "create",
                  name: "Create a Part Category",
                  component: H
                },
                {
                  path: ":id",
                  name: "Details of a Part Category",
                  component: Y
                }
              ]
            },
            {
              path: "defects",
              name: "Defects",
              component: {
                render: function (e) {
                  return e("router-view");
                }
              },
              children: [
                {
                  path: "",
                  name: "Overview",
                  component: z
                },
                {
                  path: "create",
                  name: "Create a Part",
                  component: V
                },
                {
                  path: ":id",
                  name: "Details of a Defect",
                  component: X
                }
              ]
            },
            {
              path: "invoices",
              name: "Invoices",
              component: {
                render: function (e) {
                  return e("router-view");
                }
              },
              children: [
                {
                  path: "",
                  name: "Overview",
                  component: K
                },
                {
                  path: "create",
                  name: "Create an Invoice",
                  component: Q
                },
                {
                  path: ":id",
                  name: "Details of an Invoice",
                  component: Z
                }
              ]
            },
            {
              path: "projects",
              name: "Projects",
              component: {
                render: function (e) {
                  return e("router-view");
                }
              },
              children: [
                {
                  path: "",
                  name: "Overview",
                  component: te
                },
                {
                  path: "create",
                  name: "Create a Project",
                  component: ce
                },
                {
                  path: ":id",
                  name: "Details of a Project",
                  component: oe
                }
              ]
            },
            {
              path: "articles",
              name: "Articles",
              component: {
                render: function (e) {
                  return e("router-view");
                }
              },
              children: [
                {
                  path: "",
                  name: "Overview",
                  component: re
                },
                {
                  path: "create",
                  name: "Create a Project",
                  component: ae
                },
                {
                  path: ":id",
                  name: "Details of a Project",
                  component: ue
                }
              ]
            }
          ]
        },
        {
          path: "/pages",
          redirect: "/error-pages/404",
          name: "Pages",
          component: {
            render: function (e) {
              return e("router-view");
            }
          },
          children: [
            {
              path: "404",
              name: "Page404",
              component: ie
            },
            {
              path: "500",
              name: "Page500",
              component: le
            }
          ]
        }
      ];
    }
    se.beforeEach(function (e, n, t) {
      if (
        (console.log("test"),
        e.matched.some(function (e) {
          return e.meta.requiresAuth;
        }))
      )
        return (
          a.getters.isLoggedIn || t("/auth/login"),
          console.log("is logged in"),
          t()
        );
      t();
    });
    var he,
      de = se,
      be = t("cf2b"),
      pe = t.n(be),
      me = t("df0c"),
      ke = t("9f0e"),
      ve = t("2961"),
      ge = t("b356"),
      ye = t("94d7"),
      we = t("4d7c"),
      Pe = t("2206"),
      Ce = t("f27f"),
      Se = t("2afe"),
      Oe = t("90d2"),
      _e = t("e545"),
      Ae = t("114a"),
      je = t("b3de"),
      Ee = t("b73b"),
      Le = t("91a0"),
      xe = t("454f"),
      Be = t("04bd"),
      De = t("eece"),
      Te = t("8a79"),
      Ie = t("57a5"),
      Me = t("f5d2"),
      Re = t("07df"),
      Ne = t("068c"),
      Fe = t("b297"),
      qe = t("0298"),
      Ue = t("4025"),
      $e = t("dbcf"),
      Je = t("1615"),
      Ge = t("66fb"),
      He = t("3e6d"),
      Ye = t("57c6"),
      ze = t("32dc"),
      Ve = t("9b72"),
      Xe = t("6b74"),
      Ke = t("b75e"),
      Qe = t("7c4d"),
      Ze = t("0091"),
      We = t("2a3c"),
      en = t("8ae9"),
      nn = t("b1e2"),
      tn = t("8113"),
      cn = t("ac04"),
      on = t("7d3a"),
      rn = t("091a"),
      an = t("f510"),
      un = t("6f22"),
      ln = t("bb8b"),
      sn = t("95c4"),
      fn = t("4b7f"),
      hn = t("8aed"),
      dn = t("cfe6"),
      bn = t("cbac"),
      pn = t("7fe6"),
      mn = t("8eb7"),
      kn = t("6061"),
      vn = t("2462"),
      gn = t("dddb"),
      yn = t("74d6"),
      wn = t("066b"),
      Pn = t("16b0"),
      Cn = t("024d"),
      Sn = t("8955"),
      On = t("26e0"),
      _n = t("88bc"),
      An = t("5402"),
      jn = t("c208"),
      En = t("6e7a"),
      Ln = t("4c99"),
      xn = t("1dba"),
      Bn = t("1ab4"),
      Dn = t("bdbc"),
      Tn = t("7837"),
      In = t("0bc3"),
      Mn = t("8fde"),
      Rn = t("6490"),
      Nn = t("40db"),
      Fn = t("dc0c"),
      qn = t("ff4a"),
      Un = t("13af"),
      $n = t("10bf"),
      Jn = t("360e"),
      Gn = t("06ab"),
      Hn = t("99bf"),
      Yn = t("cb3a"),
      zn = t("05a5"),
      Vn = t("5cc6");
    function Xn(e, n, t) {
      return (
        n in e
          ? Object.defineProperty(e, n, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[n] = t),
        e
      );
    }
    var Kn = Object.assign(
        {},
        ((he = {
          cilArrowRight: He["a"],
          cilArrowCircleBottom: Ye["a"],
          cilBan: ze["a"],
          cilBasket: Ve["a"],
          cilBell: Xe["a"],
          cilBellExclamation: Ke["cilBellExclamation"],
          cilCalculator: Qe["a"],
          cilCalendar: Ze["a"],
          cilClock: We["a"],
          cilCloudDownload: en["a"],
          cilChartPie: nn["a"],
          cilCheck: tn["a"],
          cilChevronBottom: cn["a"],
          cilChevronTop: on["a"],
          cilCheckCircle: rn["a"],
          cilCommentSquare: an["a"],
          cilCursor: un["a"],
          cilDrop: ln["a"],
          cilDollar: sn["a"],
          cilEnvelopeClosed: fn["a"],
          cilEnvelopeOpen: hn["a"],
          cilEuro: dn["a"],
          cilGlobeAlt: bn["a"],
          cilGrid: pn["a"],
          cilFile: mn["a"],
          cilHamburgerMenu: Ke["cilHamburgerMenu"],
          cilJustifyCenter: kn["a"],
          cilLaptop: vn["a"],
          cilLayers: gn["a"],
          cilLightbulb: yn["a"],
          cilList: wn["a"],
          cilLocationPin: Pn["a"],
          cilLockLocked: Cn["a"],
          cilMagnifyingGlass: Sn["a"],
          cilMap: On["a"],
          cilMenu: _n["a"],
          cilMoney: An["a"],
          cilMoon: jn["a"],
          cilOptions: En["a"],
          cilPaperPlane: Ln["a"],
          cilPencil: xn["a"],
          cilPin: Bn["a"],
          cilPlaylistAdd: Dn["a"],
          cilPlus: Tn["a"],
          cilPeople: In["a"],
          cilPuzzle: Mn["a"],
          cilScreenSmartphone: Rn["a"],
          cilSettings: Nn["a"],
          cilShieldAlt: Fn["a"]
        }),
        Xn(he, "cilScreenSmartphone", Rn["a"]),
        Xn(he, "cilSpeech", qn["a"]),
        Xn(he, "cilSpeedometer", Un["a"]),
        Xn(he, "cilStar", $n["a"]),
        Xn(he, "cilTask", Jn["a"]),
        Xn(he, "cilTrash", Gn["a"]),
        Xn(he, "cilUser", Hn["a"]),
        Xn(he, "cilUserFemale", Yn["a"]),
        Xn(he, "cilUserFollow", zn["a"]),
        Xn(he, "cilXCircle", Vn["a"]),
        he),
        {
          cifUs: Fe["a"],
          cifBr: qe["a"],
          cifIn: Ue["a"],
          cifFr: $e["a"],
          cifEs: Je["a"],
          cifPl: Ge["a"]
        },
        {
          cibFacebook: me["a"],
          cibTwitter: ke["a"],
          cibLinkedin: ve["a"],
          cibFlickr: ge["a"],
          cibTumblr: ye["a"],
          cibXing: we["a"],
          cibGithub: Pe["a"],
          cibStackOverflow: Ce["a"],
          cibYoutube: Se["a"],
          cibDribbble: Oe["a"],
          cibInstagram: _e["a"],
          cibPinterest: Ae["a"],
          cibVk: je["a"],
          cibYahoo: Ee["a"],
          cibBehance: Le["a"],
          cibReddit: xe["a"],
          cibVimeo: Be["a"],
          cibCcMastercard: De["a"],
          cibCcVisa: Te["a"],
          cibStripe: Ie["a"],
          cibPaypal: Me["a"],
          cibGooglePay: Re["a"],
          cibCcAmex: Ne["a"]
        }
      ),
      Qn = t("1315"),
      Zn = function () {
        var e = this,
          n = e.$createElement,
          t = e._self._c || n;
        return e.visible
          ? t(
              "div",
              {
                staticClass: "confirm-wrapper"
              },
              [
                t("h2", [e._v(e._s(e.title))]),
                t("p", [e._v(e._s(e.text))]),
                t(
                  "div",
                  {
                    staticClass: "confirm-buttons"
                  },
                  [
                    t(
                      "button",
                      {
                        staticClass: "confirm-button cofirm-button-cancel",
                        on: {
                          click: e.hide
                        }
                      },
                      [e._v("Cancel")]
                    ),
                    t(
                      "button",
                      {
                        staticClass: "confirm-button confirm-button-confirm",
                        on: {
                          click: e.confirm
                        }
                      },
                      [e._v("Confirm")]
                    )
                  ]
                )
              ]
            )
          : e._e();
      },
      Wn = [],
      et = {
        data: function () {
          return {
            visible: !1,
            title: "",
            text: "",
            onConfirm: {}
          };
        },
        methods: {
          hide: function () {
            this.visible = !1;
          },
          confirm: function () {
            "function" === typeof this.onConfirm
              ? (this.onConfirm(), this.hide())
              : this.hide();
          },
          show: function (e) {
            (this.visible = !0),
              (this.title = e.title),
              (this.text = e.text),
              (this.onConfirm = e.onConfirm);
          }
        },
        beforeMount: function () {
          var e = this;
          rt.EventBus.$on("show", function (n) {
            e.show(n);
          });
        }
      },
      nt = et,
      tt = (t("b4d3"), Object(f["a"])(nt, Zn, Wn, !1, null, null, null)),
      ct = tt.exports,
      ot = {
        install: function (e, n) {
          (this.EventBus = new e()),
            e.component("ConfirmModal", ct),
            (e.prototype.$confirm = {
              show: function (e) {
                console.log("Confirm:show"), ot.EventBus.$emit("show", e);
              }
            });
        }
      },
      rt = ot,
      at = function () {
        var e = this,
          n = e.$createElement,
          t = e._self._c || n;
        return e.visible
          ? t(
              "div",
              {
                staticClass: "alert-wrapper"
              },
              [
                t(
                  "CAlert",
                  {
                    staticClass: "alert-dismissible",
                    attrs: {
                      color: e.type,
                      show: e.visible
                    },
                    on: {
                      "update:show": function (n) {
                        e.visible = n;
                      }
                    }
                  },
                  [
                    t("span", {
                      domProps: {
                        innerHTML: e._s(e.message)
                      }
                    }),
                    t(
                      "CButton",
                      {
                        staticClass: "position-absolute",
                        staticStyle: {
                          right: "10px",
                          top: "50%",
                          transform: "translateY(-50%)"
                        },
                        attrs: {
                          color: "secondary"
                        },
                        on: {
                          click: function (n) {
                            e.visible = !1;
                          }
                        }
                      },
                      [e._v(" Close ")]
                    )
                  ],
                  1
                )
              ],
              1
            )
          : e._e();
      },
      ut = [],
      it = {
        data: function () {
          return {
            visible: !1,
            type: "",
            message: ""
          };
        },
        methods: {
          hide: function () {
            this.visible = !1;
          },
          show: function (e) {
            (this.visible = !0),
              (this.type = e.type),
              (this.message = e.message);
          }
        },
        beforeMount: function () {
          var e = this;
          dt.EventBus.$on("show", function (n) {
            e.show(n);
          });
        }
      },
      lt = it,
      st = Object(f["a"])(lt, at, ut, !1, null, null, null),
      ft = st.exports,
      ht = {
        install: function (e, n) {
          (this.EventBus = new e()),
            e.component("AlertBox", ft),
            (e.prototype.$alert = {
              show: function (e) {
                console.log("Alert:show"), ht.EventBus.$emit("show", e);
              }
            });
        }
      },
      dt = ht,
      bt = t("3730"),
      pt = t.n(bt),
      mt = t("4a7a"),
      kt = t.n(mt);
    t("6dfc");
    c["a"].component("v-select", kt.a),
      c["a"].use(pt.a),
      c["a"].use(rt),
      c["a"].use(dt),
      c["a"].use(pe.a),
      c["a"].use(o["a"]),
      (c["a"].config.performance = !0),
      (Qn["Settings"].defaultLocale = "nl"),
      (Qn["Settings"].defaultZoneName = "UTC"),
      new c["a"]({
        el: "#app",
        router: de,
        store: a,
        icons: Kn,
        template: "<App/>",
        components: {
          App: d
        }
      });
  },
  "5c0b": function (e, n, t) {
    "use strict";
    t("9c0c");
  },
  "9c0c": function (e, n, t) {},
  a417: function (e, n, t) {
    "use strict";
    var c = t("bc3a"),
      o = t.n(c);
    function r(e) {
      return (
        (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        r(e)
      );
    }
    function a(e, n) {
      if (!(e instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    function u(e, n) {
      for (var t = 0; t < n.length; t++) {
        var c = n[t];
        (c.enumerable = c.enumerable || !1),
          (c.configurable = !0),
          "value" in c && (c.writable = !0),
          Object.defineProperty(e, c.key, c);
      }
    }
    function i(e, n, t) {
      return (
        n && u(e.prototype, n),
        t && u(e, t),
        Object.defineProperty(e, "prototype", {
          writable: !1
        }),
        e
      );
    }
    var l = (function () {
      function e() {
        a(this, e);
        var n = this;
        (this.route = ""),
          (this.Axios = o.a.create({
            baseURL: "https://api.ontherolly.com"
          })),
          (this.Axios.defaults.headers.common.Accept = "application/json"),
          this.Axios.interceptors.request.use(function (e) {
            var n = localStorage.getItem("token");
            return (e.headers.Authorization = n ? "Bearer " + n : ""), e;
          }),
          this.Axios.interceptors.response.use(
            function (e) {
              return e;
            },
            function (e) {
              if (500 === e.response.status) {
                var t = {
                  response: {
                    data: {
                      errors: [
                        "There was an unknown error. Try again or contact the system administrator."
                      ]
                    }
                  }
                };
                return Promise.reject(t);
              }
              if (
                403 !== e.response.status &&
                (401 !== e.response.status || "/api/auth" == n.route)
              )
                return Promise.reject(e);
              window.location.href = "/auth/login";
            }
          );
      }
      return (
        i(e, [
          {
            key: "parseErrorResponses",
            value: function (e) {
              console.log("parseErrorResponses:"),
                console.log(e),
                console.log(r(e)),
                console.log(e instanceof Array);
              var n = "";
              if ("string" === typeof e) console.log("wot1"), (n = e);
              else if (e instanceof Array) {
                console.log("wot2");
                for (var t = 0; t < e.length; t++) n += "- " + e[t] + "<br>";
              } else if (Object.keys(e).length > 0)
                if ("message" in e) n = e.message;
                else
                  for (var c in e)
                    for (t = 0; t < e[c].length; t++)
                      n += "- " + e[c][t] + "<br>";
              else n = "undefined error occurred";
              return n;
            }
          }
        ]),
        e
      );
    })();
    n["a"] = l;
  },
  b4d3: function (e, n, t) {
    "use strict";
    t("f3a7");
  },
  f3a7: function (e, n, t) {}
});
//# sourceMappingURL=app.a36aea04.js.map
