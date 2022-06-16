(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-338eb1af"],
  {
    "2e06": function (t, a, e) {},
    "358d": function (t, a, e) {},
    "3ee6": function (t, a, e) {
      "use strict";
      e.r(a);
      var n = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e(
            "div",
            {
              staticClass: "c-app"
            },
            [
              e("Menu"),
              e(
                "div",
                {
                  staticClass: "c-body",
                  attrs: {
                    id: "body"
                  }
                },
                [
                  e(
                    "main",
                    {
                      staticClass: "c-main"
                    },
                    [
                      e(
                        "CContainer",
                        {
                          attrs: {
                            fluid: ""
                          }
                        },
                        [
                          e(
                            "transition",
                            {
                              attrs: {
                                name: "fade"
                              }
                            },
                            [e("router-view")],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ]
              )
            ],
            1
          );
        },
        s = [],
        r = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e(
            "CNavbar",
            {
              attrs: {
                expandable: "md",
                color: "white"
              }
            },
            [
              e(
                "CContainer",
                {
                  staticClass: "menu-container"
                },
                [
                  e(
                    "CToggler",
                    {
                      attrs: {
                        "in-navbar": ""
                      },
                      on: {
                        click: function (a) {
                          t.collapsed = !t.collapsed;
                        }
                      }
                    },
                    [
                      e("CIcon", {
                        attrs: {
                          name: "cil-menu"
                        }
                      })
                    ],
                    1
                  ),
                  e(
                    "CNavbarBrand",
                    {
                      attrs: {
                        href: "/"
                      }
                    },
                    [
                      e("img", {
                        attrs: {
                          height: "75",
                          src: "/img/brand/on-the-rolly-logo.png"
                        }
                      })
                    ]
                  ),
                  e(
                    "CCollapse",
                    {
                      attrs: {
                        show: t.collapsed,
                        navbar: ""
                      }
                    },
                    [
                      e(
                        "CNavbarNav",
                        {
                          staticClass: "ml-auto"
                        },
                        [
                          e(
                            "CNavItem",
                            [
                              e(
                                "CLink",
                                {
                                  attrs: {
                                    active: "Home" == t.$route.name,
                                    to: "/"
                                  }
                                },
                                [t._v(" Home ")]
                              )
                            ],
                            1
                          ),
                          e(
                            "CNavItem",
                            [
                              e(
                                "CLink",
                                {
                                  attrs: {
                                    active: "Contact" == t.$route.name,
                                    to: "/contact"
                                  }
                                },
                                [t._v(" Contact ")]
                              )
                            ],
                            1
                          ),
                          e(
                            "CNavItem",
                            [
                              e(
                                "CLink",
                                {
                                  attrs: {
                                    to: "/auth/login"
                                  }
                                },
                                [t._v(" Login ")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          );
        },
        o = [],
        i = {
          name: "Menu",
          data: function () {
            return {
              collapsed: !1
            };
          }
        },
        c = i,
        l = (e("afd6d"), e("2877")),
        u = Object(l["a"])(c, r, o, !1, null, "104231ff", null),
        d = u.exports,
        f = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e(
            "CFooter",
            {
              attrs: {
                fixed: !1
              }
            },
            [
              e(
                "div",
                {
                  staticClass: "text-center"
                },
                [
                  e(
                    "span",
                    {
                      staticClass: "ml-1"
                    },
                    [t._v("Development & Hosting By ")]
                  ),
                  e(
                    "a",
                    {
                      staticClass: "custom-link",
                      attrs: {
                        href: "https://kersversdigital.nl",
                        target: "_blank"
                      }
                    },
                    [t._v("Kersvers Digital.")]
                  )
                ]
              )
            ]
          );
        },
        C = [],
        m = {
          name: "Footer"
        },
        v = m,
        b = (e("58b4"), Object(l["a"])(v, f, C, !1, null, "a88db9a4", null)),
        p = b.exports,
        h = {
          name: "TheContainer",
          components: {
            Menu: d,
            Footer: p
          },
          watch: {},
          data: function () {
            return {};
          },
          created: function () {},
          methods: {}
        },
        g = h,
        _ = (e("855f"), Object(l["a"])(g, n, s, !1, null, "422055d6", null));
      a["default"] = _.exports;
    },
    "58b4": function (t, a, e) {
      "use strict";
      e("2e06");
    },
    "60bf9": function (t, a, e) {},
    "855f": function (t, a, e) {
      "use strict";
      e("358d");
    },
    afd6d: function (t, a, e) {
      "use strict";
      e("60bf9");
    }
  }
]);
//# sourceMappingURL=chunk-338eb1af.d9d2c998.js.map
