import React, { useState } from 'react';
import moment from 'moment';

import Day from './Day';

const Days = [
  {
    dayName: 'Monday',
    timeactivity: '3:30',
  },
  {
    dayName: 'Tuesday',
    timeactivity: '5:00',
  },
  {
    dayName: 'Wednesday',
    timeactivity: '6:30',
  },
  {
    dayName: 'Thursday',
    timeactivity: '2:15',
  },
  {
    dayName: 'Friday',
    timeactivity: '8:30',
  },
  {
    dayName: 'Saturday',
    timeactivity: '0:30',
  },
  {
    dayName: 'Sunday',
    timeactivity: '1:30',
  }
];

const createDays = (days, size, dayChosen, chooseDay) => {
  const weekdays = [];
  const { dayName } = dayChosen;
  for (let i = 0, l = days.length; i < l; i += 1) {
    let dayStyle = '';
    if (dayName) {
      dayStyle = 'hideDay';
      if (dayName === days[i].dayName) {
        dayStyle = 'showDay';
      }
    }
    weekdays.push(<Day
      key={`weekDay ${i}`}
      boxSize={size}
      day={days[i]}
      dayStyle={dayStyle}
      chooseDay={chooseDay} />);
  }
  return weekdays;
}

const WeekDays = () => {
  const windowSize = window.innerHeight;
  const [ dayChosen, chooseDay ] = useState({dayName: ''});
  console.log(dayChosen);
  return (
    <div>
      { createDays(Days, windowSize, dayChosen, chooseDay) }
    </div>
  )
}

export default WeekDays;
