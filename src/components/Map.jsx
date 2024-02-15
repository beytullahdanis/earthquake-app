import { Box, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Circle, MapContainer, TileLayer, Tooltip } from 'react-leaflet';
import { getLastEarthquake } from '../services/Api';

function Map() {
  const [earthquake, setEarthquake] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchLastEarthquake = async () => {
      try {
        const lastEarthquake = await getLastEarthquake();
        setEarthquake(lastEarthquake);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching earthquakes:', error);
      }
    };

    fetchLastEarthquake()
  }, [])

  const formatQuakeTime = (date) => {
    const quakeDateUTC = new Date(date);
    const quakeDateTSI = new Date(quakeDateUTC.getTime() + (3 * 60 * 60 * 1000));
    const index = quakeDateTSI.toLocaleTimeString().lastIndexOf(':');
    const formattedTime = `${quakeDateUTC.toLocaleDateString()} ${quakeDateTSI.toLocaleTimeString().slice(0, index)}`;
    return formattedTime;
  }
  
  return (
    <div className='w-full md:w-3/4'>
      { loading ? 
        <Box sx={{ display: 'flex',justifyContent:'center', alignItems:'center', alignContent:'center', height:'100vh' }}>
        <CircularProgress />
        </Box>
        :
      <MapContainer center={[earthquake.latitude, earthquake.longitude]} zoom={6} scrollWheelZoom={false} className='h-screen w-full'>
      <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"/>
      <Circle
      center={[earthquake.latitude, earthquake.longitude]}
      radius={20000}
      fillColor= "red"
      fillOpacity={0.5}
      weight={3}
      color="red"
      >      
      <Tooltip direction='top' permanent>
          <p className='text-red-600 font-bold text-sm'>Earthquake</p>
        <span><b>Location:</b> {`${earthquake.location}`}</span><br/>
        <span><b>Magnitude:</b> {`${earthquake.magnitude} (${earthquake.type})`}</span><br/>
        <span><b>Date:</b> {formatQuakeTime(earthquake.date)}</span>
        </Tooltip>
      </Circle>
    </MapContainer>
  
  }
    </div>
  )
}

export default Map;