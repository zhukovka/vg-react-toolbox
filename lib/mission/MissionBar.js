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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MissionBar = function MissionBar(_ref) {
    var userIconClick = _ref.userIconClick;
    var weatherClick = _ref.weatherClick;
    var mapClick = _ref.mapClick;

    return _react2.default.createElement(
        _card.Card,
        null,
        _react2.default.createElement(
            _cardactionsspaced2.default,
            null,
            _react2.default.createElement(_button.IconButton, { icon: 'supervisor_account', onClick: function onClick(e) {
                    return userIconClick(e);
                } }),
            _react2.default.createElement(
                _ButtonGroup2.default,
                null,
                _react2.default.createElement(_button.IconButton, { icon: 'wb_sunny', onClick: function onClick(e) {
                        return weatherClick(e);
                    } }),
                _react2.default.createElement(_button.IconButton, { icon: 'map', onClick: function onClick(e) {
                        return mapClick(e);
                    } })
            )
        )
    );
};
MissionBar.propTypes = {
    mapClick: _react.PropTypes.func,
    userIconClick: _react.PropTypes.func,
    weatherClick: _react.PropTypes.func
};
exports.default = MissionBar;