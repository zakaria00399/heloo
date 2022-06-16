(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-c2a90c78"], {
  "05cc": function(t, e, o) {},
  "0cfa": function(t, e, o) {
      "use strict";
      o.r(e);
      var n = function() {
          var t = this
            , e = t.$createElement
            , o = t._self._c || e;
          return o("div", [t._m(0), o("section", {
              staticClass: "section section-1"
          }, [o("CContainer", {}, [o("CRow", [o("CCol", {
              attrs: {
                  sm: "6"
              }
          }, [o("h2", {
              staticClass: "section-title"
          }, [t._v("how we roll.")]), o("p", {
              staticClass: "text-muted"
          }, [t._v(" Out of the idea that every beautiful hotel deserves a pretty bicycle, Simon and Luuk have started on the rolly. Why would you design and style everything about an hotel and its online appearance and then rent out a meaningless tourist bicycle to explore the city. Change was obviously needed. Since Luuk has always been busy with bicycles from age 13 and with designing next to his technical education, this could in fact be changed. Every hotel a different identity, every hotel an own designed bicycle! ")])]), o("CCol", {
              staticClass: "mt-20 how-we-roll-image",
              attrs: {
                  sm: "6"
              }
          }, [o("CImg", {
              staticClass: "mb-2 rounded-img",
              attrs: {
                  src: "/img/frontpage/first-block-image.png",
                  block: ""
              }
          })], 1)], 1), o("CRow", {
              staticClass: "mt-40"
          }, [o("CCol", {
              staticClass: "mt-20 text-center",
              attrs: {
                  sm: "12"
              }
          }, [o("CImg", {
              staticClass: "mb-2 hide-mobile",
              attrs: {
                  src: "/img/frontpage/desktop-steps-min.jpg"
              }
          }), o("CImg", {
              staticClass: "mb-2 hide-desktop",
              attrs: {
                  src: "/img/frontpage/mobile-steps-min.jpg"
              }
          })], 1)], 1)], 1)], 1), o("section", {
              staticClass: "section grey-bg"
          }, [o("CContainer", [o("CRow", [o("CCol", {
              attrs: {
                  sm: "4"
              }
          }, [o("h2", {
              staticClass: "section-title"
          }, [t._v("our best projects.")]), o("p", {
              staticClass: "text-muted"
          }, [t._v(" Find out how we've have helped many other hotels. ")]), o("CButton", {
              staticClass: "custom-btn outline",
              attrs: {
                  type: "submit"
              },
              on: {
                  click: function(e) {
                      return t.$router.push({
                          path: "/cases"
                      })
                  }
              }
          }, [t._v(" All Projects ")])], 1), o("CCol", {
              attrs: {
                  sm: "8"
              }
          }, [o("CRow", t._l(t.projects, (function(e) {
              return o("CCol", {
                  staticClass: "box-col-1",
                  attrs: {
                      sm: "6"
                  }
              }, [o("CRow", [o("CCol", {
                  attrs: {
                      sm: "12"
                  }
              }, [o("div", {
                  staticClass: "box text-center"
              }, [o("div", {
                  staticClass: "box-icon"
              }, [o("i", {
                  staticClass: "mdi mdi-collage"
              })]), e.logo ? o("CImg", {
                  staticClass: "mb-2 case-img",
                  attrs: {
                      src: t.storageURL + e.logo,
                      width: "400",
                      block: ""
                  }
              }) : o("CImg", {
                  staticClass: "mb-2 case-img",
                  attrs: {
                      src: "/img/frontpage/image-placeholder.jpg",
                      width: "400",
                      block: ""
                  }
              }), o("div", {
                  staticClass: "box-content"
              }, [o("h5", {}, [t._v(t._s(e.name))]), o("div", {
                  staticClass: "project-location"
              }, [o("CIcon", {
                  attrs: {
                      name: "cil-map"
                  }
              }), o("span", [t._v(" " + t._s(e.location))])], 1), o("CButton", {
                  staticClass: "custom-btn outline",
                  attrs: {
                      type: "button"
                  },
                  on: {
                      click: function(o) {
                          return t.$router.push({
                              path: "/cases/" + e.id
                          })
                      }
                  }
              }, [t._v(" Read More ")])], 1)], 1)])], 1)], 1)
          }
          )), 1)], 1)], 1)], 1)], 1), o("section", {
              staticClass: "section"
          }, [o("CContainer", {}, [o("CRow", [o("CCol", {
              staticClass: "text-center block-header",
              attrs: {
                  sm: "12"
              }
          }, [o("h2", {
              staticClass: "section-title"
          }, [t._v("our latest news.")]), o("p", {
              staticClass: "text-muted"
          }, [t._v("Read up on our latest activities.")]), o("CButton", {
              staticClass: "custom-btn outline",
              attrs: {
                  type: "button"
              },
              on: {
                  click: function(e) {
                      return t.$router.push({
                          path: "/articles"
                      })
                  }
              }
          }, [t._v(" All Articles ")]), o("br")], 1), t._l(t.articles, (function(e) {
              return o("CCol", {
                  staticClass: "project-block mt-40",
                  attrs: {
                      sm: "4"
                  }
              }, [e.image ? o("CImg", {
                  staticClass: "mb-2 article-img",
                  attrs: {
                      src: t.storageURL + e.image,
                      width: "400",
                      block: ""
                  }
              }) : o("CImg", {
                  staticClass: "mb-2 article-img",
                  attrs: {
                      src: "/img/frontpage/image-placeholder.jpg",
                      width: "400",
                      block: ""
                  }
              }), o("h3", [t._v(t._s(e.title))]), o("p", [t._v(t._s(e.excerpt))]), o("CLink", {
                  staticClass: "custom-link",
                  attrs: {
                      to: "/articles/" + e.id
                  }
              }, [t._v(" Read More "), o("CIcon", {
                  attrs: {
                      name: "cil-arrow-right"
                  }
              })], 1)], 1)
          }
          ))], 2)], 1)], 1), o("section", {
              staticClass: "section grey-bg"
          }, [o("CContainer", {}, [o("CRow", [o("CCol", {
              staticClass: "mt-20 who-we-are-image",
              attrs: {
                  sm: "6"
              }
          }, [o("CImg", {
              staticClass: "mb-2 rounded-img",
              attrs: {
                  src: "/img/frontpage/luuk-simon.png",
                  block: ""
              }
          })], 1), o("CCol", {
              attrs: {
                  sm: "6 mt-20"
              }
          }, [o("h2", {
              staticClass: "section-title"
          }, [t._v("who we are.")]), o("p", {
              staticClass: "text-muted"
          }, [t._v(" On the rolly is an Amsterdam based design company specialized in rental bicycles for exclusive hotels. The company was started in 2016 by youth friends Simon de Vries and Luuk de Leeuw, whose friendship already exists since highschool. ")]), o("p", {
              staticClass: "text-muted"
          }, [t._v(" Apart from on the rolly, Simon is an entrepreneur in the health industry and is also active as physio- and manual therapist. During summer, Simon can be found on the water as he often goes kitesurfing or on the road with his bicycle. ")]), o("p", {
              staticClass: "text-muted"
          }, [t._v(" Luuk works at a successful Dutch bicycle company as product manager, after having its own hipster-hotspot in Amsterdam, called “The Bicycle Cantine”, where bicycles were repaired but you could also have an haircut or a real strong coffee. Luuk also likes to climb mountains on one of his own bicycles. ")])])], 1)], 1)], 1), o("section", {
              staticClass: "section"
          }, [o("ContactForm")], 1)])
      }
        , r = [function() {
          var t = this
            , e = t.$createElement
            , o = t._self._c || e;
          return o("div", {
              staticClass: "jumbotron jumbotron-fluid"
          }, [o("div", {
              staticClass: "container text-center"
          }, [o("h1", {
              staticClass: "hero-header"
          }, [t._v("On The Rolly")]), o("p", {
              staticClass: "hero-header-sub"
          }, [t._v(" extraordinary bikes for extraordinary hotels ")])])])
      }
      ]
        , a = o("24d2")
        , s = o("2423")
        , c = o("b260")
        , i = {
          name: "Home",
          components: {
              ContactForm: c["a"]
          },
          data: function() {
              return {
                  projectAPI: new a["a"],
                  articleAPI: new s["a"],
                  projects: [],
                  articles: [],
                  storageURL: "https://api.ontherolly.com/storage/"
              }
          },
          created: function() {
              var t = this;
              console.log(this.$route.path),
              this.projectAPI.all().then((function(e) {
                  var o = 2;
                  e.length < o && (o = e.length);
                  for (var n = 0; n < o; n++)
                      t.projects.push(e[n])
              }
              )).catch((function(t) {
                  console.log(t)
              }
              )),
              this.articleAPI.all().then((function(e) {
                  var o = 3;
                  e.length < o && (o = e.length);
                  for (var n = 0; n < o; n++)
                      t.articles.push(e[n])
              }
              )).catch((function(t) {
                  console.log(t)
              }
              ))
          },
          methods: {}
      }
        , u = i
        , l = (o("b70a"),
      o("2877"))
        , f = Object(l["a"])(u, n, r, !1, null, "3f977c71", null);
      e["default"] = f.exports
  },
  2423: function(t, e, o) {
      "use strict";
      o.d(e, "a", (function() {
          return m
      }
      ));
      var n = o("a417");
      function r(t) {
          return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
              return typeof t
          }
          : function(t) {
              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }
          ,
          r(t)
      }
      function a(t, e) {
          if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function")
      }
      function s(t, e) {
          for (var o = 0; o < e.length; o++) {
              var n = e[o];
              n.enumerable = n.enumerable || !1,
              n.configurable = !0,
              "value"in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n)
          }
      }
      function c(t, e, o) {
          return e && s(t.prototype, e),
          o && s(t, o),
          Object.defineProperty(t, "prototype", {
              writable: !1
          }),
          t
      }
      function i(t, e) {
          if ("function" !== typeof e && null !== e)
              throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
              constructor: {
                  value: t,
                  writable: !0,
                  configurable: !0
              }
          }),
          Object.defineProperty(t, "prototype", {
              writable: !1
          }),
          e && u(t, e)
      }
      function u(t, e) {
          return u = Object.setPrototypeOf || function(t, e) {
              return t.__proto__ = e,
              t
          }
          ,
          u(t, e)
      }
      function l(t) {
          var e = d();
          return function() {
              var o, n = h(t);
              if (e) {
                  var r = h(this).constructor;
                  o = Reflect.construct(n, arguments, r)
              } else
                  o = n.apply(this, arguments);
              return f(this, o)
          }
      }
      function f(t, e) {
          if (e && ("object" === r(e) || "function" === typeof e))
              return e;
          if (void 0 !== e)
              throw new TypeError("Derived constructors may only return object or undefined");
          return p(t)
      }
      function p(t) {
          if (void 0 === t)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t
      }
      function d() {
          if ("undefined" === typeof Reflect || !Reflect.construct)
              return !1;
          if (Reflect.construct.sham)
              return !1;
          if ("function" === typeof Proxy)
              return !0;
          try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
              ))),
              !0
          } catch (t) {
              return !1
          }
      }
      function h(t) {
          return h = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
              return t.__proto__ || Object.getPrototypeOf(t)
          }
          ,
          h(t)
      }
      var m = function(t) {
          i(o, t);
          var e = l(o);
          function o() {
              var t;
              return a(this, o),
              t = e.call(this),
              t.route = "/api/article",
              t
          }
          return c(o, [{
              key: "all",
              value: function() {
                  var t = this;
                  return new Promise((function(e, o) {
                      t.Axios({
                          url: t.route,
                          method: "GET"
                      }).then((function(t) {
                          e(t.data)
                      }
                      )).catch((function(e) {
                          o(t.parseErrorResponses(error.response.data))
                      }
                      ))
                  }
                  ))
              }
          }, {
              key: "detail",
              value: function(t) {
                  var e = this;
                  return new Promise((function(o, n) {
                      e.Axios({
                          url: e.route + "/".concat(t),
                          method: "GET"
                      }).then((function(t) {
                          o(t.data)
                      }
                      )).catch((function(t) {
                          n(e.parseErrorResponses(error.response.data))
                      }
                      ))
                  }
                  ))
              }
          }, {
              key: "create",
              value: function(t, e) {
                  console.log("article creation");
                  var o = this
                    , n = new FormData;
                  return n.append("id", t.id),
                  n.append("title", t.title),
                  n.append("excerpt", t.excerpt),
                  n.append("content", t.content),
                  n.append("image", e),
                  n.append("_method", "POST"),
                  new Promise((function(t, e) {
                      o.Axios({
                          url: o.route,
                          data: n,
                          method: "POST",
                          headers: {
                              "Content-Type": "multipart/form-data"
                          }
                      }).then((function(e) {
                          console.log(e.data),
                          t(e.data)
                      }
                      )).catch((function(t) {
                          e(o.parseErrorResponses(t.response.data))
                      }
                      ))
                  }
                  ))
              }
          }, {
              key: "update",
              value: function(t, e) {
                  console.log("article update"),
                  console.log(e);
                  var o = this
                    , n = new FormData;
                  return n.append("id", t.id),
                  n.append("title", t.title),
                  n.append("excerpt", t.excerpt),
                  n.append("content", t.content),
                  n.append("image", t.image),
                  n.append("newImage", e),
                  n.append("_method", "PUT"),
                  new Promise((function(e, r) {
                      o.Axios({
                          url: o.route + "/".concat(t.id),
                          data: n,
                          method: "POST",
                          headers: {
                              "Content-Type": "multipart/form-data"
                          }
                      }).then((function(t) {
                          console.log(t.data),
                          e(t.data)
                      }
                      )).catch((function(t) {
                          r(o.parseErrorResponses(t.response.data))
                      }
                      ))
                  }
                  ))
              }
          }, {
              key: "delete",
              value: function(t) {
                  var e = this;
                  return new Promise((function(o, n) {
                      e.Axios({
                          url: e.route + "/".concat(t),
                          method: "DELETE"
                      }).then((function(t) {
                          o()
                      }
                      )).catch((function(t) {
                          console.log(t.error),
                          n(!1)
                      }
                      ))
                  }
                  ))
              }
          }]),
          o
      }(n["a"])
  },
  "24d2": function(t, e, o) {
      "use strict";
      o.d(e, "a", (function() {
          return m
      }
      ));
      var n = o("a417");
      function r(t) {
          return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
              return typeof t
          }
          : function(t) {
              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }
          ,
          r(t)
      }
      function a(t, e) {
          if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function")
      }
      function s(t, e) {
          for (var o = 0; o < e.length; o++) {
              var n = e[o];
              n.enumerable = n.enumerable || !1,
              n.configurable = !0,
              "value"in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n)
          }
      }
      function c(t, e, o) {
          return e && s(t.prototype, e),
          o && s(t, o),
          Object.defineProperty(t, "prototype", {
              writable: !1
          }),
          t
      }
      function i(t, e) {
          if ("function" !== typeof e && null !== e)
              throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
              constructor: {
                  value: t,
                  writable: !0,
                  configurable: !0
              }
          }),
          Object.defineProperty(t, "prototype", {
              writable: !1
          }),
          e && u(t, e)
      }
      function u(t, e) {
          return u = Object.setPrototypeOf || function(t, e) {
              return t.__proto__ = e,
              t
          }
          ,
          u(t, e)
      }
      function l(t) {
          var e = d();
          return function() {
              var o, n = h(t);
              if (e) {
                  var r = h(this).constructor;
                  o = Reflect.construct(n, arguments, r)
              } else
                  o = n.apply(this, arguments);
              return f(this, o)
          }
      }
      function f(t, e) {
          if (e && ("object" === r(e) || "function" === typeof e))
              return e;
          if (void 0 !== e)
              throw new TypeError("Derived constructors may only return object or undefined");
          return p(t)
      }
      function p(t) {
          if (void 0 === t)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t
      }
      function d() {
          if ("undefined" === typeof Reflect || !Reflect.construct)
              return !1;
          if (Reflect.construct.sham)
              return !1;
          if ("function" === typeof Proxy)
              return !0;
          try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
              ))),
              !0
          } catch (t) {
              return !1
          }
      }
      function h(t) {
          return h = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
              return t.__proto__ || Object.getPrototypeOf(t)
          }
          ,
          h(t)
      }
      var m = function(t) {
          i(o, t);
          var e = l(o);
          function o() {
              var t;
              return a(this, o),
              t = e.call(this),
              t.route = "/api/project",
              t
          }
          return c(o, [{
              key: "all",
              value: function() {
                  var t = this;
                  return new Promise((function(e, o) {
                      t.Axios({
                          url: t.route,
                          method: "GET"
                      }).then((function(t) {
                          e(t.data)
                      }
                      )).catch((function(e) {
                          o(t.parseErrorResponses(error.response.data))
                      }
                      ))
                  }
                  ))
              }
          }, {
              key: "detail",
              value: function(t) {
                  var e = this;
                  return new Promise((function(o, n) {
                      e.Axios({
                          url: e.route + "/".concat(t),
                          method: "GET"
                      }).then((function(t) {
                          o(t.data)
                      }
                      )).catch((function(t) {
                          n(e.parseErrorResponses(error.response.data))
                      }
                      ))
                  }
                  ))
              }
          }, {
              key: "create",
              value: function(t, e, o) {
                  console.log("project creation");
                  var n = this
                    , r = new FormData;
                  r.append("id", t.id),
                  r.append("name", t.name),
                  r.append("location", t.location),
                  r.append("description", t.description),
                  r.append("logo", e);
                  for (var a = 0; a < o.length; a++)
                      r.append("images[" + a + "]", o[a]);
                  return new Promise((function(t, e) {
                      n.Axios({
                          url: n.route,
                          data: r,
                          method: "POST",
                          headers: {
                              "Content-Type": "multipart/form-data"
                          }
                      }).then((function(e) {
                          console.log(e.data),
                          t(e.data)
                      }
                      )).catch((function(t) {
                          e(n.parseErrorResponses(t.response.data))
                      }
                      ))
                  }
                  ))
              }
          }, {
              key: "update",
              value: function(t, e, o) {
                  console.log("update project"),
                  console.log(t),
                  console.log(o);
                  var n = this
                    , r = new FormData;
                  r.append("id", t.id),
                  r.append("name", t.name),
                  r.append("location", t.location),
                  r.append("description", t.description),
                  r.append("logo", t.logo),
                  r.append("newLogo", e);
                  for (var a = 0; a < t.deleteImages.length; a++)
                      r.append("deleteImages[" + a + "]", t.deleteImages[a]);
                  for (var s = 0; s < o.length; s++)
                      r.append("images[" + s + "]", o[s]);
                  return r.append("_method", "PUT"),
                  new Promise((function(e, o) {
                      n.Axios({
                          url: n.route + "/".concat(t.id),
                          data: r,
                          method: "POST",
                          headers: {
                              "Content-Type": "multipart/form-data"
                          }
                      }).then((function(t) {
                          console.log(t.data),
                          e(t.data)
                      }
                      )).catch((function(t) {
                          o(n.parseErrorResponses(t.response.data))
                      }
                      ))
                  }
                  ))
              }
          }, {
              key: "delete",
              value: function(t) {
                  var e = this;
                  return new Promise((function(o, n) {
                      e.Axios({
                          url: e.route + "/".concat(t),
                          method: "DELETE"
                      }).then((function(t) {
                          o()
                      }
                      )).catch((function(t) {
                          console.log(t.error),
                          n(!1)
                      }
                      ))
                  }
                  ))
              }
          }]),
          o
      }(n["a"])
  },
  b260: function(t, e, o) {
      "use strict";
      var n = function() {
          var t = this
            , e = t.$createElement
            , o = t._self._c || e;
          return o("div", [o("CContainer", {}, [o("CRow", [o("CCol", {
              staticClass: "text-center block-header",
              attrs: {
                  sm: "12"
              }
          }, [o("h2", [t._v("contact us.")]), o("p", {
              staticClass: "text-muted"
          }, [t._v(" If you have any questions for us or want to discuss the possibilities for your hotel, feel free to contact us! ")])]), o("CCol", {
              staticClass: "mt-20 text-muted contact-details text-center contact-info",
              attrs: {
                  sm: "6"
              }
          }, [o("CIcon", {
              attrs: {
                  size: "custom",
                  name: "cil-envelope-closed"
              }
          }), o("p", [o("a", {
              attrs: {
                  href: "mailto:info@ontherolly.nl"
              }
          }, [t._v("info@ontherolly.nl")])])], 1), o("CCol", {
              staticClass: "mt-20 text-muted contact-details text-center contact-info",
              attrs: {
                  sm: "6"
              }
          }, [o("CIcon", {
              attrs: {
                  size: "custom",
                  name: "cil-screen-smartphone"
              }
          }), o("p", [o("a", {
              attrs: {
                  href: "tel:085 06 06 646"
              }
          }, [t._v("085 06 06 646")])])], 1)], 1)], 1)], 1)
      }
        , r = []
        , a = o("a417");
      function s(t) {
          return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
              return typeof t
          }
          : function(t) {
              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }
          ,
          s(t)
      }
      function c(t, e) {
          if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function")
      }
      function i(t, e) {
          for (var o = 0; o < e.length; o++) {
              var n = e[o];
              n.enumerable = n.enumerable || !1,
              n.configurable = !0,
              "value"in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n)
          }
      }
      function u(t, e, o) {
          return e && i(t.prototype, e),
          o && i(t, o),
          Object.defineProperty(t, "prototype", {
              writable: !1
          }),
          t
      }
      function l(t, e) {
          if ("function" !== typeof e && null !== e)
              throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
              constructor: {
                  value: t,
                  writable: !0,
                  configurable: !0
              }
          }),
          Object.defineProperty(t, "prototype", {
              writable: !1
          }),
          e && f(t, e)
      }
      function f(t, e) {
          return f = Object.setPrototypeOf || function(t, e) {
              return t.__proto__ = e,
              t
          }
          ,
          f(t, e)
      }
      function p(t) {
          var e = m();
          return function() {
              var o, n = y(t);
              if (e) {
                  var r = y(this).constructor;
                  o = Reflect.construct(n, arguments, r)
              } else
                  o = n.apply(this, arguments);
              return d(this, o)
          }
      }
      function d(t, e) {
          if (e && ("object" === s(e) || "function" === typeof e))
              return e;
          if (void 0 !== e)
              throw new TypeError("Derived constructors may only return object or undefined");
          return h(t)
      }
      function h(t) {
          if (void 0 === t)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t
      }
      function m() {
          if ("undefined" === typeof Reflect || !Reflect.construct)
              return !1;
          if (Reflect.construct.sham)
              return !1;
          if ("function" === typeof Proxy)
              return !0;
          try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
              ))),
              !0
          } catch (t) {
              return !1
          }
      }
      function y(t) {
          return y = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
              return t.__proto__ || Object.getPrototypeOf(t)
          }
          ,
          y(t)
      }
      var b = function(t) {
          l(o, t);
          var e = p(o);
          function o() {
              var t;
              return c(this, o),
              t = e.call(this),
              t.route = "/api/contact",
              t
          }
          return u(o, [{
              key: "submit",
              value: function(t) {
                  console.log("submit contact form");
                  var e = this;
                  return new Promise((function(o, n) {
                      e.Axios({
                          url: e.route,
                          data: t,
                          method: "POST"
                      }).then((function(t) {
                          console.log(t.data),
                          o(t.data)
                      }
                      )).catch((function(t) {
                          console.log(t),
                          n(e.parseErrorResponses(t.response.data))
                      }
                      ))
                  }
                  ))
              }
          }]),
          o
      }(a["a"])
        , g = {
          name: "ContactBlock",
          data: function() {
              return {
                  contactAPI: new b,
                  contactForm: {
                      name: "",
                      email: "",
                      message: ""
                  },
                  message: ""
              }
          },
          methods: {
              submitForm: function() {
                  var t = this;
                  this.message = "Sending message...",
                  this.contactAPI.submit(this.contactForm).then((function() {
                      console.log("submitted"),
                      t.message = "Your message has been sent! We will be in touch with you shortly."
                  }
         (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-c2a90c78"], {
    "05cc": function(t, e, o) {},
    "0cfa": function(t, e, o) {
        "use strict";
        o.r(e);
        var n = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", [t._m(0), o("section", {
                staticClass: "section section-1"
            }, [o("CContainer", {}, [o("CRow", [o("CCol", {
                attrs: {
                    sm: "6"
                }
            }, [o("h2", {
                staticClass: "section-title"
            }, [t._v("how we roll.")]), o("p", {
                staticClass: "text-muted"
            }, [t._v(" Out of the idea that every beautiful hotel deserves a pretty bicycle, Simon and Luuk have started on the rolly. Why would you design and style everything about an hotel and its online appearance and then rent out a meaningless tourist bicycle to explore the city. Change was obviously needed. Since Luuk has always been busy with bicycles from age 13 and with designing next to his technical education, this could in fact be changed. Every hotel a different identity, every hotel an own designed bicycle! ")])]), o("CCol", {
                staticClass: "mt-20 how-we-roll-image",
                attrs: {
                    sm: "6"
                }
            }, [o("CImg", {
                staticClass: "mb-2 rounded-img",
                attrs: {
                    src: "/img/frontpage/first-block-image.png",
                    block: ""
                }
            })], 1)], 1), o("CRow", {
                staticClass: "mt-40"
            }, [o("CCol", {
                staticClass: "mt-20 text-center",
                attrs: {
                    sm: "12"
                }
            }, [o("CImg", {
                staticClass: "mb-2 hide-mobile",
                attrs: {
                    src: "/img/frontpage/desktop-steps-min.jpg"
                }
            }), o("CImg", {
                staticClass: "mb-2 hide-desktop",
                attrs: {
                    src: "/img/frontpage/mobile-steps-min.jpg"
                }
            })], 1)], 1)], 1)], 1), o("section", {
                staticClass: "section grey-bg"
            }, [o("CContainer", [o("CRow", [o("CCol", {
                attrs: {
                    sm: "4"
                }
            }, [o("h2", {
                staticClass: "section-title"
            }, [t._v("our best projects.")]), o("p", {
                staticClass: "text-muted"
            }, [t._v(" Find out how we've have helped many other hotels. ")]), o("CButton", {
                staticClass: "custom-btn outline",
                attrs: {
                    type: "submit"
                },
                on: {
                    click: function(e) {
                        return t.$router.push({
                            path: "/cases"
                        })
                    }
                }
            }, [t._v(" All Projects ")])], 1), o("CCol", {
                attrs: {
                    sm: "8"
                }
            }, [o("CRow", t._l(t.projects, (function(e) {
                return o("CCol", {
                    staticClass: "box-col-1",
                    attrs: {
                        sm: "6"
                    }
                }, [o("CRow", [o("CCol", {
                    attrs: {
                        sm: "12"
                    }
                }, [o("div", {
                    staticClass: "box text-center"
                }, [o("div", {
                    staticClass: "box-icon"
                }, [o("i", {
                    staticClass: "mdi mdi-collage"
                })]), e.logo ? o("CImg", {
                    staticClass: "mb-2 case-img",
                    attrs: {
                        src: t.storageURL + e.logo,
                        width: "400",
                        block: ""
                    }
                }) : o("CImg", {
                    staticClass: "mb-2 case-img",
                    attrs: {
                        src: "/img/frontpage/image-placeholder.jpg",
                        width: "400",
                        block: ""
                    }
                }), o("div", {
                    staticClass: "box-content"
                }, [o("h5", {}, [t._v(t._s(e.name))]), o("div", {
                    staticClass: "project-location"
                }, [o("CIcon", {
                    attrs: {
                        name: "cil-map"
                    }
                }), o("span", [t._v(" " + t._s(e.location))])], 1), o("CButton", {
                    staticClass: "custom-btn outline",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: function(o) {
                            return t.$router.push({
                                path: "/cases/" + e.id
                            })
                        }
                    }
                }, [t._v(" Read More ")])], 1)], 1)])], 1)], 1)
            }
            )), 1)], 1)], 1)], 1)], 1), o("section", {
                staticClass: "section"
            }, [o("CContainer", {}, [o("CRow", [o("CCol", {
                staticClass: "text-center block-header",
                attrs: {
                    sm: "12"
                }
            }, [o("h2", {
                staticClass: "section-title"
            }, [t._v("our latest news.")]), o("p", {
                staticClass: "text-muted"
            }, [t._v("Read up on our latest activities.")]), o("CButton", {
                staticClass: "custom-btn outline",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(e) {
                        return t.$router.push({
                            path: "/articles"
                        })
                    }
                }
            }, [t._v(" All Articles ")]), o("br")], 1), t._l(t.articles, (function(e) {
                return o("CCol", {
                    staticClass: "project-block mt-40",
                    attrs: {
                        sm: "4"
                    }
                }, [e.image ? o("CImg", {
                    staticClass: "mb-2 article-img",
                    attrs: {
                        src: t.storageURL + e.image,
                        width: "400",
                        block: ""
                    }
                }) : o("CImg", {
                    staticClass: "mb-2 article-img",
                    attrs: {
                        src: "/img/frontpage/image-placeholder.jpg",
                        width: "400",
                        block: ""
                    }
                }), o("h3", [t._v(t._s(e.title))]), o("p", [t._v(t._s(e.excerpt))]), o("CLink", {
                    staticClass: "custom-link",
                    attrs: {
                        to: "/articles/" + e.id
                    }
                }, [t._v(" Read More "), o("CIcon", {
                    attrs: {
                        name: "cil-arrow-right"
                    }
                })], 1)], 1)
            }
            ))], 2)], 1)], 1), o("section", {
                staticClass: "section grey-bg"
            }, [o("CContainer", {}, [o("CRow", [o("CCol", {
                staticClass: "mt-20 who-we-are-image",
                attrs: {
                    sm: "6"
                }
            }, [o("CImg", {
                staticClass: "mb-2 rounded-img",
                attrs: {
                    src: "/img/frontpage/luuk-simon.png",
                    block: ""
                }
            })], 1), o("CCol", {
                attrs: {
                    sm: "6 mt-20"
                }
            }, [o("h2", {
                staticClass: "section-title"
            }, [t._v("who we are.")]), o("p", {
                staticClass: "text-muted"
            }, [t._v(" On the rolly is an Amsterdam based design company specialized in rental bicycles for exclusive hotels. The company was started in 2016 by youth friends Simon de Vries and Luuk de Leeuw, whose friendship already exists since highschool. ")]), o("p", {
                staticClass: "text-muted"
            }, [t._v(" Apart from on the rolly, Simon is an entrepreneur in the health industry and is also active as physio- and manual therapist. During summer, Simon can be found on the water as he often goes kitesurfing or on the road with his bicycle. ")]), o("p", {
                staticClass: "text-muted"
            }, [t._v(" Luuk works at a successful Dutch bicycle company as product manager, after having its own hipster-hotspot in Amsterdam, called “The Bicycle Cantine”, where bicycles were repaired but you could also have an haircut or a real strong coffee. Luuk also likes to climb mountains on one of his own bicycles. ")])])], 1)], 1)], 1), o("section", {
                staticClass: "section"
            }, [o("ContactForm")], 1)])
        }
          , r = [function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "jumbotron jumbotron-fluid"
            }, [o("div", {
                staticClass: "container text-center"
            }, [o("h1", {
                staticClass: "hero-header"
            }, [t._v("On The Rolly")]), o("p", {
                staticClass: "hero-header-sub"
            }, [t._v(" extraordinary bikes for extraordinary hotels ")])])])
        }
        ]
          , a = o("24d2")
          , s = o("2423")
          , c = o("b260")
          , i = {
            name: "Home",
            components: {
                ContactForm: c["a"]
            },
            data: function() {
                return {
                    projectAPI: new a["a"],
                    articleAPI: new s["a"],
                    projects: [],
                    articles: [],
                    storageURL: "https://api.ontherolly.com/storage/"
                }
            },
            created: function() {
                var t = this;
                console.log(this.$route.path),
                this.projectAPI.all().then((function(e) {
                    var o = 2;
                    e.length < o && (o = e.length);
                    for (var n = 0; n < o; n++)
                        t.projects.push(e[n])
                }
                )).catch((function(t) {
                    console.log(t)
                }
                )),
                this.articleAPI.all().then((function(e) {
                    var o = 3;
                    e.length < o && (o = e.length);
                    for (var n = 0; n < o; n++)
                        t.articles.push(e[n])
                }
                )).catch((function(t) {
                    console.log(t)
                }
                ))
            },
            methods: {}
        }
          , u = i
          , l = (o("b70a"),
        o("2877"))
          , f = Object(l["a"])(u, n, r, !1, null, "3f977c71", null);
        e["default"] = f.exports
    },
    2423: function(t, e, o) {
        "use strict";
        o.d(e, "a", (function() {
            return m
        }
        ));
        var n = o("a417");
        function r(t) {
            return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            r(t)
        }
        function a(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function s(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        function c(t, e, o) {
            return e && s(t.prototype, e),
            o && s(t, o),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            t
        }
        function i(t, e) {
            if ("function" !== typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e && u(t, e)
        }
        function u(t, e) {
            return u = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            u(t, e)
        }
        function l(t) {
            var e = d();
            return function() {
                var o, n = h(t);
                if (e) {
                    var r = h(this).constructor;
                    o = Reflect.construct(n, arguments, r)
                } else
                    o = n.apply(this, arguments);
                return f(this, o)
            }
        }
        function f(t, e) {
            if (e && ("object" === r(e) || "function" === typeof e))
                return e;
            if (void 0 !== e)
                throw new TypeError("Derived constructors may only return object or undefined");
            return p(t)
        }
        function p(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
        function d() {
            if ("undefined" === typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" === typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }
        function h(t) {
            return h = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            h(t)
        }
        var m = function(t) {
            i(o, t);
            var e = l(o);
            function o() {
                var t;
                return a(this, o),
                t = e.call(this),
                t.route = "/api/article",
                t
            }
            return c(o, [{
                key: "all",
                value: function() {
                    var t = this;
                    return new Promise((function(e, o) {
                        t.Axios({
                            url: t.route,
                            method: "GET"
                        }).then((function(t) {
                            e(t.data)
                        }
                        )).catch((function(e) {
                            o(t.parseErrorResponses(error.response.data))
                        }
                        ))
                    }
                    ))
                }
            }, {
                key: "detail",
                value: function(t) {
                    var e = this;
                    return new Promise((function(o, n) {
                        e.Axios({
                            url: e.route + "/".concat(t),
                            method: "GET"
                        }).then((function(t) {
                            o(t.data)
                        }
                        )).catch((function(t) {
                            n(e.parseErrorResponses(error.response.data))
                        }
                        ))
                    }
                    ))
                }
            }, {
                key: "create",
                value: function(t, e) {
                    console.log("article creation");
                    var o = this
                      , n = new FormData;
                    return n.append("id", t.id),
                    n.append("title", t.title),
                    n.append("excerpt", t.excerpt),
                    n.append("content", t.content),
                    n.append("image", e),
                    n.append("_method", "POST"),
                    new Promise((function(t, e) {
                        o.Axios({
                            url: o.route,
                            data: n,
                            method: "POST",
                            headers: {
                                "Content-Type": "multipart/form-data"
                            }
                        }).then((function(e) {
                            console.log(e.data),
                            t(e.data)
                        }
                        )).catch((function(t) {
                            e(o.parseErrorResponses(t.response.data))
                        }
                        ))
                    }
                    ))
                }
            }, {
                key: "update",
                value: function(t, e) {
                    console.log("article update"),
                    console.log(e);
                    var o = this
                      , n = new FormData;
                    return n.append("id", t.id),
                    n.append("title", t.title),
                    n.append("excerpt", t.excerpt),
                    n.append("content", t.content),
                    n.append("image", t.image),
                    n.append("newImage", e),
                    n.append("_method", "PUT"),
                    new Promise((function(e, r) {
                        o.Axios({
                            url: o.route + "/".concat(t.id),
                            data: n,
                            method: "POST",
                            headers: {
                                "Content-Type": "multipart/form-data"
                            }
                        }).then((function(t) {
                            console.log(t.data),
                            e(t.data)
                        }
                        )).catch((function(t) {
                            r(o.parseErrorResponses(t.response.data))
                        }
                        ))
                    }
                    ))
                }
            }, {
                key: "delete",
                value: function(t) {
                    var e = this;
                    return new Promise((function(o, n) {
                        e.Axios({
                            url: e.route + "/".concat(t),
                            method: "DELETE"
                        }).then((function(t) {
                            o()
                        }
                        )).catch((function(t) {
                            console.log(t.error),
                            n(!1)
                        }
                        ))
                    }
                    ))
                }
            }]),
            o
        }(n["a"])
    },
    "24d2": function(t, e, o) {
        "use strict";
        o.d(e, "a", (function() {
            return m
        }
        ));
        var n = o("a417");
        function r(t) {
            return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            r(t)
        }
        function a(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function s(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        function c(t, e, o) {
            return e && s(t.prototype, e),
            o && s(t, o),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            t
        }
        function i(t, e) {
            if ("function" !== typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e && u(t, e)
        }
        function u(t, e) {
            return u = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            u(t, e)
        }
        function l(t) {
            var e = d();
            return function() {
                var o, n = h(t);
                if (e) {
                    var r = h(this).constructor;
                    o = Reflect.construct(n, arguments, r)
                } else
                    o = n.apply(this, arguments);
                return f(this, o)
            }
        }
        function f(t, e) {
            if (e && ("object" === r(e) || "function" === typeof e))
                return e;
            if (void 0 !== e)
                throw new TypeError("Derived constructors may only return object or undefined");
            return p(t)
        }
        function p(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
        function d() {
            if ("undefined" === typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" === typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }
        function h(t) {
            return h = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            h(t)
        }
        var m = function(t) {
            i(o, t);
            var e = l(o);
            function o() {
                var t;
                return a(this, o),
                t = e.call(this),
                t.route = "/api/project",
                t
            }
            return c(o, [{
                key: "all",
                value: function() {
                    var t = this;
                    return new Promise((function(e, o) {
                        t.Axios({
                            url: t.route,
                            method: "GET"
                        }).then((function(t) {
                            e(t.data)
                        }
                        )).catch((function(e) {
                            o(t.parseErrorResponses(error.response.data))
                        }
                        ))
                    }
                    ))
                }
            }, {
                key: "detail",
                value: function(t) {
                    var e = this;
                    return new Promise((function(o, n) {
                        e.Axios({
                            url: e.route + "/".concat(t),
                            method: "GET"
                        }).then((function(t) {
                            o(t.data)
                        }
                        )).catch((function(t) {
                            n(e.parseErrorResponses(error.response.data))
                        }
                        ))
                    }
                    ))
                }
            }, {
                key: "create",
                value: function(t, e, o) {
                    console.log("project creation");
                    var n = this
                      , r = new FormData;
                    r.append("id", t.id),
                    r.append("name", t.name),
                    r.append("location", t.location),
                    r.append("description", t.description),
                    r.append("logo", e);
                    for (var a = 0; a < o.length; a++)
                        r.append("images[" + a + "]", o[a]);
                    return new Promise((function(t, e) {
                        n.Axios({
                            url: n.route,
                            data: r,
                            method: "POST",
                            headers: {
                                "Content-Type": "multipart/form-data"
                            }
                        }).then((function(e) {
                            console.log(e.data),
                            t(e.data)
                        }
                        )).catch((function(t) {
                            e(n.parseErrorResponses(t.response.data))
                        }
                        ))
                    }
                    ))
                }
            }, {
                key: "update",
                value: function(t, e, o) {
                    console.log("update project"),
                    console.log(t),
                    console.log(o);
                    var n = this
                      , r = new FormData;
                    r.append("id", t.id),
                    r.append("name", t.name),
                    r.append("location", t.location),
                    r.append("description", t.description),
                    r.append("logo", t.logo),
                    r.append("newLogo", e);
                    for (var a = 0; a < t.deleteImages.length; a++)
                        r.append("deleteImages[" + a + "]", t.deleteImages[a]);
                    for (var s = 0; s < o.length; s++)
                        r.append("images[" + s + "]", o[s]);
                    return r.append("_method", "PUT"),
                    new Promise((function(e, o) {
                        n.Axios({
                            url: n.route + "/".concat(t.id),
                            data: r,
                            method: "POST",
                            headers: {
                                "Content-Type": "multipart/form-data"
                            }
                        }).then((function(t) {
                            console.log(t.data),
                            e(t.data)
                        }
                        )).catch((function(t) {
                            o(n.parseErrorResponses(t.response.data))
                        }
                        ))
                    }
                    ))
                }
            }, {
                key: "delete",
                value: function(t) {
                    var e = this;
                    return new Promise((function(o, n) {
                        e.Axios({
                            url: e.route + "/".concat(t),
                            method: "DELETE"
                        }).then((function(t) {
                            o()
                        }
                        )).catch((function(t) {
                            console.log(t.error),
                            n(!1)
                        }
                        ))
                    }
                    ))
                }
            }]),
            o
        }(n["a"])
    },
    b260: function(t, e, o) {
        "use strict";
        var n = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", [o("CContainer", {}, [o("CRow", [o("CCol", {
                staticClass: "text-center block-header",
                attrs: {
                    sm: "12"
                }
            }, [o("h2", [t._v("contact us.")]), o("p", {
                staticClass: "text-muted"
            }, [t._v(" If you have any questions for us or want to discuss the possibilities for your hotel, feel free to contact us! ")])]), o("CCol", {
                staticClass: "mt-20 text-muted contact-details text-center contact-info",
                attrs: {
                    sm: "6"
                }
            }, [o("CIcon", {
                attrs: {
                    size: "custom",
                    name: "cil-envelope-closed"
                }
            }), o("p", [o("a", {
                attrs: {
                    href: "mailto:info@ontherolly.nl"
                }
            }, [t._v("info@ontherolly.nl")])])], 1), o("CCol", {
                staticClass: "mt-20 text-muted contact-details text-center contact-info",
                attrs: {
                    sm: "6"
                }
            }, [o("CIcon", {
                attrs: {
                    size: "custom",
                    name: "cil-screen-smartphone"
                }
            }), o("p", [o("a", {
                attrs: {
                    href: "tel:085 06 06 646"
                }
            }, [t._v("085 06 06 646")])])], 1)], 1)], 1)], 1)
        }
          , r = []
          , a = o("a417");
        function s(t) {
            return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            s(t)
        }
        function c(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        function u(t, e, o) {
            return e && i(t.prototype, e),
            o && i(t, o),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            t
        }
        function l(t, e) {
            if ("function" !== typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e && f(t, e)
        }
        function f(t, e) {
            return f = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            f(t, e)
        }
        function p(t) {
            var e = m();
            return function() {
                var o, n = y(t);
                if (e) {
                    var r = y(this).constructor;
                    o = Reflect.construct(n, arguments, r)
                } else
                    o = n.apply(this, arguments);
                return d(this, o)
            }
        }
        function d(t, e) {
            if (e && ("object" === s(e) || "function" === typeof e))
                return e;
            if (void 0 !== e)
                throw new TypeError("Derived constructors may only return object or undefined");
            return h(t)
        }
        function h(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
        function m() {
            if ("undefined" === typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" === typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }
        function y(t) {
            return y = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            y(t)
        }
        var b = function(t) {
            l(o, t);
            var e = p(o);
            function o() {
                var t;
                return c(this, o),
                t = e.call(this),
                t.route = "/api/contact",
                t
            }
            return u(o, [{
                key: "submit",
                value: function(t) {
                    console.log("submit contact form");
                    var e = this;
                    return new Promise((function(o, n) {
                        e.Axios({
                            url: e.route,
                            data: t,
                            method: "POST"
                        }).then((function(t) {
                            console.log(t.data),
                            o(t.data)
                        }
                        )).catch((function(t) {
                            console.log(t),
                            n(e.parseErrorResponses(t.response.data))
                        }
                        ))
                    }
                    ))
                }
            }]),
            o
        }(a["a"])
          , g = {
            name: "ContactBlock",
            data: function() {
                return {
                    contactAPI: new b,
                    contactForm: {
                        name: "",
                        email: "",
                        message: ""
                    },
                    message: ""
                }
            },
            methods: {
                submitForm: function() {
                    var t = this;
                    this.message = "Sending message...",
                    this.contactAPI.submit(this.contactForm).then((function() {
                        console.log("submitted"),
                        t.message = "Your message has been sent! We will be in touch with you shortly."
                    }
                    )).catch((function(e) {
                        console.log("submission failed"),
                        t.message = e
                    }
                    ))
                }
            }
        }
          , v = g
          , C = (o("d938"),
        o("2877"))
          , w = Object(C["a"])(v, n, r, !1, null, "1ec62334", null);
        e["a"] = w.exports
    },
    b70a: function(t, e, o) {
        "use strict";
        o("f9c3")
    },
    d938: function(t, e, o) {
        "use strict";
        o("05cc")
    },
    f9c3: function(t, e, o) {}
}]);
//# sourceMappingURL=chunk-c2a90c78.6892a4ca.js.map
         )).catch((function(e) {
                      console.log("submission failed"),
                      t.message = e
                  }
                  ))
              }
          }
      }
        , v = g
        , C = (o("d938"),
      o("2877"))
        , w = Object(C["a"])(v, n, r, !1, null, "1ec62334", null);
      e["a"] = w.exports
  },
  b70a: function(t, e, o) {
      "use strict";
      o("f9c3")
  },
  d938: function(t, e, o) {
      "use strict";
      o("05cc")
  },
  f9c3: function(t, e, o) {}
}]);
//# sourceMappingURL=chunk-c2a90c78.6892a4ca.js.map
