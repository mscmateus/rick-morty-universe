import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Home from '../Views/home'
import Characters from '../Views/characters'
import Locations from '../Views/locations'
import Episodes from '../Views/episodes'

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
                <Route path="/characters">
                    <Characters/>
                </Route>
                <Route path="/locations">
                    <Locations/>
                </Route>
                <Route path="/episodes">
                    <Episodes/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
