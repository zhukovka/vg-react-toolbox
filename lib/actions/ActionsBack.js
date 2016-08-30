'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('react-toolbox/lib/button');

var _FormActionsBack = require('../classes/FormActionsBack');

var _FormActionsBack2 = _interopRequireDefault(_FormActionsBack);

var _cardactionsspaced = require('react-toolbox-addons/lib/cardactionsspaced');

var _ButtonGroup = require('react-toolbox-addons/lib/buttongroup/ButtonGroup');

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  ActionsBack react component
 * @returns {JSX}
 */
var ActionsBack = function ActionsBack(_ref) {
    var actions = _ref.actions;
    var back = actions.back;
    var cancel = actions.cancel;
    var finish = actions.finish;

    return _react2.default.createElement(
        _cardactionsspaced.CardActionsSpaced,
        { style: { marginTop: 20 } },
        _react2.default.createElement(_button.Button, back),
        _react2.default.createElement(
            _ButtonGroup2.default,
            null,
            _react2.default.createElement(_button.Button, cancel),
            _react2.default.createElement(_button.Button, finish)
        )
    );
};
ActionsBack.propTypes = {
    /**
     * actions <FormActionsBack>
     */
    actions: _react.PropTypes.instanceOf(_FormActionsBack2.default)
};

exports.default = ActionsBack;