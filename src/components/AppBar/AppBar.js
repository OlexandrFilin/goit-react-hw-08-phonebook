import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks/useAuth';
import {  HeaderAppBar } from 'components/AppBar/AppBar.styled'


export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <HeaderAppBar>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </HeaderAppBar>
  );
};

