import styled from 'styled-components'

const Wrapper = styled.section`
  


  .full-page {
    display: grid;
    align-items: center;
    background: linear-gradient(#FFEEEE, #DDEFBB);

  }



  .logo {
    display:flex;
    margin: 1em auto 1.38em auto;
    justify-content: center;
  }

  .logo-text {
    color: black;
    font-size: 1.5rem;
    font-weight:bolder;
    margin-top: 0.27em;
    margin-left: 0.25em;

  }

  .form {
    max-width: 400px;
    border-top: 5px solid var(--green-light);
    box-shadow:  var(--shadow-4);
    margin-top: 10em;

  }

  h3 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }

@media (min-width: 1200px) {

  .full-page {
    background: linear-gradient(#FFEEEE, #DDEFBB);

  }



}






`
export default Wrapper
