"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//third-party imports
var React = require('react');
var react_redux_1 = require('react-redux');
var view_1 = require('./view');
var current = require('./index');
//stateful container component
exports.Container = react_redux_1.connect(function (state, ownProps) { return ({
    items: state.adsState.items
}); }, function (dispatch) { return ({
    fetchAds: function () { dispatch(current.FetchAds()); },
}); })((function (_super) {
    __extends(container, _super);
    function container() {
        _super.apply(this, arguments);
    }
    container.prototype.componentDidMount = function () {
        //load stuff
        this.props.fetchAds();
    };
    container.prototype.render = function () {
        return React.createElement("div", null, React.createElement(view_1.View, {items: this.props.items}));
    };
    return container;
}(React.Component)));
