import styled from 'styled-components'

const Wrapper = styled.nav`

display: flex;
padding:0;
background-color: var(--backgroundColor);
background: #FFF;



.nav-center {
	display: flex;
    width: 100%;
    align-items: flex-end;
	justify-content: space-between;
	padding: 2em 2em;
    box-shadow: var(--shadow-1);
    position: fixed ;
    top: 0;
    background: #FFF;
    z-index: 10;


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

.btn-container {
    position: relative;
}

.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    position: relative;
    background-color: #a6cabd;
    background-color: transparent;
    border: var(--green-light) 2px solid;
    border-radius: var(--borderRadius);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    color: black;
}



.dropdown {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    background: var(--primary-100);
    background: var(--white);
    box-shadow: var(--shadow-2);
    padding: .5rem;
    text-align: center;
    visibility: hidden;
    border-radius: var(--borderRadius);
    border: 2px solid var(--green-light);
}



.show-dropdown {
    visibility: visible;
}

.dropdown-btn {
    background: transparent;
    border-color: transparent;
    color: var(--black);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    cursor: pointer;
    font-weight:bolder;


}



.nav-links {
    
    display: flex;
    display:none;

}

@media (min-width: 900px) { 

    .nav-links {
        display: unset;
        width: 66%;
        display:flex;
        justify-content: space-between;
        font-weight:bolder;
        color: #000;
        margin-bottom: .2em;
    }

    .nav-link {
        font-size:1.25rem;
        color: #000;
    }

    .btn-hamburger {
        display:none;
    }
}




`

export default Wrapper