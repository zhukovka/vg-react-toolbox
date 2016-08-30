'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _stepslist = require('react-toolbox-addons/lib/stepslist');

var _stepslist2 = _interopRequireDefault(_stepslist);

var _card = require('react-toolbox/lib/card');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrgFormSteps = function OrgFormSteps(props) {
    return _react2.default.createElement(
        _card.Card,
        null,
        _react2.default.createElement(
            'div',
            { style: { padding: '20px' } },
            _react2.default.createElement(_stepslist2.default, { steps: props.steps })
        )
    );
};

OrgFormSteps.propTypes = {
    steps: _react.PropTypes.arrayOf(_react.PropTypes.shape({
        name: _react.PropTypes.string,
        active: _react.PropTypes.bool,
        done: _react.PropTypes.bool
    }))
};

exports.default = OrgFormSteps;