import React from 'react';
import './componentes.css';

const Sobremesas = () => {
  return (
    <div className="contain ">
      <div className='contain-2'>
        <h2 className='categoria'>Sobremesas</h2>
        <ul>
          <li><p>Doce de Maracujá</p>R$ 8.00</li>
          <li><p>Romeu e Julieta</p>R$ 9.00</li>
          <li><p>Chão de Giz</p>R$ 10.00</li>
          <li><p>Bolinho de Chuva</p>R$ 6.50</li>
          <li><p>Coração Bobo</p> E$ 7.50</li>
          <li><p>pettit gateau ilegais</p>R$ 12.00</li>
        </ul>
      </div>
      <div className='Image3'></div>
    </div>
  );
};

export default Sobremesas;