"use strict";
var axios = require('axios');
var config_1 = require('../../shared/config');
function FetchAds() {
    return function (dispatch) {
        return axios.get(config_1.config.baseApiUrl + '/api/classifiedads')
            .then(function (response) {
            dispatch(exports.adsReceived(response.data));
        });
    };
}
exports.FetchAds = FetchAds;
exports.adsReceived = function (json) { return ({
    type: 'ADS_RECEIVED',
    data: json,
}); };
var initialState = {
    items: [{ 'title': 'Loading...', 'price': 0 }]
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    var obj = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case "ADS_RECEIVED":
            obj.items = action.data;
            return obj;
    }
    //return default state
    return state;
}
exports.reducer = reducer;
