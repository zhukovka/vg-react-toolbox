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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by mitya on 8/23/16.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var VGComponentForm = function (_Component) {
    _inherits(VGComponentForm, _Component);

    function VGComponentForm() {
        _classCallCheck(this, VGComponentForm);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(VGComponentForm).apply(this, arguments));
    }

    _createClass(VGComponentForm, [{
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
                )
            );
        }
    }, {
        key: 'renderDropDowns',
        value: function renderDropDowns() {
            var dropdowns = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

            return dropdowns.map(function (dropdown) {
                return _react2.default.createElement(
                    _grid.Col,
                    { key: dropdown.label, medium: 6, small: 12 },
                    _react2.default.createElement(_dropdown2.default, {
                        auto: true,
                        label: dropdown.label,
                        onChange: dropdown.onChange,
                        source: dropdown.source,
                        value: dropdown.value
                    })
                );
            });
        }
    }, {
        key: 'renderInputs',
        value: function renderInputs(inputs) {
            return inputs.map(function (_input) {
                var label = _input.label;
                var name = _input.name;
                var value = _input.value;
                var onChange = _input.onChange;
                var type = _input.type;

                var other = _objectWithoutProperties(_input, ['label', 'name', 'value', 'onChange', 'type']);

                return _react2.default.createElement(
                    _grid.Col,
                    { key: label, medium: 6, small: 12 },
                    _react2.default.createElement(_input3.default, _extends({
                        label: label,
                        name: name,
                        onChange: onChange }, other, {
                        type: type,
                        value: value
                    }))
                );
            });
        }
    }]);

    return VGComponentForm;
}(_react.Component);

VGComponentForm.propTypes = {
    dropdowns: _react.PropTypes.arrayOf(_react.PropTypes.shape({
        label: _react.PropTypes.string,
        onChange: _react.PropTypes.func,
        source: _react.PropTypes.array
    })),
    inputs: _react.PropTypes.arrayOf(_react.PropTypes.shape({
        label: _react.PropTypes.string,
        name: _react.PropTypes.string,
        onChange: _react.PropTypes.func,
        type: _react.PropTypes.string,
        value: _react.PropTypes.string
    }))

};
exports.default = VGComponentForm;