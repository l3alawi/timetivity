import React, { useState, useEffect } from 'react';
import moment from 'moment';

// extract second from moment object
const setTime = () => {
  const m = moment();
  const second = m.format('ss');
  const minute = m.format('mm');
  const hour = m.format('H');
  return {
    hour,
    minute,
    second
  };
}

const Header = () => {
  const toDay = moment().format('dddd D MMMM');
  const [ time, tick ] = useState(setTime());
  const [ day, getDay ] = useState(toDay);
  // seting up the the clock
  useEffect(() => {
    const intervalID = setInterval(
      () => tick(setTime()), 1000
    );
    return () => {
      clearInterval(intervalID);
    }
  }, [time]);
  useEffect(() => getDay(moment().format('dddd D MMMM')), [day]);
  const { hour, minute, second } = time;
  return(
    <div className="columns is-mobile is-gapless is-vcentered">
      <div className="column is-6">
        <p className="dateStyle">{ day }</p>
      </div>
      <div className="column is-6">
        <p className="timeStyle">
          {`${hour} : ${minute} `}<sup className="secondStyle">{second}</sup>
        </p>
      </div>
    </div>
  )
}





export default Header;
