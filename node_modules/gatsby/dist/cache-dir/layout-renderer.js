"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _loader = require("./loader");

var _loader2 = _interopRequireDefault(_loader);

var _emitter = require("./emitter");

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DefaultLayout = function DefaultLayout(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    "div",
    null,
    children()
  );
};

var LayoutRenderer = function (_React$Component) {
  (0, _inherits3.default)(LayoutRenderer, _React$Component);

  function LayoutRenderer(props) {
    (0, _classCallCheck3.default)(this, LayoutRenderer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LayoutRenderer.__proto__ || (0, _getPrototypeOf2.default)(LayoutRenderer)).call(this));

    _this.state = {
      location: props.location,
      pageResources: _loader2.default.getResourcesForPathname(props.location.pathname)
    };
    return _this;
  }

  (0, _createClass3.default)(LayoutRenderer, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.state.location.pathname !== nextProps.location.pathname) {
        this.setState({
          location: nextProps.location
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // Listen to events so when our page gets updated, we can transition.
      // This is only useful on delayed transitions as the page will get rendered
      // without the necessary page resources and then re-render once those come in.
      _emitter2.default.on("onPostLoadPageResources", function (e) {
        if (e.page.path === _loader2.default.getPage(_this2.state.location.pathname).path) {
          _this2.setState({ pageResources: e.pageResources });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return (0, _react.createElement)(this.state.pageResources.layout || DefaultLayout, (0, _extends3.default)({
        key: this.state.pageResources.layout
      }, this.props));
    }
  }]);
  return LayoutRenderer;
}(_react2.default.Component);

exports.default = LayoutRenderer;
//# sourceMappingURL=layout-renderer.js.map