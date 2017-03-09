/**
 * Created by jet on 1/12/17.
 */

import React, { PropTypes,Component }from 'react';
import ReactDOM from 'react-dom';


class ContactItem extends Component{
    render(){
        return <li>{this.props.name} - {this.props.email} </li>
    }
}

ContactItem.propTypes = {
    name : PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
}


export default  ContactItem;
