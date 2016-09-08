import * as React from 'react'
import * as redux from 'redux'
import { connect } from 'react-redux'

import { Store } from '../../shared/store'
import * as current from './index'
import { AboutView } from './about-view'

interface OwnProps {
    label: string
}

interface ConnectedState {
    message:string
}

interface ConnectedDispatch {
    aboutLoaded: (name: string) => void
}

const mapStateToProps = (state: Store.All, ownProps: OwnProps): ConnectedState => ({
    message: state.aboutState.message
})

//functions to properties (called as this.props.[function])
const mapDispatchToProps = (dispatch: redux.Dispatch<Store.All>): ConnectedDispatch => ({
    aboutLoaded: () => {
        
    },

})

class aboutContainer extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, {}> {
    
    componentDidMount() {
        //load stuff
    }

    render() {
        return <div>
            <AboutView message={this.props.message}/>
            </div>
    }
}



export const AboutContainer: React.ComponentClass<OwnProps> = connect(mapStateToProps, mapDispatchToProps)(aboutContainer)
