'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactToolbox = require('react-toolbox');

var _videopanel = require('react-toolbox-addons/lib/videopanel');

var _videopanel2 = _interopRequireDefault(_videopanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * PlayerPanel react component
 * @param children {array|object|node}
 * @param expand {Callback1<DOMEvent>} callback on expand icon click
 * @param fullscreen {Callback1<DOMEvent>} callback on fullscreen icon click
 * @returns {JSX}
 * @constructor
 */
var PlayerPanel = function PlayerPanel(_ref) {
    var children = _ref.children;
    var expand = _ref.expand;
    var fullscreen = _ref.fullscreen;

    var video = Array.isArray(children) ? children[0] : children;
    var _children = Array.isArray(children) ? children.slice(1) : null;
    return _react2.default.createElement(
        _reactToolbox.Panel,
        null,
        _react2.default.createElement(
            _videopanel2.default,
            {
                buttons: [{ icon: 'view_array', inverse: true, onClick: function onClick(e) {
                        return expand(e);
                    } }, { icon: 'fullscreen', inverse: true, onClick: function onClick(e) {
                        return fullscreen(e);
                    } }] },
            video
        ),
        _children
    );
};
PlayerPanel.propTypes = {
    children: _react.PropTypes.any,
    /**
     * expand {Callback1<DOMEvent>} callback on expand icon click
     */
    expand: _react.PropTypes.func,
    /**
     * fullscreen {Callback1<DOMEvent>} callback on fullscreen icon click
     */
    fullscreen: _react.PropTypes.func
};
exports.default = PlayerPanel;