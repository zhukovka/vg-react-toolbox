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

var _grid = require('react-toolbox-addons/lib/grid');

var _uploadZone = require('react-toolbox-addons/lib/upload-zone');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrgMainInfoForm = function (_VGComponentForm) {
    _inherits(OrgMainInfoForm, _VGComponentForm);

    function OrgMainInfoForm(props) {
        _classCallCheck(this, OrgMainInfoForm);

        var _this = _possibleConstructorReturn(this, (OrgMainInfoForm.__proto__ || Object.getPrototypeOf(OrgMainInfoForm)).call(this, props));

        var info = _this.props.info;
        var _info$address = info.address;
        var street = _info$address.street;
        var city = _info$address.city;
        var state = _info$address.state;
        var postcode = _info$address.postcode;
        var country = _info$address.country;

        var inputs = [info.name, info.id, street, city, state, postcode, country];
        _this.state = _this.setInitialState(inputs);
        return _this;
    }

    _createClass(OrgMainInfoForm, [{
        key: 'renderFormContent',
        value: function renderFormContent() {
            var _props = this.props;
            var info = _props.info;
            var orgActions = _props.orgActions;
            var uploadType = _props.uploadType;
            var requirements = _props.requirements;
            var _info$address2 = info.address;
            var street = _info$address2.street;
            var city = _info$address2.city;
            var state = _info$address2.state;
            var postcode = _info$address2.postcode;
            var country = _info$address2.country;

            return _react2.default.createElement(
                'fieldset',
                null,
                _react2.default.createElement(_uploadZone.Upload, { onUpload: this.props.onUpload, uploadType: uploadType, requirements: requirements }),
                _react2.default.createElement(
                    _grid.Row,
                    { expanded: true },
                    this.renderInputs([info.name, info.id])
                ),
                _react2.default.createElement(
                    _grid.Row,
                    { expanded: true },
                    _react2.default.createElement(
                        _grid.Col,
                        { small: 12, medium: 12, large: 12 },
                        'Address'
                    )
                ),
                _react2.default.createElement(
                    _grid.Row,
                    { expanded: true },
                    this.renderInputs([street, city])
                ),
                _react2.default.createElement(
                    _grid.Row,
                    { expanded: true },
                    this.renderInput(state, { small: 6, medium: 4, large: 4 }),
                    this.renderInput(postcode, { small: 6, medium: 2, large: 2 }),
                    this.renderInput(country)
                ),
                _react2.default.createElement(
                    _cardactionsright.CardActionsRight,
                    null,
                    this.renderCardActionsRight([orgActions.cancel, orgActions.finish])
                )
            );
        }
    }]);

    return OrgMainInfoForm;
}(_vgcomponentform2.default);

OrgMainInfoForm.propTypes = {
    info: _react.PropTypes.object,
    onUpload: _react.PropTypes.func,
    orgActions: _react.PropTypes.object,
    uploadType: _react.PropTypes.string.isRequired,
    requirements: _react.PropTypes.shape({
        min: _react.PropTypes.objectOf({
            width: _react.PropTypes.number.isRequired,
            height: _react.PropTypes.number.isRequired
        }),
        max: _react.PropTypes.objectOf({
            width: _react.PropTypes.number.isRequired,
            height: _react.PropTypes.number.isRequired
        })
    })
};
exports.default = OrgMainInfoForm;