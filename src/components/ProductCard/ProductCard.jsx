"use client"

import {useState} from "react";

export function ProductCard({name, description, price, url}) {

    const [productSelected, setProductSelected] = useState(false);

    return (
        <div className="border rounded-md p-5">
            <div>
                <img src="https://w7.pngwing.com/pngs/833/426/png-transparent-shopping-cart-icon-shopping-cart-black-design-trade-thumbnail.png" alt="Shopping cart" width={24} height={24}/>
                <img src="https://img.icons8.com/?size=100&id=98955&format=png&color=FFFFFF" alt="Check svg" width={24} height={24}/>
                <img src={url} alt={name} width={125} height={125} />
            </div>
            <h1>{name}</h1>
            <p className="text-gray-300">{description}</p>
            <p className="text-green-600">{price}</p>
            <button className="">
                <div className="mr-2 h-4 w-4"/>
                Add to cart
            </button>
        </div>
    )
}