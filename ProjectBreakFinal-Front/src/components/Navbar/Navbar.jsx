import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { removeToken } from '../../utils/auth';
import './Navbar.css';
import { FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../../context/CartContext'; 
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const { cartCount } = useCart(); 
    const navigate = useNavigate();


    useEffect(() => {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 0;
        setScrolled(isScrolled);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const handleLogout = () => {
        removeToken();
        window.location.href = '/'; 
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim() !== '') {
            navigate(`/buscar?query=${encodeURIComponent(searchQuery)}`);
        }
    };
    

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-links">
                <Link to="/">Inicio</Link>
                <Link to="/productos">Productos</Link>
                <Link to="/camisetas">Camisetas</Link>
                <Link to="/vestidos">Vestidos</Link>
                <Link to="/pantalones">Pantalones</Link>
                <Link to="/zapatos">Zapatos</Link>
                <Link to="/accesorios">Accesorios</Link>
            </div>

            <form onSubmit={handleSearch} className="navbar-search">
                <input 
                    type="text" 
                    placeholder="Buscar..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit">Buscar</button>
            </form>

            <div className="navbar-actions">
                <Link to="/cart" className="cart-icon">
                    <FiShoppingCart size={24} />
                    {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                </Link>
                <Link to="/register"><button>Registrarse</button></Link>
                <Link to="/login"><button>Entrar</button></Link>
                <button onClick={handleLogout}>Cerrar sesión</button>
            </div>
        </nav>
    );
}

export default Navbar;



