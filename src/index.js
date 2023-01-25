

import ReactDOM from 'react-dom';

import React, { useState } from 'react';
import './style.css'

function Phonebook() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || []
  );

  
  const addContact = (name, phone) => {
    setContacts([...contacts, { name, phone }]);
    localStorage.setItem('contacts', JSON.stringify([...contacts, { name, phone }])); 
    
  };

  
  const deleteContact = (index) => {
    const newContacts = contacts.filter((p, i) => i !== index);
    setContacts(newContacts);
    localStorage.setItem('contacts', JSON.stringify(newContacts)); 
  };

  return (
   
    <div className='container'>
      <div className='header'><h1>PhoneBook</h1></div>
      <ul>
        {contacts.map((p, i) => (
          <li className='list' key={i}>
            {p.name} - {p.phone}
            <button className='btn' onClick={() => deleteContact(i)}>Delete</button>
          </li>
        ))}
      </ul>
      <form onSubmit={(e) => {
        e.preventDefault();
        addContact(e.target.name.value, e.target.phone.value);
        e.target.reset();
      }}>
       
        <input type="text"  name="name" placeholder="Name" />
        <input type="text"  name="phone" placeholder="Phone" />
   
        
        <button className='sub' type="submit">Add Contact</button>
        
      </form>
    </div>
  );
  
}


ReactDOM.render(
  <Phonebook/>,
  document.getElementById('root')
);

