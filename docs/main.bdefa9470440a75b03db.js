(self.webpackChunkreact_boilerplate = self.webpackChunkreact_boilerplate || []).push([
  [179],
  {
    9024: function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294),
        p_min_delay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2959),
        p_min_delay__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          p_min_delay__WEBPACK_IMPORTED_MODULE_1__
        ),
        _loadable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2168),
        classnames_bind__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7166),
        classnames_bind__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          classnames_bind__WEBPACK_IMPORTED_MODULE_3__
        ),
        react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5977),
        react_tabify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5817),
        react_tabify__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
          react_tabify__WEBPACK_IMPORTED_MODULE_4__
        ),
        _components_Sections_ReactRouter_ChunkLoadingIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1746),
        _components_Sections_ReactRouter_ChunkLoadingIcon__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
          _components_Sections_ReactRouter_ChunkLoadingIcon__WEBPACK_IMPORTED_MODULE_5__
        ),
        DELAY = 500,
        options = {
          fallback: react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            _components_Sections_ReactRouter_ChunkLoadingIcon__WEBPACK_IMPORTED_MODULE_5___default(),
            null
          ),
        },
        AsyncIncrement = (0, _loadable_component__WEBPACK_IMPORTED_MODULE_2__.ZP)(
          {
            resolved: {},
            chunkName: () => 'components-Sections-ReactRouter-Routes-IncrementRoute',
            isReady(props) {
              var key = this.resolve(props);
              return !0 === this.resolved[key] && !!__webpack_require__.m[key];
            },
            importAsync: () =>
              p_min_delay__WEBPACK_IMPORTED_MODULE_1___default()(
                __webpack_require__.e(715).then(__webpack_require__.t.bind(__webpack_require__, 6769, 23)),
                DELAY
              ),
            requireAsync(props) {
              var key = this.resolve(props);
              return (
                (this.resolved[key] = !1),
                this.importAsync(props).then((resolved) => ((this.resolved[key] = !0), resolved))
              );
            },
            requireSync(props) {
              var id = this.resolve(props);
              return __webpack_require__(id);
            },
            resolve() {
              return 6769;
            },
          },
          options
        ),
        AsyncDecrement = (0, _loadable_component__WEBPACK_IMPORTED_MODULE_2__.ZP)(
          {
            resolved: {},
            chunkName: () => 'components-Sections-ReactRouter-Routes-DecrementRoute',
            isReady(props) {
              var key = this.resolve(props);
              return !0 === this.resolved[key] && !!__webpack_require__.m[key];
            },
            importAsync: () =>
              p_min_delay__WEBPACK_IMPORTED_MODULE_1___default()(
                __webpack_require__.e(896).then(__webpack_require__.t.bind(__webpack_require__, 2522, 23)),
                DELAY
              ),
            requireAsync(props) {
              var key = this.resolve(props);
              return (
                (this.resolved[key] = !1),
                this.importAsync(props).then((resolved) => ((this.resolved[key] = !0), resolved))
              );
            },
            requireSync(props) {
              var id = this.resolve(props);
              return __webpack_require__(id);
            },
            resolve() {
              return 2522;
            },
          },
          options
        ),
        AsyncReset = (0, _loadable_component__WEBPACK_IMPORTED_MODULE_2__.ZP)(
          {
            resolved: {},
            chunkName: () => 'components-Sections-ReactRouter-Routes-ResetRoute',
            isReady(props) {
              var key = this.resolve(props);
              return !0 === this.resolved[key] && !!__webpack_require__.m[key];
            },
            importAsync: () =>
              p_min_delay__WEBPACK_IMPORTED_MODULE_1___default()(
                __webpack_require__.e(956).then(__webpack_require__.t.bind(__webpack_require__, 9021, 23)),
                DELAY
              ),
            requireAsync(props) {
              var key = this.resolve(props);
              return (
                (this.resolved[key] = !1),
                this.importAsync(props).then((resolved) => ((this.resolved[key] = !0), resolved))
              );
            },
            requireSync(props) {
              var id = this.resolve(props);
              return __webpack_require__(id);
            },
            resolve() {
              return 9021;
            },
          },
          options
        ),
        AsyncTabbedRouter = () => {
          var location = (0, react_router_dom__WEBPACK_IMPORTED_MODULE_6__.TH)(),
            history = (0, react_router_dom__WEBPACK_IMPORTED_MODULE_6__.k6)();
          return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            'div',
            { className: 'notification m-t-sm' },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              react_tabify__WEBPACK_IMPORTED_MODULE_4__.Tabs,
              {
                id: 'router-example-tabs',
                activeKey: location.pathname,
                onSelect: (eventKey) => history.push(eventKey),
              },
              react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                react_tabify__WEBPACK_IMPORTED_MODULE_4__.Tab,
                { eventKey: '/', label: 'Increment' },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.AW, {
                  exact: !0,
                  path: '/',
                  component: AsyncIncrement,
                })
              ),
              react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                react_tabify__WEBPACK_IMPORTED_MODULE_4__.Tab,
                { eventKey: '/decrement', label: 'Decrement' },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.AW, {
                  exact: !0,
                  path: '/decrement',
                  component: AsyncDecrement,
                })
              ),
              react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                react_tabify__WEBPACK_IMPORTED_MODULE_4__.Tab,
                { eventKey: '/reset', label: 'Reset' },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.AW, {
                  exact: !0,
                  path: '/reset',
                  component: AsyncReset,
                })
              )
            )
          );
        };
      __webpack_exports__.default = AsyncTabbedRouter;
    },
    3018: function (module, __unused_webpack_exports, __webpack_require__) {
      var NodeUtils = __webpack_require__(8720),
        get = __webpack_require__(7361);
      module.exports = {
        getConfig: () => ({
          example: { port: 3060, baseUrl: 'http://localhost:3020/', publicBasename: 'react-boilerplate/' },
        }),
        getProperty(key) {
          if (!key) throw new Error('Key cannot be null/undefined');
          return get(this.getConfig(), key);
        },
        getRequiredProperty(key) {
          var value = this.getProperty(key);
          if (value) return value;
          if (!NodeUtils.isTest()) throw new Error('Missing required property: "'.concat(key, '"'));
        },
        getPort() {
          return this.getRequiredProperty('example.port');
        },
        getBasePath() {
          return this.getRequiredProperty('example.basePath');
        },
        getBaseUrl() {
          return this.getRequiredProperty('example.baseUrl');
        },
        getPublicBasename() {
          return NodeUtils.isGhPages() ? this.getRequiredProperty('example.publicBasename') : '/';
        },
      };
    },
    8720: function (module) {
      'use strict';
      module.exports = {
        getNodeEnv: function getNodeEnv() {
          return {
            NODE_ENV: 'gh-pages',
            APP_CONFIG: {
              example: { port: 3060, baseUrl: 'http://localhost:3020/', publicBasename: 'react-boilerplate/' },
            },
          };
        },
        getNodeEnvByKey: function getNodeEnvByKey(key) {
          if (!key) throw new Error('Key cannot be null/undefined');
          return {
            NODE_ENV: 'gh-pages',
            APP_CONFIG: {
              example: { port: 3060, baseUrl: 'http://localhost:3020/', publicBasename: 'react-boilerplate/' },
            },
          }[key];
        },
        getNodeEnvMode: function getNodeEnvMode() {
          return this.getNodeEnvByKey('NODE_ENV') || 'test';
        },
        isProduction: function isProduction() {
          return 'production' === this.getNodeEnvMode();
        },
        isDevelopment: function isDevelopment() {
          return 'development' === this.getNodeEnvMode();
        },
        isGhPages: function isGhPages() {
          return 'gh-pages' === this.getNodeEnvMode();
        },
        isTest: function isTest() {
          return !this.getNodeEnvMode() || 'test' === this.getNodeEnvMode();
        },
      };
    },
    5834: function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__), (__webpack_exports__.default = __webpack_require__.p + 'favicon.ico');
    },
    9234: function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
    },
    8395: function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
    },
    1914: function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
    },
    4689: function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
    },
    9938: function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
    },
    3334: function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
    },
    5094: function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
    },
    3463: function (__unused_webpack_module, exports, __webpack_require__) {
      'use strict';
      var __createBinding =
          (this && this.__createBinding) ||
          (Object.create
            ? function (o, m, k, k2) {
                void 0 === k2 && (k2 = k),
                  Object.defineProperty(o, k2, {
                    enumerable: !0,
                    get: function () {
                      return m[k];
                    },
                  });
              }
            : function (o, m, k, k2) {
                void 0 === k2 && (k2 = k), (o[k2] = m[k]);
              }),
        __setModuleDefault =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (o, v) {
                Object.defineProperty(o, 'default', { enumerable: !0, value: v });
              }
            : function (o, v) {
                o.default = v;
              }),
        __importStar =
          (this && this.__importStar) ||
          function (mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (null != mod)
              for (var k in mod)
                'default' !== k && Object.prototype.hasOwnProperty.call(mod, k) && __createBinding(result, mod, k);
            return __setModuleDefault(result, mod), result;
          },
        __importDefault =
          (this && this.__importDefault) ||
          function (mod) {
            return mod && mod.__esModule ? mod : { default: mod };
          };
      Object.defineProperty(exports, '__esModule', { value: !0 });
      const React = __importStar(__webpack_require__(7294)),
        react_dom_1 = __importDefault(__webpack_require__(3935)),
        react_hot_loader_1 = __webpack_require__(5053),
        store_1 = __importDefault(__webpack_require__(5908)),
        Root_1 = __importDefault(__webpack_require__(2556));
      __webpack_require__(5094),
        __webpack_require__(5834),
        react_dom_1.default.render(
          React.createElement(
            react_hot_loader_1.AppContainer,
            null,
            React.createElement(Root_1.default, { store: store_1.default })
          ),
          document.getElementById('example-app')
        );
    },
    2556: function (__unused_webpack_module, exports, __webpack_require__) {
      'use strict';
      var __createBinding =
          (this && this.__createBinding) ||
          (Object.create
            ? function (o, m, k, k2) {
                void 0 === k2 && (k2 = k),
                  Object.defineProperty(o, k2, {
                    enumerable: !0,
                    get: function () {
                      return m[k];
                    },
                  });
              }
            : function (o, m, k, k2) {
                void 0 === k2 && (k2 = k), (o[k2] = m[k]);
              }),
        __setModuleDefault =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (o, v) {
                Object.defineProperty(o, 'default', { enumerable: !0, value: v });
              }
            : function (o, v) {
                o.default = v;
              }),
        __importStar =
          (this && this.__importStar) ||
          function (mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (null != mod)
              for (var k in mod)
                'default' !== k && Object.prototype.hasOwnProperty.call(mod, k) && __createBinding(result, mod, k);
            return __setModuleDefault(result, mod), result;
          },
        __importDefault =
          (this && this.__importDefault) ||
          function (mod) {
            return mod && mod.__esModule ? mod : { default: mod };
          };
      Object.defineProperty(exports, '__esModule', { value: !0 });
      const React = __importStar(__webpack_require__(7294)),
        react_redux_1 = __webpack_require__(8629),
        react_router_dom_1 = __webpack_require__(3727),
        config_service_1 = __importDefault(__webpack_require__(3018)),
        App_1 = __importDefault(__webpack_require__(78));
      exports.default = ({ store }) =>
        React.createElement(
          react_redux_1.Provider,
          { store },
          React.createElement(
            react_router_dom_1.BrowserRouter,
            { basename: config_service_1.default.getPublicBasename() },
            React.createElement(App_1.default, null)
          )
        );
    },
    78: function (__unused_webpack_module, exports, __webpack_require__) {
      'use strict';
      var __importDefault =
        (this && this.__importDefault) ||
        function (mod) {
          return mod && mod.__esModule ? mod : { default: mod };
        };
      Object.defineProperty(exports, '__esModule', { value: !0 });
      const react_1 = __importDefault(__webpack_require__(7294)),
        bind_1 = __importDefault(__webpack_require__(7166)),
        Navbar_1 = __importDefault(__webpack_require__(975)),
        Footer_1 = __importDefault(__webpack_require__(2181)),
        ReactRouter_1 = __importDefault(__webpack_require__(6231)),
        ReduxEntity_1 = __importDefault(__webpack_require__(2323)),
        ReduxState_1 = __importDefault(__webpack_require__(1198)),
        App_scss_1 = __importDefault(__webpack_require__(3334)),
        cx = bind_1.default.bind(App_scss_1.default);
      exports.default = () =>
        react_1.default.createElement(
          'section',
          { className: cx('react-boilerplate') },
          react_1.default.createElement(Navbar_1.default, null),
          react_1.default.createElement('p', null, 'OMMM NAMA Shivaya'),
          react_1.default.createElement(
            'section',
            { className: `section ${cx('section--body')}` },
            react_1.default.createElement(
              'div',
              { className: 'container' },
              react_1.default.createElement(
                'div',
                { className: 'columns' },
                react_1.default.createElement(
                  'div',
                  { className: 'column' },
                  react_1.default.createElement(ReactRouter_1.default, null)
                )
              ),
              react_1.default.createElement(
                'div',
                { className: 'columns' },
                react_1.default.createElement(
                  'div',
                  { className: 'column' },
                  react_1.default.createElement(ReduxEntity_1.default, null)
                ),
                react_1.default.createElement(
                  'div',
                  { className: 'column' },
                  react_1.default.createElement(ReduxState_1.default, null)
                )
              )
            )
          ),
          react_1.default.createElement(Footer_1.default, null)
        );
    },
    6418: function (__unused_webpack_module, exports, __webpack_require__) {
      'use strict';
      var __createBinding =
          (this && this.__createBinding) ||
          (Object.create
            ? function (o, m, k, k2) {
                void 0 === k2 && (k2 = k),
                  Object.defineProperty(o, k2, {
                    enumerable: !0,
                    get: function () {
                      return m[k];
                    },
                  });
              }
            : function (o, m, k, k2) {
                void 0 === k2 && (k2 = k), (o[k2] = m[k]);
              }),
        __setModuleDefault =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (o, v) {
                Object.defineProperty(o, 'default', { enumerable: !0, value: v });
              }
            : function (o, v) {
                o.default = v;
              }),
        __importStar =
          (this && this.__importStar) ||
          function (mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (null != mod)
              for (var k in mod)
                'default' !== k && Object.prototype.hasOwnProperty.call(mod, k) && __createBinding(result, mod, k);
            return __setModuleDefault(result, mod), result;
          },
        __importDefault =
          (this && this.__importDefault) ||
          function (mod) {
            return mod && mod.__esModule ? mod : { default: mod };
          };
      Object.defineProperty(exports, '__esModule', { value: !0 });
      const React = __importStar(__webpack_require__(7294)),
        common_1 = __webpack_require__(1256),
        GithubButtons_1 = __importDefault(__webpack_require__(6707)),
        const_1 = __webpack_require__(5365),
        Repository = () =>
          React.createElement(
            'strong',
            { className: 'has-text-grey-light' },
            React.createElement(common_1.Icon, { icon: 'cloud' }),
            ' react-boilerplate'
          ),
        DemoLink = () => React.createElement(common_1.Link, { url: const_1.URL.DEMO }, 'source code'),
        GithubLink = () => React.createElement(common_1.Link, { url: const_1.URL.GITHUB }, 'Mike Chabot'),
        LicenseLink = () => React.createElement(common_1.Link, { url: const_1.URL.LICENSE }, 'MIT');
      exports.default = () =>
        React.createElement(
          'footer',
          { className: 'footer has-text-grey-light' },
          React.createElement(
            'div',
            { className: 'container has-text-centered' },
            React.createElement(
              'div',
              null,
              React.createElement(Repository, null),
              ' by ',
              React.createElement(GithubLink, null)
            ),
            React.createElement(
              'div',
              { className: 'm-t-xs' },
              'The ',
              React.createElement(DemoLink, null),
              ' is licensed under ',
              React.createElement(LicenseLink, null)
            ),
            React.createElement(GithubButtons_1.default, null)
          )
        );
    },
    7695: function (__unused_webpack_module, exports, __webpack_require__) {
      'use strict';
      var __createBinding =
          (this && this.__createBinding) ||
          (Object.create
            ? function (o, m, k, k2) {
                void 0 === k2 && (k2 = k),
                  Object.defineProperty(o, k2, {
                    enumerable: !0,
                    get: function () {
                      return m[k];
                    },
                  });
              }
            : function (o, m, k, k2) {
                void 0 === k2 && (k2 = k), (o[k2] = m[k]);
              }),
        __setModuleDefault =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (o, v) {
                Object.defineProperty(o, 'default', { enumerable: !0, value: v });
              }
            : function (o, v) {
                o.default = v;
              }),
        __importStar =
          (this && this.__importStar) ||
          function (mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (null != mod)
              for (var k in mod)
                'default' !== k && Object.prototype.hasOwnProperty.call(mod, k) && __createBinding(result, mod, k);
            return __setModuleDefault(result, mod), result;
          },
        __importDefault =
          (this && this.__importDefault) ||
          function (mod) {
            return mod && mod.__esModule ? mod : { default: mod };
          };
      Object.defineProperty(exports, '__esModule', { value: !0 });
      const React = __importStar(__webpack_require__(7294)),
        bind_1 = __importDefault(__webpack_require__(7166)),
        GithubButton_scss_1 = __importDefault(__webpack_require__(9234)),
        cx = bind_1.default.bind(GithubButton_scss_1.default);
      exports.default = ({ label, icon, href, ariaLabel }) =>
        React.createElement(
          'div',
          { className: cx('github-button--container') },
          React.createElement(
            'a',
            {
              className: 'github-button',
              href: `https://github.com/${href}`,
              'data-icon': icon,
              'data-size': 'large',
              'data-show-count': !0,
              'aria-label': ariaLabel,
            },
            label
          )
        );
    },
    969: function (__unused_webpack_module, exports, __webpack_require__) {
      'use strict';
      var __createBinding =
          (this && this.__createBinding) ||
          (Object.create
            ? function (o, m, k, k2) {
                void 0 === k2 && (k2 = k),
                  Object.defineProperty(o, k2, {
                    enumerable: !0,
                    get: function () {
                      return m[k];
                    },
                  });
              }
            : function (o, m, k, k2) {
                void 0 === k2 && (k2 = k), (o[k2] = m[k]);
              }),
        __setModuleDefault =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (o, v) {
                Object.defineProperty(o, 'default', { enumerable: !0, value: v });
              }
            : function (o, v) {
                o.default = v;
              }),
        __importStar =
          (this && this.__importStar) ||
          function (mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (null != mod)
              for (var k in mod)
                'default' !== k && Object.prototype.hasOwnProperty.call(mod, k) && __createBinding(result, mod, k);
            return __setModuleDefault(result, mod), result;
          },
        __importDefault =
          (this && this.__importDefault) ||
          function (mod) {
            return mod && mod.__esModule ? mod : { default: mod };
          };
      Object.defineProperty(exports, '__esModule', { value: !0 });
      const React = __importStar(__webpack_require__(7294)),
        bind_1 = __importDefault(__webpack_require__(7166)),
        GithubButton_1 = __importDefault(__webpack_require__(7695)),
        GithubButtons_scss_1 = __importDefault(__webpack_require__(8395)),
        cx = bind_1.default.bind(GithubButtons_scss_1.default);
      exports.default = () =>
        React.createElement(
          'div',
          { className: `${cx('github-buttons')} m-t-sm` },
          React.createElement(GithubButton_1.default, {
            label: 'Star',
            icon: 'octicon-star',
            href: 'mikechabot/react-boilerplate',
            ariaLabel: 'Star mikechabot/react-boilerplate on GitHub',
          }),
          React.createElement(GithubButton_1.default, {
            label: 'Fork',
            icon: 'octicon-repo-forked',
            href: 'mikechabot/react-boilerplate/fork',
            ariaLabel: 'Fork mikechabot/react-boilerplate on GitHub',
          }),
          React.createElement(GithubButton_1.default, {
            label: 'Watch',
            icon: 'octicon-eye',
            href: 'mikechabot/react-boilerplate/subscription',
            ariaLabel: 'Watch mikechabot/react-boilerplate on GitHub',
          })
        );
    },
    6707: function (__unused_webpack_module, exports, __webpack_require__) {
      'use strict';
      var __importDefault =
        (this && this.__importDefault) ||
        function (mod) {
          return mod && mod.__esModule ? mod : { default: mod };
        };
      Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
      var GithubButtons_1 = __webpack_require__(969);
      Object.defineProperty(exports, 'default', {
        enumerable: !0,
        get: function () {
          return __importDefault(GithubButtons_1).default;
        },
      });
    },
    2181: function (__unused_webpack_module, exports, __webpack_require__) {
      'use strict';
      var __importDefault =
        (this && this.__importDefault) ||
        function (mod) {
          return mod && mod.__esModule ? mod : { default: mod };
        };
      Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
      var Footer_1 = __webpack_require__(6418);
      Object.defineProperty(exports, 'default', {
        enumerable: !0,
        get: function () {
          return __importDefault(Footer_1).default;
        },
      });
    },
    347: function (__unused_webpack_module, exports, __webpack_require__) {
      'use strict';
      var __createBinding =
          (this && this.__createBinding) ||
          (Object.create
            ? function (o, m, k, k2) {
                void 0 === k2 && (k2 = k),
                  Object.defineProperty(o, k2, {
                    enumerable: !0,
                    get: function () {
                      return m[k];
                    },
                  });
              }
            : function (o, m, k, k2) {
                void 0 === k2 && (k2 = k), (o[k2] = m[k]);
              }),
        __setModuleDefault =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (o, v) {
                Object.defineProperty(o, 'default', { enumerable: !0, value: v });
              }
            : function (o, v) {
                o.default = v;
              }),
        __importStar =
          (this && this.__importStar) ||
          function (mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (null != mod)
              for (var k in mod)
                'default' !== k && Object.prototype.hasOwnProperty.call(mod, k) && __createBinding(result, mod, k);
            return __setModuleDefault(result, mod), result;
          },
        __importDefault =
          (this && this.__importDefault) ||
          function (mod) {
            return mod && mod.__esModule ? mod : { default: mod };
          };
      Object.defineProperty(exports, '__esModule', { value: !0 });
      const React = __importStar(__webpack_require__(7294)),
        Icon_1 = __importDefault(__webpack_require__(8055));
      exports.default = ({ title, subtitle, icon, children }) =>
        React.createElement(
          React.Fragment,
          null,
          React.createElement(
            'div',
            null,
            React.createElement(
              'h1',
              { className: 'title' },
              React.createElement(Icon_1.default, { icon, className: 'has-text-info' }),
              ' ',
              title
            ),
            React.createElement(
              'h2',
              { className: 'subtitle ' },
              React.createElement(Icon_1.default, { icon: 'angle-right' }),
              ' ',
              subtitle
            )
          ),
          children
        );
    },
    1746: function (__unused_webpack_module, exports, __webpack_require__) {
      'use strict';
      var __importDefault =
        (this && this.__importDefault) ||
        function (mod) {
          return mod && mod.__esModule ? mod : { default: mod };
        };
      Object.defineProperty(exports, '__esModule', { value: !0 });
      const react_1 = __importDefault(__webpack_require__(7294)),
        bind_1 = __importDefault(__webpack_require__(7166)),
        Icon_1 = __webpack_require__(8055),
        ChunkLoadingIcon_scss_1 = __importDefault(__webpack_require__(1914)),
        cx = bind_1.default.bind(ChunkLoadingIcon_scss_1.default);
      exports.default = () =>
        react_1.default.createElement(
          'div',
          { className: `p-t-md ${cx('chunk-loading--icon')}` },
          react_1.default.createElement(Icon_1.CogIcon, { size: 'fa-2x', className: 'has-text-info' })
        );
    },
    1860: function (__unused_webpack_module, exports, __webpack_require__) {
      'use strict';
      var __createBinding =
          (this && this.__createBinding) ||
          (Object.create
            ? function (o, m, k, k2) {
                void 0 === k2 && (k2 = k),
                  Object.defineProperty(o, k2, {
                    enumerable: !0,
                    get: function () {
                      return m[k];
                    },
                  });
              }
            : function (o, m, k, k2) {
                void 0 === k2 && (k2 = k), (o[k2] = m[k]);
              }),
        __setModuleDefault =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (o, v) {
                Object.defineProperty(o, 'default', { enumerable: !0, value: v });
              }
            : function (o, v) {
                o.default = v;
              }),
        __importStar =
          (this && this.__importStar) ||
          function (mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (null != mod)
              for (var k in mod)
                'default' !== k && Object.prototype.hasOwnProperty.call(mod, k) && __createBinding(result, mod, k);
            return __setModuleDefault(result, mod), result;
          },
        __importDefault =
          (this && this.__importDefault) ||
          function (mod) {
            return mod && mod.__esModule ? mod : { default: mod };
          };
      Object.defineProperty(exports, '__esModule', { value: !0 });
      const React = __importStar(__webpack_require__(7294)),
        GenericSection_1 = __importDefault(__webpack_require__(347)),
        AsyncTabbedRouter_1 = __importDefault(__webpack_require__(9024)),
        const_1 = __webpack_require__(5365);
      exports.default = () =>
        React.createElement(
          GenericSection_1.default,
          {
            icon: 'link',
            title: 'Router',
            subtitle: React.createElement(
              'span',
              null,
              'Utilizes ',
              React.createElement('a', { href: const_1.URL.REACT_ROUTER }, 'react-router'),
              ' v5 for client-side routing'
            ),
          },
          React.createElement(AsyncTabbedRouter_1.default, null)
        );
    },
    6231: function (__unused_webpack_module, exports, __webpack_require__) {
      'use strict';
      var __importDefault =
        (this && this.__importDefault) ||
        function (mod) {
          return mod && mod.__esModule ? mod : { default: mod };
        };
      Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
      var ReactRouter_1 = __webpack_require__(1860);
      Object.defineProperty(exports, 'default', {
        enumerable: !0,
        get: function () {
          return __importDefault(ReactRouter_1).default;
        },
      });
    },
    3187: function (__unused_webpack_module, exports, __webpack_require__) {
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
        Entity_1 = __importDefault(__webpack_require__(3670)),
        actions_1 = __webpack_require__(6186),
        types_1 = __webpack_require__(55),
        ReduxEntity_scss_1 = __importDefault(__webpack_require__(4689)),
        cx = bind_1.default.bind(ReduxEntity_scss_1.default);
      exports.default = () => {
        const dispatch = react_redux_1.useDispatch(),
          entities = react_redux_1.useSelector((state) => state.entities),
          getLoadEntityThunk = (type) => {
            switch (type) {
              case types_1.EntityType.Foo:
                return () => dispatch(actions_1.fetchFoo());
              case types_1.EntityType.Bar:
                return () => dispatch(actions_1.fetchBar());
              case types_1.EntityType.Baz:
                return () => dispatch(actions_1.fetchBaz());
            }
          };
        return react_1.default.createElement(
          'div',
          { className: `${cx('redux-entity--container')} notification is-light m-t-sm` },
          Object.values(types_1.EntityType).map((key) =>
            react_1.default.createElement(Entity_1.default, {
              key,
              name: key,
              append: key === types_1.EntityType.Bar,
              entity: entities[key],
              fetchEntity: getLoadEntityThunk(key),
            })
          )
        );
      };
    },
    3670: function (__unused_webpack_module, exports, __webpack_require__) {
      'use strict';
      var __createBinding =
          (this && this.__createBinding) ||
          (Object.create
            ? function (o, m, k, k2) {
                void 0 === k2 && (k2 = k),
                  Object.defineProperty(o, k2, {
                    enumerable: !0,
                    get: function () {
                      return m[k];
                    },
                  });
              }
            : function (o, m, k, k2) {
                void 0 === k2 && (k2 = k), (o[k2] = m[k]);
              }),
        __setModuleDefault =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (o, v) {
                Object.defineProperty(o, 'default', { enumerable: !0, value: v });
              }
            : function (o, v) {
                o.default = v;
              }),
        __importStar =
          (this && this.__importStar) ||
          function (mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (null != mod)
              for (var k in mod)
                'default' !== k && Object.prototype.hasOwnProperty.call(mod, k) && __createBinding(result, mod, k);
            return __setModuleDefault(result, mod), result;
          },
        __importDefault =
          (this && this.__importDefault) ||
          function (mod) {
            return mod && mod.__esModule ? mod : { default: mod };
          };
      Object.defineProperty(exports, '__esModule', { value: !0 });
      const react_1 = __importStar(__webpack_require__(7294)),
        react_redux_1 = __webpack_require__(8629),
        isEmpty_1 = __importDefault(__webpack_require__(1609)),
        common_1 = __webpack_require__(1256),
        EntityData_1 = __importDefault(__webpack_require__(9857)),
        EntityReset_1 = __importDefault(__webpack_require__(1065)),
        EntityMissing_1 = __importDefault(__webpack_require__(9197)),
        EntityFailure_1 = __importDefault(__webpack_require__(467)),
        EntityLoading_1 = __importDefault(__webpack_require__(3387)),
        redux_entity_1 = __webpack_require__(7694);
      exports.default = ({ name, append, entity, fetchEntity }) => {
        const dispatch = react_redux_1.useDispatch();
        if (
          (react_1.useEffect(() => {
            fetchEntity();
          }, []),
          isEmpty_1.default(entity))
        )
          return react_1.default.createElement(EntityMissing_1.default, { name, fetchEntity });
        const { isFetching, data, error, lastUpdated } = entity;
        let body;
        return (
          (body = error
            ? react_1.default.createElement(EntityFailure_1.default, { name, error })
            : isFetching
            ? react_1.default.createElement(EntityLoading_1.default, null)
            : isEmpty_1.default(data)
            ? react_1.default.createElement(EntityReset_1.default, { name })
            : react_1.default.createElement(EntityData_1.default, { name, append, lastUpdated })),
          react_1.default.createElement(
            'div',
            { className: 'm-b-sm' },
            body,
            react_1.default.createElement(
              'div',
              { className: 'field has-addons' },
              react_1.default.createElement(
                common_1.Button,
                { icon: 'download', onClick: fetchEntity, disabled: isFetching, loading: isFetching, theme: 'is-info' },
                'Fetch'
              ),
              react_1.default.createElement(
                common_1.Button,
                { icon: 'history', onClick: () => dispatch(redux_entity_1.ResetEntity(name)), disabled: isFetching },
                'Reset'
              ),
              react_1.default.createElement(
                common_1.Button,
                {
                  icon: 'trash',
                  onClick: () => dispatch(redux_entity_1.DeleteEntity(name)),
                  disabled: isFetching,
                  theme: 'is-danger',
                },
                'Delete'
              )
            )
          )
        );
      };
    },
    9857: function (__unused_webpack_module, exports, __webpack_require__) {
      'use strict';
      var __createBinding =
          (this && this.__createBinding) ||
          (Object.create
            ? function (o, m, k, k2) {
                void 0 === k2 && (k2 = k),
                  Object.defineProperty(o, k2, {
                    enumerable: !0,
                    get: function () {
                      return m[k];
                    },
                  });
              }
            : function (o, m, k, k2) {
                void 0 === k2 && (k2 = k), (o[k2] = m[k]);
              }),
        __setModuleDefault =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (o, v) {
                Object.defineProperty(o, 'default', { enumerable: !0, value: v });
              }
            : function (o, v) {
                o.default = v;
              }),
        __importStar =
          (this && this.__importStar) ||
          function (mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (null != mod)
              for (var k in mod)
                'default' !== k && Object.prototype.hasOwnProperty.call(mod, k) && __createBinding(result, mod, k);
            return __setModuleDefault(result, mod), result;
          };
      Object.defineProperty(exports, '__esModule', { value: !0 });
      const React = __importStar(__webpack_require__(7294)),
        date_fns_1 = __webpack_require__(1613),
        Icon_1 = __webpack_require__(8055);
      exports.default = ({ name, append, lastUpdated }) => {
        const action = append ? 'Appending to ' : 'Fetch for ',
          date = lastUpdated && date_fns_1.format(new Date(lastUpdated), 'pp');
        return React.createElement(
          'div',
          { className: 'm-t-sm m-b-sm' },
          React.createElement(Icon_1.CheckIcon, null),
          ' ',
          action,
          ' ',
          React.createElement('code', null, name),
          ' @ ',
          React.createElement('code', null, date)
        );
      };
    },
    467: function (__unused_webpack_module, exports, __webpack_require__) {
      'use strict';
      var __createBinding =
          (this && this.__createBinding) ||
          (Object.create
            ? function (o, m, k, k2) {
                void 0 === k2 && (k2 = k),
                  Object.defineProperty(o, k2, {
                    enumerable: !0,
                    get: function () {
                      return m[k];
                    },
                  });
              }
            : function (o, m, k, k2) {
                void 0 === k2 && (k2 = k), (o[k2] = m[k]);
              }),
        __setModuleDefault =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (o, v) {
                Object.defineProperty(o, 'default', { enumerable: !0, value: v });
              }
            : function (o, v) {
                o.default = v;
              }),
        __importStar =
          (this && this.__importStar) ||
          function (mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (null != mod)
              for (var k in mod)
                'default' !== k && Object.prototype.hasOwnProperty.call(mod, k) && __createBinding(result, mod, k);
            return __setModuleDefault(result, mod), result;
          };
      Object.defineProperty(exports, '__esModule', { value: !0 });
      const React = __importStar(__webpack_require__(7294)),
        Icon_1 = __webpack_require__(8055);
      exports.default = ({ name, error }) =>
        React.createElement(
          'div',
          { className: 'm-t-sm m-b-sm' },
          React.createElement(Icon_1.ExclamationIcon, null),
          ' Failed to fetch ',
          React.createElement('code', null, name),
          ' due to',
          ' ',
          React.createElement('code', { className: 'has-text-danger' }, error.toString())
        );
    },
    3387: function (__unused_webpack_module, exports, __webpack_require__) {
      'use strict';
      var __createBinding =
          (this && this.__createBinding) ||
          (Object.create
            ? function (o, m, k, k2) {
                void 0 === k2 && (k2 = k),
                  Object.defineProperty(o, k2, {
                    enumerable: !0,
                    get: function () {
                      return m[k];
                    },
                  });
              }
            : function (o, m, k, k2) {
                void 0 === k2 && (k2 = k), (o[k2] = m[k]);
              }),
        __setModuleDefault =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (o, v) {
                Object.defineProperty(o, 'default', { enumerable: !0, value: v });
              }
            : function (o, v) {
                o.default = v;
              }),
        __importStar =
          (this && this.__importStar) ||
          function (mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (null != mod)
              for (var k in mod)
                'default' !== k && Object.prototype.hasOwnProperty.call(mod, k) && __createBinding(result, mod, k);
            return __setModuleDefault(result, mod), result;
          };
      Object.defineProperty(exports, '__esModule', { value: !0 });
      const React = __importStar(__webpack_require__(7294));
      exports.default = () => React.createElement('div', { className: 'm-t-sm m-b-sm' }, 'Fetching fresh data!');
    },
    9197: function (__unused_webpack_module, exports, __webpack_require__) {
      'use strict';
      var __importDefault =
        (this && this.__importDefault) ||
        function (mod) {
          return mod && mod.__esModule ? mod : { default: mod };
        };
      Object.defineProperty(exports, '__esModule', { value: !0 });
      const react_1 = __importDefault(__webpack_require__(7294)),
        Icon_1 = __importDefault(__webpack_require__(8055)),
        common_1 = __webpack_require__(1256);
      exports.default = ({ name, fetchEntity }) =>
        react_1.default.createElement(
          react_1.default.Fragment,
          null,
          react_1.default.createElement(
            'div',
            { className: 'm-t-sm m-b-sm' },
            react_1.default.createElement(Icon_1.default, {
              icon: 'exclamation-triangle',
              className: 'has-text-danger',
            }),
            ' Entity ',
            react_1.default.createElement('code', null, name),
            ' does not exist on ',
            react_1.default.createElement('code', null, 'entities')
          ),
          react_1.default.createElement(
            common_1.Button,
            { icon: 'download', onClick: fetchEntity, theme: 'is-info' },
            'Fetch'
          )
        );
    },
    1065: function (__unused_webpack_module, exports, __webpack_require__) {
      'use strict';
      var __createBinding =
          (this && this.__createBinding) ||
          (Object.create
            ? function (o, m, k, k2) {
                void 0 === k2 && (k2 = k),
                  Object.defineProperty(o, k2, {
                    enumerable: !0,
                    get: function () {
                      return m[k];
                    },
                  });
              }
            : function (o, m, k, k2) {
                void 0 === k2 && (k2 = k), (o[k2] = m[k]);
              }),
        __setModuleDefault =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (o, v) {
                Object.defineProperty(o, 'default', { enumerable: !0, value: v });
              }
            : function (o, v) {
                o.default = v;
              }),
        __importStar =
          (this && this.__importStar) ||
          function (mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (null != mod)
              for (var k in mod)
                'default' !== k && Object.prototype.hasOwnProperty.call(mod, k) && __createBinding(result, mod, k);
            return __setModuleDefault(result, mod), result;
          };
      Object.defineProperty(exports, '__esModule', { value: !0 });
      const React = __importStar(__webpack_require__(7294));
      exports.default = ({ name }) =>
        React.createElement(
          'div',
          { className: 'm-t-sm m-b-sm' },
          'Entity ',
          React.createElement('code', null, name),
          ' has been cleared.'
        );
    },
    2961: function (__unused_webpack_module, exports, __webpack_require__) {
      'use strict';
      var __createBinding =
          (this && this.__createBinding) ||
          (Object.create
            ? function (o, m, k, k2) {
                void 0 === k2 && (k2 = k),
                  Object.defineProperty(o, k2, {
                    enumerable: !0,
                    get: function () {
                      return m[k];
                    },
                  });
              }
            : function (o, m, k, k2) {
                void 0 === k2 && (k2 = k), (o[k2] = m[k]);
              }),
        __setModuleDefault =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (o, v) {
                Object.defineProperty(o, 'default', { enumerable: !0, value: v });
              }
            : function (o, v) {
                o.default = v;
              }),
        __importStar =
          (this && this.__importStar) ||
          function (mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (null != mod)
              for (var k in mod)
                'default' !== k && Object.prototype.hasOwnProperty.call(mod, k) && __createBinding(result, mod, k);
            return __setModuleDefault(result, mod), result;
          },
        __importDefault =
          (this && this.__importDefault) ||
          function (mod) {
            return mod && mod.__esModule ? mod : { default: mod };
          };
      Object.defineProperty(exports, '__esModule', { value: !0 });
      const React = __importStar(__webpack_require__(7294)),
        GenericSection_1 = __importDefault(__webpack_require__(347)),
        Entities_1 = __importDefault(__webpack_require__(3187)),
        const_1 = __webpack_require__(5365);
      exports.default = () =>
        React.createElement(
          GenericSection_1.default,
          {
            icon: 'sitemap',
            title: 'State Management',
            subtitle: React.createElement(
              'span',
              null,
              'Utilizes ',
              React.createElement('a', { href: const_1.URL.REDUX_ENTITY }, 'redux-entity'),
              ' for domain entity management'
            ),
          },
          React.createElement(Entities_1.default, null)
        );
    },
    2323: function (__unused_webpack_module, exports, __webpack_require__) {
      'use strict';
      var __importDefault =
        (this && this.__importDefault) ||
        function (mod) {
          return mod && mod.__esModule ? mod : { default: mod };
        };
      Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
      var ReduxEntity_1 = __webpack_require__(2961);
      Object.defineProperty(exports, 'default', {
        enumerable: !0,
        get: function () {
          return __importDefault(ReduxEntity_1).default;
        },
      });
    },
    6406: function (__unused_webpack_module, exports, __webpack_require__) {
      'use strict';
      var __createBinding =
          (this && this.__createBinding) ||
          (Object.create
            ? function (o, m, k, k2) {
                void 0 === k2 && (k2 = k),
                  Object.defineProperty(o, k2, {
                    enumerable: !0,
                    get: function () {
                      return m[k];
                    },
                  });
              }
            : function (o, m, k, k2) {
                void 0 === k2 && (k2 = k), (o[k2] = m[k]);
              }),
        __setModuleDefault =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (o, v) {
                Object.defineProperty(o, 'default', { enumerable: !0, value: v });
              }
            : function (o, v) {
                o.default = v;
              }),
        __importStar =
          (this && this.__importStar) ||
          function (mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (null != mod)
              for (var k in mod)
                'default' !== k && Object.prototype.hasOwnProperty.call(mod, k) && __createBinding(result, mod, k);
            return __setModuleDefault(result, mod), result;
          },
        __importDefault =
          (this && this.__importDefault) ||
          function (mod) {
            return mod && mod.__esModule ? mod : { default: mod };
          };
      Object.defineProperty(exports, '__esModule', { value: !0 });
      const React = __importStar(__webpack_require__(7294)),
        react_json_pretty_1 = __importDefault(__webpack_require__(7262)),
        react_redux_1 = __webpack_require__(8629),
        GenericSection_1 = __importDefault(__webpack_require__(347)),
        themeProps = { keyStyle: 'color: #3298dc;' },
        replacer = (key, value) => (value instanceof Error ? value.toString() : value);
      exports.default = () => {
        const state = react_redux_1.useSelector((state) => state);
        return React.createElement(
          GenericSection_1.default,
          {
            icon: 'tree',
            title: 'State Tree',
            subtitle: React.createElement('span', null, 'Open Console to view dispatched actions'),
          },
          React.createElement(react_json_pretty_1.default, Object.assign({}, themeProps, { data: state, replacer }))
        );
      };
    },
    1198: function (__unused_webpack_module, exports, __webpack_require__) {
      'use strict';
      var __importDefault =
        (this && this.__importDefault) ||
        function (mod) {
          return mod && mod.__esModule ? mod : { default: mod };
        };
      Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
      var ReduxState_1 = __webpack_require__(6406);
      Object.defineProperty(exports, 'default', {
        enumerable: !0,
        get: function () {
          return __importDefault(ReduxState_1).default;
        },
      });
    },
    6253: function (__unused_webpack_module, exports, __webpack_require__) {
      'use strict';
      var __importDefault =
        (this && this.__importDefault) ||
        function (mod) {
          return mod && mod.__esModule ? mod : { default: mod };
        };
      Object.defineProperty(exports, '__esModule', { value: !0 });
      const react_1 = __importDefault(__webpack_require__(7294)),
        Icon_1 = __importDefault(__webpack_require__(8055));
      exports.default = ({ icon, disabled, loading, onClick, children, theme = '' }) =>
        react_1.default.createElement(
          'p',
          { key: 'Fetch', className: 'control' },
          react_1.default.createElement(
            'a',
            { className: `button ${theme} ${loading && 'is-loading'}`, disabled, onClick },
            react_1.default.createElement(
              'span',
              { className: 'icon' },
              react_1.default.createElement(Icon_1.default, { icon })
            ),
            react_1.default.createElement('span', null, children)
          )
        );
    },
    8055: function (__unused_webpack_module, exports, __webpack_require__) {
      'use strict';
      var __importDefault =
        (this && this.__importDefault) ||
        function (mod) {
          return mod && mod.__esModule ? mod : { default: mod };
        };
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.CogIcon = exports.CheckIcon = exports.ExclamationIcon = void 0);
      const react_1 = __importDefault(__webpack_require__(7294));
      exports.ExclamationIcon = () =>
        react_1.default.createElement(Icon, { icon: 'exclamation-triangle', className: 'has-text-danger' });
      exports.CheckIcon = () => react_1.default.createElement(Icon, { icon: 'check', className: 'has-text-success' });
      exports.CogIcon = ({ size, className }) =>
        react_1.default.createElement(Icon, { icon: 'cog fa-spin', size, className });
      const Icon = ({ icon, prefix, className, size = 'fa-1x' }) => {
        const iconPrefix = prefix || 'fa';
        return react_1.default.createElement(
          'span',
          null,
          react_1.default.createElement('i', { className: `${iconPrefix} fa-${icon} ${className || ''} ${size}` })
        );
      };
      exports.default = Icon;
    },
    3152: function (__unused_webpack_module, exports, __webpack_require__) {
      'use strict';
      var __createBinding =
          (this && this.__createBinding) ||
          (Object.create
            ? function (o, m, k, k2) {
                void 0 === k2 && (k2 = k),
                  Object.defineProperty(o, k2, {
                    enumerable: !0,
                    get: function () {
                      return m[k];
                    },
                  });
              }
            : function (o, m, k, k2) {
                void 0 === k2 && (k2 = k), (o[k2] = m[k]);
              }),
        __setModuleDefault =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (o, v) {
                Object.defineProperty(o, 'default', { enumerable: !0, value: v });
              }
            : function (o, v) {
                o.default = v;
              }),
        __importStar =
          (this && this.__importStar) ||
          function (mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (null != mod)
              for (var k in mod)
                'default' !== k && Object.prototype.hasOwnProperty.call(mod, k) && __createBinding(result, mod, k);
            return __setModuleDefault(result, mod), result;
          };
      Object.defineProperty(exports, '__esModule', { value: !0 });
      const React = __importStar(__webpack_require__(7294));
      exports.default = ({ url, children }) =>
        React.createElement('a', { href: url, target: '_blank', rel: 'noopener noreferrer' }, children);
    },
    975: function (__unused_webpack_module, exports, __webpack_require__) {
      'use strict';
      var __importDefault =
        (this && this.__importDefault) ||
        function (mod) {
          return mod && mod.__esModule ? mod : { default: mod };
        };
      Object.defineProperty(exports, '__esModule', { value: !0 });
      const react_1 = __importDefault(__webpack_require__(7294)),
        bind_1 = __importDefault(__webpack_require__(7166)),
        common_1 = __webpack_require__(1256),
        logo_png_1 = __importDefault(__webpack_require__(4439)),
        const_1 = __webpack_require__(5365),
        NavBar_scss_1 = __importDefault(__webpack_require__(9938)),
        cx = bind_1.default.bind(NavBar_scss_1.default);
      exports.default = () =>
        react_1.default.createElement(
          'nav',
          {
            className: `navbar is-dark ${cx('nav-bar--container')}`,
            role: 'navigation',
            'aria-label': 'main navigation',
          },
          react_1.default.createElement(
            'div',
            { className: 'navbar-brand' },
            react_1.default.createElement(
              'a',
              { href: const_1.URL.REPOSITORY, className: 'navbar-item is-size-3' },
              react_1.default.createElement('img', { src: logo_png_1.default, height: 64, width: 64 }),
              react_1.default.createElement('span', null, 'react-boilerplate')
            )
          ),
          react_1.default.createElement(
            'div',
            { className: 'navbar-end' },
            react_1.default.createElement(
              'div',
              { className: 'navbar-item' },
              react_1.default.createElement(
                'a',
                { className: 'button is-dark', href: const_1.URL.NPM },
                react_1.default.createElement(
                  'span',
                  { className: 'icon is-small has-text-danger' },
                  react_1.default.createElement(common_1.Icon, { icon: 'npm', prefix: 'fab', size: 'fa-2x' })
                )
              )
            ),
            react_1.default.createElement(
              'div',
              { className: 'navbar-item' },
              react_1.default.createElement(
                'a',
                { className: 'button is-dark', href: const_1.URL.REPOSITORY },
                react_1.default.createElement(
                  'span',
                  { className: 'icon is-small' },
                  react_1.default.createElement(common_1.Icon, { icon: 'github', prefix: 'fab', size: 'fa-2x' })
                )
              )
            )
          )
        );
    },
    1256: function (__unused_webpack_module, exports, __webpack_require__) {
      'use strict';
      var __importDefault =
        (this && this.__importDefault) ||
        function (mod) {
          return mod && mod.__esModule ? mod : { default: mod };
        };
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.Link = exports.Button = exports.Icon = void 0);
      var Icon_1 = __webpack_require__(8055);
      Object.defineProperty(exports, 'Icon', {
        enumerable: !0,
        get: function () {
          return __importDefault(Icon_1).default;
        },
      });
      var Button_1 = __webpack_require__(6253);
      Object.defineProperty(exports, 'Button', {
        enumerable: !0,
        get: function () {
          return __importDefault(Button_1).default;
        },
      });
      var Link_1 = __webpack_require__(3152);
      Object.defineProperty(exports, 'Link', {
        enumerable: !0,
        get: function () {
          return __importDefault(Link_1).default;
        },
      });
    },
    5365: function (__unused_webpack_module, exports) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.URL = void 0),
        (exports.URL = {
          GITHUB: 'https://github.com/mikechabot',
          REPOSITORY: 'http://www.github.com/mikechabot/react-boilerplate',
          NPM: 'https://www.npmjs.com/~mikechabot',
          DEMO: 'https://github.com/mikechabot/react-boilerplate',
          LICENSE: 'https://github.com/mikechabot/react-boilerplate/blob/master/LICENSE',
          REDUX_ENTITY: 'https://github.com/mikechabot/redux-entity',
          REACT_ROUTER: 'https://github.com/ReactTraining/react-router',
        });
    },
    9269: function (__unused_webpack_module, exports) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.RESET_COUNTER = exports.DECREMENT_COUNTER = exports.INCREMENT_COUNTER = void 0),
        (exports.INCREMENT_COUNTER = 'react-boilerplate/counter/INCREMENT_COUNTER'),
        (exports.DECREMENT_COUNTER = 'react-boilerplate/counter/DECREMENT_COUNTER'),
        (exports.RESET_COUNTER = 'react-boilerplate/counter/RESET_COUNTER');
      exports.default = (state = 0, action) => {
        switch (action.type) {
          case exports.INCREMENT_COUNTER:
            return state + 1;
          case exports.DECREMENT_COUNTER:
            return state - 1;
          case exports.RESET_COUNTER:
            return 0;
          default:
            return state;
        }
      };
    },
    6186: function (__unused_webpack_module, exports, __webpack_require__) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.fetchBaz = exports.fetchBar = exports.fetchFoo = void 0);
      const redux_entity_1 = __webpack_require__(7694),
        domain_service_1 = __webpack_require__(2819),
        types_1 = __webpack_require__(55);
      (exports.fetchFoo = function fetchFoo() {
        return redux_entity_1.GetEntity(types_1.EntityType.Foo, domain_service_1.fetchMockData());
      }),
        (exports.fetchBar = function fetchBar() {
          return redux_entity_1.GetEntity(types_1.EntityType.Bar, domain_service_1.fetchMockData(), { append: !0 });
        }),
        (exports.fetchBaz = function fetchBaz() {
          return redux_entity_1.GetEntity(types_1.EntityType.Baz, domain_service_1.fetchMockData(!0));
        });
    },
    5318: function (__unused_webpack_module, exports, __webpack_require__) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
      var lib_1 = __webpack_require__(7694);
      Object.defineProperty(exports, 'default', {
        enumerable: !0,
        get: function () {
          return lib_1.reducer;
        },
      });
    },
    55: function (__unused_webpack_module, exports) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.EntityType = void 0),
        (function (EntityType) {
          (EntityType.Foo = 'foo'), (EntityType.Bar = 'bar'), (EntityType.Baz = 'baz');
        })(exports.EntityType || (exports.EntityType = {}));
    },
    8262: function (__unused_webpack_module, exports, __webpack_require__) {
      'use strict';
      var __importDefault =
        (this && this.__importDefault) ||
        function (mod) {
          return mod && mod.__esModule ? mod : { default: mod };
        };
      Object.defineProperty(exports, '__esModule', { value: !0 });
      const redux_1 = __webpack_require__(4890),
        reducer_1 = __importDefault(__webpack_require__(5318)),
        reducer_2 = __importDefault(__webpack_require__(9269)),
        rootReducer = redux_1.combineReducers({ counter: reducer_2.default, entities: reducer_1.default });
      exports.default = rootReducer;
    },
    234: function (__unused_webpack_module, exports, __webpack_require__) {
      'use strict';
      var __importDefault =
        (this && this.__importDefault) ||
        function (mod) {
          return mod && mod.__esModule ? mod : { default: mod };
        };
      Object.defineProperty(exports, '__esModule', { value: !0 });
      const redux_1 = __webpack_require__(4890),
        redux_thunk_1 = __importDefault(__webpack_require__(3894)),
        redux_logger_1 = __importDefault(__webpack_require__(4500)),
        index_1 = __importDefault(__webpack_require__(8262));
      exports.default = function configureStore(initialState = {}) {
        return redux_1.createStore(
          index_1.default,
          initialState,
          redux_1.applyMiddleware(redux_thunk_1.default, redux_logger_1.default)
        );
      };
    },
    169: function (__unused_webpack_module, exports, __webpack_require__) {
      'use strict';
      var __importDefault =
        (this && this.__importDefault) ||
        function (mod) {
          return mod && mod.__esModule ? mod : { default: mod };
        };
      Object.defineProperty(exports, '__esModule', { value: !0 });
      const redux_1 = __webpack_require__(4890),
        redux_thunk_1 = __importDefault(__webpack_require__(3894)),
        index_1 = __importDefault(__webpack_require__(8262)),
        redux_logger_1 = __importDefault(__webpack_require__(4500));
      exports.default = function configureStore(initialState = {}) {
        return redux_1.createStore(
          index_1.default,
          initialState,
          redux_1.applyMiddleware(redux_thunk_1.default, redux_logger_1.default)
        );
      };
    },
    5908: function (__unused_webpack_module, exports, __webpack_require__) {
      'use strict';
      var __importDefault =
        (this && this.__importDefault) ||
        function (mod) {
          return mod && mod.__esModule ? mod : { default: mod };
        };
      Object.defineProperty(exports, '__esModule', { value: !0 });
      const node_service_1 = __importDefault(__webpack_require__(8720)),
        configure_store_prod_1 = __importDefault(__webpack_require__(169)),
        configure_store_dev_1 = __importDefault(__webpack_require__(234));
      exports.default = node_service_1.default.isProduction()
        ? configure_store_prod_1.default()
        : configure_store_dev_1.default();
    },
    3521: function (__unused_webpack_module, exports, __webpack_require__) {
      'use strict';
      var __importDefault =
        (this && this.__importDefault) ||
        function (mod) {
          return mod && mod.__esModule ? mod : { default: mod };
        };
      Object.defineProperty(exports, '__esModule', { value: !0 });
      const axios_1 = __importDefault(__webpack_require__(9669)),
        config_service_1 = __importDefault(__webpack_require__(3018)),
        instance = axios_1.default.create({ baseURL: config_service_1.default.getBaseUrl(), timeout: 4e3 });
      exports.default = { request: (options) => instance.request(options) };
    },
    5334: function (__unused_webpack_module, exports, __webpack_require__) {
      'use strict';
      var __importDefault =
        (this && this.__importDefault) ||
        function (mod) {
          return mod && mod.__esModule ? mod : { default: mod };
        };
      Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.post = exports.get = void 0);
      const ajax_service_1 = __importDefault(__webpack_require__(3521));
      var HttpMethod;
      !(function (HttpMethod) {
        (HttpMethod.GET = 'GET'), (HttpMethod.POST = 'POST'), (HttpMethod.PUT = 'PUT'), (HttpMethod.DELETE = 'DELETE');
      })(HttpMethod || (HttpMethod = {}));
      const request = (method, url, data, options) => {
        const defaultOptions = { url, method, responseType: 'json' };
        data &&
          ((defaultOptions.data = JSON.stringify(data)),
          (defaultOptions.headers = { 'Content-Type': 'application/json' }));
        let requestOptions = defaultOptions;
        return (
          options && (requestOptions = Object.assign(Object.assign({}, defaultOptions), options)),
          new Promise((resolve, reject) => {
            ajax_service_1.default
              .request(requestOptions)
              .then(resolve)
              .catch((error) =>
                reject(
                  (function deriveError(error) {
                    return error
                      ? error.message
                        ? error
                        : `${error.status} ${error.statusText}`
                      : new Error('An unknown error occurred');
                  })(error)
                )
              );
          })
        );
      };
      exports.get = (url, options) => request(HttpMethod.GET, url, void 0, options);
      exports.post = (url, data, options) => request(HttpMethod.POST, url, data, options);
    },
    2819: function (__unused_webpack_module, exports, __webpack_require__) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.fetchMockData = exports.postFoo = exports.fetchFoo = void 0);
      const data_access_service_1 = __webpack_require__(5334),
        util_1 = __webpack_require__(4609),
        fakeError = new Error('Fake Error!');
      exports.fetchFoo = (id) => data_access_service_1.get(`/foo/${id}`);
      exports.postFoo = (id, data) => data_access_service_1.post(`/foo/${id}`, data);
      exports.fetchMockData = (doReject = !1) => {
        const delay = util_1.randomNumber(),
          payload = { delay };
        return new Promise((resolve, reject) => {
          setTimeout(() => (doReject ? reject(fakeError) : resolve(payload)), 1e3 * delay);
        });
      };
    },
    4609: function (__unused_webpack_module, exports) {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.randomNumber = void 0);
      exports.randomNumber = function randomNumber() {
        return Number(2 * Math.random() + 1);
      };
    },
    4439: function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        (__webpack_exports__.default =
          'data:image/png;base64,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');
    },
  },
  0,
  [[3463, 700, 736]],
]);
