import * as React from 'react'
import * as redux from 'redux'
import { connect } from 'react-redux'
import { Promise } from 'es6-promise'

import { addStudent, newName, receiveStudents, fetchStudents } from './actions'
import { Store, IStudent } from '../../shared/store'

import { Button, ListGroup, ListGroupItem, FormControl, InputGroup, FormGroup, Alert } from 'react-bootstrap'

interface OwnProps {
  label: string
}

interface ConnectedState {
    students: { items:IStudent[], newName:string, wasAdded:boolean }
}

interface ConnectedDispatch {
    addstudent: (name:string) => void
    newName: (name: string) => void
    fetchStudents: () => void

  }

const mapStateToProps = (state: Store.All, ownProps: OwnProps): ConnectedState => ({
    students: state.students,
})

const mapDispatchToProps = (dispatch: redux.Dispatch<Store.All>): ConnectedDispatch => ({
  addstudent: (name:string) => {
      dispatch(addStudent(name))
  },
  newName: (name: string) => {
      dispatch(newName(name))
  },
  fetchStudents: () => {
      dispatch(fetchStudents())
  },
  
})

class StudentsComponent extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, {}> {

  _onAddStudent = (event:any) => {   this.props.addstudent(this.props.students.newName) }
  _onNewNameChange = (event:any) => { this.props.newName(event.target.value)  }

  componentDidMount() {
      this.props.fetchStudents();
  }

  render () {
      const { students, label } = this.props
      console.log('hre');
      var studentList = students.items.map(function (student, i) {
        return (
            <ListGroupItem key={i}>{student.FirstName} {student.LastName}</ListGroupItem>
        );
    });

    return <div>
        <FormGroup controlId="newName">
            <InputGroup>
                <InputGroup.Button>
                    <Button bsStyle="primary" ref='increment' onClick={this._onAddStudent} disabled={!students.newName}>Add Student</Button>
                </InputGroup.Button>
                <FormControl type="text" value={students.newName}  onChange={this._onNewNameChange}/>
            </InputGroup>
        </FormGroup>
        {students.wasAdded ? <Alert bsStyle="success"><strong>New Student was added.</strong></Alert>:null}
      <ListGroup>
            {studentList}
      </ListGroup>

      
    </div>
  }
}

class HeaderComponent extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, {}> {
    
    render() {
        return <div>
            <span>Total Students{this.props.students.items.length}</span>
        </div>
    }
}




export const Students: React.ComponentClass<OwnProps> = connect(mapStateToProps, mapDispatchToProps)(StudentsComponent)
export const Header: React.ComponentClass<OwnProps> = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent)
