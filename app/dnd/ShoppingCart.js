/**
 * Created by jet on 2017/2/7.
 */

import React ,{ PropTypes, Component } from 'react';
import {DropTarget} from 'react-dnd'
import Snack from './Snack';
import constants from './constants';

const shoppingCartSpec = {
    drop(){
        return {name:'ShoppingCart'};
    }
}


let collect = (connect,monitor) => {
    return{
        connectDropTarget:connect.dropTarget(),
        isOver:monitor.isOver(),
        canDrop:monitor.canDrop()
    }
}

class ShoppingCart extends Component{

    constructor(){
        super();
    }

    render(){

        const {canDrop,isOver,connectDropTarget} = this.props;
        const isActive = canDrop && isOver;

        let backgroundColor = '#FFFFFF';
        if(isActive)
        {
            backgroundColor = '#F7F7BD';
        }
        else if(canDrop)
        {
            backgroundColor = '#F7F7F7';
        }

        const style = {
            backgroundColor:backgroundColor
        }

        let dropItems = this.props.items.map((item)=>{
           return <Snack name={item}/>
        });

        console.log(dropItems);
        return connectDropTarget(
            <div className="shopping-cart" style={style}>
                {isActive ? 'Hummm,Snack' : 'Drag here to order!'}
                <div>
                    {dropItems}
                </div>
            </div>
        );
    }
};

ShoppingCart.propTypes = {
    connectDropTarget:PropTypes.func.isRequired,
    isOver:PropTypes.bool.isRequired,
    canDrop:PropTypes.bool.isRequired
};

export default DropTarget(constants.SNACK,shoppingCartSpec,collect)(ShoppingCart);