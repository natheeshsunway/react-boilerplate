(self.webpackChunkreact_boilerplate = self.webpackChunkreact_boilerplate || []).push([
  [715],
  {
    3843: function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
    },
    6769: function (__unused_webpack_module, exports, __webpack_require__) {
      'use strict';
      var __importDefault =
        (this && this.__importDefault) ||
        function (mod) {
          return mod && mod.__esModule ? mod : { default: mod };
        };
      Object.defineProperty(exports, '__esModule', { value: !0 });
      const react_1 = __importDefault(__webpack_require__(7294)),
        RouteContent_1 = __importDefault(__webpack_require__(3672)),
        actions_1 = __webpack_require__(750);
      exports.default = () =>
        react_1.default.createElement(RouteContent_1.default, {
          icon: 'plus',
          path: '/',
          label: 'Increment',
          action: actions_1.incrementAction,
        });
    },
    3672: function (__unused_webpack_module, exports, __webpack_require__) {
      'use strict';
      var __importDefault =
        (this && this.__importDefault) ||
        function (mod) {
          return mod && mod.__esModule ? mod : { default: mod };
        };
      Object.defineProperty(exports, '__esModule', { value: !0 });
      const react_1 = __importDefault(__webpack_require__(7294)),
        bind_1 = __importDefault(__webpack_require__(7166)),
        react_redux_1 = __webpack_require__(8629),
        Icon_1 = __importDefault(__webpack_require__(8055)),
        RouteContent_scss_1 = __importDefault(__webpack_require__(3843)),
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
            { className: `${cx('route-content--counter')} m-t-xs` },
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
    750: function (__unused_webpack_module, exports, __webpack_require__) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.resetAction = exports.decrementAction = exports.incrementAction = void 0);
      const reducer_1 = __webpack_require__(9269);
      exports.incrementAction = () => ({ type: reducer_1.INCREMENT_COUNTER });
      exports.decrementAction = () => ({ type: reducer_1.DECREMENT_COUNTER });
      exports.resetAction = () => ({ type: reducer_1.RESET_COUNTER });
    },
  },
]);
