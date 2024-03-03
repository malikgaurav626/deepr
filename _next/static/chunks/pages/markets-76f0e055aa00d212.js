(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [162],
  {
    61553: function (r, t, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/markets",
        function () {
          return e(96074);
        },
      ]);
    },
    56577: function (r, t, e) {
      "use strict";
      var n = e(85893),
        o = e(88911);
      function i(r, t, e) {
        return (
          t in r
            ? Object.defineProperty(r, t, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (r[t] = e),
          r
        );
      }
      function l(r) {
        for (var t = 1; t < arguments.length; t++) {
          var e = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(e);
          "function" === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(e).filter(function (r) {
                return Object.getOwnPropertyDescriptor(e, r).enumerable;
              })
            )),
            n.forEach(function (t) {
              i(r, t, e[t]);
            });
        }
        return r;
      }
      t.Z = function (r) {
        return (0, n.jsx)(
          o.x,
          l({}, r, { sx: l({ fontVariant: "tabular-nums" }, r.sx) })
        );
      };
    },
    54919: function (r, t, e) {
      "use strict";
      var n = e(85893),
        o = e(4217);
      function i(r, t, e) {
        return (
          t in r
            ? Object.defineProperty(r, t, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (r[t] = e),
          r
        );
      }
      function l(r, t) {
        if (null == r) return {};
        var e,
          n,
          o = (function (r, t) {
            if (null == r) return {};
            var e,
              n,
              o = {},
              i = Object.keys(r);
            for (n = 0; n < i.length; n++)
              (e = i[n]), t.indexOf(e) >= 0 || (o[e] = r[e]);
            return o;
          })(r, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(r);
          for (n = 0; n < i.length; n++)
            (e = i[n]),
              t.indexOf(e) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(r, e) &&
                  (o[e] = r[e]));
        }
        return o;
      }
      t.Z = function (r) {
        var t = r.image,
          e = r.isSupplying,
          a = l(r, ["image", "isSupplying"]);
        return (0, n.jsx)(
          o.q,
          (function (r) {
            for (var t = 1; t < arguments.length; t++) {
              var e = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(e);
              "function" === typeof Object.getOwnPropertySymbols &&
                (n = n.concat(
                  Object.getOwnPropertySymbols(e).filter(function (r) {
                    return Object.getOwnPropertyDescriptor(e, r).enumerable;
                  })
                )),
                n.forEach(function (t) {
                  i(r, t, e[t]);
                });
            }
            return r;
          })({ src: t, color: "white", mr: 3, padding: e ? "3px" : 0 }, a)
        );
      };
    },
    77513: function (r, t, e) {
      "use strict";
      var n = e(85893),
        o = e(33838),
        i = e(41664),
        l = e.n(i);
      t.Z = function (r) {
        var t = r.id,
          e = r.marketChart,
          i = r.children,
          a = r.textDecoration,
          s = r.target,
          u = r.width,
          c = "/markets/".concat(t).concat(e ? "?chart=".concat(e) : "");
        return a
          ? (0, n.jsx)(l(), {
              href: c,
              passHref: !0,
              children: (0, n.jsx)(o.r, {
                target: s,
                _hover: { textDecoration: a },
                _focus: { outline: "none" },
                width: u,
                children: i,
              }),
            })
          : (0, n.jsx)(l(), { href: c, passHref: !0, children: i });
      };
    },
    37091: function (r, t, e) {
      "use strict";
      e.d(t, {
        Cd: function () {
          return i;
        },
        LG: function () {
          return s;
        },
        Zl: function () {
          return a;
        },
        mA: function () {
          return l;
        },
      });
      var n = e(96486),
        o = e(66700),
        i = function (r) {
          return (0, n.sum)((0, n.compact)(r)).toFixed(0);
        },
        l = function (r, t) {
          var e,
            n,
            i = (Number(r) - Number(t)) / Number(t),
            l =
              ((e = i),
              (n = 4),
              Math.round(e * Math.pow(10, n)) / Math.pow(10, n));
          return 0 !== l && isFinite(l)
            ? l > 0
              ? "+".concat((0, o.c2)(l))
              : (0, o.c2)(l)
            : "-";
        },
        a = function (r, t) {
          var e = null === r || void 0 === r ? void 0 : r.includes("%");
          return (null === r || void 0 === r ? void 0 : r.includes("+")) && e
            ? t
              ? "secondary"
              : "positiveMuted"
            : (null === r || void 0 === r ? void 0 : r.includes("-")) && e
            ? t
              ? "error"
              : "negativeMuted"
            : "gray.400";
        },
        s = function (r, t) {
          var e = (Number(r) * Number(t)) / 365;
          return (0, o.ml)(e);
        };
    },
    15861: function (r, t, e) {
      "use strict";
      e.d(t, {
        h: function () {
          return s;
        },
      });
      var n,
        o = e(29457);
      function i(r, t, e) {
        return (
          t in r
            ? Object.defineProperty(r, t, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (r[t] = e),
          r
        );
      }
      var l =
          (i((n = {}), o.Zc.Kovan, { markets: "" }),
          i(n, o.Zc.Goerli, { markets: "" }),
          i(n, o.Zc.Ropsten, { markets: "" }),
          i(n, o.Zc.Fantom_Testnet, {
            markets:
              "https://subgraph.web3-infra.network/subgraphs/name/deepr-fantom-testnet",
          }),
          i(n, o.Zc.Shimmer_Testnet, {
            markets:
              "https://subgraph.web3-infra.network/subgraphs/name/deepr-shimmer-testnet",
          }),
          n),
        a = e(10943),
        s = function () {
          var r = (0, a.Z)();
          return l[r].markets || l[o.j2].markets;
        };
    },
    18182: function (r, t, e) {
      "use strict";
      e.d(t, {
        U6: function () {
          return o;
        },
        Yo: function () {
          return i;
        },
        hp: function () {
          return l;
        },
        lA: function () {
          return n;
        },
      });
      var n =
          "{\n  comptrollers {\n    totalBorrowUSD\n    totalUnderlyingSupplyUSD\n  }\n  markets {\n    id\n    totalBorrow\n    totalBorrowUSD\n    totalSupply\n    totalUnderlyingSupplyUSD\n    supplyAPY\n    borrowAPY\n    underlyingAddress\n    underlyingName\n    underlyingSymbol\n    historicalData(first: 2, orderBy: timestamp, orderDirection: desc, where: { timeRange: daily }) {\n      timestamp\n      totalSupply\n      totalUnderlyingSupplyUSD\n      supplyAPY\n      totalBorrow\n      totalBorrowUSD\n      borrowAPY\n      numberOfSuppliers\n      numberOfBorrowers\n    }\n  }\n}\n",
        o =
          "\nquery comptrollerHistoricalData($skip: Int!, $pageLength: Int!, $dateGreaterThan: Int!) {\n  comptrollerHistoricalDatas(\n     \torderBy: timestamp\n     \torderDirection: asc\n     \tfirst: $pageLength\n     \tskip: $skip\n     \twhere: { timestamp_gt: $dateGreaterThan, timeRange: daily }\n  ) {\n    totalUnderlyingSupplyUSD\n    totalBorrowUSD\n    totalReservesUSD\n    utilization\n    timestamp\n  }\n}",
        i =
          "\nquery Market($id: String) {\n  market(id: $id) {\n    id\n    symbol\n    underlyingName\n    underlyingSymbol\n    underlyingPriceUSD\n    availableLiquidity\n    borrowCap\n    totalReserves\n    reserveFactor\n    collateralFactor\n    exchangeRate\n    numberOfSuppliers\n    numberOfBorrowers\n    supplyAPY\n    borrowAPY\n    totalSupply\n    totalBorrow\n    totalUnderlyingSupplyUSD\n    totalBorrowUSD\n    utilization\n    interestRateModelAddress\n    historicalData(first: 60, orderBy: timestamp, orderDirection: desc, where: { timeRange: daily }) {\n      timestamp\n      totalSupply\n      supplyAPY\n      totalBorrow\n      borrowAPY\n    }\n  }\n}\n",
        l =
          "\n  query LastDayMarkets($dateGreaterThan: Int!) {\n    marketHistoricalDatas(first: 24, orderBy: timestamp, where: { timestamp_gt: $dateGreaterThan, timeRange: hourly }) {\n      totalBorrowUSD\n      totalUnderlyingSupplyUSD\n    }\n  }\n  ";
    },
    96074: function (r, t, e) {
      "use strict";
      e.r(t),
        e.d(t, {
          __N_SSG: function () {
            return mr;
          },
          default: function () {
            return pr;
          },
        });
      var n = e(85893),
        o = e(63343),
        i = e(36979),
        l = e(204),
        a = e(71412),
        s = e(67294),
        u = e(36354),
        c = e(36557),
        d = e(24304),
        m = e(36526),
        p = e(75421),
        f = e(28650),
        x = e(577),
        h = e(88911),
        b = e(54919),
        v = e(66700),
        y = e(37091),
        g = e(39421),
        S = e(52672),
        j = e(56577),
        w = e(77513),
        k = e(50174),
        D = e(99188),
        U = e(96486),
        N = function () {
          return (0, n.jsx)(x.Td, {
            p: 6,
            children: (0, n.jsxs)(l.k, {
              alignItems: "center",
              w: "156px",
              h: "42px",
              children: [
                (0, n.jsx)(k.s, { boxSize: 10 }),
                (0, n.jsx)(D.N, {
                  noOfLines: 2,
                  skeletonHeight: 3,
                  w: 24,
                  pl: 4,
                }),
              ],
            }),
          });
        },
        O = function () {
          return (0, n.jsx)(x.Td, {
            children: (0, n.jsx)(l.k, {
              justifyContent: "flex-end",
              children: (0, n.jsx)(D.N, { noOfLines: 2, w: 16 }),
            }),
          });
        },
        _ = function () {
          return (0, n.jsxs)(m.Tr, {
            borderBottom: "1px solid #FFFFFF12",
            _last: { borderBottom: "none" },
            children: [
              (0, n.jsx)(N, {}),
              (0, n.jsx)(O, {}),
              (0, n.jsx)(O, {}),
              (0, n.jsx)(O, {}),
              (0, n.jsx)(O, {}),
            ],
          });
        },
        C = function (r) {
          var t = r.rows;
          return (0, n.jsx)(n.Fragment, {
            children: (0, U.times)(t, function (r) {
              return (0, n.jsx)(_, {}, r);
            }),
          });
        },
        T = (0, s.memo)(C),
        A = function (r) {
          var t = r.markets,
            e = r.isLoading,
            o = (0, a.$G)("markets").t;
          return (0, n.jsx)(S.Z, {
            children: (0, n.jsx)(u.x, {
              background: g.r.colors.background.box,
              border: "1px solid #FFFFFF12",
              borderRadius: "2xl",
              children: (0, n.jsxs)(c.i, {
                variant: "unstyled",
                children: [
                  (0, n.jsx)(d.h, {
                    borderBottom: "1px solid #FFFFFF12",
                    children: (0, n.jsxs)(m.Tr, {
                      color: "text.secondary",
                      children: [
                        (0, n.jsx)(p.Th, {
                          textTransform: "none",
                          p: 4,
                          fontSize: "sm",
                          pr: { base: 2, sm: 3.5 },
                          children: o("marketsTable.asset"),
                        }),
                        (0, n.jsx)(p.Th, {
                          textAlign: "end",
                          textTransform: "none",
                          p: 4,
                          fontSize: "sm",
                          children: o("marketsTable.totalSupply"),
                        }),
                        (0, n.jsx)(p.Th, {
                          textAlign: "end",
                          textTransform: "none",
                          p: 4,
                          fontSize: "sm",
                          children: o("marketsTable.supplyAPY"),
                        }),
                        (0, n.jsx)(p.Th, {
                          textAlign: "end",
                          textTransform: "none",
                          p: 4,
                          fontSize: "sm",
                          children: o("marketsTable.totalBorrows"),
                        }),
                        (0, n.jsx)(p.Th, {
                          textAlign: "end",
                          textTransform: "none",
                          p: 4,
                          fontSize: "sm",
                          pl: { base: 2, sm: 3.5 },
                          children: o("marketsTable.borrowAPR"),
                        }),
                      ],
                    }),
                  }),
                  (0, n.jsx)(f.p, {
                    children: e
                      ? (0, n.jsx)(T, { rows: 5 })
                      : null === t || void 0 === t
                      ? void 0
                      : t.map(function (r) {
                          var t = r.id,
                            e = r.underlyingName,
                            o = r.underlyingSymbol,
                            i = r.totalUnderlyingSupplyUSD,
                            a = r.totalBorrowUSD,
                            u = r.supplyAPY,
                            c = r.borrowAPY,
                            d = r.historicalData,
                            p = d[0] || {},
                            f = p.totalUnderlyingSupplyUSD,
                            g = p.totalBorrowUSD,
                            S = p.supplyAPY,
                            k = p.borrowAPY,
                            D = d[1] || {},
                            U = D.totalUnderlyingSupplyUSD,
                            N = D.totalBorrowUSD,
                            O = D.supplyAPY,
                            _ = D.borrowAPY,
                            C = (0, y.mA)(f, U),
                            T = (0, y.mA)(g, N),
                            A = (0, y.mA)(S, O),
                            B = (0, y.mA)(k, _);
                          return (0,
                          n.jsx)(s.Fragment, { children: (0, n.jsx)(w.Z, { id: t, children: (0, n.jsxs)(m.Tr, { _hover: { bgColor: "background.hover" }, borderBottom: "1px solid #FFFFFF12", _last: { borderBottom: "none" }, h: 20, cursor: "pointer", children: [(0, n.jsx)(x.Td, { pr: 0, children: (0, n.jsxs)(l.k, { flexDir: "row", alignItems: "center", children: [(0, n.jsx)(b.Z, { name: e, image: (0, v.jc)(o), size: "2xs", boxSize: 8 }), (0, n.jsxs)(l.k, { flexDir: "column", children: [(0, n.jsx)(h.x, { fontWeight: "600", color: "text.primary", fontSize: { base: "sm", md: "md" }, mb: 0.5, children: e }), (0, n.jsx)(h.x, { color: "text.secondary", fontSize: { base: "xs", md: "sm" }, children: o })] })] }) }), (0, n.jsxs)(x.Td, { textAlign: "end", children: [(0, n.jsx)(j.Z, { color: "text.primary", mb: 0.5, fontSize: { base: "sm", md: "md" }, children: "".concat((0, v.ml)(Number(i), { notation: "compact", showMinimumValues: !0 })) }), (0, n.jsx)(j.Z, { color: (0, y.Zl)(C), fontSize: { base: "xs", md: "sm" }, children: C })] }), (0, n.jsxs)(x.Td, { textAlign: "end", children: [(0, n.jsx)(j.Z, { mb: 0.5, fontSize: { base: "sm", md: "md" }, children: (0, v.c2)(u) }), (0, n.jsx)(j.Z, { color: (0, y.Zl)(A), fontSize: { base: "xs", md: "sm" }, children: A })] }), (0, n.jsxs)(x.Td, { textAlign: "end", children: [(0, n.jsx)(j.Z, { mb: 0.5, fontSize: { base: "sm", md: "md" }, children: "".concat((0, v.ml)(Number(a), { notation: "compact", showMinimumValues: !0 })) }), (0, n.jsx)(j.Z, { color: (0, y.Zl)(T), fontSize: { base: "xs", md: "sm" }, children: T })] }), (0, n.jsxs)(x.Td, { textAlign: "end", children: [(0, n.jsx)(j.Z, { mb: 0.5, fontSize: { base: "sm", md: "md" }, children: (0, v.c2)(c) }), (0, n.jsx)(j.Z, { color: (0, y.Zl)(B), fontSize: { base: "xs", md: "sm" }, children: B })] })] }) }) }, t);
                        }),
                  }),
                ],
              }),
            }),
          });
        },
        B = e(93344),
        F = e(14418),
        P = e(76684),
        Z = e(23100),
        z = e(9253),
        L = e(76073),
        M = e(86108),
        G = e(3023),
        H = e(75358),
        R = e(97187),
        V = (0, L.z)({
          chartName: "AreaChart",
          GraphicalChild: M.u,
          axisComponents: [
            { axisType: "xAxis", AxisComp: G.K },
            { axisType: "yAxis", AxisComp: H.B },
          ],
          formatAxisMap: R.t9,
        }),
        Y = e(11028),
        $ = e(47441),
        I = e(33229),
        E = function (r) {
          var t = r.title,
            e = r.content,
            o = r.align,
            i = void 0 === o ? "left" : o;
          return (0, n.jsxs)(Y.k, {
            display: "flex",
            borderRadius: "md",
            justifyContent: "right" === i ? "flex-end" : "flex-start",
            children: [
              (0, n.jsx)($.d, {
                mb: "1",
                fontSize: { base: "xs", md: "sm" },
                lineHeight: { base: "16px", md: "auto" },
                color: "text.secondary",
                textAlign: i,
                children: t,
              }),
              (0, n.jsx)(B.O, {
                w: "full",
                borderRadius: "md",
                h: e ? 9 : 6,
                isLoaded: !!e,
                children: (0, n.jsx)(I.J, {
                  textAlign: i,
                  color: "text.primary",
                  sx: { fontVariant: "tabular-nums" },
                  fontSize: { base: "xl", md: "2xl" },
                  lineHeight: { base: "24px", md: "auto" },
                  children: e,
                }),
              }),
            ],
          });
        },
        W = function (r) {
          var t = r.market,
            e = r.color,
            o = (0, v.c2)(t.percentage);
          return (0, n.jsxs)(
            l.k,
            {
              alignItems: "center",
              h: 4,
              children: [
                (0, n.jsx)(l.k, {
                  minW: "72px",
                  children: (0, n.jsx)(h.x, {
                    fontSize: { base: "xs", md: "sm" },
                    lineHeight: { base: "16px", md: "auto" },
                    color: "text.secondary",
                    children: t.symbol,
                  }),
                }),
                (0, n.jsxs)(l.k, {
                  w: "full",
                  alignItems: "center",
                  position: "relative",
                  h: "6px",
                  borderRadius: "lg",
                  overflow: "hidden",
                  children: [
                    (0, n.jsx)(Z.xu, {
                      w: "full",
                      bgColor: "stroke.divider",
                      h: "6px",
                      overflow: "hidden",
                      boxShadow: "inset 0px 1px 0px rgba(255, 255, 255, 0.04)",
                    }),
                    (0, n.jsx)(Z.xu, {
                      position: "absolute",
                      bgColor: e,
                      top: "0",
                      left: "0",
                      width: o,
                      h: "6px",
                      overflow: "hidden",
                      borderRadius: "lg",
                      boxShadow: "inset 0px 1px 0px rgba(255, 255, 255, 0.16)",
                    }),
                  ],
                }),
                (0, n.jsx)(l.k, {
                  minW: "72px",
                  justifyContent: "flex-end",
                  children: (0, n.jsx)(j.Z, {
                    fontSize: { base: "xs", md: "sm" },
                    lineHeight: { base: "16px", md: "auto" },
                    color: "text.label",
                    fontWeight: 600,
                    children: o,
                  }),
                }),
              ],
            },
            t.symbol
          );
        },
        X = function (r) {
          var t = r.title,
            e = r.primaryColor,
            o = r.total,
            i = r.variation,
            s = r.topMarkets,
            u = r.chartData,
            c = r.volumeAmount,
            d = r.totalUsers,
            m = (0, a.$G)("markets").t;
          return (0, n.jsx)(S.Z, {
            w: "full",
            children: (0, n.jsxs)(l.k, {
              flexDir: "column",
              border: "1px solid #FFFFFF12",
              background: g.r.colors.background.box,
              borderRadius: "2xl",
              p: { base: "30px 26.5px 30.5px 25.5px", md: "6" },
              children: [
                (0, n.jsx)(h.x, {
                  mb: "2",
                  fontSize: { base: "xs", md: "sm" },
                  color: "text.secondary",
                  children: m("total", { category: t.toLowerCase() }),
                }),
                (0, n.jsx)(B.O, {
                  isLoaded: !!o && !!i,
                  borderRadius: "md",
                  children: (0, n.jsxs)(l.k, {
                    mb: "2",
                    wrap: "wrap",
                    children: [
                      (0, n.jsx)(F.X, {
                        fontSize: { base: "2xl", sm: "4xl" },
                        mr: "3",
                        color: "text.primary",
                        sx: { fontVariant: "tabular-nums" },
                        children: (0, v.ml)(o, {
                          notation: "standard",
                          showMinimumValues: !0,
                        }),
                      }),
                      (0, n.jsx)(F.X, {
                        alignSelf: "flex-end",
                        fontSize: { base: "md", sm: "xl" },
                        pb: "0.5",
                        color: (0, y.Zl)(i, !0),
                        sx: { fontVariant: "tabular-nums" },
                        children: i,
                      }),
                    ],
                  }),
                }),
                (0, n.jsx)(l.k, {
                  my: "8",
                  children: (0, n.jsx)(B.O, {
                    isLoaded: !!u,
                    w: "full",
                    borderRadius: "md",
                    children: (0, n.jsx)(z.h, {
                      height: 80,
                      children: (0, n.jsxs)(V, {
                        height: 250,
                        data: u,
                        children: [
                          (0, n.jsx)("defs", {
                            children: (0, n.jsxs)("linearGradient", {
                              id: "color-".concat(t),
                              x1: "0",
                              y1: "0",
                              x2: "0",
                              y2: "1",
                              children: [
                                (0, n.jsx)("stop", {
                                  offset: "5%",
                                  stopColor: e,
                                  stopOpacity: 0.16,
                                }),
                                (0, n.jsx)("stop", {
                                  offset: "95%",
                                  stopColor: e,
                                  stopOpacity: 0,
                                }),
                              ],
                            }),
                          }),
                          (0, n.jsx)(M.u, {
                            strokeWidth: 6,
                            type: "monotone",
                            dataKey: "value",
                            stroke: e,
                            fillOpacity: 1,
                            fill: "url(#color-".concat(t, ")"),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
                (0, n.jsx)(P.K, {
                  gap: 2,
                  children:
                    s.length > 0
                      ? s.map(function (r) {
                          return (0,
                          n.jsx)(W, { market: r, color: e }, r.symbol);
                        })
                      : (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsx)(B.O, {
                              h: 3,
                              w: "full",
                              borderRadius: "md",
                            }),
                            (0, n.jsx)(B.O, {
                              h: 3,
                              w: "full",
                              borderRadius: "md",
                            }),
                            (0, n.jsx)(B.O, {
                              h: 3,
                              w: "full",
                              borderRadius: "md",
                            }),
                          ],
                        }),
                }),
                (0, n.jsx)(Z.xu, {
                  my: 4,
                  h: "1px",
                  bgColor: "stroke.divider",
                  w: "100%",
                }),
                (0, n.jsxs)(l.k, {
                  w: "full",
                  flexDir: "row",
                  justifyContent: "space-between",
                  gap: "4",
                  children: [
                    (0, n.jsx)(E, { title: m("stats.24hrVol"), content: c }),
                    (0, n.jsx)(E, {
                      align: "right",
                      title: m("stats.".concat(t.toLowerCase())),
                      content: d,
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        q = e(28687),
        J = e.n(q),
        K = e(8100),
        Q = e(15861),
        rr = e(18182),
        tr = function (r, t, e) {
          return J()(e, r, t);
        },
        er = Math.round(new Date().getTime() / 1e3) - 86400,
        nr = function (r, t, e) {
          return J()(e, r, t);
        },
        or = function () {
          var r = (0, Q.h)(),
            t = (0, K.ZP)([rr.hp, { dateGreaterThan: er }, r], nr, {
              revalidateOnFocus: !1,
            }),
            e = t.data,
            n = t.error,
            o = (function (r) {
              var t =
                  null === r || void 0 === r
                    ? void 0
                    : r.map(function (r) {
                        return Number(
                          null === r || void 0 === r
                            ? void 0
                            : r.totalUnderlyingSupplyUSD
                        );
                      }),
                e =
                  null === r || void 0 === r
                    ? void 0
                    : r.map(function (r) {
                        return Number(
                          null === r || void 0 === r ? void 0 : r.totalBorrowUSD
                        );
                      }),
                n = (0, y.Cd)(t),
                o = (0, y.Cd)(e);
              return { supplyVolume: Number(n), borrowVolume: Number(o) };
            })(null === e || void 0 === e ? void 0 : e.marketHistoricalDatas);
          return {
            data: e,
            supplyVolume: o.supplyVolume,
            borrowVolume: o.borrowVolume,
            error: n,
            isLoading: !n && !e,
          };
        },
        ir = e(49755),
        lr = e(10943);
      function ar(r, t, e) {
        return (
          t in r
            ? Object.defineProperty(r, t, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (r[t] = e),
          r
        );
      }
      var sr = function (r, t) {
          return J()(t, r);
        },
        ur = function (r, t, e) {
          return (0, U.orderBy)(r, e, "desc")
            .slice(0, 3)
            .map(function (r) {
              return { symbol: r.underlyingSymbol, percentage: r[e] / t };
            });
        },
        cr = function () {
          var r = (0, Q.h)(),
            t = (0, K.ZP)([rr.lA, r], sr, { revalidateOnFocus: !1 }),
            e = t.data,
            n = t.error,
            o = (0, lr.Z)(),
            i = (0, U.find)(ir.TV[o], "isDistributionToken"),
            l = (0, U.filter)(
              null === e || void 0 === e ? void 0 : e.markets,
              function (r) {
                return (
                  r.id !==
                  (null === i || void 0 === i
                    ? void 0
                    : i.address.toLowerCase())
                );
              }
            ),
            a = (0, s.useMemo)(
              function () {
                return (0, U.map)(l, function (r) {
                  return (function (r) {
                    for (var t = 1; t < arguments.length; t++) {
                      var e = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(e);
                      "function" === typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                          Object.getOwnPropertySymbols(e).filter(function (r) {
                            return Object.getOwnPropertyDescriptor(
                              e,
                              r
                            ).enumerable;
                          })
                        )),
                        n.forEach(function (t) {
                          ar(r, t, e[t]);
                        });
                    }
                    return r;
                  })({}, r, {
                    totalUnderlyingSupplyUSD: Number(
                      r.totalUnderlyingSupplyUSD
                    ),
                    totalBorrowUSD: Number(r.totalBorrowUSD),
                  });
                });
              },
              [l]
            ),
            u = (function (r) {
              var t =
                  null === r || void 0 === r
                    ? void 0
                    : r.map(function (r) {
                        var t;
                        return Number(
                          null ===
                            (t =
                              null === r || void 0 === r
                                ? void 0
                                : r.historicalData[0]) || void 0 === t
                            ? void 0
                            : t.numberOfSuppliers
                        );
                      }),
                e =
                  null === r || void 0 === r
                    ? void 0
                    : r.map(function (r) {
                        var t;
                        return Number(
                          null ===
                            (t =
                              null === r || void 0 === r
                                ? void 0
                                : r.historicalData[0]) || void 0 === t
                            ? void 0
                            : t.numberOfBorrowers
                        );
                      });
              return { suppliers: (0, y.Cd)(t), borrowers: (0, y.Cd)(e) };
            })(l),
            c = u.suppliers,
            d = u.borrowers,
            m = (0, s.useMemo)(
              function () {
                var r;
                return ur(
                  a,
                  Number(
                    null ===
                      (r =
                        null === e || void 0 === e
                          ? void 0
                          : e.comptrollers[0]) || void 0 === r
                      ? void 0
                      : r.totalUnderlyingSupplyUSD
                  ),
                  "totalUnderlyingSupplyUSD"
                );
              },
              [null === e || void 0 === e ? void 0 : e.comptrollers, a]
            ),
            p = (0, s.useMemo)(
              function () {
                var r;
                return ur(
                  a,
                  Number(
                    null ===
                      (r =
                        null === e || void 0 === e
                          ? void 0
                          : e.comptrollers[0]) || void 0 === r
                      ? void 0
                      : r.totalBorrowUSD
                  ),
                  "totalBorrowUSD"
                );
              },
              [null === e || void 0 === e ? void 0 : e.comptrollers, a]
            );
          return {
            markets: a,
            topSupplyMarkets: m,
            topBorrowMarkets: p,
            comptrollers: null === e || void 0 === e ? void 0 : e.comptrollers,
            suppliers: c,
            borrowers: d,
            error: n,
            isLoading: !n && !e,
          };
        },
        dr = function (r) {
          return Intl.NumberFormat("en-US").format(Number(r));
        },
        mr = !0,
        pr = function () {
          var r,
            t,
            e = cr(),
            u = e.markets,
            c = e.topSupplyMarkets,
            d = e.topBorrowMarkets,
            m = e.comptrollers,
            p = e.suppliers,
            f = e.borrowers,
            x = e.isLoading,
            h = (function () {
              var r,
                t,
                e,
                n,
                o,
                i = (0, Q.h)(),
                l = (0, K.ZP)(
                  [rr.U6, { dateGreaterThan: 0, pageLength: 20, skip: 0 }, i],
                  tr,
                  { revalidateOnFocus: !1 }
                ),
                a = l.data,
                u = l.error,
                c = (0, s.useMemo)(
                  function () {
                    var r;
                    return null === a ||
                      void 0 === a ||
                      null === (r = a.comptrollerHistoricalDatas) ||
                      void 0 === r
                      ? void 0
                      : r.map(function (r) {
                          return {
                            timestamp: Number(r.timestamp),
                            totalUnderlyingSupplyUSD: Number(
                              Number(r.totalUnderlyingSupplyUSD).toFixed(2)
                            ),
                            totalBorrowUSD: Number(
                              Number(r.totalBorrowUSD).toFixed(2)
                            ),
                          };
                        });
                  },
                  [
                    null === a || void 0 === a
                      ? void 0
                      : a.comptrollerHistoricalDatas,
                  ]
                ),
                d = (0, s.useMemo)(
                  function () {
                    return null === c || void 0 === c
                      ? void 0
                      : c.map(function (r) {
                          return {
                            date: r.timestamp,
                            value: r.totalUnderlyingSupplyUSD,
                          };
                        });
                  },
                  [c]
                ),
                m = (0, s.useMemo)(
                  function () {
                    return null === c || void 0 === c
                      ? void 0
                      : c.map(function (r) {
                          return { date: r.timestamp, value: r.totalBorrowUSD };
                        });
                  },
                  [c]
                ),
                p = a
                  ? (null === (r = a.comptrollerHistoricalDatas) || void 0 === r
                      ? void 0
                      : r.length) - 1
                  : 0,
                f =
                  null ===
                    (t =
                      null === a || void 0 === a
                        ? void 0
                        : a.comptrollerHistoricalDatas[p]) || void 0 === t
                    ? void 0
                    : t.totalUnderlyingSupplyUSD,
                x =
                  null ===
                    (e =
                      null === a || void 0 === a
                        ? void 0
                        : a.comptrollerHistoricalDatas[p - 1]) || void 0 === e
                    ? void 0
                    : e.totalUnderlyingSupplyUSD,
                h =
                  null ===
                    (n =
                      null === a || void 0 === a
                        ? void 0
                        : a.comptrollerHistoricalDatas[p]) || void 0 === n
                    ? void 0
                    : n.totalBorrowUSD,
                b =
                  null ===
                    (o =
                      null === a || void 0 === a
                        ? void 0
                        : a.comptrollerHistoricalDatas[p - 1]) || void 0 === o
                    ? void 0
                    : o.totalBorrowUSD;
              return {
                data: a,
                totalSupplyChartData: d,
                totalBorrowChartData: m,
                lastComptrollerSupply: f,
                previousComptrollerSupply: x,
                lastComptrollerBorrow: h,
                previousComptrollerBorrow: b,
                error: u,
                isLoading: !u && !a,
              };
            })(),
            b = h.totalSupplyChartData,
            S = h.totalBorrowChartData,
            j = h.lastComptrollerSupply,
            w = h.lastComptrollerBorrow,
            k = h.previousComptrollerSupply,
            D = h.previousComptrollerBorrow,
            U = or(),
            N = U.supplyVolume,
            O = U.borrowVolume,
            _ = (0, o.S)({ base: !0, sm: !1 }),
            C = (0, a.$G)("layout").t;
          return (0, n.jsxs)(i.W, {
            maxW: "container.xl",
            pb: { base: 12, lg: 16 },
            children: [
              (0, n.jsxs)(l.k, {
                w: "full",
                flexDir: { base: "column", lg: "row" },
                mb: "8",
                gap: "6",
                children: [
                  (0, n.jsx)(X, {
                    title: C("supply"),
                    total: Number(
                      null === m ||
                        void 0 === m ||
                        null === (r = m[0]) ||
                        void 0 === r
                        ? void 0
                        : r.totalUnderlyingSupplyUSD
                    ),
                    chartData: b,
                    variation: (0, y.mA)(j, k),
                    primaryColor: g.r.colors.secondary,
                    topMarkets: c,
                    volumeAmount: "".concat(
                      (0, v.ml)(N, {
                        notation: _ ? "compact" : "standard",
                        decimals: 0,
                      })
                    ),
                    totalUsers: u && dr(p),
                    isLoading: x,
                  }),
                  (0, n.jsx)(X, {
                    title: C("borrow"),
                    total: Number(
                      null === m ||
                        void 0 === m ||
                        null === (t = m[0]) ||
                        void 0 === t
                        ? void 0
                        : t.totalBorrowUSD
                    ),
                    chartData: S,
                    variation: (0, y.mA)(w, D),
                    primaryColor: g.r.colors.primary,
                    topMarkets: d,
                    volumeAmount: "".concat(
                      (0, v.ml)(O, {
                        notation: _ ? "compact" : "standard",
                        decimals: 0,
                      })
                    ),
                    totalUsers: u && dr(f),
                    isLoading: x,
                  }),
                ],
              }),
              (0, n.jsx)(A, { markets: u, isLoading: x }),
            ],
          });
        };
    },
    14418: function (r, t, e) {
      "use strict";
      e.d(t, {
        X: function () {
          return u;
        },
      });
      var n = e(35059),
        o = e(91639),
        i = e(33179),
        l = e(26848),
        a = e(25432),
        s = e(85893),
        u = (0, n.G)(function (r, t) {
          const e = (0, o.mq)("Heading", r),
            { className: n, ...u } = (0, i.Lr)(r);
          return (0,
          s.jsx)(l.m.h2, { ref: t, className: (0, a.cx)("chakra-heading", r.className), ...u, __css: e });
        });
      u.displayName = "Heading";
    },
    99188: function (r, t, e) {
      "use strict";
      e.d(t, {
        N: function () {
          return u;
        },
      });
      var n = e(93344),
        o = e(63343),
        i = e(26848),
        l = e(25432),
        a = e(85893);
      var s = 3,
        u = (r) => {
          const {
              noOfLines: t = s,
              spacing: e = "0.5rem",
              skeletonHeight: u = "0.5rem",
              className: c,
              startColor: d,
              endColor: m,
              isLoaded: p,
              fadeDuration: f,
              speed: x,
              variant: h,
              size: b,
              colorScheme: v,
              children: y,
              ...g
            } = r,
            S = (0, o.S)("number" === typeof t ? [t] : t) || s,
            j = Array(S)
              .fill(1)
              .map((r, t) => t + 1);
          const w = (r) => (S > 1 && r === j.length ? "80%" : "100%"),
            k = (0, l.cx)("chakra-skeleton__group", c);
          return (0, a.jsx)(i.m.div, {
            className: k,
            ...g,
            children: j.map((r, t) => {
              if (p && t > 0) return null;
              const o = p
                ? null
                : { mb: r === j.length ? "0" : e, width: w(r), height: u };
              return (0, a.jsx)(
                n.O,
                {
                  startColor: d,
                  endColor: m,
                  isLoaded: p,
                  fadeDuration: f,
                  speed: x,
                  variant: h,
                  size: b,
                  colorScheme: v,
                  ...o,
                  children: 0 === t ? y : void 0,
                },
                j.length.toString() + r
              );
            }),
          });
        };
      u.displayName = "SkeletonText";
    },
    33229: function (r, t, e) {
      "use strict";
      e.d(t, {
        J: function () {
          return s;
        },
      });
      var n = e(11028),
        o = e(25432),
        i = e(35059),
        l = e(26848),
        a = e(85893),
        s = (0, i.G)(function (r, t) {
          const e = (0, n.J)();
          return (0,
          a.jsx)(l.m.dd, { ref: t, ...r, className: (0, o.cx)("chakra-stat__number", r.className), __css: { ...e.number, fontFeatureSettings: "pnum", fontVariantNumeric: "proportional-nums" } });
        });
      s.displayName = "StatNumber";
    },
    11028: function (r, t, e) {
      "use strict";
      e.d(t, {
        J: function () {
          return d;
        },
        k: function () {
          return m;
        },
      });
      var n = e(55227),
        o = e(35059),
        i = e(91639),
        l = e(33179),
        a = e(26848),
        s = e(25432),
        u = e(85893),
        [c, d] = (0, n.k)({
          name: "StatStylesContext",
          errorMessage:
            "useStatStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Stat />\" ",
        }),
        m = (0, o.G)(function (r, t) {
          const e = (0, i.jC)("Stat", r),
            n = { position: "relative", flex: "1 1 0%", ...e.container },
            { className: o, children: d, ...m } = (0, l.Lr)(r);
          return (0,
          u.jsx)(c, { value: e, children: (0, u.jsx)(a.m.div, { ref: t, ...m, className: (0, s.cx)("chakra-stat", o), __css: n, children: (0, u.jsx)("dl", { children: d }) }) });
        });
      m.displayName = "Stat";
    },
    47441: function (r, t, e) {
      "use strict";
      e.d(t, {
        d: function () {
          return s;
        },
      });
      var n = e(11028),
        o = e(25432),
        i = e(35059),
        l = e(26848),
        a = e(85893),
        s = (0, i.G)(function (r, t) {
          const e = (0, n.J)();
          return (0,
          a.jsx)(l.m.dt, { ref: t, ...r, className: (0, o.cx)("chakra-stat__label", r.className), __css: e.label });
        });
      s.displayName = "StatLabel";
    },
    36354: function (r, t, e) {
      "use strict";
      e.d(t, {
        x: function () {
          return a;
        },
      });
      var n = e(35059),
        o = e(26848),
        i = e(25432),
        l = e(85893),
        a = (0, n.G)((r, t) => {
          var e;
          const { overflow: n, overflowX: a, className: s, ...u } = r;
          return (0, l.jsx)(o.m.div, {
            ref: t,
            className: (0, i.cx)("chakra-table__container", s),
            ...u,
            __css: {
              display: "block",
              whiteSpace: "nowrap",
              WebkitOverflowScrolling: "touch",
              overflowX: null != (e = null != n ? n : a) ? e : "auto",
              overflowY: "hidden",
              maxWidth: "100%",
            },
          });
        });
    },
    36557: function (r, t, e) {
      "use strict";
      e.d(t, {
        i: function () {
          return m;
        },
        p: function () {
          return d;
        },
      });
      var n = e(35059),
        o = e(91639),
        i = e(33179),
        l = e(26848),
        a = e(25432),
        s = e(55227),
        u = e(85893),
        [c, d] = (0, s.k)({
          name: "TableStylesContext",
          errorMessage:
            "useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Table />\" ",
        }),
        m = (0, n.G)((r, t) => {
          const e = (0, o.jC)("Table", r),
            { className: n, layout: s, ...d } = (0, i.Lr)(r);
          return (0, u.jsx)(c, {
            value: e,
            children: (0, u.jsx)(l.m.table, {
              ref: t,
              __css: { tableLayout: s, ...e.table },
              className: (0, a.cx)("chakra-table", n),
              ...d,
            }),
          });
        });
      m.displayName = "Table";
    },
    577: function (r, t, e) {
      "use strict";
      e.d(t, {
        Td: function () {
          return a;
        },
      });
      var n = e(36557),
        o = e(35059),
        i = e(26848),
        l = e(85893),
        a = (0, o.G)(({ isNumeric: r, ...t }, e) => {
          const o = (0, n.p)();
          return (0, l.jsx)(i.m.td, {
            ...t,
            ref: e,
            __css: o.td,
            "data-is-numeric": r,
          });
        });
    },
    28650: function (r, t, e) {
      "use strict";
      e.d(t, {
        p: function () {
          return a;
        },
      });
      var n = e(36557),
        o = e(35059),
        i = e(26848),
        l = e(85893),
        a = (0, o.G)((r, t) => {
          const e = (0, n.p)();
          return (0, l.jsx)(i.m.tbody, { ...r, ref: t, __css: e.tbody });
        });
    },
    24304: function (r, t, e) {
      "use strict";
      e.d(t, {
        h: function () {
          return a;
        },
      });
      var n = e(36557),
        o = e(35059),
        i = e(26848),
        l = e(85893),
        a = (0, o.G)((r, t) => {
          const e = (0, n.p)();
          return (0, l.jsx)(i.m.thead, { ...r, ref: t, __css: e.thead });
        });
    },
    36526: function (r, t, e) {
      "use strict";
      e.d(t, {
        Tr: function () {
          return a;
        },
      });
      var n = e(36557),
        o = e(35059),
        i = e(26848),
        l = e(85893),
        a = (0, o.G)((r, t) => {
          const e = (0, n.p)();
          return (0, l.jsx)(i.m.tr, { ...r, ref: t, __css: e.tr });
        });
    },
    75421: function (r, t, e) {
      "use strict";
      e.d(t, {
        Th: function () {
          return a;
        },
      });
      var n = e(36557),
        o = e(35059),
        i = e(26848),
        l = e(85893),
        a = (0, o.G)(({ isNumeric: r, ...t }, e) => {
          const o = (0, n.p)();
          return (0, l.jsx)(i.m.th, {
            ...t,
            ref: e,
            __css: o.th,
            "data-is-numeric": r,
          });
        });
    },
  },
  function (r) {
    r.O(0, [207, 774, 888, 179], function () {
      return (t = 61553), r((r.s = t));
      var t;
    });
    var t = r.O();
    _N_E = t;
  },
]);
//# sourceMappingURL=markets-76f0e055aa00d212.js.map
