'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _card = require('react-toolbox/lib/card');

var _cardactionsspaced = require('react-toolbox-addons/lib/cardactionsspaced');

var _cardactionsspaced2 = _interopRequireDefault(_cardactionsspaced);

var _button = require('react-toolbox/lib/button');

var _ButtonGroup = require('react-toolbox-addons/lib/buttongroup/ButtonGroup');

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * MissionBar react component
 */
var MissionBar = function MissionBar(_ref) {
  var titleElement = _ref.titleElement;
  var userIconClick = _ref.userIconClick;
  var weatherClick = _ref.weatherClick;
  var mapClick = _ref.mapClick;

  return _react2.default.createElement(
    _card.Card,
    { className: _theme2.default.missionBar, theme: _theme2.default },
    _react2.default.createElement(
      _cardactionsspaced2.default,
      null,
      _react2.default.createElement(_button.IconButton, { icon: 'supervisor_account', className: _theme2.default.missionbar_icon, onClick: function onClick(e) {
          return userIconClick(e);
        }, theme: _theme2.default }),
      titleElement,
      _react2.default.createElement(
        _ButtonGroup2.default,
        null,
        _react2.default.createElement(_button.IconButton, { icon: 'wb_sunny', className: _theme2.default.missionbar_icon, onClick: function onClick(e) {
            return weatherClick(e);
          }, theme: _theme2.default }),
        _react2.default.createElement(_button.IconButton, { icon: 'map', className: _theme2.default.missionbar_icon, onClick: function onClick(e) {
            return mapClick(e);
          }, theme: _theme2.default })
      )
    )
  );
};
MissionBar.propTypes = {
  /**
   * titleElement - ReactElement
   */
  titleElement: _react.PropTypes.element,
  /**
   * Callback1<DOMEvent> mapClick - callback on map icon click
   */
  mapClick: _react.PropTypes.func,
  /**
   * Callback1<DOMEvent> userIconClick - callback on user icon click
   */
  userIconClick: _react.PropTypes.func,
  /**
   * Callback1<DOMEvent> weatherClick - callback on weather icon click
   */
  weatherClick: _react.PropTypes.func
};
exports.default = MissionBar;