import React from 'react';
import './Contatos.css';

const Contato = () =>{
    return(
        <section className='secao_contato'>
            <div className='box_all'>
                <div className='text_contato'>
                    <h1>Contato</h1>
                    <p>Esteja a votade para nos contar um pouco de sua história, ficaremos felizes em lê-la. Você pode entrar em contato conosco por meio do contato logo abaixo ou enviar o formulario a seguir.</p>
                </div>
                
                <div className='contato'>
                    <p><strong>Endereço:</strong> 738 Av. Beira Mar, Fortaleza, CE</p>
                    <p><strong>Telefone:</strong> (85) 1234-5678</p>
                    <p><strong>Email:</strong> contato@cafedoamanha.com</p>
                </div>

                <form className='form_contato'>
                    <div className='container_form'>
                        <label htmlFor="name">Nome:</label>
                        <input type="text" id='name' name='name' placeholder='Digite seu nome' required/>
                    </div>

                    <div className='container_form'>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id='email' name='email' placeholder='Digite seu e-mail' required/>
                    </div>

                    <div className='container_form'>
                        <label htmlFor="mensage">Mensagem:</label>
                        <textarea name="mensage" id="mensage" rows={5} required placeholder='Conte sua história'></textarea>
                    </div>
                    <button type='submit'>Enviar</button>
                </form>
            </div>

        </section>
    );

}
export default Contato;