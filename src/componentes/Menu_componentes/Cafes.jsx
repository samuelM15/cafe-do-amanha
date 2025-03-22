import React from 'react';
import './componentes.css';

const Cafes = () => {
  return (
    <div className="contain">
      <div className='contain-2'>
        <h2 className='categoria'>Cafés</h2>
        <ul>
          <li><p>Águas de Março </p> R$ 5.00</li>
          <li><p>Sampa </p>R$ 6.50</li>
          <li><p>Garota de Ipanema</p>R$ 7.00</li>
          <li><p>Chega de Saudade </p>R$ 6.00</li>
          <li><p>Carinhoso </p>R$ 8.00</li>
          <li><p>Cappuccino Malandragem </p> R$ 9.00</li>
        </ul>
      </div>
      <div className='Image2'></div>
    </div>
  );
};

export default Cafes;