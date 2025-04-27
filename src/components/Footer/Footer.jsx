import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#">Contacto</a>
        <a href="#">Términos</a>
        <a href="#">Privacidad</a>
        <a href="#">Aviso legal</a>
      </div>
      <div className="footer-social">
        <a href="#"><FaFacebook /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaTwitter /></a>
      </div>
      <p>© {new Date().getFullYear()} Proyecto Break. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;