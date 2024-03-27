import { NavLink } from 'react-router-dom';
import { linksNavbar } from '../utils/links.jsx';


const NavLinks = () => {
    return(
		<div className = 'nav-links'>
		    {linksNavbar.map((link) => {
            const { id, text, path } = link
		    return(
			    <NavLink
			        className = 'nav-link'
			        to = {path}
			        key= {id} >
			        {text}
			    </NavLink>
                );
		    })}
	   </div>
    );
};


export default NavLinks