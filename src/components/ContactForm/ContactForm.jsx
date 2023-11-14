import React from 'react';
import { FormUser, LabelForm, InputUser } from './ContactForm.styled';
import { nanoid } from 'nanoid';
import { useState } from 'react';
//import { useDispatch,  } from 'react-redux';
import { addContact, } from 'components/redux/api';
 import { useDispatch, useSelector } from 'react-redux';
 import {  getConactFromState } from 'components/redux/contactSlice';
export const ContactForm = () => {
  const [isName, setName] = useState('');
  const [isNumber, setNumber] = useState('');
 const contacts = useSelector(getConactFromState);
  //console.log('contacts', contacts);
  const dispatch = useDispatch();

  const onChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') {
      setName(value);
    } else {
      setNumber(value);
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };
  const submitForm = evt => {
    evt.preventDefault();
    console.log('contacts', contacts)
     if (contacts.contactsUser.find(cont=>cont.name.toLowerCase() ===isName.toLowerCase()))
   {alert('Contact exist in the list');return;} 
    // dispatch(addContact( 
     dispatch(addContact( 
      {
      id: nanoid(),
      name: isName,
      phone: isNumber,
    }
    ));
   
    resetForm();
  };
  return (
    <FormUser onSubmit={submitForm}>
      <LabelForm>
        Name
        <InputUser
          type="text"
          value={isName}
          name="name"
          placeholder="Name"
          onChange={onChange}
          required
          pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
      </LabelForm>
      <LabelForm>
        Number
        <InputUser
          type="tel"
          name="number"
          value={isNumber}
          onChange={onChange}
          placeholder="Phone number"
          required
        />
      </LabelForm>
      <button type="submit">Add contact</button>
    </FormUser>
  );
};
