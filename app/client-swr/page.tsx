"use client"

import useSWR from 'swr'
import axios from 'axios'
// hàm lấy data
const getData=(url:string)=>axios.get(url).then(res=>{return res.data})

export default function Page() {
    const {data, error}=useSWR(
        "https://jsonplaceholder.typicode.com/users",
        getData
    )
    if(error) return <div>thất bại...</div>
     console.log(data);
    
    if(!data) return <div>đang tải...</div>
   
  return (
    <div>fetching data với thư viện swr
        {data.map((item:any)=>{
            return <li key={item.id}>tên: {item.name}
            <br />
            _____________________________
            </li>
        })}
    </div>
  )
}

