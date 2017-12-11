import React, { Component } from 'react';
import './index.css';
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import {Link} from 'react-router-dom'

class ListContacts extends Component {
state = {
      query : ''
  }
    
  
  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  clearQuery = () => {
    this.setState({ query: '' })
  }
  
  render() {
    
    let showingContacts
    if(this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      showingContacts = this.props.contacts.filter((contact) => match.test(contact.name))
    }
    else {
      showingContacts = this.props.contacts
    }
    
    return (
      
      <div className ='list-contacts'>
        <div className ='list-contacts-top'>
          <input type="text"
          className ='search-contacts'
          placeholder ='search-contacts'
          value = {this.state.query}
          onChange ={(event) => this.updateQuery(event.target.value) }
          />
        <Link
        to = '/create'
        //onClick = {() => {}}
        className = "add-contact"
        >Add Contact</Link>

        </div>

        <ol className = 'contact-list'>
		
          
         {showingContacts.map((contact) => (
            <li key={contact.id} className='contact-list-item'>
              <div className='contact-avatar' style={{
                backgroundImage: `url(${contact.avatarURL})`
              }}/>
            <div className = 'contact-details'>
            <p>{contact.name}</p>
            <p>{contact.email}</p>
			
			
            </div>
            
              <button className = 'contact-remove' onClick={() => this.props.onDeleteContact(contact)}> Remove </button>
            
          </li>
         ))}
          
          </ol>
        
      </div>

    );
  }
}

export default ListContacts;