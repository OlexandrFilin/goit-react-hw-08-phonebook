import { useDispatch } from "react-redux";
import { logIn } from '../redux/auth/auth_operations';
import {FormLoginSt,LabelFormLoginSt} from "./LoginForm.styled"
export const LoginForm = () => {

const dispatch = useDispatch();
  
    const handleSubmit = e => {
      e.preventDefault();
     
     const form = e.currentTarget;
     const {email,password} =form.elements;
      dispatch(
        logIn({
          email: email.value,
          password: password.value,
        })
      );
      form.reset();
  };
 
 
   const hanhdleClickDefault =(e)=>{
     const frm =document.querySelector(FormLoginSt);
      frm.elements.email.value = 'alexFil@ukr.net';
      frm.elements.password.value ='123456789';
   }
    return (
      <FormLoginSt  onSubmit={handleSubmit} autoComplete="off">
        <LabelFormLoginSt>
          Email
          <input type="email" name="email" />
        </LabelFormLoginSt>
        <LabelFormLoginSt>
          Password
          <input type="password" name="password" />
        </LabelFormLoginSt>
        <button type="submit">Log In</button>
        <button type="button" onClick={hanhdleClickDefault}>default</button>
      </FormLoginSt>
    );
  };