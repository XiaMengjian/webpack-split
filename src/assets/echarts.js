/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.echarts = {})
}(this, function (t) {
    "use strict";

    function e(t, e) {
        "createCanvas" === t && (hg = null), sg[t] = e
    }

    function n(t) {
        if (null == t || "object" != typeof t) return t;
        var e = t, i = tg.call(t);
        if ("[object Array]" === i) {
            if (!z(t)) {
                e = [];
                for (var r = 0, o = t.length; r < o; r++) e[r] = n(t[r])
            }
        } else if (Jp[i]) {
            if (!z(t)) {
                var a = t.constructor;
                if (t.constructor.from) e = a.from(t); else {
                    e = new a(t.length);
                    for (var r = 0, o = t.length; r < o; r++) e[r] = n(t[r])
                }
            }
        } else if (!Qp[i] && !z(t) && !M(t)) {
            e = {};
            for (var s in t) t.hasOwnProperty(s) && (e[s] = n(t[s]))
        }
        return e
    }

    function i(t, e, r) {
        if (!w(e) || !w(t)) return r ? n(e) : t;
        for (var o in e) if (e.hasOwnProperty(o)) {
            var a = t[o], s = e[o];
            !w(s) || !w(a) || y(s) || y(a) || M(s) || M(a) || b(s) || b(a) || z(s) || z(a) ? !r && o in t || (t[o] = n(e[o], !0)) : i(a, s, r)
        }
        return t
    }

    function r(t, e) {
        for (var n = t[0], r = 1, o = t.length; r < o; r++) n = i(n, t[r], e);
        return n
    }

    function o(t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        return t
    }

    function a(t, e, n) {
        for (var i in e) e.hasOwnProperty(i) && (n ? null != e[i] : null == t[i]) && (t[i] = e[i]);
        return t
    }

    function s() {
        return hg || (hg = lg().getContext("2d")), hg
    }

    function l(t, e) {
        if (t) {
            if (t.indexOf) return t.indexOf(e);
            for (var n = 0, i = t.length; n < i; n++) if (t[n] === e) return n
        }
        return -1
    }

    function h(t, e) {
        function n() {
        }

        var i = t.prototype;
        n.prototype = e.prototype, t.prototype = new n;
        for (var r in i) t.prototype[r] = i[r];
        t.prototype.constructor = t, t.superClass = e
    }

    function u(t, e, n) {
        a(t = "prototype" in t ? t.prototype : t, e = "prototype" in e ? e.prototype : e, n)
    }

    function c(t) {
        if (t) return "string" != typeof t && "number" == typeof t.length
    }

    function d(t, e, n) {
        if (t && e) if (t.forEach && t.forEach === ng) t.forEach(e, n); else if (t.length === +t.length) for (var i = 0, r = t.length; i < r; i++) e.call(n, t[i], i, t); else for (var o in t) t.hasOwnProperty(o) && e.call(n, t[o], o, t)
    }

    function f(t, e, n) {
        if (t && e) {
            if (t.map && t.map === og) return t.map(e, n);
            for (var i = [], r = 0, o = t.length; r < o; r++) i.push(e.call(n, t[r], r, t));
            return i
        }
    }

    function p(t, e, n, i) {
        if (t && e) {
            if (t.reduce && t.reduce === ag) return t.reduce(e, n, i);
            for (var r = 0, o = t.length; r < o; r++) n = e.call(i, n, t[r], r, t);
            return n
        }
    }

    function g(t, e, n) {
        if (t && e) {
            if (t.filter && t.filter === ig) return t.filter(e, n);
            for (var i = [], r = 0, o = t.length; r < o; r++) e.call(n, t[r], r, t) && i.push(t[r]);
            return i
        }
    }

    function m(t, e) {
        var n = rg.call(arguments, 2);
        return function () {
            return t.apply(e, n.concat(rg.call(arguments)))
        }
    }

    function v(t) {
        var e = rg.call(arguments, 1);
        return function () {
            return t.apply(this, e.concat(rg.call(arguments)))
        }
    }

    function y(t) {
        return "[object Array]" === tg.call(t)
    }

    function x(t) {
        return "function" == typeof t
    }

    function _(t) {
        return "[object String]" === tg.call(t)
    }

    function w(t) {
        var e = typeof t;
        return "function" === e || !!t && "object" === e
    }

    function b(t) {
        return !!Qp[tg.call(t)]
    }

    function S(t) {
        return !!Jp[tg.call(t)]
    }

    function M(t) {
        return "object" == typeof t && "number" == typeof t.nodeType && "object" == typeof t.ownerDocument
    }

    function I(t) {
        return t !== t
    }

    function T(t) {
        for (var e = 0, n = arguments.length; e < n; e++) if (null != arguments[e]) return arguments[e]
    }

    function A(t, e) {
        return null != t ? t : e
    }

    function C(t, e, n) {
        return null != t ? t : null != e ? e : n
    }

    function D() {
        return Function.call.apply(rg, arguments)
    }

    function k(t) {
        if ("number" == typeof t) return [t, t, t, t];
        var e = t.length;
        return 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t
    }

    function P(t, e) {
        if (!t) throw new Error(e)
    }

    function L(t) {
        return null == t ? null : "function" == typeof t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    }

    function O(t) {
        t[ug] = !0
    }

    function z(t) {
        return t[ug]
    }

    function E(t) {
        function e(t, e) {
            n ? i.set(t, e) : i.set(e, t)
        }

        var n = y(t);
        this.data = {};
        var i = this;
        t instanceof E ? t.each(e) : t && d(t, e)
    }

    function N(t) {
        return new E(t)
    }

    function R() {
    }

    function B(t, e) {
        var n = new dg(2);
        return null == t && (t = 0), null == e && (e = 0), n[0] = t, n[1] = e, n
    }

    function F(t, e) {
        return t[0] = e[0], t[1] = e[1], t
    }

    function V(t) {
        var e = new dg(2);
        return e[0] = t[0], e[1] = t[1], e
    }

    function H(t, e, n) {
        return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t
    }

    function W(t, e, n, i) {
        return t[0] = e[0] + n[0] * i, t[1] = e[1] + n[1] * i, t
    }

    function G(t, e, n) {
        return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t
    }

    function Z(t) {
        return Math.sqrt(U(t))
    }

    function U(t) {
        return t[0] * t[0] + t[1] * t[1]
    }

    function X(t, e, n) {
        return t[0] = e[0] * n, t[1] = e[1] * n, t
    }

    function Y(t, e) {
        var n = Z(e);
        return 0 === n ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / n, t[1] = e[1] / n), t
    }

    function j(t, e) {
        return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]))
    }

    function q(t, e) {
        return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
    }

    function $(t, e, n) {
        var i = e[0], r = e[1];
        return t[0] = n[0] * i + n[2] * r + n[4], t[1] = n[1] * i + n[3] * r + n[5], t
    }

    function K(t, e, n) {
        return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t
    }

    function Q(t, e, n) {
        return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t
    }

    function J() {
        this.on("mousedown", this._dragStart, this), this.on("mousemove", this._drag, this), this.on("mouseup", this._dragEnd, this), this.on("globalout", this._dragEnd, this)
    }

    function tt(t, e) {
        return {target: t, topTarget: e && e.topTarget}
    }

    function et(t, e) {
        var n = t._$eventProcessor;
        return null != e && n && n.normalizeQuery && (e = n.normalizeQuery(e)), e
    }

    function nt(t, e, n, i, r, o) {
        var a = t._$handlers;
        if ("function" == typeof n && (r = i, i = n, n = null), !i || !e) return t;
        n = et(t, n), a[e] || (a[e] = []);
        for (var s = 0; s < a[e].length; s++) if (a[e][s].h === i) return t;
        var l = {h: i, one: o, query: n, ctx: r || t, callAtLast: i.zrEventfulCallAtLast}, h = a[e].length - 1,
            u = a[e][h];
        return u && u.callAtLast ? a[e].splice(h, 0, l) : a[e].push(l), t
    }

    function it(t) {
        return t.getBoundingClientRect ? t.getBoundingClientRect() : {left: 0, top: 0}
    }

    function rt(t, e, n, i) {
        return n = n || {}, i || !Kp.canvasSupported ? ot(t, e, n) : Kp.browser.firefox && null != e.layerX && e.layerX !== e.offsetX ? (n.zrX = e.layerX, n.zrY = e.layerY) : null != e.offsetX ? (n.zrX = e.offsetX, n.zrY = e.offsetY) : ot(t, e, n), n
    }

    function ot(t, e, n) {
        var i = it(t);
        n.zrX = e.clientX - i.left, n.zrY = e.clientY - i.top
    }

    function at(t, e, n) {
        if (null != (e = e || window.event).zrX) return e;
        var i = e.type;
        if (i && i.indexOf("touch") >= 0) {
            var r = "touchend" !== i ? e.targetTouches[0] : e.changedTouches[0];
            r && rt(t, r, e, n)
        } else rt(t, e, e, n), e.zrDelta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3;
        var o = e.button;
        return null == e.which && void 0 !== o && wg.test(e.type) && (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
    }

    function st(t, e, n) {
        _g ? t.addEventListener(e, n) : t.attachEvent("on" + e, n)
    }

    function lt(t, e, n) {
        _g ? t.removeEventListener(e, n) : t.detachEvent("on" + e, n)
    }

    function ht(t) {
        return 2 === t.which || 3 === t.which
    }

    function ut(t) {
        var e = t[1][0] - t[0][0], n = t[1][1] - t[0][1];
        return Math.sqrt(e * e + n * n)
    }

    function ct(t) {
        return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2]
    }

    function dt(t, e, n) {
        return {
            type: t,
            event: n,
            target: e.target,
            topTarget: e.topTarget,
            cancelBubble: !1,
            offsetX: n.zrX,
            offsetY: n.zrY,
            gestureEvent: n.gestureEvent,
            pinchX: n.pinchX,
            pinchY: n.pinchY,
            pinchScale: n.pinchScale,
            wheelDelta: n.zrDelta,
            zrByTouch: n.zrByTouch,
            which: n.which,
            stop: ft
        }
    }

    function ft(t) {
        bg(this.event)
    }

    function pt() {
    }

    function gt(t, e, n) {
        if (t[t.rectHover ? "rectContain" : "contain"](e, n)) {
            for (var i, r = t; r;) {
                if (r.clipPath && !r.clipPath.contain(e, n)) return !1;
                r.silent && (i = !0), r = r.parent
            }
            return !i || Ig
        }
        return !1
    }

    function mt() {
        var t = new Cg(6);
        return vt(t), t
    }

    function vt(t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
    }

    function yt(t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t
    }

    function xt(t, e, n) {
        var i = e[0] * n[0] + e[2] * n[1], r = e[1] * n[0] + e[3] * n[1], o = e[0] * n[2] + e[2] * n[3],
            a = e[1] * n[2] + e[3] * n[3], s = e[0] * n[4] + e[2] * n[5] + e[4], l = e[1] * n[4] + e[3] * n[5] + e[5];
        return t[0] = i, t[1] = r, t[2] = o, t[3] = a, t[4] = s, t[5] = l, t
    }

    function _t(t, e, n) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + n[0], t[5] = e[5] + n[1], t
    }

    function wt(t, e, n) {
        var i = e[0], r = e[2], o = e[4], a = e[1], s = e[3], l = e[5], h = Math.sin(n), u = Math.cos(n);
        return t[0] = i * u + a * h, t[1] = -i * h + a * u, t[2] = r * u + s * h, t[3] = -r * h + u * s, t[4] = u * o + h * l, t[5] = u * l - h * o, t
    }

    function bt(t, e, n) {
        var i = n[0], r = n[1];
        return t[0] = e[0] * i, t[1] = e[1] * r, t[2] = e[2] * i, t[3] = e[3] * r, t[4] = e[4] * i, t[5] = e[5] * r, t
    }

    function St(t, e) {
        var n = e[0], i = e[2], r = e[4], o = e[1], a = e[3], s = e[5], l = n * a - o * i;
        return l ? (l = 1 / l, t[0] = a * l, t[1] = -o * l, t[2] = -i * l, t[3] = n * l, t[4] = (i * s - a * r) * l, t[5] = (o * r - n * s) * l, t) : null
    }

    function Mt(t) {
        return t > Pg || t < -Pg
    }

    function It(t) {
        this._target = t.target, this._life = t.life || 1e3, this._delay = t.delay || 0, this._initialized = !1, this.loop = null != t.loop && t.loop, this.gap = t.gap || 0, this.easing = t.easing || "Linear", this.onframe = t.onframe, this.ondestroy = t.ondestroy, this.onrestart = t.onrestart, this._pausedTime = 0, this._paused = !1
    }

    function Tt(t) {
        return (t = Math.round(t)) < 0 ? 0 : t > 255 ? 255 : t
    }

    function At(t) {
        return (t = Math.round(t)) < 0 ? 0 : t > 360 ? 360 : t
    }

    function Ct(t) {
        return t < 0 ? 0 : t > 1 ? 1 : t
    }

    function Dt(t) {
        return Tt(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 * 255 : parseInt(t, 10))
    }

    function kt(t) {
        return Ct(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 : parseFloat(t))
    }

    function Pt(t, e, n) {
        return n < 0 ? n += 1 : n > 1 && (n -= 1), 6 * n < 1 ? t + (e - t) * n * 6 : 2 * n < 1 ? e : 3 * n < 2 ? t + (e - t) * (2 / 3 - n) * 6 : t
    }

    function Lt(t, e, n) {
        return t + (e - t) * n
    }

    function Ot(t, e, n, i, r) {
        return t[0] = e, t[1] = n, t[2] = i, t[3] = r, t
    }

    function zt(t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
    }

    function Et(t, e) {
        Ug && zt(Ug, e), Ug = Zg.put(t, Ug || e.slice())
    }

    function Nt(t, e) {
        if (t) {
            e = e || [];
            var n = Zg.get(t);
            if (n) return zt(e, n);
            var i = (t += "").replace(/ /g, "").toLowerCase();
            if (i in Gg) return zt(e, Gg[i]), Et(t, e), e;
            if ("#" !== i.charAt(0)) {
                var r = i.indexOf("("), o = i.indexOf(")");
                if (-1 !== r && o + 1 === i.length) {
                    var a = i.substr(0, r), s = i.substr(r + 1, o - (r + 1)).split(","), l = 1;
                    switch (a) {
                        case"rgba":
                            if (4 !== s.length) return void Ot(e, 0, 0, 0, 1);
                            l = kt(s.pop());
                        case"rgb":
                            return 3 !== s.length ? void Ot(e, 0, 0, 0, 1) : (Ot(e, Dt(s[0]), Dt(s[1]), Dt(s[2]), l), Et(t, e), e);
                        case"hsla":
                            return 4 !== s.length ? void Ot(e, 0, 0, 0, 1) : (s[3] = kt(s[3]), Rt(s, e), Et(t, e), e);
                        case"hsl":
                            return 3 !== s.length ? void Ot(e, 0, 0, 0, 1) : (Rt(s, e), Et(t, e), e);
                        default:
                            return
                    }
                }
                Ot(e, 0, 0, 0, 1)
            } else {
                if (4 === i.length) return (h = parseInt(i.substr(1), 16)) >= 0 && h <= 4095 ? (Ot(e, (3840 & h) >> 4 | (3840 & h) >> 8, 240 & h | (240 & h) >> 4, 15 & h | (15 & h) << 4, 1), Et(t, e), e) : void Ot(e, 0, 0, 0, 1);
                if (7 === i.length) {
                    var h = parseInt(i.substr(1), 16);
                    return h >= 0 && h <= 16777215 ? (Ot(e, (16711680 & h) >> 16, (65280 & h) >> 8, 255 & h, 1), Et(t, e), e) : void Ot(e, 0, 0, 0, 1)
                }
            }
        }
    }

    function Rt(t, e) {
        var n = (parseFloat(t[0]) % 360 + 360) % 360 / 360, i = kt(t[1]), r = kt(t[2]),
            o = r <= .5 ? r * (i + 1) : r + i - r * i, a = 2 * r - o;
        return e = e || [], Ot(e, Tt(255 * Pt(a, o, n + 1 / 3)), Tt(255 * Pt(a, o, n)), Tt(255 * Pt(a, o, n - 1 / 3)), 1), 4 === t.length && (e[3] = t[3]), e
    }

    function Bt(t) {
        if (t) {
            var e, n, i = t[0] / 255, r = t[1] / 255, o = t[2] / 255, a = Math.min(i, r, o), s = Math.max(i, r, o),
                l = s - a, h = (s + a) / 2;
            if (0 === l) e = 0, n = 0; else {
                n = h < .5 ? l / (s + a) : l / (2 - s - a);
                var u = ((s - i) / 6 + l / 2) / l, c = ((s - r) / 6 + l / 2) / l, d = ((s - o) / 6 + l / 2) / l;
                i === s ? e = d - c : r === s ? e = 1 / 3 + u - d : o === s && (e = 2 / 3 + c - u), e < 0 && (e += 1), e > 1 && (e -= 1)
            }
            var f = [360 * e, n, h];
            return null != t[3] && f.push(t[3]), f
        }
    }

    function Ft(t, e) {
        var n = Nt(t);
        if (n) {
            for (var i = 0; i < 3; i++) n[i] = e < 0 ? n[i] * (1 - e) | 0 : (255 - n[i]) * e + n[i] | 0, n[i] > 255 ? n[i] = 255 : t[i] < 0 && (n[i] = 0);
            return Zt(n, 4 === n.length ? "rgba" : "rgb")
        }
    }

    function Vt(t) {
        var e = Nt(t);
        if (e) return ((1 << 24) + (e[0] << 16) + (e[1] << 8) + +e[2]).toString(16).slice(1)
    }

    function Ht(t, e, n) {
        if (e && e.length && t >= 0 && t <= 1) {
            n = n || [];
            var i = t * (e.length - 1), r = Math.floor(i), o = Math.ceil(i), a = e[r], s = e[o], l = i - r;
            return n[0] = Tt(Lt(a[0], s[0], l)), n[1] = Tt(Lt(a[1], s[1], l)), n[2] = Tt(Lt(a[2], s[2], l)), n[3] = Ct(Lt(a[3], s[3], l)), n
        }
    }

    function Wt(t, e, n) {
        if (e && e.length && t >= 0 && t <= 1) {
            var i = t * (e.length - 1), r = Math.floor(i), o = Math.ceil(i), a = Nt(e[r]), s = Nt(e[o]), l = i - r,
                h = Zt([Tt(Lt(a[0], s[0], l)), Tt(Lt(a[1], s[1], l)), Tt(Lt(a[2], s[2], l)), Ct(Lt(a[3], s[3], l))], "rgba");
            return n ? {color: h, leftIndex: r, rightIndex: o, value: i} : h
        }
    }

    function Gt(t, e) {
        if ((t = Nt(t)) && null != e) return t[3] = Ct(e), Zt(t, "rgba")
    }

    function Zt(t, e) {
        if (t && t.length) {
            var n = t[0] + "," + t[1] + "," + t[2];
            return "rgba" !== e && "hsva" !== e && "hsla" !== e || (n += "," + t[3]), e + "(" + n + ")"
        }
    }

    function Ut(t, e) {
        return t[e]
    }

    function Xt(t, e, n) {
        t[e] = n
    }

    function Yt(t, e, n) {
        return (e - t) * n + t
    }

    function jt(t, e, n) {
        return n > .5 ? e : t
    }

    function qt(t, e, n, i, r) {
        var o = t.length;
        if (1 === r) for (s = 0; s < o; s++) i[s] = Yt(t[s], e[s], n); else for (var a = o && t[0].length, s = 0; s < o; s++) for (var l = 0; l < a; l++) i[s][l] = Yt(t[s][l], e[s][l], n)
    }

    function $t(t, e, n) {
        var i = t.length, r = e.length;
        if (i !== r) if (i > r) t.length = r; else for (a = i; a < r; a++) t.push(1 === n ? e[a] : qg.call(e[a]));
        for (var o = t[0] && t[0].length, a = 0; a < t.length; a++) if (1 === n) isNaN(t[a]) && (t[a] = e[a]); else for (var s = 0; s < o; s++) isNaN(t[a][s]) && (t[a][s] = e[a][s])
    }

    function Kt(t, e, n) {
        if (t === e) return !0;
        var i = t.length;
        if (i !== e.length) return !1;
        if (1 === n) {
            for (o = 0; o < i; o++) if (t[o] !== e[o]) return !1
        } else for (var r = t[0].length, o = 0; o < i; o++) for (var a = 0; a < r; a++) if (t[o][a] !== e[o][a]) return !1;
        return !0
    }

    function Qt(t, e, n, i, r, o, a, s, l) {
        var h = t.length;
        if (1 === l) for (c = 0; c < h; c++) s[c] = Jt(t[c], e[c], n[c], i[c], r, o, a); else for (var u = t[0].length, c = 0; c < h; c++) for (var d = 0; d < u; d++) s[c][d] = Jt(t[c][d], e[c][d], n[c][d], i[c][d], r, o, a)
    }

    function Jt(t, e, n, i, r, o, a) {
        var s = .5 * (n - t), l = .5 * (i - e);
        return (2 * (e - n) + s + l) * a + (-3 * (e - n) - 2 * s - l) * o + s * r + e
    }

    function te(t) {
        if (c(t)) {
            var e = t.length;
            if (c(t[0])) {
                for (var n = [], i = 0; i < e; i++) n.push(qg.call(t[i]));
                return n
            }
            return qg.call(t)
        }
        return t
    }

    function ee(t) {
        return t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.floor(t[2]), "rgba(" + t.join(",") + ")"
    }

    function ne(t) {
        var e = t[t.length - 1].value;
        return c(e && e[0]) ? 2 : 1
    }

    function ie(t, e, n, i, r, o) {
        var a = t._getter, s = t._setter, l = "spline" === e, h = i.length;
        if (h) {
            var u, d = c(i[0].value), f = !1, p = !1, g = d ? ne(i) : 0;
            i.sort(function (t, e) {
                return t.time - e.time
            }), u = i[h - 1].time;
            for (var m = [], v = [], y = i[0].value, x = !0, _ = 0; _ < h; _++) {
                m.push(i[_].time / u);
                var w = i[_].value;
                if (d && Kt(w, y, g) || !d && w === y || (x = !1), y = w, "string" == typeof w) {
                    var b = Nt(w);
                    b ? (w = b, f = !0) : p = !0
                }
                v.push(w)
            }
            if (o || !x) {
                for (var S = v[h - 1], _ = 0; _ < h - 1; _++) d ? $t(v[_], S, g) : !isNaN(v[_]) || isNaN(S) || p || f || (v[_] = S);
                d && $t(a(t._target, r), S, g);
                var M, I, T, A, C, D, k = 0, P = 0;
                if (f) var L = [0, 0, 0, 0];
                var O = new It({
                    target: t._target, life: u, loop: t._loop, delay: t._delay, onframe: function (t, e) {
                        var n;
                        if (e < 0) n = 0; else if (e < P) {
                            for (n = M = Math.min(k + 1, h - 1); n >= 0 && !(m[n] <= e); n--) ;
                            n = Math.min(n, h - 2)
                        } else {
                            for (n = k; n < h && !(m[n] > e); n++) ;
                            n = Math.min(n - 1, h - 2)
                        }
                        k = n, P = e;
                        var i = m[n + 1] - m[n];
                        if (0 !== i) if (I = (e - m[n]) / i, l) if (A = v[n], T = v[0 === n ? n : n - 1], C = v[n > h - 2 ? h - 1 : n + 1], D = v[n > h - 3 ? h - 1 : n + 2], d) Qt(T, A, C, D, I, I * I, I * I * I, a(t, r), g); else {
                            if (f) o = Qt(T, A, C, D, I, I * I, I * I * I, L, 1), o = ee(L); else {
                                if (p) return jt(A, C, I);
                                o = Jt(T, A, C, D, I, I * I, I * I * I)
                            }
                            s(t, r, o)
                        } else if (d) qt(v[n], v[n + 1], I, a(t, r), g); else {
                            var o;
                            if (f) qt(v[n], v[n + 1], I, L, 1), o = ee(L); else {
                                if (p) return jt(v[n], v[n + 1], I);
                                o = Yt(v[n], v[n + 1], I)
                            }
                            s(t, r, o)
                        }
                    }, ondestroy: n
                });
                return e && "spline" !== e && (O.easing = e), O
            }
        }
    }

    function re(t, e, n, i, r, o, a, s) {
        _(i) ? (o = r, r = i, i = 0) : x(r) ? (o = r, r = "linear", i = 0) : x(i) ? (o = i, i = 0) : x(n) ? (o = n, n = 500) : n || (n = 500), t.stopAnimation(), oe(t, "", t, e, n, i, s);
        var l = t.animators.slice(), h = l.length;
        h || o && o();
        for (var u = 0; u < l.length; u++) l[u].done(function () {
            --h || o && o()
        }).start(r, a)
    }

    function oe(t, e, n, i, r, o, a) {
        var s = {}, l = 0;
        for (var h in i) i.hasOwnProperty(h) && (null != n[h] ? w(i[h]) && !c(i[h]) ? oe(t, e ? e + "." + h : h, n[h], i[h], r, o, a) : (a ? (s[h] = n[h], ae(t, e, h, i[h])) : s[h] = i[h], l++) : null == i[h] || a || ae(t, e, h, i[h]));
        l > 0 && t.animate(e, !1).when(null == r ? 500 : r, s).delay(o || 0)
    }

    function ae(t, e, n, i) {
        if (e) {
            var r = {};
            r[e] = {}, r[e][n] = i, t.attr(r)
        } else t.attr(n, i)
    }

    function se(t, e, n, i) {
        n < 0 && (t += n, n = -n), i < 0 && (e += i, i = -i), this.x = t, this.y = e, this.width = n, this.height = i
    }

    function le(t) {
        for (var e = 0; t >= sm;) e |= 1 & t, t >>= 1;
        return t + e
    }

    function he(t, e, n, i) {
        var r = e + 1;
        if (r === n) return 1;
        if (i(t[r++], t[e]) < 0) {
            for (; r < n && i(t[r], t[r - 1]) < 0;) r++;
            ue(t, e, r)
        } else for (; r < n && i(t[r], t[r - 1]) >= 0;) r++;
        return r - e
    }

    function ue(t, e, n) {
        for (n--; e < n;) {
            var i = t[e];
            t[e++] = t[n], t[n--] = i
        }
    }

    function ce(t, e, n, i, r) {
        for (i === e && i++; i < n; i++) {
            for (var o, a = t[i], s = e, l = i; s < l;) r(a, t[o = s + l >>> 1]) < 0 ? l = o : s = o + 1;
            var h = i - s;
            switch (h) {
                case 3:
                    t[s + 3] = t[s + 2];
                case 2:
                    t[s + 2] = t[s + 1];
                case 1:
                    t[s + 1] = t[s];
                    break;
                default:
                    for (; h > 0;) t[s + h] = t[s + h - 1], h--
            }
            t[s] = a
        }
    }

    function de(t, e, n, i, r, o) {
        var a = 0, s = 0, l = 1;
        if (o(t, e[n + r]) > 0) {
            for (s = i - r; l < s && o(t, e[n + r + l]) > 0;) a = l, (l = 1 + (l << 1)) <= 0 && (l = s);
            l > s && (l = s), a += r, l += r
        } else {
            for (s = r + 1; l < s && o(t, e[n + r - l]) <= 0;) a = l, (l = 1 + (l << 1)) <= 0 && (l = s);
            l > s && (l = s);
            var h = a;
            a = r - l, l = r - h
        }
        for (a++; a < l;) {
            var u = a + (l - a >>> 1);
            o(t, e[n + u]) > 0 ? a = u + 1 : l = u
        }
        return l
    }

    function fe(t, e, n, i, r, o) {
        var a = 0, s = 0, l = 1;
        if (o(t, e[n + r]) < 0) {
            for (s = r + 1; l < s && o(t, e[n + r - l]) < 0;) a = l, (l = 1 + (l << 1)) <= 0 && (l = s);
            l > s && (l = s);
            var h = a;
            a = r - l, l = r - h
        } else {
            for (s = i - r; l < s && o(t, e[n + r + l]) >= 0;) a = l, (l = 1 + (l << 1)) <= 0 && (l = s);
            l > s && (l = s), a += r, l += r
        }
        for (a++; a < l;) {
            var u = a + (l - a >>> 1);
            o(t, e[n + u]) < 0 ? l = u : a = u + 1
        }
        return l
    }

    function pe(t, e) {
        function n(n) {
            var s = o[n], h = a[n], u = o[n + 1], c = a[n + 1];
            a[n] = h + c, n === l - 3 && (o[n + 1] = o[n + 2], a[n + 1] = a[n + 2]), l--;
            var d = fe(t[u], t, s, h, 0, e);
            s += d, 0 !== (h -= d) && 0 !== (c = de(t[s + h - 1], t, u, c, c - 1, e)) && (h <= c ? i(s, h, u, c) : r(s, h, u, c))
        }

        function i(n, i, r, o) {
            var a = 0;
            for (a = 0; a < i; a++) h[a] = t[n + a];
            var l = 0, u = r, c = n;
            if (t[c++] = t[u++], 0 != --o) if (1 !== i) {
                for (var d, f, p, g = s; ;) {
                    d = 0, f = 0, p = !1;
                    do {
                        if (e(t[u], h[l]) < 0) {
                            if (t[c++] = t[u++], f++, d = 0, 0 == --o) {
                                p = !0;
                                break
                            }
                        } else if (t[c++] = h[l++], d++, f = 0, 1 == --i) {
                            p = !0;
                            break
                        }
                    } while ((d | f) < g);
                    if (p) break;
                    do {
                        if (0 !== (d = fe(t[u], h, l, i, 0, e))) {
                            for (a = 0; a < d; a++) t[c + a] = h[l + a];
                            if (c += d, l += d, (i -= d) <= 1) {
                                p = !0;
                                break
                            }
                        }
                        if (t[c++] = t[u++], 0 == --o) {
                            p = !0;
                            break
                        }
                        if (0 !== (f = de(h[l], t, u, o, 0, e))) {
                            for (a = 0; a < f; a++) t[c + a] = t[u + a];
                            if (c += f, u += f, 0 === (o -= f)) {
                                p = !0;
                                break
                            }
                        }
                        if (t[c++] = h[l++], 1 == --i) {
                            p = !0;
                            break
                        }
                        g--
                    } while (d >= lm || f >= lm);
                    if (p) break;
                    g < 0 && (g = 0), g += 2
                }
                if ((s = g) < 1 && (s = 1), 1 === i) {
                    for (a = 0; a < o; a++) t[c + a] = t[u + a];
                    t[c + o] = h[l]
                } else {
                    if (0 === i) throw new Error;
                    for (a = 0; a < i; a++) t[c + a] = h[l + a]
                }
            } else {
                for (a = 0; a < o; a++) t[c + a] = t[u + a];
                t[c + o] = h[l]
            } else for (a = 0; a < i; a++) t[c + a] = h[l + a]
        }

        function r(n, i, r, o) {
            var a = 0;
            for (a = 0; a < o; a++) h[a] = t[r + a];
            var l = n + i - 1, u = o - 1, c = r + o - 1, d = 0, f = 0;
            if (t[c--] = t[l--], 0 != --i) if (1 !== o) {
                for (var p = s; ;) {
                    var g = 0, m = 0, v = !1;
                    do {
                        if (e(h[u], t[l]) < 0) {
                            if (t[c--] = t[l--], g++, m = 0, 0 == --i) {
                                v = !0;
                                break
                            }
                        } else if (t[c--] = h[u--], m++, g = 0, 1 == --o) {
                            v = !0;
                            break
                        }
                    } while ((g | m) < p);
                    if (v) break;
                    do {
                        if (0 != (g = i - fe(h[u], t, n, i, i - 1, e))) {
                            for (i -= g, f = (c -= g) + 1, d = (l -= g) + 1, a = g - 1; a >= 0; a--) t[f + a] = t[d + a];
                            if (0 === i) {
                                v = !0;
                                break
                            }
                        }
                        if (t[c--] = h[u--], 1 == --o) {
                            v = !0;
                            break
                        }
                        if (0 != (m = o - de(t[l], h, 0, o, o - 1, e))) {
                            for (o -= m, f = (c -= m) + 1, d = (u -= m) + 1, a = 0; a < m; a++) t[f + a] = h[d + a];
                            if (o <= 1) {
                                v = !0;
                                break
                            }
                        }
                        if (t[c--] = t[l--], 0 == --i) {
                            v = !0;
                            break
                        }
                        p--
                    } while (g >= lm || m >= lm);
                    if (v) break;
                    p < 0 && (p = 0), p += 2
                }
                if ((s = p) < 1 && (s = 1), 1 === o) {
                    for (f = (c -= i) + 1, d = (l -= i) + 1, a = i - 1; a >= 0; a--) t[f + a] = t[d + a];
                    t[c] = h[u]
                } else {
                    if (0 === o) throw new Error;
                    for (d = c - (o - 1), a = 0; a < o; a++) t[d + a] = h[a]
                }
            } else {
                for (f = (c -= i) + 1, d = (l -= i) + 1, a = i - 1; a >= 0; a--) t[f + a] = t[d + a];
                t[c] = h[u]
            } else for (d = c - (o - 1), a = 0; a < o; a++) t[d + a] = h[a]
        }

        var o, a, s = lm, l = 0, h = [];
        o = [], a = [], this.mergeRuns = function () {
            for (; l > 1;) {
                var t = l - 2;
                if (t >= 1 && a[t - 1] <= a[t] + a[t + 1] || t >= 2 && a[t - 2] <= a[t] + a[t - 1]) a[t - 1] < a[t + 1] && t--; else if (a[t] > a[t + 1]) break;
                n(t)
            }
        }, this.forceMergeRuns = function () {
            for (; l > 1;) {
                var t = l - 2;
                t > 0 && a[t - 1] < a[t + 1] && t--, n(t)
            }
        }, this.pushRun = function (t, e) {
            o[l] = t, a[l] = e, l += 1
        }
    }

    function ge(t, e, n, i) {
        n || (n = 0), i || (i = t.length);
        var r = i - n;
        if (!(r < 2)) {
            var o = 0;
            if (r < sm) return o = he(t, n, i, e), void ce(t, n, i, n + o, e);
            var a = new pe(t, e), s = le(r);
            do {
                if ((o = he(t, n, i, e)) < s) {
                    var l = r;
                    l > s && (l = s), ce(t, n, n + l, n + o, e), o = l
                }
                a.pushRun(n, o), a.mergeRuns(), r -= o, n += o
            } while (0 !== r);
            a.forceMergeRuns()
        }
    }

    function me(t, e) {
        return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 - e.z2 : t.z - e.z : t.zlevel - e.zlevel
    }

    function ve(t, e, n) {
        var i = null == e.x ? 0 : e.x, r = null == e.x2 ? 1 : e.x2, o = null == e.y ? 0 : e.y,
            a = null == e.y2 ? 0 : e.y2;
        return e.global || (i = i * n.width + n.x, r = r * n.width + n.x, o = o * n.height + n.y, a = a * n.height + n.y), i = isNaN(i) ? 0 : i, r = isNaN(r) ? 1 : r, o = isNaN(o) ? 0 : o, a = isNaN(a) ? 0 : a, t.createLinearGradient(i, o, r, a)
    }

    function ye(t, e, n) {
        var i = n.width, r = n.height, o = Math.min(i, r), a = null == e.x ? .5 : e.x, s = null == e.y ? .5 : e.y,
            l = null == e.r ? .5 : e.r;
        return e.global || (a = a * i + n.x, s = s * r + n.y, l *= o), t.createRadialGradient(a, s, 0, a, s, l)
    }

    function xe() {
        return !1
    }

    function _e(t, e, n) {
        var i = lg(), r = e.getWidth(), o = e.getHeight(), a = i.style;
        return a && (a.position = "absolute", a.left = 0, a.top = 0, a.width = r + "px", a.height = o + "px", i.setAttribute("data-zr-dom-id", t)), i.width = r * n, i.height = o * n, i
    }

    function we(t) {
        if ("string" == typeof t) {
            var e = bm.get(t);
            return e && e.image
        }
        return t
    }

    function be(t, e, n, i, r) {
        if (t) {
            if ("string" == typeof t) {
                if (e && e.__zrImageSrc === t || !n) return e;
                var o = bm.get(t), a = {hostEl: n, cb: i, cbPayload: r};
                return o ? !Me(e = o.image) && o.pending.push(a) : ((e = new Image).onload = e.onerror = Se, bm.put(t, e.__cachedImgObj = {
                    image: e,
                    pending: [a]
                }), e.src = e.__zrImageSrc = t), e
            }
            return t
        }
        return e
    }

    function Se() {
        var t = this.__cachedImgObj;
        this.onload = this.onerror = this.__cachedImgObj = null;
        for (var e = 0; e < t.pending.length; e++) {
            var n = t.pending[e], i = n.cb;
            i && i(this, n.cbPayload), n.hostEl.dirty()
        }
        t.pending.length = 0
    }

    function Me(t) {
        return t && t.width && t.height
    }

    function Ie(t, e) {
        var n = t + ":" + (e = e || Am);
        if (Sm[n]) return Sm[n];
        for (var i = (t + "").split("\n"), r = 0, o = 0, a = i.length; o < a; o++) r = Math.max(Re(i[o], e).width, r);
        return Mm > Im && (Mm = 0, Sm = {}), Mm++, Sm[n] = r, r
    }

    function Te(t, e, n, i, r, o, a, s) {
        return a ? Ce(t, e, n, i, r, o, a, s) : Ae(t, e, n, i, r, o, s)
    }

    function Ae(t, e, n, i, r, o, a) {
        var s = Be(t, e, r, o, a), l = Ie(t, e);
        r && (l += r[1] + r[3]);
        var h = s.outerHeight, u = new se(De(0, l, n), ke(0, h, i), l, h);
        return u.lineHeight = s.lineHeight, u
    }

    function Ce(t, e, n, i, r, o, a, s) {
        var l = Fe(t, {rich: a, truncate: s, font: e, textAlign: n, textPadding: r, textLineHeight: o}),
            h = l.outerWidth, u = l.outerHeight;
        return new se(De(0, h, n), ke(0, u, i), h, u)
    }

    function De(t, e, n) {
        return "right" === n ? t -= e : "center" === n && (t -= e / 2), t
    }

    function ke(t, e, n) {
        return "middle" === n ? t -= e / 2 : "bottom" === n && (t -= e), t
    }

    function Pe(t, e, n) {
        var i = e.x, r = e.y, o = e.height, a = e.width, s = o / 2, l = "left", h = "top";
        switch (t) {
            case"left":
                i -= n, r += s, l = "right", h = "middle";
                break;
            case"right":
                i += n + a, r += s, h = "middle";
                break;
            case"top":
                i += a / 2, r -= n, l = "center", h = "bottom";
                break;
            case"bottom":
                i += a / 2, r += o + n, l = "center";
                break;
            case"inside":
                i += a / 2, r += s, l = "center", h = "middle";
                break;
            case"insideLeft":
                i += n, r += s, h = "middle";
                break;
            case"insideRight":
                i += a - n, r += s, l = "right", h = "middle";
                break;
            case"insideTop":
                i += a / 2, r += n, l = "center";
                break;
            case"insideBottom":
                i += a / 2, r += o - n, l = "center", h = "bottom";
                break;
            case"insideTopLeft":
                i += n, r += n;
                break;
            case"insideTopRight":
                i += a - n, r += n, l = "right";
                break;
            case"insideBottomLeft":
                i += n, r += o - n, h = "bottom";
                break;
            case"insideBottomRight":
                i += a - n, r += o - n, l = "right", h = "bottom"
        }
        return {x: i, y: r, textAlign: l, textVerticalAlign: h}
    }

    function Le(t, e, n, i, r) {
        if (!e) return "";
        var o = (t + "").split("\n");
        r = Oe(e, n, i, r);
        for (var a = 0, s = o.length; a < s; a++) o[a] = ze(o[a], r);
        return o.join("\n")
    }

    function Oe(t, e, n, i) {
        (i = o({}, i)).font = e;
        var n = A(n, "...");
        i.maxIterations = A(i.maxIterations, 2);
        var r = i.minChar = A(i.minChar, 0);
        i.cnCharWidth = Ie("国", e);
        var a = i.ascCharWidth = Ie("a", e);
        i.placeholder = A(i.placeholder, "");
        for (var s = t = Math.max(0, t - 1), l = 0; l < r && s >= a; l++) s -= a;
        var h = Ie(n, e);
        return h > s && (n = "", h = 0), s = t - h, i.ellipsis = n, i.ellipsisWidth = h, i.contentWidth = s, i.containerWidth = t, i
    }

    function ze(t, e) {
        var n = e.containerWidth, i = e.font, r = e.contentWidth;
        if (!n) return "";
        var o = Ie(t, i);
        if (o <= n) return t;
        for (var a = 0; ; a++) {
            if (o <= r || a >= e.maxIterations) {
                t += e.ellipsis;
                break
            }
            var s = 0 === a ? Ee(t, r, e.ascCharWidth, e.cnCharWidth) : o > 0 ? Math.floor(t.length * r / o) : 0;
            o = Ie(t = t.substr(0, s), i)
        }
        return "" === t && (t = e.placeholder), t
    }

    function Ee(t, e, n, i) {
        for (var r = 0, o = 0, a = t.length; o < a && r < e; o++) {
            var s = t.charCodeAt(o);
            r += 0 <= s && s <= 127 ? n : i
        }
        return o
    }

    function Ne(t) {
        return Ie("国", t)
    }

    function Re(t, e) {
        return Cm.measureText(t, e)
    }

    function Be(t, e, n, i, r) {
        null != t && (t += "");
        var o = A(i, Ne(e)), a = t ? t.split("\n") : [], s = a.length * o, l = s;
        if (n && (l += n[0] + n[2]), t && r) {
            var h = r.outerHeight, u = r.outerWidth;
            if (null != h && l > h) t = "", a = []; else if (null != u) for (var c = Oe(u - (n ? n[1] + n[3] : 0), e, r.ellipsis, {
                minChar: r.minChar,
                placeholder: r.placeholder
            }), d = 0, f = a.length; d < f; d++) a[d] = ze(a[d], c)
        }
        return {lines: a, height: s, outerHeight: l, lineHeight: o}
    }

    function Fe(t, e) {
        var n = {lines: [], width: 0, height: 0};
        if (null != t && (t += ""), !t) return n;
        for (var i, r = Tm.lastIndex = 0; null != (i = Tm.exec(t));) {
            var o = i.index;
            o > r && Ve(n, t.substring(r, o)), Ve(n, i[2], i[1]), r = Tm.lastIndex
        }
        r < t.length && Ve(n, t.substring(r, t.length));
        var a = n.lines, s = 0, l = 0, h = [], u = e.textPadding, c = e.truncate, d = c && c.outerWidth,
            f = c && c.outerHeight;
        u && (null != d && (d -= u[1] + u[3]), null != f && (f -= u[0] + u[2]));
        for (k = 0; k < a.length; k++) {
            for (var p = a[k], g = 0, m = 0, v = 0; v < p.tokens.length; v++) {
                var y = (P = p.tokens[v]).styleName && e.rich[P.styleName] || {}, x = P.textPadding = y.textPadding,
                    _ = P.font = y.font || e.font, w = P.textHeight = A(y.textHeight, Ne(_));
                if (x && (w += x[0] + x[2]), P.height = w, P.lineHeight = C(y.textLineHeight, e.textLineHeight, w), P.textAlign = y && y.textAlign || e.textAlign, P.textVerticalAlign = y && y.textVerticalAlign || "middle", null != f && s + P.lineHeight > f) return {
                    lines: [],
                    width: 0,
                    height: 0
                };
                P.textWidth = Ie(P.text, _);
                var b = y.textWidth, S = null == b || "auto" === b;
                if ("string" == typeof b && "%" === b.charAt(b.length - 1)) P.percentWidth = b, h.push(P), b = 0; else {
                    if (S) {
                        b = P.textWidth;
                        var M = y.textBackgroundColor, I = M && M.image;
                        I && Me(I = we(I)) && (b = Math.max(b, I.width * w / I.height))
                    }
                    var T = x ? x[1] + x[3] : 0;
                    b += T;
                    var D = null != d ? d - m : null;
                    null != D && D < b && (!S || D < T ? (P.text = "", P.textWidth = b = 0) : (P.text = Le(P.text, D - T, _, c.ellipsis, {minChar: c.minChar}), P.textWidth = Ie(P.text, _), b = P.textWidth + T))
                }
                m += P.width = b, y && (g = Math.max(g, P.lineHeight))
            }
            p.width = m, p.lineHeight = g, s += g, l = Math.max(l, m)
        }
        n.outerWidth = n.width = A(e.textWidth, l), n.outerHeight = n.height = A(e.textHeight, s), u && (n.outerWidth += u[1] + u[3], n.outerHeight += u[0] + u[2]);
        for (var k = 0; k < h.length; k++) {
            var P = h[k], L = P.percentWidth;
            P.width = parseInt(L, 10) / 100 * l
        }
        return n
    }

    function Ve(t, e, n) {
        for (var i = "" === e, r = e.split("\n"), o = t.lines, a = 0; a < r.length; a++) {
            var s = r[a], l = {styleName: n, text: s, isLineHolder: !s && !i};
            if (a) o.push({tokens: [l]}); else {
                var h = (o[o.length - 1] || (o[0] = {tokens: []})).tokens, u = h.length;
                1 === u && h[0].isLineHolder ? h[0] = l : (s || !u || i) && h.push(l)
            }
        }
    }

    function He(t) {
        var e = (t.fontSize || t.fontFamily) && [t.fontStyle, t.fontWeight, (t.fontSize || 12) + "px", t.fontFamily || "sans-serif"].join(" ");
        return e && L(e) || t.textFont || t.font
    }

    function We(t, e) {
        var n, i, r, o, a = e.x, s = e.y, l = e.width, h = e.height, u = e.r;
        l < 0 && (a += l, l = -l), h < 0 && (s += h, h = -h), "number" == typeof u ? n = i = r = o = u : u instanceof Array ? 1 === u.length ? n = i = r = o = u[0] : 2 === u.length ? (n = r = u[0], i = o = u[1]) : 3 === u.length ? (n = u[0], i = o = u[1], r = u[2]) : (n = u[0], i = u[1], r = u[2], o = u[3]) : n = i = r = o = 0;
        var c;
        n + i > l && (n *= l / (c = n + i), i *= l / c), r + o > l && (r *= l / (c = r + o), o *= l / c), i + r > h && (i *= h / (c = i + r), r *= h / c), n + o > h && (n *= h / (c = n + o), o *= h / c), t.moveTo(a + n, s), t.lineTo(a + l - i, s), 0 !== i && t.arc(a + l - i, s + i, i, -Math.PI / 2, 0), t.lineTo(a + l, s + h - r), 0 !== r && t.arc(a + l - r, s + h - r, r, 0, Math.PI / 2), t.lineTo(a + o, s + h), 0 !== o && t.arc(a + o, s + h - o, o, Math.PI / 2, Math.PI), t.lineTo(a, s + n), 0 !== n && t.arc(a + n, s + n, n, Math.PI, 1.5 * Math.PI)
    }

    function Ge(t) {
        return Ze(t), d(t.rich, Ze), t
    }

    function Ze(t) {
        if (t) {
            t.font = He(t);
            var e = t.textAlign;
            "middle" === e && (e = "center"), t.textAlign = null == e || km[e] ? e : "left";
            var n = t.textVerticalAlign || t.textBaseline;
            "center" === n && (n = "middle"), t.textVerticalAlign = null == n || Pm[n] ? n : "top", t.textPadding && (t.textPadding = k(t.textPadding))
        }
    }

    function Ue(t, e, n, i, r, o) {
        i.rich ? Ye(t, e, n, i, r, o) : Xe(t, e, n, i, r, o)
    }

    function Xe(t, e, n, i, r, o) {
        var a, s = Ke(i), l = !1, h = e.__attrCachedBy === dm.PLAIN_TEXT;
        o !== fm ? (o && (a = o.style, l = !s && h && a), e.__attrCachedBy = s ? dm.NONE : dm.PLAIN_TEXT) : h && (e.__attrCachedBy = dm.NONE);
        var u = i.font || Dm;
        l && u === (a.font || Dm) || (e.font = u);
        var c = t.__computedFont;
        t.__styleFont !== u && (t.__styleFont = u, c = t.__computedFont = e.font);
        var d = i.textPadding, f = i.textLineHeight, p = t.__textCotentBlock;
        p && !t.__dirtyText || (p = t.__textCotentBlock = Be(n, c, d, f, i.truncate));
        var g = p.outerHeight, m = p.lines, v = p.lineHeight, y = tn(g, i, r), x = y.baseX, _ = y.baseY,
            w = y.textAlign || "left", b = y.textVerticalAlign;
        qe(e, i, r, x, _);
        var S = ke(_, g, b), M = x, I = S;
        if (s || d) {
            var T = Ie(n, c);
            d && (T += d[1] + d[3]);
            var A = De(x, T, w);
            s && Qe(t, e, i, A, S, T, g), d && (M = an(x, w, d), I += d[0])
        }
        e.textAlign = w, e.textBaseline = "middle", e.globalAlpha = i.opacity || 1;
        for (B = 0; B < Lm.length; B++) {
            var C = Lm[B], D = C[0], k = C[1], P = i[D];
            l && P === a[D] || (e[k] = cm(e, k, P || C[2]))
        }
        I += v / 2;
        var L = i.textStrokeWidth, O = l ? a.textStrokeWidth : null, z = !l || L !== O,
            E = !l || z || i.textStroke !== a.textStroke, N = nn(i.textStroke, L), R = rn(i.textFill);
        if (N && (z && (e.lineWidth = L), E && (e.strokeStyle = N)), R && (l && i.textFill === a.textFill || (e.fillStyle = R)), 1 === m.length) N && e.strokeText(m[0], M, I), R && e.fillText(m[0], M, I); else for (var B = 0; B < m.length; B++) N && e.strokeText(m[B], M, I), R && e.fillText(m[B], M, I), I += v
    }

    function Ye(t, e, n, i, r, o) {
        o !== fm && (e.__attrCachedBy = dm.NONE);
        var a = t.__textCotentBlock;
        a && !t.__dirtyText || (a = t.__textCotentBlock = Fe(n, i)), je(t, e, a, i, r)
    }

    function je(t, e, n, i, r) {
        var o = n.width, a = n.outerWidth, s = n.outerHeight, l = i.textPadding, h = tn(s, i, r), u = h.baseX,
            c = h.baseY, d = h.textAlign, f = h.textVerticalAlign;
        qe(e, i, r, u, c);
        var p = De(u, a, d), g = ke(c, s, f), m = p, v = g;
        l && (m += l[3], v += l[0]);
        var y = m + o;
        Ke(i) && Qe(t, e, i, p, g, a, s);
        for (var x = 0; x < n.lines.length; x++) {
            for (var _, w = n.lines[x], b = w.tokens, S = b.length, M = w.lineHeight, I = w.width, T = 0, A = m, C = y, D = S - 1; T < S && (!(_ = b[T]).textAlign || "left" === _.textAlign);) $e(t, e, _, i, M, v, A, "left"), I -= _.width, A += _.width, T++;
            for (; D >= 0 && "right" === (_ = b[D]).textAlign;) $e(t, e, _, i, M, v, C, "right"), I -= _.width, C -= _.width, D--;
            for (A += (o - (A - m) - (y - C) - I) / 2; T <= D;) $e(t, e, _ = b[T], i, M, v, A + _.width / 2, "center"), A += _.width, T++;
            v += M
        }
    }

    function qe(t, e, n, i, r) {
        if (n && e.textRotation) {
            var o = e.textOrigin;
            "center" === o ? (i = n.width / 2 + n.x, r = n.height / 2 + n.y) : o && (i = o[0] + n.x, r = o[1] + n.y), t.translate(i, r), t.rotate(-e.textRotation), t.translate(-i, -r)
        }
    }

    function $e(t, e, n, i, r, o, a, s) {
        var l = i.rich[n.styleName] || {};
        l.text = n.text;
        var h = n.textVerticalAlign, u = o + r / 2;
        "top" === h ? u = o + n.height / 2 : "bottom" === h && (u = o + r - n.height / 2), !n.isLineHolder && Ke(l) && Qe(t, e, l, "right" === s ? a - n.width : "center" === s ? a - n.width / 2 : a, u - n.height / 2, n.width, n.height);
        var c = n.textPadding;
        c && (a = an(a, s, c), u -= n.height / 2 - c[2] - n.textHeight / 2), en(e, "shadowBlur", C(l.textShadowBlur, i.textShadowBlur, 0)), en(e, "shadowColor", l.textShadowColor || i.textShadowColor || "transparent"), en(e, "shadowOffsetX", C(l.textShadowOffsetX, i.textShadowOffsetX, 0)), en(e, "shadowOffsetY", C(l.textShadowOffsetY, i.textShadowOffsetY, 0)), en(e, "textAlign", s), en(e, "textBaseline", "middle"), en(e, "font", n.font || Dm);
        var d = nn(l.textStroke || i.textStroke, p), f = rn(l.textFill || i.textFill),
            p = A(l.textStrokeWidth, i.textStrokeWidth);
        d && (en(e, "lineWidth", p), en(e, "strokeStyle", d), e.strokeText(n.text, a, u)), f && (en(e, "fillStyle", f), e.fillText(n.text, a, u))
    }

    function Ke(t) {
        return !!(t.textBackgroundColor || t.textBorderWidth && t.textBorderColor)
    }

    function Qe(t, e, n, i, r, o, a) {
        var s = n.textBackgroundColor, l = n.textBorderWidth, h = n.textBorderColor, u = _(s);
        if (en(e, "shadowBlur", n.textBoxShadowBlur || 0), en(e, "shadowColor", n.textBoxShadowColor || "transparent"), en(e, "shadowOffsetX", n.textBoxShadowOffsetX || 0), en(e, "shadowOffsetY", n.textBoxShadowOffsetY || 0), u || l && h) {
            e.beginPath();
            var c = n.textBorderRadius;
            c ? We(e, {x: i, y: r, width: o, height: a, r: c}) : e.rect(i, r, o, a), e.closePath()
        }
        if (u) if (en(e, "fillStyle", s), null != n.fillOpacity) {
            f = e.globalAlpha;
            e.globalAlpha = n.fillOpacity * n.opacity, e.fill(), e.globalAlpha = f
        } else e.fill(); else if (w(s)) {
            var d = s.image;
            (d = be(d, null, t, Je, s)) && Me(d) && e.drawImage(d, i, r, o, a)
        }
        if (l && h) if (en(e, "lineWidth", l), en(e, "strokeStyle", h), null != n.strokeOpacity) {
            var f = e.globalAlpha;
            e.globalAlpha = n.strokeOpacity * n.opacity, e.stroke(), e.globalAlpha = f
        } else e.stroke()
    }

    function Je(t, e) {
        e.image = t
    }

    function tn(t, e, n) {
        var i = e.x || 0, r = e.y || 0, o = e.textAlign, a = e.textVerticalAlign;
        if (n) {
            var s = e.textPosition;
            if (s instanceof Array) i = n.x + on(s[0], n.width), r = n.y + on(s[1], n.height); else {
                var l = Pe(s, n, e.textDistance);
                i = l.x, r = l.y, o = o || l.textAlign, a = a || l.textVerticalAlign
            }
            var h = e.textOffset;
            h && (i += h[0], r += h[1])
        }
        return {baseX: i, baseY: r, textAlign: o, textVerticalAlign: a}
    }

    function en(t, e, n) {
        return t[e] = cm(t, e, n), t[e]
    }

    function nn(t, e) {
        return null == t || e <= 0 || "transparent" === t || "none" === t ? null : t.image || t.colorStops ? "#000" : t
    }

    function rn(t) {
        return null == t || "none" === t ? null : t.image || t.colorStops ? "#000" : t
    }

    function on(t, e) {
        return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t
    }

    function an(t, e, n) {
        return "right" === e ? t - n[1] : "center" === e ? t + n[3] / 2 - n[1] / 2 : t + n[3]
    }

    function sn(t, e) {
        return null != t && (t || e.textBackgroundColor || e.textBorderWidth && e.textBorderColor || e.textPadding)
    }

    function ln(t) {
        t = t || {}, nm.call(this, t);
        for (var e in t) t.hasOwnProperty(e) && "style" !== e && (this[e] = t[e]);
        this.style = new gm(t.style, this), this._rect = null, this.__clipPaths = []
    }

    function hn(t) {
        ln.call(this, t)
    }

    function un(t) {
        return parseInt(t, 10)
    }

    function cn(t) {
        return !!t && (!!t.__builtin__ || "function" == typeof t.resize && "function" == typeof t.refresh)
    }

    function dn(t, e, n) {
        return Em.copy(t.getBoundingRect()), t.transform && Em.applyTransform(t.transform), Nm.width = e, Nm.height = n, !Em.intersect(Nm)
    }

    function fn(t, e) {
        if (t === e) return !1;
        if (!t || !e || t.length !== e.length) return !0;
        for (var n = 0; n < t.length; n++) if (t[n] !== e[n]) return !0
    }

    function pn(t, e) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.setTransform(e), e.beginPath(), i.buildPath(e, i.shape), e.clip(), i.restoreTransform(e)
        }
    }

    function gn(t, e) {
        var n = document.createElement("div");
        return n.style.cssText = ["position:relative", "overflow:hidden", "width:" + t + "px", "height:" + e + "px", "padding:0", "margin:0", "border-width:0"].join(";") + ";", n
    }

    function mn(t) {
        return "mousewheel" === t && Kp.browser.firefox ? "DOMMouseScroll" : t
    }

    function vn(t) {
        t._touching = !0, clearTimeout(t._touchTimer), t._touchTimer = setTimeout(function () {
            t._touching = !1
        }, 700)
    }

    function yn(t) {
        var e = t.pointerType;
        return "pen" === e || "touch" === e
    }

    function xn(t) {
        function e(t, e) {
            return function () {
                if (!e._touching) return t.apply(e, arguments)
            }
        }

        d(Vm, function (e) {
            t._handlers[e] = m(Gm[e], t)
        }), d(Wm, function (e) {
            t._handlers[e] = m(Gm[e], t)
        }), d(Fm, function (n) {
            t._handlers[n] = e(Gm[n], t)
        })
    }

    function _n(t) {
        function e(e, n) {
            d(e, function (e) {
                st(t, mn(e), n._handlers[e])
            }, n)
        }

        xg.call(this), this.dom = t, this._touching = !1, this._touchTimer, this._handlers = {}, xn(this), Kp.pointerEventsSupported ? e(Wm, this) : (Kp.touchEventsSupported && e(Vm, this), e(Fm, this))
    }

    function wn(t, e) {
        var n = new jm(qp(), t, e);
        return Ym[n.id] = n, n
    }

    function bn(t, e) {
        Xm[t] = e
    }

    function Sn(t) {
        delete Ym[t]
    }

    function Mn(t) {
        return t instanceof Array ? t : null == t ? [] : [t]
    }

    function In(t, e, n) {
        if (t) {
            t[e] = t[e] || {}, t.emphasis = t.emphasis || {}, t.emphasis[e] = t.emphasis[e] || {};
            for (var i = 0, r = n.length; i < r; i++) {
                var o = n[i];
                !t.emphasis[e].hasOwnProperty(o) && t[e].hasOwnProperty(o) && (t.emphasis[e][o] = t[e][o])
            }
        }
    }

    function Tn(t) {
        return !Km(t) || Qm(t) || t instanceof Date ? t : t.value
    }

    function An(t) {
        return Km(t) && !(t instanceof Array)
    }

    function Cn(t, e) {
        e = (e || []).slice();
        var n = f(t || [], function (t, e) {
            return {exist: t}
        });
        return $m(e, function (t, i) {
            if (Km(t)) {
                for (r = 0; r < n.length; r++) if (!n[r].option && null != t.id && n[r].exist.id === t.id + "") return n[r].option = t, void (e[i] = null);
                for (var r = 0; r < n.length; r++) {
                    var o = n[r].exist;
                    if (!(n[r].option || null != o.id && null != t.id || null == t.name || Pn(t) || Pn(o) || o.name !== t.name + "")) return n[r].option = t, void (e[i] = null)
                }
            }
        }), $m(e, function (t, e) {
            if (Km(t)) {
                for (var i = 0; i < n.length; i++) {
                    var r = n[i].exist;
                    if (!n[i].option && !Pn(r) && null == t.id) {
                        n[i].option = t;
                        break
                    }
                }
                i >= n.length && n.push({option: t})
            }
        }), n
    }

    function Dn(t) {
        var e = N();
        $m(t, function (t, n) {
            var i = t.exist;
            i && e.set(i.id, t)
        }), $m(t, function (t, n) {
            var i = t.option;
            P(!i || null == i.id || !e.get(i.id) || e.get(i.id) === t, "id duplicates: " + (i && i.id)), i && null != i.id && e.set(i.id, t), !t.keyInfo && (t.keyInfo = {})
        }), $m(t, function (t, n) {
            var i = t.exist, r = t.option, o = t.keyInfo;
            if (Km(r)) {
                if (o.name = null != r.name ? r.name + "" : i ? i.name : Jm + n, i) o.id = i.id; else if (null != r.id) o.id = r.id + ""; else {
                    var a = 0;
                    do {
                        o.id = "\0" + o.name + "\0" + a++
                    } while (e.get(o.id))
                }
                e.set(o.id, t)
            }
        })
    }

    function kn(t) {
        var e = t.name;
        return !(!e || !e.indexOf(Jm))
    }

    function Pn(t) {
        return Km(t) && t.id && 0 === (t.id + "").indexOf("\0_ec_\0")
    }

    function Ln(t, e) {
        return null != e.dataIndexInside ? e.dataIndexInside : null != e.dataIndex ? y(e.dataIndex) ? f(e.dataIndex, function (e) {
            return t.indexOfRawIndex(e)
        }) : t.indexOfRawIndex(e.dataIndex) : null != e.name ? y(e.name) ? f(e.name, function (e) {
            return t.indexOfName(e)
        }) : t.indexOfName(e.name) : void 0
    }

    function On() {
        var t = "__\0ec_inner_" + ev++ + "_" + Math.random().toFixed(5);
        return function (e) {
            return e[t] || (e[t] = {})
        }
    }

    function zn(t, e, n) {
        if (_(e)) {
            var i = {};
            i[e + "Index"] = 0, e = i
        }
        var r = n && n.defaultMainType;
        !r || En(e, r + "Index") || En(e, r + "Id") || En(e, r + "Name") || (e[r + "Index"] = 0);
        var o = {};
        return $m(e, function (i, r) {
            var i = e[r];
            if ("dataIndex" !== r && "dataIndexInside" !== r) {
                var a = r.match(/^(\w+)(Index|Id|Name)$/) || [], s = a[1], h = (a[2] || "").toLowerCase();
                if (!(!s || !h || null == i || "index" === h && "none" === i || n && n.includeMainTypes && l(n.includeMainTypes, s) < 0)) {
                    var u = {mainType: s};
                    "index" === h && "all" === i || (u[h] = i);
                    var c = t.queryComponents(u);
                    o[s + "Models"] = c, o[s + "Model"] = c[0]
                }
            } else o[r] = i
        }), o
    }

    function En(t, e) {
        return t && t.hasOwnProperty(e)
    }

    function Nn(t, e, n) {
        t.setAttribute ? t.setAttribute(e, n) : t[e] = n
    }

    function Rn(t, e) {
        return t.getAttribute ? t.getAttribute(e) : t[e]
    }

    function Bn(t) {
        return "auto" === t ? Kp.domSupported ? "html" : "richText" : t || "html"
    }

    function Fn(t) {
        var e = {main: "", sub: ""};
        return t && (t = t.split(nv), e.main = t[0] || "", e.sub = t[1] || ""), e
    }

    function Vn(t) {
        P(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t), 'componentType "' + t + '" illegal')
    }

    function Hn(t, e) {
        t.$constructor = t, t.extend = function (t) {
            var e = this, n = function () {
                t.$constructor ? t.$constructor.apply(this, arguments) : e.apply(this, arguments)
            };
            return o(n.prototype, t), n.extend = this.extend, n.superCall = Gn, n.superApply = Zn, h(n, this), n.superClass = e, n
        }
    }

    function Wn(t) {
        var e = ["__\0is_clz", rv++, Math.random().toFixed(3)].join("_");
        t.prototype[e] = !0, t.isInstance = function (t) {
            return !(!t || !t[e])
        }
    }

    function Gn(t, e) {
        var n = D(arguments, 2);
        return this.superClass.prototype[e].apply(t, n)
    }

    function Zn(t, e, n) {
        return this.superClass.prototype[e].apply(t, n)
    }

    function Un(t, e) {
        function n(t) {
            var e = i[t.main];
            return e && e[iv] || ((e = i[t.main] = {})[iv] = !0), e
        }

        e = e || {};
        var i = {};
        if (t.registerClass = function (t, e) {
            return e && (Vn(e), (e = Fn(e)).sub ? e.sub !== iv && (n(e)[e.sub] = t) : i[e.main] = t), t
        }, t.getClass = function (t, e, n) {
            var r = i[t];
            if (r && r[iv] && (r = e ? r[e] : null), n && !r) throw new Error(e ? "Component " + t + "." + (e || "") + " not exists. Load it first." : t + ".type should be specified.");
            return r
        }, t.getClassesByMainType = function (t) {
            t = Fn(t);
            var e = [], n = i[t.main];
            return n && n[iv] ? d(n, function (t, n) {
                n !== iv && e.push(t)
            }) : e.push(n), e
        }, t.hasClass = function (t) {
            return t = Fn(t), !!i[t.main]
        }, t.getAllClassMainTypes = function () {
            var t = [];
            return d(i, function (e, n) {
                t.push(n)
            }), t
        }, t.hasSubTypes = function (t) {
            t = Fn(t);
            var e = i[t.main];
            return e && e[iv]
        }, t.parseClassType = Fn, e.registerWhenExtend) {
            var r = t.extend;
            r && (t.extend = function (e) {
                var n = r.call(this, e);
                return t.registerClass(n, e.type)
            })
        }
        return t
    }

    function Xn(t) {
        return t > -dv && t < dv
    }

    function Yn(t) {
        return t > dv || t < -dv
    }

    function jn(t, e, n, i, r) {
        var o = 1 - r;
        return o * o * (o * t + 3 * r * e) + r * r * (r * i + 3 * o * n)
    }

    function qn(t, e, n, i, r) {
        var o = 1 - r;
        return 3 * (((e - t) * o + 2 * (n - e) * r) * o + (i - n) * r * r)
    }

    function $n(t, e, n, i, r, o) {
        var a = i + 3 * (e - n) - t, s = 3 * (n - 2 * e + t), l = 3 * (e - t), h = t - r, u = s * s - 3 * a * l,
            c = s * l - 9 * a * h, d = l * l - 3 * s * h, f = 0;
        if (Xn(u) && Xn(c)) Xn(s) ? o[0] = 0 : (M = -l / s) >= 0 && M <= 1 && (o[f++] = M); else {
            var p = c * c - 4 * u * d;
            if (Xn(p)) {
                var g = c / u, m = -g / 2;
                (M = -s / a + g) >= 0 && M <= 1 && (o[f++] = M), m >= 0 && m <= 1 && (o[f++] = m)
            } else if (p > 0) {
                var v = cv(p), y = u * s + 1.5 * a * (-c + v), x = u * s + 1.5 * a * (-c - v);
                (M = (-s - ((y = y < 0 ? -uv(-y, gv) : uv(y, gv)) + (x = x < 0 ? -uv(-x, gv) : uv(x, gv)))) / (3 * a)) >= 0 && M <= 1 && (o[f++] = M)
            } else {
                var _ = (2 * u * s - 3 * a * c) / (2 * cv(u * u * u)), w = Math.acos(_) / 3, b = cv(u), S = Math.cos(w),
                    M = (-s - 2 * b * S) / (3 * a), m = (-s + b * (S + pv * Math.sin(w))) / (3 * a),
                    I = (-s + b * (S - pv * Math.sin(w))) / (3 * a);
                M >= 0 && M <= 1 && (o[f++] = M), m >= 0 && m <= 1 && (o[f++] = m), I >= 0 && I <= 1 && (o[f++] = I)
            }
        }
        return f
    }

    function Kn(t, e, n, i, r) {
        var o = 6 * n - 12 * e + 6 * t, a = 9 * e + 3 * i - 3 * t - 9 * n, s = 3 * e - 3 * t, l = 0;
        if (Xn(a)) Yn(o) && (c = -s / o) >= 0 && c <= 1 && (r[l++] = c); else {
            var h = o * o - 4 * a * s;
            if (Xn(h)) r[0] = -o / (2 * a); else if (h > 0) {
                var u = cv(h), c = (-o + u) / (2 * a), d = (-o - u) / (2 * a);
                c >= 0 && c <= 1 && (r[l++] = c), d >= 0 && d <= 1 && (r[l++] = d)
            }
        }
        return l
    }

    function Qn(t, e, n, i, r, o) {
        var a = (e - t) * r + t, s = (n - e) * r + e, l = (i - n) * r + n, h = (s - a) * r + a, u = (l - s) * r + s,
            c = (u - h) * r + h;
        o[0] = t, o[1] = a, o[2] = h, o[3] = c, o[4] = c, o[5] = u, o[6] = l, o[7] = i
    }

    function Jn(t, e, n, i, r, o, a, s, l, h, u) {
        var c, d, f, p, g, m = .005, v = 1 / 0;
        mv[0] = l, mv[1] = h;
        for (var y = 0; y < 1; y += .05) vv[0] = jn(t, n, r, a, y), vv[1] = jn(e, i, o, s, y), (p = mg(mv, vv)) < v && (c = y, v = p);
        v = 1 / 0;
        for (var x = 0; x < 32 && !(m < fv); x++) d = c - m, f = c + m, vv[0] = jn(t, n, r, a, d), vv[1] = jn(e, i, o, s, d), p = mg(vv, mv), d >= 0 && p < v ? (c = d, v = p) : (yv[0] = jn(t, n, r, a, f), yv[1] = jn(e, i, o, s, f), g = mg(yv, mv), f <= 1 && g < v ? (c = f, v = g) : m *= .5);
        return u && (u[0] = jn(t, n, r, a, c), u[1] = jn(e, i, o, s, c)), cv(v)
    }

    function ti(t, e, n, i) {
        var r = 1 - i;
        return r * (r * t + 2 * i * e) + i * i * n
    }

    function ei(t, e, n, i) {
        return 2 * ((1 - i) * (e - t) + i * (n - e))
    }

    function ni(t, e, n, i, r) {
        var o = t - 2 * e + n, a = 2 * (e - t), s = t - i, l = 0;
        if (Xn(o)) Yn(a) && (c = -s / a) >= 0 && c <= 1 && (r[l++] = c); else {
            var h = a * a - 4 * o * s;
            if (Xn(h)) (c = -a / (2 * o)) >= 0 && c <= 1 && (r[l++] = c); else if (h > 0) {
                var u = cv(h), c = (-a + u) / (2 * o), d = (-a - u) / (2 * o);
                c >= 0 && c <= 1 && (r[l++] = c), d >= 0 && d <= 1 && (r[l++] = d)
            }
        }
        return l
    }

    function ii(t, e, n) {
        var i = t + n - 2 * e;
        return 0 === i ? .5 : (t - e) / i
    }

    function ri(t, e, n, i, r) {
        var o = (e - t) * i + t, a = (n - e) * i + e, s = (a - o) * i + o;
        r[0] = t, r[1] = o, r[2] = s, r[3] = s, r[4] = a, r[5] = n
    }

    function oi(t, e, n, i, r, o, a, s, l) {
        var h, u = .005, c = 1 / 0;
        mv[0] = a, mv[1] = s;
        for (var d = 0; d < 1; d += .05) vv[0] = ti(t, n, r, d), vv[1] = ti(e, i, o, d), (m = mg(mv, vv)) < c && (h = d, c = m);
        c = 1 / 0;
        for (var f = 0; f < 32 && !(u < fv); f++) {
            var p = h - u, g = h + u;
            vv[0] = ti(t, n, r, p), vv[1] = ti(e, i, o, p);
            var m = mg(vv, mv);
            if (p >= 0 && m < c) h = p, c = m; else {
                yv[0] = ti(t, n, r, g), yv[1] = ti(e, i, o, g);
                var v = mg(yv, mv);
                g <= 1 && v < c ? (h = g, c = v) : u *= .5
            }
        }
        return l && (l[0] = ti(t, n, r, h), l[1] = ti(e, i, o, h)), cv(c)
    }

    function ai(t, e, n) {
        if (0 !== t.length) {
            var i, r = t[0], o = r[0], a = r[0], s = r[1], l = r[1];
            for (i = 1; i < t.length; i++) r = t[i], o = xv(o, r[0]), a = _v(a, r[0]), s = xv(s, r[1]), l = _v(l, r[1]);
            e[0] = o, e[1] = s, n[0] = a, n[1] = l
        }
    }

    function si(t, e, n, i, r, o) {
        r[0] = xv(t, n), r[1] = xv(e, i), o[0] = _v(t, n), o[1] = _v(e, i)
    }

    function li(t, e, n, i, r, o, a, s, l, h) {
        var u, c = Kn, d = jn, f = c(t, n, r, a, Av);
        for (l[0] = 1 / 0, l[1] = 1 / 0, h[0] = -1 / 0, h[1] = -1 / 0, u = 0; u < f; u++) {
            var p = d(t, n, r, a, Av[u]);
            l[0] = xv(p, l[0]), h[0] = _v(p, h[0])
        }
        for (f = c(e, i, o, s, Cv), u = 0; u < f; u++) {
            var g = d(e, i, o, s, Cv[u]);
            l[1] = xv(g, l[1]), h[1] = _v(g, h[1])
        }
        l[0] = xv(t, l[0]), h[0] = _v(t, h[0]), l[0] = xv(a, l[0]), h[0] = _v(a, h[0]), l[1] = xv(e, l[1]), h[1] = _v(e, h[1]), l[1] = xv(s, l[1]), h[1] = _v(s, h[1])
    }

    function hi(t, e, n, i, r, o, a, s) {
        var l = ii, h = ti, u = _v(xv(l(t, n, r), 1), 0), c = _v(xv(l(e, i, o), 1), 0), d = h(t, n, r, u),
            f = h(e, i, o, c);
        a[0] = xv(t, r, d), a[1] = xv(e, o, f), s[0] = _v(t, r, d), s[1] = _v(e, o, f)
    }

    function ui(t, e, n, i, r, o, a, s, l) {
        var h = K, u = Q, c = Math.abs(r - o);
        if (c % Sv < 1e-4 && c > 1e-4) return s[0] = t - n, s[1] = e - i, l[0] = t + n, void (l[1] = e + i);
        if (Mv[0] = bv(r) * n + t, Mv[1] = wv(r) * i + e, Iv[0] = bv(o) * n + t, Iv[1] = wv(o) * i + e, h(s, Mv, Iv), u(l, Mv, Iv), (r %= Sv) < 0 && (r += Sv), (o %= Sv) < 0 && (o += Sv), r > o && !a ? o += Sv : r < o && a && (r += Sv), a) {
            var d = o;
            o = r, r = d
        }
        for (var f = 0; f < o; f += Math.PI / 2) f > r && (Tv[0] = bv(f) * n + t, Tv[1] = wv(f) * i + e, h(s, Tv, s), u(l, Tv, l))
    }

    function ci(t, e, n, i, r, o, a) {
        if (0 === r) return !1;
        var s = r, l = 0, h = t;
        if (a > e + s && a > i + s || a < e - s && a < i - s || o > t + s && o > n + s || o < t - s && o < n - s) return !1;
        if (t === n) return Math.abs(o - t) <= s / 2;
        var u = (l = (e - i) / (t - n)) * o - a + (h = (t * i - n * e) / (t - n));
        return u * u / (l * l + 1) <= s / 2 * s / 2
    }

    function di(t, e, n, i, r, o, a, s, l, h, u) {
        if (0 === l) return !1;
        var c = l;
        return !(u > e + c && u > i + c && u > o + c && u > s + c || u < e - c && u < i - c && u < o - c && u < s - c || h > t + c && h > n + c && h > r + c && h > a + c || h < t - c && h < n - c && h < r - c && h < a - c) && Jn(t, e, n, i, r, o, a, s, h, u, null) <= c / 2
    }

    function fi(t, e, n, i, r, o, a, s, l) {
        if (0 === a) return !1;
        var h = a;
        return !(l > e + h && l > i + h && l > o + h || l < e - h && l < i - h && l < o - h || s > t + h && s > n + h && s > r + h || s < t - h && s < n - h && s < r - h) && oi(t, e, n, i, r, o, s, l, null) <= h / 2
    }

    function pi(t) {
        return (t %= Wv) < 0 && (t += Wv), t
    }

    function gi(t, e, n, i, r, o, a, s, l) {
        if (0 === a) return !1;
        var h = a;
        s -= t, l -= e;
        var u = Math.sqrt(s * s + l * l);
        if (u - h > n || u + h < n) return !1;
        if (Math.abs(i - r) % Gv < 1e-4) return !0;
        if (o) {
            var c = i;
            i = pi(r), r = pi(c)
        } else i = pi(i), r = pi(r);
        i > r && (r += Gv);
        var d = Math.atan2(l, s);
        return d < 0 && (d += Gv), d >= i && d <= r || d + Gv >= i && d + Gv <= r
    }

    function mi(t, e, n, i, r, o) {
        if (o > e && o > i || o < e && o < i) return 0;
        if (i === e) return 0;
        var a = i < e ? 1 : -1, s = (o - e) / (i - e);
        1 !== s && 0 !== s || (a = i < e ? .5 : -.5);
        var l = s * (n - t) + t;
        return l === r ? 1 / 0 : l > r ? a : 0
    }

    function vi(t, e) {
        return Math.abs(t - e) < Xv
    }

    function yi() {
        var t = jv[0];
        jv[0] = jv[1], jv[1] = t
    }

    function xi(t, e, n, i, r, o, a, s, l, h) {
        if (h > e && h > i && h > o && h > s || h < e && h < i && h < o && h < s) return 0;
        var u = $n(e, i, o, s, h, Yv);
        if (0 === u) return 0;
        for (var c, d, f = 0, p = -1, g = 0; g < u; g++) {
            var m = Yv[g], v = 0 === m || 1 === m ? .5 : 1;
            jn(t, n, r, a, m) < l || (p < 0 && (p = Kn(e, i, o, s, jv), jv[1] < jv[0] && p > 1 && yi(), c = jn(e, i, o, s, jv[0]), p > 1 && (d = jn(e, i, o, s, jv[1]))), 2 === p ? m < jv[0] ? f += c < e ? v : -v : m < jv[1] ? f += d < c ? v : -v : f += s < d ? v : -v : m < jv[0] ? f += c < e ? v : -v : f += s < c ? v : -v)
        }
        return f
    }

    function _i(t, e, n, i, r, o, a, s) {
        if (s > e && s > i && s > o || s < e && s < i && s < o) return 0;
        var l = ni(e, i, o, s, Yv);
        if (0 === l) return 0;
        var h = ii(e, i, o);
        if (h >= 0 && h <= 1) {
            for (var u = 0, c = ti(e, i, o, h), d = 0; d < l; d++) {
                f = 0 === Yv[d] || 1 === Yv[d] ? .5 : 1;
                (p = ti(t, n, r, Yv[d])) < a || (Yv[d] < h ? u += c < e ? f : -f : u += o < c ? f : -f)
            }
            return u
        }
        var f = 0 === Yv[0] || 1 === Yv[0] ? .5 : 1, p = ti(t, n, r, Yv[0]);
        return p < a ? 0 : o < e ? f : -f
    }

    function wi(t, e, n, i, r, o, a, s) {
        if ((s -= e) > n || s < -n) return 0;
        h = Math.sqrt(n * n - s * s);
        Yv[0] = -h, Yv[1] = h;
        var l = Math.abs(i - r);
        if (l < 1e-4) return 0;
        if (l % Uv < 1e-4) {
            i = 0, r = Uv;
            p = o ? 1 : -1;
            return a >= Yv[0] + t && a <= Yv[1] + t ? p : 0
        }
        if (o) {
            var h = i;
            i = pi(r), r = pi(h)
        } else i = pi(i), r = pi(r);
        i > r && (r += Uv);
        for (var u = 0, c = 0; c < 2; c++) {
            var d = Yv[c];
            if (d + t > a) {
                var f = Math.atan2(s, d), p = o ? 1 : -1;
                f < 0 && (f = Uv + f), (f >= i && f <= r || f + Uv >= i && f + Uv <= r) && (f > Math.PI / 2 && f < 1.5 * Math.PI && (p = -p), u += p)
            }
        }
        return u
    }

    function bi(t, e, n, i, r) {
        for (var o = 0, a = 0, s = 0, l = 0, h = 0, u = 0; u < t.length;) {
            var c = t[u++];
            switch (c === Zv.M && u > 1 && (n || (o += mi(a, s, l, h, i, r))), 1 === u && (l = a = t[u], h = s = t[u + 1]), c) {
                case Zv.M:
                    a = l = t[u++], s = h = t[u++];
                    break;
                case Zv.L:
                    if (n) {
                        if (ci(a, s, t[u], t[u + 1], e, i, r)) return !0
                    } else o += mi(a, s, t[u], t[u + 1], i, r) || 0;
                    a = t[u++], s = t[u++];
                    break;
                case Zv.C:
                    if (n) {
                        if (di(a, s, t[u++], t[u++], t[u++], t[u++], t[u], t[u + 1], e, i, r)) return !0
                    } else o += xi(a, s, t[u++], t[u++], t[u++], t[u++], t[u], t[u + 1], i, r) || 0;
                    a = t[u++], s = t[u++];
                    break;
                case Zv.Q:
                    if (n) {
                        if (fi(a, s, t[u++], t[u++], t[u], t[u + 1], e, i, r)) return !0
                    } else o += _i(a, s, t[u++], t[u++], t[u], t[u + 1], i, r) || 0;
                    a = t[u++], s = t[u++];
                    break;
                case Zv.A:
                    var d = t[u++], f = t[u++], p = t[u++], g = t[u++], m = t[u++], v = t[u++];
                    u += 1;
                    var y = 1 - t[u++], x = Math.cos(m) * p + d, _ = Math.sin(m) * g + f;
                    u > 1 ? o += mi(a, s, x, _, i, r) : (l = x, h = _);
                    var w = (i - d) * g / p + d;
                    if (n) {
                        if (gi(d, f, g, m, m + v, y, e, w, r)) return !0
                    } else o += wi(d, f, g, m, m + v, y, w, r);
                    a = Math.cos(m + v) * p + d, s = Math.sin(m + v) * g + f;
                    break;
                case Zv.R:
                    l = a = t[u++], h = s = t[u++];
                    var x = l + t[u++], _ = h + t[u++];
                    if (n) {
                        if (ci(l, h, x, h, e, i, r) || ci(x, h, x, _, e, i, r) || ci(x, _, l, _, e, i, r) || ci(l, _, l, h, e, i, r)) return !0
                    } else o += mi(x, h, x, _, i, r), o += mi(l, _, l, h, i, r);
                    break;
                case Zv.Z:
                    if (n) {
                        if (ci(a, s, l, h, e, i, r)) return !0
                    } else o += mi(a, s, l, h, i, r);
                    a = l, s = h
            }
        }
        return n || vi(s, h) || (o += mi(a, s, l, h, i, r) || 0), 0 !== o
    }

    function Si(t, e, n) {
        return bi(t, 0, !1, e, n)
    }

    function Mi(t, e, n, i) {
        return bi(t, e, !0, n, i)
    }

    function Ii(t) {
        ln.call(this, t), this.path = null
    }

    function Ti(t, e, n, i, r, o, a, s, l, h, u) {
        var c = l * (ay / 180), d = oy(c) * (t - n) / 2 + ry(c) * (e - i) / 2,
            f = -1 * ry(c) * (t - n) / 2 + oy(c) * (e - i) / 2, p = d * d / (a * a) + f * f / (s * s);
        p > 1 && (a *= iy(p), s *= iy(p));
        var g = (r === o ? -1 : 1) * iy((a * a * (s * s) - a * a * (f * f) - s * s * (d * d)) / (a * a * (f * f) + s * s * (d * d))) || 0,
            m = g * a * f / s, v = g * -s * d / a, y = (t + n) / 2 + oy(c) * m - ry(c) * v,
            x = (e + i) / 2 + ry(c) * m + oy(c) * v, _ = hy([1, 0], [(d - m) / a, (f - v) / s]),
            w = [(d - m) / a, (f - v) / s], b = [(-1 * d - m) / a, (-1 * f - v) / s], S = hy(w, b);
        ly(w, b) <= -1 && (S = ay), ly(w, b) >= 1 && (S = 0), 0 === o && S > 0 && (S -= 2 * ay), 1 === o && S < 0 && (S += 2 * ay), u.addData(h, y, x, a, s, _, S, c, o)
    }

    function Ai(t) {
        if (!t) return new Hv;
        for (var e, n = 0, i = 0, r = n, o = i, a = new Hv, s = Hv.CMD, l = t.match(uy), h = 0; h < l.length; h++) {
            for (var u, c = l[h], d = c.charAt(0), f = c.match(cy) || [], p = f.length, g = 0; g < p; g++) f[g] = parseFloat(f[g]);
            for (var m = 0; m < p;) {
                var v, y, x, _, w, b, S, M = n, I = i;
                switch (d) {
                    case"l":
                        n += f[m++], i += f[m++], u = s.L, a.addData(u, n, i);
                        break;
                    case"L":
                        n = f[m++], i = f[m++], u = s.L, a.addData(u, n, i);
                        break;
                    case"m":
                        n += f[m++], i += f[m++], u = s.M, a.addData(u, n, i), r = n, o = i, d = "l";
                        break;
                    case"M":
                        n = f[m++], i = f[m++], u = s.M, a.addData(u, n, i), r = n, o = i, d = "L";
                        break;
                    case"h":
                        n += f[m++], u = s.L, a.addData(u, n, i);
                        break;
                    case"H":
                        n = f[m++], u = s.L, a.addData(u, n, i);
                        break;
                    case"v":
                        i += f[m++], u = s.L, a.addData(u, n, i);
                        break;
                    case"V":
                        i = f[m++], u = s.L, a.addData(u, n, i);
                        break;
                    case"C":
                        u = s.C, a.addData(u, f[m++], f[m++], f[m++], f[m++], f[m++], f[m++]), n = f[m - 2], i = f[m - 1];
                        break;
                    case"c":
                        u = s.C, a.addData(u, f[m++] + n, f[m++] + i, f[m++] + n, f[m++] + i, f[m++] + n, f[m++] + i), n += f[m - 2], i += f[m - 1];
                        break;
                    case"S":
                        v = n, y = i;
                        var T = a.len(), A = a.data;
                        e === s.C && (v += n - A[T - 4], y += i - A[T - 3]), u = s.C, M = f[m++], I = f[m++], n = f[m++], i = f[m++], a.addData(u, v, y, M, I, n, i);
                        break;
                    case"s":
                        v = n, y = i;
                        var T = a.len(), A = a.data;
                        e === s.C && (v += n - A[T - 4], y += i - A[T - 3]), u = s.C, M = n + f[m++], I = i + f[m++], n += f[m++], i += f[m++], a.addData(u, v, y, M, I, n, i);
                        break;
                    case"Q":
                        M = f[m++], I = f[m++], n = f[m++], i = f[m++], u = s.Q, a.addData(u, M, I, n, i);
                        break;
                    case"q":
                        M = f[m++] + n, I = f[m++] + i, n += f[m++], i += f[m++], u = s.Q, a.addData(u, M, I, n, i);
                        break;
                    case"T":
                        v = n, y = i;
                        var T = a.len(), A = a.data;
                        e === s.Q && (v += n - A[T - 4], y += i - A[T - 3]), n = f[m++], i = f[m++], u = s.Q, a.addData(u, v, y, n, i);
                        break;
                    case"t":
                        v = n, y = i;
                        var T = a.len(), A = a.data;
                        e === s.Q && (v += n - A[T - 4], y += i - A[T - 3]), n += f[m++], i += f[m++], u = s.Q, a.addData(u, v, y, n, i);
                        break;
                    case"A":
                        x = f[m++], _ = f[m++], w = f[m++], b = f[m++], S = f[m++], Ti(M = n, I = i, n = f[m++], i = f[m++], b, S, x, _, w, u = s.A, a);
                        break;
                    case"a":
                        x = f[m++], _ = f[m++], w = f[m++], b = f[m++], S = f[m++], Ti(M = n, I = i, n += f[m++], i += f[m++], b, S, x, _, w, u = s.A, a)
                }
            }
            "z" !== d && "Z" !== d || (u = s.Z, a.addData(u), n = r, i = o), e = u
        }
        return a.toStatic(), a
    }

    function Ci(t, e) {
        var n = Ai(t);
        return e = e || {}, e.buildPath = function (t) {
            if (t.setData) t.setData(n.data), (e = t.getContext()) && t.rebuildPath(e); else {
                var e = t;
                n.rebuildPath(e)
            }
        }, e.applyTransform = function (t) {
            ny(n, t), this.dirty(!0)
        }, e
    }

    function Di(t, e) {
        return new Ii(Ci(t, e))
    }

    function ki(t, e) {
        return Ii.extend(Ci(t, e))
    }

    function Pi(t, e, n, i, r, o, a) {
        var s = .5 * (n - t), l = .5 * (i - e);
        return (2 * (e - n) + s + l) * a + (-3 * (e - n) - 2 * s - l) * o + s * r + e
    }

    function Li(t, e, n) {
        var i = e.points, r = e.smooth;
        if (i && i.length >= 2) {
            if (r && "spline" !== r) {
                var o = xy(i, r, n, e.smoothConstraint);
                t.moveTo(i[0][0], i[0][1]);
                for (var a = i.length, s = 0; s < (n ? a : a - 1); s++) {
                    var l = o[2 * s], h = o[2 * s + 1], u = i[(s + 1) % a];
                    t.bezierCurveTo(l[0], l[1], h[0], h[1], u[0], u[1])
                }
            } else {
                "spline" === r && (i = yy(i, n)), t.moveTo(i[0][0], i[0][1]);
                for (var s = 1, c = i.length; s < c; s++) t.lineTo(i[s][0], i[s][1])
            }
            n && t.closePath()
        }
    }

    function Oi(t, e, n) {
        var i = n && n.lineWidth;
        if (e && i) {
            var r = e.x1, o = e.x2, a = e.y1, s = e.y2;
            by(2 * r) === by(2 * o) ? t.x1 = t.x2 = Ei(r, i, !0) : (t.x1 = r, t.x2 = o), by(2 * a) === by(2 * s) ? t.y1 = t.y2 = Ei(a, i, !0) : (t.y1 = a, t.y2 = s)
        }
    }

    function zi(t, e, n) {
        var i = n && n.lineWidth;
        if (e && i) {
            var r = e.x, o = e.y, a = e.width, s = e.height;
            t.x = Ei(r, i, !0), t.y = Ei(o, i, !0), t.width = Math.max(Ei(r + a, i, !1) - t.x, 0 === a ? 0 : 1), t.height = Math.max(Ei(o + s, i, !1) - t.y, 0 === s ? 0 : 1)
        }
    }

    function Ei(t, e, n) {
        var i = by(2 * t);
        return (i + by(e)) % 2 == 0 ? i / 2 : (i + (n ? 1 : -1)) / 2
    }

    function Ni(t, e, n) {
        var i = t.cpx2, r = t.cpy2;
        return null === i || null === r ? [(n ? qn : jn)(t.x1, t.cpx1, t.cpx2, t.x2, e), (n ? qn : jn)(t.y1, t.cpy1, t.cpy2, t.y2, e)] : [(n ? ei : ti)(t.x1, t.cpx1, t.x2, e), (n ? ei : ti)(t.y1, t.cpy1, t.y2, e)]
    }

    function Ri(t) {
        ln.call(this, t), this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.notClear = !0
    }

    function Bi(t) {
        return Ii.extend(t)
    }

    function Fi(t, e, n, i) {
        var r = Di(t, e);
        return n && ("center" === i && (n = Hi(n, r.getBoundingRect())), Wi(r, n)), r
    }

    function Vi(t, e, n) {
        var i = new hn({
            style: {image: t, x: e.x, y: e.y, width: e.width, height: e.height}, onload: function (t) {
                if ("center" === n) {
                    var r = {width: t.width, height: t.height};
                    i.setStyle(Hi(e, r))
                }
            }
        });
        return i
    }

    function Hi(t, e) {
        var n, i = e.width / e.height, r = t.height * i;
        return n = r <= t.width ? t.height : (r = t.width) / i, {
            x: t.x + t.width / 2 - r / 2,
            y: t.y + t.height / 2 - n / 2,
            width: r,
            height: n
        }
    }

    function Wi(t, e) {
        if (t.applyTransform) {
            var n = t.getBoundingRect().calculateTransform(e);
            t.applyTransform(n)
        }
    }

    function Gi(t) {
        var e = t.shape, n = t.style.lineWidth;
        return Ey(2 * e.x1) === Ey(2 * e.x2) && (e.x1 = e.x2 = Ui(e.x1, n, !0)), Ey(2 * e.y1) === Ey(2 * e.y2) && (e.y1 = e.y2 = Ui(e.y1, n, !0)), t
    }

    function Zi(t) {
        var e = t.shape, n = t.style.lineWidth, i = e.x, r = e.y, o = e.width, a = e.height;
        return e.x = Ui(e.x, n, !0), e.y = Ui(e.y, n, !0), e.width = Math.max(Ui(i + o, n, !1) - e.x, 0 === o ? 0 : 1), e.height = Math.max(Ui(r + a, n, !1) - e.y, 0 === a ? 0 : 1), t
    }

    function Ui(t, e, n) {
        var i = Ey(2 * t);
        return (i + Ey(e)) % 2 == 0 ? i / 2 : (i + (n ? 1 : -1)) / 2
    }

    function Xi(t) {
        return null != t && "none" !== t
    }

    function Yi(t) {
        if ("string" != typeof t) return t;
        var e = Vy.get(t);
        return e || (e = Ft(t, -.1), Hy < 1e4 && (Vy.set(t, e), Hy++)), e
    }

    function ji(t) {
        if (t.__hoverStlDirty) {
            t.__hoverStlDirty = !1;
            var e = t.__hoverStl;
            if (e) {
                var n = t.__cachedNormalStl = {};
                t.__cachedNormalZ2 = t.z2;
                var i = t.style;
                for (var r in e) null != e[r] && (n[r] = i[r]);
                n.fill = i.fill, n.stroke = i.stroke
            } else t.__cachedNormalStl = t.__cachedNormalZ2 = null
        }
    }

    function qi(t) {
        var e = t.__hoverStl;
        if (e && !t.__highlighted) {
            var n = t.useHoverLayer;
            t.__highlighted = n ? "layer" : "plain";
            var i = t.__zr;
            if (i || !n) {
                var r = t, o = t.style;
                n && (o = (r = i.addHover(t)).style), pr(o), n || ji(r), o.extendFrom(e), $i(o, e, "fill"), $i(o, e, "stroke"), fr(o), n || (t.dirty(!1), t.z2 += Fy)
            }
        }
    }

    function $i(t, e, n) {
        !Xi(e[n]) && Xi(t[n]) && (t[n] = Yi(t[n]))
    }

    function Ki(t) {
        var e = t.__highlighted;
        if (e) if (t.__highlighted = !1, "layer" === e) t.__zr && t.__zr.removeHover(t); else if (e) {
            var n = t.style, i = t.__cachedNormalStl;
            i && (pr(n), t.setStyle(i), fr(n));
            var r = t.__cachedNormalZ2;
            null != r && t.z2 - r === Fy && (t.z2 = r)
        }
    }

    function Qi(t, e) {
        t.isGroup ? t.traverse(function (t) {
            !t.isGroup && e(t)
        }) : e(t)
    }

    function Ji(t, e) {
        e = t.__hoverStl = !1 !== e && (e || {}), t.__hoverStlDirty = !0, t.__highlighted && (t.__cachedNormalStl = null, Ki(t), qi(t))
    }

    function tr(t) {
        return t && t.__isEmphasisEntered
    }

    function er(t) {
        this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasisEntered && Qi(this, qi)
    }

    function nr(t) {
        this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasisEntered && Qi(this, Ki)
    }

    function ir() {
        this.__isEmphasisEntered = !0, Qi(this, qi)
    }

    function rr() {
        this.__isEmphasisEntered = !1, Qi(this, Ki)
    }

    function or(t, e, n) {
        t.isGroup ? t.traverse(function (t) {
            !t.isGroup && Ji(t, t.hoverStyle || e)
        }) : Ji(t, t.hoverStyle || e), ar(t, n)
    }

    function ar(t, e) {
        var n = !1 === e;
        if (t.__hoverSilentOnTouch = null != e && e.hoverSilentOnTouch, !n || t.__hoverStyleTrigger) {
            var i = n ? "off" : "on";
            t[i]("mouseover", er)[i]("mouseout", nr), t[i]("emphasis", ir)[i]("normal", rr), t.__hoverStyleTrigger = !n
        }
    }

    function sr(t, e, n, i, r, o, a) {
        var s, l = (r = r || By).labelFetcher, h = r.labelDataIndex, u = r.labelDimIndex, c = n.getShallow("show"),
            d = i.getShallow("show");
        (c || d) && (l && (s = l.getFormattedLabel(h, "normal", null, u)), null == s && (s = x(r.defaultText) ? r.defaultText(h, r) : r.defaultText));
        var f = c ? s : null, p = d ? A(l ? l.getFormattedLabel(h, "emphasis", null, u) : null, s) : null;
        null == f && null == p || (lr(t, n, o, r), lr(e, i, a, r, !0)), t.text = f, e.text = p
    }

    function lr(t, e, n, i, r) {
        return hr(t, e, i, r), n && o(t, n), t
    }

    function hr(t, e, n, i) {
        if ((n = n || By).isRectText) {
            var r = e.getShallow("position") || (i ? null : "inside");
            "outside" === r && (r = "top"), t.textPosition = r, t.textOffset = e.getShallow("offset");
            var o = e.getShallow("rotate");
            null != o && (o *= Math.PI / 180), t.textRotation = o, t.textDistance = A(e.getShallow("distance"), i ? null : 5)
        }
        var a, s = e.ecModel, l = s && s.option.textStyle, h = ur(e);
        if (h) {
            a = {};
            for (var u in h) if (h.hasOwnProperty(u)) {
                var c = e.getModel(["rich", u]);
                cr(a[u] = {}, c, l, n, i)
            }
        }
        return t.rich = a, cr(t, e, l, n, i, !0), n.forceRich && !n.textStyle && (n.textStyle = {}), t
    }

    function ur(t) {
        for (var e; t && t !== t.ecModel;) {
            var n = (t.option || By).rich;
            if (n) {
                e = e || {};
                for (var i in n) n.hasOwnProperty(i) && (e[i] = 1)
            }
            t = t.parentModel
        }
        return e
    }

    function cr(t, e, n, i, r, o) {
        n = !r && n || By, t.textFill = dr(e.getShallow("color"), i) || n.color, t.textStroke = dr(e.getShallow("textBorderColor"), i) || n.textBorderColor, t.textStrokeWidth = A(e.getShallow("textBorderWidth"), n.textBorderWidth), t.insideRawTextPosition = t.textPosition, r || (o && (t.insideRollbackOpt = i, fr(t)), null == t.textFill && (t.textFill = i.autoColor)), t.fontStyle = e.getShallow("fontStyle") || n.fontStyle, t.fontWeight = e.getShallow("fontWeight") || n.fontWeight, t.fontSize = e.getShallow("fontSize") || n.fontSize, t.fontFamily = e.getShallow("fontFamily") || n.fontFamily, t.textAlign = e.getShallow("align"), t.textVerticalAlign = e.getShallow("verticalAlign") || e.getShallow("baseline"), t.textLineHeight = e.getShallow("lineHeight"), t.textWidth = e.getShallow("width"), t.textHeight = e.getShallow("height"), t.textTag = e.getShallow("tag"), o && i.disableBox || (t.textBackgroundColor = dr(e.getShallow("backgroundColor"), i), t.textPadding = e.getShallow("padding"), t.textBorderColor = dr(e.getShallow("borderColor"), i), t.textBorderWidth = e.getShallow("borderWidth"), t.textBorderRadius = e.getShallow("borderRadius"), t.textBoxShadowColor = e.getShallow("shadowColor"), t.textBoxShadowBlur = e.getShallow("shadowBlur"), t.textBoxShadowOffsetX = e.getShallow("shadowOffsetX"), t.textBoxShadowOffsetY = e.getShallow("shadowOffsetY")), t.textShadowColor = e.getShallow("textShadowColor") || n.textShadowColor, t.textShadowBlur = e.getShallow("textShadowBlur") || n.textShadowBlur, t.textShadowOffsetX = e.getShallow("textShadowOffsetX") || n.textShadowOffsetX, t.textShadowOffsetY = e.getShallow("textShadowOffsetY") || n.textShadowOffsetY
    }

    function dr(t, e) {
        return "auto" !== t ? t : e && e.autoColor ? e.autoColor : null
    }

    function fr(t) {
        var e = t.insideRollbackOpt;
        if (e && null == t.textFill) {
            var n, i = e.useInsideStyle, r = t.insideRawTextPosition, o = e.autoColor;
            !1 !== i && (!0 === i || e.isRectText && r && "string" == typeof r && r.indexOf("inside") >= 0) ? (n = {
                textFill: null,
                textStroke: t.textStroke,
                textStrokeWidth: t.textStrokeWidth
            }, t.textFill = "#fff", null == t.textStroke && (t.textStroke = o, null == t.textStrokeWidth && (t.textStrokeWidth = 2))) : null != o && (n = {textFill: null}, t.textFill = o), n && (t.insideRollback = n)
        }
    }

    function pr(t) {
        var e = t.insideRollback;
        e && (t.textFill = e.textFill, t.textStroke = e.textStroke, t.textStrokeWidth = e.textStrokeWidth, t.insideRollback = null)
    }

    function gr(t, e) {
        var n = e || e.getModel("textStyle");
        return L([t.fontStyle || n && n.getShallow("fontStyle") || "", t.fontWeight || n && n.getShallow("fontWeight") || "", (t.fontSize || n && n.getShallow("fontSize") || 12) + "px", t.fontFamily || n && n.getShallow("fontFamily") || "sans-serif"].join(" "))
    }

    function mr(t, e, n, i, r, o) {
        if ("function" == typeof r && (o = r, r = null), i && i.isAnimationEnabled()) {
            var a = t ? "Update" : "", s = i.getShallow("animationDuration" + a),
                l = i.getShallow("animationEasing" + a), h = i.getShallow("animationDelay" + a);
            "function" == typeof h && (h = h(r, i.getAnimationDelayParams ? i.getAnimationDelayParams(e, r) : null)), "function" == typeof s && (s = s(r)), s > 0 ? e.animateTo(n, s, h || 0, l, o, !!o) : (e.stopAnimation(), e.attr(n), o && o())
        } else e.stopAnimation(), e.attr(n), o && o()
    }

    function vr(t, e, n, i, r) {
        mr(!0, t, e, n, i, r)
    }

    function yr(t, e, n, i, r) {
        mr(!1, t, e, n, i, r)
    }

    function xr(t, e) {
        for (var n = vt([]); t && t !== e;) xt(n, t.getLocalTransform(), n), t = t.parent;
        return n
    }

    function _r(t, e, n) {
        return e && !c(e) && (e = Lg.getLocalTransform(e)), n && (e = St([], e)), $([], t, e)
    }

    function wr(t, e, n) {
        var i = 0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs(2 * e[4] / e[0]),
            r = 0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs(2 * e[4] / e[2]),
            o = ["left" === t ? -i : "right" === t ? i : 0, "top" === t ? -r : "bottom" === t ? r : 0];
        return o = _r(o, e, n), Math.abs(o[0]) > Math.abs(o[1]) ? o[0] > 0 ? "right" : "left" : o[1] > 0 ? "bottom" : "top"
    }

    function br(t, e, n, i) {
        function r(t) {
            var e = {position: V(t.position), rotation: t.rotation};
            return t.shape && (e.shape = o({}, t.shape)), e
        }

        if (t && e) {
            var a = function (t) {
                var e = {};
                return t.traverse(function (t) {
                    !t.isGroup && t.anid && (e[t.anid] = t)
                }), e
            }(t);
            e.traverse(function (t) {
                if (!t.isGroup && t.anid) {
                    var e = a[t.anid];
                    if (e) {
                        var i = r(t);
                        t.attr(r(e)), vr(t, i, n, t.dataIndex)
                    }
                }
            })
        }
    }

    function Sr(t, e) {
        return f(t, function (t) {
            var n = t[0];
            n = Ny(n, e.x), n = Ry(n, e.x + e.width);
            var i = t[1];
            return i = Ny(i, e.y), i = Ry(i, e.y + e.height), [n, i]
        })
    }

    function Mr(t, e, n) {
        var i = (e = o({rectHover: !0}, e)).style = {strokeNoScale: !0};
        if (n = n || {
            x: -1,
            y: -1,
            width: 2,
            height: 2
        }, t) return 0 === t.indexOf("image://") ? (i.image = t.slice(8), a(i, n), new hn(e)) : Fi(t.replace("path://", ""), e, n, "center")
    }

    function Ir(t, e, n) {
        this.parentModel = e, this.ecModel = n, this.option = t
    }

    function Tr(t, e, n) {
        for (var i = 0; i < e.length && (!e[i] || null != (t = t && "object" == typeof t ? t[e[i]] : null)); i++) ;
        return null == t && n && (t = n.get(e)), t
    }

    function Ar(t, e) {
        var n = jy(t).getParent;
        return n ? n.call(t, e) : t.parentModel
    }

    function Cr(t) {
        return [t || "", qy++, Math.random().toFixed(5)].join("_")
    }

    function Dr(t) {
        return t.replace(/^\s+/, "").replace(/\s+$/, "")
    }

    function kr(t, e, n, i) {
        var r = e[1] - e[0], o = n[1] - n[0];
        if (0 === r) return 0 === o ? n[0] : (n[0] + n[1]) / 2;
        if (i) if (r > 0) {
            if (t <= e[0]) return n[0];
            if (t >= e[1]) return n[1]
        } else {
            if (t >= e[0]) return n[0];
            if (t <= e[1]) return n[1]
        } else {
            if (t === e[0]) return n[0];
            if (t === e[1]) return n[1]
        }
        return (t - e[0]) / r * o + n[0]
    }

    function Pr(t, e) {
        switch (t) {
            case"center":
            case"middle":
                t = "50%";
                break;
            case"left":
            case"top":
                t = "0%";
                break;
            case"right":
            case"bottom":
                t = "100%"
        }
        return "string" == typeof t ? Dr(t).match(/%$/) ? parseFloat(t) / 100 * e : parseFloat(t) : null == t ? NaN : +t
    }

    function Lr(t, e, n) {
        return null == e && (e = 10), e = Math.min(Math.max(0, e), 20), t = (+t).toFixed(e), n ? t : +t
    }

    function Or(t) {
        return t.sort(function (t, e) {
            return t - e
        }), t
    }

    function zr(t) {
        if (t = +t, isNaN(t)) return 0;
        for (var e = 1, n = 0; Math.round(t * e) / e !== t;) e *= 10, n++;
        return n
    }

    function Er(t) {
        var e = t.toString(), n = e.indexOf("e");
        if (n > 0) {
            var i = +e.slice(n + 1);
            return i < 0 ? -i : 0
        }
        var r = e.indexOf(".");
        return r < 0 ? 0 : e.length - 1 - r
    }

    function Nr(t, e) {
        var n = Math.log, i = Math.LN10, r = Math.floor(n(t[1] - t[0]) / i),
            o = Math.round(n(Math.abs(e[1] - e[0])) / i), a = Math.min(Math.max(-r + o, 0), 20);
        return isFinite(a) ? a : 20
    }

    function Rr(t, e, n) {
        if (!t[e]) return 0;
        var i = p(t, function (t, e) {
            return t + (isNaN(e) ? 0 : e)
        }, 0);
        if (0 === i) return 0;
        for (var r = Math.pow(10, n), o = f(t, function (t) {
            return (isNaN(t) ? 0 : t) / i * r * 100
        }), a = 100 * r, s = f(o, function (t) {
            return Math.floor(t)
        }), l = p(s, function (t, e) {
            return t + e
        }, 0), h = f(o, function (t, e) {
            return t - s[e]
        }); l < a;) {
            for (var u = Number.NEGATIVE_INFINITY, c = null, d = 0, g = h.length; d < g; ++d) h[d] > u && (u = h[d], c = d);
            ++s[c], h[c] = 0, ++l
        }
        return s[e] / r
    }

    function Br(t) {
        var e = 2 * Math.PI;
        return (t % e + e) % e
    }

    function Fr(t) {
        return t > -$y && t < $y
    }

    function Vr(t) {
        if (t instanceof Date) return t;
        if ("string" == typeof t) {
            var e = Ky.exec(t);
            if (!e) return new Date(NaN);
            if (e[8]) {
                var n = +e[4] || 0;
                return "Z" !== e[8].toUpperCase() && (n -= e[8].slice(0, 3)), new Date(Date.UTC(+e[1], +(e[2] || 1) - 1, +e[3] || 1, n, +(e[5] || 0), +e[6] || 0, +e[7] || 0))
            }
            return new Date(+e[1], +(e[2] || 1) - 1, +e[3] || 1, +e[4] || 0, +(e[5] || 0), +e[6] || 0, +e[7] || 0)
        }
        return null == t ? new Date(NaN) : new Date(Math.round(t))
    }

    function Hr(t) {
        return Math.pow(10, Wr(t))
    }

    function Wr(t) {
        return Math.floor(Math.log(t) / Math.LN10)
    }

    function Gr(t, e) {
        var n, i = Wr(t), r = Math.pow(10, i), o = t / r;
        return n = e ? o < 1.5 ? 1 : o < 2.5 ? 2 : o < 4 ? 3 : o < 7 ? 5 : 10 : o < 1 ? 1 : o < 2 ? 2 : o < 3 ? 3 : o < 5 ? 5 : 10, t = n * r, i >= -20 ? +t.toFixed(i < 0 ? -i : 0) : t
    }

    function Zr(t) {
        return isNaN(t) ? "-" : (t = (t + "").split("."))[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : "")
    }

    function Ur(t, e) {
        return t = (t || "").toLowerCase().replace(/-(.)/g, function (t, e) {
            return e.toUpperCase()
        }), e && t && (t = t.charAt(0).toUpperCase() + t.slice(1)), t
    }

    function Xr(t) {
        return null == t ? "" : (t + "").replace(tx, function (t, e) {
            return ex[e]
        })
    }

    function Yr(t, e, n) {
        y(e) || (e = [e]);
        var i = e.length;
        if (!i) return "";
        for (var r = e[0].$vars || [], o = 0; o < r.length; o++) {
            var a = nx[o];
            t = t.replace(ix(a), ix(a, 0))
        }
        for (var s = 0; s < i; s++) for (var l = 0; l < r.length; l++) {
            var h = e[s][r[l]];
            t = t.replace(ix(nx[l], s), n ? Xr(h) : h)
        }
        return t
    }

    function jr(t, e) {
        var n = (t = _(t) ? {color: t, extraCssText: e} : t || {}).color, i = t.type, e = t.extraCssText,
            r = t.renderMode || "html", o = t.markerId || "X";
        return n ? "html" === r ? "subItem" === i ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + Xr(n) + ";" + (e || "") + '"></span>' : '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + Xr(n) + ";" + (e || "") + '"></span>' : {
            renderMode: r,
            content: "{marker" + o + "|}  ",
            style: {color: n}
        } : ""
    }

    function qr(t, e) {
        return t += "", "0000".substr(0, e - t.length) + t
    }

    function $r(t, e, n) {
        "week" !== t && "month" !== t && "quarter" !== t && "half-year" !== t && "year" !== t || (t = "MM-dd\nyyyy");
        var i = Vr(e), r = n ? "UTC" : "", o = i["get" + r + "FullYear"](), a = i["get" + r + "Month"]() + 1,
            s = i["get" + r + "Date"](), l = i["get" + r + "Hours"](), h = i["get" + r + "Minutes"](),
            u = i["get" + r + "Seconds"](), c = i["get" + r + "Milliseconds"]();
        return t = t.replace("MM", qr(a, 2)).replace("M", a).replace("yyyy", o).replace("yy", o % 100).replace("dd", qr(s, 2)).replace("d", s).replace("hh", qr(l, 2)).replace("h", l).replace("mm", qr(h, 2)).replace("m", h).replace("ss", qr(u, 2)).replace("s", u).replace("SSS", qr(c, 3))
    }

    function Kr(t) {
        return t ? t.charAt(0).toUpperCase() + t.substr(1) : t
    }

    function Qr(t, e, n, i, r) {
        var o = 0, a = 0;
        null == i && (i = 1 / 0), null == r && (r = 1 / 0);
        var s = 0;
        e.eachChild(function (l, h) {
            var u, c, d = l.position, f = l.getBoundingRect(), p = e.childAt(h + 1), g = p && p.getBoundingRect();
            if ("horizontal" === t) {
                var m = f.width + (g ? -g.x + f.x : 0);
                (u = o + m) > i || l.newline ? (o = 0, u = m, a += s + n, s = f.height) : s = Math.max(s, f.height)
            } else {
                var v = f.height + (g ? -g.y + f.y : 0);
                (c = a + v) > r || l.newline ? (o += s + n, a = 0, c = v, s = f.width) : s = Math.max(s, f.width)
            }
            l.newline || (d[0] = o, d[1] = a, "horizontal" === t ? o = u + n : a = c + n)
        })
    }

    function Jr(t, e, n) {
        n = Jy(n || 0);
        var i = e.width, r = e.height, o = Pr(t.left, i), a = Pr(t.top, r), s = Pr(t.right, i), l = Pr(t.bottom, r),
            h = Pr(t.width, i), u = Pr(t.height, r), c = n[2] + n[0], d = n[1] + n[3], f = t.aspect;
        switch (isNaN(h) && (h = i - s - d - o), isNaN(u) && (u = r - l - c - a), null != f && (isNaN(h) && isNaN(u) && (f > i / r ? h = .8 * i : u = .8 * r), isNaN(h) && (h = f * u), isNaN(u) && (u = h / f)), isNaN(o) && (o = i - s - h - d), isNaN(a) && (a = r - l - u - c), t.left || t.right) {
            case"center":
                o = i / 2 - h / 2 - n[3];
                break;
            case"right":
                o = i - h - d
        }
        switch (t.top || t.bottom) {
            case"middle":
            case"center":
                a = r / 2 - u / 2 - n[0];
                break;
            case"bottom":
                a = r - u - c
        }
        o = o || 0, a = a || 0, isNaN(h) && (h = i - d - o - (s || 0)), isNaN(u) && (u = r - c - a - (l || 0));
        var p = new se(o + n[3], a + n[0], h, u);
        return p.margin = n, p
    }

    function to(t, e, n, i, r) {
        var o = !r || !r.hv || r.hv[0], s = !r || !r.hv || r.hv[1], l = r && r.boundingMode || "all";
        if (o || s) {
            var h;
            if ("raw" === l) h = "group" === t.type ? new se(0, 0, +e.width || 0, +e.height || 0) : t.getBoundingRect(); else if (h = t.getBoundingRect(), t.needLocalTransform()) {
                var u = t.getLocalTransform();
                (h = h.clone()).applyTransform(u)
            }
            e = Jr(a({width: h.width, height: h.height}, e), n, i);
            var c = t.position, d = o ? e.x - h.x : 0, f = s ? e.y - h.y : 0;
            t.attr("position", "raw" === l ? [d, f] : [c[0] + d, c[1] + f])
        }
    }

    function eo(t, e, n) {
        function i(n, i) {
            var a = {}, l = 0, h = {}, u = 0;
            if (ax(n, function (e) {
                h[e] = t[e]
            }), ax(n, function (t) {
                r(e, t) && (a[t] = h[t] = e[t]), o(a, t) && l++, o(h, t) && u++
            }), s[i]) return o(e, n[1]) ? h[n[2]] = null : o(e, n[2]) && (h[n[1]] = null), h;
            if (2 !== u && l) {
                if (l >= 2) return a;
                for (var c = 0; c < n.length; c++) {
                    var d = n[c];
                    if (!r(a, d) && r(t, d)) {
                        a[d] = t[d];
                        break
                    }
                }
                return a
            }
            return h
        }

        function r(t, e) {
            return t.hasOwnProperty(e)
        }

        function o(t, e) {
            return null != t[e] && "auto" !== t[e]
        }

        function a(t, e, n) {
            ax(t, function (t) {
                e[t] = n[t]
            })
        }

        !w(n) && (n = {});
        var s = n.ignoreSize;
        !y(s) && (s = [s, s]);
        var l = i(lx[0], 0), h = i(lx[1], 1);
        a(lx[0], t, l), a(lx[1], t, h)
    }

    function no(t) {
        return io({}, t)
    }

    function io(t, e) {
        return e && t && ax(sx, function (n) {
            e.hasOwnProperty(n) && (t[n] = e[n])
        }), t
    }

    function ro(t, e) {
        for (var n = t.length, i = 0; i < n; i++) if (t[i].length > e) return t[i];
        return t[n - 1]
    }

    function oo(t) {
        var e = t.get("coordinateSystem"), n = {coordSysName: e, coordSysDims: [], axisMap: N(), categoryAxisMap: N()},
            i = vx[e];
        if (i) return i(t, n, n.axisMap, n.categoryAxisMap), n
    }

    function ao(t) {
        return "category" === t.get("type")
    }

    function so(t) {
        this.fromDataset = t.fromDataset, this.data = t.data || (t.sourceFormat === bx ? {} : []), this.sourceFormat = t.sourceFormat || Sx, this.seriesLayoutBy = t.seriesLayoutBy || Ix, this.dimensionsDefine = t.dimensionsDefine, this.encodeDefine = t.encodeDefine && N(t.encodeDefine), this.startIndex = t.startIndex || 0, this.dimensionsDetectCount = t.dimensionsDetectCount
    }

    function lo(t) {
        var e = t.option.source, n = Sx;
        if (S(e)) n = Mx; else if (y(e)) {
            0 === e.length && (n = xx);
            for (var i = 0, r = e.length; i < r; i++) {
                var o = e[i];
                if (null != o) {
                    if (y(o)) {
                        n = xx;
                        break
                    }
                    if (w(o)) {
                        n = _x;
                        break
                    }
                }
            }
        } else if (w(e)) {
            for (var a in e) if (e.hasOwnProperty(a) && c(e[a])) {
                n = bx;
                break
            }
        } else if (null != e) throw new Error("Invalid data");
        Ax(t).sourceFormat = n
    }

    function ho(t) {
        return Ax(t).source
    }

    function uo(t) {
        Ax(t).datasetMap = N()
    }

    function co(t) {
        var e = t.option, n = e.data, i = S(n) ? Mx : yx, r = !1, o = e.seriesLayoutBy, a = e.sourceHeader,
            s = e.dimensions, l = yo(t);
        if (l) {
            var h = l.option;
            n = h.source, i = Ax(l).sourceFormat, r = !0, o = o || h.seriesLayoutBy, null == a && (a = h.sourceHeader), s = s || h.dimensions
        }
        var u = fo(n, i, o, a, s), c = e.encode;
        !c && l && (c = vo(t, l, n, i, o, u)), Ax(t).source = new so({
            data: n,
            fromDataset: r,
            seriesLayoutBy: o,
            sourceFormat: i,
            dimensionsDefine: u.dimensionsDefine,
            startIndex: u.startIndex,
            dimensionsDetectCount: u.dimensionsDetectCount,
            encodeDefine: c
        })
    }

    function fo(t, e, n, i, r) {
        if (!t) return {dimensionsDefine: po(r)};
        var o, a, s;
        if (e === xx) "auto" === i || null == i ? go(function (t) {
            null != t && "-" !== t && (_(t) ? null == a && (a = 1) : a = 0)
        }, n, t, 10) : a = i ? 1 : 0, r || 1 !== a || (r = [], go(function (t, e) {
            r[e] = null != t ? t : ""
        }, n, t)), o = r ? r.length : n === Tx ? t.length : t[0] ? t[0].length : null; else if (e === _x) r || (r = mo(t), s = !0); else if (e === bx) r || (r = [], s = !0, d(t, function (t, e) {
            r.push(e)
        })); else if (e === yx) {
            var l = Tn(t[0]);
            o = y(l) && l.length || 1
        }
        var h;
        return s && d(r, function (t, e) {
            "name" === (w(t) ? t.name : t) && (h = e)
        }), {startIndex: a, dimensionsDefine: po(r), dimensionsDetectCount: o, potentialNameDimIndex: h}
    }

    function po(t) {
        if (t) {
            var e = N();
            return f(t, function (t, n) {
                if (null == (t = o({}, w(t) ? t : {name: t})).name) return t;
                t.name += "", null == t.displayName && (t.displayName = t.name);
                var i = e.get(t.name);
                return i ? t.name += "-" + i.count++ : e.set(t.name, {count: 1}), t
            })
        }
    }

    function go(t, e, n, i) {
        if (null == i && (i = 1 / 0), e === Tx) for (o = 0; o < n.length && o < i; o++) t(n[o] ? n[o][0] : null, o); else for (var r = n[0] || [], o = 0; o < r.length && o < i; o++) t(r[o], o)
    }

    function mo(t) {
        for (var e, n = 0; n < t.length && !(e = t[n++]);) ;
        if (e) {
            var i = [];
            return d(e, function (t, e) {
                i.push(e)
            }), i
        }
    }

    function vo(t, e, n, i, r, o) {
        var a = oo(t), s = {}, l = [], h = [], u = t.subType, c = N(["pie", "map", "funnel"]),
            f = N(["line", "bar", "pictorialBar", "scatter", "effectScatter", "candlestick", "boxplot"]);
        if (a && null != f.get(u)) {
            var p = t.ecModel, g = Ax(p).datasetMap, m = e.uid + "_" + r,
                v = g.get(m) || g.set(m, {categoryWayDim: 1, valueWayDim: 0});
            d(a.coordSysDims, function (t) {
                if (null == a.firstCategoryDimIndex) {
                    e = v.valueWayDim++;
                    s[t] = e, h.push(e)
                } else if (a.categoryAxisMap.get(t)) s[t] = 0, l.push(0); else {
                    var e = v.categoryWayDim++;
                    s[t] = e, h.push(e)
                }
            })
        } else if (null != c.get(u)) {
            for (var y, x = 0; x < 5 && null == y; x++) _o(n, i, r, o.dimensionsDefine, o.startIndex, x) || (y = x);
            if (null != y) {
                s.value = y;
                var _ = o.potentialNameDimIndex || Math.max(y - 1, 0);
                h.push(_), l.push(_)
            }
        }
        return l.length && (s.itemName = l), h.length && (s.seriesName = h), s
    }

    function yo(t) {
        var e = t.option;
        if (!e.data) return t.ecModel.getComponent("dataset", e.datasetIndex || 0)
    }

    function xo(t, e) {
        return _o(t.data, t.sourceFormat, t.seriesLayoutBy, t.dimensionsDefine, t.startIndex, e)
    }

    function _o(t, e, n, i, r, o) {
        function a(t) {
            return (null == t || !isFinite(t) || "" === t) && (!(!_(t) || "-" === t) || void 0)
        }

        var s;
        if (S(t)) return !1;
        var l;
        if (i && (l = w(l = i[o]) ? l.name : l), e === xx) if (n === Tx) {
            for (var h = t[o], u = 0; u < (h || []).length && u < 5; u++) if (null != (s = a(h[r + u]))) return s
        } else for (u = 0; u < t.length && u < 5; u++) {
            var c = t[r + u];
            if (c && null != (s = a(c[o]))) return s
        } else if (e === _x) {
            if (!l) return;
            for (u = 0; u < t.length && u < 5; u++) if ((d = t[u]) && null != (s = a(d[l]))) return s
        } else if (e === bx) {
            if (!l) return;
            if (!(h = t[l]) || S(h)) return !1;
            for (u = 0; u < h.length && u < 5; u++) if (null != (s = a(h[u]))) return s
        } else if (e === yx) for (u = 0; u < t.length && u < 5; u++) {
            var d = t[u], f = Tn(d);
            if (!y(f)) return !1;
            if (null != (s = a(f[o]))) return s
        }
        return !1
    }

    function wo(t, e) {
        if (e) {
            var n = e.seiresIndex, i = e.seriesId, r = e.seriesName;
            return null != n && t.componentIndex !== n || null != i && t.id !== i || null != r && t.name !== r
        }
    }

    function bo(t, e) {
        var r = t.color && !t.colorLayer;
        d(e, function (e, o) {
            "colorLayer" === o && r || dx.hasClass(o) || ("object" == typeof e ? t[o] = t[o] ? i(t[o], e, !1) : n(e) : null == t[o] && (t[o] = e))
        })
    }

    function So(t) {
        t = t, this.option = {}, this.option[Cx] = 1, this._componentsMap = N({series: []}), this._seriesIndices, this._seriesIndicesMap, bo(t, this._theme.option), i(t, px, !1), this.mergeOption(t)
    }

    function Mo(t, e) {
        y(e) || (e = e ? [e] : []);
        var n = {};
        return d(e, function (e) {
            n[e] = (t.get(e) || []).slice()
        }), n
    }

    function Io(t, e, n) {
        return e.type ? e.type : n ? n.subType : dx.determineSubType(t, e)
    }

    function To(t, e) {
        t._seriesIndicesMap = N(t._seriesIndices = f(e, function (t) {
            return t.componentIndex
        }) || [])
    }

    function Ao(t, e) {
        return e.hasOwnProperty("subType") ? g(t, function (t) {
            return t.subType === e.subType
        }) : t
    }

    function Co(t) {
        d(kx, function (e) {
            this[e] = m(t[e], t)
        }, this)
    }

    function Do() {
        this._coordinateSystems = []
    }

    function ko(t) {
        this._api = t, this._timelineOptions = [], this._mediaList = [], this._mediaDefault, this._currentMediaIndices = [], this._optionBackup, this._newBaseOption
    }

    function Po(t, e, n) {
        var i, r, o = [], a = [], s = t.timeline;
        if (t.baseOption && (r = t.baseOption), (s || t.options) && (r = r || {}, o = (t.options || []).slice()), t.media) {
            r = r || {};
            var l = t.media;
            Lx(l, function (t) {
                t && t.option && (t.query ? a.push(t) : i || (i = t))
            })
        }
        return r || (r = t), r.timeline || (r.timeline = s), Lx([r].concat(o).concat(f(a, function (t) {
            return t.option
        })), function (t) {
            Lx(e, function (e) {
                e(t, n)
            })
        }), {baseOption: r, timelineOptions: o, mediaDefault: i, mediaList: a}
    }

    function Lo(t, e, n) {
        var i = {width: e, height: n, aspectratio: e / n}, r = !0;
        return d(t, function (t, e) {
            var n = e.match(Nx);
            if (n && n[1] && n[2]) {
                var o = n[1], a = n[2].toLowerCase();
                Oo(i[a], t, o) || (r = !1)
            }
        }), r
    }

    function Oo(t, e, n) {
        return "min" === n ? t >= e : "max" === n ? t <= e : t === e
    }

    function zo(t, e) {
        return t.join(",") === e.join(",")
    }

    function Eo(t, e) {
        Lx(e = e || {}, function (e, n) {
            if (null != e) {
                var i = t[n];
                if (dx.hasClass(n)) {
                    e = Mn(e);
                    var r = Cn(i = Mn(i), e);
                    t[n] = zx(r, function (t) {
                        return t.option && t.exist ? Ex(t.exist, t.option, !0) : t.exist || t.option
                    })
                } else t[n] = Ex(i, e, !0)
            }
        })
    }

    function No(t) {
        var e = t && t.itemStyle;
        if (e) for (var n = 0, r = Fx.length; n < r; n++) {
            var o = Fx[n], a = e.normal, s = e.emphasis;
            a && a[o] && (t[o] = t[o] || {}, t[o].normal ? i(t[o].normal, a[o]) : t[o].normal = a[o], a[o] = null), s && s[o] && (t[o] = t[o] || {}, t[o].emphasis ? i(t[o].emphasis, s[o]) : t[o].emphasis = s[o], s[o] = null)
        }
    }

    function Ro(t, e, n) {
        if (t && t[e] && (t[e].normal || t[e].emphasis)) {
            var i = t[e].normal, r = t[e].emphasis;
            i && (n ? (t[e].normal = t[e].emphasis = null, a(t[e], i)) : t[e] = i), r && (t.emphasis = t.emphasis || {}, t.emphasis[e] = r)
        }
    }

    function Bo(t) {
        Ro(t, "itemStyle"), Ro(t, "lineStyle"), Ro(t, "areaStyle"), Ro(t, "label"), Ro(t, "labelLine"), Ro(t, "upperLabel"), Ro(t, "edgeLabel")
    }

    function Fo(t, e) {
        var n = Bx(t) && t[e], i = Bx(n) && n.textStyle;
        if (i) for (var r = 0, o = tv.length; r < o; r++) {
            var e = tv[r];
            i.hasOwnProperty(e) && (n[e] = i[e])
        }
    }

    function Vo(t) {
        t && (Bo(t), Fo(t, "label"), t.emphasis && Fo(t.emphasis, "label"))
    }

    function Ho(t) {
        if (Bx(t)) {
            No(t), Bo(t), Fo(t, "label"), Fo(t, "upperLabel"), Fo(t, "edgeLabel"), t.emphasis && (Fo(t.emphasis, "label"), Fo(t.emphasis, "upperLabel"), Fo(t.emphasis, "edgeLabel"));
            var e = t.markPoint;
            e && (No(e), Vo(e));
            var n = t.markLine;
            n && (No(n), Vo(n));
            var i = t.markArea;
            i && Vo(i);
            var r = t.data;
            if ("graph" === t.type) {
                r = r || t.nodes;
                var o = t.links || t.edges;
                if (o && !S(o)) for (s = 0; s < o.length; s++) Vo(o[s]);
                d(t.categories, function (t) {
                    Bo(t)
                })
            }
            if (r && !S(r)) for (s = 0; s < r.length; s++) Vo(r[s]);
            if ((e = t.markPoint) && e.data) for (var a = e.data, s = 0; s < a.length; s++) Vo(a[s]);
            if ((n = t.markLine) && n.data) for (var l = n.data, s = 0; s < l.length; s++) y(l[s]) ? (Vo(l[s][0]), Vo(l[s][1])) : Vo(l[s]);
            "gauge" === t.type ? (Fo(t, "axisLabel"), Fo(t, "title"), Fo(t, "detail")) : "treemap" === t.type ? (Ro(t.breadcrumb, "itemStyle"), d(t.levels, function (t) {
                Bo(t)
            })) : "tree" === t.type && Bo(t.leaves)
        }
    }

    function Wo(t) {
        return y(t) ? t : t ? [t] : []
    }

    function Go(t) {
        return (y(t) ? t[0] : t) || {}
    }

    function Zo(t, e) {
        e = e.split(",");
        for (var n = t, i = 0; i < e.length && null != (n = n && n[e[i]]); i++) ;
        return n
    }

    function Uo(t, e, n, i) {
        e = e.split(",");
        for (var r, o = t, a = 0; a < e.length - 1; a++) null == o[r = e[a]] && (o[r] = {}), o = o[r];
        (i || null == o[e[a]]) && (o[e[a]] = n)
    }

    function Xo(t) {
        d(Hx, function (e) {
            e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]])
        })
    }

    function Yo(t) {
        d(t, function (e, n) {
            var i = [], r = [NaN, NaN], o = [e.stackResultDimension, e.stackedOverDimension], a = e.data,
                s = e.isStackedByIndex, l = a.map(o, function (o, l, h) {
                    var u = a.get(e.stackedDimension, h);
                    if (isNaN(u)) return r;
                    var c, d;
                    s ? d = a.getRawIndex(h) : c = a.get(e.stackedByDimension, h);
                    for (var f = NaN, p = n - 1; p >= 0; p--) {
                        var g = t[p];
                        if (s || (d = g.data.rawIndexOf(g.stackedByDimension, c)), d >= 0) {
                            var m = g.data.getByRawIndex(g.stackResultDimension, d);
                            if (u >= 0 && m > 0 || u <= 0 && m < 0) {
                                u += m, f = m;
                                break
                            }
                        }
                    }
                    return i[0] = u, i[1] = f, i
                });
            a.hostModel.setData(l), e.data = l
        })
    }

    function jo(t, e) {
        so.isInstance(t) || (t = so.seriesDataToSource(t)), this._source = t;
        var n = this._data = t.data, i = t.sourceFormat;
        i === Mx && (this._offset = 0, this._dimSize = e, this._data = n), o(this, Ux[i === xx ? i + "_" + t.seriesLayoutBy : i])
    }

    function qo() {
        return this._data.length
    }

    function $o(t) {
        return this._data[t]
    }

    function Ko(t) {
        for (var e = 0; e < t.length; e++) this._data.push(t[e])
    }

    function Qo(t, e, n, i) {
        return null != n ? t[n] : t
    }

    function Jo(t, e, n, i) {
        return ta(t[i], this._dimensionInfos[e])
    }

    function ta(t, e) {
        var n = e && e.type;
        if ("ordinal" === n) {
            var i = e && e.ordinalMeta;
            return i ? i.parseAndCollect(t) : t
        }
        return "time" === n && "number" != typeof t && null != t && "-" !== t && (t = +Vr(t)), null == t || "" === t ? NaN : +t
    }

    function ea(t, e, n) {
        if (t) {
            var i = t.getRawDataItem(e);
            if (null != i) {
                var r, o, a = t.getProvider().getSource().sourceFormat, s = t.getDimensionInfo(n);
                return s && (r = s.name, o = s.index), Xx[a](i, e, o, r)
            }
        }
    }

    function na(t, e, n) {
        if (t) {
            var i = t.getProvider().getSource().sourceFormat;
            if (i === yx || i === _x) {
                var r = t.getRawDataItem(e);
                return i !== yx || w(r) || (r = null), r ? r[n] : void 0
            }
        }
    }

    function ia(t) {
        return new ra(t)
    }

    function ra(t) {
        t = t || {}, this._reset = t.reset, this._plan = t.plan, this._count = t.count, this._onDirty = t.onDirty, this._dirty = !0, this.context
    }

    function oa(t, e, n, i, r, o) {
        Kx.reset(n, i, r, o), t._callingProgress = e, t._callingProgress({
            start: n,
            end: i,
            count: i - n,
            next: Kx.next
        }, t.context)
    }

    function aa(t, e) {
        t._dueIndex = t._outputDueEnd = t._dueEnd = 0, t._settedOutputEnd = null;
        var n, i;
        !e && t._reset && ((n = t._reset(t.context)) && n.progress && (i = n.forceFirstProgress, n = n.progress), y(n) && !n.length && (n = null)), t._progress = n, t._modBy = t._modDataCount = null;
        var r = t._downstream;
        return r && r.dirty(), i
    }

    function sa(t) {
        var e = t.name;
        kn(t) || (t.name = la(t) || e)
    }

    function la(t) {
        var e = t.getRawData(), n = [];
        return d(e.mapDimension("seriesName", !0), function (t) {
            var i = e.getDimensionInfo(t);
            i.displayName && n.push(i.displayName)
        }), n.join(" ")
    }

    function ha(t) {
        return t.model.getRawData().count()
    }

    function ua(t) {
        var e = t.model;
        return e.setData(e.getRawData().cloneShallow()), ca
    }

    function ca(t, e) {
        t.end > e.outputData.count() && e.model.getRawData().cloneShallow(e.outputData)
    }

    function da(t, e) {
        d(t.CHANGABLE_METHODS, function (n) {
            t.wrapMethod(n, v(fa, e))
        })
    }

    function fa(t) {
        var e = pa(t);
        e && e.setOutputEnd(this.count())
    }

    function pa(t) {
        var e = (t.ecModel || {}).scheduler, n = e && e.getPipeline(t.uid);
        if (n) {
            var i = n.currentTask;
            if (i) {
                var r = i.agentStubMap;
                r && (i = r.get(t.uid))
            }
            return i
        }
    }

    function ga() {
        this.group = new am, this.uid = Cr("viewChart"), this.renderTask = ia({
            plan: ya,
            reset: xa
        }), this.renderTask.context = {view: this}
    }

    function ma(t, e) {
        if (t && (t.trigger(e), "group" === t.type)) for (var n = 0; n < t.childCount(); n++) ma(t.childAt(n), e)
    }

    function va(t, e, n) {
        var i = Ln(t, e);
        null != i ? d(Mn(i), function (e) {
            ma(t.getItemGraphicEl(e), n)
        }) : t.eachItemGraphicEl(function (t) {
            ma(t, n)
        })
    }

    function ya(t) {
        return r_(t.model)
    }

    function xa(t) {
        var e = t.model, n = t.ecModel, i = t.api, r = t.payload, o = e.pipelineContext.progressiveRender, a = t.view,
            s = r && i_(r).updateMethod, l = o ? "incrementalPrepareRender" : s && a[s] ? s : "render";
        return "render" !== l && a[l](e, n, i, r), a_[l]
    }

    function _a(t, e, n) {
        function i() {
            u = (new Date).getTime(), c = null, t.apply(a, s || [])
        }

        var r, o, a, s, l, h = 0, u = 0, c = null;
        e = e || 0;
        var d = function () {
            r = (new Date).getTime(), a = this, s = arguments;
            var t = l || e, d = l || n;
            l = null, o = r - (d ? h : u) - t, clearTimeout(c), d ? c = setTimeout(i, t) : o >= 0 ? i() : c = setTimeout(i, -o), h = r
        };
        return d.clear = function () {
            c && (clearTimeout(c), c = null)
        }, d.debounceNextCall = function (t) {
            l = t
        }, d
    }

    function wa(t, e, n, i) {
        var r = t[e];
        if (r) {
            var o = r[s_] || r, a = r[h_];
            if (r[l_] !== n || a !== i) {
                if (null == n || !i) return t[e] = o;
                (r = t[e] = _a(o, n, "debounce" === i))[s_] = o, r[h_] = i, r[l_] = n
            }
            return r
        }
    }

    function ba(t, e) {
        var n = t[e];
        n && n[s_] && (t[e] = n[s_])
    }

    function Sa(t, e, n, i) {
        this.ecInstance = t, this.api = e, this.unfinished;
        var n = this._dataProcessorHandlers = n.slice(), i = this._visualHandlers = i.slice();
        this._allHandlers = n.concat(i), this._stageTaskMap = N()
    }

    function Ma(t, e, n, i, r) {
        function o(t, e) {
            return t.setDirty && (!t.dirtyMap || t.dirtyMap.get(e.__pipeline.id))
        }

        r = r || {};
        var a;
        d(e, function (e, s) {
            if (!r.visualType || r.visualType === e.visualType) {
                var l = t._stageTaskMap.get(e.uid), h = l.seriesTaskMap, u = l.overallTask;
                if (u) {
                    var c, d = u.agentStubMap;
                    d.each(function (t) {
                        o(r, t) && (t.dirty(), c = !0)
                    }), c && u.dirty(), g_(u, i);
                    var f = t.getPerformArgs(u, r.block);
                    d.each(function (t) {
                        t.perform(f)
                    }), a |= u.perform(f)
                } else h && h.each(function (s, l) {
                    o(r, s) && s.dirty();
                    var h = t.getPerformArgs(s, r.block);
                    h.skip = !e.performRawSeries && n.isSeriesFiltered(s.context.model), g_(s, i), a |= s.perform(h)
                })
            }
        }), t.unfinished |= a
    }

    function Ia(t, e, n, i, r) {
        function o(n) {
            var o = n.uid, s = a.get(o) || a.set(o, ia({plan: Pa, reset: La, count: za}));
            s.context = {
                model: n,
                ecModel: i,
                api: r,
                useClearVisual: e.isVisual && !e.isLayout,
                plan: e.plan,
                reset: e.reset,
                scheduler: t
            }, Ea(t, n, s)
        }

        var a = n.seriesTaskMap || (n.seriesTaskMap = N()), s = e.seriesType, l = e.getTargetSeries;
        e.createOnAllSeries ? i.eachRawSeries(o) : s ? i.eachRawSeriesByType(s, o) : l && l(i, r).each(o);
        var h = t._pipelineMap;
        a.each(function (t, e) {
            h.get(e) || (t.dispose(), a.removeKey(e))
        })
    }

    function Ta(t, e, n, i, r) {
        function o(e) {
            var n = e.uid, i = s.get(n);
            i || (i = s.set(n, ia({reset: Ca, onDirty: ka})), a.dirty()), i.context = {
                model: e,
                overallProgress: u,
                modifyOutputEnd: c
            }, i.agent = a, i.__block = u, Ea(t, e, i)
        }

        var a = n.overallTask = n.overallTask || ia({reset: Aa});
        a.context = {ecModel: i, api: r, overallReset: e.overallReset, scheduler: t};
        var s = a.agentStubMap = a.agentStubMap || N(), l = e.seriesType, h = e.getTargetSeries, u = !0,
            c = e.modifyOutputEnd;
        l ? i.eachRawSeriesByType(l, o) : h ? h(i, r).each(o) : (u = !1, d(i.getSeries(), o));
        var f = t._pipelineMap;
        s.each(function (t, e) {
            f.get(e) || (t.dispose(), a.dirty(), s.removeKey(e))
        })
    }

    function Aa(t) {
        t.overallReset(t.ecModel, t.api, t.payload)
    }

    function Ca(t, e) {
        return t.overallProgress && Da
    }

    function Da() {
        this.agent.dirty(), this.getDownstream().dirty()
    }

    function ka() {
        this.agent && this.agent.dirty()
    }

    function Pa(t) {
        return t.plan && t.plan(t.model, t.ecModel, t.api, t.payload)
    }

    function La(t) {
        t.useClearVisual && t.data.clearAllVisual();
        var e = t.resetDefines = Mn(t.reset(t.model, t.ecModel, t.api, t.payload));
        return e.length > 1 ? f(e, function (t, e) {
            return Oa(e)
        }) : m_
    }

    function Oa(t) {
        return function (e, n) {
            var i = n.data, r = n.resetDefines[t];
            if (r && r.dataEach) for (var o = e.start; o < e.end; o++) r.dataEach(i, o); else r && r.progress && r.progress(e, i)
        }
    }

    function za(t) {
        return t.data.count()
    }

    function Ea(t, e, n) {
        var i = e.uid, r = t._pipelineMap.get(i);
        !r.head && (r.head = n), r.tail && r.tail.pipe(n), r.tail = n, n.__idxInPipeline = r.count++, n.__pipeline = r
    }

    function Na(t) {
        v_ = null;
        try {
            t(y_, x_)
        } catch (t) {
        }
        return v_
    }

    function Ra(t, e) {
        for (var n in e.prototype) t[n] = R
    }

    function Ba(t) {
        for (_(t) && (t = (new DOMParser).parseFromString(t, "text/xml")), 9 === t.nodeType && (t = t.firstChild); "svg" !== t.nodeName.toLowerCase() || 1 !== t.nodeType;) t = t.nextSibling;
        return t
    }

    function Fa() {
        this._defs = {}, this._root = null, this._isDefine = !1, this._isText = !1
    }

    function Va(t, e) {
        for (var n = t.firstChild; n;) {
            if (1 === n.nodeType) {
                var i = n.getAttribute("offset");
                i = i.indexOf("%") > 0 ? parseInt(i, 10) / 100 : i ? parseFloat(i) : 0;
                var r = n.getAttribute("stop-color") || "#000000";
                e.addColorStop(i, r)
            }
            n = n.nextSibling
        }
    }

    function Ha(t, e) {
        t && t.__inheritedStyle && (e.__inheritedStyle || (e.__inheritedStyle = {}), a(e.__inheritedStyle, t.__inheritedStyle))
    }

    function Wa(t) {
        for (var e = L(t).split(I_), n = [], i = 0; i < e.length; i += 2) {
            var r = parseFloat(e[i]), o = parseFloat(e[i + 1]);
            n.push([r, o])
        }
        return n
    }

    function Ga(t, e, n, i) {
        var r = e.__inheritedStyle || {}, a = "text" === e.type;
        if (1 === t.nodeType && (Ua(t, e), o(r, Xa(t)), !i)) for (var s in C_) if (C_.hasOwnProperty(s)) {
            var l = t.getAttribute(s);
            null != l && (r[C_[s]] = l)
        }
        var h = a ? "textFill" : "fill", u = a ? "textStroke" : "stroke";
        e.style = e.style || new gm;
        var c = e.style;
        null != r.fill && c.set(h, Za(r.fill, n)), null != r.stroke && c.set(u, Za(r.stroke, n)), d(["lineWidth", "opacity", "fillOpacity", "strokeOpacity", "miterLimit", "fontSize"], function (t) {
            var e = "lineWidth" === t && a ? "textStrokeWidth" : t;
            null != r[t] && c.set(e, parseFloat(r[t]))
        }), r.textBaseline && "auto" !== r.textBaseline || (r.textBaseline = "alphabetic"), "alphabetic" === r.textBaseline && (r.textBaseline = "bottom"), "start" === r.textAlign && (r.textAlign = "left"), "end" === r.textAlign && (r.textAlign = "right"), d(["lineDashOffset", "lineCap", "lineJoin", "fontWeight", "fontFamily", "fontStyle", "textAlign", "textBaseline"], function (t) {
            null != r[t] && c.set(t, r[t])
        }), r.lineDash && (e.style.lineDash = L(r.lineDash).split(I_)), c[u] && "none" !== c[u] && (e[u] = !0), e.__inheritedStyle = r
    }

    function Za(t, e) {
        var n = e && t && t.match(D_);
        return n ? e[L(n[1])] : t
    }

    function Ua(t, e) {
        var n = t.getAttribute("transform");
        if (n) {
            var i = null, r = [];
            (n = n.replace(/,/g, " ")).replace(k_, function (t, e, n) {
                r.push(e, n)
            });
            for (var o = r.length - 1; o > 0; o -= 2) {
                var a = r[o], s = r[o - 1];
                switch (i = i || mt(), s) {
                    case"translate":
                        a = L(a).split(I_), _t(i, i, [parseFloat(a[0]), parseFloat(a[1] || 0)]);
                        break;
                    case"scale":
                        a = L(a).split(I_), bt(i, i, [parseFloat(a[0]), parseFloat(a[1] || a[0])]);
                        break;
                    case"rotate":
                        a = L(a).split(I_), wt(i, i, parseFloat(a[0]));
                        break;
                    case"skew":
                        a = L(a).split(I_), console.warn("Skew transform is not supported yet");
                        break;
                    case"matrix":
                        a = L(a).split(I_);
                        i[0] = parseFloat(a[0]), i[1] = parseFloat(a[1]), i[2] = parseFloat(a[2]), i[3] = parseFloat(a[3]), i[4] = parseFloat(a[4]), i[5] = parseFloat(a[5])
                }
            }
            e.setLocalTransform(i)
        }
    }

    function Xa(t) {
        var e = t.getAttribute("style"), n = {};
        if (!e) return n;
        var i = {};
        P_.lastIndex = 0;
        for (var r; null != (r = P_.exec(e));) i[r[1]] = r[2];
        for (var o in C_) C_.hasOwnProperty(o) && null != i[o] && (n[C_[o]] = i[o]);
        return n
    }

    function Ya(t, e, n) {
        var i = e / t.width, r = n / t.height, o = Math.min(i, r);
        return {scale: [o, o], position: [-(t.x + t.width / 2) * o + e / 2, -(t.y + t.height / 2) * o + n / 2]}
    }

    function ja(t) {
        return function (e, n, i) {
            e = e && e.toLowerCase(), xg.prototype[t].call(this, e, n, i)
        }
    }

    function qa() {
        xg.call(this)
    }

    function $a(t, e, i) {
        function r(t, e) {
            return t.__prio - e.__prio
        }

        i = i || {}, "string" == typeof e && (e = iw[e]), this.id, this.group, this._dom = t;
        var o = this._zr = wn(t, {
            renderer: i.renderer || "canvas",
            devicePixelRatio: i.devicePixelRatio,
            width: i.width,
            height: i.height
        });
        this._throttledZrFlush = _a(m(o.flush, o), 17), (e = n(e)) && Gx(e, !0), this._theme = e, this._chartsViews = [], this._chartsMap = {}, this._componentsViews = [], this._componentsMap = {}, this._coordSysMgr = new Do;
        var a = this._api = ps(this);
        ge(nw, r), ge(J_, r), this._scheduler = new Sa(this, a, J_, nw), xg.call(this, this._ecEventProcessor = new gs), this._messageCenter = new qa, this._initEvents(), this.resize = m(this.resize, this), this._pendingActions = [], o.animation.on("frame", this._onframe, this), rs(o, this), O(this)
    }

    function Ka(t, e, n) {
        var i, r = this._model, o = this._coordSysMgr.getCoordinateSystems();
        e = zn(r, e);
        for (var a = 0; a < o.length; a++) {
            var s = o[a];
            if (s[t] && null != (i = s[t](r, e, n))) return i
        }
    }

    function Qa(t) {
        var e = t._model, n = t._scheduler;
        n.restorePipelines(e), n.prepareStageTasks(), os(t, "component", e, n), os(t, "chart", e, n), n.plan()
    }

    function Ja(t, e, n, i, r) {
        function o(i) {
            i && i.__alive && i[e] && i[e](i.__model, a, t._api, n)
        }

        var a = t._model;
        if (i) {
            var s = {};
            s[i + "Id"] = n[i + "Id"], s[i + "Index"] = n[i + "Index"], s[i + "Name"] = n[i + "Name"];
            var l = {mainType: i, query: s};
            r && (l.subType = r);
            var h = n.excludeSeriesId;
            null != h && (h = N(Mn(h))), a && a.eachComponent(l, function (e) {
                h && null != h.get(e.id) || o(t["series" === i ? "_chartsMap" : "_componentsMap"][e.__viewId])
            }, t)
        } else N_(t._componentsViews.concat(t._chartsViews), o)
    }

    function ts(t, e) {
        var n = t._chartsMap, i = t._scheduler;
        e.eachSeries(function (t) {
            i.updateStreamModes(t, n[t.__viewId])
        })
    }

    function es(t, e) {
        var n = t.type, i = t.escapeConnect, r = K_[n], s = r.actionInfo, l = (s.update || "update").split(":"),
            h = l.pop();
        l = null != l[0] && F_(l[0]), this[U_] = !0;
        var u = [t], c = !1;
        t.batch && (c = !0, u = f(t.batch, function (e) {
            return e = a(o({}, e), t), e.batch = null, e
        }));
        var d, p = [], g = "highlight" === n || "downplay" === n;
        N_(u, function (t) {
            d = r.action(t, this._model, this._api), (d = d || o({}, t)).type = s.event || d.type, p.push(d), g ? Ja(this, h, t, "series") : l && Ja(this, h, t, l.main, l.sub)
        }, this), "none" === h || g || l || (this[X_] ? (Qa(this), q_.update.call(this, t), this[X_] = !1) : q_[h].call(this, t)), d = c ? {
            type: s.event || n,
            escapeConnect: i,
            batch: p
        } : p[0], this[U_] = !1, !e && this._messageCenter.trigger(d.type, d)
    }

    function ns(t) {
        for (var e = this._pendingActions; e.length;) {
            var n = e.shift();
            es.call(this, n, t)
        }
    }

    function is(t) {
        !t && this.trigger("updated")
    }

    function rs(t, e) {
        t.on("rendered", function () {
            e.trigger("rendered"), !t.animation.isFinished() || e[X_] || e._scheduler.unfinished || e._pendingActions.length || e.trigger("finished")
        })
    }

    function os(t, e, n, i) {
        function r(t) {
            var e = "_ec_" + t.id + "_" + t.type, r = s[e];
            if (!r) {
                var u = F_(t.type);
                (r = new (o ? t_.getClass(u.main, u.sub) : ga.getClass(u.sub))).init(n, h), s[e] = r, a.push(r), l.add(r.group)
            }
            t.__viewId = r.__id = e, r.__alive = !0, r.__model = t, r.group.__ecComponentInfo = {
                mainType: t.mainType,
                index: t.componentIndex
            }, !o && i.prepareView(r, t, n, h)
        }

        for (var o = "component" === e, a = o ? t._componentsViews : t._chartsViews, s = o ? t._componentsMap : t._chartsMap, l = t._zr, h = t._api, u = 0; u < a.length; u++) a[u].__alive = !1;
        o ? n.eachComponent(function (t, e) {
            "series" !== t && r(e)
        }) : n.eachSeries(r);
        for (u = 0; u < a.length;) {
            var c = a[u];
            c.__alive ? u++ : (!o && c.renderTask.dispose(), l.remove(c.group), c.dispose(n, h), a.splice(u, 1), delete s[c.__id], c.__id = c.group.__ecComponentInfo = null)
        }
    }

    function as(t) {
        t.clearColorPalette(), t.eachSeries(function (t) {
            t.clearColorPalette()
        })
    }

    function ss(t, e, n, i) {
        ls(t, e, n, i), N_(t._chartsViews, function (t) {
            t.__alive = !1
        }), hs(t, e, n, i), N_(t._chartsViews, function (t) {
            t.__alive || t.remove(e, n)
        })
    }

    function ls(t, e, n, i, r) {
        N_(r || t._componentsViews, function (t) {
            var r = t.__model;
            t.render(r, e, n, i), fs(r, t)
        })
    }

    function hs(t, e, n, i, r) {
        var o, a = t._scheduler;
        e.eachSeries(function (e) {
            var n = t._chartsMap[e.__viewId];
            n.__alive = !0;
            var s = n.renderTask;
            a.updatePayload(s, i), r && r.get(e.uid) && s.dirty(), o |= s.perform(a.getPerformArgs(s)), n.group.silent = !!e.get("silent"), fs(e, n), ds(e, n)
        }), a.unfinished |= o, cs(t._zr, e), d_(t._zr.dom, e)
    }

    function us(t, e) {
        N_(ew, function (n) {
            n(t, e)
        })
    }

    function cs(t, e) {
        var n = t.storage, i = 0;
        n.traverse(function (t) {
            t.isGroup || i++
        }), i > e.get("hoverLayerThreshold") && !Kp.node && n.traverse(function (t) {
            t.isGroup || (t.useHoverLayer = !0)
        })
    }

    function ds(t, e) {
        var n = t.get("blendMode") || null;
        e.group.traverse(function (t) {
            t.isGroup || t.style.blend !== n && t.setStyle("blend", n), t.eachPendingDisplayable && t.eachPendingDisplayable(function (t) {
                t.setStyle("blend", n)
            })
        })
    }

    function fs(t, e) {
        var n = t.get("z"), i = t.get("zlevel");
        e.group.traverse(function (t) {
            "group" !== t.type && (null != n && (t.z = n), null != i && (t.zlevel = i))
        })
    }

    function ps(t) {
        var e = t._coordSysMgr;
        return o(new Co(t), {
            getCoordinateSystems: m(e.getCoordinateSystems, e), getComponentByElement: function (e) {
                for (; e;) {
                    var n = e.__ecComponentInfo;
                    if (null != n) return t._model.getComponent(n.mainType, n.index);
                    e = e.parent
                }
            }
        })
    }

    function gs() {
        this.eventInfo
    }

    function ms(t) {
        function e(t, e) {
            for (var i = 0; i < t.length; i++) t[i][n] = e
        }

        var n = "__connectUpdateStatus";
        N_(Q_, function (i, r) {
            t._messageCenter.on(r, function (i) {
                if (aw[t.group] && 0 !== t[n]) {
                    if (i && i.escapeConnect) return;
                    var r = t.makeActionFromEvent(i), o = [];
                    N_(ow, function (e) {
                        e !== t && e.group === t.group && o.push(e)
                    }), e(o, 0), N_(o, function (t) {
                        1 !== t[n] && t.dispatchAction(r)
                    }), e(o, 2)
                }
            })
        })
    }

    function vs(t) {
        aw[t] = !1
    }

    function ys(t) {
        return ow[Rn(t, hw)]
    }

    function xs(t, e) {
        iw[t] = e
    }

    function _s(t) {
        tw.push(t)
    }

    function ws(t, e) {
        Is(J_, t, e, H_)
    }

    function bs(t, e, n) {
        "function" == typeof e && (n = e, e = "");
        var i = B_(t) ? t.type : [t, t = {event: e}][0];
        t.event = (t.event || i).toLowerCase(), e = t.event, E_(Y_.test(i) && Y_.test(e)), K_[i] || (K_[i] = {
            action: n,
            actionInfo: t
        }), Q_[e] = i
    }

    function Ss(t, e) {
        Is(nw, t, e, W_, "layout")
    }

    function Ms(t, e) {
        Is(nw, t, e, G_, "visual")
    }

    function Is(t, e, n, i, r) {
        (R_(e) || B_(e)) && (n = e, e = i);
        var o = Sa.wrapStageHandler(n, r);
        return o.__prio = e, o.__raw = n, t.push(o), o
    }

    function Ts(t, e) {
        rw[t] = e
    }

    function As(t) {
        return dx.extend(t)
    }

    function Cs(t) {
        return t_.extend(t)
    }

    function Ds(t) {
        return Jx.extend(t)
    }

    function ks(t) {
        return ga.extend(t)
    }

    function Ps(t) {
        return t
    }

    function Ls(t, e, n, i, r) {
        this._old = t, this._new = e, this._oldKeyGetter = n || Ps, this._newKeyGetter = i || Ps, this.context = r
    }

    function Os(t, e, n, i, r) {
        for (var o = 0; o < t.length; o++) {
            var a = "_ec_" + r[i](t[o], o), s = e[a];
            null == s ? (n.push(a), e[a] = o) : (s.length || (e[a] = s = [s]), s.push(o))
        }
    }

    function zs(t) {
        var e = {}, n = e.encode = {}, i = N(), r = [], o = [];
        d(t.dimensions, function (e) {
            var a = t.getDimensionInfo(e), s = a.coordDim;
            if (s) {
                var l = n[s];
                n.hasOwnProperty(s) || (l = n[s] = []), l[a.coordDimIndex] = e, a.isExtraCoord || (i.set(s, 1), Ns(a.type) && (r[0] = e)), a.defaultTooltip && o.push(e)
            }
            dw.each(function (t, e) {
                var i = n[e];
                n.hasOwnProperty(e) || (i = n[e] = []);
                var r = a.otherDims[e];
                null != r && !1 !== r && (i[r] = a.name)
            })
        });
        var a = [], s = {};
        i.each(function (t, e) {
            var i = n[e];
            s[e] = i[0], a = a.concat(i)
        }), e.dataDimsOnCoord = a, e.encodeFirstDimNotExtra = s;
        var l = n.label;
        l && l.length && (r = l.slice());
        var h = n.tooltip;
        return h && h.length ? o = h.slice() : o.length || (o = r.slice()), n.defaultedLabel = r, n.defaultedTooltip = o, e
    }

    function Es(t) {
        return "category" === t ? "ordinal" : "time" === t ? "time" : "float"
    }

    function Ns(t) {
        return !("ordinal" === t || "time" === t)
    }

    function Rs(t) {
        return t._rawCount > 65535 ? vw : xw
    }

    function Bs(t) {
        var e = t.constructor;
        return e === Array ? t.slice() : new e(t)
    }

    function Fs(t, e) {
        d(_w.concat(e.__wrappedMethods || []), function (n) {
            e.hasOwnProperty(n) && (t[n] = e[n])
        }), t.__wrappedMethods = e.__wrappedMethods, d(ww, function (i) {
            t[i] = n(e[i])
        }), t._calculationInfo = o(e._calculationInfo)
    }

    function Vs(t, e, n, i, r) {
        var o = mw[e.type], a = i - 1, s = e.name, l = t[s][a];
        if (l && l.length < n) {
            for (var h = new o(Math.min(r - a * n, n)), u = 0; u < l.length; u++) h[u] = l[u];
            t[s][a] = h
        }
        for (var c = i * n; c < r; c += n) t[s].push(new o(Math.min(r - c, n)))
    }

    function Hs(t) {
        var e = t._invertedIndicesMap;
        d(e, function (n, i) {
            var r = t._dimensionInfos[i].ordinalMeta;
            if (r) {
                n = e[i] = new yw(r.categories.length);
                for (o = 0; o < n.length; o++) n[o] = pw;
                for (var o = 0; o < t._count; o++) n[t.get(i, o)] = o
            }
        })
    }

    function Ws(t, e, n) {
        var i;
        if (null != e) {
            var r = t._chunkSize, o = Math.floor(n / r), a = n % r, s = t.dimensions[e], l = t._storage[s][o];
            if (l) {
                i = l[a];
                var h = t._dimensionInfos[s].ordinalMeta;
                h && h.categories.length && (i = h.categories[i])
            }
        }
        return i
    }

    function Gs(t) {
        return t
    }

    function Zs(t) {
        return t < this._count && t >= 0 ? this._indices[t] : -1
    }

    function Us(t, e) {
        var n = t._idList[e];
        return null == n && (n = Ws(t, t._idDimIdx, e)), null == n && (n = gw + e), n
    }

    function Xs(t) {
        return y(t) || (t = [t]), t
    }

    function Ys(t, e) {
        var n = t.dimensions, i = new bw(f(n, t.getDimensionInfo, t), t.hostModel);
        Fs(i, t);
        for (var r = i._storage = {}, o = t._storage, a = 0; a < n.length; a++) {
            var s = n[a];
            o[s] && (l(e, s) >= 0 ? (r[s] = js(o[s]), i._rawExtent[s] = qs(), i._extent[s] = null) : r[s] = o[s])
        }
        return i
    }

    function js(t) {
        for (var e = new Array(t.length), n = 0; n < t.length; n++) e[n] = Bs(t[n]);
        return e
    }

    function qs() {
        return [1 / 0, -1 / 0]
    }

    function $s(t, e, i) {
        function r(t, e, n) {
            null != dw.get(e) ? t.otherDims[e] = n : (t.coordDim = e, t.coordDimIndex = n, u.set(e, !0))
        }

        so.isInstance(e) || (e = so.seriesDataToSource(e)), i = i || {}, t = (t || []).slice();
        for (var s = (i.dimsDef || []).slice(), l = N(i.encodeDef), h = N(), u = N(), c = [], f = Ks(e, t, s, i.dimCount), p = 0; p < f; p++) {
            var g = s[p] = o({}, w(s[p]) ? s[p] : {name: s[p]}), m = g.name, v = c[p] = {otherDims: {}};
            null != m && null == h.get(m) && (v.name = v.displayName = m, h.set(m, p)), null != g.type && (v.type = g.type), null != g.displayName && (v.displayName = g.displayName)
        }
        l.each(function (t, e) {
            if (1 === (t = Mn(t).slice()).length && t[0] < 0) l.set(e, !1); else {
                var n = l.set(e, []);
                d(t, function (t, i) {
                    _(t) && (t = h.get(t)), null != t && t < f && (n[i] = t, r(c[t], e, i))
                })
            }
        });
        var y = 0;
        d(t, function (t, e) {
            var i, t, o, s;
            if (_(t)) i = t, t = {}; else {
                i = t.name;
                var h = t.ordinalMeta;
                t.ordinalMeta = null, (t = n(t)).ordinalMeta = h, o = t.dimsDef, s = t.otherDims, t.name = t.coordDim = t.coordDimIndex = t.dimsDef = t.otherDims = null
            }
            var u = l.get(i);
            if (!1 !== u) {
                if (!(u = Mn(u)).length) for (var f = 0; f < (o && o.length || 1); f++) {
                    for (; y < c.length && null != c[y].coordDim;) y++;
                    y < c.length && u.push(y++)
                }
                d(u, function (e, n) {
                    var l = c[e];
                    if (r(a(l, t), i, n), null == l.name && o) {
                        var h = o[n];
                        !w(h) && (h = {name: h}), l.name = l.displayName = h.name, l.defaultTooltip = h.defaultTooltip
                    }
                    s && a(l.otherDims, s)
                })
            }
        });
        var x = i.generateCoord, b = i.generateCoordCount, S = null != b;
        b = x ? b || 1 : 0;
        for (var M = x || "value", I = 0; I < f; I++) null == (v = c[I] = c[I] || {}).coordDim && (v.coordDim = Qs(M, u, S), v.coordDimIndex = 0, (!x || b <= 0) && (v.isExtraCoord = !0), b--), null == v.name && (v.name = Qs(v.coordDim, h)), null == v.type && xo(e, I, v.name) && (v.type = "ordinal");
        return c
    }

    function Ks(t, e, n, i) {
        var r = Math.max(t.dimensionsDetectCount || 1, e.length, n.length, i || 0);
        return d(e, function (t) {
            var e = t.dimsDef;
            e && (r = Math.max(r, e.length))
        }), r
    }

    function Qs(t, e, n) {
        if (n || null != e.get(t)) {
            for (var i = 0; null != e.get(t + i);) i++;
            t += i
        }
        return e.set(t, !0), t
    }

    function Js(t, e, n) {
        var i, r, o, a, s = (n = n || {}).byIndex, l = n.stackedCoordDimension, h = !(!t || !t.get("stack"));
        if (d(e, function (t, n) {
            _(t) && (e[n] = t = {name: t}), h && !t.isExtraCoord && (s || i || !t.ordinalMeta || (i = t), r || "ordinal" === t.type || "time" === t.type || l && l !== t.coordDim || (r = t))
        }), !r || s || i || (s = !0), r) {
            o = "__\0ecstackresult", a = "__\0ecstackedover", i && (i.createInvertedIndices = !0);
            var u = r.coordDim, c = r.type, f = 0;
            d(e, function (t) {
                t.coordDim === u && f++
            }), e.push({
                name: o,
                coordDim: u,
                coordDimIndex: f,
                type: c,
                isExtraCoord: !0,
                isCalculationCoord: !0
            }), f++, e.push({name: a, coordDim: a, coordDimIndex: f, type: c, isExtraCoord: !0, isCalculationCoord: !0})
        }
        return {
            stackedDimension: r && r.name,
            stackedByDimension: i && i.name,
            isStackedByIndex: s,
            stackedOverDimension: a,
            stackResultDimension: o
        }
    }

    function tl(t, e) {
        return !!e && e === t.getCalculationInfo("stackedDimension")
    }

    function el(t, e) {
        return tl(t, e) ? t.getCalculationInfo("stackResultDimension") : e
    }

    function nl(t, e, n) {
        n = n || {}, so.isInstance(t) || (t = so.seriesDataToSource(t));
        var i, r = e.get("coordinateSystem"), o = Do.get(r), a = oo(e);
        a && (i = f(a.coordSysDims, function (t) {
            var e = {name: t}, n = a.axisMap.get(t);
            if (n) {
                var i = n.get("type");
                e.type = Es(i)
            }
            return e
        })), i || (i = o && (o.getDimensionsInfo ? o.getDimensionsInfo() : o.dimensions.slice()) || ["x", "y"]);
        var s, l, h = Iw(t, {coordDimensions: i, generateCoord: n.generateCoord});
        a && d(h, function (t, e) {
            var n = t.coordDim, i = a.categoryAxisMap.get(n);
            i && (null == s && (s = e), t.ordinalMeta = i.getOrdinalMeta()), null != t.otherDims.itemName && (l = !0)
        }), l || null == s || (h[s].otherDims.itemName = 0);
        var u = Js(e, h), c = new bw(h, e);
        c.setCalculationInfo(u);
        var p = null != s && il(t) ? function (t, e, n, i) {
            return i === s ? n : this.defaultDimValueGetter(t, e, n, i)
        } : null;
        return c.hasItemOption = !1, c.initData(t, null, p), c
    }

    function il(t) {
        if (t.sourceFormat === yx) {
            var e = rl(t.data || []);
            return null != e && !y(Tn(e))
        }
    }

    function rl(t) {
        for (var e = 0; e < t.length && null == t[e];) e++;
        return t[e]
    }

    function ol(t) {
        this._setting = t || {}, this._extent = [1 / 0, -1 / 0], this._interval = 0, this.init && this.init.apply(this, arguments)
    }

    function al(t) {
        this.categories = t.categories || [], this._needCollect = t.needCollect, this._deduplication = t.deduplication, this._map
    }

    function sl(t) {
        return t._map || (t._map = N(t.categories))
    }

    function ll(t) {
        return w(t) && null != t.value ? t.value : t + ""
    }

    function hl(t, e, n, i) {
        var r = {}, o = t[1] - t[0], a = r.interval = Gr(o / e, !0);
        null != n && a < n && (a = r.interval = n), null != i && a > i && (a = r.interval = i);
        var s = r.intervalPrecision = ul(a);
        return dl(r.niceTickExtent = [Dw(Math.ceil(t[0] / a) * a, s), Dw(Math.floor(t[1] / a) * a, s)], t), r
    }

    function ul(t) {
        return Er(t) + 2
    }

    function cl(t, e, n) {
        t[e] = Math.max(Math.min(t[e], n[1]), n[0])
    }

    function dl(t, e) {
        !isFinite(t[0]) && (t[0] = e[0]), !isFinite(t[1]) && (t[1] = e[1]), cl(t, 0, e), cl(t, 1, e), t[0] > t[1] && (t[0] = t[1])
    }

    function fl(t, e, n, i) {
        var r = [];
        if (!t) return r;
        e[0] < n[0] && r.push(e[0]);
        for (var o = n[0]; o <= n[1] && (r.push(o), (o = Dw(o + t, i)) !== r[r.length - 1]);) if (r.length > 1e4) return [];
        return e[1] > (r.length ? r[r.length - 1] : n[1]) && r.push(e[1]), r
    }

    function pl(t) {
        return t.get("stack") || Lw + t.seriesIndex
    }

    function gl(t) {
        return t.dim + t.index
    }

    function ml(t, e) {
        var n = [];
        return e.eachSeriesByType(t, function (t) {
            _l(t) && !wl(t) && n.push(t)
        }), n
    }

    function vl(t) {
        var e = [];
        return d(t, function (t) {
            var n = t.getData(), i = t.coordinateSystem.getBaseAxis(), r = i.getExtent(),
                o = "category" === i.type ? i.getBandWidth() : Math.abs(r[1] - r[0]) / n.count(),
                a = Pr(t.get("barWidth"), o), s = Pr(t.get("barMaxWidth"), o), l = t.get("barGap"),
                h = t.get("barCategoryGap");
            e.push({
                bandWidth: o,
                barWidth: a,
                barMaxWidth: s,
                barGap: l,
                barCategoryGap: h,
                axisKey: gl(i),
                stackId: pl(t)
            })
        }), yl(e)
    }

    function yl(t) {
        var e = {};
        d(t, function (t, n) {
            var i = t.axisKey, r = t.bandWidth, o = e[i] || {
                bandWidth: r,
                remainedWidth: r,
                autoWidthCount: 0,
                categoryGap: "20%",
                gap: "30%",
                stacks: {}
            }, a = o.stacks;
            e[i] = o;
            var s = t.stackId;
            a[s] || o.autoWidthCount++, a[s] = a[s] || {width: 0, maxWidth: 0};
            var l = t.barWidth;
            l && !a[s].width && (a[s].width = l, l = Math.min(o.remainedWidth, l), o.remainedWidth -= l);
            var h = t.barMaxWidth;
            h && (a[s].maxWidth = h);
            var u = t.barGap;
            null != u && (o.gap = u);
            var c = t.barCategoryGap;
            null != c && (o.categoryGap = c)
        });
        var n = {};
        return d(e, function (t, e) {
            n[e] = {};
            var i = t.stacks, r = t.bandWidth, o = Pr(t.categoryGap, r), a = Pr(t.gap, 1), s = t.remainedWidth,
                l = t.autoWidthCount, h = (s - o) / (l + (l - 1) * a);
            h = Math.max(h, 0), d(i, function (t, e) {
                var n = t.maxWidth;
                n && n < h && (n = Math.min(n, s), t.width && (n = Math.min(n, t.width)), s -= n, t.width = n, l--)
            }), h = (s - o) / (l + (l - 1) * a), h = Math.max(h, 0);
            var u, c = 0;
            d(i, function (t, e) {
                t.width || (t.width = h), u = t, c += t.width * (1 + a)
            }), u && (c -= u.width * a);
            var f = -c / 2;
            d(i, function (t, i) {
                n[e][i] = n[e][i] || {offset: f, width: t.width}, f += t.width * (1 + a)
            })
        }), n
    }

    function xl(t, e, n) {
        if (t && e) {
            var i = t[gl(e)];
            return null != i && null != n && (i = i[pl(n)]), i
        }
    }

    function _l(t) {
        return t.coordinateSystem && "cartesian2d" === t.coordinateSystem.type
    }

    function wl(t) {
        return t.pipelineContext && t.pipelineContext.large
    }

    function bl(t, e, n) {
        var i, r, o = e.getGlobalExtent();
        o[0] > o[1] ? (i = o[1], r = o[0]) : (i = o[0], r = o[1]);
        var a = e.toGlobalCoord(e.dataToCoord(0));
        return a < i && (a = i), a > r && (a = r), a
    }

    function Sl(t, e) {
        return Zw(t, Gw(e))
    }

    function Ml(t, e) {
        var n, i, r, o = t.type, a = e.getMin(), s = e.getMax(), l = null != a, h = null != s, u = t.getExtent();
        "ordinal" === o ? n = e.getCategories().length : (y(i = e.get("boundaryGap")) || (i = [i || 0, i || 0]), "boolean" == typeof i[0] && (i = [0, 0]), i[0] = Pr(i[0], 1), i[1] = Pr(i[1], 1), r = u[1] - u[0] || Math.abs(u[0])), null == a && (a = "ordinal" === o ? n ? 0 : NaN : u[0] - i[0] * r), null == s && (s = "ordinal" === o ? n ? n - 1 : NaN : u[1] + i[1] * r), "dataMin" === a ? a = u[0] : "function" == typeof a && (a = a({
            min: u[0],
            max: u[1]
        })), "dataMax" === s ? s = u[1] : "function" == typeof s && (s = s({
            min: u[0],
            max: u[1]
        })), (null == a || !isFinite(a)) && (a = NaN), (null == s || !isFinite(s)) && (s = NaN), t.setBlank(I(a) || I(s) || "ordinal" === o && !t.getOrdinalMeta().categories.length), e.getNeedCrossZero() && (a > 0 && s > 0 && !l && (a = 0), a < 0 && s < 0 && !h && (s = 0));
        var c = e.ecModel;
        if (c && "time" === o) {
            var f, p = ml("bar", c);
            if (d(p, function (t) {
                f |= t.getBaseAxis() === e.axis
            }), f) {
                var g = vl(p), m = Il(a, s, e, g);
                a = m.min, s = m.max
            }
        }
        return [a, s]
    }

    function Il(t, e, n, i) {
        var r = n.axis.getExtent(), o = r[1] - r[0], a = xl(i, n.axis);
        if (void 0 === a) return {min: t, max: e};
        var s = 1 / 0;
        d(a, function (t) {
            s = Math.min(t.offset, s)
        });
        var l = -1 / 0;
        d(a, function (t) {
            l = Math.max(t.offset + t.width, l)
        }), s = Math.abs(s), l = Math.abs(l);
        var h = s + l, u = e - t, c = u / (1 - (s + l) / o) - u;
        return e += c * (l / h), t -= c * (s / h), {min: t, max: e}
    }

    function Tl(t, e) {
        var n = Ml(t, e), i = null != e.getMin(), r = null != e.getMax(), o = e.get("splitNumber");
        "log" === t.type && (t.base = e.get("logBase"));
        var a = t.type;
        t.setExtent(n[0], n[1]), t.niceExtent({
            splitNumber: o,
            fixMin: i,
            fixMax: r,
            minInterval: "interval" === a || "time" === a ? e.get("minInterval") : null,
            maxInterval: "interval" === a || "time" === a ? e.get("maxInterval") : null
        });
        var s = e.get("interval");
        null != s && t.setInterval && t.setInterval(s)
    }

    function Al(t, e) {
        if (e = e || t.get("type")) switch (e) {
            case"category":
                return new Cw(t.getOrdinalMeta ? t.getOrdinalMeta() : t.getCategories(), [1 / 0, -1 / 0]);
            case"value":
                return new Pw;
            default:
                return (ol.getClass(e) || Pw).create(t)
        }
    }

    function Cl(t) {
        var e = t.scale.getExtent(), n = e[0], i = e[1];
        return !(n > 0 && i > 0 || n < 0 && i < 0)
    }

    function Dl(t) {
        var e = t.getLabelModel().get("formatter"), n = "category" === t.type ? t.scale.getExtent()[0] : null;
        return "string" == typeof e ? e = function (e) {
            return function (n) {
                return n = t.scale.getLabel(n), e.replace("{value}", null != n ? n : "")
            }
        }(e) : "function" == typeof e ? function (i, r) {
            return null != n && (r = i - n), e(kl(t, i), r)
        } : function (e) {
            return t.scale.getLabel(e)
        }
    }

    function kl(t, e) {
        return "category" === t.type ? t.scale.getLabel(e) : e
    }

    function Pl(t) {
        var e = t.model, n = t.scale;
        if (e.get("axisLabel.show") && !n.isBlank()) {
            var i, r, o = "category" === t.type, a = n.getExtent();
            r = o ? n.count() : (i = n.getTicks()).length;
            var s, l = t.getLabelModel(), h = Dl(t), u = 1;
            r > 40 && (u = Math.ceil(r / 40));
            for (var c = 0; c < r; c += u) {
                var d = h(i ? i[c] : a[0] + c), f = Ll(l.getTextRect(d), l.get("rotate") || 0);
                s ? s.union(f) : s = f
            }
            return s
        }
    }

    function Ll(t, e) {
        var n = e * Math.PI / 180, i = t.plain(), r = i.width, o = i.height, a = r * Math.cos(n) + o * Math.sin(n),
            s = r * Math.sin(n) + o * Math.cos(n);
        return new se(i.x, i.y, a, s)
    }

    function Ol(t) {
        var e = t.get("interval");
        return null == e ? "auto" : e
    }

    function zl(t) {
        return "category" === t.type && 0 === Ol(t.getLabelModel())
    }

    function El(t, e) {
        if ("image" !== this.type) {
            var n = this.style, i = this.shape;
            i && "line" === i.symbolType ? n.stroke = t : this.__isEmptyBrush ? (n.stroke = t, n.fill = e || "#fff") : (n.fill && (n.fill = t), n.stroke && (n.stroke = t)), this.dirty(!1)
        }
    }

    function Nl(t, e, n, i, r, o, a) {
        var s = 0 === t.indexOf("empty");
        s && (t = t.substr(5, 1).toLowerCase() + t.substr(6));
        var l;
        return l = 0 === t.indexOf("image://") ? Vi(t.slice(8), new se(e, n, i, r), a ? "center" : "cover") : 0 === t.indexOf("path://") ? Fi(t.slice(7), {}, new se(e, n, i, r), a ? "center" : "cover") : new ib({
            shape: {
                symbolType: t,
                x: e,
                y: n,
                width: i,
                height: r
            }
        }), l.__isEmptyBrush = s, l.setColor = El, l.setColor(o), l
    }

    function Rl(t, e) {
        return Math.abs(t - e) < ab
    }

    function Bl(t, e, n) {
        var i = 0, r = t[0];
        if (!r) return !1;
        for (var o = 1; o < t.length; o++) {
            var a = t[o];
            i += mi(r[0], r[1], a[0], a[1], e, n), r = a
        }
        var s = t[0];
        return Rl(r[0], s[0]) && Rl(r[1], s[1]) || (i += mi(r[0], r[1], s[0], s[1], e, n)), 0 !== i
    }

    function Fl(t, e, n) {
        if (this.name = t, this.geometries = e, n) n = [n[0], n[1]]; else {
            var i = this.getBoundingRect();
            n = [i.x + i.width / 2, i.y + i.height / 2]
        }
        this.center = n
    }

    function Vl(t) {
        if (!t.UTF8Encoding) return t;
        var e = t.UTF8Scale;
        null == e && (e = 1024);
        for (var n = t.features, i = 0; i < n.length; i++) for (var r = n[i].geometry, o = r.coordinates, a = r.encodeOffsets, s = 0; s < o.length; s++) {
            var l = o[s];
            if ("Polygon" === r.type) o[s] = Hl(l, a[s], e); else if ("MultiPolygon" === r.type) for (var h = 0; h < l.length; h++) {
                var u = l[h];
                l[h] = Hl(u, a[s][h], e)
            }
        }
        return t.UTF8Encoding = !1, t
    }

    function Hl(t, e, n) {
        for (var i = [], r = e[0], o = e[1], a = 0; a < t.length; a += 2) {
            var s = t.charCodeAt(a) - 64, l = t.charCodeAt(a + 1) - 64;
            s = s >> 1 ^ -(1 & s), l = l >> 1 ^ -(1 & l), r = s += r, o = l += o, i.push([s / n, l / n])
        }
        return i
    }

    function Wl(t) {
        return "category" === t.type ? Zl(t) : Yl(t)
    }

    function Gl(t, e) {
        return "category" === t.type ? Xl(t, e) : {ticks: t.scale.getTicks()}
    }

    function Zl(t) {
        var e = t.getLabelModel(), n = Ul(t, e);
        return !e.get("show") || t.scale.isBlank() ? {labels: [], labelCategoryInterval: n.labelCategoryInterval} : n
    }

    function Ul(t, e) {
        var n = jl(t, "labels"), i = Ol(e), r = ql(n, i);
        if (r) return r;
        var o, a;
        return o = x(i) ? eh(t, i) : th(t, a = "auto" === i ? Kl(t) : i), $l(n, i, {
            labels: o,
            labelCategoryInterval: a
        })
    }

    function Xl(t, e) {
        var n = jl(t, "ticks"), i = Ol(e), r = ql(n, i);
        if (r) return r;
        var o, a;
        if (e.get("show") && !t.scale.isBlank() || (o = []), x(i)) o = eh(t, i, !0); else if ("auto" === i) {
            var s = Ul(t, t.getLabelModel());
            a = s.labelCategoryInterval, o = f(s.labels, function (t) {
                return t.tickValue
            })
        } else o = th(t, a = i, !0);
        return $l(n, i, {ticks: o, tickCategoryInterval: a})
    }

    function Yl(t) {
        var e = t.scale.getTicks(), n = Dl(t);
        return {
            labels: f(e, function (e, i) {
                return {formattedLabel: n(e, i), rawLabel: t.scale.getLabel(e), tickValue: e}
            })
        }
    }

    function jl(t, e) {
        return lb(t)[e] || (lb(t)[e] = [])
    }

    function ql(t, e) {
        for (var n = 0; n < t.length; n++) if (t[n].key === e) return t[n].value
    }

    function $l(t, e, n) {
        return t.push({key: e, value: n}), n
    }

    function Kl(t) {
        var e = lb(t).autoInterval;
        return null != e ? e : lb(t).autoInterval = t.calculateCategoryInterval()
    }

    function Ql(t) {
        var e = Jl(t), n = Dl(t), i = (e.axisRotate - e.labelRotate) / 180 * Math.PI, r = t.scale, o = r.getExtent(),
            a = r.count();
        if (o[1] - o[0] < 1) return 0;
        var s = 1;
        a > 40 && (s = Math.max(1, Math.floor(a / 40)));
        for (var l = o[0], h = t.dataToCoord(l + 1) - t.dataToCoord(l), u = Math.abs(h * Math.cos(i)), c = Math.abs(h * Math.sin(i)), d = 0, f = 0; l <= o[1]; l += s) {
            var p = 0, g = 0, m = Te(n(l), e.font, "center", "top");
            p = 1.3 * m.width, g = 1.3 * m.height, d = Math.max(d, p, 7), f = Math.max(f, g, 7)
        }
        var v = d / u, y = f / c;
        isNaN(v) && (v = 1 / 0), isNaN(y) && (y = 1 / 0);
        var x = Math.max(0, Math.floor(Math.min(v, y))), _ = lb(t.model), w = _.lastAutoInterval, b = _.lastTickCount;
        return null != w && null != b && Math.abs(w - x) <= 1 && Math.abs(b - a) <= 1 && w > x ? x = w : (_.lastTickCount = a, _.lastAutoInterval = x), x
    }

    function Jl(t) {
        var e = t.getLabelModel();
        return {
            axisRotate: t.getRotate ? t.getRotate() : t.isHorizontal && !t.isHorizontal() ? 90 : 0,
            labelRotate: e.get("rotate") || 0,
            font: e.getFont()
        }
    }

    function th(t, e, n) {
        function i(t) {
            l.push(n ? t : {formattedLabel: r(t), rawLabel: o.getLabel(t), tickValue: t})
        }

        var r = Dl(t), o = t.scale, a = o.getExtent(), s = t.getLabelModel(), l = [], h = Math.max((e || 0) + 1, 1),
            u = a[0], c = o.count();
        0 !== u && h > 1 && c / h > 2 && (u = Math.round(Math.ceil(u / h) * h));
        var d = zl(t), f = s.get("showMinLabel") || d, p = s.get("showMaxLabel") || d;
        f && u !== a[0] && i(a[0]);
        for (var g = u; g <= a[1]; g += h) i(g);
        return p && g !== a[1] && i(a[1]), l
    }

    function eh(t, e, n) {
        var i = t.scale, r = Dl(t), o = [];
        return d(i.getTicks(), function (t) {
            var a = i.getLabel(t);
            e(t, a) && o.push(n ? t : {formattedLabel: r(t), rawLabel: a, tickValue: t})
        }), o
    }

    function nh(t, e) {
        var n = (t[1] - t[0]) / e / 2;
        t[0] += n, t[1] -= n
    }

    function ih(t, e, n, i, r) {
        function o(t, e) {
            return u ? t > e : t < e
        }

        var a = e.length;
        if (t.onBand && !i && a) {
            var s, l = t.getExtent();
            if (1 === a) e[0].coord = l[0], s = e[1] = {coord: l[0]}; else {
                var h = e[1].coord - e[0].coord;
                d(e, function (t) {
                    t.coord -= h / 2;
                    var e = e || 0;
                    e % 2 > 0 && (t.coord -= h / (2 * (e + 1)))
                }), s = {coord: e[a - 1].coord + h}, e.push(s)
            }
            var u = l[0] > l[1];
            o(e[0].coord, l[0]) && (r ? e[0].coord = l[0] : e.shift()), r && o(l[0], e[0].coord) && e.unshift({coord: l[0]}), o(l[1], s.coord) && (r ? s.coord = l[1] : e.pop()), r && o(s.coord, l[1]) && e.push({coord: l[1]})
        }
    }

    function rh(t, e) {
        var n = t.mapDimension("defaultedLabel", !0), i = n.length;
        if (1 === i) return ea(t, e, n[0]);
        if (i) {
            for (var r = [], o = 0; o < n.length; o++) {
                var a = ea(t, e, n[o]);
                r.push(a)
            }
            return r.join(" ")
        }
    }

    function oh(t, e, n) {
        am.call(this), this.updateData(t, e, n)
    }

    function ah(t) {
        return [t[0] / 2, t[1] / 2]
    }

    function sh(t, e) {
        this.parent.drift(t, e)
    }

    function lh() {
        !tr(this) && uh.call(this)
    }

    function hh() {
        !tr(this) && ch.call(this)
    }

    function uh() {
        if (!this.incremental && !this.useHoverLayer) {
            var t = this.__symbolOriginalScale, e = t[1] / t[0];
            this.animateTo({scale: [Math.max(1.1 * t[0], t[0] + 3), Math.max(1.1 * t[1], t[1] + 3 * e)]}, 400, "elasticOut")
        }
    }

    function ch() {
        this.incremental || this.useHoverLayer || this.animateTo({scale: this.__symbolOriginalScale}, 400, "elasticOut")
    }

    function dh(t) {
        this.group = new am, this._symbolCtor = t || oh
    }

    function fh(t, e, n, i) {
        return e && !isNaN(e[0]) && !isNaN(e[1]) && !(i.isIgnore && i.isIgnore(n)) && !(i.clipShape && !i.clipShape.contain(e[0], e[1])) && "none" !== t.getItemVisual(n, "symbol")
    }

    function ph(t) {
        return null == t || w(t) || (t = {isIgnore: t}), t || {}
    }

    function gh(t) {
        var e = t.hostModel;
        return {
            itemStyle: e.getModel("itemStyle").getItemStyle(["color"]),
            hoverItemStyle: e.getModel("emphasis.itemStyle").getItemStyle(),
            symbolRotate: e.get("symbolRotate"),
            symbolOffset: e.get("symbolOffset"),
            hoverAnimation: e.get("hoverAnimation"),
            labelModel: e.getModel("label"),
            hoverLabelModel: e.getModel("emphasis.label"),
            cursorStyle: e.get("cursor")
        }
    }

    function mh(t, e, n) {
        var i, r = t.getBaseAxis(), o = t.getOtherAxis(r), a = vh(o, n), s = r.dim, l = o.dim, h = e.mapDimension(l),
            u = e.mapDimension(s), c = "x" === l || "radius" === l ? 1 : 0, d = f(t.dimensions, function (t) {
                return e.mapDimension(t)
            }), p = e.getCalculationInfo("stackResultDimension");
        return (i |= tl(e, d[0])) && (d[0] = p), (i |= tl(e, d[1])) && (d[1] = p), {
            dataDimsForPoint: d,
            valueStart: a,
            valueAxisDim: l,
            baseAxisDim: s,
            stacked: !!i,
            valueDim: h,
            baseDim: u,
            baseDataOffset: c,
            stackedOverDimension: e.getCalculationInfo("stackedOverDimension")
        }
    }

    function vh(t, e) {
        var n = 0, i = t.scale.getExtent();
        return "start" === e ? n = i[0] : "end" === e ? n = i[1] : i[0] > 0 ? n = i[0] : i[1] < 0 && (n = i[1]), n
    }

    function yh(t, e, n, i) {
        var r = NaN;
        t.stacked && (r = n.get(n.getCalculationInfo("stackedOverDimension"), i)), isNaN(r) && (r = t.valueStart);
        var o = t.baseDataOffset, a = [];
        return a[o] = n.get(t.baseDim, i), a[1 - o] = r, e.dataToPoint(a)
    }

    function xh(t, e) {
        var n = [];
        return e.diff(t).add(function (t) {
            n.push({cmd: "+", idx: t})
        }).update(function (t, e) {
            n.push({cmd: "=", idx: e, idx1: t})
        }).remove(function (t) {
            n.push({cmd: "-", idx: t})
        }).execute(), n
    }

    function _h(t) {
        return isNaN(t[0]) || isNaN(t[1])
    }

    function wh(t, e, n, i, r, o, a, s, l, h, u) {
        return "none" !== h && h ? bh.apply(this, arguments) : Sh.apply(this, arguments)
    }

    function bh(t, e, n, i, r, o, a, s, l, h, u) {
        for (var c = 0, d = n, f = 0; f < i; f++) {
            var p = e[d];
            if (d >= r || d < 0) break;
            if (_h(p)) {
                if (u) {
                    d += o;
                    continue
                }
                break
            }
            if (d === n) t[o > 0 ? "moveTo" : "lineTo"](p[0], p[1]); else if (l > 0) {
                var g = e[c], m = "y" === h ? 1 : 0, v = (p[m] - g[m]) * l;
                Ib(Ab, g), Ab[m] = g[m] + v, Ib(Cb, p), Cb[m] = p[m] - v, t.bezierCurveTo(Ab[0], Ab[1], Cb[0], Cb[1], p[0], p[1])
            } else t.lineTo(p[0], p[1]);
            c = d, d += o
        }
        return f
    }

    function Sh(t, e, n, i, r, o, a, s, l, h, u) {
        for (var c = 0, d = n, f = 0; f < i; f++) {
            var p = e[d];
            if (d >= r || d < 0) break;
            if (_h(p)) {
                if (u) {
                    d += o;
                    continue
                }
                break
            }
            if (d === n) t[o > 0 ? "moveTo" : "lineTo"](p[0], p[1]), Ib(Ab, p); else if (l > 0) {
                var g = d + o, m = e[g];
                if (u) for (; m && _h(e[g]);) m = e[g += o];
                var v = .5, y = e[c];
                if (!(m = e[g]) || _h(m)) Ib(Cb, p); else {
                    _h(m) && !u && (m = p), G(Tb, m, y);
                    var x, _;
                    if ("x" === h || "y" === h) {
                        var w = "x" === h ? 0 : 1;
                        x = Math.abs(p[w] - y[w]), _ = Math.abs(p[w] - m[w])
                    } else x = gg(p, y), _ = gg(p, m);
                    Mb(Cb, p, Tb, -l * (1 - (v = _ / (_ + x))))
                }
                bb(Ab, Ab, s), Sb(Ab, Ab, a), bb(Cb, Cb, s), Sb(Cb, Cb, a), t.bezierCurveTo(Ab[0], Ab[1], Cb[0], Cb[1], p[0], p[1]), Mb(Ab, p, Tb, l * v)
            } else t.lineTo(p[0], p[1]);
            c = d, d += o
        }
        return f
    }

    function Mh(t, e) {
        var n = [1 / 0, 1 / 0], i = [-1 / 0, -1 / 0];
        if (e) for (var r = 0; r < t.length; r++) {
            var o = t[r];
            o[0] < n[0] && (n[0] = o[0]), o[1] < n[1] && (n[1] = o[1]), o[0] > i[0] && (i[0] = o[0]), o[1] > i[1] && (i[1] = o[1])
        }
        return {min: e ? n : i, max: e ? i : n}
    }

    function Ih(t, e) {
        if (t.length === e.length) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n], r = e[n];
                if (i[0] !== r[0] || i[1] !== r[1]) return
            }
            return !0
        }
    }

    function Th(t) {
        return "number" == typeof t ? t : t ? .5 : 0
    }

    function Ah(t) {
        var e = t.getGlobalExtent();
        if (t.onBand) {
            var n = t.getBandWidth() / 2 - 1, i = e[1] > e[0] ? 1 : -1;
            e[0] += i * n, e[1] -= i * n
        }
        return e
    }

    function Ch(t, e, n) {
        if (!n.valueDim) return [];
        for (var i = [], r = 0, o = e.count(); r < o; r++) i.push(yh(n, t, e, r));
        return i
    }

    function Dh(t, e, n, i) {
        var r = Ah(t.getAxis("x")), o = Ah(t.getAxis("y")), a = t.getBaseAxis().isHorizontal(),
            s = Math.min(r[0], r[1]), l = Math.min(o[0], o[1]), h = Math.max(r[0], r[1]) - s,
            u = Math.max(o[0], o[1]) - l;
        if (n) s -= .5, h += .5, l -= .5, u += .5; else {
            var c = i.get("lineStyle.width") || 2, d = i.get("clipOverflow") ? c / 2 : Math.max(h, u);
            a ? (l -= d, u += 2 * d) : (s -= d, h += 2 * d)
        }
        var f = new My({shape: {x: s, y: l, width: h, height: u}});
        return e && (f.shape[a ? "width" : "height"] = 0, yr(f, {shape: {width: h, height: u}}, i)), f
    }

    function kh(t, e, n, i) {
        var r = t.getAngleAxis(), o = t.getRadiusAxis().getExtent().slice();
        o[0] > o[1] && o.reverse();
        var a = r.getExtent(), s = Math.PI / 180;
        n && (o[0] -= .5, o[1] += .5);
        var l = new my({
            shape: {
                cx: Lr(t.cx, 1),
                cy: Lr(t.cy, 1),
                r0: Lr(o[0], 1),
                r: Lr(o[1], 1),
                startAngle: -a[0] * s,
                endAngle: -a[1] * s,
                clockwise: r.inverse
            }
        });
        return e && (l.shape.endAngle = -a[0] * s, yr(l, {shape: {endAngle: -a[1] * s}}, i)), l
    }

    function Ph(t, e, n, i) {
        return "polar" === t.type ? kh(t, e, n, i) : Dh(t, e, n, i)
    }

    function Lh(t, e, n) {
        for (var i = e.getBaseAxis(), r = "x" === i.dim || "radius" === i.dim ? 0 : 1, o = [], a = 0; a < t.length - 1; a++) {
            var s = t[a + 1], l = t[a];
            o.push(l);
            var h = [];
            switch (n) {
                case"end":
                    h[r] = s[r], h[1 - r] = l[1 - r], o.push(h);
                    break;
                case"middle":
                    var u = (l[r] + s[r]) / 2, c = [];
                    h[r] = c[r] = u, h[1 - r] = l[1 - r], c[1 - r] = s[1 - r], o.push(h), o.push(c);
                    break;
                default:
                    h[r] = l[r], h[1 - r] = s[1 - r], o.push(h)
            }
        }
        return t[a] && o.push(t[a]), o
    }

    function Oh(t, e) {
        var n = t.getVisual("visualMeta");
        if (n && n.length && t.count() && "cartesian2d" === e.type) {
            for (var i, r, o = n.length - 1; o >= 0; o--) {
                var a = n[o].dimension, s = t.dimensions[a], l = t.getDimensionInfo(s);
                if ("x" === (i = l && l.coordDim) || "y" === i) {
                    r = n[o];
                    break
                }
            }
            if (r) {
                var h = e.getAxis(i), u = f(r.stops, function (t) {
                    return {coord: h.toGlobalCoord(h.dataToCoord(t.value)), color: t.color}
                }), c = u.length, p = r.outerColors.slice();
                c && u[0].coord > u[c - 1].coord && (u.reverse(), p.reverse());
                var g = u[0].coord - 10, m = u[c - 1].coord + 10, v = m - g;
                if (v < .001) return "transparent";
                d(u, function (t) {
                    t.offset = (t.coord - g) / v
                }), u.push({
                    offset: c ? u[c - 1].offset : .5,
                    color: p[1] || "transparent"
                }), u.unshift({offset: c ? u[0].offset : .5, color: p[0] || "transparent"});
                var y = new Ly(0, 0, 0, 0, u, !0);
                return y[i] = g, y[i + "2"] = m, y
            }
        }
    }

    function zh(t, e, n) {
        var i = t.get("showAllSymbol"), r = "auto" === i;
        if (!i || r) {
            var o = n.getAxesByScale("ordinal")[0];
            if (o && (!r || !Eh(o, e))) {
                var a = e.mapDimension(o.dim), s = {};
                return d(o.getViewLabels(), function (t) {
                    s[t.tickValue] = 1
                }), function (t) {
                    return !s.hasOwnProperty(e.get(a, t))
                }
            }
        }
    }

    function Eh(t, e) {
        var n = t.getExtent(), i = Math.abs(n[1] - n[0]) / t.scale.count();
        isNaN(i) && (i = 0);
        for (var r = e.count(), o = Math.max(1, Math.round(r / 5)), a = 0; a < r; a += o) if (1.5 * oh.getSymbolSize(e, a)[t.isHorizontal() ? 1 : 0] > i) return !1;
        return !0
    }

    function Nh(t) {
        return this._axes[t]
    }

    function Rh(t) {
        Eb.call(this, t)
    }

    function Bh(t, e) {
        return e.type || (e.data ? "category" : "value")
    }

    function Fh(t, e, n) {
        return t.getCoordSysModel() === e
    }

    function Vh(t, e, n) {
        this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this._initCartesian(t, e, n), this.model = t
    }

    function Hh(t, e, n, i) {
        function r(t) {
            return t.dim + "_" + t.index
        }

        n.getAxesOnZeroOf = function () {
            return o ? [o] : []
        };
        var o, a = t[e], s = n.model, l = s.get("axisLine.onZero"), h = s.get("axisLine.onZeroAxisIndex");
        if (l) {
            if (null != h) Wh(a[h]) && (o = a[h]); else for (var u in a) if (a.hasOwnProperty(u) && Wh(a[u]) && !i[r(a[u])]) {
                o = a[u];
                break
            }
            o && (i[r(o)] = !0)
        }
    }

    function Wh(t) {
        return t && "category" !== t.type && "time" !== t.type && Cl(t)
    }

    function Gh(t, e) {
        var n = t.getExtent(), i = n[0] + n[1];
        t.toGlobalCoord = "x" === t.dim ? function (t) {
            return t + e
        } : function (t) {
            return i - t + e
        }, t.toLocalCoord = "x" === t.dim ? function (t) {
            return t - e
        } : function (t) {
            return i - t + e
        }
    }

    function Zh(t, e) {
        return f(Zb, function (e) {
            return t.getReferringComponents(e)[0]
        })
    }

    function Uh(t) {
        return "cartesian2d" === t.get("coordinateSystem")
    }

    function Xh(t) {
        var e = {componentType: t.mainType, componentIndex: t.componentIndex};
        return e[t.mainType + "Index"] = t.componentIndex, e
    }

    function Yh(t, e, n, i) {
        var r, o, a = Br(n - t.rotation), s = i[0] > i[1], l = "start" === e && !s || "start" !== e && s;
        return Fr(a - Ub / 2) ? (o = l ? "bottom" : "top", r = "center") : Fr(a - 1.5 * Ub) ? (o = l ? "top" : "bottom", r = "center") : (o = "middle", r = a < 1.5 * Ub && a > Ub / 2 ? l ? "left" : "right" : l ? "right" : "left"), {
            rotation: a,
            textAlign: r,
            textVerticalAlign: o
        }
    }

    function jh(t) {
        var e = t.get("tooltip");
        return t.get("silent") || !(t.get("triggerEvent") || e && e.show)
    }

    function qh(t, e, n) {
        if (!zl(t.axis)) {
            var i = t.get("axisLabel.showMinLabel"), r = t.get("axisLabel.showMaxLabel");
            e = e || [], n = n || [];
            var o = e[0], a = e[1], s = e[e.length - 1], l = e[e.length - 2], h = n[0], u = n[1], c = n[n.length - 1],
                d = n[n.length - 2];
            !1 === i ? ($h(o), $h(h)) : Kh(o, a) && (i ? ($h(a), $h(u)) : ($h(o), $h(h))), !1 === r ? ($h(s), $h(c)) : Kh(l, s) && (r ? ($h(l), $h(d)) : ($h(s), $h(c)))
        }
    }

    function $h(t) {
        t && (t.ignore = !0)
    }

    function Kh(t, e, n) {
        var i = t && t.getBoundingRect().clone(), r = e && e.getBoundingRect().clone();
        if (i && r) {
            var o = vt([]);
            return wt(o, o, -t.rotation), i.applyTransform(xt([], o, t.getLocalTransform())), r.applyTransform(xt([], o, e.getLocalTransform())), i.intersect(r)
        }
    }

    function Qh(t) {
        return "middle" === t || "center" === t
    }

    function Jh(t, e, n) {
        var i = e.axis;
        if (e.get("axisTick.show") && !i.scale.isBlank()) {
            for (var r = e.getModel("axisTick"), o = r.getModel("lineStyle"), s = r.get("length"), l = i.getTicksCoords(), h = [], u = [], c = t._transform, d = [], f = 0; f < l.length; f++) {
                var p = l[f].coord;
                h[0] = p, h[1] = 0, u[0] = p, u[1] = n.tickDirection * s, c && ($(h, h, c), $(u, u, c));
                var g = new Ty(Gi({
                    anid: "tick_" + l[f].tickValue,
                    shape: {x1: h[0], y1: h[1], x2: u[0], y2: u[1]},
                    style: a(o.getLineStyle(), {stroke: e.get("axisLine.lineStyle.color")}),
                    z2: 2,
                    silent: !0
                }));
                t.group.add(g), d.push(g)
            }
            return d
        }
    }

    function tu(t, e, n) {
        var i = e.axis;
        if (T(n.axisLabelShow, e.get("axisLabel.show")) && !i.scale.isBlank()) {
            var r = e.getModel("axisLabel"), o = r.get("margin"), a = i.getViewLabels(),
                s = (T(n.labelRotate, r.get("rotate")) || 0) * Ub / 180, l = jb(n.rotation, s, n.labelDirection),
                h = e.getCategories(!0), u = [], c = jh(e), f = e.get("triggerEvent");
            return d(a, function (a, s) {
                var d = a.tickValue, p = a.formattedLabel, g = a.rawLabel, m = r;
                h && h[d] && h[d].textStyle && (m = new Ir(h[d].textStyle, r, e.ecModel));
                var v = m.getTextColor() || e.get("axisLine.lineStyle.color"),
                    y = [i.dataToCoord(d), n.labelOffset + n.labelDirection * o],
                    x = new dy({anid: "label_" + d, position: y, rotation: l.rotation, silent: c, z2: 10});
                lr(x.style, m, {
                    text: p,
                    textAlign: m.getShallow("align", !0) || l.textAlign,
                    textVerticalAlign: m.getShallow("verticalAlign", !0) || m.getShallow("baseline", !0) || l.textVerticalAlign,
                    textFill: "function" == typeof v ? v("category" === i.type ? g : "value" === i.type ? d + "" : d, s) : v
                }), f && (x.eventData = Xh(e), x.eventData.targetType = "axisLabel", x.eventData.value = g), t._dumbGroup.add(x), x.updateTransform(), u.push(x), t.group.add(x), x.decomposeTransform()
            }), u
        }
    }

    function eu(t, e) {
        var n = {axesInfo: {}, seriesInvolved: !1, coordSysAxesInfo: {}, coordSysMap: {}};
        return nu(n, t, e), n.seriesInvolved && ru(n, t), n
    }

    function nu(t, e, n) {
        var i = e.getComponent("tooltip"), r = e.getComponent("axisPointer"), o = r.get("link", !0) || [], a = [];
        qb(n.getCoordinateSystems(), function (n) {
            function s(i, s, l) {
                var c = l.model.getModel("axisPointer", r), d = c.get("show");
                if (d && ("auto" !== d || i || uu(c))) {
                    null == s && (s = c.get("triggerTooltip"));
                    var f = (c = i ? iu(l, u, r, e, i, s) : c).get("snap"), p = cu(l.model),
                        g = s || f || "category" === l.type, m = t.axesInfo[p] = {
                            key: p,
                            axis: l,
                            coordSys: n,
                            axisPointerModel: c,
                            triggerTooltip: s,
                            involveSeries: g,
                            snap: f,
                            useHandle: uu(c),
                            seriesModels: []
                        };
                    h[p] = m, t.seriesInvolved |= g;
                    var v = ou(o, l);
                    if (null != v) {
                        var y = a[v] || (a[v] = {axesInfo: {}});
                        y.axesInfo[p] = m, y.mapper = o[v].mapper, m.linkGroup = y
                    }
                }
            }

            if (n.axisPointerEnabled) {
                var l = cu(n.model), h = t.coordSysAxesInfo[l] = {};
                t.coordSysMap[l] = n;
                var u = n.model.getModel("tooltip", i);
                if (qb(n.getAxes(), $b(s, !1, null)), n.getTooltipAxes && i && u.get("show")) {
                    var c = "axis" === u.get("trigger"), d = "cross" === u.get("axisPointer.type"),
                        f = n.getTooltipAxes(u.get("axisPointer.axis"));
                    (c || d) && qb(f.baseAxes, $b(s, !d || "cross", c)), d && qb(f.otherAxes, $b(s, "cross", !1))
                }
            }
        })
    }

    function iu(t, e, i, r, o, s) {
        var l = e.getModel("axisPointer"), h = {};
        qb(["type", "snap", "lineStyle", "shadowStyle", "label", "animation", "animationDurationUpdate", "animationEasingUpdate", "z"], function (t) {
            h[t] = n(l.get(t))
        }), h.snap = "category" !== t.type && !!s, "cross" === l.get("type") && (h.type = "line");
        var u = h.label || (h.label = {});
        if (null == u.show && (u.show = !1), "cross" === o) {
            var c = l.get("label.show");
            if (u.show = null == c || c, !s) {
                var d = h.lineStyle = l.get("crossStyle");
                d && a(u, d.textStyle)
            }
        }
        return t.model.getModel("axisPointer", new Ir(h, i, r))
    }

    function ru(t, e) {
        e.eachSeries(function (e) {
            var n = e.coordinateSystem, i = e.get("tooltip.trigger", !0), r = e.get("tooltip.show", !0);
            n && "none" !== i && !1 !== i && "item" !== i && !1 !== r && !1 !== e.get("axisPointer.show", !0) && qb(t.coordSysAxesInfo[cu(n.model)], function (t) {
                var i = t.axis;
                n.getAxis(i.dim) === i && (t.seriesModels.push(e), null == t.seriesDataCount && (t.seriesDataCount = 0), t.seriesDataCount += e.getData().count())
            })
        }, this)
    }

    function ou(t, e) {
        for (var n = e.model, i = e.dim, r = 0; r < t.length; r++) {
            var o = t[r] || {};
            if (au(o[i + "AxisId"], n.id) || au(o[i + "AxisIndex"], n.componentIndex) || au(o[i + "AxisName"], n.name)) return r
        }
    }

    function au(t, e) {
        return "all" === t || y(t) && l(t, e) >= 0 || t === e
    }

    function su(t) {
        var e = lu(t);
        if (e) {
            var n = e.axisPointerModel, i = e.axis.scale, r = n.option, o = n.get("status"), a = n.get("value");
            null != a && (a = i.parse(a));
            var s = uu(n);
            null == o && (r.status = s ? "show" : "hide");
            var l = i.getExtent().slice();
            l[0] > l[1] && l.reverse(), (null == a || a > l[1]) && (a = l[1]), a < l[0] && (a = l[0]), r.value = a, s && (r.status = e.axis.scale.isBlank() ? "hide" : "show")
        }
    }

    function lu(t) {
        var e = (t.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
        return e && e.axesInfo[cu(t)]
    }

    function hu(t) {
        var e = lu(t);
        return e && e.axisPointerModel
    }

    function uu(t) {
        return !!t.get("handle.show")
    }

    function cu(t) {
        return t.type + "||" + t.id
    }

    function du(t, e, n, i, r, o) {
        var a = Kb.getAxisPointerClass(t.axisPointerClass);
        if (a) {
            var s = hu(e);
            s ? (t._axisPointer || (t._axisPointer = new a)).render(e, s, i, o) : fu(t, i)
        }
    }

    function fu(t, e, n) {
        var i = t._axisPointer;
        i && i.dispose(e, n), t._axisPointer = null
    }

    function pu(t, e, n) {
        n = n || {};
        var i = t.coordinateSystem, r = e.axis, o = {}, a = r.getAxesOnZeroOf()[0], s = r.position,
            l = a ? "onZero" : s, h = r.dim, u = i.getRect(), c = [u.x, u.x + u.width, u.y, u.y + u.height],
            d = {left: 0, right: 1, top: 0, bottom: 1, onZero: 2}, f = e.get("offset") || 0,
            p = "x" === h ? [c[2] - f, c[3] + f] : [c[0] - f, c[1] + f];
        if (a) {
            var g = a.toGlobalCoord(a.dataToCoord(0));
            p[d.onZero] = Math.max(Math.min(g, p[1]), p[0])
        }
        o.position = ["y" === h ? p[d[l]] : c[0], "x" === h ? p[d[l]] : c[3]], o.rotation = Math.PI / 2 * ("x" === h ? 0 : 1);
        var m = {top: -1, bottom: 1, left: -1, right: 1};
        o.labelDirection = o.tickDirection = o.nameDirection = m[s], o.labelOffset = a ? p[d[s]] - p[d.onZero] : 0, e.get("axisTick.inside") && (o.tickDirection = -o.tickDirection), T(n.labelInside, e.get("axisLabel.inside")) && (o.labelDirection = -o.labelDirection);
        var v = e.get("axisLabel.rotate");
        return o.labelRotate = "top" === l ? -v : v, o.z2 = 1, o
    }

    function gu(t, e, n, i, r, o, a) {
        sr(t, e, n.getModel("label"), n.getModel("emphasis.label"), {
            labelFetcher: r,
            labelDataIndex: o,
            defaultText: rh(r.getData(), o),
            isRectText: !0,
            autoColor: i
        }), mu(t), mu(e)
    }

    function mu(t, e) {
        "outside" === t.textPosition && (t.textPosition = e)
    }

    function vu(t, e, n) {
        n.style.text = null, vr(n, {shape: {width: 0}}, e, t, function () {
            n.parent && n.parent.remove(n)
        })
    }

    function yu(t, e, n) {
        n.style.text = null, vr(n, {shape: {r: n.shape.r0}}, e, t, function () {
            n.parent && n.parent.remove(n)
        })
    }

    function xu(t, e, n, i, r, o, s, l) {
        var h = e.getItemVisual(n, "color"), u = e.getItemVisual(n, "opacity"), c = i.getModel("itemStyle"),
            d = i.getModel("emphasis.itemStyle").getBarItemStyle();
        l || t.setShape("r", c.get("barBorderRadius") || 0), t.useStyle(a({fill: h, opacity: u}, c.getBarItemStyle()));
        var f = i.getShallow("cursor");
        f && t.attr("cursor", f);
        var p = s ? r.height > 0 ? "bottom" : "top" : r.width > 0 ? "left" : "right";
        l || gu(t.style, d, i, h, o, n, p), or(t, d)
    }

    function _u(t, e) {
        var n = t.get(rS) || 0;
        return Math.min(n, Math.abs(e.width), Math.abs(e.height))
    }

    function wu(t, e, n) {
        var i = t.getData(), r = [], o = i.getLayout("valueAxisHorizontal") ? 1 : 0;
        r[1 - o] = i.getLayout("valueAxisStart");
        var a = new sS({shape: {points: i.getLayout("largePoints")}, incremental: !!n, __startPoint: r, __valueIdx: o});
        e.add(a), bu(a, t, i)
    }

    function bu(t, e, n) {
        var i = n.getVisual("borderColor") || n.getVisual("color"),
            r = e.getModel("itemStyle").getItemStyle(["color", "borderColor"]);
        t.useStyle(r), t.style.fill = null, t.style.stroke = i, t.style.lineWidth = n.getLayout("barWidth")
    }

    function Su(t, e, n, i) {
        var r = e.getData(), o = this.dataIndex, a = r.getName(o), s = e.get("selectedOffset");
        i.dispatchAction({type: "pieToggleSelect", from: t, name: a, seriesId: e.id}), r.each(function (t) {
            Mu(r.getItemGraphicEl(t), r.getItemLayout(t), e.isSelected(r.getName(t)), s, n)
        })
    }

    function Mu(t, e, n, i, r) {
        var o = (e.startAngle + e.endAngle) / 2, a = Math.cos(o), s = Math.sin(o), l = n ? i : 0, h = [a * l, s * l];
        r ? t.animate().when(200, {position: h}).start("bounceOut") : t.attr("position", h)
    }

    function Iu(t, e) {
        function n() {
            o.ignore = o.hoverIgnore, a.ignore = a.hoverIgnore
        }

        function i() {
            o.ignore = o.normalIgnore, a.ignore = a.normalIgnore
        }

        am.call(this);
        var r = new my({z2: 2}), o = new wy, a = new dy;
        this.add(r), this.add(o), this.add(a), this.updateData(t, e, !0), this.on("emphasis", n).on("normal", i).on("mouseover", n).on("mouseout", i)
    }

    function Tu(t, e, n, i, r, o, a) {
        function s(e, n) {
            for (var i = e; i >= 0 && (t[i].y -= n, !(i > 0 && t[i].y > t[i - 1].y + t[i - 1].height)); i--) ;
        }

        function l(t, e, n, i, r, o) {
            for (var a = e ? Number.MAX_VALUE : 0, s = 0, l = t.length; s < l; s++) {
                var h = Math.abs(t[s].y - i), u = t[s].len, c = t[s].len2,
                    d = h < r + u ? Math.sqrt((r + u + c) * (r + u + c) - h * h) : Math.abs(t[s].x - n);
                e && d >= a && (d = a - 10), !e && d <= a && (d = a + 10), t[s].x = n + d * o, a = d
            }
        }

        t.sort(function (t, e) {
            return t.y - e.y
        });
        for (var h, u = 0, c = t.length, d = [], f = [], p = 0; p < c; p++) (h = t[p].y - u) < 0 && function (e, n, i, r) {
            for (var o = e; o < n; o++) if (t[o].y += i, o > e && o + 1 < n && t[o + 1].y > t[o].y + t[o].height) return void s(o, i / 2);
            s(n - 1, i / 2)
        }(p, c, -h), u = t[p].y + t[p].height;
        a - u < 0 && s(c - 1, u - a);
        for (p = 0; p < c; p++) t[p].y >= n ? f.push(t[p]) : d.push(t[p]);
        l(d, !1, e, n, i, r), l(f, !0, e, n, i, r)
    }

    function Au(t, e, n, i, r, o) {
        for (var a = [], s = [], l = 0; l < t.length; l++) Cu(t[l]) || (t[l].x < e ? a.push(t[l]) : s.push(t[l]));
        Tu(s, e, n, i, 1, r, o), Tu(a, e, n, i, -1, r, o);
        for (l = 0; l < t.length; l++) if (!Cu(t[l])) {
            var h = t[l].linePoints;
            if (h) {
                var u = h[1][0] - h[2][0];
                t[l].x < e ? h[2][0] = t[l].x + 3 : h[2][0] = t[l].x - 3, h[1][1] = h[2][1] = t[l].y, h[1][0] = h[2][0] + u
            }
        }
    }

    function Cu(t) {
        return "center" === t.position
    }

    function Du() {
        this.group = new am
    }

    function ku(t, e, n, i) {
        var r = n.type, o = new (0, Wy[r.charAt(0).toUpperCase() + r.slice(1)])(n);
        e.add(o), i.set(t, o), o.__ecGraphicId = t
    }

    function Pu(t, e) {
        var n = t && t.parent;
        n && ("group" === t.type && t.traverse(function (t) {
            Pu(t, e)
        }), e.removeKey(t.__ecGraphicId), n.remove(t))
    }

    function Lu(t) {
        return t = o({}, t), d(["id", "parentId", "$action", "hv", "bounding"].concat(sx), function (e) {
            delete t[e]
        }), t
    }

    function Ou(t, e) {
        var n;
        return d(e, function (e) {
            null != t[e] && "auto" !== t[e] && (n = !0)
        }), n
    }

    function zu(t, e) {
        var n = t.exist;
        if (e.id = t.keyInfo.id, !e.type && n && (e.type = n.type), null == e.parentId) {
            var i = e.parentOption;
            i ? e.parentId = i.id : n && (e.parentId = n.parentId)
        }
        e.parentOption = null
    }

    function Eu(t, e, n) {
        var r = o({}, n), a = t[e], s = n.$action || "merge";
        "merge" === s ? a ? (i(a, r, !0), eo(a, r, {ignoreSize: !0}), io(n, a)) : t[e] = r : "replace" === s ? t[e] = r : "remove" === s && a && (t[e] = null)
    }

    function Nu(t, e) {
        t && (t.hv = e.hv = [Ou(e, ["left", "right"]), Ou(e, ["top", "bottom"])], "group" === t.type && (null == t.width && (t.width = e.width = 0), null == t.height && (t.height = e.height = 0)))
    }

    function Ru(t, e, n) {
        var i = t.eventData;
        t.silent || t.ignore || i || (i = t.eventData = {
            componentType: "graphic",
            componentIndex: e.componentIndex,
            name: t.name
        }), i && (i.info = t.info)
    }

    function Bu(t, e, n, i, r) {
        var a = t.axis;
        if (!a.scale.isBlank() && a.containData(e)) if (t.involveSeries) {
            var s = Fu(e, t), l = s.payloadBatch, h = s.snapToValue;
            l[0] && null == r.seriesIndex && o(r, l[0]), !i && t.snap && a.containData(h) && null != h && (e = h), n.showPointer(t, e, l, r), n.showTooltip(t, s, h)
        } else n.showPointer(t, e)
    }

    function Fu(t, e) {
        var n = e.axis, i = n.dim, r = t, o = [], a = Number.MAX_VALUE, s = -1;
        return xS(e.seriesModels, function (e, l) {
            var h, u, c = e.getData().mapDimension(i, !0);
            if (e.getAxisTooltipData) {
                var d = e.getAxisTooltipData(c, t, n);
                u = d.dataIndices, h = d.nestestValue
            } else {
                if (!(u = e.getData().indicesOfNearest(c[0], t, "category" === n.type ? .5 : null)).length) return;
                h = e.getData().get(c[0], u[0])
            }
            if (null != h && isFinite(h)) {
                var f = t - h, p = Math.abs(f);
                p <= a && ((p < a || f >= 0 && s < 0) && (a = p, s = f, r = h, o.length = 0), xS(u, function (t) {
                    o.push({seriesIndex: e.seriesIndex, dataIndexInside: t, dataIndex: e.getData().getRawIndex(t)})
                }))
            }
        }), {payloadBatch: o, snapToValue: r}
    }

    function Vu(t, e, n, i) {
        t[e.key] = {value: n, payloadBatch: i}
    }

    function Hu(t, e, n, i) {
        var r = n.payloadBatch, o = e.axis, a = o.model, s = e.axisPointerModel;
        if (e.triggerTooltip && r.length) {
            var l = e.coordSys.model, h = cu(l), u = t.map[h];
            u || (u = t.map[h] = {
                coordSysId: l.id,
                coordSysIndex: l.componentIndex,
                coordSysType: l.type,
                coordSysMainType: l.mainType,
                dataByAxis: []
            }, t.list.push(u)), u.dataByAxis.push({
                axisDim: o.dim,
                axisIndex: a.componentIndex,
                axisType: a.type,
                axisId: a.id,
                value: i,
                valueLabelOpt: {precision: s.get("label.precision"), formatter: s.get("label.formatter")},
                seriesDataIndices: r.slice()
            })
        }
    }

    function Wu(t, e, n) {
        var i = n.axesInfo = [];
        xS(e, function (e, n) {
            var r = e.axisPointerModel.option, o = t[n];
            o ? (!e.useHandle && (r.status = "show"), r.value = o.value, r.seriesDataIndices = (o.payloadBatch || []).slice()) : !e.useHandle && (r.status = "hide"), "show" === r.status && i.push({
                axisDim: e.axis.dim,
                axisIndex: e.axis.model.componentIndex,
                value: r.value
            })
        })
    }

    function Gu(t, e, n, i) {
        if (!Yu(e) && t.list.length) {
            var r = ((t.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};
            i({
                type: "showTip",
                escapeConnect: !0,
                x: e[0],
                y: e[1],
                tooltipOption: n.tooltipOption,
                position: n.position,
                dataIndexInside: r.dataIndexInside,
                dataIndex: r.dataIndex,
                seriesIndex: r.seriesIndex,
                dataByCoordSys: t.list
            })
        } else i({type: "hideTip"})
    }

    function Zu(t, e, n) {
        var i = n.getZr(), r = wS(i).axisPointerLastHighlights || {}, o = wS(i).axisPointerLastHighlights = {};
        xS(t, function (t, e) {
            var n = t.axisPointerModel.option;
            "show" === n.status && xS(n.seriesDataIndices, function (t) {
                var e = t.seriesIndex + " | " + t.dataIndex;
                o[e] = t
            })
        });
        var a = [], s = [];
        d(r, function (t, e) {
            !o[e] && s.push(t)
        }), d(o, function (t, e) {
            !r[e] && a.push(t)
        }), s.length && n.dispatchAction({
            type: "downplay",
            escapeConnect: !0,
            batch: s
        }), a.length && n.dispatchAction({type: "highlight", escapeConnect: !0, batch: a})
    }

    function Uu(t, e) {
        for (var n = 0; n < (t || []).length; n++) {
            var i = t[n];
            if (e.axis.dim === i.axisDim && e.axis.model.componentIndex === i.axisIndex) return i
        }
    }

    function Xu(t) {
        var e = t.axis.model, n = {}, i = n.axisDim = t.axis.dim;
        return n.axisIndex = n[i + "AxisIndex"] = e.componentIndex, n.axisName = n[i + "AxisName"] = e.name, n.axisId = n[i + "AxisId"] = e.id, n
    }

    function Yu(t) {
        return !t || null == t[0] || isNaN(t[0]) || null == t[1] || isNaN(t[1])
    }

    function ju(t, e, n) {
        if (!Kp.node) {
            var i = e.getZr();
            bS(i).records || (bS(i).records = {}), qu(i, e), (bS(i).records[t] || (bS(i).records[t] = {})).handler = n
        }
    }

    function qu(t, e) {
        function n(n, i) {
            t.on(n, function (n) {
                var r = Ju(e);
                SS(bS(t).records, function (t) {
                    t && i(t, n, r.dispatchAction)
                }), $u(r.pendings, e)
            })
        }

        bS(t).initialized || (bS(t).initialized = !0, n("click", v(Qu, "click")), n("mousemove", v(Qu, "mousemove")), n("globalout", Ku))
    }

    function $u(t, e) {
        var n, i = t.showTip.length, r = t.hideTip.length;
        i ? n = t.showTip[i - 1] : r && (n = t.hideTip[r - 1]), n && (n.dispatchAction = null, e.dispatchAction(n))
    }

    function Ku(t, e, n) {
        t.handler("leave", null, n)
    }

    function Qu(t, e, n, i) {
        e.handler(t, n, i)
    }

    function Ju(t) {
        var e = {showTip: [], hideTip: []}, n = function (i) {
            var r = e[i.type];
            r ? r.push(i) : (i.dispatchAction = n, t.dispatchAction(i))
        };
        return {dispatchAction: n, pendings: e}
    }

    function tc(t, e) {
        if (!Kp.node) {
            var n = e.getZr();
            (bS(n).records || {})[t] && (bS(n).records[t] = null)
        }
    }

    function ec() {
    }

    function nc(t, e, n, i) {
        ic(IS(n).lastProp, i) || (IS(n).lastProp = i, e ? vr(n, i, t) : (n.stopAnimation(), n.attr(i)))
    }

    function ic(t, e) {
        if (w(t) && w(e)) {
            var n = !0;
            return d(e, function (e, i) {
                n = n && ic(t[i], e)
            }), !!n
        }
        return t === e
    }

    function rc(t, e) {
        t[e.get("label.show") ? "show" : "hide"]()
    }

    function oc(t) {
        return {position: t.position.slice(), rotation: t.rotation || 0}
    }

    function ac(t, e, n) {
        var i = e.get("z"), r = e.get("zlevel");
        t && t.traverse(function (t) {
            "group" !== t.type && (null != i && (t.z = i), null != r && (t.zlevel = r), t.silent = n)
        })
    }

    function sc(t) {
        var e, n = t.get("type"), i = t.getModel(n + "Style");
        return "line" === n ? (e = i.getLineStyle()).fill = null : "shadow" === n && ((e = i.getAreaStyle()).stroke = null), e
    }

    function lc(t, e, n, i, r) {
        var o = uc(n.get("value"), e.axis, e.ecModel, n.get("seriesDataIndices"), {
                precision: n.get("label.precision"),
                formatter: n.get("label.formatter")
            }), a = n.getModel("label"), s = Jy(a.get("padding") || 0), l = a.getFont(), h = Te(o, l), u = r.position,
            c = h.width + s[1] + s[3], d = h.height + s[0] + s[2], f = r.align;
        "right" === f && (u[0] -= c), "center" === f && (u[0] -= c / 2);
        var p = r.verticalAlign;
        "bottom" === p && (u[1] -= d), "middle" === p && (u[1] -= d / 2), hc(u, c, d, i);
        var g = a.get("backgroundColor");
        g && "auto" !== g || (g = e.get("axisLine.lineStyle.color")), t.label = {
            shape: {
                x: 0,
                y: 0,
                width: c,
                height: d,
                r: a.get("borderRadius")
            },
            position: u.slice(),
            style: {
                text: o,
                textFont: l,
                textFill: a.getTextColor(),
                textPosition: "inside",
                fill: g,
                stroke: a.get("borderColor") || "transparent",
                lineWidth: a.get("borderWidth") || 0,
                shadowBlur: a.get("shadowBlur"),
                shadowColor: a.get("shadowColor"),
                shadowOffsetX: a.get("shadowOffsetX"),
                shadowOffsetY: a.get("shadowOffsetY")
            },
            z2: 10
        }
    }

    function hc(t, e, n, i) {
        var r = i.getWidth(), o = i.getHeight();
        t[0] = Math.min(t[0] + e, r) - e, t[1] = Math.min(t[1] + n, o) - n, t[0] = Math.max(t[0], 0), t[1] = Math.max(t[1], 0)
    }

    function uc(t, e, n, i, r) {
        t = e.scale.parse(t);
        var o = e.scale.getLabel(t, {precision: r.precision}), a = r.formatter;
        if (a) {
            var s = {value: kl(e, t), seriesData: []};
            d(i, function (t) {
                var e = n.getSeriesByIndex(t.seriesIndex), i = t.dataIndexInside, r = e && e.getDataParams(i);
                r && s.seriesData.push(r)
            }), _(a) ? o = a.replace("{value}", o) : x(a) && (o = a(s))
        }
        return o
    }

    function cc(t, e, n) {
        var i = mt();
        return wt(i, i, n.rotation), _t(i, i, n.position), _r([t.dataToCoord(e), (n.labelOffset || 0) + (n.labelDirection || 1) * (n.labelMargin || 0)], i)
    }

    function dc(t, e, n, i, r, o) {
        var a = Xb.innerTextLayout(n.rotation, 0, n.labelDirection);
        n.labelMargin = r.get("label.margin"), lc(e, i, r, o, {
            position: cc(i.axis, t, n),
            align: a.textAlign,
            verticalAlign: a.textVerticalAlign
        })
    }

    function fc(t, e, n) {
        return n = n || 0, {x1: t[n], y1: t[1 - n], x2: e[n], y2: e[1 - n]}
    }

    function pc(t, e, n) {
        return n = n || 0, {x: t[n], y: t[1 - n], width: e[n], height: e[1 - n]}
    }

    function gc(t, e) {
        var n = {};
        return n[e.dim + "AxisIndex"] = e.index, t.getCartesian(n)
    }

    function mc(t) {
        return "x" === t.dim ? 0 : 1
    }

    function vc(t) {
        var e = "left " + t + "s cubic-bezier(0.23, 1, 0.32, 1),top " + t + "s cubic-bezier(0.23, 1, 0.32, 1)";
        return f(LS, function (t) {
            return t + "transition:" + e
        }).join(";")
    }

    function yc(t) {
        var e = [], n = t.get("fontSize"), i = t.getTextColor();
        return i && e.push("color:" + i), e.push("font:" + t.getFont()), n && e.push("line-height:" + Math.round(3 * n / 2) + "px"), kS(["decoration", "align"], function (n) {
            var i = t.get(n);
            i && e.push("text-" + n + ":" + i)
        }), e.join(";")
    }

    function xc(t) {
        var e = [], n = t.get("transitionDuration"), i = t.get("backgroundColor"), r = t.getModel("textStyle"),
            o = t.get("padding");
        return n && e.push(vc(n)), i && (Kp.canvasSupported ? e.push("background-Color:" + i) : (e.push("background-Color:#" + Vt(i)), e.push("filter:alpha(opacity=70)"))), kS(["width", "color", "radius"], function (n) {
            var i = "border-" + n, r = PS(i), o = t.get(r);
            null != o && e.push(i + ":" + o + ("color" === n ? "" : "px"))
        }), e.push(yc(r)), null != o && e.push("padding:" + Jy(o).join("px ") + "px"), e.join(";") + ";"
    }

    function _c(t, e) {
        if (Kp.wxa) return null;
        var n = document.createElement("div"), i = this._zr = e.getZr();
        this.el = n, this._x = e.getWidth() / 2, this._y = e.getHeight() / 2, t.appendChild(n), this._container = t, this._show = !1, this._hideTimeout;
        var r = this;
        n.onmouseenter = function () {
            r._enterable && (clearTimeout(r._hideTimeout), r._show = !0), r._inContent = !0
        }, n.onmousemove = function (e) {
            if (e = e || window.event, !r._enterable) {
                var n = i.handler;
                at(t, e, !0), n.dispatch("mousemove", e)
            }
        }, n.onmouseleave = function () {
            r._enterable && r._show && r.hideLater(r._hideDelay), r._inContent = !1
        }
    }

    function wc(t) {
        this._zr = t.getZr(), this._show = !1, this._hideTimeout
    }

    function bc(t) {
        for (var e = t.pop(); t.length;) {
            var n = t.pop();
            n && (Ir.isInstance(n) && (n = n.get("tooltip", !0)), "string" == typeof n && (n = {formatter: n}), e = new Ir(n, e, e.ecModel))
        }
        return e
    }

    function Sc(t, e) {
        return t.dispatchAction || m(e.dispatchAction, e)
    }

    function Mc(t, e, n, i, r, o, a) {
        var s = n.getOuterSize(), l = s.width, h = s.height;
        return null != o && (t + l + o > i ? t -= l + o : t += o), null != a && (e + h + a > r ? e -= h + a : e += a), [t, e]
    }

    function Ic(t, e, n, i, r) {
        var o = n.getOuterSize(), a = o.width, s = o.height;
        return t = Math.min(t + a, i) - a, e = Math.min(e + s, r) - s, t = Math.max(t, 0), e = Math.max(e, 0), [t, e]
    }

    function Tc(t, e, n) {
        var i = n[0], r = n[1], o = 0, a = 0, s = e.width, l = e.height;
        switch (t) {
            case"inside":
                o = e.x + s / 2 - i / 2, a = e.y + l / 2 - r / 2;
                break;
            case"top":
                o = e.x + s / 2 - i / 2, a = e.y - r - 5;
                break;
            case"bottom":
                o = e.x + s / 2 - i / 2, a = e.y + l + 5;
                break;
            case"left":
                o = e.x - i - 5, a = e.y + l / 2 - r / 2;
                break;
            case"right":
                o = e.x + s + 5, a = e.y + l / 2 - r / 2
        }
        return [o, a]
    }

    function Ac(t) {
        return "center" === t || "middle" === t
    }

    function Cc(t, e, n) {
        var i, r = {}, o = "toggleSelected" === t;
        return n.eachComponent("legend", function (n) {
            o && null != i ? n[i ? "select" : "unSelect"](e.name) : (n[t](e.name), i = n.isSelected(e.name)), d(n.getData(), function (t) {
                var e = t.get("name");
                if ("\n" !== e && "" !== e) {
                    var i = n.isSelected(e);
                    r.hasOwnProperty(e) ? r[e] = r[e] && i : r[e] = i
                }
            })
        }), {name: e.name, selected: r}
    }

    function Dc(t, e, n) {
        var i = e.getBoxLayoutParams(), r = e.get("padding"), o = {width: n.getWidth(), height: n.getHeight()},
            a = Jr(i, o, r);
        hx(e.get("orient"), t, e.get("itemGap"), a.width, a.height), to(t, i, o, r)
    }

    function kc(t, e) {
        var n = Jy(e.get("padding")), i = e.getItemStyle(["color", "opacity"]);
        return i.fill = e.get("backgroundColor"), t = new My({
            shape: {
                x: t.x - n[3],
                y: t.y - n[0],
                width: t.width + n[1] + n[3],
                height: t.height + n[0] + n[2],
                r: e.get("borderRadius")
            }, style: i, silent: !0, z2: -1
        })
    }

    function Pc(t, e) {
        e.dispatchAction({type: "legendToggleSelect", name: t})
    }

    function Lc(t, e, n, i) {
        var r = n.getZr().storage.getDisplayList()[0];
        r && r.useHoverLayer || n.dispatchAction({type: "highlight", seriesName: t, name: e, excludeSeriesId: i})
    }

    function Oc(t, e, n, i) {
        var r = n.getZr().storage.getDisplayList()[0];
        r && r.useHoverLayer || n.dispatchAction({type: "downplay", seriesName: t, name: e, excludeSeriesId: i})
    }

    function zc(t, e, n) {
        var i = [1, 1];
        i[t.getOrient().index] = 0, eo(e, n, {type: "box", ignoreSize: i})
    }

    function Ec(t) {
        In(t, "label", ["show"])
    }

    function Nc(t) {
        return !(isNaN(parseFloat(t.x)) && isNaN(parseFloat(t.y)))
    }

    function Rc(t) {
        return !isNaN(parseFloat(t.x)) && !isNaN(parseFloat(t.y))
    }

    function Bc(t, e, n, i, r, o) {
        var a = [], s = tl(e, i) ? e.getCalculationInfo("stackResultDimension") : i, l = Zc(e, s, t),
            h = e.indicesOfNearest(s, l)[0];
        a[r] = e.get(n, h), a[o] = e.get(i, h);
        var u = zr(e.get(i, h));
        return (u = Math.min(u, 20)) >= 0 && (a[o] = +a[o].toFixed(u)), a
    }

    function Fc(t, e) {
        var i = t.getData(), r = t.coordinateSystem;
        if (e && !Rc(e) && !y(e.coord) && r) {
            var o = r.dimensions, a = Vc(e, i, r, t);
            if ((e = n(e)).type && QS[e.type] && a.baseAxis && a.valueAxis) {
                var s = $S(o, a.baseAxis.dim), l = $S(o, a.valueAxis.dim);
                e.coord = QS[e.type](i, a.baseDataDim, a.valueDataDim, s, l), e.value = e.coord[l]
            } else {
                for (var h = [null != e.xAxis ? e.xAxis : e.radiusAxis, null != e.yAxis ? e.yAxis : e.angleAxis], u = 0; u < 2; u++) QS[h[u]] && (h[u] = Zc(i, i.mapDimension(o[u]), h[u]));
                e.coord = h
            }
        }
        return e
    }

    function Vc(t, e, n, i) {
        var r = {};
        return null != t.valueIndex || null != t.valueDim ? (r.valueDataDim = null != t.valueIndex ? e.getDimension(t.valueIndex) : t.valueDim, r.valueAxis = n.getAxis(Hc(i, r.valueDataDim)), r.baseAxis = n.getOtherAxis(r.valueAxis), r.baseDataDim = e.mapDimension(r.baseAxis.dim)) : (r.baseAxis = i.getBaseAxis(), r.valueAxis = n.getOtherAxis(r.baseAxis), r.baseDataDim = e.mapDimension(r.baseAxis.dim), r.valueDataDim = e.mapDimension(r.valueAxis.dim)), r
    }

    function Hc(t, e) {
        var n = t.getData(), i = n.dimensions;
        e = n.getDimension(e);
        for (var r = 0; r < i.length; r++) {
            var o = n.getDimensionInfo(i[r]);
            if (o.name === e) return o.coordDim
        }
    }

    function Wc(t, e) {
        return !(t && t.containData && e.coord && !Nc(e)) || t.containData(e.coord)
    }

    function Gc(t, e, n, i) {
        return i < 2 ? t.coord && t.coord[i] : t.value
    }

    function Zc(t, e, n) {
        if ("average" === n) {
            var i = 0, r = 0;
            return t.each(e, function (t, e) {
                isNaN(t) || (i += t, r++)
            }), i / r
        }
        return "median" === n ? t.getMedian(e) : t.getDataExtent(e, !0)["max" === n ? 1 : 0]
    }

    function Uc(t, e, n) {
        var i = e.coordinateSystem;
        t.each(function (r) {
            var o, a = t.getItemModel(r), s = Pr(a.get("x"), n.getWidth()), l = Pr(a.get("y"), n.getHeight());
            if (isNaN(s) || isNaN(l)) {
                if (e.getMarkerPosition) o = e.getMarkerPosition(t.getValues(t.dimensions, r)); else if (i) {
                    var h = t.get(i.dimensions[0], r), u = t.get(i.dimensions[1], r);
                    o = i.dataToPoint([h, u])
                }
            } else o = [s, l];
            isNaN(s) || (o[0] = s), isNaN(l) || (o[1] = l), t.setItemLayout(r, o)
        })
    }

    function Xc(t, e, n) {
        var i;
        i = t ? f(t && t.dimensions, function (t) {
            return a({name: t}, e.getData().getDimensionInfo(e.getData().mapDimension(t)) || {})
        }) : [{name: "value", type: "float"}];
        var r = new bw(i, n), o = f(n.get("data"), v(Fc, e));
        return t && (o = g(o, v(Wc, t))), r.initData(o, null, t ? Gc : function (t) {
            return t.value
        }), r
    }

    function Yc(t) {
        return isNaN(+t.cpx1) || isNaN(+t.cpy1)
    }

    function jc(t) {
        return "_" + t + "Type"
    }

    function qc(t, e, n) {
        var i = e.getItemVisual(n, "color"), r = e.getItemVisual(n, t), o = e.getItemVisual(n, t + "Size");
        if (r && "none" !== r) {
            y(o) || (o = [o, o]);
            var a = Nl(r, -o[0] / 2, -o[1] / 2, o[0], o[1], i);
            return a.name = t, a
        }
    }

    function $c(t) {
        var e = new nM({name: "line"});
        return Kc(e.shape, t), e
    }

    function Kc(t, e) {
        var n = e[0], i = e[1], r = e[2];
        t.x1 = n[0], t.y1 = n[1], t.x2 = i[0], t.y2 = i[1], t.percent = 1, r ? (t.cpx1 = r[0], t.cpy1 = r[1]) : (t.cpx1 = NaN, t.cpy1 = NaN)
    }

    function Qc(t, e, n) {
        am.call(this), this._createLine(t, e, n)
    }

    function Jc(t) {
        this._ctor = t || Qc, this.group = new am
    }

    function td(t, e, n, i) {
        if (rd(e.getItemLayout(n))) {
            var r = new t._ctor(e, n, i);
            e.setItemGraphicEl(n, r), t.group.add(r)
        }
    }

    function ed(t, e, n, i, r, o) {
        var a = e.getItemGraphicEl(i);
        rd(n.getItemLayout(r)) ? (a ? a.updateData(n, r, o) : a = new t._ctor(n, r, o), n.setItemGraphicEl(r, a), t.group.add(a)) : t.group.remove(a)
    }

    function nd(t) {
        var e = t.hostModel;
        return {
            lineStyle: e.getModel("lineStyle").getLineStyle(),
            hoverLineStyle: e.getModel("emphasis.lineStyle").getLineStyle(),
            labelModel: e.getModel("label"),
            hoverLabelModel: e.getModel("emphasis.label")
        }
    }

    function id(t) {
        return isNaN(t[0]) || isNaN(t[1])
    }

    function rd(t) {
        return !id(t[0]) && !id(t[1])
    }

    function od(t) {
        return !isNaN(t) && !isFinite(t)
    }

    function ad(t, e, n, i) {
        var r = 1 - t, o = i.dimensions[t];
        return od(e[r]) && od(n[r]) && e[t] === n[t] && i.getAxis(o).containData(e[t])
    }

    function sd(t, e) {
        if ("cartesian2d" === t.type) {
            var n = e[0].coord, i = e[1].coord;
            if (n && i && (ad(1, n, i, t) || ad(0, n, i, t))) return !0
        }
        return Wc(t, e[0]) && Wc(t, e[1])
    }

    function ld(t, e, n, i, r) {
        var o, a = i.coordinateSystem, s = t.getItemModel(e), l = Pr(s.get("x"), r.getWidth()),
            h = Pr(s.get("y"), r.getHeight());
        if (isNaN(l) || isNaN(h)) {
            if (i.getMarkerPosition) o = i.getMarkerPosition(t.getValues(t.dimensions, e)); else {
                var u = a.dimensions, c = t.get(u[0], e), d = t.get(u[1], e);
                o = a.dataToPoint([c, d])
            }
            if ("cartesian2d" === a.type) {
                var f = a.getAxis("x"), p = a.getAxis("y"), u = a.dimensions;
                od(t.get(u[0], e)) ? o[0] = f.toGlobalCoord(f.getExtent()[n ? 0 : 1]) : od(t.get(u[1], e)) && (o[1] = p.toGlobalCoord(p.getExtent()[n ? 0 : 1]))
            }
            isNaN(l) || (o[0] = l), isNaN(h) || (o[1] = h)
        } else o = [l, h];
        t.setItemLayout(e, o)
    }

    function hd(t, e, n) {
        var i;
        i = t ? f(t && t.dimensions, function (t) {
            return a({name: t}, e.getData().getDimensionInfo(e.getData().mapDimension(t)) || {})
        }) : [{name: "value", type: "float"}];
        var r = new bw(i, n), o = new bw(i, n), s = new bw([], n), l = f(n.get("data"), v(aM, e, t, n));
        t && (l = g(l, v(sd, t)));
        var h = t ? Gc : function (t) {
            return t.value
        };
        return r.initData(f(l, function (t) {
            return t[0]
        }), null, h), o.initData(f(l, function (t) {
            return t[1]
        }), null, h), s.initData(f(l, function (t) {
            return t[2]
        })), s.hasItemOption = !0, {from: r, to: o, line: s}
    }

    function ud(t) {
        return !isNaN(t) && !isFinite(t)
    }

    function cd(t, e, n, i) {
        var r = 1 - t;
        return ud(e[r]) && ud(n[r])
    }

    function dd(t, e) {
        var n = e.coord[0], i = e.coord[1];
        return !("cartesian2d" !== t.type || !n || !i || !cd(1, n, i, t) && !cd(0, n, i, t)) || (Wc(t, {
            coord: n,
            x: e.x0,
            y: e.y0
        }) || Wc(t, {coord: i, x: e.x1, y: e.y1}))
    }

    function fd(t, e, n, i, r) {
        var o, a = i.coordinateSystem, s = t.getItemModel(e), l = Pr(s.get(n[0]), r.getWidth()),
            h = Pr(s.get(n[1]), r.getHeight());
        if (isNaN(l) || isNaN(h)) {
            if (i.getMarkerPosition) o = i.getMarkerPosition(t.getValues(n, e)); else {
                var u = [f = t.get(n[0], e), p = t.get(n[1], e)];
                a.clampData && a.clampData(u, u), o = a.dataToPoint(u, !0)
            }
            if ("cartesian2d" === a.type) {
                var c = a.getAxis("x"), d = a.getAxis("y"), f = t.get(n[0], e), p = t.get(n[1], e);
                ud(f) ? o[0] = c.toGlobalCoord(c.getExtent()["x0" === n[0] ? 0 : 1]) : ud(p) && (o[1] = d.toGlobalCoord(d.getExtent()["y0" === n[1] ? 0 : 1]))
            }
            isNaN(l) || (o[0] = l), isNaN(h) || (o[1] = h)
        } else o = [l, h];
        return o
    }

    function pd(t, e, n) {
        var i, r, o = ["x0", "y0", "x1", "y1"];
        t ? (i = f(t && t.dimensions, function (t) {
            var n = e.getData();
            return a({name: t}, n.getDimensionInfo(n.mapDimension(t)) || {})
        }), r = new bw(f(o, function (t, e) {
            return {name: t, type: i[e % 2].type}
        }), n)) : r = new bw(i = [{name: "value", type: "float"}], n);
        var s = f(n.get("data"), v(sM, e, t, n));
        t && (s = g(s, v(dd, t)));
        var l = t ? function (t, e, n, i) {
            return t.coord[Math.floor(i / 2)][i % 2]
        } : function (t) {
            return t.value
        };
        return r.initData(s, null, l), r.hasItemOption = !0, r
    }

    function gd(t) {
        return l(hM, t) >= 0
    }

    function md(t, e, n) {
        function i(t, e) {
            return l(e.nodes, t) >= 0
        }

        function r(t, i) {
            var r = !1;
            return e(function (e) {
                d(n(t, e) || [], function (t) {
                    i.records[e.name][t] && (r = !0)
                })
            }), r
        }

        function o(t, i) {
            i.nodes.push(t), e(function (e) {
                d(n(t, e) || [], function (t) {
                    i.records[e.name][t] = !0
                })
            })
        }

        return function (n) {
            var a = {nodes: [], records: {}};
            if (e(function (t) {
                a.records[t.name] = {}
            }), !n) return a;
            o(n, a);
            var s;
            do {
                s = !1, t(function (t) {
                    !i(t, a) && r(t, a) && (o(t, a), s = !0)
                })
            } while (s);
            return a
        }
    }

    function vd(t, e, n) {
        var i = [1 / 0, -1 / 0];
        return cM(n, function (t) {
            var n = t.getData();
            n && cM(n.mapDimension(e, !0), function (t) {
                var e = n.getApproximateExtent(t);
                e[0] < i[0] && (i[0] = e[0]), e[1] > i[1] && (i[1] = e[1])
            })
        }), i[1] < i[0] && (i = [NaN, NaN]), yd(t, i), i
    }

    function yd(t, e) {
        var n = t.getAxisModel(), i = n.getMin(!0), r = "category" === n.get("type"), o = r && n.getCategories().length;
        null != i && "dataMin" !== i && "function" != typeof i ? e[0] = i : r && (e[0] = o > 0 ? 0 : NaN);
        var a = n.getMax(!0);
        return null != a && "dataMax" !== a && "function" != typeof a ? e[1] = a : r && (e[1] = o > 0 ? o - 1 : NaN), n.get("scale", !0) || (e[0] > 0 && (e[0] = 0), e[1] < 0 && (e[1] = 0)), e
    }

    function xd(t, e) {
        var n = t.getAxisModel(), i = t._percentWindow, r = t._valueWindow;
        if (i) {
            var o = Nr(r, [0, 500]);
            o = Math.min(o, 20);
            var a = e || 0 === i[0] && 100 === i[1];
            n.setRange(a ? null : +r[0].toFixed(o), a ? null : +r[1].toFixed(o))
        }
    }

    function _d(t) {
        var e = t._minMaxSpan = {}, n = t._dataZoomModel;
        cM(["min", "max"], function (i) {
            e[i + "Span"] = n.get(i + "Span");
            var r = n.get(i + "ValueSpan");
            if (null != r && (e[i + "ValueSpan"] = r, null != (r = t.getAxisModel().axis.scale.parse(r)))) {
                var o = t._dataExtent;
                e[i + "Span"] = kr(o[0] + r, o, [0, 100], !0)
            }
        })
    }

    function wd(t) {
        var e = {};
        return pM(["start", "end", "startValue", "endValue", "throttle"], function (n) {
            t.hasOwnProperty(n) && (e[n] = t[n])
        }), e
    }

    function bd(t, e) {
        var n = t._rangePropMode, i = t.get("rangeMode");
        pM([["start", "startValue"], ["end", "endValue"]], function (t, r) {
            var o = null != e[t[0]], a = null != e[t[1]];
            o && !a ? n[r] = "percent" : !o && a ? n[r] = "value" : i ? n[r] = i[r] : o && (n[r] = "percent")
        })
    }

    function Sd(t, e) {
        var n = t[e] - t[1 - e];
        return {span: Math.abs(n), sign: n > 0 ? -1 : n < 0 ? 1 : e ? -1 : 1}
    }

    function Md(t, e) {
        return Math.min(e[1], Math.max(e[0], t))
    }

    function Id(t) {
        return {x: "y", y: "x", radius: "angle", angle: "radius"}[t]
    }

    function Td(t) {
        return "vertical" === t ? "ns-resize" : "ew-resize"
    }

    function Ad(t, e, n) {
        kd(t)[e] = n
    }

    function Cd(t, e, n) {
        var i = kd(t);
        i[e] === n && (i[e] = null)
    }

    function Dd(t, e) {
        return !!kd(t)[e]
    }

    function kd(t) {
        return t[CM] || (t[CM] = {})
    }

    function Pd(t) {
        this.pointerChecker, this._zr = t, this._opt = {};
        var e = m, i = e(Ld, this), r = e(Od, this), o = e(zd, this), s = e(Ed, this), l = e(Nd, this);
        xg.call(this), this.setPointerChecker = function (t) {
            this.pointerChecker = t
        }, this.enable = function (e, h) {
            this.disable(), this._opt = a(n(h) || {}, {
                zoomOnMouseWheel: !0,
                moveOnMouseMove: !0,
                moveOnMouseWheel: !1,
                preventDefaultMouseMove: !0
            }), null == e && (e = !0), !0 !== e && "move" !== e && "pan" !== e || (t.on("mousedown", i), t.on("mousemove", r), t.on("mouseup", o)), !0 !== e && "scale" !== e && "zoom" !== e || (t.on("mousewheel", s), t.on("pinch", l))
        }, this.disable = function () {
            t.off("mousedown", i), t.off("mousemove", r), t.off("mouseup", o), t.off("mousewheel", s), t.off("pinch", l)
        }, this.dispose = this.disable, this.isDragging = function () {
            return this._dragging
        }, this.isPinching = function () {
            return this._pinching
        }
    }

    function Ld(t) {
        if (!(ht(t) || t.target && t.target.draggable)) {
            var e = t.offsetX, n = t.offsetY;
            this.pointerChecker && this.pointerChecker(t, e, n) && (this._x = e, this._y = n, this._dragging = !0)
        }
    }

    function Od(t) {
        if (this._dragging && Fd("moveOnMouseMove", t, this._opt) && "pinch" !== t.gestureEvent && !Dd(this._zr, "globalPan")) {
            var e = t.offsetX, n = t.offsetY, i = this._x, r = this._y, o = e - i, a = n - r;
            this._x = e, this._y = n, this._opt.preventDefaultMouseMove && bg(t.event), Bd(this, "pan", "moveOnMouseMove", t, {
                dx: o,
                dy: a,
                oldX: i,
                oldY: r,
                newX: e,
                newY: n
            })
        }
    }

    function zd(t) {
        ht(t) || (this._dragging = !1)
    }

    function Ed(t) {
        var e = Fd("zoomOnMouseWheel", t, this._opt), n = Fd("moveOnMouseWheel", t, this._opt), i = t.wheelDelta,
            r = Math.abs(i), o = t.offsetX, a = t.offsetY;
        if (0 !== i && (e || n)) {
            if (e) {
                var s = r > 3 ? 1.4 : r > 1 ? 1.2 : 1.1;
                Rd(this, "zoom", "zoomOnMouseWheel", t, {scale: i > 0 ? s : 1 / s, originX: o, originY: a})
            }
            if (n) {
                var l = Math.abs(i);
                Rd(this, "scrollMove", "moveOnMouseWheel", t, {
                    scrollDelta: (i > 0 ? 1 : -1) * (l > 3 ? .4 : l > 1 ? .15 : .05),
                    originX: o,
                    originY: a
                })
            }
        }
    }

    function Nd(t) {
        Dd(this._zr, "globalPan") || Rd(this, "zoom", null, t, {
            scale: t.pinchScale > 1 ? 1.1 : 1 / 1.1,
            originX: t.pinchX,
            originY: t.pinchY
        })
    }

    function Rd(t, e, n, i, r) {
        t.pointerChecker && t.pointerChecker(i, r.originX, r.originY) && (bg(i.event), Bd(t, e, n, i, r))
    }

    function Bd(t, e, n, i, r) {
        r.isAvailableBehavior = m(Fd, null, n, i), t.trigger(e, r)
    }

    function Fd(t, e, n) {
        var i = n[t];
        return !t || i && (!_(i) || e.event[i + "Key"])
    }

    function Vd(t, e) {
        var n = Gd(t), i = e.dataZoomId, r = e.coordId;
        d(n, function (t, n) {
            var o = t.dataZoomInfos;
            o[i] && l(e.allCoordIds, r) < 0 && (delete o[i], t.count--)
        }), Ud(n);
        var o = n[r];
        o || ((o = n[r] = {
            coordId: r,
            dataZoomInfos: {},
            count: 0
        }).controller = Zd(t, o), o.dispatchAction = v(Xd, t)), !o.dataZoomInfos[i] && o.count++, o.dataZoomInfos[i] = e;
        var a = Yd(o.dataZoomInfos);
        o.controller.enable(a.controlType, a.opt), o.controller.setPointerChecker(e.containsPoint), wa(o, "dispatchAction", e.dataZoomModel.get("throttle", !0), "fixRate")
    }

    function Hd(t, e) {
        var n = Gd(t);
        d(n, function (t) {
            t.controller.dispose();
            var n = t.dataZoomInfos;
            n[e] && (delete n[e], t.count--)
        }), Ud(n)
    }

    function Wd(t) {
        return t.type + "\0_" + t.id
    }

    function Gd(t) {
        var e = t.getZr();
        return e[DM] || (e[DM] = {})
    }

    function Zd(t, e) {
        var n = new Pd(t.getZr());
        return d(["pan", "zoom", "scrollMove"], function (t) {
            n.on(t, function (n) {
                var i = [];
                d(e.dataZoomInfos, function (r) {
                    if (n.isAvailableBehavior(r.dataZoomModel.option)) {
                        var o = (r.getRange || {})[t], a = o && o(e.controller, n);
                        !r.dataZoomModel.get("disabled", !0) && a && i.push({
                            dataZoomId: r.dataZoomId,
                            start: a[0],
                            end: a[1]
                        })
                    }
                }), i.length && e.dispatchAction(i)
            })
        }), n
    }

    function Ud(t) {
        d(t, function (e, n) {
            e.count || (e.controller.dispose(), delete t[n])
        })
    }

    function Xd(t, e) {
        t.dispatchAction({type: "dataZoom", batch: e})
    }

    function Yd(t) {
        var e, n = {type_true: 2, type_move: 1, type_false: 0, type_undefined: -1}, i = !0;
        return d(t, function (t) {
            var r = t.dataZoomModel, o = !r.get("disabled", !0) && (!r.get("zoomLock", !0) || "move");
            n["type_" + o] > n["type_" + e] && (e = o), i &= r.get("preventDefaultMouseMove", !0)
        }), {
            controlType: e,
            opt: {zoomOnMouseWheel: !0, moveOnMouseMove: !0, moveOnMouseWheel: !0, preventDefaultMouseMove: !!i}
        }
    }

    function jd(t) {
        return function (e, n, i, r) {
            var o = this._range, a = o.slice(), s = e.axisModels[0];
            if (s) {
                var l = t(a, s, e, n, i, r);
                return yM(l, a, [0, 100], "all"), this._range = a, o[0] !== a[0] || o[1] !== a[1] ? a : void 0
            }
        }
    }

    function qd(t, e) {
        zM[t] = e
    }

    function $d(t) {
        return zM[t]
    }

    function Kd(t) {
        return 0 === t.indexOf("my")
    }

    function Qd(t) {
        this.model = t
    }

    function Jd(t) {
        this.model = t
    }

    function tf(t) {
        var e = {}, n = [], i = [];
        return t.eachRawSeries(function (t) {
            var r = t.coordinateSystem;
            if (!r || "cartesian2d" !== r.type && "polar" !== r.type) n.push(t); else {
                var o = r.getBaseAxis();
                if ("category" === o.type) {
                    var a = o.dim + "_" + o.index;
                    e[a] || (e[a] = {categoryAxis: o, valueAxis: r.getOtherAxis(o), series: []}, i.push({
                        axisDim: o.dim,
                        axisIndex: o.index
                    })), e[a].series.push(t)
                } else n.push(t)
            }
        }), {seriesGroupByCategoryAxis: e, other: n, meta: i}
    }

    function ef(t) {
        var e = [];
        return d(t, function (t, n) {
            var i = t.categoryAxis, r = t.valueAxis.dim, o = [" "].concat(f(t.series, function (t) {
                return t.name
            })), a = [i.model.getCategories()];
            d(t.series, function (t) {
                a.push(t.getRawData().mapArray(r, function (t) {
                    return t
                }))
            });
            for (var s = [o.join(GM)], l = 0; l < a[0].length; l++) {
                for (var h = [], u = 0; u < a.length; u++) h.push(a[u][l]);
                s.push(h.join(GM))
            }
            e.push(s.join("\n"))
        }), e.join("\n\n" + WM + "\n\n")
    }

    function nf(t) {
        return f(t, function (t) {
            var e = t.getRawData(), n = [t.name], i = [];
            return e.each(e.dimensions, function () {
                for (var t = arguments.length, r = arguments[t - 1], o = e.getName(r), a = 0; a < t - 1; a++) i[a] = arguments[a];
                n.push((o ? o + GM : "") + i.join(GM))
            }), n.join("\n")
        }).join("\n\n" + WM + "\n\n")
    }

    function rf(t) {
        var e = tf(t);
        return {
            value: g([ef(e.seriesGroupByCategoryAxis), nf(e.other)], function (t) {
                return t.replace(/[\n\t\s]/g, "")
            }).join("\n\n" + WM + "\n\n"), meta: e.meta
        }
    }

    function of(t) {
        return t.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
    }

    function af(t) {
        if (t.slice(0, t.indexOf("\n")).indexOf(GM) >= 0) return !0
    }

    function sf(t) {
        for (var e = t.split(/\n+/g), n = [], i = f(of(e.shift()).split(ZM), function (t) {
            return {name: t, data: []}
        }), r = 0; r < e.length; r++) {
            var o = of(e[r]).split(ZM);
            n.push(o.shift());
            for (var a = 0; a < o.length; a++) i[a] && (i[a].data[r] = o[a])
        }
        return {series: i, categories: n}
    }

    function lf(t) {
        for (var e = t.split(/\n+/g), n = of(e.shift()), i = [], r = 0; r < e.length; r++) {
            var o, a = of(e[r]).split(ZM), s = "", l = !1;
            isNaN(a[0]) ? (l = !0, s = a[0], a = a.slice(1), i[r] = {
                name: s,
                value: []
            }, o = i[r].value) : o = i[r] = [];
            for (var h = 0; h < a.length; h++) o.push(+a[h]);
            1 === o.length && (l ? i[r].value = o[0] : i[r] = o[0])
        }
        return {name: n, data: i}
    }

    function hf(t, e) {
        var n = {series: []};
        return d(t.split(new RegExp("\n*" + WM + "\n*", "g")), function (t, i) {
            if (af(t)) {
                var r = sf(t), o = e[i], a = o.axisDim + "Axis";
                o && (n[a] = n[a] || [], n[a][o.axisIndex] = {data: r.categories}, n.series = n.series.concat(r.series))
            } else {
                r = lf(t);
                n.series.push(r)
            }
        }), n
    }

    function uf(t) {
        this._dom = null, this.model = t
    }

    function cf(t, e) {
        return f(t, function (t, n) {
            var i = e && e[n];
            return w(i) && !y(i) ? (w(t) && !y(t) && (t = t.value), a({value: t}, i)) : t
        })
    }

    function df(t) {
        xg.call(this), this._zr = t, this.group = new am, this._brushType, this._brushOption, this._panels, this._track = [], this._dragging, this._covers = [], this._creatingCover, this._creatingPanel, this._enableGlobalPan, this._uid = "brushController_" + rI++, this._handlers = {}, XM(oI, function (t, e) {
            this._handlers[e] = m(t, this)
        }, this)
    }

    function ff(t, e) {
        var r = t._zr;
        t._enableGlobalPan || Ad(r, tI, t._uid), XM(t._handlers, function (t, e) {
            r.on(e, t)
        }), t._brushType = e.brushType, t._brushOption = i(n(iI), e, !0)
    }

    function pf(t) {
        var e = t._zr;
        Cd(e, tI, t._uid), XM(t._handlers, function (t, n) {
            e.off(n, t)
        }), t._brushType = t._brushOption = null
    }

    function gf(t, e) {
        var n = aI[e.brushType].createCover(t, e);
        return n.__brushOption = e, yf(n, e), t.group.add(n), n
    }

    function mf(t, e) {
        var n = _f(e);
        return n.endCreating && (n.endCreating(t, e), yf(e, e.__brushOption)), e
    }

    function vf(t, e) {
        var n = e.__brushOption;
        _f(e).updateCoverShape(t, e, n.range, n)
    }

    function yf(t, e) {
        var n = e.z;
        null == n && (n = KM), t.traverse(function (t) {
            t.z = n, t.z2 = n
        })
    }

    function xf(t, e) {
        _f(e).updateCommon(t, e), vf(t, e)
    }

    function _f(t) {
        return aI[t.__brushOption.brushType]
    }

    function wf(t, e, n) {
        var i = t._panels;
        if (!i) return !0;
        var r, o = t._transform;
        return XM(i, function (t) {
            t.isTargetByCursor(e, n, o) && (r = t)
        }), r
    }

    function bf(t, e) {
        var n = t._panels;
        if (!n) return !0;
        var i = e.__brushOption.panelId;
        return null == i || n[i]
    }

    function Sf(t) {
        var e = t._covers, n = e.length;
        return XM(e, function (e) {
            t.group.remove(e)
        }, t), e.length = 0, !!n
    }

    function Mf(t, e) {
        var i = YM(t._covers, function (t) {
            var e = t.__brushOption, i = n(e.range);
            return {brushType: e.brushType, panelId: e.panelId, range: i}
        });
        t.trigger("brush", i, {isEnd: !!e.isEnd, removeOnClick: !!e.removeOnClick})
    }

    function If(t) {
        var e = t._track;
        if (!e.length) return !1;
        var n = e[e.length - 1], i = e[0], r = n[0] - i[0], o = n[1] - i[1];
        return $M(r * r + o * o, .5) > QM
    }

    function Tf(t) {
        var e = t.length - 1;
        return e < 0 && (e = 0), [t[0], t[e]]
    }

    function Af(t, e, n, i) {
        var r = new am;
        return r.add(new My({
            name: "main",
            style: Pf(n),
            silent: !0,
            draggable: !0,
            cursor: "move",
            drift: UM(t, e, r, "nswe"),
            ondragend: UM(Mf, e, {isEnd: !0})
        })), XM(i, function (n) {
            r.add(new My({
                name: n,
                style: {opacity: 0},
                draggable: !0,
                silent: !0,
                invisible: !0,
                drift: UM(t, e, r, n),
                ondragend: UM(Mf, e, {isEnd: !0})
            }))
        }), r
    }

    function Cf(t, e, n, i) {
        var r = i.brushStyle.lineWidth || 0, o = qM(r, JM), a = n[0][0], s = n[1][0], l = a - r / 2, h = s - r / 2,
            u = n[0][1], c = n[1][1], d = u - o + r / 2, f = c - o + r / 2, p = u - a, g = c - s, m = p + r, v = g + r;
        kf(t, e, "main", a, s, p, g), i.transformable && (kf(t, e, "w", l, h, o, v), kf(t, e, "e", d, h, o, v), kf(t, e, "n", l, h, m, o), kf(t, e, "s", l, f, m, o), kf(t, e, "nw", l, h, o, o), kf(t, e, "ne", d, h, o, o), kf(t, e, "sw", l, f, o, o), kf(t, e, "se", d, f, o, o))
    }

    function Df(t, e) {
        var n = e.__brushOption, i = n.transformable, r = e.childAt(0);
        r.useStyle(Pf(n)), r.attr({
            silent: !i,
            cursor: i ? "move" : "default"
        }), XM(["w", "e", "n", "s", "se", "sw", "ne", "nw"], function (n) {
            var r = e.childOfName(n), o = zf(t, n);
            r && r.attr({silent: !i, invisible: !i, cursor: i ? nI[o] + "-resize" : null})
        })
    }

    function kf(t, e, n, i, r, o, a) {
        var s = e.childOfName(n);
        s && s.setShape(Ff(Bf(t, e, [[i, r], [i + o, r + a]])))
    }

    function Pf(t) {
        return a({strokeNoScale: !0}, t.brushStyle)
    }

    function Lf(t, e, n, i) {
        var r = [jM(t, n), jM(e, i)], o = [qM(t, n), qM(e, i)];
        return [[r[0], o[0]], [r[1], o[1]]]
    }

    function Of(t) {
        return xr(t.group)
    }

    function zf(t, e) {
        if (e.length > 1) return ("e" === (i = [zf(t, (e = e.split(""))[0]), zf(t, e[1])])[0] || "w" === i[0]) && i.reverse(), i.join("");
        var n = {left: "w", right: "e", top: "n", bottom: "s"},
            i = wr({w: "left", e: "right", n: "top", s: "bottom"}[e], Of(t));
        return n[i]
    }

    function Ef(t, e, n, i, r, o, a, s) {
        var l = i.__brushOption, h = t(l.range), u = Rf(n, o, a);
        XM(r.split(""), function (t) {
            var e = eI[t];
            h[e[0]][e[1]] += u[e[0]]
        }), l.range = e(Lf(h[0][0], h[1][0], h[0][1], h[1][1])), xf(n, i), Mf(n, {isEnd: !1})
    }

    function Nf(t, e, n, i, r) {
        var o = e.__brushOption.range, a = Rf(t, n, i);
        XM(o, function (t) {
            t[0] += a[0], t[1] += a[1]
        }), xf(t, e), Mf(t, {isEnd: !1})
    }

    function Rf(t, e, n) {
        var i = t.group, r = i.transformCoordToLocal(e, n), o = i.transformCoordToLocal(0, 0);
        return [r[0] - o[0], r[1] - o[1]]
    }

    function Bf(t, e, i) {
        var r = bf(t, e);
        return r && !0 !== r ? r.clipPath(i, t._transform) : n(i)
    }

    function Ff(t) {
        var e = jM(t[0][0], t[1][0]), n = jM(t[0][1], t[1][1]);
        return {x: e, y: n, width: qM(t[0][0], t[1][0]) - e, height: qM(t[0][1], t[1][1]) - n}
    }

    function Vf(t, e, n) {
        if (t._brushType) {
            var i = t._zr, r = t._covers, o = wf(t, e, n);
            if (!t._dragging) for (var a = 0; a < r.length; a++) {
                var s = r[a].__brushOption;
                if (o && (!0 === o || s.panelId === o.panelId) && aI[s.brushType].contain(r[a], n[0], n[1])) return
            }
            o && i.setCursorStyle("crosshair")
        }
    }

    function Hf(t) {
        var e = t.event;
        e.preventDefault && e.preventDefault()
    }

    function Wf(t, e, n) {
        return t.childOfName("main").contain(e, n)
    }

    function Gf(t, e, i, r) {
        var o, a = t._creatingCover, s = t._creatingPanel, l = t._brushOption;
        if (t._track.push(i.slice()), If(t) || a) {
            if (s && !a) {
                "single" === l.brushMode && Sf(t);
                var h = n(l);
                h.brushType = Zf(h.brushType, s), h.panelId = !0 === s ? null : s.panelId, a = t._creatingCover = gf(t, h), t._covers.push(a)
            }
            if (a) {
                var u = aI[Zf(t._brushType, s)];
                a.__brushOption.range = u.getCreatingRange(Bf(t, a, t._track)), r && (mf(t, a), u.updateCommon(t, a)), vf(t, a), o = {isEnd: r}
            }
        } else r && "single" === l.brushMode && l.removeOnClick && wf(t, e, i) && Sf(t) && (o = {
            isEnd: r,
            removeOnClick: !0
        });
        return o
    }

    function Zf(t, e) {
        return "auto" === t ? e.defaultBrushType : t
    }

    function Uf(t) {
        if (this._dragging) {
            Hf(t);
            var e = Gf(this, t, this.group.transformCoordToLocal(t.offsetX, t.offsetY), !0);
            this._dragging = !1, this._track = [], this._creatingCover = null, e && Mf(this, e)
        }
    }

    function Xf(t) {
        return {
            createCover: function (e, n) {
                return Af(UM(Ef, function (e) {
                    var n = [e, [0, 100]];
                    return t && n.reverse(), n
                }, function (e) {
                    return e[t]
                }), e, n, [["w", "e"], ["n", "s"]][t])
            }, getCreatingRange: function (e) {
                var n = Tf(e);
                return [jM(n[0][t], n[1][t]), qM(n[0][t], n[1][t])]
            }, updateCoverShape: function (e, n, i, r) {
                var o, a = bf(e, n);
                if (!0 !== a && a.getLinearBrushOtherExtent) o = a.getLinearBrushOtherExtent(t, e._transform); else {
                    var s = e._zr;
                    o = [0, [s.getWidth(), s.getHeight()][1 - t]]
                }
                var l = [i, o];
                t && l.reverse(), Cf(e, n, l, r)
            }, updateCommon: Df, contain: Wf
        }
    }

    function Yf(t, e, n) {
        var i = e.getComponentByElement(t.topTarget), r = i && i.coordinateSystem;
        return i && i !== n && !sI[i.mainType] && r && r.model !== n
    }

    function jf(t) {
        return t = Kf(t), function (e, n) {
            return Sr(e, t)
        }
    }

    function qf(t, e) {
        return t = Kf(t), function (n) {
            var i = null != e ? e : n, r = i ? t.width : t.height, o = i ? t.x : t.y;
            return [o, o + (r || 0)]
        }
    }

    function $f(t, e, n) {
        return t = Kf(t), function (i, r, o) {
            return t.contain(r[0], r[1]) && !Yf(i, e, n)
        }
    }

    function Kf(t) {
        return se.create(t)
    }

    function Qf(t, e, n) {
        var i = this._targetInfoList = [], r = {}, o = tp(e, t);
        lI(pI, function (t, e) {
            (!n || !n.include || hI(n.include, e) >= 0) && t(o, i, r)
        })
    }

    function Jf(t) {
        return t[0] > t[1] && t.reverse(), t
    }

    function tp(t, e) {
        return zn(t, e, {includeMainTypes: dI})
    }

    function ep(t, e, n, i) {
        var r = n.getAxis(["x", "y"][t]), o = Jf(f([0, 1], function (t) {
            return e ? r.coordToData(r.toLocalCoord(i[t])) : r.toGlobalCoord(r.dataToCoord(i[t]))
        })), a = [];
        return a[t] = o, a[1 - t] = [NaN, NaN], {values: o, xyMinMax: a}
    }

    function np(t, e, n, i) {
        return [e[0] - i[t] * n[0], e[1] - i[t] * n[1]]
    }

    function ip(t, e) {
        var n = rp(t), i = rp(e), r = [n[0] / i[0], n[1] / i[1]];
        return isNaN(r[0]) && (r[0] = 1), isNaN(r[1]) && (r[1] = 1), r
    }

    function rp(t) {
        return t ? [t[0][1] - t[0][0], t[1][1] - t[1][0]] : [NaN, NaN]
    }

    function op(t, e) {
        var n = hp(t);
        xI(e, function (e, i) {
            for (var r = n.length - 1; r >= 0 && !n[r][i]; r--) ;
            if (r < 0) {
                var o = t.queryComponents({mainType: "dataZoom", subType: "select", id: i})[0];
                if (o) {
                    var a = o.getPercentRange();
                    n[0][i] = {dataZoomId: i, start: a[0], end: a[1]}
                }
            }
        }), n.push(e)
    }

    function ap(t) {
        var e = hp(t), n = e[e.length - 1];
        e.length > 1 && e.pop();
        var i = {};
        return xI(n, function (t, n) {
            for (var r = e.length - 1; r >= 0; r--) if (t = e[r][n]) {
                i[n] = t;
                break
            }
        }), i
    }

    function sp(t) {
        t[_I] = null
    }

    function lp(t) {
        return hp(t).length
    }

    function hp(t) {
        var e = t[_I];
        return e || (e = t[_I] = [{}]), e
    }

    function up(t, e, n) {
        (this._brushController = new df(n.getZr())).on("brush", m(this._onBrush, this)).mount(), this._isZoomActive
    }

    function cp(t) {
        var e = {};
        return d(["xAxisIndex", "yAxisIndex"], function (n) {
            e[n] = t[n], null == e[n] && (e[n] = "all"), (!1 === e[n] || "none" === e[n]) && (e[n] = [])
        }), e
    }

    function dp(t, e) {
        t.setIconStatus("back", lp(e) > 1 ? "emphasis" : "normal")
    }

    function fp(t, e, n, i, r) {
        var o = n._isZoomActive;
        i && "takeGlobalCursor" === i.type && (o = "dataZoomSelect" === i.key && i.dataZoomSelectActive), n._isZoomActive = o, t.setIconStatus("zoom", o ? "emphasis" : "normal");
        var a = new Qf(cp(t.option), e, {include: ["grid"]});
        n._brushController.setPanels(a.makePanelOpts(r, function (t) {
            return t.xAxisDeclared && !t.yAxisDeclared ? "lineX" : !t.xAxisDeclared && t.yAxisDeclared ? "lineY" : "rect"
        })).enableBrush(!!o && {brushType: "auto", brushStyle: {lineWidth: 0, fill: "rgba(0,0,0,0.2)"}})
    }

    function pp(t) {
        this.model = t
    }

    function gp(t) {
        return AI(t)
    }

    function mp() {
        if (!kI && PI) {
            kI = !0;
            var t = PI.styleSheets;
            t.length < 31 ? PI.createStyleSheet().addRule(".zrvml", "behavior:url(#default#VML)") : t[0].addRule(".zrvml", "behavior:url(#default#VML)")
        }
    }

    function vp(t) {
        return parseInt(t, 10)
    }

    function yp(t, e) {
        mp(), this.root = t, this.storage = e;
        var n = document.createElement("div"), i = document.createElement("div");
        n.style.cssText = "display:inline-block;overflow:hidden;position:relative;width:300px;height:150px;", i.style.cssText = "position:absolute;left:0;top:0;", t.appendChild(n), this._vmlRoot = i, this._vmlViewport = n, this.resize();
        var r = e.delFromStorage, o = e.addToStorage;
        e.delFromStorage = function (t) {
            r.call(e, t), t && t.onRemove && t.onRemove(i)
        }, e.addToStorage = function (t) {
            t.onAdd && t.onAdd(i), o.call(e, t)
        }, this._firstPaint = !0
    }

    function xp(t) {
        return function () {
            tm('In IE8.0 VML mode painter not support method "' + t + '"')
        }
    }

    function _p(t) {
        return document.createElementNS(cT, t)
    }

    function wp(t) {
        return gT(1e4 * t) / 1e4
    }

    function bp(t) {
        return t < wT && t > -wT
    }

    function Sp(t, e) {
        var n = e ? t.textFill : t.fill;
        return null != n && n !== pT
    }

    function Mp(t, e) {
        var n = e ? t.textStroke : t.stroke;
        return null != n && n !== pT
    }

    function Ip(t, e) {
        e && Tp(t, "transform", "matrix(" + fT.call(e, ",") + ")")
    }

    function Tp(t, e, n) {
        (!n || "linear" !== n.type && "radial" !== n.type) && t.setAttribute(e, n)
    }

    function Ap(t, e, n) {
        t.setAttributeNS("http://www.w3.org/1999/xlink", e, n)
    }

    function Cp(t, e, n, i) {
        if (Sp(e, n)) {
            var r = n ? e.textFill : e.fill;
            r = "transparent" === r ? pT : r, "none" !== t.getAttribute("clip-path") && r === pT && (r = "rgba(0, 0, 0, 0.002)"), Tp(t, "fill", r), Tp(t, "fill-opacity", null != e.fillOpacity ? e.fillOpacity * e.opacity : e.opacity)
        } else Tp(t, "fill", pT);
        if (Mp(e, n)) {
            var o = n ? e.textStroke : e.stroke;
            Tp(t, "stroke", o = "transparent" === o ? pT : o), Tp(t, "stroke-width", (n ? e.textStrokeWidth : e.lineWidth) / (!n && e.strokeNoScale ? i.getLineScale() : 1)), Tp(t, "paint-order", n ? "stroke" : "fill"), Tp(t, "stroke-opacity", null != e.strokeOpacity ? e.strokeOpacity : e.opacity), e.lineDash ? (Tp(t, "stroke-dasharray", e.lineDash.join(",")), Tp(t, "stroke-dashoffset", gT(e.lineDashOffset || 0))) : Tp(t, "stroke-dasharray", ""), e.lineCap && Tp(t, "stroke-linecap", e.lineCap), e.lineJoin && Tp(t, "stroke-linejoin", e.lineJoin), e.miterLimit && Tp(t, "stroke-miterlimit", e.miterLimit)
        } else Tp(t, "stroke", pT)
    }

    function Dp(t) {
        for (var e = [], n = t.data, i = t.len(), r = 0; r < i;) {
            var o = "", a = 0;
            switch (n[r++]) {
                case dT.M:
                    o = "M", a = 2;
                    break;
                case dT.L:
                    o = "L", a = 2;
                    break;
                case dT.Q:
                    o = "Q", a = 4;
                    break;
                case dT.C:
                    o = "C", a = 6;
                    break;
                case dT.A:
                    var s = n[r++], l = n[r++], h = n[r++], u = n[r++], c = n[r++], d = n[r++], f = n[r++], p = n[r++],
                        g = Math.abs(d), m = bp(g - xT) && !bp(g), v = !1;
                    v = g >= xT || !bp(g) && (d > -yT && d < 0 || d > yT) == !!p;
                    var y = wp(s + h * vT(c)), x = wp(l + u * mT(c));
                    m && (d = p ? xT - 1e-4 : 1e-4 - xT, v = !0, 9 === r && e.push("M", y, x));
                    var _ = wp(s + h * vT(c + d)), w = wp(l + u * mT(c + d));
                    e.push("A", wp(h), wp(u), gT(f * _T), +v, +p, _, w);
                    break;
                case dT.Z:
                    o = "Z";
                    break;
                case dT.R:
                    var _ = wp(n[r++]), w = wp(n[r++]), b = wp(n[r++]), S = wp(n[r++]);
                    e.push("M", _, w, "L", _ + b, w, "L", _ + b, w + S, "L", _, w + S, "L", _, w)
            }
            o && e.push(o);
            for (var M = 0; M < a; M++) e.push(wp(n[r++]))
        }
        return e.join(" ")
    }

    function kp(t) {
        return "middle" === t ? "middle" : "bottom" === t ? "after-edge" : "hanging"
    }

    function Pp() {
    }

    function Lp(t, e, n, i) {
        for (var r = 0, o = e.length, a = 0, s = 0; r < o; r++) {
            var l = e[r];
            if (l.removed) {
                for (var h = [], u = s; u < s + l.count; u++) h.push(u);
                l.indices = h, s += l.count
            } else {
                for (var h = [], u = a; u < a + l.count; u++) h.push(u);
                l.indices = h, a += l.count, l.added || (s += l.count)
            }
        }
        return e
    }

    function Op(t) {
        return {newPos: t.newPos, components: t.components.slice(0)}
    }

    function zp(t, e, n, i, r) {
        this._zrId = t, this._svgRoot = e, this._tagNames = "string" == typeof n ? [n] : n, this._markLabel = i, this._domName = r || "_dom", this.nextId = 0
    }

    function Ep(t, e) {
        zp.call(this, t, e, ["linearGradient", "radialGradient"], "__gradient_in_use__")
    }

    function Np(t, e) {
        zp.call(this, t, e, "clipPath", "__clippath_in_use__")
    }

    function Rp(t, e) {
        zp.call(this, t, e, ["filter"], "__filter_in_use__", "_shadowDom")
    }

    function Bp(t) {
        return t && (t.shadowBlur || t.shadowOffsetX || t.shadowOffsetY || t.textShadowBlur || t.textShadowOffsetX || t.textShadowOffsetY)
    }

    function Fp(t) {
        return parseInt(t, 10)
    }

    function Vp(t) {
        return t instanceof Ii ? bT : t instanceof hn ? ST : t instanceof dy ? MT : bT
    }

    function Hp(t, e) {
        return e && t && e.parentNode !== t
    }

    function Wp(t, e, n) {
        if (Hp(t, e) && n) {
            var i = n.nextSibling;
            i ? t.insertBefore(e, i) : t.appendChild(e)
        }
    }

    function Gp(t, e) {
        if (Hp(t, e)) {
            var n = t.firstChild;
            n ? t.insertBefore(e, n) : t.appendChild(e)
        }
    }

    function Zp(t, e) {
        e && t && e.parentNode === t && t.removeChild(e)
    }

    function Up(t) {
        return t.__textSvgEl
    }

    function Xp(t) {
        return t.__svgEl
    }

    function Yp(t) {
        return function () {
            tm('In SVG mode painter not support method "' + t + '"')
        }
    }

    var jp = 2311, qp = function () {
            return jp++
        }, $p = {}, Kp = $p = "object" == typeof wx && "function" == typeof wx.getSystemInfoSync ? {
            browser: {},
            os: {},
            node: !1,
            wxa: !0,
            canvasSupported: !0,
            svgSupported: !1,
            touchEventsSupported: !0,
            domSupported: !1
        } : "undefined" == typeof document && "undefined" != typeof self ? {
            browser: {},
            os: {},
            node: !1,
            worker: !0,
            canvasSupported: !0,
            domSupported: !1
        } : "undefined" == typeof navigator ? {
            browser: {},
            os: {},
            node: !0,
            worker: !1,
            canvasSupported: !0,
            svgSupported: !0,
            domSupported: !1
        } : function (t) {
            var e = {}, n = {}, i = t.match(/Firefox\/([\d.]+)/),
                r = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/), o = t.match(/Edge\/([\d.]+)/),
                a = /micromessenger/i.test(t);
            return i && (n.firefox = !0, n.version = i[1]), r && (n.ie = !0, n.version = r[1]), o && (n.edge = !0, n.version = o[1]), a && (n.weChat = !0), {
                browser: n,
                os: e,
                node: !1,
                canvasSupported: !!document.createElement("canvas").getContext,
                svgSupported: "undefined" != typeof SVGRect,
                touchEventsSupported: "ontouchstart" in window && !n.ie && !n.edge,
                pointerEventsSupported: "onpointerdown" in window && (n.edge || n.ie && n.version >= 11),
                domSupported: "undefined" != typeof document
            }
        }(navigator.userAgent), Qp = {
            "[object Function]": 1,
            "[object RegExp]": 1,
            "[object Date]": 1,
            "[object Error]": 1,
            "[object CanvasGradient]": 1,
            "[object CanvasPattern]": 1,
            "[object Image]": 1,
            "[object Canvas]": 1
        }, Jp = {
            "[object Int8Array]": 1,
            "[object Uint8Array]": 1,
            "[object Uint8ClampedArray]": 1,
            "[object Int16Array]": 1,
            "[object Uint16Array]": 1,
            "[object Int32Array]": 1,
            "[object Uint32Array]": 1,
            "[object Float32Array]": 1,
            "[object Float64Array]": 1
        }, tg = Object.prototype.toString, eg = Array.prototype, ng = eg.forEach, ig = eg.filter, rg = eg.slice,
        og = eg.map, ag = eg.reduce, sg = {}, lg = function () {
            return sg.createCanvas()
        };
    sg.createCanvas = function () {
        return document.createElement("canvas")
    };
    var hg, ug = "__ec_primitive__";
    E.prototype = {
        constructor: E, get: function (t) {
            return this.data.hasOwnProperty(t) ? this.data[t] : null
        }, set: function (t, e) {
            return this.data[t] = e
        }, each: function (t, e) {
            void 0 !== e && (t = m(t, e));
            for (var n in this.data) this.data.hasOwnProperty(n) && t(this.data[n], n)
        }, removeKey: function (t) {
            delete this.data[t]
        }
    };
    var cg = (Object.freeze || Object)({
            $override: e,
            clone: n,
            merge: i,
            mergeAll: r,
            extend: o,
            defaults: a,
            createCanvas: lg,
            getContext: s,
            indexOf: l,
            inherits: h,
            mixin: u,
            isArrayLike: c,
            each: d,
            map: f,
            reduce: p,
            filter: g,
            find: function (t, e, n) {
                if (t && e) for (var i = 0, r = t.length; i < r; i++) if (e.call(n, t[i], i, t)) return t[i]
            },
            bind: m,
            curry: v,
            isArray: y,
            isFunction: x,
            isString: _,
            isObject: w,
            isBuiltInObject: b,
            isTypedArray: S,
            isDom: M,
            eqNaN: I,
            retrieve: T,
            retrieve2: A,
            retrieve3: C,
            slice: D,
            normalizeCssArray: k,
            assert: P,
            trim: L,
            setAsPrimitive: O,
            isPrimitive: z,
            createHashMap: N,
            concatArray: function (t, e) {
                for (var n = new t.constructor(t.length + e.length), i = 0; i < t.length; i++) n[i] = t[i];
                var r = t.length;
                for (i = 0; i < e.length; i++) n[i + r] = e[i];
                return n
            },
            noop: R
        }), dg = "undefined" == typeof Float32Array ? Array : Float32Array, fg = Z, pg = U, gg = j, mg = q,
        vg = (Object.freeze || Object)({
            create: B,
            copy: F,
            clone: V,
            set: function (t, e, n) {
                return t[0] = e, t[1] = n, t
            },
            add: H,
            scaleAndAdd: W,
            sub: G,
            len: Z,
            length: fg,
            lenSquare: U,
            lengthSquare: pg,
            mul: function (t, e, n) {
                return t[0] = e[0] * n[0], t[1] = e[1] * n[1], t
            },
            div: function (t, e, n) {
                return t[0] = e[0] / n[0], t[1] = e[1] / n[1], t
            },
            dot: function (t, e) {
                return t[0] * e[0] + t[1] * e[1]
            },
            scale: X,
            normalize: Y,
            distance: j,
            dist: gg,
            distanceSquare: q,
            distSquare: mg,
            negate: function (t, e) {
                return t[0] = -e[0], t[1] = -e[1], t
            },
            lerp: function (t, e, n, i) {
                return t[0] = e[0] + i * (n[0] - e[0]), t[1] = e[1] + i * (n[1] - e[1]), t
            },
            applyTransform: $,
            min: K,
            max: Q
        });
    J.prototype = {
        constructor: J, _dragStart: function (t) {
            var e = t.target;
            e && e.draggable && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.dispatchToElement(tt(e, t), "dragstart", t.event))
        }, _drag: function (t) {
            var e = this._draggingTarget;
            if (e) {
                var n = t.offsetX, i = t.offsetY, r = n - this._x, o = i - this._y;
                this._x = n, this._y = i, e.drift(r, o, t), this.dispatchToElement(tt(e, t), "drag", t.event);
                var a = this.findHover(n, i, e).target, s = this._dropTarget;
                this._dropTarget = a, e !== a && (s && a !== s && this.dispatchToElement(tt(s, t), "dragleave", t.event), a && a !== s && this.dispatchToElement(tt(a, t), "dragenter", t.event))
            }
        }, _dragEnd: function (t) {
            var e = this._draggingTarget;
            e && (e.dragging = !1), this.dispatchToElement(tt(e, t), "dragend", t.event), this._dropTarget && this.dispatchToElement(tt(this._dropTarget, t), "drop", t.event), this._draggingTarget = null, this._dropTarget = null
        }
    };
    var yg = Array.prototype.slice, xg = function (t) {
        this._$handlers = {}, this._$eventProcessor = t
    };
    xg.prototype = {
        constructor: xg, one: function (t, e, n, i) {
            return nt(this, t, e, n, i, !0)
        }, on: function (t, e, n, i) {
            return nt(this, t, e, n, i, !1)
        }, isSilent: function (t) {
            var e = this._$handlers;
            return !e[t] || !e[t].length
        }, off: function (t, e) {
            var n = this._$handlers;
            if (!t) return this._$handlers = {}, this;
            if (e) {
                if (n[t]) {
                    for (var i = [], r = 0, o = n[t].length; r < o; r++) n[t][r].h !== e && i.push(n[t][r]);
                    n[t] = i
                }
                n[t] && 0 === n[t].length && delete n[t]
            } else delete n[t];
            return this
        }, trigger: function (t) {
            var e = this._$handlers[t], n = this._$eventProcessor;
            if (e) {
                var i = arguments, r = i.length;
                r > 3 && (i = yg.call(i, 1));
                for (var o = e.length, a = 0; a < o;) {
                    var s = e[a];
                    if (n && n.filter && null != s.query && !n.filter(t, s.query)) a++; else {
                        switch (r) {
                            case 1:
                                s.h.call(s.ctx);
                                break;
                            case 2:
                                s.h.call(s.ctx, i[1]);
                                break;
                            case 3:
                                s.h.call(s.ctx, i[1], i[2]);
                                break;
                            default:
                                s.h.apply(s.ctx, i)
                        }
                        s.one ? (e.splice(a, 1), o--) : a++
                    }
                }
            }
            return n && n.afterTrigger && n.afterTrigger(t), this
        }, triggerWithContext: function (t) {
            var e = this._$handlers[t], n = this._$eventProcessor;
            if (e) {
                var i = arguments, r = i.length;
                r > 4 && (i = yg.call(i, 1, i.length - 1));
                for (var o = i[i.length - 1], a = e.length, s = 0; s < a;) {
                    var l = e[s];
                    if (n && n.filter && null != l.query && !n.filter(t, l.query)) s++; else {
                        switch (r) {
                            case 1:
                                l.h.call(o);
                                break;
                            case 2:
                                l.h.call(o, i[1]);
                                break;
                            case 3:
                                l.h.call(o, i[1], i[2]);
                                break;
                            default:
                                l.h.apply(o, i)
                        }
                        l.one ? (e.splice(s, 1), a--) : s++
                    }
                }
            }
            return n && n.afterTrigger && n.afterTrigger(t), this
        }
    };
    var _g = "undefined" != typeof window && !!window.addEventListener,
        wg = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, bg = _g ? function (t) {
            t.preventDefault(), t.stopPropagation(), t.cancelBubble = !0
        } : function (t) {
            t.returnValue = !1, t.cancelBubble = !0
        }, Sg = function () {
            this._track = []
        };
    Sg.prototype = {
        constructor: Sg, recognize: function (t, e, n) {
            return this._doTrack(t, e, n), this._recognize(t)
        }, clear: function () {
            return this._track.length = 0, this
        }, _doTrack: function (t, e, n) {
            var i = t.touches;
            if (i) {
                for (var r = {points: [], touches: [], target: e, event: t}, o = 0, a = i.length; o < a; o++) {
                    var s = i[o], l = rt(n, s, {});
                    r.points.push([l.zrX, l.zrY]), r.touches.push(s)
                }
                this._track.push(r)
            }
        }, _recognize: function (t) {
            for (var e in Mg) if (Mg.hasOwnProperty(e)) {
                var n = Mg[e](this._track, t);
                if (n) return n
            }
        }
    };
    var Mg = {
        pinch: function (t, e) {
            var n = t.length;
            if (n) {
                var i = (t[n - 1] || {}).points, r = (t[n - 2] || {}).points || i;
                if (r && r.length > 1 && i && i.length > 1) {
                    var o = ut(i) / ut(r);
                    !isFinite(o) && (o = 1), e.pinchScale = o;
                    var a = ct(i);
                    return e.pinchX = a[0], e.pinchY = a[1], {type: "pinch", target: t[0].target, event: e}
                }
            }
        }
    }, Ig = "silent";
    pt.prototype.dispose = function () {
    };
    var Tg = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
        Ag = function (t, e, n, i) {
            xg.call(this), this.storage = t, this.painter = e, this.painterRoot = i, n = n || new pt, this.proxy = null, this._hovered = {}, this._lastTouchMoment, this._lastX, this._lastY, this._gestureMgr, J.call(this), this.setHandlerProxy(n)
        };
    Ag.prototype = {
        constructor: Ag, setHandlerProxy: function (t) {
            this.proxy && this.proxy.dispose(), t && (d(Tg, function (e) {
                t.on && t.on(e, this[e], this)
            }, this), t.handler = this), this.proxy = t
        }, mousemove: function (t) {
            var e = t.zrX, n = t.zrY, i = this._hovered, r = i.target;
            r && !r.__zr && (r = (i = this.findHover(i.x, i.y)).target);
            var o = this._hovered = this.findHover(e, n), a = o.target, s = this.proxy;
            s.setCursor && s.setCursor(a ? a.cursor : "default"), r && a !== r && this.dispatchToElement(i, "mouseout", t), this.dispatchToElement(o, "mousemove", t), a && a !== r && this.dispatchToElement(o, "mouseover", t)
        }, mouseout: function (t) {
            this.dispatchToElement(this._hovered, "mouseout", t);
            var e, n = t.toElement || t.relatedTarget;
            do {
                n = n && n.parentNode
            } while (n && 9 !== n.nodeType && !(e = n === this.painterRoot));
            !e && this.trigger("globalout", {event: t})
        }, resize: function (t) {
            this._hovered = {}
        }, dispatch: function (t, e) {
            var n = this[t];
            n && n.call(this, e)
        }, dispose: function () {
            this.proxy.dispose(), this.storage = this.proxy = this.painter = null
        }, setCursorStyle: function (t) {
            var e = this.proxy;
            e.setCursor && e.setCursor(t)
        }, dispatchToElement: function (t, e, n) {
            var i = (t = t || {}).target;
            if (!i || !i.silent) {
                for (var r = "on" + e, o = dt(e, t, n); i && (i[r] && (o.cancelBubble = i[r].call(i, o)), i.trigger(e, o), i = i.parent, !o.cancelBubble);) ;
                o.cancelBubble || (this.trigger(e, o), this.painter && this.painter.eachOtherLayer(function (t) {
                    "function" == typeof t[r] && t[r].call(t, o), t.trigger && t.trigger(e, o)
                }))
            }
        }, findHover: function (t, e, n) {
            for (var i = this.storage.getDisplayList(), r = {x: t, y: e}, o = i.length - 1; o >= 0; o--) {
                var a;
                if (i[o] !== n && !i[o].ignore && (a = gt(i[o], t, e)) && (!r.topTarget && (r.topTarget = i[o]), a !== Ig)) {
                    r.target = i[o];
                    break
                }
            }
            return r
        }, processGesture: function (t, e) {
            this._gestureMgr || (this._gestureMgr = new Sg);
            var n = this._gestureMgr;
            "start" === e && n.clear();
            var i = n.recognize(t, this.findHover(t.zrX, t.zrY, null).target, this.proxy.dom);
            if ("end" === e && n.clear(), i) {
                var r = i.type;
                t.gestureEvent = r, this.dispatchToElement({target: i.target}, r, i.event)
            }
        }
    }, d(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function (t) {
        Ag.prototype[t] = function (e) {
            var n = this.findHover(e.zrX, e.zrY), i = n.target;
            if ("mousedown" === t) this._downEl = i, this._downPoint = [e.zrX, e.zrY], this._upEl = i; else if ("mouseup" === t) this._upEl = i; else if ("click" === t) {
                if (this._downEl !== this._upEl || !this._downPoint || gg(this._downPoint, [e.zrX, e.zrY]) > 4) return;
                this._downPoint = null
            }
            this.dispatchToElement(n, t, e)
        }
    }), u(Ag, xg), u(Ag, J);
    var Cg = "undefined" == typeof Float32Array ? Array : Float32Array, Dg = (Object.freeze || Object)({
        create: mt,
        identity: vt,
        copy: yt,
        mul: xt,
        translate: _t,
        rotate: wt,
        scale: bt,
        invert: St,
        clone: function (t) {
            var e = mt();
            return yt(e, t), e
        }
    }), kg = vt, Pg = 5e-5, Lg = function (t) {
        (t = t || {}).position || (this.position = [0, 0]), null == t.rotation && (this.rotation = 0), t.scale || (this.scale = [1, 1]), this.origin = this.origin || null
    }, Og = Lg.prototype;
    Og.transform = null, Og.needLocalTransform = function () {
        return Mt(this.rotation) || Mt(this.position[0]) || Mt(this.position[1]) || Mt(this.scale[0] - 1) || Mt(this.scale[1] - 1)
    };
    var zg = [];
    Og.updateTransform = function () {
        var t = this.parent, e = t && t.transform, n = this.needLocalTransform(), i = this.transform;
        if (n || e) {
            i = i || mt(), n ? this.getLocalTransform(i) : kg(i), e && (n ? xt(i, t.transform, i) : yt(i, t.transform)), this.transform = i;
            var r = this.globalScaleRatio;
            if (null != r && 1 !== r) {
                this.getGlobalScale(zg);
                var o = zg[0] < 0 ? -1 : 1, a = zg[1] < 0 ? -1 : 1, s = ((zg[0] - o) * r + o) / zg[0] || 0,
                    l = ((zg[1] - a) * r + a) / zg[1] || 0;
                i[0] *= s, i[1] *= s, i[2] *= l, i[3] *= l
            }
            this.invTransform = this.invTransform || mt(), St(this.invTransform, i)
        } else i && kg(i)
    }, Og.getLocalTransform = function (t) {
        return Lg.getLocalTransform(this, t)
    }, Og.setTransform = function (t) {
        var e = this.transform, n = t.dpr || 1;
        e ? t.setTransform(n * e[0], n * e[1], n * e[2], n * e[3], n * e[4], n * e[5]) : t.setTransform(n, 0, 0, n, 0, 0)
    }, Og.restoreTransform = function (t) {
        var e = t.dpr || 1;
        t.setTransform(e, 0, 0, e, 0, 0)
    };
    var Eg = [], Ng = mt();
    Og.setLocalTransform = function (t) {
        if (t) {
            var e = t[0] * t[0] + t[1] * t[1], n = t[2] * t[2] + t[3] * t[3], i = this.position, r = this.scale;
            Mt(e - 1) && (e = Math.sqrt(e)), Mt(n - 1) && (n = Math.sqrt(n)), t[0] < 0 && (e = -e), t[3] < 0 && (n = -n), i[0] = t[4], i[1] = t[5], r[0] = e, r[1] = n, this.rotation = Math.atan2(-t[1] / n, t[0] / e)
        }
    }, Og.decomposeTransform = function () {
        if (this.transform) {
            var t = this.parent, e = this.transform;
            t && t.transform && (xt(Eg, t.invTransform, e), e = Eg);
            var n = this.origin;
            n && (n[0] || n[1]) && (Ng[4] = n[0], Ng[5] = n[1], xt(Eg, e, Ng), Eg[4] -= n[0], Eg[5] -= n[1], e = Eg), this.setLocalTransform(e)
        }
    }, Og.getGlobalScale = function (t) {
        var e = this.transform;
        return t = t || [], e ? (t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1]), t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3]), e[0] < 0 && (t[0] = -t[0]), e[3] < 0 && (t[1] = -t[1]), t) : (t[0] = 1, t[1] = 1, t)
    }, Og.transformCoordToLocal = function (t, e) {
        var n = [t, e], i = this.invTransform;
        return i && $(n, n, i), n
    }, Og.transformCoordToGlobal = function (t, e) {
        var n = [t, e], i = this.transform;
        return i && $(n, n, i), n
    }, Lg.getLocalTransform = function (t, e) {
        kg(e = e || []);
        var n = t.origin, i = t.scale || [1, 1], r = t.rotation || 0, o = t.position || [0, 0];
        return n && (e[4] -= n[0], e[5] -= n[1]), bt(e, e, i), r && wt(e, e, r), n && (e[4] += n[0], e[5] += n[1]), e[4] += o[0], e[5] += o[1], e
    };
    var Rg = {
        linear: function (t) {
            return t
        }, quadraticIn: function (t) {
            return t * t
        }, quadraticOut: function (t) {
            return t * (2 - t)
        }, quadraticInOut: function (t) {
            return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
        }, cubicIn: function (t) {
            return t * t * t
        }, cubicOut: function (t) {
            return --t * t * t + 1
        }, cubicInOut: function (t) {
            return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
        }, quarticIn: function (t) {
            return t * t * t * t
        }, quarticOut: function (t) {
            return 1 - --t * t * t * t
        }, quarticInOut: function (t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
        }, quinticIn: function (t) {
            return t * t * t * t * t
        }, quinticOut: function (t) {
            return --t * t * t * t * t + 1
        }, quinticInOut: function (t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
        }, sinusoidalIn: function (t) {
            return 1 - Math.cos(t * Math.PI / 2)
        }, sinusoidalOut: function (t) {
            return Math.sin(t * Math.PI / 2)
        }, sinusoidalInOut: function (t) {
            return .5 * (1 - Math.cos(Math.PI * t))
        }, exponentialIn: function (t) {
            return 0 === t ? 0 : Math.pow(1024, t - 1)
        }, exponentialOut: function (t) {
            return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
        }, exponentialInOut: function (t) {
            return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        }, circularIn: function (t) {
            return 1 - Math.sqrt(1 - t * t)
        }, circularOut: function (t) {
            return Math.sqrt(1 - --t * t)
        }, circularInOut: function (t) {
            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        }, elasticIn: function (t) {
            var e, n = .1;
            return 0 === t ? 0 : 1 === t ? 1 : (!n || n < 1 ? (n = 1, e = .1) : e = .4 * Math.asin(1 / n) / (2 * Math.PI), -n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / .4))
        }, elasticOut: function (t) {
            var e, n = .1;
            return 0 === t ? 0 : 1 === t ? 1 : (!n || n < 1 ? (n = 1, e = .1) : e = .4 * Math.asin(1 / n) / (2 * Math.PI), n * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / .4) + 1)
        }, elasticInOut: function (t) {
            var e, n = .1;
            return 0 === t ? 0 : 1 === t ? 1 : (!n || n < 1 ? (n = 1, e = .1) : e = .4 * Math.asin(1 / n) / (2 * Math.PI), (t *= 2) < 1 ? n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / .4) * -.5 : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / .4) * .5 + 1)
        }, backIn: function (t) {
            var e = 1.70158;
            return t * t * ((e + 1) * t - e)
        }, backOut: function (t) {
            var e = 1.70158;
            return --t * t * ((e + 1) * t + e) + 1
        }, backInOut: function (t) {
            var e = 2.5949095;
            return (t *= 2) < 1 ? t * t * ((e + 1) * t - e) * .5 : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
        }, bounceIn: function (t) {
            return 1 - Rg.bounceOut(1 - t)
        }, bounceOut: function (t) {
            return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }, bounceInOut: function (t) {
            return t < .5 ? .5 * Rg.bounceIn(2 * t) : .5 * Rg.bounceOut(2 * t - 1) + .5
        }
    };
    It.prototype = {
        constructor: It, step: function (t, e) {
            if (this._initialized || (this._startTime = t + this._delay, this._initialized = !0), this._paused) this._pausedTime += e; else {
                var n = (t - this._startTime - this._pausedTime) / this._life;
                if (!(n < 0)) {
                    n = Math.min(n, 1);
                    var i = this.easing, r = "string" == typeof i ? Rg[i] : i, o = "function" == typeof r ? r(n) : n;
                    return this.fire("frame", o), 1 === n ? this.loop ? (this.restart(t), "restart") : (this._needsRemove = !0, "destroy") : null
                }
            }
        }, restart: function (t) {
            var e = (t - this._startTime - this._pausedTime) % this._life;
            this._startTime = t - e + this.gap, this._pausedTime = 0, this._needsRemove = !1
        }, fire: function (t, e) {
            this[t = "on" + t] && this[t](this._target, e)
        }, pause: function () {
            this._paused = !0
        }, resume: function () {
            this._paused = !1
        }
    };
    var Bg = function () {
        this.head = null, this.tail = null, this._len = 0
    }, Fg = Bg.prototype;
    Fg.insert = function (t) {
        var e = new Vg(t);
        return this.insertEntry(e), e
    }, Fg.insertEntry = function (t) {
        this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, this._len++
    }, Fg.remove = function (t) {
        var e = t.prev, n = t.next;
        e ? e.next = n : this.head = n, n ? n.prev = e : this.tail = e, t.next = t.prev = null, this._len--
    }, Fg.len = function () {
        return this._len
    }, Fg.clear = function () {
        this.head = this.tail = null, this._len = 0
    };
    var Vg = function (t) {
        this.value = t, this.next, this.prev
    }, Hg = function (t) {
        this._list = new Bg, this._map = {}, this._maxSize = t || 10, this._lastRemovedEntry = null
    }, Wg = Hg.prototype;
    Wg.put = function (t, e) {
        var n = this._list, i = this._map, r = null;
        if (null == i[t]) {
            var o = n.len(), a = this._lastRemovedEntry;
            if (o >= this._maxSize && o > 0) {
                var s = n.head;
                n.remove(s), delete i[s.key], r = s.value, this._lastRemovedEntry = s
            }
            a ? a.value = e : a = new Vg(e), a.key = t, n.insertEntry(a), i[t] = a
        }
        return r
    }, Wg.get = function (t) {
        var e = this._map[t], n = this._list;
        if (null != e) return e !== n.tail && (n.remove(e), n.insertEntry(e)), e.value
    }, Wg.clear = function () {
        this._list.clear(), this._map = {}
    };
    var Gg = {
        transparent: [0, 0, 0, 0],
        aliceblue: [240, 248, 255, 1],
        antiquewhite: [250, 235, 215, 1],
        aqua: [0, 255, 255, 1],
        aquamarine: [127, 255, 212, 1],
        azure: [240, 255, 255, 1],
        beige: [245, 245, 220, 1],
        bisque: [255, 228, 196, 1],
        black: [0, 0, 0, 1],
        blanchedalmond: [255, 235, 205, 1],
        blue: [0, 0, 255, 1],
        blueviolet: [138, 43, 226, 1],
        brown: [165, 42, 42, 1],
        burlywood: [222, 184, 135, 1],
        cadetblue: [95, 158, 160, 1],
        chartreuse: [127, 255, 0, 1],
        chocolate: [210, 105, 30, 1],
        coral: [255, 127, 80, 1],
        cornflowerblue: [100, 149, 237, 1],
        cornsilk: [255, 248, 220, 1],
        crimson: [220, 20, 60, 1],
        cyan: [0, 255, 255, 1],
        darkblue: [0, 0, 139, 1],
        darkcyan: [0, 139, 139, 1],
        darkgoldenrod: [184, 134, 11, 1],
        darkgray: [169, 169, 169, 1],
        darkgreen: [0, 100, 0, 1],
        darkgrey: [169, 169, 169, 1],
        darkkhaki: [189, 183, 107, 1],
        darkmagenta: [139, 0, 139, 1],
        darkolivegreen: [85, 107, 47, 1],
        darkorange: [255, 140, 0, 1],
        darkorchid: [153, 50, 204, 1],
        darkred: [139, 0, 0, 1],
        darksalmon: [233, 150, 122, 1],
        darkseagreen: [143, 188, 143, 1],
        darkslateblue: [72, 61, 139, 1],
        darkslategray: [47, 79, 79, 1],
        darkslategrey: [47, 79, 79, 1],
        darkturquoise: [0, 206, 209, 1],
        darkviolet: [148, 0, 211, 1],
        deeppink: [255, 20, 147, 1],
        deepskyblue: [0, 191, 255, 1],
        dimgray: [105, 105, 105, 1],
        dimgrey: [105, 105, 105, 1],
        dodgerblue: [30, 144, 255, 1],
        firebrick: [178, 34, 34, 1],
        floralwhite: [255, 250, 240, 1],
        forestgreen: [34, 139, 34, 1],
        fuchsia: [255, 0, 255, 1],
        gainsboro: [220, 220, 220, 1],
        ghostwhite: [248, 248, 255, 1],
        gold: [255, 215, 0, 1],
        goldenrod: [218, 165, 32, 1],
        gray: [128, 128, 128, 1],
        green: [0, 128, 0, 1],
        greenyellow: [173, 255, 47, 1],
        grey: [128, 128, 128, 1],
        honeydew: [240, 255, 240, 1],
        hotpink: [255, 105, 180, 1],
        indianred: [205, 92, 92, 1],
        indigo: [75, 0, 130, 1],
        ivory: [255, 255, 240, 1],
        khaki: [240, 230, 140, 1],
        lavender: [230, 230, 250, 1],
        lavenderblush: [255, 240, 245, 1],
        lawngreen: [124, 252, 0, 1],
        lemonchiffon: [255, 250, 205, 1],
        lightblue: [173, 216, 230, 1],
        lightcoral: [240, 128, 128, 1],
        lightcyan: [224, 255, 255, 1],
        lightgoldenrodyellow: [250, 250, 210, 1],
        lightgray: [211, 211, 211, 1],
        lightgreen: [144, 238, 144, 1],
        lightgrey: [211, 211, 211, 1],
        lightpink: [255, 182, 193, 1],
        lightsalmon: [255, 160, 122, 1],
        lightseagreen: [32, 178, 170, 1],
        lightskyblue: [135, 206, 250, 1],
        lightslategray: [119, 136, 153, 1],
        lightslategrey: [119, 136, 153, 1],
        lightsteelblue: [176, 196, 222, 1],
        lightyellow: [255, 255, 224, 1],
        lime: [0, 255, 0, 1],
        limegreen: [50, 205, 50, 1],
        linen: [250, 240, 230, 1],
        magenta: [255, 0, 255, 1],
        maroon: [128, 0, 0, 1],
        mediumaquamarine: [102, 205, 170, 1],
        mediumblue: [0, 0, 205, 1],
        mediumorchid: [186, 85, 211, 1],
        mediumpurple: [147, 112, 219, 1],
        mediumseagreen: [60, 179, 113, 1],
        mediumslateblue: [123, 104, 238, 1],
        mediumspringgreen: [0, 250, 154, 1],
        mediumturquoise: [72, 209, 204, 1],
        mediumvioletred: [199, 21, 133, 1],
        midnightblue: [25, 25, 112, 1],
        mintcream: [245, 255, 250, 1],
        mistyrose: [255, 228, 225, 1],
        moccasin: [255, 228, 181, 1],
        navajowhite: [255, 222, 173, 1],
        navy: [0, 0, 128, 1],
        oldlace: [253, 245, 230, 1],
        olive: [128, 128, 0, 1],
        olivedrab: [107, 142, 35, 1],
        orange: [255, 165, 0, 1],
        orangered: [255, 69, 0, 1],
        orchid: [218, 112, 214, 1],
        palegoldenrod: [238, 232, 170, 1],
        palegreen: [152, 251, 152, 1],
        paleturquoise: [175, 238, 238, 1],
        palevioletred: [219, 112, 147, 1],
        papayawhip: [255, 239, 213, 1],
        peachpuff: [255, 218, 185, 1],
        peru: [205, 133, 63, 1],
        pink: [255, 192, 203, 1],
        plum: [221, 160, 221, 1],
        powderblue: [176, 224, 230, 1],
        purple: [128, 0, 128, 1],
        red: [255, 0, 0, 1],
        rosybrown: [188, 143, 143, 1],
        royalblue: [65, 105, 225, 1],
        saddlebrown: [139, 69, 19, 1],
        salmon: [250, 128, 114, 1],
        sandybrown: [244, 164, 96, 1],
        seagreen: [46, 139, 87, 1],
        seashell: [255, 245, 238, 1],
        sienna: [160, 82, 45, 1],
        silver: [192, 192, 192, 1],
        skyblue: [135, 206, 235, 1],
        slateblue: [106, 90, 205, 1],
        slategray: [112, 128, 144, 1],
        slategrey: [112, 128, 144, 1],
        snow: [255, 250, 250, 1],
        springgreen: [0, 255, 127, 1],
        steelblue: [70, 130, 180, 1],
        tan: [210, 180, 140, 1],
        teal: [0, 128, 128, 1],
        thistle: [216, 191, 216, 1],
        tomato: [255, 99, 71, 1],
        turquoise: [64, 224, 208, 1],
        violet: [238, 130, 238, 1],
        wheat: [245, 222, 179, 1],
        white: [255, 255, 255, 1],
        whitesmoke: [245, 245, 245, 1],
        yellow: [255, 255, 0, 1],
        yellowgreen: [154, 205, 50, 1]
    }, Zg = new Hg(20), Ug = null, Xg = Ht, Yg = Wt, jg = (Object.freeze || Object)({
        parse: Nt,
        lift: Ft,
        toHex: Vt,
        fastLerp: Ht,
        fastMapToColor: Xg,
        lerp: Wt,
        mapToColor: Yg,
        modifyHSL: function (t, e, n, i) {
            if (t = Nt(t)) return t = Bt(t), null != e && (t[0] = At(e)), null != n && (t[1] = kt(n)), null != i && (t[2] = kt(i)), Zt(Rt(t), "rgba")
        },
        modifyAlpha: Gt,
        stringify: Zt
    }), qg = Array.prototype.slice, $g = function (t, e, n, i) {
        this._tracks = {}, this._target = t, this._loop = e || !1, this._getter = n || Ut, this._setter = i || Xt, this._clipCount = 0, this._delay = 0, this._doneList = [], this._onframeList = [], this._clipList = []
    };
    $g.prototype = {
        when: function (t, e) {
            var n = this._tracks;
            for (var i in e) if (e.hasOwnProperty(i)) {
                if (!n[i]) {
                    n[i] = [];
                    var r = this._getter(this._target, i);
                    if (null == r) continue;
                    0 !== t && n[i].push({time: 0, value: te(r)})
                }
                n[i].push({time: t, value: e[i]})
            }
            return this
        }, during: function (t) {
            return this._onframeList.push(t), this
        }, pause: function () {
            for (var t = 0; t < this._clipList.length; t++) this._clipList[t].pause();
            this._paused = !0
        }, resume: function () {
            for (var t = 0; t < this._clipList.length; t++) this._clipList[t].resume();
            this._paused = !1
        }, isPaused: function () {
            return !!this._paused
        }, _doneCallback: function () {
            this._tracks = {}, this._clipList.length = 0;
            for (var t = this._doneList, e = t.length, n = 0; n < e; n++) t[n].call(this)
        }, start: function (t, e) {
            var n, i = this, r = 0;
            for (var o in this._tracks) if (this._tracks.hasOwnProperty(o)) {
                var a = ie(this, t, function () {
                    --r || i._doneCallback()
                }, this._tracks[o], o, e);
                a && (this._clipList.push(a), r++, this.animation && this.animation.addClip(a), n = a)
            }
            if (n) {
                var s = n.onframe;
                n.onframe = function (t, e) {
                    s(t, e);
                    for (var n = 0; n < i._onframeList.length; n++) i._onframeList[n](t, e)
                }
            }
            return r || this._doneCallback(), this
        }, stop: function (t) {
            for (var e = this._clipList, n = this.animation, i = 0; i < e.length; i++) {
                var r = e[i];
                t && r.onframe(this._target, 1), n && n.removeClip(r)
            }
            e.length = 0
        }, delay: function (t) {
            return this._delay = t, this
        }, done: function (t) {
            return t && this._doneList.push(t), this
        }, getClips: function () {
            return this._clipList
        }
    };
    var Kg = 1;
    "undefined" != typeof window && (Kg = Math.max(window.devicePixelRatio || 1, 1));
    var Qg = Kg, Jg = function () {
    }, tm = Jg, em = function () {
        this.animators = []
    };
    em.prototype = {
        constructor: em, animate: function (t, e) {
            var n, i = !1, r = this, o = this.__zr;
            if (t) {
                var a = t.split("."), s = r;
                i = "shape" === a[0];
                for (var h = 0, u = a.length; h < u; h++) s && (s = s[a[h]]);
                s && (n = s)
            } else n = r;
            if (n) {
                var c = r.animators, d = new $g(n, e);
                return d.during(function (t) {
                    r.dirty(i)
                }).done(function () {
                    c.splice(l(c, d), 1)
                }), c.push(d), o && o.animation.addAnimator(d), d
            }
            tm('Property "' + t + '" is not existed in element ' + r.id)
        }, stopAnimation: function (t) {
            for (var e = this.animators, n = e.length, i = 0; i < n; i++) e[i].stop(t);
            return e.length = 0, this
        }, animateTo: function (t, e, n, i, r, o) {
            re(this, t, e, n, i, r, o)
        }, animateFrom: function (t, e, n, i, r, o) {
            re(this, t, e, n, i, r, o, !0)
        }
    };
    var nm = function (t) {
        Lg.call(this, t), xg.call(this, t), em.call(this, t), this.id = t.id || qp()
    };
    nm.prototype = {
        type: "element", name: "", __zr: null, ignore: !1, clipPath: null, isGroup: !1, drift: function (t, e) {
            switch (this.draggable) {
                case"horizontal":
                    e = 0;
                    break;
                case"vertical":
                    t = 0
            }
            var n = this.transform;
            n || (n = this.transform = [1, 0, 0, 1, 0, 0]), n[4] += t, n[5] += e, this.decomposeTransform(), this.dirty(!1)
        }, beforeUpdate: function () {
        }, afterUpdate: function () {
        }, update: function () {
            this.updateTransform()
        }, traverse: function (t, e) {
        }, attrKV: function (t, e) {
            if ("position" === t || "scale" === t || "origin" === t) {
                if (e) {
                    var n = this[t];
                    n || (n = this[t] = []), n[0] = e[0], n[1] = e[1]
                }
            } else this[t] = e
        }, hide: function () {
            this.ignore = !0, this.__zr && this.__zr.refresh()
        }, show: function () {
            this.ignore = !1, this.__zr && this.__zr.refresh()
        }, attr: function (t, e) {
            if ("string" == typeof t) this.attrKV(t, e); else if (w(t)) for (var n in t) t.hasOwnProperty(n) && this.attrKV(n, t[n]);
            return this.dirty(!1), this
        }, setClipPath: function (t) {
            var e = this.__zr;
            e && t.addSelfToZr(e), this.clipPath && this.clipPath !== t && this.removeClipPath(), this.clipPath = t, t.__zr = e, t.__clipTarget = this, this.dirty(!1)
        }, removeClipPath: function () {
            var t = this.clipPath;
            t && (t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__clipTarget = null, this.clipPath = null, this.dirty(!1))
        }, addSelfToZr: function (t) {
            this.__zr = t;
            var e = this.animators;
            if (e) for (var n = 0; n < e.length; n++) t.animation.addAnimator(e[n]);
            this.clipPath && this.clipPath.addSelfToZr(t)
        }, removeSelfFromZr: function (t) {
            this.__zr = null;
            var e = this.animators;
            if (e) for (var n = 0; n < e.length; n++) t.animation.removeAnimator(e[n]);
            this.clipPath && this.clipPath.removeSelfFromZr(t)
        }
    }, u(nm, em), u(nm, Lg), u(nm, xg);
    var im = $, rm = Math.min, om = Math.max;
    se.prototype = {
        constructor: se, union: function (t) {
            var e = rm(t.x, this.x), n = rm(t.y, this.y);
            this.width = om(t.x + t.width, this.x + this.width) - e, this.height = om(t.y + t.height, this.y + this.height) - n, this.x = e, this.y = n
        }, applyTransform: function () {
            var t = [], e = [], n = [], i = [];
            return function (r) {
                if (r) {
                    t[0] = n[0] = this.x, t[1] = i[1] = this.y, e[0] = i[0] = this.x + this.width, e[1] = n[1] = this.y + this.height, im(t, t, r), im(e, e, r), im(n, n, r), im(i, i, r), this.x = rm(t[0], e[0], n[0], i[0]), this.y = rm(t[1], e[1], n[1], i[1]);
                    var o = om(t[0], e[0], n[0], i[0]), a = om(t[1], e[1], n[1], i[1]);
                    this.width = o - this.x, this.height = a - this.y
                }
            }
        }(), calculateTransform: function (t) {
            var e = this, n = t.width / e.width, i = t.height / e.height, r = mt();
            return _t(r, r, [-e.x, -e.y]), bt(r, r, [n, i]), _t(r, r, [t.x, t.y]), r
        }, intersect: function (t) {
            if (!t) return !1;
            t instanceof se || (t = se.create(t));
            var e = this, n = e.x, i = e.x + e.width, r = e.y, o = e.y + e.height, a = t.x, s = t.x + t.width, l = t.y,
                h = t.y + t.height;
            return !(i < a || s < n || o < l || h < r)
        }, contain: function (t, e) {
            var n = this;
            return t >= n.x && t <= n.x + n.width && e >= n.y && e <= n.y + n.height
        }, clone: function () {
            return new se(this.x, this.y, this.width, this.height)
        }, copy: function (t) {
            this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height
        }, plain: function () {
            return {x: this.x, y: this.y, width: this.width, height: this.height}
        }
    }, se.create = function (t) {
        return new se(t.x, t.y, t.width, t.height)
    };
    var am = function (t) {
        t = t || {}, nm.call(this, t);
        for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
        this._children = [], this.__storage = null, this.__dirty = !0
    };
    am.prototype = {
        constructor: am, isGroup: !0, type: "group", silent: !1, children: function () {
            return this._children.slice()
        }, childAt: function (t) {
            return this._children[t]
        }, childOfName: function (t) {
            for (var e = this._children, n = 0; n < e.length; n++) if (e[n].name === t) return e[n]
        }, childCount: function () {
            return this._children.length
        }, add: function (t) {
            return t && t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)), this
        }, addBefore: function (t, e) {
            if (t && t !== this && t.parent !== this && e && e.parent === this) {
                var n = this._children, i = n.indexOf(e);
                i >= 0 && (n.splice(i, 0, t), this._doAdd(t))
            }
            return this
        }, _doAdd: function (t) {
            t.parent && t.parent.remove(t), t.parent = this;
            var e = this.__storage, n = this.__zr;
            e && e !== t.__storage && (e.addToStorage(t), t instanceof am && t.addChildrenToStorage(e)), n && n.refresh()
        }, remove: function (t) {
            var e = this.__zr, n = this.__storage, i = this._children, r = l(i, t);
            return r < 0 ? this : (i.splice(r, 1), t.parent = null, n && (n.delFromStorage(t), t instanceof am && t.delChildrenFromStorage(n)), e && e.refresh(), this)
        }, removeAll: function () {
            var t, e, n = this._children, i = this.__storage;
            for (e = 0; e < n.length; e++) t = n[e], i && (i.delFromStorage(t), t instanceof am && t.delChildrenFromStorage(i)), t.parent = null;
            return n.length = 0, this
        }, eachChild: function (t, e) {
            for (var n = this._children, i = 0; i < n.length; i++) {
                var r = n[i];
                t.call(e, r, i)
            }
            return this
        }, traverse: function (t, e) {
            for (var n = 0; n < this._children.length; n++) {
                var i = this._children[n];
                t.call(e, i), "group" === i.type && i.traverse(t, e)
            }
            return this
        }, addChildrenToStorage: function (t) {
            for (var e = 0; e < this._children.length; e++) {
                var n = this._children[e];
                t.addToStorage(n), n instanceof am && n.addChildrenToStorage(t)
            }
        }, delChildrenFromStorage: function (t) {
            for (var e = 0; e < this._children.length; e++) {
                var n = this._children[e];
                t.delFromStorage(n), n instanceof am && n.delChildrenFromStorage(t)
            }
        }, dirty: function () {
            return this.__dirty = !0, this.__zr && this.__zr.refresh(), this
        }, getBoundingRect: function (t) {
            for (var e = null, n = new se(0, 0, 0, 0), i = t || this._children, r = [], o = 0; o < i.length; o++) {
                var a = i[o];
                if (!a.ignore && !a.invisible) {
                    var s = a.getBoundingRect(), l = a.getLocalTransform(r);
                    l ? (n.copy(s), n.applyTransform(l), (e = e || n.clone()).union(n)) : (e = e || s.clone()).union(s)
                }
            }
            return e || n
        }
    }, h(am, nm);
    var sm = 32, lm = 7, hm = function () {
        this._roots = [], this._displayList = [], this._displayListLen = 0
    };
    hm.prototype = {
        constructor: hm, traverse: function (t, e) {
            for (var n = 0; n < this._roots.length; n++) this._roots[n].traverse(t, e)
        }, getDisplayList: function (t, e) {
            return e = e || !1, t && this.updateDisplayList(e), this._displayList
        }, updateDisplayList: function (t) {
            this._displayListLen = 0;
            for (var e = this._roots, n = this._displayList, i = 0, r = e.length; i < r; i++) this._updateAndAddDisplayable(e[i], null, t);
            n.length = this._displayListLen, Kp.canvasSupported && ge(n, me)
        }, _updateAndAddDisplayable: function (t, e, n) {
            if (!t.ignore || n) {
                t.beforeUpdate(), t.__dirty && t.update(), t.afterUpdate();
                var i = t.clipPath;
                if (i) {
                    e = e ? e.slice() : [];
                    for (var r = i, o = t; r;) r.parent = o, r.updateTransform(), e.push(r), o = r, r = r.clipPath
                }
                if (t.isGroup) {
                    for (var a = t._children, s = 0; s < a.length; s++) {
                        var l = a[s];
                        t.__dirty && (l.__dirty = !0), this._updateAndAddDisplayable(l, e, n)
                    }
                    t.__dirty = !1
                } else t.__clipPaths = e, this._displayList[this._displayListLen++] = t
            }
        }, addRoot: function (t) {
            t.__storage !== this && (t instanceof am && t.addChildrenToStorage(this), this.addToStorage(t), this._roots.push(t))
        }, delRoot: function (t) {
            if (null == t) {
                for (n = 0; n < this._roots.length; n++) {
                    var e = this._roots[n];
                    e instanceof am && e.delChildrenFromStorage(this)
                }
                return this._roots = [], this._displayList = [], void (this._displayListLen = 0)
            }
            if (t instanceof Array) for (var n = 0, i = t.length; n < i; n++) this.delRoot(t[n]); else {
                var r = l(this._roots, t);
                r >= 0 && (this.delFromStorage(t), this._roots.splice(r, 1), t instanceof am && t.delChildrenFromStorage(this))
            }
        }, addToStorage: function (t) {
            return t && (t.__storage = this, t.dirty(!1)), this
        }, delFromStorage: function (t) {
            return t && (t.__storage = null), this
        }, dispose: function () {
            this._renderList = this._roots = null
        }, displayableSortFunc: me
    };
    var um = {
            shadowBlur: 1,
            shadowOffsetX: 1,
            shadowOffsetY: 1,
            textShadowBlur: 1,
            textShadowOffsetX: 1,
            textShadowOffsetY: 1,
            textBoxShadowBlur: 1,
            textBoxShadowOffsetX: 1,
            textBoxShadowOffsetY: 1
        }, cm = function (t, e, n) {
            return um.hasOwnProperty(e) ? n *= t.dpr : n
        }, dm = {NONE: 0, STYLE_BIND: 1, PLAIN_TEXT: 2}, fm = 9,
        pm = [["shadowBlur", 0], ["shadowOffsetX", 0], ["shadowOffsetY", 0], ["shadowColor", "#000"], ["lineCap", "butt"], ["lineJoin", "miter"], ["miterLimit", 10]],
        gm = function (t) {
            this.extendFrom(t, !1)
        };
    gm.prototype = {
        constructor: gm,
        fill: "#000",
        stroke: null,
        opacity: 1,
        fillOpacity: null,
        strokeOpacity: null,
        lineDash: null,
        lineDashOffset: 0,
        shadowBlur: 0,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        lineWidth: 1,
        strokeNoScale: !1,
        text: null,
        font: null,
        textFont: null,
        fontStyle: null,
        fontWeight: null,
        fontSize: null,
        fontFamily: null,
        textTag: null,
        textFill: "#000",
        textStroke: null,
        textWidth: null,
        textHeight: null,
        textStrokeWidth: 0,
        textLineHeight: null,
        textPosition: "inside",
        textRect: null,
        textOffset: null,
        textAlign: null,
        textVerticalAlign: null,
        textDistance: 5,
        textShadowColor: "transparent",
        textShadowBlur: 0,
        textShadowOffsetX: 0,
        textShadowOffsetY: 0,
        textBoxShadowColor: "transparent",
        textBoxShadowBlur: 0,
        textBoxShadowOffsetX: 0,
        textBoxShadowOffsetY: 0,
        transformText: !1,
        textRotation: 0,
        textOrigin: null,
        textBackgroundColor: null,
        textBorderColor: null,
        textBorderWidth: 0,
        textBorderRadius: 0,
        textPadding: null,
        rich: null,
        truncate: null,
        blend: null,
        bind: function (t, e, n) {
            var i = this, r = n && n.style, o = !r || t.__attrCachedBy !== dm.STYLE_BIND;
            t.__attrCachedBy = dm.STYLE_BIND;
            for (var a = 0; a < pm.length; a++) {
                var s = pm[a], l = s[0];
                (o || i[l] !== r[l]) && (t[l] = cm(t, l, i[l] || s[1]))
            }
            if ((o || i.fill !== r.fill) && (t.fillStyle = i.fill), (o || i.stroke !== r.stroke) && (t.strokeStyle = i.stroke), (o || i.opacity !== r.opacity) && (t.globalAlpha = null == i.opacity ? 1 : i.opacity), (o || i.blend !== r.blend) && (t.globalCompositeOperation = i.blend || "source-over"), this.hasStroke()) {
                var h = i.lineWidth;
                t.lineWidth = h / (this.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1)
            }
        },
        hasFill: function () {
            var t = this.fill;
            return null != t && "none" !== t
        },
        hasStroke: function () {
            var t = this.stroke;
            return null != t && "none" !== t && this.lineWidth > 0
        },
        extendFrom: function (t, e) {
            if (t) for (var n in t) !t.hasOwnProperty(n) || !0 !== e && (!1 === e ? this.hasOwnProperty(n) : null == t[n]) || (this[n] = t[n])
        },
        set: function (t, e) {
            "string" == typeof t ? this[t] = e : this.extendFrom(t, !0)
        },
        clone: function () {
            var t = new this.constructor;
            return t.extendFrom(this, !0), t
        },
        getGradient: function (t, e, n) {
            for (var i = ("radial" === e.type ? ye : ve)(t, e, n), r = e.colorStops, o = 0; o < r.length; o++) i.addColorStop(r[o].offset, r[o].color);
            return i
        }
    };
    for (var mm = gm.prototype, vm = 0; vm < pm.length; vm++) {
        var ym = pm[vm];
        ym[0] in mm || (mm[ym[0]] = ym[1])
    }
    gm.getGradient = mm.getGradient;
    var xm = function (t, e) {
        this.image = t, this.repeat = e, this.type = "pattern"
    };
    xm.prototype.getCanvasPattern = function (t) {
        return t.createPattern(this.image, this.repeat || "repeat")
    };
    var _m = function (t, e, n) {
        var i;
        n = n || Qg, "string" == typeof t ? i = _e(t, e, n) : w(t) && (t = (i = t).id), this.id = t, this.dom = i;
        var r = i.style;
        r && (i.onselectstart = xe, r["-webkit-user-select"] = "none", r["user-select"] = "none", r["-webkit-touch-callout"] = "none", r["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)", r.padding = 0, r.margin = 0, r["border-width"] = 0), this.domBack = null, this.ctxBack = null, this.painter = e, this.config = null, this.clearColor = 0, this.motionBlur = !1, this.lastFrameAlpha = .7, this.dpr = n
    };
    _m.prototype = {
        constructor: _m,
        __dirty: !0,
        __used: !1,
        __drawIndex: 0,
        __startIndex: 0,
        __endIndex: 0,
        incremental: !1,
        getElementCount: function () {
            return this.__endIndex - this.__startIndex
        },
        initContext: function () {
            this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr
        },
        createBackBuffer: function () {
            var t = this.dpr;
            this.domBack = _e("back-" + this.id, this.painter, t), this.ctxBack = this.domBack.getContext("2d"), 1 !== t && this.ctxBack.scale(t, t)
        },
        resize: function (t, e) {
            var n = this.dpr, i = this.dom, r = i.style, o = this.domBack;
            r && (r.width = t + "px", r.height = e + "px"), i.width = t * n, i.height = e * n, o && (o.width = t * n, o.height = e * n, 1 !== n && this.ctxBack.scale(n, n))
        },
        clear: function (t, e) {
            var n = this.dom, i = this.ctx, r = n.width, o = n.height, e = e || this.clearColor,
                a = this.motionBlur && !t, s = this.lastFrameAlpha, l = this.dpr;
            if (a && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(n, 0, 0, r / l, o / l)), i.clearRect(0, 0, r, o), e && "transparent" !== e) {
                var h;
                e.colorStops ? (h = e.__canvasGradient || gm.getGradient(i, e, {
                    x: 0,
                    y: 0,
                    width: r,
                    height: o
                }), e.__canvasGradient = h) : e.image && (h = xm.prototype.getCanvasPattern.call(e, i)), i.save(), i.fillStyle = h || e, i.fillRect(0, 0, r, o), i.restore()
            }
            if (a) {
                var u = this.domBack;
                i.save(), i.globalAlpha = s, i.drawImage(u, 0, 0, r, o), i.restore()
            }
        }
    };
    var wm = "undefined" != typeof window && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function (t) {
            setTimeout(t, 16)
        }, bm = new Hg(50), Sm = {}, Mm = 0, Im = 5e3, Tm = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g, Am = "12px sans-serif",
        Cm = {};
    Cm.measureText = function (t, e) {
        var n = s();
        return n.font = e || Am, n.measureText(t)
    };
    var Dm = Am, km = {left: 1, right: 1, center: 1}, Pm = {top: 1, bottom: 1, middle: 1},
        Lm = [["textShadowBlur", "shadowBlur", 0], ["textShadowOffsetX", "shadowOffsetX", 0], ["textShadowOffsetY", "shadowOffsetY", 0], ["textShadowColor", "shadowColor", "transparent"]],
        Om = new se, zm = function () {
        };
    zm.prototype = {
        constructor: zm, drawRectText: function (t, e) {
            var n = this.style;
            e = n.textRect || e, this.__dirty && Ge(n);
            var i = n.text;
            if (null != i && (i += ""), sn(i, n)) {
                t.save();
                var r = this.transform;
                n.transformText ? this.setTransform(t) : r && (Om.copy(e), Om.applyTransform(r), e = Om), Ue(this, t, i, n, e, fm), t.restore()
            }
        }
    }, ln.prototype = {
        constructor: ln,
        type: "displayable",
        __dirty: !0,
        invisible: !1,
        z: 0,
        z2: 0,
        zlevel: 0,
        draggable: !1,
        dragging: !1,
        silent: !1,
        culling: !1,
        cursor: "pointer",
        rectHover: !1,
        progressive: !1,
        incremental: !1,
        globalScaleRatio: 1,
        beforeBrush: function (t) {
        },
        afterBrush: function (t) {
        },
        brush: function (t, e) {
        },
        getBoundingRect: function () {
        },
        contain: function (t, e) {
            return this.rectContain(t, e)
        },
        traverse: function (t, e) {
            t.call(e, this)
        },
        rectContain: function (t, e) {
            var n = this.transformCoordToLocal(t, e);
            return this.getBoundingRect().contain(n[0], n[1])
        },
        dirty: function () {
            this.__dirty = this.__dirtyText = !0, this._rect = null, this.__zr && this.__zr.refresh()
        },
        animateStyle: function (t) {
            return this.animate("style", t)
        },
        attrKV: function (t, e) {
            "style" !== t ? nm.prototype.attrKV.call(this, t, e) : this.style.set(e)
        },
        setStyle: function (t, e) {
            return this.style.set(t, e), this.dirty(!1), this
        },
        useStyle: function (t) {
            return this.style = new gm(t, this), this.dirty(!1), this
        }
    }, h(ln, nm), u(ln, zm), hn.prototype = {
        constructor: hn, type: "image", brush: function (t, e) {
            var n = this.style, i = n.image;
            n.bind(t, this, e);
            var r = this._image = be(i, this._image, this, this.onload);
            if (r && Me(r)) {
                var o = n.x || 0, a = n.y || 0, s = n.width, l = n.height, h = r.width / r.height;
                if (null == s && null != l ? s = l * h : null == l && null != s ? l = s / h : null == s && null == l && (s = r.width, l = r.height), this.setTransform(t), n.sWidth && n.sHeight) {
                    var u = n.sx || 0, c = n.sy || 0;
                    t.drawImage(r, u, c, n.sWidth, n.sHeight, o, a, s, l)
                } else if (n.sx && n.sy) {
                    var d = s - (u = n.sx), f = l - (c = n.sy);
                    t.drawImage(r, u, c, d, f, o, a, s, l)
                } else t.drawImage(r, o, a, s, l);
                null != n.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()))
            }
        }, getBoundingRect: function () {
            var t = this.style;
            return this._rect || (this._rect = new se(t.x || 0, t.y || 0, t.width || 0, t.height || 0)), this._rect
        }
    }, h(hn, ln);
    var Em = new se(0, 0, 0, 0), Nm = new se(0, 0, 0, 0), Rm = function (t, e, n) {
        this.type = "canvas";
        var i = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();
        this._opts = n = o({}, n || {}), this.dpr = n.devicePixelRatio || Qg, this._singleCanvas = i, this.root = t;
        var r = t.style;
        r && (r["-webkit-tap-highlight-color"] = "transparent", r["-webkit-user-select"] = r["user-select"] = r["-webkit-touch-callout"] = "none", t.innerHTML = ""), this.storage = e;
        var a = this._zlevelList = [], s = this._layers = {};
        if (this._layerConfig = {}, this._needsManuallyCompositing = !1, i) {
            var l = t.width, h = t.height;
            null != n.width && (l = n.width), null != n.height && (h = n.height), this.dpr = n.devicePixelRatio || 1, t.width = l * this.dpr, t.height = h * this.dpr, this._width = l, this._height = h;
            var u = new _m(t, this, this.dpr);
            u.__builtin__ = !0, u.initContext(), s[314159] = u, u.zlevel = 314159, a.push(314159), this._domRoot = t
        } else {
            this._width = this._getSize(0), this._height = this._getSize(1);
            var c = this._domRoot = gn(this._width, this._height);
            t.appendChild(c)
        }
        this._hoverlayer = null, this._hoverElements = []
    };
    Rm.prototype = {
        constructor: Rm, getType: function () {
            return "canvas"
        }, isSingleCanvas: function () {
            return this._singleCanvas
        }, getViewportRoot: function () {
            return this._domRoot
        }, getViewportRootOffset: function () {
            var t = this.getViewportRoot();
            if (t) return {offsetLeft: t.offsetLeft || 0, offsetTop: t.offsetTop || 0}
        }, refresh: function (t) {
            var e = this.storage.getDisplayList(!0), n = this._zlevelList;
            this._redrawId = Math.random(), this._paintList(e, t, this._redrawId);
            for (var i = 0; i < n.length; i++) {
                var r = n[i], o = this._layers[r];
                if (!o.__builtin__ && o.refresh) {
                    var a = 0 === i ? this._backgroundColor : null;
                    o.refresh(a)
                }
            }
            return this.refreshHover(), this
        }, addHover: function (t, e) {
            if (!t.__hoverMir) {
                var n = new t.constructor({style: t.style, shape: t.shape, z: t.z, z2: t.z2, silent: t.silent});
                return n.__from = t, t.__hoverMir = n, e && n.setStyle(e), this._hoverElements.push(n), n
            }
        }, removeHover: function (t) {
            var e = t.__hoverMir, n = this._hoverElements, i = l(n, e);
            i >= 0 && n.splice(i, 1), t.__hoverMir = null
        }, clearHover: function (t) {
            for (var e = this._hoverElements, n = 0; n < e.length; n++) {
                var i = e[n].__from;
                i && (i.__hoverMir = null)
            }
            e.length = 0
        }, refreshHover: function () {
            var t = this._hoverElements, e = t.length, n = this._hoverlayer;
            if (n && n.clear(), e) {
                ge(t, this.storage.displayableSortFunc), n || (n = this._hoverlayer = this.getLayer(1e5));
                var i = {};
                n.ctx.save();
                for (var r = 0; r < e;) {
                    var o = t[r], a = o.__from;
                    a && a.__zr ? (r++, a.invisible || (o.transform = a.transform, o.invTransform = a.invTransform, o.__clipPaths = a.__clipPaths, this._doPaintEl(o, n, !0, i))) : (t.splice(r, 1), a.__hoverMir = null, e--)
                }
                n.ctx.restore()
            }
        }, getHoverLayer: function () {
            return this.getLayer(1e5)
        }, _paintList: function (t, e, n) {
            if (this._redrawId === n) {
                e = e || !1, this._updateLayerStatus(t);
                var i = this._doPaintList(t, e);
                if (this._needsManuallyCompositing && this._compositeManually(), !i) {
                    var r = this;
                    wm(function () {
                        r._paintList(t, e, n)
                    })
                }
            }
        }, _compositeManually: function () {
            var t = this.getLayer(314159).ctx, e = this._domRoot.width, n = this._domRoot.height;
            t.clearRect(0, 0, e, n), this.eachBuiltinLayer(function (i) {
                i.virtual && t.drawImage(i.dom, 0, 0, e, n)
            })
        }, _doPaintList: function (t, e) {
            for (var n = [], i = 0; i < this._zlevelList.length; i++) {
                var r = this._zlevelList[i];
                (s = this._layers[r]).__builtin__ && s !== this._hoverlayer && (s.__dirty || e) && n.push(s)
            }
            for (var o = !0, a = 0; a < n.length; a++) {
                var s = n[a], l = s.ctx, h = {};
                l.save();
                var u = e ? s.__startIndex : s.__drawIndex, c = !e && s.incremental && Date.now, f = c && Date.now(),
                    p = s.zlevel === this._zlevelList[0] ? this._backgroundColor : null;
                if (s.__startIndex === s.__endIndex) s.clear(!1, p); else if (u === s.__startIndex) {
                    var g = t[u];
                    g.incremental && g.notClear && !e || s.clear(!1, p)
                }
                -1 === u && (console.error("For some unknown reason. drawIndex is -1"), u = s.__startIndex);
                for (var m = u; m < s.__endIndex; m++) {
                    var v = t[m];
                    if (this._doPaintEl(v, s, e, h), v.__dirty = v.__dirtyText = !1, c && Date.now() - f > 15) break
                }
                s.__drawIndex = m, s.__drawIndex < s.__endIndex && (o = !1), h.prevElClipPaths && l.restore(), l.restore()
            }
            return Kp.wxa && d(this._layers, function (t) {
                t && t.ctx && t.ctx.draw && t.ctx.draw()
            }), o
        }, _doPaintEl: function (t, e, n, i) {
            var r = e.ctx, o = t.transform;
            if ((e.__dirty || n) && !t.invisible && 0 !== t.style.opacity && (!o || o[0] || o[3]) && (!t.culling || !dn(t, this._width, this._height))) {
                var a = t.__clipPaths;
                i.prevElClipPaths && !fn(a, i.prevElClipPaths) || (i.prevElClipPaths && (e.ctx.restore(), i.prevElClipPaths = null, i.prevEl = null), a && (r.save(), pn(a, r), i.prevElClipPaths = a)), t.beforeBrush && t.beforeBrush(r), t.brush(r, i.prevEl || null), i.prevEl = t, t.afterBrush && t.afterBrush(r)
            }
        }, getLayer: function (t, e) {
            this._singleCanvas && !this._needsManuallyCompositing && (t = 314159);
            var n = this._layers[t];
            return n || ((n = new _m("zr_" + t, this, this.dpr)).zlevel = t, n.__builtin__ = !0, this._layerConfig[t] && i(n, this._layerConfig[t], !0), e && (n.virtual = e), this.insertLayer(t, n), n.initContext()), n
        }, insertLayer: function (t, e) {
            var n = this._layers, i = this._zlevelList, r = i.length, o = null, a = -1, s = this._domRoot;
            if (n[t]) tm("ZLevel " + t + " has been used already"); else if (cn(e)) {
                if (r > 0 && t > i[0]) {
                    for (a = 0; a < r - 1 && !(i[a] < t && i[a + 1] > t); a++) ;
                    o = n[i[a]]
                }
                if (i.splice(a + 1, 0, t), n[t] = e, !e.virtual) if (o) {
                    var l = o.dom;
                    l.nextSibling ? s.insertBefore(e.dom, l.nextSibling) : s.appendChild(e.dom)
                } else s.firstChild ? s.insertBefore(e.dom, s.firstChild) : s.appendChild(e.dom)
            } else tm("Layer of zlevel " + t + " is not valid")
        }, eachLayer: function (t, e) {
            var n, i, r = this._zlevelList;
            for (i = 0; i < r.length; i++) n = r[i], t.call(e, this._layers[n], n)
        }, eachBuiltinLayer: function (t, e) {
            var n, i, r, o = this._zlevelList;
            for (r = 0; r < o.length; r++) i = o[r], (n = this._layers[i]).__builtin__ && t.call(e, n, i)
        }, eachOtherLayer: function (t, e) {
            var n, i, r, o = this._zlevelList;
            for (r = 0; r < o.length; r++) i = o[r], (n = this._layers[i]).__builtin__ || t.call(e, n, i)
        }, getLayers: function () {
            return this._layers
        }, _updateLayerStatus: function (t) {
            function e(t) {
                n && (n.__endIndex !== t && (n.__dirty = !0), n.__endIndex = t)
            }

            if (this.eachBuiltinLayer(function (t, e) {
                t.__dirty = t.__used = !1
            }), this._singleCanvas) for (r = 1; r < t.length; r++) if ((a = t[r]).zlevel !== t[r - 1].zlevel || a.incremental) {
                this._needsManuallyCompositing = !0;
                break
            }
            for (var n = null, i = 0, r = 0; r < t.length; r++) {
                var o, a = t[r], s = a.zlevel;
                a.incremental ? ((o = this.getLayer(s + .001, this._needsManuallyCompositing)).incremental = !0, i = 1) : o = this.getLayer(s + (i > 0 ? .01 : 0), this._needsManuallyCompositing), o.__builtin__ || tm("ZLevel " + s + " has been used by unkown layer " + o.id), o !== n && (o.__used = !0, o.__startIndex !== r && (o.__dirty = !0), o.__startIndex = r, o.incremental ? o.__drawIndex = -1 : o.__drawIndex = r, e(r), n = o), a.__dirty && (o.__dirty = !0, o.incremental && o.__drawIndex < 0 && (o.__drawIndex = r))
            }
            e(r), this.eachBuiltinLayer(function (t, e) {
                !t.__used && t.getElementCount() > 0 && (t.__dirty = !0, t.__startIndex = t.__endIndex = t.__drawIndex = 0), t.__dirty && t.__drawIndex < 0 && (t.__drawIndex = t.__startIndex)
            })
        }, clear: function () {
            return this.eachBuiltinLayer(this._clearLayer), this
        }, _clearLayer: function (t) {
            t.clear()
        }, setBackgroundColor: function (t) {
            this._backgroundColor = t
        }, configLayer: function (t, e) {
            if (e) {
                var n = this._layerConfig;
                n[t] ? i(n[t], e, !0) : n[t] = e;
                for (var r = 0; r < this._zlevelList.length; r++) {
                    var o = this._zlevelList[r];
                    o !== t && o !== t + .01 || i(this._layers[o], n[t], !0)
                }
            }
        }, delLayer: function (t) {
            var e = this._layers, n = this._zlevelList, i = e[t];
            i && (i.dom.parentNode.removeChild(i.dom), delete e[t], n.splice(l(n, t), 1))
        }, resize: function (t, e) {
            if (this._domRoot.style) {
                var n = this._domRoot;
                n.style.display = "none";
                var i = this._opts;
                if (null != t && (i.width = t), null != e && (i.height = e), t = this._getSize(0), e = this._getSize(1), n.style.display = "", this._width !== t || e !== this._height) {
                    n.style.width = t + "px", n.style.height = e + "px";
                    for (var r in this._layers) this._layers.hasOwnProperty(r) && this._layers[r].resize(t, e);
                    d(this._progressiveLayers, function (n) {
                        n.resize(t, e)
                    }), this.refresh(!0)
                }
                this._width = t, this._height = e
            } else {
                if (null == t || null == e) return;
                this._width = t, this._height = e, this.getLayer(314159).resize(t, e)
            }
            return this
        }, clearLayer: function (t) {
            var e = this._layers[t];
            e && e.clear()
        }, dispose: function () {
            this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null
        }, getRenderedCanvas: function (t) {
            if (t = t || {}, this._singleCanvas && !this._compositeManually) return this._layers[314159].dom;
            var e = new _m("image", this, t.pixelRatio || this.dpr);
            if (e.initContext(), e.clear(!1, t.backgroundColor || this._backgroundColor), t.pixelRatio <= this.dpr) {
                this.refresh();
                var n = e.dom.width, i = e.dom.height, r = e.ctx;
                this.eachLayer(function (t) {
                    t.__builtin__ ? r.drawImage(t.dom, 0, 0, n, i) : t.renderToCanvas && (e.ctx.save(), t.renderToCanvas(e.ctx), e.ctx.restore())
                })
            } else for (var o = {}, a = this.storage.getDisplayList(!0), s = 0; s < a.length; s++) {
                var l = a[s];
                this._doPaintEl(l, e, !0, o)
            }
            return e.dom
        }, getWidth: function () {
            return this._width
        }, getHeight: function () {
            return this._height
        }, _getSize: function (t) {
            var e = this._opts, n = ["width", "height"][t], i = ["clientWidth", "clientHeight"][t],
                r = ["paddingLeft", "paddingTop"][t], o = ["paddingRight", "paddingBottom"][t];
            if (null != e[n] && "auto" !== e[n]) return parseFloat(e[n]);
            var a = this.root, s = document.defaultView.getComputedStyle(a);
            return (a[i] || un(s[n]) || un(a.style[n])) - (un(s[r]) || 0) - (un(s[o]) || 0) | 0
        }, pathToImage: function (t, e) {
            e = e || this.dpr;
            var n = document.createElement("canvas"), i = n.getContext("2d"), r = t.getBoundingRect(), o = t.style,
                a = o.shadowBlur * e, s = o.shadowOffsetX * e, l = o.shadowOffsetY * e,
                h = o.hasStroke() ? o.lineWidth : 0, u = Math.max(h / 2, -s + a), c = Math.max(h / 2, s + a),
                d = Math.max(h / 2, -l + a), f = Math.max(h / 2, l + a), p = r.width + u + c, g = r.height + d + f;
            n.width = p * e, n.height = g * e, i.scale(e, e), i.clearRect(0, 0, p, g), i.dpr = e;
            var m = {position: t.position, rotation: t.rotation, scale: t.scale};
            t.position = [u - r.x, d - r.y], t.rotation = 0, t.scale = [1, 1], t.updateTransform(), t && t.brush(i);
            var v = new hn({style: {x: 0, y: 0, image: n}});
            return null != m.position && (v.position = t.position = m.position), null != m.rotation && (v.rotation = t.rotation = m.rotation), null != m.scale && (v.scale = t.scale = m.scale), v
        }
    };
    var Bm = function (t) {
        t = t || {}, this.stage = t.stage || {}, this.onframe = t.onframe || function () {
        }, this._clips = [], this._running = !1, this._time, this._pausedTime, this._pauseStart, this._paused = !1, xg.call(this)
    };
    Bm.prototype = {
        constructor: Bm, addClip: function (t) {
            this._clips.push(t)
        }, addAnimator: function (t) {
            t.animation = this;
            for (var e = t.getClips(), n = 0; n < e.length; n++) this.addClip(e[n])
        }, removeClip: function (t) {
            var e = l(this._clips, t);
            e >= 0 && this._clips.splice(e, 1)
        }, removeAnimator: function (t) {
            for (var e = t.getClips(), n = 0; n < e.length; n++) this.removeClip(e[n]);
            t.animation = null
        }, _update: function () {
            for (var t = (new Date).getTime() - this._pausedTime, e = t - this._time, n = this._clips, i = n.length, r = [], o = [], a = 0; a < i; a++) {
                var s = n[a], l = s.step(t, e);
                l && (r.push(l), o.push(s))
            }
            for (a = 0; a < i;) n[a]._needsRemove ? (n[a] = n[i - 1], n.pop(), i--) : a++;
            i = r.length;
            for (a = 0; a < i; a++) o[a].fire(r[a]);
            this._time = t, this.onframe(e), this.trigger("frame", e), this.stage.update && this.stage.update()
        }, _startLoop: function () {
            function t() {
                e._running && (wm(t), !e._paused && e._update())
            }

            var e = this;
            this._running = !0, wm(t)
        }, start: function () {
            this._time = (new Date).getTime(), this._pausedTime = 0, this._startLoop()
        }, stop: function () {
            this._running = !1
        }, pause: function () {
            this._paused || (this._pauseStart = (new Date).getTime(), this._paused = !0)
        }, resume: function () {
            this._paused && (this._pausedTime += (new Date).getTime() - this._pauseStart, this._paused = !1)
        }, clear: function () {
            this._clips = []
        }, isFinished: function () {
            return !this._clips.length
        }, animate: function (t, e) {
            var n = new $g(t, (e = e || {}).loop, e.getter, e.setter);
            return this.addAnimator(n), n
        }
    }, u(Bm, xg);
    var Fm = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
        Vm = ["touchstart", "touchend", "touchmove"],
        Hm = {pointerdown: 1, pointerup: 1, pointermove: 1, pointerout: 1}, Wm = f(Fm, function (t) {
            var e = t.replace("mouse", "pointer");
            return Hm[e] ? e : t
        }), Gm = {
            mousemove: function (t) {
                t = at(this.dom, t), this.trigger("mousemove", t)
            }, mouseout: function (t) {
                var e = (t = at(this.dom, t)).toElement || t.relatedTarget;
                if (e !== this.dom) for (; e && 9 !== e.nodeType;) {
                    if (e === this.dom) return;
                    e = e.parentNode
                }
                this.trigger("mouseout", t)
            }, touchstart: function (t) {
                (t = at(this.dom, t)).zrByTouch = !0, this._lastTouchMoment = new Date, this.handler.processGesture(this, t, "start"), Gm.mousemove.call(this, t), Gm.mousedown.call(this, t), vn(this)
            }, touchmove: function (t) {
                (t = at(this.dom, t)).zrByTouch = !0, this.handler.processGesture(this, t, "change"), Gm.mousemove.call(this, t), vn(this)
            }, touchend: function (t) {
                (t = at(this.dom, t)).zrByTouch = !0, this.handler.processGesture(this, t, "end"), Gm.mouseup.call(this, t), +new Date - this._lastTouchMoment < 300 && Gm.click.call(this, t), vn(this)
            }, pointerdown: function (t) {
                Gm.mousedown.call(this, t)
            }, pointermove: function (t) {
                yn(t) || Gm.mousemove.call(this, t)
            }, pointerup: function (t) {
                Gm.mouseup.call(this, t)
            }, pointerout: function (t) {
                yn(t) || Gm.mouseout.call(this, t)
            }
        };
    d(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function (t) {
        Gm[t] = function (e) {
            e = at(this.dom, e), this.trigger(t, e)
        }
    });
    var Zm = _n.prototype;
    Zm.dispose = function () {
        for (var t = Fm.concat(Vm), e = 0; e < t.length; e++) {
            var n = t[e];
            lt(this.dom, mn(n), this._handlers[n])
        }
    }, Zm.setCursor = function (t) {
        this.dom.style && (this.dom.style.cursor = t || "default")
    }, u(_n, xg);
    var Um = !Kp.canvasSupported, Xm = {canvas: Rm}, Ym = {}, jm = function (t, e, n) {
        n = n || {}, this.dom = e, this.id = t;
        var i = this, r = new hm, o = n.renderer;
        if (Um) {
            if (!Xm.vml) throw new Error("You need to require 'zrender/vml/vml' to support IE8");
            o = "vml"
        } else o && Xm[o] || (o = "canvas");
        var a = new Xm[o](e, r, n, t);
        this.storage = r, this.painter = a;
        var s = Kp.node || Kp.worker ? null : new _n(a.getViewportRoot());
        this.handler = new Ag(r, a, s, a.root), this.animation = new Bm({stage: {update: m(this.flush, this)}}), this.animation.start(), this._needsRefresh;
        var l = r.delFromStorage, h = r.addToStorage;
        r.delFromStorage = function (t) {
            l.call(r, t), t && t.removeSelfFromZr(i)
        }, r.addToStorage = function (t) {
            h.call(r, t), t.addSelfToZr(i)
        }
    };
    jm.prototype = {
        constructor: jm, getId: function () {
            return this.id
        }, add: function (t) {
            this.storage.addRoot(t), this._needsRefresh = !0
        }, remove: function (t) {
            this.storage.delRoot(t), this._needsRefresh = !0
        }, configLayer: function (t, e) {
            this.painter.configLayer && this.painter.configLayer(t, e), this._needsRefresh = !0
        }, setBackgroundColor: function (t) {
            this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this._needsRefresh = !0
        }, refreshImmediately: function () {
            this._needsRefresh = !1, this.painter.refresh(), this._needsRefresh = !1
        }, refresh: function () {
            this._needsRefresh = !0
        }, flush: function () {
            var t;
            this._needsRefresh && (t = !0, this.refreshImmediately()), this._needsRefreshHover && (t = !0, this.refreshHoverImmediately()), t && this.trigger("rendered")
        }, addHover: function (t, e) {
            if (this.painter.addHover) {
                var n = this.painter.addHover(t, e);
                return this.refreshHover(), n
            }
        }, removeHover: function (t) {
            this.painter.removeHover && (this.painter.removeHover(t), this.refreshHover())
        }, clearHover: function () {
            this.painter.clearHover && (this.painter.clearHover(), this.refreshHover())
        }, refreshHover: function () {
            this._needsRefreshHover = !0
        }, refreshHoverImmediately: function () {
            this._needsRefreshHover = !1, this.painter.refreshHover && this.painter.refreshHover()
        }, resize: function (t) {
            t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize()
        }, clearAnimation: function () {
            this.animation.clear()
        }, getWidth: function () {
            return this.painter.getWidth()
        }, getHeight: function () {
            return this.painter.getHeight()
        }, pathToImage: function (t, e) {
            return this.painter.pathToImage(t, e)
        }, setCursorStyle: function (t) {
            this.handler.setCursorStyle(t)
        }, findHover: function (t, e) {
            return this.handler.findHover(t, e)
        }, on: function (t, e, n) {
            this.handler.on(t, e, n)
        }, off: function (t, e) {
            this.handler.off(t, e)
        }, trigger: function (t, e) {
            this.handler.trigger(t, e)
        }, clear: function () {
            this.storage.delRoot(), this.painter.clear()
        }, dispose: function () {
            this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, Sn(this.id)
        }
    };
    var qm = (Object.freeze || Object)({
            version: "4.0.7", init: wn, dispose: function (t) {
                if (t) t.dispose(); else {
                    for (var e in Ym) Ym.hasOwnProperty(e) && Ym[e].dispose();
                    Ym = {}
                }
                return this
            }, getInstance: function (t) {
                return Ym[t]
            }, registerPainter: bn
        }), $m = d, Km = w, Qm = y, Jm = "series\0",
        tv = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"],
        ev = 0, nv = ".", iv = "___EC__COMPONENT__CONTAINER___", rv = 0, ov = function (t) {
            for (var e = 0; e < t.length; e++) t[e][1] || (t[e][1] = t[e][0]);
            return function (e, n, i) {
                for (var r = {}, o = 0; o < t.length; o++) {
                    var a = t[o][1];
                    if (!(n && l(n, a) >= 0 || i && l(i, a) < 0)) {
                        var s = e.getShallow(a);
                        null != s && (r[t[o][0]] = s)
                    }
                }
                return r
            }
        },
        av = ov([["lineWidth", "width"], ["stroke", "color"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]]),
        sv = {
            getLineStyle: function (t) {
                var e = av(this, t), n = this.getLineDash(e.lineWidth);
                return n && (e.lineDash = n), e
            }, getLineDash: function (t) {
                null == t && (t = 1);
                var e = this.get("type"), n = Math.max(t, 2), i = 4 * t;
                return "solid" === e || null == e ? null : "dashed" === e ? [i, i] : [n, n]
            }
        },
        lv = ov([["fill", "color"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["opacity"], ["shadowColor"]]),
        hv = {
            getAreaStyle: function (t, e) {
                return lv(this, t, e)
            }
        }, uv = Math.pow, cv = Math.sqrt, dv = 1e-8, fv = 1e-4, pv = cv(3), gv = 1 / 3, mv = B(), vv = B(), yv = B(),
        xv = Math.min, _v = Math.max, wv = Math.sin, bv = Math.cos, Sv = 2 * Math.PI, Mv = B(), Iv = B(), Tv = B(),
        Av = [], Cv = [], Dv = {M: 1, L: 2, C: 3, Q: 4, A: 5, Z: 6, R: 7}, kv = [], Pv = [], Lv = [], Ov = [],
        zv = Math.min, Ev = Math.max, Nv = Math.cos, Rv = Math.sin, Bv = Math.sqrt, Fv = Math.abs,
        Vv = "undefined" != typeof Float32Array, Hv = function (t) {
            this._saveData = !t, this._saveData && (this.data = []), this._ctx = null
        };
    Hv.prototype = {
        constructor: Hv,
        _xi: 0,
        _yi: 0,
        _x0: 0,
        _y0: 0,
        _ux: 0,
        _uy: 0,
        _len: 0,
        _lineDash: null,
        _dashOffset: 0,
        _dashIdx: 0,
        _dashSum: 0,
        setScale: function (t, e) {
            this._ux = Fv(1 / Qg / t) || 0, this._uy = Fv(1 / Qg / e) || 0
        },
        getContext: function () {
            return this._ctx
        },
        beginPath: function (t) {
            return this._ctx = t, t && t.beginPath(), t && (this.dpr = t.dpr), this._saveData && (this._len = 0), this._lineDash && (this._lineDash = null, this._dashOffset = 0), this
        },
        moveTo: function (t, e) {
            return this.addData(Dv.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this
        },
        lineTo: function (t, e) {
            var n = Fv(t - this._xi) > this._ux || Fv(e - this._yi) > this._uy || this._len < 5;
            return this.addData(Dv.L, t, e), this._ctx && n && (this._needsDash() ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)), n && (this._xi = t, this._yi = e), this
        },
        bezierCurveTo: function (t, e, n, i, r, o) {
            return this.addData(Dv.C, t, e, n, i, r, o), this._ctx && (this._needsDash() ? this._dashedBezierTo(t, e, n, i, r, o) : this._ctx.bezierCurveTo(t, e, n, i, r, o)), this._xi = r, this._yi = o, this
        },
        quadraticCurveTo: function (t, e, n, i) {
            return this.addData(Dv.Q, t, e, n, i), this._ctx && (this._needsDash() ? this._dashedQuadraticTo(t, e, n, i) : this._ctx.quadraticCurveTo(t, e, n, i)), this._xi = n, this._yi = i, this
        },
        arc: function (t, e, n, i, r, o) {
            return this.addData(Dv.A, t, e, n, n, i, r - i, 0, o ? 0 : 1), this._ctx && this._ctx.arc(t, e, n, i, r, o), this._xi = Nv(r) * n + t, this._yi = Rv(r) * n + e, this
        },
        arcTo: function (t, e, n, i, r) {
            return this._ctx && this._ctx.arcTo(t, e, n, i, r), this
        },
        rect: function (t, e, n, i) {
            return this._ctx && this._ctx.rect(t, e, n, i), this.addData(Dv.R, t, e, n, i), this
        },
        closePath: function () {
            this.addData(Dv.Z);
            var t = this._ctx, e = this._x0, n = this._y0;
            return t && (this._needsDash() && this._dashedLineTo(e, n), t.closePath()), this._xi = e, this._yi = n, this
        },
        fill: function (t) {
            t && t.fill(), this.toStatic()
        },
        stroke: function (t) {
            t && t.stroke(), this.toStatic()
        },
        setLineDash: function (t) {
            if (t instanceof Array) {
                this._lineDash = t, this._dashIdx = 0;
                for (var e = 0, n = 0; n < t.length; n++) e += t[n];
                this._dashSum = e
            }
            return this
        },
        setLineDashOffset: function (t) {
            return this._dashOffset = t, this
        },
        len: function () {
            return this._len
        },
        setData: function (t) {
            var e = t.length;
            this.data && this.data.length === e || !Vv || (this.data = new Float32Array(e));
            for (var n = 0; n < e; n++) this.data[n] = t[n];
            this._len = e
        },
        appendPath: function (t) {
            t instanceof Array || (t = [t]);
            for (var e = t.length, n = 0, i = this._len, r = 0; r < e; r++) n += t[r].len();
            Vv && this.data instanceof Float32Array && (this.data = new Float32Array(i + n));
            for (r = 0; r < e; r++) for (var o = t[r].data, a = 0; a < o.length; a++) this.data[i++] = o[a];
            this._len = i
        },
        addData: function (t) {
            if (this._saveData) {
                var e = this.data;
                this._len + arguments.length > e.length && (this._expandData(), e = this.data);
                for (var n = 0; n < arguments.length; n++) e[this._len++] = arguments[n];
                this._prevCmd = t
            }
        },
        _expandData: function () {
            if (!(this.data instanceof Array)) {
                for (var t = [], e = 0; e < this._len; e++) t[e] = this.data[e];
                this.data = t
            }
        },
        _needsDash: function () {
            return this._lineDash
        },
        _dashedLineTo: function (t, e) {
            var n, i, r = this._dashSum, o = this._dashOffset, a = this._lineDash, s = this._ctx, l = this._xi,
                h = this._yi, u = t - l, c = e - h, d = Bv(u * u + c * c), f = l, p = h, g = a.length;
            for (u /= d, c /= d, o < 0 && (o = r + o), f -= (o %= r) * u, p -= o * c; u > 0 && f <= t || u < 0 && f >= t || 0 === u && (c > 0 && p <= e || c < 0 && p >= e);) f += u * (n = a[i = this._dashIdx]), p += c * n, this._dashIdx = (i + 1) % g, u > 0 && f < l || u < 0 && f > l || c > 0 && p < h || c < 0 && p > h || s[i % 2 ? "moveTo" : "lineTo"](u >= 0 ? zv(f, t) : Ev(f, t), c >= 0 ? zv(p, e) : Ev(p, e));
            u = f - t, c = p - e, this._dashOffset = -Bv(u * u + c * c)
        },
        _dashedBezierTo: function (t, e, n, i, r, o) {
            var a, s, l, h, u, c = this._dashSum, d = this._dashOffset, f = this._lineDash, p = this._ctx, g = this._xi,
                m = this._yi, v = jn, y = 0, x = this._dashIdx, _ = f.length, w = 0;
            for (d < 0 && (d = c + d), d %= c, a = 0; a < 1; a += .1) s = v(g, t, n, r, a + .1) - v(g, t, n, r, a), l = v(m, e, i, o, a + .1) - v(m, e, i, o, a), y += Bv(s * s + l * l);
            for (; x < _ && !((w += f[x]) > d); x++) ;
            for (a = (w - d) / y; a <= 1;) h = v(g, t, n, r, a), u = v(m, e, i, o, a), x % 2 ? p.moveTo(h, u) : p.lineTo(h, u), a += f[x] / y, x = (x + 1) % _;
            x % 2 != 0 && p.lineTo(r, o), s = r - h, l = o - u, this._dashOffset = -Bv(s * s + l * l)
        },
        _dashedQuadraticTo: function (t, e, n, i) {
            var r = n, o = i;
            n = (n + 2 * t) / 3, i = (i + 2 * e) / 3, t = (this._xi + 2 * t) / 3, e = (this._yi + 2 * e) / 3, this._dashedBezierTo(t, e, n, i, r, o)
        },
        toStatic: function () {
            var t = this.data;
            t instanceof Array && (t.length = this._len, Vv && (this.data = new Float32Array(t)))
        },
        getBoundingRect: function () {
            kv[0] = kv[1] = Lv[0] = Lv[1] = Number.MAX_VALUE, Pv[0] = Pv[1] = Ov[0] = Ov[1] = -Number.MAX_VALUE;
            for (var t = this.data, e = 0, n = 0, i = 0, r = 0, o = 0; o < t.length;) {
                var a = t[o++];
                switch (1 === o && (i = e = t[o], r = n = t[o + 1]), a) {
                    case Dv.M:
                        e = i = t[o++], n = r = t[o++], Lv[0] = i, Lv[1] = r, Ov[0] = i, Ov[1] = r;
                        break;
                    case Dv.L:
                        si(e, n, t[o], t[o + 1], Lv, Ov), e = t[o++], n = t[o++];
                        break;
                    case Dv.C:
                        li(e, n, t[o++], t[o++], t[o++], t[o++], t[o], t[o + 1], Lv, Ov), e = t[o++], n = t[o++];
                        break;
                    case Dv.Q:
                        hi(e, n, t[o++], t[o++], t[o], t[o + 1], Lv, Ov), e = t[o++], n = t[o++];
                        break;
                    case Dv.A:
                        var s = t[o++], l = t[o++], h = t[o++], u = t[o++], c = t[o++], d = t[o++] + c;
                        o += 1;
                        var f = 1 - t[o++];
                        1 === o && (i = Nv(c) * h + s, r = Rv(c) * u + l), ui(s, l, h, u, c, d, f, Lv, Ov), e = Nv(d) * h + s, n = Rv(d) * u + l;
                        break;
                    case Dv.R:
                        si(i = e = t[o++], r = n = t[o++], i + t[o++], r + t[o++], Lv, Ov);
                        break;
                    case Dv.Z:
                        e = i, n = r
                }
                K(kv, kv, Lv), Q(Pv, Pv, Ov)
            }
            return 0 === o && (kv[0] = kv[1] = Pv[0] = Pv[1] = 0), new se(kv[0], kv[1], Pv[0] - kv[0], Pv[1] - kv[1])
        },
        rebuildPath: function (t) {
            for (var e, n, i, r, o, a, s = this.data, l = this._ux, h = this._uy, u = this._len, c = 0; c < u;) {
                var d = s[c++];
                switch (1 === c && (e = i = s[c], n = r = s[c + 1]), d) {
                    case Dv.M:
                        e = i = s[c++], n = r = s[c++], t.moveTo(i, r);
                        break;
                    case Dv.L:
                        o = s[c++], a = s[c++], (Fv(o - i) > l || Fv(a - r) > h || c === u - 1) && (t.lineTo(o, a), i = o, r = a);
                        break;
                    case Dv.C:
                        t.bezierCurveTo(s[c++], s[c++], s[c++], s[c++], s[c++], s[c++]), i = s[c - 2], r = s[c - 1];
                        break;
                    case Dv.Q:
                        t.quadraticCurveTo(s[c++], s[c++], s[c++], s[c++]), i = s[c - 2], r = s[c - 1];
                        break;
                    case Dv.A:
                        var f = s[c++], p = s[c++], g = s[c++], m = s[c++], v = s[c++], y = s[c++], x = s[c++],
                            _ = s[c++], w = g > m ? g : m, b = g > m ? 1 : g / m, S = g > m ? m / g : 1, M = v + y;
                        Math.abs(g - m) > .001 ? (t.translate(f, p), t.rotate(x), t.scale(b, S), t.arc(0, 0, w, v, M, 1 - _), t.scale(1 / b, 1 / S), t.rotate(-x), t.translate(-f, -p)) : t.arc(f, p, w, v, M, 1 - _), 1 === c && (e = Nv(v) * g + f, n = Rv(v) * m + p), i = Nv(M) * g + f, r = Rv(M) * m + p;
                        break;
                    case Dv.R:
                        e = i = s[c], n = r = s[c + 1], t.rect(s[c++], s[c++], s[c++], s[c++]);
                        break;
                    case Dv.Z:
                        t.closePath(), i = e, r = n
                }
            }
        }
    }, Hv.CMD = Dv;
    var Wv = 2 * Math.PI, Gv = 2 * Math.PI, Zv = Hv.CMD, Uv = 2 * Math.PI, Xv = 1e-4, Yv = [-1, -1, -1], jv = [-1, -1],
        qv = xm.prototype.getCanvasPattern, $v = Math.abs, Kv = new Hv(!0);
    Ii.prototype = {
        constructor: Ii,
        type: "path",
        __dirtyPath: !0,
        strokeContainThreshold: 5,
        subPixelOptimize: !1,
        brush: function (t, e) {
            var n = this.style, i = this.path || Kv, r = n.hasStroke(), o = n.hasFill(), a = n.fill, s = n.stroke,
                l = o && !!a.colorStops, h = r && !!s.colorStops, u = o && !!a.image, c = r && !!s.image;
            if (n.bind(t, this, e), this.setTransform(t), this.__dirty) {
                var d;
                l && (d = d || this.getBoundingRect(), this._fillGradient = n.getGradient(t, a, d)), h && (d = d || this.getBoundingRect(), this._strokeGradient = n.getGradient(t, s, d))
            }
            l ? t.fillStyle = this._fillGradient : u && (t.fillStyle = qv.call(a, t)), h ? t.strokeStyle = this._strokeGradient : c && (t.strokeStyle = qv.call(s, t));
            var f = n.lineDash, p = n.lineDashOffset, g = !!t.setLineDash, m = this.getGlobalScale();
            if (i.setScale(m[0], m[1]), this.__dirtyPath || f && !g && r ? (i.beginPath(t), f && !g && (i.setLineDash(f), i.setLineDashOffset(p)), this.buildPath(i, this.shape, !1), this.path && (this.__dirtyPath = !1)) : (t.beginPath(), this.path.rebuildPath(t)), o) if (null != n.fillOpacity) {
                v = t.globalAlpha;
                t.globalAlpha = n.fillOpacity * n.opacity, i.fill(t), t.globalAlpha = v
            } else i.fill(t);
            if (f && g && (t.setLineDash(f), t.lineDashOffset = p), r) if (null != n.strokeOpacity) {
                var v = t.globalAlpha;
                t.globalAlpha = n.strokeOpacity * n.opacity, i.stroke(t), t.globalAlpha = v
            } else i.stroke(t);
            f && g && t.setLineDash([]), null != n.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()))
        },
        buildPath: function (t, e, n) {
        },
        createPathProxy: function () {
            this.path = new Hv
        },
        getBoundingRect: function () {
            var t = this._rect, e = this.style, n = !t;
            if (n) {
                var i = this.path;
                i || (i = this.path = new Hv), this.__dirtyPath && (i.beginPath(), this.buildPath(i, this.shape, !1)), t = i.getBoundingRect()
            }
            if (this._rect = t, e.hasStroke()) {
                var r = this._rectWithStroke || (this._rectWithStroke = t.clone());
                if (this.__dirty || n) {
                    r.copy(t);
                    var o = e.lineWidth, a = e.strokeNoScale ? this.getLineScale() : 1;
                    e.hasFill() || (o = Math.max(o, this.strokeContainThreshold || 4)), a > 1e-10 && (r.width += o / a, r.height += o / a, r.x -= o / a / 2, r.y -= o / a / 2)
                }
                return r
            }
            return t
        },
        contain: function (t, e) {
            var n = this.transformCoordToLocal(t, e), i = this.getBoundingRect(), r = this.style;
            if (t = n[0], e = n[1], i.contain(t, e)) {
                var o = this.path.data;
                if (r.hasStroke()) {
                    var a = r.lineWidth, s = r.strokeNoScale ? this.getLineScale() : 1;
                    if (s > 1e-10 && (r.hasFill() || (a = Math.max(a, this.strokeContainThreshold)), Mi(o, a / s, t, e))) return !0
                }
                if (r.hasFill()) return Si(o, t, e)
            }
            return !1
        },
        dirty: function (t) {
            null == t && (t = !0), t && (this.__dirtyPath = t, this._rect = null), this.__dirty = this.__dirtyText = !0, this.__zr && this.__zr.refresh(), this.__clipTarget && this.__clipTarget.dirty()
        },
        animateShape: function (t) {
            return this.animate("shape", t)
        },
        attrKV: function (t, e) {
            "shape" === t ? (this.setShape(e), this.__dirtyPath = !0, this._rect = null) : ln.prototype.attrKV.call(this, t, e)
        },
        setShape: function (t, e) {
            var n = this.shape;
            if (n) {
                if (w(t)) for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]); else n[t] = e;
                this.dirty(!0)
            }
            return this
        },
        getLineScale: function () {
            var t = this.transform;
            return t && $v(t[0] - 1) > 1e-10 && $v(t[3] - 1) > 1e-10 ? Math.sqrt($v(t[0] * t[3] - t[2] * t[1])) : 1
        }
    }, Ii.extend = function (t) {
        var e = function (e) {
            Ii.call(this, e), t.style && this.style.extendFrom(t.style, !1);
            var n = t.shape;
            if (n) {
                this.shape = this.shape || {};
                var i = this.shape;
                for (var r in n) !i.hasOwnProperty(r) && n.hasOwnProperty(r) && (i[r] = n[r])
            }
            t.init && t.init.call(this, e)
        };
        h(e, Ii);
        for (var n in t) "style" !== n && "shape" !== n && (e.prototype[n] = t[n]);
        return e
    }, h(Ii, ln);
    var Qv = Hv.CMD, Jv = [[], [], []], ty = Math.sqrt, ey = Math.atan2, ny = function (t, e) {
        var n, i, r, o, a, s, l = t.data, h = Qv.M, u = Qv.C, c = Qv.L, d = Qv.R, f = Qv.A, p = Qv.Q;
        for (r = 0, o = 0; r < l.length;) {
            switch (n = l[r++], o = r, i = 0, n) {
                case h:
                case c:
                    i = 1;
                    break;
                case u:
                    i = 3;
                    break;
                case p:
                    i = 2;
                    break;
                case f:
                    var g = e[4], m = e[5], v = ty(e[0] * e[0] + e[1] * e[1]), y = ty(e[2] * e[2] + e[3] * e[3]),
                        x = ey(-e[1] / y, e[0] / v);
                    l[r] *= v, l[r++] += g, l[r] *= y, l[r++] += m, l[r++] *= v, l[r++] *= y, l[r++] += x, l[r++] += x, o = r += 2;
                    break;
                case d:
                    s[0] = l[r++], s[1] = l[r++], $(s, s, e), l[o++] = s[0], l[o++] = s[1], s[0] += l[r++], s[1] += l[r++], $(s, s, e), l[o++] = s[0], l[o++] = s[1]
            }
            for (a = 0; a < i; a++) (s = Jv[a])[0] = l[r++], s[1] = l[r++], $(s, s, e), l[o++] = s[0], l[o++] = s[1]
        }
    }, iy = Math.sqrt, ry = Math.sin, oy = Math.cos, ay = Math.PI, sy = function (t) {
        return Math.sqrt(t[0] * t[0] + t[1] * t[1])
    }, ly = function (t, e) {
        return (t[0] * e[0] + t[1] * e[1]) / (sy(t) * sy(e))
    }, hy = function (t, e) {
        return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(ly(t, e))
    }, uy = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/gi, cy = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g, dy = function (t) {
        ln.call(this, t)
    };
    dy.prototype = {
        constructor: dy, type: "text", brush: function (t, e) {
            var n = this.style;
            this.__dirty && Ge(n), n.fill = n.stroke = n.shadowBlur = n.shadowColor = n.shadowOffsetX = n.shadowOffsetY = null;
            var i = n.text;
            null != i && (i += ""), sn(i, n) ? (this.setTransform(t), Ue(this, t, i, n, null, e), this.restoreTransform(t)) : t.__attrCachedBy = dm.NONE
        }, getBoundingRect: function () {
            var t = this.style;
            if (this.__dirty && Ge(t), !this._rect) {
                var e = t.text;
                null != e ? e += "" : e = "";
                var n = Te(t.text + "", t.font, t.textAlign, t.textVerticalAlign, t.textPadding, t.textLineHeight, t.rich);
                if (n.x += t.x || 0, n.y += t.y || 0, nn(t.textStroke, t.textStrokeWidth)) {
                    var i = t.textStrokeWidth;
                    n.x -= i / 2, n.y -= i / 2, n.width += i, n.height += i
                }
                this._rect = n
            }
            return this._rect
        }
    }, h(dy, ln);
    var fy = Ii.extend({
            type: "circle", shape: {cx: 0, cy: 0, r: 0}, buildPath: function (t, e, n) {
                n && t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI, !0)
            }
        }), py = [["shadowBlur", 0], ["shadowColor", "#000"], ["shadowOffsetX", 0], ["shadowOffsetY", 0]],
        gy = function (t) {
            return Kp.browser.ie && Kp.browser.version >= 11 ? function () {
                var e, n = this.__clipPaths, i = this.style;
                if (n) for (var r = 0; r < n.length; r++) {
                    var o = n[r], a = o && o.shape, s = o && o.type;
                    if (a && ("sector" === s && a.startAngle === a.endAngle || "rect" === s && (!a.width || !a.height))) {
                        for (l = 0; l < py.length; l++) py[l][2] = i[py[l][0]], i[py[l][0]] = py[l][1];
                        e = !0;
                        break
                    }
                }
                if (t.apply(this, arguments), e) for (var l = 0; l < py.length; l++) i[py[l][0]] = py[l][2]
            } : t
        }, my = Ii.extend({
            type: "sector",
            shape: {cx: 0, cy: 0, r0: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !0},
            brush: gy(Ii.prototype.brush),
            buildPath: function (t, e) {
                var n = e.cx, i = e.cy, r = Math.max(e.r0 || 0, 0), o = Math.max(e.r, 0), a = e.startAngle, s = e.endAngle,
                    l = e.clockwise, h = Math.cos(a), u = Math.sin(a);
                t.moveTo(h * r + n, u * r + i), t.lineTo(h * o + n, u * o + i), t.arc(n, i, o, a, s, !l), t.lineTo(Math.cos(s) * r + n, Math.sin(s) * r + i), 0 !== r && t.arc(n, i, r, s, a, l), t.closePath()
            }
        }), vy = Ii.extend({
            type: "ring", shape: {cx: 0, cy: 0, r: 0, r0: 0}, buildPath: function (t, e) {
                var n = e.cx, i = e.cy, r = 2 * Math.PI;
                t.moveTo(n + e.r, i), t.arc(n, i, e.r, 0, r, !1), t.moveTo(n + e.r0, i), t.arc(n, i, e.r0, 0, r, !0)
            }
        }), yy = function (t, e) {
            for (var n = t.length, i = [], r = 0, o = 1; o < n; o++) r += j(t[o - 1], t[o]);
            var a = r / 2;
            a = a < n ? n : a;
            for (o = 0; o < a; o++) {
                var s, l, h, u = o / (a - 1) * (e ? n : n - 1), c = Math.floor(u), d = u - c, f = t[c % n];
                e ? (s = t[(c - 1 + n) % n], l = t[(c + 1) % n], h = t[(c + 2) % n]) : (s = t[0 === c ? c : c - 1], l = t[c > n - 2 ? n - 1 : c + 1], h = t[c > n - 3 ? n - 1 : c + 2]);
                var p = d * d, g = d * p;
                i.push([Pi(s[0], f[0], l[0], h[0], d, p, g), Pi(s[1], f[1], l[1], h[1], d, p, g)])
            }
            return i
        }, xy = function (t, e, n, i) {
            var r, o, a, s, l = [], h = [], u = [], c = [];
            if (i) {
                a = [1 / 0, 1 / 0], s = [-1 / 0, -1 / 0];
                for (var d = 0, f = t.length; d < f; d++) K(a, a, t[d]), Q(s, s, t[d]);
                K(a, a, i[0]), Q(s, s, i[1])
            }
            for (var d = 0, f = t.length; d < f; d++) {
                var p = t[d];
                if (n) r = t[d ? d - 1 : f - 1], o = t[(d + 1) % f]; else {
                    if (0 === d || d === f - 1) {
                        l.push(V(t[d]));
                        continue
                    }
                    r = t[d - 1], o = t[d + 1]
                }
                G(h, o, r), X(h, h, e);
                var g = j(p, r), m = j(p, o), v = g + m;
                0 !== v && (g /= v, m /= v), X(u, h, -g), X(c, h, m);
                var y = H([], p, u), x = H([], p, c);
                i && (Q(y, y, a), K(y, y, s), Q(x, x, a), K(x, x, s)), l.push(y), l.push(x)
            }
            return n && l.push(l.shift()), l
        }, _y = Ii.extend({
            type: "polygon",
            shape: {points: null, smooth: !1, smoothConstraint: null},
            buildPath: function (t, e) {
                Li(t, e, !0)
            }
        }), wy = Ii.extend({
            type: "polyline",
            shape: {points: null, smooth: !1, smoothConstraint: null},
            style: {stroke: "#000", fill: null},
            buildPath: function (t, e) {
                Li(t, e, !1)
            }
        }), by = Math.round, Sy = {}, My = Ii.extend({
            type: "rect", shape: {r: 0, x: 0, y: 0, width: 0, height: 0}, buildPath: function (t, e) {
                var n, i, r, o;
                this.subPixelOptimize ? (zi(Sy, e, this.style), n = Sy.x, i = Sy.y, r = Sy.width, o = Sy.height, Sy.r = e.r, e = Sy) : (n = e.x, i = e.y, r = e.width, o = e.height), e.r ? We(t, e) : t.rect(n, i, r, o), t.closePath()
            }
        }), Iy = {}, Ty = Ii.extend({
            type: "line",
            shape: {x1: 0, y1: 0, x2: 0, y2: 0, percent: 1},
            style: {stroke: "#000", fill: null},
            buildPath: function (t, e) {
                var n, i, r, o;
                this.subPixelOptimize ? (Oi(Iy, e, this.style), n = Iy.x1, i = Iy.y1, r = Iy.x2, o = Iy.y2) : (n = e.x1, i = e.y1, r = e.x2, o = e.y2);
                var a = e.percent;
                0 !== a && (t.moveTo(n, i), a < 1 && (r = n * (1 - a) + r * a, o = i * (1 - a) + o * a), t.lineTo(r, o))
            },
            pointAt: function (t) {
                var e = this.shape;
                return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t]
            }
        }), Ay = [], Cy = Ii.extend({
            type: "bezier-curve",
            shape: {x1: 0, y1: 0, x2: 0, y2: 0, cpx1: 0, cpy1: 0, percent: 1},
            style: {stroke: "#000", fill: null},
            buildPath: function (t, e) {
                var n = e.x1, i = e.y1, r = e.x2, o = e.y2, a = e.cpx1, s = e.cpy1, l = e.cpx2, h = e.cpy2, u = e.percent;
                0 !== u && (t.moveTo(n, i), null == l || null == h ? (u < 1 && (ri(n, a, r, u, Ay), a = Ay[1], r = Ay[2], ri(i, s, o, u, Ay), s = Ay[1], o = Ay[2]), t.quadraticCurveTo(a, s, r, o)) : (u < 1 && (Qn(n, a, l, r, u, Ay), a = Ay[1], l = Ay[2], r = Ay[3], Qn(i, s, h, o, u, Ay), s = Ay[1], h = Ay[2], o = Ay[3]), t.bezierCurveTo(a, s, l, h, r, o)))
            },
            pointAt: function (t) {
                return Ni(this.shape, t, !1)
            },
            tangentAt: function (t) {
                var e = Ni(this.shape, t, !0);
                return Y(e, e)
            }
        }), Dy = Ii.extend({
            type: "arc",
            shape: {cx: 0, cy: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !0},
            style: {stroke: "#000", fill: null},
            buildPath: function (t, e) {
                var n = e.cx, i = e.cy, r = Math.max(e.r, 0), o = e.startAngle, a = e.endAngle, s = e.clockwise,
                    l = Math.cos(o), h = Math.sin(o);
                t.moveTo(l * r + n, h * r + i), t.arc(n, i, r, o, a, !s)
            }
        }), ky = Ii.extend({
            type: "compound", shape: {paths: null}, _updatePathDirty: function () {
                for (var t = this.__dirtyPath, e = this.shape.paths, n = 0; n < e.length; n++) t = t || e[n].__dirtyPath;
                this.__dirtyPath = t, this.__dirty = this.__dirty || t
            }, beforeBrush: function () {
                this._updatePathDirty();
                for (var t = this.shape.paths || [], e = this.getGlobalScale(), n = 0; n < t.length; n++) t[n].path || t[n].createPathProxy(), t[n].path.setScale(e[0], e[1])
            }, buildPath: function (t, e) {
                for (var n = e.paths || [], i = 0; i < n.length; i++) n[i].buildPath(t, n[i].shape, !0)
            }, afterBrush: function () {
                for (var t = this.shape.paths || [], e = 0; e < t.length; e++) t[e].__dirtyPath = !1
            }, getBoundingRect: function () {
                return this._updatePathDirty(), Ii.prototype.getBoundingRect.call(this)
            }
        }), Py = function (t) {
            this.colorStops = t || []
        };
    Py.prototype = {
        constructor: Py, addColorStop: function (t, e) {
            this.colorStops.push({offset: t, color: e})
        }
    };
    var Ly = function (t, e, n, i, r, o) {
        this.x = null == t ? 0 : t, this.y = null == e ? 0 : e, this.x2 = null == n ? 1 : n, this.y2 = null == i ? 0 : i, this.type = "linear", this.global = o || !1, Py.call(this, r)
    };
    Ly.prototype = {constructor: Ly}, h(Ly, Py);
    var Oy = function (t, e, n, i, r) {
        this.x = null == t ? .5 : t, this.y = null == e ? .5 : e, this.r = null == n ? .5 : n, this.type = "radial", this.global = r || !1, Py.call(this, i)
    };
    Oy.prototype = {constructor: Oy}, h(Oy, Py), Ri.prototype.incremental = !0, Ri.prototype.clearDisplaybles = function () {
        this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.dirty(), this.notClear = !1
    }, Ri.prototype.addDisplayable = function (t, e) {
        e ? this._temporaryDisplayables.push(t) : this._displayables.push(t), this.dirty()
    }, Ri.prototype.addDisplayables = function (t, e) {
        e = e || !1;
        for (var n = 0; n < t.length; n++) this.addDisplayable(t[n], e)
    }, Ri.prototype.eachPendingDisplayable = function (t) {
        for (e = this._cursor; e < this._displayables.length; e++) t && t(this._displayables[e]);
        for (var e = 0; e < this._temporaryDisplayables.length; e++) t && t(this._temporaryDisplayables[e])
    }, Ri.prototype.update = function () {
        this.updateTransform();
        for (t = this._cursor; t < this._displayables.length; t++) (e = this._displayables[t]).parent = this, e.update(), e.parent = null;
        for (var t = 0; t < this._temporaryDisplayables.length; t++) {
            var e = this._temporaryDisplayables[t];
            e.parent = this, e.update(), e.parent = null
        }
    }, Ri.prototype.brush = function (t, e) {
        for (n = this._cursor; n < this._displayables.length; n++) (i = this._displayables[n]).beforeBrush && i.beforeBrush(t), i.brush(t, n === this._cursor ? null : this._displayables[n - 1]), i.afterBrush && i.afterBrush(t);
        this._cursor = n;
        for (var n = 0; n < this._temporaryDisplayables.length; n++) {
            var i = this._temporaryDisplayables[n];
            i.beforeBrush && i.beforeBrush(t), i.brush(t, 0 === n ? null : this._temporaryDisplayables[n - 1]), i.afterBrush && i.afterBrush(t)
        }
        this._temporaryDisplayables = [], this.notClear = !0
    };
    var zy = [];
    Ri.prototype.getBoundingRect = function () {
        if (!this._rect) {
            for (var t = new se(1 / 0, 1 / 0, -1 / 0, -1 / 0), e = 0; e < this._displayables.length; e++) {
                var n = this._displayables[e], i = n.getBoundingRect().clone();
                n.needLocalTransform() && i.applyTransform(n.getLocalTransform(zy)), t.union(i)
            }
            this._rect = t
        }
        return this._rect
    }, Ri.prototype.contain = function (t, e) {
        var n = this.transformCoordToLocal(t, e);
        if (this.getBoundingRect().contain(n[0], n[1])) for (var i = 0; i < this._displayables.length; i++) if (this._displayables[i].contain(t, e)) return !0;
        return !1
    }, h(Ri, ln);
    var Ey = Math.round, Ny = Math.max, Ry = Math.min, By = {}, Fy = 1, Vy = N(), Hy = 0,
        Wy = (Object.freeze || Object)({
            Z2_EMPHASIS_LIFT: Fy,
            extendShape: Bi,
            extendPath: function (t, e) {
                return ki(t, e)
            },
            makePath: Fi,
            makeImage: Vi,
            mergePath: function (t, e) {
                for (var n = [], i = t.length, r = 0; r < i; r++) {
                    var o = t[r];
                    o.path || o.createPathProxy(), o.__dirtyPath && o.buildPath(o.path, o.shape, !0), n.push(o.path)
                }
                var a = new Ii(e);
                return a.createPathProxy(), a.buildPath = function (t) {
                    t.appendPath(n);
                    var e = t.getContext();
                    e && t.rebuildPath(e)
                }, a
            },
            resizePath: Wi,
            subPixelOptimizeLine: Gi,
            subPixelOptimizeRect: Zi,
            subPixelOptimize: Ui,
            setElementHoverStyle: Ji,
            isInEmphasis: tr,
            setHoverStyle: or,
            setAsHoverStyleTrigger: ar,
            setLabelStyle: sr,
            setTextStyle: lr,
            setText: function (t, e, n) {
                var i, r = {isRectText: !0};
                !1 === n ? i = !0 : r.autoColor = n, hr(t, e, r, i)
            },
            getFont: gr,
            updateProps: vr,
            initProps: yr,
            getTransform: xr,
            applyTransform: _r,
            transformDirection: wr,
            groupTransition: br,
            clipPointsByRect: Sr,
            clipRectByRect: function (t, e) {
                var n = Ny(t.x, e.x), i = Ry(t.x + t.width, e.x + e.width), r = Ny(t.y, e.y),
                    o = Ry(t.y + t.height, e.y + e.height);
                if (i >= n && o >= r) return {x: n, y: r, width: i - n, height: o - r}
            },
            createIcon: Mr,
            Group: am,
            Image: hn,
            Text: dy,
            Circle: fy,
            Sector: my,
            Ring: vy,
            Polygon: _y,
            Polyline: wy,
            Rect: My,
            Line: Ty,
            BezierCurve: Cy,
            Arc: Dy,
            IncrementalDisplayable: Ri,
            CompoundPath: ky,
            LinearGradient: Ly,
            RadialGradient: Oy,
            BoundingRect: se
        }), Gy = ["textStyle", "color"], Zy = {
            getTextColor: function (t) {
                var e = this.ecModel;
                return this.getShallow("color") || (!t && e ? e.get(Gy) : null)
            }, getFont: function () {
                return gr({
                    fontStyle: this.getShallow("fontStyle"),
                    fontWeight: this.getShallow("fontWeight"),
                    fontSize: this.getShallow("fontSize"),
                    fontFamily: this.getShallow("fontFamily")
                }, this.ecModel)
            }, getTextRect: function (t) {
                return Te(t, this.getFont(), this.getShallow("align"), this.getShallow("verticalAlign") || this.getShallow("baseline"), this.getShallow("padding"), this.getShallow("lineHeight"), this.getShallow("rich"), this.getShallow("truncateText"))
            }
        },
        Uy = ov([["fill", "color"], ["stroke", "borderColor"], ["lineWidth", "borderWidth"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"], ["textPosition"], ["textAlign"]]),
        Xy = {
            getItemStyle: function (t, e) {
                var n = Uy(this, t, e), i = this.getBorderLineDash();
                return i && (n.lineDash = i), n
            }, getBorderLineDash: function () {
                var t = this.get("borderType");
                return "solid" === t || null == t ? null : "dashed" === t ? [5, 5] : [1, 1]
            }
        }, Yy = u, jy = On();
    Ir.prototype = {
        constructor: Ir, init: null, mergeOption: function (t) {
            i(this.option, t, !0)
        }, get: function (t, e) {
            return null == t ? this.option : Tr(this.option, this.parsePath(t), !e && Ar(this, t))
        }, getShallow: function (t, e) {
            var n = this.option, i = null == n ? n : n[t], r = !e && Ar(this, t);
            return null == i && r && (i = r.getShallow(t)), i
        }, getModel: function (t, e) {
            var n, i = null == t ? this.option : Tr(this.option, t = this.parsePath(t));
            return e = e || (n = Ar(this, t)) && n.getModel(t), new Ir(i, e, this.ecModel)
        }, isEmpty: function () {
            return null == this.option
        }, restoreData: function () {
        }, clone: function () {
            return new (0, this.constructor)(n(this.option))
        }, setReadOnly: function (t) {
        }, parsePath: function (t) {
            return "string" == typeof t && (t = t.split(".")), t
        }, customizeGetParent: function (t) {
            jy(this).getParent = t
        }, isAnimationEnabled: function () {
            if (!Kp.node) {
                if (null != this.option.animation) return !!this.option.animation;
                if (this.parentModel) return this.parentModel.isAnimationEnabled()
            }
        }
    }, Hn(Ir), Wn(Ir), Yy(Ir, sv), Yy(Ir, hv), Yy(Ir, Zy), Yy(Ir, Xy);
    var qy = 0, $y = 1e-4,
        Ky = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/,
        Qy = (Object.freeze || Object)({
            linearMap: kr,
            parsePercent: Pr,
            round: Lr,
            asc: Or,
            getPrecision: zr,
            getPrecisionSafe: Er,
            getPixelPrecision: Nr,
            getPercentWithPrecision: Rr,
            MAX_SAFE_INTEGER: 9007199254740991,
            remRadian: Br,
            isRadianAroundZero: Fr,
            parseDate: Vr,
            quantity: Hr,
            nice: Gr,
            quantile: function (t, e) {
                var n = (t.length - 1) * e + 1, i = Math.floor(n), r = +t[i - 1], o = n - i;
                return o ? r + o * (t[i] - r) : r
            },
            reformIntervals: function (t) {
                function e(t, n, i) {
                    return t.interval[i] < n.interval[i] || t.interval[i] === n.interval[i] && (t.close[i] - n.close[i] == (i ? -1 : 1) || !i && e(t, n, 1))
                }

                t.sort(function (t, n) {
                    return e(t, n, 0) ? -1 : 1
                });
                for (var n = -1 / 0, i = 1, r = 0; r < t.length;) {
                    for (var o = t[r].interval, a = t[r].close, s = 0; s < 2; s++) o[s] <= n && (o[s] = n, a[s] = s ? 1 : 1 - i), n = o[s], i = a[s];
                    o[0] === o[1] && a[0] * a[1] != 1 ? t.splice(r, 1) : r++
                }
                return t
            },
            isNumeric: function (t) {
                return t - parseFloat(t) >= 0
            }
        }), Jy = k, tx = /([&<>"'])/g, ex = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"},
        nx = ["a", "b", "c", "d", "e", "f", "g"], ix = function (t, e) {
            return "{" + t + (null == e ? "" : e) + "}"
        }, rx = Le, ox = (Object.freeze || Object)({
            addCommas: Zr,
            toCamelCase: Ur,
            normalizeCssArray: Jy,
            encodeHTML: Xr,
            formatTpl: Yr,
            formatTplSimple: function (t, e, n) {
                return d(e, function (e, i) {
                    t = t.replace("{" + i + "}", n ? Xr(e) : e)
                }), t
            },
            getTooltipMarker: jr,
            formatTime: $r,
            capitalFirst: Kr,
            truncateText: rx,
            getTextBoundingRect: function (t) {
                return Te(t.text, t.font, t.textAlign, t.textVerticalAlign, t.textPadding, t.textLineHeight, t.rich, t.truncate)
            },
            getTextRect: function (t, e, n, i, r, o, a, s) {
                return Te(t, e, n, i, r, s, o, a)
            }
        }), ax = d, sx = ["left", "right", "top", "bottom", "width", "height"],
        lx = [["width", "left", "right"], ["height", "top", "bottom"]], hx = Qr,
        ux = (v(Qr, "vertical"), v(Qr, "horizontal"), {
            getBoxLayoutParams: function () {
                return {
                    left: this.get("left"),
                    top: this.get("top"),
                    right: this.get("right"),
                    bottom: this.get("bottom"),
                    width: this.get("width"),
                    height: this.get("height")
                }
            }
        }), cx = On(), dx = Ir.extend({
            type: "component",
            id: "",
            name: "",
            mainType: "",
            subType: "",
            componentIndex: 0,
            defaultOption: null,
            ecModel: null,
            dependentModels: [],
            uid: null,
            layoutMode: null,
            $constructor: function (t, e, n, i) {
                Ir.call(this, t, e, n, i), this.uid = Cr("ec_cpt_model")
            },
            init: function (t, e, n, i) {
                this.mergeDefaultAndTheme(t, n)
            },
            mergeDefaultAndTheme: function (t, e) {
                var n = this.layoutMode, r = n ? no(t) : {};
                i(t, e.getTheme().get(this.mainType)), i(t, this.getDefaultOption()), n && eo(t, r, n)
            },
            mergeOption: function (t, e) {
                i(this.option, t, !0);
                var n = this.layoutMode;
                n && eo(this.option, t, n)
            },
            optionUpdated: function (t, e) {
            },
            getDefaultOption: function () {
                var t = cx(this);
                if (!t.defaultOption) {
                    for (var e = [], n = this.constructor; n;) {
                        var r = n.prototype.defaultOption;
                        r && e.push(r), n = n.superClass
                    }
                    for (var o = {}, a = e.length - 1; a >= 0; a--) o = i(o, e[a], !0);
                    t.defaultOption = o
                }
                return t.defaultOption
            },
            getReferringComponents: function (t) {
                return this.ecModel.queryComponents({
                    mainType: t,
                    index: this.get(t + "Index", !0),
                    id: this.get(t + "Id", !0)
                })
            }
        });
    Un(dx, {registerWhenExtend: !0}), function (t) {
        var e = {};
        t.registerSubTypeDefaulter = function (t, n) {
            t = Fn(t), e[t.main] = n
        }, t.determineSubType = function (n, i) {
            var r = i.type;
            if (!r) {
                var o = Fn(n).main;
                t.hasSubTypes(n) && e[o] && (r = e[o](i))
            }
            return r
        }
    }(dx), function (t, e) {
        function n(t) {
            var n = {}, o = [];
            return d(t, function (a) {
                var s = i(n, a), h = r(s.originalDeps = e(a), t);
                s.entryCount = h.length, 0 === s.entryCount && o.push(a), d(h, function (t) {
                    l(s.predecessor, t) < 0 && s.predecessor.push(t);
                    var e = i(n, t);
                    l(e.successor, t) < 0 && e.successor.push(a)
                })
            }), {graph: n, noEntryList: o}
        }

        function i(t, e) {
            return t[e] || (t[e] = {predecessor: [], successor: []}), t[e]
        }

        function r(t, e) {
            var n = [];
            return d(t, function (t) {
                l(e, t) >= 0 && n.push(t)
            }), n
        }

        t.topologicalTravel = function (t, e, i, r) {
            function o(t) {
                s[t].entryCount--, 0 === s[t].entryCount && l.push(t)
            }

            if (t.length) {
                var a = n(e), s = a.graph, l = a.noEntryList, h = {};
                for (d(t, function (t) {
                    h[t] = !0
                }); l.length;) {
                    var u = l.pop(), c = s[u], f = !!h[u];
                    f && (i.call(r, u, c.originalDeps.slice()), delete h[u]), d(c.successor, f ? function (t) {
                        h[t] = !0, o(t)
                    } : o)
                }
                d(h, function () {
                    throw new Error("Circle dependency may exists")
                })
            }
        }
    }(dx, function (t) {
        var e = [];
        return d(dx.getClassesByMainType(t), function (t) {
            e = e.concat(t.prototype.dependencies || [])
        }), e = f(e, function (t) {
            return Fn(t).main
        }), "dataset" !== t && l(e, "dataset") <= 0 && e.unshift("dataset"), e
    }), u(dx, ux);
    var fx = "";
    "undefined" != typeof navigator && (fx = navigator.platform || "");
    var px = {
            color: ["#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3"],
            gradientColor: ["#f6efa6", "#d88273", "#bf444c"],
            textStyle: {
                fontFamily: fx.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
                fontSize: 12,
                fontStyle: "normal",
                fontWeight: "normal"
            },
            blendMode: null,
            animation: "auto",
            animationDuration: 1e3,
            animationDurationUpdate: 300,
            animationEasing: "exponentialOut",
            animationEasingUpdate: "cubicOut",
            animationThreshold: 2e3,
            progressiveThreshold: 3e3,
            progressive: 400,
            hoverLayerThreshold: 3e3,
            useUTC: !1
        }, gx = On(), mx = {
            clearColorPalette: function () {
                gx(this).colorIdx = 0, gx(this).colorNameMap = {}
            }, getColorFromPalette: function (t, e, n) {
                var i = gx(e = e || this), r = i.colorIdx || 0, o = i.colorNameMap = i.colorNameMap || {};
                if (o.hasOwnProperty(t)) return o[t];
                var a = Mn(this.get("color", !0)), s = this.get("colorLayer", !0), l = null != n && s ? ro(s, n) : a;
                if ((l = l || a) && l.length) {
                    var h = l[r];
                    return t && (o[t] = h), i.colorIdx = (r + 1) % l.length, h
                }
            }
        }, vx = {
            cartesian2d: function (t, e, n, i) {
                var r = t.getReferringComponents("xAxis")[0], o = t.getReferringComponents("yAxis")[0];
                e.coordSysDims = ["x", "y"], n.set("x", r), n.set("y", o), ao(r) && (i.set("x", r), e.firstCategoryDimIndex = 0), ao(o) && (i.set("y", o), e.firstCategoryDimIndex = 1)
            }, singleAxis: function (t, e, n, i) {
                var r = t.getReferringComponents("singleAxis")[0];
                e.coordSysDims = ["single"], n.set("single", r), ao(r) && (i.set("single", r), e.firstCategoryDimIndex = 0)
            }, polar: function (t, e, n, i) {
                var r = t.getReferringComponents("polar")[0], o = r.findAxisModel("radiusAxis"),
                    a = r.findAxisModel("angleAxis");
                e.coordSysDims = ["radius", "angle"], n.set("radius", o), n.set("angle", a), ao(o) && (i.set("radius", o), e.firstCategoryDimIndex = 0), ao(a) && (i.set("angle", a), e.firstCategoryDimIndex = 1)
            }, geo: function (t, e, n, i) {
                e.coordSysDims = ["lng", "lat"]
            }, parallel: function (t, e, n, i) {
                var r = t.ecModel, o = r.getComponent("parallel", t.get("parallelIndex")),
                    a = e.coordSysDims = o.dimensions.slice();
                d(o.parallelAxisIndex, function (t, o) {
                    var s = r.getComponent("parallelAxis", t), l = a[o];
                    n.set(l, s), ao(s) && null == e.firstCategoryDimIndex && (i.set(l, s), e.firstCategoryDimIndex = o)
                })
            }
        }, yx = "original", xx = "arrayRows", _x = "objectRows", bx = "keyedColumns", Sx = "unknown", Mx = "typedArray",
        Ix = "column", Tx = "row";
    so.seriesDataToSource = function (t) {
        return new so({data: t, sourceFormat: S(t) ? Mx : yx, fromDataset: !1})
    }, Wn(so);
    var Ax = On(), Cx = "\0_ec_inner", Dx = Ir.extend({
        init: function (t, e, n, i) {
            n = n || {}, this.option = null, this._theme = new Ir(n), this._optionManager = i
        }, setOption: function (t, e) {
            P(!(Cx in t), "please use chart.getOption()"), this._optionManager.setOption(t, e), this.resetOption(null)
        }, resetOption: function (t) {
            var e = !1, n = this._optionManager;
            if (!t || "recreate" === t) {
                var i = n.mountOption("recreate" === t);
                this.option && "recreate" !== t ? (this.restoreData(), this.mergeOption(i)) : So.call(this, i), e = !0
            }
            if ("timeline" !== t && "media" !== t || this.restoreData(), !t || "recreate" === t || "timeline" === t) {
                var r = n.getTimelineOption(this);
                r && (this.mergeOption(r), e = !0)
            }
            if (!t || "recreate" === t || "media" === t) {
                var o = n.getMediaOption(this, this._api);
                o.length && d(o, function (t) {
                    this.mergeOption(t, e = !0)
                }, this)
            }
            return e
        }, mergeOption: function (t) {
            var e = this.option, r = this._componentsMap, a = [];
            uo(this), d(t, function (t, r) {
                null != t && (dx.hasClass(r) ? r && a.push(r) : e[r] = null == e[r] ? n(t) : i(e[r], t, !0))
            }), dx.topologicalTravel(a, dx.getAllClassMainTypes(), function (n, i) {
                var a = Mn(t[n]), s = Cn(r.get(n), a);
                Dn(s), d(s, function (t, e) {
                    var i = t.option;
                    w(i) && (t.keyInfo.mainType = n, t.keyInfo.subType = Io(n, i, t.exist))
                });
                var l = Mo(r, i);
                e[n] = [], r.set(n, []), d(s, function (t, i) {
                    var a = t.exist, s = t.option;
                    if (P(w(s) || a, "Empty component definition"), s) {
                        var h = dx.getClass(n, t.keyInfo.subType, !0);
                        if (a && a instanceof h) a.name = t.keyInfo.name, a.mergeOption(s, this), a.optionUpdated(s, !1); else {
                            var u = o({dependentModels: l, componentIndex: i}, t.keyInfo);
                            o(a = new h(s, this, this, u), u), a.init(s, this, this, u), a.optionUpdated(null, !0)
                        }
                    } else a.mergeOption({}, this), a.optionUpdated({}, !1);
                    r.get(n)[i] = a, e[n][i] = a.option
                }, this), "series" === n && To(this, r.get("series"))
            }, this), this._seriesIndicesMap = N(this._seriesIndices = this._seriesIndices || [])
        }, getOption: function () {
            var t = n(this.option);
            return d(t, function (e, n) {
                if (dx.hasClass(n)) {
                    for (var i = (e = Mn(e)).length - 1; i >= 0; i--) Pn(e[i]) && e.splice(i, 1);
                    t[n] = e
                }
            }), delete t[Cx], t
        }, getTheme: function () {
            return this._theme
        }, getComponent: function (t, e) {
            var n = this._componentsMap.get(t);
            if (n) return n[e || 0]
        }, queryComponents: function (t) {
            var e = t.mainType;
            if (!e) return [];
            var n = t.index, i = t.id, r = t.name, o = this._componentsMap.get(e);
            if (!o || !o.length) return [];
            var a;
            if (null != n) y(n) || (n = [n]), a = g(f(n, function (t) {
                return o[t]
            }), function (t) {
                return !!t
            }); else if (null != i) {
                var s = y(i);
                a = g(o, function (t) {
                    return s && l(i, t.id) >= 0 || !s && t.id === i
                })
            } else if (null != r) {
                var h = y(r);
                a = g(o, function (t) {
                    return h && l(r, t.name) >= 0 || !h && t.name === r
                })
            } else a = o.slice();
            return Ao(a, t)
        }, findComponents: function (t) {
            var e = t.query, n = t.mainType, i = function (t) {
                var e = n + "Index", i = n + "Id", r = n + "Name";
                return !t || null == t[e] && null == t[i] && null == t[r] ? null : {
                    mainType: n,
                    index: t[e],
                    id: t[i],
                    name: t[r]
                }
            }(e);
            return function (e) {
                return t.filter ? g(e, t.filter) : e
            }(Ao(i ? this.queryComponents(i) : this._componentsMap.get(n), t))
        }, eachComponent: function (t, e, n) {
            var i = this._componentsMap;
            "function" == typeof t ? (n = e, e = t, i.each(function (t, i) {
                d(t, function (t, r) {
                    e.call(n, i, t, r)
                })
            })) : _(t) ? d(i.get(t), e, n) : w(t) && d(this.findComponents(t), e, n)
        }, getSeriesByName: function (t) {
            return g(this._componentsMap.get("series"), function (e) {
                return e.name === t
            })
        }, getSeriesByIndex: function (t) {
            return this._componentsMap.get("series")[t]
        }, getSeriesByType: function (t) {
            return g(this._componentsMap.get("series"), function (e) {
                return e.subType === t
            })
        }, getSeries: function () {
            return this._componentsMap.get("series").slice()
        }, getSeriesCount: function () {
            return this._componentsMap.get("series").length
        }, eachSeries: function (t, e) {
            d(this._seriesIndices, function (n) {
                var i = this._componentsMap.get("series")[n];
                t.call(e, i, n)
            }, this)
        }, eachRawSeries: function (t, e) {
            d(this._componentsMap.get("series"), t, e)
        }, eachSeriesByType: function (t, e, n) {
            d(this._seriesIndices, function (i) {
                var r = this._componentsMap.get("series")[i];
                r.subType === t && e.call(n, r, i)
            }, this)
        }, eachRawSeriesByType: function (t, e, n) {
            return d(this.getSeriesByType(t), e, n)
        }, isSeriesFiltered: function (t) {
            return null == this._seriesIndicesMap.get(t.componentIndex)
        }, getCurrentSeriesIndices: function () {
            return (this._seriesIndices || []).slice()
        }, filterSeries: function (t, e) {
            To(this, g(this._componentsMap.get("series"), t, e))
        }, restoreData: function (t) {
            var e = this._componentsMap;
            To(this, e.get("series"));
            var n = [];
            e.each(function (t, e) {
                n.push(e)
            }), dx.topologicalTravel(n, dx.getAllClassMainTypes(), function (n, i) {
                d(e.get(n), function (e) {
                    ("series" !== n || !wo(e, t)) && e.restoreData()
                })
            })
        }
    });
    u(Dx, mx);
    var kx = ["getDom", "getZr", "getWidth", "getHeight", "getDevicePixelRatio", "dispatchAction", "isDisposed", "on", "off", "getDataURL", "getConnectedDataURL", "getModel", "getOption", "getViewOfComponentModel", "getViewOfSeriesModel"],
        Px = {};
    Do.prototype = {
        constructor: Do, create: function (t, e) {
            var n = [];
            d(Px, function (i, r) {
                var o = i.create(t, e);
                n = n.concat(o || [])
            }), this._coordinateSystems = n
        }, update: function (t, e) {
            d(this._coordinateSystems, function (n) {
                n.update && n.update(t, e)
            })
        }, getCoordinateSystems: function () {
            return this._coordinateSystems.slice()
        }
    }, Do.register = function (t, e) {
        Px[t] = e
    }, Do.get = function (t) {
        return Px[t]
    };
    var Lx = d, Ox = n, zx = f, Ex = i, Nx = /^(min|max)?(.+)$/;
    ko.prototype = {
        constructor: ko, setOption: function (t, e) {
            t && d(Mn(t.series), function (t) {
                t && t.data && S(t.data) && O(t.data)
            }), t = Ox(t, !0);
            var n = this._optionBackup, i = Po.call(this, t, e, !n);
            this._newBaseOption = i.baseOption, n ? (Eo(n.baseOption, i.baseOption), i.timelineOptions.length && (n.timelineOptions = i.timelineOptions), i.mediaList.length && (n.mediaList = i.mediaList), i.mediaDefault && (n.mediaDefault = i.mediaDefault)) : this._optionBackup = i
        }, mountOption: function (t) {
            var e = this._optionBackup;
            return this._timelineOptions = zx(e.timelineOptions, Ox), this._mediaList = zx(e.mediaList, Ox), this._mediaDefault = Ox(e.mediaDefault), this._currentMediaIndices = [], Ox(t ? e.baseOption : this._newBaseOption)
        }, getTimelineOption: function (t) {
            var e, n = this._timelineOptions;
            if (n.length) {
                var i = t.getComponent("timeline");
                i && (e = Ox(n[i.getCurrentIndex()], !0))
            }
            return e
        }, getMediaOption: function (t) {
            var e = this._api.getWidth(), n = this._api.getHeight(), i = this._mediaList, r = this._mediaDefault,
                o = [], a = [];
            if (!i.length && !r) return a;
            for (var s = 0, l = i.length; s < l; s++) Lo(i[s].query, e, n) && o.push(s);
            return !o.length && r && (o = [-1]), o.length && !zo(o, this._currentMediaIndices) && (a = zx(o, function (t) {
                return Ox(-1 === t ? r.option : i[t].option)
            })), this._currentMediaIndices = o, a
        }
    };
    var Rx = d, Bx = w, Fx = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"],
        Vx = function (t, e) {
            Rx(Wo(t.series), function (t) {
                Bx(t) && Ho(t)
            });
            var n = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];
            e && n.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), Rx(n, function (e) {
                Rx(Wo(t[e]), function (t) {
                    t && (Fo(t, "axisLabel"), Fo(t.axisPointer, "label"))
                })
            }), Rx(Wo(t.parallel), function (t) {
                var e = t && t.parallelAxisDefault;
                Fo(e, "axisLabel"), Fo(e && e.axisPointer, "label")
            }), Rx(Wo(t.calendar), function (t) {
                Ro(t, "itemStyle"), Fo(t, "dayLabel"), Fo(t, "monthLabel"), Fo(t, "yearLabel")
            }), Rx(Wo(t.radar), function (t) {
                Fo(t, "name")
            }), Rx(Wo(t.geo), function (t) {
                Bx(t) && (Vo(t), Rx(Wo(t.regions), function (t) {
                    Vo(t)
                }))
            }), Rx(Wo(t.timeline), function (t) {
                Vo(t), Ro(t, "label"), Ro(t, "itemStyle"), Ro(t, "controlStyle", !0);
                var e = t.data;
                y(e) && d(e, function (t) {
                    w(t) && (Ro(t, "label"), Ro(t, "itemStyle"))
                })
            }), Rx(Wo(t.toolbox), function (t) {
                Ro(t, "iconStyle"), Rx(t.feature, function (t) {
                    Ro(t, "iconStyle")
                })
            }), Fo(Go(t.axisPointer), "label"), Fo(Go(t.tooltip).axisPointer, "label")
        }, Hx = [["x", "left"], ["y", "top"], ["x2", "right"], ["y2", "bottom"]],
        Wx = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"],
        Gx = function (t, e) {
            Vx(t, e), t.series = Mn(t.series), d(t.series, function (t) {
                if (w(t)) {
                    var e = t.type;
                    if ("pie" !== e && "gauge" !== e || null != t.clockWise && (t.clockwise = t.clockWise), "gauge" === e) {
                        var n = Zo(t, "pointer.color");
                        null != n && Uo(t, "itemStyle.normal.color", n)
                    }
                    Xo(t)
                }
            }), t.dataRange && (t.visualMap = t.dataRange), d(Wx, function (e) {
                var n = t[e];
                n && (y(n) || (n = [n]), d(n, function (t) {
                    Xo(t)
                }))
            })
        }, Zx = jo.prototype;
    Zx.pure = !1, Zx.persistent = !0, Zx.getSource = function () {
        return this._source
    };
    var Ux = {
        arrayRows_column: {
            pure: !0, count: function () {
                return Math.max(0, this._data.length - this._source.startIndex)
            }, getItem: function (t) {
                return this._data[t + this._source.startIndex]
            }, appendData: Ko
        },
        arrayRows_row: {
            pure: !0, count: function () {
                var t = this._data[0];
                return t ? Math.max(0, t.length - this._source.startIndex) : 0
            }, getItem: function (t) {
                t += this._source.startIndex;
                for (var e = [], n = this._data, i = 0; i < n.length; i++) {
                    var r = n[i];
                    e.push(r ? r[t] : null)
                }
                return e
            }, appendData: function () {
                throw new Error('Do not support appendData when set seriesLayoutBy: "row".')
            }
        },
        objectRows: {pure: !0, count: qo, getItem: $o, appendData: Ko},
        keyedColumns: {
            pure: !0, count: function () {
                var t = this._source.dimensionsDefine[0].name, e = this._data[t];
                return e ? e.length : 0
            }, getItem: function (t) {
                for (var e = [], n = this._source.dimensionsDefine, i = 0; i < n.length; i++) {
                    var r = this._data[n[i].name];
                    e.push(r ? r[t] : null)
                }
                return e
            }, appendData: function (t) {
                var e = this._data;
                d(t, function (t, n) {
                    for (var i = e[n] || (e[n] = []), r = 0; r < (t || []).length; r++) i.push(t[r])
                })
            }
        },
        original: {count: qo, getItem: $o, appendData: Ko},
        typedArray: {
            persistent: !1, pure: !0, count: function () {
                return this._data ? this._data.length / this._dimSize : 0
            }, getItem: function (t, e) {
                t -= this._offset, e = e || [];
                for (var n = this._dimSize * t, i = 0; i < this._dimSize; i++) e[i] = this._data[n + i];
                return e
            }, appendData: function (t) {
                this._data = t
            }, clean: function () {
                this._offset += this.count(), this._data = null
            }
        }
    }, Xx = {
        arrayRows: Qo, objectRows: function (t, e, n, i) {
            return null != n ? t[i] : t
        }, keyedColumns: Qo, original: function (t, e, n, i) {
            var r = Tn(t);
            return null != n && r instanceof Array ? r[n] : r
        }, typedArray: Qo
    }, Yx = {
        arrayRows: Jo, objectRows: function (t, e, n, i) {
            return ta(t[e], this._dimensionInfos[e])
        }, keyedColumns: Jo, original: function (t, e, n, i) {
            var r = t && (null == t.value ? t : t.value);
            return !this._rawData.pure && An(t) && (this.hasItemOption = !0), ta(r instanceof Array ? r[i] : r, this._dimensionInfos[e])
        }, typedArray: function (t, e, n, i) {
            return t[i]
        }
    }, jx = /\{@(.+?)\}/g, qx = {
        getDataParams: function (t, e) {
            var n = this.getData(e), i = this.getRawValue(t, e), r = n.getRawIndex(t), o = n.getName(t),
                a = n.getRawDataItem(t), s = n.getItemVisual(t, "color"), l = this.ecModel.getComponent("tooltip"),
                h = Bn(l && l.get("renderMode")), u = this.mainType, c = "series" === u;
            return {
                componentType: u,
                componentSubType: this.subType,
                componentIndex: this.componentIndex,
                seriesType: c ? this.subType : null,
                seriesIndex: this.seriesIndex,
                seriesId: c ? this.id : null,
                seriesName: c ? this.name : null,
                name: o,
                dataIndex: r,
                data: a,
                dataType: e,
                value: i,
                color: s,
                marker: jr({color: s, renderMode: h}),
                $vars: ["seriesName", "name", "value"]
            }
        }, getFormattedLabel: function (t, e, n, i, r) {
            e = e || "normal";
            var o = this.getData(n), a = o.getItemModel(t), s = this.getDataParams(t, n);
            null != i && s.value instanceof Array && (s.value = s.value[i]);
            var l = a.get("normal" === e ? [r || "label", "formatter"] : [e, r || "label", "formatter"]);
            return "function" == typeof l ? (s.status = e, l(s)) : "string" == typeof l ? Yr(l, s).replace(jx, function (e, n) {
                var i = n.length;
                return "[" === n.charAt(0) && "]" === n.charAt(i - 1) && (n = +n.slice(1, i - 1)), ea(o, t, n)
            }) : void 0
        }, getRawValue: function (t, e) {
            return ea(this.getData(e), t)
        }, formatTooltip: function () {
        }
    }, $x = ra.prototype;
    $x.perform = function (t) {
        function e(t) {
            return !(t >= 1) && (t = 1), t
        }

        var n = this._upstream, i = t && t.skip;
        if (this._dirty && n) {
            var r = this.context;
            r.data = r.outputData = n.context.outputData
        }
        this.__pipeline && (this.__pipeline.currentTask = this);
        var o;
        this._plan && !i && (o = this._plan(this.context));
        var a = e(this._modBy), s = this._modDataCount || 0, l = e(t && t.modBy), h = t && t.modDataCount || 0;
        a === l && s === h || (o = "reset");
        var u;
        (this._dirty || "reset" === o) && (this._dirty = !1, u = aa(this, i)), this._modBy = l, this._modDataCount = h;
        var c = t && t.step;
        if (this._dueEnd = n ? n._outputDueEnd : this._count ? this._count(this.context) : 1 / 0, this._progress) {
            var d = this._dueIndex, f = Math.min(null != c ? this._dueIndex + c : 1 / 0, this._dueEnd);
            if (!i && (u || d < f)) {
                var p = this._progress;
                if (y(p)) for (var g = 0; g < p.length; g++) oa(this, p[g], d, f, l, h); else oa(this, p, d, f, l, h)
            }
            this._dueIndex = f;
            var m = null != this._settedOutputEnd ? this._settedOutputEnd : f;
            this._outputDueEnd = m
        } else this._dueIndex = this._outputDueEnd = null != this._settedOutputEnd ? this._settedOutputEnd : this._dueEnd;
        return this.unfinished()
    };
    var Kx = function () {
        function t() {
            return i < n ? i++ : null
        }

        function e() {
            var t = i % a * r + Math.ceil(i / a), e = i >= n ? null : t < o ? t : i;
            return i++, e
        }

        var n, i, r, o, a, s = {
            reset: function (l, h, u, c) {
                i = l, n = h, r = u, o = c, a = Math.ceil(o / r), s.next = r > 1 && o > 0 ? e : t
            }
        };
        return s
    }();
    $x.dirty = function () {
        this._dirty = !0, this._onDirty && this._onDirty(this.context)
    }, $x.unfinished = function () {
        return this._progress && this._dueIndex < this._dueEnd
    }, $x.pipe = function (t) {
        (this._downstream !== t || this._dirty) && (this._downstream = t, t._upstream = this, t.dirty())
    }, $x.dispose = function () {
        this._disposed || (this._upstream && (this._upstream._downstream = null), this._downstream && (this._downstream._upstream = null), this._dirty = !1, this._disposed = !0)
    }, $x.getUpstream = function () {
        return this._upstream
    }, $x.getDownstream = function () {
        return this._downstream
    }, $x.setOutputEnd = function (t) {
        this._outputDueEnd = this._settedOutputEnd = t
    };
    var Qx = On(), Jx = dx.extend({
        type: "series.__base__",
        seriesIndex: 0,
        coordinateSystem: null,
        defaultOption: null,
        legendDataProvider: null,
        visualColorAccessPath: "itemStyle.color",
        layoutMode: null,
        init: function (t, e, n, i) {
            this.seriesIndex = this.componentIndex, this.dataTask = ia({
                count: ha,
                reset: ua
            }), this.dataTask.context = {model: this}, this.mergeDefaultAndTheme(t, n), co(this);
            var r = this.getInitialData(t, n);
            da(r, this), this.dataTask.context.data = r, Qx(this).dataBeforeProcessed = r, sa(this)
        },
        mergeDefaultAndTheme: function (t, e) {
            var n = this.layoutMode, r = n ? no(t) : {}, o = this.subType;
            dx.hasClass(o) && (o += "Series"), i(t, e.getTheme().get(this.subType)), i(t, this.getDefaultOption()), In(t, "label", ["show"]), this.fillDataTextStyle(t.data), n && eo(t, r, n)
        },
        mergeOption: function (t, e) {
            t = i(this.option, t, !0), this.fillDataTextStyle(t.data);
            var n = this.layoutMode;
            n && eo(this.option, t, n), co(this);
            var r = this.getInitialData(t, e);
            da(r, this), this.dataTask.dirty(), this.dataTask.context.data = r, Qx(this).dataBeforeProcessed = r, sa(this)
        },
        fillDataTextStyle: function (t) {
            if (t && !S(t)) for (var e = ["show"], n = 0; n < t.length; n++) t[n] && t[n].label && In(t[n], "label", e)
        },
        getInitialData: function () {
        },
        appendData: function (t) {
            this.getRawData().appendData(t.data)
        },
        getData: function (t) {
            var e = pa(this);
            if (e) {
                var n = e.context.data;
                return null == t ? n : n.getLinkedData(t)
            }
            return Qx(this).data
        },
        setData: function (t) {
            var e = pa(this);
            if (e) {
                var n = e.context;
                n.data !== t && e.modifyOutputEnd && e.setOutputEnd(t.count()), n.outputData = t, e !== this.dataTask && (n.data = t)
            }
            Qx(this).data = t
        },
        getSource: function () {
            return ho(this)
        },
        getRawData: function () {
            return Qx(this).dataBeforeProcessed
        },
        getBaseAxis: function () {
            var t = this.coordinateSystem;
            return t && t.getBaseAxis && t.getBaseAxis()
        },
        formatTooltip: function (t, e, n, i) {
            function r(t) {
                return {renderMode: i, content: Xr(Zr(t)), style: l}
            }

            var o = this, a = "html" === (i = i || "html") ? "<br/>" : "\n", s = "richText" === i, l = {}, h = 0,
                u = this.getData(), c = u.mapDimension("defaultedTooltip", !0), f = c.length, g = this.getRawValue(t),
                m = y(g), v = u.getItemVisual(t, "color");
            w(v) && v.colorStops && (v = (v.colorStops[0] || {}).color), v = v || "transparent";
            var x = (f > 1 || m && !f ? function (n) {
                    function r(t, n) {
                        var r = u.getDimensionInfo(n);
                        if (r && !1 !== r.otherDims.tooltip) {
                            var c = r.type, d = "sub" + o.seriesIndex + "at" + h,
                                p = jr({color: v, type: "subItem", renderMode: i, markerId: d}),
                                g = "string" == typeof p ? p : p.content,
                                m = (a ? g + Xr(r.displayName || "-") + ": " : "") + Xr("ordinal" === c ? t + "" : "time" === c ? e ? "" : $r("yyyy/MM/dd hh:mm:ss", t) : Zr(t));
                            m && f.push(m), s && (l[d] = v, ++h)
                        }
                    }

                    var a = p(n, function (t, e, n) {
                        var i = u.getDimensionInfo(n);
                        return t |= i && !1 !== i.tooltip && null != i.displayName
                    }, 0), f = [];
                    c.length ? d(c, function (e) {
                        r(ea(u, t, e), e)
                    }) : d(n, r);
                    var g = a ? s ? "\n" : "<br/>" : "", m = g + f.join(g || ", ");
                    return {renderMode: i, content: m, style: l}
                }(g) : r(f ? ea(u, t, c[0]) : m ? g[0] : g)).content, _ = o.seriesIndex + "at" + h,
                b = jr({color: v, type: "item", renderMode: i, markerId: _});
            l[_] = v, ++h;
            var S = u.getName(t), M = this.name;
            kn(this) || (M = ""), M = M ? Xr(M) + (e ? ": " : a) : "";
            var I = "string" == typeof b ? b : b.content;
            return {html: e ? I + M + x : M + I + (S ? Xr(S) + ": " + x : x), markers: l}
        },
        isAnimationEnabled: function () {
            if (Kp.node) return !1;
            var t = this.getShallow("animation");
            return t && this.getData().count() > this.getShallow("animationThreshold") && (t = !1), t
        },
        restoreData: function () {
            this.dataTask.dirty()
        },
        getColorFromPalette: function (t, e, n) {
            var i = this.ecModel, r = mx.getColorFromPalette.call(this, t, e, n);
            return r || (r = i.getColorFromPalette(t, e, n)), r
        },
        coordDimToDataDim: function (t) {
            return this.getRawData().mapDimension(t, !0)
        },
        getProgressive: function () {
            return this.get("progressive")
        },
        getProgressiveThreshold: function () {
            return this.get("progressiveThreshold")
        },
        getAxisTooltipData: null,
        getTooltipPosition: null,
        pipeTask: null,
        preventIncremental: null,
        pipelineContext: null
    });
    u(Jx, qx), u(Jx, mx);
    var t_ = function () {
        this.group = new am, this.uid = Cr("viewComponent")
    };
    t_.prototype = {
        constructor: t_, init: function (t, e) {
        }, render: function (t, e, n, i) {
        }, dispose: function () {
        }, filterForExposedEvent: null
    };
    var e_ = t_.prototype;
    e_.updateView = e_.updateLayout = e_.updateVisual = function (t, e, n, i) {
    }, Hn(t_), Un(t_, {registerWhenExtend: !0});
    var n_ = function () {
        var t = On();
        return function (e) {
            var n = t(e), i = e.pipelineContext, r = n.large, o = n.progressiveRender, a = n.large = i.large,
                s = n.progressiveRender = i.progressiveRender;
            return !!(r ^ a || o ^ s) && "reset"
        }
    }, i_ = On(), r_ = n_();
    ga.prototype = {
        type: "chart", init: function (t, e) {
        }, render: function (t, e, n, i) {
        }, highlight: function (t, e, n, i) {
            va(t.getData(), i, "emphasis")
        }, downplay: function (t, e, n, i) {
            va(t.getData(), i, "normal")
        }, remove: function (t, e) {
            this.group.removeAll()
        }, dispose: function () {
        }, incrementalPrepareRender: null, incrementalRender: null, updateTransform: null, filterForExposedEvent: null
    };
    var o_ = ga.prototype;
    o_.updateView = o_.updateLayout = o_.updateVisual = function (t, e, n, i) {
        this.render(t, e, n, i)
    }, Hn(ga), Un(ga, {registerWhenExtend: !0}), ga.markUpdateMethod = function (t, e) {
        i_(t).updateMethod = e
    };
    var a_ = {
        incrementalPrepareRender: {
            progress: function (t, e) {
                e.view.incrementalRender(t, e.model, e.ecModel, e.api, e.payload)
            }
        }, render: {
            forceFirstProgress: !0, progress: function (t, e) {
                e.view.render(e.model, e.ecModel, e.api, e.payload)
            }
        }
    }, s_ = "\0__throttleOriginMethod", l_ = "\0__throttleRate", h_ = "\0__throttleType", u_ = {
        createOnAllSeries: !0, performRawSeries: !0, reset: function (t, e) {
            var n = t.getData(), i = (t.visualColorAccessPath || "itemStyle.color").split("."),
                r = t.get(i) || t.getColorFromPalette(t.name, null, e.getSeriesCount());
            if (n.setVisual("color", r), !e.isSeriesFiltered(t)) {
                "function" != typeof r || r instanceof Py || n.each(function (e) {
                    n.setItemVisual(e, "color", r(t.getDataParams(e)))
                });
                return {
                    dataEach: n.hasItemOption ? function (t, e) {
                        var n = t.getItemModel(e).get(i, !0);
                        null != n && t.setItemVisual(e, "color", n)
                    } : null
                }
            }
        }
    }, c_ = {
        toolbox: {
            brush: {
                title: {
                    rect: "Box Select",
                    polygon: "Lasso Select",
                    lineX: "Horizontally Select",
                    lineY: "Vertically Select",
                    keep: "Keep Selections",
                    clear: "Clear Selections"
                }
            },
            dataView: {title: "Data View", lang: ["Data View", "Close", "Refresh"]},
            dataZoom: {title: {zoom: "Zoom", back: "Zoom Reset"}},
            magicType: {
                title: {
                    line: "Switch to Line Chart",
                    bar: "Switch to Bar Chart",
                    stack: "Stack",
                    tiled: "Tile"
                }
            },
            restore: {title: "Restore"},
            saveAsImage: {title: "Save as Image", lang: ["Right Click to Save Image"]}
        }
    }, d_ = function (t, e) {
        function n(t, e) {
            if ("string" != typeof t) return t;
            var n = t;
            return d(e, function (t, e) {
                n = n.replace(new RegExp("\\{\\s*" + e + "\\s*\\}", "g"), t)
            }), n
        }

        function i(t) {
            var e = o.get(t);
            if (null == e) {
                for (var n = t.split("."), i = c_.aria, r = 0; r < n.length; ++r) i = i[n[r]];
                return i
            }
            return e
        }

        function r(t) {
            return c_.series.typeNames[t] || "自定义图"
        }

        var o = e.getModel("aria");
        if (o.get("show")) if (o.get("description")) t.setAttribute("aria-label", o.get("description")); else {
            var a = 0;
            e.eachSeries(function (t, e) {
                ++a
            }, this);
            var s, l = o.get("data.maxCount") || 10, h = o.get("series.maxCount") || 10, u = Math.min(a, h);
            if (!(a < 1)) {
                var c = function () {
                    var t = e.getModel("title").option;
                    return t && t.length && (t = t[0]), t && t.text
                }();
                s = c ? n(i("general.withTitle"), {title: c}) : i("general.withoutTitle");
                var f = [];
                s += n(i(a > 1 ? "series.multiple.prefix" : "series.single.prefix"), {seriesCount: a}), e.eachSeries(function (t, e) {
                    if (e < u) {
                        var o, s = t.get("name"), h = "series." + (a > 1 ? "multiple" : "single") + ".";
                        o = n(o = i(s ? h + "withName" : h + "withoutName"), {
                            seriesId: t.seriesIndex,
                            seriesName: t.get("name"),
                            seriesType: r(t.subType)
                        });
                        var c = t.getData();
                        window.data = c, c.count() > l ? o += n(i("data.partialData"), {displayCnt: l}) : o += i("data.allData");
                        for (var d = [], p = 0; p < c.count(); p++) if (p < l) {
                            var g = c.getName(p), m = ea(c, p);
                            d.push(n(i(g ? "data.withName" : "data.withoutName"), {name: g, value: m}))
                        }
                        o += d.join(i("data.separator.middle")) + i("data.separator.end"), f.push(o)
                    }
                }), s += f.join(i("series.multiple.separator.middle")) + i("series.multiple.separator.end"), t.setAttribute("aria-label", s)
            }
        }
    }, f_ = Math.PI, p_ = Sa.prototype;
    p_.restoreData = function (t, e) {
        t.restoreData(e), this._stageTaskMap.each(function (t) {
            var e = t.overallTask;
            e && e.dirty()
        })
    }, p_.getPerformArgs = function (t, e) {
        if (t.__pipeline) {
            var n = this._pipelineMap.get(t.__pipeline.id), i = n.context,
                r = !e && n.progressiveEnabled && (!i || i.progressiveRender) && t.__idxInPipeline > n.blockIndex ? n.step : null,
                o = i && i.modDataCount;
            return {step: r, modBy: null != o ? Math.ceil(o / r) : null, modDataCount: o}
        }
    }, p_.getPipeline = function (t) {
        return this._pipelineMap.get(t)
    }, p_.updateStreamModes = function (t, e) {
        var n = this._pipelineMap.get(t.uid), i = t.getData().count(),
            r = n.progressiveEnabled && e.incrementalPrepareRender && i >= n.threshold,
            o = t.get("large") && i >= t.get("largeThreshold"), a = "mod" === t.get("progressiveChunkMode") ? i : null;
        t.pipelineContext = n.context = {progressiveRender: r, modDataCount: a, large: o}
    }, p_.restorePipelines = function (t) {
        var e = this, n = e._pipelineMap = N();
        t.eachSeries(function (t) {
            var i = t.getProgressive(), r = t.uid;
            n.set(r, {
                id: r,
                head: null,
                tail: null,
                threshold: t.getProgressiveThreshold(),
                progressiveEnabled: i && !(t.preventIncremental && t.preventIncremental()),
                blockIndex: -1,
                step: Math.round(i || 700),
                count: 0
            }), Ea(e, t, t.dataTask)
        })
    }, p_.prepareStageTasks = function () {
        var t = this._stageTaskMap, e = this.ecInstance.getModel(), n = this.api;
        d(this._allHandlers, function (i) {
            var r = t.get(i.uid) || t.set(i.uid, []);
            i.reset && Ia(this, i, r, e, n), i.overallReset && Ta(this, i, r, e, n)
        }, this)
    }, p_.prepareView = function (t, e, n, i) {
        var r = t.renderTask, o = r.context;
        o.model = e, o.ecModel = n, o.api = i, r.__block = !t.incrementalPrepareRender, Ea(this, e, r)
    }, p_.performDataProcessorTasks = function (t, e) {
        Ma(this, this._dataProcessorHandlers, t, e, {block: !0})
    }, p_.performVisualTasks = function (t, e, n) {
        Ma(this, this._visualHandlers, t, e, n)
    }, p_.performSeriesTasks = function (t) {
        var e;
        t.eachSeries(function (t) {
            e |= t.dataTask.perform()
        }), this.unfinished |= e
    }, p_.plan = function () {
        this._pipelineMap.each(function (t) {
            var e = t.tail;
            do {
                if (e.__block) {
                    t.blockIndex = e.__idxInPipeline;
                    break
                }
                e = e.getUpstream()
            } while (e)
        })
    };
    var g_ = p_.updatePayload = function (t, e) {
        "remain" !== e && (t.context.payload = e)
    }, m_ = Oa(0);
    Sa.wrapStageHandler = function (t, e) {
        return x(t) && (t = {
            overallReset: t,
            seriesType: Na(t)
        }), t.uid = Cr("stageHandler"), e && (t.visualType = e), t
    };
    var v_, y_ = {}, x_ = {};
    Ra(y_, Dx), Ra(x_, Co), y_.eachSeriesByType = y_.eachRawSeriesByType = function (t) {
        v_ = t
    }, y_.eachComponent = function (t) {
        "series" === t.mainType && t.subType && (v_ = t.subType)
    };
    var __ = ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"],
        w_ = {
            color: __,
            colorLayer: [["#37A2DA", "#ffd85c", "#fd7b5f"], ["#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5"], ["#37A2DA", "#32C5E9", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378EA", "#96BFFF"], __]
        },
        b_ = ["#dd6b66", "#759aa0", "#e69d87", "#8dc1a9", "#ea7e53", "#eedd78", "#73a373", "#73b9bc", "#7289ab", "#91ca8c", "#f49f42"],
        S_ = {
            color: b_,
            backgroundColor: "#333",
            tooltip: {axisPointer: {lineStyle: {color: "#eee"}, crossStyle: {color: "#eee"}}},
            legend: {textStyle: {color: "#eee"}},
            textStyle: {color: "#eee"},
            title: {textStyle: {color: "#eee"}},
            toolbox: {iconStyle: {normal: {borderColor: "#eee"}}},
            dataZoom: {textStyle: {color: "#eee"}},
            visualMap: {textStyle: {color: "#eee"}},
            timeline: {
                lineStyle: {color: "#eee"},
                itemStyle: {normal: {color: b_[1]}},
                label: {normal: {textStyle: {color: "#eee"}}},
                controlStyle: {normal: {color: "#eee", borderColor: "#eee"}}
            },
            timeAxis: {
                axisLine: {lineStyle: {color: "#eee"}},
                axisTick: {lineStyle: {color: "#eee"}},
                axisLabel: {textStyle: {color: "#eee"}},
                splitLine: {lineStyle: {type: "dashed", color: "#aaa"}},
                splitArea: {areaStyle: {color: "#eee"}}
            },
            logAxis: {
                axisLine: {lineStyle: {color: "#eee"}},
                axisTick: {lineStyle: {color: "#eee"}},
                axisLabel: {textStyle: {color: "#eee"}},
                splitLine: {lineStyle: {type: "dashed", color: "#aaa"}},
                splitArea: {areaStyle: {color: "#eee"}}
            },
            valueAxis: {
                axisLine: {lineStyle: {color: "#eee"}},
                axisTick: {lineStyle: {color: "#eee"}},
                axisLabel: {textStyle: {color: "#eee"}},
                splitLine: {lineStyle: {type: "dashed", color: "#aaa"}},
                splitArea: {areaStyle: {color: "#eee"}}
            },
            categoryAxis: {
                axisLine: {lineStyle: {color: "#eee"}},
                axisTick: {lineStyle: {color: "#eee"}},
                axisLabel: {textStyle: {color: "#eee"}},
                splitLine: {lineStyle: {type: "dashed", color: "#aaa"}},
                splitArea: {areaStyle: {color: "#eee"}}
            },
            line: {symbol: "circle"},
            graph: {color: b_},
            gauge: {title: {textStyle: {color: "#eee"}}},
            candlestick: {
                itemStyle: {
                    normal: {
                        color: "#FD1050",
                        color0: "#0CF49B",
                        borderColor: "#FD1050",
                        borderColor0: "#0CF49B"
                    }
                }
            }
        };
    S_.categoryAxis.splitLine.show = !1, dx.extend({
        type: "dataset",
        defaultOption: {seriesLayoutBy: Ix, sourceHeader: null, dimensions: null, source: null},
        optionUpdated: function () {
            lo(this)
        }
    }), t_.extend({type: "dataset"});
    var M_ = Ii.extend({
        type: "ellipse", shape: {cx: 0, cy: 0, rx: 0, ry: 0}, buildPath: function (t, e) {
            var n = .5522848, i = e.cx, r = e.cy, o = e.rx, a = e.ry, s = o * n, l = a * n;
            t.moveTo(i - o, r), t.bezierCurveTo(i - o, r - l, i - s, r - a, i, r - a), t.bezierCurveTo(i + s, r - a, i + o, r - l, i + o, r), t.bezierCurveTo(i + o, r + l, i + s, r + a, i, r + a), t.bezierCurveTo(i - s, r + a, i - o, r + l, i - o, r), t.closePath()
        }
    }), I_ = /[\s,]+/;
    Fa.prototype.parse = function (t, e) {
        e = e || {};
        var n = Ba(t);
        if (!n) throw new Error("Illegal svg");
        var i = new am;
        this._root = i;
        var r = n.getAttribute("viewBox") || "", o = parseFloat(n.getAttribute("width") || e.width),
            a = parseFloat(n.getAttribute("height") || e.height);
        isNaN(o) && (o = null), isNaN(a) && (a = null), Ga(n, i, null, !0);
        for (var s = n.firstChild; s;) this._parseNode(s, i), s = s.nextSibling;
        var l, h;
        if (r) {
            var u = L(r).split(I_);
            u.length >= 4 && (l = {
                x: parseFloat(u[0] || 0),
                y: parseFloat(u[1] || 0),
                width: parseFloat(u[2]),
                height: parseFloat(u[3])
            })
        }
        if (l && null != o && null != a && (h = Ya(l, o, a), !e.ignoreViewBox)) {
            var c = i;
            (i = new am).add(c), c.scale = h.scale.slice(), c.position = h.position.slice()
        }
        return e.ignoreRootClip || null == o || null == a || i.setClipPath(new My({
            shape: {
                x: 0,
                y: 0,
                width: o,
                height: a
            }
        })), {root: i, width: o, height: a, viewBoxRect: l, viewBoxTransform: h}
    }, Fa.prototype._parseNode = function (t, e) {
        var n = t.nodeName.toLowerCase();
        "defs" === n ? this._isDefine = !0 : "text" === n && (this._isText = !0);
        var i;
        if (this._isDefine) {
            if (a = A_[n]) {
                var r = a.call(this, t), o = t.getAttribute("id");
                o && (this._defs[o] = r)
            }
        } else {
            var a = T_[n];
            a && (i = a.call(this, t, e), e.add(i))
        }
        for (var s = t.firstChild; s;) 1 === s.nodeType && this._parseNode(s, i), 3 === s.nodeType && this._isText && this._parseText(s, i), s = s.nextSibling;
        "defs" === n ? this._isDefine = !1 : "text" === n && (this._isText = !1)
    }, Fa.prototype._parseText = function (t, e) {
        if (1 === t.nodeType) {
            var n = t.getAttribute("dx") || 0, i = t.getAttribute("dy") || 0;
            this._textX += parseFloat(n), this._textY += parseFloat(i)
        }
        var r = new dy({
            style: {text: t.textContent, transformText: !0},
            position: [this._textX || 0, this._textY || 0]
        });
        Ha(e, r), Ga(t, r, this._defs);
        var o = r.style.fontSize;
        o && o < 9 && (r.style.fontSize = 9, r.scale = r.scale || [1, 1], r.scale[0] *= o / 9, r.scale[1] *= o / 9);
        var a = r.getBoundingRect();
        return this._textX += a.width, e.add(r), r
    };
    var T_ = {
            g: function (t, e) {
                var n = new am;
                return Ha(e, n), Ga(t, n, this._defs), n
            }, rect: function (t, e) {
                var n = new My;
                return Ha(e, n), Ga(t, n, this._defs), n.setShape({
                    x: parseFloat(t.getAttribute("x") || 0),
                    y: parseFloat(t.getAttribute("y") || 0),
                    width: parseFloat(t.getAttribute("width") || 0),
                    height: parseFloat(t.getAttribute("height") || 0)
                }), n
            }, circle: function (t, e) {
                var n = new fy;
                return Ha(e, n), Ga(t, n, this._defs), n.setShape({
                    cx: parseFloat(t.getAttribute("cx") || 0),
                    cy: parseFloat(t.getAttribute("cy") || 0),
                    r: parseFloat(t.getAttribute("r") || 0)
                }), n
            }, line: function (t, e) {
                var n = new Ty;
                return Ha(e, n), Ga(t, n, this._defs), n.setShape({
                    x1: parseFloat(t.getAttribute("x1") || 0),
                    y1: parseFloat(t.getAttribute("y1") || 0),
                    x2: parseFloat(t.getAttribute("x2") || 0),
                    y2: parseFloat(t.getAttribute("y2") || 0)
                }), n
            }, ellipse: function (t, e) {
                var n = new M_;
                return Ha(e, n), Ga(t, n, this._defs), n.setShape({
                    cx: parseFloat(t.getAttribute("cx") || 0),
                    cy: parseFloat(t.getAttribute("cy") || 0),
                    rx: parseFloat(t.getAttribute("rx") || 0),
                    ry: parseFloat(t.getAttribute("ry") || 0)
                }), n
            }, polygon: function (t, e) {
                var n = t.getAttribute("points");
                n && (n = Wa(n));
                var i = new _y({shape: {points: n || []}});
                return Ha(e, i), Ga(t, i, this._defs), i
            }, polyline: function (t, e) {
                var n = new Ii;
                Ha(e, n), Ga(t, n, this._defs);
                var i = t.getAttribute("points");
                return i && (i = Wa(i)), new wy({shape: {points: i || []}})
            }, image: function (t, e) {
                var n = new hn;
                return Ha(e, n), Ga(t, n, this._defs), n.setStyle({
                    image: t.getAttribute("xlink:href"),
                    x: t.getAttribute("x"),
                    y: t.getAttribute("y"),
                    width: t.getAttribute("width"),
                    height: t.getAttribute("height")
                }), n
            }, text: function (t, e) {
                var n = t.getAttribute("x") || 0, i = t.getAttribute("y") || 0, r = t.getAttribute("dx") || 0,
                    o = t.getAttribute("dy") || 0;
                this._textX = parseFloat(n) + parseFloat(r), this._textY = parseFloat(i) + parseFloat(o);
                var a = new am;
                return Ha(e, a), Ga(t, a, this._defs), a
            }, tspan: function (t, e) {
                var n = t.getAttribute("x"), i = t.getAttribute("y");
                null != n && (this._textX = parseFloat(n)), null != i && (this._textY = parseFloat(i));
                var r = t.getAttribute("dx") || 0, o = t.getAttribute("dy") || 0, a = new am;
                return Ha(e, a), Ga(t, a, this._defs), this._textX += r, this._textY += o, a
            }, path: function (t, e) {
                var n = Di(t.getAttribute("d") || "");
                return Ha(e, n), Ga(t, n, this._defs), n
            }
        }, A_ = {
            lineargradient: function (t) {
                var e = parseInt(t.getAttribute("x1") || 0, 10), n = parseInt(t.getAttribute("y1") || 0, 10),
                    i = parseInt(t.getAttribute("x2") || 10, 10), r = parseInt(t.getAttribute("y2") || 0, 10),
                    o = new Ly(e, n, i, r);
                return Va(t, o), o
            }, radialgradient: function (t) {
            }
        }, C_ = {
            fill: "fill",
            stroke: "stroke",
            "stroke-width": "lineWidth",
            opacity: "opacity",
            "fill-opacity": "fillOpacity",
            "stroke-opacity": "strokeOpacity",
            "stroke-dasharray": "lineDash",
            "stroke-dashoffset": "lineDashOffset",
            "stroke-linecap": "lineCap",
            "stroke-linejoin": "lineJoin",
            "stroke-miterlimit": "miterLimit",
            "font-family": "fontFamily",
            "font-size": "fontSize",
            "font-style": "fontStyle",
            "font-weight": "fontWeight",
            "text-align": "textAlign",
            "alignment-baseline": "textBaseline"
        }, D_ = /url\(\s*#(.*?)\)/, k_ = /(translate|scale|rotate|skewX|skewY|matrix)\(([\-\s0-9\.e,]*)\)/g,
        P_ = /([^\s:;]+)\s*:\s*([^:;]+)/g, L_ = N(), O_ = {
            registerMap: function (t, e, n) {
                var i;
                return y(e) ? i = e : e.svg ? i = [{
                    type: "svg",
                    source: e.svg,
                    specialAreas: e.specialAreas
                }] : (e.geoJson && !e.features && (n = e.specialAreas, e = e.geoJson), i = [{
                    type: "geoJSON",
                    source: e,
                    specialAreas: n
                }]), d(i, function (t) {
                    var e = t.type;
                    "geoJson" === e && (e = t.type = "geoJSON"), (0, z_[e])(t)
                }), L_.set(t, i)
            }, retrieveMap: function (t) {
                return L_.get(t)
            }
        }, z_ = {
            geoJSON: function (t) {
                var e = t.source;
                t.geoJSON = _(e) ? "undefined" != typeof JSON && JSON.parse ? JSON.parse(e) : new Function("return (" + e + ");")() : e
            }, svg: function (t) {
                t.svgXML = Ba(t.source)
            }
        }, E_ = P, N_ = d, R_ = x, B_ = w, F_ = dx.parseClassType, V_ = {zrender: "4.0.6"}, H_ = 1e3, W_ = 1e3, G_ = 3e3,
        Z_ = {
            PROCESSOR: {FILTER: H_, STATISTIC: 5e3},
            VISUAL: {LAYOUT: W_, GLOBAL: 2e3, CHART: G_, COMPONENT: 4e3, BRUSH: 5e3}
        }, U_ = "__flagInMainProcess", X_ = "__optionUpdated", Y_ = /^[a-zA-Z0-9_]+$/;
    qa.prototype.on = ja("on"), qa.prototype.off = ja("off"), qa.prototype.one = ja("one"), u(qa, xg);
    var j_ = $a.prototype;
    j_._onframe = function () {
        if (!this._disposed) {
            var t = this._scheduler;
            if (this[X_]) {
                var e = this[X_].silent;
                this[U_] = !0, Qa(this), q_.update.call(this), this[U_] = !1, this[X_] = !1, ns.call(this, e), is.call(this, e)
            } else if (t.unfinished) {
                var n = 1, i = this._model;
                this._api;
                t.unfinished = !1;
                do {
                    var r = +new Date;
                    t.performSeriesTasks(i), t.performDataProcessorTasks(i), ts(this, i), t.performVisualTasks(i), hs(this, this._model, 0, "remain"), n -= +new Date - r
                } while (n > 0 && t.unfinished);
                t.unfinished || this._zr.flush()
            }
        }
    }, j_.getDom = function () {
        return this._dom
    }, j_.getZr = function () {
        return this._zr
    }, j_.setOption = function (t, e, n) {
        var i;
        if (B_(e) && (n = e.lazyUpdate, i = e.silent, e = e.notMerge), this[U_] = !0, !this._model || e) {
            var r = new ko(this._api), o = this._theme, a = this._model = new Dx(null, null, o, r);
            a.scheduler = this._scheduler, a.init(null, null, o, r)
        }
        this._model.setOption(t, tw), n ? (this[X_] = {silent: i}, this[U_] = !1) : (Qa(this), q_.update.call(this), this._zr.flush(), this[X_] = !1, this[U_] = !1, ns.call(this, i), is.call(this, i))
    }, j_.setTheme = function () {
        console.error("ECharts#setTheme() is DEPRECATED in ECharts 3.0")
    }, j_.getModel = function () {
        return this._model
    }, j_.getOption = function () {
        return this._model && this._model.getOption()
    }, j_.getWidth = function () {
        return this._zr.getWidth()
    }, j_.getHeight = function () {
        return this._zr.getHeight()
    }, j_.getDevicePixelRatio = function () {
        return this._zr.painter.dpr || window.devicePixelRatio || 1
    }, j_.getRenderedCanvas = function (t) {
        if (Kp.canvasSupported) return (t = t || {}).pixelRatio = t.pixelRatio || 1, t.backgroundColor = t.backgroundColor || this._model.get("backgroundColor"), this._zr.painter.getRenderedCanvas(t)
    }, j_.getSvgDataUrl = function () {
        if (Kp.svgSupported) {
            var t = this._zr;
            return d(t.storage.getDisplayList(), function (t) {
                t.stopAnimation(!0)
            }), t.painter.pathToDataUrl()
        }
    }, j_.getDataURL = function (t) {
        var e = (t = t || {}).excludeComponents, n = this._model, i = [], r = this;
        N_(e, function (t) {
            n.eachComponent({mainType: t}, function (t) {
                var e = r._componentsMap[t.__viewId];
                e.group.ignore || (i.push(e), e.group.ignore = !0)
            })
        });
        var o = "svg" === this._zr.painter.getType() ? this.getSvgDataUrl() : this.getRenderedCanvas(t).toDataURL("image/" + (t && t.type || "png"));
        return N_(i, function (t) {
            t.group.ignore = !1
        }), o
    }, j_.getConnectedDataURL = function (t) {
        if (Kp.canvasSupported) {
            var e = this.group, i = Math.min, r = Math.max;
            if (aw[e]) {
                var o = 1 / 0, a = 1 / 0, s = -1 / 0, l = -1 / 0, h = [], u = t && t.pixelRatio || 1;
                d(ow, function (u, c) {
                    if (u.group === e) {
                        var d = u.getRenderedCanvas(n(t)), f = u.getDom().getBoundingClientRect();
                        o = i(f.left, o), a = i(f.top, a), s = r(f.right, s), l = r(f.bottom, l), h.push({
                            dom: d,
                            left: f.left,
                            top: f.top
                        })
                    }
                });
                var c = (s *= u) - (o *= u), f = (l *= u) - (a *= u), p = lg();
                p.width = c, p.height = f;
                var g = wn(p);
                return N_(h, function (t) {
                    var e = new hn({style: {x: t.left * u - o, y: t.top * u - a, image: t.dom}});
                    g.add(e)
                }), g.refreshImmediately(), p.toDataURL("image/" + (t && t.type || "png"))
            }
            return this.getDataURL(t)
        }
    }, j_.convertToPixel = v(Ka, "convertToPixel"), j_.convertFromPixel = v(Ka, "convertFromPixel"), j_.containPixel = function (t, e) {
        var n;
        return t = zn(this._model, t), d(t, function (t, i) {
            i.indexOf("Models") >= 0 && d(t, function (t) {
                var r = t.coordinateSystem;
                if (r && r.containPoint) n |= !!r.containPoint(e); else if ("seriesModels" === i) {
                    var o = this._chartsMap[t.__viewId];
                    o && o.containPoint && (n |= o.containPoint(e, t))
                }
            }, this)
        }, this), !!n
    }, j_.getVisual = function (t, e) {
        var n = (t = zn(this._model, t, {defaultMainType: "series"})).seriesModel.getData(),
            i = t.hasOwnProperty("dataIndexInside") ? t.dataIndexInside : t.hasOwnProperty("dataIndex") ? n.indexOfRawIndex(t.dataIndex) : null;
        return null != i ? n.getItemVisual(i, e) : n.getVisual(e)
    }, j_.getViewOfComponentModel = function (t) {
        return this._componentsMap[t.__viewId]
    }, j_.getViewOfSeriesModel = function (t) {
        return this._chartsMap[t.__viewId]
    };
    var q_ = {
        prepareAndUpdate: function (t) {
            Qa(this), q_.update.call(this, t)
        }, update: function (t) {
            var e = this._model, n = this._api, i = this._zr, r = this._coordSysMgr, o = this._scheduler;
            if (e) {
                o.restoreData(e, t), o.performSeriesTasks(e), r.create(e, n), o.performDataProcessorTasks(e, t), ts(this, e), r.update(e, n), as(e), o.performVisualTasks(e, t), ss(this, e, n, t);
                var a = e.get("backgroundColor") || "transparent";
                if (Kp.canvasSupported) i.setBackgroundColor(a); else {
                    var s = Nt(a);
                    a = Zt(s, "rgb"), 0 === s[3] && (a = "transparent")
                }
                us(e, n)
            }
        }, updateTransform: function (t) {
            var e = this._model, n = this, i = this._api;
            if (e) {
                var r = [];
                e.eachComponent(function (o, a) {
                    var s = n.getViewOfComponentModel(a);
                    if (s && s.__alive) if (s.updateTransform) {
                        var l = s.updateTransform(a, e, i, t);
                        l && l.update && r.push(s)
                    } else r.push(s)
                });
                var o = N();
                e.eachSeries(function (r) {
                    var a = n._chartsMap[r.__viewId];
                    if (a.updateTransform) {
                        var s = a.updateTransform(r, e, i, t);
                        s && s.update && o.set(r.uid, 1)
                    } else o.set(r.uid, 1)
                }), as(e), this._scheduler.performVisualTasks(e, t, {
                    setDirty: !0,
                    dirtyMap: o
                }), hs(n, e, 0, t, o), us(e, this._api)
            }
        }, updateView: function (t) {
            var e = this._model;
            e && (ga.markUpdateMethod(t, "updateView"), as(e), this._scheduler.performVisualTasks(e, t, {setDirty: !0}), ss(this, this._model, this._api, t), us(e, this._api))
        }, updateVisual: function (t) {
            q_.update.call(this, t)
        }, updateLayout: function (t) {
            q_.update.call(this, t)
        }
    };
    j_.resize = function (t) {
        this._zr.resize(t);
        var e = this._model;
        if (this._loadingFX && this._loadingFX.resize(), e) {
            var n = e.resetOption("media"), i = t && t.silent;
            this[U_] = !0, n && Qa(this), q_.update.call(this), this[U_] = !1, ns.call(this, i), is.call(this, i)
        }
    }, j_.showLoading = function (t, e) {
        if (B_(t) && (e = t, t = ""), t = t || "default", this.hideLoading(), rw[t]) {
            var n = rw[t](this._api, e), i = this._zr;
            this._loadingFX = n, i.add(n)
        }
    }, j_.hideLoading = function () {
        this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null
    }, j_.makeActionFromEvent = function (t) {
        var e = o({}, t);
        return e.type = Q_[t.type], e
    }, j_.dispatchAction = function (t, e) {
        B_(e) || (e = {silent: !!e}), K_[t.type] && this._model && (this[U_] ? this._pendingActions.push(t) : (es.call(this, t, e.silent), e.flush ? this._zr.flush(!0) : !1 !== e.flush && Kp.browser.weChat && this._throttledZrFlush(), ns.call(this, e.silent), is.call(this, e.silent)))
    }, j_.appendData = function (t) {
        var e = t.seriesIndex;
        this.getModel().getSeriesByIndex(e).appendData(t), this._scheduler.unfinished = !0
    }, j_.on = ja("on"), j_.off = ja("off"), j_.one = ja("one");
    var $_ = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];
    j_._initEvents = function () {
        N_($_, function (t) {
            var e = function (e) {
                var n, i = this.getModel(), r = e.target;
                if ("globalout" === t) n = {}; else if (r && null != r.dataIndex) {
                    var a = r.dataModel || i.getSeriesByIndex(r.seriesIndex);
                    n = a && a.getDataParams(r.dataIndex, r.dataType, r) || {}
                } else r && r.eventData && (n = o({}, r.eventData));
                if (n) {
                    var s = n.componentType, l = n.componentIndex;
                    "markLine" !== s && "markPoint" !== s && "markArea" !== s || (s = "series", l = n.seriesIndex);
                    var h = s && null != l && i.getComponent(s, l),
                        u = h && this["series" === h.mainType ? "_chartsMap" : "_componentsMap"][h.__viewId];
                    n.event = e, n.type = t, this._ecEventProcessor.eventInfo = {
                        targetEl: r,
                        packedEvent: n,
                        model: h,
                        view: u
                    }, this.trigger(t, n)
                }
            };
            e.zrEventfulCallAtLast = !0, this._zr.on(t, e, this)
        }, this), N_(Q_, function (t, e) {
            this._messageCenter.on(e, function (t) {
                this.trigger(e, t)
            }, this)
        }, this)
    }, j_.isDisposed = function () {
        return this._disposed
    }, j_.clear = function () {
        this.setOption({series: []}, !0)
    }, j_.dispose = function () {
        if (!this._disposed) {
            this._disposed = !0, Nn(this.getDom(), hw, "");
            var t = this._api, e = this._model;
            N_(this._componentsViews, function (n) {
                n.dispose(e, t)
            }), N_(this._chartsViews, function (n) {
                n.dispose(e, t)
            }), this._zr.dispose(), delete ow[this.id]
        }
    }, u($a, xg), gs.prototype = {
        constructor: gs, normalizeQuery: function (t) {
            var e = {}, n = {}, i = {};
            if (_(t)) {
                var r = F_(t);
                e.mainType = r.main || null, e.subType = r.sub || null
            } else {
                var o = ["Index", "Name", "Id"], a = {name: 1, dataIndex: 1, dataType: 1};
                d(t, function (t, r) {
                    for (var s = !1, l = 0; l < o.length; l++) {
                        var h = o[l], u = r.lastIndexOf(h);
                        if (u > 0 && u === r.length - h.length) {
                            var c = r.slice(0, u);
                            "data" !== c && (e.mainType = c, e[h.toLowerCase()] = t, s = !0)
                        }
                    }
                    a.hasOwnProperty(r) && (n[r] = t, s = !0), s || (i[r] = t)
                })
            }
            return {cptQuery: e, dataQuery: n, otherQuery: i}
        }, filter: function (t, e, n) {
            function i(t, e, n, i) {
                return null == t[n] || e[i || n] === t[n]
            }

            var r = this.eventInfo;
            if (!r) return !0;
            var o = r.targetEl, a = r.packedEvent, s = r.model, l = r.view;
            if (!s || !l) return !0;
            var h = e.cptQuery, u = e.dataQuery;
            return i(h, s, "mainType") && i(h, s, "subType") && i(h, s, "index", "componentIndex") && i(h, s, "name") && i(h, s, "id") && i(u, a, "name") && i(u, a, "dataIndex") && i(u, a, "dataType") && (!l.filterForExposedEvent || l.filterForExposedEvent(t, e.otherQuery, o, a))
        }, afterTrigger: function () {
            this.eventInfo = null
        }
    };
    var K_ = {}, Q_ = {}, J_ = [], tw = [], ew = [], nw = [], iw = {}, rw = {}, ow = {}, aw = {}, sw = new Date - 0,
        lw = new Date - 0, hw = "_echarts_instance_", uw = vs;
    Ms(2e3, u_), _s(Gx), ws(5e3, function (t) {
        var e = N();
        t.eachSeries(function (t) {
            var n = t.get("stack");
            if (n) {
                var i = e.get(n) || e.set(n, []), r = t.getData(), o = {
                    stackResultDimension: r.getCalculationInfo("stackResultDimension"),
                    stackedOverDimension: r.getCalculationInfo("stackedOverDimension"),
                    stackedDimension: r.getCalculationInfo("stackedDimension"),
                    stackedByDimension: r.getCalculationInfo("stackedByDimension"),
                    isStackedByIndex: r.getCalculationInfo("isStackedByIndex"),
                    data: r,
                    seriesModel: t
                };
                if (!o.stackedDimension || !o.isStackedByIndex && !o.stackedByDimension) return;
                i.length && r.setCalculationInfo("stackedOnSeries", i[i.length - 1].seriesModel), i.push(o)
            }
        }), e.each(Yo)
    }), Ts("default", function (t, e) {
        a(e = e || {}, {
            text: "loading",
            color: "#c23531",
            textColor: "#000",
            maskColor: "rgba(255, 255, 255, 0.8)",
            zlevel: 0
        });
        var n = new My({style: {fill: e.maskColor}, zlevel: e.zlevel, z: 1e4}), i = new Dy({
            shape: {startAngle: -f_ / 2, endAngle: -f_ / 2 + .1, r: 10},
            style: {stroke: e.color, lineCap: "round", lineWidth: 5},
            zlevel: e.zlevel,
            z: 10001
        }), r = new My({
            style: {
                fill: "none",
                text: e.text,
                textPosition: "right",
                textDistance: 10,
                textFill: e.textColor
            }, zlevel: e.zlevel, z: 10001
        });
        i.animateShape(!0).when(1e3, {endAngle: 3 * f_ / 2}).start("circularInOut"), i.animateShape(!0).when(1e3, {startAngle: 3 * f_ / 2}).delay(300).start("circularInOut");
        var o = new am;
        return o.add(i), o.add(r), o.add(n), o.resize = function () {
            var e = t.getWidth() / 2, o = t.getHeight() / 2;
            i.setShape({cx: e, cy: o});
            var a = i.shape.r;
            r.setShape({x: e - a, y: o - a, width: 2 * a, height: 2 * a}), n.setShape({
                x: 0,
                y: 0,
                width: t.getWidth(),
                height: t.getHeight()
            })
        }, o.resize(), o
    }), bs({type: "highlight", event: "highlight", update: "highlight"}, R), bs({
        type: "downplay",
        event: "downplay",
        update: "downplay"
    }, R), xs("light", w_), xs("dark", S_);
    var cw = {};
    Ls.prototype = {
        constructor: Ls, add: function (t) {
            return this._add = t, this
        }, update: function (t) {
            return this._update = t, this
        }, remove: function (t) {
            return this._remove = t, this
        }, execute: function () {
            var t = this._old, e = this._new, n = {}, i = [], r = [];
            for (Os(t, {}, i, "_oldKeyGetter", this), Os(e, n, r, "_newKeyGetter", this), o = 0; o < t.length; o++) null != (s = n[a = i[o]]) ? ((h = s.length) ? (1 === h && (n[a] = null), s = s.unshift()) : n[a] = null, this._update && this._update(s, o)) : this._remove && this._remove(o);
            for (var o = 0; o < r.length; o++) {
                var a = r[o];
                if (n.hasOwnProperty(a)) {
                    var s = n[a];
                    if (null == s) continue;
                    if (s.length) for (var l = 0, h = s.length; l < h; l++) this._add && this._add(s[l]); else this._add && this._add(s)
                }
            }
        }
    };
    var dw = N(["tooltip", "label", "itemName", "itemId", "seriesName"]), fw = w, pw = -1, gw = "e\0\0", mw = {
            float: "undefined" == typeof Float64Array ? Array : Float64Array,
            int: "undefined" == typeof Int32Array ? Array : Int32Array,
            ordinal: Array,
            number: Array,
            time: Array
        }, vw = "undefined" == typeof Uint32Array ? Array : Uint32Array,
        yw = "undefined" == typeof Int32Array ? Array : Int32Array,
        xw = "undefined" == typeof Uint16Array ? Array : Uint16Array,
        _w = ["hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_rawData", "_chunkSize", "_chunkCount", "_dimValueGetter", "_count", "_rawCount", "_nameDimIdx", "_idDimIdx"],
        ww = ["_extent", "_approximateExtent", "_rawExtent"], bw = function (t, e) {
            t = t || ["x", "y"];
            for (var n = {}, i = [], r = {}, o = 0; o < t.length; o++) {
                var a = t[o];
                _(a) && (a = {name: a});
                var s = a.name;
                a.type = a.type || "float", a.coordDim || (a.coordDim = s, a.coordDimIndex = 0), a.otherDims = a.otherDims || {}, i.push(s), n[s] = a, a.index = o, a.createInvertedIndices && (r[s] = [])
            }
            this.dimensions = i, this._dimensionInfos = n, this.hostModel = e, this.dataType, this._indices = null, this._count = 0, this._rawCount = 0, this._storage = {}, this._nameList = [], this._idList = [], this._optionModels = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], this.hasItemVisual = {}, this._itemLayouts = [], this._graphicEls = [], this._chunkSize = 1e5, this._chunkCount = 0, this._rawData, this._rawExtent = {}, this._extent = {}, this._approximateExtent = {}, this._dimensionsSummary = zs(this), this._invertedIndicesMap = r, this._calculationInfo = {}
        }, Sw = bw.prototype;
    Sw.type = "list", Sw.hasItemOption = !0, Sw.getDimension = function (t) {
        return isNaN(t) || (t = this.dimensions[t] || t), t
    }, Sw.getDimensionInfo = function (t) {
        return this._dimensionInfos[this.getDimension(t)]
    }, Sw.getDimensionsOnCoord = function () {
        return this._dimensionsSummary.dataDimsOnCoord.slice()
    }, Sw.mapDimension = function (t, e) {
        var n = this._dimensionsSummary;
        if (null == e) return n.encodeFirstDimNotExtra[t];
        var i = n.encode[t];
        return !0 === e ? (i || []).slice() : i && i[e]
    }, Sw.initData = function (t, e, n) {
        (so.isInstance(t) || c(t)) && (t = new jo(t, this.dimensions.length)), this._rawData = t, this._storage = {}, this._indices = null, this._nameList = e || [], this._idList = [], this._nameRepeatCount = {}, n || (this.hasItemOption = !1), this.defaultDimValueGetter = Yx[this._rawData.getSource().sourceFormat], this._dimValueGetter = n = n || this.defaultDimValueGetter, this._dimValueGetterArrayRows = Yx.arrayRows, this._rawExtent = {}, this._initDataFromProvider(0, t.count()), t.pure && (this.hasItemOption = !1)
    }, Sw.getProvider = function () {
        return this._rawData
    }, Sw.appendData = function (t) {
        var e = this._rawData, n = this.count();
        e.appendData(t);
        var i = e.count();
        e.persistent || (i += n), this._initDataFromProvider(n, i)
    }, Sw.appendValues = function (t, e) {
        for (var n = this._chunkSize, i = this._storage, r = this.dimensions, o = r.length, a = this._rawExtent, s = this.count(), l = s + Math.max(t.length, e ? e.length : 0), h = this._chunkCount, u = 0; u < o; u++) a[v = r[u]] || (a[v] = [1 / 0, -1 / 0]), i[v] || (i[v] = []), Vs(i, this._dimensionInfos[v], n, h, l), this._chunkCount = i[v].length;
        for (var c = new Array(o), d = s; d < l; d++) {
            for (var f = d - s, p = Math.floor(d / n), g = d % n, m = 0; m < o; m++) {
                var v = r[m], y = this._dimValueGetterArrayRows(t[f] || c, v, f, m);
                i[v][p][g] = y;
                var x = a[v];
                y < x[0] && (x[0] = y), y > x[1] && (x[1] = y)
            }
            e && (this._nameList[d] = e[f])
        }
        this._rawCount = this._count = l, this._extent = {}, Hs(this)
    }, Sw._initDataFromProvider = function (t, e) {
        if (!(t >= e)) {
            for (var n, i = this._chunkSize, r = this._rawData, o = this._storage, a = this.dimensions, s = a.length, l = this._dimensionInfos, h = this._nameList, u = this._idList, c = this._rawExtent, d = this._nameRepeatCount = {}, f = this._chunkCount, p = 0; p < s; p++) {
                c[w = a[p]] || (c[w] = [1 / 0, -1 / 0]);
                var g = l[w];
                0 === g.otherDims.itemName && (n = this._nameDimIdx = p), 0 === g.otherDims.itemId && (this._idDimIdx = p), o[w] || (o[w] = []), Vs(o, g, i, f, e), this._chunkCount = o[w].length
            }
            for (var m = new Array(s), v = t; v < e; v++) {
                m = r.getItem(v, m);
                for (var y = Math.floor(v / i), x = v % i, _ = 0; _ < s; _++) {
                    var w = a[_], b = o[w][y], S = this._dimValueGetter(m, w, v, _);
                    b[x] = S;
                    var M = c[w];
                    S < M[0] && (M[0] = S), S > M[1] && (M[1] = S)
                }
                if (!r.pure) {
                    var I = h[v];
                    if (m && null == I) if (null != m.name) h[v] = I = m.name; else if (null != n) {
                        var T = a[n], A = o[T][y];
                        if (A) {
                            I = A[x];
                            var C = l[T].ordinalMeta;
                            C && C.categories.length && (I = C.categories[I])
                        }
                    }
                    var D = null == m ? null : m.id;
                    null == D && null != I && (d[I] = d[I] || 0, D = I, d[I] > 0 && (D += "__ec__" + d[I]), d[I]++), null != D && (u[v] = D)
                }
            }
            !r.persistent && r.clean && r.clean(), this._rawCount = this._count = e, this._extent = {}, Hs(this)
        }
    }, Sw.count = function () {
        return this._count
    }, Sw.getIndices = function () {
        var t = this._indices;
        if (t) {
            var e = t.constructor, n = this._count;
            if (e === Array) {
                i = new e(n);
                for (r = 0; r < n; r++) i[r] = t[r]
            } else i = new e(t.buffer, 0, n)
        } else for (var i = new (e = Rs(this))(this.count()), r = 0; r < i.length; r++) i[r] = r;
        return i
    }, Sw.get = function (t, e) {
        if (!(e >= 0 && e < this._count)) return NaN;
        var n = this._storage;
        if (!n[t]) return NaN;
        e = this.getRawIndex(e);
        var i = Math.floor(e / this._chunkSize), r = e % this._chunkSize;
        return n[t][i][r]
    }, Sw.getByRawIndex = function (t, e) {
        if (!(e >= 0 && e < this._rawCount)) return NaN;
        var n = this._storage[t];
        if (!n) return NaN;
        var i = Math.floor(e / this._chunkSize), r = e % this._chunkSize;
        return n[i][r]
    }, Sw._getFast = function (t, e) {
        var n = Math.floor(e / this._chunkSize), i = e % this._chunkSize;
        return this._storage[t][n][i]
    }, Sw.getValues = function (t, e) {
        var n = [];
        y(t) || (e = t, t = this.dimensions);
        for (var i = 0, r = t.length; i < r; i++) n.push(this.get(t[i], e));
        return n
    }, Sw.hasValue = function (t) {
        for (var e = this._dimensionsSummary.dataDimsOnCoord, n = this._dimensionInfos, i = 0, r = e.length; i < r; i++) if ("ordinal" !== n[e[i]].type && isNaN(this.get(e[i], t))) return !1;
        return !0
    }, Sw.getDataExtent = function (t) {
        t = this.getDimension(t);
        var e = [1 / 0, -1 / 0];
        if (!this._storage[t]) return e;
        var n, i = this.count();
        if (!this._indices) return this._rawExtent[t].slice();
        if (n = this._extent[t]) return n.slice();
        for (var r = (n = e)[0], o = n[1], a = 0; a < i; a++) {
            var s = this._getFast(t, this.getRawIndex(a));
            s < r && (r = s), s > o && (o = s)
        }
        return n = [r, o], this._extent[t] = n, n
    }, Sw.getApproximateExtent = function (t) {
        return t = this.getDimension(t), this._approximateExtent[t] || this.getDataExtent(t)
    }, Sw.setApproximateExtent = function (t, e) {
        e = this.getDimension(e), this._approximateExtent[e] = t.slice()
    }, Sw.getCalculationInfo = function (t) {
        return this._calculationInfo[t]
    }, Sw.setCalculationInfo = function (t, e) {
        fw(t) ? o(this._calculationInfo, t) : this._calculationInfo[t] = e
    }, Sw.getSum = function (t) {
        var e = 0;
        if (this._storage[t]) for (var n = 0, i = this.count(); n < i; n++) {
            var r = this.get(t, n);
            isNaN(r) || (e += r)
        }
        return e
    }, Sw.getMedian = function (t) {
        var e = [];
        this.each(t, function (t, n) {
            isNaN(t) || e.push(t)
        });
        var n = [].concat(e).sort(function (t, e) {
            return t - e
        }), i = this.count();
        return 0 === i ? 0 : i % 2 == 1 ? n[(i - 1) / 2] : (n[i / 2] + n[i / 2 - 1]) / 2
    }, Sw.rawIndexOf = function (t, e) {
        var n = (t && this._invertedIndicesMap[t])[e];
        return null == n || isNaN(n) ? pw : n
    }, Sw.indexOfName = function (t) {
        for (var e = 0, n = this.count(); e < n; e++) if (this.getName(e) === t) return e;
        return -1
    }, Sw.indexOfRawIndex = function (t) {
        if (!this._indices) return t;
        if (t >= this._rawCount || t < 0) return -1;
        var e = this._indices, n = e[t];
        if (null != n && n < this._count && n === t) return t;
        for (var i = 0, r = this._count - 1; i <= r;) {
            var o = (i + r) / 2 | 0;
            if (e[o] < t) i = o + 1; else {
                if (!(e[o] > t)) return o;
                r = o - 1
            }
        }
        return -1
    }, Sw.indicesOfNearest = function (t, e, n) {
        var i = [];
        if (!this._storage[t]) return i;
        null == n && (n = 1 / 0);
        for (var r = Number.MAX_VALUE, o = -1, a = 0, s = this.count(); a < s; a++) {
            var l = e - this.get(t, a), h = Math.abs(l);
            l <= n && h <= r && ((h < r || l >= 0 && o < 0) && (r = h, o = l, i.length = 0), i.push(a))
        }
        return i
    }, Sw.getRawIndex = Gs, Sw.getRawDataItem = function (t) {
        if (this._rawData.persistent) return this._rawData.getItem(this.getRawIndex(t));
        for (var e = [], n = 0; n < this.dimensions.length; n++) {
            var i = this.dimensions[n];
            e.push(this.get(i, t))
        }
        return e
    }, Sw.getName = function (t) {
        var e = this.getRawIndex(t);
        return this._nameList[e] || Ws(this, this._nameDimIdx, e) || ""
    }, Sw.getId = function (t) {
        return Us(this, this.getRawIndex(t))
    }, Sw.each = function (t, e, n, i) {
        if (this._count) {
            "function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this;
            for (var r = (t = f(Xs(t), this.getDimension, this)).length, o = 0; o < this.count(); o++) switch (r) {
                case 0:
                    e.call(n, o);
                    break;
                case 1:
                    e.call(n, this.get(t[0], o), o);
                    break;
                case 2:
                    e.call(n, this.get(t[0], o), this.get(t[1], o), o);
                    break;
                default:
                    for (var a = 0, s = []; a < r; a++) s[a] = this.get(t[a], o);
                    s[a] = o, e.apply(n, s)
            }
        }
    }, Sw.filterSelf = function (t, e, n, i) {
        if (this._count) {
            "function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this, t = f(Xs(t), this.getDimension, this);
            for (var r = this.count(), o = new (Rs(this))(r), a = [], s = t.length, l = 0, h = t[0], u = 0; u < r; u++) {
                var c, d = this.getRawIndex(u);
                if (0 === s) c = e.call(n, u); else if (1 === s) {
                    var p = this._getFast(h, d);
                    c = e.call(n, p, u)
                } else {
                    for (var g = 0; g < s; g++) a[g] = this._getFast(h, d);
                    a[g] = u, c = e.apply(n, a)
                }
                c && (o[l++] = d)
            }
            return l < r && (this._indices = o), this._count = l, this._extent = {}, this.getRawIndex = this._indices ? Zs : Gs, this
        }
    }, Sw.selectRange = function (t) {
        if (this._count) {
            var e = [];
            for (var n in t) t.hasOwnProperty(n) && e.push(n);
            var i = e.length;
            if (i) {
                var r = this.count(), o = new (Rs(this))(r), a = 0, s = e[0], l = t[s][0], h = t[s][1], u = !1;
                if (!this._indices) {
                    var c = 0;
                    if (1 === i) {
                        for (var d = this._storage[e[0]], f = 0; f < this._chunkCount; f++) for (var p = d[f], g = Math.min(this._count - f * this._chunkSize, this._chunkSize), m = 0; m < g; m++) ((w = p[m]) >= l && w <= h || isNaN(w)) && (o[a++] = c), c++;
                        u = !0
                    } else if (2 === i) {
                        for (var d = this._storage[s], v = this._storage[e[1]], y = t[e[1]][0], x = t[e[1]][1], f = 0; f < this._chunkCount; f++) for (var p = d[f], _ = v[f], g = Math.min(this._count - f * this._chunkSize, this._chunkSize), m = 0; m < g; m++) {
                            var w = p[m], b = _[m];
                            (w >= l && w <= h || isNaN(w)) && (b >= y && b <= x || isNaN(b)) && (o[a++] = c), c++
                        }
                        u = !0
                    }
                }
                if (!u) if (1 === i) for (m = 0; m < r; m++) {
                    M = this.getRawIndex(m);
                    ((w = this._getFast(s, M)) >= l && w <= h || isNaN(w)) && (o[a++] = M)
                } else for (m = 0; m < r; m++) {
                    for (var S = !0, M = this.getRawIndex(m), f = 0; f < i; f++) {
                        var I = e[f];
                        ((w = this._getFast(n, M)) < t[I][0] || w > t[I][1]) && (S = !1)
                    }
                    S && (o[a++] = this.getRawIndex(m))
                }
                return a < r && (this._indices = o), this._count = a, this._extent = {}, this.getRawIndex = this._indices ? Zs : Gs, this
            }
        }
    }, Sw.mapArray = function (t, e, n, i) {
        "function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this;
        var r = [];
        return this.each(t, function () {
            r.push(e && e.apply(this, arguments))
        }, n), r
    }, Sw.map = function (t, e, n, i) {
        n = n || i || this;
        var r = Ys(this, t = f(Xs(t), this.getDimension, this));
        r._indices = this._indices, r.getRawIndex = r._indices ? Zs : Gs;
        for (var o = r._storage, a = [], s = this._chunkSize, l = t.length, h = this.count(), u = [], c = r._rawExtent, d = 0; d < h; d++) {
            for (var p = 0; p < l; p++) u[p] = this.get(t[p], d);
            u[l] = d;
            var g = e && e.apply(n, u);
            if (null != g) {
                "object" != typeof g && (a[0] = g, g = a);
                for (var m = this.getRawIndex(d), v = Math.floor(m / s), y = m % s, x = 0; x < g.length; x++) {
                    var _ = t[x], w = g[x], b = c[_], S = o[_];
                    S && (S[v][y] = w), w < b[0] && (b[0] = w), w > b[1] && (b[1] = w)
                }
            }
        }
        return r
    }, Sw.downSample = function (t, e, n, i) {
        for (var r = Ys(this, [t]), o = r._storage, a = [], s = Math.floor(1 / e), l = o[t], h = this.count(), u = this._chunkSize, c = r._rawExtent[t], d = new (Rs(this))(h), f = 0, p = 0; p < h; p += s) {
            s > h - p && (s = h - p, a.length = s);
            for (var g = 0; g < s; g++) {
                var m = this.getRawIndex(p + g), v = Math.floor(m / u), y = m % u;
                a[g] = l[v][y]
            }
            var x = n(a), _ = this.getRawIndex(Math.min(p + i(a, x) || 0, h - 1)), w = _ % u;
            l[Math.floor(_ / u)][w] = x, x < c[0] && (c[0] = x), x > c[1] && (c[1] = x), d[f++] = _
        }
        return r._count = f, r._indices = d, r.getRawIndex = Zs, r
    }, Sw.getItemModel = function (t) {
        var e = this.hostModel;
        return new Ir(this.getRawDataItem(t), e, e && e.ecModel)
    }, Sw.diff = function (t) {
        var e = this;
        return new Ls(t ? t.getIndices() : [], this.getIndices(), function (e) {
            return Us(t, e)
        }, function (t) {
            return Us(e, t)
        })
    }, Sw.getVisual = function (t) {
        var e = this._visual;
        return e && e[t]
    }, Sw.setVisual = function (t, e) {
        if (fw(t)) for (var n in t) t.hasOwnProperty(n) && this.setVisual(n, t[n]); else this._visual = this._visual || {}, this._visual[t] = e
    }, Sw.setLayout = function (t, e) {
        if (fw(t)) for (var n in t) t.hasOwnProperty(n) && this.setLayout(n, t[n]); else this._layout[t] = e
    }, Sw.getLayout = function (t) {
        return this._layout[t]
    }, Sw.getItemLayout = function (t) {
        return this._itemLayouts[t]
    }, Sw.setItemLayout = function (t, e, n) {
        this._itemLayouts[t] = n ? o(this._itemLayouts[t] || {}, e) : e
    }, Sw.clearItemLayouts = function () {
        this._itemLayouts.length = 0
    }, Sw.getItemVisual = function (t, e, n) {
        var i = this._itemVisuals[t], r = i && i[e];
        return null != r || n ? r : this.getVisual(e)
    }, Sw.setItemVisual = function (t, e, n) {
        var i = this._itemVisuals[t] || {}, r = this.hasItemVisual;
        if (this._itemVisuals[t] = i, fw(e)) for (var o in e) e.hasOwnProperty(o) && (i[o] = e[o], r[o] = !0); else i[e] = n, r[e] = !0
    }, Sw.clearAllVisual = function () {
        this._visual = {}, this._itemVisuals = [], this.hasItemVisual = {}
    };
    var Mw = function (t) {
        t.seriesIndex = this.seriesIndex, t.dataIndex = this.dataIndex, t.dataType = this.dataType
    };
    Sw.setItemGraphicEl = function (t, e) {
        var n = this.hostModel;
        e && (e.dataIndex = t, e.dataType = this.dataType, e.seriesIndex = n && n.seriesIndex, "group" === e.type && e.traverse(Mw, e)), this._graphicEls[t] = e
    }, Sw.getItemGraphicEl = function (t) {
        return this._graphicEls[t]
    }, Sw.eachItemGraphicEl = function (t, e) {
        d(this._graphicEls, function (n, i) {
            n && t && t.call(e, n, i)
        })
    }, Sw.cloneShallow = function (t) {
        if (!t) {
            var e = f(this.dimensions, this.getDimensionInfo, this);
            t = new bw(e, this.hostModel)
        }
        if (t._storage = this._storage, Fs(t, this), this._indices) {
            var n = this._indices.constructor;
            t._indices = new n(this._indices)
        } else t._indices = null;
        return t.getRawIndex = t._indices ? Zs : Gs, t
    }, Sw.wrapMethod = function (t, e) {
        var n = this[t];
        "function" == typeof n && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function () {
            var t = n.apply(this, arguments);
            return e.apply(this, [t].concat(D(arguments)))
        })
    }, Sw.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "map"], Sw.CHANGABLE_METHODS = ["filterSelf", "selectRange"];
    var Iw = function (t, e) {
        return e = e || {}, $s(e.coordDimensions || [], t, {
            dimsDef: e.dimensionsDefine || t.dimensionsDefine,
            encodeDef: e.encodeDefine || t.encodeDefine,
            dimCount: e.dimensionsCount,
            generateCoord: e.generateCoord,
            generateCoordCount: e.generateCoordCount
        })
    };
    ol.prototype.parse = function (t) {
        return t
    }, ol.prototype.getSetting = function (t) {
        return this._setting[t]
    }, ol.prototype.contain = function (t) {
        var e = this._extent;
        return t >= e[0] && t <= e[1]
    }, ol.prototype.normalize = function (t) {
        var e = this._extent;
        return e[1] === e[0] ? .5 : (t - e[0]) / (e[1] - e[0])
    }, ol.prototype.scale = function (t) {
        var e = this._extent;
        return t * (e[1] - e[0]) + e[0]
    }, ol.prototype.unionExtent = function (t) {
        var e = this._extent;
        t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1])
    }, ol.prototype.unionExtentFromData = function (t, e) {
        this.unionExtent(t.getApproximateExtent(e))
    }, ol.prototype.getExtent = function () {
        return this._extent.slice()
    }, ol.prototype.setExtent = function (t, e) {
        var n = this._extent;
        isNaN(t) || (n[0] = t), isNaN(e) || (n[1] = e)
    }, ol.prototype.isBlank = function () {
        return this._isBlank
    }, ol.prototype.setBlank = function (t) {
        this._isBlank = t
    }, ol.prototype.getLabel = null, Hn(ol), Un(ol, {registerWhenExtend: !0}), al.createByAxisModel = function (t) {
        var e = t.option, n = e.data, i = n && f(n, ll);
        return new al({categories: i, needCollect: !i, deduplication: !1 !== e.dedplication})
    };
    var Tw = al.prototype;
    Tw.getOrdinal = function (t) {
        return sl(this).get(t)
    }, Tw.parseAndCollect = function (t) {
        var e, n = this._needCollect;
        if ("string" != typeof t && !n) return t;
        if (n && !this._deduplication) return e = this.categories.length, this.categories[e] = t, e;
        var i = sl(this);
        return null == (e = i.get(t)) && (n ? (e = this.categories.length, this.categories[e] = t, i.set(t, e)) : e = NaN), e
    };
    var Aw = ol.prototype, Cw = ol.extend({
        type: "ordinal", init: function (t, e) {
            t && !y(t) || (t = new al({categories: t})), this._ordinalMeta = t, this._extent = e || [0, t.categories.length - 1]
        }, parse: function (t) {
            return "string" == typeof t ? this._ordinalMeta.getOrdinal(t) : Math.round(t)
        }, contain: function (t) {
            return t = this.parse(t), Aw.contain.call(this, t) && null != this._ordinalMeta.categories[t]
        }, normalize: function (t) {
            return Aw.normalize.call(this, this.parse(t))
        }, scale: function (t) {
            return Math.round(Aw.scale.call(this, t))
        }, getTicks: function () {
            for (var t = [], e = this._extent, n = e[0]; n <= e[1];) t.push(n), n++;
            return t
        }, getLabel: function (t) {
            if (!this.isBlank()) return this._ordinalMeta.categories[t]
        }, count: function () {
            return this._extent[1] - this._extent[0] + 1
        }, unionExtentFromData: function (t, e) {
            this.unionExtent(t.getApproximateExtent(e))
        }, getOrdinalMeta: function () {
            return this._ordinalMeta
        }, niceTicks: R, niceExtent: R
    });
    Cw.create = function () {
        return new Cw
    };
    var Dw = Lr, kw = Lr, Pw = ol.extend({
        type: "interval", _interval: 0, _intervalPrecision: 2, setExtent: function (t, e) {
            var n = this._extent;
            isNaN(t) || (n[0] = parseFloat(t)), isNaN(e) || (n[1] = parseFloat(e))
        }, unionExtent: function (t) {
            var e = this._extent;
            t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]), Pw.prototype.setExtent.call(this, e[0], e[1])
        }, getInterval: function () {
            return this._interval
        }, setInterval: function (t) {
            this._interval = t, this._niceExtent = this._extent.slice(), this._intervalPrecision = ul(t)
        }, getTicks: function () {
            return fl(this._interval, this._extent, this._niceExtent, this._intervalPrecision)
        }, getLabel: function (t, e) {
            if (null == t) return "";
            var n = e && e.precision;
            return null == n ? n = Er(t) || 0 : "auto" === n && (n = this._intervalPrecision), t = kw(t, n, !0), Zr(t)
        }, niceTicks: function (t, e, n) {
            t = t || 5;
            var i = this._extent, r = i[1] - i[0];
            if (isFinite(r)) {
                r < 0 && (r = -r, i.reverse());
                var o = hl(i, t, e, n);
                this._intervalPrecision = o.intervalPrecision, this._interval = o.interval, this._niceExtent = o.niceTickExtent
            }
        }, niceExtent: function (t) {
            var e = this._extent;
            if (e[0] === e[1]) if (0 !== e[0]) {
                var n = e[0];
                t.fixMax ? e[0] -= n / 2 : (e[1] += n / 2, e[0] -= n / 2)
            } else e[1] = 1;
            var i = e[1] - e[0];
            isFinite(i) || (e[0] = 0, e[1] = 1), this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
            var r = this._interval;
            t.fixMin || (e[0] = kw(Math.floor(e[0] / r) * r)), t.fixMax || (e[1] = kw(Math.ceil(e[1] / r) * r))
        }
    });
    Pw.create = function () {
        return new Pw
    };
    var Lw = "__ec_stack_", Ow = "undefined" != typeof Float32Array ? Float32Array : Array, zw = {
        seriesType: "bar", plan: n_(), reset: function (t) {
            if (_l(t) && wl(t)) {
                var e = t.getData(), n = t.coordinateSystem, i = n.getBaseAxis(), r = n.getOtherAxis(i),
                    o = e.mapDimension(r.dim), a = e.mapDimension(i.dim), s = r.isHorizontal(), l = s ? 0 : 1,
                    h = xl(vl([t]), i, t).width;
                return h > .5 || (h = .5), {
                    progress: function (t, e) {
                        for (var i, u = new Ow(2 * t.count), c = [], d = [], f = 0; null != (i = t.next());) d[l] = e.get(o, i), d[1 - l] = e.get(a, i), c = n.dataToPoint(d, null, c), u[f++] = c[0], u[f++] = c[1];
                        e.setLayout({largePoints: u, barWidth: h, valueAxisStart: bl(0, r), valueAxisHorizontal: s})
                    }
                }
            }
        }
    }, Ew = Pw.prototype, Nw = Math.ceil, Rw = Math.floor, Bw = function (t, e, n, i) {
        for (; n < i;) {
            var r = n + i >>> 1;
            t[r][1] < e ? n = r + 1 : i = r
        }
        return n
    }, Fw = Pw.extend({
        type: "time", getLabel: function (t) {
            var e = this._stepLvl, n = new Date(t);
            return $r(e[0], n, this.getSetting("useUTC"))
        }, niceExtent: function (t) {
            var e = this._extent;
            if (e[0] === e[1] && (e[0] -= 864e5, e[1] += 864e5), e[1] === -1 / 0 && e[0] === 1 / 0) {
                var n = new Date;
                e[1] = +new Date(n.getFullYear(), n.getMonth(), n.getDate()), e[0] = e[1] - 864e5
            }
            this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
            var i = this._interval;
            t.fixMin || (e[0] = Lr(Rw(e[0] / i) * i)), t.fixMax || (e[1] = Lr(Nw(e[1] / i) * i))
        }, niceTicks: function (t, e, n) {
            t = t || 10;
            var i = this._extent, r = i[1] - i[0], o = r / t;
            null != e && o < e && (o = e), null != n && o > n && (o = n);
            var a = Vw.length, s = Bw(Vw, o, 0, a), l = Vw[Math.min(s, a - 1)], h = l[1];
            "year" === l[0] && (h *= Gr(r / h / t, !0));
            var u = this.getSetting("useUTC") ? 0 : 60 * new Date(+i[0] || +i[1]).getTimezoneOffset() * 1e3,
                c = [Math.round(Nw((i[0] - u) / h) * h + u), Math.round(Rw((i[1] - u) / h) * h + u)];
            dl(c, i), this._stepLvl = l, this._interval = h, this._niceExtent = c
        }, parse: function (t) {
            return +Vr(t)
        }
    });
    d(["contain", "normalize"], function (t) {
        Fw.prototype[t] = function (e) {
            return Ew[t].call(this, this.parse(e))
        }
    });
    var Vw = [["hh:mm:ss", 1e3], ["hh:mm:ss", 5e3], ["hh:mm:ss", 1e4], ["hh:mm:ss", 15e3], ["hh:mm:ss", 3e4], ["hh:mm\nMM-dd", 6e4], ["hh:mm\nMM-dd", 3e5], ["hh:mm\nMM-dd", 6e5], ["hh:mm\nMM-dd", 9e5], ["hh:mm\nMM-dd", 18e5], ["hh:mm\nMM-dd", 36e5], ["hh:mm\nMM-dd", 72e5], ["hh:mm\nMM-dd", 216e5], ["hh:mm\nMM-dd", 432e5], ["MM-dd\nyyyy", 864e5], ["MM-dd\nyyyy", 1728e5], ["MM-dd\nyyyy", 2592e5], ["MM-dd\nyyyy", 3456e5], ["MM-dd\nyyyy", 432e6], ["MM-dd\nyyyy", 5184e5], ["week", 6048e5], ["MM-dd\nyyyy", 864e6], ["week", 12096e5], ["week", 18144e5], ["month", 26784e5], ["week", 36288e5], ["month", 53568e5], ["week", 6048e6], ["quarter", 8208e6], ["month", 107136e5], ["month", 13392e6], ["half-year", 16416e6], ["month", 214272e5], ["month", 26784e6], ["year", 32832e6]];
    Fw.create = function (t) {
        return new Fw({useUTC: t.ecModel.get("useUTC")})
    };
    var Hw = ol.prototype, Ww = Pw.prototype, Gw = Er, Zw = Lr, Uw = Math.floor, Xw = Math.ceil, Yw = Math.pow,
        jw = Math.log, qw = ol.extend({
            type: "log", base: 10, $constructor: function () {
                ol.apply(this, arguments), this._originalScale = new Pw
            }, getTicks: function () {
                var t = this._originalScale, e = this._extent, n = t.getExtent();
                return f(Ww.getTicks.call(this), function (i) {
                    var r = Lr(Yw(this.base, i));
                    return r = i === e[0] && t.__fixMin ? Sl(r, n[0]) : r, r = i === e[1] && t.__fixMax ? Sl(r, n[1]) : r
                }, this)
            }, getLabel: Ww.getLabel, scale: function (t) {
                return t = Hw.scale.call(this, t), Yw(this.base, t)
            }, setExtent: function (t, e) {
                var n = this.base;
                t = jw(t) / jw(n), e = jw(e) / jw(n), Ww.setExtent.call(this, t, e)
            }, getExtent: function () {
                var t = this.base, e = Hw.getExtent.call(this);
                e[0] = Yw(t, e[0]), e[1] = Yw(t, e[1]);
                var n = this._originalScale, i = n.getExtent();
                return n.__fixMin && (e[0] = Sl(e[0], i[0])), n.__fixMax && (e[1] = Sl(e[1], i[1])), e
            }, unionExtent: function (t) {
                this._originalScale.unionExtent(t);
                var e = this.base;
                t[0] = jw(t[0]) / jw(e), t[1] = jw(t[1]) / jw(e), Hw.unionExtent.call(this, t)
            }, unionExtentFromData: function (t, e) {
                this.unionExtent(t.getApproximateExtent(e))
            }, niceTicks: function (t) {
                t = t || 10;
                var e = this._extent, n = e[1] - e[0];
                if (!(n === 1 / 0 || n <= 0)) {
                    var i = Hr(n);
                    for (t / n * i <= .5 && (i *= 10); !isNaN(i) && Math.abs(i) < 1 && Math.abs(i) > 0;) i *= 10;
                    var r = [Lr(Xw(e[0] / i) * i), Lr(Uw(e[1] / i) * i)];
                    this._interval = i, this._niceExtent = r
                }
            }, niceExtent: function (t) {
                Ww.niceExtent.call(this, t);
                var e = this._originalScale;
                e.__fixMin = t.fixMin, e.__fixMax = t.fixMax
            }
        });
    d(["contain", "normalize"], function (t) {
        qw.prototype[t] = function (e) {
            return e = jw(e) / jw(this.base), Hw[t].call(this, e)
        }
    }), qw.create = function () {
        return new qw
    };
    var $w = {
        getMin: function (t) {
            var e = this.option, n = t || null == e.rangeStart ? e.min : e.rangeStart;
            return this.axis && null != n && "dataMin" !== n && "function" != typeof n && !I(n) && (n = this.axis.scale.parse(n)), n
        }, getMax: function (t) {
            var e = this.option, n = t || null == e.rangeEnd ? e.max : e.rangeEnd;
            return this.axis && null != n && "dataMax" !== n && "function" != typeof n && !I(n) && (n = this.axis.scale.parse(n)), n
        }, getNeedCrossZero: function () {
            var t = this.option;
            return null == t.rangeStart && null == t.rangeEnd && !t.scale
        }, getCoordSysModel: R, setRange: function (t, e) {
            this.option.rangeStart = t, this.option.rangeEnd = e
        }, resetRange: function () {
            this.option.rangeStart = this.option.rangeEnd = null
        }
    }, Kw = Bi({
        type: "triangle", shape: {cx: 0, cy: 0, width: 0, height: 0}, buildPath: function (t, e) {
            var n = e.cx, i = e.cy, r = e.width / 2, o = e.height / 2;
            t.moveTo(n, i - o), t.lineTo(n + r, i + o), t.lineTo(n - r, i + o), t.closePath()
        }
    }), Qw = Bi({
        type: "diamond", shape: {cx: 0, cy: 0, width: 0, height: 0}, buildPath: function (t, e) {
            var n = e.cx, i = e.cy, r = e.width / 2, o = e.height / 2;
            t.moveTo(n, i - o), t.lineTo(n + r, i), t.lineTo(n, i + o), t.lineTo(n - r, i), t.closePath()
        }
    }), Jw = Bi({
        type: "pin", shape: {x: 0, y: 0, width: 0, height: 0}, buildPath: function (t, e) {
            var n = e.x, i = e.y, r = e.width / 5 * 3, o = Math.max(r, e.height), a = r / 2, s = a * a / (o - a),
                l = i - o + a + s, h = Math.asin(s / a), u = Math.cos(h) * a, c = Math.sin(h), d = Math.cos(h),
                f = .6 * a, p = .7 * a;
            t.moveTo(n - u, l + s), t.arc(n, l, a, Math.PI - h, 2 * Math.PI + h), t.bezierCurveTo(n + u - c * f, l + s + d * f, n, i - p, n, i), t.bezierCurveTo(n, i - p, n - u + c * f, l + s + d * f, n - u, l + s), t.closePath()
        }
    }), tb = Bi({
        type: "arrow", shape: {x: 0, y: 0, width: 0, height: 0}, buildPath: function (t, e) {
            var n = e.height, i = e.width, r = e.x, o = e.y, a = i / 3 * 2;
            t.moveTo(r, o), t.lineTo(r + a, o + n), t.lineTo(r, o + n / 4 * 3), t.lineTo(r - a, o + n), t.lineTo(r, o), t.closePath()
        }
    }), eb = {
        line: function (t, e, n, i, r) {
            r.x1 = t, r.y1 = e + i / 2, r.x2 = t + n, r.y2 = e + i / 2
        }, rect: function (t, e, n, i, r) {
            r.x = t, r.y = e, r.width = n, r.height = i
        }, roundRect: function (t, e, n, i, r) {
            r.x = t, r.y = e, r.width = n, r.height = i, r.r = Math.min(n, i) / 4
        }, square: function (t, e, n, i, r) {
            var o = Math.min(n, i);
            r.x = t, r.y = e, r.width = o, r.height = o
        }, circle: function (t, e, n, i, r) {
            r.cx = t + n / 2, r.cy = e + i / 2, r.r = Math.min(n, i) / 2
        }, diamond: function (t, e, n, i, r) {
            r.cx = t + n / 2, r.cy = e + i / 2, r.width = n, r.height = i
        }, pin: function (t, e, n, i, r) {
            r.x = t + n / 2, r.y = e + i / 2, r.width = n, r.height = i
        }, arrow: function (t, e, n, i, r) {
            r.x = t + n / 2, r.y = e + i / 2, r.width = n, r.height = i
        }, triangle: function (t, e, n, i, r) {
            r.cx = t + n / 2, r.cy = e + i / 2, r.width = n, r.height = i
        }
    }, nb = {};
    d({
        line: Ty,
        rect: My,
        roundRect: My,
        square: My,
        circle: fy,
        diamond: Qw,
        pin: Jw,
        arrow: tb,
        triangle: Kw
    }, function (t, e) {
        nb[e] = new t
    });
    var ib = Bi({
        type: "symbol", shape: {symbolType: "", x: 0, y: 0, width: 0, height: 0}, beforeBrush: function () {
            var t = this.style;
            "pin" === this.shape.symbolType && "inside" === t.textPosition && (t.textPosition = ["50%", "40%"], t.textAlign = "center", t.textVerticalAlign = "middle")
        }, buildPath: function (t, e, n) {
            var i = e.symbolType, r = nb[i];
            "none" !== e.symbolType && (r || (r = nb[i = "rect"]), eb[i](e.x, e.y, e.width, e.height, r.shape), r.buildPath(t, r.shape, n))
        }
    }), rb = {isDimensionStacked: tl, enableDataStack: Js, getStackedDimension: el}, ob = (Object.freeze || Object)({
        createList: function (t) {
            return nl(t.getSource(), t)
        }, getLayoutRect: Jr, dataStack: rb, createScale: function (t, e) {
            var n = e;
            Ir.isInstance(e) || u(n = new Ir(e), $w);
            var i = Al(n);
            return i.setExtent(t[0], t[1]), Tl(i, n), i
        }, mixinAxisModelCommonMethods: function (t) {
            u(t, $w)
        }, completeDimensions: $s, createDimensions: Iw, createSymbol: Nl
    }), ab = 1e-8;
    Fl.prototype = {
        constructor: Fl, properties: null, getBoundingRect: function () {
            var t = this._rect;
            if (t) return t;
            for (var e = Number.MAX_VALUE, n = [e, e], i = [-e, -e], r = [], o = [], a = this.geometries, s = 0; s < a.length; s++) "polygon" === a[s].type && (ai(a[s].exterior, r, o), K(n, n, r), Q(i, i, o));
            return 0 === s && (n[0] = n[1] = i[0] = i[1] = 0), this._rect = new se(n[0], n[1], i[0] - n[0], i[1] - n[1])
        }, contain: function (t) {
            var e = this.getBoundingRect(), n = this.geometries;
            if (!e.contain(t[0], t[1])) return !1;
            t:for (var i = 0, r = n.length; i < r; i++) if ("polygon" === n[i].type) {
                var o = n[i].exterior, a = n[i].interiors;
                if (Bl(o, t[0], t[1])) {
                    for (var s = 0; s < (a ? a.length : 0); s++) if (Bl(a[s])) continue t;
                    return !0
                }
            }
            return !1
        }, transformTo: function (t, e, n, i) {
            var r = this.getBoundingRect(), o = r.width / r.height;
            n ? i || (i = n / o) : n = o * i;
            for (var a = new se(t, e, n, i), s = r.calculateTransform(a), l = this.geometries, h = 0; h < l.length; h++) if ("polygon" === l[h].type) {
                for (var u = l[h].exterior, c = l[h].interiors, d = 0; d < u.length; d++) $(u[d], u[d], s);
                for (var f = 0; f < (c ? c.length : 0); f++) for (d = 0; d < c[f].length; d++) $(c[f][d], c[f][d], s)
            }
            (r = this._rect).copy(a), this.center = [r.x + r.width / 2, r.y + r.height / 2]
        }, cloneShallow: function (t) {
            null == t && (t = this.name);
            var e = new Fl(t, this.geometries, this.center);
            return e._rect = this._rect, e.transformTo = null, e
        }
    };
    var sb = function (t) {
        return Vl(t), f(g(t.features, function (t) {
            return t.geometry && t.properties && t.geometry.coordinates.length > 0
        }), function (t) {
            var e = t.properties, n = t.geometry, i = n.coordinates, r = [];
            "Polygon" === n.type && r.push({
                type: "polygon",
                exterior: i[0],
                interiors: i.slice(1)
            }), "MultiPolygon" === n.type && d(i, function (t) {
                t[0] && r.push({type: "polygon", exterior: t[0], interiors: t.slice(1)})
            });
            var o = new Fl(e.name, r, e.cp);
            return o.properties = e, o
        })
    }, lb = On(), hb = [0, 1], ub = function (t, e, n) {
        this.dim = t, this.scale = e, this._extent = n || [0, 0], this.inverse = !1, this.onBand = !1
    };
    ub.prototype = {
        constructor: ub, contain: function (t) {
            var e = this._extent, n = Math.min(e[0], e[1]), i = Math.max(e[0], e[1]);
            return t >= n && t <= i
        }, containData: function (t) {
            return this.contain(this.dataToCoord(t))
        }, getExtent: function () {
            return this._extent.slice()
        }, getPixelPrecision: function (t) {
            return Nr(t || this.scale.getExtent(), this._extent)
        }, setExtent: function (t, e) {
            var n = this._extent;
            n[0] = t, n[1] = e
        }, dataToCoord: function (t, e) {
            var n = this._extent, i = this.scale;
            return t = i.normalize(t), this.onBand && "ordinal" === i.type && nh(n = n.slice(), i.count()), kr(t, hb, n, e)
        }, coordToData: function (t, e) {
            var n = this._extent, i = this.scale;
            this.onBand && "ordinal" === i.type && nh(n = n.slice(), i.count());
            var r = kr(t, n, hb, e);
            return this.scale.scale(r)
        }, pointToData: function (t, e) {
        }, getTicksCoords: function (t) {
            var e = (t = t || {}).tickModel || this.getTickModel(), n = Gl(this, e), i = f(n.ticks, function (t) {
                return {coord: this.dataToCoord(t), tickValue: t}
            }, this), r = e.get("alignWithLabel");
            return ih(this, i, n.tickCategoryInterval, r, t.clamp), i
        }, getViewLabels: function () {
            return Wl(this).labels
        }, getLabelModel: function () {
            return this.model.getModel("axisLabel")
        }, getTickModel: function () {
            return this.model.getModel("axisTick")
        }, getBandWidth: function () {
            var t = this._extent, e = this.scale.getExtent(), n = e[1] - e[0] + (this.onBand ? 1 : 0);
            0 === n && (n = 1);
            var i = Math.abs(t[1] - t[0]);
            return Math.abs(i) / n
        }, isHorizontal: null, getRotate: null, calculateCategoryInterval: function () {
            return Ql(this)
        }
    };
    var cb = sb, db = {};
    d(["map", "each", "filter", "indexOf", "inherits", "reduce", "filter", "bind", "curry", "isArray", "isString", "isObject", "isFunction", "extend", "defaults", "clone", "merge"], function (t) {
        db[t] = cg[t]
    });
    var fb = {};
    d(["extendShape", "extendPath", "makePath", "makeImage", "mergePath", "resizePath", "createIcon", "setHoverStyle", "setLabelStyle", "setTextStyle", "setText", "getFont", "updateProps", "initProps", "getTransform", "clipPointsByRect", "clipRectByRect", "Group", "Image", "Text", "Circle", "Sector", "Ring", "Polygon", "Polyline", "Rect", "Line", "BezierCurve", "Arc", "IncrementalDisplayable", "CompoundPath", "LinearGradient", "RadialGradient", "BoundingRect"], function (t) {
        fb[t] = Wy[t]
    }), Jx.extend({
        type: "series.line",
        dependencies: ["grid", "polar"],
        getInitialData: function (t, e) {
            return nl(this.getSource(), this)
        },
        defaultOption: {
            zlevel: 0,
            z: 2,
            coordinateSystem: "cartesian2d",
            legendHoverLink: !0,
            hoverAnimation: !0,
            clipOverflow: !0,
            label: {position: "top"},
            lineStyle: {width: 2, type: "solid"},
            step: !1,
            smooth: !1,
            smoothMonotone: null,
            symbol: "emptyCircle",
            symbolSize: 4,
            symbolRotate: null,
            showSymbol: !0,
            showAllSymbol: "auto",
            connectNulls: !1,
            sampling: "none",
            animationEasing: "linear",
            progressive: 0,
            hoverLayerThreshold: 1 / 0
        }
    });
    var pb = oh.prototype, gb = oh.getSymbolSize = function (t, e) {
        var n = t.getItemVisual(e, "symbolSize");
        return n instanceof Array ? n.slice() : [+n, +n]
    };
    pb._createSymbol = function (t, e, n, i, r) {
        this.removeAll();
        var o = Nl(t, -1, -1, 2, 2, e.getItemVisual(n, "color"), r);
        o.attr({z2: 100, culling: !0, scale: ah(i)}), o.drift = sh, this._symbolType = t, this.add(o)
    }, pb.stopSymbolAnimation = function (t) {
        this.childAt(0).stopAnimation(t)
    }, pb.getSymbolPath = function () {
        return this.childAt(0)
    }, pb.getScale = function () {
        return this.childAt(0).scale
    }, pb.highlight = function () {
        this.childAt(0).trigger("emphasis")
    }, pb.downplay = function () {
        this.childAt(0).trigger("normal")
    }, pb.setZ = function (t, e) {
        var n = this.childAt(0);
        n.zlevel = t, n.z = e
    }, pb.setDraggable = function (t) {
        var e = this.childAt(0);
        e.draggable = t, e.cursor = t ? "move" : "pointer"
    }, pb.updateData = function (t, e, n) {
        this.silent = !1;
        var i = t.getItemVisual(e, "symbol") || "circle", r = t.hostModel, o = gb(t, e), a = i !== this._symbolType;
        if (a) {
            var s = t.getItemVisual(e, "symbolKeepAspect");
            this._createSymbol(i, t, e, o, s)
        } else (l = this.childAt(0)).silent = !1, vr(l, {scale: ah(o)}, r, e);
        if (this._updateCommon(t, e, o, n), a) {
            var l = this.childAt(0), h = n && n.fadeIn, u = {scale: l.scale.slice()};
            h && (u.style = {opacity: l.style.opacity}), l.scale = [0, 0], h && (l.style.opacity = 0), yr(l, u, r, e)
        }
        this._seriesModel = r
    };
    var mb = ["itemStyle"], vb = ["emphasis", "itemStyle"], yb = ["label"], xb = ["emphasis", "label"];
    pb._updateCommon = function (t, e, n, i) {
        var r = this.childAt(0), a = t.hostModel, s = t.getItemVisual(e, "color");
        "image" !== r.type && r.useStyle({strokeNoScale: !0});
        var l = i && i.itemStyle, h = i && i.hoverItemStyle, u = i && i.symbolRotate, c = i && i.symbolOffset,
            d = i && i.labelModel, f = i && i.hoverLabelModel, p = i && i.hoverAnimation, g = i && i.cursorStyle;
        if (!i || t.hasItemOption) {
            var m = i && i.itemModel ? i.itemModel : t.getItemModel(e);
            l = m.getModel(mb).getItemStyle(["color"]), h = m.getModel(vb).getItemStyle(), u = m.getShallow("symbolRotate"), c = m.getShallow("symbolOffset"), d = m.getModel(yb), f = m.getModel(xb), p = m.getShallow("hoverAnimation"), g = m.getShallow("cursor")
        } else h = o({}, h);
        var v = r.style;
        r.attr("rotation", (u || 0) * Math.PI / 180 || 0), c && r.attr("position", [Pr(c[0], n[0]), Pr(c[1], n[1])]), g && r.attr("cursor", g), r.setColor(s, i && i.symbolInnerColor), r.setStyle(l);
        var y = t.getItemVisual(e, "opacity");
        null != y && (v.opacity = y);
        var x = t.getItemVisual(e, "liftZ"), _ = r.__z2Origin;
        null != x ? null == _ && (r.__z2Origin = r.z2, r.z2 += x) : null != _ && (r.z2 = _, r.__z2Origin = null);
        var w = i && i.useNameLabel;
        sr(v, h, d, f, {
            labelFetcher: a, labelDataIndex: e, defaultText: function (e, n) {
                return w ? t.getName(e) : rh(t, e)
            }, isRectText: !0, autoColor: s
        }), r.off("mouseover").off("mouseout").off("emphasis").off("normal"), r.hoverStyle = h, or(r), r.__symbolOriginalScale = ah(n), p && a.isAnimationEnabled() && r.on("mouseover", lh).on("mouseout", hh).on("emphasis", uh).on("normal", ch)
    }, pb.fadeOut = function (t, e) {
        var n = this.childAt(0);
        this.silent = n.silent = !0, !(e && e.keepLabel) && (n.style.text = null), vr(n, {
            style: {opacity: 0},
            scale: [0, 0]
        }, this._seriesModel, this.dataIndex, t)
    }, h(oh, am);
    var _b = dh.prototype;
    _b.updateData = function (t, e) {
        e = ph(e);
        var n = this.group, i = t.hostModel, r = this._data, o = this._symbolCtor, a = gh(t);
        r || n.removeAll(), t.diff(r).add(function (i) {
            var r = t.getItemLayout(i);
            if (fh(t, r, i, e)) {
                var s = new o(t, i, a);
                s.attr("position", r), t.setItemGraphicEl(i, s), n.add(s)
            }
        }).update(function (s, l) {
            var h = r.getItemGraphicEl(l), u = t.getItemLayout(s);
            fh(t, u, s, e) ? (h ? (h.updateData(t, s, a), vr(h, {position: u}, i)) : (h = new o(t, s)).attr("position", u), n.add(h), t.setItemGraphicEl(s, h)) : n.remove(h)
        }).remove(function (t) {
            var e = r.getItemGraphicEl(t);
            e && e.fadeOut(function () {
                n.remove(e)
            })
        }).execute(), this._data = t
    }, _b.isPersistent = function () {
        return !0
    }, _b.updateLayout = function () {
        var t = this._data;
        t && t.eachItemGraphicEl(function (e, n) {
            var i = t.getItemLayout(n);
            e.attr("position", i)
        })
    }, _b.incrementalPrepareUpdate = function (t) {
        this._seriesScope = gh(t), this._data = null, this.group.removeAll()
    }, _b.incrementalUpdate = function (t, e, n) {
        n = ph(n);
        for (var i = t.start; i < t.end; i++) {
            var r = e.getItemLayout(i);
            if (fh(e, r, i, n)) {
                var o = new this._symbolCtor(e, i, this._seriesScope);
                o.traverse(function (t) {
                    t.isGroup || (t.incremental = t.useHoverLayer = !0)
                }), o.attr("position", r), this.group.add(o), e.setItemGraphicEl(i, o)
            }
        }
    }, _b.remove = function (t) {
        var e = this.group, n = this._data;
        n && t ? n.eachItemGraphicEl(function (t) {
            t.fadeOut(function () {
                e.remove(t)
            })
        }) : e.removeAll()
    };
    var wb = function (t, e, n, i, r, o, a, s) {
        for (var l = xh(t, e), h = [], u = [], c = [], d = [], f = [], p = [], g = [], m = mh(r, e, a), v = mh(o, t, s), y = 0; y < l.length; y++) {
            var x = l[y], _ = !0;
            switch (x.cmd) {
                case"=":
                    var w = t.getItemLayout(x.idx), b = e.getItemLayout(x.idx1);
                    (isNaN(w[0]) || isNaN(w[1])) && (w = b.slice()), h.push(w), u.push(b), c.push(n[x.idx]), d.push(i[x.idx1]), g.push(e.getRawIndex(x.idx1));
                    break;
                case"+":
                    S = x.idx;
                    h.push(r.dataToPoint([e.get(m.dataDimsForPoint[0], S), e.get(m.dataDimsForPoint[1], S)])), u.push(e.getItemLayout(S).slice()), c.push(yh(m, r, e, S)), d.push(i[S]), g.push(e.getRawIndex(S));
                    break;
                case"-":
                    var S = x.idx, M = t.getRawIndex(S);
                    M !== S ? (h.push(t.getItemLayout(S)), u.push(o.dataToPoint([t.get(v.dataDimsForPoint[0], S), t.get(v.dataDimsForPoint[1], S)])), c.push(n[S]), d.push(yh(v, o, t, S)), g.push(M)) : _ = !1
            }
            _ && (f.push(x), p.push(p.length))
        }
        p.sort(function (t, e) {
            return g[t] - g[e]
        });
        for (var I = [], T = [], A = [], C = [], D = [], y = 0; y < p.length; y++) {
            S = p[y];
            I[y] = h[S], T[y] = u[S], A[y] = c[S], C[y] = d[S], D[y] = f[S]
        }
        return {current: I, next: T, stackedOnCurrent: A, stackedOnNext: C, status: D}
    }, bb = K, Sb = Q, Mb = W, Ib = F, Tb = [], Ab = [], Cb = [], Db = Ii.extend({
        type: "ec-polyline",
        shape: {points: [], smooth: 0, smoothConstraint: !0, smoothMonotone: null, connectNulls: !1},
        style: {fill: null, stroke: "#000"},
        brush: gy(Ii.prototype.brush),
        buildPath: function (t, e) {
            var n = e.points, i = 0, r = n.length, o = Mh(n, e.smoothConstraint);
            if (e.connectNulls) {
                for (; r > 0 && _h(n[r - 1]); r--) ;
                for (; i < r && _h(n[i]); i++) ;
            }
            for (; i < r;) i += wh(t, n, i, r, r, 1, o.min, o.max, e.smooth, e.smoothMonotone, e.connectNulls) + 1
        }
    }), kb = Ii.extend({
        type: "ec-polygon",
        shape: {
            points: [],
            stackedOnPoints: [],
            smooth: 0,
            stackedOnSmooth: 0,
            smoothConstraint: !0,
            smoothMonotone: null,
            connectNulls: !1
        },
        brush: gy(Ii.prototype.brush),
        buildPath: function (t, e) {
            var n = e.points, i = e.stackedOnPoints, r = 0, o = n.length, a = e.smoothMonotone,
                s = Mh(n, e.smoothConstraint), l = Mh(i, e.smoothConstraint);
            if (e.connectNulls) {
                for (; o > 0 && _h(n[o - 1]); o--) ;
                for (; r < o && _h(n[r]); r++) ;
            }
            for (; r < o;) {
                var h = wh(t, n, r, o, o, 1, s.min, s.max, e.smooth, a, e.connectNulls);
                wh(t, i, r + h - 1, h, o, -1, l.min, l.max, e.stackedOnSmooth, a, e.connectNulls), r += h + 1, t.closePath()
            }
        }
    });
    ga.extend({
        type: "line", init: function () {
            var t = new am, e = new dh;
            this.group.add(e.group), this._symbolDraw = e, this._lineGroup = t
        }, render: function (t, e, n) {
            var i = t.coordinateSystem, r = this.group, o = t.getData(), s = t.getModel("lineStyle"),
                l = t.getModel("areaStyle"), h = o.mapArray(o.getItemLayout), u = "polar" === i.type,
                c = this._coordSys, d = this._symbolDraw, f = this._polyline, p = this._polygon, g = this._lineGroup,
                m = t.get("animation"), v = !l.isEmpty(), y = l.get("origin"), x = Ch(i, o, mh(i, o, y)),
                _ = t.get("showSymbol"), w = _ && !u && zh(t, o, i), b = this._data;
            b && b.eachItemGraphicEl(function (t, e) {
                t.__temp && (r.remove(t), b.setItemGraphicEl(e, null))
            }), _ || d.remove(), r.add(g);
            var S = !u && t.get("step");
            f && c.type === i.type && S === this._step ? (v && !p ? p = this._newPolygon(h, x, i, m) : p && !v && (g.remove(p), p = this._polygon = null), g.setClipPath(Ph(i, !1, !1, t)), _ && d.updateData(o, {
                isIgnore: w,
                clipShape: Ph(i, !1, !0, t)
            }), o.eachItemGraphicEl(function (t) {
                t.stopAnimation(!0)
            }), Ih(this._stackedOnPoints, x) && Ih(this._points, h) || (m ? this._updateAnimation(o, x, i, n, S, y) : (S && (h = Lh(h, i, S), x = Lh(x, i, S)), f.setShape({points: h}), p && p.setShape({
                points: h,
                stackedOnPoints: x
            })))) : (_ && d.updateData(o, {
                isIgnore: w,
                clipShape: Ph(i, !1, !0, t)
            }), S && (h = Lh(h, i, S), x = Lh(x, i, S)), f = this._newPolyline(h, i, m), v && (p = this._newPolygon(h, x, i, m)), g.setClipPath(Ph(i, !0, !1, t)));
            var M = Oh(o, i) || o.getVisual("color");
            f.useStyle(a(s.getLineStyle(), {fill: "none", stroke: M, lineJoin: "bevel"}));
            var I = t.get("smooth");
            if (I = Th(t.get("smooth")), f.setShape({
                smooth: I,
                smoothMonotone: t.get("smoothMonotone"),
                connectNulls: t.get("connectNulls")
            }), p) {
                var T = o.getCalculationInfo("stackedOnSeries"), A = 0;
                p.useStyle(a(l.getAreaStyle(), {
                    fill: M,
                    opacity: .7,
                    lineJoin: "bevel"
                })), T && (A = Th(T.get("smooth"))), p.setShape({
                    smooth: I,
                    stackedOnSmooth: A,
                    smoothMonotone: t.get("smoothMonotone"),
                    connectNulls: t.get("connectNulls")
                })
            }
            this._data = o, this._coordSys = i, this._stackedOnPoints = x, this._points = h, this._step = S, this._valueOrigin = y
        }, dispose: function () {
        }, highlight: function (t, e, n, i) {
            var r = t.getData(), o = Ln(r, i);
            if (!(o instanceof Array) && null != o && o >= 0) {
                var a = r.getItemGraphicEl(o);
                if (!a) {
                    var s = r.getItemLayout(o);
                    if (!s) return;
                    (a = new oh(r, o)).position = s, a.setZ(t.get("zlevel"), t.get("z")), a.ignore = isNaN(s[0]) || isNaN(s[1]), a.__temp = !0, r.setItemGraphicEl(o, a), a.stopSymbolAnimation(!0), this.group.add(a)
                }
                a.highlight()
            } else ga.prototype.highlight.call(this, t, e, n, i)
        }, downplay: function (t, e, n, i) {
            var r = t.getData(), o = Ln(r, i);
            if (null != o && o >= 0) {
                var a = r.getItemGraphicEl(o);
                a && (a.__temp ? (r.setItemGraphicEl(o, null), this.group.remove(a)) : a.downplay())
            } else ga.prototype.downplay.call(this, t, e, n, i)
        }, _newPolyline: function (t) {
            var e = this._polyline;
            return e && this._lineGroup.remove(e), e = new Db({
                shape: {points: t},
                silent: !0,
                z2: 10
            }), this._lineGroup.add(e), this._polyline = e, e
        }, _newPolygon: function (t, e) {
            var n = this._polygon;
            return n && this._lineGroup.remove(n), n = new kb({
                shape: {points: t, stackedOnPoints: e},
                silent: !0
            }), this._lineGroup.add(n), this._polygon = n, n
        }, _updateAnimation: function (t, e, n, i, r, o) {
            var a = this._polyline, s = this._polygon, l = t.hostModel,
                h = wb(this._data, t, this._stackedOnPoints, e, this._coordSys, n, this._valueOrigin, o), u = h.current,
                c = h.stackedOnCurrent, d = h.next, f = h.stackedOnNext;
            r && (u = Lh(h.current, n, r), c = Lh(h.stackedOnCurrent, n, r), d = Lh(h.next, n, r), f = Lh(h.stackedOnNext, n, r)), a.shape.__points = h.current, a.shape.points = u, vr(a, {shape: {points: d}}, l), s && (s.setShape({
                points: u,
                stackedOnPoints: c
            }), vr(s, {shape: {points: d, stackedOnPoints: f}}, l));
            for (var p = [], g = h.status, m = 0; m < g.length; m++) if ("=" === g[m].cmd) {
                var v = t.getItemGraphicEl(g[m].idx1);
                v && p.push({el: v, ptIdx: m})
            }
            a.animators && a.animators.length && a.animators[0].during(function () {
                for (var t = 0; t < p.length; t++) p[t].el.attr("position", a.shape.__points[p[t].ptIdx])
            })
        }, remove: function (t) {
            var e = this.group, n = this._data;
            this._lineGroup.removeAll(), this._symbolDraw.remove(!0), n && n.eachItemGraphicEl(function (t, i) {
                t.__temp && (e.remove(t), n.setItemGraphicEl(i, null))
            }), this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._data = null
        }
    });
    var Pb = function (t, e, n) {
        return {
            seriesType: t, performRawSeries: !0, reset: function (t, i, r) {
                var o = t.getData(), a = t.get("symbol") || e, s = t.get("symbolSize"), l = t.get("symbolKeepAspect");
                if (o.setVisual({
                    legendSymbol: n || a,
                    symbol: a,
                    symbolSize: s,
                    symbolKeepAspect: l
                }), !i.isSeriesFiltered(t)) {
                    var h = "function" == typeof s;
                    return {
                        dataEach: o.hasItemOption || h ? function (e, n) {
                            if ("function" == typeof s) {
                                var i = t.getRawValue(n), r = t.getDataParams(n);
                                e.setItemVisual(n, "symbolSize", s(i, r))
                            }
                            if (e.hasItemOption) {
                                var o = e.getItemModel(n), a = o.getShallow("symbol", !0),
                                    l = o.getShallow("symbolSize", !0), h = o.getShallow("symbolKeepAspect", !0);
                                null != a && e.setItemVisual(n, "symbol", a), null != l && e.setItemVisual(n, "symbolSize", l), null != h && e.setItemVisual(n, "symbolKeepAspect", h)
                            }
                        } : null
                    }
                }
            }
        }
    }, Lb = function (t) {
        return {
            seriesType: t, plan: n_(), reset: function (t) {
                var e = t.getData(), n = t.coordinateSystem, i = t.pipelineContext.large;
                if (n) {
                    var r = f(n.dimensions, function (t) {
                        return e.mapDimension(t)
                    }).slice(0, 2), o = r.length, a = e.getCalculationInfo("stackResultDimension");
                    return tl(e, r[0]) && (r[0] = a), tl(e, r[1]) && (r[1] = a), o && {
                        progress: function (t, e) {
                            for (var a = t.end - t.start, s = i && new Float32Array(a * o), l = t.start, h = 0, u = [], c = []; l < t.end; l++) {
                                var d;
                                if (1 === o) f = e.get(r[0], l), d = !isNaN(f) && n.dataToPoint(f, null, c); else {
                                    var f = u[0] = e.get(r[0], l), p = u[1] = e.get(r[1], l);
                                    d = !isNaN(f) && !isNaN(p) && n.dataToPoint(u, null, c)
                                }
                                i ? (s[h++] = d ? d[0] : NaN, s[h++] = d ? d[1] : NaN) : e.setItemLayout(l, d && d.slice() || [NaN, NaN])
                            }
                            i && e.setLayout("symbolPoints", s)
                        }
                    }
                }
            }
        }
    }, Ob = {
        average: function (t) {
            for (var e = 0, n = 0, i = 0; i < t.length; i++) isNaN(t[i]) || (e += t[i], n++);
            return 0 === n ? NaN : e / n
        }, sum: function (t) {
            for (var e = 0, n = 0; n < t.length; n++) e += t[n] || 0;
            return e
        }, max: function (t) {
            for (var e = -1 / 0, n = 0; n < t.length; n++) t[n] > e && (e = t[n]);
            return isFinite(e) ? e : NaN
        }, min: function (t) {
            for (var e = 1 / 0, n = 0; n < t.length; n++) t[n] < e && (e = t[n]);
            return isFinite(e) ? e : NaN
        }, nearest: function (t) {
            return t[0]
        }
    }, zb = function (t, e) {
        return Math.round(t.length / 2)
    }, Eb = function (t) {
        this._axes = {}, this._dimList = [], this.name = t || ""
    };
    Eb.prototype = {
        constructor: Eb, type: "cartesian", getAxis: function (t) {
            return this._axes[t]
        }, getAxes: function () {
            return f(this._dimList, Nh, this)
        }, getAxesByScale: function (t) {
            return t = t.toLowerCase(), g(this.getAxes(), function (e) {
                return e.scale.type === t
            })
        }, addAxis: function (t) {
            var e = t.dim;
            this._axes[e] = t, this._dimList.push(e)
        }, dataToCoord: function (t) {
            return this._dataCoordConvert(t, "dataToCoord")
        }, coordToData: function (t) {
            return this._dataCoordConvert(t, "coordToData")
        }, _dataCoordConvert: function (t, e) {
            for (var n = this._dimList, i = t instanceof Array ? [] : {}, r = 0; r < n.length; r++) {
                var o = n[r], a = this._axes[o];
                i[o] = a[e](t[o])
            }
            return i
        }
    }, Rh.prototype = {
        constructor: Rh, type: "cartesian2d", dimensions: ["x", "y"], getBaseAxis: function () {
            return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x")
        }, containPoint: function (t) {
            var e = this.getAxis("x"), n = this.getAxis("y");
            return e.contain(e.toLocalCoord(t[0])) && n.contain(n.toLocalCoord(t[1]))
        }, containData: function (t) {
            return this.getAxis("x").containData(t[0]) && this.getAxis("y").containData(t[1])
        }, dataToPoint: function (t, e, n) {
            var i = this.getAxis("x"), r = this.getAxis("y");
            return n = n || [], n[0] = i.toGlobalCoord(i.dataToCoord(t[0])), n[1] = r.toGlobalCoord(r.dataToCoord(t[1])), n
        }, clampData: function (t, e) {
            var n = this.getAxis("x").scale, i = this.getAxis("y").scale, r = n.getExtent(), o = i.getExtent(),
                a = n.parse(t[0]), s = i.parse(t[1]);
            return e = e || [], e[0] = Math.min(Math.max(Math.min(r[0], r[1]), a), Math.max(r[0], r[1])), e[1] = Math.min(Math.max(Math.min(o[0], o[1]), s), Math.max(o[0], o[1])), e
        }, pointToData: function (t, e) {
            var n = this.getAxis("x"), i = this.getAxis("y");
            return e = e || [], e[0] = n.coordToData(n.toLocalCoord(t[0])), e[1] = i.coordToData(i.toLocalCoord(t[1])), e
        }, getOtherAxis: function (t) {
            return this.getAxis("x" === t.dim ? "y" : "x")
        }
    }, h(Rh, Eb);
    var Nb = function (t, e, n, i, r) {
        ub.call(this, t, e, n), this.type = i || "value", this.position = r || "bottom"
    };
    Nb.prototype = {
        constructor: Nb, index: 0, getAxesOnZeroOf: null, model: null, isHorizontal: function () {
            var t = this.position;
            return "top" === t || "bottom" === t
        }, getGlobalExtent: function (t) {
            var e = this.getExtent();
            return e[0] = this.toGlobalCoord(e[0]), e[1] = this.toGlobalCoord(e[1]), t && e[0] > e[1] && e.reverse(), e
        }, getOtherAxis: function () {
            this.grid.getOtherAxis()
        }, pointToData: function (t, e) {
            return this.coordToData(this.toLocalCoord(t["x" === this.dim ? 0 : 1]), e)
        }, toLocalCoord: null, toGlobalCoord: null
    }, h(Nb, ub);
    var Rb = {
        show: !0,
        zlevel: 0,
        z: 0,
        inverse: !1,
        name: "",
        nameLocation: "end",
        nameRotate: null,
        nameTruncate: {maxWidth: null, ellipsis: "...", placeholder: "."},
        nameTextStyle: {},
        nameGap: 15,
        silent: !1,
        triggerEvent: !1,
        tooltip: {show: !1},
        axisPointer: {},
        axisLine: {
            show: !0,
            onZero: !0,
            onZeroAxisIndex: null,
            lineStyle: {color: "#333", width: 1, type: "solid"},
            symbol: ["none", "none"],
            symbolSize: [10, 15]
        },
        axisTick: {show: !0, inside: !1, length: 5, lineStyle: {width: 1}},
        axisLabel: {show: !0, inside: !1, rotate: 0, showMinLabel: null, showMaxLabel: null, margin: 8, fontSize: 12},
        splitLine: {show: !0, lineStyle: {color: ["#ccc"], width: 1, type: "solid"}},
        splitArea: {show: !1, areaStyle: {color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]}}
    }, Bb = {};
    Bb.categoryAxis = i({
        boundaryGap: !0,
        deduplication: null,
        splitLine: {show: !1},
        axisTick: {alignWithLabel: !1, interval: "auto"},
        axisLabel: {interval: "auto"}
    }, Rb), Bb.valueAxis = i({boundaryGap: [0, 0], splitNumber: 5}, Rb), Bb.timeAxis = a({
        scale: !0,
        min: "dataMin",
        max: "dataMax"
    }, Bb.valueAxis), Bb.logAxis = a({scale: !0, logBase: 10}, Bb.valueAxis);
    var Fb = ["value", "category", "time", "log"], Vb = function (t, e, n, o) {
        d(Fb, function (a) {
            e.extend({
                type: t + "Axis." + a, mergeDefaultAndTheme: function (e, r) {
                    var o = this.layoutMode, s = o ? no(e) : {};
                    i(e, r.getTheme().get(a + "Axis")), i(e, this.getDefaultOption()), e.type = n(t, e), o && eo(e, s, o)
                }, optionUpdated: function () {
                    "category" === this.option.type && (this.__ordinalMeta = al.createByAxisModel(this))
                }, getCategories: function (t) {
                    var e = this.option;
                    if ("category" === e.type) return t ? e.data : this.__ordinalMeta.categories
                }, getOrdinalMeta: function () {
                    return this.__ordinalMeta
                }, defaultOption: r([{}, Bb[a + "Axis"], o], !0)
            })
        }), dx.registerSubTypeDefaulter(t + "Axis", v(n, t))
    }, Hb = dx.extend({
        type: "cartesian2dAxis", axis: null, init: function () {
            Hb.superApply(this, "init", arguments), this.resetRange()
        }, mergeOption: function () {
            Hb.superApply(this, "mergeOption", arguments), this.resetRange()
        }, restoreData: function () {
            Hb.superApply(this, "restoreData", arguments), this.resetRange()
        }, getCoordSysModel: function () {
            return this.ecModel.queryComponents({
                mainType: "grid",
                index: this.option.gridIndex,
                id: this.option.gridId
            })[0]
        }
    });
    i(Hb.prototype, $w);
    var Wb = {offset: 0};
    Vb("x", Hb, Bh, Wb), Vb("y", Hb, Bh, Wb), dx.extend({
        type: "grid",
        dependencies: ["xAxis", "yAxis"],
        layoutMode: "box",
        coordinateSystem: null,
        defaultOption: {
            show: !1,
            zlevel: 0,
            z: 0,
            left: "10%",
            top: 60,
            right: "10%",
            bottom: 60,
            containLabel: !1,
            backgroundColor: "rgba(0,0,0,0)",
            borderWidth: 1,
            borderColor: "#ccc"
        }
    });
    var Gb = Vh.prototype;
    Gb.type = "grid", Gb.axisPointerEnabled = !0, Gb.getRect = function () {
        return this._rect
    }, Gb.update = function (t, e) {
        var n = this._axesMap;
        this._updateScale(t, this.model), d(n.x, function (t) {
            Tl(t.scale, t.model)
        }), d(n.y, function (t) {
            Tl(t.scale, t.model)
        });
        var i = {};
        d(n.x, function (t) {
            Hh(n, "y", t, i)
        }), d(n.y, function (t) {
            Hh(n, "x", t, i)
        }), this.resize(this.model, e)
    }, Gb.resize = function (t, e, n) {
        function i() {
            d(o, function (t) {
                var e = t.isHorizontal(), n = e ? [0, r.width] : [0, r.height], i = t.inverse ? 1 : 0;
                t.setExtent(n[i], n[1 - i]), Gh(t, e ? r.x : r.y)
            })
        }

        var r = Jr(t.getBoxLayoutParams(), {width: e.getWidth(), height: e.getHeight()});
        this._rect = r;
        var o = this._axesList;
        i(), !n && t.get("containLabel") && (d(o, function (t) {
            if (!t.model.get("axisLabel.inside")) {
                var e = Pl(t);
                if (e) {
                    var n = t.isHorizontal() ? "height" : "width", i = t.model.get("axisLabel.margin");
                    r[n] -= e[n] + i, "top" === t.position ? r.y += e.height + i : "left" === t.position && (r.x += e.width + i)
                }
            }
        }), i())
    }, Gb.getAxis = function (t, e) {
        var n = this._axesMap[t];
        if (null != n) {
            if (null == e) for (var i in n) if (n.hasOwnProperty(i)) return n[i];
            return n[e]
        }
    }, Gb.getAxes = function () {
        return this._axesList.slice()
    }, Gb.getCartesian = function (t, e) {
        if (null != t && null != e) {
            var n = "x" + t + "y" + e;
            return this._coordsMap[n]
        }
        w(t) && (e = t.yAxisIndex, t = t.xAxisIndex);
        for (var i = 0, r = this._coordsList; i < r.length; i++) if (r[i].getAxis("x").index === t || r[i].getAxis("y").index === e) return r[i]
    }, Gb.getCartesians = function () {
        return this._coordsList.slice()
    }, Gb.convertToPixel = function (t, e, n) {
        var i = this._findConvertTarget(t, e);
        return i.cartesian ? i.cartesian.dataToPoint(n) : i.axis ? i.axis.toGlobalCoord(i.axis.dataToCoord(n)) : null
    }, Gb.convertFromPixel = function (t, e, n) {
        var i = this._findConvertTarget(t, e);
        return i.cartesian ? i.cartesian.pointToData(n) : i.axis ? i.axis.coordToData(i.axis.toLocalCoord(n)) : null
    }, Gb._findConvertTarget = function (t, e) {
        var n, i, r = e.seriesModel, o = e.xAxisModel || r && r.getReferringComponents("xAxis")[0],
            a = e.yAxisModel || r && r.getReferringComponents("yAxis")[0], s = e.gridModel, h = this._coordsList;
        return r ? l(h, n = r.coordinateSystem) < 0 && (n = null) : o && a ? n = this.getCartesian(o.componentIndex, a.componentIndex) : o ? i = this.getAxis("x", o.componentIndex) : a ? i = this.getAxis("y", a.componentIndex) : s && s.coordinateSystem === this && (n = this._coordsList[0]), {
            cartesian: n,
            axis: i
        }
    }, Gb.containPoint = function (t) {
        var e = this._coordsList[0];
        if (e) return e.containPoint(t)
    }, Gb._initCartesian = function (t, e, n) {
        function i(n) {
            return function (i, s) {
                if (Fh(i, t, e)) {
                    var l = i.get("position");
                    "x" === n ? "top" !== l && "bottom" !== l && r[l = "bottom"] && (l = "top" === l ? "bottom" : "top") : "left" !== l && "right" !== l && r[l = "left"] && (l = "left" === l ? "right" : "left"), r[l] = !0;
                    var h = new Nb(n, Al(i), [0, 0], i.get("type"), l), u = "category" === h.type;
                    h.onBand = u && i.get("boundaryGap"), h.inverse = i.get("inverse"), i.axis = h, h.model = i, h.grid = this, h.index = s, this._axesList.push(h), o[n][s] = h, a[n]++
                }
            }
        }

        var r = {left: !1, right: !1, top: !1, bottom: !1}, o = {x: {}, y: {}}, a = {x: 0, y: 0};
        if (e.eachComponent("xAxis", i("x"), this), e.eachComponent("yAxis", i("y"), this), !a.x || !a.y) return this._axesMap = {}, void (this._axesList = []);
        this._axesMap = o, d(o.x, function (e, n) {
            d(o.y, function (i, r) {
                var o = "x" + n + "y" + r, a = new Rh(o);
                a.grid = this, a.model = t, this._coordsMap[o] = a, this._coordsList.push(a), a.addAxis(e), a.addAxis(i)
            }, this)
        }, this)
    }, Gb._updateScale = function (t, e) {
        function n(t, e, n) {
            d(t.mapDimension(e.dim, !0), function (n) {
                e.scale.unionExtentFromData(t, el(t, n))
            })
        }

        d(this._axesList, function (t) {
            t.scale.setExtent(1 / 0, -1 / 0)
        }), t.eachSeries(function (i) {
            if (Uh(i)) {
                var r = Zh(i), o = r[0], a = r[1];
                if (!Fh(o, e, t) || !Fh(a, e, t)) return;
                var s = this.getCartesian(o.componentIndex, a.componentIndex), l = i.getData(), h = s.getAxis("x"),
                    u = s.getAxis("y");
                "list" === l.type && (n(l, h), n(l, u))
            }
        }, this)
    }, Gb.getTooltipAxes = function (t) {
        var e = [], n = [];
        return d(this.getCartesians(), function (i) {
            var r = null != t && "auto" !== t ? i.getAxis(t) : i.getBaseAxis(), o = i.getOtherAxis(r);
            l(e, r) < 0 && e.push(r), l(n, o) < 0 && n.push(o)
        }), {baseAxes: e, otherAxes: n}
    };
    var Zb = ["xAxis", "yAxis"];
    Vh.create = function (t, e) {
        var n = [];
        return t.eachComponent("grid", function (i, r) {
            var o = new Vh(i, t, e);
            o.name = "grid_" + r, o.resize(i, e, !0), i.coordinateSystem = o, n.push(o)
        }), t.eachSeries(function (t) {
            if (Uh(t)) {
                var e = Zh(t), n = e[0], i = e[1], r = n.getCoordSysModel().coordinateSystem;
                t.coordinateSystem = r.getCartesian(n.componentIndex, i.componentIndex)
            }
        }), n
    }, Vh.dimensions = Vh.prototype.dimensions = Rh.prototype.dimensions, Do.register("cartesian2d", Vh);
    var Ub = Math.PI, Xb = function (t, e) {
        this.opt = e, this.axisModel = t, a(e, {
            labelOffset: 0,
            nameDirection: 1,
            tickDirection: 1,
            labelDirection: 1,
            silent: !0
        }), this.group = new am;
        var n = new am({position: e.position.slice(), rotation: e.rotation});
        n.updateTransform(), this._transform = n.transform, this._dumbGroup = n
    };
    Xb.prototype = {
        constructor: Xb, hasBuilder: function (t) {
            return !!Yb[t]
        }, add: function (t) {
            Yb[t].call(this)
        }, getGroup: function () {
            return this.group
        }
    };
    var Yb = {
        axisLine: function () {
            var t = this.opt, e = this.axisModel;
            if (e.get("axisLine.show")) {
                var n = this.axisModel.axis.getExtent(), i = this._transform, r = [n[0], 0], a = [n[1], 0];
                i && ($(r, r, i), $(a, a, i));
                var s = o({lineCap: "round"}, e.getModel("axisLine.lineStyle").getLineStyle());
                this.group.add(new Ty(Gi({
                    anid: "line",
                    shape: {x1: r[0], y1: r[1], x2: a[0], y2: a[1]},
                    style: s,
                    strokeContainThreshold: t.strokeContainThreshold || 5,
                    silent: !0,
                    z2: 1
                })));
                var l = e.get("axisLine.symbol"), h = e.get("axisLine.symbolSize"),
                    u = e.get("axisLine.symbolOffset") || 0;
                if ("number" == typeof u && (u = [u, u]), null != l) {
                    "string" == typeof l && (l = [l, l]), "string" != typeof h && "number" != typeof h || (h = [h, h]);
                    var c = h[0], f = h[1];
                    d([{rotate: t.rotation + Math.PI / 2, offset: u[0], r: 0}, {
                        rotate: t.rotation - Math.PI / 2,
                        offset: u[1],
                        r: Math.sqrt((r[0] - a[0]) * (r[0] - a[0]) + (r[1] - a[1]) * (r[1] - a[1]))
                    }], function (e, n) {
                        if ("none" !== l[n] && null != l[n]) {
                            var i = Nl(l[n], -c / 2, -f / 2, c, f, s.stroke, !0), o = e.r + e.offset,
                                a = [r[0] + o * Math.cos(t.rotation), r[1] - o * Math.sin(t.rotation)];
                            i.attr({rotation: e.rotate, position: a, silent: !0, z2: 11}), this.group.add(i)
                        }
                    }, this)
                }
            }
        }, axisTickLabel: function () {
            var t = this.axisModel, e = this.opt, n = Jh(this, t, e);
            qh(t, tu(this, t, e), n)
        }, axisName: function () {
            var t = this.opt, e = this.axisModel, n = T(t.axisName, e.get("name"));
            if (n) {
                var i, r = e.get("nameLocation"), a = t.nameDirection, s = e.getModel("nameTextStyle"),
                    l = e.get("nameGap") || 0, h = this.axisModel.axis.getExtent(), u = h[0] > h[1] ? -1 : 1,
                    c = ["start" === r ? h[0] - u * l : "end" === r ? h[1] + u * l : (h[0] + h[1]) / 2, Qh(r) ? t.labelOffset + a * l : 0],
                    d = e.get("nameRotate");
                null != d && (d = d * Ub / 180);
                var f;
                Qh(r) ? i = jb(t.rotation, null != d ? d : t.rotation, a) : (i = Yh(t, r, d || 0, h), null != (f = t.axisNameAvailableWidth) && (f = Math.abs(f / Math.sin(i.rotation)), !isFinite(f) && (f = null)));
                var p = s.getFont(), g = e.get("nameTruncate", !0) || {}, m = g.ellipsis,
                    v = T(t.nameTruncateMaxWidth, g.maxWidth, f),
                    y = null != m && null != v ? rx(n, v, p, m, {minChar: 2, placeholder: g.placeholder}) : n,
                    x = e.get("tooltip", !0), _ = e.mainType, w = {componentType: _, name: n, $vars: ["name"]};
                w[_ + "Index"] = e.componentIndex;
                var b = new dy({
                    anid: "name",
                    __fullText: n,
                    __truncatedText: y,
                    position: c,
                    rotation: i.rotation,
                    silent: jh(e),
                    z2: 1,
                    tooltip: x && x.show ? o({
                        content: n, formatter: function () {
                            return n
                        }, formatterParams: w
                    }, x) : null
                });
                lr(b.style, s, {
                    text: y,
                    textFont: p,
                    textFill: s.getTextColor() || e.get("axisLine.lineStyle.color"),
                    textAlign: i.textAlign,
                    textVerticalAlign: i.textVerticalAlign
                }), e.get("triggerEvent") && (b.eventData = Xh(e), b.eventData.targetType = "axisName", b.eventData.name = n), this._dumbGroup.add(b), b.updateTransform(), this.group.add(b), b.decomposeTransform()
            }
        }
    }, jb = Xb.innerTextLayout = function (t, e, n) {
        var i, r, o = Br(e - t);
        return Fr(o) ? (r = n > 0 ? "top" : "bottom", i = "center") : Fr(o - Ub) ? (r = n > 0 ? "bottom" : "top", i = "center") : (r = "middle", i = o > 0 && o < Ub ? n > 0 ? "right" : "left" : n > 0 ? "left" : "right"), {
            rotation: o,
            textAlign: i,
            textVerticalAlign: r
        }
    }, qb = d, $b = v, Kb = Cs({
        type: "axis", _axisPointer: null, axisPointerClass: null, render: function (t, e, n, i) {
            this.axisPointerClass && su(t), Kb.superApply(this, "render", arguments), du(this, t, 0, n, 0, !0)
        }, updateAxisPointer: function (t, e, n, i, r) {
            du(this, t, 0, n, 0, !1)
        }, remove: function (t, e) {
            var n = this._axisPointer;
            n && n.remove(e), Kb.superApply(this, "remove", arguments)
        }, dispose: function (t, e) {
            fu(this, e), Kb.superApply(this, "dispose", arguments)
        }
    }), Qb = [];
    Kb.registerAxisPointerClass = function (t, e) {
        Qb[t] = e
    }, Kb.getAxisPointerClass = function (t) {
        return t && Qb[t]
    };
    var Jb = ["axisLine", "axisTickLabel", "axisName"], tS = ["splitArea", "splitLine"], eS = Kb.extend({
        type: "cartesianAxis", axisPointerClass: "CartesianAxisPointer", render: function (t, e, n, i) {
            this.group.removeAll();
            var r = this._axisGroup;
            if (this._axisGroup = new am, this.group.add(this._axisGroup), t.get("show")) {
                var o = t.getCoordSysModel(), a = pu(o, t), s = new Xb(t, a);
                d(Jb, s.add, s), this._axisGroup.add(s.getGroup()), d(tS, function (e) {
                    t.get(e + ".show") && this["_" + e](t, o)
                }, this), br(r, this._axisGroup, t), eS.superCall(this, "render", t, e, n, i)
            }
        }, remove: function () {
            this._splitAreaColors = null
        }, _splitLine: function (t, e) {
            var n = t.axis;
            if (!n.scale.isBlank()) {
                var i = t.getModel("splitLine"), r = i.getModel("lineStyle"), o = r.get("color");
                o = y(o) ? o : [o];
                for (var s = e.coordinateSystem.getRect(), l = n.isHorizontal(), h = 0, u = n.getTicksCoords({tickModel: i}), c = [], d = [], f = r.getLineStyle(), p = 0; p < u.length; p++) {
                    var g = n.toGlobalCoord(u[p].coord);
                    l ? (c[0] = g, c[1] = s.y, d[0] = g, d[1] = s.y + s.height) : (c[0] = s.x, c[1] = g, d[0] = s.x + s.width, d[1] = g);
                    var m = h++ % o.length, v = u[p].tickValue;
                    this._axisGroup.add(new Ty(Gi({
                        anid: null != v ? "line_" + u[p].tickValue : null,
                        shape: {x1: c[0], y1: c[1], x2: d[0], y2: d[1]},
                        style: a({stroke: o[m]}, f),
                        silent: !0
                    })))
                }
            }
        }, _splitArea: function (t, e) {
            var n = t.axis;
            if (!n.scale.isBlank()) {
                var i = t.getModel("splitArea"), r = i.getModel("areaStyle"), o = r.get("color"),
                    s = e.coordinateSystem.getRect(), l = n.getTicksCoords({tickModel: i, clamp: !0});
                if (l.length) {
                    var h = o.length, u = this._splitAreaColors, c = N(), d = 0;
                    if (u) for (m = 0; m < l.length; m++) {
                        var f = u.get(l[m].tickValue);
                        if (null != f) {
                            d = (f + (h - 1) * m) % h;
                            break
                        }
                    }
                    var p = n.toGlobalCoord(l[0].coord), g = r.getAreaStyle();
                    o = y(o) ? o : [o];
                    for (var m = 1; m < l.length; m++) {
                        var v, x, _, w, b = n.toGlobalCoord(l[m].coord);
                        n.isHorizontal() ? (v = p, x = s.y, _ = b - v, w = s.height, p = v + _) : (v = s.x, x = p, _ = s.width, p = x + (w = b - x));
                        var S = l[m - 1].tickValue;
                        null != S && c.set(S, d), this._axisGroup.add(new My({
                            anid: null != S ? "area_" + S : null,
                            shape: {x: v, y: x, width: _, height: w},
                            style: a({fill: o[d]}, g),
                            silent: !0
                        })), d = (d + 1) % h
                    }
                    this._splitAreaColors = c
                }
            }
        }
    });
    eS.extend({type: "xAxis"}), eS.extend({type: "yAxis"}), Cs({
        type: "grid", render: function (t, e) {
            this.group.removeAll(), t.get("show") && this.group.add(new My({
                shape: t.coordinateSystem.getRect(),
                style: a({fill: t.get("backgroundColor")}, t.getItemStyle()),
                silent: !0,
                z2: -1
            }))
        }
    }), _s(function (t) {
        t.xAxis && t.yAxis && !t.grid && (t.grid = {})
    }), Ms(Pb("line", "circle", "line")), Ss(Lb("line")), ws(Z_.PROCESSOR.STATISTIC, function (t) {
        return {
            seriesType: t, modifyOutputEnd: !0, reset: function (t, e, n) {
                var i = t.getData(), r = t.get("sampling"), o = t.coordinateSystem;
                if ("cartesian2d" === o.type && r) {
                    var a = o.getBaseAxis(), s = o.getOtherAxis(a), l = a.getExtent(), h = l[1] - l[0],
                        u = Math.round(i.count() / h);
                    if (u > 1) {
                        var c;
                        "string" == typeof r ? c = Ob[r] : "function" == typeof r && (c = r), c && t.setData(i.downSample(i.mapDimension(s.dim), 1 / u, c, zb))
                    }
                }
            }
        }
    }("line")), Jx.extend({
        type: "series.__base_bar__",
        getInitialData: function (t, e) {
            return nl(this.getSource(), this)
        },
        getMarkerPosition: function (t) {
            var e = this.coordinateSystem;
            if (e) {
                var n = e.dataToPoint(e.clampData(t)), i = this.getData(), r = i.getLayout("offset"),
                    o = i.getLayout("size");
                return n[e.getBaseAxis().isHorizontal() ? 0 : 1] += r + o / 2, n
            }
            return [NaN, NaN]
        },
        defaultOption: {
            zlevel: 0,
            z: 2,
            coordinateSystem: "cartesian2d",
            legendHoverLink: !0,
            barMinHeight: 0,
            barMinAngle: 0,
            large: !1,
            largeThreshold: 400,
            progressive: 3e3,
            progressiveChunkMode: "mod",
            itemStyle: {},
            emphasis: {}
        }
    }).extend({
        type: "series.bar", dependencies: ["grid", "polar"], brushSelector: "rect", getProgressive: function () {
            return !!this.get("large") && this.get("progressive")
        }, getProgressiveThreshold: function () {
            var t = this.get("progressiveThreshold"), e = this.get("largeThreshold");
            return e > t && (t = e), t
        }
    });
    var nS = ov([["fill", "color"], ["stroke", "borderColor"], ["lineWidth", "borderWidth"], ["stroke", "barBorderColor"], ["lineWidth", "barBorderWidth"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]]),
        iS = {
            getBarItemStyle: function (t) {
                var e = nS(this, t);
                if (this.getBorderLineDash) {
                    var n = this.getBorderLineDash();
                    n && (e.lineDash = n)
                }
                return e
            }
        }, rS = ["itemStyle", "barBorderWidth"];
    o(Ir.prototype, iS), ks({
        type: "bar", render: function (t, e, n) {
            this._updateDrawMode(t);
            var i = t.get("coordinateSystem");
            return "cartesian2d" !== i && "polar" !== i || (this._isLargeDraw ? this._renderLarge(t, e, n) : this._renderNormal(t, e, n)), this.group
        }, incrementalPrepareRender: function (t, e, n) {
            this._clear(), this._updateDrawMode(t)
        }, incrementalRender: function (t, e, n, i) {
            this._incrementalRenderLarge(t, e)
        }, _updateDrawMode: function (t) {
            var e = t.pipelineContext.large;
            (null == this._isLargeDraw || e ^ this._isLargeDraw) && (this._isLargeDraw = e, this._clear())
        }, _renderNormal: function (t, e, n) {
            var i, r = this.group, o = t.getData(), a = this._data, s = t.coordinateSystem, l = s.getBaseAxis();
            "cartesian2d" === s.type ? i = l.isHorizontal() : "polar" === s.type && (i = "angle" === l.dim);
            var h = t.isAnimationEnabled() ? t : null;
            o.diff(a).add(function (e) {
                if (o.hasValue(e)) {
                    var n = o.getItemModel(e), a = aS[s.type](o, e, n), l = oS[s.type](o, e, n, a, i, h);
                    o.setItemGraphicEl(e, l), r.add(l), xu(l, o, e, n, a, t, i, "polar" === s.type)
                }
            }).update(function (e, n) {
                var l = a.getItemGraphicEl(n);
                if (o.hasValue(e)) {
                    var u = o.getItemModel(e), c = aS[s.type](o, e, u);
                    l ? vr(l, {shape: c}, h, e) : l = oS[s.type](o, e, u, c, i, h, !0), o.setItemGraphicEl(e, l), r.add(l), xu(l, o, e, u, c, t, i, "polar" === s.type)
                } else r.remove(l)
            }).remove(function (t) {
                var e = a.getItemGraphicEl(t);
                "cartesian2d" === s.type ? e && vu(t, h, e) : e && yu(t, h, e)
            }).execute(), this._data = o
        }, _renderLarge: function (t, e, n) {
            this._clear(), wu(t, this.group)
        }, _incrementalRenderLarge: function (t, e) {
            wu(e, this.group, !0)
        }, dispose: R, remove: function (t) {
            this._clear(t)
        }, _clear: function (t) {
            var e = this.group, n = this._data;
            t && t.get("animation") && n && !this._isLargeDraw ? n.eachItemGraphicEl(function (e) {
                "sector" === e.type ? yu(e.dataIndex, t, e) : vu(e.dataIndex, t, e)
            }) : e.removeAll(), this._data = null
        }
    });
    var oS = {
        cartesian2d: function (t, e, n, i, r, a, s) {
            var l = new My({shape: o({}, i)});
            if (a) {
                var h = l.shape, u = r ? "height" : "width", c = {};
                h[u] = 0, c[u] = i[u], Wy[s ? "updateProps" : "initProps"](l, {shape: c}, a, e)
            }
            return l
        }, polar: function (t, e, n, i, r, o, s) {
            var l = i.startAngle < i.endAngle, h = new my({shape: a({clockwise: l}, i)});
            if (o) {
                var u = h.shape, c = r ? "r" : "endAngle", d = {};
                u[c] = r ? 0 : i.startAngle, d[c] = i[c], Wy[s ? "updateProps" : "initProps"](h, {shape: d}, o, e)
            }
            return h
        }
    }, aS = {
        cartesian2d: function (t, e, n) {
            var i = t.getItemLayout(e), r = _u(n, i), o = i.width > 0 ? 1 : -1, a = i.height > 0 ? 1 : -1;
            return {x: i.x + o * r / 2, y: i.y + a * r / 2, width: i.width - o * r, height: i.height - a * r}
        }, polar: function (t, e, n) {
            var i = t.getItemLayout(e);
            return {cx: i.cx, cy: i.cy, r0: i.r0, r: i.r, startAngle: i.startAngle, endAngle: i.endAngle}
        }
    }, sS = Ii.extend({
        type: "largeBar", shape: {points: []}, buildPath: function (t, e) {
            for (var n = e.points, i = this.__startPoint, r = this.__valueIdx, o = 0; o < n.length; o += 2) i[this.__valueIdx] = n[o + r], t.moveTo(i[0], i[1]), t.lineTo(n[o], n[o + 1])
        }
    });
    Ss(v(function (t, e) {
        var n = ml(t, e), i = vl(n), r = {};
        d(n, function (t) {
            var e = t.getData(), n = t.coordinateSystem, o = n.getBaseAxis(), a = pl(t), s = i[gl(o)][a], l = s.offset,
                h = s.width, u = n.getOtherAxis(o), c = t.get("barMinHeight") || 0;
            r[a] = r[a] || [], e.setLayout({offset: l, size: h});
            for (var d = e.mapDimension(u.dim), f = e.mapDimension(o.dim), p = tl(e, d), g = u.isHorizontal(), m = bl(0, u), v = 0, y = e.count(); v < y; v++) {
                var x = e.get(d, v), _ = e.get(f, v);
                if (!isNaN(x)) {
                    var w = x >= 0 ? "p" : "n", b = m;
                    p && (r[a][_] || (r[a][_] = {p: m, n: m}), b = r[a][_][w]);
                    var S, M, I, T;
                    if (g) S = b, M = (A = n.dataToPoint([x, _]))[1] + l, I = A[0] - m, T = h, Math.abs(I) < c && (I = (I < 0 ? -1 : 1) * c), p && (r[a][_][w] += I); else {
                        var A = n.dataToPoint([_, x]);
                        S = A[0] + l, M = b, I = h, T = A[1] - m, Math.abs(T) < c && (T = (T <= 0 ? -1 : 1) * c), p && (r[a][_][w] += T)
                    }
                    e.setItemLayout(v, {x: S, y: M, width: I, height: T})
                }
            }
        }, this)
    }, "bar")), Ss(zw), Ms({
        seriesType: "bar", reset: function (t) {
            t.getData().setVisual("legendSymbol", "roundRect")
        }
    });
    var lS = function (t, e, n) {
        e = y(e) && {coordDimensions: e} || o({}, e);
        var i = t.getSource(), r = Iw(i, e), a = new bw(r, t);
        return a.initData(i, n), a
    }, hS = {
        updateSelectedMap: function (t) {
            this._targetList = y(t) ? t.slice() : [], this._selectTargetMap = p(t || [], function (t, e) {
                return t.set(e.name, e), t
            }, N())
        }, select: function (t, e) {
            var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
            "single" === this.get("selectedMode") && this._selectTargetMap.each(function (t) {
                t.selected = !1
            }), n && (n.selected = !0)
        }, unSelect: function (t, e) {
            var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
            n && (n.selected = !1)
        }, toggleSelected: function (t, e) {
            var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
            if (null != n) return this[n.selected ? "unSelect" : "select"](t, e), n.selected
        }, isSelected: function (t, e) {
            var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
            return n && n.selected
        }
    }, uS = Ds({
        type: "series.pie",
        init: function (t) {
            uS.superApply(this, "init", arguments), this.legendDataProvider = function () {
                return this.getRawData()
            }, this.updateSelectedMap(this._createSelectableList()), this._defaultLabelLine(t)
        },
        mergeOption: function (t) {
            uS.superCall(this, "mergeOption", t), this.updateSelectedMap(this._createSelectableList())
        },
        getInitialData: function (t, e) {
            return lS(this, ["value"])
        },
        _createSelectableList: function () {
            for (var t = this.getRawData(), e = t.mapDimension("value"), n = [], i = 0, r = t.count(); i < r; i++) n.push({
                name: t.getName(i),
                value: t.get(e, i),
                selected: na(t, i, "selected")
            });
            return n
        },
        getDataParams: function (t) {
            var e = this.getData(), n = uS.superCall(this, "getDataParams", t), i = [];
            return e.each(e.mapDimension("value"), function (t) {
                i.push(t)
            }), n.percent = Rr(i, t, e.hostModel.get("percentPrecision")), n.$vars.push("percent"), n
        },
        _defaultLabelLine: function (t) {
            In(t, "labelLine", ["show"]);
            var e = t.labelLine, n = t.emphasis.labelLine;
            e.show = e.show && t.label.show, n.show = n.show && t.emphasis.label.show
        },
        defaultOption: {
            zlevel: 0,
            z: 2,
            legendHoverLink: !0,
            hoverAnimation: !0,
            center: ["50%", "50%"],
            radius: [0, "75%"],
            clockwise: !0,
            startAngle: 90,
            minAngle: 0,
            selectedOffset: 10,
            hoverOffset: 10,
            avoidLabelOverlap: !0,
            percentPrecision: 2,
            stillShowZeroSum: !0,
            label: {rotate: !1, show: !0, position: "outer"},
            labelLine: {show: !0, length: 15, length2: 15, smooth: !1, lineStyle: {width: 1, type: "solid"}},
            itemStyle: {borderWidth: 1},
            animationType: "expansion",
            animationEasing: "cubicOut"
        }
    });
    u(uS, hS);
    var cS = Iu.prototype;
    cS.updateData = function (t, e, n) {
        function i() {
            s.stopAnimation(!0), s.animateTo({shape: {r: u.r + l.get("hoverOffset")}}, 300, "elasticOut")
        }

        function r() {
            s.stopAnimation(!0), s.animateTo({shape: {r: u.r}}, 300, "elasticOut")
        }

        var s = this.childAt(0), l = t.hostModel, h = t.getItemModel(e), u = t.getItemLayout(e), c = o({}, u);
        c.label = null, n ? (s.setShape(c), "scale" === l.getShallow("animationType") ? (s.shape.r = u.r0, yr(s, {shape: {r: u.r}}, l, e)) : (s.shape.endAngle = u.startAngle, vr(s, {shape: {endAngle: u.endAngle}}, l, e))) : vr(s, {shape: c}, l, e);
        var d = t.getItemVisual(e, "color");
        s.useStyle(a({
            lineJoin: "bevel",
            fill: d
        }, h.getModel("itemStyle").getItemStyle())), s.hoverStyle = h.getModel("emphasis.itemStyle").getItemStyle();
        var f = h.getShallow("cursor");
        f && s.attr("cursor", f), Mu(this, t.getItemLayout(e), l.isSelected(null, e), l.get("selectedOffset"), l.get("animation")), s.off("mouseover").off("mouseout").off("emphasis").off("normal"), h.get("hoverAnimation") && l.isAnimationEnabled() && s.on("mouseover", i).on("mouseout", r).on("emphasis", i).on("normal", r), this._updateLabel(t, e), or(this)
    }, cS._updateLabel = function (t, e) {
        var n = this.childAt(1), i = this.childAt(2), r = t.hostModel, o = t.getItemModel(e),
            a = t.getItemLayout(e).label, s = t.getItemVisual(e, "color");
        vr(n, {shape: {points: a.linePoints || [[a.x, a.y], [a.x, a.y], [a.x, a.y]]}}, r, e), vr(i, {
            style: {
                x: a.x,
                y: a.y
            }
        }, r, e), i.attr({rotation: a.rotation, origin: [a.x, a.y], z2: 10});
        var l = o.getModel("label"), h = o.getModel("emphasis.label"), u = o.getModel("labelLine"),
            c = o.getModel("emphasis.labelLine"), s = t.getItemVisual(e, "color");
        sr(i.style, i.hoverStyle = {}, l, h, {
            labelFetcher: t.hostModel,
            labelDataIndex: e,
            defaultText: t.getName(e),
            autoColor: s,
            useInsideStyle: !!a.inside
        }, {
            textAlign: a.textAlign,
            textVerticalAlign: a.verticalAlign,
            opacity: t.getItemVisual(e, "opacity")
        }), i.ignore = i.normalIgnore = !l.get("show"), i.hoverIgnore = !h.get("show"), n.ignore = n.normalIgnore = !u.get("show"), n.hoverIgnore = !c.get("show"), n.setStyle({
            stroke: s,
            opacity: t.getItemVisual(e, "opacity")
        }), n.setStyle(u.getModel("lineStyle").getLineStyle()), n.hoverStyle = c.getModel("lineStyle").getLineStyle();
        var d = u.get("smooth");
        d && !0 === d && (d = .4), n.setShape({smooth: d})
    }, h(Iu, am);
    ga.extend({
        type: "pie", init: function () {
            var t = new am;
            this._sectorGroup = t
        }, render: function (t, e, n, i) {
            if (!i || i.from !== this.uid) {
                var r = t.getData(), o = this._data, a = this.group, s = e.get("animation"), l = !o,
                    h = t.get("animationType"), u = v(Su, this.uid, t, s, n), c = t.get("selectedMode");
                if (r.diff(o).add(function (t) {
                    var e = new Iu(r, t);
                    l && "scale" !== h && e.eachChild(function (t) {
                        t.stopAnimation(!0)
                    }), c && e.on("click", u), r.setItemGraphicEl(t, e), a.add(e)
                }).update(function (t, e) {
                    var n = o.getItemGraphicEl(e);
                    n.updateData(r, t), n.off("click"), c && n.on("click", u), a.add(n), r.setItemGraphicEl(t, n)
                }).remove(function (t) {
                    var e = o.getItemGraphicEl(t);
                    a.remove(e)
                }).execute(), s && l && r.count() > 0 && "scale" !== h) {
                    var d = r.getItemLayout(0), f = Math.max(n.getWidth(), n.getHeight()) / 2,
                        p = m(a.removeClipPath, a);
                    a.setClipPath(this._createClipPath(d.cx, d.cy, f, d.startAngle, d.clockwise, p, t))
                } else a.removeClipPath();
                this._data = r
            }
        }, dispose: function () {
        }, _createClipPath: function (t, e, n, i, r, o, a) {
            var s = new my({shape: {cx: t, cy: e, r0: 0, r: n, startAngle: i, endAngle: i, clockwise: r}});
            return yr(s, {shape: {endAngle: i + (r ? 1 : -1) * Math.PI * 2}}, a, o), s
        }, containPoint: function (t, e) {
            var n = e.getData().getItemLayout(0);
            if (n) {
                var i = t[0] - n.cx, r = t[1] - n.cy, o = Math.sqrt(i * i + r * r);
                return o <= n.r && o >= n.r0
            }
        }
    });
    var dS = function (t, e, n, i) {
        var r, o, a = t.getData(), s = [], l = !1;
        a.each(function (n) {
            var i, h, u, c, d = a.getItemLayout(n), f = a.getItemModel(n), p = f.getModel("label"),
                g = p.get("position") || f.get("emphasis.label.position"), m = f.getModel("labelLine"),
                v = m.get("length"), y = m.get("length2"), x = (d.startAngle + d.endAngle) / 2, _ = Math.cos(x),
                w = Math.sin(x);
            r = d.cx, o = d.cy;
            var b = "inside" === g || "inner" === g;
            if ("center" === g) i = d.cx, h = d.cy, c = "center"; else {
                var S = (b ? (d.r + d.r0) / 2 * _ : d.r * _) + r, M = (b ? (d.r + d.r0) / 2 * w : d.r * w) + o;
                if (i = S + 3 * _, h = M + 3 * w, !b) {
                    var I = S + _ * (v + e - d.r), T = M + w * (v + e - d.r), A = I + (_ < 0 ? -1 : 1) * y, C = T;
                    i = A + (_ < 0 ? -5 : 5), h = C, u = [[S, M], [I, T], [A, C]]
                }
                c = b ? "center" : _ > 0 ? "left" : "right"
            }
            var D = p.getFont(), k = p.get("rotate") ? _ < 0 ? -x + Math.PI : -x : 0,
                P = Te(t.getFormattedLabel(n, "normal") || a.getName(n), D, c, "top");
            l = !!k, d.label = {
                x: i,
                y: h,
                position: g,
                height: P.height,
                len: v,
                len2: y,
                linePoints: u,
                textAlign: c,
                verticalAlign: "middle",
                rotation: k,
                inside: b
            }, b || s.push(d.label)
        }), !l && t.get("avoidLabelOverlap") && Au(s, r, o, e, n, i)
    }, fS = 2 * Math.PI, pS = Math.PI / 180;
    !function (t, e) {
        d(e, function (e) {
            e.update = "updateView", bs(e, function (n, i) {
                var r = {};
                return i.eachComponent({mainType: "series", subType: t, query: n}, function (t) {
                    t[e.method] && t[e.method](n.name, n.dataIndex);
                    var i = t.getData();
                    i.each(function (e) {
                        var n = i.getName(e);
                        r[n] = t.isSelected(n) || !1
                    })
                }), {name: n.name, selected: r}
            })
        })
    }("pie", [{type: "pieToggleSelect", event: "pieselectchanged", method: "toggleSelected"}, {
        type: "pieSelect",
        event: "pieselected",
        method: "select"
    }, {type: "pieUnSelect", event: "pieunselected", method: "unSelect"}]), Ms(function (t) {
        return {
            getTargetSeries: function (e) {
                var n = {}, i = N();
                return e.eachSeriesByType(t, function (t) {
                    t.__paletteScope = n, i.set(t.uid, t)
                }), i
            }, reset: function (t, e) {
                var n = t.getRawData(), i = {}, r = t.getData();
                r.each(function (t) {
                    var e = r.getRawIndex(t);
                    i[e] = t
                }), n.each(function (e) {
                    var o = i[e], a = null != o && r.getItemVisual(o, "color", !0);
                    if (a) n.setItemVisual(e, "color", a); else {
                        var s = n.getItemModel(e).get("itemStyle.color") || t.getColorFromPalette(n.getName(e) || e + "", t.__paletteScope, n.count());
                        n.setItemVisual(e, "color", s), null != o && r.setItemVisual(o, "color", s)
                    }
                })
            }
        }
    }("pie")), Ss(v(function (t, e, n, i) {
        e.eachSeriesByType(t, function (t) {
            var e = t.getData(), i = e.mapDimension("value"), r = t.get("center"), o = t.get("radius");
            y(o) || (o = [0, o]), y(r) || (r = [r, r]);
            var a = n.getWidth(), s = n.getHeight(), l = Math.min(a, s), h = Pr(r[0], a), u = Pr(r[1], s),
                c = Pr(o[0], l / 2), d = Pr(o[1], l / 2), f = -t.get("startAngle") * pS, p = t.get("minAngle") * pS,
                g = 0;
            e.each(i, function (t) {
                !isNaN(t) && g++
            });
            var m = e.getSum(i), v = Math.PI / (m || g) * 2, x = t.get("clockwise"), _ = t.get("roseType"),
                w = t.get("stillShowZeroSum"), b = e.getDataExtent(i);
            b[0] = 0;
            var S = fS, M = 0, I = f, T = x ? 1 : -1;
            if (e.each(i, function (t, n) {
                var i;
                if (isNaN(t)) e.setItemLayout(n, {
                    angle: NaN,
                    startAngle: NaN,
                    endAngle: NaN,
                    clockwise: x,
                    cx: h,
                    cy: u,
                    r0: c,
                    r: _ ? NaN : d
                }); else {
                    (i = "area" !== _ ? 0 === m && w ? v : t * v : fS / g) < p ? (i = p, S -= p) : M += t;
                    var r = I + T * i;
                    e.setItemLayout(n, {
                        angle: i,
                        startAngle: I,
                        endAngle: r,
                        clockwise: x,
                        cx: h,
                        cy: u,
                        r0: c,
                        r: _ ? kr(t, b, [c, d]) : d
                    }), I = r
                }
            }), S < fS && g) if (S <= .001) {
                var A = fS / g;
                e.each(i, function (t, n) {
                    if (!isNaN(t)) {
                        var i = e.getItemLayout(n);
                        i.angle = A, i.startAngle = f + T * n * A, i.endAngle = f + T * (n + 1) * A
                    }
                })
            } else v = S / M, I = f, e.each(i, function (t, n) {
                if (!isNaN(t)) {
                    var i = e.getItemLayout(n), r = i.angle === p ? p : t * v;
                    i.startAngle = I, i.endAngle = I + T * r, I += T * r
                }
            });
            dS(t, d, a, s)
        })
    }, "pie")), ws(function (t) {
        return {
            seriesType: t, reset: function (t, e) {
                var n = e.findComponents({mainType: "legend"});
                if (n && n.length) {
                    var i = t.getData();
                    i.filterSelf(function (t) {
                        for (var e = i.getName(t), r = 0; r < n.length; r++) if (!n[r].isSelected(e)) return !1;
                        return !0
                    })
                }
            }
        }
    }("pie")), Jx.extend({
        type: "series.scatter",
        dependencies: ["grid", "polar", "geo", "singleAxis", "calendar"],
        getInitialData: function (t, e) {
            return nl(this.getSource(), this)
        },
        brushSelector: "point",
        getProgressive: function () {
            var t = this.option.progressive;
            return null == t ? this.option.large ? 5e3 : this.get("progressive") : t
        },
        getProgressiveThreshold: function () {
            var t = this.option.progressiveThreshold;
            return null == t ? this.option.large ? 1e4 : this.get("progressiveThreshold") : t
        },
        defaultOption: {
            coordinateSystem: "cartesian2d",
            zlevel: 0,
            z: 2,
            legendHoverLink: !0,
            hoverAnimation: !0,
            symbolSize: 10,
            large: !1,
            largeThreshold: 2e3,
            itemStyle: {opacity: .8}
        }
    });
    var gS = Bi({
        shape: {points: null}, symbolProxy: null, buildPath: function (t, e) {
            var n = e.points, i = e.size, r = this.symbolProxy, o = r.shape;
            if (!((t.getContext ? t.getContext() : t) && i[0] < 4)) for (var a = 0; a < n.length;) {
                var s = n[a++], l = n[a++];
                isNaN(s) || isNaN(l) || (o.x = s - i[0] / 2, o.y = l - i[1] / 2, o.width = i[0], o.height = i[1], r.buildPath(t, o, !0))
            }
        }, afterBrush: function (t) {
            var e = this.shape, n = e.points, i = e.size;
            if (i[0] < 4) {
                this.setTransform(t);
                for (var r = 0; r < n.length;) {
                    var o = n[r++], a = n[r++];
                    isNaN(o) || isNaN(a) || t.fillRect(o - i[0] / 2, a - i[1] / 2, i[0], i[1])
                }
                this.restoreTransform(t)
            }
        }, findDataIndex: function (t, e) {
            for (var n = this.shape, i = n.points, r = n.size, o = Math.max(r[0], 4), a = Math.max(r[1], 4), s = i.length / 2 - 1; s >= 0; s--) {
                var l = 2 * s, h = i[l] - o / 2, u = i[l + 1] - a / 2;
                if (t >= h && e >= u && t <= h + o && e <= u + a) return s
            }
            return -1
        }
    }), mS = Du.prototype;
    mS.isPersistent = function () {
        return !this._incremental
    }, mS.updateData = function (t) {
        this.group.removeAll();
        var e = new gS({rectHover: !0, cursor: "default"});
        e.setShape({points: t.getLayout("symbolPoints")}), this._setCommon(e, t), this.group.add(e), this._incremental = null
    }, mS.updateLayout = function (t) {
        if (!this._incremental) {
            var e = t.getLayout("symbolPoints");
            this.group.eachChild(function (t) {
                if (null != t.startIndex) {
                    var n = 2 * (t.endIndex - t.startIndex), i = 4 * t.startIndex * 2;
                    e = new Float32Array(e.buffer, i, n)
                }
                t.setShape("points", e)
            })
        }
    }, mS.incrementalPrepareUpdate = function (t) {
        this.group.removeAll(), this._clearIncremental(), t.count() > 2e6 ? (this._incremental || (this._incremental = new Ri({silent: !0})), this.group.add(this._incremental)) : this._incremental = null
    }, mS.incrementalUpdate = function (t, e) {
        var n;
        this._incremental ? (n = new gS, this._incremental.addDisplayable(n, !0)) : ((n = new gS({
            rectHover: !0,
            cursor: "default",
            startIndex: t.start,
            endIndex: t.end
        })).incremental = !0, this.group.add(n)), n.setShape({points: e.getLayout("symbolPoints")}), this._setCommon(n, e, !!this._incremental)
    }, mS._setCommon = function (t, e, n) {
        var i = e.hostModel, r = e.getVisual("symbolSize");
        t.setShape("size", r instanceof Array ? r : [r, r]), t.symbolProxy = Nl(e.getVisual("symbol"), 0, 0, 0, 0), t.setColor = t.symbolProxy.setColor;
        var o = t.shape.size[0] < 4;
        t.useStyle(i.getModel("itemStyle").getItemStyle(o ? ["color", "shadowBlur", "shadowColor"] : ["color"]));
        var a = e.getVisual("color");
        a && t.setColor(a), n || (t.seriesIndex = i.seriesIndex, t.on("mousemove", function (e) {
            t.dataIndex = null;
            var n = t.findDataIndex(e.offsetX, e.offsetY);
            n >= 0 && (t.dataIndex = n + (t.startIndex || 0))
        }))
    }, mS.remove = function () {
        this._clearIncremental(), this._incremental = null, this.group.removeAll()
    }, mS._clearIncremental = function () {
        var t = this._incremental;
        t && t.clearDisplaybles()
    }, ks({
        type: "scatter", render: function (t, e, n) {
            var i = t.getData();
            this._updateSymbolDraw(i, t).updateData(i), this._finished = !0
        }, incrementalPrepareRender: function (t, e, n) {
            var i = t.getData();
            this._updateSymbolDraw(i, t).incrementalPrepareUpdate(i), this._finished = !1
        }, incrementalRender: function (t, e, n) {
            this._symbolDraw.incrementalUpdate(t, e.getData()), this._finished = t.end === e.getData().count()
        }, updateTransform: function (t, e, n) {
            var i = t.getData();
            if (this.group.dirty(), !this._finished || i.count() > 1e4 || !this._symbolDraw.isPersistent()) return {update: !0};
            var r = Lb().reset(t);
            r.progress && r.progress({start: 0, end: i.count()}, i), this._symbolDraw.updateLayout(i)
        }, _updateSymbolDraw: function (t, e) {
            var n = this._symbolDraw, i = e.pipelineContext.large;
            return n && i === this._isLargeDraw || (n && n.remove(), n = this._symbolDraw = i ? new Du : new dh, this._isLargeDraw = i, this.group.removeAll()), this.group.add(n.group), n
        }, remove: function (t, e) {
            this._symbolDraw && this._symbolDraw.remove(!0), this._symbolDraw = null
        }, dispose: function () {
        }
    }), Ms(Pb("scatter", "circle")), Ss(Lb("scatter")), _s(function (t) {
        var e = t.graphic;
        y(e) ? e[0] && e[0].elements ? t.graphic = [t.graphic[0]] : t.graphic = [{elements: e}] : e && !e.elements && (t.graphic = [{elements: [e]}])
    });
    var vS = As({
        type: "graphic",
        defaultOption: {elements: [], parentId: null},
        _elOptionsToUpdate: null,
        mergeOption: function (t) {
            var e = this.option.elements;
            this.option.elements = null, vS.superApply(this, "mergeOption", arguments), this.option.elements = e
        },
        optionUpdated: function (t, e) {
            var n = this.option, i = (e ? n : t).elements, r = n.elements = e ? [] : n.elements, o = [];
            this._flatten(i, o);
            var a = Cn(r, o);
            Dn(a);
            var s = this._elOptionsToUpdate = [];
            d(a, function (t, e) {
                var n = t.option;
                n && (s.push(n), zu(t, n), Eu(r, e, n), Nu(r[e], n))
            }, this);
            for (var l = r.length - 1; l >= 0; l--) null == r[l] ? r.splice(l, 1) : delete r[l].$action
        },
        _flatten: function (t, e, n) {
            d(t, function (t) {
                if (t) {
                    n && (t.parentOption = n), e.push(t);
                    var i = t.children;
                    "group" === t.type && i && this._flatten(i, e, t), delete t.children
                }
            }, this)
        },
        useElOptionsToUpdate: function () {
            var t = this._elOptionsToUpdate;
            return this._elOptionsToUpdate = null, t
        }
    });
    Cs({
        type: "graphic", init: function (t, e) {
            this._elMap = N(), this._lastGraphicModel
        }, render: function (t, e, n) {
            t !== this._lastGraphicModel && this._clear(), this._lastGraphicModel = t, this._updateElements(t), this._relocate(t, n)
        }, _updateElements: function (t) {
            var e = t.useElOptionsToUpdate();
            if (e) {
                var n = this._elMap, i = this.group;
                d(e, function (e) {
                    var r = e.$action, o = e.id, a = n.get(o), s = e.parentId, l = null != s ? n.get(s) : i,
                        h = e.style;
                    "text" === e.type && h && (e.hv && e.hv[1] && (h.textVerticalAlign = h.textBaseline = null), !h.hasOwnProperty("textFill") && h.fill && (h.textFill = h.fill), !h.hasOwnProperty("textStroke") && h.stroke && (h.textStroke = h.stroke));
                    var u = Lu(e);
                    r && "merge" !== r ? "replace" === r ? (Pu(a, n), ku(o, l, u, n)) : "remove" === r && Pu(a, n) : a ? a.attr(u) : ku(o, l, u, n);
                    var c = n.get(o);
                    c && (c.__ecGraphicWidth = e.width, c.__ecGraphicHeight = e.height, Ru(c, t))
                })
            }
        }, _relocate: function (t, e) {
            for (var n = t.option.elements, i = this.group, r = this._elMap, o = n.length - 1; o >= 0; o--) {
                var a = n[o], s = r.get(a.id);
                if (s) {
                    var l = s.parent;
                    to(s, a, l === i ? {width: e.getWidth(), height: e.getHeight()} : {
                        width: l.__ecGraphicWidth || 0,
                        height: l.__ecGraphicHeight || 0
                    }, null, {hv: a.hv, boundingMode: a.bounding})
                }
            }
        }, _clear: function () {
            var t = this._elMap;
            t.each(function (e) {
                Pu(e, t)
            }), this._elMap = N()
        }, dispose: function () {
            this._clear()
        }
    });
    var yS = function (t, e) {
        var n, i = [], r = t.seriesIndex;
        if (null == r || !(n = e.getSeriesByIndex(r))) return {point: []};
        var o = n.getData(), a = Ln(o, t);
        if (null == a || a < 0 || y(a)) return {point: []};
        var s = o.getItemGraphicEl(a), l = n.coordinateSystem;
        if (n.getTooltipPosition) i = n.getTooltipPosition(a) || []; else if (l && l.dataToPoint) i = l.dataToPoint(o.getValues(f(l.dimensions, function (t) {
            return o.mapDimension(t)
        }), a, !0)) || []; else if (s) {
            var h = s.getBoundingRect().clone();
            h.applyTransform(s.transform), i = [h.x + h.width / 2, h.y + h.height / 2]
        }
        return {point: i, el: s}
    }, xS = d, _S = v, wS = On(), bS = (As({
        type: "axisPointer",
        coordSysAxesInfo: null,
        defaultOption: {
            show: "auto",
            triggerOn: null,
            zlevel: 0,
            z: 50,
            type: "line",
            snap: !1,
            triggerTooltip: !0,
            value: null,
            status: null,
            link: [],
            animation: null,
            animationDurationUpdate: 200,
            lineStyle: {color: "#aaa", width: 1, type: "solid"},
            shadowStyle: {color: "rgba(150,150,150,0.3)"},
            label: {
                show: !0,
                formatter: null,
                precision: "auto",
                margin: 3,
                color: "#fff",
                padding: [5, 7, 5, 7],
                backgroundColor: "auto",
                borderColor: null,
                borderWidth: 0,
                shadowBlur: 3,
                shadowColor: "#aaa"
            },
            handle: {
                show: !1,
                icon: "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",
                size: 45,
                margin: 50,
                color: "#333",
                shadowBlur: 3,
                shadowColor: "#aaa",
                shadowOffsetX: 0,
                shadowOffsetY: 2,
                throttle: 40
            }
        }
    }), On()), SS = d, MS = Cs({
        type: "axisPointer", render: function (t, e, n) {
            var i = e.getComponent("tooltip"), r = t.get("triggerOn") || i && i.get("triggerOn") || "mousemove|click";
            ju("axisPointer", n, function (t, e, n) {
                "none" !== r && ("leave" === t || r.indexOf(t) >= 0) && n({
                    type: "updateAxisPointer",
                    currTrigger: t,
                    x: e && e.offsetX,
                    y: e && e.offsetY
                })
            })
        }, remove: function (t, e) {
            tc(e.getZr(), "axisPointer"), MS.superApply(this._model, "remove", arguments)
        }, dispose: function (t, e) {
            tc("axisPointer", e), MS.superApply(this._model, "dispose", arguments)
        }
    }), IS = On(), TS = n, AS = m;
    (ec.prototype = {
        _group: null,
        _lastGraphicKey: null,
        _handle: null,
        _dragging: !1,
        _lastValue: null,
        _lastStatus: null,
        _payloadInfo: null,
        animationThreshold: 15,
        render: function (t, e, n, i) {
            var r = e.get("value"), o = e.get("status");
            if (this._axisModel = t, this._axisPointerModel = e, this._api = n, i || this._lastValue !== r || this._lastStatus !== o) {
                this._lastValue = r, this._lastStatus = o;
                var a = this._group, s = this._handle;
                if (!o || "hide" === o) return a && a.hide(), void (s && s.hide());
                a && a.show(), s && s.show();
                var l = {};
                this.makeElOption(l, r, t, e, n);
                var h = l.graphicKey;
                h !== this._lastGraphicKey && this.clear(n), this._lastGraphicKey = h;
                var u = this._moveAnimation = this.determineAnimation(t, e);
                if (a) {
                    var c = v(nc, e, u);
                    this.updatePointerEl(a, l, c, e), this.updateLabelEl(a, l, c, e)
                } else a = this._group = new am, this.createPointerEl(a, l, t, e), this.createLabelEl(a, l, t, e), n.getZr().add(a);
                ac(a, e, !0), this._renderHandle(r)
            }
        },
        remove: function (t) {
            this.clear(t)
        },
        dispose: function (t) {
            this.clear(t)
        },
        determineAnimation: function (t, e) {
            var n = e.get("animation"), i = t.axis, r = "category" === i.type, o = e.get("snap");
            if (!o && !r) return !1;
            if ("auto" === n || null == n) {
                var a = this.animationThreshold;
                if (r && i.getBandWidth() > a) return !0;
                if (o) {
                    var s = lu(t).seriesDataCount, l = i.getExtent();
                    return Math.abs(l[0] - l[1]) / s > a
                }
                return !1
            }
            return !0 === n
        },
        makeElOption: function (t, e, n, i, r) {
        },
        createPointerEl: function (t, e, n, i) {
            var r = e.pointer;
            if (r) {
                var o = IS(t).pointerEl = new Wy[r.type](TS(e.pointer));
                t.add(o)
            }
        },
        createLabelEl: function (t, e, n, i) {
            if (e.label) {
                var r = IS(t).labelEl = new My(TS(e.label));
                t.add(r), rc(r, i)
            }
        },
        updatePointerEl: function (t, e, n) {
            var i = IS(t).pointerEl;
            i && (i.setStyle(e.pointer.style), n(i, {shape: e.pointer.shape}))
        },
        updateLabelEl: function (t, e, n, i) {
            var r = IS(t).labelEl;
            r && (r.setStyle(e.label.style), n(r, {shape: e.label.shape, position: e.label.position}), rc(r, i))
        },
        _renderHandle: function (t) {
            if (!this._dragging && this.updateHandleTransform) {
                var e = this._axisPointerModel, n = this._api.getZr(), i = this._handle, r = e.getModel("handle"),
                    o = e.get("status");
                if (!r.get("show") || !o || "hide" === o) return i && n.remove(i), void (this._handle = null);
                var a;
                this._handle || (a = !0, i = this._handle = Mr(r.get("icon"), {
                    cursor: "move",
                    draggable: !0,
                    onmousemove: function (t) {
                        bg(t.event)
                    },
                    onmousedown: AS(this._onHandleDragMove, this, 0, 0),
                    drift: AS(this._onHandleDragMove, this),
                    ondragend: AS(this._onHandleDragEnd, this)
                }), n.add(i)), ac(i, e, !1);
                var s = ["color", "borderColor", "borderWidth", "opacity", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"];
                i.setStyle(r.getItemStyle(null, s));
                var l = r.get("size");
                y(l) || (l = [l, l]), i.attr("scale", [l[0] / 2, l[1] / 2]), wa(this, "_doDispatchAxisPointer", r.get("throttle") || 0, "fixRate"), this._moveHandleToValue(t, a)
            }
        },
        _moveHandleToValue: function (t, e) {
            nc(this._axisPointerModel, !e && this._moveAnimation, this._handle, oc(this.getHandleTransform(t, this._axisModel, this._axisPointerModel)))
        },
        _onHandleDragMove: function (t, e) {
            var n = this._handle;
            if (n) {
                this._dragging = !0;
                var i = this.updateHandleTransform(oc(n), [t, e], this._axisModel, this._axisPointerModel);
                this._payloadInfo = i, n.stopAnimation(), n.attr(oc(i)), IS(n).lastProp = null, this._doDispatchAxisPointer()
            }
        },
        _doDispatchAxisPointer: function () {
            if (this._handle) {
                var t = this._payloadInfo, e = this._axisModel;
                this._api.dispatchAction({
                    type: "updateAxisPointer",
                    x: t.cursorPoint[0],
                    y: t.cursorPoint[1],
                    tooltipOption: t.tooltipOption,
                    axesInfo: [{axisDim: e.axis.dim, axisIndex: e.componentIndex}]
                })
            }
        },
        _onHandleDragEnd: function (t) {
            if (this._dragging = !1, this._handle) {
                var e = this._axisPointerModel.get("value");
                this._moveHandleToValue(e), this._api.dispatchAction({type: "hideTip"})
            }
        },
        getHandleTransform: null,
        updateHandleTransform: null,
        clear: function (t) {
            this._lastValue = null, this._lastStatus = null;
            var e = t.getZr(), n = this._group, i = this._handle;
            e && n && (this._lastGraphicKey = null, n && e.remove(n), i && e.remove(i), this._group = null, this._handle = null, this._payloadInfo = null)
        },
        doClear: function () {
        },
        buildLabel: function (t, e, n) {
            return n = n || 0, {x: t[n], y: t[1 - n], width: e[n], height: e[1 - n]}
        }
    }).constructor = ec, Hn(ec);
    var CS = ec.extend({
        makeElOption: function (t, e, n, i, r) {
            var o = n.axis, a = o.grid, s = i.get("type"), l = gc(a, o).getOtherAxis(o).getGlobalExtent(),
                h = o.toGlobalCoord(o.dataToCoord(e, !0));
            if (s && "none" !== s) {
                var u = sc(i), c = DS[s](o, h, l, u);
                c.style = u, t.graphicKey = c.type, t.pointer = c
            }
            dc(e, t, pu(a.model, n), n, i, r)
        }, getHandleTransform: function (t, e, n) {
            var i = pu(e.axis.grid.model, e, {labelInside: !1});
            return i.labelMargin = n.get("handle.margin"), {
                position: cc(e.axis, t, i),
                rotation: i.rotation + (i.labelDirection < 0 ? Math.PI : 0)
            }
        }, updateHandleTransform: function (t, e, n, i) {
            var r = n.axis, o = r.grid, a = r.getGlobalExtent(!0), s = gc(o, r).getOtherAxis(r).getGlobalExtent(),
                l = "x" === r.dim ? 0 : 1, h = t.position;
            h[l] += e[l], h[l] = Math.min(a[1], h[l]), h[l] = Math.max(a[0], h[l]);
            var u = (s[1] + s[0]) / 2, c = [u, u];
            c[l] = h[l];
            var d = [{verticalAlign: "middle"}, {align: "center"}];
            return {position: h, rotation: t.rotation, cursorPoint: c, tooltipOption: d[l]}
        }
    }), DS = {
        line: function (t, e, n, i) {
            var r = fc([e, n[0]], [e, n[1]], mc(t));
            return Gi({shape: r, style: i}), {type: "Line", shape: r}
        }, shadow: function (t, e, n, i) {
            var r = Math.max(1, t.getBandWidth()), o = n[1] - n[0];
            return {type: "Rect", shape: pc([e - r / 2, n[0]], [r, o], mc(t))}
        }
    };
    Kb.registerAxisPointerClass("CartesianAxisPointer", CS), _s(function (t) {
        if (t) {
            (!t.axisPointer || 0 === t.axisPointer.length) && (t.axisPointer = {});
            var e = t.axisPointer.link;
            e && !y(e) && (t.axisPointer.link = [e])
        }
    }), ws(Z_.PROCESSOR.STATISTIC, function (t, e) {
        t.getComponent("axisPointer").coordSysAxesInfo = eu(t, e)
    }), bs({type: "updateAxisPointer", event: "updateAxisPointer", update: ":updateAxisPointer"}, function (t, e, n) {
        var i = t.currTrigger, r = [t.x, t.y], o = t, a = t.dispatchAction || m(n.dispatchAction, n),
            s = e.getComponent("axisPointer").coordSysAxesInfo;
        if (s) {
            Yu(r) && (r = yS({seriesIndex: o.seriesIndex, dataIndex: o.dataIndex}, e).point);
            var l = Yu(r), h = o.axesInfo, u = s.axesInfo, c = "leave" === i || Yu(r), d = {}, f = {},
                p = {list: [], map: {}}, g = {showPointer: _S(Vu, f), showTooltip: _S(Hu, p)};
            xS(s.coordSysMap, function (t, e) {
                var n = l || t.containPoint(r);
                xS(s.coordSysAxesInfo[e], function (t, e) {
                    var i = t.axis, o = Uu(h, t);
                    if (!c && n && (!h || o)) {
                        var a = o && o.value;
                        null != a || l || (a = i.pointToData(r)), null != a && Bu(t, a, g, !1, d)
                    }
                })
            });
            var v = {};
            return xS(u, function (t, e) {
                var n = t.linkGroup;
                n && !f[e] && xS(n.axesInfo, function (e, i) {
                    var r = f[i];
                    if (e !== t && r) {
                        var o = r.value;
                        n.mapper && (o = t.axis.scale.parse(n.mapper(o, Xu(e), Xu(t)))), v[t.key] = o
                    }
                })
            }), xS(v, function (t, e) {
                Bu(u[e], t, g, !0, d)
            }), Wu(f, u, d), Gu(p, r, t, a), Zu(u, 0, n), d
        }
    }), As({
        type: "tooltip",
        dependencies: ["axisPointer"],
        defaultOption: {
            zlevel: 0,
            z: 60,
            show: !0,
            showContent: !0,
            trigger: "item",
            triggerOn: "mousemove|click",
            alwaysShowContent: !1,
            displayMode: "single",
            renderMode: "auto",
            confine: !1,
            showDelay: 0,
            hideDelay: 100,
            transitionDuration: .4,
            enterable: !1,
            backgroundColor: "rgba(50,50,50,0.7)",
            borderColor: "#333",
            borderRadius: 4,
            borderWidth: 0,
            padding: 5,
            extraCssText: "",
            axisPointer: {
                type: "line",
                axis: "auto",
                animation: "auto",
                animationDurationUpdate: 200,
                animationEasingUpdate: "exponentialOut",
                crossStyle: {color: "#999", width: 1, type: "dashed", textStyle: {}}
            },
            textStyle: {color: "#fff", fontSize: 14}
        }
    });
    var kS = d, PS = Ur, LS = ["", "-webkit-", "-moz-", "-o-"];
    _c.prototype = {
        constructor: _c, _enterable: !0, update: function () {
            var t = this._container, e = t.currentStyle || document.defaultView.getComputedStyle(t), n = t.style;
            "absolute" !== n.position && "absolute" !== e.position && (n.position = "relative")
        }, show: function (t) {
            clearTimeout(this._hideTimeout);
            var e = this.el;
            e.style.cssText = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;" + xc(t) + ";left:" + this._x + "px;top:" + this._y + "px;" + (t.get("extraCssText") || ""), e.style.display = e.innerHTML ? "block" : "none", e.style.pointerEvents = this._enterable ? "auto" : "none", this._show = !0
        }, setContent: function (t) {
            this.el.innerHTML = null == t ? "" : t
        }, setEnterable: function (t) {
            this._enterable = t
        }, getSize: function () {
            var t = this.el;
            return [t.clientWidth, t.clientHeight]
        }, moveTo: function (t, e) {
            var n, i = this._zr;
            i && i.painter && (n = i.painter.getViewportRootOffset()) && (t += n.offsetLeft, e += n.offsetTop);
            var r = this.el.style;
            r.left = t + "px", r.top = e + "px", this._x = t, this._y = e
        }, hide: function () {
            this.el.style.display = "none", this._show = !1
        }, hideLater: function (t) {
            !this._show || this._inContent && this._enterable || (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(m(this.hide, this), t)) : this.hide())
        }, isShow: function () {
            return this._show
        }, getOuterSize: function () {
            var t = this.el.clientWidth, e = this.el.clientHeight;
            if (document.defaultView && document.defaultView.getComputedStyle) {
                var n = document.defaultView.getComputedStyle(this.el);
                n && (t += parseInt(n.paddingLeft, 10) + parseInt(n.paddingRight, 10) + parseInt(n.borderLeftWidth, 10) + parseInt(n.borderRightWidth, 10), e += parseInt(n.paddingTop, 10) + parseInt(n.paddingBottom, 10) + parseInt(n.borderTopWidth, 10) + parseInt(n.borderBottomWidth, 10))
            }
            return {width: t, height: e}
        }
    }, wc.prototype = {
        constructor: wc, _enterable: !0, update: function () {
        }, show: function (t) {
            this._hideTimeout && clearTimeout(this._hideTimeout), this.el.attr("show", !0), this._show = !0
        }, setContent: function (t, e, n) {
            this.el && this._zr.remove(this.el);
            for (var i = {}, r = t, o = r.indexOf("{marker"); o >= 0;) {
                var a = r.indexOf("|}"), s = r.substr(o + "{marker".length, a - o - "{marker".length);
                s.indexOf("sub") > -1 ? i["marker" + s] = {
                    textWidth: 4,
                    textHeight: 4,
                    textBorderRadius: 2,
                    textBackgroundColor: e[s],
                    textOffset: [3, 0]
                } : i["marker" + s] = {
                    textWidth: 10,
                    textHeight: 10,
                    textBorderRadius: 5,
                    textBackgroundColor: e[s]
                }, o = (r = r.substr(a + 1)).indexOf("{marker")
            }
            this.el = new dy({
                style: {
                    rich: i,
                    text: t,
                    textLineHeight: 20,
                    textBackgroundColor: n.get("backgroundColor"),
                    textBorderRadius: n.get("borderRadius"),
                    textFill: n.get("textStyle.color"),
                    textPadding: n.get("padding")
                }, z: n.get("z")
            }), this._zr.add(this.el);
            var l = this;
            this.el.on("mouseover", function () {
                l._enterable && (clearTimeout(l._hideTimeout), l._show = !0), l._inContent = !0
            }), this.el.on("mouseout", function () {
                l._enterable && l._show && l.hideLater(l._hideDelay), l._inContent = !1
            })
        }, setEnterable: function (t) {
            this._enterable = t
        }, getSize: function () {
            var t = this.el.getBoundingRect();
            return [t.width, t.height]
        }, moveTo: function (t, e) {
            this.el && this.el.attr("position", [t, e])
        }, hide: function () {
            this.el.hide(), this._show = !1
        }, hideLater: function (t) {
            !this._show || this._inContent && this._enterable || (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(m(this.hide, this), t)) : this.hide())
        }, isShow: function () {
            return this._show
        }, getOuterSize: function () {
            return this.getSize()
        }
    };
    var OS = m, zS = d, ES = Pr, NS = new My({shape: {x: -1, y: -1, width: 2, height: 2}});
    Cs({
        type: "tooltip", init: function (t, e) {
            if (!Kp.node) {
                var n = t.getComponent("tooltip").get("renderMode");
                this._renderMode = Bn(n);
                var i;
                "html" === this._renderMode ? (i = new _c(e.getDom(), e), this._newLine = "<br/>") : (i = new wc(e), this._newLine = "\n"), this._tooltipContent = i
            }
        }, render: function (t, e, n) {
            if (!Kp.node) {
                this.group.removeAll(), this._tooltipModel = t, this._ecModel = e, this._api = n, this._lastDataByCoordSys = null, this._alwaysShowContent = t.get("alwaysShowContent");
                var i = this._tooltipContent;
                i.update(), i.setEnterable(t.get("enterable")), this._initGlobalListener(), this._keepShow()
            }
        }, _initGlobalListener: function () {
            var t = this._tooltipModel.get("triggerOn");
            ju("itemTooltip", this._api, OS(function (e, n, i) {
                "none" !== t && (t.indexOf(e) >= 0 ? this._tryShow(n, i) : "leave" === e && this._hide(i))
            }, this))
        }, _keepShow: function () {
            var t = this._tooltipModel, e = this._ecModel, n = this._api;
            if (null != this._lastX && null != this._lastY && "none" !== t.get("triggerOn")) {
                var i = this;
                clearTimeout(this._refreshUpdateTimeout), this._refreshUpdateTimeout = setTimeout(function () {
                    i.manuallyShowTip(t, e, n, {x: i._lastX, y: i._lastY})
                })
            }
        }, manuallyShowTip: function (t, e, n, i) {
            if (i.from !== this.uid && !Kp.node) {
                var r = Sc(i, n);
                this._ticket = "";
                var o = i.dataByCoordSys;
                if (i.tooltip && null != i.x && null != i.y) {
                    var a = NS;
                    a.position = [i.x, i.y], a.update(), a.tooltip = i.tooltip, this._tryShow({
                        offsetX: i.x,
                        offsetY: i.y,
                        target: a
                    }, r)
                } else if (o) this._tryShow({
                    offsetX: i.x,
                    offsetY: i.y,
                    position: i.position,
                    event: {},
                    dataByCoordSys: i.dataByCoordSys,
                    tooltipOption: i.tooltipOption
                }, r); else if (null != i.seriesIndex) {
                    if (this._manuallyAxisShowTip(t, e, n, i)) return;
                    var s = yS(i, e), l = s.point[0], h = s.point[1];
                    null != l && null != h && this._tryShow({
                        offsetX: l,
                        offsetY: h,
                        position: i.position,
                        target: s.el,
                        event: {}
                    }, r)
                } else null != i.x && null != i.y && (n.dispatchAction({
                    type: "updateAxisPointer",
                    x: i.x,
                    y: i.y
                }), this._tryShow({
                    offsetX: i.x,
                    offsetY: i.y,
                    position: i.position,
                    target: n.getZr().findHover(i.x, i.y).target,
                    event: {}
                }, r))
            }
        }, manuallyHideTip: function (t, e, n, i) {
            var r = this._tooltipContent;
            !this._alwaysShowContent && this._tooltipModel && r.hideLater(this._tooltipModel.get("hideDelay")), this._lastX = this._lastY = null, i.from !== this.uid && this._hide(Sc(i, n))
        }, _manuallyAxisShowTip: function (t, e, n, i) {
            var r = i.seriesIndex, o = i.dataIndex, a = e.getComponent("axisPointer").coordSysAxesInfo;
            if (null != r && null != o && null != a) {
                var s = e.getSeriesByIndex(r);
                if (s && "axis" === (t = bc([s.getData().getItemModel(o), s, (s.coordinateSystem || {}).model, t])).get("trigger")) return n.dispatchAction({
                    type: "updateAxisPointer",
                    seriesIndex: r,
                    dataIndex: o,
                    position: i.position
                }), !0
            }
        }, _tryShow: function (t, e) {
            var n = t.target;
            if (this._tooltipModel) {
                this._lastX = t.offsetX, this._lastY = t.offsetY;
                var i = t.dataByCoordSys;
                i && i.length ? this._showAxisTooltip(i, t) : n && null != n.dataIndex ? (this._lastDataByCoordSys = null, this._showSeriesItemTooltip(t, n, e)) : n && n.tooltip ? (this._lastDataByCoordSys = null, this._showComponentItemTooltip(t, n, e)) : (this._lastDataByCoordSys = null, this._hide(e))
            }
        }, _showOrMove: function (t, e) {
            var n = t.get("showDelay");
            e = m(e, this), clearTimeout(this._showTimout), n > 0 ? this._showTimout = setTimeout(e, n) : e()
        }, _showAxisTooltip: function (t, e) {
            var n = this._ecModel, r = this._tooltipModel, o = [e.offsetX, e.offsetY], a = [], s = [],
                l = bc([e.tooltipOption, r]), h = this._renderMode, u = this._newLine, c = {};
            zS(t, function (t) {
                zS(t.dataByAxis, function (t) {
                    var e = n.getComponent(t.axisDim + "Axis", t.axisIndex), r = t.value, o = [];
                    if (e && null != r) {
                        var l = uc(r, e.axis, n, t.seriesDataIndices, t.valueLabelOpt);
                        d(t.seriesDataIndices, function (a) {
                            var u = n.getSeriesByIndex(a.seriesIndex), d = a.dataIndexInside,
                                f = u && u.getDataParams(d);
                            if (f.axisDim = t.axisDim, f.axisIndex = t.axisIndex, f.axisType = t.axisType, f.axisId = t.axisId, f.axisValue = kl(e.axis, r), f.axisValueLabel = l, f) {
                                s.push(f);
                                var p, g = u.formatTooltip(d, !0, null, h);
                                if (w(g)) {
                                    p = g.html;
                                    var m = g.markers;
                                    i(c, m)
                                } else p = g;
                                o.push(p)
                            }
                        });
                        var f = l;
                        "html" !== h ? a.push(o.join(u)) : a.push((f ? Xr(f) + u : "") + o.join(u))
                    }
                })
            }, this), a.reverse(), a = a.join(this._newLine + this._newLine);
            var f = e.position;
            this._showOrMove(l, function () {
                this._updateContentNotChangedOnAxis(t) ? this._updatePosition(l, f, o[0], o[1], this._tooltipContent, s) : this._showTooltipContent(l, a, s, Math.random(), o[0], o[1], f, void 0, c)
            })
        }, _showSeriesItemTooltip: function (t, e, n) {
            var i = this._ecModel, r = e.seriesIndex, o = i.getSeriesByIndex(r), a = e.dataModel || o, s = e.dataIndex,
                l = e.dataType, h = a.getData(),
                u = bc([h.getItemModel(s), a, o && (o.coordinateSystem || {}).model, this._tooltipModel]),
                c = u.get("trigger");
            if (null == c || "item" === c) {
                var d, f, p = a.getDataParams(s, l), g = a.formatTooltip(s, !1, l, this._renderMode);
                w(g) ? (d = g.html, f = g.markers) : (d = g, f = null);
                var m = "item_" + a.name + "_" + s;
                this._showOrMove(u, function () {
                    this._showTooltipContent(u, d, p, m, t.offsetX, t.offsetY, t.position, t.target, f)
                }), n({
                    type: "showTip",
                    dataIndexInside: s,
                    dataIndex: h.getRawIndex(s),
                    seriesIndex: r,
                    from: this.uid
                })
            }
        }, _showComponentItemTooltip: function (t, e, n) {
            var i = e.tooltip;
            if ("string" == typeof i) {
                var r = i;
                i = {content: r, formatter: r}
            }
            var o = new Ir(i, this._tooltipModel, this._ecModel), a = o.get("content"), s = Math.random();
            this._showOrMove(o, function () {
                this._showTooltipContent(o, a, o.get("formatterParams") || {}, s, t.offsetX, t.offsetY, t.position, e)
            }), n({type: "showTip", from: this.uid})
        }, _showTooltipContent: function (t, e, n, i, r, o, a, s, l) {
            if (this._ticket = "", t.get("showContent") && t.get("show")) {
                var h = this._tooltipContent, u = t.get("formatter");
                a = a || t.get("position");
                var c = e;
                if (u && "string" == typeof u) c = Yr(u, n, !0); else if ("function" == typeof u) {
                    var d = OS(function (e, i) {
                        e === this._ticket && (h.setContent(i, l, t), this._updatePosition(t, a, r, o, h, n, s))
                    }, this);
                    this._ticket = i, c = u(n, i, d)
                }
                h.setContent(c, l, t), h.show(t), this._updatePosition(t, a, r, o, h, n, s)
            }
        }, _updatePosition: function (t, e, n, i, r, o, a) {
            var s = this._api.getWidth(), l = this._api.getHeight();
            e = e || t.get("position");
            var h = r.getSize(), u = t.get("align"), c = t.get("verticalAlign"), d = a && a.getBoundingRect().clone();
            if (a && d.applyTransform(a.transform), "function" == typeof e && (e = e([n, i], o, r.el, d, {
                viewSize: [s, l],
                contentSize: h.slice()
            })), y(e)) n = ES(e[0], s), i = ES(e[1], l); else if (w(e)) {
                e.width = h[0], e.height = h[1];
                var f = Jr(e, {width: s, height: l});
                n = f.x, i = f.y, u = null, c = null
            } else "string" == typeof e && a ? (n = (p = Tc(e, d, h))[0], i = p[1]) : (n = (p = Mc(n, i, r, s, l, u ? null : 20, c ? null : 20))[0], i = p[1]);
            if (u && (n -= Ac(u) ? h[0] / 2 : "right" === u ? h[0] : 0), c && (i -= Ac(c) ? h[1] / 2 : "bottom" === c ? h[1] : 0), t.get("confine")) {
                var p = Ic(n, i, r, s, l);
                n = p[0], i = p[1]
            }
            r.moveTo(n, i)
        }, _updateContentNotChangedOnAxis: function (t) {
            var e = this._lastDataByCoordSys, n = !!e && e.length === t.length;
            return n && zS(e, function (e, i) {
                var r = e.dataByAxis || {}, o = (t[i] || {}).dataByAxis || [];
                (n &= r.length === o.length) && zS(r, function (t, e) {
                    var i = o[e] || {}, r = t.seriesDataIndices || [], a = i.seriesDataIndices || [];
                    (n &= t.value === i.value && t.axisType === i.axisType && t.axisId === i.axisId && r.length === a.length) && zS(r, function (t, e) {
                        var i = a[e];
                        n &= t.seriesIndex === i.seriesIndex && t.dataIndex === i.dataIndex
                    })
                })
            }), this._lastDataByCoordSys = t, !!n
        }, _hide: function (t) {
            this._lastDataByCoordSys = null, t({type: "hideTip", from: this.uid})
        }, dispose: function (t, e) {
            Kp.node || (this._tooltipContent.hide(), tc("itemTooltip", e))
        }
    }), bs({type: "showTip", event: "showTip", update: "tooltip:manuallyShowTip"}, function () {
    }), bs({type: "hideTip", event: "hideTip", update: "tooltip:manuallyHideTip"}, function () {
    });
    var RS = As({
        type: "legend.plain",
        dependencies: ["series"],
        layoutMode: {type: "box", ignoreSize: !0},
        init: function (t, e, n) {
            this.mergeDefaultAndTheme(t, n), t.selected = t.selected || {}
        },
        mergeOption: function (t) {
            RS.superCall(this, "mergeOption", t)
        },
        optionUpdated: function () {
            this._updateData(this.ecModel);
            var t = this._data;
            if (t[0] && "single" === this.get("selectedMode")) {
                for (var e = !1, n = 0; n < t.length; n++) {
                    var i = t[n].get("name");
                    if (this.isSelected(i)) {
                        this.select(i), e = !0;
                        break
                    }
                }
                !e && this.select(t[0].get("name"))
            }
        },
        _updateData: function (t) {
            var e = [], n = [];
            t.eachRawSeries(function (i) {
                var r = i.name;
                n.push(r);
                var o;
                if (i.legendDataProvider) {
                    var a = i.legendDataProvider(), s = a.mapArray(a.getName);
                    t.isSeriesFiltered(i) || (n = n.concat(s)), s.length ? e = e.concat(s) : o = !0
                } else o = !0;
                o && kn(i) && e.push(i.name)
            }), this._availableNames = n;
            var i = f(this.get("data") || e, function (t) {
                return "string" != typeof t && "number" != typeof t || (t = {name: t}), new Ir(t, this, this.ecModel)
            }, this);
            this._data = i
        },
        getData: function () {
            return this._data
        },
        select: function (t) {
            var e = this.option.selected;
            "single" === this.get("selectedMode") && d(this._data, function (t) {
                e[t.get("name")] = !1
            }), e[t] = !0
        },
        unSelect: function (t) {
            "single" !== this.get("selectedMode") && (this.option.selected[t] = !1)
        },
        toggleSelected: function (t) {
            var e = this.option.selected;
            e.hasOwnProperty(t) || (e[t] = !0), this[e[t] ? "unSelect" : "select"](t)
        },
        isSelected: function (t) {
            var e = this.option.selected;
            return !(e.hasOwnProperty(t) && !e[t]) && l(this._availableNames, t) >= 0
        },
        defaultOption: {
            zlevel: 0,
            z: 4,
            show: !0,
            orient: "horizontal",
            left: "center",
            top: 0,
            align: "auto",
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: "#ccc",
            borderRadius: 0,
            borderWidth: 0,
            padding: 5,
            itemGap: 10,
            itemWidth: 25,
            itemHeight: 14,
            inactiveColor: "#ccc",
            textStyle: {color: "#333"},
            selectedMode: !0,
            tooltip: {show: !1}
        }
    });
    bs("legendToggleSelect", "legendselectchanged", v(Cc, "toggleSelected")), bs("legendSelect", "legendselected", v(Cc, "select")), bs("legendUnSelect", "legendunselected", v(Cc, "unSelect"));
    var BS = v, FS = d, VS = am, HS = Cs({
        type: "legend.plain", newlineDisabled: !1, init: function () {
            this.group.add(this._contentGroup = new VS), this._backgroundEl, this._isFirstRender = !0
        }, getContentGroup: function () {
            return this._contentGroup
        }, render: function (t, e, n) {
            var i = this._isFirstRender;
            if (this._isFirstRender = !1, this.resetInner(), t.get("show", !0)) {
                var r = t.get("align");
                r && "auto" !== r || (r = "right" === t.get("left") && "vertical" === t.get("orient") ? "right" : "left"), this.renderInner(r, t, e, n);
                var o = t.getBoxLayoutParams(), s = {width: n.getWidth(), height: n.getHeight()}, l = t.get("padding"),
                    h = Jr(o, s, l), u = this.layoutInner(t, r, h, i),
                    c = Jr(a({width: u.width, height: u.height}, o), s, l);
                this.group.attr("position", [c.x - u.x, c.y - u.y]), this.group.add(this._backgroundEl = kc(u, t))
            }
        }, resetInner: function () {
            this.getContentGroup().removeAll(), this._backgroundEl && this.group.remove(this._backgroundEl)
        }, renderInner: function (t, e, n, i) {
            var r = this.getContentGroup(), o = N(), a = e.get("selectedMode"), s = [];
            n.eachRawSeries(function (t) {
                !t.get("legendHoverLink") && s.push(t.id)
            }), FS(e.getData(), function (l, h) {
                var u = l.get("name");
                if (this.newlineDisabled || "" !== u && "\n" !== u) {
                    var c = n.getSeriesByName(u)[0];
                    if (!o.get(u)) if (c) {
                        var d = c.getData(), f = d.getVisual("color");
                        "function" == typeof f && (f = f(c.getDataParams(0)));
                        var p = d.getVisual("legendSymbol") || "roundRect", g = d.getVisual("symbol");
                        this._createItem(u, h, l, e, p, g, t, f, a).on("click", BS(Pc, u, i)).on("mouseover", BS(Lc, c.name, null, i, s)).on("mouseout", BS(Oc, c.name, null, i, s)), o.set(u, !0)
                    } else n.eachRawSeries(function (n) {
                        if (!o.get(u) && n.legendDataProvider) {
                            var r = n.legendDataProvider(), c = r.indexOfName(u);
                            if (c < 0) return;
                            var d = r.getItemVisual(c, "color");
                            this._createItem(u, h, l, e, "roundRect", null, t, d, a).on("click", BS(Pc, u, i)).on("mouseover", BS(Lc, null, u, i, s)).on("mouseout", BS(Oc, null, u, i, s)), o.set(u, !0)
                        }
                    }, this)
                } else r.add(new VS({newline: !0}))
            }, this)
        }, _createItem: function (t, e, n, i, r, a, s, l, h) {
            var u = i.get("itemWidth"), c = i.get("itemHeight"), d = i.get("inactiveColor"),
                f = i.get("symbolKeepAspect"), p = i.isSelected(t), g = new VS, m = n.getModel("textStyle"),
                v = n.get("icon"), y = n.getModel("tooltip"), x = y.parentModel;
            if (r = v || r, g.add(Nl(r, 0, 0, u, c, p ? l : d, null == f || f)), !v && a && (a !== r || "none" === a)) {
                var _ = .8 * c;
                "none" === a && (a = "circle"), g.add(Nl(a, (u - _) / 2, (c - _) / 2, _, _, p ? l : d, null == f || f))
            }
            var w = "left" === s ? u + 5 : -5, b = s, S = i.get("formatter"), M = t;
            "string" == typeof S && S ? M = S.replace("{name}", null != t ? t : "") : "function" == typeof S && (M = S(t)), g.add(new dy({
                style: lr({}, m, {
                    text: M,
                    x: w,
                    y: c / 2,
                    textFill: p ? m.getTextColor() : d,
                    textAlign: b,
                    textVerticalAlign: "middle"
                })
            }));
            var I = new My({
                shape: g.getBoundingRect(),
                invisible: !0,
                tooltip: y.get("show") ? o({
                    content: t,
                    formatter: x.get("formatter", !0) || function () {
                        return t
                    },
                    formatterParams: {componentType: "legend", legendIndex: i.componentIndex, name: t, $vars: ["name"]}
                }, y.option) : null
            });
            return g.add(I), g.eachChild(function (t) {
                t.silent = !0
            }), I.silent = !h, this.getContentGroup().add(g), or(g), g.__legendDataIndex = e, g
        }, layoutInner: function (t, e, n) {
            var i = this.getContentGroup();
            hx(t.get("orient"), i, t.get("itemGap"), n.width, n.height);
            var r = i.getBoundingRect();
            return i.attr("position", [-r.x, -r.y]), this.group.getBoundingRect()
        }, remove: function () {
            this.getContentGroup().removeAll(), this._isFirstRender = !0
        }
    });
    ws(function (t) {
        var e = t.findComponents({mainType: "legend"});
        e && e.length && t.filterSeries(function (t) {
            for (var n = 0; n < e.length; n++) if (!e[n].isSelected(t.name)) return !1;
            return !0
        })
    }), dx.registerSubTypeDefaulter("legend", function () {
        return "plain"
    });
    var WS = RS.extend({
        type: "legend.scroll",
        setScrollDataIndex: function (t) {
            this.option.scrollDataIndex = t
        },
        defaultOption: {
            scrollDataIndex: 0,
            pageButtonItemGap: 5,
            pageButtonGap: null,
            pageButtonPosition: "end",
            pageFormatter: "{current}/{total}",
            pageIcons: {
                horizontal: ["M0,0L12,-10L12,10z", "M0,0L-12,-10L-12,10z"],
                vertical: ["M0,0L20,0L10,-20z", "M0,0L20,0L10,20z"]
            },
            pageIconColor: "#2f4554",
            pageIconInactiveColor: "#aaa",
            pageIconSize: 15,
            pageTextStyle: {color: "#333"},
            animationDurationUpdate: 800
        },
        init: function (t, e, n, i) {
            var r = no(t);
            WS.superCall(this, "init", t, e, n, i), zc(this, t, r)
        },
        mergeOption: function (t, e) {
            WS.superCall(this, "mergeOption", t, e), zc(this, this.option, t)
        },
        getOrient: function () {
            return "vertical" === this.get("orient") ? {index: 1, name: "vertical"} : {index: 0, name: "horizontal"}
        }
    }), GS = am, ZS = ["width", "height"], US = ["x", "y"], XS = HS.extend({
        type: "legend.scroll", newlineDisabled: !0, init: function () {
            XS.superCall(this, "init"), this._currentIndex = 0, this.group.add(this._containerGroup = new GS), this._containerGroup.add(this.getContentGroup()), this.group.add(this._controllerGroup = new GS), this._showController
        }, resetInner: function () {
            XS.superCall(this, "resetInner"), this._controllerGroup.removeAll(), this._containerGroup.removeClipPath(), this._containerGroup.__rectSize = null
        }, renderInner: function (t, e, n, i) {
            function r(t, n) {
                var r = t + "DataIndex",
                    l = Mr(e.get("pageIcons", !0)[e.getOrient().name][n], {onclick: m(o._pageGo, o, r, e, i)}, {
                        x: -s[0] / 2,
                        y: -s[1] / 2,
                        width: s[0],
                        height: s[1]
                    });
                l.name = t, a.add(l)
            }

            var o = this;
            XS.superCall(this, "renderInner", t, e, n, i);
            var a = this._controllerGroup, s = e.get("pageIconSize", !0);
            y(s) || (s = [s, s]), r("pagePrev", 0);
            var l = e.getModel("pageTextStyle");
            a.add(new dy({
                name: "pageText",
                style: {
                    textFill: l.getTextColor(),
                    font: l.getFont(),
                    textVerticalAlign: "middle",
                    textAlign: "center"
                },
                silent: !0
            })), r("pageNext", 1)
        }, layoutInner: function (t, e, n, i) {
            var r = this.getContentGroup(), o = this._containerGroup, a = this._controllerGroup,
                s = t.getOrient().index, l = ZS[s], h = ZS[1 - s], u = US[1 - s];
            hx(t.get("orient"), r, t.get("itemGap"), s ? n.width : null, s ? null : n.height), hx("horizontal", a, t.get("pageButtonItemGap", !0));
            var c = r.getBoundingRect(), d = a.getBoundingRect(), f = this._showController = c[l] > n[l],
                p = [-c.x, -c.y];
            i || (p[s] = r.position[s]);
            var g = [0, 0], m = [-d.x, -d.y], v = A(t.get("pageButtonGap", !0), t.get("itemGap", !0));
            f && ("end" === t.get("pageButtonPosition", !0) ? m[s] += n[l] - d[l] : g[s] += d[l] + v), m[1 - s] += c[h] / 2 - d[h] / 2, r.attr("position", p), o.attr("position", g), a.attr("position", m);
            var y = this.group.getBoundingRect();
            if ((y = {
                x: 0,
                y: 0
            })[l] = f ? n[l] : c[l], y[h] = Math.max(c[h], d[h]), y[u] = Math.min(0, d[u] + m[1 - s]), o.__rectSize = n[l], f) {
                var x = {x: 0, y: 0};
                x[l] = Math.max(n[l] - d[l] - v, 0), x[h] = y[h], o.setClipPath(new My({shape: x})), o.__rectSize = x[l]
            } else a.eachChild(function (t) {
                t.attr({invisible: !0, silent: !0})
            });
            var _ = this._getPageInfo(t);
            return null != _.pageIndex && vr(r, {position: _.contentPosition}, !!f && t), this._updatePageInfoView(t, _), y
        }, _pageGo: function (t, e, n) {
            var i = this._getPageInfo(e)[t];
            null != i && n.dispatchAction({type: "legendScroll", scrollDataIndex: i, legendId: e.id})
        }, _updatePageInfoView: function (t, e) {
            var n = this._controllerGroup;
            d(["pagePrev", "pageNext"], function (i) {
                var r = null != e[i + "DataIndex"], o = n.childOfName(i);
                o && (o.setStyle("fill", r ? t.get("pageIconColor", !0) : t.get("pageIconInactiveColor", !0)), o.cursor = r ? "pointer" : "default")
            });
            var i = n.childOfName("pageText"), r = t.get("pageFormatter"), o = e.pageIndex, a = null != o ? o + 1 : 0,
                s = e.pageCount;
            i && r && i.setStyle("text", _(r) ? r.replace("{current}", a).replace("{total}", s) : r({
                current: a,
                total: s
            }))
        }, _getPageInfo: function (t) {
            function e(t) {
                if (t) {
                    var e = t.getBoundingRect(), n = e[l] + t.position[a];
                    return {s: n, e: n + e[s], i: t.__legendDataIndex}
                }
            }

            function n(t, e) {
                return t.e >= e && t.s <= e + o
            }

            var i = t.get("scrollDataIndex", !0), r = this.getContentGroup(), o = this._containerGroup.__rectSize,
                a = t.getOrient().index, s = ZS[a], l = US[a], h = this._findTargetItemIndex(i), u = r.children(),
                c = u[h], d = u.length, f = d ? 1 : 0, p = {
                    contentPosition: r.position.slice(),
                    pageCount: f,
                    pageIndex: f - 1,
                    pagePrevDataIndex: null,
                    pageNextDataIndex: null
                };
            if (!c) return p;
            var g = e(c);
            p.contentPosition[a] = -g.s;
            for (var m = h + 1, v = g, y = g, x = null; m <= d; ++m) (!(x = e(u[m])) && y.e > v.s + o || x && !n(x, v.s)) && (v = y.i > v.i ? y : x) && (null == p.pageNextDataIndex && (p.pageNextDataIndex = v.i), ++p.pageCount), y = x;
            for (var m = h - 1, v = g, y = g, x = null; m >= -1; --m) (x = e(u[m])) && n(y, x.s) || !(v.i < y.i) || (y = v, null == p.pagePrevDataIndex && (p.pagePrevDataIndex = v.i), ++p.pageCount, ++p.pageIndex), v = x;
            return p
        }, _findTargetItemIndex: function (t) {
            var e, n = this.getContentGroup();
            return this._showController ? n.eachChild(function (n, i) {
                n.__legendDataIndex === t && (e = i)
            }) : e = 0, e
        }
    });
    bs("legendScroll", "legendscroll", function (t, e) {
        var n = t.scrollDataIndex;
        null != n && e.eachComponent({mainType: "legend", subType: "scroll", query: t}, function (t) {
            t.setScrollDataIndex(n)
        })
    }), As({
        type: "title",
        layoutMode: {type: "box", ignoreSize: !0},
        defaultOption: {
            zlevel: 0,
            z: 6,
            show: !0,
            text: "",
            target: "blank",
            subtext: "",
            subtarget: "blank",
            left: 0,
            top: 0,
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: "#ccc",
            borderWidth: 0,
            padding: 5,
            itemGap: 10,
            textStyle: {fontSize: 18, fontWeight: "bolder", color: "#333"},
            subtextStyle: {color: "#aaa"}
        }
    }), Cs({
        type: "title", render: function (t, e, n) {
            if (this.group.removeAll(), t.get("show")) {
                var i = this.group, r = t.getModel("textStyle"), o = t.getModel("subtextStyle"), a = t.get("textAlign"),
                    s = t.get("textBaseline"), l = new dy({
                        style: lr({}, r, {text: t.get("text"), textFill: r.getTextColor()}, {disableBox: !0}),
                        z2: 10
                    }), h = l.getBoundingRect(), u = t.get("subtext"), c = new dy({
                        style: lr({}, o, {
                            text: u,
                            textFill: o.getTextColor(),
                            y: h.height + t.get("itemGap"),
                            textVerticalAlign: "top"
                        }, {disableBox: !0}), z2: 10
                    }), d = t.get("link"), f = t.get("sublink"), p = t.get("triggerEvent", !0);
                l.silent = !d && !p, c.silent = !f && !p, d && l.on("click", function () {
                    window.open(d, "_" + t.get("target"))
                }), f && c.on("click", function () {
                    window.open(f, "_" + t.get("subtarget"))
                }), l.eventData = c.eventData = p ? {
                    componentType: "title",
                    componentIndex: t.componentIndex
                } : null, i.add(l), u && i.add(c);
                var g = i.getBoundingRect(), m = t.getBoxLayoutParams();
                m.width = g.width, m.height = g.height;
                var v = Jr(m, {width: n.getWidth(), height: n.getHeight()}, t.get("padding"));
                a || ("middle" === (a = t.get("left") || t.get("right")) && (a = "center"), "right" === a ? v.x += v.width : "center" === a && (v.x += v.width / 2)), s || ("center" === (s = t.get("top") || t.get("bottom")) && (s = "middle"), "bottom" === s ? v.y += v.height : "middle" === s && (v.y += v.height / 2), s = s || "top"), i.attr("position", [v.x, v.y]);
                var y = {textAlign: a, textVerticalAlign: s};
                l.setStyle(y), c.setStyle(y), g = i.getBoundingRect();
                var x = v.margin, _ = t.getItemStyle(["color", "opacity"]);
                _.fill = t.get("backgroundColor");
                var w = new My({
                    shape: {
                        x: g.x - x[3],
                        y: g.y - x[0],
                        width: g.width + x[1] + x[3],
                        height: g.height + x[0] + x[2],
                        r: t.get("borderRadius")
                    }, style: _, silent: !0
                });
                Zi(w), i.add(w)
            }
        }
    });
    var YS = Zr, jS = Xr, qS = As({
        type: "marker", dependencies: ["series", "grid", "polar", "geo"], init: function (t, e, n, i) {
            this.mergeDefaultAndTheme(t, n), this.mergeOption(t, n, i.createdBySelf, !0)
        }, isAnimationEnabled: function () {
            if (Kp.node) return !1;
            var t = this.__hostSeries;
            return this.getShallow("animation") && t && t.isAnimationEnabled()
        }, mergeOption: function (t, e, n, i) {
            var r = this.constructor, a = this.mainType + "Model";
            n || e.eachSeries(function (t) {
                var n = t.get(this.mainType, !0), s = t[a];
                n && n.data ? (s ? s.mergeOption(n, e, !0) : (i && Ec(n), d(n.data, function (t) {
                    t instanceof Array ? (Ec(t[0]), Ec(t[1])) : Ec(t)
                }), o(s = new r(n, this, e), {
                    mainType: this.mainType,
                    seriesIndex: t.seriesIndex,
                    name: t.name,
                    createdBySelf: !0
                }), s.__hostSeries = t), t[a] = s) : t[a] = null
            }, this)
        }, formatTooltip: function (t) {
            var e = this.getData(), n = this.getRawValue(t), i = y(n) ? f(n, YS).join(", ") : YS(n), r = e.getName(t),
                o = jS(this.name);
            return (null != n || r) && (o += "<br />"), r && (o += jS(r), null != n && (o += " : ")), null != n && (o += jS(i)), o
        }, getData: function () {
            return this._data
        }, setData: function (t) {
            this._data = t
        }
    });
    u(qS, qx), qS.extend({
        type: "markPoint",
        defaultOption: {
            zlevel: 0,
            z: 5,
            symbol: "pin",
            symbolSize: 50,
            tooltip: {trigger: "item"},
            label: {show: !0, position: "inside"},
            itemStyle: {borderWidth: 2},
            emphasis: {label: {show: !0}}
        }
    });
    var $S = l, KS = v, QS = {min: KS(Bc, "min"), max: KS(Bc, "max"), average: KS(Bc, "average")}, JS = Cs({
        type: "marker", init: function () {
            this.markerGroupMap = N()
        }, render: function (t, e, n) {
            var i = this.markerGroupMap;
            i.each(function (t) {
                t.__keep = !1
            });
            var r = this.type + "Model";
            e.eachSeries(function (t) {
                var i = t[r];
                i && this.renderSeries(t, i, e, n)
            }, this), i.each(function (t) {
                !t.__keep && this.group.remove(t.group)
            }, this)
        }, renderSeries: function () {
        }
    });
    JS.extend({
        type: "markPoint", updateTransform: function (t, e, n) {
            e.eachSeries(function (t) {
                var e = t.markPointModel;
                e && (Uc(e.getData(), t, n), this.markerGroupMap.get(t.id).updateLayout(e))
            }, this)
        }, renderSeries: function (t, e, n, i) {
            var r = t.coordinateSystem, o = t.id, a = t.getData(), s = this.markerGroupMap,
                l = s.get(o) || s.set(o, new dh), h = Xc(r, t, e);
            e.setData(h), Uc(e.getData(), t, i), h.each(function (t) {
                var n = h.getItemModel(t), i = n.getShallow("symbolSize");
                "function" == typeof i && (i = i(e.getRawValue(t), e.getDataParams(t))), h.setItemVisual(t, {
                    symbolSize: i,
                    color: n.get("itemStyle.color") || a.getVisual("color"),
                    symbol: n.getShallow("symbol")
                })
            }), l.updateData(h), this.group.add(l.group), h.eachItemGraphicEl(function (t) {
                t.traverse(function (t) {
                    t.dataModel = e
                })
            }), l.__keep = !0, l.group.silent = e.get("silent") || t.get("silent")
        }
    }), _s(function (t) {
        t.markPoint = t.markPoint || {}
    }), qS.extend({
        type: "markLine",
        defaultOption: {
            zlevel: 0,
            z: 5,
            symbol: ["circle", "arrow"],
            symbolSize: [8, 16],
            precision: 2,
            tooltip: {trigger: "item"},
            label: {show: !0, position: "end"},
            lineStyle: {type: "dashed"},
            emphasis: {label: {show: !0}, lineStyle: {width: 3}},
            animationEasing: "linear"
        }
    });
    var tM = Ty.prototype, eM = Cy.prototype, nM = Bi({
        type: "ec-line",
        style: {stroke: "#000", fill: null},
        shape: {x1: 0, y1: 0, x2: 0, y2: 0, percent: 1, cpx1: null, cpy1: null},
        buildPath: function (t, e) {
            (Yc(e) ? tM : eM).buildPath(t, e)
        },
        pointAt: function (t) {
            return Yc(this.shape) ? tM.pointAt.call(this, t) : eM.pointAt.call(this, t)
        },
        tangentAt: function (t) {
            var e = this.shape, n = Yc(e) ? [e.x2 - e.x1, e.y2 - e.y1] : eM.tangentAt.call(this, t);
            return Y(n, n)
        }
    }), iM = ["fromSymbol", "toSymbol"], rM = Qc.prototype;
    rM.beforeUpdate = function () {
        var t = this, e = t.childOfName("fromSymbol"), n = t.childOfName("toSymbol"), i = t.childOfName("label");
        if (e || n || !i.ignore) {
            for (var r = 1, o = this.parent; o;) o.scale && (r /= o.scale[0]), o = o.parent;
            var a = t.childOfName("line");
            if (this.__dirty || a.__dirty) {
                var s = a.shape.percent, l = a.pointAt(0), h = a.pointAt(s), u = G([], h, l);
                if (Y(u, u), e && (e.attr("position", l), c = a.tangentAt(0), e.attr("rotation", Math.PI / 2 - Math.atan2(c[1], c[0])), e.attr("scale", [r * s, r * s])), n) {
                    n.attr("position", h);
                    var c = a.tangentAt(1);
                    n.attr("rotation", -Math.PI / 2 - Math.atan2(c[1], c[0])), n.attr("scale", [r * s, r * s])
                }
                if (!i.ignore) {
                    i.attr("position", h);
                    var d, f, p, g = 5 * r;
                    if ("end" === i.__position) d = [u[0] * g + h[0], u[1] * g + h[1]], f = u[0] > .8 ? "left" : u[0] < -.8 ? "right" : "center", p = u[1] > .8 ? "top" : u[1] < -.8 ? "bottom" : "middle"; else if ("middle" === i.__position) {
                        var m = s / 2, v = [(c = a.tangentAt(m))[1], -c[0]], y = a.pointAt(m);
                        v[1] > 0 && (v[0] = -v[0], v[1] = -v[1]), d = [y[0] + v[0] * g, y[1] + v[1] * g], f = "center", p = "bottom";
                        var x = -Math.atan2(c[1], c[0]);
                        h[0] < l[0] && (x = Math.PI + x), i.attr("rotation", x)
                    } else d = [-u[0] * g + l[0], -u[1] * g + l[1]], f = u[0] > .8 ? "right" : u[0] < -.8 ? "left" : "center", p = u[1] > .8 ? "bottom" : u[1] < -.8 ? "top" : "middle";
                    i.attr({
                        style: {textVerticalAlign: i.__verticalAlign || p, textAlign: i.__textAlign || f},
                        position: d,
                        scale: [r, r]
                    })
                }
            }
        }
    }, rM._createLine = function (t, e, n) {
        var i = t.hostModel, r = $c(t.getItemLayout(e));
        r.shape.percent = 0, yr(r, {shape: {percent: 1}}, i, e), this.add(r);
        var o = new dy({name: "label", lineLabelOriginalOpacity: 1});
        this.add(o), d(iM, function (n) {
            var i = qc(n, t, e);
            this.add(i), this[jc(n)] = t.getItemVisual(e, n)
        }, this), this._updateCommonStl(t, e, n)
    }, rM.updateData = function (t, e, n) {
        var i = t.hostModel, r = this.childOfName("line"), o = t.getItemLayout(e), a = {shape: {}};
        Kc(a.shape, o), vr(r, a, i, e), d(iM, function (n) {
            var i = t.getItemVisual(e, n), r = jc(n);
            if (this[r] !== i) {
                this.remove(this.childOfName(n));
                var o = qc(n, t, e);
                this.add(o)
            }
            this[r] = i
        }, this), this._updateCommonStl(t, e, n)
    }, rM._updateCommonStl = function (t, e, n) {
        var i = t.hostModel, r = this.childOfName("line"), o = n && n.lineStyle, s = n && n.hoverLineStyle,
            l = n && n.labelModel, h = n && n.hoverLabelModel;
        if (!n || t.hasItemOption) {
            var u = t.getItemModel(e);
            o = u.getModel("lineStyle").getLineStyle(), s = u.getModel("emphasis.lineStyle").getLineStyle(), l = u.getModel("label"), h = u.getModel("emphasis.label")
        }
        var c = t.getItemVisual(e, "color"), f = C(t.getItemVisual(e, "opacity"), o.opacity, 1);
        r.useStyle(a({
            strokeNoScale: !0,
            fill: "none",
            stroke: c,
            opacity: f
        }, o)), r.hoverStyle = s, d(iM, function (t) {
            var e = this.childOfName(t);
            e && (e.setColor(c), e.setStyle({opacity: f}))
        }, this);
        var p, g, m = l.getShallow("show"), v = h.getShallow("show"), y = this.childOfName("label");
        if ((m || v) && (p = c || "#000", null == (g = i.getFormattedLabel(e, "normal", t.dataType)))) {
            var x = i.getRawValue(e);
            g = null == x ? t.getName(e) : isFinite(x) ? Lr(x) : x
        }
        var _ = m ? g : null, w = v ? A(i.getFormattedLabel(e, "emphasis", t.dataType), g) : null, b = y.style;
        null == _ && null == w || (lr(y.style, l, {text: _}, {autoColor: p}), y.__textAlign = b.textAlign, y.__verticalAlign = b.textVerticalAlign, y.__position = l.get("position") || "middle"), y.hoverStyle = null != w ? {
            text: w,
            textFill: h.getTextColor(!0),
            fontStyle: h.getShallow("fontStyle"),
            fontWeight: h.getShallow("fontWeight"),
            fontSize: h.getShallow("fontSize"),
            fontFamily: h.getShallow("fontFamily")
        } : {text: null}, y.ignore = !m && !v, or(this)
    }, rM.highlight = function () {
        this.trigger("emphasis")
    }, rM.downplay = function () {
        this.trigger("normal")
    }, rM.updateLayout = function (t, e) {
        this.setLinePoints(t.getItemLayout(e))
    }, rM.setLinePoints = function (t) {
        var e = this.childOfName("line");
        Kc(e.shape, t), e.dirty()
    }, h(Qc, am);
    var oM = Jc.prototype;
    oM.isPersistent = function () {
        return !0
    }, oM.updateData = function (t) {
        var e = this, n = e.group, i = e._lineData;
        e._lineData = t, i || n.removeAll();
        var r = nd(t);
        t.diff(i).add(function (n) {
            td(e, t, n, r)
        }).update(function (n, o) {
            ed(e, i, t, o, n, r)
        }).remove(function (t) {
            n.remove(i.getItemGraphicEl(t))
        }).execute()
    }, oM.updateLayout = function () {
        var t = this._lineData;
        t && t.eachItemGraphicEl(function (e, n) {
            e.updateLayout(t, n)
        }, this)
    }, oM.incrementalPrepareUpdate = function (t) {
        this._seriesScope = nd(t), this._lineData = null, this.group.removeAll()
    }, oM.incrementalUpdate = function (t, e) {
        for (var n = t.start; n < t.end; n++) if (rd(e.getItemLayout(n))) {
            var i = new this._ctor(e, n, this._seriesScope);
            i.traverse(function (t) {
                t.isGroup || (t.incremental = t.useHoverLayer = !0)
            }), this.group.add(i), e.setItemGraphicEl(n, i)
        }
    }, oM.remove = function () {
        this._clearIncremental(), this._incremental = null, this.group.removeAll()
    }, oM._clearIncremental = function () {
        var t = this._incremental;
        t && t.clearDisplaybles()
    };
    var aM = function (t, e, r, a) {
        var s = t.getData(), l = a.type;
        if (!y(a) && ("min" === l || "max" === l || "average" === l || "median" === l || null != a.xAxis || null != a.yAxis)) {
            var h, u;
            if (null != a.yAxis || null != a.xAxis) h = null != a.yAxis ? "y" : "x", e.getAxis(h), u = T(a.yAxis, a.xAxis); else {
                var c = Vc(a, s, e, t);
                h = c.valueDataDim, c.valueAxis, u = Zc(s, h, l)
            }
            var d = "x" === h ? 0 : 1, f = 1 - d, p = n(a), g = {};
            p.type = null, p.coord = [], g.coord = [], p.coord[f] = -1 / 0, g.coord[f] = 1 / 0;
            var m = r.get("precision");
            m >= 0 && "number" == typeof u && (u = +u.toFixed(Math.min(m, 20))), p.coord[d] = g.coord[d] = u, a = [p, g, {
                type: l,
                valueIndex: a.valueIndex,
                value: u
            }]
        }
        return a = [Fc(t, a[0]), Fc(t, a[1]), o({}, a[2])], a[2].type = a[2].type || "", i(a[2], a[0]), i(a[2], a[1]), a
    };
    JS.extend({
        type: "markLine", updateTransform: function (t, e, n) {
            e.eachSeries(function (t) {
                var e = t.markLineModel;
                if (e) {
                    var i = e.getData(), r = e.__from, o = e.__to;
                    r.each(function (e) {
                        ld(r, e, !0, t, n), ld(o, e, !1, t, n)
                    }), i.each(function (t) {
                        i.setItemLayout(t, [r.getItemLayout(t), o.getItemLayout(t)])
                    }), this.markerGroupMap.get(t.id).updateLayout()
                }
            }, this)
        }, renderSeries: function (t, e, n, i) {
            function r(e, n, r) {
                var o = e.getItemModel(n);
                ld(e, n, r, t, i), e.setItemVisual(n, {
                    symbolSize: o.get("symbolSize") || g[r ? 0 : 1],
                    symbol: o.get("symbol", !0) || p[r ? 0 : 1],
                    color: o.get("itemStyle.color") || s.getVisual("color")
                })
            }

            var o = t.coordinateSystem, a = t.id, s = t.getData(), l = this.markerGroupMap,
                h = l.get(a) || l.set(a, new Jc);
            this.group.add(h.group);
            var u = hd(o, t, e), c = u.from, d = u.to, f = u.line;
            e.__from = c, e.__to = d, e.setData(f);
            var p = e.get("symbol"), g = e.get("symbolSize");
            y(p) || (p = [p, p]), "number" == typeof g && (g = [g, g]), u.from.each(function (t) {
                r(c, t, !0), r(d, t, !1)
            }), f.each(function (t) {
                var e = f.getItemModel(t).get("lineStyle.color");
                f.setItemVisual(t, {color: e || c.getItemVisual(t, "color")}), f.setItemLayout(t, [c.getItemLayout(t), d.getItemLayout(t)]), f.setItemVisual(t, {
                    fromSymbolSize: c.getItemVisual(t, "symbolSize"),
                    fromSymbol: c.getItemVisual(t, "symbol"),
                    toSymbolSize: d.getItemVisual(t, "symbolSize"),
                    toSymbol: d.getItemVisual(t, "symbol")
                })
            }), h.updateData(f), u.line.eachItemGraphicEl(function (t, n) {
                t.traverse(function (t) {
                    t.dataModel = e
                })
            }), h.__keep = !0, h.group.silent = e.get("silent") || t.get("silent")
        }
    }), _s(function (t) {
        t.markLine = t.markLine || {}
    }), qS.extend({
        type: "markArea",
        defaultOption: {
            zlevel: 0,
            z: 1,
            tooltip: {trigger: "item"},
            animation: !1,
            label: {show: !0, position: "top"},
            itemStyle: {borderWidth: 0},
            emphasis: {label: {show: !0, position: "top"}}
        }
    });
    var sM = function (t, e, n, i) {
        var o = Fc(t, i[0]), a = Fc(t, i[1]), s = T, l = o.coord, h = a.coord;
        l[0] = s(l[0], -1 / 0), l[1] = s(l[1], -1 / 0), h[0] = s(h[0], 1 / 0), h[1] = s(h[1], 1 / 0);
        var u = r([{}, o, a]);
        return u.coord = [o.coord, a.coord], u.x0 = o.x, u.y0 = o.y, u.x1 = a.x, u.y1 = a.y, u
    }, lM = [["x0", "y0"], ["x1", "y0"], ["x1", "y1"], ["x0", "y1"]];
    JS.extend({
        type: "markArea", updateTransform: function (t, e, n) {
            e.eachSeries(function (t) {
                var e = t.markAreaModel;
                if (e) {
                    var i = e.getData();
                    i.each(function (e) {
                        var r = f(lM, function (r) {
                            return fd(i, e, r, t, n)
                        });
                        i.setItemLayout(e, r), i.getItemGraphicEl(e).setShape("points", r)
                    })
                }
            }, this)
        }, renderSeries: function (t, e, n, i) {
            var r = t.coordinateSystem, o = t.id, s = t.getData(), l = this.markerGroupMap,
                h = l.get(o) || l.set(o, {group: new am});
            this.group.add(h.group), h.__keep = !0;
            var u = pd(r, t, e);
            e.setData(u), u.each(function (e) {
                u.setItemLayout(e, f(lM, function (n) {
                    return fd(u, e, n, t, i)
                })), u.setItemVisual(e, {color: s.getVisual("color")})
            }), u.diff(h.__data).add(function (t) {
                var e = new _y({shape: {points: u.getItemLayout(t)}});
                u.setItemGraphicEl(t, e), h.group.add(e)
            }).update(function (t, n) {
                var i = h.__data.getItemGraphicEl(n);
                vr(i, {shape: {points: u.getItemLayout(t)}}, e, t), h.group.add(i), u.setItemGraphicEl(t, i)
            }).remove(function (t) {
                var e = h.__data.getItemGraphicEl(t);
                h.group.remove(e)
            }).execute(), u.eachItemGraphicEl(function (t, n) {
                var i = u.getItemModel(n), r = i.getModel("label"), o = i.getModel("emphasis.label"),
                    s = u.getItemVisual(n, "color");
                t.useStyle(a(i.getModel("itemStyle").getItemStyle(), {
                    fill: Gt(s, .4),
                    stroke: s
                })), t.hoverStyle = i.getModel("emphasis.itemStyle").getItemStyle(), sr(t.style, t.hoverStyle, r, o, {
                    labelFetcher: e,
                    labelDataIndex: n,
                    defaultText: u.getName(n) || "",
                    isRectText: !0,
                    autoColor: s
                }), or(t, {}), t.dataModel = e
            }), h.__data = u, h.group.silent = e.get("silent") || t.get("silent")
        }
    }), _s(function (t) {
        t.markArea = t.markArea || {}
    }), dx.registerSubTypeDefaulter("dataZoom", function () {
        return "slider"
    });
    var hM = ["cartesian2d", "polar", "singleAxis"], uM = function (t, e) {
            var n = f(t = t.slice(), Kr), i = f(e = (e || []).slice(), Kr);
            return function (r, o) {
                d(t, function (t, a) {
                    for (var s = {name: t, capital: n[a]}, l = 0; l < e.length; l++) s[e[l]] = t + i[l];
                    r.call(o, s)
                })
            }
        }(["x", "y", "z", "radius", "angle", "single"], ["axisIndex", "axis", "index", "id"]), cM = d, dM = Or,
        fM = function (t, e, n, i) {
            this._dimName = t, this._axisIndex = e, this._valueWindow, this._percentWindow, this._dataExtent, this._minMaxSpan, this.ecModel = i, this._dataZoomModel = n
        };
    fM.prototype = {
        constructor: fM, hostedBy: function (t) {
            return this._dataZoomModel === t
        }, getDataValueWindow: function () {
            return this._valueWindow.slice()
        }, getDataPercentWindow: function () {
            return this._percentWindow.slice()
        }, getTargetSeriesModels: function () {
            var t = [], e = this.ecModel;
            return e.eachSeries(function (n) {
                if (gd(n.get("coordinateSystem"))) {
                    var i = this._dimName, r = e.queryComponents({
                        mainType: i + "Axis",
                        index: n.get(i + "AxisIndex"),
                        id: n.get(i + "AxisId")
                    })[0];
                    this._axisIndex === (r && r.componentIndex) && t.push(n)
                }
            }, this), t
        }, getAxisModel: function () {
            return this.ecModel.getComponent(this._dimName + "Axis", this._axisIndex)
        }, getOtherAxisModel: function () {
            var t, e, n = this._dimName, i = this.ecModel, r = this.getAxisModel();
            "x" === n || "y" === n ? (e = "gridIndex", t = "x" === n ? "y" : "x") : (e = "polarIndex", t = "angle" === n ? "radius" : "angle");
            var o;
            return i.eachComponent(t + "Axis", function (t) {
                (t.get(e) || 0) === (r.get(e) || 0) && (o = t)
            }), o
        }, getMinMaxSpan: function () {
            return n(this._minMaxSpan)
        }, calculateDataWindow: function (t) {
            var e = this._dataExtent, n = this.getAxisModel().axis.scale, i = this._dataZoomModel.getRangePropMode(),
                r = [0, 100], o = [t.start, t.end], a = [];
            return cM(["startValue", "endValue"], function (e) {
                a.push(null != t[e] ? n.parse(t[e]) : null)
            }), cM([0, 1], function (t) {
                var s = a[t], l = o[t];
                "percent" === i[t] ? (null == l && (l = r[t]), s = n.parse(kr(l, r, e, !0))) : l = kr(s, e, r, !0), a[t] = s, o[t] = l
            }), {valueWindow: dM(a), percentWindow: dM(o)}
        }, reset: function (t) {
            if (t === this._dataZoomModel) {
                var e = this.getTargetSeriesModels();
                this._dataExtent = vd(this, this._dimName, e);
                var n = this.calculateDataWindow(t.option);
                this._valueWindow = n.valueWindow, this._percentWindow = n.percentWindow, _d(this), xd(this)
            }
        }, restore: function (t) {
            t === this._dataZoomModel && (this._valueWindow = this._percentWindow = null, xd(this, !0))
        }, filterData: function (t, e) {
            function n(t) {
                return t >= a[0] && t <= a[1]
            }

            if (t === this._dataZoomModel) {
                var i = this._dimName, r = this.getTargetSeriesModels(), o = t.get("filterMode"), a = this._valueWindow;
                "none" !== o && cM(r, function (t) {
                    var e = t.getData(), r = e.mapDimension(i, !0);
                    r.length && ("weakFilter" === o ? e.filterSelf(function (t) {
                        for (var n, i, o, s = 0; s < r.length; s++) {
                            var l = e.get(r[s], t), h = !isNaN(l), u = l < a[0], c = l > a[1];
                            if (h && !u && !c) return !0;
                            h && (o = !0), u && (n = !0), c && (i = !0)
                        }
                        return o && n && i
                    }) : cM(r, function (i) {
                        if ("empty" === o) t.setData(e.map(i, function (t) {
                            return n(t) ? t : NaN
                        })); else {
                            var r = {};
                            r[i] = a, e.selectRange(r)
                        }
                    }), cM(r, function (t) {
                        e.setApproximateExtent(a, t)
                    }))
                })
            }
        }
    };
    var pM = d, gM = uM, mM = As({
            type: "dataZoom",
            dependencies: ["xAxis", "yAxis", "zAxis", "radiusAxis", "angleAxis", "singleAxis", "series"],
            defaultOption: {
                zlevel: 0,
                z: 4,
                orient: null,
                xAxisIndex: null,
                yAxisIndex: null,
                filterMode: "filter",
                throttle: null,
                start: 0,
                end: 100,
                startValue: null,
                endValue: null,
                minSpan: null,
                maxSpan: null,
                minValueSpan: null,
                maxValueSpan: null,
                rangeMode: null
            },
            init: function (t, e, n) {
                this._dataIntervalByAxis = {}, this._dataInfo = {}, this._axisProxies = {}, this.textStyleModel, this._autoThrottle = !0, this._rangePropMode = ["percent", "percent"];
                var i = wd(t);
                this.mergeDefaultAndTheme(t, n), this.doInit(i)
            },
            mergeOption: function (t) {
                var e = wd(t);
                i(this.option, t, !0), this.doInit(e)
            },
            doInit: function (t) {
                var e = this.option;
                Kp.canvasSupported || (e.realtime = !1), this._setDefaultThrottle(t), bd(this, t), pM([["start", "startValue"], ["end", "endValue"]], function (t, n) {
                    "value" === this._rangePropMode[n] && (e[t[0]] = null)
                }, this), this.textStyleModel = this.getModel("textStyle"), this._resetTarget(), this._giveAxisProxies()
            },
            _giveAxisProxies: function () {
                var t = this._axisProxies;
                this.eachTargetAxis(function (e, n, i, r) {
                    var o = this.dependentModels[e.axis][n],
                        a = o.__dzAxisProxy || (o.__dzAxisProxy = new fM(e.name, n, this, r));
                    t[e.name + "_" + n] = a
                }, this)
            },
            _resetTarget: function () {
                var t = this.option, e = this._judgeAutoMode();
                gM(function (e) {
                    var n = e.axisIndex;
                    t[n] = Mn(t[n])
                }, this), "axisIndex" === e ? this._autoSetAxisIndex() : "orient" === e && this._autoSetOrient()
            },
            _judgeAutoMode: function () {
                var t = this.option, e = !1;
                gM(function (n) {
                    null != t[n.axisIndex] && (e = !0)
                }, this);
                var n = t.orient;
                return null == n && e ? "orient" : e ? void 0 : (null == n && (t.orient = "horizontal"), "axisIndex")
            },
            _autoSetAxisIndex: function () {
                var t = !0, e = this.get("orient", !0), n = this.option, i = this.dependentModels;
                if (t) {
                    var r = "vertical" === e ? "y" : "x";
                    i[r + "Axis"].length ? (n[r + "AxisIndex"] = [0], t = !1) : pM(i.singleAxis, function (i) {
                        t && i.get("orient", !0) === e && (n.singleAxisIndex = [i.componentIndex], t = !1)
                    })
                }
                t && gM(function (e) {
                    if (t) {
                        var i = [], r = this.dependentModels[e.axis];
                        if (r.length && !i.length) for (var o = 0, a = r.length; o < a; o++) "category" === r[o].get("type") && i.push(o);
                        n[e.axisIndex] = i, i.length && (t = !1)
                    }
                }, this), t && this.ecModel.eachSeries(function (t) {
                    this._isSeriesHasAllAxesTypeOf(t, "value") && gM(function (e) {
                        var i = n[e.axisIndex], r = t.get(e.axisIndex), o = t.get(e.axisId);
                        l(i, r = t.ecModel.queryComponents({
                            mainType: e.axis,
                            index: r,
                            id: o
                        })[0].componentIndex) < 0 && i.push(r)
                    })
                }, this)
            },
            _autoSetOrient: function () {
                var t;
                this.eachTargetAxis(function (e) {
                    !t && (t = e.name)
                }, this), this.option.orient = "y" === t ? "vertical" : "horizontal"
            },
            _isSeriesHasAllAxesTypeOf: function (t, e) {
                var n = !0;
                return gM(function (i) {
                    var r = t.get(i.axisIndex), o = this.dependentModels[i.axis][r];
                    o && o.get("type") === e || (n = !1)
                }, this), n
            },
            _setDefaultThrottle: function (t) {
                if (t.hasOwnProperty("throttle") && (this._autoThrottle = !1), this._autoThrottle) {
                    var e = this.ecModel.option;
                    this.option.throttle = e.animation && e.animationDurationUpdate > 0 ? 100 : 20
                }
            },
            getFirstTargetAxisModel: function () {
                var t;
                return gM(function (e) {
                    if (null == t) {
                        var n = this.get(e.axisIndex);
                        n.length && (t = this.dependentModels[e.axis][n[0]])
                    }
                }, this), t
            },
            eachTargetAxis: function (t, e) {
                var n = this.ecModel;
                gM(function (i) {
                    pM(this.get(i.axisIndex), function (r) {
                        t.call(e, i, r, this, n)
                    }, this)
                }, this)
            },
            getAxisProxy: function (t, e) {
                return this._axisProxies[t + "_" + e]
            },
            getAxisModel: function (t, e) {
                var n = this.getAxisProxy(t, e);
                return n && n.getAxisModel()
            },
            setRawRange: function (t, e) {
                var n = this.option;
                pM([["start", "startValue"], ["end", "endValue"]], function (e) {
                    null == t[e[0]] && null == t[e[1]] || (n[e[0]] = t[e[0]], n[e[1]] = t[e[1]])
                }, this), !e && bd(this, t)
            },
            getPercentRange: function () {
                var t = this.findRepresentativeAxisProxy();
                if (t) return t.getDataPercentWindow()
            },
            getValueRange: function (t, e) {
                if (null != t || null != e) return this.getAxisProxy(t, e).getDataValueWindow();
                var n = this.findRepresentativeAxisProxy();
                return n ? n.getDataValueWindow() : void 0
            },
            findRepresentativeAxisProxy: function (t) {
                if (t) return t.__dzAxisProxy;
                var e = this._axisProxies;
                for (var n in e) if (e.hasOwnProperty(n) && e[n].hostedBy(this)) return e[n];
                for (var n in e) if (e.hasOwnProperty(n) && !e[n].hostedBy(this)) return e[n]
            },
            getRangePropMode: function () {
                return this._rangePropMode.slice()
            }
        }), vM = t_.extend({
            type: "dataZoom", render: function (t, e, n, i) {
                this.dataZoomModel = t, this.ecModel = e, this.api = n
            }, getTargetCoordInfo: function () {
                function t(t, e, n, i) {
                    for (var r, o = 0; o < n.length; o++) if (n[o].model === t) {
                        r = n[o];
                        break
                    }
                    r || n.push(r = {model: t, axisModels: [], coordIndex: i}), r.axisModels.push(e)
                }

                var e = this.dataZoomModel, n = this.ecModel, i = {};
                return e.eachTargetAxis(function (e, r) {
                    var o = n.getComponent(e.axis, r);
                    if (o) {
                        var a = o.getCoordSysModel();
                        a && t(a, o, i[a.mainType] || (i[a.mainType] = []), a.componentIndex)
                    }
                }, this), i
            }
        }), yM = (mM.extend({
            type: "dataZoom.slider",
            layoutMode: "box",
            defaultOption: {
                show: !0,
                right: "ph",
                top: "ph",
                width: "ph",
                height: "ph",
                left: null,
                bottom: null,
                backgroundColor: "rgba(47,69,84,0)",
                dataBackground: {
                    lineStyle: {color: "#2f4554", width: .5, opacity: .3},
                    areaStyle: {color: "rgba(47,69,84,0.3)", opacity: .3}
                },
                borderColor: "#ddd",
                fillerColor: "rgba(167,183,204,0.4)",
                handleIcon: "M8.2,13.6V3.9H6.3v9.7H3.1v14.9h3.3v9.7h1.8v-9.7h3.3V13.6H8.2z M9.7,24.4H4.8v-1.4h4.9V24.4z M9.7,19.1H4.8v-1.4h4.9V19.1z",
                handleSize: "100%",
                handleStyle: {color: "#a7b7cc"},
                labelPrecision: null,
                labelFormatter: null,
                showDetail: !0,
                showDataShadow: "auto",
                realtime: !0,
                zoomLock: !1,
                textStyle: {color: "#333"}
            }
        }), function (t, e, n, i, r, o) {
            e[0] = Md(e[0], n), e[1] = Md(e[1], n), t = t || 0;
            var a = n[1] - n[0];
            null != r && (r = Md(r, [0, a])), null != o && (o = Math.max(o, null != r ? r : 0)), "all" === i && (r = o = Math.abs(e[1] - e[0]), i = 0);
            var s = Sd(e, i);
            e[i] += t;
            var l = r || 0, h = n.slice();
            s.sign < 0 ? h[0] += l : h[1] -= l, e[i] = Md(e[i], h);
            u = Sd(e, i);
            null != r && (u.sign !== s.sign || u.span < r) && (e[1 - i] = e[i] + s.sign * r);
            var u = Sd(e, i);
            return null != o && u.span > o && (e[1 - i] = e[i] + u.sign * o), e
        }), xM = My, _M = kr, wM = Or, bM = m, SM = d, MM = "horizontal", IM = 5,
        TM = ["line", "bar", "candlestick", "scatter"], AM = vM.extend({
            type: "dataZoom.slider", init: function (t, e) {
                this._displayables = {}, this._orient, this._range, this._handleEnds, this._size, this._handleWidth, this._handleHeight, this._location, this._dragging, this._dataShadowInfo, this.api = e
            }, render: function (t, e, n, i) {
                AM.superApply(this, "render", arguments), wa(this, "_dispatchZoomAction", this.dataZoomModel.get("throttle"), "fixRate"), this._orient = t.get("orient"), !1 !== this.dataZoomModel.get("show") ? (i && "dataZoom" === i.type && i.from === this.uid || this._buildView(), this._updateView()) : this.group.removeAll()
            }, remove: function () {
                AM.superApply(this, "remove", arguments), ba(this, "_dispatchZoomAction")
            }, dispose: function () {
                AM.superApply(this, "dispose", arguments), ba(this, "_dispatchZoomAction")
            }, _buildView: function () {
                var t = this.group;
                t.removeAll(), this._resetLocation(), this._resetInterval();
                var e = this._displayables.barGroup = new am;
                this._renderBackground(), this._renderHandle(), this._renderDataShadow(), t.add(e), this._positionGroup()
            }, _resetLocation: function () {
                var t = this.dataZoomModel, e = this.api, n = this._findCoordRect(),
                    i = {width: e.getWidth(), height: e.getHeight()}, r = this._orient === MM ? {
                        right: i.width - n.x - n.width,
                        top: i.height - 30 - 7,
                        width: n.width,
                        height: 30
                    } : {right: 7, top: n.y, width: 30, height: n.height}, o = no(t.option);
                d(["right", "top", "width", "height"], function (t) {
                    "ph" === o[t] && (o[t] = r[t])
                });
                var a = Jr(o, i, t.padding);
                this._location = {
                    x: a.x,
                    y: a.y
                }, this._size = [a.width, a.height], "vertical" === this._orient && this._size.reverse()
            }, _positionGroup: function () {
                var t = this.group, e = this._location, n = this._orient, i = this.dataZoomModel.getFirstTargetAxisModel(),
                    r = i && i.get("inverse"), o = this._displayables.barGroup,
                    a = (this._dataShadowInfo || {}).otherAxisInverse;
                o.attr(n !== MM || r ? n === MM && r ? {scale: a ? [-1, 1] : [-1, -1]} : "vertical" !== n || r ? {
                    scale: a ? [-1, -1] : [-1, 1],
                    rotation: Math.PI / 2
                } : {scale: a ? [1, -1] : [1, 1], rotation: Math.PI / 2} : {scale: a ? [1, 1] : [1, -1]});
                var s = t.getBoundingRect([o]);
                t.attr("position", [e.x - s.x, e.y - s.y])
            }, _getViewExtent: function () {
                return [0, this._size[0]]
            }, _renderBackground: function () {
                var t = this.dataZoomModel, e = this._size, n = this._displayables.barGroup;
                n.add(new xM({
                    silent: !0,
                    shape: {x: 0, y: 0, width: e[0], height: e[1]},
                    style: {fill: t.get("backgroundColor")},
                    z2: -40
                })), n.add(new xM({
                    shape: {x: 0, y: 0, width: e[0], height: e[1]},
                    style: {fill: "transparent"},
                    z2: 0,
                    onclick: m(this._onClickPanelClick, this)
                }))
            }, _renderDataShadow: function () {
                var t = this._dataShadowInfo = this._prepareDataShadowInfo();
                if (t) {
                    var e = this._size, n = t.series, i = n.getRawData(),
                        r = n.getShadowDim ? n.getShadowDim() : t.otherDim;
                    if (null != r) {
                        var o = i.getDataExtent(r), s = .3 * (o[1] - o[0]);
                        o = [o[0] - s, o[1] + s];
                        var l, h = [0, e[1]], u = [0, e[0]], c = [[e[0], 0], [0, 0]], d = [], f = u[1] / (i.count() - 1),
                            p = 0, g = Math.round(i.count() / e[0]);
                        i.each([r], function (t, e) {
                            if (g > 0 && e % g) p += f; else {
                                var n = null == t || isNaN(t) || "" === t, i = n ? 0 : _M(t, o, h, !0);
                                n && !l && e ? (c.push([c[c.length - 1][0], 0]), d.push([d[d.length - 1][0], 0])) : !n && l && (c.push([p, 0]), d.push([p, 0])), c.push([p, i]), d.push([p, i]), p += f, l = n
                            }
                        });
                        var m = this.dataZoomModel;
                        this._displayables.barGroup.add(new _y({
                            shape: {points: c},
                            style: a({fill: m.get("dataBackgroundColor")}, m.getModel("dataBackground.areaStyle").getAreaStyle()),
                            silent: !0,
                            z2: -20
                        })), this._displayables.barGroup.add(new wy({
                            shape: {points: d},
                            style: m.getModel("dataBackground.lineStyle").getLineStyle(),
                            silent: !0,
                            z2: -19
                        }))
                    }
                }
            }, _prepareDataShadowInfo: function () {
                var t = this.dataZoomModel, e = t.get("showDataShadow");
                if (!1 !== e) {
                    var n, i = this.ecModel;
                    return t.eachTargetAxis(function (r, o) {
                        d(t.getAxisProxy(r.name, o).getTargetSeriesModels(), function (t) {
                            if (!(n || !0 !== e && l(TM, t.get("type")) < 0)) {
                                var a, s = i.getComponent(r.axis, o).axis, h = Id(r.name), u = t.coordinateSystem;
                                null != h && u.getOtherAxis && (a = u.getOtherAxis(s).inverse), h = t.getData().mapDimension(h), n = {
                                    thisAxis: s,
                                    series: t,
                                    thisDim: r.name,
                                    otherDim: h,
                                    otherAxisInverse: a
                                }
                            }
                        }, this)
                    }, this), n
                }
            }, _renderHandle: function () {
                var t = this._displayables, e = t.handles = [], n = t.handleLabels = [], i = this._displayables.barGroup,
                    r = this._size, o = this.dataZoomModel;
                i.add(t.filler = new xM({
                    draggable: !0,
                    cursor: Td(this._orient),
                    drift: bM(this._onDragMove, this, "all"),
                    onmousemove: function (t) {
                        bg(t.event)
                    },
                    ondragstart: bM(this._showDataInfo, this, !0),
                    ondragend: bM(this._onDragEnd, this),
                    onmouseover: bM(this._showDataInfo, this, !0),
                    onmouseout: bM(this._showDataInfo, this, !1),
                    style: {fill: o.get("fillerColor"), textPosition: "inside"}
                })), i.add(new xM(Zi({
                    silent: !0,
                    shape: {x: 0, y: 0, width: r[0], height: r[1]},
                    style: {
                        stroke: o.get("dataBackgroundColor") || o.get("borderColor"),
                        lineWidth: 1,
                        fill: "rgba(0,0,0,0)"
                    }
                }))), SM([0, 1], function (t) {
                    var r = Mr(o.get("handleIcon"), {
                        cursor: Td(this._orient),
                        draggable: !0,
                        drift: bM(this._onDragMove, this, t),
                        onmousemove: function (t) {
                            bg(t.event)
                        },
                        ondragend: bM(this._onDragEnd, this),
                        onmouseover: bM(this._showDataInfo, this, !0),
                        onmouseout: bM(this._showDataInfo, this, !1)
                    }, {x: -1, y: 0, width: 2, height: 2}), a = r.getBoundingRect();
                    this._handleHeight = Pr(o.get("handleSize"), this._size[1]), this._handleWidth = a.width / a.height * this._handleHeight, r.setStyle(o.getModel("handleStyle").getItemStyle());
                    var s = o.get("handleColor");
                    null != s && (r.style.fill = s), i.add(e[t] = r);
                    var l = o.textStyleModel;
                    this.group.add(n[t] = new dy({
                        silent: !0,
                        invisible: !0,
                        style: {
                            x: 0,
                            y: 0,
                            text: "",
                            textVerticalAlign: "middle",
                            textAlign: "center",
                            textFill: l.getTextColor(),
                            textFont: l.getFont()
                        },
                        z2: 10
                    }))
                }, this)
            }, _resetInterval: function () {
                var t = this._range = this.dataZoomModel.getPercentRange(), e = this._getViewExtent();
                this._handleEnds = [_M(t[0], [0, 100], e, !0), _M(t[1], [0, 100], e, !0)]
            }, _updateInterval: function (t, e) {
                var n = this.dataZoomModel, i = this._handleEnds, r = this._getViewExtent(),
                    o = n.findRepresentativeAxisProxy().getMinMaxSpan(), a = [0, 100];
                yM(e, i, r, n.get("zoomLock") ? "all" : t, null != o.minSpan ? _M(o.minSpan, a, r, !0) : null, null != o.maxSpan ? _M(o.maxSpan, a, r, !0) : null);
                var s = this._range, l = this._range = wM([_M(i[0], r, a, !0), _M(i[1], r, a, !0)]);
                return !s || s[0] !== l[0] || s[1] !== l[1]
            }, _updateView: function (t) {
                var e = this._displayables, n = this._handleEnds, i = wM(n.slice()), r = this._size;
                SM([0, 1], function (t) {
                    var i = e.handles[t], o = this._handleHeight;
                    i.attr({scale: [o / 2, o / 2], position: [n[t], r[1] / 2 - o / 2]})
                }, this), e.filler.setShape({x: i[0], y: 0, width: i[1] - i[0], height: r[1]}), this._updateDataInfo(t)
            }, _updateDataInfo: function (t) {
                function e(t) {
                    var e = xr(i.handles[t].parent, this.group), n = wr(0 === t ? "right" : "left", e),
                        s = this._handleWidth / 2 + IM, l = _r([c[t] + (0 === t ? -s : s), this._size[1] / 2], e);
                    r[t].setStyle({
                        x: l[0],
                        y: l[1],
                        textVerticalAlign: o === MM ? "middle" : n,
                        textAlign: o === MM ? n : "center",
                        text: a[t]
                    })
                }

                var n = this.dataZoomModel, i = this._displayables, r = i.handleLabels, o = this._orient, a = ["", ""];
                if (n.get("showDetail")) {
                    var s = n.findRepresentativeAxisProxy();
                    if (s) {
                        var l = s.getAxisModel().axis, h = this._range,
                            u = t ? s.calculateDataWindow({start: h[0], end: h[1]}).valueWindow : s.getDataValueWindow();
                        a = [this._formatLabel(u[0], l), this._formatLabel(u[1], l)]
                    }
                }
                var c = wM(this._handleEnds.slice());
                e.call(this, 0), e.call(this, 1)
            }, _formatLabel: function (t, e) {
                var n = this.dataZoomModel, i = n.get("labelFormatter"), r = n.get("labelPrecision");
                null != r && "auto" !== r || (r = e.getPixelPrecision());
                var o = null == t || isNaN(t) ? "" : "category" === e.type || "time" === e.type ? e.scale.getLabel(Math.round(t)) : t.toFixed(Math.min(r, 20));
                return x(i) ? i(t, o) : _(i) ? i.replace("{value}", o) : o
            }, _showDataInfo: function (t) {
                t = this._dragging || t;
                var e = this._displayables.handleLabels;
                e[0].attr("invisible", !t), e[1].attr("invisible", !t)
            }, _onDragMove: function (t, e, n) {
                this._dragging = !0;
                var i = _r([e, n], this._displayables.barGroup.getLocalTransform(), !0), r = this._updateInterval(t, i[0]),
                    o = this.dataZoomModel.get("realtime");
                this._updateView(!o), r && o && this._dispatchZoomAction()
            }, _onDragEnd: function () {
                this._dragging = !1, this._showDataInfo(!1), !this.dataZoomModel.get("realtime") && this._dispatchZoomAction()
            }, _onClickPanelClick: function (t) {
                var e = this._size, n = this._displayables.barGroup.transformCoordToLocal(t.offsetX, t.offsetY);
                if (!(n[0] < 0 || n[0] > e[0] || n[1] < 0 || n[1] > e[1])) {
                    var i = this._handleEnds, r = (i[0] + i[1]) / 2, o = this._updateInterval("all", n[0] - r);
                    this._updateView(), o && this._dispatchZoomAction()
                }
            }, _dispatchZoomAction: function () {
                var t = this._range;
                this.api.dispatchAction({
                    type: "dataZoom",
                    from: this.uid,
                    dataZoomId: this.dataZoomModel.id,
                    start: t[0],
                    end: t[1]
                })
            }, _findCoordRect: function () {
                var t;
                if (SM(this.getTargetCoordInfo(), function (e) {
                    if (!t && e.length) {
                        var n = e[0].model.coordinateSystem;
                        t = n.getRect && n.getRect()
                    }
                }), !t) {
                    var e = this.api.getWidth(), n = this.api.getHeight();
                    t = {x: .2 * e, y: .2 * n, width: .6 * e, height: .6 * n}
                }
                return t
            }
        });
    mM.extend({
        type: "dataZoom.inside",
        defaultOption: {
            disabled: !1,
            zoomLock: !1,
            zoomOnMouseWheel: !0,
            moveOnMouseMove: !0,
            moveOnMouseWheel: !1,
            preventDefaultMouseMove: !0
        }
    });
    var CM = "\0_ec_interaction_mutex";
    bs({type: "takeGlobalCursor", event: "globalCursorTaken", update: "update"}, function () {
    }), u(Pd, xg);
    var DM = "\0_ec_dataZoom_roams", kM = m, PM = vM.extend({
        type: "dataZoom.inside", init: function (t, e) {
            this._range
        }, render: function (t, e, n, i) {
            PM.superApply(this, "render", arguments), this._range = t.getPercentRange(), d(this.getTargetCoordInfo(), function (e, i) {
                var r = f(e, function (t) {
                    return Wd(t.model)
                });
                d(e, function (e) {
                    var o = e.model, a = {};
                    d(["pan", "zoom", "scrollMove"], function (t) {
                        a[t] = kM(LM[t], this, e, i)
                    }, this), Vd(n, {
                        coordId: Wd(o), allCoordIds: r, containsPoint: function (t, e, n) {
                            return o.coordinateSystem.containPoint([e, n])
                        }, dataZoomId: t.id, dataZoomModel: t, getRange: a
                    })
                }, this)
            }, this)
        }, dispose: function () {
            Hd(this.api, this.dataZoomModel.id), PM.superApply(this, "dispose", arguments), this._range = null
        }
    }), LM = {
        zoom: function (t, e, n, i) {
            var r = this._range, o = r.slice(), a = t.axisModels[0];
            if (a) {
                var s = OM[e](null, [i.originX, i.originY], a, n, t),
                    l = (s.signal > 0 ? s.pixelStart + s.pixelLength - s.pixel : s.pixel - s.pixelStart) / s.pixelLength * (o[1] - o[0]) + o[0],
                    h = Math.max(1 / i.scale, 0);
                o[0] = (o[0] - l) * h + l, o[1] = (o[1] - l) * h + l;
                var u = this.dataZoomModel.findRepresentativeAxisProxy().getMinMaxSpan();
                return yM(0, o, [0, 100], 0, u.minSpan, u.maxSpan), this._range = o, r[0] !== o[0] || r[1] !== o[1] ? o : void 0
            }
        }, pan: jd(function (t, e, n, i, r, o) {
            var a = OM[i]([o.oldX, o.oldY], [o.newX, o.newY], e, r, n);
            return a.signal * (t[1] - t[0]) * a.pixel / a.pixelLength
        }), scrollMove: jd(function (t, e, n, i, r, o) {
            return OM[i]([0, 0], [o.scrollDelta, o.scrollDelta], e, r, n).signal * (t[1] - t[0]) * o.scrollDelta
        })
    }, OM = {
        grid: function (t, e, n, i, r) {
            var o = n.axis, a = {}, s = r.model.coordinateSystem.getRect();
            return t = t || [0, 0], "x" === o.dim ? (a.pixel = e[0] - t[0], a.pixelLength = s.width, a.pixelStart = s.x, a.signal = o.inverse ? 1 : -1) : (a.pixel = e[1] - t[1], a.pixelLength = s.height, a.pixelStart = s.y, a.signal = o.inverse ? -1 : 1), a
        }, polar: function (t, e, n, i, r) {
            var o = n.axis, a = {}, s = r.model.coordinateSystem, l = s.getRadiusAxis().getExtent(),
                h = s.getAngleAxis().getExtent();
            return t = t ? s.pointToCoord(t) : [0, 0], e = s.pointToCoord(e), "radiusAxis" === n.mainType ? (a.pixel = e[0] - t[0], a.pixelLength = l[1] - l[0], a.pixelStart = l[0], a.signal = o.inverse ? 1 : -1) : (a.pixel = e[1] - t[1], a.pixelLength = h[1] - h[0], a.pixelStart = h[0], a.signal = o.inverse ? -1 : 1), a
        }, singleAxis: function (t, e, n, i, r) {
            var o = n.axis, a = r.model.coordinateSystem.getRect(), s = {};
            return t = t || [0, 0], "horizontal" === o.orient ? (s.pixel = e[0] - t[0], s.pixelLength = a.width, s.pixelStart = a.x, s.signal = o.inverse ? 1 : -1) : (s.pixel = e[1] - t[1], s.pixelLength = a.height, s.pixelStart = a.y, s.signal = o.inverse ? -1 : 1), s
        }
    };
    ws({
        getTargetSeries: function (t) {
            var e = N();
            return t.eachComponent("dataZoom", function (t) {
                t.eachTargetAxis(function (t, n, i) {
                    d(i.getAxisProxy(t.name, n).getTargetSeriesModels(), function (t) {
                        e.set(t.uid, t)
                    })
                })
            }), e
        }, modifyOutputEnd: !0, overallReset: function (t, e) {
            t.eachComponent("dataZoom", function (t) {
                t.eachTargetAxis(function (t, n, i) {
                    i.getAxisProxy(t.name, n).reset(i, e)
                }), t.eachTargetAxis(function (t, n, i) {
                    i.getAxisProxy(t.name, n).filterData(i, e)
                })
            }), t.eachComponent("dataZoom", function (t) {
                var e = t.findRepresentativeAxisProxy(), n = e.getDataPercentWindow(), i = e.getDataValueWindow();
                t.setRawRange({start: n[0], end: n[1], startValue: i[0], endValue: i[1]}, !0)
            })
        }
    }), bs("dataZoom", function (t, e) {
        var n = md(m(e.eachComponent, e, "dataZoom"), uM, function (t, e) {
            return t.get(e.axisIndex)
        }), i = [];
        e.eachComponent({mainType: "dataZoom", query: t}, function (t, e) {
            i.push.apply(i, n(t).nodes)
        }), d(i, function (e, n) {
            e.setRawRange({start: t.start, end: t.end, startValue: t.startValue, endValue: t.endValue})
        })
    });
    var zM = {}, EM = As({
        type: "toolbox",
        layoutMode: {type: "box", ignoreSize: !0},
        optionUpdated: function () {
            EM.superApply(this, "optionUpdated", arguments), d(this.option.feature, function (t, e) {
                var n = $d(e);
                n && i(t, n.defaultOption)
            })
        },
        defaultOption: {
            show: !0,
            z: 6,
            zlevel: 0,
            orient: "horizontal",
            left: "right",
            top: "top",
            backgroundColor: "transparent",
            borderColor: "#ccc",
            borderRadius: 0,
            borderWidth: 0,
            padding: 5,
            itemSize: 15,
            itemGap: 8,
            showTitle: !0,
            iconStyle: {borderColor: "#666", color: "none"},
            emphasis: {iconStyle: {borderColor: "#3E98C5"}}
        }
    });
    Cs({
        type: "toolbox", render: function (t, e, n, i) {
            function r(r, a) {
                var s, c = u[r], d = u[a], f = new Ir(l[c], t, t.ecModel);
                if (c && !d) {
                    if (Kd(c)) s = {model: f, onclick: f.option.onclick, featureName: c}; else {
                        var p = $d(c);
                        if (!p) return;
                        s = new p(f, e, n)
                    }
                    h[c] = s
                } else {
                    if (!(s = h[d])) return;
                    s.model = f, s.ecModel = e, s.api = n
                }
                c || !d ? f.get("show") && !s.unusable ? (o(f, s, c), f.setIconStatus = function (t, e) {
                    var n = this.option, i = this.iconPaths;
                    n.iconStatus = n.iconStatus || {}, n.iconStatus[t] = e, i[t] && i[t].trigger(e)
                }, s.render && s.render(f, e, n, i)) : s.remove && s.remove(e, n) : s.dispose && s.dispose(e, n)
            }

            function o(i, r, o) {
                var l = i.getModel("iconStyle"), h = i.getModel("emphasis.iconStyle"),
                    u = r.getIcons ? r.getIcons() : i.get("icon"), c = i.get("title") || {};
                if ("string" == typeof u) {
                    var f = u, p = c;
                    c = {}, (u = {})[o] = f, c[o] = p
                }
                var g = i.iconPaths = {};
                d(u, function (o, u) {
                    var d = Mr(o, {}, {x: -s / 2, y: -s / 2, width: s, height: s});
                    d.setStyle(l.getItemStyle()), d.hoverStyle = h.getItemStyle(), or(d), t.get("showTitle") && (d.__title = c[u], d.on("mouseover", function () {
                        var t = h.getItemStyle();
                        d.setStyle({
                            text: c[u],
                            textPosition: t.textPosition || "bottom",
                            textFill: t.fill || t.stroke || "#000",
                            textAlign: t.textAlign || "center"
                        })
                    }).on("mouseout", function () {
                        d.setStyle({textFill: null})
                    })), d.trigger(i.get("iconStatus." + u) || "normal"), a.add(d), d.on("click", m(r.onclick, r, e, n, u)), g[u] = d
                })
            }

            var a = this.group;
            if (a.removeAll(), t.get("show")) {
                var s = +t.get("itemSize"), l = t.get("feature") || {}, h = this._features || (this._features = {}),
                    u = [];
                d(l, function (t, e) {
                    u.push(e)
                }), new Ls(this._featureNames || [], u).add(r).update(r).remove(v(r, null)).execute(), this._featureNames = u, Dc(a, t, n), a.add(kc(a.getBoundingRect(), t)), a.eachChild(function (t) {
                    var e = t.__title, i = t.hoverStyle;
                    if (i && e) {
                        var r = Te(e, He(i)), o = t.position[0] + a.position[0], l = !1;
                        t.position[1] + a.position[1] + s + r.height > n.getHeight() && (i.textPosition = "top", l = !0);
                        var h = l ? -5 - r.height : s + 8;
                        o + r.width / 2 > n.getWidth() ? (i.textPosition = ["100%", h], i.textAlign = "right") : o - r.width / 2 < 0 && (i.textPosition = [0, h], i.textAlign = "left")
                    }
                })
            }
        }, updateView: function (t, e, n, i) {
            d(this._features, function (t) {
                t.updateView && t.updateView(t.model, e, n, i)
            })
        }, remove: function (t, e) {
            d(this._features, function (n) {
                n.remove && n.remove(t, e)
            }), this.group.removeAll()
        }, dispose: function (t, e) {
            d(this._features, function (n) {
                n.dispose && n.dispose(t, e)
            })
        }
    });
    var NM = c_.toolbox.saveAsImage;
    Qd.defaultOption = {
        show: !0,
        icon: "M4.7,22.9L29.3,45.5L54.7,23.4M4.6,43.6L4.6,58L53.8,58L53.8,43.6M29.2,45.1L29.2,0",
        title: NM.title,
        type: "png",
        name: "",
        excludeComponents: ["toolbox"],
        pixelRatio: 1,
        lang: NM.lang.slice()
    }, Qd.prototype.unusable = !Kp.canvasSupported, Qd.prototype.onclick = function (t, e) {
        var n = this.model, i = n.get("name") || t.get("title.0.text") || "echarts", r = document.createElement("a"),
            o = n.get("type", !0) || "png";
        r.download = i + "." + o, r.target = "_blank";
        var a = e.getConnectedDataURL({
            type: o,
            backgroundColor: n.get("backgroundColor", !0) || t.get("backgroundColor") || "#fff",
            excludeComponents: n.get("excludeComponents"),
            pixelRatio: n.get("pixelRatio")
        });
        if (r.href = a, "function" != typeof MouseEvent || Kp.browser.ie || Kp.browser.edge) if (window.navigator.msSaveOrOpenBlob) {
            for (var s = atob(a.split(",")[1]), l = s.length, h = new Uint8Array(l); l--;) h[l] = s.charCodeAt(l);
            var u = new Blob([h]);
            window.navigator.msSaveOrOpenBlob(u, i + "." + o)
        } else {
            var c = n.get("lang"),
                d = '<body style="margin:0;"><img src="' + a + '" style="max-width:100%;" title="' + (c && c[0] || "") + '" /></body>';
            window.open().document.write(d)
        } else {
            var f = new MouseEvent("click", {view: window, bubbles: !0, cancelable: !1});
            r.dispatchEvent(f)
        }
    }, qd("saveAsImage", Qd);
    var RM = c_.toolbox.magicType;
    Jd.defaultOption = {
        show: !0,
        type: [],
        icon: {
            line: "M4.1,28.9h7.1l9.3-22l7.4,38l9.7-19.7l3,12.8h14.9M4.1,58h51.4",
            bar: "M6.7,22.9h10V48h-10V22.9zM24.9,13h10v35h-10V13zM43.2,2h10v46h-10V2zM3.1,58h53.7",
            stack: "M8.2,38.4l-8.4,4.1l30.6,15.3L60,42.5l-8.1-4.1l-21.5,11L8.2,38.4z M51.9,30l-8.1,4.2l-13.4,6.9l-13.9-6.9L8.2,30l-8.4,4.2l8.4,4.2l22.2,11l21.5-11l8.1-4.2L51.9,30z M51.9,21.7l-8.1,4.2L35.7,30l-5.3,2.8L24.9,30l-8.4-4.1l-8.3-4.2l-8.4,4.2L8.2,30l8.3,4.2l13.9,6.9l13.4-6.9l8.1-4.2l8.1-4.1L51.9,21.7zM30.4,2.2L-0.2,17.5l8.4,4.1l8.3,4.2l8.4,4.2l5.5,2.7l5.3-2.7l8.1-4.2l8.1-4.2l8.1-4.1L30.4,2.2z",
            tiled: "M2.3,2.2h22.8V25H2.3V2.2z M35,2.2h22.8V25H35V2.2zM2.3,35h22.8v22.8H2.3V35z M35,35h22.8v22.8H35V35z"
        },
        title: n(RM.title),
        option: {},
        seriesIndex: {}
    };
    var BM = Jd.prototype;
    BM.getIcons = function () {
        var t = this.model, e = t.get("icon"), n = {};
        return d(t.get("type"), function (t) {
            e[t] && (n[t] = e[t])
        }), n
    };
    var FM = {
        line: function (t, e, n, r) {
            if ("bar" === t) return i({
                id: e,
                type: "line",
                data: n.get("data"),
                stack: n.get("stack"),
                markPoint: n.get("markPoint"),
                markLine: n.get("markLine")
            }, r.get("option.line") || {}, !0)
        }, bar: function (t, e, n, r) {
            if ("line" === t) return i({
                id: e,
                type: "bar",
                data: n.get("data"),
                stack: n.get("stack"),
                markPoint: n.get("markPoint"),
                markLine: n.get("markLine")
            }, r.get("option.bar") || {}, !0)
        }, stack: function (t, e, n, r) {
            if ("line" === t || "bar" === t) return i({
                id: e,
                stack: "__ec_magicType_stack__"
            }, r.get("option.stack") || {}, !0)
        }, tiled: function (t, e, n, r) {
            if ("line" === t || "bar" === t) return i({id: e, stack: ""}, r.get("option.tiled") || {}, !0)
        }
    }, VM = [["line", "bar"], ["stack", "tiled"]];
    BM.onclick = function (t, e, n) {
        var i = this.model, r = i.get("seriesIndex." + n);
        if (FM[n]) {
            var o = {series: []};
            d(VM, function (t) {
                l(t, n) >= 0 && d(t, function (t) {
                    i.setIconStatus(t, "normal")
                })
            }), i.setIconStatus(n, "emphasis"), t.eachComponent({
                mainType: "series",
                query: null == r ? null : {seriesIndex: r}
            }, function (e) {
                var r = e.subType, s = e.id, l = FM[n](r, s, e, i);
                l && (a(l, e.option), o.series.push(l));
                var h = e.coordinateSystem;
                if (h && "cartesian2d" === h.type && ("line" === n || "bar" === n)) {
                    var u = h.getAxesByScale("ordinal")[0];
                    if (u) {
                        var c = u.dim + "Axis", d = t.queryComponents({
                            mainType: c,
                            index: e.get(name + "Index"),
                            id: e.get(name + "Id")
                        })[0].componentIndex;
                        o[c] = o[c] || [];
                        for (var f = 0; f <= d; f++) o[c][d] = o[c][d] || {};
                        o[c][d].boundaryGap = "bar" === n
                    }
                }
            }), e.dispatchAction({type: "changeMagicType", currentType: n, newOption: o})
        }
    }, bs({type: "changeMagicType", event: "magicTypeChanged", update: "prepareAndUpdate"}, function (t, e) {
        e.mergeOption(t.newOption)
    }), qd("magicType", Jd);
    var HM = c_.toolbox.dataView, WM = new Array(60).join("-"), GM = "\t", ZM = new RegExp("[" + GM + "]+", "g");
    uf.defaultOption = {
        show: !0,
        readOnly: !1,
        optionToContent: null,
        contentToOption: null,
        icon: "M17.5,17.3H33 M17.5,17.3H33 M45.4,29.5h-28 M11.5,2v56H51V14.8L38.4,2H11.5z M38.4,2.2v12.7H51 M45.4,41.7h-28",
        title: n(HM.title),
        lang: n(HM.lang),
        backgroundColor: "#fff",
        textColor: "#000",
        textareaColor: "#fff",
        textareaBorderColor: "#333",
        buttonColor: "#c23531",
        buttonTextColor: "#fff"
    }, uf.prototype.onclick = function (t, e) {
        function n() {
            i.removeChild(o), x._dom = null
        }

        var i = e.getDom(), r = this.model;
        this._dom && i.removeChild(this._dom);
        var o = document.createElement("div");
        o.style.cssText = "position:absolute;left:5px;top:5px;bottom:5px;right:5px;", o.style.backgroundColor = r.get("backgroundColor") || "#fff";
        var a = document.createElement("h4"), s = r.get("lang") || [];
        a.innerHTML = s[0] || r.get("title"), a.style.cssText = "margin: 10px 20px;", a.style.color = r.get("textColor");
        var l = document.createElement("div"), h = document.createElement("textarea");
        l.style.cssText = "display:block;width:100%;overflow:auto;";
        var u = r.get("optionToContent"), c = r.get("contentToOption"), d = rf(t);
        if ("function" == typeof u) {
            var f = u(e.getOption());
            "string" == typeof f ? l.innerHTML = f : M(f) && l.appendChild(f)
        } else l.appendChild(h), h.readOnly = r.get("readOnly"), h.style.cssText = "width:100%;height:100%;font-family:monospace;font-size:14px;line-height:1.6rem;", h.style.color = r.get("textColor"), h.style.borderColor = r.get("textareaBorderColor"), h.style.backgroundColor = r.get("textareaColor"), h.value = d.value;
        var p = d.meta, g = document.createElement("div");
        g.style.cssText = "position:absolute;bottom:0;left:0;right:0;";
        var m = "float:right;margin-right:20px;border:none;cursor:pointer;padding:2px 5px;font-size:12px;border-radius:3px",
            v = document.createElement("div"), y = document.createElement("div");
        m += ";background-color:" + r.get("buttonColor"), m += ";color:" + r.get("buttonTextColor");
        var x = this;
        st(v, "click", n), st(y, "click", function () {
            var t;
            try {
                t = "function" == typeof c ? c(l, e.getOption()) : hf(h.value, p)
            } catch (t) {
                throw n(), new Error("Data view format error " + t)
            }
            t && e.dispatchAction({type: "changeDataView", newOption: t}), n()
        }), v.innerHTML = s[1], y.innerHTML = s[2], y.style.cssText = m, v.style.cssText = m, !r.get("readOnly") && g.appendChild(y), g.appendChild(v), st(h, "keydown", function (t) {
            if (9 === (t.keyCode || t.which)) {
                var e = this.value, n = this.selectionStart, i = this.selectionEnd;
                this.value = e.substring(0, n) + GM + e.substring(i), this.selectionStart = this.selectionEnd = n + 1, bg(t)
            }
        }), o.appendChild(a), o.appendChild(l), o.appendChild(g), l.style.height = i.clientHeight - 80 + "px", i.appendChild(o), this._dom = o
    }, uf.prototype.remove = function (t, e) {
        this._dom && e.getDom().removeChild(this._dom)
    }, uf.prototype.dispose = function (t, e) {
        this.remove(t, e)
    }, qd("dataView", uf), bs({
        type: "changeDataView",
        event: "dataViewChanged",
        update: "prepareAndUpdate"
    }, function (t, e) {
        var n = [];
        d(t.newOption.series, function (t) {
            var i = e.getSeriesByName(t.name)[0];
            if (i) {
                var r = i.get("data");
                n.push({name: t.name, data: cf(t.data, r)})
            } else n.push(o({type: "scatter"}, t))
        }), e.mergeOption(a({series: n}, t.newOption))
    });
    var UM = v, XM = d, YM = f, jM = Math.min, qM = Math.max, $M = Math.pow, KM = 1e4, QM = 6, JM = 6, tI = "globalPan",
        eI = {w: [0, 0], e: [0, 1], n: [1, 0], s: [1, 1]},
        nI = {w: "ew", e: "ew", n: "ns", s: "ns", ne: "nesw", sw: "nesw", nw: "nwse", se: "nwse"}, iI = {
            brushStyle: {lineWidth: 2, stroke: "rgba(0,0,0,0.3)", fill: "rgba(0,0,0,0.1)"},
            transformable: !0,
            brushMode: "single",
            removeOnClick: !1
        }, rI = 0;
    df.prototype = {
        constructor: df, enableBrush: function (t) {
            return this._brushType && pf(this), t.brushType && ff(this, t), this
        }, setPanels: function (t) {
            if (t && t.length) {
                var e = this._panels = {};
                d(t, function (t) {
                    e[t.panelId] = n(t)
                })
            } else this._panels = null;
            return this
        }, mount: function (t) {
            t = t || {}, this._enableGlobalPan = t.enableGlobalPan;
            var e = this.group;
            return this._zr.add(e), e.attr({
                position: t.position || [0, 0],
                rotation: t.rotation || 0,
                scale: t.scale || [1, 1]
            }), this._transform = e.getLocalTransform(), this
        }, eachCover: function (t, e) {
            XM(this._covers, t, e)
        }, updateCovers: function (t) {
            function e(t, e) {
                return (null != t.id ? t.id : o + e) + "-" + t.brushType
            }

            function r(e, n) {
                var i = t[e];
                if (null != n && a[n] === h) s[e] = a[n]; else {
                    var r = s[e] = null != n ? (a[n].__brushOption = i, a[n]) : mf(l, gf(l, i));
                    xf(l, r)
                }
            }

            t = f(t, function (t) {
                return i(n(iI), t, !0)
            });
            var o = "\0-brush-index-", a = this._covers, s = this._covers = [], l = this, h = this._creatingCover;
            return new Ls(a, t, function (t, n) {
                return e(t.__brushOption, n)
            }, e).add(r).update(r).remove(function (t) {
                a[t] !== h && l.group.remove(a[t])
            }).execute(), this
        }, unmount: function () {
            return this.enableBrush(!1), Sf(this), this._zr.remove(this.group), this
        }, dispose: function () {
            this.unmount(), this.off()
        }
    }, u(df, xg);
    var oI = {
            mousedown: function (t) {
                if (this._dragging) Uf.call(this, t); else if (!t.target || !t.target.draggable) {
                    Hf(t);
                    var e = this.group.transformCoordToLocal(t.offsetX, t.offsetY);
                    this._creatingCover = null, (this._creatingPanel = wf(this, t, e)) && (this._dragging = !0, this._track = [e.slice()])
                }
            }, mousemove: function (t) {
                var e = this.group.transformCoordToLocal(t.offsetX, t.offsetY);
                if (Vf(this, t, e), this._dragging) {
                    Hf(t);
                    var n = Gf(this, t, e, !1);
                    n && Mf(this, n)
                }
            }, mouseup: Uf
        }, aI = {
            lineX: Xf(0), lineY: Xf(1), rect: {
                createCover: function (t, e) {
                    return Af(UM(Ef, function (t) {
                        return t
                    }, function (t) {
                        return t
                    }), t, e, ["w", "e", "n", "s", "se", "sw", "ne", "nw"])
                }, getCreatingRange: function (t) {
                    var e = Tf(t);
                    return Lf(e[1][0], e[1][1], e[0][0], e[0][1])
                }, updateCoverShape: function (t, e, n, i) {
                    Cf(t, e, n, i)
                }, updateCommon: Df, contain: Wf
            }, polygon: {
                createCover: function (t, e) {
                    var n = new am;
                    return n.add(new wy({name: "main", style: Pf(e), silent: !0})), n
                }, getCreatingRange: function (t) {
                    return t
                }, endCreating: function (t, e) {
                    e.remove(e.childAt(0)), e.add(new _y({
                        name: "main",
                        draggable: !0,
                        drift: UM(Nf, t, e),
                        ondragend: UM(Mf, t, {isEnd: !0})
                    }))
                }, updateCoverShape: function (t, e, n, i) {
                    e.childAt(0).setShape({points: Bf(t, e, n)})
                }, updateCommon: Df, contain: Wf
            }
        }, sI = {axisPointer: 1, tooltip: 1, brush: 1}, lI = d, hI = l, uI = v, cI = ["dataToPoint", "pointToData"],
        dI = ["grid", "xAxis", "yAxis", "geo", "graph", "polar", "radiusAxis", "angleAxis", "bmap"], fI = Qf.prototype;
    fI.setOutputRanges = function (t, e) {
        this.matchOutputRanges(t, e, function (t, e, n) {
            if ((t.coordRanges || (t.coordRanges = [])).push(e), !t.coordRange) {
                t.coordRange = e;
                var i = vI[t.brushType](0, n, e);
                t.__rangeOffset = {offset: yI[t.brushType](i.values, t.range, [1, 1]), xyMinMax: i.xyMinMax}
            }
        })
    }, fI.matchOutputRanges = function (t, e, n) {
        lI(t, function (t) {
            var i = this.findTargetInfo(t, e);
            i && !0 !== i && d(i.coordSyses, function (i) {
                var r = vI[t.brushType](1, i, t.range);
                n(t, r.values, i, e)
            })
        }, this)
    }, fI.setInputRanges = function (t, e) {
        lI(t, function (t) {
            var n = this.findTargetInfo(t, e);
            if (t.range = t.range || [], n && !0 !== n) {
                t.panelId = n.panelId;
                var i = vI[t.brushType](0, n.coordSys, t.coordRange), r = t.__rangeOffset;
                t.range = r ? yI[t.brushType](i.values, r.offset, ip(i.xyMinMax, r.xyMinMax)) : i.values
            }
        }, this)
    }, fI.makePanelOpts = function (t, e) {
        return f(this._targetInfoList, function (n) {
            var i = n.getPanelRect();
            return {
                panelId: n.panelId,
                defaultBrushType: e && e(n),
                clipPath: jf(i),
                isTargetByCursor: $f(i, t, n.coordSysModel),
                getLinearBrushOtherExtent: qf(i)
            }
        })
    }, fI.controlSeries = function (t, e, n) {
        var i = this.findTargetInfo(t, n);
        return !0 === i || i && hI(i.coordSyses, e.coordinateSystem) >= 0
    }, fI.findTargetInfo = function (t, e) {
        for (var n = this._targetInfoList, i = tp(e, t), r = 0; r < n.length; r++) {
            var o = n[r], a = t.panelId;
            if (a) {
                if (o.panelId === a) return o
            } else for (r = 0; r < gI.length; r++) if (gI[r](i, o)) return o
        }
        return !0
    };
    var pI = {
        grid: function (t, e) {
            var n = t.xAxisModels, i = t.yAxisModels, r = t.gridModels, o = N(), a = {}, s = {};
            (n || i || r) && (lI(n, function (t) {
                var e = t.axis.grid.model;
                o.set(e.id, e), a[e.id] = !0
            }), lI(i, function (t) {
                var e = t.axis.grid.model;
                o.set(e.id, e), s[e.id] = !0
            }), lI(r, function (t) {
                o.set(t.id, t), a[t.id] = !0, s[t.id] = !0
            }), o.each(function (t) {
                var r = t.coordinateSystem, o = [];
                lI(r.getCartesians(), function (t, e) {
                    (hI(n, t.getAxis("x").model) >= 0 || hI(i, t.getAxis("y").model) >= 0) && o.push(t)
                }), e.push({
                    panelId: "grid--" + t.id,
                    gridModel: t,
                    coordSysModel: t,
                    coordSys: o[0],
                    coordSyses: o,
                    getPanelRect: mI.grid,
                    xAxisDeclared: a[t.id],
                    yAxisDeclared: s[t.id]
                })
            }))
        }, geo: function (t, e) {
            lI(t.geoModels, function (t) {
                var n = t.coordinateSystem;
                e.push({
                    panelId: "geo--" + t.id,
                    geoModel: t,
                    coordSysModel: t,
                    coordSys: n,
                    coordSyses: [n],
                    getPanelRect: mI.geo
                })
            })
        }
    }, gI = [function (t, e) {
        var n = t.xAxisModel, i = t.yAxisModel, r = t.gridModel;
        return !r && n && (r = n.axis.grid.model), !r && i && (r = i.axis.grid.model), r && r === e.gridModel
    }, function (t, e) {
        var n = t.geoModel;
        return n && n === e.geoModel
    }], mI = {
        grid: function () {
            return this.coordSys.grid.getRect().clone()
        }, geo: function () {
            var t = this.coordSys, e = t.getBoundingRect().clone();
            return e.applyTransform(xr(t)), e
        }
    }, vI = {
        lineX: uI(ep, 0), lineY: uI(ep, 1), rect: function (t, e, n) {
            var i = e[cI[t]]([n[0][0], n[1][0]]), r = e[cI[t]]([n[0][1], n[1][1]]),
                o = [Jf([i[0], r[0]]), Jf([i[1], r[1]])];
            return {values: o, xyMinMax: o}
        }, polygon: function (t, e, n) {
            var i = [[1 / 0, -1 / 0], [1 / 0, -1 / 0]];
            return {
                values: f(n, function (n) {
                    var r = e[cI[t]](n);
                    return i[0][0] = Math.min(i[0][0], r[0]), i[1][0] = Math.min(i[1][0], r[1]), i[0][1] = Math.max(i[0][1], r[0]), i[1][1] = Math.max(i[1][1], r[1]), r
                }), xyMinMax: i
            }
        }
    }, yI = {
        lineX: uI(np, 0), lineY: uI(np, 1), rect: function (t, e, n) {
            return [[t[0][0] - n[0] * e[0][0], t[0][1] - n[0] * e[0][1]], [t[1][0] - n[1] * e[1][0], t[1][1] - n[1] * e[1][1]]]
        }, polygon: function (t, e, n) {
            return f(t, function (t, i) {
                return [t[0] - n[0] * e[i][0], t[1] - n[1] * e[i][1]]
            })
        }
    }, xI = d, _I = "\0_ec_hist_store";
    mM.extend({type: "dataZoom.select"}), vM.extend({type: "dataZoom.select"});
    var wI = c_.toolbox.dataZoom, bI = d, SI = "\0_ec_\0toolbox-dataZoom_";
    up.defaultOption = {
        show: !0,
        icon: {
            zoom: "M0,13.5h26.9 M13.5,26.9V0 M32.1,13.5H58V58H13.5 V32.1",
            back: "M22,1.4L9.9,13.5l12.3,12.3 M10.3,13.5H54.9v44.6 H10.3v-26"
        },
        title: n(wI.title)
    };
    var MI = up.prototype;
    MI.render = function (t, e, n, i) {
        this.model = t, this.ecModel = e, this.api = n, fp(t, e, this, i, n), dp(t, e)
    }, MI.onclick = function (t, e, n) {
        II[n].call(this)
    }, MI.remove = function (t, e) {
        this._brushController.unmount()
    }, MI.dispose = function (t, e) {
        this._brushController.dispose()
    };
    var II = {
        zoom: function () {
            var t = !this._isZoomActive;
            this.api.dispatchAction({type: "takeGlobalCursor", key: "dataZoomSelect", dataZoomSelectActive: t})
        }, back: function () {
            this._dispatchZoomAction(ap(this.ecModel))
        }
    };
    MI._onBrush = function (t, e) {
        function n(t, e, n) {
            var a = e.getAxis(t), s = a.model, l = i(t, s, o), h = l.findRepresentativeAxisProxy(s).getMinMaxSpan();
            null == h.minValueSpan && null == h.maxValueSpan || (n = yM(0, n.slice(), a.scale.getExtent(), 0, h.minValueSpan, h.maxValueSpan)), l && (r[l.id] = {
                dataZoomId: l.id,
                startValue: n[0],
                endValue: n[1]
            })
        }

        function i(t, e, n) {
            var i;
            return n.eachComponent({mainType: "dataZoom", subType: "select"}, function (n) {
                n.getAxisModel(t, e.componentIndex) && (i = n)
            }), i
        }

        if (e.isEnd && t.length) {
            var r = {}, o = this.ecModel;
            this._brushController.updateCovers([]), new Qf(cp(this.model.option), o, {include: ["grid"]}).matchOutputRanges(t, o, function (t, e, i) {
                if ("cartesian2d" === i.type) {
                    var r = t.brushType;
                    "rect" === r ? (n("x", i, e[0]), n("y", i, e[1])) : n({lineX: "x", lineY: "y"}[r], i, e)
                }
            }), op(o, r), this._dispatchZoomAction(r)
        }
    }, MI._dispatchZoomAction = function (t) {
        var e = [];
        bI(t, function (t, i) {
            e.push(n(t))
        }), e.length && this.api.dispatchAction({type: "dataZoom", from: this.uid, batch: e})
    }, qd("dataZoom", up), _s(function (t) {
        function e(t, e) {
            if (e) {
                var r = t + "Index", o = e[r];
                null == o || "all" === o || y(o) || (o = !1 === o || "none" === o ? [] : [o]), n(t, function (e, n) {
                    if (null == o || "all" === o || -1 !== l(o, n)) {
                        var a = {type: "select", $fromToolbox: !0, id: SI + t + n};
                        a[r] = n, i.push(a)
                    }
                })
            }
        }

        function n(e, n) {
            var i = t[e];
            y(i) || (i = i ? [i] : []), bI(i, n)
        }

        if (t) {
            var i = t.dataZoom || (t.dataZoom = []);
            y(i) || (t.dataZoom = i = [i]);
            var r = t.toolbox;
            if (r && (y(r) && (r = r[0]), r && r.feature)) {
                var o = r.feature.dataZoom;
                e("xAxis", o), e("yAxis", o)
            }
        }
    });
    var TI = c_.toolbox.restore;
    pp.defaultOption = {
        show: !0,
        icon: "M3.8,33.4 M47,18.9h9.8V8.7 M56.3,20.1 C52.1,9,40.5,0.6,26.8,2.1C12.6,3.7,1.6,16.2,2.1,30.6 M13,41.1H3.1v10.2 M3.7,39.9c4.2,11.1,15.8,19.5,29.5,18 c14.2-1.6,25.2-14.1,24.7-28.5",
        title: TI.title
    }, pp.prototype.onclick = function (t, e, n) {
        sp(t), e.dispatchAction({type: "restore", from: this.uid})
    }, qd("restore", pp), bs({type: "restore", event: "restore", update: "prepareAndUpdate"}, function (t, e) {
        e.resetOption("recreate")
    });
    var AI, CI = "urn:schemas-microsoft-com:vml", DI = "undefined" == typeof window ? null : window, kI = !1,
        PI = DI && DI.document;
    if (PI && !Kp.canvasSupported) try {
        !PI.namespaces.zrvml && PI.namespaces.add("zrvml", CI), AI = function (t) {
            return PI.createElement("<zrvml:" + t + ' class="zrvml">')
        }
    } catch (t) {
        AI = function (t) {
            return PI.createElement("<" + t + ' xmlns="' + CI + '" class="zrvml">')
        }
    }
    var LI = Hv.CMD, OI = Math.round, zI = Math.sqrt, EI = Math.abs, NI = Math.cos, RI = Math.sin, BI = Math.max;
    if (!Kp.canvasSupported) {
        var FI = 21600, VI = FI / 2, HI = function (t) {
            t.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;", t.coordsize = FI + "," + FI, t.coordorigin = "0,0"
        }, WI = function (t) {
            return String(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;")
        }, GI = function (t, e, n) {
            return "rgb(" + [t, e, n].join(",") + ")"
        }, ZI = function (t, e) {
            e && t && e.parentNode !== t && t.appendChild(e)
        }, UI = function (t, e) {
            e && t && e.parentNode === t && t.removeChild(e)
        }, XI = function (t, e, n) {
            return 1e5 * (parseFloat(t) || 0) + 1e3 * (parseFloat(e) || 0) + n
        }, YI = function (t, e) {
            return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t
        }, jI = function (t, e, n) {
            var i = Nt(e);
            n = +n, isNaN(n) && (n = 1), i && (t.color = GI(i[0], i[1], i[2]), t.opacity = n * i[3])
        }, qI = function (t) {
            var e = Nt(t);
            return [GI(e[0], e[1], e[2]), e[3]]
        }, $I = function (t, e, n) {
            var i = e.fill;
            if (null != i) if (i instanceof Py) {
                var r, o = 0, a = [0, 0], s = 0, l = 1, h = n.getBoundingRect(), u = h.width, c = h.height;
                if ("linear" === i.type) {
                    r = "gradient";
                    var d = n.transform, f = [i.x * u, i.y * c], p = [i.x2 * u, i.y2 * c];
                    d && ($(f, f, d), $(p, p, d));
                    var g = p[0] - f[0], m = p[1] - f[1];
                    (o = 180 * Math.atan2(g, m) / Math.PI) < 0 && (o += 360), o < 1e-6 && (o = 0)
                } else {
                    r = "gradientradial";
                    var f = [i.x * u, i.y * c], d = n.transform, v = n.scale, y = u, x = c;
                    a = [(f[0] - h.x) / y, (f[1] - h.y) / x], d && $(f, f, d), y /= v[0] * FI, x /= v[1] * FI;
                    var _ = BI(y, x);
                    s = 0 / _, l = 2 * i.r / _ - s
                }
                var w = i.colorStops.slice();
                w.sort(function (t, e) {
                    return t.offset - e.offset
                });
                for (var b = w.length, S = [], M = [], I = 0; I < b; I++) {
                    var T = w[I], A = qI(T.color);
                    M.push(T.offset * l + s + " " + A[0]), 0 !== I && I !== b - 1 || S.push(A)
                }
                if (b >= 2) {
                    var C = S[0][0], D = S[1][0], k = S[0][1] * e.opacity, P = S[1][1] * e.opacity;
                    t.type = r, t.method = "none", t.focus = "100%", t.angle = o, t.color = C, t.color2 = D, t.colors = M.join(","), t.opacity = P, t.opacity2 = k
                }
                "radial" === r && (t.focusposition = a.join(","))
            } else jI(t, i, e.opacity)
        }, KI = function (t, e) {
            null != e.lineDash && (t.dashstyle = e.lineDash.join(" ")), null == e.stroke || e.stroke instanceof Py || jI(t, e.stroke, e.opacity)
        }, QI = function (t, e, n, i) {
            var r = "fill" === e, o = t.getElementsByTagName(e)[0];
            null != n[e] && "none" !== n[e] && (r || !r && n.lineWidth) ? (t[r ? "filled" : "stroked"] = "true", n[e] instanceof Py && UI(t, o), o || (o = gp(e)), r ? $I(o, n, i) : KI(o, n), ZI(t, o)) : (t[r ? "filled" : "stroked"] = "false", UI(t, o))
        }, JI = [[], [], []], tT = function (t, e) {
            var n, i, r, o, a, s, l = LI.M, h = LI.C, u = LI.L, c = LI.A, d = LI.Q, f = [], p = t.data, g = t.len();
            for (o = 0; o < g;) {
                switch (r = p[o++], i = "", n = 0, r) {
                    case l:
                        i = " m ", n = 1, a = p[o++], s = p[o++], JI[0][0] = a, JI[0][1] = s;
                        break;
                    case u:
                        i = " l ", n = 1, a = p[o++], s = p[o++], JI[0][0] = a, JI[0][1] = s;
                        break;
                    case d:
                    case h:
                        i = " c ", n = 3;
                        var m, v, y = p[o++], x = p[o++], _ = p[o++], w = p[o++];
                        r === d ? (m = _, v = w, _ = (_ + 2 * y) / 3, w = (w + 2 * x) / 3, y = (a + 2 * y) / 3, x = (s + 2 * x) / 3) : (m = p[o++], v = p[o++]), JI[0][0] = y, JI[0][1] = x, JI[1][0] = _, JI[1][1] = w, JI[2][0] = m, JI[2][1] = v, a = m, s = v;
                        break;
                    case c:
                        var b = 0, S = 0, M = 1, I = 1, T = 0;
                        e && (b = e[4], S = e[5], M = zI(e[0] * e[0] + e[1] * e[1]), I = zI(e[2] * e[2] + e[3] * e[3]), T = Math.atan2(-e[1] / I, e[0] / M));
                        var A = p[o++], C = p[o++], D = p[o++], k = p[o++], P = p[o++] + T, L = p[o++] + P + T;
                        o++;
                        var O = p[o++], z = A + NI(P) * D, E = C + RI(P) * k, y = A + NI(L) * D, x = C + RI(L) * k,
                            N = O ? " wa " : " at ";
                        Math.abs(z - y) < 1e-4 && (Math.abs(L - P) > .01 ? O && (z += .0125) : Math.abs(E - C) < 1e-4 ? O && z < A || !O && z > A ? x -= .0125 : x += .0125 : O && E < C || !O && E > C ? y += .0125 : y -= .0125), f.push(N, OI(((A - D) * M + b) * FI - VI), ",", OI(((C - k) * I + S) * FI - VI), ",", OI(((A + D) * M + b) * FI - VI), ",", OI(((C + k) * I + S) * FI - VI), ",", OI((z * M + b) * FI - VI), ",", OI((E * I + S) * FI - VI), ",", OI((y * M + b) * FI - VI), ",", OI((x * I + S) * FI - VI)), a = y, s = x;
                        break;
                    case LI.R:
                        var R = JI[0], B = JI[1];
                        R[0] = p[o++], R[1] = p[o++], B[0] = R[0] + p[o++], B[1] = R[1] + p[o++], e && ($(R, R, e), $(B, B, e)), R[0] = OI(R[0] * FI - VI), B[0] = OI(B[0] * FI - VI), R[1] = OI(R[1] * FI - VI), B[1] = OI(B[1] * FI - VI), f.push(" m ", R[0], ",", R[1], " l ", B[0], ",", R[1], " l ", B[0], ",", B[1], " l ", R[0], ",", B[1]);
                        break;
                    case LI.Z:
                        f.push(" x ")
                }
                if (n > 0) {
                    f.push(i);
                    for (var F = 0; F < n; F++) {
                        var V = JI[F];
                        e && $(V, V, e), f.push(OI(V[0] * FI - VI), ",", OI(V[1] * FI - VI), F < n - 1 ? "," : "")
                    }
                }
            }
            return f.join("")
        };
        Ii.prototype.brushVML = function (t) {
            var e = this.style, n = this._vmlEl;
            n || (n = gp("shape"), HI(n), this._vmlEl = n), QI(n, "fill", e, this), QI(n, "stroke", e, this);
            var i = this.transform, r = null != i, o = n.getElementsByTagName("stroke")[0];
            if (o) {
                var a = e.lineWidth;
                if (r && !e.strokeNoScale) {
                    var s = i[0] * i[3] - i[1] * i[2];
                    a *= zI(EI(s))
                }
                o.weight = a + "px"
            }
            var l = this.path || (this.path = new Hv);
            this.__dirtyPath && (l.beginPath(), l.subPixelOptimize = !1, this.buildPath(l, this.shape), l.toStatic(), this.__dirtyPath = !1), n.path = tT(l, this.transform), n.style.zIndex = XI(this.zlevel, this.z, this.z2), ZI(t, n), null != e.text ? this.drawRectText(t, this.getBoundingRect()) : this.removeRectText(t)
        }, Ii.prototype.onRemove = function (t) {
            UI(t, this._vmlEl), this.removeRectText(t)
        }, Ii.prototype.onAdd = function (t) {
            ZI(t, this._vmlEl), this.appendRectText(t)
        };
        var eT = function (t) {
            return "object" == typeof t && t.tagName && "IMG" === t.tagName.toUpperCase()
        };
        hn.prototype.brushVML = function (t) {
            var e, n, i = this.style, r = i.image;
            if (eT(r)) {
                var o = r.src;
                if (o === this._imageSrc) e = this._imageWidth, n = this._imageHeight; else {
                    var a = r.runtimeStyle, s = a.width, l = a.height;
                    a.width = "auto", a.height = "auto", e = r.width, n = r.height, a.width = s, a.height = l, this._imageSrc = o, this._imageWidth = e, this._imageHeight = n
                }
                r = o
            } else r === this._imageSrc && (e = this._imageWidth, n = this._imageHeight);
            if (r) {
                var h = i.x || 0, u = i.y || 0, c = i.width, d = i.height, f = i.sWidth, p = i.sHeight, g = i.sx || 0,
                    m = i.sy || 0, v = f && p, y = this._vmlEl;
                y || (y = PI.createElement("div"), HI(y), this._vmlEl = y);
                var x, _ = y.style, w = !1, b = 1, S = 1;
                if (this.transform && (x = this.transform, b = zI(x[0] * x[0] + x[1] * x[1]), S = zI(x[2] * x[2] + x[3] * x[3]), w = x[1] || x[2]), w) {
                    var M = [h, u], I = [h + c, u], T = [h, u + d], A = [h + c, u + d];
                    $(M, M, x), $(I, I, x), $(T, T, x), $(A, A, x);
                    var C = BI(M[0], I[0], T[0], A[0]), D = BI(M[1], I[1], T[1], A[1]), k = [];
                    k.push("M11=", x[0] / b, ",", "M12=", x[2] / S, ",", "M21=", x[1] / b, ",", "M22=", x[3] / S, ",", "Dx=", OI(h * b + x[4]), ",", "Dy=", OI(u * S + x[5])), _.padding = "0 " + OI(C) + "px " + OI(D) + "px 0", _.filter = "progid:DXImageTransform.Microsoft.Matrix(" + k.join("") + ", SizingMethod=clip)"
                } else x && (h = h * b + x[4], u = u * S + x[5]), _.filter = "", _.left = OI(h) + "px", _.top = OI(u) + "px";
                var P = this._imageEl, L = this._cropEl;
                P || (P = PI.createElement("div"), this._imageEl = P);
                var O = P.style;
                if (v) {
                    if (e && n) O.width = OI(b * e * c / f) + "px", O.height = OI(S * n * d / p) + "px"; else {
                        var z = new Image, E = this;
                        z.onload = function () {
                            z.onload = null, e = z.width, n = z.height, O.width = OI(b * e * c / f) + "px", O.height = OI(S * n * d / p) + "px", E._imageWidth = e, E._imageHeight = n, E._imageSrc = r
                        }, z.src = r
                    }
                    L || ((L = PI.createElement("div")).style.overflow = "hidden", this._cropEl = L);
                    var N = L.style;
                    N.width = OI((c + g * c / f) * b), N.height = OI((d + m * d / p) * S), N.filter = "progid:DXImageTransform.Microsoft.Matrix(Dx=" + -g * c / f * b + ",Dy=" + -m * d / p * S + ")", L.parentNode || y.appendChild(L), P.parentNode !== L && L.appendChild(P)
                } else O.width = OI(b * c) + "px", O.height = OI(S * d) + "px", y.appendChild(P), L && L.parentNode && (y.removeChild(L), this._cropEl = null);
                var R = "", B = i.opacity;
                B < 1 && (R += ".Alpha(opacity=" + OI(100 * B) + ") "), R += "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + r + ", SizingMethod=scale)", O.filter = R, y.style.zIndex = XI(this.zlevel, this.z, this.z2), ZI(t, y), null != i.text && this.drawRectText(t, this.getBoundingRect())
            }
        }, hn.prototype.onRemove = function (t) {
            UI(t, this._vmlEl), this._vmlEl = null, this._cropEl = null, this._imageEl = null, this.removeRectText(t)
        }, hn.prototype.onAdd = function (t) {
            ZI(t, this._vmlEl), this.appendRectText(t)
        };
        var nT, iT = {}, rT = 0, oT = document.createElement("div"), aT = function (t) {
            var e = iT[t];
            if (!e) {
                rT > 100 && (rT = 0, iT = {});
                var n, i = oT.style;
                try {
                    i.font = t, n = i.fontFamily.split(",")[0]
                } catch (t) {
                }
                e = {
                    style: i.fontStyle || "normal",
                    variant: i.fontVariant || "normal",
                    weight: i.fontWeight || "normal",
                    size: 0 | parseFloat(i.fontSize || 12),
                    family: n || "Microsoft YaHei"
                }, iT[t] = e, rT++
            }
            return e
        };
        !function (t, e) {
            Cm[t] = e
        }("measureText", function (t, e) {
            var n = PI;
            nT || ((nT = n.createElement("div")).style.cssText = "position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;", PI.body.appendChild(nT));
            try {
                nT.style.font = e
            } catch (t) {
            }
            return nT.innerHTML = "", nT.appendChild(n.createTextNode(t)), {width: nT.offsetWidth}
        });
        for (var sT = new se, lT = [zm, ln, hn, Ii, dy], hT = 0; hT < lT.length; hT++) {
            var uT = lT[hT].prototype;
            uT.drawRectText = function (t, e, n, i) {
                var r = this.style;
                this.__dirty && Ge(r);
                var o = r.text;
                if (null != o && (o += ""), o) {
                    if (r.rich) {
                        var a = Fe(o, r);
                        o = [];
                        for (var s = 0; s < a.lines.length; s++) {
                            for (var l = a.lines[s].tokens, h = [], u = 0; u < l.length; u++) h.push(l[u].text);
                            o.push(h.join(""))
                        }
                        o = o.join("\n")
                    }
                    var c, d, f = r.textAlign, p = r.textVerticalAlign, g = aT(r.font),
                        m = g.style + " " + g.variant + " " + g.weight + " " + g.size + 'px "' + g.family + '"';
                    n = n || Te(o, m, f, p, r.textPadding, r.textLineHeight);
                    var v = this.transform;
                    if (v && !i && (sT.copy(e), sT.applyTransform(v), e = sT), i) c = e.x, d = e.y; else {
                        var y = r.textPosition, x = r.textDistance;
                        if (y instanceof Array) c = e.x + YI(y[0], e.width), d = e.y + YI(y[1], e.height), f = f || "left"; else {
                            var _ = Pe(y, e, x);
                            c = _.x, d = _.y, f = f || _.textAlign, p = p || _.textVerticalAlign
                        }
                    }
                    c = De(c, n.width, f), d = ke(d, n.height, p), d += n.height / 2;
                    var w, b, S, M = gp, I = this._textVmlEl;
                    I ? b = (w = (S = I.firstChild).nextSibling).nextSibling : (I = M("line"), w = M("path"), b = M("textpath"), S = M("skew"), b.style["v-text-align"] = "left", HI(I), w.textpathok = !0, b.on = !0, I.from = "0 0", I.to = "1000 0.05", ZI(I, S), ZI(I, w), ZI(I, b), this._textVmlEl = I);
                    var T = [c, d], A = I.style;
                    v && i ? ($(T, T, v), S.on = !0, S.matrix = v[0].toFixed(3) + "," + v[2].toFixed(3) + "," + v[1].toFixed(3) + "," + v[3].toFixed(3) + ",0,0", S.offset = (OI(T[0]) || 0) + "," + (OI(T[1]) || 0), S.origin = "0 0", A.left = "0px", A.top = "0px") : (S.on = !1, A.left = OI(c) + "px", A.top = OI(d) + "px"), b.string = WI(o);
                    try {
                        b.style.font = m
                    } catch (t) {
                    }
                    QI(I, "fill", {fill: r.textFill, opacity: r.opacity}, this), QI(I, "stroke", {
                        stroke: r.textStroke,
                        opacity: r.opacity,
                        lineDash: r.lineDash
                    }, this), I.style.zIndex = XI(this.zlevel, this.z, this.z2), ZI(t, I)
                }
            }, uT.removeRectText = function (t) {
                UI(t, this._textVmlEl), this._textVmlEl = null
            }, uT.appendRectText = function (t) {
                ZI(t, this._textVmlEl)
            }
        }
        dy.prototype.brushVML = function (t) {
            var e = this.style;
            null != e.text ? this.drawRectText(t, {
                x: e.x || 0,
                y: e.y || 0,
                width: 0,
                height: 0
            }, this.getBoundingRect(), !0) : this.removeRectText(t)
        }, dy.prototype.onRemove = function (t) {
            this.removeRectText(t)
        }, dy.prototype.onAdd = function (t) {
            this.appendRectText(t)
        }
    }
    yp.prototype = {
        constructor: yp, getType: function () {
            return "vml"
        }, getViewportRoot: function () {
            return this._vmlViewport
        }, getViewportRootOffset: function () {
            var t = this.getViewportRoot();
            if (t) return {offsetLeft: t.offsetLeft || 0, offsetTop: t.offsetTop || 0}
        }, refresh: function () {
            var t = this.storage.getDisplayList(!0, !0);
            this._paintList(t)
        }, _paintList: function (t) {
            for (var e = this._vmlRoot, n = 0; n < t.length; n++) {
                var i = t[n];
                i.invisible || i.ignore ? (i.__alreadyNotVisible || i.onRemove(e), i.__alreadyNotVisible = !0) : (i.__alreadyNotVisible && i.onAdd(e), i.__alreadyNotVisible = !1, i.__dirty && (i.beforeBrush && i.beforeBrush(), (i.brushVML || i.brush).call(i, e), i.afterBrush && i.afterBrush())), i.__dirty = !1
            }
            this._firstPaint && (this._vmlViewport.appendChild(e), this._firstPaint = !1)
        }, resize: function (t, e) {
            var t = null == t ? this._getWidth() : t, e = null == e ? this._getHeight() : e;
            if (this._width !== t || this._height !== e) {
                this._width = t, this._height = e;
                var n = this._vmlViewport.style;
                n.width = t + "px", n.height = e + "px"
            }
        }, dispose: function () {
            this.root.innerHTML = "", this._vmlRoot = this._vmlViewport = this.storage = null
        }, getWidth: function () {
            return this._width
        }, getHeight: function () {
            return this._height
        }, clear: function () {
            this._vmlViewport && this.root.removeChild(this._vmlViewport)
        }, _getWidth: function () {
            var t = this.root, e = t.currentStyle;
            return (t.clientWidth || vp(e.width)) - vp(e.paddingLeft) - vp(e.paddingRight) | 0
        }, _getHeight: function () {
            var t = this.root, e = t.currentStyle;
            return (t.clientHeight || vp(e.height)) - vp(e.paddingTop) - vp(e.paddingBottom) | 0
        }
    }, d(["getLayer", "insertLayer", "eachLayer", "eachBuiltinLayer", "eachOtherLayer", "getLayers", "modLayer", "delLayer", "clearLayer", "toDataURL", "pathToImage"], function (t) {
        yp.prototype[t] = xp(t)
    }), bn("vml", yp);
    var cT = "http://www.w3.org/2000/svg", dT = Hv.CMD, fT = Array.prototype.join, pT = "none", gT = Math.round,
        mT = Math.sin, vT = Math.cos, yT = Math.PI, xT = 2 * Math.PI, _T = 180 / yT, wT = 1e-4, bT = {};
    bT.brush = function (t) {
        var e = t.style, n = t.__svgEl;
        n || (n = _p("path"), t.__svgEl = n), t.path || t.createPathProxy();
        var i = t.path;
        if (t.__dirtyPath) {
            i.beginPath(), i.subPixelOptimize = !1, t.buildPath(i, t.shape), t.__dirtyPath = !1;
            var r = Dp(i);
            r.indexOf("NaN") < 0 && Tp(n, "d", r)
        }
        Cp(n, e, !1, t), Ip(n, t.transform), null != e.text && TT(t, t.getBoundingRect())
    };
    var ST = {};
    ST.brush = function (t) {
        var e = t.style, n = e.image;
        if (n instanceof HTMLImageElement && (n = n.src), n) {
            var i = e.x || 0, r = e.y || 0, o = e.width, a = e.height, s = t.__svgEl;
            s || (s = _p("image"), t.__svgEl = s), n !== t.__imageSrc && (Ap(s, "href", n), t.__imageSrc = n), Tp(s, "width", o), Tp(s, "height", a), Tp(s, "x", i), Tp(s, "y", r), Ip(s, t.transform), null != e.text && TT(t, t.getBoundingRect())
        }
    };
    var MT = {}, IT = new se, TT = function (t, e, n) {
        var i = t.style;
        t.__dirty && Ge(i);
        var r = i.text;
        if (null != r) {
            r += "";
            var o = t.__textSvgEl;
            o || (o = _p("text"), t.__textSvgEl = o);
            var a, s, l = i.textPosition, h = i.textDistance, u = i.textAlign || "left";
            "number" == typeof i.fontSize && (i.fontSize += "px");
            var c = i.font || [i.fontStyle || "", i.fontWeight || "", i.fontSize || "", i.fontFamily || ""].join(" ") || Am,
                d = kp(i.textVerticalAlign), f = (n = Te(r, c, u, d, i.textPadding, i.textLineHeight)).lineHeight;
            if (l instanceof Array) a = e.x + l[0], s = e.y + l[1]; else {
                var p = Pe(l, e, h);
                a = p.x, s = p.y, d = kp(p.textVerticalAlign), u = p.textAlign
            }
            Tp(o, "alignment-baseline", d), c && (o.style.font = c);
            var g = i.textPadding;
            if (Tp(o, "x", a), Tp(o, "y", s), Cp(o, i, !0, t), t instanceof dy || t.style.transformText) Ip(o, t.transform); else {
                if (t.transform) IT.copy(e), IT.applyTransform(t.transform), e = IT; else {
                    var m = t.transformCoordToGlobal(e.x, e.y);
                    e.x = m[0], e.y = m[1], t.transform = vt(mt())
                }
                var v = i.textOrigin;
                "center" === v ? (a = n.width / 2 + a, s = n.height / 2 + s) : v && (a = v[0] + a, s = v[1] + s);
                var y = -i.textRotation || 0, x = mt();
                wt(x, x, y), _t(x, x, m = [t.transform[4], t.transform[5]]), Ip(o, x)
            }
            var _ = r.split("\n"), w = _.length, b = u;
            "left" === b ? (b = "start", g && (a += g[3])) : "right" === b ? (b = "end", g && (a -= g[1])) : "center" === b && (b = "middle", g && (a += (g[3] - g[1]) / 2));
            var S = 0;
            if ("after-edge" === d ? (S = -n.height + f, g && (S -= g[2])) : "middle" === d ? (S = (-n.height + f) / 2, g && (s += (g[0] - g[2]) / 2)) : g && (S += g[0]), t.__text !== r || t.__textFont !== c) {
                var M = t.__tspanList || [];
                t.__tspanList = M;
                for (T = 0; T < w; T++) (A = M[T]) ? A.innerHTML = "" : (A = M[T] = _p("tspan"), o.appendChild(A), Tp(A, "alignment-baseline", d), Tp(A, "text-anchor", b)), Tp(A, "x", a), Tp(A, "y", s + T * f + S), A.appendChild(document.createTextNode(_[T]));
                for (; T < M.length; T++) o.removeChild(M[T]);
                M.length = w, t.__text = r, t.__textFont = c
            } else if (t.__tspanList.length) for (var I = t.__tspanList.length, T = 0; T < I; ++T) {
                var A = t.__tspanList[T];
                A && (Tp(A, "x", a), Tp(A, "y", s + T * f + S))
            }
        }
    };
    MT.drawRectText = TT, MT.brush = function (t) {
        var e = t.style;
        null != e.text && (e.textPosition = [0, 0], TT(t, {
            x: e.x || 0,
            y: e.y || 0,
            width: 0,
            height: 0
        }, t.getBoundingRect()))
    }, Pp.prototype = {
        diff: function (t, e, n) {
            n || (n = function (t, e) {
                return t === e
            }), this.equals = n;
            var i = this;
            t = t.slice();
            var r = (e = e.slice()).length, o = t.length, a = 1, s = r + o, l = [{newPos: -1, components: []}],
                h = this.extractCommon(l[0], e, t, 0);
            if (l[0].newPos + 1 >= r && h + 1 >= o) {
                for (var u = [], c = 0; c < e.length; c++) u.push(c);
                return [{indices: u, count: e.length}]
            }
            for (; a <= s;) {
                var d = function () {
                    for (var n = -1 * a; n <= a; n += 2) {
                        var s, h = l[n - 1], u = l[n + 1], c = (u ? u.newPos : 0) - n;
                        h && (l[n - 1] = void 0);
                        var d = h && h.newPos + 1 < r, f = u && 0 <= c && c < o;
                        if (d || f) {
                            if (!d || f && h.newPos < u.newPos ? (s = Op(u), i.pushComponent(s.components, void 0, !0)) : ((s = h).newPos++, i.pushComponent(s.components, !0, void 0)), c = i.extractCommon(s, e, t, n), s.newPos + 1 >= r && c + 1 >= o) return Lp(0, s.components);
                            l[n] = s
                        } else l[n] = void 0
                    }
                    a++
                }();
                if (d) return d
            }
        }, pushComponent: function (t, e, n) {
            var i = t[t.length - 1];
            i && i.added === e && i.removed === n ? t[t.length - 1] = {
                count: i.count + 1,
                added: e,
                removed: n
            } : t.push({count: 1, added: e, removed: n})
        }, extractCommon: function (t, e, n, i) {
            for (var r = e.length, o = n.length, a = t.newPos, s = a - i, l = 0; a + 1 < r && s + 1 < o && this.equals(e[a + 1], n[s + 1]);) a++, s++, l++;
            return l && t.components.push({count: l}), t.newPos = a, s
        }, tokenize: function (t) {
            return t.slice()
        }, join: function (t) {
            return t.slice()
        }
    };
    var AT = new Pp, CT = function (t, e, n) {
        return AT.diff(t, e, n)
    };
    zp.prototype.createElement = _p, zp.prototype.getDefs = function (t) {
        var e = this._svgRoot, n = this._svgRoot.getElementsByTagName("defs");
        return 0 === n.length ? t ? ((n = e.insertBefore(this.createElement("defs"), e.firstChild)).contains || (n.contains = function (t) {
            var e = n.children;
            if (!e) return !1;
            for (var i = e.length - 1; i >= 0; --i) if (e[i] === t) return !0;
            return !1
        }), n) : null : n[0]
    }, zp.prototype.update = function (t, e) {
        if (t) {
            var n = this.getDefs(!1);
            if (t[this._domName] && n.contains(t[this._domName])) "function" == typeof e && e(t); else {
                var i = this.add(t);
                i && (t[this._domName] = i)
            }
        }
    }, zp.prototype.addDom = function (t) {
        this.getDefs(!0).appendChild(t)
    }, zp.prototype.removeDom = function (t) {
        var e = this.getDefs(!1);
        e && t[this._domName] && (e.removeChild(t[this._domName]), t[this._domName] = null)
    }, zp.prototype.getDoms = function () {
        var t = this.getDefs(!1);
        if (!t) return [];
        var e = [];
        return d(this._tagNames, function (n) {
            var i = t.getElementsByTagName(n);
            e = e.concat([].slice.call(i))
        }), e
    }, zp.prototype.markAllUnused = function () {
        var t = this;
        d(this.getDoms(), function (e) {
            e[t._markLabel] = "0"
        })
    }, zp.prototype.markUsed = function (t) {
        t && (t[this._markLabel] = "1")
    }, zp.prototype.removeUnused = function () {
        var t = this.getDefs(!1);
        if (t) {
            var e = this;
            d(this.getDoms(), function (n) {
                "1" !== n[e._markLabel] && t.removeChild(n)
            })
        }
    }, zp.prototype.getSvgProxy = function (t) {
        return t instanceof Ii ? bT : t instanceof hn ? ST : t instanceof dy ? MT : bT
    }, zp.prototype.getTextSvgElement = function (t) {
        return t.__textSvgEl
    }, zp.prototype.getSvgElement = function (t) {
        return t.__svgEl
    }, h(Ep, zp), Ep.prototype.addWithoutUpdate = function (t, e) {
        if (e && e.style) {
            var n = this;
            d(["fill", "stroke"], function (i) {
                if (e.style[i] && ("linear" === e.style[i].type || "radial" === e.style[i].type)) {
                    var r, o = e.style[i], a = n.getDefs(!0);
                    o._dom ? (r = o._dom, a.contains(o._dom) || n.addDom(r)) : r = n.add(o), n.markUsed(e);
                    var s = r.getAttribute("id");
                    t.setAttribute(i, "url(#" + s + ")")
                }
            })
        }
    }, Ep.prototype.add = function (t) {
        var e;
        if ("linear" === t.type) e = this.createElement("linearGradient"); else {
            if ("radial" !== t.type) return tm("Illegal gradient type."), null;
            e = this.createElement("radialGradient")
        }
        return t.id = t.id || this.nextId++, e.setAttribute("id", "zr" + this._zrId + "-gradient-" + t.id), this.updateDom(t, e), this.addDom(e), e
    }, Ep.prototype.update = function (t) {
        var e = this;
        zp.prototype.update.call(this, t, function () {
            var n = t.type, i = t._dom.tagName;
            "linear" === n && "linearGradient" === i || "radial" === n && "radialGradient" === i ? e.updateDom(t, t._dom) : (e.removeDom(t), e.add(t))
        })
    }, Ep.prototype.updateDom = function (t, e) {
        if ("linear" === t.type) e.setAttribute("x1", t.x), e.setAttribute("y1", t.y), e.setAttribute("x2", t.x2), e.setAttribute("y2", t.y2); else {
            if ("radial" !== t.type) return void tm("Illegal gradient type.");
            e.setAttribute("cx", t.x), e.setAttribute("cy", t.y), e.setAttribute("r", t.r)
        }
        t.global ? e.setAttribute("gradientUnits", "userSpaceOnUse") : e.setAttribute("gradientUnits", "objectBoundingBox"), e.innerHTML = "";
        for (var n = t.colorStops, i = 0, r = n.length; i < r; ++i) {
            var o = this.createElement("stop");
            o.setAttribute("offset", 100 * n[i].offset + "%");
            var a = n[i].color;
            if (a.indexOf(!1)) {
                var s = Nt(a)[3], l = Vt(a);
                o.setAttribute("stop-color", "#" + l), o.setAttribute("stop-opacity", s)
            } else o.setAttribute("stop-color", n[i].color);
            e.appendChild(o)
        }
        t._dom = e
    }, Ep.prototype.markUsed = function (t) {
        if (t.style) {
            var e = t.style.fill;
            e && e._dom && zp.prototype.markUsed.call(this, e._dom), (e = t.style.stroke) && e._dom && zp.prototype.markUsed.call(this, e._dom)
        }
    }, h(Np, zp), Np.prototype.update = function (t) {
        var e = this.getSvgElement(t);
        e && this.updateDom(e, t.__clipPaths, !1);
        var n = this.getTextSvgElement(t);
        n && this.updateDom(n, t.__clipPaths, !0), this.markUsed(t)
    }, Np.prototype.updateDom = function (t, e, n) {
        if (e && e.length > 0) {
            var i, r, o = this.getDefs(!0), a = e[0], s = n ? "_textDom" : "_dom";
            a[s] ? (r = a[s].getAttribute("id"), i = a[s], o.contains(i) || o.appendChild(i)) : (r = "zr" + this._zrId + "-clip-" + this.nextId, ++this.nextId, (i = this.createElement("clipPath")).setAttribute("id", r), o.appendChild(i), a[s] = i);
            var l = this.getSvgProxy(a);
            if (a.transform && a.parent.invTransform && !n) {
                var h = Array.prototype.slice.call(a.transform);
                xt(a.transform, a.parent.invTransform, a.transform), l.brush(a), a.transform = h
            } else l.brush(a);
            var u = this.getSvgElement(a);
            i.innerHTML = "", i.appendChild(u.cloneNode()), t.setAttribute("clip-path", "url(#" + r + ")"), e.length > 1 && this.updateDom(i, e.slice(1), n)
        } else t && t.setAttribute("clip-path", "none")
    }, Np.prototype.markUsed = function (t) {
        var e = this;
        t.__clipPaths && t.__clipPaths.length > 0 && d(t.__clipPaths, function (t) {
            t._dom && zp.prototype.markUsed.call(e, t._dom), t._textDom && zp.prototype.markUsed.call(e, t._textDom)
        })
    }, h(Rp, zp), Rp.prototype.addWithoutUpdate = function (t, e) {
        if (e && Bp(e.style)) {
            var n, i = e.style;
            i._shadowDom ? (n = i._shadowDom, this.getDefs(!0).contains(i._shadowDom) || this.addDom(n)) : n = this.add(e), this.markUsed(e);
            var r = n.getAttribute("id");
            t.style.filter = "url(#" + r + ")"
        }
    }, Rp.prototype.add = function (t) {
        var e = this.createElement("filter"), n = t.style;
        return n._shadowDomId = n._shadowDomId || this.nextId++, e.setAttribute("id", "zr" + this._zrId + "-shadow-" + n._shadowDomId), this.updateDom(t, e), this.addDom(e), e
    }, Rp.prototype.update = function (t, e) {
        var n = e.style;
        if (Bp(n)) {
            var i = this;
            zp.prototype.update.call(this, e, function (t) {
                i.updateDom(e, t._shadowDom)
            })
        } else this.remove(t, n)
    }, Rp.prototype.remove = function (t, e) {
        null != e._shadowDomId && (this.removeDom(e), t.style.filter = "")
    }, Rp.prototype.updateDom = function (t, e) {
        var n = e.getElementsByTagName("feDropShadow");
        n = 0 === n.length ? this.createElement("feDropShadow") : n[0];
        var i, r, o, a, s = t.style, l = t.scale ? t.scale[0] || 1 : 1, h = t.scale ? t.scale[1] || 1 : 1;
        if (s.shadowBlur || s.shadowOffsetX || s.shadowOffsetY) i = s.shadowOffsetX || 0, r = s.shadowOffsetY || 0, o = s.shadowBlur, a = s.shadowColor; else {
            if (!s.textShadowBlur) return void this.removeDom(e, s);
            i = s.textShadowOffsetX || 0, r = s.textShadowOffsetY || 0, o = s.textShadowBlur, a = s.textShadowColor
        }
        n.setAttribute("dx", i / l), n.setAttribute("dy", r / h), n.setAttribute("flood-color", a);
        var u = o / 2 / l + " " + o / 2 / h;
        n.setAttribute("stdDeviation", u), e.setAttribute("x", "-100%"), e.setAttribute("y", "-100%"), e.setAttribute("width", Math.ceil(o / 2 * 200) + "%"), e.setAttribute("height", Math.ceil(o / 2 * 200) + "%"), e.appendChild(n), s._shadowDom = e
    }, Rp.prototype.markUsed = function (t) {
        var e = t.style;
        e && e._shadowDom && zp.prototype.markUsed.call(this, e._shadowDom)
    };
    var DT = function (t, e, n, i) {
        this.root = t, this.storage = e, this._opts = n = o({}, n || {});
        var r = _p("svg");
        r.setAttribute("xmlns", "http://www.w3.org/2000/svg"), r.setAttribute("version", "1.1"), r.setAttribute("baseProfile", "full"), r.style.cssText = "user-select:none;position:absolute;left:0;top:0;", this.gradientManager = new Ep(i, r), this.clipPathManager = new Np(i, r), this.shadowManager = new Rp(i, r);
        var a = document.createElement("div");
        a.style.cssText = "overflow:hidden;position:relative", this._svgRoot = r, this._viewport = a, t.appendChild(a), a.appendChild(r), this.resize(n.width, n.height), this._visibleList = []
    };
    DT.prototype = {
        constructor: DT, getType: function () {
            return "svg"
        }, getViewportRoot: function () {
            return this._viewport
        }, getViewportRootOffset: function () {
            var t = this.getViewportRoot();
            if (t) return {offsetLeft: t.offsetLeft || 0, offsetTop: t.offsetTop || 0}
        }, refresh: function () {
            var t = this.storage.getDisplayList(!0);
            this._paintList(t)
        }, setBackgroundColor: function (t) {
            this._viewport.style.background = t
        }, _paintList: function (t) {
            this.gradientManager.markAllUnused(), this.clipPathManager.markAllUnused(), this.shadowManager.markAllUnused();
            var e, n = this._svgRoot, i = this._visibleList, r = t.length, o = [];
            for (e = 0; e < r; e++) {
                var a = Vp(f = t[e]), s = Xp(f) || Up(f);
                f.invisible || (f.__dirty && (a && a.brush(f), this.clipPathManager.update(f), f.style && (this.gradientManager.update(f.style.fill), this.gradientManager.update(f.style.stroke), this.shadowManager.update(s, f)), f.__dirty = !1), o.push(f))
            }
            var l, h = CT(i, o);
            for (e = 0; e < h.length; e++) if ((c = h[e]).removed) for (d = 0; d < c.count; d++) {
                var s = Xp(f = i[c.indices[d]]), u = Up(f);
                Zp(n, s), Zp(n, u)
            }
            for (e = 0; e < h.length; e++) {
                var c = h[e];
                if (c.added) for (d = 0; d < c.count; d++) {
                    var s = Xp(f = o[c.indices[d]]), u = Up(f);
                    l ? Wp(n, s, l) : Gp(n, s), s ? Wp(n, u, s) : l ? Wp(n, u, l) : Gp(n, u), Wp(n, u, s), l = u || s || l, this.gradientManager.addWithoutUpdate(s, f), this.shadowManager.addWithoutUpdate(l, f), this.clipPathManager.markUsed(f)
                } else if (!c.removed) for (var d = 0; d < c.count; d++) {
                    var f = o[c.indices[d]];
                    l = s = Up(f) || Xp(f) || l, this.gradientManager.markUsed(f), this.gradientManager.addWithoutUpdate(s, f), this.shadowManager.markUsed(f), this.shadowManager.addWithoutUpdate(s, f), this.clipPathManager.markUsed(f)
                }
            }
            this.gradientManager.removeUnused(), this.clipPathManager.removeUnused(), this.shadowManager.removeUnused(), this._visibleList = o
        }, _getDefs: function (t) {
            var e = this._svgRoot, n = this._svgRoot.getElementsByTagName("defs");
            return 0 === n.length ? t ? ((n = e.insertBefore(_p("defs"), e.firstChild)).contains || (n.contains = function (t) {
                var e = n.children;
                if (!e) return !1;
                for (var i = e.length - 1; i >= 0; --i) if (e[i] === t) return !0;
                return !1
            }), n) : null : n[0]
        }, resize: function (t, e) {
            var n = this._viewport;
            n.style.display = "none";
            var i = this._opts;
            if (null != t && (i.width = t), null != e && (i.height = e), t = this._getSize(0), e = this._getSize(1), n.style.display = "", this._width !== t || this._height !== e) {
                this._width = t, this._height = e;
                var r = n.style;
                r.width = t + "px", r.height = e + "px";
                var o = this._svgRoot;
                o.setAttribute("width", t), o.setAttribute("height", e)
            }
        }, getWidth: function () {
            return this._width
        }, getHeight: function () {
            return this._height
        }, _getSize: function (t) {
            var e = this._opts, n = ["width", "height"][t], i = ["clientWidth", "clientHeight"][t],
                r = ["paddingLeft", "paddingTop"][t], o = ["paddingRight", "paddingBottom"][t];
            if (null != e[n] && "auto" !== e[n]) return parseFloat(e[n]);
            var a = this.root, s = document.defaultView.getComputedStyle(a);
            return (a[i] || Fp(s[n]) || Fp(a.style[n])) - (Fp(s[r]) || 0) - (Fp(s[o]) || 0) | 0
        }, dispose: function () {
            this.root.innerHTML = "", this._svgRoot = this._viewport = this.storage = null
        }, clear: function () {
            this._viewport && this.root.removeChild(this._viewport)
        }, pathToDataUrl: function () {
            return this.refresh(), "data:image/svg+xml;charset=UTF-8," + this._svgRoot.outerHTML
        }
    }, d(["getLayer", "insertLayer", "eachLayer", "eachBuiltinLayer", "eachOtherLayer", "getLayers", "modLayer", "delLayer", "clearLayer", "toDataURL", "pathToImage"], function (t) {
        DT.prototype[t] = Yp(t)
    }), bn("svg", DT), t.version = "4.2.1", t.dependencies = V_, t.PRIORITY = Z_, t.init = function (t, e, n) {
        var i = ys(t);
        if (i) return i;
        var r = new $a(t, e, n);
        return r.id = "ec_" + sw++, ow[r.id] = r, Nn(t, hw, r.id), ms(r), r
    }, t.connect = function (t) {
        if (y(t)) {
            var e = t;
            t = null, N_(e, function (e) {
                null != e.group && (t = e.group)
            }), t = t || "g_" + lw++, N_(e, function (e) {
                e.group = t
            })
        }
        return aw[t] = !0, t
    }, t.disConnect = vs, t.disconnect = uw, t.dispose = function (t) {
        "string" == typeof t ? t = ow[t] : t instanceof $a || (t = ys(t)), t instanceof $a && !t.isDisposed() && t.dispose()
    }, t.getInstanceByDom = ys, t.getInstanceById = function (t) {
        return ow[t]
    }, t.registerTheme = xs, t.registerPreprocessor = _s, t.registerProcessor = ws, t.registerPostUpdate = function (t) {
        ew.push(t)
    }, t.registerAction = bs, t.registerCoordinateSystem = function (t, e) {
        Do.register(t, e)
    }, t.getCoordinateSystemDimensions = function (t) {
        var e = Do.get(t);
        if (e) return e.getDimensionsInfo ? e.getDimensionsInfo() : e.dimensions.slice()
    }, t.registerLayout = Ss, t.registerVisual = Ms, t.registerLoading = Ts, t.extendComponentModel = As, t.extendComponentView = Cs, t.extendSeriesModel = Ds, t.extendChartView = ks, t.setCanvasCreator = function (t) {
        e("createCanvas", t)
    }, t.registerMap = function (t, e, n) {
        O_.registerMap(t, e, n)
    }, t.getMap = function (t) {
        var e = O_.retrieveMap(t);
        return e && e[0] && {geoJson: e[0].geoJSON, specialAreas: e[0].specialAreas}
    }, t.dataTool = cw, t.zrender = qm, t.number = Qy, t.format = ox, t.throttle = _a, t.helper = ob, t.matrix = Dg, t.vector = vg, t.color = jg, t.parseGeoJSON = sb, t.parseGeoJson = cb, t.util = db, t.graphic = fb, t.List = bw, t.Model = Ir, t.Axis = ub, t.env = Kp
});