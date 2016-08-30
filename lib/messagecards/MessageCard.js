'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _card = require('react-toolbox/lib/card');

var _Logo = require('../logo/Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _cardAddons = require('react-toolbox-addons/lib/card-addons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  MessageCard
 *  see example in example.md (https://github.com/zhukovka/vg-react-toolbox/blob/master/components/messagecards/example.md)
 */
var MessageCard = function MessageCard(_ref) {
    var image = _ref.image;
    var message = _ref.message;
    var title = _ref.title;
    var children = _ref.children;

    return _react2.default.createElement(
        _card.Card,
        null,
        _react2.default.createElement(
            _cardAddons.CardMediaPrimary,
            null,
            _react2.default.createElement(
                'div',
                { style: { margin: '5rem 0' } },
                _react2.default.createElement(_Logo2.default, { image: image })
            )
        ),
        _react2.default.createElement(
            _card.CardText,
            { style: { textAlign: 'center' } },
            _react2.default.createElement(
                'h3',
                null,
                title
            ),
            _react2.default.createElement(
                'h5',
                null,
                message
            )
        ),
        children
    );
};

MessageCard.propTypes = {
    children: _react.PropTypes.any,
    /**
     * url to use as the logo
     * <String> image
     */
    image: _react.PropTypes.string,
    /**
     * message to show as a card text
     * <String> message
     */
    message: _react.PropTypes.string,
    /**
     * card title
     * <String> title
     */
    title: _react.PropTypes.string
};

exports.default = MessageCard;