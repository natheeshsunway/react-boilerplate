(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    249: function (module, exports, __webpack_require__) {
      'use strict';
      var __importDefault =
        (this && this.__importDefault) ||
        function (mod) {
          return mod && mod.__esModule ? mod : { default: mod };
        };
      Object.defineProperty(exports, '__esModule', { value: !0 });
      const react_1 = __importDefault(__webpack_require__(0)),
        bind_1 = __importDefault(__webpack_require__(14)),
        react_redux_1 = __webpack_require__(21),
        Icon_1 = __importDefault(__webpack_require__(12)),
        RouteContent_scss_1 = __importDefault(__webpack_require__(250)),
        cx = bind_1.default.bind(RouteContent_scss_1.default);
      exports.default = ({ path, label, action, icon }) => {
        const dispatch = react_redux_1.useDispatch(),
          counter = react_redux_1.useSelector((state) => state.counter);
        return react_1.default.createElement(
          'div',
          { className: cx('route-content--container') },
          react_1.default.createElement(
            'div',
            { className: cx('route-content--heading') },
            react_1.default.createElement(Icon_1.default, { icon: 'angle-right' }),
            ' Connected to the Redux store at the ',
            react_1.default.createElement('code', null, path || '/'),
            ' route'
          ),
          react_1.default.createElement(
            'div',
            { className: cx('route-content--counter') },
            react_1.default.createElement(Icon_1.default, { icon: 'angle-right' }),
            ' ',
            react_1.default.createElement('code', null, 'counter'),
            ': ',
            react_1.default.createElement('code', null, counter)
          ),
          react_1.default.createElement('br', null),
          react_1.default.createElement(
            'div',
            { className: 'm-t-sm' },
            react_1.default.createElement(
              'button',
              { className: 'button', onClick: () => dispatch(action()) },
              react_1.default.createElement(Icon_1.default, { icon }),
              ' ',
              label,
              ' counter'
            )
          )
        );
      };
    },
    250: function (module, exports, __webpack_require__) {},
    251: function (module, exports, __webpack_require__) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.resetAction = exports.decrementAction = exports.incrementAction = void 0);
      const reducer_1 = __webpack_require__(76);
      (exports.incrementAction = () => ({ type: reducer_1.INCREMENT_COUNTER })),
        (exports.decrementAction = () => ({ type: reducer_1.DECREMENT_COUNTER })),
        (exports.resetAction = () => ({ type: reducer_1.RESET_COUNTER }));
    },
    79: function (module, exports, __webpack_require__) {
      'use strict';
      var __importDefault =
        (this && this.__importDefault) ||
        function (mod) {
          return mod && mod.__esModule ? mod : { default: mod };
        };
      Object.defineProperty(exports, '__esModule', { value: !0 });
      const react_1 = __importDefault(__webpack_require__(0)),
        RouteContent_1 = __importDefault(__webpack_require__(249)),
        actions_1 = __webpack_require__(251);
      exports.default = () =>
        react_1.default.createElement(RouteContent_1.default, {
          icon: 'history',
          path: '/reset',
          label: 'Reset',
          action: actions_1.resetAction,
        });
    },
  },
]);
