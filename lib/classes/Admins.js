"use strict";
var Admins = (function () {
    function Admins(firstname, lastname, email, phone, title, notes) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.phone = phone;
        this.title = title;
        this.notes = notes;
    }
    return Admins;
}());
exports.__esModule = true;
exports["default"] = Admins;
