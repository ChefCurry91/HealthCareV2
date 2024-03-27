import styled from 'styled-components';


const ButtonCancelAppointment = styled.div`

.button-cancel {
		font-size: .85rem;
		display: flex;
		align-items: center;
    	justify-content: center;
     	padding: .75em .5em;
    	position: relative;
    	background-color: #FFF;
    	border: var(--green-light) 2px solid;
   		border-radius: var(--borderRadius);
    	box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    	color: #000;
    	margin: 1em auto;
    	transition: var(--transition);

}

.button-cancel:hover {
	cursor:pointer;
    background-color: var(--green-dark);
    color: #FFF;
    border: var(--green-dark) 2px solid;
}


`;

export default ButtonCancelAppointment;