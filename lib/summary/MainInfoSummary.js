'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _grid = require('react-toolbox-addons/lib/grid');

var _headings = require('react-toolbox-addons/lib/headings');

var _Summary2 = require('./Summary');

var _Summary3 = _interopRequireDefault(_Summary2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * MainInfoSummary extends Summary
 */
var MainInfoSummary = function (_Summary) {
    _inherits(MainInfoSummary, _Summary);

    function MainInfoSummary(props) {
        _classCallCheck(this, MainInfoSummary);

        return _possibleConstructorReturn(this, (MainInfoSummary.__proto__ || Object.getPrototypeOf(MainInfoSummary)).call(this, props));
    }

    _createClass(MainInfoSummary, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                title = _props.title,
                info = _props.info;
            var name = info.name,
                id = info.id,
                address = info.address;
            var street = address.street,
                city = address.city,
                state = address.state,
                postcode = address.postcode,
                country = address.country;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
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
                    this.renderFields({ name: name, id: id })
                ),
                _react2.default.createElement(
                    _grid.Row,
                    { expanded: true },
                    _react2.default.createElement(
                        _grid.Col,
                        { small: 12, medium: 12, large: 12 },
                        _react2.default.createElement(
                            _headings.RedHeading,
                            null,
                            'Address'
                        )
                    )
                ),
                _react2.default.createElement(
                    _grid.Row,
                    { expanded: true },
                    this.renderFields({ street: street, city: city })
                ),
                _react2.default.createElement(
                    _grid.Row,
                    { expanded: true },
                    this.renderField(state, { small: 8, medium: 3, large: 3 }),
                    this.renderField(postcode, { small: 4, medium: 3, large: 3 }),
                    this.renderField(country, { small: 12, medium: 6, large: 6 })
                )
            );
        }
    }]);

    return MainInfoSummary;
}(_Summary3.default);

MainInfoSummary.propTypes = {
    /**
     * <array> info
     */
    info: _react.PropTypes.array,
    /**
     * <String> title
     */
    title: _react.PropTypes.string
};
exports.default = MainInfoSummary;