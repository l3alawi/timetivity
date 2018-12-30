import React from 'react';


const DayDetail = (props) => {
  const { day } = props;
  return (
    <div>
      {`hello from day details of ${day}`}
    </div>
  )
}

export default DayDetail;
