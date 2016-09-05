"use strict";
var React = require('react'); // tslint:disable-line
var ReactDOM = require('react-dom');
var Redux = require('redux');
var react_redux_1 = require('react-redux');
var redux_1 = require('redux');
var react_router_1 = require('react-router');
var redux_thunk_1 = require('redux-thunk');
var index_1 = require('./components/studentlist/index');
var home_1 = require('./views/home');
var about_1 = require('./views/about');
var help_1 = require('./views/help');
var login_1 = require('./views/login');
var component_1 = require('./components/app/component');
var reducers = redux_1.combineReducers({
    students: index_1.students,
});
var store = Redux.createStore(reducers, redux_1.applyMiddleware(redux_thunk_1.default));
// Commented out ("let HTML app be HTML app!")
window.addEventListener('DOMContentLoaded', function () {
    var rootEl = document.getElementById('root');
    if (rootEl)
        ReactDOM.render(React.createElement(react_redux_1.Provider, {store: store}, React.createElement(react_router_1.Router, {history: react_router_1.browserHistory}, React.createElement(react_router_1.Route, {path: "/", component: component_1.App}, React.createElement(react_router_1.IndexRoute, {component: home_1.HomeView}), React.createElement(react_router_1.Route, {path: "/about", component: about_1.AboutView}), React.createElement(react_router_1.Route, {path: "/help", component: help_1.HelpView}), React.createElement(react_router_1.Route, {path: "/login", component: login_1.LoginView})))), rootEl);
});
