import * as React from 'react'
import * as redux from 'redux'
import { connect } from 'react-redux'

import { Store } from '../../shared/store'

import * as current from './index'
import { View } from './ads-view'


export const Container: React.ComponentClass<any> = connect(
    (state: Store.All, ownProps: any): any => ({
        items: state.adsState.items
    })
    , (dispatch: redux.Dispatch<Store.All>): any => ({
        adsLoaded: () => {

        },

    }))
(
        class container extends React.Component<any, {}> {

            componentDidMount() {
                //load stuff
            }

            render() {
                return <div>
                    <View items={this.props.items}/>
                </div>
            }
        }
)

