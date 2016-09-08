"use strict";
var Redux = require('redux');
var redux_thunk_1 = require('redux-thunk');
//reducers
var home_1 = require('../features/home');
var about_1 = require('../features/about');
var Ads = require('../features/ads');
var reducers = Redux.combineReducers({
    studentState: home_1.studentReducer,
    aboutState: about_1.aboutReducer,
    adsState: Ads.reducer
});
var store = Redux.createStore(reducers, Redux.applyMiddleware(redux_thunk_1.default));
exports.default = store;
