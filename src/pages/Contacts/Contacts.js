import { ContactForm } from 'components/ContactForm/ContactForm';
import { useDispatch } from 'react-redux';
//import { ContactForm  } from './ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { fetchContacts } from 'components/redux/contacts/contacts_operations';
import { Filter } from 'components/Filter/Filter';
import React, { useEffect } from 'react';
import { setFilter } from 'components/redux/contacts/filterSlice';
import { ContListH1, ContListH2, WorkContactstH2 } from './Contacts.Styled';
export default function ConactsPage() {
  const dispatch = useDispatch();
  const handelInputChangeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  // Завантажуємо контакти
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <table>
      <caption>
        <ContListH1>Phonebook</ContListH1>
      </caption>
      <tbody>
        <tr>
          <td> <WorkContactstH2>Working with contacts</WorkContactstH2></td>
          <td> <ContListH2>Contacts list</ContListH2>  </td>
        </tr>
        <tr>
          <td>
           
            <ContactForm />
            <Filter
              style={{ marginLeft: '20px' }}
              handleFilter={handelInputChangeFilter}
            />
          </td>
          <td>
           
            <ContactList />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
