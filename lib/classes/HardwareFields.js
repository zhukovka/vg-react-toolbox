"use strict";
var HardwareFields = (function () {
    function HardwareFields(type, manufacturer, model, uid, port) {
        this.type = type;
        this.manufacturer = manufacturer;
        this.model = model;
        this.uid = uid;
        this.port = port;
    }
    return HardwareFields;
}());
exports.__esModule = true;
exports["default"] = HardwareFields;
