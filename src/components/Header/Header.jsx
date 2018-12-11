import React, { useState, useEffect } from 'react';
import moment from 'moment';

const Header = () => {
  const toDay = moment().format('dddd D MMMM');
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
  useEffect(() => getDay(moment().format('dddd D MMMM')))
  return(
    <div className="">
      <h1 className="dateStyle">{ day }</h1>
    </div>
  )
}





export default Header;
