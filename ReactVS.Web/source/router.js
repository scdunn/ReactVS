"use strict";
var React = require('react');
var react_router_1 = require('react-router');
//pages
var home_container_1 = require('./features/home/home-container');
var about_container_1 = require('./features/about/about-container');
var container_1 = require('./features/ads/container');
var login_container_1 = require('./features/login/login-container');
var component_1 = require('./features/app/component');
exports.default = (React.createElement(react_router_1.Router, {history: react_router_1.browserHistory}, React.createElement(react_router_1.Route, {path: "/app", component: component_1.App}, React.createElement(react_router_1.IndexRoute, {component: home_container_1.HomeContainer}), React.createElement(react_router_1.Route, {path: "/app/about", component: about_container_1.AboutContainer}), React.createElement(react_router_1.Route, {path: "/app/ads", component: container_1.Container}), React.createElement(react_router_1.Route, {path: "/app/login", component: login_container_1.LoginContainer}))));
