import React from 'react'
import { Link } from 'react-router-dom'
import { ImLeaf } from 'react-icons/im'

const Logo = () => {
	return (
		<Link to = '/'>
		    <div className = 'logo'>
			    <ImLeaf size= {40} color= '#a6cabd' />
				<h2 className = 'logo-text'> Jinsei </h2>
		    </div>
		</Link >
	);
};

export default Logo;

