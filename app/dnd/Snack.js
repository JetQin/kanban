/**
 * Created by jet on 2017/2/7.
 */

import React ,{ PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import {DragSource} from 'react-dnd';

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