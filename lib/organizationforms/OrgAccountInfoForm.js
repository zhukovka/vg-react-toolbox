'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _vgcomponentform = require('../vgcomponentform');

var _vgcomponentform2 = _interopRequireDefault(_vgcomponentform);

var _grid = require('react-toolbox-addons/lib/grid');

var _ActionsBack = require('../actions/ActionsBack');

var _ActionsBack2 = _interopRequireDefault(_ActionsBack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrgAccountInfoForm = function (_VGComponentForm) {
    _inherits(OrgAccountInfoForm, _VGComponentForm);

    function OrgAccountInfoForm(props) {
        _classCallCheck(this, OrgAccountInfoForm);

        var _this = _possibleConstructorReturn(this, (OrgAccountInfoForm.__proto__ || Object.getPrototypeOf(OrgAccountInfoForm)).call(this, props));

        var _this$props$info = _this.props.info,
            number = _this$props$info.number,
            information = _this$props$info.information,
            amount = _this$props$info.amount,
            cardNumber = _this$props$info.cardNumber;

        _this.state = _this.setInitialState([number, information, amount, cardNumber]);
        return _this;
    }

    _createClass(OrgAccountInfoForm, [{
        key: 'renderFormContent',
        value: function renderFormContent() {
            var _props$info = this.props.info,
                number = _props$info.number,
                information = _props$info.information,
                amount = _props$info.amount,
                cardNumber = _props$info.cardNumber;

            return _react2.default.createElement(
                'fieldset',
                null,
                _react2.default.createElement(
                    _grid.Row,
                    { expanded: true },
                    this.renderInputs([number, information, amount, cardNumber])
                ),
                _react2.default.createElement(_ActionsBack2.default, { actions: this.props.orgActions })
            );
        }
    }]);

    return OrgAccountInfoForm;
}(_vgcomponentform2.default);

OrgAccountInfoForm.propTypes = {
    info: _react.PropTypes.object,
    orgActions: _react.PropTypes.object
};
exports.default = OrgAccountInfoForm;