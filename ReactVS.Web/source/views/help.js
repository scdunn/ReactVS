"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var HelpView = (function (_super) {
    __extends(HelpView, _super);
    function HelpView() {
        _super.apply(this, arguments);
    }
    HelpView.prototype.render = function () {
        return React.createElement("div", null, React.createElement("h1", null, "Help"));
    };
    return HelpView;
}(React.Component));
exports.HelpView = HelpView;
