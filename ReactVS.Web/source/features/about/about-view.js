"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var AboutView = (function (_super) {
    __extends(AboutView, _super);
    function AboutView() {
        _super.apply(this, arguments);
    }
    AboutView.prototype.render = function () {
        return React.createElement("div", null, React.createElement("h1", null, "About Us "), this.props.message);
    };
    return AboutView;
}(React.Component));
exports.AboutView = AboutView;
