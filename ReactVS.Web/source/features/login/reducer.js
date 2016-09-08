"use strict";
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
        case 'RECEIVE_STUDENTS':
            var gotStudentsAction = action;
            obj.items = action.data;
            return obj;
    }
    return state;
}
exports.studentReducer = studentReducer;
exports.default = studentReducer;
