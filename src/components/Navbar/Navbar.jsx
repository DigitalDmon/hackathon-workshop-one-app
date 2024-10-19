'use client'

import Link from 'next/link';
import {useCartContext} from '@/components/CartContext/CartContext';

export  function Navbar() {

    const { productos } = useCartContext();

    return (
        <nav>
            <div>
                <div>
                    <div>My E-commerce</div>
                    <div>
                        <div className="space-x-4">
                            <Link href="/">Inicio</Link>
                            <Link href="/nosotros/">Nosotros</Link>
                            <Link href="detalleCompra/">Detalle compra</Link>
                            <div>
                                <button>
                                    {/* ICONO */}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}