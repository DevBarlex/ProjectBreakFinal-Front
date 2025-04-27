import React from 'react';
import { useNavigate } from 'react-router-dom';

const Producto = ({ id, title, price, images }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/producto/${id}`);
    };

    return (
        <div onClick={handleClick} style={{ textAlign: 'center', cursor: 'pointer' }}>
            <img 
                src={images}
                alt={title}
                style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "8px" }}
            />
            <h3>{title}</h3>
        </div>
    );
};

export default Producto;


