import React from 'react';
import './componentes.css';

const BebidasGeladas = () => {
  return (
    <div className="contain ">
      <div className='contain-2'>
        <h2 className='categoria'>Bebidas Geladas</h2>
        <ul>
          <li><p>Sorrvete de Baunilha</p> R$ 7.00</li>
          <li><p>Milk Shake de Chocolate</p>R$ 10.00</li>
          <li><p>Milk Shake de Morango</p>R$ 10.00</li>
          <li><p>Vitamina de Banana</p>R$ 8.00</li>
          <li><p>Vitamina de Morango</p>R$ 8.50</li>
        </ul>
      </div>
      <div className='Image4'></div>
    </div>
  );
};

export default BebidasGeladas;