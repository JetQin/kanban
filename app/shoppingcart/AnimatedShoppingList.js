/**
 * Created by jet on 1/13/17.
 */
import React ,{ PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import style from './shoppingcart.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class AnimatedShoppingList extends Component{

    constructor()
    {
        super();
        this.state = {
            items:[
                {id:1, name:'Milk'},
                {id:2, name:'Yogurt'},
                {id:3, name:'Orange Juice'}
            ]
        };

        this.handleRemove=this.handleRemove.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(evt){
        if(evt.key === 'Enter'){
            let newItem = {id:Date.now(),name:evt.target.value};
            let newItems = this.state.items.concat(newItem);
            evt.target.value = '';
            this.setState({items:newItems});
        }
    }


    handleRemove(index){
        var newItems = this.state.items;
        newItems.splice(index,1);
        this.setState({items:newItems});
    }

    render(){

        let shoppingItems = this.state.items.map((item,index)=>{
          return <div key={item.id} className="item" onClick={this.handleRemove.bind(index)}>
                     {item.name}
                </div>
        });

        return (
            <div>
                <ReactCSSTransitionGroup transitionName="example"
                                         transitionEnterTimeout={300}
                                         transitionLeaveTimeout={300}
                                         transitionAppear={true}
                                         transitionAppearTimeout={300}>
                    {shoppingItems}
                </ReactCSSTransitionGroup>
                <input type="text" value={this.state.newItem} onKeyDown={this.handleChange}/>
            </div>
        )
    }
}

export default AnimatedShoppingList;