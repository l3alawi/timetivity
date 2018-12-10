import React, { useState, useEffect } from 'react';
import moment from 'moment';

const Header = () => {
  const timeNow = moment().format('MMMM Do YYYY, h:mm:ss a');
  const [ time, tick ] = useState(timeNow);
  useEffect(() => {
    const intervalID = setInterval(
      tick(moment().format('MMMM Do YYYY, h:mm:ss a')), 1000
    )
    return () => {
      clearInterval(intervalID);
    }
  });
  return(
    <div>
      <h1>{ time }</h1>
    </div>
  )
}





export default Header;
