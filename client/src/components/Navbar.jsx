import Wrapper from '../assets/wrappers/Navbar'
import { FaAlignLeft } from 'react-icons/fa'
import NavLinks from './NavLinks'
import Logo from './Logo';
import LogoutButton from './LogoutButton';
import main from '../assets/images/main.svg';
import  { useHomeLayoutContext } from '../pages/HomeLayout';

const Navbar = () => {
    const { user, toggleSidebar } = useHomeLayoutContext();
    return (
        <Wrapper>
            <div className ='nav-center'>
                <Logo />
                <button type= 'button' className='toggle-btn btn-hamburger' onClick={toggleSidebar}>
                    <FaAlignLeft size = {32} color = 'grey' />
                </button>
                <NavLinks />
                <LogoutButton />
            </div>

        </Wrapper>
    );
};

export default Navbar