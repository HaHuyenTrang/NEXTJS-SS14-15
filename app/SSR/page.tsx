import React from 'react'
async function getData(){
    const res = await fetch(" https://jsonplaceholder.typicode.com/posts")
    const data = res.json();
    return data
}
export default async function page() {
    const data= await getData();
  return (
    <div>List of post
        {data.map((item:any)=>{
            return <li key={item.id}>{item.body}</li>
        })}
    </div>
  )
}
