import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import setupStore from './setupStore'
import App from './App'

const store = setupStore()

export default () => (
    <Provider store={store}>
        <BrowserRouter>
            <Route component={App}/>
        </BrowserRouter>
    </Provider>
)