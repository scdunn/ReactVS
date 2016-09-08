import * as React from 'react'
import * as redux from 'redux'
import { connect } from 'react-redux'
import { Promise } from 'es6-promise'

import { Store, IStudent } from '../../shared/store'

import { Button, ListGroup, ListGroupItem, FormControl, InputGroup, FormGroup, Alert } from 'react-bootstrap'

import * as current from './index'

interface OwnProps {
  label: string
}

interface ConnectedState {
    items:IStudent[], newName:string, wasAdded:boolean
}

interface ConnectedDispatch {
    addstudent: (name:string) => void
    setName: (name: string) => void
    fetchStudents: () => void

  }

const mapStateToProps = (state: Store.All, ownProps: OwnProps): ConnectedState => ({
    items: state.studentState.items,
    newName: state.studentState.newName,
    wasAdded: state.studentState.wasAdded
})

//functions to properties (called as this.props.[function])
const mapDispatchToProps = (dispatch: redux.Dispatch<Store.All>): ConnectedDispatch => ({
  addstudent: (name:string) => {
      dispatch(current.addStudent(name))
  },
  setName: (name: string) => {
      dispatch(current.setName(name))
  },
  fetchStudents: () => {
      dispatch(current.fetchStudents())
  },
  
})

class homeContainer extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, {}> {

    _onAddStudent = (event: any) => { this.props.addstudent(this.props.newName) }
    _onNewNameChange = (event: any) => { this.props.setName(event.target.value)  }

  componentDidMount() {
      this.props.fetchStudents();
  }

  render () {
      const { items, newName, wasAdded, label } = this.props
      console.log('hre');
      var studentList = items.map(function (student, i) {
        return (
            <ListGroupItem key={i}>{student.FirstName} {student.LastName}</ListGroupItem>
        );
    });

    return <div>
        <FormGroup controlId="newName">
            <InputGroup>
                <InputGroup.Button>
                    <Button bsStyle="primary" ref='increment' onClick={this._onAddStudent} disabled={!newName}>Add Student</Button>
                </InputGroup.Button>
                <FormControl type="text" value={newName}  onChange={this._onNewNameChange}/>
            </InputGroup>
        </FormGroup>
        {wasAdded ? <Alert bsStyle="success"><strong>New Student was added.</strong></Alert>:null}
      <ListGroup>
            {studentList}
      </ListGroup>

      
    </div>
  }
}



export const HomeContainer: React.ComponentClass<OwnProps> = connect(mapStateToProps, mapDispatchToProps)(homeContainer)
