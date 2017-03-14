import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route,hashHistory,browserHistory,IndexRoute, Link } from 'react-router';

import RouteApp from './RouteIndex';

import Home from './Home';
import About from './About';
import Repos from './Repos';

class ReactRoute extends Component {
    render() {
        return (
          <div>
            <Router history={hashHistory} >
                <Route path="/" component={RouteApp}>    
                    <IndexRoute component={Home}/>    
                    <Route path="about" component={About}/>    
                    <Route path="repos" component={Repos}/>    
                </Route>
            </Router>
         </div>
        );
    }
}

export default ReactRoute;