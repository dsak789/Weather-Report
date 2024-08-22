import React, { useState } from 'react'
import '../css/WeatherDisplay.css'
import {GrCalendar, GrFormClock, GrLocation} from 'react-icons/gr'
import {RiCelsiusFill, RiFahrenheitFill, } from 'react-icons/ri'

const WeatherDisplay = (report) => {
    const data = report.repo
   
  return (
    <>
        <div className='weather-report'>
            <div className='current-weather'>
                <h2>{data.location.name ? data.location.name:"Current"} <GrLocation/></h2>
                <div className='cur-report'>
                    <img src={data.current.condition.icon} title={data.current.condition.text}/>
                    <div className='temp-report'><b>{data.current.temp_c}<RiCelsiusFill/> | {data.current.temp_f}<RiFahrenheitFill/></b></div>
                    <div className='temp-report-feelslike'>Feels Like <b>{data.current.feelslike_c}<RiCelsiusFill/> | {data.current.temp_f}<RiFahrenheitFill/></b></div>
                </div>
                <div className='other-readings'>
                    <table>
                            <tr>
                                <th>Wind</th>
                                <th>Humidity</th>
                                <th>Visibility</th>
                                <th>Pressure</th>
                                <th>Dew Point</th>
                        </tr>
                        <tr>
                            <td>{data.current.wind_kph}Kp/h</td>
                            <td>{data.current.humidity}%</td>
                            <td>{data.current.vis_km}Km</td>
                            <td>{data.current.pressure_mb}Mb</td>
                            <td>{data.current.dewpoint_c}<sup>o</sup></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </>
  )
}

export default WeatherDisplay