(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{296:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),react_redux__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(24),_common_glamorous_Flex__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(33),_common_Icon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3);function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const RouteContent=_ref=>{let path=_ref.path,label=_ref.label,counter=_ref.counter,dispatch=_ref.dispatch,action=_ref.action,icon=_ref.icon;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_glamorous_Flex__WEBPACK_IMPORTED_MODULE_3__.a,{column:!0,padding:10},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_glamorous_Flex__WEBPACK_IMPORTED_MODULE_3__.a,{vAlignCenter:!0},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Icon__WEBPACK_IMPORTED_MODULE_4__.a,{icon:"angle-right"})," Connected to the Redux store at the ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",null,path||"/")," route"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_glamorous_Flex__WEBPACK_IMPORTED_MODULE_3__.a,{vAlignCenter:!0},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Icon__WEBPACK_IMPORTED_MODULE_4__.a,{icon:"angle-right"})," ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",null,"counter"),": ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",null,counter)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"m-top--small"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{className:"button",onClick:dispatch.bind(void 0,action())},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Icon__WEBPACK_IMPORTED_MODULE_4__.a,{icon})," ",label," counter")))};RouteContent.propTypes={label:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,action:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,counter:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,path:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,icon:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,dispatch:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired},__webpack_exports__.a=Object(react_redux__WEBPACK_IMPORTED_MODULE_2__.b)(state=>(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_defineProperty(target,key,source[key])})}return target})({},{counter:state.counter}))(RouteContent)},297:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",function(){return increment}),__webpack_require__.d(__webpack_exports__,"a",function(){return decrement}),__webpack_require__.d(__webpack_exports__,"c",function(){return reset});var _types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(57);const increment=makeActionCreator(_types__WEBPACK_IMPORTED_MODULE_0__.b),decrement=makeActionCreator(_types__WEBPACK_IMPORTED_MODULE_0__.a),reset=makeActionCreator(_types__WEBPACK_IMPORTED_MODULE_0__.c);function makeActionCreator(type){for(var _len=arguments.length,keys=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)keys[_key-1]=arguments[_key];if(!type)throw new Error("Type cannot be null/undefined");return function(){for(var _len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++)args[_key2]=arguments[_key2];let action={type};return keys.forEach((arg,index)=>{action[keys[index]]=args[index]}),action}}},300:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_RouteContent__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(296),_redux_actions_action_creators__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(297);__webpack_exports__.default=(()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RouteContent__WEBPACK_IMPORTED_MODULE_1__.a,{icon:"history",path:"/reset",label:"Reset",action:_redux_actions_action_creators__WEBPACK_IMPORTED_MODULE_2__.c}))}}]);