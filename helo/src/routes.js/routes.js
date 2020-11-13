import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Auth from './components/Auth';
import Form from './components/Form';
import Feed from './components/Feed';
import Dashboard from '../comps/Dashboard/Dashboard';

export default (
    <Switch>
        <Route exact path="/" component={Auth}/>
        <Route path="/create_post" component={Form}/>
        <Route path="/feed" component={Dashboard}/>
    </Switch>
)