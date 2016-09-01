

import * as fetch from 'isomorphic-fetch'
import { Promise } from 'es6-promise'
import * as axios from 'axios'
import {IStudent} from '../../shared/store'

import { createStore, applyMiddleware, Store, Dispatch, ThunkAction} from 'redux';
import thunk from 'redux-thunk'

import {config} from '../../shared/config'
 
export interface Action<T, P> {
  type: T
  data?: P
}


type StudentActionTypes = 'ADD_STUDENT'| 'STUDENT_ADDED' | 'NEW_NAME' | 'RECEIVE_STUDENTS'


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

export type ReceiveStudents = Action<StudentActionTypes, {}>
export const receiveStudents = (json: any): ReceiveStudents => ({
    type: 'RECEIVE_STUDENTS',
    data: json,
})


export type StudentAdded = Action<StudentActionTypes, {}>

export const studentAdded = (): StudentAdded => ({
    type: 'STUDENT_ADDED',
    data: {},
})

type NewNamePayload = { name: string }
export type NewName = Action<StudentActionTypes, NewNamePayload>
export const newName = (name: string): NewName => ({
    type: 'NEW_NAME',
    data: { name },
    })

