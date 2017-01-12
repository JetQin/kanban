/**
 * Created by jet on 1/12/17.
 */

import React, { Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from "./SearchBar";
import ContactList from "./ContactList";

class ContactsApp extends Component{

    constructor(props){
        super(props);
        this.state = {filterText:''};
        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput(serachTerm){
        this.setState({filterText:serachTerm})
    }

    render(){
        return(
            <div>
                <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput}/>
                <ContactList contacts={this.props.contacts} filterText={this.state.filterText} />
            </div>
        )
    }
}

ContactsApp.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object)
}

export default ContactsApp;