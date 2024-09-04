import React from 'react'
import axios from 'axios'

async function getData(){
    const res = await axios.get("https://previous-runs-api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,temperature_2m_previous_day1,temperature_2m_previous_day2,temperature_2m_previous_day3,temperature_2m_previous_day4,temperature_2m_previous_day5&past_days=7")
    return res.data
} 
getData();
export default async function Page() {
  const weather = await getData();
  return (
    <div>nhiệt độ, tình trạng thời tiết
      {weather.map((item:any)=>{
        return <li>{item.time}</li>
      })}
    </div>
  )
}
