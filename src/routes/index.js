import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Home from '../views/home'
import Characters from '../views/characters'
// import Locations from '../views/locations'
import Episodes from '../views/episodes'
import Character from '../views/character'

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
                {/* <Route path="/locations">
                    <Locations/>
                </Route> */}
                <Route path="/episodes">
                    <Episodes/>
                </Route>
                <Route path="/character/:id">
                    <Character/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}