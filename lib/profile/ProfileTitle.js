'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _grid = require('react-toolbox-addons/lib/grid');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProfileTitle = function ProfileTitle(_ref) {
    var children = _ref.children;


    var renderChildren = function renderChildren() {
        return _react.Children.map(children, function (item) {
            return _react2.default.createElement(
                _grid.Col,
                { shrink: true },
                item
            );
        });
    };
    return _react2.default.createElement(
        _grid.Row,
        { align: 'middle', expanded: true },
        renderChildren()
    );
};

ProfileTitle.propTypes = {
    children: _react.PropTypes.any
};

exports.default = ProfileTitle;