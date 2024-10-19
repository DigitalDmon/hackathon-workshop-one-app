'use client'

import {createContext, useContext, useReducer} from "react";

const initialState = {productos: []}
const CartDispatchContext = createContext(() => {})
const CartContext = createContext(initialState)

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            return {
                ...state,
                productos: [...state.productos, action.productos]  // Acción para agregar un producto
            };
        case "REMOVE_PRODUCT":
            return {
                ...state,
                productos: state.productos.filter(
                    (producto) => producto.id !== action.id
                )
            };
        default:
            return state;
    }
}

// Define el hook para acceder al contexto
export function useCartContext() {
    return useContext(CartContext);
}

export function CartProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, {...initialState});

    return (
        <CartContext.Provider value={state}>
            <CartDispatchContext.Provider value={dispatch}>
                {children}
            </CartDispatchContext.Provider>
        </CartContext.Provider>
    )
}