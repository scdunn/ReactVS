"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_bootstrap_1 = require('react-bootstrap');
var View = (function (_super) {
    __extends(View, _super);
    function View() {
        _super.apply(this, arguments);
    }
    View.prototype.render = function () {
        var ads = this.props.items.map(function (ad, i) {
            return (React.createElement(react_bootstrap_1.ListGroupItem, {key: i}, ad.title, " ", ad.price));
        });
        return React.createElement("div", null, React.createElement("h1", null, "Classified Ads"), React.createElement(react_bootstrap_1.ListGroup, null, ads));
    };
    return View;
}(React.Component));
exports.View = View;
