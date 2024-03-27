import styled from 'styled-components'

const Wrapper = styled.section`
	
.small-nav-container {
	display: flex;
	flex-direction: column;
	min-height: calc(66vh - var(--nav-height));
	overflow-y: scroll;
	width:100%;
	position: absolute;
	left:0;
	top:0;
	background: var(--white);
	box-shadow: var(--shadow-1);
	z-index: 10;
	position: fixed ;
    top: 0;

}




.logo-hamburger-container {
	display: flex;
	flex-direction: row; 
	justify-content: space-between;
	padding: 2em 2em;
}

.logo {
	display: flex;
    align-items: flex-end;


}



.logo-text {
	color: black;
    margin-bottom: 0;
    margin-top:0
	font-weight:bolder;
    align-self: flex-end;
	font-size:1.5rem;


}



.toggle-btn {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    display: flex;
    align-items: flex-end;

}



.nav-links {
	display:unset;
	display:flex;
	flex-direction: column; 
	padding: 0 2em 0 2em;
	letter-spacing: var(--letterSpacing);
	font-size: 1.25rem;
	margin-top: 1em;


}

.nav-link {
	line-height: 2.5;
	color: var(--black);
	font-weight: bolder;

}



`

export default Wrapper;