import React, { useState, useEffect } from 'react';
import moment from 'moment';

const Header = () => {
  const toDay = moment().format('YYYY-MM-DD');
  const timeNow = moment().format('h:mm:ss');
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
  useEffect(() => getDay(moment().format('YYYY-MM-DD')))
  return(
    <div className="columns is-mobile">
      <div className="column is-6">
        <h1>{ day }</h1>
      </div>
      <div className="column is-6">
        <h1>{ time }</h1>
      </div>
    </div>
  )
}





export default Header;
