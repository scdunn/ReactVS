import * as React from 'react' 
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'

//pages
import { HomeContainer } from './features/home/home-container'
import { AboutContainer } from './features/about/about-container'
import { Container as AdsContainer } from './features/ads/container'
import { LoginContainer } from './features/login/login-container'
import { App } from './features/app/component'


export default (    
    <Router history={browserHistory}>
        <Route path="/app" component={App}>
            <IndexRoute component={HomeContainer} />
            <Route path="/app/about" component={AboutContainer}/>
            <Route path="/app/ads" component={AdsContainer}/>
            <Route path="/app/login" component={LoginContainer}/>
        </Route>
    </Router>
);