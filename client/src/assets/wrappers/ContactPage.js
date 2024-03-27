import styled from 'styled-components'

const Wrapper = styled.section`



.container-form {
  margin-top: 10em;
  padding: 0 0 2em 0;



}

.infos-picture {
  display: flex;
  flex-direction: column;
  padding: 0 2.5em 0 .25em;
  margin-bottom: 2em;
}

.title {
  font-size: 1.20rem;
  font-weight: bolder;
  margin-bottom: 1em;
}

.contact-infos {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin-left: 2em;

}


.img {
    max-width: 66%;
    align-self: flex-end;
    margin-top: 1em;
}

p {
  max-width: 400px;
  text-align:left;
}



.contact-form {
  width: 100%;

}


@media (min-width: 900px) {
  .infos-picture{
    margin-bottom: 5.5em;
  }

  .img {
    margin-top:0;
  }


  .container-form {

  }

@media (min-width: 1200px) {

  .container-form{
    display:flex;
    border:none;
    align-items: flex-start;
  }


  .title{
    font-size: 1.3rem;
  }

  .contact-infos {
    margin-top: 1em;
    font-size: 1.05rem;
  }


  .img{
    width: 100%;
    align-self: flex-start;
    margin-top: 6em;
    margin-left: 2em;
  }


}







`

export default Wrapper