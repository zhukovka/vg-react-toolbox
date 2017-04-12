'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactToolbox = require('react-toolbox');

var _videopanel = require('react-toolbox-addons/lib/videopanel');

var _videopanel2 = _interopRequireDefault(_videopanel);

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * PlayerPanel react component
 */
var PlayerPanel = function PlayerPanel(_ref) {
    var children = _ref.children,
        expand = _ref.expand,
        fullscreen = _ref.fullscreen,
        other = _objectWithoutProperties(_ref, ['children', 'expand', 'fullscreen']);

    var video = Array.isArray(children) ? children[0] : children;
    var _children = Array.isArray(children) ? children.slice(1) : null;
    var btns = [{ icon: 'view_array', inverse: true, onClick: function onClick(e) {
            return expand(e);
        } }];
    if (fullscreen) {
        btns.push({ icon: 'fullscreen', inverse: true, onClick: function onClick(e) {
                return fullscreen(e);
            } });
    }
    return _react2.default.createElement(
        _reactToolbox.Panel,
        { className: _theme2.default.playerPanel, theme: _theme2.default },
        _react2.default.createElement(
            _videopanel2.default,
            _extends({
                buttons: btns }, other),
            video
        ),
        _children
    );
};
PlayerPanel.propTypes = {
    children: _react.PropTypes.any,
    /**
     * Callback1<DOMEvent> expand - callback on expand icon click
     */
    expand: _react.PropTypes.func,
    /**
     * Callback1<DOMEvent> fullscreen - callback on fullscreen icon click
     */
    fullscreen: _react.PropTypes.func
};
exports.default = PlayerPanel;