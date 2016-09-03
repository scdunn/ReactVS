"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_bootstrap_1 = require('react-bootstrap');
var LoginForm = (function (_super) {
    __extends(LoginForm, _super);
    function LoginForm() {
        _super.apply(this, arguments);
    }
    LoginForm.prototype.render = function () {
        return React.createElement("div", null, React.createElement(react_bootstrap_1.Form, {horizontal: true}, React.createElement(react_bootstrap_1.FormGroup, {controlId: "formHorizontalEmail"}, React.createElement(react_bootstrap_1.Col, {componentClass: "na", sm: 2}, "Email"), React.createElement(react_bootstrap_1.Col, {sm: 10}, React.createElement(react_bootstrap_1.FormControl, {type: "email", placeholder: "Email"}))), React.createElement(react_bootstrap_1.FormGroup, {controlId: "formHorizontalPassword"}, React.createElement(react_bootstrap_1.Col, {componentClass: "na", sm: 2}, "Password"), React.createElement(react_bootstrap_1.Col, {sm: 10}, React.createElement(react_bootstrap_1.FormControl, {type: "password", placeholder: "Password"}))), React.createElement(react_bootstrap_1.FormGroup, null, React.createElement(react_bootstrap_1.Col, {smOffset: 2, sm: 10}, React.createElement(react_bootstrap_1.Button, {type: "submit"}, "Sign in")))));
    };
    return LoginForm;
}(React.Component));
exports.LoginForm = LoginForm;
