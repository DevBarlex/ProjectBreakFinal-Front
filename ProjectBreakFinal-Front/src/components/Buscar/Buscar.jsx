import React from 'react';
import { useLocation } from 'react-router-dom';
import { useProducts } from '../../context/ProductsContext';
import Producto from '../Producto/Producto';

const Buscar = () => {
    const location = useLocation();
    const { products } = useProducts();

    const params = new URLSearchParams(location.search);
    const query = params.get('query')?.toLowerCase() || '';

    if (!products || products.length === 0) {
        return <p>Cargando productos...</p>;
    }

    const resultados = products.filter(producto =>
        producto?.name?.toLowerCase().includes(query)
    );

    return (
        <div style={{ padding: '20px' }}>
            <h2>Resultados de búsqueda para: "{query}"</h2>
            {resultados.length > 0 ? (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                    {resultados.map((producto) => (
                        <Producto
                            key={producto._id}
                            id={producto._id}
                            title={producto.name} // Aquí usamos 'name' como 'title'
                            price={producto.price}
                            images={producto.images[0]} // Usamos la primera imagen
                        />
                    ))}
                </div>
            ) : (
                <p>No se encontraron resultados.</p>
            )}
        </div>
    );
};

export default Buscar;



