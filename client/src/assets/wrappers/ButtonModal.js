import styled from 'styled-components';


const ButtonModal = styled.div`
	
	position:fixed;
	top:0;
	left:0;
	right:0;
	bottom:0;
	background:rgba(0,0,0,0.2);
	display:flex;
	align-items: center;
	justify-content: center;
	z-index: 0;
	#modal {
		background: #E4DACD;  
	};


	.grid-modal {
		display: grid;
		grid-template-columns: ;
		padding: 1.25em 1.5em;
		background: #FFF;
		border-radius:  var(--borderRadius);
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
		border: var(--green-middle) 2px solid;
		grid-gap: 1em;



	}


	.slot-selected {
		font-size: 1.3rem;
		font-weight:bolder;
	}


	
	.button-confirmation {
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
    	color: black;

	}

	.button-confirmation:hover {
		cursor: pointer;
	}

`;

export default ButtonModal