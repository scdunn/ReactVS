import { combineReducers } from 'redux'
import * as fetch from 'isomorphic-fetch'
import { Store, IStudent } from '../../shared/store'
import * as axios from 'axios'

import {
  StudentAdded,
  NewName, ReceiveStudents
} from './actions'



const initialState: Store.Students = {
    items: [], newName:'', wasAdded:false
}

export function students(state: Store.Students = initialState, action: StudentAdded | NewName| ReceiveStudents): Store.Students {
    
    const obj = JSON.parse(JSON.stringify(state));
    console.log(action.type);

  switch (action.type) {
    case 'STUDENT_ADDED':
          const addStudentAction = action as StudentAdded
          obj.newName = '';
          obj.wasAdded = true;
          return obj;
    case 'NEW_NAME':
        const newNameAction = action as NewName;
        obj.newName = newNameAction.data.name;
        obj.wasAdded = !obj.newName;
        return obj;

    case 'RECEIVE_STUDENTS':
          const gotStudentsAction = action as ReceiveStudents;   
        obj.items = action.data;
        return obj;
  }

  return state
}

