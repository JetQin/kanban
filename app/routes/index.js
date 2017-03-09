import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import About from './About';
import Repos from './Repos';
import Home from './Home';
import style from './style.css'

class App extends Component {
    
    constructor(){
        super(...arguments);
        this.state = {
            route:window.location.hash.substr(1)
        };
    }

    componentDidMount(){
        window.addEventListener('haschange',()=>{
            this.setState({
                route:window.location.hash.substr(1)
            });
        });
    }

    render() {
        var child;

        switch(this.state.route){
            case '/about': child = About;break;
            case '/repos': child = Repos;break;
            default:       child = Home;
        }
        return (
            <div>
                <header>App</header>
                <menu>
                    <ul>
                        <li><a href="#/about">About</a></li>
                        <li><a href="#/repos">Repos</a></li>
                    </ul>
                </menu>
                <child/>
            </div>
        )
    }
}

export default App;