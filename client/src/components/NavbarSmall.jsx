import NavLinks from './NavLinks'
import Wrapper from '../assets/wrappers/NavbarSmallPage';
import Logo from './Logo';
import { FaAlignLeft } from 'react-icons/fa';
import  { useHomeLayoutContext } from '../pages/HomeLayout';


const NavbarSmall = () => {
	const { toggleSidebar } = useHomeLayoutContext();
    return(
		<Wrapper>
			 <div className='small-nav-container'>
				<div className = 'logo-hamburger-container'>
					<Logo />
					<button type= 'button' className='toggle-btn btn-hamburger' onClick={toggleSidebar} >
						<FaAlignLeft size = {32} color = 'grey' />
					</button>
				</div>
				<NavLinks />
			</div>
		</Wrapper>
    );
};
export default NavbarSmall;