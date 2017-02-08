/**
 * Created by jet on 2017/2/7.
 */

import React ,{ PropTypes, Component } from 'react';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Snack from './Snack';
import ShoppingCart from './ShoppingCart';


let items = ['Popcorn','Bread'];

class Container extends Component{

    render(){
        return(
            <div>
                <Snack name="Chips"/>
                <Snack name="Cupcake"/>
                <Snack name="Donut"/>
                <Snack name="Doritos"/>
                <Snack name="Popcorn"/>
                <ShoppingCart items={items}/>
            </div>
        );
    }
}

export default DragDropContext(HTML5Backend)(Container);