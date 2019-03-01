"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Leblebi = function (_Component) {
  _inherits(Leblebi, _Component);

  function Leblebi() {
    var _this2 = this;

    _classCallCheck(this, Leblebi);

    var _this = _possibleConstructorReturn(this, (Leblebi.__proto__ || Object.getPrototypeOf(Leblebi)).call(this));

    _this.handleClick = function (index) {
      var result = _this.state.result;

      var value = result[index].raw;
      _this.setState({
        result: [],
        value: value
      });
    };

    _this.handleHover = function () {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;

      _this.setState({
        activeItemIndex: index
      });
    };

    _this.handleChange = function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
        var target = _ref.target;

        var value, _this$props$config, config, _config$delay, delay;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                value = target.value;
                _this$props$config = _this.props.config, config = _this$props$config === undefined ? {} : _this$props$config;
                _config$delay = config.delay, delay = _config$delay === undefined ? 300 : _config$delay;


                _this.setState({
                  activeItemIndex: -1,
                  value: value
                });

                if (_this.timeOut) {
                  clearTimeout(_this.timeOut);
                }

                _this.timeOut = setTimeout(function () {
                  _this.fetchData();
                }, delay);

                return _context.abrupt("return", null);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.handleKeyDown = function (event) {
      var result = _this.state.result;
      var tab = _this.keyCode.tab;
      var keyCode = event.keyCode;


      if (keyCode === tab && result.length) {
        event.preventDefault();
      }
      return false;
    };

    _this.handleKeyUp = function (event) {
      var keyCode = event.keyCode;
      var _this$keyCode = _this.keyCode,
          up = _this$keyCode.up,
          down = _this$keyCode.down,
          enter = _this$keyCode.enter,
          tab = _this$keyCode.tab;
      var _this$state = _this.state,
          activeItemIndex = _this$state.activeItemIndex,
          result = _this$state.result;

      var lastIndex = result.length - 1;

      if (keyCode === up) {
        if (activeItemIndex > 0) {
          _this.setState(function (prevState) {
            return {
              activeItemIndex: prevState.activeItemIndex - 1
            };
          });
        } else {
          _this.setState({
            activeItemIndex: lastIndex
          });
        }
        return null;
      }

      if (keyCode === down) {
        if (activeItemIndex < lastIndex) {
          _this.setState(function (prevState) {
            return {
              activeItemIndex: prevState.activeItemIndex + 1
            };
          });
        } else {
          _this.setState({
            activeItemIndex: 0
          });
        }
        return null;
      }

      if ((keyCode === enter || keyCode === tab) && activeItemIndex > -1) {
        event.preventDefault();
        var value = result[activeItemIndex].raw;
        _this.setState({
          activeItemIndex: -1,
          result: [],
          value: value
        });
      }

      return null;
    };

    _this.fetchData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var _this$state2, style, value, _this$props, _this$props$config2, config, _this$props$className, classNames, _config$field, field, _config$prop, prop, _config$limit, limit, data, LeblebiItems, lang, activeItem, result;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this$state2 = _this.state, style = _this$state2.style, value = _this$state2.value;
              _this$props = _this.props, _this$props$config2 = _this$props.config, config = _this$props$config2 === undefined ? {} : _this$props$config2, _this$props$className = _this$props.classNames, classNames = _this$props$className === undefined ? {} : _this$props$className;
              _config$field = config.field, field = _config$field === undefined ? false : _config$field, _config$prop = config.prop, prop = _config$prop === undefined ? false : _config$prop, _config$limit = config.limit, limit = _config$limit === undefined ? 10 : _config$limit;
              data = _this.props.data;
              LeblebiItems = [];
              lang = config.lang || undefined;

              if (!(typeof data === "function")) {
                _context2.next = 10;
                break;
              }

              _context2.next = 9;
              return data(value);

            case 9:
              data = _context2.sent;

            case 10:

              if (prop) {
                data = _this.objDeepGetProp(data, prop);
              }

              if (!Array.isArray(data)) {
                data = [];
              }

              activeItem = void 0;

              data.forEach(function (item, index) {
                if (field) {
                  activeItem = item[field].toLocaleLowerCase(lang);
                } else {
                  activeItem = item.toLocaleLowerCase(lang);
                }

                var wordStartIndex = activeItem.indexOf(value.toLocaleLowerCase(lang));
                var wordEndIndex = wordStartIndex + value.length;
                var check = wordStartIndex > -1;

                if (check) {
                  var key = activeItem.slice(wordStartIndex, wordEndIndex);
                  var leblebiWordStyle = _this.objectToInlineStyle(style.leblebiWord);
                  var className = "leblebi-word" + (" " + (classNames.leblebiWord || ""));
                  var custom = activeItem.replace(key, "<span class=\"" + className + "\" style=\"" + leblebiWordStyle + "\">" + key + "</span>");

                  LeblebiItems.push({
                    id: item[field].id || index,
                    raw: activeItem,
                    custom: custom
                  });
                }

                return false;
              });

              result = value.length ? LeblebiItems.slice(0, limit) : [];


              _this.setState({ result: result });

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }));

    _this.objectToInlineStyle = function () {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var inlineStyle = "";
      Object.keys(obj).forEach(function (name) {
        var cebabCaseName = name.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/\s+/g, "-").toLowerCase();
        var value = typeof obj[name] === "number" ? obj[name] + "px" : obj[name];
        inlineStyle += cebabCaseName + ":" + value + ";";
      });

      return inlineStyle;
    };

    _this.objDeepGetProp = function (obj, props) {
      if (!obj || (typeof obj === "undefined" ? "undefined" : _typeof(obj)) !== "object") {
        return false;
      }

      var propsArr = props.split(".");
      var active = obj;
      propsArr.forEach(function (prop) {
        if (active[prop]) {
          active = active[prop];
        } else {
          active = false;
        }
      });
      return active;
    };

    _this.state = {
      value: "",
      style: {},
      result: [],
      activeItemIndex: 0
    };

    _this.keyCode = {
      up: 38,
      down: 40,
      enter: 13,
      tab: 9
    };
    return _this;
  }

  _createClass(Leblebi, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var defaultStyle = {
        leblebi: {
          display: "flex",
          flexDirection: "column"
        },
        leblebiInput: {},
        leblebiResult: {
          background: "#fff",
          border: "1px solid #ccc",
          padding: 1
        },
        leblebiItem: {
          cursor: "pointer",
          padding: 6
        },
        leblebiItemActive: {
          background: "#2666b9",
          color: "#fff"
        },
        leblebiWord: {
          padding: "3px 1px 0px",
          border: "1px solid #ffd94f",
          color: "#f9a500",
          background: "#ffefd3",
          borderRadius: 2,
          fontWeight: "normal",
          margin: "0px 1px",
          boxShadow: "1px 1px 1px -1px #000000"
        }
      };

      var _props = this.props,
          _props$style = _props.style,
          style = _props$style === undefined ? {} : _props$style,
          _props$config = _props.config,
          config = _props$config === undefined ? {} : _props$config;


      var activeStyle = config.noDefaultStyle ? {} : _extends({}, defaultStyle);

      Object.keys(style).forEach(function (styleName) {
        activeStyle[styleName] = _extends({}, defaultStyle[styleName], style[styleName]);
      });

      this.state.style = activeStyle;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _state = this.state,
          style = _state.style,
          value = _state.value,
          result = _state.result,
          activeItemIndex = _state.activeItemIndex;
      var _props$classNames = this.props.classNames,
          classNames = _props$classNames === undefined ? {} : _props$classNames;

      return React.createElement(
        _react.Fragment,
        null,
        React.createElement(
          "div",
          {
            className: "leblebi " + (classNames.leblebi || ""),
            style: style.leblebi
          },
          React.createElement("input", {
            className: "leblebi-input " + (classNames.leblebiInput || ""),
            onChange: this.handleChange,
            onKeyDown: this.handleKeyDown,
            onKeyUp: this.handleKeyUp,
            value: value,
            type: "text",
            style: style.leblebiInput
          }),
          result.length > 0 && React.createElement(
            "div",
            {
              className: "leblebi-result " + (classNames.leblebiResult || ""),
              style: style.leblebiResult
            },
            result.map(function (item, index) {
              var activeStyle = {};
              var className = "leblebi-item " + (classNames.leblebiItem || "");
              if (activeItemIndex === index) {
                activeStyle = style.leblebiItemActive;
                className += " leblebi-item-active " + (classNames.leblebiItemActive || "");
              }

              return React.createElement("div", {
                key: item.id,
                index: index,
                className: className,
                onClick: function onClick() {
                  return _this3.handleClick(index);
                },
                onFocus: function onFocus() {
                  return _this3.handleHover(index);
                },
                onBlur: function onBlur() {
                  return _this3.handleHover();
                },
                onMouseOver: function onMouseOver() {
                  return _this3.handleHover(index);
                },
                onMouseOut: function onMouseOut() {
                  return _this3.handleHover();
                },
                style: _extends({}, activeStyle, style.leblebiItem),
                dangerouslySetInnerHTML: { __html: item.custom }
              });
            })
          )
        )
      );
    }
  }]);

  return Leblebi;
}(_react.Component);

exports.default = Leblebi;