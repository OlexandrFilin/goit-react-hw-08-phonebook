import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/auth_operations';
import {FormRegisterSt,LabelFormRegisterSt,BtnFrmRegSt} from './RegisterForm.styled'
export const RegisterForm = () => {
    const dispatch = useDispatch();
  
    const handleSubmit = e => {
      e.preventDefault();
      const form = e.currentTarget;
      dispatch(
        register({
          name: form.elements.name.value,
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
     );
      form.reset();
    };

    

    const hanhdleClickDefault =()=>{
      const frm =document.querySelector(FormRegisterSt);

      frm.elements.name.value = 'alex';
       frm.elements.email.value = 'alexFil@ukr.net';
       frm.elements.password.value ='123456789';

    }
    return (
      <FormRegisterSt onSubmit={handleSubmit} autoComplete="off">
        <LabelFormRegisterSt>
          Username
          <input type="text" name="name" />
        </LabelFormRegisterSt>
        <LabelFormRegisterSt >
          Email
          <input type="email" name="email" />
        </LabelFormRegisterSt>
        <LabelFormRegisterSt >
          Password
          <input type="password" name="password" />
        </LabelFormRegisterSt>
        <BtnFrmRegSt type="submit">Register</BtnFrmRegSt>
        <button type="button" onClick={hanhdleClickDefault}></button>
      </FormRegisterSt>
    );
  };
  