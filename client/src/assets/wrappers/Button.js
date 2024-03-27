import styled from 'styled-components';


const Button = styled.button`


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
    	margin: 1em auto;
    	transition: var(--transition);

    	&:hover {
    		cursor:pointer;
    		background-color: var(--green-dark);
    		color: #FFF;

    	}

    	


`;

export default Button