import * as React from 'react' // tslint:disable-line
import * as ReactDOM from 'react-dom'
import * as Redux from 'redux'
import { Provider } from 'react-redux'

import router from './router';
import store from './shared/store';


// Commented out ("let HTML app be HTML app!")
window.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root')
  if (rootEl) ReactDOM.render(
      <Provider store={store}>{router}</Provider>
  , rootEl)
})
