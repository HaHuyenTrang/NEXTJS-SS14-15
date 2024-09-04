import React from 'react'
async function getData(){
      const res = await fetch("https://jsonplaceholder.typicode.com/users")
      const data = res.json();
      return data
}
export default async function Page() {
    const users = await getData();
  return (
    <div>tìm dữ liệu server  với fetch
        {users.map((item:any)=>{
            return <li>tên: {item.name}
                      <br />
                       _____________________________
            </li>
        })}
    </div>
  )
}
