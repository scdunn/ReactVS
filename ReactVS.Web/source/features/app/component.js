"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_bootstrap_1 = require('react-bootstrap');
var react_router_1 = require('react-router');
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        _super.apply(this, arguments);
    }
    App.prototype.handleSelect = function (selectedKey) {
        react_router_1.browserHistory.push(selectedKey);
    };
    App.prototype.render = function () {
        return React.createElement("div", null, React.createElement(react_bootstrap_1.Navbar, null, React.createElement(react_bootstrap_1.Navbar.Header, null, React.createElement(react_bootstrap_1.Navbar.Brand, null, React.createElement(react_router_1.Link, {to: "/about"}, "Classified Ads"))), React.createElement(react_bootstrap_1.Nav, {onSelect: this.handleSelect}, React.createElement(react_bootstrap_1.NavItem, {eventKey: '/app'}, "Home"), React.createElement(react_bootstrap_1.NavItem, {eventKey: '/app/about'}, "About"), React.createElement(react_bootstrap_1.NavItem, {eventKey: '/app/ads'}, "Ads"), React.createElement(react_bootstrap_1.NavItem, {eventKey: '/app/login'}, "Login"))), this.props.children);
    };
    return App;
}(React.Component));
exports.App = App;
