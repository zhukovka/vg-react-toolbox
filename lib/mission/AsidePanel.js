'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nawdrawerplus = require('react-toolbox-addons/lib/nawdrawerplus');

var _nawdrawerplus2 = _interopRequireDefault(_nawdrawerplus);

var _navdraweplusChildren = require('react-toolbox-addons/lib/navdraweplus-children');

var _navdraweplusChildren2 = _interopRequireDefault(_navdraweplusChildren);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * AsidePanel react component
 */
var AsidePanel = function AsidePanel(_ref) {
    var children = _ref.children;
    var openState = _ref.openState;
    var onClick = _ref.onClick;
    var addUser = _ref.addUser;
    var style = _ref.style;

    var btns = [];
    if (addUser) {
        btns.push({ icon: 'person_add', className: 'person_add', onClick: addUser });
    }
    return _react2.default.createElement(
        _navdraweplusChildren2.default,
        { titleForFirstChild: 'Users', titleForSecondChild: 'Chat',
            openState: openState, pinned: openState !== 0, onClick: onClick,
            buttons: btns, className: 'usersPanel' },
        children
    );
};
AsidePanel.propTypes = {
    /**
     * Callback1<DOMEvent> addUser - callback on user icon click
     */
    addUser: _react.PropTypes.func,
    children: _react.PropTypes.any,
    /**
     * <Boolean> open - property to indicate if the panel is open
     */
    onClick: _react.PropTypes.func,
    /**
     * <Callback1<DOMEvent>> - onClick callback on close icon click
     */
    open: _react.PropTypes.bool,
    openState: _react.PropTypes.oneOf([0, 1, 2]),
    style: _react.PropTypes.object
};
exports.default = AsidePanel;