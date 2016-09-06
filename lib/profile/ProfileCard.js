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
            var editmode = _props.editmode;

            var buttons = [{
                icon: 'mode_edit',
                onClick: function onClick(e) {
                    return onEdit(e);
                }
            }];

            if (editmode) {
                buttons = [{
                    icon: 'check',
                    onClick: function onClick(e) {
                        return onConfirm(e);
                    }
                }, {
                    icon: 'close',
                    onClick: function onClick(e) {
                        return onClose(e);
                    }
                }];
            }
            return _react2.default.createElement(_cardAddons.CardTitleButtons, { buttons: buttons });
        }
    }, {
        key: 'renderChildren',
        value: function renderChildren(fields) {
            var sizes = arguments.length <= 1 || arguments[1] === undefined ? { small: 12, medium: 6, large: 6 } : arguments[1];

            return fields.map(function (field, index) {
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

            var size = 12 / (cols || 2);
            var children = _react.Children.toArray(this.props.children);

            return _react2.default.createElement(
                _card.Card,
                null,
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
                )
            );
        }
    }]);

    return ProfileCard;
}(_react.Component);

ProfileCard.propTypes = {
    children: _react.PropTypes.any,
    /**
     * set the Card to edit mode
     * Boolean editmode
     */
    editmode: _react.PropTypes.bool,
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
    cols: _react.PropTypes.oneOf([1, 2, 3, 4, 6])
};
exports.default = ProfileCard;