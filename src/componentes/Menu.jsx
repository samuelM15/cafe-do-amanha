import React, { useState } from 'react';
import Cafes from './Menu_componentes/Cafes';
import Sobremesas from './Menu_componentes/Sobremesas';
import Especiais from './Menu_componentes/Especiais';
import BebidasGeladas from './Menu_componentes/BebidasGeladas';
import Chas from './Menu_componentes/Chas';
import './Menu.css'; //

const Menu = () => {
  const [paginaAtual, setPaginaAtual] = useState('cafes');

  const renderizarPagina = () => {
    switch (paginaAtual) {
      case 'cafes':
        return <Cafes />;
      case 'sobremesas':
        return <Sobremesas />;
      case 'especiais':
        return <Especiais />;
      case 'bebidasgeladas':
        return <BebidasGeladas />;
      case 'chas':
        return <Chas />;
      default:
        return <Cafes/>;
    }
  };

  return (
    <div className='body-menu'>
      <nav className="Navbar">
        <div className="container-fluid">
          <div className="nav-links">
            <button onClick={() => setPaginaAtual('cafes')}>Cafés</button>
            <button onClick={() => setPaginaAtual('sobremesas')}>Sobremesas</button>
            <button onClick={() => setPaginaAtual('especiais')}>Especiais</button>
            <button onClick={() => setPaginaAtual('bebidasgeladas')}>Bebidas Geladas</button>
            <button onClick={() => setPaginaAtual('chas')}>Chás</button>
          </div>
        </div>
      </nav>

      <div className="contain">{renderizarPagina()}</div>
    </div>
  );
};

export default Menu;