import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';

import RouteApp from './RouteIndex';

import Home from './Home';
import About from './About';
import Repos from './Repos';

class ReactRoute extends Component {
    render() {
        return (
            <Router>
                <Route path="/" component={RouteApp}/>    
                <Route path="about" component={About}/>    
                <Route path="repos" component={Repos}/>    
            </Router>
        );
    }
}

export default ReactRoute;