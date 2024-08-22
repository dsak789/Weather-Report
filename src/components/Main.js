import React, { useEffect, useState } from 'react'
import WeatherDisplay from './WeatherDisplay'
import axios from 'axios';
import TextField from '@mui/material/TextField';
const Main = () => {

  const [report,setReport] = useState(null);
  const [geolocation,setLocation] = useState('')

  const getreport = ()=>{
    axios.get(`https://api.weatherapi.com/v1/current.json?key=ef7b82e65eae45b688f122558240301&q=${geolocation}&aqi=no`)
    .then((res)=>{
      console.log(res.data)
      setReport(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from submitting
    getreport(); // Trigger the API call
  };
  useEffect(()=>{
    getreport();
  },[])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter Location ' className='inputlocation' value={geolocation} onChange={(e)=>{setLocation(e.target.value)}}/>
      </form>
        {report && <WeatherDisplay repo={report}/>}
    </div>
  )
}

export default Main