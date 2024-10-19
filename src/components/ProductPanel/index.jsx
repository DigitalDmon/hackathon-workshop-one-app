'use client'

import {ProductCard} from "@/components/ProductCard/ProductCard";
import {useEffect, useState} from "react";

/* TRABAJAR CON PROMESAS */
async function obtenerProductos () {

    return await fetch("https://fakestoreapi.com/products")
}

export default function ProductPanel() {

    const [productos, setProductos] = useState([]); /* LE INDICAMOS QUE ES UN ARREGLO VACÍO*/

    useEffect(() => {
        obtenerProductos()
            .then((response) => response.json())
            .then((productos) => setProductos(productos))
    }, [])

    return (
        <>
            {productos.map((item, index) => (
                <ProductCard
                    key={index}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    url={item.image}
                />
            ))}
        </>
    )
}