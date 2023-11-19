import {
  ContactListStyle,
  BtnDelCont,
   ItemContLst,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux'
import { deleteContact } from 'components/redux/contacts/contacts_operations';
import {getConactFromState} from 'components/redux/contacts/contactSlice'
import { getFilter } from 'components/redux/contacts/filterSlice';

export const ContactList = () => {
const {contactsUser, isLoading, error } = useSelector(getConactFromState);
//  console.log('contactsUser contlist', contactsUser)
const filterCont  = useSelector(getFilter);

const getFilterContacts = ()=>{

   if (!filterCont.filter) {

    return contactsUser;
    }
    console.log('contactsUser.filter  ', contactsUser.filter(contact=>contact.name.toUpperCase().includes(filterCont.filter.toUpperCase())))
 return contactsUser.filter(contact=>contact.name.toUpperCase().includes(filterCont.filter.toUpperCase())
 )
}

const dispatch = useDispatch();
  const onRemoveContact =(id)=>{
    dispatch(deleteContact(id))
  }

   return (
    <>
    {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
    <ContactListStyle>
       {getFilterContacts().map(el => {
        return (
          <ItemContLst key={el.id}>
            <BtnDelCont type="button" onClick={() => onRemoveContact(el.id)}>
              del
            </BtnDelCont>
            {el.name} : {el.number}
          </ItemContLst>
        );
      })}
    </ContactListStyle>
   </> 
  );
};
