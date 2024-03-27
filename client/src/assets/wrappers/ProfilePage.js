import styled from 'styled-components'

const Wrapper = styled.section`
	
	

	  position: ${props => (props.isEditProfile ? 'fixed' : 'static')}; /* Change position based on isEditProfile */



	.container-personal-infos{
		display: flex;
		width: 400px;
		grid-template-columns: 200px 200px;
		padding: 1em;
		margin: 0 auto;
		margin-top: 6em;
		flex-direction: column;
		align-items: center;
		font-weight: bolder;
		font-size: 1.05rem;
		opacity: ${props => (props.isEditProfile ? 0 : 1)};

	}



	.first-and-last-names{
		font-size: 2rem;
	
		grid-column: span 2;

	}


	.title-info {
		grid-column: span 2;

	}



	.container-appointments {
		display: flex;
		flex-direction: column;
		box-shadow:  var(--shadow-1);
		border-radius: var(--borderRadius);
		border: 1px solid var(--grey-100);
		width: 400px;
		//padding: 1.5em;
		padding: 1.5em 1.5em 0 1.5em;
		margin: 1em auto 3em auto;
		align-items:center;
		font-weight:bolder;
		opacity: ${props => (props.isEditProfile ? 0 : 1)};

	//	display:grid;
	//	justify-content: center;
	//	border: 1px solid black;
	//	grid-gap: 1em 0 0 0;


		

	}

	.no-appointments {
		font-weight:bolder;
		margin-bottom: 1.5em;
		font-size: 1.5rem;
		letter-spacing: var(--letterSpacing);
		display:block;
		text-align:center;
		opacity: ${props => (props.isEditProfile ? 0 : 1)};



	}

	.no-appointments-yet{
		margin-top: 1.25em;
	}

	.appointments-booked {
		font-weight: bolder;
		letter-spacing: var(--letterSpacing);
		font-size: 1.25rem;

	}

	.container-appointments-booked {
		display:grid;
		grid-gap:  .75em 0;
		margin-top: 1em;
		margin-bottom: 2.5em;
		justify-content: center;
		border-radius: var(--borderRadius);
		border: 2px solid var(--green-middle);
		border-style: dotted;
		padding: 1em 1em;


	}

	.future-appointments, .appointments-history {
		font-weight: bolder;
		letter-spacing: var(--letterSpacing);
		font-size: 1.5rem;
		text-align:center;


	}


	.date, .time {
		font-weight: bolder;
		letter-spacing: var(--letterSpacing);
		font-size: 1.20rem;
	}

	.time{
		text-align:center;
		margin:.25em;
	}

`

export default Wrapper

