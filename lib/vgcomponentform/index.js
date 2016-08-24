'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _card = require('react-toolbox/lib/card');

var _cardactionsright = require('react-toolbox-addons/lib/cardactionsright');

var _button = require('react-toolbox/lib/button');

var _dropdown = require('react-toolbox/lib/dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _grid = require('react-toolbox-addons/lib/grid');

var _input2 = require('react-toolbox/lib/input');

var _input3 = _interopRequireDefault(_input2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by mitya on 8/23/16.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var VGComponentForm = function (_Component) {
    _inherits(VGComponentForm, _Component);

    function VGComponentForm(props) {
        _classCallCheck(this, VGComponentForm);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(VGComponentForm).call(this, props));

        var dropdowns = _this.props.dropdowns || [];
        var inputs = _this.props.inputs || [];
        var textareas = _this.props.textareas || [];

        _this.state = [].concat(_toConsumableArray(dropdowns), _toConsumableArray(inputs), _toConsumableArray(textareas)).reduce(function (_state, item) {
            _state[item.name] = item.value;
            return _state;
        }, {});
        return _this;
    }

    _createClass(VGComponentForm, [{
        key: 'renderDropDowns',
        value: function renderDropDowns() {
            var _this2 = this;

            var dropdowns = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

            return dropdowns.map(function (dropdown) {
                return _react2.default.createElement(
                    _grid.Col,
                    { key: dropdown.label, medium: 6, small: 12 },
                    _react2.default.createElement(_dropdown2.default, {
                        auto: true,
                        label: dropdown.label,
                        onChange: function onChange(val) {
                            return _this2.setState(_defineProperty({}, dropdown.name, val), function () {
                                return dropdown.onChange(val);
                            });
                        },
                        source: dropdown.source,
                        value: _this2.state[dropdown.name]
                    })
                );
            }, this);
        }
    }, {
        key: 'renderInputs',
        value: function renderInputs(inputs) {
            var _this3 = this;

            return inputs.map(function (_input) {
                /*eslint no-unused-vars:0*/
                var label = _input.label;
                var name = _input.name;
                var type = _input.type;
                var onChange = _input.onChange;
                var value = _input.value;

                var other = _objectWithoutProperties(_input, ['label', 'name', 'type', 'onChange', 'value']);

                return _react2.default.createElement(
                    _grid.Col,
                    { key: label, medium: 6, small: 12 },
                    _react2.default.createElement(_input3.default, _extends({
                        label: label,
                        name: name,
                        onChange: function onChange(val) {
                            _this3.setState(_defineProperty({}, name, val), function () {
                                console.log(_this3.state[name]);
                            });
                        },
                        type: type,
                        value: _this3.state[name]
                    }, other))
                );
            }, this);
        }
    }, {
        key: 'renderCardActionsRight',
        value: function renderCardActionsRight() {
            var buttons = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

            return buttons.map(function (button) {
                return _react2.default.createElement(_button.Button, button);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _card.Card,
                null,
                _react2.default.createElement(
                    _grid.Row,
                    { expanded: true },
                    this.renderDropDowns(this.props.dropdowns),
                    this.renderInputs(this.props.inputs)
                ),
                _react2.default.createElement(
                    _cardactionsright.CardActionsRight,
                    null,
                    this.renderCardActionsRight(this.props.buttons)
                )
            );
        }
    }]);

    return VGComponentForm;
}(_react.Component);

VGComponentForm.propTypes = {
    buttons: _react.PropTypes.arrayOf(_react.PropTypes.shape({
        accent: _react.PropTypes.bool,
        children: _react.PropTypes.node,
        className: _react.PropTypes.string,
        disabled: _react.PropTypes.bool,
        flat: _react.PropTypes.bool,
        floating: _react.PropTypes.bool,
        href: _react.PropTypes.string,
        icon: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
        inverse: _react.PropTypes.bool,
        label: _react.PropTypes.string,
        mini: _react.PropTypes.bool,
        neutral: _react.PropTypes.bool,
        onMouseLeave: _react.PropTypes.func,
        onMouseUp: _react.PropTypes.func,
        primary: _react.PropTypes.bool,
        raised: _react.PropTypes.bool
    })),
    dropdowns: _react.PropTypes.arrayOf(_react.PropTypes.shape({
        label: _react.PropTypes.string,
        name: _react.PropTypes.string,
        onChange: _react.PropTypes.func,
        source: _react.PropTypes.array
    })),
    inputs: _react.PropTypes.arrayOf(_react.PropTypes.shape({
        label: _react.PropTypes.string,
        name: _react.PropTypes.string,
        onChange: _react.PropTypes.func,
        type: _react.PropTypes.string,
        value: _react.PropTypes.string
    })),
    textareas: _react.PropTypes.arrayOf(_react.PropTypes.shape({
        label: _react.PropTypes.string,
        name: _react.PropTypes.string,
        onChange: _react.PropTypes.func,
        value: _react.PropTypes.string
    }))
};
exports.default = VGComponentForm;