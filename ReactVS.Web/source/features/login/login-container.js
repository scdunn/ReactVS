"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var login_view_1 = require('./login-view');
var LoginContainer = (function (_super) {
    __extends(LoginContainer, _super);
    function LoginContainer() {
        _super.apply(this, arguments);
    }
    LoginContainer.prototype.render = function () {
        return React.createElement("div", null, React.createElement("h1", null, "Login"), React.createElement(login_view_1.LoginForm, null), this.props.children);
    };
    return LoginContainer;
}(React.Component));
exports.LoginContainer = LoginContainer;
