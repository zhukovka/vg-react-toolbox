'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _vgcomponentform = require('../vgcomponentform');

var _vgcomponentform2 = _interopRequireDefault(_vgcomponentform);

var _cardactionsright = require('react-toolbox-addons/lib/cardactionsright');

var _button = require('react-toolbox/lib/button');

var _grid = require('react-toolbox-addons/lib/grid');

var _HardwareFields = require('../classes/HardwareFields');

var _HardwareFields2 = _interopRequireDefault(_HardwareFields);

var _FormActions = require('../classes/FormActions');

var _FormActions2 = _interopRequireDefault(_FormActions);

var _uploadZone = require('react-toolbox-addons/lib/upload-zone');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HardWareForm = function (_VGComponentForm) {
    _inherits(HardWareForm, _VGComponentForm);

    function HardWareForm(props) {
        _classCallCheck(this, HardWareForm);

        var _this = _possibleConstructorReturn(this, (HardWareForm.__proto__ || Object.getPrototypeOf(HardWareForm)).call(this, props));

        var _this$props$info = _this.props.info;
        var type = _this$props$info.type;
        var manufacturer = _this$props$info.manufacturer;
        var model = _this$props$info.model;
        var uid = _this$props$info.uid;

        _this.state = _this.setInitialState([type, manufacturer, model, uid]);
        return _this;
    }
    /**
     * @type {{hardwareActions: Requireable<any>, info: Requireable<any>, onUpload: Requireable<any>}}
     */


    _createClass(HardWareForm, [{
        key: 'renderFormContent',
        value: function renderFormContent() {
            var _props$info = this.props.info;
            var type = _props$info.type;
            var manufacturer = _props$info.manufacturer;
            var model = _props$info.model;
            var uid = _props$info.uid;
            var _props$hardwareAction = this.props.hardwareActions;
            var cancel = _props$hardwareAction.cancel;
            var finish = _props$hardwareAction.finish;

            return _react2.default.createElement(
                'fieldset',
                null,
                _react2.default.createElement(_uploadZone.Upload, { onUpload: this.props.onUpload }),
                _react2.default.createElement(
                    _grid.Row,
                    { expanded: true },
                    this.renderDropDowns([type, manufacturer, model]),
                    this.renderInput(uid)
                ),
                _react2.default.createElement(
                    _cardactionsright.CardActionsRight,
                    null,
                    _react2.default.createElement(_button.Button, cancel),
                    _react2.default.createElement(_button.Button, finish)
                )
            );
        }
    }]);

    return HardWareForm;
}(_vgcomponentform2.default);

HardWareForm.propTypes = {
    hardwareActions: _react.PropTypes.instanceOf(_FormActions2.default),
    info: _react.PropTypes.instanceOf(_HardwareFields2.default),
    onUpload: _react.PropTypes.func
};
exports.default = HardWareForm;