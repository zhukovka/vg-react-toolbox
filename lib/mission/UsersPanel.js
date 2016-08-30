'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
  var open = _ref.open;
  var onClick = _ref.onClick;
  var addUser = _ref.addUser;

  var addUserBtn = { icon: 'person_add', onClick: addUser };
  return _react2.default.createElement(
    _nawdrawerplus2.default,
    { title: 'Users', active: open, pinned: open, onClick: onClick, buttons: [addUserBtn] },
    _react2.default.createElement(
      'div',
      { style: { overflow: 'auto' } },
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
  open: _react.PropTypes.bool
};
exports.default = UsersPanel;