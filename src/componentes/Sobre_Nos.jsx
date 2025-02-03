import React from 'react';
import './Sobre_Nos.css';

const SobreNos = () => {
  return (
    <div className='Body'>
      <h1 className="text-center">Nossa História</h1>
      <p className="text-center">
        Fundada em 2010, nossa cafeteria nasceu do amor pelo café e pela conexão entre pessoas. 
        Começamos como um pequeno negócio familiar e crescemos graças à dedicação em oferecer 
        produtos de qualidade e um ambiente acolhedor. Hoje, somos conhecidos por nossos cafés 
        especiais, sobremesas artesanais e a paixão por criar momentos inesquecíveis.
      </p>
      <div className='Box_carousel'>
        <div className="carousel">
          <div className="slides">
            <input type="radio" name="carousel" id="slide1" defaultChecked />
            <input type="radio" name="carousel" id="slide2" />
            <input type="radio" name="carousel" id="slide3" />

            <div className="images">
              <div className="image" style={{ backgroundImage: "url('https://blog.archtrends.com/wp-content/uploads/2022/11/cafeteriapequenaabre-2-1200x900.jpeg')" }}></div>
              <div className="image" style={{ backgroundImage: "url('https://servircomrequinte.francobachot.com.br/wp-content/uploads/2023/02/post_thumbnail-3b3cea536f62f7c98b69afe171af3619.jpeg')" }}></div>
              <div className="image" style={{ backgroundImage: "url('https://lirp.cdn-website.com/33406c6e/dms3rep/multi/opt/cafeteria-1920w.jpg')" }}></div>
            </div>
          </div>
          <div className="navigation">
            <label htmlFor="slide1"></label>
            <label htmlFor="slide2"></label>
            <label htmlFor="slide3"></label>
          </div>
        </div>
      </div>
    </div>
    
);
};

export default SobreNos;
