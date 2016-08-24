"use strict";
var AccountInfo = (function () {
    function AccountInfo(number, information, amount, cardNumber) {
        this.number = number;
        this.information = information;
        this.amount = amount;
        this.cardNumber = cardNumber;
    }
    return AccountInfo;
}());
exports.__esModule = true;
exports["default"] = AccountInfo;
