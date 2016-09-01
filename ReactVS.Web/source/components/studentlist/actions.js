"use strict";
var axios = require('axios');
var config_1 = require('../../shared/config');
function fetchStudents() {
    return function (dispatch) {
        return axios.get(config_1.config.baseApiUrl + '/api/students')
            .then(function (response) {
            dispatch(exports.receiveStudents(response.data));
        });
    };
}
exports.fetchStudents = fetchStudents;
function addStudent(name) {
    return function (dispatch) {
        var aryName = name.split(' ');
        return axios.post(config_1.config.baseApiUrl + '/api/students', { "FirstName": aryName[0], "LastName": aryName[1] })
            .then(function (response) {
            dispatch(fetchStudents());
            dispatch(exports.studentAdded());
        });
    };
}
exports.addStudent = addStudent;
exports.receiveStudents = function (json) { return ({
    type: 'RECEIVE_STUDENTS',
    data: json,
}); };
exports.studentAdded = function () { return ({
    type: 'STUDENT_ADDED',
    data: {},
}); };
exports.newName = function (name) { return ({
    type: 'NEW_NAME',
    data: { name: name },
}); };
