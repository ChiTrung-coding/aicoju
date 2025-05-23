/*! For license information please see main.bundle.js.LICENSE.txt */
!(function (e, t) {
    "object" == typeof exports && "object" == typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? (exports["h5p-standalone"] = t()) : (e.H5PStandalone = t());
})(self, function () {
    return (() => {
        var e = {
                757: (e, t, n) => {
                    e.exports = n(666);
                },
                666: (e) => {
                    var t = (function (e) {
                        "use strict";
                        var t,
                            n = Object.prototype,
                            r = n.hasOwnProperty,
                            i = "function" == typeof Symbol ? Symbol : {},
                            o = i.iterator || "@@iterator",
                            a = i.asyncIterator || "@@asyncIterator",
                            s = i.toStringTag || "@@toStringTag";
                        function c(e, t, n) {
                            return Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }), e[t];
                        }
                        try {
                            c({}, "");
                        } catch (e) {
                            c = function (e, t, n) {
                                return (e[t] = n);
                            };
                        }
                        function l(e, t, n, r) {
                            var i = t && t.prototype instanceof v ? t : v,
                                o = Object.create(i.prototype),
                                a = new D(r || []);
                            return (
                                (o._invoke = (function (e, t, n) {
                                    var r = d;
                                    return function (i, o) {
                                        if (r === p) throw new Error("Generator is already running");
                                        if (r === h) {
                                            if ("throw" === i) throw o;
                                            return A();
                                        }
                                        for (n.method = i, n.arg = o; ; ) {
                                            var a = n.delegate;
                                            if (a) {
                                                var s = T(a, n);
                                                if (s) {
                                                    if (s === g) continue;
                                                    return s;
                                                }
                                            }
                                            if ("next" === n.method) n.sent = n._sent = n.arg;
                                            else if ("throw" === n.method) {
                                                if (r === d) throw ((r = h), n.arg);
                                                n.dispatchException(n.arg);
                                            } else "return" === n.method && n.abrupt("return", n.arg);
                                            r = p;
                                            var c = u(e, t, n);
                                            if ("normal" === c.type) {
                                                if (((r = n.done ? h : f), c.arg === g)) continue;
                                                return { value: c.arg, done: n.done };
                                            }
                                            "throw" === c.type && ((r = h), (n.method = "throw"), (n.arg = c.arg));
                                        }
                                    };
                                })(e, n, a)),
                                o
                            );
                        }
                        function u(e, t, n) {
                            try {
                                return { type: "normal", arg: e.call(t, n) };
                            } catch (e) {
                                return { type: "throw", arg: e };
                            }
                        }
                        e.wrap = l;
                        var d = "suspendedStart",
                            f = "suspendedYield",
                            p = "executing",
                            h = "completed",
                            g = {};
                        function v() {}
                        function m() {}
                        function y() {}
                        var b = {};
                        b[o] = function () {
                            return this;
                        };
                        var x = Object.getPrototypeOf,
                            w = x && x(x(k([])));
                        w && w !== n && r.call(w, o) && (b = w);
                        var C = (y.prototype = v.prototype = Object.create(b));
                        function P(e) {
                            ["next", "throw", "return"].forEach(function (t) {
                                c(e, t, function (e) {
                                    return this._invoke(t, e);
                                });
                            });
                        }
                        function S(e, t) {
                            function n(i, o, a, s) {
                                var c = u(e[i], e, o);
                                if ("throw" !== c.type) {
                                    var l = c.arg,
                                        d = l.value;
                                    return d && "object" == typeof d && r.call(d, "__await")
                                        ? t.resolve(d.__await).then(
                                              function (e) {
                                                  n("next", e, a, s);
                                              },
                                              function (e) {
                                                  n("throw", e, a, s);
                                              }
                                          )
                                        : t.resolve(d).then(
                                              function (e) {
                                                  (l.value = e), a(l);
                                              },
                                              function (e) {
                                                  return n("throw", e, a, s);
                                              }
                                          );
                                }
                                s(c.arg);
                            }
                            var i;
                            this._invoke = function (e, r) {
                                function o() {
                                    return new t(function (t, i) {
                                        n(e, r, t, i);
                                    });
                                }
                                return (i = i ? i.then(o, o) : o());
                            };
                        }
                        function T(e, n) {
                            var r = e.iterator[n.method];
                            if (r === t) {
                                if (((n.delegate = null), "throw" === n.method)) {
                                    if (e.iterator.return && ((n.method = "return"), (n.arg = t), T(e, n), "throw" === n.method)) return g;
                                    (n.method = "throw"), (n.arg = new TypeError("The iterator does not provide a 'throw' method"));
                                }
                                return g;
                            }
                            var i = u(r, e.iterator, n.arg);
                            if ("throw" === i.type) return (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), g;
                            var o = i.arg;
                            return o
                                ? o.done
                                    ? ((n[e.resultName] = o.value), (n.next = e.nextLoc), "return" !== n.method && ((n.method = "next"), (n.arg = t)), (n.delegate = null), g)
                                    : o
                                : ((n.method = "throw"), (n.arg = new TypeError("iterator result is not an object")), (n.delegate = null), g);
                        }
                        function E(e) {
                            var t = { tryLoc: e[0] };
                            1 in e && (t.catchLoc = e[1]), 2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])), this.tryEntries.push(t);
                        }
                        function I(e) {
                            var t = e.completion || {};
                            (t.type = "normal"), delete t.arg, (e.completion = t);
                        }
                        function D(e) {
                            (this.tryEntries = [{ tryLoc: "root" }]), e.forEach(E, this), this.reset(!0);
                        }
                        function k(e) {
                            if (e) {
                                var n = e[o];
                                if (n) return n.call(e);
                                if ("function" == typeof e.next) return e;
                                if (!isNaN(e.length)) {
                                    var i = -1,
                                        a = function n() {
                                            for (; ++i < e.length; ) if (r.call(e, i)) return (n.value = e[i]), (n.done = !1), n;
                                            return (n.value = t), (n.done = !0), n;
                                        };
                                    return (a.next = a);
                                }
                            }
                            return { next: A };
                        }
                        function A() {
                            return { value: t, done: !0 };
                        }
                        return (
                            (m.prototype = C.constructor = y),
                            (y.constructor = m),
                            (m.displayName = c(y, s, "GeneratorFunction")),
                            (e.isGeneratorFunction = function (e) {
                                var t = "function" == typeof e && e.constructor;
                                return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name));
                            }),
                            (e.mark = function (e) {
                                return Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : ((e.__proto__ = y), c(e, s, "GeneratorFunction")), (e.prototype = Object.create(C)), e;
                            }),
                            (e.awrap = function (e) {
                                return { __await: e };
                            }),
                            P(S.prototype),
                            (S.prototype[a] = function () {
                                return this;
                            }),
                            (e.AsyncIterator = S),
                            (e.async = function (t, n, r, i, o) {
                                void 0 === o && (o = Promise);
                                var a = new S(l(t, n, r, i), o);
                                return e.isGeneratorFunction(n)
                                    ? a
                                    : a.next().then(function (e) {
                                          return e.done ? e.value : a.next();
                                      });
                            }),
                            P(C),
                            c(C, s, "Generator"),
                            (C[o] = function () {
                                return this;
                            }),
                            (C.toString = function () {
                                return "[object Generator]";
                            }),
                            (e.keys = function (e) {
                                var t = [];
                                for (var n in e) t.push(n);
                                return (
                                    t.reverse(),
                                    function n() {
                                        for (; t.length; ) {
                                            var r = t.pop();
                                            if (r in e) return (n.value = r), (n.done = !1), n;
                                        }
                                        return (n.done = !0), n;
                                    }
                                );
                            }),
                            (e.values = k),
                            (D.prototype = {
                                constructor: D,
                                reset: function (e) {
                                    if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = t), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = t), this.tryEntries.forEach(I), !e))
                                        for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
                                },
                                stop: function () {
                                    this.done = !0;
                                    var e = this.tryEntries[0].completion;
                                    if ("throw" === e.type) throw e.arg;
                                    return this.rval;
                                },
                                dispatchException: function (e) {
                                    if (this.done) throw e;
                                    var n = this;
                                    function i(r, i) {
                                        return (s.type = "throw"), (s.arg = e), (n.next = r), i && ((n.method = "next"), (n.arg = t)), !!i;
                                    }
                                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                                        var a = this.tryEntries[o],
                                            s = a.completion;
                                        if ("root" === a.tryLoc) return i("end");
                                        if (a.tryLoc <= this.prev) {
                                            var c = r.call(a, "catchLoc"),
                                                l = r.call(a, "finallyLoc");
                                            if (c && l) {
                                                if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                                                if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                                            } else if (c) {
                                                if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                                            } else {
                                                if (!l) throw new Error("try statement without catch or finally");
                                                if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                                            }
                                        }
                                    }
                                },
                                abrupt: function (e, t) {
                                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                        var i = this.tryEntries[n];
                                        if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                            var o = i;
                                            break;
                                        }
                                    }
                                    o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                                    var a = o ? o.completion : {};
                                    return (a.type = e), (a.arg = t), o ? ((this.method = "next"), (this.next = o.finallyLoc), g) : this.complete(a);
                                },
                                complete: function (e, t) {
                                    if ("throw" === e.type) throw e.arg;
                                    return (
                                        "break" === e.type || "continue" === e.type
                                            ? (this.next = e.arg)
                                            : "return" === e.type
                                            ? ((this.rval = this.arg = e.arg), (this.method = "return"), (this.next = "end"))
                                            : "normal" === e.type && t && (this.next = t),
                                        g
                                    );
                                },
                                finish: function (e) {
                                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                        var n = this.tryEntries[t];
                                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), I(n), g;
                                    }
                                },
                                catch: function (e) {
                                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                        var n = this.tryEntries[t];
                                        if (n.tryLoc === e) {
                                            var r = n.completion;
                                            if ("throw" === r.type) {
                                                var i = r.arg;
                                                I(n);
                                            }
                                            return i;
                                        }
                                    }
                                    throw new Error("illegal catch attempt");
                                },
                                delegateYield: function (e, n, r) {
                                    return (this.delegate = { iterator: k(e), resultName: n, nextLoc: r }), "next" === this.method && (this.arg = t), g;
                                },
                            }),
                            e
                        );
                    })(e.exports);
                    try {
                        regeneratorRuntime = t;
                    } catch (e) {
                        Function("r", "regeneratorRuntime = r")(t);
                    }
                },
                714: function (e, t) {
                    var n, r;
                    void 0 ===
                        (r =
                            "function" ==
                            typeof (n = function (e, t) {
                                "use strict";
                                var n = (function () {
                                    function e() {
                                        (function (e, t) {
                                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                        })(this, e),
                                            (this.edges = []),
                                            (this.Toposort = e);
                                    }
                                    return (
                                        (e.prototype.add = function (e, t) {
                                            if ("string" != typeof e || !e) throw new TypeError("Dependent name must be given as a not empty string");
                                            if ((t = Array.isArray(t) ? t : [t]).length > 0) {
                                                var n = t,
                                                    r = Array.isArray(n),
                                                    i = 0;
                                                for (n = r ? n : n[Symbol.iterator](); ; ) {
                                                    var o;
                                                    if (r) {
                                                        if (i >= n.length) break;
                                                        o = n[i++];
                                                    } else {
                                                        if ((i = n.next()).done) break;
                                                        o = i.value;
                                                    }
                                                    var a = o;
                                                    if ("string" != typeof a || !a) throw new TypeError("Dependency name must be given as a not empty string");
                                                    this.edges.push([e, a]);
                                                }
                                            } else this.edges.push([e]);
                                            return this;
                                        }),
                                        (e.prototype.sort = function () {
                                            var e = this,
                                                t = [],
                                                n = this.edges,
                                                r = Array.isArray(n),
                                                i = 0;
                                            for (n = r ? n : n[Symbol.iterator](); ; ) {
                                                var o;
                                                if (r) {
                                                    if (i >= n.length) break;
                                                    o = n[i++];
                                                } else {
                                                    if ((i = n.next()).done) break;
                                                    o = i.value;
                                                }
                                                var a = (b = o),
                                                    s = Array.isArray(a),
                                                    c = 0;
                                                for (a = s ? a : a[Symbol.iterator](); ; ) {
                                                    var l;
                                                    if (s) {
                                                        if (c >= a.length) break;
                                                        l = a[c++];
                                                    } else {
                                                        if ((c = a.next()).done) break;
                                                        l = c.value;
                                                    }
                                                    var u = l;
                                                    -1 === t.indexOf(u) && t.push(u);
                                                }
                                            }
                                            for (
                                                var d = t.length,
                                                    f = new Array(t.length),
                                                    p = function n(r, i) {
                                                        if (0 !== i.length && -1 !== i.indexOf(r)) throw new Error("Cyclic dependency found. " + r + " is dependent of itself.\nDependency chain: " + i.join(" -> ") + " => " + r);
                                                        var o = t.indexOf(r);
                                                        if (-1 !== o) {
                                                            var a = !1;
                                                            t[o] = !1;
                                                            var s = e.edges,
                                                                c = Array.isArray(s),
                                                                l = 0;
                                                            for (s = c ? s : s[Symbol.iterator](); ; ) {
                                                                var u;
                                                                if (c) {
                                                                    if (l >= s.length) break;
                                                                    u = s[l++];
                                                                } else {
                                                                    if ((l = s.next()).done) break;
                                                                    u = l.value;
                                                                }
                                                                var p = u;
                                                                p[0] === r && ((a = a || i.concat([r])), n(p[1], a));
                                                            }
                                                            f[--d] = r;
                                                        }
                                                    },
                                                    h = 0;
                                                h < t.length;
                                                h++
                                            )
                                                if (!1 !== (u = t[h])) {
                                                    t[h] = !1;
                                                    var g = this.edges,
                                                        v = Array.isArray(g),
                                                        m = 0;
                                                    for (g = v ? g : g[Symbol.iterator](); ; ) {
                                                        var y, b;
                                                        if (v) {
                                                            if (m >= g.length) break;
                                                            y = g[m++];
                                                        } else {
                                                            if ((m = g.next()).done) break;
                                                            y = m.value;
                                                        }
                                                        (b = y)[0] === u && p(b[1], [u]);
                                                    }
                                                    f[--d] = u;
                                                }
                                            return f;
                                        }),
                                        (e.prototype.clear = function () {
                                            return (this.edges = []), this;
                                        }),
                                        e
                                    );
                                })();
                                t.exports = n;
                            })
                                ? n.apply(t, [t, e])
                                : n) || (e.exports = r);
                },
                295: (e, t, n) => {
                    e.exports = n(714);
                },
                798: () => {
                    H5P.ContentType = function (e) {
                        function t() {}
                        return (
                            (t.prototype = new H5P.EventDispatcher()),
                            (t.prototype.isRoot = function () {
                                return e;
                            }),
                            (t.prototype.getLibraryFilePath = function (e) {
                                return H5P.getLibraryPath(this.libraryInfo.versionedNameNoSpaces) + "/" + e;
                            }),
                            t
                        );
                    };
                },
                449: () => {
                    var e = (window.H5P = window.H5P || {});
                    (e.Event = function (e, t, n) {
                        (this.type = e), (this.data = t);
                        var r = !1,
                            i = !1,
                            o = !1;
                        void 0 === n && (n = {}),
                            !0 === n.bubbles && (r = !0),
                            !0 === n.external && (i = !0),
                            (this.preventBubbling = function () {
                                r = !1;
                            }),
                            (this.getBubbles = function () {
                                return r;
                            }),
                            (this.scheduleForExternal = function () {
                                return !(!i || o || ((o = !0), 0));
                            });
                    }),
                        (e.EventDispatcher = function () {
                            var t = this,
                                n = {};
                            (this.on = function (e, r, i) {
                                if ("function" != typeof r) throw TypeError("listener must be a function");
                                t.trigger("newListener", { type: e, listener: r });
                                var o = { listener: r, thisArg: i };
                                n[e] ? n[e].push(o) : (n[e] = [o]);
                            }),
                                (this.once = function (e, n, r) {
                                    if (!(n instanceof Function)) throw TypeError("listener must be a function");
                                    var i = function (e) {
                                        t.off(e.type, i), n.call(this, e);
                                    };
                                    t.on(e, i, r);
                                }),
                                (this.off = function (e, r) {
                                    if (void 0 !== r && !(r instanceof Function)) throw TypeError("listener must be a function");
                                    if (void 0 !== n[e]) {
                                        if (void 0 === r) return delete n[e], void t.trigger("removeListener", e);
                                        for (var i = 0; i < n[e].length; i++)
                                            if (n[e][i].listener === r) {
                                                n[e].splice(i, 1), t.trigger("removeListener", e, { listener: r });
                                                break;
                                            }
                                        n[e].length || delete n[e];
                                    }
                                });
                            var r = function (e, t) {
                                if (void 0 !== n[e])
                                    for (var r = n[e].slice(), i = 0; i < r.length; i++) {
                                        var o = r[i],
                                            a = o.thisArg ? o.thisArg : this;
                                        o.listener.call(a, t);
                                    }
                            };
                            this.trigger = function (n, i, o) {
                                if (void 0 !== n) {
                                    n instanceof String || "string" == typeof n ? (n = new e.Event(n, i, o)) : void 0 !== i && (n.data = i);
                                    var a = n.scheduleForExternal();
                                    r.call(this, n.type, n),
                                        r.call(this, "*", n),
                                        n.getBubbles() && t.parent instanceof e.EventDispatcher && (t.parent.trigger instanceof Function || "function" == typeof t.parent.trigger) && t.parent.trigger(n),
                                        a && e.externalDispatcher.trigger.call(this, n);
                                }
                            };
                        });
                },
                2: () => {
                    var e = (window.H5P = window.H5P || {});
                    (e.XAPIEvent = function () {
                        e.Event.call(this, "xAPI", { statement: {} }, { bubbles: !0, external: !0 });
                    }),
                        (e.XAPIEvent.prototype = Object.create(e.Event.prototype)),
                        (e.XAPIEvent.prototype.constructor = e.XAPIEvent),
                        (e.XAPIEvent.prototype.setScoredResult = function (e, t, n, r, i) {
                            if (
                                ((this.data.statement.result = {}),
                                void 0 !== e &&
                                    (void 0 === t
                                        ? (this.data.statement.result.score = { raw: e })
                                        : ((this.data.statement.result.score = { min: 0, max: t, raw: e }), t > 0 && (this.data.statement.result.score.scaled = Math.round((e / t) * 1e4) / 1e4))),
                                (this.data.statement.result.completion = void 0 === r ? "completed" === this.getVerb() || "answered" === this.getVerb() : r),
                                void 0 !== i && (this.data.statement.result.success = i),
                                n && n.activityStartTime)
                            ) {
                                var o = Math.round((Date.now() - n.activityStartTime) / 10) / 100;
                                this.data.statement.result.duration = "PT" + o + "S";
                            }
                        }),
                        (e.XAPIEvent.prototype.setVerb = function (t) {
                            -1 !== e.jQuery.inArray(t, e.XAPIEvent.allowedXAPIVerbs) ? (this.data.statement.verb = { id: "http://adlnet.gov/expapi/verbs/" + t, display: { "en-US": t } }) : void 0 !== t.id && (this.data.statement.verb = t);
                        }),
                        (e.XAPIEvent.prototype.getVerb = function (e) {
                            var t = this.data.statement;
                            return "verb" in t ? (!0 === e ? t.verb : t.verb.id.slice(31)) : null;
                        }),
                        (e.XAPIEvent.prototype.setObject = function (t) {
                            if (t.contentId)
                                if (((this.data.statement.object = { id: this.getContentXAPIId(t), objectType: "Activity", definition: { extensions: { "http://h5p.org/x-api/h5p-local-content-id": t.contentId } } }), t.subContentId))
                                    (this.data.statement.object.definition.extensions["http://h5p.org/x-api/h5p-subContentId"] = t.subContentId),
                                        "function" == typeof t.getTitle && (this.data.statement.object.definition.name = { "en-US": t.getTitle() });
                                else {
                                    var n = e.getContentForInstance(t.contentId);
                                    n && n.metadata && n.metadata.title && (this.data.statement.object.definition.name = { "en-US": e.createTitle(n.metadata.title) });
                                }
                            else this.data.statement.object = { definition: {} };
                        }),
                        (e.XAPIEvent.prototype.setContext = function (e) {
                            e.parent && (e.parent.contentId || e.parent.subContentId) && (this.data.statement.context = { contextActivities: { parent: [{ id: this.getContentXAPIId(e.parent), objectType: "Activity" }] } }),
                                e.libraryInfo &&
                                    (void 0 === this.data.statement.context && (this.data.statement.context = { contextActivities: {} }),
                                    (this.data.statement.context.contextActivities.category = [{ id: "http://h5p.org/libraries/" + e.libraryInfo.versionedNameNoSpaces, objectType: "Activity" }]));
                        }),
                        (e.XAPIEvent.prototype.setActor = function () {
                            if (void 0 !== H5PIntegration.user) this.data.statement.actor = { name: H5PIntegration.user.name, mbox: "mailto:" + H5PIntegration.user.mail, objectType: "Agent" };
                            else {
                                var t;
                                try {
                                    localStorage.H5PUserUUID ? (t = localStorage.H5PUserUUID) : ((t = e.createUUID()), (localStorage.H5PUserUUID = t));
                                } catch (n) {
                                    t = "not-trackable-" + e.createUUID();
                                }
                                this.data.statement.actor = { account: { name: t, homePage: H5PIntegration.siteUrl }, objectType: "Agent" };
                            }
                        }),
                        (e.XAPIEvent.prototype.getMaxScore = function () {
                            return this.getVerifiedStatementValue(["result", "score", "max"]);
                        }),
                        (e.XAPIEvent.prototype.getScore = function () {
                            return this.getVerifiedStatementValue(["result", "score", "raw"]);
                        }),
                        (e.XAPIEvent.prototype.getContentXAPIId = function (e) {
                            var t;
                            return (
                                e.contentId &&
                                    H5PIntegration &&
                                    H5PIntegration.contents &&
                                    H5PIntegration.contents["cid-" + e.contentId] &&
                                    ((t = H5PIntegration.contents["cid-" + e.contentId].url), e.subContentId && (t += "?subContentId=" + e.subContentId)),
                                t
                            );
                        }),
                        (e.XAPIEvent.prototype.isFromChild = function () {
                            var e = this.getVerifiedStatementValue(["context", "contextActivities", "parent", 0, "id"]);
                            return !e || -1 === e.indexOf("subContentId");
                        }),
                        (e.XAPIEvent.prototype.getVerifiedStatementValue = function (e) {
                            for (var t = this.data.statement, n = 0; n < e.length; n++) {
                                if (void 0 === t[e[n]]) return null;
                                t = t[e[n]];
                            }
                            return t;
                        }),
                        (e.XAPIEvent.allowedXAPIVerbs = [
                            "answered",
                            "asked",
                            "attempted",
                            "attended",
                            "commented",
                            "completed",
                            "exited",
                            "experienced",
                            "failed",
                            "imported",
                            "initialized",
                            "interacted",
                            "launched",
                            "mastered",
                            "passed",
                            "preferred",
                            "progressed",
                            "registered",
                            "responded",
                            "resumed",
                            "scored",
                            "shared",
                            "suspended",
                            "terminated",
                            "voided",
                            "downloaded",
                            "copied",
                            "accessed-reuse",
                            "accessed-embed",
                            "accessed-copyright",
                        ]);
                },
                268: () => {
                    var e = (window.H5P = window.H5P || {});
                    (e.externalDispatcher = new e.EventDispatcher()),
                        (e.EventDispatcher.prototype.triggerXAPI = function (e, t) {
                            this.trigger(this.createXAPIEventTemplate(e, t));
                        }),
                        (e.EventDispatcher.prototype.createXAPIEventTemplate = function (t, n) {
                            var r = new e.XAPIEvent();
                            if ((r.setActor(), r.setVerb(t), void 0 !== n)) for (var i in n) r.data.statement[i] = n[i];
                            return "object" in r.data.statement || r.setObject(this), "context" in r.data.statement || r.setContext(this), r;
                        }),
                        (e.EventDispatcher.prototype.triggerXAPICompleted = function (e, t, n) {
                            this.triggerXAPIScored(e, t, "completed", !0, n);
                        }),
                        (e.EventDispatcher.prototype.triggerXAPIScored = function (e, t, n, r, i) {
                            var o = this.createXAPIEventTemplate(n);
                            o.setScoredResult(e, t, this, r, i), this.trigger(o);
                        }),
                        (e.EventDispatcher.prototype.setActivityStarted = function () {
                            void 0 === this.activityStartTime &&
                                (void 0 !== this.contentId && void 0 !== H5PIntegration.contents && void 0 !== H5PIntegration.contents["cid-" + this.contentId] && this.triggerXAPI("attempted"), (this.activityStartTime = Date.now()));
                        }),
                        (e.xAPICompletedListener = function (t) {
                            if (("completed" === t.getVerb() || "answered" === t.getVerb()) && !t.getVerifiedStatementValue(["context", "contextActivities", "parent"])) {
                                var n = t.getScore(),
                                    r = t.getMaxScore(),
                                    i = t.getVerifiedStatementValue(["object", "definition", "extensions", "http://h5p.org/x-api/h5p-local-content-id"]);
                                e.setFinished(i, n, r);
                            }
                        });
                },
                357: function (e, t) {
                    var n;
                    !(function (t, n) {
                        "use strict";
                        "object" == typeof e.exports
                            ? (e.exports = t.document
                                  ? n(t, !0)
                                  : function (e) {
                                        if (!e.document) throw new Error("jQuery requires a window with a document");
                                        return n(e);
                                    })
                            : n(t);
                    })("undefined" != typeof window ? window : this, function (r, i) {
                        "use strict";
                        var o = [],
                            a = Object.getPrototypeOf,
                            s = o.slice,
                            c = o.flat
                                ? function (e) {
                                      return o.flat.call(e);
                                  }
                                : function (e) {
                                      return o.concat.apply([], e);
                                  },
                            l = o.push,
                            u = o.indexOf,
                            d = {},
                            f = d.toString,
                            p = d.hasOwnProperty,
                            h = p.toString,
                            g = h.call(Object),
                            v = {},
                            m = function (e) {
                                return "function" == typeof e && "number" != typeof e.nodeType;
                            },
                            y = function (e) {
                                return null != e && e === e.window;
                            },
                            b = r.document,
                            x = { type: !0, src: !0, nonce: !0, noModule: !0 };
                        function w(e, t, n) {
                            var r,
                                i,
                                o = (n = n || b).createElement("script");
                            if (((o.text = e), t)) for (r in x) (i = t[r] || (t.getAttribute && t.getAttribute(r))) && o.setAttribute(r, i);
                            n.head.appendChild(o).parentNode.removeChild(o);
                        }
                        function C(e) {
                            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[f.call(e)] || "object" : typeof e;
                        }
                        var P = "3.5.1",
                            S = function (e, t) {
                                return new S.fn.init(e, t);
                            };
                        function T(e) {
                            var t = !!e && "length" in e && e.length,
                                n = C(e);
                            return !m(e) && !y(e) && ("array" === n || 0 === t || ("number" == typeof t && 0 < t && t - 1 in e));
                        }
                        (S.fn = S.prototype = {
                            jquery: P,
                            constructor: S,
                            length: 0,
                            toArray: function () {
                                return s.call(this);
                            },
                            get: function (e) {
                                return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
                            },
                            pushStack: function (e) {
                                var t = S.merge(this.constructor(), e);
                                return (t.prevObject = this), t;
                            },
                            each: function (e) {
                                return S.each(this, e);
                            },
                            map: function (e) {
                                return this.pushStack(
                                    S.map(this, function (t, n) {
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
                                    S.grep(this, function (e, t) {
                                        return (t + 1) % 2;
                                    })
                                );
                            },
                            odd: function () {
                                return this.pushStack(
                                    S.grep(this, function (e, t) {
                                        return t % 2;
                                    })
                                );
                            },
                            eq: function (e) {
                                var t = this.length,
                                    n = +e + (e < 0 ? t : 0);
                                return this.pushStack(0 <= n && n < t ? [this[n]] : []);
                            },
                            end: function () {
                                return this.prevObject || this.constructor();
                            },
                            push: l,
                            sort: o.sort,
                            splice: o.splice,
                        }),
                            (S.extend = S.fn.extend = function () {
                                var e,
                                    t,
                                    n,
                                    r,
                                    i,
                                    o,
                                    a = arguments[0] || {},
                                    s = 1,
                                    c = arguments.length,
                                    l = !1;
                                for ("boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++), "object" == typeof a || m(a) || (a = {}), s === c && ((a = this), s--); s < c; s++)
                                    if (null != (e = arguments[s]))
                                        for (t in e)
                                            (r = e[t]),
                                                "__proto__" !== t &&
                                                    a !== r &&
                                                    (l && r && (S.isPlainObject(r) || (i = Array.isArray(r)))
                                                        ? ((n = a[t]), (o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}), (i = !1), (a[t] = S.extend(l, o, r)))
                                                        : void 0 !== r && (a[t] = r));
                                return a;
                            }),
                            S.extend({
                                expando: "jQuery" + (P + Math.random()).replace(/\D/g, ""),
                                isReady: !0,
                                error: function (e) {
                                    throw new Error(e);
                                },
                                noop: function () {},
                                isPlainObject: function (e) {
                                    var t, n;
                                    return !(!e || "[object Object]" !== f.call(e) || ((t = a(e)) && ("function" != typeof (n = p.call(t, "constructor") && t.constructor) || h.call(n) !== g)));
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
                                    if (T(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                                    else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                                    return e;
                                },
                                makeArray: function (e, t) {
                                    var n = t || [];
                                    return null != e && (T(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)), n;
                                },
                                inArray: function (e, t, n) {
                                    return null == t ? -1 : u.call(t, e, n);
                                },
                                merge: function (e, t) {
                                    for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                                    return (e.length = i), e;
                                },
                                grep: function (e, t, n) {
                                    for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
                                    return r;
                                },
                                map: function (e, t, n) {
                                    var r,
                                        i,
                                        o = 0,
                                        a = [];
                                    if (T(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
                                    else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                                    return c(a);
                                },
                                guid: 1,
                                support: v,
                            }),
                            "function" == typeof Symbol && (S.fn[Symbol.iterator] = o[Symbol.iterator]),
                            S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
                                d["[object " + t + "]"] = t.toLowerCase();
                            });
                        var E = (function (e) {
                            var t,
                                n,
                                r,
                                i,
                                o,
                                a,
                                s,
                                c,
                                l,
                                u,
                                d,
                                f,
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
                                P = 0,
                                S = ce(),
                                T = ce(),
                                E = ce(),
                                I = ce(),
                                D = function (e, t) {
                                    return e === t && (d = !0), 0;
                                },
                                k = {}.hasOwnProperty,
                                A = [],
                                j = A.pop,
                                H = A.push,
                                N = A.push,
                                L = A.slice,
                                O = function (e, t) {
                                    for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                                    return -1;
                                },
                                F = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                                q = "[\\x20\\t\\r\\n\\f]",
                                R = "(?:\\\\[\\da-fA-F]{1,6}" + q + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                                M = "\\[" + q + "*(" + R + ")(?:" + q + "*([*^$|!~]?=)" + q + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + q + "*\\]",
                                B = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
                                U = new RegExp(q + "+", "g"),
                                z = new RegExp("^" + q + "+|((?:^|[^\\\\])(?:\\\\.)*)" + q + "+$", "g"),
                                V = new RegExp("^" + q + "*," + q + "*"),
                                $ = new RegExp("^" + q + "*([>+~]|" + q + ")" + q + "*"),
                                _ = new RegExp(q + "|>"),
                                X = new RegExp(B),
                                W = new RegExp("^" + R + "$"),
                                Q = {
                                    ID: new RegExp("^#(" + R + ")"),
                                    CLASS: new RegExp("^\\.(" + R + ")"),
                                    TAG: new RegExp("^(" + R + "|[*])"),
                                    ATTR: new RegExp("^" + M),
                                    PSEUDO: new RegExp("^" + B),
                                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + q + "*(even|odd|(([+-]|)(\\d*)n|)" + q + "*(?:([+-]|)" + q + "*(\\d+)|))" + q + "*\\)|)", "i"),
                                    bool: new RegExp("^(?:" + F + ")$", "i"),
                                    needsContext: new RegExp("^" + q + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + q + "*((?:-\\d)?\\d*)" + q + "*\\)|)(?=[^-]|$)", "i"),
                                },
                                J = /HTML$/i,
                                Y = /^(?:input|select|textarea|button)$/i,
                                G = /^h\d$/i,
                                K = /^[^{]+\{\s*\[native \w/,
                                Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                                ee = /[+~]/,
                                te = new RegExp("\\\\[\\da-fA-F]{1,6}" + q + "?|\\\\([^\\r\\n\\f])", "g"),
                                ne = function (e, t) {
                                    var n = "0x" + e.slice(1) - 65536;
                                    return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320));
                                },
                                re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                                ie = function (e, t) {
                                    return t ? ("\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
                                },
                                oe = function () {
                                    f();
                                },
                                ae = xe(
                                    function (e) {
                                        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
                                    },
                                    { dir: "parentNode", next: "legend" }
                                );
                            try {
                                N.apply((A = L.call(w.childNodes)), w.childNodes), A[w.childNodes.length].nodeType;
                            } catch (t) {
                                N = {
                                    apply: A.length
                                        ? function (e, t) {
                                              H.apply(e, L.call(t));
                                          }
                                        : function (e, t) {
                                              for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                                              e.length = n - 1;
                                          },
                                };
                            }
                            function se(e, t, r, i) {
                                var o,
                                    s,
                                    l,
                                    u,
                                    d,
                                    h,
                                    m,
                                    y = t && t.ownerDocument,
                                    w = t ? t.nodeType : 9;
                                if (((r = r || []), "string" != typeof e || !e || (1 !== w && 9 !== w && 11 !== w))) return r;
                                if (!i && (f(t), (t = t || p), g)) {
                                    if (11 !== w && (d = Z.exec(e)))
                                        if ((o = d[1])) {
                                            if (9 === w) {
                                                if (!(l = t.getElementById(o))) return r;
                                                if (l.id === o) return r.push(l), r;
                                            } else if (y && (l = y.getElementById(o)) && b(t, l) && l.id === o) return r.push(l), r;
                                        } else {
                                            if (d[2]) return N.apply(r, t.getElementsByTagName(e)), r;
                                            if ((o = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return N.apply(r, t.getElementsByClassName(o)), r;
                                        }
                                    if (n.qsa && !I[e + " "] && (!v || !v.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                                        if (((m = e), (y = t), 1 === w && (_.test(e) || $.test(e)))) {
                                            for (((y = (ee.test(e) && me(t.parentNode)) || t) === t && n.scope) || ((u = t.getAttribute("id")) ? (u = u.replace(re, ie)) : t.setAttribute("id", (u = x))), s = (h = a(e)).length; s--; )
                                                h[s] = (u ? "#" + u : ":scope") + " " + be(h[s]);
                                            m = h.join(",");
                                        }
                                        try {
                                            return N.apply(r, y.querySelectorAll(m)), r;
                                        } catch (t) {
                                            I(e, !0);
                                        } finally {
                                            u === x && t.removeAttribute("id");
                                        }
                                    }
                                }
                                return c(e.replace(z, "$1"), t, r, i);
                            }
                            function ce() {
                                var e = [];
                                return function t(n, i) {
                                    return e.push(n + " ") > r.cacheLength && delete t[e.shift()], (t[n + " "] = i);
                                };
                            }
                            function le(e) {
                                return (e[x] = !0), e;
                            }
                            function ue(e) {
                                var t = p.createElement("fieldset");
                                try {
                                    return !!e(t);
                                } catch (e) {
                                    return !1;
                                } finally {
                                    t.parentNode && t.parentNode.removeChild(t), (t = null);
                                }
                            }
                            function de(e, t) {
                                for (var n = e.split("|"), i = n.length; i--; ) r.attrHandle[n[i]] = t;
                            }
                            function fe(e, t) {
                                var n = t && e,
                                    r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
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
                                            for (var i, o = e([], n.length, t), a = o.length; a--; ) n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
                                        })
                                    );
                                });
                            }
                            function me(e) {
                                return e && void 0 !== e.getElementsByTagName && e;
                            }
                            for (t in ((n = se.support = {}),
                            (o = se.isXML = function (e) {
                                var t = e.namespaceURI,
                                    n = (e.ownerDocument || e).documentElement;
                                return !J.test(t || (n && n.nodeName) || "HTML");
                            }),
                            (f = se.setDocument = function (e) {
                                var t,
                                    i,
                                    a = e ? e.ownerDocument || e : w;
                                return (
                                    a != p &&
                                        9 === a.nodeType &&
                                        a.documentElement &&
                                        ((h = (p = a).documentElement),
                                        (g = !o(p)),
                                        w != p && (i = p.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)),
                                        (n.scope = ue(function (e) {
                                            return h.appendChild(e).appendChild(p.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
                                        })),
                                        (n.attributes = ue(function (e) {
                                            return (e.className = "i"), !e.getAttribute("className");
                                        })),
                                        (n.getElementsByTagName = ue(function (e) {
                                            return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length;
                                        })),
                                        (n.getElementsByClassName = K.test(p.getElementsByClassName)),
                                        (n.getById = ue(function (e) {
                                            return (h.appendChild(e).id = x), !p.getElementsByName || !p.getElementsByName(x).length;
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
                                                      var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                                      return n && n.value === t;
                                                  };
                                              }),
                                              (r.find.ID = function (e, t) {
                                                  if (void 0 !== t.getElementById && g) {
                                                      var n,
                                                          r,
                                                          i,
                                                          o = t.getElementById(e);
                                                      if (o) {
                                                          if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                                          for (i = t.getElementsByName(e), r = 0; (o = i[r++]); ) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                                      }
                                                      return [];
                                                  }
                                              })),
                                        (r.find.TAG = n.getElementsByTagName
                                            ? function (e, t) {
                                                  return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
                                              }
                                            : function (e, t) {
                                                  var n,
                                                      r = [],
                                                      i = 0,
                                                      o = t.getElementsByTagName(e);
                                                  if ("*" === e) {
                                                      for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                                                      return r;
                                                  }
                                                  return o;
                                              }),
                                        (r.find.CLASS =
                                            n.getElementsByClassName &&
                                            function (e, t) {
                                                if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e);
                                            }),
                                        (m = []),
                                        (v = []),
                                        (n.qsa = K.test(p.querySelectorAll)) &&
                                            (ue(function (e) {
                                                var t;
                                                (h.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                                    e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + q + "*(?:''|\"\")"),
                                                    e.querySelectorAll("[selected]").length || v.push("\\[" + q + "*(?:value|" + F + ")"),
                                                    e.querySelectorAll("[id~=" + x + "-]").length || v.push("~="),
                                                    (t = p.createElement("input")).setAttribute("name", ""),
                                                    e.appendChild(t),
                                                    e.querySelectorAll("[name='']").length || v.push("\\[" + q + "*name" + q + "*=" + q + "*(?:''|\"\")"),
                                                    e.querySelectorAll(":checked").length || v.push(":checked"),
                                                    e.querySelectorAll("a#" + x + "+*").length || v.push(".#.+[+~]"),
                                                    e.querySelectorAll("\\\f"),
                                                    v.push("[\\r\\n\\f]");
                                            }),
                                            ue(function (e) {
                                                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                                var t = p.createElement("input");
                                                t.setAttribute("type", "hidden"),
                                                    e.appendChild(t).setAttribute("name", "D"),
                                                    e.querySelectorAll("[name=d]").length && v.push("name" + q + "*[*^$|!~]?="),
                                                    2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                                                    (h.appendChild(e).disabled = !0),
                                                    2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                                                    e.querySelectorAll("*,:x"),
                                                    v.push(",.*:");
                                            })),
                                        (n.matchesSelector = K.test((y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector))) &&
                                            ue(function (e) {
                                                (n.disconnectedMatch = y.call(e, "*")), y.call(e, "[s!='']:x"), m.push("!=", B);
                                            }),
                                        (v = v.length && new RegExp(v.join("|"))),
                                        (m = m.length && new RegExp(m.join("|"))),
                                        (t = K.test(h.compareDocumentPosition)),
                                        (b =
                                            t || K.test(h.contains)
                                                ? function (e, t) {
                                                      var n = 9 === e.nodeType ? e.documentElement : e,
                                                          r = t && t.parentNode;
                                                      return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
                                                  }
                                                : function (e, t) {
                                                      if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                                                      return !1;
                                                  }),
                                        (D = t
                                            ? function (e, t) {
                                                  if (e === t) return (d = !0), 0;
                                                  var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                                  return (
                                                      r ||
                                                      (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!n.sortDetached && t.compareDocumentPosition(e) === r)
                                                          ? e == p || (e.ownerDocument == w && b(w, e))
                                                              ? -1
                                                              : t == p || (t.ownerDocument == w && b(w, t))
                                                              ? 1
                                                              : u
                                                              ? O(u, e) - O(u, t)
                                                              : 0
                                                          : 4 & r
                                                          ? -1
                                                          : 1)
                                                  );
                                              }
                                            : function (e, t) {
                                                  if (e === t) return (d = !0), 0;
                                                  var n,
                                                      r = 0,
                                                      i = e.parentNode,
                                                      o = t.parentNode,
                                                      a = [e],
                                                      s = [t];
                                                  if (!i || !o) return e == p ? -1 : t == p ? 1 : i ? -1 : o ? 1 : u ? O(u, e) - O(u, t) : 0;
                                                  if (i === o) return fe(e, t);
                                                  for (n = e; (n = n.parentNode); ) a.unshift(n);
                                                  for (n = t; (n = n.parentNode); ) s.unshift(n);
                                                  for (; a[r] === s[r]; ) r++;
                                                  return r ? fe(a[r], s[r]) : a[r] == w ? -1 : s[r] == w ? 1 : 0;
                                              })),
                                    p
                                );
                            }),
                            (se.matches = function (e, t) {
                                return se(e, null, null, t);
                            }),
                            (se.matchesSelector = function (e, t) {
                                if ((f(e), n.matchesSelector && g && !I[t + " "] && (!m || !m.test(t)) && (!v || !v.test(t))))
                                    try {
                                        var r = y.call(e, t);
                                        if (r || n.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return r;
                                    } catch (e) {
                                        I(t, !0);
                                    }
                                return 0 < se(t, p, null, [e]).length;
                            }),
                            (se.contains = function (e, t) {
                                return (e.ownerDocument || e) != p && f(e), b(e, t);
                            }),
                            (se.attr = function (e, t) {
                                (e.ownerDocument || e) != p && f(e);
                                var i = r.attrHandle[t.toLowerCase()],
                                    o = i && k.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
                                return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
                            }),
                            (se.escape = function (e) {
                                return (e + "").replace(re, ie);
                            }),
                            (se.error = function (e) {
                                throw new Error("Syntax error, unrecognized expression: " + e);
                            }),
                            (se.uniqueSort = function (e) {
                                var t,
                                    r = [],
                                    i = 0,
                                    o = 0;
                                if (((d = !n.detectDuplicates), (u = !n.sortStable && e.slice(0)), e.sort(D), d)) {
                                    for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
                                    for (; i--; ) e.splice(r[i], 1);
                                }
                                return (u = null), e;
                            }),
                            (i = se.getText = function (e) {
                                var t,
                                    n = "",
                                    r = 0,
                                    o = e.nodeType;
                                if (o) {
                                    if (1 === o || 9 === o || 11 === o) {
                                        if ("string" == typeof e.textContent) return e.textContent;
                                        for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                                    } else if (3 === o || 4 === o) return e.nodeValue;
                                } else for (; (t = e[r++]); ) n += i(t);
                                return n;
                            }),
                            ((r = se.selectors = {
                                cacheLength: 50,
                                createPseudo: le,
                                match: Q,
                                attrHandle: {},
                                find: {},
                                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                                preFilter: {
                                    ATTR: function (e) {
                                        return (e[1] = e[1].replace(te, ne)), (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                                    },
                                    CHILD: function (e) {
                                        return (
                                            (e[1] = e[1].toLowerCase()),
                                            "nth" === e[1].slice(0, 3)
                                                ? (e[3] || se.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                                                : e[3] && se.error(e[0]),
                                            e
                                        );
                                    },
                                    PSEUDO: function (e) {
                                        var t,
                                            n = !e[6] && e[2];
                                        return Q.CHILD.test(e[0])
                                            ? null
                                            : (e[3] ? (e[2] = e[4] || e[5] || "") : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
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
                                        var t = S[e + " "];
                                        return (
                                            t ||
                                            ((t = new RegExp("(^|" + q + ")" + e + "(" + q + "|$)")) &&
                                                S(e, function (e) {
                                                    return t.test(("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || "");
                                                }))
                                        );
                                    },
                                    ATTR: function (e, t, n) {
                                        return function (r) {
                                            var i = se.attr(r, e);
                                            return null == i
                                                ? "!=" === t
                                                : !t ||
                                                      ((i += ""),
                                                      "=" === t
                                                          ? i === n
                                                          : "!=" === t
                                                          ? i !== n
                                                          : "^=" === t
                                                          ? n && 0 === i.indexOf(n)
                                                          : "*=" === t
                                                          ? n && -1 < i.indexOf(n)
                                                          : "$=" === t
                                                          ? n && i.slice(-n.length) === n
                                                          : "~=" === t
                                                          ? -1 < (" " + i.replace(U, " ") + " ").indexOf(n)
                                                          : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
                                        };
                                    },
                                    CHILD: function (e, t, n, r, i) {
                                        var o = "nth" !== e.slice(0, 3),
                                            a = "last" !== e.slice(-4),
                                            s = "of-type" === t;
                                        return 1 === r && 0 === i
                                            ? function (e) {
                                                  return !!e.parentNode;
                                              }
                                            : function (t, n, c) {
                                                  var l,
                                                      u,
                                                      d,
                                                      f,
                                                      p,
                                                      h,
                                                      g = o !== a ? "nextSibling" : "previousSibling",
                                                      v = t.parentNode,
                                                      m = s && t.nodeName.toLowerCase(),
                                                      y = !c && !s,
                                                      b = !1;
                                                  if (v) {
                                                      if (o) {
                                                          for (; g; ) {
                                                              for (f = t; (f = f[g]); ) if (s ? f.nodeName.toLowerCase() === m : 1 === f.nodeType) return !1;
                                                              h = g = "only" === e && !h && "nextSibling";
                                                          }
                                                          return !0;
                                                      }
                                                      if (((h = [a ? v.firstChild : v.lastChild]), a && y)) {
                                                          for (
                                                              b = (p = (l = (u = (d = (f = v)[x] || (f[x] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === C && l[1]) && l[2], f = p && v.childNodes[p];
                                                              (f = (++p && f && f[g]) || (b = p = 0) || h.pop());

                                                          )
                                                              if (1 === f.nodeType && ++b && f === t) {
                                                                  u[e] = [C, p, b];
                                                                  break;
                                                              }
                                                      } else if ((y && (b = p = (l = (u = (d = (f = t)[x] || (f[x] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === C && l[1]), !1 === b))
                                                          for (
                                                              ;
                                                              (f = (++p && f && f[g]) || (b = p = 0) || h.pop()) &&
                                                              ((s ? f.nodeName.toLowerCase() !== m : 1 !== f.nodeType) || !++b || (y && ((u = (d = f[x] || (f[x] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] = [C, b]), f !== t));

                                                          );
                                                      return (b -= i) === r || (b % r == 0 && 0 <= b / r);
                                                  }
                                              };
                                    },
                                    PSEUDO: function (e, t) {
                                        var n,
                                            i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                                        return i[x]
                                            ? i(t)
                                            : 1 < i.length
                                            ? ((n = [e, e, "", t]),
                                              r.setFilters.hasOwnProperty(e.toLowerCase())
                                                  ? le(function (e, n) {
                                                        for (var r, o = i(e, t), a = o.length; a--; ) e[(r = O(e, o[a]))] = !(n[r] = o[a]);
                                                    })
                                                  : function (e) {
                                                        return i(e, 0, n);
                                                    })
                                            : i;
                                    },
                                },
                                pseudos: {
                                    not: le(function (e) {
                                        var t = [],
                                            n = [],
                                            r = s(e.replace(z, "$1"));
                                        return r[x]
                                            ? le(function (e, t, n, i) {
                                                  for (var o, a = r(e, null, i, []), s = e.length; s--; ) (o = a[s]) && (e[s] = !(t[s] = o));
                                              })
                                            : function (e, i, o) {
                                                  return (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop();
                                              };
                                    }),
                                    has: le(function (e) {
                                        return function (t) {
                                            return 0 < se(e, t).length;
                                        };
                                    }),
                                    contains: le(function (e) {
                                        return (
                                            (e = e.replace(te, ne)),
                                            function (t) {
                                                return -1 < (t.textContent || i(t)).indexOf(e);
                                            }
                                        );
                                    }),
                                    lang: le(function (e) {
                                        return (
                                            W.test(e || "") || se.error("unsupported lang: " + e),
                                            (e = e.replace(te, ne).toLowerCase()),
                                            function (t) {
                                                var n;
                                                do {
                                                    if ((n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
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
                                        return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                                    },
                                    enabled: ge(!1),
                                    disabled: ge(!0),
                                    checked: function (e) {
                                        var t = e.nodeName.toLowerCase();
                                        return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                                    },
                                    selected: function (e) {
                                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                                    },
                                    empty: function (e) {
                                        for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                                        return !0;
                                    },
                                    parent: function (e) {
                                        return !r.pseudos.empty(e);
                                    },
                                    header: function (e) {
                                        return G.test(e.nodeName);
                                    },
                                    input: function (e) {
                                        return Y.test(e.nodeName);
                                    },
                                    button: function (e) {
                                        var t = e.nodeName.toLowerCase();
                                        return ("input" === t && "button" === e.type) || "button" === t;
                                    },
                                    text: function (e) {
                                        var t;
                                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
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
                                        for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
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
                                    i = t.next,
                                    o = i || r,
                                    a = n && "parentNode" === o,
                                    s = P++;
                                return t.first
                                    ? function (t, n, i) {
                                          for (; (t = t[r]); ) if (1 === t.nodeType || a) return e(t, n, i);
                                          return !1;
                                      }
                                    : function (t, n, c) {
                                          var l,
                                              u,
                                              d,
                                              f = [C, s];
                                          if (c) {
                                              for (; (t = t[r]); ) if ((1 === t.nodeType || a) && e(t, n, c)) return !0;
                                          } else
                                              for (; (t = t[r]); )
                                                  if (1 === t.nodeType || a)
                                                      if (((u = (d = t[x] || (t[x] = {}))[t.uniqueID] || (d[t.uniqueID] = {})), i && i === t.nodeName.toLowerCase())) t = t[r] || t;
                                                      else {
                                                          if ((l = u[o]) && l[0] === C && l[1] === s) return (f[2] = l[2]);
                                                          if (((u[o] = f)[2] = e(t, n, c))) return !0;
                                                      }
                                          return !1;
                                      };
                            }
                            function we(e) {
                                return 1 < e.length
                                    ? function (t, n, r) {
                                          for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                                          return !0;
                                      }
                                    : e[0];
                            }
                            function Ce(e, t, n, r, i) {
                                for (var o, a = [], s = 0, c = e.length, l = null != t; s < c; s++) (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
                                return a;
                            }
                            function Pe(e, t, n, r, i, o) {
                                return (
                                    r && !r[x] && (r = Pe(r)),
                                    i && !i[x] && (i = Pe(i, o)),
                                    le(function (o, a, s, c) {
                                        var l,
                                            u,
                                            d,
                                            f = [],
                                            p = [],
                                            h = a.length,
                                            g =
                                                o ||
                                                (function (e, t, n) {
                                                    for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                                                    return n;
                                                })(t || "*", s.nodeType ? [s] : s, []),
                                            v = !e || (!o && t) ? g : Ce(g, f, e, s, c),
                                            m = n ? (i || (o ? e : h || r) ? [] : a) : v;
                                        if ((n && n(v, m, s, c), r)) for (l = Ce(m, p), r(l, [], s, c), u = l.length; u--; ) (d = l[u]) && (m[p[u]] = !(v[p[u]] = d));
                                        if (o) {
                                            if (i || e) {
                                                if (i) {
                                                    for (l = [], u = m.length; u--; ) (d = m[u]) && l.push((v[u] = d));
                                                    i(null, (m = []), l, c);
                                                }
                                                for (u = m.length; u--; ) (d = m[u]) && -1 < (l = i ? O(o, d) : f[u]) && (o[l] = !(a[l] = d));
                                            }
                                        } else (m = Ce(m === a ? m.splice(h, m.length) : m)), i ? i(null, a, m, c) : N.apply(a, m);
                                    })
                                );
                            }
                            function Se(e) {
                                for (
                                    var t,
                                        n,
                                        i,
                                        o = e.length,
                                        a = r.relative[e[0].type],
                                        s = a || r.relative[" "],
                                        c = a ? 1 : 0,
                                        u = xe(
                                            function (e) {
                                                return e === t;
                                            },
                                            s,
                                            !0
                                        ),
                                        d = xe(
                                            function (e) {
                                                return -1 < O(t, e);
                                            },
                                            s,
                                            !0
                                        ),
                                        f = [
                                            function (e, n, r) {
                                                var i = (!a && (r || n !== l)) || ((t = n).nodeType ? u(e, n, r) : d(e, n, r));
                                                return (t = null), i;
                                            },
                                        ];
                                    c < o;
                                    c++
                                )
                                    if ((n = r.relative[e[c].type])) f = [xe(we(f), n)];
                                    else {
                                        if ((n = r.filter[e[c].type].apply(null, e[c].matches))[x]) {
                                            for (i = ++c; i < o && !r.relative[e[i].type]; i++);
                                            return Pe(
                                                1 < c && we(f),
                                                1 < c && be(e.slice(0, c - 1).concat({ value: " " === e[c - 2].type ? "*" : "" })).replace(z, "$1"),
                                                n,
                                                c < i && Se(e.slice(c, i)),
                                                i < o && Se((e = e.slice(i))),
                                                i < o && be(e)
                                            );
                                        }
                                        f.push(n);
                                    }
                                return we(f);
                            }
                            return (
                                (ye.prototype = r.filters = r.pseudos),
                                (r.setFilters = new ye()),
                                (a = se.tokenize = function (e, t) {
                                    var n,
                                        i,
                                        o,
                                        a,
                                        s,
                                        c,
                                        l,
                                        u = T[e + " "];
                                    if (u) return t ? 0 : u.slice(0);
                                    for (s = e, c = [], l = r.preFilter; s; ) {
                                        for (a in ((n && !(i = V.exec(s))) || (i && (s = s.slice(i[0].length) || s), c.push((o = []))),
                                        (n = !1),
                                        (i = $.exec(s)) && ((n = i.shift()), o.push({ value: n, type: i[0].replace(z, " ") }), (s = s.slice(n.length))),
                                        r.filter))
                                            !(i = Q[a].exec(s)) || (l[a] && !(i = l[a](i))) || ((n = i.shift()), o.push({ value: n, type: a, matches: i }), (s = s.slice(n.length)));
                                        if (!n) break;
                                    }
                                    return t ? s.length : s ? se.error(e) : T(e, c).slice(0);
                                }),
                                (s = se.compile = function (e, t) {
                                    var n,
                                        i,
                                        o,
                                        s,
                                        c,
                                        u,
                                        d = [],
                                        h = [],
                                        v = E[e + " "];
                                    if (!v) {
                                        for (t || (t = a(e)), n = t.length; n--; ) (v = Se(t[n]))[x] ? d.push(v) : h.push(v);
                                        (v = E(
                                            e,
                                            ((i = h),
                                            (s = 0 < (o = d).length),
                                            (c = 0 < i.length),
                                            (u = function (e, t, n, a, u) {
                                                var d,
                                                    h,
                                                    v,
                                                    m = 0,
                                                    y = "0",
                                                    b = e && [],
                                                    x = [],
                                                    w = l,
                                                    P = e || (c && r.find.TAG("*", u)),
                                                    S = (C += null == w ? 1 : Math.random() || 0.1),
                                                    T = P.length;
                                                for (u && (l = t == p || t || u); y !== T && null != (d = P[y]); y++) {
                                                    if (c && d) {
                                                        for (h = 0, t || d.ownerDocument == p || (f(d), (n = !g)); (v = i[h++]); )
                                                            if (v(d, t || p, n)) {
                                                                a.push(d);
                                                                break;
                                                            }
                                                        u && (C = S);
                                                    }
                                                    s && ((d = !v && d) && m--, e && b.push(d));
                                                }
                                                if (((m += y), s && y !== m)) {
                                                    for (h = 0; (v = o[h++]); ) v(b, x, t, n);
                                                    if (e) {
                                                        if (0 < m) for (; y--; ) b[y] || x[y] || (x[y] = j.call(a));
                                                        x = Ce(x);
                                                    }
                                                    N.apply(a, x), u && !e && 0 < x.length && 1 < m + o.length && se.uniqueSort(a);
                                                }
                                                return u && ((C = S), (l = w)), b;
                                            }),
                                            s ? le(u) : u)
                                        )).selector = e;
                                    }
                                    return v;
                                }),
                                (c = se.select = function (e, t, n, i) {
                                    var o,
                                        c,
                                        l,
                                        u,
                                        d,
                                        f = "function" == typeof e && e,
                                        p = !i && a((e = f.selector || e));
                                    if (((n = n || []), 1 === p.length)) {
                                        if (2 < (c = p[0] = p[0].slice(0)).length && "ID" === (l = c[0]).type && 9 === t.nodeType && g && r.relative[c[1].type]) {
                                            if (!(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0])) return n;
                                            f && (t = t.parentNode), (e = e.slice(c.shift().value.length));
                                        }
                                        for (o = Q.needsContext.test(e) ? 0 : c.length; o-- && ((l = c[o]), !r.relative[(u = l.type)]); )
                                            if ((d = r.find[u]) && (i = d(l.matches[0].replace(te, ne), (ee.test(c[0].type) && me(t.parentNode)) || t))) {
                                                if ((c.splice(o, 1), !(e = i.length && be(c)))) return N.apply(n, i), n;
                                                break;
                                            }
                                    }
                                    return (f || s(e, p))(i, t, !g, n, !t || (ee.test(e) && me(t.parentNode)) || t), n;
                                }),
                                (n.sortStable = x.split("").sort(D).join("") === x),
                                (n.detectDuplicates = !!d),
                                f(),
                                (n.sortDetached = ue(function (e) {
                                    return 1 & e.compareDocumentPosition(p.createElement("fieldset"));
                                })),
                                ue(function (e) {
                                    return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
                                }) ||
                                    de("type|href|height|width", function (e, t, n) {
                                        if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                                    }),
                                (n.attributes &&
                                    ue(function (e) {
                                        return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                                    })) ||
                                    de("value", function (e, t, n) {
                                        if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                                    }),
                                ue(function (e) {
                                    return null == e.getAttribute("disabled");
                                }) ||
                                    de(F, function (e, t, n) {
                                        var r;
                                        if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
                                    }),
                                se
                            );
                        })(r);
                        (S.find = E), (S.expr = E.selectors), (S.expr[":"] = S.expr.pseudos), (S.uniqueSort = S.unique = E.uniqueSort), (S.text = E.getText), (S.isXMLDoc = E.isXML), (S.contains = E.contains), (S.escapeSelector = E.escape);
                        var I = function (e, t, n) {
                                for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                                    if (1 === e.nodeType) {
                                        if (i && S(e).is(n)) break;
                                        r.push(e);
                                    }
                                return r;
                            },
                            D = function (e, t) {
                                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                                return n;
                            },
                            k = S.expr.match.needsContext;
                        function A(e, t) {
                            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
                        }
                        var j = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
                        function H(e, t, n) {
                            return m(t)
                                ? S.grep(e, function (e, r) {
                                      return !!t.call(e, r, e) !== n;
                                  })
                                : t.nodeType
                                ? S.grep(e, function (e) {
                                      return (e === t) !== n;
                                  })
                                : "string" != typeof t
                                ? S.grep(e, function (e) {
                                      return -1 < u.call(t, e) !== n;
                                  })
                                : S.filter(t, e, n);
                        }
                        (S.filter = function (e, t, n) {
                            var r = t[0];
                            return (
                                n && (e = ":not(" + e + ")"),
                                1 === t.length && 1 === r.nodeType
                                    ? S.find.matchesSelector(r, e)
                                        ? [r]
                                        : []
                                    : S.find.matches(
                                          e,
                                          S.grep(t, function (e) {
                                              return 1 === e.nodeType;
                                          })
                                      )
                            );
                        }),
                            S.fn.extend({
                                find: function (e) {
                                    var t,
                                        n,
                                        r = this.length,
                                        i = this;
                                    if ("string" != typeof e)
                                        return this.pushStack(
                                            S(e).filter(function () {
                                                for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0;
                                            })
                                        );
                                    for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
                                    return 1 < r ? S.uniqueSort(n) : n;
                                },
                                filter: function (e) {
                                    return this.pushStack(H(this, e || [], !1));
                                },
                                not: function (e) {
                                    return this.pushStack(H(this, e || [], !0));
                                },
                                is: function (e) {
                                    return !!H(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length;
                                },
                            });
                        var N,
                            L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                        ((S.fn.init = function (e, t, n) {
                            var r, i;
                            if (!e) return this;
                            if (((n = n || N), "string" == typeof e)) {
                                if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || (!r[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                                if (r[1]) {
                                    if (((t = t instanceof S ? t[0] : t), S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : b, !0)), j.test(r[1]) && S.isPlainObject(t)))
                                        for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                                    return this;
                                }
                                return (i = b.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this;
                            }
                            return e.nodeType ? ((this[0] = e), (this.length = 1), this) : m(e) ? (void 0 !== n.ready ? n.ready(e) : e(S)) : S.makeArray(e, this);
                        }).prototype = S.fn),
                            (N = S(b));
                        var O = /^(?:parents|prev(?:Until|All))/,
                            F = { children: !0, contents: !0, next: !0, prev: !0 };
                        function q(e, t) {
                            for (; (e = e[t]) && 1 !== e.nodeType; );
                            return e;
                        }
                        S.fn.extend({
                            has: function (e) {
                                var t = S(e, this),
                                    n = t.length;
                                return this.filter(function () {
                                    for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
                                });
                            },
                            closest: function (e, t) {
                                var n,
                                    r = 0,
                                    i = this.length,
                                    o = [],
                                    a = "string" != typeof e && S(e);
                                if (!k.test(e))
                                    for (; r < i; r++)
                                        for (n = this[r]; n && n !== t; n = n.parentNode)
                                            if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                                                o.push(n);
                                                break;
                                            }
                                return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
                            },
                            index: function (e) {
                                return e ? ("string" == typeof e ? u.call(S(e), this[0]) : u.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                            },
                            add: function (e, t) {
                                return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
                            },
                            addBack: function (e) {
                                return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
                            },
                        }),
                            S.each(
                                {
                                    parent: function (e) {
                                        var t = e.parentNode;
                                        return t && 11 !== t.nodeType ? t : null;
                                    },
                                    parents: function (e) {
                                        return I(e, "parentNode");
                                    },
                                    parentsUntil: function (e, t, n) {
                                        return I(e, "parentNode", n);
                                    },
                                    next: function (e) {
                                        return q(e, "nextSibling");
                                    },
                                    prev: function (e) {
                                        return q(e, "previousSibling");
                                    },
                                    nextAll: function (e) {
                                        return I(e, "nextSibling");
                                    },
                                    prevAll: function (e) {
                                        return I(e, "previousSibling");
                                    },
                                    nextUntil: function (e, t, n) {
                                        return I(e, "nextSibling", n);
                                    },
                                    prevUntil: function (e, t, n) {
                                        return I(e, "previousSibling", n);
                                    },
                                    siblings: function (e) {
                                        return D((e.parentNode || {}).firstChild, e);
                                    },
                                    children: function (e) {
                                        return D(e.firstChild);
                                    },
                                    contents: function (e) {
                                        return null != e.contentDocument && a(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes));
                                    },
                                },
                                function (e, t) {
                                    S.fn[e] = function (n, r) {
                                        var i = S.map(this, t, n);
                                        return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = S.filter(r, i)), 1 < this.length && (F[e] || S.uniqueSort(i), O.test(e) && i.reverse()), this.pushStack(i);
                                    };
                                }
                            );
                        var R = /[^\x20\t\r\n\f]+/g;
                        function M(e) {
                            return e;
                        }
                        function B(e) {
                            throw e;
                        }
                        function U(e, t, n, r) {
                            var i;
                            try {
                                e && m((i = e.promise)) ? i.call(e).done(t).fail(n) : e && m((i = e.then)) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
                            } catch (e) {
                                n.apply(void 0, [e]);
                            }
                        }
                        (S.Callbacks = function (e) {
                            var t, n;
                            e =
                                "string" == typeof e
                                    ? ((t = e),
                                      (n = {}),
                                      S.each(t.match(R) || [], function (e, t) {
                                          n[t] = !0;
                                      }),
                                      n)
                                    : S.extend({}, e);
                            var r,
                                i,
                                o,
                                a,
                                s = [],
                                c = [],
                                l = -1,
                                u = function () {
                                    for (a = a || e.once, o = r = !0; c.length; l = -1) for (i = c.shift(); ++l < s.length; ) !1 === s[l].apply(i[0], i[1]) && e.stopOnFalse && ((l = s.length), (i = !1));
                                    e.memory || (i = !1), (r = !1), a && (s = i ? [] : "");
                                },
                                d = {
                                    add: function () {
                                        return (
                                            s &&
                                                (i && !r && ((l = s.length - 1), c.push(i)),
                                                (function t(n) {
                                                    S.each(n, function (n, r) {
                                                        m(r) ? (e.unique && d.has(r)) || s.push(r) : r && r.length && "string" !== C(r) && t(r);
                                                    });
                                                })(arguments),
                                                i && !r && u()),
                                            this
                                        );
                                    },
                                    remove: function () {
                                        return (
                                            S.each(arguments, function (e, t) {
                                                for (var n; -1 < (n = S.inArray(t, s, n)); ) s.splice(n, 1), n <= l && l--;
                                            }),
                                            this
                                        );
                                    },
                                    has: function (e) {
                                        return e ? -1 < S.inArray(e, s) : 0 < s.length;
                                    },
                                    empty: function () {
                                        return s && (s = []), this;
                                    },
                                    disable: function () {
                                        return (a = c = []), (s = i = ""), this;
                                    },
                                    disabled: function () {
                                        return !s;
                                    },
                                    lock: function () {
                                        return (a = c = []), i || r || (s = i = ""), this;
                                    },
                                    locked: function () {
                                        return !!a;
                                    },
                                    fireWith: function (e, t) {
                                        return a || ((t = [e, (t = t || []).slice ? t.slice() : t]), c.push(t), r || u()), this;
                                    },
                                    fire: function () {
                                        return d.fireWith(this, arguments), this;
                                    },
                                    fired: function () {
                                        return !!o;
                                    },
                                };
                            return d;
                        }),
                            S.extend({
                                Deferred: function (e) {
                                    var t = [
                                            ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
                                            ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
                                            ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"],
                                        ],
                                        n = "pending",
                                        i = {
                                            state: function () {
                                                return n;
                                            },
                                            always: function () {
                                                return o.done(arguments).fail(arguments), this;
                                            },
                                            catch: function (e) {
                                                return i.then(null, e);
                                            },
                                            pipe: function () {
                                                var e = arguments;
                                                return S.Deferred(function (n) {
                                                    S.each(t, function (t, r) {
                                                        var i = m(e[r[4]]) && e[r[4]];
                                                        o[r[1]](function () {
                                                            var e = i && i.apply(this, arguments);
                                                            e && m(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments);
                                                        });
                                                    }),
                                                        (e = null);
                                                }).promise();
                                            },
                                            then: function (e, n, i) {
                                                var o = 0;
                                                function a(e, t, n, i) {
                                                    return function () {
                                                        var s = this,
                                                            c = arguments,
                                                            l = function () {
                                                                var r, l;
                                                                if (!(e < o)) {
                                                                    if ((r = n.apply(s, c)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                                    (l = r && ("object" == typeof r || "function" == typeof r) && r.then),
                                                                        m(l)
                                                                            ? i
                                                                                ? l.call(r, a(o, t, M, i), a(o, t, B, i))
                                                                                : (o++, l.call(r, a(o, t, M, i), a(o, t, B, i), a(o, t, M, t.notifyWith)))
                                                                            : (n !== M && ((s = void 0), (c = [r])), (i || t.resolveWith)(s, c));
                                                                }
                                                            },
                                                            u = i
                                                                ? l
                                                                : function () {
                                                                      try {
                                                                          l();
                                                                      } catch (r) {
                                                                          S.Deferred.exceptionHook && S.Deferred.exceptionHook(r, u.stackTrace), o <= e + 1 && (n !== B && ((s = void 0), (c = [r])), t.rejectWith(s, c));
                                                                      }
                                                                  };
                                                        e ? u() : (S.Deferred.getStackHook && (u.stackTrace = S.Deferred.getStackHook()), r.setTimeout(u));
                                                    };
                                                }
                                                return S.Deferred(function (r) {
                                                    t[0][3].add(a(0, r, m(i) ? i : M, r.notifyWith)), t[1][3].add(a(0, r, m(e) ? e : M)), t[2][3].add(a(0, r, m(n) ? n : B));
                                                }).promise();
                                            },
                                            promise: function (e) {
                                                return null != e ? S.extend(e, i) : i;
                                            },
                                        },
                                        o = {};
                                    return (
                                        S.each(t, function (e, r) {
                                            var a = r[2],
                                                s = r[5];
                                            (i[r[1]] = a.add),
                                                s &&
                                                    a.add(
                                                        function () {
                                                            n = s;
                                                        },
                                                        t[3 - e][2].disable,
                                                        t[3 - e][3].disable,
                                                        t[0][2].lock,
                                                        t[0][3].lock
                                                    ),
                                                a.add(r[3].fire),
                                                (o[r[0]] = function () {
                                                    return o[r[0] + "With"](this === o ? void 0 : this, arguments), this;
                                                }),
                                                (o[r[0] + "With"] = a.fireWith);
                                        }),
                                        i.promise(o),
                                        e && e.call(o, o),
                                        o
                                    );
                                },
                                when: function (e) {
                                    var t = arguments.length,
                                        n = t,
                                        r = Array(n),
                                        i = s.call(arguments),
                                        o = S.Deferred(),
                                        a = function (e) {
                                            return function (n) {
                                                (r[e] = this), (i[e] = 1 < arguments.length ? s.call(arguments) : n), --t || o.resolveWith(r, i);
                                            };
                                        };
                                    if (t <= 1 && (U(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || m(i[n] && i[n].then))) return o.then();
                                    for (; n--; ) U(i[n], a(n), o.reject);
                                    return o.promise();
                                },
                            });
                        var z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                        (S.Deferred.exceptionHook = function (e, t) {
                            r.console && r.console.warn && e && z.test(e.name) && r.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
                        }),
                            (S.readyException = function (e) {
                                r.setTimeout(function () {
                                    throw e;
                                });
                            });
                        var V = S.Deferred();
                        function $() {
                            b.removeEventListener("DOMContentLoaded", $), r.removeEventListener("load", $), S.ready();
                        }
                        (S.fn.ready = function (e) {
                            return (
                                V.then(e).catch(function (e) {
                                    S.readyException(e);
                                }),
                                this
                            );
                        }),
                            S.extend({
                                isReady: !1,
                                readyWait: 1,
                                ready: function (e) {
                                    (!0 === e ? --S.readyWait : S.isReady) || ((S.isReady = !0) !== e && 0 < --S.readyWait) || V.resolveWith(b, [S]);
                                },
                            }),
                            (S.ready.then = V.then),
                            "complete" === b.readyState || ("loading" !== b.readyState && !b.documentElement.doScroll) ? r.setTimeout(S.ready) : (b.addEventListener("DOMContentLoaded", $), r.addEventListener("load", $));
                        var _ = function (e, t, n, r, i, o, a) {
                                var s = 0,
                                    c = e.length,
                                    l = null == n;
                                if ("object" === C(n)) for (s in ((i = !0), n)) _(e, t, s, n[s], !0, o, a);
                                else if (
                                    void 0 !== r &&
                                    ((i = !0),
                                    m(r) || (a = !0),
                                    l &&
                                        (a
                                            ? (t.call(e, r), (t = null))
                                            : ((l = t),
                                              (t = function (e, t, n) {
                                                  return l.call(S(e), n);
                                              }))),
                                    t)
                                )
                                    for (; s < c; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                                return i ? e : l ? t.call(e) : c ? t(e[0], n) : o;
                            },
                            X = /^-ms-/,
                            W = /-([a-z])/g;
                        function Q(e, t) {
                            return t.toUpperCase();
                        }
                        function J(e) {
                            return e.replace(X, "ms-").replace(W, Q);
                        }
                        var Y = function (e) {
                            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
                        };
                        function G() {
                            this.expando = S.expando + G.uid++;
                        }
                        (G.uid = 1),
                            (G.prototype = {
                                cache: function (e) {
                                    var t = e[this.expando];
                                    return t || ((t = {}), Y(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
                                },
                                set: function (e, t, n) {
                                    var r,
                                        i = this.cache(e);
                                    if ("string" == typeof t) i[J(t)] = n;
                                    else for (r in t) i[J(r)] = t[r];
                                    return i;
                                },
                                get: function (e, t) {
                                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][J(t)];
                                },
                                access: function (e, t, n) {
                                    return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
                                },
                                remove: function (e, t) {
                                    var n,
                                        r = e[this.expando];
                                    if (void 0 !== r) {
                                        if (void 0 !== t) {
                                            n = (t = Array.isArray(t) ? t.map(J) : (t = J(t)) in r ? [t] : t.match(R) || []).length;
                                            for (; n--; ) delete r[t[n]];
                                        }
                                        (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                                    }
                                },
                                hasData: function (e) {
                                    var t = e[this.expando];
                                    return void 0 !== t && !S.isEmptyObject(t);
                                },
                            });
                        var K = new G(),
                            Z = new G(),
                            ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                            te = /[A-Z]/g;
                        function ne(e, t, n) {
                            var r, i;
                            if (void 0 === n && 1 === e.nodeType)
                                if (((r = "data-" + t.replace(te, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(r)))) {
                                    try {
                                        n = "true" === (i = n) || ("false" !== i && ("null" === i ? null : i === +i + "" ? +i : ee.test(i) ? JSON.parse(i) : i));
                                    } catch (e) {}
                                    Z.set(e, t, n);
                                } else n = void 0;
                            return n;
                        }
                        S.extend({
                            hasData: function (e) {
                                return Z.hasData(e) || K.hasData(e);
                            },
                            data: function (e, t, n) {
                                return Z.access(e, t, n);
                            },
                            removeData: function (e, t) {
                                Z.remove(e, t);
                            },
                            _data: function (e, t, n) {
                                return K.access(e, t, n);
                            },
                            _removeData: function (e, t) {
                                K.remove(e, t);
                            },
                        }),
                            S.fn.extend({
                                data: function (e, t) {
                                    var n,
                                        r,
                                        i,
                                        o = this[0],
                                        a = o && o.attributes;
                                    if (void 0 === e) {
                                        if (this.length && ((i = Z.get(o)), 1 === o.nodeType && !K.get(o, "hasDataAttrs"))) {
                                            for (n = a.length; n--; ) a[n] && 0 === (r = a[n].name).indexOf("data-") && ((r = J(r.slice(5))), ne(o, r, i[r]));
                                            K.set(o, "hasDataAttrs", !0);
                                        }
                                        return i;
                                    }
                                    return "object" == typeof e
                                        ? this.each(function () {
                                              Z.set(this, e);
                                          })
                                        : _(
                                              this,
                                              function (t) {
                                                  var n;
                                                  if (o && void 0 === t) return void 0 !== (n = Z.get(o, e)) || void 0 !== (n = ne(o, e)) ? n : void 0;
                                                  this.each(function () {
                                                      Z.set(this, e, t);
                                                  });
                                              },
                                              null,
                                              t,
                                              1 < arguments.length,
                                              null,
                                              !0
                                          );
                                },
                                removeData: function (e) {
                                    return this.each(function () {
                                        Z.remove(this, e);
                                    });
                                },
                            }),
                            S.extend({
                                queue: function (e, t, n) {
                                    var r;
                                    if (e) return (t = (t || "fx") + "queue"), (r = K.get(e, t)), n && (!r || Array.isArray(n) ? (r = K.access(e, t, S.makeArray(n))) : r.push(n)), r || [];
                                },
                                dequeue: function (e, t) {
                                    t = t || "fx";
                                    var n = S.queue(e, t),
                                        r = n.length,
                                        i = n.shift(),
                                        o = S._queueHooks(e, t);
                                    "inprogress" === i && ((i = n.shift()), r--),
                                        i &&
                                            ("fx" === t && n.unshift("inprogress"),
                                            delete o.stop,
                                            i.call(
                                                e,
                                                function () {
                                                    S.dequeue(e, t);
                                                },
                                                o
                                            )),
                                        !r && o && o.empty.fire();
                                },
                                _queueHooks: function (e, t) {
                                    var n = t + "queueHooks";
                                    return (
                                        K.get(e, n) ||
                                        K.access(e, n, {
                                            empty: S.Callbacks("once memory").add(function () {
                                                K.remove(e, [t + "queue", n]);
                                            }),
                                        })
                                    );
                                },
                            }),
                            S.fn.extend({
                                queue: function (e, t) {
                                    var n = 2;
                                    return (
                                        "string" != typeof e && ((t = e), (e = "fx"), n--),
                                        arguments.length < n
                                            ? S.queue(this[0], e)
                                            : void 0 === t
                                            ? this
                                            : this.each(function () {
                                                  var n = S.queue(this, e, t);
                                                  S._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && S.dequeue(this, e);
                                              })
                                    );
                                },
                                dequeue: function (e) {
                                    return this.each(function () {
                                        S.dequeue(this, e);
                                    });
                                },
                                clearQueue: function (e) {
                                    return this.queue(e || "fx", []);
                                },
                                promise: function (e, t) {
                                    var n,
                                        r = 1,
                                        i = S.Deferred(),
                                        o = this,
                                        a = this.length,
                                        s = function () {
                                            --r || i.resolveWith(o, [o]);
                                        };
                                    for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; a--; ) (n = K.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                                    return s(), i.promise(t);
                                },
                            });
                        var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                            ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
                            oe = ["Top", "Right", "Bottom", "Left"],
                            ae = b.documentElement,
                            se = function (e) {
                                return S.contains(e.ownerDocument, e);
                            },
                            ce = { composed: !0 };
                        ae.getRootNode &&
                            (se = function (e) {
                                return S.contains(e.ownerDocument, e) || e.getRootNode(ce) === e.ownerDocument;
                            });
                        var le = function (e, t) {
                            return "none" === (e = t || e).style.display || ("" === e.style.display && se(e) && "none" === S.css(e, "display"));
                        };
                        function ue(e, t, n, r) {
                            var i,
                                o,
                                a = 20,
                                s = r
                                    ? function () {
                                          return r.cur();
                                      }
                                    : function () {
                                          return S.css(e, t, "");
                                      },
                                c = s(),
                                l = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
                                u = e.nodeType && (S.cssNumber[t] || ("px" !== l && +c)) && ie.exec(S.css(e, t));
                            if (u && u[3] !== l) {
                                for (c /= 2, l = l || u[3], u = +c || 1; a--; ) S.style(e, t, u + l), (1 - o) * (1 - (o = s() / c || 0.5)) <= 0 && (a = 0), (u /= o);
                                (u *= 2), S.style(e, t, u + l), (n = n || []);
                            }
                            return n && ((u = +u || +c || 0), (i = n[1] ? u + (n[1] + 1) * n[2] : +n[2]), r && ((r.unit = l), (r.start = u), (r.end = i))), i;
                        }
                        var de = {};
                        function fe(e, t) {
                            for (var n, r, i, o, a, s, c, l = [], u = 0, d = e.length; u < d; u++)
                                (r = e[u]).style &&
                                    ((n = r.style.display),
                                    t
                                        ? ("none" === n && ((l[u] = K.get(r, "display") || null), l[u] || (r.style.display = "")),
                                          "" === r.style.display &&
                                              le(r) &&
                                              (l[u] =
                                                  ((c = a = o = void 0),
                                                  (a = (i = r).ownerDocument),
                                                  (s = i.nodeName),
                                                  (c = de[s]) || ((o = a.body.appendChild(a.createElement(s))), (c = S.css(o, "display")), o.parentNode.removeChild(o), "none" === c && (c = "block"), (de[s] = c)))))
                                        : "none" !== n && ((l[u] = "none"), K.set(r, "display", n)));
                            for (u = 0; u < d; u++) null != l[u] && (e[u].style.display = l[u]);
                            return e;
                        }
                        S.fn.extend({
                            show: function () {
                                return fe(this, !0);
                            },
                            hide: function () {
                                return fe(this);
                            },
                            toggle: function (e) {
                                return "boolean" == typeof e
                                    ? e
                                        ? this.show()
                                        : this.hide()
                                    : this.each(function () {
                                          le(this) ? S(this).show() : S(this).hide();
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
                            return (n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : []), void 0 === t || (t && A(e, t)) ? S.merge([e], n) : n;
                        }
                        function xe(e, t) {
                            for (var n = 0, r = e.length; n < r; n++) K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"));
                        }
                        (ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead), (ye.th = ye.td), v.option || (ye.optgroup = ye.option = [1, "<select multiple='multiple'>", "</select>"]);
                        var we = /<|&#?\w+;/;
                        function Ce(e, t, n, r, i) {
                            for (var o, a, s, c, l, u, d = t.createDocumentFragment(), f = [], p = 0, h = e.length; p < h; p++)
                                if ((o = e[p]) || 0 === o)
                                    if ("object" === C(o)) S.merge(f, o.nodeType ? [o] : o);
                                    else if (we.test(o)) {
                                        for (a = a || d.appendChild(t.createElement("div")), s = (ve.exec(o) || ["", ""])[1].toLowerCase(), c = ye[s] || ye._default, a.innerHTML = c[1] + S.htmlPrefilter(o) + c[2], u = c[0]; u--; )
                                            a = a.lastChild;
                                        S.merge(f, a.childNodes), ((a = d.firstChild).textContent = "");
                                    } else f.push(t.createTextNode(o));
                            for (d.textContent = "", p = 0; (o = f[p++]); )
                                if (r && -1 < S.inArray(o, r)) i && i.push(o);
                                else if (((l = se(o)), (a = be(d.appendChild(o), "script")), l && xe(a), n)) for (u = 0; (o = a[u++]); ) me.test(o.type || "") && n.push(o);
                            return d;
                        }
                        var Pe = /^key/,
                            Se = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                            Te = /^([^.]*)(?:\.(.+)|)/;
                        function Ee() {
                            return !0;
                        }
                        function Ie() {
                            return !1;
                        }
                        function De(e, t) {
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
                        function ke(e, t, n, r, i, o) {
                            var a, s;
                            if ("object" == typeof t) {
                                for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t)) ke(e, s, n, r, t[s], o);
                                return e;
                            }
                            if ((null == r && null == i ? ((i = n), (r = n = void 0)) : null == i && ("string" == typeof n ? ((i = r), (r = void 0)) : ((i = r), (r = n), (n = void 0))), !1 === i)) i = Ie;
                            else if (!i) return e;
                            return (
                                1 === o &&
                                    ((a = i),
                                    ((i = function (e) {
                                        return S().off(e), a.apply(this, arguments);
                                    }).guid = a.guid || (a.guid = S.guid++))),
                                e.each(function () {
                                    S.event.add(this, t, i, r, n);
                                })
                            );
                        }
                        function Ae(e, t, n) {
                            n
                                ? (K.set(e, t, !1),
                                  S.event.add(e, t, {
                                      namespace: !1,
                                      handler: function (e) {
                                          var r,
                                              i,
                                              o = K.get(this, t);
                                          if (1 & e.isTrigger && this[t]) {
                                              if (o.length) (S.event.special[t] || {}).delegateType && e.stopPropagation();
                                              else if (((o = s.call(arguments)), K.set(this, t, o), (r = n(this, t)), this[t](), o !== (i = K.get(this, t)) || r ? K.set(this, t, !1) : (i = {}), o !== i))
                                                  return e.stopImmediatePropagation(), e.preventDefault(), i.value;
                                          } else o.length && (K.set(this, t, { value: S.event.trigger(S.extend(o[0], S.Event.prototype), o.slice(1), this) }), e.stopImmediatePropagation());
                                      },
                                  }))
                                : void 0 === K.get(e, t) && S.event.add(e, t, Ee);
                        }
                        (S.event = {
                            global: {},
                            add: function (e, t, n, r, i) {
                                var o,
                                    a,
                                    s,
                                    c,
                                    l,
                                    u,
                                    d,
                                    f,
                                    p,
                                    h,
                                    g,
                                    v = K.get(e);
                                if (Y(e))
                                    for (
                                        n.handler && ((n = (o = n).handler), (i = o.selector)),
                                            i && S.find.matchesSelector(ae, i),
                                            n.guid || (n.guid = S.guid++),
                                            (c = v.events) || (c = v.events = Object.create(null)),
                                            (a = v.handle) ||
                                                (a = v.handle = function (t) {
                                                    return void 0 !== S && S.event.triggered !== t.type ? S.event.dispatch.apply(e, arguments) : void 0;
                                                }),
                                            l = (t = (t || "").match(R) || [""]).length;
                                        l--;

                                    )
                                        (p = g = (s = Te.exec(t[l]) || [])[1]),
                                            (h = (s[2] || "").split(".").sort()),
                                            p &&
                                                ((d = S.event.special[p] || {}),
                                                (p = (i ? d.delegateType : d.bindType) || p),
                                                (d = S.event.special[p] || {}),
                                                (u = S.extend({ type: p, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && S.expr.match.needsContext.test(i), namespace: h.join(".") }, o)),
                                                (f = c[p]) || (((f = c[p] = []).delegateCount = 0), (d.setup && !1 !== d.setup.call(e, r, h, a)) || (e.addEventListener && e.addEventListener(p, a))),
                                                d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)),
                                                i ? f.splice(f.delegateCount++, 0, u) : f.push(u),
                                                (S.event.global[p] = !0));
                            },
                            remove: function (e, t, n, r, i) {
                                var o,
                                    a,
                                    s,
                                    c,
                                    l,
                                    u,
                                    d,
                                    f,
                                    p,
                                    h,
                                    g,
                                    v = K.hasData(e) && K.get(e);
                                if (v && (c = v.events)) {
                                    for (l = (t = (t || "").match(R) || [""]).length; l--; )
                                        if (((p = g = (s = Te.exec(t[l]) || [])[1]), (h = (s[2] || "").split(".").sort()), p)) {
                                            for (d = S.event.special[p] || {}, f = c[(p = (r ? d.delegateType : d.bindType) || p)] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = f.length; o--; )
                                                (u = f[o]),
                                                    (!i && g !== u.origType) ||
                                                        (n && n.guid !== u.guid) ||
                                                        (s && !s.test(u.namespace)) ||
                                                        (r && r !== u.selector && ("**" !== r || !u.selector)) ||
                                                        (f.splice(o, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
                                            a && !f.length && ((d.teardown && !1 !== d.teardown.call(e, h, v.handle)) || S.removeEvent(e, p, v.handle), delete c[p]);
                                        } else for (p in c) S.event.remove(e, p + t[l], n, r, !0);
                                    S.isEmptyObject(c) && K.remove(e, "handle events");
                                }
                            },
                            dispatch: function (e) {
                                var t,
                                    n,
                                    r,
                                    i,
                                    o,
                                    a,
                                    s = new Array(arguments.length),
                                    c = S.event.fix(e),
                                    l = (K.get(this, "events") || Object.create(null))[c.type] || [],
                                    u = S.event.special[c.type] || {};
                                for (s[0] = c, t = 1; t < arguments.length; t++) s[t] = arguments[t];
                                if (((c.delegateTarget = this), !u.preDispatch || !1 !== u.preDispatch.call(this, c))) {
                                    for (a = S.event.handlers.call(this, c, l), t = 0; (i = a[t++]) && !c.isPropagationStopped(); )
                                        for (c.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !c.isImmediatePropagationStopped(); )
                                            (c.rnamespace && !1 !== o.namespace && !c.rnamespace.test(o.namespace)) ||
                                                ((c.handleObj = o),
                                                (c.data = o.data),
                                                void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (c.result = r) && (c.preventDefault(), c.stopPropagation()));
                                    return u.postDispatch && u.postDispatch.call(this, c), c.result;
                                }
                            },
                            handlers: function (e, t) {
                                var n,
                                    r,
                                    i,
                                    o,
                                    a,
                                    s = [],
                                    c = t.delegateCount,
                                    l = e.target;
                                if (c && l.nodeType && !("click" === e.type && 1 <= e.button))
                                    for (; l !== this; l = l.parentNode || this)
                                        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                                            for (o = [], a = {}, n = 0; n < c; n++) void 0 === a[(i = (r = t[n]).selector + " ")] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
                                            o.length && s.push({ elem: l, handlers: o });
                                        }
                                return (l = this), c < t.length && s.push({ elem: l, handlers: t.slice(c) }), s;
                            },
                            addProp: function (e, t) {
                                Object.defineProperty(S.Event.prototype, e, {
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
                                        Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
                                    },
                                });
                            },
                            fix: function (e) {
                                return e[S.expando] ? e : new S.Event(e);
                            },
                            special: {
                                load: { noBubble: !0 },
                                click: {
                                    setup: function (e) {
                                        var t = this || e;
                                        return ge.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ee), !1;
                                    },
                                    trigger: function (e) {
                                        var t = this || e;
                                        return ge.test(t.type) && t.click && A(t, "input") && Ae(t, "click"), !0;
                                    },
                                    _default: function (e) {
                                        var t = e.target;
                                        return (ge.test(t.type) && t.click && A(t, "input") && K.get(t, "click")) || A(t, "a");
                                    },
                                },
                                beforeunload: {
                                    postDispatch: function (e) {
                                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                                    },
                                },
                            },
                        }),
                            (S.removeEvent = function (e, t, n) {
                                e.removeEventListener && e.removeEventListener(t, n);
                            }),
                            (S.Event = function (e, t) {
                                if (!(this instanceof S.Event)) return new S.Event(e, t);
                                e && e.type
                                    ? ((this.originalEvent = e),
                                      (this.type = e.type),
                                      (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? Ee : Ie),
                                      (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                                      (this.currentTarget = e.currentTarget),
                                      (this.relatedTarget = e.relatedTarget))
                                    : (this.type = e),
                                    t && S.extend(this, t),
                                    (this.timeStamp = (e && e.timeStamp) || Date.now()),
                                    (this[S.expando] = !0);
                            }),
                            (S.Event.prototype = {
                                constructor: S.Event,
                                isDefaultPrevented: Ie,
                                isPropagationStopped: Ie,
                                isImmediatePropagationStopped: Ie,
                                isSimulated: !1,
                                preventDefault: function () {
                                    var e = this.originalEvent;
                                    (this.isDefaultPrevented = Ee), e && !this.isSimulated && e.preventDefault();
                                },
                                stopPropagation: function () {
                                    var e = this.originalEvent;
                                    (this.isPropagationStopped = Ee), e && !this.isSimulated && e.stopPropagation();
                                },
                                stopImmediatePropagation: function () {
                                    var e = this.originalEvent;
                                    (this.isImmediatePropagationStopped = Ee), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
                                },
                            }),
                            S.each(
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
                                        return null == e.which && Pe.test(e.type) ? (null != e.charCode ? e.charCode : e.keyCode) : !e.which && void 0 !== t && Se.test(e.type) ? (1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0) : e.which;
                                    },
                                },
                                S.event.addProp
                            ),
                            S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                                S.event.special[e] = {
                                    setup: function () {
                                        return Ae(this, e, De), !1;
                                    },
                                    trigger: function () {
                                        return Ae(this, e), !0;
                                    },
                                    delegateType: t,
                                };
                            }),
                            S.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
                                S.event.special[e] = {
                                    delegateType: t,
                                    bindType: t,
                                    handle: function (e) {
                                        var n,
                                            r = e.relatedTarget,
                                            i = e.handleObj;
                                        return (r && (r === this || S.contains(this, r))) || ((e.type = i.origType), (n = i.handler.apply(this, arguments)), (e.type = t)), n;
                                    },
                                };
                            }),
                            S.fn.extend({
                                on: function (e, t, n, r) {
                                    return ke(this, e, t, n, r);
                                },
                                one: function (e, t, n, r) {
                                    return ke(this, e, t, n, r, 1);
                                },
                                off: function (e, t, n) {
                                    var r, i;
                                    if (e && e.preventDefault && e.handleObj) return (r = e.handleObj), S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                                    if ("object" == typeof e) {
                                        for (i in e) this.off(i, t, e[i]);
                                        return this;
                                    }
                                    return (
                                        (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                                        !1 === n && (n = Ie),
                                        this.each(function () {
                                            S.event.remove(this, e, n, t);
                                        })
                                    );
                                },
                            });
                        var je = /<script|<style|<link/i,
                            He = /checked\s*(?:[^=]|=\s*.checked.)/i,
                            Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
                        function Le(e, t) {
                            return (A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0]) || e;
                        }
                        function Oe(e) {
                            return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
                        }
                        function Fe(e) {
                            return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
                        }
                        function qe(e, t) {
                            var n, r, i, o, a, s;
                            if (1 === t.nodeType) {
                                if (K.hasData(e) && (s = K.get(e).events)) for (i in (K.remove(t, "handle events"), s)) for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
                                Z.hasData(e) && ((o = Z.access(e)), (a = S.extend({}, o)), Z.set(t, a));
                            }
                        }
                        function Re(e, t, n, r) {
                            t = c(t);
                            var i,
                                o,
                                a,
                                s,
                                l,
                                u,
                                d = 0,
                                f = e.length,
                                p = f - 1,
                                h = t[0],
                                g = m(h);
                            if (g || (1 < f && "string" == typeof h && !v.checkClone && He.test(h)))
                                return e.each(function (i) {
                                    var o = e.eq(i);
                                    g && (t[0] = h.call(this, i, o.html())), Re(o, t, n, r);
                                });
                            if (f && ((o = (i = Ce(t, e[0].ownerDocument, !1, e, r)).firstChild), 1 === i.childNodes.length && (i = o), o || r)) {
                                for (s = (a = S.map(be(i, "script"), Oe)).length; d < f; d++) (l = i), d !== p && ((l = S.clone(l, !0, !0)), s && S.merge(a, be(l, "script"))), n.call(e[d], l, d);
                                if (s)
                                    for (u = a[a.length - 1].ownerDocument, S.map(a, Fe), d = 0; d < s; d++)
                                        (l = a[d]),
                                            me.test(l.type || "") &&
                                                !K.access(l, "globalEval") &&
                                                S.contains(u, l) &&
                                                (l.src && "module" !== (l.type || "").toLowerCase()
                                                    ? S._evalUrl && !l.noModule && S._evalUrl(l.src, { nonce: l.nonce || l.getAttribute("nonce") }, u)
                                                    : w(l.textContent.replace(Ne, ""), l, u));
                            }
                            return e;
                        }
                        function Me(e, t, n) {
                            for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(be(r)), r.parentNode && (n && se(r) && xe(be(r, "script")), r.parentNode.removeChild(r));
                            return e;
                        }
                        S.extend({
                            htmlPrefilter: function (e) {
                                return e;
                            },
                            clone: function (e, t, n) {
                                var r,
                                    i,
                                    o,
                                    a,
                                    s,
                                    c,
                                    l,
                                    u = e.cloneNode(!0),
                                    d = se(e);
                                if (!(v.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || S.isXMLDoc(e)))
                                    for (a = be(u), r = 0, i = (o = be(e)).length; r < i; r++)
                                        (s = o[r]), "input" === (l = (c = a[r]).nodeName.toLowerCase()) && ge.test(s.type) ? (c.checked = s.checked) : ("input" !== l && "textarea" !== l) || (c.defaultValue = s.defaultValue);
                                if (t)
                                    if (n) for (o = o || be(e), a = a || be(u), r = 0, i = o.length; r < i; r++) qe(o[r], a[r]);
                                    else qe(e, u);
                                return 0 < (a = be(u, "script")).length && xe(a, !d && be(e, "script")), u;
                            },
                            cleanData: function (e) {
                                for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                                    if (Y(n)) {
                                        if ((t = n[K.expando])) {
                                            if (t.events) for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                                            n[K.expando] = void 0;
                                        }
                                        n[Z.expando] && (n[Z.expando] = void 0);
                                    }
                            },
                        }),
                            S.fn.extend({
                                detach: function (e) {
                                    return Me(this, e, !0);
                                },
                                remove: function (e) {
                                    return Me(this, e);
                                },
                                text: function (e) {
                                    return _(
                                        this,
                                        function (e) {
                                            return void 0 === e
                                                ? S.text(this)
                                                : this.empty().each(function () {
                                                      (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                                                  });
                                        },
                                        null,
                                        e,
                                        arguments.length
                                    );
                                },
                                append: function () {
                                    return Re(this, arguments, function (e) {
                                        (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Le(this, e).appendChild(e);
                                    });
                                },
                                prepend: function () {
                                    return Re(this, arguments, function (e) {
                                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
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
                                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                                    });
                                },
                                empty: function () {
                                    for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(be(e, !1)), (e.textContent = ""));
                                    return this;
                                },
                                clone: function (e, t) {
                                    return (
                                        (e = null != e && e),
                                        (t = null == t ? e : t),
                                        this.map(function () {
                                            return S.clone(this, e, t);
                                        })
                                    );
                                },
                                html: function (e) {
                                    return _(
                                        this,
                                        function (e) {
                                            var t = this[0] || {},
                                                n = 0,
                                                r = this.length;
                                            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                                            if ("string" == typeof e && !je.test(e) && !ye[(ve.exec(e) || ["", ""])[1].toLowerCase()]) {
                                                e = S.htmlPrefilter(e);
                                                try {
                                                    for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(be(t, !1)), (t.innerHTML = e));
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
                                            S.inArray(this, e) < 0 && (S.cleanData(be(this)), n && n.replaceChild(t, this));
                                        },
                                        e
                                    );
                                },
                            }),
                            S.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
                                S.fn[e] = function (e) {
                                    for (var n, r = [], i = S(e), o = i.length - 1, a = 0; a <= o; a++) (n = a === o ? this : this.clone(!0)), S(i[a])[t](n), l.apply(r, n.get());
                                    return this.pushStack(r);
                                };
                            });
                        var Be = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
                            Ue = function (e) {
                                var t = e.ownerDocument.defaultView;
                                return (t && t.opener) || (t = r), t.getComputedStyle(e);
                            },
                            ze = function (e, t, n) {
                                var r,
                                    i,
                                    o = {};
                                for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
                                for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
                                return r;
                            },
                            Ve = new RegExp(oe.join("|"), "i");
                        function $e(e, t, n) {
                            var r,
                                i,
                                o,
                                a,
                                s = e.style;
                            return (
                                (n = n || Ue(e)) &&
                                    ("" !== (a = n.getPropertyValue(t) || n[t]) || se(e) || (a = S.style(e, t)),
                                    !v.pixelBoxStyles() &&
                                        Be.test(a) &&
                                        Ve.test(t) &&
                                        ((r = s.width), (i = s.minWidth), (o = s.maxWidth), (s.minWidth = s.maxWidth = s.width = a), (a = n.width), (s.width = r), (s.minWidth = i), (s.maxWidth = o))),
                                void 0 !== a ? a + "" : a
                            );
                        }
                        function _e(e, t) {
                            return {
                                get: function () {
                                    if (!e()) return (this.get = t).apply(this, arguments);
                                    delete this.get;
                                },
                            };
                        }
                        !(function () {
                            function e() {
                                if (u) {
                                    (l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                                        (u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                                        ae.appendChild(l).appendChild(u);
                                    var e = r.getComputedStyle(u);
                                    (n = "1%" !== e.top),
                                        (c = 12 === t(e.marginLeft)),
                                        (u.style.right = "60%"),
                                        (a = 36 === t(e.right)),
                                        (i = 36 === t(e.width)),
                                        (u.style.position = "absolute"),
                                        (o = 12 === t(u.offsetWidth / 3)),
                                        ae.removeChild(l),
                                        (u = null);
                                }
                            }
                            function t(e) {
                                return Math.round(parseFloat(e));
                            }
                            var n,
                                i,
                                o,
                                a,
                                s,
                                c,
                                l = b.createElement("div"),
                                u = b.createElement("div");
                            u.style &&
                                ((u.style.backgroundClip = "content-box"),
                                (u.cloneNode(!0).style.backgroundClip = ""),
                                (v.clearCloneStyle = "content-box" === u.style.backgroundClip),
                                S.extend(v, {
                                    boxSizingReliable: function () {
                                        return e(), i;
                                    },
                                    pixelBoxStyles: function () {
                                        return e(), a;
                                    },
                                    pixelPosition: function () {
                                        return e(), n;
                                    },
                                    reliableMarginLeft: function () {
                                        return e(), c;
                                    },
                                    scrollboxSize: function () {
                                        return e(), o;
                                    },
                                    reliableTrDimensions: function () {
                                        var e, t, n, i;
                                        return (
                                            null == s &&
                                                ((e = b.createElement("table")),
                                                (t = b.createElement("tr")),
                                                (n = b.createElement("div")),
                                                (e.style.cssText = "position:absolute;left:-11111px"),
                                                (t.style.height = "1px"),
                                                (n.style.height = "9px"),
                                                ae.appendChild(e).appendChild(t).appendChild(n),
                                                (i = r.getComputedStyle(t)),
                                                (s = 3 < parseInt(i.height)),
                                                ae.removeChild(e)),
                                            s
                                        );
                                    },
                                }));
                        })();
                        var Xe = ["Webkit", "Moz", "ms"],
                            We = b.createElement("div").style,
                            Qe = {};
                        function Je(e) {
                            return (
                                S.cssProps[e] ||
                                Qe[e] ||
                                (e in We
                                    ? e
                                    : (Qe[e] =
                                          (function (e) {
                                              for (var t = e[0].toUpperCase() + e.slice(1), n = Xe.length; n--; ) if ((e = Xe[n] + t) in We) return e;
                                          })(e) || e))
                            );
                        }
                        var Ye = /^(none|table(?!-c[ea]).+)/,
                            Ge = /^--/,
                            Ke = { position: "absolute", visibility: "hidden", display: "block" },
                            Ze = { letterSpacing: "0", fontWeight: "400" };
                        function et(e, t, n) {
                            var r = ie.exec(t);
                            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
                        }
                        function tt(e, t, n, r, i, o) {
                            var a = "width" === t ? 1 : 0,
                                s = 0,
                                c = 0;
                            if (n === (r ? "border" : "content")) return 0;
                            for (; a < 4; a += 2)
                                "margin" === n && (c += S.css(e, n + oe[a], !0, i)),
                                    r
                                        ? ("content" === n && (c -= S.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (c -= S.css(e, "border" + oe[a] + "Width", !0, i)))
                                        : ((c += S.css(e, "padding" + oe[a], !0, i)), "padding" !== n ? (c += S.css(e, "border" + oe[a] + "Width", !0, i)) : (s += S.css(e, "border" + oe[a] + "Width", !0, i)));
                            return !r && 0 <= o && (c += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - c - s - 0.5)) || 0), c;
                        }
                        function nt(e, t, n) {
                            var r = Ue(e),
                                i = (!v.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
                                o = i,
                                a = $e(e, t, r),
                                s = "offset" + t[0].toUpperCase() + t.slice(1);
                            if (Be.test(a)) {
                                if (!n) return a;
                                a = "auto";
                            }
                            return (
                                ((!v.boxSizingReliable() && i) || (!v.reliableTrDimensions() && A(e, "tr")) || "auto" === a || (!parseFloat(a) && "inline" === S.css(e, "display", !1, r))) &&
                                    e.getClientRects().length &&
                                    ((i = "border-box" === S.css(e, "boxSizing", !1, r)), (o = s in e) && (a = e[s])),
                                (a = parseFloat(a) || 0) + tt(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
                            );
                        }
                        function rt(e, t, n, r, i) {
                            return new rt.prototype.init(e, t, n, r, i);
                        }
                        S.extend({
                            cssHooks: {
                                opacity: {
                                    get: function (e, t) {
                                        if (t) {
                                            var n = $e(e, "opacity");
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
                                    var i,
                                        o,
                                        a,
                                        s = J(t),
                                        c = Ge.test(t),
                                        l = e.style;
                                    if ((c || (t = Je(s)), (a = S.cssHooks[t] || S.cssHooks[s]), void 0 === n)) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                                    "string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && ((n = ue(e, t, i)), (o = "number")),
                                        null != n &&
                                            n == n &&
                                            ("number" !== o || c || (n += (i && i[3]) || (S.cssNumber[s] ? "" : "px")),
                                            v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                                            (a && "set" in a && void 0 === (n = a.set(e, n, r))) || (c ? l.setProperty(t, n) : (l[t] = n)));
                                }
                            },
                            css: function (e, t, n, r) {
                                var i,
                                    o,
                                    a,
                                    s = J(t);
                                return (
                                    Ge.test(t) || (t = Je(s)),
                                    (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)),
                                    void 0 === i && (i = $e(e, t, r)),
                                    "normal" === i && t in Ze && (i = Ze[t]),
                                    "" === n || n ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i) : i
                                );
                            },
                        }),
                            S.each(["height", "width"], function (e, t) {
                                S.cssHooks[t] = {
                                    get: function (e, n, r) {
                                        if (n)
                                            return !Ye.test(S.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                                                ? nt(e, t, r)
                                                : ze(e, Ke, function () {
                                                      return nt(e, t, r);
                                                  });
                                    },
                                    set: function (e, n, r) {
                                        var i,
                                            o = Ue(e),
                                            a = !v.scrollboxSize() && "absolute" === o.position,
                                            s = (a || r) && "border-box" === S.css(e, "boxSizing", !1, o),
                                            c = r ? tt(e, t, r, s, o) : 0;
                                        return (
                                            s && a && (c -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - tt(e, t, "border", !1, o) - 0.5)),
                                            c && (i = ie.exec(n)) && "px" !== (i[3] || "px") && ((e.style[t] = n), (n = S.css(e, t))),
                                            et(0, n, c)
                                        );
                                    },
                                };
                            }),
                            (S.cssHooks.marginLeft = _e(v.reliableMarginLeft, function (e, t) {
                                if (t)
                                    return (
                                        (parseFloat($e(e, "marginLeft")) ||
                                            e.getBoundingClientRect().left -
                                                ze(e, { marginLeft: 0 }, function () {
                                                    return e.getBoundingClientRect().left;
                                                })) + "px"
                                    );
                            })),
                            S.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
                                (S.cssHooks[e + t] = {
                                    expand: function (n) {
                                        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                                        return i;
                                    },
                                }),
                                    "margin" !== e && (S.cssHooks[e + t].set = et);
                            }),
                            S.fn.extend({
                                css: function (e, t) {
                                    return _(
                                        this,
                                        function (e, t, n) {
                                            var r,
                                                i,
                                                o = {},
                                                a = 0;
                                            if (Array.isArray(t)) {
                                                for (r = Ue(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r);
                                                return o;
                                            }
                                            return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
                                        },
                                        e,
                                        t,
                                        1 < arguments.length
                                    );
                                },
                            }),
                            (((S.Tween = rt).prototype = {
                                constructor: rt,
                                init: function (e, t, n, r, i, o) {
                                    (this.elem = e), (this.prop = n), (this.easing = i || S.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = r), (this.unit = o || (S.cssNumber[n] ? "" : "px"));
                                },
                                cur: function () {
                                    var e = rt.propHooks[this.prop];
                                    return e && e.get ? e.get(this) : rt.propHooks._default.get(this);
                                },
                                run: function (e) {
                                    var t,
                                        n = rt.propHooks[this.prop];
                                    return (
                                        this.options.duration ? (this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                                        (this.now = (this.end - this.start) * t + this.start),
                                        this.options.step && this.options.step.call(this.elem, this.now, this),
                                        n && n.set ? n.set(this) : rt.propHooks._default.set(this),
                                        this
                                    );
                                },
                            }).init.prototype = rt.prototype),
                            ((rt.propHooks = {
                                _default: {
                                    get: function (e) {
                                        var t;
                                        return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
                                    },
                                    set: function (e) {
                                        S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (!S.cssHooks[e.prop] && null == e.elem.style[Je(e.prop)]) ? (e.elem[e.prop] = e.now) : S.style(e.elem, e.prop, e.now + e.unit);
                                    },
                                },
                            }).scrollTop = rt.propHooks.scrollLeft = {
                                set: function (e) {
                                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
                                },
                            }),
                            (S.easing = {
                                linear: function (e) {
                                    return e;
                                },
                                swing: function (e) {
                                    return 0.5 - Math.cos(e * Math.PI) / 2;
                                },
                                _default: "swing",
                            }),
                            (S.fx = rt.prototype.init),
                            (S.fx.step = {});
                        var it,
                            ot,
                            at,
                            st,
                            ct = /^(?:toggle|show|hide)$/,
                            lt = /queueHooks$/;
                        function ut() {
                            ot && (!1 === b.hidden && r.requestAnimationFrame ? r.requestAnimationFrame(ut) : r.setTimeout(ut, S.fx.interval), S.fx.tick());
                        }
                        function dt() {
                            return (
                                r.setTimeout(function () {
                                    it = void 0;
                                }),
                                (it = Date.now())
                            );
                        }
                        function ft(e, t) {
                            var n,
                                r = 0,
                                i = { height: e };
                            for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = oe[r])] = i["padding" + n] = e;
                            return t && (i.opacity = i.width = e), i;
                        }
                        function pt(e, t, n) {
                            for (var r, i = (ht.tweeners[t] || []).concat(ht.tweeners["*"]), o = 0, a = i.length; o < a; o++) if ((r = i[o].call(n, t, e))) return r;
                        }
                        function ht(e, t, n) {
                            var r,
                                i,
                                o = 0,
                                a = ht.prefilters.length,
                                s = S.Deferred().always(function () {
                                    delete c.elem;
                                }),
                                c = function () {
                                    if (i) return !1;
                                    for (var t = it || dt(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
                                    return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1);
                                },
                                l = s.promise({
                                    elem: e,
                                    props: S.extend({}, t),
                                    opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, n),
                                    originalProperties: t,
                                    originalOptions: n,
                                    startTime: it || dt(),
                                    duration: n.duration,
                                    tweens: [],
                                    createTween: function (t, n) {
                                        var r = S.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                                        return l.tweens.push(r), r;
                                    },
                                    stop: function (t) {
                                        var n = 0,
                                            r = t ? l.tweens.length : 0;
                                        if (i) return this;
                                        for (i = !0; n < r; n++) l.tweens[n].run(1);
                                        return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this;
                                    },
                                }),
                                u = l.props;
                            for (
                                (function (e, t) {
                                    var n, r, i, o, a;
                                    for (n in e)
                                        if (((i = t[(r = J(n))]), (o = e[n]), Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])), n !== r && ((e[r] = o), delete e[n]), (a = S.cssHooks[r]) && ("expand" in a)))
                                            for (n in ((o = a.expand(o)), delete e[r], o)) (n in e) || ((e[n] = o[n]), (t[n] = i));
                                        else t[r] = i;
                                })(u, l.opts.specialEasing);
                                o < a;
                                o++
                            )
                                if ((r = ht.prefilters[o].call(l, e, u, l.opts))) return m(r.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
                            return (
                                S.map(u, pt, l),
                                m(l.opts.start) && l.opts.start.call(e, l),
                                l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
                                S.fx.timer(S.extend(c, { elem: e, anim: l, queue: l.opts.queue })),
                                l
                            );
                        }
                        (S.Animation = S.extend(ht, {
                            tweeners: {
                                "*": [
                                    function (e, t) {
                                        var n = this.createTween(e, t);
                                        return ue(n.elem, e, ie.exec(t), n), n;
                                    },
                                ],
                            },
                            tweener: function (e, t) {
                                m(e) ? ((t = e), (e = ["*"])) : (e = e.match(R));
                                for (var n, r = 0, i = e.length; r < i; r++) (n = e[r]), (ht.tweeners[n] = ht.tweeners[n] || []), ht.tweeners[n].unshift(t);
                            },
                            prefilters: [
                                function (e, t, n) {
                                    var r,
                                        i,
                                        o,
                                        a,
                                        s,
                                        c,
                                        l,
                                        u,
                                        d = "width" in t || "height" in t,
                                        f = this,
                                        p = {},
                                        h = e.style,
                                        g = e.nodeType && le(e),
                                        v = K.get(e, "fxshow");
                                    for (r in (n.queue ||
                                        (null == (a = S._queueHooks(e, "fx")).unqueued &&
                                            ((a.unqueued = 0),
                                            (s = a.empty.fire),
                                            (a.empty.fire = function () {
                                                a.unqueued || s();
                                            })),
                                        a.unqueued++,
                                        f.always(function () {
                                            f.always(function () {
                                                a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
                                            });
                                        })),
                                    t))
                                        if (((i = t[r]), ct.test(i))) {
                                            if ((delete t[r], (o = o || "toggle" === i), i === (g ? "hide" : "show"))) {
                                                if ("show" !== i || !v || void 0 === v[r]) continue;
                                                g = !0;
                                            }
                                            p[r] = (v && v[r]) || S.style(e, r);
                                        }
                                    if ((c = !S.isEmptyObject(t)) || !S.isEmptyObject(p))
                                        for (r in (d &&
                                            1 === e.nodeType &&
                                            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                                            null == (l = v && v.display) && (l = K.get(e, "display")),
                                            "none" === (u = S.css(e, "display")) && (l ? (u = l) : (fe([e], !0), (l = e.style.display || l), (u = S.css(e, "display")), fe([e]))),
                                            ("inline" === u || ("inline-block" === u && null != l)) &&
                                                "none" === S.css(e, "float") &&
                                                (c ||
                                                    (f.done(function () {
                                                        h.display = l;
                                                    }),
                                                    null == l && ((u = h.display), (l = "none" === u ? "" : u))),
                                                (h.display = "inline-block"))),
                                        n.overflow &&
                                            ((h.overflow = "hidden"),
                                            f.always(function () {
                                                (h.overflow = n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]);
                                            })),
                                        (c = !1),
                                        p))
                                            c ||
                                                (v ? "hidden" in v && (g = v.hidden) : (v = K.access(e, "fxshow", { display: l })),
                                                o && (v.hidden = !g),
                                                g && fe([e], !0),
                                                f.done(function () {
                                                    for (r in (g || fe([e]), K.remove(e, "fxshow"), p)) S.style(e, r, p[r]);
                                                })),
                                                (c = pt(g ? v[r] : 0, r, f)),
                                                r in v || ((v[r] = c.start), g && ((c.end = c.start), (c.start = 0)));
                                },
                            ],
                            prefilter: function (e, t) {
                                t ? ht.prefilters.unshift(e) : ht.prefilters.push(e);
                            },
                        })),
                            (S.speed = function (e, t, n) {
                                var r = e && "object" == typeof e ? S.extend({}, e) : { complete: n || (!n && t) || (m(e) && e), duration: e, easing: (n && t) || (t && !m(t) && t) };
                                return (
                                    S.fx.off ? (r.duration = 0) : "number" != typeof r.duration && (r.duration in S.fx.speeds ? (r.duration = S.fx.speeds[r.duration]) : (r.duration = S.fx.speeds._default)),
                                    (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                                    (r.old = r.complete),
                                    (r.complete = function () {
                                        m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
                                    }),
                                    r
                                );
                            }),
                            S.fn.extend({
                                fadeTo: function (e, t, n, r) {
                                    return this.filter(le).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
                                },
                                animate: function (e, t, n, r) {
                                    var i = S.isEmptyObject(e),
                                        o = S.speed(t, n, r),
                                        a = function () {
                                            var t = ht(this, S.extend({}, e), o);
                                            (i || K.get(this, "finish")) && t.stop(!0);
                                        };
                                    return (a.finish = a), i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
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
                                                i = null != e && e + "queueHooks",
                                                o = S.timers,
                                                a = K.get(this);
                                            if (i) a[i] && a[i].stop && r(a[i]);
                                            else for (i in a) a[i] && a[i].stop && lt.test(i) && r(a[i]);
                                            for (i = o.length; i--; ) o[i].elem !== this || (null != e && o[i].queue !== e) || (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                                            (!t && n) || S.dequeue(this, e);
                                        })
                                    );
                                },
                                finish: function (e) {
                                    return (
                                        !1 !== e && (e = e || "fx"),
                                        this.each(function () {
                                            var t,
                                                n = K.get(this),
                                                r = n[e + "queue"],
                                                i = n[e + "queueHooks"],
                                                o = S.timers,
                                                a = r ? r.length : 0;
                                            for (n.finish = !0, S.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                                            for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                                            delete n.finish;
                                        })
                                    );
                                },
                            }),
                            S.each(["toggle", "show", "hide"], function (e, t) {
                                var n = S.fn[t];
                                S.fn[t] = function (e, r, i) {
                                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ft(t, !0), e, r, i);
                                };
                            }),
                            S.each({ slideDown: ft("show"), slideUp: ft("hide"), slideToggle: ft("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
                                S.fn[e] = function (e, n, r) {
                                    return this.animate(t, e, n, r);
                                };
                            }),
                            (S.timers = []),
                            (S.fx.tick = function () {
                                var e,
                                    t = 0,
                                    n = S.timers;
                                for (it = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                                n.length || S.fx.stop(), (it = void 0);
                            }),
                            (S.fx.timer = function (e) {
                                S.timers.push(e), S.fx.start();
                            }),
                            (S.fx.interval = 13),
                            (S.fx.start = function () {
                                ot || ((ot = !0), ut());
                            }),
                            (S.fx.stop = function () {
                                ot = null;
                            }),
                            (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
                            (S.fn.delay = function (e, t) {
                                return (
                                    (e = (S.fx && S.fx.speeds[e]) || e),
                                    (t = t || "fx"),
                                    this.queue(t, function (t, n) {
                                        var i = r.setTimeout(t, e);
                                        n.stop = function () {
                                            r.clearTimeout(i);
                                        };
                                    })
                                );
                            }),
                            (at = b.createElement("input")),
                            (st = b.createElement("select").appendChild(b.createElement("option"))),
                            (at.type = "checkbox"),
                            (v.checkOn = "" !== at.value),
                            (v.optSelected = st.selected),
                            ((at = b.createElement("input")).value = "t"),
                            (at.type = "radio"),
                            (v.radioValue = "t" === at.value);
                        var gt,
                            vt = S.expr.attrHandle;
                        S.fn.extend({
                            attr: function (e, t) {
                                return _(this, S.attr, e, t, 1 < arguments.length);
                            },
                            removeAttr: function (e) {
                                return this.each(function () {
                                    S.removeAttr(this, e);
                                });
                            },
                        }),
                            S.extend({
                                attr: function (e, t, n) {
                                    var r,
                                        i,
                                        o = e.nodeType;
                                    if (3 !== o && 8 !== o && 2 !== o)
                                        return void 0 === e.getAttribute
                                            ? S.prop(e, t, n)
                                            : ((1 === o && S.isXMLDoc(e)) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? gt : void 0)),
                                              void 0 !== n
                                                  ? null === n
                                                      ? void S.removeAttr(e, t)
                                                      : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                                                      ? r
                                                      : (e.setAttribute(t, n + ""), n)
                                                  : i && "get" in i && null !== (r = i.get(e, t))
                                                  ? r
                                                  : null == (r = S.find.attr(e, t))
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
                                        i = t && t.match(R);
                                    if (i && 1 === e.nodeType) for (; (n = i[r++]); ) e.removeAttribute(n);
                                },
                            }),
                            (gt = {
                                set: function (e, t, n) {
                                    return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
                                },
                            }),
                            S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
                                var n = vt[t] || S.find.attr;
                                vt[t] = function (e, t, r) {
                                    var i,
                                        o,
                                        a = t.toLowerCase();
                                    return r || ((o = vt[a]), (vt[a] = i), (i = null != n(e, t, r) ? a : null), (vt[a] = o)), i;
                                };
                            });
                        var mt = /^(?:input|select|textarea|button)$/i,
                            yt = /^(?:a|area)$/i;
                        function bt(e) {
                            return (e.match(R) || []).join(" ");
                        }
                        function xt(e) {
                            return (e.getAttribute && e.getAttribute("class")) || "";
                        }
                        function wt(e) {
                            return Array.isArray(e) ? e : ("string" == typeof e && e.match(R)) || [];
                        }
                        S.fn.extend({
                            prop: function (e, t) {
                                return _(this, S.prop, e, t, 1 < arguments.length);
                            },
                            removeProp: function (e) {
                                return this.each(function () {
                                    delete this[S.propFix[e] || e];
                                });
                            },
                        }),
                            S.extend({
                                prop: function (e, t, n) {
                                    var r,
                                        i,
                                        o = e.nodeType;
                                    if (3 !== o && 8 !== o && 2 !== o)
                                        return (
                                            (1 === o && S.isXMLDoc(e)) || ((t = S.propFix[t] || t), (i = S.propHooks[t])),
                                            void 0 !== n ? (i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e[t] = n)) : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                                        );
                                },
                                propHooks: {
                                    tabIndex: {
                                        get: function (e) {
                                            var t = S.find.attr(e, "tabindex");
                                            return t ? parseInt(t, 10) : mt.test(e.nodeName) || (yt.test(e.nodeName) && e.href) ? 0 : -1;
                                        },
                                    },
                                },
                                propFix: { for: "htmlFor", class: "className" },
                            }),
                            v.optSelected ||
                                (S.propHooks.selected = {
                                    get: function (e) {
                                        var t = e.parentNode;
                                        return t && t.parentNode && t.parentNode.selectedIndex, null;
                                    },
                                    set: function (e) {
                                        var t = e.parentNode;
                                        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                                    },
                                }),
                            S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                                S.propFix[this.toLowerCase()] = this;
                            }),
                            S.fn.extend({
                                addClass: function (e) {
                                    var t,
                                        n,
                                        r,
                                        i,
                                        o,
                                        a,
                                        s,
                                        c = 0;
                                    if (m(e))
                                        return this.each(function (t) {
                                            S(this).addClass(e.call(this, t, xt(this)));
                                        });
                                    if ((t = wt(e)).length)
                                        for (; (n = this[c++]); )
                                            if (((i = xt(n)), (r = 1 === n.nodeType && " " + bt(i) + " "))) {
                                                for (a = 0; (o = t[a++]); ) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                                                i !== (s = bt(r)) && n.setAttribute("class", s);
                                            }
                                    return this;
                                },
                                removeClass: function (e) {
                                    var t,
                                        n,
                                        r,
                                        i,
                                        o,
                                        a,
                                        s,
                                        c = 0;
                                    if (m(e))
                                        return this.each(function (t) {
                                            S(this).removeClass(e.call(this, t, xt(this)));
                                        });
                                    if (!arguments.length) return this.attr("class", "");
                                    if ((t = wt(e)).length)
                                        for (; (n = this[c++]); )
                                            if (((i = xt(n)), (r = 1 === n.nodeType && " " + bt(i) + " "))) {
                                                for (a = 0; (o = t[a++]); ) for (; -1 < r.indexOf(" " + o + " "); ) r = r.replace(" " + o + " ", " ");
                                                i !== (s = bt(r)) && n.setAttribute("class", s);
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
                                              S(this).toggleClass(e.call(this, n, xt(this), t), t);
                                          })
                                        : this.each(function () {
                                              var t, i, o, a;
                                              if (r) for (i = 0, o = S(this), a = wt(e); (t = a[i++]); ) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                                              else
                                                  (void 0 !== e && "boolean" !== n) ||
                                                      ((t = xt(this)) && K.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : K.get(this, "__className__") || ""));
                                          });
                                },
                                hasClass: function (e) {
                                    var t,
                                        n,
                                        r = 0;
                                    for (t = " " + e + " "; (n = this[r++]); ) if (1 === n.nodeType && -1 < (" " + bt(xt(n)) + " ").indexOf(t)) return !0;
                                    return !1;
                                },
                            });
                        var Ct = /\r/g;
                        S.fn.extend({
                            val: function (e) {
                                var t,
                                    n,
                                    r,
                                    i = this[0];
                                return arguments.length
                                    ? ((r = m(e)),
                                      this.each(function (n) {
                                          var i;
                                          1 === this.nodeType &&
                                              (null == (i = r ? e.call(this, n, S(this).val()) : e)
                                                  ? (i = "")
                                                  : "number" == typeof i
                                                  ? (i += "")
                                                  : Array.isArray(i) &&
                                                    (i = S.map(i, function (e) {
                                                        return null == e ? "" : e + "";
                                                    })),
                                              ((t = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value")) || (this.value = i));
                                      }))
                                    : i
                                    ? (t = S.valHooks[i.type] || S.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value"))
                                        ? n
                                        : "string" == typeof (n = i.value)
                                        ? n.replace(Ct, "")
                                        : null == n
                                        ? ""
                                        : n
                                    : void 0;
                            },
                        }),
                            S.extend({
                                valHooks: {
                                    option: {
                                        get: function (e) {
                                            var t = S.find.attr(e, "value");
                                            return null != t ? t : bt(S.text(e));
                                        },
                                    },
                                    select: {
                                        get: function (e) {
                                            var t,
                                                n,
                                                r,
                                                i = e.options,
                                                o = e.selectedIndex,
                                                a = "select-one" === e.type,
                                                s = a ? null : [],
                                                c = a ? o + 1 : i.length;
                                            for (r = o < 0 ? c : a ? o : 0; r < c; r++)
                                                if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                                                    if (((t = S(n).val()), a)) return t;
                                                    s.push(t);
                                                }
                                            return s;
                                        },
                                        set: function (e, t) {
                                            for (var n, r, i = e.options, o = S.makeArray(t), a = i.length; a--; ) ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
                                            return n || (e.selectedIndex = -1), o;
                                        },
                                    },
                                },
                            }),
                            S.each(["radio", "checkbox"], function () {
                                (S.valHooks[this] = {
                                    set: function (e, t) {
                                        if (Array.isArray(t)) return (e.checked = -1 < S.inArray(S(e).val(), t));
                                    },
                                }),
                                    v.checkOn ||
                                        (S.valHooks[this].get = function (e) {
                                            return null === e.getAttribute("value") ? "on" : e.value;
                                        });
                            }),
                            (v.focusin = "onfocusin" in r);
                        var Pt = /^(?:focusinfocus|focusoutblur)$/,
                            St = function (e) {
                                e.stopPropagation();
                            };
                        S.extend(S.event, {
                            trigger: function (e, t, n, i) {
                                var o,
                                    a,
                                    s,
                                    c,
                                    l,
                                    u,
                                    d,
                                    f,
                                    h = [n || b],
                                    g = p.call(e, "type") ? e.type : e,
                                    v = p.call(e, "namespace") ? e.namespace.split(".") : [];
                                if (
                                    ((a = f = s = n = n || b),
                                    3 !== n.nodeType &&
                                        8 !== n.nodeType &&
                                        !Pt.test(g + S.event.triggered) &&
                                        (-1 < g.indexOf(".") && ((g = (v = g.split(".")).shift()), v.sort()),
                                        (l = g.indexOf(":") < 0 && "on" + g),
                                        ((e = e[S.expando] ? e : new S.Event(g, "object" == typeof e && e)).isTrigger = i ? 2 : 3),
                                        (e.namespace = v.join(".")),
                                        (e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                                        (e.result = void 0),
                                        e.target || (e.target = n),
                                        (t = null == t ? [e] : S.makeArray(t, [e])),
                                        (d = S.event.special[g] || {}),
                                        i || !d.trigger || !1 !== d.trigger.apply(n, t)))
                                ) {
                                    if (!i && !d.noBubble && !y(n)) {
                                        for (c = d.delegateType || g, Pt.test(c + g) || (a = a.parentNode); a; a = a.parentNode) h.push(a), (s = a);
                                        s === (n.ownerDocument || b) && h.push(s.defaultView || s.parentWindow || r);
                                    }
                                    for (o = 0; (a = h[o++]) && !e.isPropagationStopped(); )
                                        (f = a),
                                            (e.type = 1 < o ? c : d.bindType || g),
                                            (u = (K.get(a, "events") || Object.create(null))[e.type] && K.get(a, "handle")) && u.apply(a, t),
                                            (u = l && a[l]) && u.apply && Y(a) && ((e.result = u.apply(a, t)), !1 === e.result && e.preventDefault());
                                    return (
                                        (e.type = g),
                                        i ||
                                            e.isDefaultPrevented() ||
                                            (d._default && !1 !== d._default.apply(h.pop(), t)) ||
                                            !Y(n) ||
                                            (l &&
                                                m(n[g]) &&
                                                !y(n) &&
                                                ((s = n[l]) && (n[l] = null),
                                                (S.event.triggered = g),
                                                e.isPropagationStopped() && f.addEventListener(g, St),
                                                n[g](),
                                                e.isPropagationStopped() && f.removeEventListener(g, St),
                                                (S.event.triggered = void 0),
                                                s && (n[l] = s))),
                                        e.result
                                    );
                                }
                            },
                            simulate: function (e, t, n) {
                                var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
                                S.event.trigger(r, null, t);
                            },
                        }),
                            S.fn.extend({
                                trigger: function (e, t) {
                                    return this.each(function () {
                                        S.event.trigger(e, t, this);
                                    });
                                },
                                triggerHandler: function (e, t) {
                                    var n = this[0];
                                    if (n) return S.event.trigger(e, t, n, !0);
                                },
                            }),
                            v.focusin ||
                                S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                                    var n = function (e) {
                                        S.event.simulate(t, e.target, S.event.fix(e));
                                    };
                                    S.event.special[t] = {
                                        setup: function () {
                                            var r = this.ownerDocument || this.document || this,
                                                i = K.access(r, t);
                                            i || r.addEventListener(e, n, !0), K.access(r, t, (i || 0) + 1);
                                        },
                                        teardown: function () {
                                            var r = this.ownerDocument || this.document || this,
                                                i = K.access(r, t) - 1;
                                            i ? K.access(r, t, i) : (r.removeEventListener(e, n, !0), K.remove(r, t));
                                        },
                                    };
                                });
                        var Tt = r.location,
                            Et = { guid: Date.now() },
                            It = /\?/;
                        S.parseXML = function (e) {
                            var t;
                            if (!e || "string" != typeof e) return null;
                            try {
                                t = new r.DOMParser().parseFromString(e, "text/xml");
                            } catch (e) {
                                t = void 0;
                            }
                            return (t && !t.getElementsByTagName("parsererror").length) || S.error("Invalid XML: " + e), t;
                        };
                        var Dt = /\[\]$/,
                            kt = /\r?\n/g,
                            At = /^(?:submit|button|image|reset|file)$/i,
                            jt = /^(?:input|select|textarea|keygen)/i;
                        function Ht(e, t, n, r) {
                            var i;
                            if (Array.isArray(t))
                                S.each(t, function (t, i) {
                                    n || Dt.test(e) ? r(e, i) : Ht(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r);
                                });
                            else if (n || "object" !== C(t)) r(e, t);
                            else for (i in t) Ht(e + "[" + i + "]", t[i], n, r);
                        }
                        (S.param = function (e, t) {
                            var n,
                                r = [],
                                i = function (e, t) {
                                    var n = m(t) ? t() : t;
                                    r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
                                };
                            if (null == e) return "";
                            if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
                                S.each(e, function () {
                                    i(this.name, this.value);
                                });
                            else for (n in e) Ht(n, e[n], t, i);
                            return r.join("&");
                        }),
                            S.fn.extend({
                                serialize: function () {
                                    return S.param(this.serializeArray());
                                },
                                serializeArray: function () {
                                    return this.map(function () {
                                        var e = S.prop(this, "elements");
                                        return e ? S.makeArray(e) : this;
                                    })
                                        .filter(function () {
                                            var e = this.type;
                                            return this.name && !S(this).is(":disabled") && jt.test(this.nodeName) && !At.test(e) && (this.checked || !ge.test(e));
                                        })
                                        .map(function (e, t) {
                                            var n = S(this).val();
                                            return null == n
                                                ? null
                                                : Array.isArray(n)
                                                ? S.map(n, function (e) {
                                                      return { name: t.name, value: e.replace(kt, "\r\n") };
                                                  })
                                                : { name: t.name, value: n.replace(kt, "\r\n") };
                                        })
                                        .get();
                                },
                            });
                        var Nt = /%20/g,
                            Lt = /#.*$/,
                            Ot = /([?&])_=[^&]*/,
                            Ft = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                            qt = /^(?:GET|HEAD)$/,
                            Rt = /^\/\//,
                            Mt = {},
                            Bt = {},
                            Ut = "*/".concat("*"),
                            zt = b.createElement("a");
                        function Vt(e) {
                            return function (t, n) {
                                "string" != typeof t && ((n = t), (t = "*"));
                                var r,
                                    i = 0,
                                    o = t.toLowerCase().match(R) || [];
                                if (m(n)) for (; (r = o[i++]); ) "+" === r[0] ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
                            };
                        }
                        function $t(e, t, n, r) {
                            var i = {},
                                o = e === Bt;
                            function a(s) {
                                var c;
                                return (
                                    (i[s] = !0),
                                    S.each(e[s] || [], function (e, s) {
                                        var l = s(t, n, r);
                                        return "string" != typeof l || o || i[l] ? (o ? !(c = l) : void 0) : (t.dataTypes.unshift(l), a(l), !1);
                                    }),
                                    c
                                );
                            }
                            return a(t.dataTypes[0]) || (!i["*"] && a("*"));
                        }
                        function _t(e, t) {
                            var n,
                                r,
                                i = S.ajaxSettings.flatOptions || {};
                            for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                            return r && S.extend(!0, e, r), e;
                        }
                        (zt.href = Tt.href),
                            S.extend({
                                active: 0,
                                lastModified: {},
                                etag: {},
                                ajaxSettings: {
                                    url: Tt.href,
                                    type: "GET",
                                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
                                    global: !0,
                                    processData: !0,
                                    async: !0,
                                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                                    accepts: { "*": Ut, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                                    contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                                    responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                                    converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": S.parseXML },
                                    flatOptions: { url: !0, context: !0 },
                                },
                                ajaxSetup: function (e, t) {
                                    return t ? _t(_t(e, S.ajaxSettings), t) : _t(S.ajaxSettings, e);
                                },
                                ajaxPrefilter: Vt(Mt),
                                ajaxTransport: Vt(Bt),
                                ajax: function (e, t) {
                                    "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                                    var n,
                                        i,
                                        o,
                                        a,
                                        s,
                                        c,
                                        l,
                                        u,
                                        d,
                                        f,
                                        p = S.ajaxSetup({}, t),
                                        h = p.context || p,
                                        g = p.context && (h.nodeType || h.jquery) ? S(h) : S.event,
                                        v = S.Deferred(),
                                        m = S.Callbacks("once memory"),
                                        y = p.statusCode || {},
                                        x = {},
                                        w = {},
                                        C = "canceled",
                                        P = {
                                            readyState: 0,
                                            getResponseHeader: function (e) {
                                                var t;
                                                if (l) {
                                                    if (!a) for (a = {}; (t = Ft.exec(o)); ) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                                    t = a[e.toLowerCase() + " "];
                                                }
                                                return null == t ? null : t.join(", ");
                                            },
                                            getAllResponseHeaders: function () {
                                                return l ? o : null;
                                            },
                                            setRequestHeader: function (e, t) {
                                                return null == l && ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e), (x[e] = t)), this;
                                            },
                                            overrideMimeType: function (e) {
                                                return null == l && (p.mimeType = e), this;
                                            },
                                            statusCode: function (e) {
                                                var t;
                                                if (e)
                                                    if (l) P.always(e[P.status]);
                                                    else for (t in e) y[t] = [y[t], e[t]];
                                                return this;
                                            },
                                            abort: function (e) {
                                                var t = e || C;
                                                return n && n.abort(t), T(0, t), this;
                                            },
                                        };
                                    if (
                                        (v.promise(P),
                                        (p.url = ((e || p.url || Tt.href) + "").replace(Rt, Tt.protocol + "//")),
                                        (p.type = t.method || t.type || p.method || p.type),
                                        (p.dataTypes = (p.dataType || "*").toLowerCase().match(R) || [""]),
                                        null == p.crossDomain)
                                    ) {
                                        c = b.createElement("a");
                                        try {
                                            (c.href = p.url), (c.href = c.href), (p.crossDomain = zt.protocol + "//" + zt.host != c.protocol + "//" + c.host);
                                        } catch (e) {
                                            p.crossDomain = !0;
                                        }
                                    }
                                    if ((p.data && p.processData && "string" != typeof p.data && (p.data = S.param(p.data, p.traditional)), $t(Mt, p, t, P), l)) return P;
                                    for (d in ((u = S.event && p.global) && 0 == S.active++ && S.event.trigger("ajaxStart"),
                                    (p.type = p.type.toUpperCase()),
                                    (p.hasContent = !qt.test(p.type)),
                                    (i = p.url.replace(Lt, "")),
                                    p.hasContent
                                        ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Nt, "+"))
                                        : ((f = p.url.slice(i.length)),
                                          p.data && (p.processData || "string" == typeof p.data) && ((i += (It.test(i) ? "&" : "?") + p.data), delete p.data),
                                          !1 === p.cache && ((i = i.replace(Ot, "$1")), (f = (It.test(i) ? "&" : "?") + "_=" + Et.guid++ + f)),
                                          (p.url = i + f)),
                                    p.ifModified && (S.lastModified[i] && P.setRequestHeader("If-Modified-Since", S.lastModified[i]), S.etag[i] && P.setRequestHeader("If-None-Match", S.etag[i])),
                                    ((p.data && p.hasContent && !1 !== p.contentType) || t.contentType) && P.setRequestHeader("Content-Type", p.contentType),
                                    P.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Ut + "; q=0.01" : "") : p.accepts["*"]),
                                    p.headers))
                                        P.setRequestHeader(d, p.headers[d]);
                                    if (p.beforeSend && (!1 === p.beforeSend.call(h, P, p) || l)) return P.abort();
                                    if (((C = "abort"), m.add(p.complete), P.done(p.success), P.fail(p.error), (n = $t(Bt, p, t, P)))) {
                                        if (((P.readyState = 1), u && g.trigger("ajaxSend", [P, p]), l)) return P;
                                        p.async &&
                                            0 < p.timeout &&
                                            (s = r.setTimeout(function () {
                                                P.abort("timeout");
                                            }, p.timeout));
                                        try {
                                            (l = !1), n.send(x, T);
                                        } catch (e) {
                                            if (l) throw e;
                                            T(-1, e);
                                        }
                                    } else T(-1, "No Transport");
                                    function T(e, t, a, c) {
                                        var d,
                                            f,
                                            b,
                                            x,
                                            w,
                                            C = t;
                                        l ||
                                            ((l = !0),
                                            s && r.clearTimeout(s),
                                            (n = void 0),
                                            (o = c || ""),
                                            (P.readyState = 0 < e ? 4 : 0),
                                            (d = (200 <= e && e < 300) || 304 === e),
                                            a &&
                                                (x = (function (e, t, n) {
                                                    for (var r, i, o, a, s = e.contents, c = e.dataTypes; "*" === c[0]; ) c.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                                                    if (r)
                                                        for (i in s)
                                                            if (s[i] && s[i].test(r)) {
                                                                c.unshift(i);
                                                                break;
                                                            }
                                                    if (c[0] in n) o = c[0];
                                                    else {
                                                        for (i in n) {
                                                            if (!c[0] || e.converters[i + " " + c[0]]) {
                                                                o = i;
                                                                break;
                                                            }
                                                            a || (a = i);
                                                        }
                                                        o = o || a;
                                                    }
                                                    if (o) return o !== c[0] && c.unshift(o), n[o];
                                                })(p, P, a)),
                                            !d && -1 < S.inArray("script", p.dataTypes) && (p.converters["text script"] = function () {}),
                                            (x = (function (e, t, n, r) {
                                                var i,
                                                    o,
                                                    a,
                                                    s,
                                                    c,
                                                    l = {},
                                                    u = e.dataTypes.slice();
                                                if (u[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                                                for (o = u.shift(); o; )
                                                    if ((e.responseFields[o] && (n[e.responseFields[o]] = t), !c && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (c = o), (o = u.shift())))
                                                        if ("*" === o) o = c;
                                                        else if ("*" !== c && c !== o) {
                                                            if (!(a = l[c + " " + o] || l["* " + o]))
                                                                for (i in l)
                                                                    if ((s = i.split(" "))[1] === o && (a = l[c + " " + s[0]] || l["* " + s[0]])) {
                                                                        !0 === a ? (a = l[i]) : !0 !== l[i] && ((o = s[0]), u.unshift(s[1]));
                                                                        break;
                                                                    }
                                                            if (!0 !== a)
                                                                if (a && e.throws) t = a(t);
                                                                else
                                                                    try {
                                                                        t = a(t);
                                                                    } catch (e) {
                                                                        return { state: "parsererror", error: a ? e : "No conversion from " + c + " to " + o };
                                                                    }
                                                        }
                                                return { state: "success", data: t };
                                            })(p, x, P, d)),
                                            d
                                                ? (p.ifModified && ((w = P.getResponseHeader("Last-Modified")) && (S.lastModified[i] = w), (w = P.getResponseHeader("etag")) && (S.etag[i] = w)),
                                                  204 === e || "HEAD" === p.type ? (C = "nocontent") : 304 === e ? (C = "notmodified") : ((C = x.state), (f = x.data), (d = !(b = x.error))))
                                                : ((b = C), (!e && C) || ((C = "error"), e < 0 && (e = 0))),
                                            (P.status = e),
                                            (P.statusText = (t || C) + ""),
                                            d ? v.resolveWith(h, [f, C, P]) : v.rejectWith(h, [P, C, b]),
                                            P.statusCode(y),
                                            (y = void 0),
                                            u && g.trigger(d ? "ajaxSuccess" : "ajaxError", [P, p, d ? f : b]),
                                            m.fireWith(h, [P, C]),
                                            u && (g.trigger("ajaxComplete", [P, p]), --S.active || S.event.trigger("ajaxStop")));
                                    }
                                    return P;
                                },
                                getJSON: function (e, t, n) {
                                    return S.get(e, t, n, "json");
                                },
                                getScript: function (e, t) {
                                    return S.get(e, void 0, t, "script");
                                },
                            }),
                            S.each(["get", "post"], function (e, t) {
                                S[t] = function (e, n, r, i) {
                                    return m(n) && ((i = i || r), (r = n), (n = void 0)), S.ajax(S.extend({ url: e, type: t, dataType: i, data: n, success: r }, S.isPlainObject(e) && e));
                                };
                            }),
                            S.ajaxPrefilter(function (e) {
                                var t;
                                for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
                            }),
                            (S._evalUrl = function (e, t, n) {
                                return S.ajax({
                                    url: e,
                                    type: "GET",
                                    dataType: "script",
                                    cache: !0,
                                    async: !1,
                                    global: !1,
                                    converters: { "text script": function () {} },
                                    dataFilter: function (e) {
                                        S.globalEval(e, t, n);
                                    },
                                });
                            }),
                            S.fn.extend({
                                wrapAll: function (e) {
                                    var t;
                                    return (
                                        this[0] &&
                                            (m(e) && (e = e.call(this[0])),
                                            (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
                                            this[0].parentNode && t.insertBefore(this[0]),
                                            t
                                                .map(function () {
                                                    for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                                                    return e;
                                                })
                                                .append(this)),
                                        this
                                    );
                                },
                                wrapInner: function (e) {
                                    return m(e)
                                        ? this.each(function (t) {
                                              S(this).wrapInner(e.call(this, t));
                                          })
                                        : this.each(function () {
                                              var t = S(this),
                                                  n = t.contents();
                                              n.length ? n.wrapAll(e) : t.append(e);
                                          });
                                },
                                wrap: function (e) {
                                    var t = m(e);
                                    return this.each(function (n) {
                                        S(this).wrapAll(t ? e.call(this, n) : e);
                                    });
                                },
                                unwrap: function (e) {
                                    return (
                                        this.parent(e)
                                            .not("body")
                                            .each(function () {
                                                S(this).replaceWith(this.childNodes);
                                            }),
                                        this
                                    );
                                },
                            }),
                            (S.expr.pseudos.hidden = function (e) {
                                return !S.expr.pseudos.visible(e);
                            }),
                            (S.expr.pseudos.visible = function (e) {
                                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
                            }),
                            (S.ajaxSettings.xhr = function () {
                                try {
                                    return new r.XMLHttpRequest();
                                } catch (e) {}
                            });
                        var Xt = { 0: 200, 1223: 204 },
                            Wt = S.ajaxSettings.xhr();
                        (v.cors = !!Wt && "withCredentials" in Wt),
                            (v.ajax = Wt = !!Wt),
                            S.ajaxTransport(function (e) {
                                var t, n;
                                if (v.cors || (Wt && !e.crossDomain))
                                    return {
                                        send: function (i, o) {
                                            var a,
                                                s = e.xhr();
                                            if ((s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)) for (a in e.xhrFields) s[a] = e.xhrFields[a];
                                            for (a in (e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i))
                                                s.setRequestHeader(a, i[a]);
                                            (t = function (e) {
                                                return function () {
                                                    t &&
                                                        ((t = n = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                                                        "abort" === e
                                                            ? s.abort()
                                                            : "error" === e
                                                            ? "number" != typeof s.status
                                                                ? o(0, "error")
                                                                : o(s.status, s.statusText)
                                                            : o(
                                                                  Xt[s.status] || s.status,
                                                                  s.statusText,
                                                                  "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText },
                                                                  s.getAllResponseHeaders()
                                                              ));
                                                };
                                            }),
                                                (s.onload = t()),
                                                (n = s.onerror = s.ontimeout = t("error")),
                                                void 0 !== s.onabort
                                                    ? (s.onabort = n)
                                                    : (s.onreadystatechange = function () {
                                                          4 === s.readyState &&
                                                              r.setTimeout(function () {
                                                                  t && n();
                                                              });
                                                      }),
                                                (t = t("abort"));
                                            try {
                                                s.send((e.hasContent && e.data) || null);
                                            } catch (i) {
                                                if (t) throw i;
                                            }
                                        },
                                        abort: function () {
                                            t && t();
                                        },
                                    };
                            }),
                            S.ajaxPrefilter(function (e) {
                                e.crossDomain && (e.contents.script = !1);
                            }),
                            S.ajaxSetup({
                                accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
                                contents: { script: /\b(?:java|ecma)script\b/ },
                                converters: {
                                    "text script": function (e) {
                                        return S.globalEval(e), e;
                                    },
                                },
                            }),
                            S.ajaxPrefilter("script", function (e) {
                                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
                            }),
                            S.ajaxTransport("script", function (e) {
                                var t, n;
                                if (e.crossDomain || e.scriptAttrs)
                                    return {
                                        send: function (r, i) {
                                            (t = S("<script>")
                                                .attr(e.scriptAttrs || {})
                                                .prop({ charset: e.scriptCharset, src: e.url })
                                                .on(
                                                    "load error",
                                                    (n = function (e) {
                                                        t.remove(), (n = null), e && i("error" === e.type ? 404 : 200, e.type);
                                                    })
                                                )),
                                                b.head.appendChild(t[0]);
                                        },
                                        abort: function () {
                                            n && n();
                                        },
                                    };
                            });
                        var Qt,
                            Jt = [],
                            Yt = /(=)\?(?=&|$)|\?\?/;
                        S.ajaxSetup({
                            jsonp: "callback",
                            jsonpCallback: function () {
                                var e = Jt.pop() || S.expando + "_" + Et.guid++;
                                return (this[e] = !0), e;
                            },
                        }),
                            S.ajaxPrefilter("json jsonp", function (e, t, n) {
                                var i,
                                    o,
                                    a,
                                    s = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
                                if (s || "jsonp" === e.dataTypes[0])
                                    return (
                                        (i = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                                        s ? (e[s] = e[s].replace(Yt, "$1" + i)) : !1 !== e.jsonp && (e.url += (It.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                                        (e.converters["script json"] = function () {
                                            return a || S.error(i + " was not called"), a[0];
                                        }),
                                        (e.dataTypes[0] = "json"),
                                        (o = r[i]),
                                        (r[i] = function () {
                                            a = arguments;
                                        }),
                                        n.always(function () {
                                            void 0 === o ? S(r).removeProp(i) : (r[i] = o), e[i] && ((e.jsonpCallback = t.jsonpCallback), Jt.push(i)), a && m(o) && o(a[0]), (a = o = void 0);
                                        }),
                                        "script"
                                    );
                            }),
                            (v.createHTMLDocument = (((Qt = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === Qt.childNodes.length)),
                            (S.parseHTML = function (e, t, n) {
                                return "string" != typeof e
                                    ? []
                                    : ("boolean" == typeof t && ((n = t), (t = !1)),
                                      t || (v.createHTMLDocument ? (((r = (t = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href), t.head.appendChild(r)) : (t = b)),
                                      (o = !n && []),
                                      (i = j.exec(e)) ? [t.createElement(i[1])] : ((i = Ce([e], t, o)), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
                                var r, i, o;
                            }),
                            (S.fn.load = function (e, t, n) {
                                var r,
                                    i,
                                    o,
                                    a = this,
                                    s = e.indexOf(" ");
                                return (
                                    -1 < s && ((r = bt(e.slice(s))), (e = e.slice(0, s))),
                                    m(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (i = "POST"),
                                    0 < a.length &&
                                        S.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
                                            .done(function (e) {
                                                (o = arguments), a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
                                            })
                                            .always(
                                                n &&
                                                    function (e, t) {
                                                        a.each(function () {
                                                            n.apply(this, o || [e.responseText, t, e]);
                                                        });
                                                    }
                                            ),
                                    this
                                );
                            }),
                            (S.expr.pseudos.animated = function (e) {
                                return S.grep(S.timers, function (t) {
                                    return e === t.elem;
                                }).length;
                            }),
                            (S.offset = {
                                setOffset: function (e, t, n) {
                                    var r,
                                        i,
                                        o,
                                        a,
                                        s,
                                        c,
                                        l = S.css(e, "position"),
                                        u = S(e),
                                        d = {};
                                    "static" === l && (e.style.position = "relative"),
                                        (s = u.offset()),
                                        (o = S.css(e, "top")),
                                        (c = S.css(e, "left")),
                                        ("absolute" === l || "fixed" === l) && -1 < (o + c).indexOf("auto") ? ((a = (r = u.position()).top), (i = r.left)) : ((a = parseFloat(o) || 0), (i = parseFloat(c) || 0)),
                                        m(t) && (t = t.call(e, n, S.extend({}, s))),
                                        null != t.top && (d.top = t.top - s.top + a),
                                        null != t.left && (d.left = t.left - s.left + i),
                                        "using" in t ? t.using.call(e, d) : ("number" == typeof d.top && (d.top += "px"), "number" == typeof d.left && (d.left += "px"), u.css(d));
                                },
                            }),
                            S.fn.extend({
                                offset: function (e) {
                                    if (arguments.length)
                                        return void 0 === e
                                            ? this
                                            : this.each(function (t) {
                                                  S.offset.setOffset(this, e, t);
                                              });
                                    var t,
                                        n,
                                        r = this[0];
                                    return r ? (r.getClientRects().length ? ((t = r.getBoundingClientRect()), (n = r.ownerDocument.defaultView), { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 }) : void 0;
                                },
                                position: function () {
                                    if (this[0]) {
                                        var e,
                                            t,
                                            n,
                                            r = this[0],
                                            i = { top: 0, left: 0 };
                                        if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
                                        else {
                                            for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position"); ) e = e.parentNode;
                                            e && e !== r && 1 === e.nodeType && (((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0)), (i.left += S.css(e, "borderLeftWidth", !0)));
                                        }
                                        return { top: t.top - i.top - S.css(r, "marginTop", !0), left: t.left - i.left - S.css(r, "marginLeft", !0) };
                                    }
                                },
                                offsetParent: function () {
                                    return this.map(function () {
                                        for (var e = this.offsetParent; e && "static" === S.css(e, "position"); ) e = e.offsetParent;
                                        return e || ae;
                                    });
                                },
                            }),
                            S.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
                                var n = "pageYOffset" === t;
                                S.fn[e] = function (r) {
                                    return _(
                                        this,
                                        function (e, r, i) {
                                            var o;
                                            if ((y(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView), void 0 === i)) return o ? o[t] : e[r];
                                            o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : (e[r] = i);
                                        },
                                        e,
                                        r,
                                        arguments.length
                                    );
                                };
                            }),
                            S.each(["top", "left"], function (e, t) {
                                S.cssHooks[t] = _e(v.pixelPosition, function (e, n) {
                                    if (n) return (n = $e(e, t)), Be.test(n) ? S(e).position()[t] + "px" : n;
                                });
                            }),
                            S.each({ Height: "height", Width: "width" }, function (e, t) {
                                S.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
                                    S.fn[r] = function (i, o) {
                                        var a = arguments.length && (n || "boolean" != typeof i),
                                            s = n || (!0 === i || !0 === o ? "margin" : "border");
                                        return _(
                                            this,
                                            function (t, n, i) {
                                                var o;
                                                return y(t)
                                                    ? 0 === r.indexOf("outer")
                                                        ? t["inner" + e]
                                                        : t.document.documentElement["client" + e]
                                                    : 9 === t.nodeType
                                                    ? ((o = t.documentElement), Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e]))
                                                    : void 0 === i
                                                    ? S.css(t, n, s)
                                                    : S.style(t, n, i, s);
                                            },
                                            t,
                                            a ? i : void 0,
                                            a
                                        );
                                    };
                                });
                            }),
                            S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
                                S.fn[t] = function (e) {
                                    return this.on(t, e);
                                };
                            }),
                            S.fn.extend({
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
                                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
                                },
                                hover: function (e, t) {
                                    return this.mouseenter(e).mouseleave(t || e);
                                },
                            }),
                            S.each(
                                "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
                                function (e, t) {
                                    S.fn[t] = function (e, n) {
                                        return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t);
                                    };
                                }
                            );
                        var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                        (S.proxy = function (e, t) {
                            var n, r, i;
                            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
                                return (
                                    (r = s.call(arguments, 2)),
                                    ((i = function () {
                                        return e.apply(t || this, r.concat(s.call(arguments)));
                                    }).guid = e.guid = e.guid || S.guid++),
                                    i
                                );
                        }),
                            (S.holdReady = function (e) {
                                e ? S.readyWait++ : S.ready(!0);
                            }),
                            (S.isArray = Array.isArray),
                            (S.parseJSON = JSON.parse),
                            (S.nodeName = A),
                            (S.isFunction = m),
                            (S.isWindow = y),
                            (S.camelCase = J),
                            (S.type = C),
                            (S.now = Date.now),
                            (S.isNumeric = function (e) {
                                var t = S.type(e);
                                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
                            }),
                            (S.trim = function (e) {
                                return null == e ? "" : (e + "").replace(Gt, "");
                            }),
                            void 0 ===
                                (n = function () {
                                    return S;
                                }.apply(t, [])) || (e.exports = n);
                        var Kt = r.jQuery,
                            Zt = r.$;
                        return (
                            (S.noConflict = function (e) {
                                return r.$ === S && (r.$ = Zt), e && r.jQuery === S && (r.jQuery = Kt), S;
                            }),
                            void 0 === i && (r.jQuery = r.$ = S),
                            S
                        );
                    });
                },
            },
            t = {};
        function n(r) {
            var i = t[r];
            if (void 0 !== i) return i.exports;
            var o = (t[r] = { exports: {} });
            return e[r].call(o.exports, o, o.exports, n), o.exports;
        }
        (n.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return n.d(t, { a: t }), t;
        }),
            (n.d = (e, t) => {
                for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
            (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t));
        var r = {};
        return (
            (() => {
                "use strict";
                function e(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
                }
                function t(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t &&
                            (r = r.filter(function (t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable;
                            })),
                            n.push.apply(n, r);
                    }
                    return n;
                }
                function i(n) {
                    for (var r = 1; r < arguments.length; r++) {
                        var i = null != arguments[r] ? arguments[r] : {};
                        r % 2
                            ? t(Object(i), !0).forEach(function (t) {
                                  e(n, t, i[t]);
                              })
                            : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                            : t(Object(i)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                              });
                    }
                    return n;
                }
                n.d(r, { default: () => b });
                var o = {
                    saveFreq: !1,
                    postUserStatistics: !1,
                    ajax: { setFinished: void 0, contentUserData: void 0 },
                    l10n: {
                        H5P: {
                            fullscreen: "Fullscreen",
                            disableFullscreen: "Disable fullscreen",
                            download: "Download",
                            copyrights: "Rights of use",
                            embed: "Embed",
                            size: "Size",
                            showAdvanced: "Show advanced",
                            hideAdvanced: "Hide advanced",
                            advancedHelp: "Include this script on your website if you want dynamic sizing of the embedded content:",
                            copyrightInformation: "Rights of use",
                            close: "Close",
                            title: "Title",
                            author: "Author",
                            year: "Year",
                            source: "Source",
                            license: "License",
                            thumbnail: "Thumbnail",
                            noCopyrights: "No copyright information available for this content.",
                            reuse: "Reuse",
                            reuseContent: "Reuse Content",
                            reuseDescription: "Reuse this content.",
                            downloadDescription: "Download this content as a H5P file.",
                            copyrightsDescription: "View copyright information for this content.",
                            embedDescription: "View the embed code for this content.",
                            h5pDescription: "Visit H5P.org to check out more cool content.",
                            contentChanged: "This content has changed since you last used it.",
                            startingOver: "You'll be starting over.",
                            by: "by",
                            showMore: "Show more",
                            showLess: "Show less",
                            subLevel: "Sublevel",
                            confirmDialogHeader: "Confirm action",
                            confirmDialogBody: "Please confirm that you wish to proceed. This action is not reversible.",
                            cancelLabel: "Cancel",
                            confirmLabel: "Confirm",
                            licenseU: "Undisclosed",
                            licenseCCBY: "Attribution",
                            licenseCCBYSA: "Attribution-ShareAlike",
                            licenseCCBYND: "Attribution-NoDerivs",
                            licenseCCBYNC: "Attribution-NonCommercial",
                            licenseCCBYNCSA: "Attribution-NonCommercial-ShareAlike",
                            licenseCCBYNCND: "Attribution-NonCommercial-NoDerivs",
                            licenseCC40: "4.0 International",
                            licenseCC30: "3.0 Unported",
                            licenseCC25: "2.5 Generic",
                            licenseCC20: "2.0 Generic",
                            licenseCC10: "1.0 Generic",
                            licenseGPL: "General Public License",
                            licenseV3: "Version 3",
                            licenseV2: "Version 2",
                            licenseV1: "Version 1",
                            licensePD: "Public Domain",
                            licenseCC010: "CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
                            licensePDM: "Public Domain Mark",
                            licenseC: "Copyright",
                            contentType: "Content Type",
                            licenseExtras: "License Extras",
                            changes: "Changelog",
                            contentCopied: "Content is copied to the clipboard",
                            connectionLost: "Connection lost. Results will be stored and sent when you regain connection.",
                            connectionReestablished: "Connection reestablished.",
                            resubmitScores: "Attempting to submit stored results.",
                            offlineDialogHeader: "Your connection to the server was lost",
                            offlineDialogBody: "We were unable to send information about your completion of this task. Please check your internet connection.",
                            offlineDialogRetryMessage: "Retrying in :num....",
                            offlineDialogRetryButtonLabel: "Retry now",
                            offlineSuccessfulSubmit: "Successfully submitted results.",
                        },
                    },
                };
                function a(e, t, n, r, i, o, a) {
                    try {
                        var s = e[o](a),
                            c = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    s.done ? t(c) : Promise.resolve(c).then(r, i);
                }
                function s(e) {
                    return function () {
                        var t = this,
                            n = arguments;
                        return new Promise(function (r, i) {
                            var o = e.apply(t, n);
                            function s(e) {
                                a(o, r, i, s, c, "next", e);
                            }
                            function c(e) {
                                a(o, r, i, s, c, "throw", e);
                            }
                            s(void 0);
                        });
                    };
                }
                function c(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                    }
                }
                window.H5PIntegration = window.H5PIntegration ? i(i({}, window.H5PIntegration), o) : o;
                var l = n(757),
                    u = n.n(l),
                    d = n(295),
                    f = n.n(d),
                    p = n(357),
                    h = n.n(p),
                    g = (window.H5P = window.H5P || {});
                (g.jQuery = h().noConflict(!0)),
                    (g.jQuery.fn.__originalLoad = g.jQuery.load),
                    (g.jQuery.fn.load = function (e, t, n) {
                        if ("function" == typeof e) {
                            console.warn("You are using a deprecated H5P library. Please upgrade!");
                            let e = Array.prototype.slice.call(arguments);
                            return e.unshift("load"), g.jQuery.fn.on.apply(this, e);
                        }
                        return g.jQuery.fn.__originalLoad.apply(this, arguments);
                    }),
                    (g.isFramed = window.self !== window.parent),
                    (g.$window = g.jQuery(window)),
                    (g.instances = []),
                    document.documentElement.requestFullScreen
                        ? (g.fullScreenBrowserPrefix = "")
                        : document.documentElement.webkitRequestFullScreen
                        ? ((g.safariBrowser = navigator.userAgent.match(/version\/([.\d]+)/i)),
                          (g.safariBrowser = null === g.safariBrowser ? 0 : parseInt(g.safariBrowser[1])),
                          (0 === g.safariBrowser || g.safariBrowser > 6) && (g.fullScreenBrowserPrefix = "webkit"))
                        : document.documentElement.mozRequestFullScreen
                        ? (g.fullScreenBrowserPrefix = "moz")
                        : document.documentElement.msRequestFullscreen && (g.fullScreenBrowserPrefix = "ms"),
                    (g.opened = {}),
                    (g.init = function (e) {
                        void 0 === g.$body && (g.$body = g.jQuery(document.body)),
                            void 0 === g.fullscreenSupported &&
                                (g.fullscreenSupported = !(
                                    H5PIntegration.fullscreenDisabled ||
                                    g.fullscreenDisabled ||
                                    (g.isFramed && !1 !== g.externalEmbed && !(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled))
                                )),
                            void 0 === g.canHasFullScreen && (g.canHasFullScreen = g.fullscreenSupported),
                            g.jQuery(".h5p-content:not(.h5p-initialized)", e).each(function () {
                                var e = g.jQuery(this).addClass("h5p-initialized"),
                                    t = g.jQuery('<div class="h5p-container"></div>').appendTo(e),
                                    n = e.data("content-id"),
                                    r = H5PIntegration.contents["cid-" + n];
                                if (void 0 === r) return g.error("No data for content id " + n + ". Perhaps the library is gone?");
                                var i = { library: r.library, params: JSON.parse(r.jsonContent), metadata: r.metadata };
                                g.getUserData(n, "state", function (e, a) {
                                    if (a) i.userDatas = { state: a };
                                    else if (null === a && H5PIntegration.saveFreq) {
                                        delete r.contentUserData;
                                        var s = new g.Dialog(
                                            "content-user-data-reset",
                                            "Data Reset",
                                            "<p>" + g.t("contentChanged") + "</p><p>" + g.t("startingOver") + '</p><div class="h5p-dialog-ok-button" tabIndex="0" role="button">OK</div>',
                                            t
                                        );
                                        g
                                            .jQuery(s)
                                            .on("dialog-opened", function (e, t) {
                                                var r = function (e) {
                                                    ("click" !== e.type && 32 !== e.which) || (s.close(), g.deleteUserData(n, "state", 0));
                                                };
                                                t.find(".h5p-dialog-ok-button").click(r).keypress(r), g.trigger(o, "resize");
                                            })
                                            .on("dialog-closed", function () {
                                                g.trigger(o, "resize");
                                            }),
                                            s.open();
                                    }
                                });
                                var o = g.newRunnable(i, n, t, !0, { standalone: !0 });
                                (g.offlineRequestQueue = new g.OfflineRequestQueue({ instance: o })),
                                    1 == r.fullScreen &&
                                        g.fullscreenSupported &&
                                        g
                                            .jQuery('<div class="h5p-content-controls"><div role="button" tabindex="0" class="h5p-enable-fullscreen" aria-label="' + g.t("fullscreen") + '" title="' + g.t("fullscreen") + '"></div></div>')
                                            .prependTo(t)
                                            .children()
                                            .click(function () {
                                                g.fullScreen(t, o);
                                            })
                                            .keydown(function (e) {
                                                if (32 === e.which || 13 === e.which) return g.fullScreen(t, o), !1;
                                            });
                                var a,
                                    s = r.displayOptions,
                                    c = !1;
                                if (s.frame) {
                                    if (s.copyright) {
                                        var l = g.getCopyrights(o, i.params, n, i.metadata);
                                        l || (s.copyright = !1);
                                    }
                                    var u = new g.ActionBar(s),
                                        d = u.getDOMElement();
                                    u.on("reuse", function () {
                                        g.openReuseDialog(d, r, i, o, n), o.triggerXAPI("accessed-reuse");
                                    }),
                                        u.on("copyrights", function () {
                                            new g.Dialog("copyrights", g.t("copyrightInformation"), l, t).open(!0), o.triggerXAPI("accessed-copyright");
                                        }),
                                        u.on("embed", function () {
                                            g.openEmbedDialog(d, r.embedCode, r.resizeCode, { width: e.width(), height: e.height() }, o), o.triggerXAPI("accessed-embed");
                                        }),
                                        u.hasActions() && ((c = !0), d.insertAfter(t));
                                }
                                if (
                                    (e.addClass(c ? "h5p-frame" : "h5p-no-frame"),
                                    (g.opened[n] = new Date()),
                                    g.on(o, "finish", function (e) {
                                        void 0 !== e.data && g.setFinished(n, e.data.score, e.data.maxScore, e.data.time);
                                    }),
                                    g.on(o, "xAPI", g.xAPICompletedListener),
                                    !1 !== H5PIntegration.saveFreq && (o.getCurrentState instanceof Function || "function" == typeof o.getCurrentState))
                                ) {
                                    var f,
                                        p = function () {
                                            var e = o.getCurrentState();
                                            void 0 !== e && g.setUserData(n, "state", e, { deleteOnChange: !0 }), H5PIntegration.saveFreq && (f = setTimeout(p, 1e3 * H5PIntegration.saveFreq));
                                        };
                                    H5PIntegration.saveFreq && (f = setTimeout(p, 1e3 * H5PIntegration.saveFreq)),
                                        g.on(o, "xAPI", function (e) {
                                            var t = e.getVerb();
                                            ("completed" !== t && "progressed" !== t) || (clearTimeout(f), (f = setTimeout(p, 3e3)));
                                        });
                                }
                                if (g.isFramed)
                                    if (!1 === g.externalEmbed) {
                                        var h = window.frameElement;
                                        g.on(o, "resize", function () {
                                            clearTimeout(a),
                                                (a = setTimeout(function () {
                                                    !(function () {
                                                        if (!window.parent.H5P.isFullscreen) {
                                                            var e = h.parentElement.style.height;
                                                            (h.parentElement.style.height = h.parentElement.clientHeight + "px"),
                                                                h.getBoundingClientRect(),
                                                                (h.style.height = "1px"),
                                                                (h.style.height = h.contentDocument.body.scrollHeight + "px"),
                                                                (h.parentElement.style.height = e);
                                                        }
                                                    })();
                                                }, 1));
                                        });
                                    } else if (g.communicator) {
                                        var v = !1;
                                        g.communicator.on("ready", function () {
                                            g.communicator.send("hello");
                                        }),
                                            g.communicator.on("hello", function () {
                                                (v = !0), (document.body.style.height = "auto"), (document.body.style.overflow = "hidden"), g.trigger(o, "resize");
                                            }),
                                            g.communicator.on("resizePrepared", function () {
                                                g.communicator.send("resize", { scrollHeight: document.body.scrollHeight });
                                            }),
                                            g.communicator.on("resize", function () {
                                                g.trigger(o, "resize");
                                            }),
                                            g.on(o, "resize", function () {
                                                g.isFullscreen ||
                                                    (clearTimeout(a),
                                                    (a = setTimeout(function () {
                                                        v ? g.communicator.send("prepareResize", { scrollHeight: document.body.scrollHeight, clientHeight: document.body.clientHeight }) : g.communicator.send("hello");
                                                    }, 0)));
                                            });
                                    }
                                (g.isFramed && !1 !== g.externalEmbed) ||
                                    g.jQuery(window.parent).resize(function () {
                                        window.parent.H5P.isFullscreen, g.trigger(o, "resize");
                                    }),
                                    g.instances.push(o),
                                    g.trigger(o, "resize"),
                                    e.addClass("using-mouse"),
                                    e.on("mousedown keydown keyup", function (t) {
                                        e.toggleClass("using-mouse", "mousedown" === t.type);
                                    }),
                                    g.externalDispatcher && g.externalDispatcher.trigger("initialized");
                            }),
                            g.jQuery("iframe.h5p-iframe:not(.h5p-initialized)", e).each(function () {
                                var e = g.jQuery(this).addClass("h5p-initialized").data("content-id");
                                const t = H5PIntegration.contents["cid-" + e],
                                    n = t && t.metadata && t.metadata.defaultLanguage ? t.metadata.defaultLanguage : "en";
                                this.contentDocument.open(),
                                    this.contentDocument.write('<!doctype html><html class="h5p-iframe" lang="' + n + '"><head>' + g.getHeadTags(e) + '</head><body><div class="h5p-content" data-content-id="' + e + '"/></body></html>'),
                                    this.contentDocument.close();
                            });
                    }),
                    (g.getHeadTags = function (e) {
                        var t = function (e) {
                                for (var t = "", n = 0; n < e.length; n++) t += '<link rel="stylesheet" href="' + e[n] + '">';
                                return t;
                            },
                            n = function (e) {
                                for (var t = "", n = 0; n < e.length; n++) t += '<script src="' + e[n] + '"></script>';
                                return t;
                            };
                        return (
                            '<base target="_parent">' +
                            t(H5PIntegration.core.styles) +
                            t(H5PIntegration.contents["cid-" + e].styles) +
                            n(H5PIntegration.core.scripts) +
                            n(H5PIntegration.contents["cid-" + e].scripts) +
                            "<script>H5PIntegration = window.parent.H5PIntegration; var H5P = H5P || {}; H5P.externalEmbed = false;</script>"
                        );
                    }),
                    (g.communicator =
                        window.postMessage && window.addEventListener
                            ? new (function () {
                                  var e = {};
                                  window.addEventListener(
                                      "message",
                                      function (t) {
                                          window.parent === t.source && "h5p" === t.data.context && void 0 !== e[t.data.action] && e[t.data.action](t.data);
                                      },
                                      !1
                                  ),
                                      (this.on = function (t, n) {
                                          e[t] = n;
                                      }),
                                      (this.send = function (e, t) {
                                          void 0 === t && (t = {}), (t.context = "h5p"), (t.action = e), window.parent.postMessage(t, "*");
                                      });
                              })()
                            : void 0),
                    (g.semiFullScreen = function (e, t, n, r) {
                        g.fullScreen(e, t, n, r, !0);
                    }),
                    (g.fullScreen = function (e, t, n, r, i) {
                        if (void 0 === g.exitFullScreen) {
                            if (g.isFramed && !1 === g.externalEmbed)
                                return (
                                    window.parent.H5P.fullScreen(e, t, n, g.$body.get(), i),
                                    (g.isFullscreen = !0),
                                    (g.exitFullScreen = function () {
                                        window.parent.H5P.exitFullScreen();
                                    }),
                                    void g.on(t, "exitFullScreen", function () {
                                        (g.isFullscreen = !1), (g.exitFullScreen = void 0);
                                    })
                                );
                            var o,
                                a,
                                s,
                                c = e;
                            if (void 0 === r) s = g.$body;
                            else {
                                (s = g.jQuery(r)), (o = s.add(e.get()));
                                var l = "#h5p-iframe-" + e.parent().data("content-id");
                                e = (a = g.jQuery(l)).parent();
                            }
                            o = e.add(g.$body).add(o);
                            var u = function (e) {
                                    o.addClass(e), void 0 !== a && a.css("height", "");
                                },
                                d = function () {
                                    g.trigger(t, "resize"), g.trigger(t, "focus"), g.trigger(t, "enterFullScreen");
                                },
                                f = function (e) {
                                    (g.isFullscreen = !1), o.removeClass(e), g.trigger(t, "resize"), g.trigger(t, "focus"), (g.exitFullScreen = void 0), void 0 !== n && n(), g.trigger(t, "exitFullScreen");
                                };
                            if (((g.isFullscreen = !0), void 0 === g.fullScreenBrowserPrefix || !0 === i)) {
                                if (g.isFramed) return;
                                u("h5p-semi-fullscreen");
                                var p,
                                    h,
                                    v,
                                    m = g
                                        .jQuery('<div role="button" tabindex="0" class="h5p-disable-fullscreen" title="' + g.t("disableFullscreen") + '" aria-label="' + g.t("disableFullscreen") + '"></div>')
                                        .appendTo(c.find(".h5p-content-controls")),
                                    y = (g.exitFullScreen = function () {
                                        h ? (v.content = h) : w.removeChild(v), m.remove(), s.unbind("keyup", p), f("h5p-semi-fullscreen");
                                    });
                                (p = function (e) {
                                    27 === e.keyCode && y();
                                }),
                                    m.click(y),
                                    s.keyup(p);
                                for (var b = document.getElementsByTagName("meta"), x = 0; x < b.length; x++)
                                    if ("viewport" === b[x].name) {
                                        (v = b[x]), (h = v.content);
                                        break;
                                    }
                                if ((h || ((v = document.createElement("meta")).name = "viewport"), (v.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"), !h)) {
                                    var w = document.getElementsByTagName("head")[0];
                                    w.appendChild(v);
                                }
                                d();
                            } else {
                                u("h5p-fullscreen");
                                var C,
                                    P = "ms" === g.fullScreenBrowserPrefix ? "MSFullscreenChange" : g.fullScreenBrowserPrefix + "fullscreenchange";
                                if (
                                    (document.addEventListener(P, function () {
                                        if (void 0 === C) return (C = !1), void d();
                                        f("h5p-fullscreen"), document.removeEventListener(P, arguments.callee, !1);
                                    }),
                                    "" === g.fullScreenBrowserPrefix)
                                )
                                    e[0].requestFullScreen();
                                else {
                                    var S = "ms" === g.fullScreenBrowserPrefix ? "msRequestFullscreen" : g.fullScreenBrowserPrefix + "RequestFullScreen",
                                        T = "webkit" === g.fullScreenBrowserPrefix && 0 === g.safariBrowser ? Element.ALLOW_KEYBOARD_INPUT : void 0;
                                    e[0][S](T);
                                }
                                g.exitFullScreen = function () {
                                    "" === g.fullScreenBrowserPrefix ? document.exitFullscreen() : "moz" === g.fullScreenBrowserPrefix ? document.mozCancelFullScreen() : document[g.fullScreenBrowserPrefix + "ExitFullscreen"]();
                                };
                            }
                        }
                    }),
                    (function () {
                        (g.addQueryParameter = function (e, t) {
                            let n, r;
                            const i = e.split("?");
                            return i[1] ? ((r = i[1].split("#")), (n = i[0] + "?" + r[0] + "&")) : ((r = i[0].split("#")), (n = r[0] + "?")), (n += t), r[1] && (n += "#" + r[1]), n;
                        }),
                            (g.setSource = function (e, t, n) {
                                let r = t.path;
                                const i = g.getCrossOrigin(t);
                                i ? ((e.crossOrigin = i), H5PIntegration.crossoriginCacheBuster && (r = g.addQueryParameter(r, H5PIntegration.crossoriginCacheBuster))) : e.removeAttribute("crossorigin"), (e.src = g.getPath(r, n));
                            });
                        var e = function (e) {
                            return e.match(/^[a-z0-9]+:\/\//i);
                        };
                        (g.getCrossOrigin = function (t) {
                            return "object" != typeof t
                                ? H5PIntegration.crossorigin && H5PIntegration.crossoriginRegex && t.match(H5PIntegration.crossoriginRegex)
                                    ? H5PIntegration.crossorigin
                                    : null
                                : H5PIntegration.crossorigin && !e(t.path)
                                ? H5PIntegration.crossorigin
                                : void 0;
                        }),
                            (g.getPath = function (t, n) {
                                if (e(t)) return t;
                                var r,
                                    i = "#tmp" === t.substr(-4, 4);
                                if (void 0 === n || i) {
                                    if (void 0 === window.H5PEditor) return;
                                    r = H5PEditor.filesPath;
                                } else void 0 !== H5PIntegration.contents && H5PIntegration.contents["cid-" + n] && (r = H5PIntegration.contents["cid-" + n].contentUrl), r || (r = H5PIntegration.url + "/content/" + n);
                                return e(r) || (r = window.location.protocol + "//" + window.location.host + r), r + "/" + t;
                            });
                    })(),
                    (g.getContentPath = function (e) {
                        return H5PIntegration.url + "/content/" + e;
                    }),
                    (g.classFromName = function (e) {
                        var t = e.split(".");
                        return this[t[t.length - 1]];
                    }),
                    (g.newRunnable = function (e, t, n, r, i) {
                        var o, a, s, c;
                        try {
                            (s = (o = e.library.split(" ", 2))[0]), (a = o[1].split(".", 2));
                        } catch (t) {
                            return g.error("Invalid library string: " + e.library);
                        }
                        if (e.params instanceof Object != 1 || e.params instanceof Array == 1) return g.error("Invalid library params for: " + e.library), g.error(e.params);
                        try {
                            (o = o[0].split(".")), (c = window);
                            for (var l = 0; l < o.length; l++) c = c[o[l]];
                            if ("function" != typeof c) throw null;
                        } catch (t) {
                            return g.error("Unable to find constructor for: " + e.library);
                        }
                        void 0 === i && (i = {}),
                            e.subContentId && (i.subContentId = e.subContentId),
                            e.userDatas && e.userDatas.state && H5PIntegration.saveFreq && (i.previousState = e.userDatas.state),
                            e.metadata && (i.metadata = e.metadata);
                        var u,
                            d = i.standalone || !1;
                        return (
                            (c.prototype = g.jQuery.extend({}, g.ContentType(d).prototype, c.prototype)),
                            void 0 ===
                                (u = g.jQuery.inArray(e.library, ["H5P.CoursePresentation 1.0", "H5P.CoursePresentation 1.1", "H5P.CoursePresentation 1.2", "H5P.CoursePresentation 1.3"]) > -1 ? new c(e.params, t) : new c(e.params, t, i))
                                    .$ && (u.$ = g.jQuery(u)),
                            void 0 === u.contentId && (u.contentId = t),
                            void 0 === u.subContentId && e.subContentId && (u.subContentId = e.subContentId),
                            void 0 === u.parent && i && i.parent && (u.parent = i.parent),
                            void 0 === u.libraryInfo && (u.libraryInfo = { versionedName: e.library, versionedNameNoSpaces: s + "-" + a[0] + "." + a[1], machineName: s, majorVersion: a[0], minorVersion: a[1] }),
                            void 0 !== n &&
                                (n.toggleClass("h5p-standalone", d), u.attach(n), g.trigger(u, "domChanged", { $target: n, library: s, key: "newLibrary" }, { bubbles: !0, external: !0 }), (void 0 !== r && r) || g.trigger(u, "resize")),
                            u
                        );
                    }),
                    (g.error = function (e) {
                        void 0 !== window.console && void 0 !== console.error && console.error(e.stack ? e.stack : e);
                    }),
                    (g.t = function (e, t, n) {
                        if ((void 0 === n && (n = "H5P"), void 0 === H5PIntegration.l10n[n])) return '[Missing translation namespace "' + n + '"]';
                        if (void 0 === H5PIntegration.l10n[n][e]) return '[Missing translation "' + e + '" in "' + n + '"]';
                        var r = H5PIntegration.l10n[n][e];
                        if (void 0 !== t) for (var i in t) r = r.replace(i, t[i]);
                        return r;
                    }),
                    (g.Dialog = function (e, t, n, r) {
                        var i = this,
                            o = g
                                .jQuery(
                                    '<div class="h5p-popup-dialog h5p-' +
                                        e +
                                        '-dialog" role="dialog" tabindex="-1">                              <div class="h5p-inner">                                <h2>' +
                                        t +
                                        '</h2>                                <div class="h5p-scroll-content">' +
                                        n +
                                        '</div>                                <div class="h5p-close" role="button" tabindex="0" aria-label="' +
                                        g.t("close") +
                                        '" title="' +
                                        g.t("close") +
                                        '"></div>                              </div>                            </div>'
                                )
                                .insertAfter(r)
                                .click(function (e) {
                                    (e && e.originalEvent && e.originalEvent.preventClosing) || i.close();
                                })
                                .children(".h5p-inner")
                                .click(function (e) {
                                    e.originalEvent.preventClosing = !0;
                                })
                                .find(".h5p-close")
                                .click(function () {
                                    i.close();
                                })
                                .keypress(function (e) {
                                    if (13 === e.which || 32 === e.which) return i.close(), !1;
                                })
                                .end()
                                .find("a")
                                .click(function (e) {
                                    e.stopPropagation();
                                })
                                .end()
                                .end();
                        (i.open = function (e) {
                            e && o.css("height", "100%"),
                                setTimeout(function () {
                                    o.addClass("h5p-open"), g.jQuery(i).trigger("dialog-opened", [o]), o.focus();
                                }, 1);
                        }),
                            (i.close = function () {
                                o.removeClass("h5p-open"),
                                    setTimeout(function () {
                                        o.remove(), g.jQuery(i).trigger("dialog-closed", [o]), r.attr("tabindex", "-1"), r.focus();
                                    }, 200);
                            });
                    }),
                    (g.getCopyrights = function (e, t, n, r) {
                        var i;
                        if (void 0 !== e.getCopyrights)
                            try {
                                i = e.getCopyrights();
                            } catch (e) {}
                        void 0 === i && ((i = new g.ContentCopyrights()), g.findCopyrights(i, t, n));
                        var o = g.buildMetadataCopyrights(r, e.libraryInfo.machineName);
                        return void 0 !== o && i.addMediaInFront(o), void 0 !== i && (i = i.toString()), i;
                    }),
                    (g.findCopyrights = function (e, t, n, r) {
                        var i;
                        for (var o in (r && ((r.params = t), c(r, r.machineName, n)), t))
                            if (t.hasOwnProperty(o))
                                if ("overrideSettings" !== o) {
                                    var a = t[o];
                                    if (
                                        (a && a.library && "string" == typeof a.library
                                            ? (i = a.library.split(" ")[0])
                                            : a && a.library && "object" == typeof a.library && (i = a.library.library && "string" == typeof a.library.library ? a.library.library.split(" ")[0] : i),
                                        a instanceof Array)
                                    )
                                        g.findCopyrights(e, a, n);
                                    else if (a instanceof Object)
                                        if ((c(a, i, n), void 0 === a.copyright || void 0 === a.copyright.license || void 0 === a.path || void 0 === a.mime)) g.findCopyrights(e, a, n);
                                        else {
                                            var s = new g.MediaCopyright(a.copyright);
                                            void 0 !== a.width && void 0 !== a.height && s.setThumbnail(new g.Thumbnail(g.getPath(a.path, n), a.width, a.height)), e.addMedia(s);
                                        }
                                } else console.warn("The semantics field 'overrideSettings' is DEPRECATED and should not be used."), console.warn(t);
                        function c(t, n, r) {
                            if (t.metadata) {
                                const i = g.buildMetadataCopyrights(t.metadata, n);
                                if (void 0 !== i) {
                                    if (t.params && "Image" === t.params.contentName && t.params.file) {
                                        const e = t.params.file.path,
                                            n = t.params.file.width,
                                            o = t.params.file.height;
                                        i.setThumbnail(new g.Thumbnail(g.getPath(e, r), n, o));
                                    }
                                    e.addMedia(i);
                                }
                            }
                        }
                    }),
                    (g.buildMetadataCopyrights = function (e) {
                        if (e && void 0 !== e.license && "U" !== e.license) {
                            var t = {
                                contentType: e.contentType,
                                title: e.title,
                                author:
                                    e.authors && e.authors.length > 0
                                        ? e.authors
                                              .map(function (e) {
                                                  return e.role ? e.name + " (" + e.role + ")" : e.name;
                                              })
                                              .join(", ")
                                        : void 0,
                                source: e.source,
                                year: e.yearFrom ? e.yearFrom + (e.yearTo ? "-" + e.yearTo : "") : void 0,
                                license: e.license,
                                version: e.licenseVersion,
                                licenseExtras: e.licenseExtras,
                                changes:
                                    e.changes && e.changes.length > 0
                                        ? e.changes
                                              .map(function (e) {
                                                  return e.log + (e.author ? ", " + e.author : "") + (e.date ? ", " + e.date : "");
                                              })
                                              .join(" / ")
                                        : void 0,
                            };
                            return new g.MediaCopyright(t);
                        }
                    }),
                    (g.openReuseDialog = function (e, t, n, r, i) {
                        let o = "";
                        t.displayOptions.export &&
                            (o +=
                                '<button type="button" class="h5p-big-button h5p-download-button"><div class="h5p-button-title">Download as an .h5p file</div><div class="h5p-button-description">.h5p files may be uploaded to any web-site where H5P content may be created.</div></button>'),
                            t.displayOptions.export && t.displayOptions.copy && (o += '<div class="h5p-horizontal-line-text"><span>or</span></div>'),
                            t.displayOptions.copy &&
                                (o +=
                                    '<button type="button" class="h5p-big-button h5p-copy-button"><div class="h5p-button-title">Copy content</div><div class="h5p-button-description">Copied content may be pasted anywhere this content type is supported on this website.</div></button>');
                        const a = new g.Dialog("reuse", g.t("reuseContent"), o, e);
                        g
                            .jQuery(a)
                            .on("dialog-opened", function (e, o) {
                                g
                                    .jQuery('<a href="https://h5p.org/node/442225" target="_blank">More Info</a>')
                                    .click(function (e) {
                                        e.stopPropagation();
                                    })
                                    .appendTo(o.find("h2")),
                                    o.find(".h5p-download-button").click(function () {
                                        (window.location.href = t.exportUrl), r.triggerXAPI("downloaded"), a.close();
                                    }),
                                    o.find(".h5p-copy-button").click(function () {
                                        const e = new g.ClipboardItem(n);
                                        (e.contentId = i),
                                            g.setClipboard(e),
                                            r.triggerXAPI("copied"),
                                            a.close(),
                                            g.attachToastTo(g.jQuery(".h5p-content:first")[0], g.t("contentCopied"), { position: { horizontal: "centered", vertical: "centered", noOverflowX: !0 } });
                                    }),
                                    g.trigger(r, "resize");
                            })
                            .on("dialog-closed", function () {
                                g.trigger(r, "resize");
                            }),
                            a.open();
                    }),
                    (g.openEmbedDialog = function (e, t, n, r, i) {
                        var o = t + n,
                            a = new g.Dialog(
                                "embed",
                                g.t("embed"),
                                '<textarea class="h5p-embed-code-container" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>' +
                                    g.t("size") +
                                    ': <input type="text" value="' +
                                    Math.ceil(r.width) +
                                    '" class="h5p-embed-size"/> × <input type="text" value="' +
                                    Math.ceil(r.height) +
                                    '" class="h5p-embed-size"/> px<br/><div role="button" tabindex="0" class="h5p-expander">' +
                                    g.t("showAdvanced") +
                                    '</div><div class="h5p-expander-content"><p>' +
                                    g.t("advancedHelp") +
                                    '</p><textarea class="h5p-embed-code-container" autocorrect="off" autocapitalize="off" spellcheck="false">' +
                                    n +
                                    "</textarea></div>",
                                e
                            );
                        g
                            .jQuery(a)
                            .on("dialog-opened", function (e, t) {
                                var n = t.find(".h5p-inner").find(".h5p-scroll-content"),
                                    a =
                                        (n.outerHeight(),
                                        n.innerHeight(),
                                        function () {
                                            g.trigger(i, "resize");
                                        }),
                                    s = t.find(".h5p-embed-size:eq(0)"),
                                    c = t.find(".h5p-embed-size:eq(1)"),
                                    l = function (e, t) {
                                        var n = parseFloat(e.val());
                                        return isNaN(n) ? t : Math.ceil(n);
                                    },
                                    u = function () {
                                        t.find(".h5p-embed-code-container:first").val(o.replace(":w", l(s, r.width)).replace(":h", l(c, r.height)));
                                    };
                                s.change(u),
                                    c.change(u),
                                    u(),
                                    t.find(".h5p-embed-code-container").each(function () {
                                        g.jQuery(this)
                                            .css("height", this.scrollHeight + "px")
                                            .focus(function () {
                                                g.jQuery(this).select();
                                            });
                                    }),
                                    t.find(".h5p-embed-code-container").eq(0).select(),
                                    a();
                                var d = function () {
                                    var e = g.jQuery(this),
                                        n = e.next();
                                    n.is(":visible")
                                        ? (e.removeClass("h5p-open").text(g.t("showAdvanced")).attr("aria-expanded", "true"), n.hide())
                                        : (e.addClass("h5p-open").text(g.t("hideAdvanced")).attr("aria-expanded", "false"), n.show()),
                                        t.find(".h5p-embed-code-container").each(function () {
                                            g.jQuery(this).css("height", this.scrollHeight + "px");
                                        }),
                                        a();
                                };
                                t.find(".h5p-expander")
                                    .click(d)
                                    .keypress(function (e) {
                                        if (32 === e.keyCode) return d.apply(this), !1;
                                    });
                            })
                            .on("dialog-closed", function () {
                                g.trigger(i, "resize");
                            }),
                            a.open();
                    }),
                    (g.attachToastTo = function (e, t, n) {
                        if (void 0 === e || void 0 === t) return;
                        const r = function (t) {
                                var n, r, o;
                                -1 ===
                                    ((n = t),
                                    (r = (n.composedPath && n.composedPath()) || n.path),
                                    (o = n.target),
                                    null != r
                                        ? r.indexOf(window) < 0
                                            ? r.concat(window)
                                            : r
                                        : o === window
                                        ? [window]
                                        : [o].concat(
                                              (function e(t, n) {
                                                  n = n || [];
                                                  var r = t.parentNode;
                                                  return r ? e(r, n.concat(r)) : n;
                                              })(o),
                                              window
                                          )).indexOf(e) && (clearTimeout(c), i());
                            },
                            i = function () {
                                document.removeEventListener("click", r), o.parentNode && o.parentNode.removeChild(o);
                            };
                        ((n = n || {}).style = n.style || "h5p-toast"), (n.duration = n.duration || 3e3);
                        const o = document.createElement("div");
                        o.setAttribute("id", n.style), o.classList.add("h5p-toast-disabled"), o.classList.add(n.style);
                        const a = document.createElement("span");
                        (a.innerHTML = t), o.appendChild(a), document.body.appendChild(o);
                        const s = (function (e, t, n) {
                            ((n = n || {}).offsetHorizontal = n.offsetHorizontal || 0), (n.offsetVertical = n.offsetVertical || 0);
                            const r = t.getBoundingClientRect(),
                                i = e.getBoundingClientRect();
                            let o = 0,
                                a = 0;
                            switch (n.horizontal) {
                                case "before":
                                    o = i.left - r.width - n.offsetHorizontal;
                                    break;
                                case "after":
                                    o = i.left + i.width + n.offsetHorizontal;
                                    break;
                                case "left":
                                    o = i.left + n.offsetHorizontal;
                                    break;
                                case "right":
                                    o = i.left + i.width - r.width - n.offsetHorizontal;
                                    break;
                                case "centered":
                                    o = i.left + i.width / 2 - r.width / 2 + n.offsetHorizontal;
                                    break;
                                default:
                                    o = i.left + i.width / 2 - r.width / 2 + n.offsetHorizontal;
                            }
                            switch (n.vertical) {
                                case "above":
                                    a = i.top - r.height - n.offsetVertical;
                                    break;
                                case "below":
                                    a = i.top + i.height + n.offsetVertical;
                                    break;
                                case "top":
                                    a = i.top + n.offsetVertical;
                                    break;
                                case "bottom":
                                    a = i.top + i.height - r.height - n.offsetVertical;
                                    break;
                                case "centered":
                                    a = i.top + i.height / 2 - r.height / 2 + n.offsetVertical;
                                    break;
                                default:
                                    a = i.top + i.height + n.offsetVertical;
                            }
                            const s = document.body.getBoundingClientRect();
                            return (
                                (n.noOverflowLeft || n.noOverflowX) && o < s.x && (o = s.x),
                                (n.noOverflowRight || n.noOverflowX) && o + r.width > s.x + s.width && (o = s.x + s.width - r.width),
                                (n.noOverflowTop || n.noOverflowY) && a < s.y && (a = s.y),
                                (n.noOverflowBottom || n.noOverflowY) && a + r.height > s.y + s.height && (o = s.y + s.height - r.height),
                                { left: o, top: a }
                            );
                        })(e, o, n.position);
                        (o.style.left = Math.round(s.left) + "px"), (o.style.top = Math.round(s.top) + "px"), o.classList.remove("h5p-toast-disabled");
                        const c = setTimeout(i, n.duration);
                        document.addEventListener("click", r);
                    }),
                    (g.ContentCopyrights = function () {
                        var e,
                            t = [],
                            n = [];
                        (this.setLabel = function (t) {
                            e = t;
                        }),
                            (this.addMedia = function (e) {
                                void 0 !== e && t.push(e);
                            }),
                            (this.addMediaInFront = function (e) {
                                void 0 !== e && t.unshift(e);
                            }),
                            (this.addContent = function (e) {
                                void 0 !== e && n.push(e);
                            }),
                            (this.toString = function () {
                                for (var r = "", i = 0; i < t.length; i++) r += t[i];
                                for (i = 0; i < n.length; i++) r += n[i];
                                return "" !== r && (void 0 !== e && (r = "<h3>" + e + "</h3>" + r), (r = '<div class="h5p-content-copyrights">' + r + "</div>")), r;
                            });
                    }),
                    (g.MediaCopyright = function (e, t, n, r) {
                        var i,
                            o = new g.DefinitionList(),
                            a = function (e) {
                                return void 0 === t || void 0 === t[e] ? g.t(e) : t[e];
                            },
                            s = function (e, t) {
                                var n,
                                    r,
                                    i = g.copyrightLicenses[e],
                                    o = "";
                                ("PD" === e && t) || (o += i.hasOwnProperty("label") ? i.label : i),
                                    i.versions && (!i.versions.default || (t && i.versions[t]) || (t = i.versions.default), t && i.versions[t] && (n = i.versions[t])),
                                    n && (o && (o += " "), (o += n.hasOwnProperty("label") ? n.label : n)),
                                    i.hasOwnProperty("link") ? (r = i.link.replace(":version", i.linkVersions ? i.linkVersions[t] : t)) : n && i.hasOwnProperty("link") && (r = n.link),
                                    r && (o = '<a href="' + r + '" target="_blank">' + o + "</a>");
                                var a = "";
                                return "PD" !== e && "C" !== e && (a += e), t && "CC0 1.0" !== t && (a && "GNU GPL" !== e && (a += " "), (a += t)), a && (o += " (" + a + ")"), "C" === e && (o += " &copy;"), o;
                            };
                        if (void 0 !== e) {
                            for (var c in r) r.hasOwnProperty(c) && (e[c] = r[c]);
                            void 0 === n && (n = ["contentType", "title", "license", "author", "year", "source", "licenseExtras", "changes"]);
                            for (var l = 0; l < n.length; l++) {
                                var u = n[l];
                                if (void 0 !== e[u] && "" !== e[u]) {
                                    var d = e[u];
                                    "license" === u && (d = s(e.license, e.version)), "source" === u && (d = d ? '<a href="' + d + '" target="_blank">' + d + "</a>" : void 0), o.add(new g.Field(a(u), d));
                                }
                            }
                        }
                        (this.setThumbnail = function (e) {
                            i = e;
                        }),
                            (this.undisclosed = function () {
                                if (1 === o.size()) {
                                    var e = o.get(0);
                                    if (e.getLabel() === a("license") && e.getValue() === s("U")) return !0;
                                }
                                return !1;
                            }),
                            (this.toString = function () {
                                var e = "";
                                return this.undisclosed() || (void 0 !== i && (e += i), "" !== (e += o) && (e = '<div class="h5p-media-copyright">' + e + "</div>")), e;
                            });
                    }),
                    (g.Thumbnail = function (e, t, n) {
                        var r;
                        void 0 !== t && (r = Math.round((t / n) * 100)),
                            (this.toString = function () {
                                return '<img src="' + e + '" alt="' + g.t("thumbnail") + '" class="h5p-thumbnail" height="100"' + (void 0 === r ? "" : ' width="' + r + '"') + "/>";
                            });
                    }),
                    (g.Field = function (e, t) {
                        (this.getLabel = function () {
                            return e;
                        }),
                            (this.getValue = function () {
                                return t;
                            });
                    }),
                    (g.DefinitionList = function () {
                        var e = [];
                        (this.add = function (t) {
                            e.push(t);
                        }),
                            (this.size = function () {
                                return e.length;
                            }),
                            (this.get = function (t) {
                                return e[t];
                            }),
                            (this.toString = function () {
                                for (var t = "", n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    t += "<dt>" + r.getLabel() + "</dt><dd>" + r.getValue() + "</dd>";
                                }
                                return "" === t ? t : '<dl class="h5p-definition-list">' + t + "</dl>";
                            });
                    }),
                    (g.Coords = function (e, t, n, r) {
                        return this instanceof g.Coords
                            ? ((this.x = 0),
                              (this.y = 0),
                              (this.w = 1),
                              (this.h = 1),
                              "object" == typeof e
                                  ? ((this.x = e.x), (this.y = e.y), (this.w = e.w), (this.h = e.h))
                                  : (void 0 !== e && (this.x = e), void 0 !== t && (this.y = t), void 0 !== n && (this.w = n), void 0 !== r && (this.h = r)),
                              this)
                            : new g.Coords(e, t, n, r);
                    }),
                    (g.libraryFromString = function (e) {
                        var t = /(.+)\s(\d+)\.(\d+)$/g.exec(e);
                        return null !== t && { machineName: t[1], majorVersion: parseInt(t[2]), minorVersion: parseInt(t[3]) };
                    }),
                    (g.getLibraryPath = function (e) {
                        return void 0 !== H5PIntegration.urlLibraries ? H5PIntegration.urlLibraries + "/" + e : H5PIntegration.url + "/libraries/" + e;
                    }),
                    (g.cloneObject = function (e, t) {
                        var n = e instanceof Array ? [] : {};
                        for (var r in e) e.hasOwnProperty(r) && (void 0 !== t && t && "object" == typeof e[r] ? (n[r] = g.cloneObject(e[r], t)) : (n[r] = e[r]));
                        return n;
                    }),
                    (g.trim = function (e) {
                        return e.replace(/^\s+|\s+$/g, "");
                    }),
                    (g.jsLoaded = function (e) {
                        return (H5PIntegration.loadedJs = H5PIntegration.loadedJs || []), -1 !== g.jQuery.inArray(e, H5PIntegration.loadedJs);
                    }),
                    (g.cssLoaded = function (e) {
                        return (H5PIntegration.loadedCss = H5PIntegration.loadedCss || []), -1 !== g.jQuery.inArray(e, H5PIntegration.loadedCss);
                    }),
                    (g.shuffleArray = function (e) {
                        if (e instanceof Array) {
                            var t,
                                n,
                                r,
                                i = e.length;
                            if (0 === i) return !1;
                            for (; --i; ) (t = Math.floor(Math.random() * (i + 1))), (n = e[i]), (r = e[t]), (e[i] = r), (e[t] = n);
                            return e;
                        }
                    }),
                    (g.setFinished = function (e, t, n, r) {
                        if (("number" == typeof t || t instanceof Number) && !0 === H5PIntegration.postUserStatistics) {
                            var i = function (e) {
                                return Math.round(e.getTime() / 1e3);
                            };
                            const o = { contentId: e, score: t, maxScore: n, opened: i(g.opened[e]), finished: i(new Date()), time: r };
                            g.jQuery.post(H5PIntegration.ajax.setFinished, o).fail(function () {
                                g.offlineRequestQueue.add(H5PIntegration.ajax.setFinished, o);
                            });
                        }
                    }),
                    Array.prototype.indexOf ||
                        (Array.prototype.indexOf = function (e) {
                            for (var t = 0; t < this.length; t++) if (this[t] === e) return t;
                            return -1;
                        }),
                    void 0 === String.prototype.trim &&
                        (String.prototype.trim = function () {
                            return g.trim(this);
                        }),
                    (g.trigger = function (e, t, n, r) {
                        void 0 !== e.trigger ? e.trigger(t, n, r) : void 0 !== e.$ && void 0 !== e.$.trigger && e.$.trigger(t);
                    }),
                    (g.on = function (e, t, n) {
                        void 0 !== e.on ? e.on(t, n) : void 0 !== e.$ && void 0 !== e.$.on && e.$.on(t, n);
                    }),
                    (g.createUUID = function () {
                        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
                            var t = (16 * Math.random()) | 0;
                            return ("x" === e ? t : (3 & t) | 8).toString(16);
                        });
                    }),
                    (g.createTitle = function (e, t) {
                        if (!e) return "";
                        void 0 === t && (t = 60);
                        var n = g
                            .jQuery("<div></div>")
                            .text(e.replace(/(<([^>]+)>)/gi, ""))
                            .text();
                        return n.length > t && (n = n.substr(0, t - 3) + "..."), n;
                    }),
                    (function (e) {
                        function t(t, n, r, i, o, a, s, c) {
                            if (void 0 !== H5PIntegration.user) {
                                var l = {
                                    url: H5PIntegration.ajax.contentUserData
                                        .replace(":contentId", t)
                                        .replace(":dataType", n)
                                        .replace(":subContentId", r || 0),
                                    dataType: "json",
                                    async: void 0 === c || c,
                                };
                                void 0 !== o ? ((l.type = "POST"), (l.data = { data: null === o ? 0 : o, preload: a ? 1 : 0, invalidate: s ? 1 : 0 })) : (l.type = "GET"),
                                    void 0 !== i &&
                                        ((l.error = function (e, t) {
                                            i(t);
                                        }),
                                        (l.success = function (e) {
                                            e.success ? (!1 !== e.data && void 0 !== e.data ? i(void 0, e.data) : i()) : i(e.message);
                                        })),
                                    e.ajax(l);
                            } else i("Not signed in.");
                        }
                        (g.getUserData = function (e, n, r, i) {
                            i || (i = 0), (H5PIntegration.contents = H5PIntegration.contents || {});
                            var o = H5PIntegration.contents["cid-" + e] || {},
                                a = o.contentUserData;
                            if (a && a[i] && void 0 !== a[i][n]) {
                                if ("RESET" === a[i][n]) return void r(void 0, null);
                                try {
                                    r(void 0, JSON.parse(a[i][n]));
                                } catch (e) {
                                    r(e);
                                }
                            } else
                                t(e, n, i, function (e, t) {
                                    if (e || void 0 === t) r(e, t);
                                    else {
                                        void 0 === o.contentUserData && (o.contentUserData = a = {}), void 0 === a[i] && (a[i] = {}), (a[i][n] = t);
                                        try {
                                            r(void 0, JSON.parse(t));
                                        } catch (e) {
                                            r(e);
                                        }
                                    }
                                });
                        }),
                            (g.setUserData = function (e, n, r, i) {
                                var o = g.jQuery.extend(!0, {}, { subContentId: 0, preloaded: !0, deleteOnChange: !1, async: !0 }, i);
                                try {
                                    r = JSON.stringify(r);
                                } catch (e) {
                                    return void (o.errorCallback && o.errorCallback(e));
                                }
                                var a = H5PIntegration.contents["cid-" + e];
                                void 0 === a && (a = H5PIntegration.contents["cid-" + e] = {}), a.contentUserData || (a.contentUserData = {});
                                var s = a.contentUserData;
                                void 0 === s[o.subContentId] && (s[o.subContentId] = {}),
                                    r !== s[o.subContentId][n] &&
                                        ((s[o.subContentId][n] = r),
                                        t(
                                            e,
                                            n,
                                            o.subContentId,
                                            function (e) {
                                                o.errorCallback && e && o.errorCallback(e);
                                            },
                                            r,
                                            o.preloaded,
                                            o.deleteOnChange,
                                            o.async
                                        ));
                            }),
                            (g.deleteUserData = function (e, n, r) {
                                r || (r = 0);
                                var i = H5PIntegration.contents["cid-" + e].contentUserData;
                                i && i[r] && i[r][n] && delete i[r][n], t(e, n, r, void 0, null);
                            }),
                            (g.getContentForInstance = function (e) {
                                var t = "cid-" + e;
                                return H5PIntegration && H5PIntegration.contents && H5PIntegration.contents[t] ? H5PIntegration.contents[t] : void 0;
                            }),
                            (g.ClipboardItem = function (e, t, n) {
                                var r = this;
                                t || ((t = "action"), (e = { action: e })),
                                    (r.specific = e),
                                    t && e[t] && (r.generic = t),
                                    n && (r.from = n),
                                    window.H5PEditor && H5PEditor.contentId && (r.contentId = H5PEditor.contentId),
                                    r.specific.width ||
                                        r.specific.height ||
                                        (function () {
                                            if (r.generic) {
                                                var e = r.specific[r.generic];
                                                e.params.file && e.params.file.width && e.params.file.height && ((r.width = 20), (r.height = (e.params.file.height / e.params.file.width) * r.width));
                                            }
                                        })();
                            }),
                            (g.clipboardify = function (e) {
                                e instanceof g.ClipboardItem || (e = new g.ClipboardItem(e)), g.setClipboard(e);
                            }),
                            (g.getClipboard = function () {
                                return n();
                            }),
                            (g.setClipboard = function (e) {
                                localStorage.setItem("h5pClipboard", JSON.stringify(e)), g.externalDispatcher.trigger("datainclipboard", { reset: !1 });
                            }),
                            (g.getLibraryConfig = function (e) {
                                return H5PIntegration.libraryConfig && H5PIntegration.libraryConfig[e] ? H5PIntegration.libraryConfig[e] : {};
                            });
                        var n = function () {
                                var e = localStorage.getItem("h5pClipboard");
                                if (e) {
                                    try {
                                        e = JSON.parse(e);
                                    } catch (e) {
                                        return void console.error("Unable to parse JSON from clipboard.", e);
                                    }
                                    return (
                                        r(e.specific, function (t) {
                                            return "#tmp" === t.substr(-4, 4) || !e.contentId || t.match(/^https?:\/\//i)
                                                ? t
                                                : H5PEditor.contentId
                                                ? "../" + e.contentId + "/" + t
                                                : (H5PEditor.contentRelUrl ? H5PEditor.contentRelUrl : "../content/") + e.contentId + "/" + t;
                                        }),
                                        e.generic && (e.generic = e.specific[e.generic]),
                                        e
                                    );
                                }
                            },
                            r = function (e, t) {
                                for (var n in e)
                                    if (e.hasOwnProperty(n) && e[n] instanceof Object) {
                                        var i = e[n];
                                        void 0 !== i.path && void 0 !== i.mime ? (i.path = t(i.path)) : (void 0 !== i.library && void 0 !== i.subContentId && delete i.subContentId, r(i, t));
                                    }
                            };
                        e(document).ready(function () {
                            window.addEventListener("storage", function (e) {
                                "h5pClipboard" === e.key && g.externalDispatcher.trigger("datainclipboard", { reset: null === e.newValue });
                            });
                            var e = { default: "4.0", "4.0": g.t("licenseCC40"), "3.0": g.t("licenseCC30"), 2.5: g.t("licenseCC25"), "2.0": g.t("licenseCC20"), "1.0": g.t("licenseCC10") };
                            if (
                                ((g.copyrightLicenses = {
                                    U: g.t("licenseU"),
                                    "CC BY": { label: g.t("licenseCCBY"), link: "http://creativecommons.org/licenses/by/:version", versions: e },
                                    "CC BY-SA": { label: g.t("licenseCCBYSA"), link: "http://creativecommons.org/licenses/by-sa/:version", versions: e },
                                    "CC BY-ND": { label: g.t("licenseCCBYND"), link: "http://creativecommons.org/licenses/by-nd/:version", versions: e },
                                    "CC BY-NC": { label: g.t("licenseCCBYNC"), link: "http://creativecommons.org/licenses/by-nc/:version", versions: e },
                                    "CC BY-NC-SA": { label: g.t("licenseCCBYNCSA"), link: "http://creativecommons.org/licenses/by-nc-sa/:version", versions: e },
                                    "CC BY-NC-ND": { label: g.t("licenseCCBYNCND"), link: "http://creativecommons.org/licenses/by-nc-nd/:version", versions: e },
                                    "CC0 1.0": { label: g.t("licenseCC010"), link: "https://creativecommons.org/publicdomain/zero/1.0/" },
                                    "GNU GPL": {
                                        label: g.t("licenseGPL"),
                                        link: "http://www.gnu.org/licenses/gpl-:version-standalone.html",
                                        linkVersions: { v3: "3.0", v2: "2.0", v1: "1.0" },
                                        versions: { default: "v3", v3: g.t("licenseV3"), v2: g.t("licenseV2"), v1: g.t("licenseV1") },
                                    },
                                    PD: {
                                        label: g.t("licensePD"),
                                        versions: {
                                            "CC0 1.0": { label: g.t("licenseCC010"), link: "https://creativecommons.org/publicdomain/zero/1.0/" },
                                            "CC PDM": { label: g.t("licensePDM"), link: "https://creativecommons.org/publicdomain/mark/1.0/" },
                                        },
                                    },
                                    "ODC PDDL": '<a href="http://opendatacommons.org/licenses/pddl/1.0/" target="_blank">Public Domain Dedication and Licence</a>',
                                    "CC PDM": { label: g.t("licensePDM"), link: "https://creativecommons.org/publicdomain/mark/1.0/" },
                                    C: g.t("licenseC"),
                                }),
                                g.isFramed &&
                                    !1 === g.externalEmbed &&
                                    g.externalDispatcher.on("*", function (e) {
                                        window.parent.H5P.externalDispatcher.trigger.call(this, e);
                                    }),
                                g.preventInit || g.init(document.body),
                                !1 !== H5PIntegration.saveFreq)
                            ) {
                                var t = 0,
                                    n = function () {
                                        var e = new Date().getTime();
                                        if (e - t > 250) {
                                            t = e;
                                            for (var n = 0; n < g.instances.length; n++) {
                                                var r = g.instances[n];
                                                if (r.getCurrentState instanceof Function || "function" == typeof r.getCurrentState) {
                                                    var i = r.getCurrentState();
                                                    void 0 !== i && g.setUserData(r.contentId, "state", i, { deleteOnChange: !0, async: !1 });
                                                }
                                            }
                                        }
                                    };
                                g.$window.one("beforeunload unload", function () {
                                    g.$window.off("pagehide beforeunload unload"), n();
                                }),
                                    g.$window.on("pagehide", n);
                            }
                        });
                    })(g.jQuery);
                const v = g;
                function m(e) {
                    if ((e = e.trim()).match(/^[a-z0-9]+:\/\//i)) return e;
                    if (e.startsWith("//")) return window.location.protocol + e;
                    if (e.startsWith("/")) return window.location.origin + e;
                    var t = window.location.protocol + "//" + window.location.host;
                    return window.location.pathname.indexOf("/") > -1 ? (t += window.location.pathname.split("/").slice(0, -1).join("/")) : (t += window.location.pathname), t + "/" + e;
                }
                H5PIntegration = window.H5PIntegration;
                var y = (function () {
                    function e(t, n) {
                        !(function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                        })(this, e),
                            (this.id = n.id || Math.random().toString(36).substr(2, 9)),
                            n.h5pJsonPath ? (this.h5pJsonPath = m(n.h5pJsonPath)) : (this.h5pJsonPath = m("workspace")),
                            n.librariesPath ? (this.librariesPath = m(n.librariesPath)) : (this.librariesPath = this.h5pJsonPath),
                            n.contentJsonPath ? (this.contentUrl = m(n.contentJsonPath)) : (this.contentUrl = m("".concat(this.h5pJsonPath, "/content")));
                        var r = { displayOptions: { frame: n.frame, copyright: n.copyright, embed: n.embed, icon: n.icon, export: n.export }, fullScreen: !1, url: window.location.href.split("?")[0].split("#")[0] };
                        n.downloadUrl && (r.exportUrl = m(n.downloadUrl)), n.metadata && (r.metadata = n.metadata);
                        var i = { preventH5PInit: !!n.preventH5PInit && n.preventH5PInit };
                        n.frameJs ? (i.coreScripts = [m(n.frameJs)]) : (i.coreScripts = ["./frame.bundle.js"]),
                            n.frameCss ? (i.coreStyles = [m(n.frameCss)]) : (i.coreStyles = [m("./styles/h5p.css")]),
                            n.fullScreen && (r.fullScreen = n.fullScreen),
                            n.xAPIObjectIRI && (r.url = n.xAPIObjectIRI),
                            n.embedCode && ((r.embedCode = n.embedCode), (r.resizeCode = n.resizeCode || "")),
                            "string" == typeof n.customCss && (n.customCss = [n.customCss]),
                            "string" == typeof n.customJs && (n.customJs = [n.customJs]);
                        var o = {
                            customCss: (n.customCss || []).map(function (e) {
                                return [m(e)];
                            }),
                            customJs: (n.customJs || []).map(function (e) {
                                return [m(e)];
                            }),
                        };
                        return (
                            n.contentUserData && (r.contentUserData = n.contentUserData),
                            n.saveFreq && (H5PIntegration.saveFreq = n.saveFreq),
                            n.postUserStatistics && (H5PIntegration.postUserStatistics = !1),
                            n.ajax && n.ajax.setFinishedUrl && (H5PIntegration.ajax.setFinished = n.ajax.setFinishedUrl),
                            n.user && (H5PIntegration.user = n.user),
                            n.ajax && n.ajax.contentUserDataUrl && (H5PIntegration.ajax.contentUserData = n.ajax.contentUserDataUrl),
                            this.initElement(t),
                            this.initH5P(i, r, o)
                        );
                    }
                    var t, n, r, i, o, a;
                    return (
                        (t = e),
                        (n = [
                            {
                                key: "initElement",
                                value: function (e) {
                                    if (!(e instanceof HTMLElement)) throw new Error("createH5P must be passed an element");
                                    var t = document.createElement("div");
                                    t.classList.add("h5p-iframe-wrapper"), (t.style.backgroundColor = "#DDD;");
                                    var n = document.createElement("iframe");
                                    (n.id = "h5p-iframe-".concat(this.id)),
                                        (n.src = "about:blank"),
                                        n.classList.add("h5p-iframe"),
                                        n.setAttribute("scrolling", "no"),
                                        n.setAttribute("data-content-id", "".concat(this.id)),
                                        n.setAttribute("frameBorder", 0),
                                        (n.style.width = "100%"),
                                        (n.style.height = "100%"),
                                        (n.style.border = "none"),
                                        (n.style.display = "block"),
                                        t.append(n),
                                        e.append(t),
                                        (n.contentWindow.jQuery = null);
                                },
                            },
                            {
                                key: "initH5P",
                                value:
                                    ((a = s(
                                        u().mark(function e(t, n, r) {
                                            var i, o, a, s, c, l, d, f, p;
                                            return u().wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return (e.next = 2), this.getJSON("".concat(this.h5pJsonPath, "/h5p.json"));
                                                            case 2:
                                                                return (this.h5p = e.sent), (e.next = 5), this.getJSON("".concat(this.contentUrl, "/content.json"));
                                                            case 5:
                                                                return (i = e.sent), (e.next = 8), this.checkIfPathIncludesVersion();
                                                            case 8:
                                                                return (H5PIntegration.pathIncludesVersion = this.pathIncludesVersion = e.sent), (e.next = 11), this.findMainLibrary();
                                                            case 11:
                                                                return (this.mainLibrary = e.sent), (e.next = 14), this.findAllDependencies();
                                                            case 14:
                                                                for (l in ((o = e.sent),
                                                                (a = this.sortDependencies(o, r)),
                                                                (s = a.styles),
                                                                (c = a.scripts),
                                                                (H5PIntegration.urlLibraries = this.librariesPath),
                                                                (H5PIntegration.contents = H5PIntegration.contents ? H5PIntegration.contents : {}),
                                                                (H5PIntegration.core = { styles: t.coreStyles, scripts: t.coreScripts }),
                                                                (H5PIntegration.contents["cid-".concat(this.id)] = {
                                                                    library: "".concat(this.mainLibrary.machineName, " ").concat(this.mainLibrary.majorVersion, ".").concat(this.mainLibrary.minorVersion),
                                                                    jsonContent: JSON.stringify(i),
                                                                    styles: s,
                                                                    scripts: c,
                                                                    displayOptions: n.displayOptions,
                                                                    contentUrl: this.contentUrl,
                                                                    metadata: {},
                                                                }),
                                                                n))
                                                                    null == H5PIntegration.contents["cid-".concat(this.id)][l] && (H5PIntegration.contents["cid-".concat(this.id)][l] = n[l]);
                                                                for (d in this.h5p)
                                                                    void 0 === (null === (f = H5PIntegration.contents["cid-".concat(this.id)]) || void 0 === f || null === (p = f.metadata) || void 0 === p ? void 0 : p[d]) &&
                                                                        (H5PIntegration.contents["cid-".concat(this.id)].metadata[d] = this.h5p[d]);
                                                                t.preventH5PInit || v.init();
                                                            case 23:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    )),
                                    function (e, t, n) {
                                        return a.apply(this, arguments);
                                    }),
                            },
                            {
                                key: "getJSON",
                                value: function (e) {
                                    return fetch(e).then(function (e) {
                                        return e.json();
                                    });
                                },
                            },
                            {
                                key: "checkIfPathIncludesVersion",
                                value:
                                    ((o = s(
                                        u().mark(function e() {
                                            var t, n, r;
                                            return u().wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                console.log(this.getJSON("".concat(this.librariesPath, "/").concat(n, "/library.json")));
                                                                return (
                                                                    (t = this.h5p.preloadedDependencies[0]),
                                                                    (n = t.machineName + "-" + t.majorVersion + "." + t.minorVersion),
                                                                    (e.prev = 2),
                                                                    (e.next = 5),
                                                                    this.getJSON("".concat(this.librariesPath, "/").concat(n, "/library.json"))
                                                                    );
                                                                    
                                                            case 5:
                                                                (r = !0), (e.next = 11);
                                                                break;
                                                            case 8:
                                                                (e.prev = 8), (e.t0 = e.catch(2)), (r = !1);
                                                            case 11:
                                                                return e.abrupt("return", r);
                                                            case 12:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this,
                                                [[2, 8]]
                                            );
                                        })
                                    )),
                                    function () {
                                        return o.apply(this, arguments);
                                    }),
                            },
                            {
                                key: "libraryPath",
                                value: function (e) {
                                    return e.machineName + (this.pathIncludesVersion ? "-" + e.majorVersion + "." + e.minorVersion : "");
                                },
                            },
                            {
                                key: "findMainLibrary",
                                value: function () {
                                    var e = this,
                                        t = this.h5p.preloadedDependencies.find(function (t) {
                                            return t.machineName === e.h5p.mainLibrary;
                                        });
                                    return (
                                        (this.mainLibraryPath = this.h5p.mainLibrary + (this.pathIncludesVersion ? "-" + t.majorVersion + "." + t.minorVersion : "")),
                                        this.getJSON("".concat(this.librariesPath, "/").concat(this.mainLibraryPath, "/library.json"))
                                    );
                                },
                            },
                            {
                                key: "findAllDependencies",
                                value: function () {
                                    var e = this,
                                        t = this.h5p.preloadedDependencies.map(function (t) {
                                            return e.libraryPath(t);
                                        });
                                    return this.loadDependencies(t, []);
                                },
                            },
                            {
                                key: "loadDependencies",
                                value:
                                    ((i = s(
                                        u().mark(function e(t, n) {
                                            var r,
                                                i,
                                                o,
                                                a = this;
                                            return u().wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return (
                                                                    (r = n),
                                                                    (i = []),
                                                                    (e.next = 4),
                                                                    Promise.all(
                                                                        t.map(function (e) {
                                                                            return a.findLibraryDependencies(e);
                                                                        })
                                                                    )
                                                                );
                                                            case 4:
                                                                if (
                                                                    ((o = e.sent).forEach(function (e) {
                                                                        r.push(e),
                                                                            e.dependencies.forEach(function (e) {
                                                                                r.find(function (t) {
                                                                                    return t.libraryPath === e;
                                                                                }) ||
                                                                                    o.find(function (t) {
                                                                                        return t.libraryPath === e;
                                                                                    }) ||
                                                                                    i.push(e);
                                                                            });
                                                                    }),
                                                                    !(i.length > 0))
                                                                ) {
                                                                    e.next = 8;
                                                                    break;
                                                                }
                                                                return e.abrupt("return", this.loadDependencies(i, r));
                                                            case 8:
                                                                return e.abrupt("return", r);
                                                            case 9:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    )),
                                    function (e, t) {
                                        return i.apply(this, arguments);
                                    }),
                            },
                            {
                                key: "findLibraryDependencies",
                                value:
                                    ((r = s(
                                        u().mark(function e(t) {
                                            var n,
                                                r,
                                                i,
                                                o = this;
                                            return u().wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return (e.next = 2), this.getJSON("".concat(this.librariesPath, "/").concat(t, "/library.json"));
                                                            case 2:
                                                                return (
                                                                    (n = e.sent),
                                                                    (r = this.libraryPath(n)),
                                                                    (i = []),
                                                                    n.preloadedDependencies &&
                                                                        (i = n.preloadedDependencies.map(function (e) {
                                                                            return o.libraryPath(e);
                                                                        })),
                                                                    e.abrupt("return", { libraryPath: r, dependencies: i, preloadedCss: n.preloadedCss, preloadedJs: n.preloadedJs })
                                                                );
                                                            case 7:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    )),
                                    function (e) {
                                        return r.apply(this, arguments);
                                    }),
                            },
                            {
                                key: "sortDependencies",
                                value: function (e, t) {
                                    var n = this,
                                        r = new (f())(),
                                        i = {},
                                        o = {};
                                    e.forEach(function (e) {
                                        r.add(e.libraryPath, e.dependencies),
                                            e.preloadedCss &&
                                                ((i[e.libraryPath] = i[e.libraryPath] ? i[e.libraryPath] : []),
                                                e.preloadedCss.forEach(function (t) {
                                                    i[e.libraryPath].push("".concat(n.librariesPath, "/").concat(e.libraryPath, "/").concat(t.path));
                                                })),
                                            e.preloadedJs &&
                                                ((o[e.libraryPath] = o[e.libraryPath] ? o[e.libraryPath] : []),
                                                e.preloadedJs.forEach(function (t) {
                                                    o[e.libraryPath].push("".concat(n.librariesPath, "/").concat(e.libraryPath, "/").concat(t.path));
                                                }));
                                    });
                                    var a = [],
                                        s = [];
                                    return (
                                        r
                                            .sort()
                                            .reverse()
                                            .forEach(function (e) {
                                                Array.prototype.push.apply(a, i[e]), Array.prototype.push.apply(s, o[e]);
                                            }),
                                        (a = a.concat(t.customCss)),
                                        (s = s.concat(t.customJs)),
                                        { styles: a, scripts: s }
                                    );
                                },
                            },
                        ]) && c(t.prototype, n),
                        e
                    );
                })();
                n(449), n(268), n(2), n(798), (window.H5P.preventInit = !0);
                const b = { H5P: y };
            })(),
            r.default
        );
    })();
});
