/**
 * Created by jet on 1/12/17.
 */
import React ,{ PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import ContactsApp from './ContactsApp';

class ContactsAppContainer extends Component{

    constructor(){
        super();
        this.state = {contacts:[]}
    }

    componentDidMount(){
        fetch('../../public/contacts.json')
            .then((response)  => response.json())
            .then((responseData) =>{
                this.setState({contacts: responseData});
            }).catch((error) => {
            console.log('Error fetching and parsing data',error);
        });
    }
    render(){
        return <ContactsApp contacts={this.state.contacts} />
    }
}

export default ContactsAppContainer;