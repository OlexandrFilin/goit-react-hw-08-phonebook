// export const UserMenu =()=>{
//   return (
//   <div>
//   <p>mango@mail.com</p>
//   <button>Logout</button>
// </div>)
// }

import { useDispatch } from 'react-redux';
import { logOut } from '../redux/auth/auth_operations';
import { useAuth } from '../../hooks/useAuth';
import {WraperUserMenu,WraperUserName} from './UserMenu.styled'

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <WraperUserMenu >
      <WraperUserName > {user.name}</WraperUserName>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </WraperUserMenu>
  );
};
