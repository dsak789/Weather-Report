import React, { useEffect, useState } from 'react'
import '../css/Home.css'
import axios from 'axios'
import {GrCalendar, GrFormClock, GrLocation} from 'react-icons/gr'
import {RiCelsiusFill, RiFahrenheitFill, } from 'react-icons/ri'
import sunny from '../Media/sunbanner.jpg'
import WeatherDisplay from './WeatherDisplay'

const Home = () => {
    const [report,setReport] = useState([])
    const [current,setCurrent] = useState([])
    const [geolocation,setGeolocation] = useState("visakhapatnam")
    const [image,setImage] = useState("https://th.bing.com/th/id/OIP.2LVTmhBb4xutxuxHvtcuqwHaFS?pid=ImgDet&rs=1.jpg")

    
    const weather_api_get = async () =>{
        const response =await axios.get(`https://api.weatherapi.com/v1/current.json?key=ef7b82e65eae45b688f122558240301&q=${geolocation}&aqi=no`)
        if (response!==""){
            console.log (response.data)
            setReport(response.data)
            // setReport(response.data.location)
            // setCurrent(response.data.current)
            // setCurrent(response.data.current)
            // console.log(report.name)
        } 
        else{
            console.log("no report")
        }
    }
    const img_change=()=>{
        if(current.temp_c>26){
            setImage(sunny)
        }
    }
    useEffect(() => {
        weather_api_get();
        img_change();
    }, []);
    
    
    console.log(report)
  return (
    <div className='home-main'>
        <div className='weather-report'>
            <div className='current-weather'>
                <div className='live-report'>
                    <h3><GrLocation/>{report.name}</h3>
                    <h3><GrCalendar/>{report.localtime}<GrFormClock/></h3>
                    <h3>{current.temp_c}<RiCelsiusFill/> { current.temp_f}<RiFahrenheitFill/></h3>
                    <h5>Updated On {current.last_updated}</h5>
                </div>
                <div className='live-report'>
                </div>
            </div>
        </div>
        <WeatherDisplay data={report}/>
    </div>
  )
}

export default Home