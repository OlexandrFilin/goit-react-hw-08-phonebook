import { NavLinkNavigation } from './Navigation.styled';
import { useAuth } from '../../hooks/useAuth';


export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLinkNavigation  to="/">
        Home
      </NavLinkNavigation >
      {isLoggedIn && (
        <NavLinkNavigation to="/contacts">
          Contacts
        </NavLinkNavigation >
      )}
    </nav>
  );
};