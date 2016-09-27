'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nawdrawerplus = require('react-toolbox-addons/lib/nawdrawerplus');

var _nawdrawerplus2 = _interopRequireDefault(_nawdrawerplus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * UsersPanel react component
 */
var UsersPanel = function UsersPanel(_ref) {
  var children = _ref.children;
  var openState = _ref.openState;
  var onClick = _ref.onClick;
  var addUser = _ref.addUser;
  var style = _ref.style;

  var addUserBtn = { icon: 'person_add', onClick: addUser };
  return _react2.default.createElement(
    _nawdrawerplus2.default,
    { title: 'Users', openState: openState, pinned: openState !== 0, onClick: onClick,
      buttons: [addUserBtn], className: 'usersPanel' },
    _react2.default.createElement(
      'div',
      { style: _extends({ overflowY: 'auto', overflowX: 'hidden' }, style) },
      children
    )
  );
};
UsersPanel.propTypes = {
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
exports.default = UsersPanel;