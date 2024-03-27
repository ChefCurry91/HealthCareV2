import styled from 'styled-components'

const Wrapper = styled.div`



.container-time-picker {
	position relative;
	padding: 0;
	padding: 5em 1em;
	cursor: ${props => (props.selectedTime ? 'pointer' : 'default')};


}

i:hover {
	cursor: pointer;
}


.title {
	text-align: center;
	margin-top: 2em;
	margin-bottom: 2em;
	font-size: 1.953rem;
}

.close-time-slot{
	position: absolute;
	top: 6.25em;
	right: 1.5em;
	cursor: pointer;
	z-index: 10;
	z-index: ${props => (props.selectedTime ? '100' : '10')};



}



.time-slot-container {
	display: grid;
	grid-template-columns: 100px 100px 100px;
	grid-gap: 2.25em .5em;
	justify-content: space-around;
	padding: 0 0 3em 0;
	border: 2px solid var(--green-middle);
	border-style: dotted;
	border-top: none;
	border-bottom: none;
	background: linear-gradient(#FFF, #d6e7e1);


}



.time-slot {
	text-align: center;
	border: 1px solid var(--green-middle);
	border-radius: var(--borderRadius);
	padding: 0.6em 0.3em;


	box-shadow: var(--shadow-2);
	background-color: var(--green-light);
	background-color: #86b7a5;
	transition: background-color 2s ease-out;
	font-weight: bolder;

}

.time-slot:hover {
	cursor:pointer;
	background-color: #FFF;
	color: black;

}


.display-time {
	color: #FFF;
	font-size: 1.25em;
	font-weight: bolder;
	transition: color 2s ease-out;
}

.no-display-time{
	display:none;
}

.time-slot:hover > .display-time {
	color: #000;
}

@media (min-width: 900px) {
	.time-slot-container{
		grid-template-columns: 100px 100px 100px 100px 100px;

	}
}


`

export default Wrapper