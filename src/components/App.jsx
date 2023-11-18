 import { useDispatch} from 'react-redux';
// import { ContactForm  } from './ContactForm/ContactForm';
//  import { ContactList } from './ContactList/ContactList';
//import { fetchContacts } from './redux/api';
//import { Filter } from './Filter/Filter';
//import React, { useEffect} from 'react';
 import React, { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
//import { setFilter } from './redux/filterSlice';
//import Register from 'pages/Register/Register';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from './redux/auth/auth_operations';
import { useAuth } from '../hooks/useAuth';

//  import HomePage from '../pages/Home/Home'
//  import RegisterPage from '../pages/Register/Register';
// import LoginPage from '../pages/Login/Login';
// import ConactsPage from '../pages/Contacts/Contacts';


const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const ConactsPage = lazy(() => import('../pages/Contacts/Contacts'));


export const BaseURL = 'https://connections-api.herokuapp.com';

export const App = () => {


   const dispatch=useDispatch();
const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);



  return (


    isRefreshing ? (
      <b>Refreshing user...</b>
    ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/conacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ConactsPage />} />
          }
        />
      </Route>
    </Routes>
    )


  )
  
 
};
