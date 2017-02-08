/**
 * Created by jet on 2017/2/7.
 */

import React ,{ PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import {DragSource} from 'react-dnd';

const  snackSpec = {

    beginDrag(props){

        return {
            name : props.name
        };
    },

    endDrag(props,monitor){
        const dragItem = monitor.getItem();
        const dropResult = monitor.getDropResult();

        if(dropResult){
            console.log('You dropped ${dragItem.name} into ${dropResult.name}');
        }
    }
};

class Snack extends Component{

    const { name } = this.props;

    const style = {
        opacity:1
    };

    render(){
        return(
            <div className="snack" style={style}>
                {name}
            </div>
        )
    }
}

Snack.propTypes = {
    name : PropTypes.string.isRequired
};

export default Snack;