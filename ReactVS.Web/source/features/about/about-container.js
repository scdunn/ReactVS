"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_redux_1 = require('react-redux');
var about_view_1 = require('./about-view');
var mapStateToProps = function (state, ownProps) { return ({
    message: state.aboutState.message
}); };
//functions to properties (called as this.props.[function])
var mapDispatchToProps = function (dispatch) { return ({
    aboutLoaded: function () {
    },
}); };
var aboutContainer = (function (_super) {
    __extends(aboutContainer, _super);
    function aboutContainer() {
        _super.apply(this, arguments);
    }
    aboutContainer.prototype.componentDidMount = function () {
        //load stuff
    };
    aboutContainer.prototype.render = function () {
        return React.createElement("div", null, React.createElement(about_view_1.AboutView, {message: this.props.message}));
    };
    return aboutContainer;
}(React.Component));
exports.AboutContainer = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(aboutContainer);
