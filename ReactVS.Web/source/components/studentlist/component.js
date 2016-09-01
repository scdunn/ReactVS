"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_redux_1 = require('react-redux');
var actions_1 = require('./actions');
var react_bootstrap_1 = require('react-bootstrap');
var mapStateToProps = function (state, ownProps) { return ({
    students: state.students,
}); };
var mapDispatchToProps = function (dispatch) { return ({
    addstudent: function (name) {
        dispatch(actions_1.addStudent(name));
    },
    newName: function (name) {
        dispatch(actions_1.newName(name));
    },
    fetchStudents: function () {
        dispatch(actions_1.fetchStudents());
    },
}); };
var StudentsComponent = (function (_super) {
    __extends(StudentsComponent, _super);
    function StudentsComponent() {
        var _this = this;
        _super.apply(this, arguments);
        this._onAddStudent = function (event) { _this.props.addstudent(_this.props.students.newName); };
        this._onNewNameChange = function (event) { _this.props.newName(event.target.value); };
    }
    StudentsComponent.prototype.componentDidMount = function () {
        this.props.fetchStudents();
    };
    StudentsComponent.prototype.render = function () {
        var _a = this.props, students = _a.students, label = _a.label;
        console.log('hre');
        var studentList = students.items.map(function (student, i) {
            return (React.createElement(react_bootstrap_1.ListGroupItem, {key: i}, student.FirstName, " ", student.LastName));
        });
        return React.createElement("div", null, React.createElement(react_bootstrap_1.FormGroup, {controlId: "newName"}, React.createElement(react_bootstrap_1.InputGroup, null, React.createElement(react_bootstrap_1.InputGroup.Button, null, React.createElement(react_bootstrap_1.Button, {bsStyle: "primary", ref: 'increment', onClick: this._onAddStudent, disabled: !students.newName}, "Add Student")), React.createElement(react_bootstrap_1.FormControl, {type: "text", value: students.newName, onChange: this._onNewNameChange}))), students.wasAdded ? React.createElement(react_bootstrap_1.Alert, {bsStyle: "success"}, React.createElement("strong", null, "New Student was added.")) : null, React.createElement(react_bootstrap_1.ListGroup, null, studentList));
    };
    return StudentsComponent;
}(React.Component));
var HeaderComponent = (function (_super) {
    __extends(HeaderComponent, _super);
    function HeaderComponent() {
        _super.apply(this, arguments);
    }
    HeaderComponent.prototype.render = function () {
        return React.createElement("div", null, React.createElement("span", null, "Total Students", this.props.students.items.length));
    };
    return HeaderComponent;
}(React.Component));
exports.Students = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(StudentsComponent);
exports.Header = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
