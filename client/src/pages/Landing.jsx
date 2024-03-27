import Wrapper from '../assets/wrappers/LandingPage'
import { Link } from 'react-router-dom'
import main from '../assets/images/alternative.svg'


const Landing = () => {
  return (
    <Wrapper>
      <div className = 'container page'>
				<div className ='info'>

					<h1></h1>
					<p>
					Jinsey is a medical practice offering general medical consultation and specialised as well in heart disease. 
					Moreover, our patients can beneficiate of nursing and home care.
					</p>
					<Link to ='/contact' className ='btn btn-hero'>Contact Us</Link>
				</div> 
        <img src={main} alt='' className ='img main-img'/>
      </div>
    </Wrapper>
  );
};

export default Landing;