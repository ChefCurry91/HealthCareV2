import { Link } from "react-router-dom"
import Wrapper from '../assets/wrappers/RegisterPage'
import { FormRow } from '../components';


const Login = () => {
  return (
    <Wrapper>
      <form className='form'>
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
    </form>

    <button type ='submit' className = 'btn btn-block'>Submit</button>
				
		  <p>Not a member yet ?</p>
		  <button type = 'button' className = 'member-btn'>Register</button>
      </Wrapper>
    )
}

export default Login