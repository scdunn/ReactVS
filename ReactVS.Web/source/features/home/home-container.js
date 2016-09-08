"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_redux_1 = require('react-redux');
var react_bootstrap_1 = require('react-bootstrap');
var current = require('./index');
var mapStateToProps = function (state, ownProps) { return ({
    items: state.studentState.items,
    newName: state.studentState.newName,
    wasAdded: state.studentState.wasAdded
}); };
//functions to properties (called as this.props.[function])
var mapDispatchToProps = function (dispatch) { return ({
    addstudent: function (name) {
        dispatch(current.addStudent(name));
    },
    setName: function (name) {
        dispatch(current.setName(name));
    },
    fetchStudents: function () {
        dispatch(current.fetchStudents());
    },
}); };
var homeContainer = (function (_super) {
    __extends(homeContainer, _super);
    function homeContainer() {
        var _this = this;
        _super.apply(this, arguments);
        this._onAddStudent = function (event) { _this.props.addstudent(_this.props.newName); };
        this._onNewNameChange = function (event) { _this.props.setName(event.target.value); };
    }
    homeContainer.prototype.componentDidMount = function () {
        this.props.fetchStudents();
    };
    homeContainer.prototype.render = function () {
        var _a = this.props, items = _a.items, newName = _a.newName, wasAdded = _a.wasAdded, label = _a.label;
        console.log('hre');
        var studentList = items.map(function (student, i) {
            return (React.createElement(react_bootstrap_1.ListGroupItem, {key: i}, student.FirstName, " ", student.LastName));
        });
        return React.createElement("div", null, React.createElement(react_bootstrap_1.FormGroup, {controlId: "newName"}, React.createElement(react_bootstrap_1.InputGroup, null, React.createElement(react_bootstrap_1.InputGroup.Button, null, React.createElement(react_bootstrap_1.Button, {bsStyle: "primary", ref: 'increment', onClick: this._onAddStudent, disabled: !newName}, "Add Student")), React.createElement(react_bootstrap_1.FormControl, {type: "text", value: newName, onChange: this._onNewNameChange}))), wasAdded ? React.createElement(react_bootstrap_1.Alert, {bsStyle: "success"}, React.createElement("strong", null, "New Student was added.")) : null, React.createElement(react_bootstrap_1.ListGroup, null, studentList));
    };
    return homeContainer;
}(React.Component));
exports.HomeContainer = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(homeContainer);
