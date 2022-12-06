import React from "react"
import ProductItem from "./ProductItem"

const item ={"PCWork": [
    {
        "id":"pw01",
        "image":"img/PCWork/PC1.PNG",
        "productName":"G-CREATOR C301",
        "so_luong_con": "50",
        "gia_thanh":"23,500,000 đ"
    },
    {
        "id":"pw02",
        "image":"img/PCWork/PC2.PNG",
        "productName":"G-CREATOR C501",
        "so_luong_con": "50",
        "gia_thanh":"23,000,000 đ"
    },
    {
        "id":"pw03",
        "image":"img/PCWork/PC3.PNG",
        "productName":"G-CREATOR C701",
        "so_luong_con": "50",
        "gia_thanh":"24,000,000 đ"
    },
    {
        "id":"pw04",
        "image":"img/PCWork/PC4.PNG",
        "productName":"G-CREATOR C302",
        "so_luong_con": "50",
        "gia_thanh":"24,500,000 đ"
    },
    {
        "id":"pw05",
        "image":"img/PCWork/PC5.PNG",
        "productName":"G-CREATOR C502",
        "so_luong_con": "50",
        "gia_thanh":"25,500,000 đ"
    },
    {
        "id":"pw06",
        "image":"img/PCWork/PC6.PNG",
        "productName":"G-CREATOR C702",
        "so_luong_con": "50",
        "gia_thanh":"26,500,000 đ"
    },
    {
        "id":"pw07",
        "image":"img/PCWork/PC7.PNG",
        "productName":"RATCHET M",
        "so_luong_con": "50",
        "gia_thanh":"25,000,000 đ"
    },
    {
        "id":"pw08",
        "image":"img/PCWork/PC8.PNG",
        "productName":"VIPER M",
        "so_luong_con": "50",
        "gia_thanh":"26,000,000 đ"
    },
    {
        "id":"pw09",
        "image":"img/PCWork/PC9.PNG",
        "productName":"IVY 10M",
        "so_luong_con": "50",
        "gia_thanh":"25,250,000 đ"
    },
    {
        "id":"pw10",
        "image":"img/PCWork/PC10.PNG",
        "productName":"YUUMI M",
        "so_luong_con": "50",
        "gia_thanh":"28,000,000 đ"
    },
    {
        "id":"pw11",
        "image":"img/PCWork/PC11.PNG",
        "productName":"G-CREATOR C704",
        "so_luong_con": "50",
        "gia_thanh":"23,700,000 đ"
    },
    {
        "id":"pw12",
        "image":"img/PCWork/PC12.PNG",
        "productName":"G-CREATOR C503",
        "so_luong_con": "50",
        "gia_thanh":"25,500,000 đ"
    }]}

function PC(){
    return(
    <React.Fragment>
        <div className="prod-items section-items" id="Laptop">
            {item.PCWork.map(product=>(
                <ProductItem 
                key={product.id}
                image={product.image}
                id={product.id}
                gia_thanh={product.gia_thanh}
                />
            ))
            
            }
        </div>
    </React.Fragment>
    )
    
}
export default PC