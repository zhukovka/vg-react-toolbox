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

var _dropdownplus = require('react-toolbox-addons/lib/dropdownplus');

var _dropdownplus2 = _interopRequireDefault(_dropdownplus);

var _grid = require('react-toolbox-addons/lib/grid');

var _input2 = require('react-toolbox/lib/input');

var _input3 = _interopRequireDefault(_input2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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

        var _this = _possibleConstructorReturn(this, (VGComponentForm.__proto__ || Object.getPrototypeOf(VGComponentForm)).call(this, props));

        var dropdowns = _this.props.dropdowns || [];
        var inputs = _this.props.inputs || [];
        var textareas = _this.props.textareas || [];
        _this.state = _this.setInitialState([].concat(_toConsumableArray(dropdowns), _toConsumableArray(inputs), _toConsumableArray(textareas)));
        return _this;
    }

    _createClass(VGComponentForm, [{
        key: 'setInitialState',
        value: function setInitialState(items) {
            return items.reduce(function (_state, item) {
                if (!item.key) {
                    throw new Error('Key property is required by VGComponentForm');
                }
                _state[item.key] = item.value;
                return _state;
            }, {});
        }
    }, {
        key: 'renderDropDowns',
        value: function renderDropDowns() {
            var _this2 = this;

            var dropdowns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

            return dropdowns.map(function (dropdown) {
                var key = dropdown.key,
                    _onChange = dropdown.onChange,
                    value = dropdown.value,
                    other = _objectWithoutProperties(dropdown, ['key', 'onChange', 'value']);

                return _react2.default.createElement(
                    _grid.Col,
                    { key: 'col-' + key, medium: 6, small: 12 },
                    _react2.default.createElement(_dropdownplus2.default, _extends({
                        onChange: function onChange(val) {
                            return _this2.setState(_defineProperty({}, key, val), function () {
                                return _onChange(val);
                            });
                        },
                        value: _this2.state[key]
                    }, other))
                );
            }, this);
        }
    }, {
        key: 'renderInputs',
        value: function renderInputs(inputs) {
            var _this3 = this;

            return inputs.map(function (input) {
                return _this3.renderInput(input);
            }, this);
        }
    }, {
        key: 'renderInput',
        value: function renderInput(_input) {
            var _this4 = this;

            var sizes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { small: 12, medium: 6, large: 6 };

            /*eslint no-unused-vars:0*/
            var key = _input.key,
                _onChange2 = _input.onChange,
                value = _input.value,
                other = _objectWithoutProperties(_input, ['key', 'onChange', 'value']);

            return _react2.default.createElement(
                _grid.Col,
                _extends({ key: 'col-' + _input.key }, sizes),
                _react2.default.createElement(_input3.default, _extends({
                    onChange: function onChange(val) {
                        return _this4.setState(_defineProperty({}, key, val), function () {
                            return _onChange2(val);
                        });
                    },
                    value: this.state[key] || ''
                }, other))
            );
        }
    }, {
        key: 'renderCardActionsRight',
        value: function renderCardActionsRight() {
            var buttons = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

            return buttons.map(function (button) {
                return _react2.default.createElement(_button.Button, button);
            });
        }
    }, {
        key: 'renderFormContent',
        value: function renderFormContent() {
            return _react2.default.createElement(
                'fieldset',
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
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _card.Card,
                null,
                _react2.default.createElement(
                    'form',
                    { action: '', onSubmit: this.props.onSubmit },
                    this.renderFormContent()
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
        key: _react.PropTypes.string.isRequired,
        label: _react.PropTypes.string,
        mini: _react.PropTypes.bool,
        neutral: _react.PropTypes.bool,
        onMouseLeave: _react.PropTypes.func,
        onMouseUp: _react.PropTypes.func,
        primary: _react.PropTypes.bool,
        raised: _react.PropTypes.bool,
        theme: _react.PropTypes.shape({
            accent: _react.PropTypes.string,
            button: _react.PropTypes.string,
            flat: _react.PropTypes.string,
            floating: _react.PropTypes.string,
            icon: _react.PropTypes.string,
            inverse: _react.PropTypes.string,
            mini: _react.PropTypes.string,
            neutral: _react.PropTypes.string,
            primary: _react.PropTypes.string,
            raised: _react.PropTypes.string,
            rippleWrapper: _react.PropTypes.string,
            toggle: _react.PropTypes.string
        }),
        type: _react.PropTypes.string
    })),
    dropdowns: _react.PropTypes.arrayOf(_react.PropTypes.shape({
        allowBlank: _react.PropTypes.bool,
        auto: _react.PropTypes.bool,
        className: _react.PropTypes.string,
        disabled: _react.PropTypes.bool,
        error: _react.PropTypes.string,
        key: _react.PropTypes.string.isRequired,
        label: _react.PropTypes.string,
        name: _react.PropTypes.string,
        onAddAnother: _react.PropTypes.func,
        onBlur: _react.PropTypes.func,
        onChange: _react.PropTypes.func,
        onFocus: _react.PropTypes.func,
        source: _react.PropTypes.array.isRequired,
        template: _react.PropTypes.func,
        theme: _react.PropTypes.shape({
            active: _react.PropTypes.string,
            disabled: _react.PropTypes.string,
            dropdown: _react.PropTypes.string,
            error: _react.PropTypes.string,
            errored: _react.PropTypes.string,
            field: _react.PropTypes.string,
            label: _react.PropTypes.string,
            selected: _react.PropTypes.string,
            templateValue: _react.PropTypes.string,
            up: _react.PropTypes.string,
            value: _react.PropTypes.string,
            values: _react.PropTypes.string
        }),
        value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])
    })),
    inputs: _react.PropTypes.arrayOf(_react.PropTypes.shape({
        children: _react2.default.PropTypes.any,
        className: _react2.default.PropTypes.string,
        disabled: _react2.default.PropTypes.bool,
        error: _react2.default.PropTypes.string,
        floating: _react2.default.PropTypes.bool,
        hint: _react2.default.PropTypes.string,
        icon: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.element]),
        key: _react.PropTypes.string.isRequired,
        label: _react2.default.PropTypes.string,
        maxLength: _react2.default.PropTypes.number,
        multiline: _react2.default.PropTypes.bool,
        name: _react2.default.PropTypes.string,
        onBlur: _react2.default.PropTypes.func,
        onChange: _react2.default.PropTypes.func,
        onFocus: _react2.default.PropTypes.func,
        onKeyPress: _react2.default.PropTypes.func,
        required: _react2.default.PropTypes.bool,
        theme: _react2.default.PropTypes.shape({
            bar: _react2.default.PropTypes.string,
            counter: _react2.default.PropTypes.string,
            disabled: _react2.default.PropTypes.string,
            error: _react2.default.PropTypes.string,
            errored: _react2.default.PropTypes.string,
            hidden: _react2.default.PropTypes.string,
            hint: _react2.default.PropTypes.string,
            icon: _react2.default.PropTypes.string,
            input: _react2.default.PropTypes.string,
            inputElement: _react2.default.PropTypes.string,
            required: _react2.default.PropTypes.string,
            withIcon: _react2.default.PropTypes.string
        }),
        type: _react2.default.PropTypes.string,
        value: _react2.default.PropTypes.any
    })),
    onSubmit: _react.PropTypes.func,
    textareas: _react.PropTypes.arrayOf(_react.PropTypes.shape({
        key: _react.PropTypes.string.isRequired,
        label: _react.PropTypes.string,
        name: _react.PropTypes.string,
        onChange: _react.PropTypes.func,
        value: _react.PropTypes.string
    }))
};
exports.default = VGComponentForm;