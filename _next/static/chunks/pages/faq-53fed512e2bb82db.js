(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [746],
  {
    50008: function (e, n, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/faq",
        function () {
          return i(93062);
        },
      ]);
    },
    85: function (e, n, i) {
      "use strict";
      var r = i(85893),
        s = i(14418);
      n.Z = function (e) {
        var n = e.children;
        return (0, r.jsx)(s.X, {
          textAlign: "left",
          size: "md",
          mb: 4,
          children: n,
        });
      };
    },
    93062: function (e, n, i) {
      "use strict";
      i.r(n),
        i.d(n, {
          __N_SSG: function () {
            return K;
          },
          default: function () {
            return _;
          },
        });
      var r = i(85893),
        s = i(36979),
        l = i(14418),
        c = i(1004),
        d = i(56005),
        t = i(49394),
        o = i(80333),
        j = i(69558),
        x = i(71412),
        h = i(36024),
        a = i(5077),
        b = i(77484),
        w = i(54641),
        u = i(21673),
        f = i(18122),
        p = i(5197),
        g = i(85),
        m = i(88911);
      function y(e, n, i) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = i),
          e
        );
      }
      function B() {
        return (
          (B =
            Object.assign ||
            function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var i = arguments[n];
                for (var r in i)
                  Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
              }
              return e;
            }),
          B.apply(this, arguments)
        );
      }
      var H = function (e) {
          var n = B({}, e);
          return (0, r.jsx)(
            m.x,
            (function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var i = null != arguments[n] ? arguments[n] : {},
                  r = Object.keys(i);
                "function" === typeof Object.getOwnPropertySymbols &&
                  (r = r.concat(
                    Object.getOwnPropertySymbols(i).filter(function (e) {
                      return Object.getOwnPropertyDescriptor(i, e).enumerable;
                    })
                  )),
                  r.forEach(function (n) {
                    y(e, n, i[n]);
                  });
              }
              return e;
            })({}, n, { color: "text.secondary", whiteSpace: "pre-line" })
          );
        },
        C = function () {
          var e = (0, x.$G)("faq").t;
          return (0, r.jsxs)(h.U, {
            allowToggle: !0,
            children: [
              (0, r.jsxs)(a.Q, {
                border: "none",
                children: [
                  (0, r.jsx)(b.K, {
                    children: (0, r.jsxs)(w.U, {
                      align: "baseline",
                      justify: "space-between",
                      w: "100%",
                      children: [
                        (0, r.jsx)(g.Z, { children: e("basics.what.title") }),
                        (0, r.jsx)(u.X, {}),
                      ],
                    }),
                  }),
                  (0, r.jsx)(f.H, {
                    children: (0, r.jsx)(H, {
                      children: e("basics.what.description"),
                    }),
                  }),
                ],
              }),
              (0, r.jsxs)(a.Q, {
                border: "none",
                children: [
                  (0, r.jsx)(b.K, {
                    children: (0, r.jsxs)(w.U, {
                      align: "baseline",
                      justify: "space-between",
                      w: "100%",
                      children: [
                        (0, r.jsx)(g.Z, {
                          children: e("basics.functionalities.title"),
                        }),
                        (0, r.jsx)(u.X, {}),
                      ],
                    }),
                  }),
                  (0, r.jsxs)(f.H, {
                    children: [
                      (0, r.jsx)(H, {
                        mb: 2,
                        children: e("basics.functionalities.description"),
                      }),
                      (0, r.jsxs)(p.GS, {
                        spacing: 2,
                        children: [
                          (0, r.jsx)(p.HC, {
                            children: (0, r.jsx)(H, {
                              children: e("basics.functionalities.itemA"),
                            }),
                          }),
                          (0, r.jsx)(p.HC, {
                            children: (0, r.jsx)(H, {
                              children: e("basics.functionalities.itemB"),
                            }),
                          }),
                          (0, r.jsx)(p.HC, {
                            children: (0, r.jsx)(H, {
                              children: e("basics.functionalities.itemC"),
                            }),
                          }),
                          (0, r.jsx)(p.HC, {
                            children: (0, r.jsx)(H, {
                              children: e("basics.functionalities.itemD"),
                            }),
                          }),
                          (0, r.jsx)(p.HC, {
                            children: (0, r.jsx)(H, {
                              children: e("basics.functionalities.itemE"),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsxs)(a.Q, {
                border: "none",
                children: [
                  (0, r.jsx)(b.K, {
                    children: (0, r.jsxs)(w.U, {
                      align: "baseline",
                      justify: "space-between",
                      w: "100%",
                      children: [
                        (0, r.jsx)(g.Z, {
                          children: e("basics.wallets.title"),
                        }),
                        (0, r.jsx)(u.X, {}),
                      ],
                    }),
                  }),
                  (0, r.jsx)(f.H, {
                    children: (0, r.jsx)(H, {
                      children: e("basics.wallets.description"),
                    }),
                  }),
                ],
              }),
              (0, r.jsxs)(a.Q, {
                border: "none",
                children: [
                  (0, r.jsx)(b.K, {
                    children: (0, r.jsxs)(w.U, {
                      align: "baseline",
                      justify: "space-between",
                      w: "100%",
                      children: [
                        (0, r.jsx)(g.Z, {
                          children: e("basics.platform.title"),
                        }),
                        (0, r.jsx)(u.X, {}),
                      ],
                    }),
                  }),
                  (0, r.jsx)(f.H, {
                    children: (0, r.jsx)(H, {
                      children: e("basics.platform.description"),
                    }),
                  }),
                ],
              }),
              (0, r.jsxs)(a.Q, {
                border: "none",
                children: [
                  (0, r.jsx)(b.K, {
                    children: (0, r.jsxs)(w.U, {
                      align: "baseline",
                      justify: "space-between",
                      w: "100%",
                      children: [
                        (0, r.jsx)(g.Z, {
                          children: e("basics.addFunds.title"),
                        }),
                        (0, r.jsx)(u.X, {}),
                      ],
                    }),
                  }),
                  (0, r.jsx)(f.H, {
                    children: (0, r.jsx)(H, {
                      children: e("basics.addFunds.description"),
                    }),
                  }),
                ],
              }),
              (0, r.jsxs)(a.Q, {
                border: "none",
                children: [
                  (0, r.jsx)(b.K, {
                    children: (0, r.jsxs)(w.U, {
                      align: "baseline",
                      justify: "space-between",
                      w: "100%",
                      children: [
                        (0, r.jsx)(g.Z, { children: e("basics.limit.title") }),
                        (0, r.jsx)(u.X, {}),
                      ],
                    }),
                  }),
                  (0, r.jsx)(f.H, {
                    children: (0, r.jsx)(H, {
                      children: e("basics.limit.description"),
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        X = function () {
          var e = (0, x.$G)("faq").t;
          return (0, r.jsxs)(h.U, {
            allowToggle: !0,
            children: [
              (0, r.jsxs)(a.Q, {
                border: "none",
                children: [
                  (0, r.jsx)(b.K, {
                    children: (0, r.jsxs)(w.U, {
                      align: "baseline",
                      justify: "space-between",
                      w: "100%",
                      children: [
                        (0, r.jsx)(g.Z, {
                          children: e("lendBorrow.assetSupport.title"),
                        }),
                        (0, r.jsx)(u.X, {}),
                      ],
                    }),
                  }),
                  (0, r.jsx)(f.H, {
                    children: (0, r.jsx)(H, {
                      children: e("lendBorrow.assetSupport.description"),
                    }),
                  }),
                ],
              }),
              (0, r.jsxs)(a.Q, {
                border: "none",
                children: [
                  (0, r.jsx)(b.K, {
                    children: (0, r.jsxs)(w.U, {
                      align: "baseline",
                      justify: "space-between",
                      w: "100%",
                      children: [
                        (0, r.jsx)(g.Z, {
                          children: e("lendBorrow.borrowing.title"),
                        }),
                        (0, r.jsx)(u.X, {}),
                      ],
                    }),
                  }),
                  (0, r.jsxs)(f.H, {
                    children: [
                      (0, r.jsx)(H, {
                        mb: 2,
                        children: e("lendBorrow.borrowing.description"),
                      }),
                      (0, r.jsxs)(p.GS, {
                        spacing: 2,
                        mb: 2,
                        children: [
                          (0, r.jsx)(p.HC, {
                            children: (0, r.jsx)(H, {
                              children: e("lendBorrow.borrowing.itemA"),
                            }),
                          }),
                          (0, r.jsx)(p.HC, {
                            children: (0, r.jsx)(H, {
                              children: e("lendBorrow.borrowing.itemB"),
                            }),
                          }),
                          (0, r.jsx)(p.HC, {
                            children: (0, r.jsx)(H, {
                              children: e("lendBorrow.borrowing.itemC"),
                            }),
                          }),
                          (0, r.jsx)(p.HC, {
                            children: (0, r.jsx)(H, {
                              children: e("lendBorrow.borrowing.itemD"),
                            }),
                          }),
                          (0, r.jsx)(p.HC, {
                            children: (0, r.jsx)(H, {
                              children: e("lendBorrow.borrowing.itemE"),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsxs)(a.Q, {
                border: "none",
                children: [
                  (0, r.jsx)(b.K, {
                    children: (0, r.jsxs)(w.U, {
                      align: "baseline",
                      justify: "space-between",
                      w: "100%",
                      children: [
                        (0, r.jsx)(g.Z, {
                          children: e("lendBorrow.monitor.title"),
                        }),
                        (0, r.jsx)(u.X, {}),
                      ],
                    }),
                  }),
                  (0, r.jsx)(f.H, {
                    children: (0, r.jsx)(H, {
                      children: e("lendBorrow.monitor.description"),
                    }),
                  }),
                ],
              }),
              (0, r.jsxs)(a.Q, {
                border: "none",
                children: [
                  (0, r.jsx)(b.K, {
                    children: (0, r.jsxs)(w.U, {
                      align: "baseline",
                      justify: "space-between",
                      w: "100%",
                      children: [
                        (0, r.jsx)(g.Z, {
                          children: e("lendBorrow.lending.title"),
                        }),
                        (0, r.jsx)(u.X, {}),
                      ],
                    }),
                  }),
                  (0, r.jsxs)(f.H, {
                    children: [
                      (0, r.jsx)(H, {
                        mb: 2,
                        children: e("lendBorrow.lending.description"),
                      }),
                      (0, r.jsxs)(p.GS, {
                        spacing: 2,
                        mb: 2,
                        children: [
                          (0, r.jsx)(p.HC, {
                            children: (0, r.jsx)(H, {
                              children: e("lendBorrow.lending.itemA"),
                            }),
                          }),
                          (0, r.jsx)(p.HC, {
                            children: (0, r.jsx)(H, {
                              children: e("lendBorrow.lending.itemB"),
                            }),
                          }),
                          (0, r.jsx)(p.HC, {
                            children: (0, r.jsx)(H, {
                              children: e("lendBorrow.lending.itemC"),
                            }),
                          }),
                          (0, r.jsx)(p.HC, {
                            children: (0, r.jsx)(H, {
                              children: e("lendBorrow.lending.itemD"),
                            }),
                          }),
                          (0, r.jsx)(p.HC, {
                            children: (0, r.jsx)(H, {
                              children: e("lendBorrow.lending.itemE"),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsxs)(a.Q, {
                border: "none",
                children: [
                  (0, r.jsx)(b.K, {
                    children: (0, r.jsxs)(w.U, {
                      align: "baseline",
                      justify: "space-between",
                      w: "100%",
                      children: [
                        (0, r.jsx)(g.Z, {
                          children: e("lendBorrow.restrictions.title"),
                        }),
                        (0, r.jsx)(u.X, {}),
                      ],
                    }),
                  }),
                  (0, r.jsx)(f.H, {
                    children: (0, r.jsxs)(p.QI, {
                      children: [
                        (0, r.jsx)(p.HC, {
                          children: (0, r.jsx)(H, {
                            children: e("lendBorrow.restrictions.itemA"),
                          }),
                        }),
                        (0, r.jsx)(p.HC, {
                          children: (0, r.jsx)(H, {
                            children: e("lendBorrow.restrictions.itemB"),
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, r.jsxs)(a.Q, {
                border: "none",
                children: [
                  (0, r.jsx)(b.K, {
                    children: (0, r.jsxs)(w.U, {
                      align: "baseline",
                      justify: "space-between",
                      w: "100%",
                      children: [
                        (0, r.jsx)(g.Z, {
                          children: e("lendBorrow.interest.title"),
                        }),
                        (0, r.jsx)(u.X, {}),
                      ],
                    }),
                  }),
                  (0, r.jsx)(f.H, {
                    children: (0, r.jsx)(H, {
                      children: e("lendBorrow.interest.description"),
                    }),
                  }),
                ],
              }),
              (0, r.jsxs)(a.Q, {
                border: "none",
                children: [
                  (0, r.jsx)(b.K, {
                    children: (0, r.jsxs)(w.U, {
                      align: "baseline",
                      justify: "space-between",
                      w: "100%",
                      children: [
                        (0, r.jsx)(g.Z, {
                          children: e("lendBorrow.additionalCosts.title"),
                        }),
                        (0, r.jsx)(u.X, {}),
                      ],
                    }),
                  }),
                  (0, r.jsx)(f.H, {
                    children: (0, r.jsx)(H, {
                      children: e("lendBorrow.additionalCosts.description"),
                    }),
                  }),
                ],
              }),
              (0, r.jsxs)(a.Q, {
                border: "none",
                children: [
                  (0, r.jsx)(b.K, {
                    children: (0, r.jsxs)(w.U, {
                      align: "baseline",
                      justify: "space-between",
                      w: "100%",
                      children: [
                        (0, r.jsx)(g.Z, {
                          children: e("lendBorrow.loanDuration.title"),
                        }),
                        (0, r.jsx)(u.X, {}),
                      ],
                    }),
                  }),
                  (0, r.jsx)(f.H, {
                    children: (0, r.jsx)(H, {
                      children: e("lendBorrow.loanDuration.description"),
                    }),
                  }),
                ],
              }),
              (0, r.jsxs)(a.Q, {
                border: "none",
                children: [
                  (0, r.jsx)(b.K, {
                    children: (0, r.jsxs)(w.U, {
                      align: "baseline",
                      justify: "space-between",
                      w: "100%",
                      children: [
                        (0, r.jsx)(g.Z, {
                          children: e("lendBorrow.lendingLiquidity.title"),
                        }),
                        (0, r.jsx)(u.X, {}),
                      ],
                    }),
                  }),
                  (0, r.jsx)(f.H, {
                    children: (0, r.jsx)(H, {
                      children: e("lendBorrow.lendingLiquidity.description"),
                    }),
                  }),
                ],
              }),
              (0, r.jsxs)(a.Q, {
                border: "none",
                children: [
                  (0, r.jsx)(b.K, {
                    children: (0, r.jsxs)(w.U, {
                      align: "baseline",
                      justify: "space-between",
                      w: "100%",
                      children: [
                        (0, r.jsx)(g.Z, {
                          children: e("lendBorrow.withdrawDeposits.title"),
                        }),
                        (0, r.jsx)(u.X, {}),
                      ],
                    }),
                  }),
                  (0, r.jsxs)(f.H, {
                    children: [
                      (0, r.jsx)(H, {
                        mb: 2,
                        children: e("lendBorrow.withdrawDeposits.description"),
                      }),
                      (0, r.jsxs)(p.QI, {
                        children: [
                          (0, r.jsx)(p.HC, {
                            children: (0, r.jsx)(H, {
                              children: e("lendBorrow.withdrawDeposits.itemA"),
                            }),
                          }),
                          (0, r.jsx)(p.HC, {
                            children: (0, r.jsx)(H, {
                              children: e("lendBorrow.withdrawDeposits.itemB"),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        U = i(33838),
        Q = i(41664),
        Z = i.n(Q),
        v = function () {
          var e = (0, x.$G)("faq").t;
          return (0, r.jsxs)(h.U, {
            allowToggle: !0,
            children: [
              (0, r.jsxs)(a.Q, {
                border: "none",
                children: [
                  (0, r.jsx)(b.K, {
                    children: (0, r.jsxs)(w.U, {
                      align: "baseline",
                      justify: "space-between",
                      w: "100%",
                      children: [
                        (0, r.jsx)(g.Z, {
                          children: e("security.money.title"),
                        }),
                        (0, r.jsx)(u.X, {}),
                      ],
                    }),
                  }),
                  (0, r.jsx)(f.H, {
                    children: (0, r.jsx)(H, {
                      children: e("security.money.description"),
                    }),
                  }),
                ],
              }),
              (0, r.jsxs)(a.Q, {
                border: "none",
                children: [
                  (0, r.jsx)(b.K, {
                    children: (0, r.jsxs)(w.U, {
                      align: "baseline",
                      justify: "space-between",
                      w: "100%",
                      children: [
                        (0, r.jsx)(g.Z, { children: e("security.key.title") }),
                        (0, r.jsx)(u.X, {}),
                      ],
                    }),
                  }),
                  (0, r.jsx)(f.H, {
                    children: (0, r.jsx)(H, {
                      children: e("security.key.description"),
                    }),
                  }),
                ],
              }),
              (0, r.jsxs)(a.Q, {
                border: "none",
                children: [
                  (0, r.jsx)(b.K, {
                    children: (0, r.jsxs)(w.U, {
                      align: "baseline",
                      justify: "space-between",
                      w: "100%",
                      children: [
                        (0, r.jsx)(g.Z, {
                          children: e("security.features.title"),
                        }),
                        (0, r.jsx)(u.X, {}),
                      ],
                    }),
                  }),
                  (0, r.jsx)(f.H, {
                    children: (0, r.jsxs)(p.QI, {
                      children: [
                        (0, r.jsx)(p.HC, {
                          children: (0, r.jsx)(H, {
                            children: e("security.features.itemA"),
                          }),
                        }),
                        (0, r.jsx)(p.HC, {
                          children: (0, r.jsxs)(w.U, {
                            spacing: "1",
                            direction: "row",
                            children: [
                              (0, r.jsx)(H, {
                                children: e("security.features.itemB"),
                              }),
                              (0, r.jsx)(Z(), {
                                href: "https://hashex.org/audits/deepr-finance/",
                                passHref: !0,
                                children: (0, r.jsx)(U.r, {
                                  _hover: { textDecoration: "none" },
                                  children: (0, r.jsx)(H, {
                                    transition: "0.5s",
                                    _hover: {
                                      background:
                                        "linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08)), linear-gradient(93.74deg, #6153CC 3.56%, #795EC1 97.35%)",
                                      bgClip: "text",
                                    },
                                    bgGradient:
                                      "linear(to-r, #6153CC, #795EC1)",
                                    bgClip: "text",
                                    textAlign: "center",
                                    fontWeight: 600,
                                    borderBottom: "1px solid",
                                    style: {
                                      borderImage:
                                        "linear-gradient(90deg, #6153CC 50%, #795EC1 100%) 1",
                                    },
                                    children: e("security.features.itemBLink"),
                                  }),
                                }),
                              }),
                              (0, r.jsx)(H, {
                                children: e("security.features.itemBNext"),
                              }),
                            ],
                          }),
                        }),
                        (0, r.jsx)(p.HC, {
                          children: (0, r.jsx)(H, {
                            children: e("security.features.itemC"),
                          }),
                        }),
                        (0, r.jsx)(p.HC, {
                          children: (0, r.jsx)(H, {
                            children: e("security.features.itemD"),
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        K = !0,
        _ = function () {
          var e = (0, x.$G)("faq").t;
          return (0, r.jsxs)(s.W, {
            maxW: "container.xl",
            pb: { base: 12, lg: 16 },
            pt: { base: 0, md: "40px" },
            children: [
              (0, r.jsx)(l.X, { mb: 8, children: e("title") }),
              (0, r.jsxs)(c.m, {
                children: [
                  (0, r.jsxs)(d.t, {
                    children: [
                      (0, r.jsx)(t.O, {
                        children: (0, r.jsx)(l.X, {
                          fontSize: { base: "md", md: "xl" },
                          children: e("basics.title"),
                        }),
                      }),
                      (0, r.jsx)(t.O, {
                        children: (0, r.jsx)(l.X, {
                          fontSize: { base: "md", md: "xl" },
                          children: e("lendBorrow.title"),
                        }),
                      }),
                      (0, r.jsx)(t.O, {
                        children: (0, r.jsx)(l.X, {
                          fontSize: { base: "md", md: "xl" },
                          children: e("security.title"),
                        }),
                      }),
                    ],
                  }),
                  (0, r.jsxs)(o.n, {
                    children: [
                      (0, r.jsx)(j.x, { children: (0, r.jsx)(C, {}) }),
                      (0, r.jsx)(j.x, { children: (0, r.jsx)(X, {}) }),
                      (0, r.jsx)(j.x, { children: (0, r.jsx)(v, {}) }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
    },
  },
  function (e) {
    e.O(0, [617, 774, 888, 179], function () {
      return (n = 50008), e((e.s = n));
      var n;
    });
    var n = e.O();
    _N_E = n;
  },
]);
//# sourceMappingURL=faq-53fed512e2bb82db.js.map
