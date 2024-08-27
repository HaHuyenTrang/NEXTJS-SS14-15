import { NextResponse } from "next/server";
let users =[
    {
        id:1,
        name:"Trang",
        address:"Sơn La"
    },
    {
        id:2,
        name:"Châu",
        address:"Bắc Yên"
    }
]
let product=[
    {
        id:1,
        name:"cam",
        price:"12",
        image:"https://th.bing.com/th/id/OIP.8ZH6TAG6zPa7kv3S3RenBwAAAA?w=266&h=400&rs=1&pid=ImgDetMain"
    },
    {
        id:2,
        name:"xoài",
        price:"18",
        image:"https://phunugioi.com/wp-content/uploads/2022/01/Hinh-anh-qua-Xoai.jpg"
    },
    {
        id:3,
        name:"dâu",
        price:"28",
        image:"https://nhadepso.com/wp-content/uploads/2023/03/chia-se-50-hinh-anh-dau-tay-dep-cute-do-mong-de-thuong_3.jpg"
    }
]


export  async function GET(){
 return NextResponse.json(users),NextResponse.json(product)
 
} 
// bài 5
// export async function GET() {
//     const response = await fetch("https://fakestoreapi.com/products ");
//     const data = await response.json();
//     return NextResponse.json(data);
//   }