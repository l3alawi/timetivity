import React, { useState } from 'react';

const Day = (props) => {
  const { boxSize, day, chooseDay, dayStyle } = props;
  const { dayName, timeactivity } = day;
  const [ chosen, ischosen ] = useState(false);
  const height = chosen ? boxSize - 150 : boxSize / 10;
  return (
    <div className={`box0 ${dayStyle}`} style={{height}} onClick={() => {ischosen(!chosen); !chosen ? chooseDay(day) : chooseDay({dayName:''})}}>
      <div className="columns is-mobile">
        <div className="column is-6">
          <h1 className="daysStyle">{dayName}</h1>
        </div>
        <div className="column is-6">
          <h1 className="secondStyle">{timeactivity}</h1>
        </div>
      </div>
    </div>
  )
};

export default Day;
