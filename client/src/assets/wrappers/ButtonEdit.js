import styled from 'styled-components';


const ButtonEdit = styled.div`



.button-edit {
		font-size: 1.15rem;
		display: flex;
		align-items: center;
    	justify-content: center;
     	padding: .5rem;
    	position: relative;
    	background-color: #FFF;
    	border: var(--green-light) 2px solid;
   		border-radius: var(--borderRadius);
    	box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    	color: #000;
    	margin: 1em auto 2.5em auto;
    	transition: var(--transition);
    	z-index:1;
    	opacity: ${props => (props.isEditProfile ? 0 : 1)};




}

.button-edit:hover {
	cursor:pointer;
	background-color: var(--green-dark);
    color: #FFF;
    border: var(--green-dark) 2px solid;
}


`;

export default ButtonEdit