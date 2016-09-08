//third-party imports
import * as redux from 'redux'
import thunk from 'redux-thunk'
import * as axios from 'axios'

//local imports
import { IAction } from '../../shared/actions'
import { Store } from '../../shared/store'
import { config } from '../../shared/config'


//action Types (List of actions | delimited
type ActionTypes = 'ADS_RECEIVED'


export function FetchAds(): redux.ThunkAction<any, any, any> {
    return function (dispatch: redux.Dispatch<any>): any {
        return axios.get(config.baseApiUrl + '/api/classifiedads')
            .then(function (response) {
                dispatch(adsReceived(response.data))
            });
    }
}

//actions
export type AdsReceieved = IAction<ActionTypes, {}>

export const adsReceived = (json: any): AdsReceieved => ({
    type: 'ADS_RECEIVED',
    data: json,
})

//reducers
export type State = { items: any[] }

const initialState: State = {
    items: [{ 'title': 'Loading...', 'price': 0 }]
}

export function reducer(
    state: State = initialState,
    action: AdsReceieved
    ): State
{
    
    const obj = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case "ADS_RECEIVED":
            obj.items = action.data;
            return obj;
    }
  //return default state
  return state
}







