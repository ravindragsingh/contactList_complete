import React, { Component } from 'react';
//import logo from './logo.svg';
import './index.css';
import ListContacts  from './ListContacts'
import * as ContactsAPI from './utils/ContactsAPI';
import {Link} from 'react-router-dom'
import ImageInput from './ImageInput'
import serializeForm from 'form-serialize' 


class CreateContacts extends Component {
handleSubmit = (e) => {e.preventDefault() 
  const values = serializeForm(e.target, { hash: true }) 
  if (this.props.onCreateContact) 
 this.props.onCreateContact(values) 
 } 

    render () {

    return(

        <div>
 <Link className = "close-create-contact" to ="/">close</Link>
 <form onSubmit={this.handleSubmit} className = "create-contact-form">
     <ImageInput className = "create-contact-avatar-input"
     name = "avatarURL"
     maxHeight = {64}
     />
     <div className = "create-contact-details">
         <input type = "text" name ="name" placeholder = "Name"/>
         <input type = "text" name ="email" placeholder = "Email"/>
         <button>Add</button>

     </div>
</form>
</div>

    );
    }
}

    
    

export default CreateContacts;
