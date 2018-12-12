import React, { useState, useEffect } from 'react';
import moment from 'moment';

const Header = () => {
  const toDay = moment().format('dddd D MMMM');
  const timeNow = moment().format('HH:mm:ss');
  const [ time, tick ] = useState(timeNow);
  const [ day, getDay ] = useState(toDay);
  useEffect(() => {
    const intervalID = setInterval(
      tick(moment().format('HH:mm:ss')), 1000
    )
    return () => {
      clearInterval(intervalID);
    }
  });
  useEffect(() => getDay(moment().format('dddd D MMMM')))
  return(
    <div className="columns is-mobile is-gapless is-vcentered">
      <div className="column is-6">
        <p className="dateStyle">{ day }</p>
      </div>
      <div className="column is-6">
        <p className="timeStyle">{ time }</p>
      </div>
    </div>
  )
}





export default Header;
