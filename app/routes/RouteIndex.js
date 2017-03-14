import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute,Link } from 'react-router';

import Home from './Home';
import About from './About';
import Repos from './Repos';

class ReactRoute extends Component {
    render() {
        return (
            <div>
                <header>App</header>
                <menu>
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/repos">Repos</Link></li>
                    </ul>
                </menu>
                {this.props.children}
            </div>
        );
    }
}
export default ReactRoute;