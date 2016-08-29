'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nawdrawerplus = require('react-toolbox-addons/lib/nawdrawerplus');

var _nawdrawerplus2 = _interopRequireDefault(_nawdrawerplus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UsersPanel = function UsersPanel(_ref) {
    var children = _ref.children;
    var open = _ref.open;
    var onClick = _ref.onClick;

    return _react2.default.createElement(
        _nawdrawerplus2.default,
        { title: 'Users', active: open, pinned: open, onClick: onClick },
        children
    );
};
UsersPanel.propTypes = {
    children: _react.PropTypes.any,
    onClick: _react.PropTypes.func,
    open: _react.PropTypes.bool
};
exports.default = UsersPanel;