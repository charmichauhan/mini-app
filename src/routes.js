import React from 'react';
import {Route, Router, hashHistory} from 'react-router';
import FirstToCall from './components/callMe/FirstToCall';
 import SignupForm from './components/SignupForm';
import Page from './components/Page3';
import Dashboard from './components/Dashboard';
export default(

    <Router history={hashHistory}>
        <Route path="/" component={FirstToCall}/>
        <Route path="/signupform" component={SignupForm}/>
        <Route path="/page" component={Page}/>
        <Route path="/dashboard" component={Dashboard}/>
    </Router>
);

