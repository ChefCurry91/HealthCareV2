import styled from 'styled-components'

const Wrapper = styled.section`



.container {
  border:1px solid black;
  padding: 4em 0 0 0;
  display:flex;
  flex-direction: column; 
  align-items: center;
  border: 2px solid var(--green-middle);
  box-shadow:  var(--shadow-4);
  border-radius: var(--borderRadius);
  margin-top: 8em;
  margin-bottom: 2em;
  border-style: dashed;

}





.react-calendar {
  width: 400px;
  max-width: 100%;
  background: var(--white);
 // border: 2px solid var(--green-middle);
 // box-shadow:  var(--shadow-4);
  font-family: var (--bodyFont);
  font-weight: bolder;
  line-height:  1.125em;
  letter-spacing: var(--letterSpacing);
  background: white;
  color: #000;
//  border-radius: var(--borderRadius);
  padding: 3em;


}



.react-calendar--doubleView {
  width: 700px;
}

.react-calendar--doubleView .react-calendar__viewContainer {
  display: flex;
  margin: -0.5em;

}

.react-calendar--doubleView .react-calendar__viewContainer > * {
  width: 50%;
  margin: 0.5em;
}


.react-calendar,
.react-calendar *,
.react-calendar *:before,
.react-calendar *:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;

}



.react-calendar button {
  margin: 0;
  border: 0;
  outline: none;
  
}

.react-calendar button:enabled:hover {
  cursor: pointer;
  border: 2px solid var(--green-light);
  border-radius: var(--borderRadius);
  box-shadow: var(--box-shadow-2);


}

.react-calendar__navigation {
  display: flex;
  height: 44px;
  margin-bottom: 1.1em;
  border-bottom: 3px solid var(--green-light);
  font-family: var(--bodyFont);
  letter-spacing: var(--letterSpacing);
  font-size: 1.5em;


}

.react-calendar__navigation button {
  min-width: 44px;
  background: none;
}

.react-calendar__navigation button:disabled {
    background-color: #f0f4f8;



}

.react-calendar__navigation button:enabled:hover,
.react-calendar__navigation button:enabled:focus {
  background-color: white;


}

.react-calendar__month-view__weekdays {
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.25em;
  color: black;


}
.react-calendar__month-view__weekdays__weekday {
  padding: 0.5em;
}
.react-calendar__month-view__weekNumbers .react-calendar__tile {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75em;
  font-weight: bold;

}
.react-calendar__month-view__days__day--weekend {
  color: #d10000;

}
.react-calendar__month-view__days__day--neighboringMonth {
  color: #757575;
}
.react-calendar__year-view .react-calendar__tile,
.react-calendar__decade-view .react-calendar__tile,
.react-calendar__century-view .react-calendar__tile {
  padding: 2em 0.5em;
}


.react-calendar__tile {
  max-width: 100%;
  padding: 15px 6.6667px;
  background: none;
  text-align: center;
  line-height: 16px;
  font-size: 0.9em;
}


.react-calendar__tile:disabled {
  opacity: 0.35;
  background-color:white;
 


}
.react-calendar__tile:enabled:hover,
.react-calendar__tile:enabled:focus {
  background-color: #e6e6e6;

}
.react-calendar__tile--now {
  background: white;
  color: #000;

}
.react-calendar__tile--now:enabled:hover,
.react-calendar__tile--now:enabled:focus {
  background: #ffffa9;

}
.react-calendar__tile--hasActive {
  background: #76baff;



}
.react-calendar__tile--hasActive:enabled:hover,
.react-calendar__tile--hasActive:enabled:focus {
  background: #a9d4ff;

}



.react-calendar__tile--active {
  background: white;
  color: #000;
}

.react-calendar__tile--active:enabled:hover,
.react-calendar__tile--active:enabled:focus {

}

.react-calendar--selectRange .react-calendar__tile--hover {
  background-color: #e6e6e6;

}




// style label month and year on top 


.react-calendar__navigation__label {
  pointer-events: none; // not allow to click on it
  cursor: not-allowed; // not allow to click on it

}

// style arrow button prev and next 


.react-calendar__navigation button {
    font-weight: bolder;
    font-size: 0.75em; 
}

// Make button arrow prev month opaque for month already passt

.react-calendar__navigation button:disabled {
    opacity: 0;
}

// style applied to MON, TUE, WED, THU...

abbr[title] {
  text-decoration: none;
  font-size: 0.70em;
  color: var(--green-dark);
  font-weight:bolder;
  border-bottom: 1px solid var(--green-dark);

}



.react-calendar__tile:enabled:hover,
.react-calendar__tile:enabled:focus {
  background: var(--white);
  color: var(--black);
  border-radius: 0;
}



// Make sure that weekend do not appear

.react-calendar__month-view__days > .react-calendar__tile,
.react-calendar__month-view__weekdays__weekday {
  flex-basis: 20% !important;
  max-width: 20% !important;
}

.react-calendar__month-view__weekdays__weekday:nth-child(6),
.react-calendar__month-view__weekdays__weekday:nth-child(7) {
  display: none !important;
}

.react-calendar__month-view__days__day--weekend {
  display: none !important;
}


@media (min-width: 900px) {

  .container {
    border-style: dotted;
  }

  .title {
    font-size: 2em;
  }

  .react-calendar {
   width: 720px;
   border: none
 }

  .react-calendar__navigation button {
    font-size: 1.25em;
  }

  abbr[title] {
  font-size: 1.25em;
  color: var(--green-dark);

}

.react-calendar__tile {
  line-height: 20px;
  font-size: 1.15em;
}







}

`

export default Wrapper
