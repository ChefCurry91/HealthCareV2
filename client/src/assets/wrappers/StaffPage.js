import styled from 'styled-components'

const Wrapper = styled.section`

background: linear-gradient(#ECE9E6,#FFFFFF);
//background: linear-gradient(#E0EAFC,#CFDEF3);


.grid {
	display: grid;
	padding: 0 0 3em 0;
	opacity: 0.95;
	//position:relative

}

.title {
	text-align:center;
	font-weight:bolder;
	font-size: 2rem;
	width: 25rem;
	margin: 5.5em auto 1em auto;
	padding: .5em;
	text-shadow: 1px 1px 1px var(--green-light);
	border-radius: 12px;


}



.card {
	width: 320px;
	margin: 1.5em auto 2em;
	padding: 1.5em 1em 1em 1em;
	background:transparent;
	background:var (--primary-900);
	box-shadow:  var(--shadow-4);
	border-radius: 12px;
	z-index: -10;
	display:flex;
	flex-direction: column;
	align-items: center;



}


img {
	width: 100%;
	box-shadow: var(--shadow-4);

}

.name,.role{	
	font-weight: bolder;

}

.name {
	margin-top: 0.25em;
	font-size: 1.5rem;
}
.role{
	margin-top: 1.30em;
	font-size: 1.15rem;
}

p {
	max-width: 300px;
	text-align: justify;
	margin: .5em auto;
	font-weight: bolder;

}





@media (min-width: 900px) {

	.grid {
		grid-template-columns: 1fr 1fr;

	}

	.title {
		font-size: 2.5em;
		margin-top: 3.5em;
	}
	.card {
		width: 370px;
		padding: 1.7em 1em 1em 1em;
		margin: 1em auto 2em;


	}

	.name,.role{	
		font-size: 1.35rem;
	}




@media (min-width: 1200px) {

	.grid {
		grid-template-columns: 1fr 1fr 1fr;
		padding: 0 0 5em 0;


	}

	.title {
		font-size: 3em;
	}



`
export default Wrapper