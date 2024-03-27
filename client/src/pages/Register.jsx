import { Form, redirect, Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterPage'
import Logo from '../components/Logo';
import { FormRow } from '../components';



const Register = () => {

  return (
    <Wrapper>
      <div className= 'full-page'>
      <form className='form'>
        <Logo />
        <h4>Register</h4>
        <FormRow 
          type='text' 
          name ='firstName' 
          labelText= 'First Name' 
          defaultValue= 'John' 
        />
        <FormRow 
          type='text' 
          name ='lastName' 
          labelText= 'Last Name' 
          defaultValue= 'Smilga' 
        />
        <FormRow 
          type='email' 
          name ='email' 
          labelText= 'Email' 
          defaultValue= 'John@gmail.com' 
        />
        <FormRow 
          type='password' 
          name ='password' 
          labelText= 'password' 
          defaultValue= 'secret123' />
        <button type='submit' className='btn btn-block'>
          submit
        </button>
        <p>
          Already a member ?
          <Link to='/login' className='member-btn'> Login</Link>
        </p>
      </form>
      </div>
    </Wrapper>
  );
};
export default Register;
