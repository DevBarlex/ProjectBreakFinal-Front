# ProjectBreakFinal-Front

# Ecommerce Frontend
 Este proyecto es la parte frontend de una tienda online, desarrollado con React y diseñado para ofrecer una experiencia de usuario fluida, moderna y responsive.

# Funcionalidades Principales
a. Sistema de Navegación Dinámica
    Barra de navegación accesible y responsiva, siempre visible gracias a su diseño sticky.

b. Gestión de Productos
    Visualización de productos obtenidos desde una API externa, organizados por categorías.

c. Página de Detalle de Producto
    Cada producto cuenta con su propia página, incluyendo:

    · Carrusel de imágenes (Swiper.js)

    · Información completa (nombre, descripción, precio)

    · Botón para añadir al carrito

d. Carrito de Compras Persistente
    Los productos añadidos al carrito se almacenan en LocalStorage, permitiendo que el usuario mantenga su carrito incluso después de recargar o cerrar el navegador.

d. Sistema de Búsqueda Inteligente
    Buscador integrado en la navbar que permite encontrar productos por nombre en tiempo real.

e. Autenticación de Usuario (Simulada)
    Botones para registrarse, iniciar sesión o cerrar sesión, con manejo de tokens.

f. Responsive Design
    Adaptación completa a dispositivos móviles, tablets y escritorios.

g. Optimización de Estados Globales
    Utilizamos React Context API para manejar:

    · Productos (ProductsContext)

    · Carrito de compras (CartContext)

# Tecnologías y Librerías
    · React (Vite + JSX + Hooks)

    · React Router Dom (ruteo SPA)

    · Context API (manejo de estado global)

    · Swiper.js (carruseles dinámicos)

    · LocalStorage (persistencia de carrito)

    · React Icons (iconografía)

    · CSS3 (estilos personalizados)

# Estructura de Carpetas Principal
```
ProjectBreakFinal/
 └── src/
      ├── components/
      │    ├── Buscar/   
      │    ├── CartPage/
      │    ├── CategoryPage/    
      │    ├── Footer/
      │    ├── Home/
      │    ├── Login/
      │    ├── Navbar/
      │    ├── ProductDetailPage/
      │    ├── Producto/
      │    ├── ProductsPage/
      │    ├── Register/
      │    └── PrivateRoute.jsx
      │
      ├── context/
      │    ├── CartContext.jsx
      │    └── ProductsContext.jsx
      │
      ├── utils/
      │    └── auth.js
      │
      ├── App.jsx
      ├── App.css
      ├── index.css
      └── main.jsx
```
# Instalación y Uso

1. Clonar el repositorio:

git clone https://github.com/tuusuario/ecommerce-frontend.git

2. Instalar las dependencias:

npm install

3. Ejecutar la app en modo desarrollo:

npm run dev

4. Abrir en navegador:

http://localhost:5173/

# Notas

Este frontend espera conectarse a un backend disponible en http://localhost:3000/api/products.
