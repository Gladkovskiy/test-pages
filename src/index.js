import React, {Suspense} from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './pages/App'
import reportWebVitals from './reportWebVitals'
import {BrowserRouter} from 'react-router-dom'
import './i18n'

import Loader from './components/UI/Loader/Loader'

ReactDOM.render(
  <BrowserRouter>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
