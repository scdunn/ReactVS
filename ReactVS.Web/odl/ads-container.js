"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_redux_1 = require('react-redux');
var ads_view_1 = require('./ads-view');
exports.Container = react_redux_1.connect(function (state, ownProps) { return ({
    items: state.adsState.items
}); }, function (dispatch) { return ({
    adsLoaded: function () {
    },
}); })((function (_super) {
    __extends(container, _super);
    function container() {
        _super.apply(this, arguments);
    }
    container.prototype.componentDidMount = function () {
        //load stuff
    };
    container.prototype.render = function () {
        return React.createElement("div", null, React.createElement(ads_view_1.View, {items: this.props.items}));
    };
    return container;
}(React.Component)));
