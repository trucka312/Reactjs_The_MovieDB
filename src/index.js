import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from 'app/redux/store'
import { ScrollTop } from 'hooks'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollTop />
      <App />
      <div id='portal-root' />
    </BrowserRouter>
  </Provider>,
)
