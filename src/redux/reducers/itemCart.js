import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';

const itemCart =[
    {
        "id": 1,
        "category": {
            "name": "Iphones"
        },
        "color": [
            {
                "name": "Black",
                "color": "#000",
            }
        ],
        "memory": [
            {
                "name": "255"
            }
        ],
        "product_media": [
            {
                "id": 1,
                "image": "dg",
                "product_media": 1
            }
        ],
        "title": "iPhone 14",
        "description": "asegasegase",
        "img": "http://127.0.0.1:8000/media/product_images/Iphone111.jpg",
        "kg_price": 1000,
        "usa_price": 232,
        "stock": false
    },
    {
        "id": 2,
        "category": {
            "name": "Iphone11"
        },
        "color": [
            {
                "name": "Black",
                "color": "#000",
            }
        ],
        "memory": [
            {
                "name": "260"
            }
        ],
        "product_media": [
            {
                "id": 2,
                "image": "http://127.0.0.1:8000/media/product_media/Iphone11.jpg",
                "product_media": 2
            }
        ],
        "title": "iPhone 14 Pro",
        "description": "Iphone11",
        "img": "http://127.0.0.1:8000/media/product_images/Iphone111.jpg",
        "kg_price": 2000,
        "usa_price": 70000,
        "stock": true
    },
    {
        "id": 3,
        "category": {
            "name": "Iphones"
        },
        "color": [
            {
                "name": "Pink",
                'color': 'rgb(255, 192, 203)',
            }
        ],
        "memory": [
            {
                "name": "255"
            }
        ],
        "product_media": [],
        "title": "Iphone6",
        "description": "Iphone6",
        "img": "http://127.0.0.1:8000/media/product_images/Iphone11.jpeg",
        "kg_price": 3000,
        "usa_price": 35000,
        "stock": true
    },
]

// function itemCart () {
 
//     let data;

//     axios('http://127.0.0.1:8000/api/products/')
//     .then((data)=>{
//         // console.log(data.data);
//         data=data.data
//     })
//     return data;
// }
// let itemCart1 = itemCart() ? itemCart() : []

export default (state = itemCart, acion) => {
    switch (acion.type) {
        default: return state
    }
}