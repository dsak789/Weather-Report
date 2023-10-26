import React, { useEffect, useState } from 'react'
import '../css/Home.css'
import axios from 'axios'
import {GrCalendar, GrFormClock, GrLocation} from 'react-icons/gr'
import {RiCelsiusFill, RiFahrenheitFill, } from 'react-icons/ri'
import sunny from '../Media/sunbanner.jpg'

const Home = () => {
    const [report,setReport] = useState([])
    const [current,setCurrent] = useState([])
    const [geolocation,setGeolocation] = useState("visakhapatnam")
    const [image,setImage] = useState("https://th.bing.com/th/id/OIP.2LVTmhBb4xutxuxHvtcuqwHaFS?pid=ImgDet&rs=1.jpg")

    
    const weather_api_get = async () =>{
        const response =await axios.post(`https://api.weatherapi.com/v1/current.json?key=116cfd599f244d92be531412231510&q=${geolocation}&aqi=no`,
        {
            "Connection": "keep-alive",
            "Vary": "Accept-Encoding",
            "CDN-PullZone": "93447",
            "CDN-Uid": "8fa3a04a-75d9-4707-8056-b7b33c8ac7fe",
            "CDN-RequestCountryCode": "GB",
            "Age": "0",
            "x-weatherapi-qpm-left": "4999993",
            "CDN-ProxyVer": "1.04",
            "CDN-RequestPullSuccess": "True",
            "CDN-RequestPullCode": "200",
            "CDN-CachedAt": "10/15/2023 08:56:20",
            "CDN-EdgeStorageId": "860",
            "CDN-Status": "200",
            "CDN-RequestId": "4a645fd904565e7fc13aae2af9baf4d9",
            "CDN-Cache": "HIT",
            "Accept-Ranges": "bytes",
            "Content-Length": "654",
            "Cache-Control": "public, max-age=180",
            "Content-Type": "application/json",
            "Date": "Sun, 15 Oct 2023 08:56:28 GMT",
            "Server": "BunnyCDN-DE1-1055",
            "Via": "1.1 varnish (Varnish/6.0)"
          })
        if (response!==""){
            console.log(response.data)
            setReport(response.data.location)
            setCurrent(response.data.current)
            // setCurrent(response.data.current)
            console.log(report.name)
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
    </div>
  )
}

export default Home