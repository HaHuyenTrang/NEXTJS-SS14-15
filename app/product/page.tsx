import { log } from "console";

async function getProduct() {
    const res = await fetch("http://localhost:3001/api")
    const data = res.json()
   
    return data
    
    
    
}
export default async function page() {
   const product= await getProduct(); 
   console.log(product);
  return (
    <div>Danh sách sản phẩm
        {product.map((item:any)=>{
           return <ul key={item.id}>
                  <li>{item.name}</li>
                  <li>{item.price}</li>
                  <li><img src={item.image} alt="" /></li>

           </ul>
        })}
    </div>
  )
}
