'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _grid = require('react-toolbox-addons/lib/grid');

var _card = require('react-toolbox/lib/card');

var _cardAddons = require('react-toolbox-addons/lib/card-addons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * ProfileCard
 * see example https://github.com/zhukovka/vg-react-toolbox/blob/master/components/profile/example.md
 */
var ProfileCard = function (_Component) {
    _inherits(ProfileCard, _Component);

    function ProfileCard(props) {
        _classCallCheck(this, ProfileCard);

        return _possibleConstructorReturn(this, (ProfileCard.__proto__ || Object.getPrototypeOf(ProfileCard)).call(this, props));
    }

    _createClass(ProfileCard, [{
        key: 'renderButtons',
        value: function renderButtons() {
            var _props = this.props;
            var onEdit = _props.onEdit;
            var onClose = _props.onClose;
            var onConfirm = _props.onConfirm;
            var onCancel = _props.onCancel;
            var editmode = _props.editmode;
            var editable = _props.editable;
            var hasError = _props.hasError;

            var buttons = [];
            if (editable) {
                buttons.push({
                    icon: 'mode_edit',
                    onClick: function onClick(e) {
                        return onEdit(e);
                    }
                });
                if (onCancel) {
                    buttons.unshift({
                        icon: 'not_interested',
                        onClick: function onClick(e) {
                            return onCancel(e);
                        }
                    });
                }

                if (editmode) {
                    buttons = [];
                    if (!hasError) {
                        buttons.push({
                            icon: 'check',
                            onClick: function onClick(e) {
                                return onConfirm(e);
                            }
                        });
                    }
                    buttons.push({
                        icon: 'close',
                        onClick: function onClick(e) {
                            return onClose(e);
                        }
                    });
                }
            }
            return _react2.default.createElement(_cardAddons.CardTitleButtons, { buttons: buttons });
        }
    }, {
        key: 'renderChildren',
        value: function renderChildren(fields) {
            var sizes = arguments.length <= 1 || arguments[1] === undefined ? { small: 12, medium: 6, large: 6 } : arguments[1];

            return fields.map(function (field, index) {
                if (index === fields.length - 1) {
                    return _react2.default.createElement(
                        _grid.Col,
                        { key: 'col-' + index },
                        field
                    );
                }
                return _react2.default.createElement(
                    _grid.Col,
                    _extends({ key: 'col-' + index }, sizes),
                    field
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props;
            var primary = _props2.primary;
            var cols = _props2.cols;
            var style = _props2.style;
            var actions = _props2.actions;
            var id = _props2.id;

            var size = 12 / (cols || 2);
            var children = _react.Children.toArray(this.props.children);
            var cardStyle = Object.assign({ overflow: 'visible' }, style);
            return _react2.default.createElement(
                _card.Card,
                { style: cardStyle, id: id },
                _react2.default.createElement(
                    _cardAddons.CardTitleStyled,
                    { primary: primary },
                    this.renderButtons(),
                    children[0]
                ),
                _react2.default.createElement(
                    _card.CardText,
                    null,
                    _react2.default.createElement(
                        _grid.Row,
                        { expanded: true },
                        this.renderChildren(children.slice(1), { small: 12, medium: size, large: size })
                    )
                ),
                actions
            );
        }
    }]);

    return ProfileCard;
}(_react.Component);

ProfileCard.propTypes = {
    actions: _react.PropTypes.element,
    children: _react.PropTypes.any,
    /**
     * set the Card to edit mode
     * Boolean editable
     */
    editable: _react.PropTypes.bool,
    /**
     * set the Card to edit mode
     * Boolean editmode
     */
    editmode: _react.PropTypes.bool,
    id: _react.PropTypes.string,
    /**
     * Boolean hasError
     */
    hasError: _react.PropTypes.bool,
    /**
     * event handler for cancel icon click
     * Callback1<DOMEvent> onCancel
     */
    onCancel: _react.PropTypes.func,
    /**
     * event handler for close icon click
     * Callback1<DOMEvent> onClose
     */
    onClose: _react.PropTypes.func,
    /**
     * event handler for confirm(check) icon click
     * Callback1<DOMEvent> onConfirm
     */
    onConfirm: _react.PropTypes.func,
    /**
     * event handler for edit(pencil) icon click
     * Callback1<DOMEvent> onEdit
     */
    onEdit: _react.PropTypes.func,
    /**
     * set to make header color primary
     * Boolean primary
     */
    primary: _react.PropTypes.bool,
    /**
     * set number of columns to render
     * possible values 1, 2, 3, 4, 6
     * @default 2
     * int cols
     */
    cols: _react.PropTypes.oneOf([1, 2, 3, 4, 6]),
    /**
     * style declaration for the card
     * Map<String, Srting> style
     */
    style: _react.PropTypes.object
};
ProfileCard.defaultProps = {
    editable: true
};
exports.default = ProfileCard;