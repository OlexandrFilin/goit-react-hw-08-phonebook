import { ContactForm } from 'components/ContactForm/ContactForm';
import { useDispatch} from 'react-redux';
//import { ContactForm  } from './ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { fetchContacts } from 'components/redux/api';
import { Filter } from 'components/Filter/Filter';
import React, { useEffect } from 'react';
import { setFilter } from 'components/redux/filterSlice';

  export default function ConactsPage() {  
    const dispatch=useDispatch();
    const handelInputChangeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
    };
  
  // Завантажуємо контакти
   useEffect(()=>{ dispatch(fetchContacts())},[dispatch]);
    return (
      <>
        <h1 style={{ marginLeft: '20px' }}>Phonebook</h1>
        <ContactForm />
   
        <h2 style={{ marginLeft: '20px' }}>Contacts</h2>
        <Filter
          style={{ marginLeft: '20px' }}
        handleFilter={handelInputChangeFilter}
          
        />
             
        <ContactList
         
        />
      </>
    );
};
