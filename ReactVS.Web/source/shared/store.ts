//libraries
import * as React from 'react' 
import * as Redux from 'redux'
import thunk from 'redux-thunk'

//reducers
import { studentReducer } from '../features/home'
import { aboutReducer } from '../features/about'
import * as Ads from '../features/ads'




export interface IStudent {
    Id:number
    FirstName: string;
    LastName: string;
}

//store type definition
export namespace Store {
    
  export type StudentState = {items: IStudent[], newName:string, wasAdded:boolean }
  export type AboutState = { message: string }
 
  export type All = {
      studentState: StudentState,
      aboutState: AboutState,
      adsState: Ads.State
  }
}

const reducers = Redux.combineReducers<Store.All>({
    studentState: studentReducer,
    aboutState: aboutReducer,
    adsState: Ads.reducer
})

const store: Redux.Store<Store.All> = Redux.createStore(reducers, Redux.applyMiddleware(thunk))

export default store    