!(function (t) {
    "use strict";
    "function" == typeof define && define.amd
        ? define(["jquery"], function (e) {
              return t(e, window, document);
          })
        : "object" == typeof exports
        ? (module.exports = function (e, n) {
              return e || (e = window), n || (n = "undefined" != typeof window ? require("jquery") : require("jquery")(e)), t(n, e, e.document);
          })
        : t(jQuery, window, document);
})(function (t, e, n, a) {
    "use strict";
    var r,
        o,
        i,
        l,
        s = function (e) {
            (this.$ = function (t, e) {
                return this.api(!0).$(t, e);
            }),
                (this._ = function (t, e) {
                    return this.api(!0).rows(t, e).data();
                }),
                (this.api = function (t) {
                    return new o(t ? oe(this[r.iApiIndex]) : this);
                }),
                (this.fnAddData = function (e, n) {
                    var r = this.api(!0),
                        o = t.isArray(e) && (t.isArray(e[0]) || t.isPlainObject(e[0])) ? r.rows.add(e) : r.row.add(e);
                    return (n === a || n) && r.draw(), o.flatten().toArray();
                }),
                (this.fnAdjustColumnSizing = function (t) {
                    var e = this.api(!0).columns.adjust(),
                        n = e.settings()[0],
                        r = n.oScroll;
                    t === a || t ? e.draw(!1) : ("" === r.sX && "" === r.sY) || Bt(n);
                }),
                (this.fnClearTable = function (t) {
                    var e = this.api(!0).clear();
                    (t === a || t) && e.draw();
                }),
                (this.fnClose = function (t) {
                    this.api(!0).row(t).child.hide();
                }),
                (this.fnDeleteRow = function (t, e, n) {
                    var r = this.api(!0),
                        o = r.rows(t),
                        i = o.settings()[0],
                        l = i.aoData[o[0][0]];
                    return o.remove(), e && e.call(this, i, l), (n === a || n) && r.draw(), l;
                }),
                (this.fnDestroy = function (t) {
                    this.api(!0).destroy(t);
                }),
                (this.fnDraw = function (t) {
                    this.api(!0).draw(t);
                }),
                (this.fnFilter = function (t, e, n, r, o, i) {
                    var l = this.api(!0);
                    null === e || e === a ? l.search(t, n, r, i) : l.column(e).search(t, n, r, i), l.draw();
                }),
                (this.fnGetData = function (t, e) {
                    var n = this.api(!0);
                    if (t !== a) {
                        var r = t.nodeName ? t.nodeName.toLowerCase() : "";
                        return e !== a || "td" == r || "th" == r ? n.cell(t, e).data() : n.row(t).data() || null;
                    }
                    return n.data().toArray();
                }),
                (this.fnGetNodes = function (t) {
                    var e = this.api(!0);
                    return t !== a ? e.row(t).node() : e.rows().nodes().flatten().toArray();
                }),
                (this.fnGetPosition = function (t) {
                    var e = this.api(!0),
                        n = t.nodeName.toUpperCase();
                    if ("TR" == n) return e.row(t).index();
                    if ("TD" == n || "TH" == n) {
                        var a = e.cell(t).index();
                        return [a.row, a.columnVisible, a.column];
                    }
                    return null;
                }),
                (this.fnIsOpen = function (t) {
                    return this.api(!0).row(t).child.isShown();
                }),
                (this.fnOpen = function (t, e, n) {
                    return this.api(!0).row(t).child(e, n).show().child()[0];
                }),
                (this.fnPageChange = function (t, e) {
                    var n = this.api(!0).page(t);
                    (e === a || e) && n.draw(!1);
                }),
                (this.fnSetColumnVis = function (t, e, n) {
                    var r = this.api(!0).column(t).visible(e);
                    (n === a || n) && r.columns.adjust().draw();
                }),
                (this.fnSettings = function () {
                    return oe(this[r.iApiIndex]);
                }),
                (this.fnSort = function (t) {
                    this.api(!0).order(t).draw();
                }),
                (this.fnSortListener = function (t, e, n) {
                    this.api(!0).order.listener(t, e, n);
                }),
                (this.fnUpdate = function (t, e, n, r, o) {
                    var i = this.api(!0);
                    return n === a || null === n ? i.row(e).data(t) : i.cell(e, n).data(t), (o === a || o) && i.columns.adjust(), (r === a || r) && i.draw(), 0;
                }),
                (this.fnVersionCheck = r.fnVersionCheck);
            var n = this,
                i = e === a,
                l = this.length;
            for (var u in (i && (e = {}), (this.oApi = this.internal = r.internal), s.ext.internal)) u && (this[u] = je(u));
            return (
                this.each(function () {
                    var r,
                        o = l > 1 ? se({}, e, !0) : e,
                        u = 0,
                        c = this.getAttribute("id"),
                        f = !1,
                        d = s.defaults,
                        h = t(this);
                    if ("table" == this.nodeName.toLowerCase()) {
                        L(d), R(d.column), I(d, d, !0), I(d.column, d.column, !0), I(d, t.extend(o, h.data()), !0);
                        var p = s.settings;
                        for (u = 0, r = p.length; u < r; u++) {
                            var g = p[u];
                            if (g.nTable == this || (g.nTHead && g.nTHead.parentNode == this) || (g.nTFoot && g.nTFoot.parentNode == this)) {
                                var b = o.bRetrieve !== a ? o.bRetrieve : d.bRetrieve,
                                    v = o.bDestroy !== a ? o.bDestroy : d.bDestroy;
                                if (i || b) return g.oInstance;
                                if (v) {
                                    g.oInstance.fnDestroy();
                                    break;
                                }
                                return void ie(g, 0, "Cannot reinitialise DataTable", 3);
                            }
                            if (g.sTableId == this.id) {
                                p.splice(u, 1);
                                break;
                            }
                        }
                        (null !== c && "" !== c) || ((c = "DataTables_Table_" + s.ext._unique++), (this.id = c));
                        var m = t.extend(!0, {}, s.models.oSettings, { sDestroyWidth: h[0].style.width, sInstance: c, sTableId: c });
                        (m.nTable = this),
                            (m.oApi = n.internal),
                            (m.oInit = o),
                            p.push(m),
                            (m.oInstance = 1 === n.length ? n : h.dataTable()),
                            L(o),
                            A(o.oLanguage),
                            o.aLengthMenu && !o.iDisplayLength && (o.iDisplayLength = t.isArray(o.aLengthMenu[0]) ? o.aLengthMenu[0][0] : o.aLengthMenu[0]),
                            (o = se(t.extend(!0, {}, d), o)),
                            le(m.oFeatures, o, ["bPaginate", "bLengthChange", "bFilter", "bSort", "bSortMulti", "bInfo", "bProcessing", "bAutoWidth", "bSortClasses", "bServerSide", "bDeferRender"]),
                            le(m, o, [
                                "asStripeClasses",
                                "ajax",
                                "fnServerData",
                                "fnFormatNumber",
                                "sServerMethod",
                                "aaSorting",
                                "aaSortingFixed",
                                "aLengthMenu",
                                "sPaginationType",
                                "sAjaxSource",
                                "sAjaxDataProp",
                                "iStateDuration",
                                "sDom",
                                "bSortCellsTop",
                                "iTabIndex",
                                "fnStateLoadCallback",
                                "fnStateSaveCallback",
                                "renderer",
                                "searchDelay",
                                "rowId",
                                ["iCookieDuration", "iStateDuration"],
                                ["oSearch", "oPreviousSearch"],
                                ["aoSearchCols", "aoPreSearchCols"],
                                ["iDisplayLength", "_iDisplayLength"],
                            ]),
                            le(m.oScroll, o, [
                                ["sScrollX", "sX"],
                                ["sScrollXInner", "sXInner"],
                                ["sScrollY", "sY"],
                                ["bScrollCollapse", "bCollapse"],
                            ]),
                            le(m.oLanguage, o, "fnInfoCallback"),
                            ce(m, "aoDrawCallback", o.fnDrawCallback, "user"),
                            ce(m, "aoServerParams", o.fnServerParams, "user"),
                            ce(m, "aoStateSaveParams", o.fnStateSaveParams, "user"),
                            ce(m, "aoStateLoadParams", o.fnStateLoadParams, "user"),
                            ce(m, "aoStateLoaded", o.fnStateLoaded, "user"),
                            ce(m, "aoRowCallback", o.fnRowCallback, "user"),
                            ce(m, "aoRowCreatedCallback", o.fnCreatedRow, "user"),
                            ce(m, "aoHeaderCallback", o.fnHeaderCallback, "user"),
                            ce(m, "aoFooterCallback", o.fnFooterCallback, "user"),
                            ce(m, "aoInitComplete", o.fnInitComplete, "user"),
                            ce(m, "aoPreDrawCallback", o.fnPreDrawCallback, "user"),
                            (m.rowIdFn = Y(o.rowId)),
                            P(m);
                        var S = m.oClasses;
                        if ((t.extend(S, s.ext.classes, o.oClasses), h.addClass(S.sTable), m.iInitDisplayStart === a && ((m.iInitDisplayStart = o.iDisplayStart), (m._iDisplayStart = o.iDisplayStart)), null !== o.iDeferLoading)) {
                            m.bDeferLoading = !0;
                            var D = t.isArray(o.iDeferLoading);
                            (m._iRecordsDisplay = D ? o.iDeferLoading[0] : o.iDeferLoading), (m._iRecordsTotal = D ? o.iDeferLoading[1] : o.iDeferLoading);
                        }
                        var y = m.oLanguage;
                        t.extend(!0, y, o.oLanguage),
                            y.sUrl &&
                                (t.ajax({
                                    dataType: "json",
                                    url: y.sUrl,
                                    success: function (e) {
                                        A(e), I(d.oLanguage, e), t.extend(!0, y, e), Pt(m);
                                    },
                                    error: function () {
                                        Pt(m);
                                    },
                                }),
                                (f = !0)),
                            null === o.asStripeClasses && (m.asStripeClasses = [S.sStripeOdd, S.sStripeEven]);
                        var _ = m.asStripeClasses,
                            w = h.children("tbody").find("tr").eq(0);
                        -1 !==
                            t.inArray(
                                !0,
                                t.map(_, function (t, e) {
                                    return w.hasClass(t);
                                })
                            ) && (t("tbody tr", this).removeClass(_.join(" ")), (m.asDestroyStripes = _.slice()));
                        var T,
                            C = [],
                            x = this.getElementsByTagName("thead");
                        if ((0 !== x.length && (ct(m.aoHeader, x[0]), (C = ft(m))), null === o.aoColumns)) for (T = [], u = 0, r = C.length; u < r; u++) T.push(null);
                        else T = o.aoColumns;
                        for (u = 0, r = T.length; u < r; u++) N(m, C ? C[u] : null);
                        if (
                            (U(m, o.aoColumnDefs, T, function (t, e) {
                                H(m, t, e);
                            }),
                            w.length)
                        ) {
                            var F = function (t, e) {
                                return null !== t.getAttribute("data-" + e) ? e : null;
                            };
                            t(w[0])
                                .children("th, td")
                                .each(function (t, e) {
                                    var n = m.aoColumns[t];
                                    if (n.mData === t) {
                                        var r = F(e, "sort") || F(e, "order"),
                                            o = F(e, "filter") || F(e, "search");
                                        (null === r && null === o) ||
                                            ((n.mData = { _: t + ".display", sort: null !== r ? t + ".@data-" + r : a, type: null !== r ? t + ".@data-" + r : a, filter: null !== o ? t + ".@data-" + o : a }), H(m, t));
                                    }
                                });
                        }
                        var j = m.oFeatures,
                            O = function () {
                                if (o.aaSorting === a) {
                                    var e = m.aaSorting;
                                    for (u = 0, r = e.length; u < r; u++) e[u][1] = m.aoColumns[u].asSorting[0];
                                }
                                ee(m),
                                    j.bSort &&
                                        ce(m, "aoDrawCallback", function () {
                                            if (m.bSorted) {
                                                var e = Yt(m),
                                                    n = {};
                                                t.each(e, function (t, e) {
                                                    n[e.src] = e.dir;
                                                }),
                                                    fe(m, null, "order", [m, e, n]),
                                                    Kt(m);
                                            }
                                        }),
                                    ce(
                                        m,
                                        "aoDrawCallback",
                                        function () {
                                            (m.bSorted || "ssp" === pe(m) || j.bDeferRender) && ee(m);
                                        },
                                        "sc"
                                    );
                                var n = h.children("caption").each(function () {
                                        this._captionSide = t(this).css("caption-side");
                                    }),
                                    i = h.children("thead");
                                0 === i.length && (i = t("<thead/>").appendTo(h)), (m.nTHead = i[0]);
                                var l = h.children("tbody");
                                0 === l.length && (l = t("<tbody/>").appendTo(h)), (m.nTBody = l[0]);
                                var s = h.children("tfoot");
                                if (
                                    (0 === s.length && n.length > 0 && ("" !== m.oScroll.sX || "" !== m.oScroll.sY) && (s = t("<tfoot/>").appendTo(h)),
                                    0 === s.length || 0 === s.children().length ? h.addClass(S.sNoFooter) : s.length > 0 && ((m.nTFoot = s[0]), ct(m.aoFooter, m.nTFoot)),
                                    o.aaData)
                                )
                                    for (u = 0; u < o.aaData.length; u++) V(m, o.aaData[u]);
                                else (m.bDeferLoading || "dom" == pe(m)) && X(m, t(m.nTBody).children("tr"));
                                (m.aiDisplay = m.aiDisplayMaster.slice()), (m.bInitialised = !0), !1 === f && Pt(m);
                            };
                        o.bStateSave ? ((j.bStateSave = !0), ce(m, "aoDrawCallback", ae, "state_save"), re(m, o, O)) : O();
                    } else ie(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
                }),
                (n = null),
                this
            );
        },
        u = {},
        c = /[\r\n\u2028]/g,
        f = /<.*?>/g,
        d = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,
        h = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^", "-"].join("|\\") + ")", "g"),
        p = /[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi,
        g = function (t) {
            return !t || !0 === t || "-" === t;
        },
        b = function (t) {
            var e = parseInt(t, 10);
            return !isNaN(e) && isFinite(t) ? e : null;
        },
        v = function (t, e) {
            return u[e] || (u[e] = new RegExp(wt(e), "g")), "string" == typeof t && "." !== e ? t.replace(/\./g, "").replace(u[e], ".") : t;
        },
        m = function (t, e, n) {
            var a = "string" == typeof t;
            return !!g(t) || (e && a && (t = v(t, e)), n && a && (t = t.replace(p, "")), !isNaN(parseFloat(t)) && isFinite(t));
        },
        S = function (t, e, n) {
            return (
                !!g(t) ||
                ((function (t) {
                    return g(t) || "string" == typeof t;
                })(t) &&
                    !!m(T(t), e, n)) ||
                null
            );
        },
        D = function (t, e, n) {
            var r = [],
                o = 0,
                i = t.length;
            if (n !== a) for (; o < i; o++) t[o] && t[o][e] && r.push(t[o][e][n]);
            else for (; o < i; o++) t[o] && r.push(t[o][e]);
            return r;
        },
        y = function (t, e, n, r) {
            var o = [],
                i = 0,
                l = e.length;
            if (r !== a) for (; i < l; i++) t[e[i]][n] && o.push(t[e[i]][n][r]);
            else for (; i < l; i++) o.push(t[e[i]][n]);
            return o;
        },
        _ = function (t, e) {
            var n,
                r = [];
            e === a ? ((e = 0), (n = t)) : ((n = e), (e = t));
            for (var o = e; o < n; o++) r.push(o);
            return r;
        },
        w = function (t) {
            for (var e = [], n = 0, a = t.length; n < a; n++) t[n] && e.push(t[n]);
            return e;
        },
        T = function (t) {
            return t.replace(f, "");
        },
        C = function (t) {
            if (
                (function (t) {
                    if (t.length < 2) return !0;
                    for (var e = t.slice().sort(), n = e[0], a = 1, r = e.length; a < r; a++) {
                        if (e[a] === n) return !1;
                        n = e[a];
                    }
                    return !0;
                })(t)
            )
                return t.slice();
            var e,
                n,
                a,
                r = [],
                o = t.length,
                i = 0;
            t: for (n = 0; n < o; n++) {
                for (e = t[n], a = 0; a < i; a++) if (r[a] === e) continue t;
                r.push(e), i++;
            }
            return r;
        };
    function x(e) {
        var n,
            a,
            r = {};
        t.each(e, function (t, o) {
            (n = t.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(n[1] + " ") && ((a = t.replace(n[0], n[2].toLowerCase())), (r[a] = t), "o" === n[1] && x(e[t]));
        }),
            (e._hungarianMap = r);
    }
    function I(e, n, r) {
        var o;
        e._hungarianMap || x(e),
            t.each(n, function (i, l) {
                (o = e._hungarianMap[i]) === a || (!r && n[o] !== a) || ("o" === o.charAt(0) ? (n[o] || (n[o] = {}), t.extend(!0, n[o], n[i]), I(e[o], n[o], r)) : (n[o] = n[i]));
            });
    }
    function A(t) {
        var e = s.defaults.oLanguage,
            n = e.sDecimal;
        if ((n && Re(n), t)) {
            var a = t.sZeroRecords;
            !t.sEmptyTable && a && "No data available in table" === e.sEmptyTable && le(t, t, "sZeroRecords", "sEmptyTable"),
                !t.sLoadingRecords && a && "Loading..." === e.sLoadingRecords && le(t, t, "sZeroRecords", "sLoadingRecords"),
                t.sInfoThousands && (t.sThousands = t.sInfoThousands);
            var r = t.sDecimal;
            r && n !== r && Re(r);
        }
    }
    s.util = {
        throttle: function (t, e) {
            var n,
                r,
                o = e !== a ? e : 200;
            return function () {
                var e = this,
                    i = +new Date(),
                    l = arguments;
                n && i < n + o
                    ? (clearTimeout(r),
                      (r = setTimeout(function () {
                          (n = a), t.apply(e, l);
                      }, o)))
                    : ((n = i), t.apply(e, l));
            };
        },
        escapeRegex: function (t) {
            return t.replace(h, "\\$1");
        },
    };
    var F = function (t, e, n) {
        t[e] !== a && (t[n] = t[e]);
    };
    function L(t) {
        F(t, "ordering", "bSort"),
            F(t, "orderMulti", "bSortMulti"),
            F(t, "orderClasses", "bSortClasses"),
            F(t, "orderCellsTop", "bSortCellsTop"),
            F(t, "order", "aaSorting"),
            F(t, "orderFixed", "aaSortingFixed"),
            F(t, "paging", "bPaginate"),
            F(t, "pagingType", "sPaginationType"),
            F(t, "pageLength", "iDisplayLength"),
            F(t, "searching", "bFilter"),
            "boolean" == typeof t.sScrollX && (t.sScrollX = t.sScrollX ? "100%" : ""),
            "boolean" == typeof t.scrollX && (t.scrollX = t.scrollX ? "100%" : "");
        var e = t.aoSearchCols;
        if (e) for (var n = 0, a = e.length; n < a; n++) e[n] && I(s.models.oSearch, e[n]);
    }
    function R(e) {
        F(e, "orderable", "bSortable"), F(e, "orderData", "aDataSort"), F(e, "orderSequence", "asSorting"), F(e, "orderDataType", "sortDataType");
        var n = e.aDataSort;
        "number" != typeof n || t.isArray(n) || (e.aDataSort = [n]);
    }
    function P(n) {
        if (!s.__browser) {
            var a = {};
            s.__browser = a;
            var r = t("<div/>")
                    .css({ position: "fixed", top: 0, left: -1 * t(e).scrollLeft(), height: 1, width: 1, overflow: "hidden" })
                    .append(
                        t("<div/>")
                            .css({ position: "absolute", top: 1, left: 1, width: 100, overflow: "scroll" })
                            .append(t("<div/>").css({ width: "100%", height: 10 }))
                    )
                    .appendTo("body"),
                o = r.children(),
                i = o.children();
            (a.barWidth = o[0].offsetWidth - o[0].clientWidth),
                (a.bScrollOversize = 100 === i[0].offsetWidth && 100 !== o[0].clientWidth),
                (a.bScrollbarLeft = 1 !== Math.round(i.offset().left)),
                (a.bBounding = !!r[0].getBoundingClientRect().width),
                r.remove();
        }
        t.extend(n.oBrowser, s.__browser), (n.oScroll.iBarWidth = s.__browser.barWidth);
    }
    function j(t, e, n, r, o, i) {
        var l,
            s = r,
            u = !1;
        for (n !== a && ((l = n), (u = !0)); s !== o; ) t.hasOwnProperty(s) && ((l = u ? e(l, t[s], s, t) : t[s]), (u = !0), (s += i));
        return l;
    }
    function N(e, a) {
        var r = s.defaults.column,
            o = e.aoColumns.length,
            i = t.extend({}, s.models.oColumn, r, { nTh: a || n.createElement("th"), sTitle: r.sTitle ? r.sTitle : a ? a.innerHTML : "", aDataSort: r.aDataSort ? r.aDataSort : [o], mData: r.mData ? r.mData : o, idx: o });
        e.aoColumns.push(i);
        var l = e.aoPreSearchCols;
        (l[o] = t.extend({}, s.models.oSearch, l[o])), H(e, o, t(a).data());
    }
    function H(e, n, r) {
        var o = e.aoColumns[n],
            i = e.oClasses,
            l = t(o.nTh);
        if (!o.sWidthOrig) {
            o.sWidthOrig = l.attr("width") || null;
            var u = (l.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
            u && (o.sWidthOrig = u[1]);
        }
        r !== a &&
            null !== r &&
            (R(r),
            I(s.defaults.column, r, !0),
            r.mDataProp === a || r.mData || (r.mData = r.mDataProp),
            r.sType && (o._sManualType = r.sType),
            r.className && !r.sClass && (r.sClass = r.className),
            r.sClass && l.addClass(r.sClass),
            t.extend(o, r),
            le(o, r, "sWidth", "sWidthOrig"),
            r.iDataSort !== a && (o.aDataSort = [r.iDataSort]),
            le(o, r, "aDataSort"));
        var c = o.mData,
            f = Y(c),
            d = o.mRender ? Y(o.mRender) : null,
            h = function (t) {
                return "string" == typeof t && -1 !== t.indexOf("@");
            };
        (o._bAttrSrc = t.isPlainObject(c) && (h(c.sort) || h(c.type) || h(c.filter))),
            (o._setter = null),
            (o.fnGetData = function (t, e, n) {
                var r = f(t, e, a, n);
                return d && e ? d(r, e, t, n) : r;
            }),
            (o.fnSetData = function (t, e, n) {
                return Z(c)(t, e, n);
            }),
            "number" != typeof c && (e._rowReadObject = !0),
            e.oFeatures.bSort || ((o.bSortable = !1), l.addClass(i.sSortableNone));
        var p = -1 !== t.inArray("asc", o.asSorting),
            g = -1 !== t.inArray("desc", o.asSorting);
        o.bSortable && (p || g)
            ? p && !g
                ? ((o.sSortingClass = i.sSortableAsc), (o.sSortingClassJUI = i.sSortJUIAscAllowed))
                : !p && g
                ? ((o.sSortingClass = i.sSortableDesc), (o.sSortingClassJUI = i.sSortJUIDescAllowed))
                : ((o.sSortingClass = i.sSortable), (o.sSortingClassJUI = i.sSortJUI))
            : ((o.sSortingClass = i.sSortableNone), (o.sSortingClassJUI = ""));
    }
    function O(t) {
        if (!1 !== t.oFeatures.bAutoWidth) {
            var e = t.aoColumns;
            Xt(t);
            for (var n = 0, a = e.length; n < a; n++) e[n].nTh.style.width = e[n].sWidth;
        }
        var r = t.oScroll;
        ("" === r.sY && "" === r.sX) || Bt(t), fe(t, null, "column-sizing", [t]);
    }
    function k(t, e) {
        var n = E(t, "bVisible");
        return "number" == typeof n[e] ? n[e] : null;
    }
    function M(e, n) {
        var a = E(e, "bVisible"),
            r = t.inArray(n, a);
        return -1 !== r ? r : null;
    }
    function W(e) {
        var n = 0;
        return (
            t.each(e.aoColumns, function (e, a) {
                a.bVisible && "none" !== t(a.nTh).css("display") && n++;
            }),
            n
        );
    }
    function E(e, n) {
        var a = [];
        return (
            t.map(e.aoColumns, function (t, e) {
                t[n] && a.push(e);
            }),
            a
        );
    }
    function B(t) {
        var e,
            n,
            r,
            o,
            i,
            l,
            u,
            c,
            f,
            d = t.aoColumns,
            h = t.aoData,
            p = s.ext.type.detect;
        for (e = 0, n = d.length; e < n; e++)
            if (((f = []), !(u = d[e]).sType && u._sManualType)) u.sType = u._sManualType;
            else if (!u.sType) {
                for (r = 0, o = p.length; r < o; r++) {
                    for (i = 0, l = h.length; i < l && (f[i] === a && (f[i] = J(t, i, e, "type")), (c = p[r](f[i], t)) || r === p.length - 1) && "html" !== c; i++);
                    if (c) {
                        u.sType = c;
                        break;
                    }
                }
                u.sType || (u.sType = "string");
            }
    }
    function U(e, n, r, o) {
        var i,
            l,
            s,
            u,
            c,
            f,
            d,
            h = e.aoColumns;
        if (n)
            for (i = n.length - 1; i >= 0; i--) {
                var p = (d = n[i]).targets !== a ? d.targets : d.aTargets;
                for (t.isArray(p) || (p = [p]), s = 0, u = p.length; s < u; s++)
                    if ("number" == typeof p[s] && p[s] >= 0) {
                        for (; h.length <= p[s]; ) N(e);
                        o(p[s], d);
                    } else if ("number" == typeof p[s] && p[s] < 0) o(h.length + p[s], d);
                    else if ("string" == typeof p[s]) for (c = 0, f = h.length; c < f; c++) ("_all" == p[s] || t(h[c].nTh).hasClass(p[s])) && o(c, d);
            }
        if (r) for (i = 0, l = r.length; i < l; i++) o(i, r[i]);
    }
    function V(e, n, r, o) {
        var i = e.aoData.length,
            l = t.extend(!0, {}, s.models.oRow, { src: r ? "dom" : "data", idx: i });
        (l._aData = n), e.aoData.push(l);
        for (var u = e.aoColumns, c = 0, f = u.length; c < f; c++) u[c].sType = null;
        e.aiDisplayMaster.push(i);
        var d = e.rowIdFn(n);
        return d !== a && (e.aIds[d] = l), (!r && e.oFeatures.bDeferRender) || at(e, i, r, o), i;
    }
    function X(e, n) {
        var a;
        return (
            n instanceof t || (n = t(n)),
            n.map(function (t, n) {
                return (a = nt(e, n)), V(e, a.data, n, a.cells);
            })
        );
    }
    function J(t, e, n, r) {
        var o = t.iDraw,
            i = t.aoColumns[n],
            l = t.aoData[e]._aData,
            s = i.sDefaultContent,
            u = i.fnGetData(l, r, { settings: t, row: e, col: n });
        if (u === a) return t.iDrawError != o && null === s && (ie(t, 0, "Requested unknown parameter " + ("function" == typeof i.mData ? "{function}" : "'" + i.mData + "'") + " for row " + e + ", column " + n, 4), (t.iDrawError = o)), s;
        if ((u !== l && null !== u) || null === s || r === a) {
            if ("function" == typeof u) return u.call(l);
        } else u = s;
        return null === u && "display" == r ? "" : u;
    }
    function q(t, e, n, a) {
        var r = t.aoColumns[n],
            o = t.aoData[e]._aData;
        r.fnSetData(o, a, { settings: t, row: e, col: n });
    }
    var G = /\[.*?\]$/,
        $ = /\(\)$/;
    function z(e) {
        return t.map(e.match(/(\\.|[^\.])+/g) || [""], function (t) {
            return t.replace(/\\\./g, ".");
        });
    }
    function Y(e) {
        if (t.isPlainObject(e)) {
            var n = {};
            return (
                t.each(e, function (t, e) {
                    e && (n[t] = Y(e));
                }),
                function (t, e, r, o) {
                    var i = n[e] || n._;
                    return i !== a ? i(t, e, r, o) : t;
                }
            );
        }
        if (null === e)
            return function (t) {
                return t;
            };
        if ("function" == typeof e)
            return function (t, n, a, r) {
                return e(t, n, a, r);
            };
        if ("string" != typeof e || (-1 === e.indexOf(".") && -1 === e.indexOf("[") && -1 === e.indexOf("(")))
            return function (t, n) {
                return t[e];
            };
        var r = function (e, n, o) {
            var i, l, s, u;
            if ("" !== o)
                for (var c = z(o), f = 0, d = c.length; f < d; f++) {
                    if (((i = c[f].match(G)), (l = c[f].match($)), i)) {
                        if (((c[f] = c[f].replace(G, "")), "" !== c[f] && (e = e[c[f]]), (s = []), c.splice(0, f + 1), (u = c.join(".")), t.isArray(e))) for (var h = 0, p = e.length; h < p; h++) s.push(r(e[h], n, u));
                        var g = i[0].substring(1, i[0].length - 1);
                        e = "" === g ? s : s.join(g);
                        break;
                    }
                    if (l) (c[f] = c[f].replace($, "")), (e = e[c[f]]());
                    else {
                        if (null === e || e[c[f]] === a) return a;
                        e = e[c[f]];
                    }
                }
            return e;
        };
        return function (t, n) {
            return r(t, n, e);
        };
    }
    function Z(e) {
        if (t.isPlainObject(e)) return Z(e._);
        if (null === e) return function () {};
        if ("function" == typeof e)
            return function (t, n, a) {
                e(t, "set", n, a);
            };
        if ("string" != typeof e || (-1 === e.indexOf(".") && -1 === e.indexOf("[") && -1 === e.indexOf("(")))
            return function (t, n) {
                t[e] = n;
            };
        var n = function (e, r, o) {
            for (var i, l, s, u, c, f = z(o), d = f[f.length - 1], h = 0, p = f.length - 1; h < p; h++) {
                if (((l = f[h].match(G)), (s = f[h].match($)), l)) {
                    if (((f[h] = f[h].replace(G, "")), (e[f[h]] = []), (i = f.slice()).splice(0, h + 1), (c = i.join(".")), t.isArray(r))) for (var g = 0, b = r.length; g < b; g++) n((u = {}), r[g], c), e[f[h]].push(u);
                    else e[f[h]] = r;
                    return;
                }
                s && ((f[h] = f[h].replace($, "")), (e = e[f[h]](r))), (null !== e[f[h]] && e[f[h]] !== a) || (e[f[h]] = {}), (e = e[f[h]]);
            }
            d.match($) ? (e = e[d.replace($, "")](r)) : (e[d.replace(G, "")] = r);
        };
        return function (t, a) {
            return n(t, a, e);
        };
    }
    function K(t) {
        return D(t.aoData, "_aData");
    }
    function Q(t) {
        (t.aoData.length = 0), (t.aiDisplayMaster.length = 0), (t.aiDisplay.length = 0), (t.aIds = {});
    }
    function tt(t, e, n) {
        for (var r = -1, o = 0, i = t.length; o < i; o++) t[o] == e ? (r = o) : t[o] > e && t[o]--;
        -1 != r && n === a && t.splice(r, 1);
    }
    function et(t, e, n, r) {
        var o,
            i,
            l = t.aoData[e],
            s = function (n, a) {
                for (; n.childNodes.length; ) n.removeChild(n.firstChild);
                n.innerHTML = J(t, e, a, "display");
            };
        if ("dom" !== n && ((n && "auto" !== n) || "dom" !== l.src)) {
            var u = l.anCells;
            if (u)
                if (r !== a) s(u[r], r);
                else for (o = 0, i = u.length; o < i; o++) s(u[o], o);
        } else l._aData = nt(t, l, r, r === a ? a : l._aData).data;
        (l._aSortData = null), (l._aFilterData = null);
        var c = t.aoColumns;
        if (r !== a) c[r].sType = null;
        else {
            for (o = 0, i = c.length; o < i; o++) c[o].sType = null;
            rt(t, l);
        }
    }
    function nt(e, n, r, o) {
        var i,
            l,
            s,
            u = [],
            c = n.firstChild,
            f = 0,
            d = e.aoColumns,
            h = e._rowReadObject;
        o = o !== a ? o : h ? {} : [];
        var p = function (t, e) {
                if ("string" == typeof t) {
                    var n = t.indexOf("@");
                    if (-1 !== n) {
                        var a = t.substring(n + 1);
                        Z(t)(o, e.getAttribute(a));
                    }
                }
            },
            g = function (e) {
                (r !== a && r !== f) ||
                    ((l = d[f]), (s = t.trim(e.innerHTML)), l && l._bAttrSrc ? (Z(l.mData._)(o, s), p(l.mData.sort, e), p(l.mData.type, e), p(l.mData.filter, e)) : h ? (l._setter || (l._setter = Z(l.mData)), l._setter(o, s)) : (o[f] = s));
                f++;
            };
        if (c) for (; c; ) ("TD" != (i = c.nodeName.toUpperCase()) && "TH" != i) || (g(c), u.push(c)), (c = c.nextSibling);
        else for (var b = 0, v = (u = n.anCells).length; b < v; b++) g(u[b]);
        var m = n.firstChild ? n : n.nTr;
        if (m) {
            var S = m.getAttribute("id");
            S && Z(e.rowId)(o, S);
        }
        return { data: o, cells: u };
    }
    function at(e, a, r, o) {
        var i,
            l,
            s,
            u,
            c,
            f,
            d = e.aoData[a],
            h = d._aData,
            p = [];
        if (null === d.nTr) {
            for (i = r || n.createElement("tr"), d.nTr = i, d.anCells = p, i._DT_RowIndex = a, rt(e, d), u = 0, c = e.aoColumns.length; u < c; u++)
                (s = e.aoColumns[u]),
                    ((l = (f = !r) ? n.createElement(s.sCellType) : o[u])._DT_CellIndex = { row: a, column: u }),
                    p.push(l),
                    (!f && ((r && !s.mRender && s.mData === u) || (t.isPlainObject(s.mData) && s.mData._ === u + ".display"))) || (l.innerHTML = J(e, a, u, "display")),
                    s.sClass && (l.className += " " + s.sClass),
                    s.bVisible && !r ? i.appendChild(l) : !s.bVisible && r && l.parentNode.removeChild(l),
                    s.fnCreatedCell && s.fnCreatedCell.call(e.oInstance, l, J(e, a, u), h, a, u);
            fe(e, "aoRowCreatedCallback", null, [i, h, a, p]);
        }
        d.nTr.setAttribute("role", "row");
    }
    function rt(e, n) {
        var a = n.nTr,
            r = n._aData;
        if (a) {
            var o = e.rowIdFn(r);
            if ((o && (a.id = o), r.DT_RowClass)) {
                var i = r.DT_RowClass.split(" ");
                (n.__rowc = n.__rowc ? C(n.__rowc.concat(i)) : i), t(a).removeClass(n.__rowc.join(" ")).addClass(r.DT_RowClass);
            }
            r.DT_RowAttr && t(a).attr(r.DT_RowAttr), r.DT_RowData && t(a).data(r.DT_RowData);
        }
    }
    function ot(e) {
        var n,
            a,
            r,
            o,
            i,
            l = e.nTHead,
            s = e.nTFoot,
            u = 0 === t("th, td", l).length,
            c = e.oClasses,
            f = e.aoColumns;
        for (u && (o = t("<tr/>").appendTo(l)), n = 0, a = f.length; n < a; n++)
            (i = f[n]),
                (r = t(i.nTh).addClass(i.sClass)),
                u && r.appendTo(o),
                e.oFeatures.bSort && (r.addClass(i.sSortingClass), !1 !== i.bSortable && (r.attr("tabindex", e.iTabIndex).attr("aria-controls", e.sTableId), te(e, i.nTh, n))),
                i.sTitle != r[0].innerHTML && r.html(i.sTitle),
                he(e, "header")(e, r, i, c);
        if ((u && ct(e.aoHeader, l), t(l).find(">tr").attr("role", "row"), t(l).find(">tr>th, >tr>td").addClass(c.sHeaderTH), t(s).find(">tr>th, >tr>td").addClass(c.sFooterTH), null !== s)) {
            var d = e.aoFooter[0];
            for (n = 0, a = d.length; n < a; n++) ((i = f[n]).nTf = d[n].cell), i.sClass && t(i.nTf).addClass(i.sClass);
        }
    }
    function it(e, n, r) {
        var o,
            i,
            l,
            s,
            u,
            c,
            f,
            d,
            h,
            p = [],
            g = [],
            b = e.aoColumns.length;
        if (n) {
            for (r === a && (r = !1), o = 0, i = n.length; o < i; o++) {
                for (p[o] = n[o].slice(), p[o].nTr = n[o].nTr, l = b - 1; l >= 0; l--) e.aoColumns[l].bVisible || r || p[o].splice(l, 1);
                g.push([]);
            }
            for (o = 0, i = p.length; o < i; o++) {
                if ((f = p[o].nTr)) for (; (c = f.firstChild); ) f.removeChild(c);
                for (l = 0, s = p[o].length; l < s; l++)
                    if (((d = 1), (h = 1), g[o][l] === a)) {
                        for (f.appendChild(p[o][l].cell), g[o][l] = 1; p[o + d] !== a && p[o][l].cell == p[o + d][l].cell; ) (g[o + d][l] = 1), d++;
                        for (; p[o][l + h] !== a && p[o][l].cell == p[o][l + h].cell; ) {
                            for (u = 0; u < d; u++) g[o + u][l + h] = 1;
                            h++;
                        }
                        t(p[o][l].cell).attr("rowspan", d).attr("colspan", h);
                    }
            }
        }
    }
    function lt(e) {
        var n = fe(e, "aoPreDrawCallback", "preDraw", [e]);
        if (-1 === t.inArray(!1, n)) {
            var r = [],
                o = 0,
                i = e.asStripeClasses,
                l = i.length,
                s = (e.aoOpenRows.length, e.oLanguage),
                u = e.iInitDisplayStart,
                c = "ssp" == pe(e),
                f = e.aiDisplay;
            (e.bDrawing = !0), u !== a && -1 !== u && ((e._iDisplayStart = c ? u : u >= e.fnRecordsDisplay() ? 0 : u), (e.iInitDisplayStart = -1));
            var d = e._iDisplayStart,
                h = e.fnDisplayEnd();
            if (e.bDeferLoading) (e.bDeferLoading = !1), e.iDraw++, Wt(e, !1);
            else if (c) {
                if (!e.bDestroying && !ht(e)) return;
            } else e.iDraw++;
            if (0 !== f.length)
                for (var p = c ? 0 : d, g = c ? e.aoData.length : h, b = p; b < g; b++) {
                    var v = f[b],
                        m = e.aoData[v];
                    null === m.nTr && at(e, v);
                    var S = m.nTr;
                    if (0 !== l) {
                        var D = i[o % l];
                        m._sRowStripe != D && (t(S).removeClass(m._sRowStripe).addClass(D), (m._sRowStripe = D));
                    }
                    fe(e, "aoRowCallback", null, [S, m._aData, o, b, v]), r.push(S), o++;
                }
            else {
                var y = s.sZeroRecords;
                1 == e.iDraw && "ajax" == pe(e) ? (y = s.sLoadingRecords) : s.sEmptyTable && 0 === e.fnRecordsTotal() && (y = s.sEmptyTable),
                    (r[0] = t("<tr/>", { class: l ? i[0] : "" }).append(t("<td />", { valign: "top", colSpan: W(e), class: e.oClasses.sRowEmpty }).html(y))[0]);
            }
            fe(e, "aoHeaderCallback", "header", [t(e.nTHead).children("tr")[0], K(e), d, h, f]), fe(e, "aoFooterCallback", "footer", [t(e.nTFoot).children("tr")[0], K(e), d, h, f]);
            var _ = t(e.nTBody);
            _.children().detach(), _.append(t(r)), fe(e, "aoDrawCallback", "draw", [e]), (e.bSorted = !1), (e.bFiltered = !1), (e.bDrawing = !1);
        } else Wt(e, !1);
    }
    function st(t, e) {
        var n = t.oFeatures,
            a = n.bSort,
            r = n.bFilter;
        a && Zt(t), r ? mt(t, t.oPreviousSearch) : (t.aiDisplay = t.aiDisplayMaster.slice()), !0 !== e && (t._iDisplayStart = 0), (t._drawHold = e), lt(t), (t._drawHold = !1);
    }
    function ut(e) {
        var n = e.oClasses,
            a = t(e.nTable),
            r = t("<div/>").insertBefore(a),
            o = e.oFeatures,
            i = t("<div/>", { id: e.sTableId + "_wrapper", class: n.sWrapper + (e.nTFoot ? "" : " " + n.sNoFooter) });
        (e.nHolding = r[0]), (e.nTableWrapper = i[0]), (e.nTableReinsertBefore = e.nTable.nextSibling);
        for (var l, u, c, f, d, h, p = e.sDom.split(""), g = 0; g < p.length; g++) {
            if (((l = null), "<" == (u = p[g]))) {
                if (((c = t("<div/>")[0]), "'" == (f = p[g + 1]) || '"' == f)) {
                    for (d = "", h = 2; p[g + h] != f; ) (d += p[g + h]), h++;
                    if (("H" == d ? (d = n.sJUIHeader) : "F" == d && (d = n.sJUIFooter), -1 != d.indexOf("."))) {
                        var b = d.split(".");
                        (c.id = b[0].substr(1, b[0].length - 1)), (c.className = b[1]);
                    } else "#" == d.charAt(0) ? (c.id = d.substr(1, d.length - 1)) : (c.className = d);
                    g += h;
                }
                i.append(c), (i = t(c));
            } else if (">" == u) i = i.parent();
            else if ("l" == u && o.bPaginate && o.bLengthChange) l = Ht(e);
            else if ("f" == u && o.bFilter) l = vt(e);
            else if ("r" == u && o.bProcessing) l = Mt(e);
            else if ("t" == u) l = Et(e);
            else if ("i" == u && o.bInfo) l = Ft(e);
            else if ("p" == u && o.bPaginate) l = Ot(e);
            else if (0 !== s.ext.feature.length)
                for (var v = s.ext.feature, m = 0, S = v.length; m < S; m++)
                    if (u == v[m].cFeature) {
                        l = v[m].fnInit(e);
                        break;
                    }
            if (l) {
                var D = e.aanFeatures;
                D[u] || (D[u] = []), D[u].push(l), i.append(l);
            }
        }
        r.replaceWith(i), (e.nHolding = null);
    }
    function ct(e, n) {
        var a,
            r,
            o,
            i,
            l,
            s,
            u,
            c,
            f,
            d,
            h = t(n).children("tr"),
            p = function (t, e, n) {
                for (var a = t[e]; a[n]; ) n++;
                return n;
            };
        for (e.splice(0, e.length), o = 0, s = h.length; o < s; o++) e.push([]);
        for (o = 0, s = h.length; o < s; o++)
            for (0, r = (a = h[o]).firstChild; r; ) {
                if ("TD" == r.nodeName.toUpperCase() || "TH" == r.nodeName.toUpperCase())
                    for (c = (c = 1 * r.getAttribute("colspan")) && 0 !== c && 1 !== c ? c : 1, f = (f = 1 * r.getAttribute("rowspan")) && 0 !== f && 1 !== f ? f : 1, u = p(e, o, 0), d = 1 === c, l = 0; l < c; l++)
                        for (i = 0; i < f; i++) (e[o + i][u + l] = { cell: r, unique: d }), (e[o + i].nTr = a);
                r = r.nextSibling;
            }
    }
    function ft(t, e, n) {
        var a = [];
        n || ((n = t.aoHeader), e && ct((n = []), e));
        for (var r = 0, o = n.length; r < o; r++) for (var i = 0, l = n[r].length; i < l; i++) !n[r][i].unique || (a[i] && t.bSortCellsTop) || (a[i] = n[r][i].cell);
        return a;
    }
    function dt(e, n, a) {
        if ((fe(e, "aoServerParams", "serverParams", [n]), n && t.isArray(n))) {
            var r = {},
                o = /(.*?)\[\]$/;
            t.each(n, function (t, e) {
                var n = e.name.match(o);
                if (n) {
                    var a = n[0];
                    r[a] || (r[a] = []), r[a].push(e.value);
                } else r[e.name] = e.value;
            }),
                (n = r);
        }
        var i,
            l = e.ajax,
            s = e.oInstance,
            u = function (t) {
                fe(e, null, "xhr", [e, t, e.jqXHR]), a(t);
            };
        if (t.isPlainObject(l) && l.data) {
            var c = "function" == typeof (i = l.data) ? i(n, e) : i;
            (n = "function" == typeof i && c ? c : t.extend(!0, n, c)), delete l.data;
        }
        var f = {
            data: n,
            success: function (t) {
                var n = t.error || t.sError;
                n && ie(e, 0, n), (e.json = t), u(t);
            },
            dataType: "json",
            cache: !1,
            type: e.sServerMethod,
            error: function (n, a, r) {
                var o = fe(e, null, "xhr", [e, null, e.jqXHR]);
                -1 === t.inArray(!0, o) && ("parsererror" == a ? ie(e, 0, "Invalid JSON response", 1) : 4 === n.readyState && ie(e, 0, "Ajax error", 7)), Wt(e, !1);
            },
        };
        (e.oAjaxData = n),
            fe(e, null, "preXhr", [e, n]),
            e.fnServerData
                ? e.fnServerData.call(
                      s,
                      e.sAjaxSource,
                      t.map(n, function (t, e) {
                          return { name: e, value: t };
                      }),
                      u,
                      e
                  )
                : e.sAjaxSource || "string" == typeof l
                ? (e.jqXHR = t.ajax(t.extend(f, { url: l || e.sAjaxSource })))
                : "function" == typeof l
                ? (e.jqXHR = l.call(s, n, u, e))
                : ((e.jqXHR = t.ajax(t.extend(f, l))), (l.data = i));
    }
    function ht(t) {
        return (
            !t.bAjaxDataGet ||
            (t.iDraw++,
            Wt(t, !0),
            dt(t, pt(t), function (e) {
                gt(t, e);
            }),
            !1)
        );
    }
    function pt(e) {
        var n,
            a,
            r,
            o,
            i = e.aoColumns,
            l = i.length,
            u = e.oFeatures,
            c = e.oPreviousSearch,
            f = e.aoPreSearchCols,
            d = [],
            h = Yt(e),
            p = e._iDisplayStart,
            g = !1 !== u.bPaginate ? e._iDisplayLength : -1,
            b = function (t, e) {
                d.push({ name: t, value: e });
            };
        b("sEcho", e.iDraw), b("iColumns", l), b("sColumns", D(i, "sName").join(",")), b("iDisplayStart", p), b("iDisplayLength", g);
        var v = { draw: e.iDraw, columns: [], order: [], start: p, length: g, search: { value: c.sSearch, regex: c.bRegex } };
        for (n = 0; n < l; n++)
            (r = i[n]),
                (o = f[n]),
                (a = "function" == typeof r.mData ? "function" : r.mData),
                v.columns.push({ data: a, name: r.sName, searchable: r.bSearchable, orderable: r.bSortable, search: { value: o.sSearch, regex: o.bRegex } }),
                b("mDataProp_" + n, a),
                u.bFilter && (b("sSearch_" + n, o.sSearch), b("bRegex_" + n, o.bRegex), b("bSearchable_" + n, r.bSearchable)),
                u.bSort && b("bSortable_" + n, r.bSortable);
        u.bFilter && (b("sSearch", c.sSearch), b("bRegex", c.bRegex)),
            u.bSort &&
                (t.each(h, function (t, e) {
                    v.order.push({ column: e.col, dir: e.dir }), b("iSortCol_" + t, e.col), b("sSortDir_" + t, e.dir);
                }),
                b("iSortingCols", h.length));
        var m = s.ext.legacy.ajax;
        return null === m ? (e.sAjaxSource ? d : v) : m ? d : v;
    }
    function gt(t, e) {
        var n = function (t, n) {
                return e[t] !== a ? e[t] : e[n];
            },
            r = bt(t, e),
            o = n("sEcho", "draw"),
            i = n("iTotalRecords", "recordsTotal"),
            l = n("iTotalDisplayRecords", "recordsFiltered");
        if (o !== a) {
            if (1 * o < t.iDraw) return;
            t.iDraw = 1 * o;
        }
        Q(t), (t._iRecordsTotal = parseInt(i, 10)), (t._iRecordsDisplay = parseInt(l, 10));
        for (var s = 0, u = r.length; s < u; s++) V(t, r[s]);
        (t.aiDisplay = t.aiDisplayMaster.slice()), (t.bAjaxDataGet = !1), lt(t), t._bInitComplete || jt(t, e), (t.bAjaxDataGet = !0), Wt(t, !1);
    }
    function bt(e, n) {
        var r = t.isPlainObject(e.ajax) && e.ajax.dataSrc !== a ? e.ajax.dataSrc : e.sAjaxDataProp;
        return "data" === r ? n.aaData || n[r] : "" !== r ? Y(r)(n) : n;
    }
    function vt(e) {
        var a = e.oClasses,
            r = e.sTableId,
            o = e.oLanguage,
            i = e.oPreviousSearch,
            l = e.aanFeatures,
            s = '<input type="search" class="' + a.sFilterInput + '"/>',
            u = o.sSearch;
        u = u.match(/_INPUT_/) ? u.replace("_INPUT_", s) : u + s;
        var c = t("<div/>", { id: l.f ? null : r + "_filter", class: a.sFilter }).append(t("<label/>").append(u)),
            f = function () {
                l.f;
                var t = this.value ? this.value : "";
                t != i.sSearch && (mt(e, { sSearch: t, bRegex: i.bRegex, bSmart: i.bSmart, bCaseInsensitive: i.bCaseInsensitive }), (e._iDisplayStart = 0), lt(e));
            },
            d = null !== e.searchDelay ? e.searchDelay : "ssp" === pe(e) ? 400 : 0,
            h = t("input", c)
                .val(i.sSearch)
                .attr("placeholder", o.sSearchPlaceholder)
                .on("keyup.DT search.DT input.DT paste.DT cut.DT", d ? Jt(f, d) : f)
                .on("mouseup", function (t) {
                    setTimeout(function () {
                        f.call(h[0]);
                    }, 10);
                })
                .on("keypress.DT", function (t) {
                    if (13 == t.keyCode) return !1;
                })
                .attr("aria-controls", r);
        return (
            t(e.nTable).on("search.dt.DT", function (t, a) {
                if (e === a)
                    try {
                        h[0] !== n.activeElement && h.val(i.sSearch);
                    } catch (t) {}
            }),
            c[0]
        );
    }
    function mt(t, e, n) {
        var r = t.oPreviousSearch,
            o = t.aoPreSearchCols,
            i = function (t) {
                (r.sSearch = t.sSearch), (r.bRegex = t.bRegex), (r.bSmart = t.bSmart), (r.bCaseInsensitive = t.bCaseInsensitive);
            },
            l = function (t) {
                return t.bEscapeRegex !== a ? !t.bEscapeRegex : t.bRegex;
            };
        if ((B(t), "ssp" != pe(t))) {
            yt(t, e.sSearch, n, l(e), e.bSmart, e.bCaseInsensitive), i(e);
            for (var s = 0; s < o.length; s++) Dt(t, o[s].sSearch, s, l(o[s]), o[s].bSmart, o[s].bCaseInsensitive);
            St(t);
        } else i(e);
        (t.bFiltered = !0), fe(t, null, "search", [t]);
    }
    function St(e) {
        for (var n, a, r = s.ext.search, o = e.aiDisplay, i = 0, l = r.length; i < l; i++) {
            for (var u = [], c = 0, f = o.length; c < f; c++) (a = o[c]), (n = e.aoData[a]), r[i](e, n._aFilterData, a, n._aData, c) && u.push(a);
            (o.length = 0), t.merge(o, u);
        }
    }
    function Dt(t, e, n, a, r, o) {
        if ("" !== e) {
            for (var i, l = [], s = t.aiDisplay, u = _t(e, a, r, o), c = 0; c < s.length; c++) (i = t.aoData[s[c]]._aFilterData[n]), u.test(i) && l.push(s[c]);
            t.aiDisplay = l;
        }
    }
    function yt(t, e, n, a, r, o) {
        var i,
            l,
            u,
            c = _t(e, a, r, o),
            f = t.oPreviousSearch.sSearch,
            d = t.aiDisplayMaster,
            h = [];
        if ((0 !== s.ext.search.length && (n = !0), (l = xt(t)), e.length <= 0)) t.aiDisplay = d.slice();
        else {
            for ((l || n || a || f.length > e.length || 0 !== e.indexOf(f) || t.bSorted) && (t.aiDisplay = d.slice()), i = t.aiDisplay, u = 0; u < i.length; u++) c.test(t.aoData[i[u]]._sFilterRow) && h.push(i[u]);
            t.aiDisplay = h;
        }
    }
    function _t(e, n, a, r) {
        if (((e = n ? e : wt(e)), a)) {
            var o = t.map(e.match(/"[^"]+"|[^ ]+/g) || [""], function (t) {
                if ('"' === t.charAt(0)) {
                    var e = t.match(/^"(.*)"$/);
                    t = e ? e[1] : t;
                }
                return t.replace('"', "");
            });
            e = "^(?=.*?" + o.join(")(?=.*?") + ").*$";
        }
        return new RegExp(e, r ? "i" : "");
    }
    var wt = s.util.escapeRegex,
        Tt = t("<div>")[0],
        Ct = Tt.textContent !== a;
    function xt(t) {
        var e,
            n,
            a,
            r,
            o,
            i,
            l,
            u,
            c = t.aoColumns,
            f = s.ext.type.search,
            d = !1;
        for (n = 0, r = t.aoData.length; n < r; n++)
            if (!(u = t.aoData[n])._aFilterData) {
                for (i = [], a = 0, o = c.length; a < o; a++)
                    (e = c[a]).bSearchable ? ((l = J(t, n, a, "filter")), f[e.sType] && (l = f[e.sType](l)), null === l && (l = ""), "string" != typeof l && l.toString && (l = l.toString())) : (l = ""),
                        l.indexOf && -1 !== l.indexOf("&") && ((Tt.innerHTML = l), (l = Ct ? Tt.textContent : Tt.innerText)),
                        l.replace && (l = l.replace(/[\r\n\u2028]/g, "")),
                        i.push(l);
                (u._aFilterData = i), (u._sFilterRow = i.join("  ")), (d = !0);
            }
        return d;
    }
    function It(t) {
        return { search: t.sSearch, smart: t.bSmart, regex: t.bRegex, caseInsensitive: t.bCaseInsensitive };
    }
    function At(t) {
        return { sSearch: t.search, bSmart: t.smart, bRegex: t.regex, bCaseInsensitive: t.caseInsensitive };
    }
    function Ft(e) {
        var n = e.sTableId,
            a = e.aanFeatures.i,
            r = t("<div/>", { class: e.oClasses.sInfo, id: a ? null : n + "_info" });
        return a || (e.aoDrawCallback.push({ fn: Lt, sName: "information" }), r.attr("role", "status").attr("aria-live", "polite"), t(e.nTable).attr("aria-describedby", n + "_info")), r[0];
    }
    function Lt(e) {
        var n = e.aanFeatures.i;
        if (0 !== n.length) {
            var a = e.oLanguage,
                r = e._iDisplayStart + 1,
                o = e.fnDisplayEnd(),
                i = e.fnRecordsTotal(),
                l = e.fnRecordsDisplay(),
                s = l ? a.sInfo : a.sInfoEmpty;
            l !== i && (s += " " + a.sInfoFiltered), (s = Rt(e, (s += a.sInfoPostFix)));
            var u = a.fnInfoCallback;
            null !== u && (s = u.call(e.oInstance, e, r, o, i, l, s)), t(n).html(s);
        }
    }
    function Rt(t, e) {
        var n = t.fnFormatNumber,
            a = t._iDisplayStart + 1,
            r = t._iDisplayLength,
            o = t.fnRecordsDisplay(),
            i = -1 === r;
        return e
            .replace(/_START_/g, n.call(t, a))
            .replace(/_END_/g, n.call(t, t.fnDisplayEnd()))
            .replace(/_MAX_/g, n.call(t, t.fnRecordsTotal()))
            .replace(/_TOTAL_/g, n.call(t, o))
            .replace(/_PAGE_/g, n.call(t, i ? 1 : Math.ceil(a / r)))
            .replace(/_PAGES_/g, n.call(t, i ? 1 : Math.ceil(o / r)));
    }
    function Pt(t) {
        var e,
            n,
            a,
            r = t.iInitDisplayStart,
            o = t.aoColumns,
            i = t.oFeatures,
            l = t.bDeferLoading;
        if (t.bInitialised) {
            for (ut(t), ot(t), it(t, t.aoHeader), it(t, t.aoFooter), Wt(t, !0), i.bAutoWidth && Xt(t), e = 0, n = o.length; e < n; e++) (a = o[e]).sWidth && (a.nTh.style.width = zt(a.sWidth));
            fe(t, null, "preInit", [t]), st(t);
            var s = pe(t);
            ("ssp" != s || l) &&
                ("ajax" == s
                    ? dt(t, [], function (n) {
                          var a = bt(t, n);
                          for (e = 0; e < a.length; e++) V(t, a[e]);
                          (t.iInitDisplayStart = r), st(t), Wt(t, !1), jt(t, n);
                      })
                    : (Wt(t, !1), jt(t)));
        } else
            setTimeout(function () {
                Pt(t);
            }, 200);
    }
    function jt(t, e) {
        (t._bInitComplete = !0), (e || t.oInit.aaData) && O(t), fe(t, null, "plugin-init", [t, e]), fe(t, "aoInitComplete", "init", [t, e]);
    }
    function Nt(t, e) {
        var n = parseInt(e, 10);
        (t._iDisplayLength = n), de(t), fe(t, null, "length", [t, n]);
    }
    function Ht(e) {
        for (
            var n = e.oClasses, a = e.sTableId, r = e.aLengthMenu, o = t.isArray(r[0]), i = o ? r[0] : r, l = o ? r[1] : r, s = t("<select/>", { name: a + "_length", "aria-controls": a, class: n.sLengthSelect }), u = 0, c = i.length;
            u < c;
            u++
        )
            s[0][u] = new Option("number" == typeof l[u] ? e.fnFormatNumber(l[u]) : l[u], i[u]);
        var f = t("<div><label/></div>").addClass(n.sLength);
        return (
            e.aanFeatures.l || (f[0].id = a + "_length"),
            f.children().append(e.oLanguage.sLengthMenu.replace("_MENU_", s[0].outerHTML)),
            t("select", f)
                .val(e._iDisplayLength)
                .on("change.DT", function (n) {
                    Nt(e, t(this).val()), lt(e);
                }),
            t(e.nTable).on("length.dt.DT", function (n, a, r) {
                e === a && t("select", f).val(r);
            }),
            f[0]
        );
    }
    function Ot(e) {
        var n = e.sPaginationType,
            a = s.ext.pager[n],
            r = "function" == typeof a,
            o = function (t) {
                lt(t);
            },
            i = t("<div/>").addClass(e.oClasses.sPaging + n)[0],
            l = e.aanFeatures;
        return (
            r || a.fnInit(e, i, o),
            l.p ||
                ((i.id = e.sTableId + "_paginate"),
                e.aoDrawCallback.push({
                    fn: function (t) {
                        if (r) {
                            var e,
                                n,
                                i = t._iDisplayStart,
                                s = t._iDisplayLength,
                                u = t.fnRecordsDisplay(),
                                c = -1 === s,
                                f = c ? 0 : Math.ceil(i / s),
                                d = c ? 1 : Math.ceil(u / s),
                                h = a(f, d);
                            for (e = 0, n = l.p.length; e < n; e++) he(t, "pageButton")(t, l.p[e], e, h, f, d);
                        } else a.fnUpdate(t, o);
                    },
                    sName: "pagination",
                })),
            i
        );
    }
    function kt(t, e, n) {
        var a = t._iDisplayStart,
            r = t._iDisplayLength,
            o = t.fnRecordsDisplay();
        0 === o || -1 === r
            ? (a = 0)
            : "number" == typeof e
            ? (a = e * r) > o && (a = 0)
            : "first" == e
            ? (a = 0)
            : "previous" == e
            ? (a = r >= 0 ? a - r : 0) < 0 && (a = 0)
            : "next" == e
            ? a + r < o && (a += r)
            : "last" == e
            ? (a = Math.floor((o - 1) / r) * r)
            : ie(t, 0, "Unknown paging action: " + e, 5);
        var i = t._iDisplayStart !== a;
        return (t._iDisplayStart = a), i && (fe(t, null, "page", [t]), n && lt(t)), i;
    }
    function Mt(e) {
        return t("<div/>", { id: e.aanFeatures.r ? null : e.sTableId + "_processing", class: e.oClasses.sProcessing })
            .html(e.oLanguage.sProcessing)
            .insertBefore(e.nTable)[0];
    }
    function Wt(e, n) {
        e.oFeatures.bProcessing && t(e.aanFeatures.r).css("display", n ? "block" : "none"), fe(e, null, "processing", [e, n]);
    }
    function Et(e) {
        var n = t(e.nTable);
        n.attr("role", "grid");
        var a = e.oScroll;
        if ("" === a.sX && "" === a.sY) return e.nTable;
        var r = a.sX,
            o = a.sY,
            i = e.oClasses,
            l = n.children("caption"),
            s = l.length ? l[0]._captionSide : null,
            u = t(n[0].cloneNode(!1)),
            c = t(n[0].cloneNode(!1)),
            f = n.children("tfoot"),
            d = "<div/>",
            h = function (t) {
                return t ? zt(t) : null;
            };
        f.length || (f = null);
        var p = t(d, { class: i.sScrollWrapper })
            .append(
                t(d, { class: i.sScrollHead })
                    .css({ overflow: "hidden", position: "relative", border: 0, width: r ? h(r) : "100%" })
                    .append(
                        t(d, { class: i.sScrollHeadInner })
                            .css({ "box-sizing": "content-box", width: a.sXInner || "100%" })
                            .append(
                                u
                                    .removeAttr("id")
                                    .css("margin-left", 0)
                                    .append("top" === s ? l : null)
                                    .append(n.children("thead"))
                            )
                    )
            )
            .append(
                t(d, { class: i.sScrollBody })
                    .css({ position: "relative", overflow: "auto", width: h(r) })
                    .append(n)
            );
        f &&
            p.append(
                t(d, { class: i.sScrollFoot })
                    .css({ overflow: "hidden", border: 0, width: r ? h(r) : "100%" })
                    .append(
                        t(d, { class: i.sScrollFootInner }).append(
                            c
                                .removeAttr("id")
                                .css("margin-left", 0)
                                .append("bottom" === s ? l : null)
                                .append(n.children("tfoot"))
                        )
                    )
            );
        var g = p.children(),
            b = g[0],
            v = g[1],
            m = f ? g[2] : null;
        return (
            r &&
                t(v).on("scroll.DT", function (t) {
                    var e = this.scrollLeft;
                    (b.scrollLeft = e), f && (m.scrollLeft = e);
                }),
            t(v).css("max-height", o),
            a.bCollapse || t(v).css("height", o),
            (e.nScrollHead = b),
            (e.nScrollBody = v),
            (e.nScrollFoot = m),
            e.aoDrawCallback.push({ fn: Bt, sName: "scrolling" }),
            p[0]
        );
    }
    function Bt(e) {
        var n,
            r,
            o,
            i,
            l,
            s,
            u,
            c,
            f,
            d = e.oScroll,
            h = d.sX,
            p = d.sXInner,
            g = d.sY,
            b = d.iBarWidth,
            v = t(e.nScrollHead),
            m = v[0].style,
            S = v.children("div"),
            y = S[0].style,
            _ = S.children("table"),
            w = e.nScrollBody,
            T = t(w),
            C = w.style,
            x = t(e.nScrollFoot).children("div"),
            I = x.children("table"),
            A = t(e.nTHead),
            F = t(e.nTable),
            L = F[0],
            R = L.style,
            P = e.nTFoot ? t(e.nTFoot) : null,
            j = e.oBrowser,
            N = j.bScrollOversize,
            H = D(e.aoColumns, "nTh"),
            M = [],
            W = [],
            E = [],
            B = [],
            U = function (t) {
                var e = t.style;
                (e.paddingTop = "0"), (e.paddingBottom = "0"), (e.borderTopWidth = "0"), (e.borderBottomWidth = "0"), (e.height = 0);
            },
            V = w.scrollHeight > w.clientHeight;
        if (e.scrollBarVis !== V && e.scrollBarVis !== a) return (e.scrollBarVis = V), void O(e);
        (e.scrollBarVis = V),
            F.children("thead, tfoot").remove(),
            P && ((s = P.clone().prependTo(F)), (r = P.find("tr")), (i = s.find("tr"))),
            (l = A.clone().prependTo(F)),
            (n = A.find("tr")),
            (o = l.find("tr")),
            l.find("th, td").removeAttr("tabindex"),
            h || ((C.width = "100%"), (v[0].style.width = "100%")),
            t.each(ft(e, l), function (t, n) {
                (u = k(e, t)), (n.style.width = e.aoColumns[u].sWidth);
            }),
            P &&
                Ut(function (t) {
                    t.style.width = "";
                }, i),
            (f = F.outerWidth()),
            "" === h
                ? ((R.width = "100%"), N && (F.find("tbody").height() > w.offsetHeight || "scroll" == T.css("overflow-y")) && (R.width = zt(F.outerWidth() - b)), (f = F.outerWidth()))
                : "" !== p && ((R.width = zt(p)), (f = F.outerWidth())),
            Ut(U, o),
            Ut(function (e) {
                E.push(e.innerHTML), M.push(zt(t(e).css("width")));
            }, o),
            Ut(function (e, n) {
                -1 !== t.inArray(e, H) && (e.style.width = M[n]);
            }, n),
            t(o).height(0),
            P &&
                (Ut(U, i),
                Ut(function (e) {
                    B.push(e.innerHTML), W.push(zt(t(e).css("width")));
                }, i),
                Ut(function (t, e) {
                    t.style.width = W[e];
                }, r),
                t(i).height(0)),
            Ut(function (t, e) {
                (t.innerHTML = '<div class="dataTables_sizing">' + E[e] + "</div>"), (t.childNodes[0].style.height = "0"), (t.childNodes[0].style.overflow = "hidden"), (t.style.width = M[e]);
            }, o),
            P &&
                Ut(function (t, e) {
                    (t.innerHTML = '<div class="dataTables_sizing">' + B[e] + "</div>"), (t.childNodes[0].style.height = "0"), (t.childNodes[0].style.overflow = "hidden"), (t.style.width = W[e]);
                }, i),
            F.outerWidth() < f
                ? ((c = w.scrollHeight > w.offsetHeight || "scroll" == T.css("overflow-y") ? f + b : f),
                  N && (w.scrollHeight > w.offsetHeight || "scroll" == T.css("overflow-y")) && (R.width = zt(c - b)),
                  ("" !== h && "" === p) || ie(e, 1, "Possible column misalignment", 6))
                : (c = "100%"),
            (C.width = zt(c)),
            (m.width = zt(c)),
            P && (e.nScrollFoot.style.width = zt(c)),
            g || (N && (C.height = zt(L.offsetHeight + b)));
        var X = F.outerWidth();
        (_[0].style.width = zt(X)), (y.width = zt(X));
        var J = F.height() > w.clientHeight || "scroll" == T.css("overflow-y"),
            q = "padding" + (j.bScrollbarLeft ? "Left" : "Right");
        (y[q] = J ? b + "px" : "0px"),
            P && ((I[0].style.width = zt(X)), (x[0].style.width = zt(X)), (x[0].style[q] = J ? b + "px" : "0px")),
            F.children("colgroup").insertBefore(F.children("thead")),
            T.trigger("scroll"),
            (!e.bSorted && !e.bFiltered) || e._drawHold || (w.scrollTop = 0);
    }
    function Ut(t, e, n) {
        for (var a, r, o = 0, i = 0, l = e.length; i < l; ) {
            for (a = e[i].firstChild, r = n ? n[i].firstChild : null; a; ) 1 === a.nodeType && (n ? t(a, r, o) : t(a, o), o++), (a = a.nextSibling), (r = n ? r.nextSibling : null);
            i++;
        }
    }
    var Vt = /<.*?>/g;
    function Xt(n) {
        var a,
            r,
            o,
            i = n.nTable,
            l = n.aoColumns,
            s = n.oScroll,
            u = s.sY,
            c = s.sX,
            f = s.sXInner,
            d = l.length,
            h = E(n, "bVisible"),
            p = t("th", n.nTHead),
            g = i.getAttribute("width"),
            b = i.parentNode,
            v = !1,
            m = n.oBrowser,
            S = m.bScrollOversize,
            D = i.style.width;
        for (D && -1 !== D.indexOf("%") && (g = D), a = 0; a < h.length; a++) null !== (r = l[h[a]]).sWidth && ((r.sWidth = qt(r.sWidthOrig, b)), (v = !0));
        if (S || (!v && !c && !u && d == W(n) && d == p.length))
            for (a = 0; a < d; a++) {
                var y = k(n, a);
                null !== y && (l[y].sWidth = zt(p.eq(a).width()));
            }
        else {
            var _ = t(i).clone().css("visibility", "hidden").removeAttr("id");
            _.find("tbody tr").remove();
            var w = t("<tr/>").appendTo(_.find("tbody"));
            for (_.find("thead, tfoot").remove(), _.append(t(n.nTHead).clone()).append(t(n.nTFoot).clone()), _.find("tfoot th, tfoot td").css("width", ""), p = ft(n, _.find("thead")[0]), a = 0; a < h.length; a++)
                (r = l[h[a]]),
                    (p[a].style.width = null !== r.sWidthOrig && "" !== r.sWidthOrig ? zt(r.sWidthOrig) : ""),
                    r.sWidthOrig && c && t(p[a]).append(t("<div/>").css({ width: r.sWidthOrig, margin: 0, padding: 0, border: 0, height: 1 }));
            if (n.aoData.length) for (a = 0; a < h.length; a++) (r = l[(o = h[a])]), t(Gt(n, o)).clone(!1).append(r.sContentPadding).appendTo(w);
            t("[name]", _).removeAttr("name");
            var T = t("<div/>")
                .css(c || u ? { position: "absolute", top: 0, left: 0, height: 1, right: 0, overflow: "hidden" } : {})
                .append(_)
                .appendTo(b);
            c && f ? _.width(f) : c ? (_.css("width", "auto"), _.removeAttr("width"), _.width() < b.clientWidth && g && _.width(b.clientWidth)) : u ? _.width(b.clientWidth) : g && _.width(g);
            var C = 0;
            for (a = 0; a < h.length; a++) {
                var x = t(p[a]),
                    I = x.outerWidth() - x.width(),
                    A = m.bBounding ? Math.ceil(p[a].getBoundingClientRect().width) : x.outerWidth();
                (C += A), (l[h[a]].sWidth = zt(A - I));
            }
            (i.style.width = zt(C)), T.remove();
        }
        if ((g && (i.style.width = zt(g)), (g || c) && !n._reszEvt)) {
            var F = function () {
                t(e).on(
                    "resize.DT-" + n.sInstance,
                    Jt(function () {
                        O(n);
                    })
                );
            };
            S ? setTimeout(F, 1e3) : F(), (n._reszEvt = !0);
        }
    }
    var Jt = s.util.throttle;
    function qt(e, a) {
        if (!e) return 0;
        var r = t("<div/>")
                .css("width", zt(e))
                .appendTo(a || n.body),
            o = r[0].offsetWidth;
        return r.remove(), o;
    }
    function Gt(e, n) {
        var a = $t(e, n);
        if (a < 0) return null;
        var r = e.aoData[a];
        return r.nTr ? r.anCells[n] : t("<td/>").html(J(e, a, n, "display"))[0];
    }
    function $t(t, e) {
        for (var n, a = -1, r = -1, o = 0, i = t.aoData.length; o < i; o++) (n = (n = (n = J(t, o, e, "display") + "").replace(Vt, "")).replace(/&nbsp;/g, " ")).length > a && ((a = n.length), (r = o));
        return r;
    }
    function zt(t) {
        return null === t ? "0px" : "number" == typeof t ? (t < 0 ? "0px" : t + "px") : t.match(/\d$/) ? t + "px" : t;
    }
    function Yt(e) {
        var n,
            r,
            o,
            i,
            l,
            u,
            c,
            f = [],
            d = e.aoColumns,
            h = e.aaSortingFixed,
            p = t.isPlainObject(h),
            g = [],
            b = function (e) {
                e.length && !t.isArray(e[0]) ? g.push(e) : t.merge(g, e);
            };
        for (t.isArray(h) && b(h), p && h.pre && b(h.pre), b(e.aaSorting), p && h.post && b(h.post), n = 0; n < g.length; n++)
            for (r = 0, o = (i = d[(c = g[n][0])].aDataSort).length; r < o; r++)
                (u = d[(l = i[r])].sType || "string"), g[n]._idx === a && (g[n]._idx = t.inArray(g[n][1], d[l].asSorting)), f.push({ src: c, col: l, dir: g[n][1], index: g[n]._idx, type: u, formatter: s.ext.type.order[u + "-pre"] });
        return f;
    }
    function Zt(t) {
        var e,
            n,
            a,
            r,
            o,
            i = [],
            l = s.ext.type.order,
            u = t.aoData,
            c = (t.aoColumns, 0),
            f = t.aiDisplayMaster;
        for (B(t), e = 0, n = (o = Yt(t)).length; e < n; e++) (r = o[e]).formatter && c++, ne(t, r.col);
        if ("ssp" != pe(t) && 0 !== o.length) {
            for (e = 0, a = f.length; e < a; e++) i[f[e]] = e;
            c === o.length
                ? f.sort(function (t, e) {
                      var n,
                          a,
                          r,
                          l,
                          s,
                          c = o.length,
                          f = u[t]._aSortData,
                          d = u[e]._aSortData;
                      for (r = 0; r < c; r++) if (0 !== (l = (n = f[(s = o[r]).col]) < (a = d[s.col]) ? -1 : n > a ? 1 : 0)) return "asc" === s.dir ? l : -l;
                      return (n = i[t]) < (a = i[e]) ? -1 : n > a ? 1 : 0;
                  })
                : f.sort(function (t, e) {
                      var n,
                          a,
                          r,
                          s,
                          c,
                          f = o.length,
                          d = u[t]._aSortData,
                          h = u[e]._aSortData;
                      for (r = 0; r < f; r++) if (((n = d[(c = o[r]).col]), (a = h[c.col]), 0 !== (s = (l[c.type + "-" + c.dir] || l["string-" + c.dir])(n, a)))) return s;
                      return (n = i[t]) < (a = i[e]) ? -1 : n > a ? 1 : 0;
                  });
        }
        t.bSorted = !0;
    }
    function Kt(t) {
        for (var e, n, a = t.aoColumns, r = Yt(t), o = t.oLanguage.oAria, i = 0, l = a.length; i < l; i++) {
            var s = a[i],
                u = s.asSorting,
                c = s.sTitle.replace(/<.*?>/g, ""),
                f = s.nTh;
            f.removeAttribute("aria-sort"),
                s.bSortable
                    ? (r.length > 0 && r[0].col == i ? (f.setAttribute("aria-sort", "asc" == r[0].dir ? "ascending" : "descending"), (n = u[r[0].index + 1] || u[0])) : (n = u[0]),
                      (e = c + ("asc" === n ? o.sSortAscending : o.sSortDescending)))
                    : (e = c),
                f.setAttribute("aria-label", e);
        }
    }
    function Qt(e, n, r, o) {
        var i,
            l = e.aoColumns[n],
            s = e.aaSorting,
            u = l.asSorting,
            c = function (e, n) {
                var r = e._idx;
                return r === a && (r = t.inArray(e[1], u)), r + 1 < u.length ? r + 1 : n ? null : 0;
            };
        if (("number" == typeof s[0] && (s = e.aaSorting = [s]), r && e.oFeatures.bSortMulti)) {
            var f = t.inArray(n, D(s, "0"));
            -1 !== f ? (null === (i = c(s[f], !0)) && 1 === s.length && (i = 0), null === i ? s.splice(f, 1) : ((s[f][1] = u[i]), (s[f]._idx = i))) : (s.push([n, u[0], 0]), (s[s.length - 1]._idx = 0));
        } else s.length && s[0][0] == n ? ((i = c(s[0])), (s.length = 1), (s[0][1] = u[i]), (s[0]._idx = i)) : ((s.length = 0), s.push([n, u[0]]), (s[0]._idx = 0));
        st(e), "function" == typeof o && o(e);
    }
    function te(t, e, n, a) {
        var r = t.aoColumns[n];
        ue(e, {}, function (e) {
            !1 !== r.bSortable &&
                (t.oFeatures.bProcessing
                    ? (Wt(t, !0),
                      setTimeout(function () {
                          Qt(t, n, e.shiftKey, a), "ssp" !== pe(t) && Wt(t, !1);
                      }, 0))
                    : Qt(t, n, e.shiftKey, a));
        });
    }
    function ee(e) {
        var n,
            a,
            r,
            o = e.aLastSort,
            i = e.oClasses.sSortColumn,
            l = Yt(e),
            s = e.oFeatures;
        if (s.bSort && s.bSortClasses) {
            for (n = 0, a = o.length; n < a; n++) (r = o[n].src), t(D(e.aoData, "anCells", r)).removeClass(i + (n < 2 ? n + 1 : 3));
            for (n = 0, a = l.length; n < a; n++) (r = l[n].src), t(D(e.aoData, "anCells", r)).addClass(i + (n < 2 ? n + 1 : 3));
        }
        e.aLastSort = l;
    }
    function ne(t, e) {
        var n,
            a,
            r,
            o = t.aoColumns[e],
            i = s.ext.order[o.sSortDataType];
        i && (n = i.call(t.oInstance, t, e, M(t, e)));
        for (var l = s.ext.type.order[o.sType + "-pre"], u = 0, c = t.aoData.length; u < c; u++)
            (a = t.aoData[u])._aSortData || (a._aSortData = []), (a._aSortData[e] && !i) || ((r = i ? n[u] : J(t, u, e, "sort")), (a._aSortData[e] = l ? l(r) : r));
    }
    function ae(e) {
        if (e.oFeatures.bStateSave && !e.bDestroying) {
            var n = {
                time: +new Date(),
                start: e._iDisplayStart,
                length: e._iDisplayLength,
                order: t.extend(!0, [], e.aaSorting),
                search: It(e.oPreviousSearch),
                columns: t.map(e.aoColumns, function (t, n) {
                    return { visible: t.bVisible, search: It(e.aoPreSearchCols[n]) };
                }),
            };
            fe(e, "aoStateSaveParams", "stateSaveParams", [e, n]), (e.oSavedState = n), e.fnStateSaveCallback.call(e.oInstance, e, n);
        }
    }
    function re(e, n, r) {
        var o,
            i,
            l = e.aoColumns,
            s = function (n) {
                if (n && n.time) {
                    var s = fe(e, "aoStateLoadParams", "stateLoadParams", [e, n]);
                    if (-1 === t.inArray(!1, s)) {
                        var u = e.iStateDuration;
                        if (u > 0 && n.time < +new Date() - 1e3 * u) r();
                        else if (n.columns && l.length !== n.columns.length) r();
                        else {
                            if (
                                ((e.oLoadedState = t.extend(!0, {}, n)),
                                n.start !== a && ((e._iDisplayStart = n.start), (e.iInitDisplayStart = n.start)),
                                n.length !== a && (e._iDisplayLength = n.length),
                                n.order !== a &&
                                    ((e.aaSorting = []),
                                    t.each(n.order, function (t, n) {
                                        e.aaSorting.push(n[0] >= l.length ? [0, n[1]] : n);
                                    })),
                                n.search !== a && t.extend(e.oPreviousSearch, At(n.search)),
                                n.columns)
                            )
                                for (o = 0, i = n.columns.length; o < i; o++) {
                                    var c = n.columns[o];
                                    c.visible !== a && (l[o].bVisible = c.visible), c.search !== a && t.extend(e.aoPreSearchCols[o], At(c.search));
                                }
                            fe(e, "aoStateLoaded", "stateLoaded", [e, n]), r();
                        }
                    } else r();
                } else r();
            };
        if (e.oFeatures.bStateSave) {
            var u = e.fnStateLoadCallback.call(e.oInstance, e, s);
            u !== a && s(u);
        } else r();
    }
    function oe(e) {
        var n = s.settings,
            a = t.inArray(e, D(n, "nTable"));
        return -1 !== a ? n[a] : null;
    }
    function ie(t, n, a, r) {
        if (((a = "DataTables warning: " + (t ? "table id=" + t.sTableId + " - " : "") + a), r && (a += ". For more information about this error, please see http://datatables.net/tn/" + r), n)) e.console && console.log && console.log(a);
        else {
            var o = s.ext,
                i = o.sErrMode || o.errMode;
            if ((t && fe(t, null, "error", [t, r, a]), "alert" == i)) alert(a);
            else {
                if ("throw" == i) throw new Error(a);
                "function" == typeof i && i(t, r, a);
            }
        }
    }
    function le(e, n, r, o) {
        t.isArray(r)
            ? t.each(r, function (a, r) {
                  t.isArray(r) ? le(e, n, r[0], r[1]) : le(e, n, r);
              })
            : (o === a && (o = r), n[r] !== a && (e[o] = n[r]));
    }
    function se(e, n, a) {
        var r;
        for (var o in n) n.hasOwnProperty(o) && ((r = n[o]), t.isPlainObject(r) ? (t.isPlainObject(e[o]) || (e[o] = {}), t.extend(!0, e[o], r)) : a && "data" !== o && "aaData" !== o && t.isArray(r) ? (e[o] = r.slice()) : (e[o] = r));
        return e;
    }
    function ue(e, n, a) {
        t(e)
            .on("click.DT", n, function (n) {
                t(e).trigger("blur"), a(n);
            })
            .on("keypress.DT", n, function (t) {
                13 === t.which && (t.preventDefault(), a(t));
            })
            .on("selectstart.DT", function () {
                return !1;
            });
    }
    function ce(t, e, n, a) {
        n && t[e].push({ fn: n, sName: a });
    }
    function fe(e, n, a, r) {
        var o = [];
        if (
            (n &&
                (o = t.map(e[n].slice().reverse(), function (t, n) {
                    return t.fn.apply(e.oInstance, r);
                })),
            null !== a)
        ) {
            var i = t.Event(a + ".dt");
            t(e.nTable).trigger(i, r), o.push(i.result);
        }
        return o;
    }
    function de(t) {
        var e = t._iDisplayStart,
            n = t.fnDisplayEnd(),
            a = t._iDisplayLength;
        e >= n && (e = n - a), (e -= e % a), (-1 === a || e < 0) && (e = 0), (t._iDisplayStart = e);
    }
    function he(e, n) {
        var a = e.renderer,
            r = s.ext.renderer[n];
        return t.isPlainObject(a) && a[n] ? r[a[n]] || r._ : ("string" == typeof a && r[a]) || r._;
    }
    function pe(t) {
        return t.oFeatures.bServerSide ? "ssp" : t.ajax || t.sAjaxSource ? "ajax" : "dom";
    }
    var ge = [],
        be = Array.prototype;
    (o = function (e, n) {
        if (!(this instanceof o)) return new o(e, n);
        var a = [],
            r = function (e) {
                var n = (function (e) {
                    var n,
                        a,
                        r = s.settings,
                        o = t.map(r, function (t, e) {
                            return t.nTable;
                        });
                    return e
                        ? e.nTable && e.oApi
                            ? [e]
                            : e.nodeName && "table" === e.nodeName.toLowerCase()
                            ? -1 !== (n = t.inArray(e, o))
                                ? [r[n]]
                                : null
                            : e && "function" == typeof e.settings
                            ? e.settings().toArray()
                            : ("string" == typeof e ? (a = t(e)) : e instanceof t && (a = e),
                              a
                                  ? a
                                        .map(function (e) {
                                            return -1 !== (n = t.inArray(this, o)) ? r[n] : null;
                                        })
                                        .toArray()
                                  : void 0)
                        : [];
                })(e);
                n && a.push.apply(a, n);
            };
        if (t.isArray(e)) for (var i = 0, l = e.length; i < l; i++) r(e[i]);
        else r(e);
        (this.context = C(a)), n && t.merge(this, n), (this.selector = { rows: null, cols: null, opts: null }), o.extend(this, this, ge);
    }),
        (s.Api = o),
        t.extend(o.prototype, {
            any: function () {
                return 0 !== this.count();
            },
            concat: be.concat,
            context: [],
            count: function () {
                return this.flatten().length;
            },
            each: function (t) {
                for (var e = 0, n = this.length; e < n; e++) t.call(this, this[e], e, this);
                return this;
            },
            eq: function (t) {
                var e = this.context;
                return e.length > t ? new o(e[t], this[t]) : null;
            },
            filter: function (t) {
                var e = [];
                if (be.filter) e = be.filter.call(this, t, this);
                else for (var n = 0, a = this.length; n < a; n++) t.call(this, this[n], n, this) && e.push(this[n]);
                return new o(this.context, e);
            },
            flatten: function () {
                var t = [];
                return new o(this.context, t.concat.apply(t, this.toArray()));
            },
            join: be.join,
            indexOf:
                be.indexOf ||
                function (t, e) {
                    for (var n = e || 0, a = this.length; n < a; n++) if (this[n] === t) return n;
                    return -1;
                },
            iterator: function (t, e, n, r) {
                var i,
                    l,
                    s,
                    u,
                    c,
                    f,
                    d,
                    h,
                    p = [],
                    g = this.context,
                    b = this.selector;
                for ("string" == typeof t && ((r = n), (n = e), (e = t), (t = !1)), l = 0, s = g.length; l < s; l++) {
                    var v = new o(g[l]);
                    if ("table" === e) (i = n.call(v, g[l], l)) !== a && p.push(i);
                    else if ("columns" === e || "rows" === e) (i = n.call(v, g[l], this[l], l)) !== a && p.push(i);
                    else if ("column" === e || "column-rows" === e || "row" === e || "cell" === e)
                        for (d = this[l], "column-rows" === e && (f = _e(g[l], b.opts)), u = 0, c = d.length; u < c; u++)
                            (h = d[u]), (i = "cell" === e ? n.call(v, g[l], h.row, h.column, l, u) : n.call(v, g[l], h, l, u, f)) !== a && p.push(i);
                }
                if (p.length || r) {
                    var m = new o(g, t ? p.concat.apply([], p) : p),
                        S = m.selector;
                    return (S.rows = b.rows), (S.cols = b.cols), (S.opts = b.opts), m;
                }
                return this;
            },
            lastIndexOf:
                be.lastIndexOf ||
                function (t, e) {
                    return this.indexOf.apply(this.toArray.reverse(), arguments);
                },
            length: 0,
            map: function (t) {
                var e = [];
                if (be.map) e = be.map.call(this, t, this);
                else for (var n = 0, a = this.length; n < a; n++) e.push(t.call(this, this[n], n));
                return new o(this.context, e);
            },
            pluck: function (t) {
                return this.map(function (e) {
                    return e[t];
                });
            },
            pop: be.pop,
            push: be.push,
            reduce:
                be.reduce ||
                function (t, e) {
                    return j(this, t, e, 0, this.length, 1);
                },
            reduceRight:
                be.reduceRight ||
                function (t, e) {
                    return j(this, t, e, this.length - 1, -1, -1);
                },
            reverse: be.reverse,
            selector: null,
            shift: be.shift,
            slice: function () {
                return new o(this.context, this);
            },
            sort: be.sort,
            splice: be.splice,
            toArray: function () {
                return be.slice.call(this);
            },
            to$: function () {
                return t(this);
            },
            toJQuery: function () {
                return t(this);
            },
            unique: function () {
                return new o(this.context, C(this));
            },
            unshift: be.unshift,
        }),
        (o.extend = function (t, e, n) {
            if (n.length && e && (e instanceof o || e.__dt_wrapper)) {
                var a,
                    r,
                    i,
                    l = function (t, e, n) {
                        return function () {
                            var a = e.apply(t, arguments);
                            return o.extend(a, a, n.methodExt), a;
                        };
                    };
                for (a = 0, r = n.length; a < r; a++) (e[(i = n[a]).name] = "function" === i.type ? l(t, i.val, i) : "object" === i.type ? {} : i.val), (e[i.name].__dt_wrapper = !0), o.extend(t, e[i.name], i.propExt);
            }
        }),
        (o.register = i = function (e, n) {
            if (t.isArray(e)) for (var a = 0, r = e.length; a < r; a++) o.register(e[a], n);
            else {
                var i,
                    l,
                    s,
                    u,
                    c = e.split("."),
                    f = ge,
                    d = function (t, e) {
                        for (var n = 0, a = t.length; n < a; n++) if (t[n].name === e) return t[n];
                        return null;
                    };
                for (i = 0, l = c.length; i < l; i++) {
                    var h = d(f, (s = (u = -1 !== c[i].indexOf("()")) ? c[i].replace("()", "") : c[i]));
                    h || ((h = { name: s, val: {}, methodExt: [], propExt: [], type: "object" }), f.push(h)),
                        i === l - 1 ? ((h.val = n), (h.type = "function" == typeof n ? "function" : t.isPlainObject(n) ? "object" : "other")) : (f = u ? h.methodExt : h.propExt);
                }
            }
        }),
        (o.registerPlural = l = function (e, n, r) {
            o.register(e, r),
                o.register(n, function () {
                    var e = r.apply(this, arguments);
                    return e === this ? this : e instanceof o ? (e.length ? (t.isArray(e[0]) ? new o(e.context, e[0]) : e[0]) : a) : e;
                });
        });
    var ve = function (e, n) {
        if (t.isArray(e))
            return t.map(e, function (t) {
                return ve(t, n);
            });
        if ("number" == typeof e) return [n[e]];
        var a = t.map(n, function (t, e) {
            return t.nTable;
        });
        return t(a)
            .filter(e)
            .map(function (e) {
                var r = t.inArray(this, a);
                return n[r];
            })
            .toArray();
    };
    i("tables()", function (t) {
        return t !== a && null !== t ? new o(ve(t, this.context)) : this;
    }),
        i("table()", function (t) {
            var e = this.tables(t),
                n = e.context;
            return n.length ? new o(n[0]) : e;
        }),
        l("tables().nodes()", "table().node()", function () {
            return this.iterator(
                "table",
                function (t) {
                    return t.nTable;
                },
                1
            );
        }),
        l("tables().body()", "table().body()", function () {
            return this.iterator(
                "table",
                function (t) {
                    return t.nTBody;
                },
                1
            );
        }),
        l("tables().header()", "table().header()", function () {
            return this.iterator(
                "table",
                function (t) {
                    return t.nTHead;
                },
                1
            );
        }),
        l("tables().footer()", "table().footer()", function () {
            return this.iterator(
                "table",
                function (t) {
                    return t.nTFoot;
                },
                1
            );
        }),
        l("tables().containers()", "table().container()", function () {
            return this.iterator(
                "table",
                function (t) {
                    return t.nTableWrapper;
                },
                1
            );
        }),
        i("draw()", function (t) {
            return this.iterator("table", function (e) {
                "page" === t ? lt(e) : ("string" == typeof t && (t = "full-hold" !== t), st(e, !1 === t));
            });
        }),
        i("page()", function (t) {
            return t === a
                ? this.page.info().page
                : this.iterator("table", function (e) {
                      kt(e, t);
                  });
        }),
        i("page.info()", function (t) {
            if (0 === this.context.length) return a;
            var e = this.context[0],
                n = e._iDisplayStart,
                r = e.oFeatures.bPaginate ? e._iDisplayLength : -1,
                o = e.fnRecordsDisplay(),
                i = -1 === r;
            return { page: i ? 0 : Math.floor(n / r), pages: i ? 1 : Math.ceil(o / r), start: n, end: e.fnDisplayEnd(), length: r, recordsTotal: e.fnRecordsTotal(), recordsDisplay: o, serverSide: "ssp" === pe(e) };
        }),
        i("page.len()", function (t) {
            return t === a
                ? 0 !== this.context.length
                    ? this.context[0]._iDisplayLength
                    : a
                : this.iterator("table", function (e) {
                      Nt(e, t);
                  });
        });
    var me = function (t, e, n) {
        if (n) {
            var a = new o(t);
            a.one("draw", function () {
                n(a.ajax.json());
            });
        }
        if ("ssp" == pe(t)) st(t, e);
        else {
            Wt(t, !0);
            var r = t.jqXHR;
            r && 4 !== r.readyState && r.abort(),
                dt(t, [], function (n) {
                    Q(t);
                    for (var a = bt(t, n), r = 0, o = a.length; r < o; r++) V(t, a[r]);
                    st(t, e), Wt(t, !1);
                });
        }
    };
    i("ajax.json()", function () {
        var t = this.context;
        if (t.length > 0) return t[0].json;
    }),
        i("ajax.params()", function () {
            var t = this.context;
            if (t.length > 0) return t[0].oAjaxData;
        }),
        i("ajax.reload()", function (t, e) {
            return this.iterator("table", function (n) {
                me(n, !1 === e, t);
            });
        }),
        i("ajax.url()", function (e) {
            var n = this.context;
            return e === a
                ? 0 === n.length
                    ? a
                    : (n = n[0]).ajax
                    ? t.isPlainObject(n.ajax)
                        ? n.ajax.url
                        : n.ajax
                    : n.sAjaxSource
                : this.iterator("table", function (n) {
                      t.isPlainObject(n.ajax) ? (n.ajax.url = e) : (n.ajax = e);
                  });
        }),
        i("ajax.url().load()", function (t, e) {
            return this.iterator("table", function (n) {
                me(n, !1 === e, t);
            });
        });
    var Se = function (e, n, o, i, l) {
            var s,
                u,
                c,
                f,
                d,
                h,
                p = [],
                g = typeof n;
            for ((n && "string" !== g && "function" !== g && n.length !== a) || (n = [n]), c = 0, f = n.length; c < f; c++)
                for (d = 0, h = (u = n[c] && n[c].split && !n[c].match(/[\[\(:]/) ? n[c].split(",") : [n[c]]).length; d < h; d++) (s = o("string" == typeof u[d] ? t.trim(u[d]) : u[d])) && s.length && (p = p.concat(s));
            var b = r.selector[e];
            if (b.length) for (c = 0, f = b.length; c < f; c++) p = b[c](i, l, p);
            return C(p);
        },
        De = function (e) {
            return e || (e = {}), e.filter && e.search === a && (e.search = e.filter), t.extend({ search: "none", order: "current", page: "all" }, e);
        },
        ye = function (t) {
            for (var e = 0, n = t.length; e < n; e++) if (t[e].length > 0) return (t[0] = t[e]), (t[0].length = 1), (t.length = 1), (t.context = [t.context[e]]), t;
            return (t.length = 0), t;
        },
        _e = function (e, n) {
            var a,
                r = [],
                o = e.aiDisplay,
                i = e.aiDisplayMaster,
                l = n.search,
                s = n.order,
                u = n.page;
            if ("ssp" == pe(e)) return "removed" === l ? [] : _(0, i.length);
            if ("current" == u) for (f = e._iDisplayStart, d = e.fnDisplayEnd(); f < d; f++) r.push(o[f]);
            else if ("current" == s || "applied" == s) {
                if ("none" == l) r = i.slice();
                else if ("applied" == l) r = o.slice();
                else if ("removed" == l) {
                    for (var c = {}, f = 0, d = o.length; f < d; f++) c[o[f]] = null;
                    r = t.map(i, function (t) {
                        return c.hasOwnProperty(t) ? null : t;
                    });
                }
            } else if ("index" == s || "original" == s) for (f = 0, d = e.aoData.length; f < d; f++) "none" == l ? r.push(f) : ((-1 === (a = t.inArray(f, o)) && "removed" == l) || (a >= 0 && "applied" == l)) && r.push(f);
            return r;
        };
    i("rows()", function (e, n) {
        e === a ? (e = "") : t.isPlainObject(e) && ((n = e), (e = "")), (n = De(n));
        var r = this.iterator(
            "table",
            function (r) {
                return (function (e, n, r) {
                    var o;
                    return Se(
                        "row",
                        n,
                        function (n) {
                            var i = b(n),
                                l = e.aoData;
                            if (null !== i && !r) return [i];
                            if ((o || (o = _e(e, r)), null !== i && -1 !== t.inArray(i, o))) return [i];
                            if (null === n || n === a || "" === n) return o;
                            if ("function" == typeof n)
                                return t.map(o, function (t) {
                                    var e = l[t];
                                    return n(t, e._aData, e.nTr) ? t : null;
                                });
                            if (n.nodeName) {
                                var s = n._DT_RowIndex,
                                    u = n._DT_CellIndex;
                                if (s !== a) return l[s] && l[s].nTr === n ? [s] : [];
                                if (u) return l[u.row] && l[u.row].nTr === n.parentNode ? [u.row] : [];
                                var c = t(n).closest("*[data-dt-row]");
                                return c.length ? [c.data("dt-row")] : [];
                            }
                            if ("string" == typeof n && "#" === n.charAt(0)) {
                                var f = e.aIds[n.replace(/^#/, "")];
                                if (f !== a) return [f.idx];
                            }
                            var d = w(y(e.aoData, o, "nTr"));
                            return t(d)
                                .filter(n)
                                .map(function () {
                                    return this._DT_RowIndex;
                                })
                                .toArray();
                        },
                        e,
                        r
                    );
                })(r, e, n);
            },
            1
        );
        return (r.selector.rows = e), (r.selector.opts = n), r;
    }),
        i("rows().nodes()", function () {
            return this.iterator(
                "row",
                function (t, e) {
                    return t.aoData[e].nTr || a;
                },
                1
            );
        }),
        i("rows().data()", function () {
            return this.iterator(
                !0,
                "rows",
                function (t, e) {
                    return y(t.aoData, e, "_aData");
                },
                1
            );
        }),
        l("rows().cache()", "row().cache()", function (t) {
            return this.iterator(
                "row",
                function (e, n) {
                    var a = e.aoData[n];
                    return "search" === t ? a._aFilterData : a._aSortData;
                },
                1
            );
        }),
        l("rows().invalidate()", "row().invalidate()", function (t) {
            return this.iterator("row", function (e, n) {
                et(e, n, t);
            });
        }),
        l("rows().indexes()", "row().index()", function () {
            return this.iterator(
                "row",
                function (t, e) {
                    return e;
                },
                1
            );
        }),
        l("rows().ids()", "row().id()", function (t) {
            for (var e = [], n = this.context, a = 0, r = n.length; a < r; a++)
                for (var i = 0, l = this[a].length; i < l; i++) {
                    var s = n[a].rowIdFn(n[a].aoData[this[a][i]]._aData);
                    e.push((!0 === t ? "#" : "") + s);
                }
            return new o(n, e);
        }),
        l("rows().remove()", "row().remove()", function () {
            var t = this;
            return (
                this.iterator("row", function (e, n, r) {
                    var o,
                        i,
                        l,
                        s,
                        u,
                        c,
                        f = e.aoData,
                        d = f[n];
                    for (f.splice(n, 1), o = 0, i = f.length; o < i; o++) if (((c = (u = f[o]).anCells), null !== u.nTr && (u.nTr._DT_RowIndex = o), null !== c)) for (l = 0, s = c.length; l < s; l++) c[l]._DT_CellIndex.row = o;
                    tt(e.aiDisplayMaster, n), tt(e.aiDisplay, n), tt(t[r], n, !1), e._iRecordsDisplay > 0 && e._iRecordsDisplay--, de(e);
                    var h = e.rowIdFn(d._aData);
                    h !== a && delete e.aIds[h];
                }),
                this.iterator("table", function (t) {
                    for (var e = 0, n = t.aoData.length; e < n; e++) t.aoData[e].idx = e;
                }),
                this
            );
        }),
        i("rows.add()", function (e) {
            var n = this.iterator(
                    "table",
                    function (t) {
                        var n,
                            a,
                            r,
                            o = [];
                        for (a = 0, r = e.length; a < r; a++) (n = e[a]).nodeName && "TR" === n.nodeName.toUpperCase() ? o.push(X(t, n)[0]) : o.push(V(t, n));
                        return o;
                    },
                    1
                ),
                a = this.rows(-1);
            return a.pop(), t.merge(a, n), a;
        }),
        i("row()", function (t, e) {
            return ye(this.rows(t, e));
        }),
        i("row().data()", function (e) {
            var n = this.context;
            if (e === a) return n.length && this.length ? n[0].aoData[this[0]]._aData : a;
            var r = n[0].aoData[this[0]];
            return (r._aData = e), t.isArray(e) && r.nTr && r.nTr.id && Z(n[0].rowId)(e, r.nTr.id), et(n[0], this[0], "data"), this;
        }),
        i("row().node()", function () {
            var t = this.context;
            return (t.length && this.length && t[0].aoData[this[0]].nTr) || null;
        }),
        i("row.add()", function (e) {
            e instanceof t && e.length && (e = e[0]);
            var n = this.iterator("table", function (t) {
                return e.nodeName && "TR" === e.nodeName.toUpperCase() ? X(t, e)[0] : V(t, e);
            });
            return this.row(n[0]);
        });
    var we = function (t, e) {
            var n = t.context;
            if (n.length) {
                var r = n[0].aoData[e !== a ? e : t[0]];
                r && r._details && (r._details.remove(), (r._detailsShow = a), (r._details = a));
            }
        },
        Te = function (t, e) {
            var n = t.context;
            if (n.length && t.length) {
                var a = n[0].aoData[t[0]];
                a._details && ((a._detailsShow = e), e ? a._details.insertAfter(a.nTr) : a._details.detach(), Ce(n[0]));
            }
        },
        Ce = function (t) {
            var e = new o(t),
                n = t.aoData;
            e.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details"),
                D(n, "_details").length > 0 &&
                    (e.on("draw.dt.DT_details", function (a, r) {
                        t === r &&
                            e
                                .rows({ page: "current" })
                                .eq(0)
                                .each(function (t) {
                                    var e = n[t];
                                    e._detailsShow && e._details.insertAfter(e.nTr);
                                });
                    }),
                    e.on("column-visibility.dt.DT_details", function (e, a, r, o) {
                        if (t === a) for (var i, l = W(a), s = 0, u = n.length; s < u; s++) (i = n[s])._details && i._details.children("td[colspan]").attr("colspan", l);
                    }),
                    e.on("destroy.dt.DT_details", function (a, r) {
                        if (t === r) for (var o = 0, i = n.length; o < i; o++) n[o]._details && we(e, o);
                    }));
        };
    i("row().child()", function (e, n) {
        var r = this.context;
        return e === a
            ? r.length && this.length
                ? r[0].aoData[this[0]]._details
                : a
            : (!0 === e
                  ? this.child.show()
                  : !1 === e
                  ? we(this)
                  : r.length &&
                    this.length &&
                    (function (e, n, a, r) {
                        var o = [],
                            i = function (n, a) {
                                if (t.isArray(n) || n instanceof t) for (var r = 0, l = n.length; r < l; r++) i(n[r], a);
                                else if (n.nodeName && "tr" === n.nodeName.toLowerCase()) o.push(n);
                                else {
                                    var s = t("<tr><td/></tr>").addClass(a);
                                    (t("td", s).addClass(a).html(n)[0].colSpan = W(e)), o.push(s[0]);
                                }
                            };
                        i(a, r), n._details && n._details.detach(), (n._details = t(o)), n._detailsShow && n._details.insertAfter(n.nTr);
                    })(r[0], r[0].aoData[this[0]], e, n),
              this);
    }),
        i(["row().child.show()", "row().child().show()"], function (t) {
            return Te(this, !0), this;
        }),
        i(["row().child.hide()", "row().child().hide()"], function () {
            return Te(this, !1), this;
        }),
        i(["row().child.remove()", "row().child().remove()"], function () {
            return we(this), this;
        }),
        i("row().child.isShown()", function () {
            var t = this.context;
            return (t.length && this.length && t[0].aoData[this[0]]._detailsShow) || !1;
        });
    var xe = /^([^:]+):(name|visIdx|visible)$/,
        Ie = function (t, e, n, a, r) {
            for (var o = [], i = 0, l = r.length; i < l; i++) o.push(J(t, r[i], e));
            return o;
        };
    i("columns()", function (e, n) {
        e === a ? (e = "") : t.isPlainObject(e) && ((n = e), (e = "")), (n = De(n));
        var r = this.iterator(
            "table",
            function (a) {
                return (function (e, n, a) {
                    var r = e.aoColumns,
                        o = D(r, "sName"),
                        i = D(r, "nTh");
                    return Se(
                        "column",
                        n,
                        function (n) {
                            var l = b(n);
                            if ("" === n) return _(r.length);
                            if (null !== l) return [l >= 0 ? l : r.length + l];
                            if ("function" == typeof n) {
                                var s = _e(e, a);
                                return t.map(r, function (t, a) {
                                    return n(a, Ie(e, a, 0, 0, s), i[a]) ? a : null;
                                });
                            }
                            var u = "string" == typeof n ? n.match(xe) : "";
                            if (u)
                                switch (u[2]) {
                                    case "visIdx":
                                    case "visible":
                                        var c = parseInt(u[1], 10);
                                        if (c < 0) {
                                            var f = t.map(r, function (t, e) {
                                                return t.bVisible ? e : null;
                                            });
                                            return [f[f.length + c]];
                                        }
                                        return [k(e, c)];
                                    case "name":
                                        return t.map(o, function (t, e) {
                                            return t === u[1] ? e : null;
                                        });
                                    default:
                                        return [];
                                }
                            if (n.nodeName && n._DT_CellIndex) return [n._DT_CellIndex.column];
                            var d = t(i)
                                .filter(n)
                                .map(function () {
                                    return t.inArray(this, i);
                                })
                                .toArray();
                            if (d.length || !n.nodeName) return d;
                            var h = t(n).closest("*[data-dt-column]");
                            return h.length ? [h.data("dt-column")] : [];
                        },
                        e,
                        a
                    );
                })(a, e, n);
            },
            1
        );
        return (r.selector.cols = e), (r.selector.opts = n), r;
    }),
        l("columns().header()", "column().header()", function (t, e) {
            return this.iterator(
                "column",
                function (t, e) {
                    return t.aoColumns[e].nTh;
                },
                1
            );
        }),
        l("columns().footer()", "column().footer()", function (t, e) {
            return this.iterator(
                "column",
                function (t, e) {
                    return t.aoColumns[e].nTf;
                },
                1
            );
        }),
        l("columns().data()", "column().data()", function () {
            return this.iterator("column-rows", Ie, 1);
        }),
        l("columns().dataSrc()", "column().dataSrc()", function () {
            return this.iterator(
                "column",
                function (t, e) {
                    return t.aoColumns[e].mData;
                },
                1
            );
        }),
        l("columns().cache()", "column().cache()", function (t) {
            return this.iterator(
                "column-rows",
                function (e, n, a, r, o) {
                    return y(e.aoData, o, "search" === t ? "_aFilterData" : "_aSortData", n);
                },
                1
            );
        }),
        l("columns().nodes()", "column().nodes()", function () {
            return this.iterator(
                "column-rows",
                function (t, e, n, a, r) {
                    return y(t.aoData, r, "anCells", e);
                },
                1
            );
        }),
        l("columns().visible()", "column().visible()", function (e, n) {
            var r = this,
                o = this.iterator("column", function (n, r) {
                    if (e === a) return n.aoColumns[r].bVisible;
                    !(function (e, n, r) {
                        var o,
                            i,
                            l,
                            s,
                            u = e.aoColumns,
                            c = u[n],
                            f = e.aoData;
                        if (r === a) return c.bVisible;
                        if (c.bVisible !== r) {
                            if (r) {
                                var d = t.inArray(!0, D(u, "bVisible"), n + 1);
                                for (i = 0, l = f.length; i < l; i++) (s = f[i].nTr), (o = f[i].anCells), s && s.insertBefore(o[n], o[d] || null);
                            } else t(D(e.aoData, "anCells", n)).detach();
                            c.bVisible = r;
                        }
                    })(n, r, e);
                });
            return (
                e !== a &&
                    this.iterator("table", function (o) {
                        it(o, o.aoHeader),
                            it(o, o.aoFooter),
                            o.aiDisplay.length || t(o.nTBody).find("td[colspan]").attr("colspan", W(o)),
                            ae(o),
                            r.iterator("column", function (t, a) {
                                fe(t, null, "column-visibility", [t, a, e, n]);
                            }),
                            (n === a || n) && r.columns.adjust();
                    }),
                o
            );
        }),
        l("columns().indexes()", "column().index()", function (t) {
            return this.iterator(
                "column",
                function (e, n) {
                    return "visible" === t ? M(e, n) : n;
                },
                1
            );
        }),
        i("columns.adjust()", function () {
            return this.iterator(
                "table",
                function (t) {
                    O(t);
                },
                1
            );
        }),
        i("column.index()", function (t, e) {
            if (0 !== this.context.length) {
                var n = this.context[0];
                if ("fromVisible" === t || "toData" === t) return k(n, e);
                if ("fromData" === t || "toVisible" === t) return M(n, e);
            }
        }),
        i("column()", function (t, e) {
            return ye(this.columns(t, e));
        });
    i("cells()", function (e, n, r) {
        if ((t.isPlainObject(e) && (e.row === a ? ((r = e), (e = null)) : ((r = n), (n = null))), t.isPlainObject(n) && ((r = n), (n = null)), null === n || n === a))
            return this.iterator("table", function (n) {
                return (function (e, n, r) {
                    var o,
                        i,
                        l,
                        s,
                        u,
                        c,
                        f,
                        d = e.aoData,
                        h = _e(e, r),
                        p = w(y(d, h, "anCells")),
                        g = t([].concat.apply([], p)),
                        b = e.aoColumns.length;
                    return Se(
                        "cell",
                        n,
                        function (n) {
                            var r = "function" == typeof n;
                            if (null === n || n === a || r) {
                                for (i = [], l = 0, s = h.length; l < s; l++) for (o = h[l], u = 0; u < b; u++) (c = { row: o, column: u }), r ? ((f = d[o]), n(c, J(e, o, u), f.anCells ? f.anCells[u] : null) && i.push(c)) : i.push(c);
                                return i;
                            }
                            if (t.isPlainObject(n)) return n.column !== a && n.row !== a && -1 !== t.inArray(n.row, h) ? [n] : [];
                            var p = g
                                .filter(n)
                                .map(function (t, e) {
                                    return { row: e._DT_CellIndex.row, column: e._DT_CellIndex.column };
                                })
                                .toArray();
                            return p.length || !n.nodeName ? p : (f = t(n).closest("*[data-dt-row]")).length ? [{ row: f.data("dt-row"), column: f.data("dt-column") }] : [];
                        },
                        e,
                        r
                    );
                })(n, e, De(r));
            });
        var o,
            i,
            l,
            s,
            u = r ? { page: r.page, order: r.order, search: r.search } : {},
            c = this.columns(n, u),
            f = this.rows(e, u),
            d = this.iterator(
                "table",
                function (t, e) {
                    var n = [];
                    for (o = 0, i = f[e].length; o < i; o++) for (l = 0, s = c[e].length; l < s; l++) n.push({ row: f[e][o], column: c[e][l] });
                    return n;
                },
                1
            ),
            h = r && r.selected ? this.cells(d, r) : d;
        return t.extend(h.selector, { cols: n, rows: e, opts: r }), h;
    }),
        l("cells().nodes()", "cell().node()", function () {
            return this.iterator(
                "cell",
                function (t, e, n) {
                    var r = t.aoData[e];
                    return r && r.anCells ? r.anCells[n] : a;
                },
                1
            );
        }),
        i("cells().data()", function () {
            return this.iterator(
                "cell",
                function (t, e, n) {
                    return J(t, e, n);
                },
                1
            );
        }),
        l("cells().cache()", "cell().cache()", function (t) {
            return (
                (t = "search" === t ? "_aFilterData" : "_aSortData"),
                this.iterator(
                    "cell",
                    function (e, n, a) {
                        return e.aoData[n][t][a];
                    },
                    1
                )
            );
        }),
        l("cells().render()", "cell().render()", function (t) {
            return this.iterator(
                "cell",
                function (e, n, a) {
                    return J(e, n, a, t);
                },
                1
            );
        }),
        l("cells().indexes()", "cell().index()", function () {
            return this.iterator(
                "cell",
                function (t, e, n) {
                    return { row: e, column: n, columnVisible: M(t, n) };
                },
                1
            );
        }),
        l("cells().invalidate()", "cell().invalidate()", function (t) {
            return this.iterator("cell", function (e, n, a) {
                et(e, n, t, a);
            });
        }),
        i("cell()", function (t, e, n) {
            return ye(this.cells(t, e, n));
        }),
        i("cell().data()", function (t) {
            var e = this.context,
                n = this[0];
            return t === a ? (e.length && n.length ? J(e[0], n[0].row, n[0].column) : a) : (q(e[0], n[0].row, n[0].column, t), et(e[0], n[0].row, "data", n[0].column), this);
        }),
        i("order()", function (e, n) {
            var r = this.context;
            return e === a
                ? 0 !== r.length
                    ? r[0].aaSorting
                    : a
                : ("number" == typeof e ? (e = [[e, n]]) : e.length && !t.isArray(e[0]) && (e = Array.prototype.slice.call(arguments)),
                  this.iterator("table", function (t) {
                      t.aaSorting = e.slice();
                  }));
        }),
        i("order.listener()", function (t, e, n) {
            return this.iterator("table", function (a) {
                te(a, t, e, n);
            });
        }),
        i("order.fixed()", function (e) {
            if (!e) {
                var n = this.context,
                    r = n.length ? n[0].aaSortingFixed : a;
                return t.isArray(r) ? { pre: r } : r;
            }
            return this.iterator("table", function (n) {
                n.aaSortingFixed = t.extend(!0, {}, e);
            });
        }),
        i(["columns().order()", "column().order()"], function (e) {
            var n = this;
            return this.iterator("table", function (a, r) {
                var o = [];
                t.each(n[r], function (t, n) {
                    o.push([n, e]);
                }),
                    (a.aaSorting = o);
            });
        }),
        i("search()", function (e, n, r, o) {
            var i = this.context;
            return e === a
                ? 0 !== i.length
                    ? i[0].oPreviousSearch.sSearch
                    : a
                : this.iterator("table", function (a) {
                      a.oFeatures.bFilter && mt(a, t.extend({}, a.oPreviousSearch, { sSearch: e + "", bRegex: null !== n && n, bSmart: null === r || r, bCaseInsensitive: null === o || o }), 1);
                  });
        }),
        l("columns().search()", "column().search()", function (e, n, r, o) {
            return this.iterator("column", function (i, l) {
                var s = i.aoPreSearchCols;
                if (e === a) return s[l].sSearch;
                i.oFeatures.bFilter && (t.extend(s[l], { sSearch: e + "", bRegex: null !== n && n, bSmart: null === r || r, bCaseInsensitive: null === o || o }), mt(i, i.oPreviousSearch, 1));
            });
        }),
        i("state()", function () {
            return this.context.length ? this.context[0].oSavedState : null;
        }),
        i("state.clear()", function () {
            return this.iterator("table", function (t) {
                t.fnStateSaveCallback.call(t.oInstance, t, {});
            });
        }),
        i("state.loaded()", function () {
            return this.context.length ? this.context[0].oLoadedState : null;
        }),
        i("state.save()", function () {
            return this.iterator("table", function (t) {
                ae(t);
            });
        }),
        (s.versionCheck = s.fnVersionCheck = function (t) {
            for (var e, n, a = s.version.split("."), r = t.split("."), o = 0, i = r.length; o < i; o++) if ((e = parseInt(a[o], 10) || 0) !== (n = parseInt(r[o], 10) || 0)) return e > n;
            return !0;
        }),
        (s.isDataTable = s.fnIsDataTable = function (e) {
            var n = t(e).get(0),
                a = !1;
            return (
                e instanceof s.Api ||
                (t.each(s.settings, function (e, r) {
                    var o = r.nScrollHead ? t("table", r.nScrollHead)[0] : null,
                        i = r.nScrollFoot ? t("table", r.nScrollFoot)[0] : null;
                    (r.nTable !== n && o !== n && i !== n) || (a = !0);
                }),
                a)
            );
        }),
        (s.tables = s.fnTables = function (e) {
            var n = !1;
            t.isPlainObject(e) && ((n = e.api), (e = e.visible));
            var a = t.map(s.settings, function (n) {
                if (!e || (e && t(n.nTable).is(":visible"))) return n.nTable;
            });
            return n ? new o(a) : a;
        }),
        (s.camelToHungarian = I),
        i("$()", function (e, n) {
            var a = this.rows(n).nodes(),
                r = t(a);
            return t([].concat(r.filter(e).toArray(), r.find(e).toArray()));
        }),
        t.each(["on", "one", "off"], function (e, n) {
            i(n + "()", function () {
                var e = Array.prototype.slice.call(arguments);
                e[0] = t
                    .map(e[0].split(/\s/), function (t) {
                        return t.match(/\.dt\b/) ? t : t + ".dt";
                    })
                    .join(" ");
                var a = t(this.tables().nodes());
                return a[n].apply(a, e), this;
            });
        }),
        i("clear()", function () {
            return this.iterator("table", function (t) {
                Q(t);
            });
        }),
        i("settings()", function () {
            return new o(this.context, this.context);
        }),
        i("init()", function () {
            var t = this.context;
            return t.length ? t[0].oInit : null;
        }),
        i("data()", function () {
            return this.iterator("table", function (t) {
                return D(t.aoData, "_aData");
            }).flatten();
        }),
        i("destroy()", function (n) {
            return (
                (n = n || !1),
                this.iterator("table", function (a) {
                    var r,
                        i = a.nTableWrapper.parentNode,
                        l = a.oClasses,
                        u = a.nTable,
                        c = a.nTBody,
                        f = a.nTHead,
                        d = a.nTFoot,
                        h = t(u),
                        p = t(c),
                        g = t(a.nTableWrapper),
                        b = t.map(a.aoData, function (t) {
                            return t.nTr;
                        });
                    (a.bDestroying = !0),
                        fe(a, "aoDestroyCallback", "destroy", [a]),
                        n || new o(a).columns().visible(!0),
                        g.off(".DT").find(":not(tbody *)").off(".DT"),
                        t(e).off(".DT-" + a.sInstance),
                        u != f.parentNode && (h.children("thead").detach(), h.append(f)),
                        d && u != d.parentNode && (h.children("tfoot").detach(), h.append(d)),
                        (a.aaSorting = []),
                        (a.aaSortingFixed = []),
                        ee(a),
                        t(b).removeClass(a.asStripeClasses.join(" ")),
                        t("th, td", f).removeClass(l.sSortable + " " + l.sSortableAsc + " " + l.sSortableDesc + " " + l.sSortableNone),
                        p.children().detach(),
                        p.append(b);
                    var v = n ? "remove" : "detach";
                    h[v](),
                        g[v](),
                        !n &&
                            i &&
                            (i.insertBefore(u, a.nTableReinsertBefore),
                            h.css("width", a.sDestroyWidth).removeClass(l.sTable),
                            (r = a.asDestroyStripes.length) &&
                                p.children().each(function (e) {
                                    t(this).addClass(a.asDestroyStripes[e % r]);
                                }));
                    var m = t.inArray(a, s.settings);
                    -1 !== m && s.settings.splice(m, 1);
                })
            );
        }),
        t.each(["column", "row", "cell"], function (t, e) {
            i(e + "s().every()", function (t) {
                var n = this.selector.opts,
                    r = this;
                return this.iterator(e, function (o, i, l, s, u) {
                    t.call(r[e](i, "cell" === e ? l : n, "cell" === e ? n : a), i, l, s, u);
                });
            });
        }),
        i("i18n()", function (e, n, r) {
            var o = this.context[0],
                i = Y(e)(o.oLanguage);
            return i === a && (i = n), r !== a && t.isPlainObject(i) && (i = i[r] !== a ? i[r] : i._), i.replace("%d", r);
        }),
        (s.version = "1.10.21"),
        (s.settings = []),
        (s.models = {}),
        (s.models.oSearch = { bCaseInsensitive: !0, sSearch: "", bRegex: !1, bSmart: !0 }),
        (s.models.oRow = { nTr: null, anCells: null, _aData: [], _aSortData: null, _aFilterData: null, _sFilterRow: null, _sRowStripe: "", src: null, idx: -1 }),
        (s.models.oColumn = {
            idx: null,
            aDataSort: null,
            asSorting: null,
            bSearchable: null,
            bSortable: null,
            bVisible: null,
            _sManualType: null,
            _bAttrSrc: !1,
            fnCreatedCell: null,
            fnGetData: null,
            fnSetData: null,
            mData: null,
            mRender: null,
            nTh: null,
            nTf: null,
            sClass: null,
            sContentPadding: null,
            sDefaultContent: null,
            sName: null,
            sSortDataType: "std",
            sSortingClass: null,
            sSortingClassJUI: null,
            sTitle: null,
            sType: null,
            sWidth: null,
            sWidthOrig: null,
        }),
        (s.defaults = {
            aaData: null,
            aaSorting: [[0, "asc"]],
            aaSortingFixed: [],
            ajax: null,
            aLengthMenu: [10, 25, 50, 100],
            aoColumns: null,
            aoColumnDefs: null,
            aoSearchCols: [],
            asStripeClasses: null,
            bAutoWidth: !0,
            bDeferRender: !1,
            bDestroy: !1,
            bFilter: !0,
            bInfo: !0,
            bLengthChange: !0,
            bPaginate: !0,
            bProcessing: !1,
            bRetrieve: !1,
            bScrollCollapse: !1,
            bServerSide: !1,
            bSort: !0,
            bSortMulti: !0,
            bSortCellsTop: !1,
            bSortClasses: !0,
            bStateSave: !1,
            fnCreatedRow: null,
            fnDrawCallback: null,
            fnFooterCallback: null,
            fnFormatNumber: function (t) {
                return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands);
            },
            fnHeaderCallback: null,
            fnInfoCallback: null,
            fnInitComplete: null,
            fnPreDrawCallback: null,
            fnRowCallback: null,
            fnServerData: null,
            fnServerParams: null,
            fnStateLoadCallback: function (t) {
                try {
                    return JSON.parse((-1 === t.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + t.sInstance + "_" + location.pathname));
                } catch (t) {
                    return {};
                }
            },
            fnStateLoadParams: null,
            fnStateLoaded: null,
            fnStateSaveCallback: function (t, e) {
                try {
                    (-1 === t.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + t.sInstance + "_" + location.pathname, JSON.stringify(e));
                } catch (t) {}
            },
            fnStateSaveParams: null,
            iStateDuration: 7200,
            iDeferLoading: null,
            iDisplayLength: 10,
            iDisplayStart: 0,
            iTabIndex: 0,
            oClasses: {},
            oLanguage: {
                oAria: { sSortAscending: ": activate to sort column ascending", sSortDescending: ": activate to sort column descending" },
                oPaginate: { sFirst: "First", sLast: "Last", sNext: "Next", sPrevious: "Previous" },
                sEmptyTable: "No data available in table",
                sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
                sInfoEmpty: "Showing 0 to 0 of 0 entries",
                sInfoFiltered: "(filtered from _MAX_ total entries)",
                sInfoPostFix: "",
                sDecimal: "",
                sThousands: ",",
                sLengthMenu:
                    ' _MENU_ <div class="btn-group" style="margin-left:-3.05px;margin-top:0px;vertical-align:unset;" role="group" aria-label="Button group with nested dropdown"><div class="btn-group" role="group"><button type="button" style="border-radius: 0em .25rem .25rem 0em" class="form-control" onclick="$(`#dataTableBuilder`).DataTable().ajax.reload( null, false);" ><i class="feather icon-refresh-cw"></i></button></div>',
                sLoadingRecords: "Loading...",
                sProcessing: "Processing...",
                sSearch: "",
                sSearchPlaceholder: "",
                sUrl: "",
                sZeroRecords: "No matching records found",
            },
            oSearch: t.extend({}, s.models.oSearch),
            sAjaxDataProp: "data",
            sAjaxSource: null,
            sDom: "lfrtip",
            searchDelay: null,
            sPaginationType: "simple_numbers",
            sScrollX: "",
            sScrollXInner: "",
            sScrollY: "",
            sServerMethod: "GET",
            renderer: null,
            rowId: "DT_RowId",
        }),
        x(s.defaults),
        (s.defaults.column = {
            aDataSort: null,
            iDataSort: -1,
            asSorting: ["asc", "desc"],
            bSearchable: !0,
            bSortable: !0,
            bVisible: !0,
            fnCreatedCell: null,
            mData: null,
            mRender: null,
            sCellType: "td",
            sClass: "",
            sContentPadding: "",
            sDefaultContent: null,
            sName: "",
            sSortDataType: "std",
            sTitle: null,
            sType: null,
            sWidth: null,
        }),
        x(s.defaults.column),
        (s.models.oSettings = {
            oFeatures: { bAutoWidth: null, bDeferRender: null, bFilter: null, bInfo: null, bLengthChange: null, bPaginate: null, bProcessing: null, bServerSide: null, bSort: null, bSortMulti: null, bSortClasses: null, bStateSave: null },
            oScroll: { bCollapse: null, iBarWidth: 0, sX: null, sXInner: null, sY: null },
            oLanguage: { fnInfoCallback: null },
            oBrowser: { bScrollOversize: !1, bScrollbarLeft: !1, bBounding: !1, barWidth: 0 },
            ajax: null,
            aanFeatures: [],
            aoData: [],
            aiDisplay: [],
            aiDisplayMaster: [],
            aIds: {},
            aoColumns: [],
            aoHeader: [],
            aoFooter: [],
            oPreviousSearch: {},
            aoPreSearchCols: [],
            aaSorting: null,
            aaSortingFixed: [],
            asStripeClasses: null,
            asDestroyStripes: [],
            sDestroyWidth: 0,
            aoRowCallback: [],
            aoHeaderCallback: [],
            aoFooterCallback: [],
            aoDrawCallback: [],
            aoRowCreatedCallback: [],
            aoPreDrawCallback: [],
            aoInitComplete: [],
            aoStateSaveParams: [],
            aoStateLoadParams: [],
            aoStateLoaded: [],
            sTableId: "",
            nTable: null,
            nTHead: null,
            nTFoot: null,
            nTBody: null,
            nTableWrapper: null,
            bDeferLoading: !1,
            bInitialised: !1,
            aoOpenRows: [],
            sDom: null,
            searchDelay: null,
            sPaginationType: "two_button",
            iStateDuration: 0,
            aoStateSave: [],
            aoStateLoad: [],
            oSavedState: null,
            oLoadedState: null,
            sAjaxSource: null,
            sAjaxDataProp: null,
            bAjaxDataGet: !0,
            jqXHR: null,
            json: a,
            oAjaxData: a,
            fnServerData: null,
            aoServerParams: [],
            sServerMethod: null,
            fnFormatNumber: null,
            aLengthMenu: null,
            iDraw: 0,
            bDrawing: !1,
            iDrawError: -1,
            _iDisplayLength: 10,
            _iDisplayStart: 0,
            _iRecordsTotal: 0,
            _iRecordsDisplay: 0,
            oClasses: {},
            bFiltered: !1,
            bSorted: !1,
            bSortCellsTop: null,
            oInit: null,
            aoDestroyCallback: [],
            fnRecordsTotal: function () {
                return "ssp" == pe(this) ? 1 * this._iRecordsTotal : this.aiDisplayMaster.length;
            },
            fnRecordsDisplay: function () {
                return "ssp" == pe(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length;
            },
            fnDisplayEnd: function () {
                var t = this._iDisplayLength,
                    e = this._iDisplayStart,
                    n = e + t,
                    a = this.aiDisplay.length,
                    r = this.oFeatures,
                    o = r.bPaginate;
                return r.bServerSide ? (!1 === o || -1 === t ? e + a : Math.min(e + t, this._iRecordsDisplay)) : !o || n > a || -1 === t ? a : n;
            },
            oInstance: null,
            sInstance: null,
            iTabIndex: 0,
            nScrollHead: null,
            nScrollFoot: null,
            aLastSort: [],
            oPlugins: {},
            rowIdFn: null,
            rowId: null,
        }),
        (s.ext = r = {
            buttons: {},
            classes: {},
            builder: "-source-",
            errMode: "alert",
            feature: [],
            search: [],
            selector: { cell: [], column: [], row: [] },
            internal: {},
            legacy: { ajax: null },
            pager: {},
            renderer: { pageButton: {}, header: {} },
            order: {},
            type: { detect: [], search: {}, order: {} },
            _unique: 0,
            fnVersionCheck: s.fnVersionCheck,
            iApiIndex: 0,
            oJUIClasses: {},
            sVersion: s.version,
        }),
        t.extend(r, { afnFiltering: r.search, aTypes: r.type.detect, ofnSearch: r.type.search, oSort: r.type.order, afnSortData: r.order, aoFeatures: r.feature, oApi: r.internal, oStdClasses: r.classes, oPagination: r.pager }),
        t.extend(s.ext.classes, {
            sTable: "dataTable",
            sNoFooter: "no-footer",
            sPageButton: "paginate_button",
            sPageButtonActive: "current",
            sPageButtonDisabled: "disabled",
            sStripeOdd: "odd",
            sStripeEven: "even",
            sRowEmpty: "dataTables_empty",
            sWrapper: "dataTables_wrapper",
            sFilter: "dataTables_filter",
            sInfo: "dataTables_info",
            sPaging: "dataTables_paginate paging_",
            sLength: "dataTables_length",
            sProcessing: "dataTables_processing",
            sSortAsc: "sorting_asc",
            sSortDesc: "sorting_desc",
            sSortable: "sorting",
            sSortableAsc: "sorting_asc_disabled",
            sSortableDesc: "sorting_desc_disabled",
            sSortableNone: "sorting_disabled",
            sSortColumn: "sorting_",
            sFilterInput: "",
            sLengthSelect: "",
            sScrollWrapper: "dataTables_scroll",
            sScrollHead: "dataTables_scrollHead",
            sScrollHeadInner: "dataTables_scrollHeadInner",
            sScrollBody: "dataTables_scrollBody",
            sScrollFoot: "dataTables_scrollFoot",
            sScrollFootInner: "dataTables_scrollFootInner",
            sHeaderTH: "",
            sFooterTH: "",
            sSortJUIAsc: "",
            sSortJUIDesc: "",
            sSortJUI: "",
            sSortJUIAscAllowed: "",
            sSortJUIDescAllowed: "",
            sSortJUIWrapper: "",
            sSortIcon: "",
            sJUIHeader: "",
            sJUIFooter: "",
        });
    var Ae = s.ext.pager;
    function Fe(t, e) {
        var n = [],
            a = Ae.numbers_length,
            r = Math.floor(a / 2);
        return (
            e <= a
                ? (n = _(0, e))
                : t <= r
                ? ((n = _(0, a - 2)).push("ellipsis"), n.push(e - 1))
                : t >= e - 1 - r
                ? ((n = _(e - (a - 2), e)).splice(0, 0, "ellipsis"), n.splice(0, 0, 0))
                : ((n = _(t - r + 2, t + r - 1)).push("ellipsis"), n.push(e - 1), n.splice(0, 0, "ellipsis"), n.splice(0, 0, 0)),
            (n.DT_el = "span"),
            n
        );
    }
    t.extend(Ae, {
        simple: function (t, e) {
            return ["previous", "next"];
        },
        full: function (t, e) {
            return ["first", "previous", "next", "last"];
        },
        numbers: function (t, e) {
            return [Fe(t, e)];
        },
        simple_numbers: function (t, e) {
            return ["previous", Fe(t, e), "next"];
        },
        full_numbers: function (t, e) {
            return ["first", "previous", Fe(t, e), "next", "last"];
        },
        first_last_numbers: function (t, e) {
            return ["first", Fe(t, e), "last"];
        },
        _numbers: Fe,
        numbers_length: 7,
    }),
        t.extend(!0, s.ext.renderer, {
            pageButton: {
                _: function (e, r, o, i, l, s) {
                    var u,
                        c,
                        f,
                        d = e.oClasses,
                        h = e.oLanguage.oPaginate,
                        p = e.oLanguage.oAria.paginate || {},
                        g = 0,
                        b = function (n, a) {
                            var r,
                                i,
                                f,
                                v,
                                m = d.sPageButtonDisabled,
                                S = function (t) {
                                    kt(e, t.data.action, !0);
                                };
                            for (r = 0, i = a.length; r < i; r++)
                                if (((f = a[r]), t.isArray(f))) {
                                    var D = t("<" + (f.DT_el || "div") + "/>").appendTo(n);
                                    b(D, f);
                                } else {
                                    switch (((u = null), (c = f), (v = e.iTabIndex), f)) {
                                        case "ellipsis":
                                            n.append('<span class="ellipsis">&#x2026;</span>');
                                            break;
                                        case "first":
                                            (u = h.sFirst), 0 === l && ((v = -1), (c += " " + m));
                                            break;
                                        case "previous":
                                            (u = h.sPrevious), 0 === l && ((v = -1), (c += " " + m));
                                            break;
                                        case "next":
                                            (u = h.sNext), (0 !== s && l !== s - 1) || ((v = -1), (c += " " + m));
                                            break;
                                        case "last":
                                            (u = h.sLast), l === s - 1 && ((v = -1), (c += " " + m));
                                            break;
                                        default:
                                            (u = f + 1), (c = l === f ? d.sPageButtonActive : "");
                                    }
                                    null !== u &&
                                        (ue(
                                            t("<a>", { class: d.sPageButton + " " + c, "aria-controls": e.sTableId, "aria-label": p[f], "data-dt-idx": g, tabindex: v, id: 0 === o && "string" == typeof f ? e.sTableId + "_" + f : null })
                                                .html(u)
                                                .appendTo(n),
                                            { action: f },
                                            S
                                        ),
                                        g++);
                                }
                        };
                    try {
                        f = t(r).find(n.activeElement).data("dt-idx");
                    } catch (t) {}
                    b(t(r).empty(), i),
                        f !== a &&
                            t(r)
                                .find("[data-dt-idx=" + f + "]")
                                .trigger("focus");
                },
            },
        }),
        t.extend(s.ext.type.detect, [
            function (t, e) {
                var n = e.oLanguage.sDecimal;
                return m(t, n) ? "num" + n : null;
            },
            function (t, e) {
                if (t && !(t instanceof Date) && !d.test(t)) return null;
                var n = Date.parse(t);
                return (null !== n && !isNaN(n)) || g(t) ? "date" : null;
            },
            function (t, e) {
                var n = e.oLanguage.sDecimal;
                return m(t, n, !0) ? "num-fmt" + n : null;
            },
            function (t, e) {
                var n = e.oLanguage.sDecimal;
                return S(t, n) ? "html-num" + n : null;
            },
            function (t, e) {
                var n = e.oLanguage.sDecimal;
                return S(t, n, !0) ? "html-num-fmt" + n : null;
            },
            function (t, e) {
                return g(t) || ("string" == typeof t && -1 !== t.indexOf("<")) ? "html" : null;
            },
        ]),
        t.extend(s.ext.type.search, {
            html: function (t) {
                return g(t) ? t : "string" == typeof t ? t.replace(c, " ").replace(f, "") : "";
            },
            string: function (t) {
                return g(t) ? t : "string" == typeof t ? t.replace(c, " ") : t;
            },
        });
    var Le = function (t, e, n, a) {
        return 0 === t || (t && "-" !== t) ? (e && (t = v(t, e)), t.replace && (n && (t = t.replace(n, "")), a && (t = t.replace(a, ""))), 1 * t) : -1 / 0;
    };
    function Re(e) {
        t.each(
            {
                num: function (t) {
                    return Le(t, e);
                },
                "num-fmt": function (t) {
                    return Le(t, e, p);
                },
                "html-num": function (t) {
                    return Le(t, e, f);
                },
                "html-num-fmt": function (t) {
                    return Le(t, e, f, p);
                },
            },
            function (t, n) {
                (r.type.order[t + e + "-pre"] = n), t.match(/^html\-/) && (r.type.search[t + e] = r.type.search.html);
            }
        );
    }
    t.extend(r.type.order, {
        "date-pre": function (t) {
            var e = Date.parse(t);
            return isNaN(e) ? -1 / 0 : e;
        },
        "html-pre": function (t) {
            return g(t) ? "" : t.replace ? t.replace(/<.*?>/g, "").toLowerCase() : t + "";
        },
        "string-pre": function (t) {
            return g(t) ? "" : "string" == typeof t ? t.toLowerCase() : t.toString ? t.toString() : "";
        },
        "string-asc": function (t, e) {
            return t < e ? -1 : t > e ? 1 : 0;
        },
        "string-desc": function (t, e) {
            return t < e ? 1 : t > e ? -1 : 0;
        },
    }),
        Re(""),
        t.extend(!0, s.ext.renderer, {
            header: {
                _: function (e, n, a, r) {
                    t(e.nTable).on("order.dt.DT", function (t, o, i, l) {
                        if (e === o) {
                            var s = a.idx;
                            n.removeClass(a.sSortingClass + " " + r.sSortAsc + " " + r.sSortDesc).addClass("asc" == l[s] ? r.sSortAsc : "desc" == l[s] ? r.sSortDesc : a.sSortingClass);
                        }
                    });
                },
                jqueryui: function (e, n, a, r) {
                    t("<div/>")
                        .addClass(r.sSortJUIWrapper)
                        .append(n.contents())
                        .append(t("<span/>").addClass(r.sSortIcon + " " + a.sSortingClassJUI))
                        .appendTo(n),
                        t(e.nTable).on("order.dt.DT", function (t, o, i, l) {
                            if (e === o) {
                                var s = a.idx;
                                n.removeClass(r.sSortAsc + " " + r.sSortDesc).addClass("asc" == l[s] ? r.sSortAsc : "desc" == l[s] ? r.sSortDesc : a.sSortingClass),
                                    n
                                        .find("span." + r.sSortIcon)
                                        .removeClass(r.sSortJUIAsc + " " + r.sSortJUIDesc + " " + r.sSortJUI + " " + r.sSortJUIAscAllowed + " " + r.sSortJUIDescAllowed)
                                        .addClass("asc" == l[s] ? r.sSortJUIAsc : "desc" == l[s] ? r.sSortJUIDesc : a.sSortingClassJUI);
                            }
                        });
                },
            },
        });
    var Pe = function (t) {
        return "string" == typeof t ? t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : t;
    };
    function je(t) {
        return function () {
            var e = [oe(this[s.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
            return s.ext.internal[t].apply(this, e);
        };
    }
    return (
        (s.render = {
            number: function (t, e, n, a, r) {
                return {
                    display: function (o) {
                        if ("number" != typeof o && "string" != typeof o) return o;
                        var i = o < 0 ? "-" : "",
                            l = parseFloat(o);
                        if (isNaN(l)) return Pe(o);
                        (l = l.toFixed(n)), (o = Math.abs(l));
                        var s = parseInt(o, 10),
                            u = n ? e + (o - s).toFixed(n).substring(2) : "";
                        return i + (a || "") + s.toString().replace(/\B(?=(\d{3})+(?!\d))/g, t) + u + (r || "");
                    },
                };
            },
            text: function () {
                return { display: Pe, filter: Pe };
            },
        }),
        t.extend(s.ext.internal, {
            _fnExternApiFunc: je,
            _fnBuildAjax: dt,
            _fnAjaxUpdate: ht,
            _fnAjaxParameters: pt,
            _fnAjaxUpdateDraw: gt,
            _fnAjaxDataSrc: bt,
            _fnAddColumn: N,
            _fnColumnOptions: H,
            _fnAdjustColumnSizing: O,
            _fnVisibleToColumnIndex: k,
            _fnColumnIndexToVisible: M,
            _fnVisbleColumns: W,
            _fnGetColumns: E,
            _fnColumnTypes: B,
            _fnApplyColumnDefs: U,
            _fnHungarianMap: x,
            _fnCamelToHungarian: I,
            _fnLanguageCompat: A,
            _fnBrowserDetect: P,
            _fnAddData: V,
            _fnAddTr: X,
            _fnNodeToDataIndex: function (t, e) {
                return e._DT_RowIndex !== a ? e._DT_RowIndex : null;
            },
            _fnNodeToColumnIndex: function (e, n, a) {
                return t.inArray(a, e.aoData[n].anCells);
            },
            _fnGetCellData: J,
            _fnSetCellData: q,
            _fnSplitObjNotation: z,
            _fnGetObjectDataFn: Y,
            _fnSetObjectDataFn: Z,
            _fnGetDataMaster: K,
            _fnClearTable: Q,
            _fnDeleteIndex: tt,
            _fnInvalidate: et,
            _fnGetRowElements: nt,
            _fnCreateTr: at,
            _fnBuildHead: ot,
            _fnDrawHead: it,
            _fnDraw: lt,
            _fnReDraw: st,
            _fnAddOptionsHtml: ut,
            _fnDetectHeader: ct,
            _fnGetUniqueThs: ft,
            _fnFeatureHtmlFilter: vt,
            _fnFilterComplete: mt,
            _fnFilterCustom: St,
            _fnFilterColumn: Dt,
            _fnFilter: yt,
            _fnFilterCreateSearch: _t,
            _fnEscapeRegex: wt,
            _fnFilterData: xt,
            _fnFeatureHtmlInfo: Ft,
            _fnUpdateInfo: Lt,
            _fnInfoMacros: Rt,
            _fnInitialise: Pt,
            _fnInitComplete: jt,
            _fnLengthChange: Nt,
            _fnFeatureHtmlLength: Ht,
            _fnFeatureHtmlPaginate: Ot,
            _fnPageChange: kt,
            _fnFeatureHtmlProcessing: Mt,
            _fnProcessingDisplay: Wt,
            _fnFeatureHtmlTable: Et,
            _fnScrollDraw: Bt,
            _fnApplyToChildren: Ut,
            _fnCalculateColumnWidths: Xt,
            _fnThrottle: Jt,
            _fnConvertToWidth: qt,
            _fnGetWidestNode: Gt,
            _fnGetMaxLenString: $t,
            _fnStringToCss: zt,
            _fnSortFlatten: Yt,
            _fnSort: Zt,
            _fnSortAria: Kt,
            _fnSortListener: Qt,
            _fnSortAttachListener: te,
            _fnSortingClasses: ee,
            _fnSortData: ne,
            _fnSaveState: ae,
            _fnLoadState: re,
            _fnSettingsFromNode: oe,
            _fnLog: ie,
            _fnMap: le,
            _fnBindAction: ue,
            _fnCallbackReg: ce,
            _fnCallbackFire: fe,
            _fnLengthOverflow: de,
            _fnRenderer: he,
            _fnDataSource: pe,
            _fnRowAttributes: rt,
            _fnExtend: se,
            _fnCalculateEnd: function () {},
        }),
        (t.fn.dataTable = s),
        (s.$ = t),
        (t.fn.dataTableSettings = s.settings),
        (t.fn.dataTableExt = s.ext),
        (t.fn.DataTable = function (e) {
            return t(this).dataTable(e).api();
        }),
        t.each(s, function (e, n) {
            t.fn.DataTable[e] = n;
        }),
        t.fn.dataTable
    );
});
