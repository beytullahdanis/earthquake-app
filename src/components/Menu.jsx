import React, { useEffect, useState } from 'react'
import MenuItem from './MenuItem'
import { getEarthquakesLast1Day } from '../services/Api';
import SkeletonLoader from './SkeletonLoader';


function Menu() {
  const [earthquakes, setEarthquakes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchEarthquakes = async () => {
      try {
        const earthquakeData = await getEarthquakesLast1Day();
        setEarthquakes(earthquakeData);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching earthquakes:', error);
      }
    };

    fetchEarthquakes()
  }, []);
  return (
    <div className='w-full md:w-1/4 bg-white border-x border-gray-300 overflow-y-auto h-screen'>
        <ul>
           {!loading ? earthquakes.map((quake) => <MenuItem 
           key={quake.eventID} 
           magnitude={quake.magnitude}
           location={quake.location} 
           date={quake.date}/>)
          : 
          <div className='flex flex-col gap-3'>
            <SkeletonLoader/>
            <SkeletonLoader/>
            <SkeletonLoader/>
            <SkeletonLoader/>
            <SkeletonLoader/>
            <SkeletonLoader/>
            <SkeletonLoader/>
          </div>
        } 
        </ul>
    </div>
  )
}

export default Menu