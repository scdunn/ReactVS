"use strict";
//libraries
var axios = require('axios');
var config_1 = require('../../shared/config');
//action Types
exports.RECEIVE_STUDENTS_ACTION = 'RECEIVE_STUDENTS';
//actions
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
exports.setName = function (name) { return ({
    type: 'SET_NAME',
    data: { name: name },
}); };
//reducers
var initialState = {
    items: [], newName: '', wasAdded: false
};
function studentReducer(state, action) {
    if (state === void 0) { state = initialState; }
    var obj = JSON.parse(JSON.stringify(state));
    console.log(action.type);
    switch (action.type) {
        case 'STUDENT_ADDED':
            var addStudentAction = action;
            obj.newName = '';
            obj.wasAdded = true;
            return obj;
        case 'NEW_NAME':
            var newNameAction = action;
            obj.newName = newNameAction.data.name;
            obj.wasAdded = !obj.newName;
            return obj;
        case exports.RECEIVE_STUDENTS_ACTION:
            var gotStudentsAction = action;
            obj.items = action.data;
            return obj;
    }
    return state;
}
exports.studentReducer = studentReducer;
exports.default = studentReducer;
