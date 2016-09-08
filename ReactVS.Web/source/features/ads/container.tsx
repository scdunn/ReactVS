//third-party imports
import * as React from 'react'
import * as redux from 'redux'
import { connect } from 'react-redux'

//local imports
import {Store} from '../../shared/store'
import {View} from './view'
import * as current from './index'


//stateful container component
export const Container: React.ComponentClass<any> =
    connect(
        (state: Store.All, ownProps: any): any => ({
            items: state.adsState.items
        }),
        (dispatch: redux.Dispatch<Store.All>): any => ({
            fetchAds: () => { dispatch(current.FetchAds())},
        }))
        (
        class container extends React.Component<any, {}> {

            componentDidMount() {
                //load stuff
                this.props.fetchAds();
            }

            render() {
                return <div>
                    <View items={this.props.items}/>
                </div>
            }

        }
        )