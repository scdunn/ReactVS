"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var index_1 = require('../components/studentlist/index');
var HomeView = (function (_super) {
    __extends(HomeView, _super);
    function HomeView() {
        _super.apply(this, arguments);
    }
    HomeView.prototype.render = function () {
        return React.createElement("div", null, React.createElement("h1", null, "Home Run"), React.createElement(index_1.Students, {label: ''}));
    };
    return HomeView;
}(React.Component));
exports.HomeView = HomeView;
