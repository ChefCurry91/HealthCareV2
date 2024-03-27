
import { FaAlignLeft, FaUserCircle,FaCaretDown } from 'react-icons/fa'
import { useState } from 'react'

const LogoutButton = () => {
	const [isLogout, setShowLogout] = useState(false)

	return(
		<div className = 'btn-container'>


			<button
				type = 'button'
				className = 'btn'
				onClick = {() => setShowLogout(!isLogout)}>

			<FaUserCircle />
			{/*	{user?.firstName} */}
			<FaCaretDown />

			
			</button>

			
			<div className={isLogout? 'dropdown show-dropdown' :'dropdown'}>
				<button 
					type='button' 
					className ='dropdown-btn'>
					
				</button>
			</div>

		</div>
	)
}

export default LogoutButton