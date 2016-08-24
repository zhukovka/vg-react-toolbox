"use strict";
var HardWare = (function () {
    function HardWare(type, manufacturer, model, uid) {
        this.type = type;
        this.manufacturer = manufacturer;
        this.model = model;
        this.uid = uid;
    }
    return HardWare;
}());
exports.__esModule = true;
exports["default"] = HardWare;
