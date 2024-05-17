import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        {/* Aquí puedes agregar tu barra de navegación */}
      </header>
      <main>
        {children}
      </main>
      <footer>
        {/* Aquí puedes agregar tu pie de página */}
        
      </footer>
    </div>
  );
};

export default Layout;