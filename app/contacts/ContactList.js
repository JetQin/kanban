/**
 * Created by jet on 1/12/17.
 */

import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import ContactItem from "./ContactItem";

class ContactList extends Component{

    render(){
        let filterContacts = this.props.contacts.filter(
            (contact) => contact.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) !== -1
        );
        return(
            <ul>
                {filterContacts.map(
                    (contact) => <ContactItem key={contact.email} name={contact.name} email={contact.email}/>
                )}
            </ul>
        );
    }
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object)
}

export default ContactList;