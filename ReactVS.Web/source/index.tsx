import * as React from 'react' // tslint:disable-line
import * as ReactDOM from 'react-dom'
import * as Redux from 'redux'
import { Provider } from 'react-redux'
import { combineReducers, applyMiddleware } from 'redux'
import { Store } from './shared/store'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import thunk from 'redux-thunk'

import { students } from './components/studentlist/index'

import { HomeView } from './views/home'
import { AboutView } from './views/about'
import { HelpView } from './views/help'
import { App } from './components/app/component'


const reducers = combineReducers<Store.All>({
    students,
    })

let store: Redux.Store<Store.All> = Redux.createStore(reducers, applyMiddleware(thunk))

// Commented out ("let HTML app be HTML app!")
window.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root')
  if (rootEl) ReactDOM.render(
      <Provider store={store}>
          <Router history={browserHistory}>
                  <Route path="/" component={App}>
                  <IndexRoute component={HomeView} />
                  <Route path="/about" component={AboutView}/>
                  <Route path="/help" component={HelpView}/>
               
              </Route>
         </Router>
      </Provider>
  , rootEl)
})
