import React from 'react';
import ProductItem from "./ProductItem.js"
const item= {
    "CPU":[
   {
        "id":"C01",
        "image":"img/CPU/CPU.PNG",
        "productName":"Intel Pentium",
        "so_luong_con":"100",
        "gia_thanh":"1,290,000 đ"
   },
   {
        "id":"C02",
        "image":"img/CPU/CPU2.PNG",
        "productName":"Intel Core i7 Gen 12",
        "so_luong_con":"100",
        "gia_thanh":"1,990,000 đ"
   },
   {
        "id":"C03",
        "image":"img/CPU/CPU3.PNG",
        "productName":"Intel Core i5 Gen 10",
        "so_luong_con":"100",
        "gia_thanh":"1,590,000 đ"
    },
    {
        "id":"C04",
        "image":"img/CPU/CPU4.PNG",
        "productName":"Intel Core i7 Gen 10",
        "so_luong_con":"100",
        "gia_thanh":"1,790,000 đ"
    },
    {
        "id":"C05",
        "image":"img/CPU/CPU5.PNG",
        "productName":"Intel Core i9 Unclocked",
        "so_luong_con":"50",
        "gia_thanh":"2,790,000 đ"
    },
    {
        "id":"C06",
        "image":"img/CPU/CPU6.PNG",
        "productName":"Intel Core i9 Gen 10",
        "so_luong_con":"50",
        "gia_thanh":"2,290,000 đ"
    }
  
  
  ],
    "LaptopAcer":[
    {
        "id":"L01",
        "image":"img/LapTop/Ltop1.PNG",
        "productName":"Acer Nitro 5 AN515 44 R9JM",
        "so_luong_con":"50",
        "gia_thanh":"15,290,000 đ"
    },
    {
        "id":"L02",
        "image":"img/LapTop/Ltop2.PNG",
        "productName":"Acer Nitro 5 AN515 55 5923",
        "so_luong_con":"50",
        "gia_thanh":"19,290,000 đ"
    },
    {
        "id":"L03",
        "image":"img/LapTop/Ltop3.PNG",
        "productName":"Acer Nitro 5 AN515 45 R3SM",
        "so_luong_con":"50",
        "gia_thanh":"17,290,000 đ"
    },
    {
        "id":"L04",
        "image":"img/LapTop/Ltop4.PNG",
        "productName":"Acer Nitro 5 AN515 55 51N4",
        "so_luong_con":"50",
        "gia_thanh":"16,590,000 đ"
    },
    {
        "id":"L05",
        "image":"img/LapTop/Ltop5.PNG",
        "productName":"Acer Nitro 5 AN515 56 79U2",
        "so_luong_con":"50",
        "gia_thanh":"20,590,000 đ"
    }
  ],  "LaptopAsus":[
    {
        "id":"L06",
        "image":"img/LapTop/Ltop6.PNG",
        "productName":"Asus TUF F15 FX506LH HN002T",
        "so_luong_con":"50",
        "gia_thanh":"18,390,000 đ"
    },
    {
        "id":"L07",
        "image":"img/LapTop/Ltop7.PNG",
        "productName":"Asus TUF F15 FX506LH HN002T",
        "so_luong_con":"50",
        "gia_thanh":"16,190,000 đ"
    },
    {
        "id":"L08",
        "image":"img/LapTop/Ltop8.PNG",
        "productName":"Asus TUF A17 FA70611 H72B6T",
        "so_luong_con":"50",
        "gia_thanh":"15,890,000 đ"
    },
    {
        "id":"L09",
        "image":"img/LapTop/Ltop9.PNG",
        "productName":"Asus TUF F19 FX506LI HN096T",
        "so_luong_con":"50",
        "gia_thanh":"19,190,000 đ"
    },
    {
        "id":"L10",
        "image":"img/LapTop/Ltop10.PNG",
        "productName":"Asus TUF Gaming F19 FX506LU HN138T",
        "so_luong_con":"50",
        "gia_thanh":"19,990,000 đ"
    }
  ], "LaptopMSI":[
    {
        "id":"L11",
        "image":"img/LapTop/Ltop11.PNG",
        "productName":"MSI GF63 Thin 9SCSR 1057VN",
        "so_luong_con":"50",
        "gia_thanh":"21,190,000 đ"
    },
    {
        "id":"L12",
        "image":"img/LapTop/Ltop12.PNG",
        "productName":"MSI GF63 Thin 10SCSR 014VN",
        "so_luong_con":"50",
        "gia_thanh":"20,190,000 đ"
    },
    {
        "id":"L13",
        "image":"img/LapTop/Ltop13.PNG",
        "productName":"MSI GF63 Thin 10SCSR 020VN",
        "so_luong_con":"50",
        "gia_thanh":"23,190,000 đ"
    },
    {
        "id":"L14",
        "image":"img/LapTop/Ltop14.PNG",
        "productName":"MSI GF63 Thin 10SCSR 830VN",
        "so_luong_con":"50",
        "gia_thanh":"22,990,000 đ"
    },
    {
        "id":"L15",
        "image":"img/LapTop/Ltop15.PNG",
        "productName":"MSI GF85 Thin 10SER-622VN",
        "so_luong_con":"50",
        "gia_thanh":"23,190,000 đ"
    },
    {
        "id":"L16",
        "image":"img/LapTop/Ltop16.PNG",
        "productName":"MSI GF85 Thin 10UE 241VN",
        "so_luong_con":"50",
        "gia_thanh":"20,190,000 đ"
    }
  ],  "LaptopDell":[
    {
        "id":"L17",
        "image":"img/LapTop/Ltop17.PNG",
        "productName":"Dell Inspiron 15 3501 N3501C",
        "so_luong_con":"50",
        "gia_thanh":"9,190,000 đ"
    },
    {
        "id":"L19",
        "image":"img/LapTop/Ltop19.PNG",
        "productName":"Dell Inspiron 14 5406 7023",
        "so_luong_con":"50",
        "gia_thanh":"25,190,000 đ"
    },
    {
        "id":"L20",
        "image":"img/Laptop/Ltop20.PNG",
        "productName":"Dell Inspiron 15 7501 X3MRY1",
        "so_luong_con": "50",
        "gia_thanh":"23,190,000 đ"
    }
  ],   "PCGaming":[
    {
        "id":"pg01",
        "image":"img/PCGaming/PCG1.PNG",
        "productName":"TITAN 10M",
        "so_luong_con": "50",
        "gia_thanh":"20,000,000 đ"
  
    },
    {
        "id":"pg02",
        "image":"img/PCGaming/PCG2.PNG",
        "productName":"ASSASSIN M",
        "so_luong_con": "50",
        "gia_thanh":"19,000,000 đ"
    },
    {
        "id":"pg03",
        "image":"img/PCGaming/PCG3.PNG",
        "productName":"MYSTIC M",
        "so_luong_con": "50",
        "gia_thanh":"25,000,000 đ"
    },
    {
        "id":"pg04",
        "image":"img/PCGaming/PCG4.PNG",
        "productName":"ARMIN M",
        "so_luong_con": "50",
        "gia_thanh":"22,000,000 đ"
    },
    {
        "id":"pg05",
        "image":"img/PCGaming/PCG5.PNG",
        "productName":"IVY 10M",
        "so_luong_con": "50",
        "gia_thanh":"24,000,000 đ"
    },
    {
        "id":"pg06",
        "image":"img/PCGaming/PCG6.PNG",
        "productName":"RATCHET M",
        "so_luong_con": "50",
        "gia_thanh":"28,000,000 đ"
    },
    {
        "id":"pg07",
        "image":"img/PCGaming/PCG7.PNG",
        "productName":"DARIUS S",
        "so_luong_con": "50",
        "gia_thanh":"26,000,000 đ"
    },
    {
        "id":"pg08",
        "image":"img/PCGaming/PCG8.PNG",
        "productName":"HEXTECH S",
        "so_luong_con": "50",
        "gia_thanh":"23,500,000 đ"
    },
    {
        "id":"pg09",
        "image":"img/PCGaming/PCG9.PNG",
        "productName":"GHOST S",
        "so_luong_con": "50",
        "gia_thanh":"25,500,000 đ"
    },
    {
        "id":"pg10",
        "image":"img/PCGaming/PCG10.PNG",
        "productName":"VENUS S",
        "so_luong_con": "50",
        "gia_thanh":"22,500,000 đ"
    },
    {
        "id":"pg11",
        "image":"img/Laptop/Ltop11.PNG",
        "productName":"VOLIBEAR S",
        "so_luong_con": "50",
        "gia_thanh":"27,190,000 đ"
    },
    {
        "id":"pg12",
        "image":"img/PCGaming/PCG12.PNG",
        "productName":"PHANTOM S",
        "so_luong_con": "50",
        "gia_thanh":"23,500,000 đ"
    },
    {
        "id":"pg13",
        "image":"img/PCGaming/PCG13.PNG",
        "productName":"PHOENIX 10Z",
        "so_luong_con": "50",
        "gia_thanh":"26,200,000 đ"
    },
    {
        "id":"pg14",
        "image":"img/PCGaming/PCG14.PNG",
        "productName":"VISION Z",
        "so_luong_con": "50",
        "gia_thanh":"28,500,000 đ"
    },
    {
        "id":"pg15",
        "image":"img/PCGaming/PCG15.PNG",
        "productName":"VALORANT Z",
        "so_luong_con": "50",
        "gia_thanh":"24,250,000 đ"
    },
    {
        "id":"pg16",
        "image":"img/PCGaming/PCG16.PNG",
        "productName":"PREDATOR Z",
        "so_luong_con": "50",
        "gia_thanh":"22,500,000 đ"
    },
    {
        "id":"pg17",
        "image":"img/PCGaming/PCG17.PNG",
        "productName":"AVENGER Z",
        "so_luong_con": "50",
        "gia_thanh":"24,200,000 đ"
    },
    {
        "id":"pg18",
        "image":"img/PCGaming/PCG18.PNG",
        "productName":"AORUS 10X",
        "so_luong_con": "50",
        "gia_thanh":"23,150,000 đ"
    }
  ],  "PCWork": [
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
    }
  ], "Ram": [
    {
        "id":"r01",
        "image":"img/RAM/RAM1.PNG",
        "productName":"PATRIOT 8GB",
        "so_luong_con": "50",
        "gia_thanh":"800,000 đ"
    },
    {
        "id":"r02",
        "image":"img/RAM/RAM2.PNG",
        "productName":"DIMM DDR4 8GB",
        "so_luong_con": "50",
        "gia_thanh":"790,000 đ"
    },
    {
        "id":"r03",
        "image":"img/RAM/RAM3.PNG",
        "productName":"PATRIOT 8GB",
        "so_luong_con": "50",
        "gia_thanh":"640,000 đ"
    },
    {
        "id":"r04",
        "image":"img/RAM/RAM4.PNG",
        "productName":"SAMSUNG DDR4 8GB",
        "so_luong_con": "50",
        "gia_thanh":"850,000 đ"
    },
    {
        "id":"r05",
        "image":"img/RAM/RAM5.PNG",
        "productName":"TRANSCEND 8GB",
        "so_luong_con": "50",
        "gia_thanh":"790,000 đ"
    },
    {
        "id":"r06",
        "image":"img/RAM/RAM6.PNG",
        "productName":"LEXAR DDR4 16GB",
        "so_luong_con": "50",
        "gia_thanh":"1,590,000 đ"
    }
  
  ]
  }
function Laptop(){
    return (
        <React.Fragment>
    <div className="prod-items section-items" id="Laptop">
      {item.LaptopAcer.map( laptop =>(
        <ProductItem
        key={laptop.id}
        image={laptop.image}
        id={laptop.id}
        gia_thanh={laptop.gia_thanh}
        /> 
      )
      )}
      </div>
          
      </React.Fragment>
    )
}
export default Laptop