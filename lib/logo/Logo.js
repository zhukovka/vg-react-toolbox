'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _card = require('react-toolbox/lib/card');

var _grid = require('react-toolbox-addons/lib/grid');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 *  Logo
 * @returns {JSX}
 * @constructor
 */
var Logo = function Logo(_ref) {
    var aspectRatio = _ref.aspectRatio;

    var other = _objectWithoutProperties(_ref, ['aspectRatio']);

    return _react2.default.createElement(
        _grid.Row,
        { align: 'center', expanded: true },
        _react2.default.createElement(
            _grid.Col,
            { small: 4, medium: 3, large: 2 },
            _react2.default.createElement(_card.CardMedia, _extends({}, other, { aspectRatio: 'square' }))
        )
    );
};

Logo.propTypes = {
    aspectRatio: _react.PropTypes.oneOf(['wide', 'square']),
    children: _react.PropTypes.any,
    className: _react.PropTypes.string,
    color: _react.PropTypes.string,
    contentOverlay: _react.PropTypes.bool,
    /**
     * image <String> url of the logo image
     */
    image: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
    theme: _react.PropTypes.shape({
        cardMedia: _react.PropTypes.string,
        content: _react.PropTypes.string,
        contentOverlay: _react.PropTypes.string,
        square: _react.PropTypes.string,
        wide: _react.PropTypes.string
    })
};

exports.default = Logo;