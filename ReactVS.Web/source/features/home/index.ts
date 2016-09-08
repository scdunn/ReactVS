//libraries
import * as axios from 'axios'
import {Dispatch, ThunkAction} from 'redux';
import thunk from 'redux-thunk'

import { Store, IStudent } from '../../shared/store'
import {config} from '../../shared/config'
import { IAction } from '../../shared/actions'


//action Types
export const RECEIVE_STUDENTS_ACTION = 'RECEIVE_STUDENTS'

type StudentActionTypes = 'ADD_STUDENT' | 'STUDENT_ADDED' | 'SET_NAME' | 'RECEIVE_STUDENTS'

//actions
export function fetchStudents(): ThunkAction<any, any, any> {

    return function (dispatch: Dispatch<any>): any {
        return axios.get(config.baseApiUrl + '/api/students')
            .then(function (response) {
                dispatch(receiveStudents(response.data))
            });
    };
}
export function addStudent(name: string): ThunkAction<any, any, any> {
    return function (dispatch: Dispatch<any>): any {
        const aryName = name.split(' ');

        return axios.post(config.baseApiUrl + '/api/students', { "FirstName": aryName[0], "LastName": aryName[1] })
            .then(function (response) {
                dispatch(fetchStudents())
                dispatch(studentAdded())
            });

    };
}


export type ReceiveStudents = IAction<StudentActionTypes, {}>
export const receiveStudents = (json: any): ReceiveStudents => ({
    type: 'RECEIVE_STUDENTS',
    data: json,
})


export type StudentAdded = IAction<StudentActionTypes, {}>
export const studentAdded = (): StudentAdded => ({
    type: 'STUDENT_ADDED',
    data: {},
})

export type SetNamePayload = { name: string }
export type SetName = IAction<StudentActionTypes, SetNamePayload>
export const setName = (name: string): SetName => ({
    type: 'SET_NAME',
    data: { name },
})

//reducers

const initialState: Store.StudentState = {
    items: [], newName:'', wasAdded:false
}

export function studentReducer(state: Store.StudentState = initialState,
    action: StudentAdded | SetName | ReceiveStudents
): Store.StudentState
{
    
    const obj = JSON.parse(JSON.stringify(state));
    console.log(action.type);

  switch (action.type) {
    case 'STUDENT_ADDED':
          const addStudentAction = action as StudentAdded
          obj.newName = '';
          obj.wasAdded = true;
          return obj;
    case 'NEW_NAME':
        const newNameAction = action as SetName;
        obj.newName = newNameAction.data.name;
        obj.wasAdded = !obj.newName;
        return obj;

    case RECEIVE_STUDENTS_ACTION:
          const gotStudentsAction = action as ReceiveStudents;   
        obj.items = action.data;
        return obj;
  }

  return state
}





export default studentReducer






