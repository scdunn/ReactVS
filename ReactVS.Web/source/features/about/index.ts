//libraries
import * as axios from 'axios'
import {Dispatch, ThunkAction} from 'redux';
import thunk from 'redux-thunk'

import { Store} from '../../shared/store'
import {config} from '../../shared/config'
import { IAction } from '../../shared/actions'


//action Types

type ActionTypes = 'ABOUT_LOADED'

//actions

export type AboutLoaded = IAction<ActionTypes, {}>
export const aboutLoaded = (json: any): AboutLoaded => ({
    type: 'ABOUT_LOADED',
    data: json,
})

//reducers

const initialState: Store.AboutState = {
    message:'My Message'
}

export function aboutReducer(state: Store.AboutState = initialState,
    action: AboutLoaded
): Store.AboutState
{
    
    
  return state
}

export default aboutReducer






