"use strict";
exports.aboutLoaded = function (json) { return ({
    type: 'ABOUT_LOADED',
    data: json,
}); };
//reducers
var initialState = {
    message: 'My Message'
};
function aboutReducer(state, action) {
    if (state === void 0) { state = initialState; }
    return state;
}
exports.aboutReducer = aboutReducer;
exports.default = aboutReducer;
