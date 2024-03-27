import styled from 'styled-components'

const Wrapper = styled.section`



.page {
    min-height: calc(120vh - var(--nav-height));
    display: grid;
    align-items: center;
  }

.info {
    text-align:left;
    margin-top: auto;
    font-weight:bolder;
    max-width: 400px;
}

.main-img {
    width:400px;
    margin: 0 auto;
}

@media (min-width: 900px) {
    
    .page {
      grid-template-columns: 1fr;
      align-items:flex-start;


    }

    .info {
        margin-top: 9em;
    }

    .main-img {
      display: block;
      width:400px;
      margin-top: 0;
      margin-right: 2em;
      margin-bottom: 7em;

    }
}



`

export default Wrapper