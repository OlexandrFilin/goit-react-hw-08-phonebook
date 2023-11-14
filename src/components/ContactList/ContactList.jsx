import {
  ContactListStyle,
  BtnDelCont,
   ItemContLst,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux'
import { deleteContact } from 'components/redux/api';
import {getConactFromState} from 'components/redux/contactSlice'
import { getFilter } from 'components/redux/filterSlice';

export const ContactList = () => {
const {contactsUser, isLoading, error } = useSelector(getConactFromState);
//  console.log('contactsUser contlist', contactsUser)
const filterCont  = useSelector(getFilter);

const getFilterContacts = ()=>{
   if (!filterCont.filter) {
    return contactsUser;
    }
 return contactsUser.filter(contact=>contact.name.toUpperCase().includes(filterCont.filter.toUpperCase())
 )
}

const dispatch = useDispatch();
  const onRemoveContact =(id)=>{
    dispatch(deleteContact(id))
  }
   return (
    <>
    {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
    <ContactListStyle>
       {getFilterContacts().map(el => {
        return (
          <ItemContLst key={el.id}>
            <BtnDelCont type="button" onClick={() => onRemoveContact(el.id)}>
              del
            </BtnDelCont>
            {el.name} : {el.phone}
          </ItemContLst>
        );
      })}
    </ContactListStyle>
   </> 
  );
};
