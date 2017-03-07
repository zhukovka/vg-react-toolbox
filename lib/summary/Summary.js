'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _grid = require('react-toolbox-addons/lib/grid');

var _disabledinput = require('react-toolbox-addons/lib/disabledinput');

var _disabledinput2 = _interopRequireDefault(_disabledinput);

var _headings = require('react-toolbox-addons/lib/headings');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Summary extends Component
 */
var Summary = function (_Component) {
    _inherits(Summary, _Component);

    function Summary(props) {
        _classCallCheck(this, Summary);

        return _possibleConstructorReturn(this, (Summary.__proto__ || Object.getPrototypeOf(Summary)).call(this, props));
    }

    _createClass(Summary, [{
        key: 'renderField',
        value: function renderField(field) {
            var sizes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { small: 12, medium: 6, large: 6 };

            return _react2.default.createElement(
                _grid.Col,
                _extends({ key: 'col-' + field.key }, sizes),
                _react2.default.createElement(_disabledinput2.default, field)
            );
        }
    }, {
        key: 'renderFields',
        value: function renderFields() {
            var _this2 = this;

            var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return Object.keys(fields).map(function (key) {
                return _this2.renderField(fields[key]);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                title = _props.title,
                info = _props.info;

            return _react2.default.createElement(
                _grid.Row,
                { expanded: true },
                _react2.default.createElement(
                    _grid.Col,
                    { small: 12, medium: 12, large: 12 },
                    _react2.default.createElement(
                        _headings.RedHeading,
                        null,
                        title
                    )
                ),
                this.renderFields(info)
            );
        }
    }]);

    return Summary;
}(_react.Component);

Summary.propTypes = {
    /**
     * info <Map<InputProps>>
     */
    info: _react.PropTypes.objectOf(_react.PropTypes.shape({
        children: _react2.default.PropTypes.any,
        className: _react2.default.PropTypes.string,
        error: _react2.default.PropTypes.string,
        floating: _react2.default.PropTypes.bool,
        icon: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.element]),
        key: _react.PropTypes.string.isRequired,
        label: _react2.default.PropTypes.string,
        maxLength: _react2.default.PropTypes.number,
        multiline: _react2.default.PropTypes.bool,
        name: _react2.default.PropTypes.string,
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
    /**
     * title <String>
     */
    title: _react.PropTypes.string
};
exports.default = Summary;