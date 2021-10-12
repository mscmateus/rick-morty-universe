import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Home from '../Views/home'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Redirect to={{pathname: "/home"}}/>
                </Route>
                <Route path="/home">
                    <Home/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
