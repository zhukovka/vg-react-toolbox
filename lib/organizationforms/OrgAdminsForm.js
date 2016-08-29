'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _vgcomponentform = require('../vgcomponentform');

var _vgcomponentform2 = _interopRequireDefault(_vgcomponentform);

var _cardactionsspaced = require('react-toolbox-addons/lib/cardactionsspaced');

var _ButtonGroup = require('react-toolbox-addons/lib/buttongroup/ButtonGroup');

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

var _button = require('react-toolbox/lib/button');

var _grid = require('react-toolbox-addons/lib/grid');

var _Admins = require('../classes/Admins');

var _Admins2 = _interopRequireDefault(_Admins);

var _FormActionsBack = require('../classes/FormActionsBack');

var _FormActionsBack2 = _interopRequireDefault(_FormActionsBack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrgAdminsForm = function (_VGComponentForm) {
    _inherits(OrgAdminsForm, _VGComponentForm);

    function OrgAdminsForm(props) {
        _classCallCheck(this, OrgAdminsForm);

        var _this = _possibleConstructorReturn(this, (OrgAdminsForm.__proto__ || Object.getPrototypeOf(OrgAdminsForm)).call(this, props));

        var _this$props$info = _this.props.info;
        var firstname = _this$props$info.firstname;
        var lastname = _this$props$info.lastname;
        var email = _this$props$info.email;
        var phone = _this$props$info.phone;
        var title = _this$props$info.title;
        var notes = _this$props$info.notes;

        _this.state = _this.setInitialState([firstname, lastname, email, phone, title, notes]);
        return _this;
    }

    _createClass(OrgAdminsForm, [{
        key: 'renderFormContent',
        value: function renderFormContent() {
            var _props$info = this.props.info;
            var firstname = _props$info.firstname;
            var lastname = _props$info.lastname;
            var email = _props$info.email;
            var phone = _props$info.phone;
            var title = _props$info.title;
            var notes = _props$info.notes;
            var _props$orgActions = this.props.orgActions;
            var back = _props$orgActions.back;
            var cancel = _props$orgActions.cancel;
            var finish = _props$orgActions.finish;

            return _react2.default.createElement(
                'fieldset',
                null,
                _react2.default.createElement(
                    _grid.Row,
                    { expanded: true },
                    this.renderInputs([firstname, lastname, email, phone])
                ),
                _react2.default.createElement(
                    _grid.Row,
                    { expanded: true },
                    this.renderInput(title, { small: 12, medium: 12, large: 12 }),
                    this.renderInput(notes, { small: 12, medium: 12, large: 12 })
                ),
                _react2.default.createElement(
                    _cardactionsspaced.CardActionsSpaced,
                    null,
                    _react2.default.createElement(_button.Button, back),
                    _react2.default.createElement(
                        _ButtonGroup2.default,
                        null,
                        _react2.default.createElement(_button.Button, cancel),
                        _react2.default.createElement(_button.Button, finish)
                    )
                )
            );
        }
    }]);

    return OrgAdminsForm;
}(_vgcomponentform2.default);

OrgAdminsForm.propTypes = {
    info: _react.PropTypes.instanceOf(_Admins2.default),
    orgActions: _react.PropTypes.instanceOf(_FormActionsBack2.default)
};
exports.default = OrgAdminsForm;