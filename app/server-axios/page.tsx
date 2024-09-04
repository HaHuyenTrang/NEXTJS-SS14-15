import axios from 'axios'
import React from 'react'
async function getData() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log(res);
    return res.data
    
}
getData();
export default async function Page() {
    const user = await getData();
  return (
    <div>tìm dữ liệu server bằng axios

        {user.map((item:any)=>{
            return <li>tên: {item.name}
            <br />
            _____________________________
            </li>
        })}
    </div>
  )
}
