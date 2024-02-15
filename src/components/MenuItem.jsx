import React from 'react'

function MenuItem({eventID, location, date, magnitude}) {
  if (!magnitude.toString().includes('.')) {
    magnitude += '.0';
  }
  const formatQuakeTime = (date) => {
    const quakeDateUTC = new Date(date);
    const quakeDateTSI = new Date(quakeDateUTC.getTime() + (3 * 60 * 60 * 1000));
    const index = quakeDateTSI.toLocaleTimeString().lastIndexOf(':');
    const formattedTime = `${quakeDateUTC.toLocaleDateString()} ${quakeDateTSI.toLocaleTimeString().slice(0, index)}`;
    return formattedTime;
  }

  return (
    <div className='flex items-center p-5 border-b border-b-slate-300 gap-4' key={eventID}>
    <div className={`rounded-full p-3 border font-bold text-white ${magnitude >= 5.0 ? 'bg-red-500' : (magnitude >= 3.0 ? 'bg-yellow-500' : 'bg-neutral-500')}`}>
      {magnitude}
    </div>    
    <li>
     <p className='font-semibold'>{location}</p>
     <p className='font-normal'>{formatQuakeTime(date)}</p>
      </li>
    </div>
  )
}

export default MenuItem