// src/ProductForm.js
import React, { useState } from 'react';
import {Modal, Button} from 'react-bootstrap';
import './Pedidos.css';

const ProductForm =() => {
    //useState do usuario---------------------------
    const [order, setOrder] = useState({
        name: '',
        tambleNumber: '',
        items: []
    })

    // listas de categorias com seus respectivos items-----------
    const produtos =[
        {id: 1, nome:'Aguas de março', preco: 5.00},
        {id: 2, nome:'sampa', preco: 6.50},
        {id: 3, nome:'garota de ipanema', preco: 7.00},
        {id: 4, nome:'chega de saudade', preco: 6.00},
        {id:5, nome:'carinhoso', preco: 8.00},
        {id:6, nome:'cappuccino malandragem', preco: 9.00}
    ];
    const sobremesas =[
        {id: 7, nome:'doce de maracuja', preco: 8.00},
        {id: 8, nome:'romeu e julieta', preco: 9.00},
        {id: 9, nome:'chão de giz', preco: 10.00},
        {id: 10, nome:'bolinho de chuva', preco: 6.50},
        {id: 11, nome:'coração bobo', preco: 7.50},
        {id: 12, nome:'pettit gateau ilegais', preco: 12.00} 
    ];
    const especiais =[
        {id: 13, nome:'tarde em itapoã', preco: 12.00},
        {id: 14, nome:'o canto da cidade', preco: 10.00},
        {id: 15, nome:'fora da ordem', preco: 11.50},
        {id: 16, nome:'o leãozinho', preco: 9.50}
    ];
    const bebidasGeladas = [
        {id: 17, nome:'sorvete de baunilha', preco: 7.00},
        {id: 18, nome:'milk shake de chocolate', preco: 10.00},
        {id: 19, nome:'milk shake de morango', preco: 10.00},
        {id: 20, nome:'vitamina de banana', preco: 8.00},
        {id: 21, nome:'vitamina de morango', preco: 8.50} 
    ];
    const chas = [
        {id: 22,  nome:'chá de hortelã', preco: 4.50},
        {id: 23, nome:'chá verde', preco: 5.00},
        {id: 24, nome:'chá de camomila', preco: 4.50},
        {id: 25, nome:'chá de frutas vermelhas', preco: 6.00},
        {id: 26, nome:'chá de gengibre e limão', preco: 5.50}
    ];
    //UseStates dos dados do cliente------------------------------
    const [name, setName] = useState('');
    const [tableNumber, setTableNumber] = useState('');

    //UseStates das listas acima----------------------------------
    const [produtoId, setProdutoId] = useState(produtos[0].id);
    const [sobremesasId, setSobremesasId] = useState(sobremesas[0].id);
    const [especiaisId, setEspeciaisId] = useState(especiais[0].id);
    const [bebidasId, setBebidasId] = useState(bebidasGeladas[0].id);
    const [chasId, setChasId] = useState(chas[0].id);

    //setShows de cada opção----------------------------------------
    const [produtoModal, setProdutoModal] = useState(false);
    const [sobremesasModal, setSobremesasModal] = useState(false);
    const [especiaisModal, setEspeciaisModal] = useState(false);
    const [bebidasModal, setBebidasModal] = useState(false);
    const [chasModal, setChasModal] = useState(false);


    const [quantidade, setQuantidade] = useState(1); //useState para quantidades de items do pedido  

    //Atualizações dos produtos---------------------------- 
    const handleProdutoChange = (e) => {
        setProdutoId(Number(e.target.value));
    };
    const handleSobremesaChange = (e) => {
        setSobremesasId(Number(e.target.value));
    };
    const handleEspecialChange = (e) => {
        setEspeciaisId(Number(e.target.value));
    };
    const handleBebidaChange = (e) => {
        setBebidasId(Number(e.target.value));
    };
    const handleChaChange = (e) => {
        setChasId(Number(e.target.value));
    };


    const handleQuantidadeChange = (e) => {
        setQuantidade(Number(e.target.value));
    };

    

    //botões do form para pop-ups------------------------------------------
    const handleProdutoClick = () => {
        setQuantidade(1);
        setProdutoModal(true);
    };
    const handleSobremesasClick = () => {
        setQuantidade(1);
        setSobremesasModal(true);
    };
    const handleEspeciaisClick = () => {
        setQuantidade(1);
        setEspeciaisModal(true);
    };
    const handleBebidasClick = () => {
        setQuantidade(1);
        setBebidasModal(true);
    };
    const handleChasClick = () => {
        setQuantidade(1);
        setChasModal(true);
    };
    
    //calculo total-------------------------------
    const CalculoTotal =() =>{
        return order.items.reduce((Total, valor) => Total + valor.preco * valor.quantidade, 0)
    };


    const handleAddItem = (categoria, id, quantidade) => {
        let produtoSelecionado;
    
        // Verifica de qual categoria o item pertence
        switch (categoria) {
            case "Café":
                produtoSelecionado = produtos.find(p => p.id === id);
                break;
            case "Sobremesas":
                produtoSelecionado = sobremesas.find(s => s.id === id);
                break;
            case "Especiais":
                produtoSelecionado = especiais.find(e => e.id === id);
                break;
            case "Bebidas Geladas":
                produtoSelecionado = bebidasGeladas.find(b => b.id === id);
                break;
            case "Chás":
                produtoSelecionado = chas.find(c => c.id === id);
                break;
            default:
                return;
        }
    

        if (produtoSelecionado) {
            setOrder(prevOrder => {
                const existingItem = prevOrder.items.find(item => item.id === produtoSelecionado.id);
                let newItems;
                
                if (existingItem) {
                    newItems = prevOrder.items.map(item => item.id === produtoSelecionado.id ? { ...item, quantidade: item.quantidade + quantidade }: item
                    );
                } else {
                    newItems = [...prevOrder.items, { ...produtoSelecionado, quantidade }];
                }
            
                return { ...prevOrder, items: newItems };
            });
            
        }
    
    };

    
    const handleSubmit = (e) =>{
        e.preventDefault();
        const totalPedido = order.items.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
        alert(`Pedido enviado com sucesso! Valor total: R$ ${totalPedido.toFixed(2)}`);
        setOrder({
            name: '',
            tableNumber: '',
            items: []
        });
    };


    return (
        <section className='secao_pedidos '>
            <div className='body'>
                <h1>Selecione o Produto e a Quantidade</h1>

                <form onSubmit={handleSubmit} className='form'>
                <div className='box_bados_user'>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder='Nome do cliente'/>

                    <input 
                        type="text" 
                        value={tableNumber} 
                        onChange={(e) => setTableNumber(e.target.value)} 
                        placeholder='Mesa do cliente'/>
                </div>

                    <div className='box_Categorias'>
                        <Button className='button_pedidos' onClick={handleProdutoClick}>Café</Button>
                        <Button className='button_pedidos' onClick={handleSobremesasClick}>Sobremesas</Button>
                        <Button className='button_pedidos' onClick={handleEspeciaisClick}>Especiais</Button>
                        <Button className='button_pedidos' onClick={handleBebidasClick}>Bebidas Geladas</Button>
                        <Button className='button_pedidos' onClick={handleChasClick}>Chás</Button>
                    </div>
                    <h2>Total: R${CalculoTotal().toFixed(2)}</h2>
                    <button type="submit">Enviar pedido</button>
                </form>




                <div className='Notinha'>
                    <h2>Itens do Pedido:</h2>
                    <ul>
                        {order.items.map((item, index) => (
                            <li key={index}>
                                {item.nome} - {item.quantidade}x R${item.preco.toFixed(2)} = R${(item.preco * item.quantidade).toFixed(2)}
                            </li>
                        ))}
                    </ul>
                </div>


                {/*Modal da lista de produtos------------------------------------------------------*/}
                <Modal show={produtoModal} onHide={() => setProdutoModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Selecione o item e a quantidade do pedido</Modal.Title>
                        <Modal.Body>
                            <div className='Box_produto'>
                                <label htmlFor='produtoSelect'>Produto:</label>
                                <select className='produtoSelect' name='produtoSelect' value={produtoId} onChange={handleProdutoChange}>

                                    {produtos.map(produto => (
                                        <option key={produto.id} value={produto.id}> 
                                            {produto.nome} - R${produto.preco.toFixed(2)}
                                        </option>
                                    ))}

                                </select>
                            </div>
                            <div className='Box_quantidade'>
                                <label> Quantidade:</label>
                                <input type="number" value={quantidade} onChange={handleQuantidadeChange} min="1"/>
                            </div>
                            <Modal.Footer>
                                <Button className='btn-secondary' variant='secondary' onClick={()=> setProdutoModal(false)}>
                                    Cancelar
                                </Button>
                                <Button className='btn-primary' variant='primary' onClick={() => handleAddItem("Café", produtoId, quantidade)}>
                                    Adicionar
                                </Button>
                            </Modal.Footer>
                        
                        </Modal.Body>
                    </Modal.Header>
                </Modal>

                {/*
                modal da lista de sobremesas-----------------------------------------------------
                */}
                <Modal show={sobremesasModal} onHide={() => setSobremesasModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Selecione o item e a quantidade do pedido</Modal.Title>
                        <Modal.Body>
                            <div className='Box_produto'>
                            <label htmlFor='produtoSelect'>sobremesas:</label>
                                <select className='produtoSelect' name='produtoSelect' onChange={handleSobremesaChange}>
                                    {sobremesas.map(sobremesa =>(
                                    <option key={sobremesa.id} value={sobremesa.id}>
                                        {sobremesa.nome} - R${sobremesa.preco.toFixed(2)}
                                    </option>
                                    ))}
                                </select>
                    
                            </div>
                            <div className='Box_quantidade'>
                                <label> Quantidade:</label>
                                <input type="number" value={quantidade} onChange={handleQuantidadeChange} min="1"/>
                            </div>
                            <Modal.Footer>
                                <Button className='btn-secondary' variant='secondary' onClick={()=> setSobremesasModal(false)}>
                                    Cancelar
                                </Button>
                                <Button className='btn-primary' variant='primary' onClick={() => handleAddItem("Sobremesas", sobremesasId, quantidade)}>
                                    Adicionar
                                </Button>
                            </Modal.Footer>
                        
                        </Modal.Body>
                    </Modal.Header>
                </Modal>

                {/*
                modal da lista especial------------------------------------------------------------- 
                */}
                <Modal show={especiaisModal} onHide={() => setEspeciaisModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Selecione o item e a quantidade do pedido</Modal.Title>
                        <Modal.Body>
                            <div className='Box_produto'>
                            <label htmlFor='produtoSelect'>Especiais:</label>
                                <select className='produtoSelect' name='produtoSelect' onChange={handleEspecialChange}>
                                    {especiais.map(especial =>(
                                    <option key={especial.id} value={especial.id}>
                                        {especial.nome} - R${especial.preco.toFixed(2)}
                                    </option>
                                    ))}
                                </select>
                    
                            </div>
                            <div className='Box_quantidade'>
                                <label> Quantidade:</label>
                                <input type="number" value={quantidade} onChange={handleQuantidadeChange} min="1"/>
                            </div>
                            <Modal.Footer>
                                <Button className='btn-secondary' variant='secondary' onClick={()=> setEspeciaisModal(false)}>
                                    Cancelar
                                </Button>
                                <Button className='btn-primary' variant='primary' onClick={() => handleAddItem("Especiais", especiaisId, quantidade)}>
                                    Adicionar
                                </Button>
                            </Modal.Footer>
                        
                        </Modal.Body>
                    </Modal.Header>
                </Modal>

                {/*
                modal da lista bebidas--------------------------------------------------
                */}
                <Modal show={bebidasModal} onHide={() => setBebidasModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Selecione o item e a quantidade do pedido</Modal.Title>
                        <Modal.Body>
                            <div className='Box_produto'>
                            <label htmlFor='produtoSelect'>Bebidas:</label>
                                <select className='produtoSelect' name='produtoSelect' onChange={handleBebidaChange}>

                                    {bebidasGeladas.map(bebida =>(
                                    <option key={bebida.id} value={bebida.id}>
                                        {bebida.nome} - R${bebida.preco.toFixed(2)}
                                    </option>
                                    ))}
                                    
                                </select>
                    
                            </div>
                            <div className='Box_quantidade'>
                                <label> Quantidade:</label>
                                <input type="number" value={quantidade} onChange={handleQuantidadeChange} min="1"/>
                            </div>
                            <Modal.Footer>
                                <Button className='btn-secondary' variant='secondary' onClick={()=> setBebidasModal(false)}>
                                    Cancelar
                                </Button>
                                <Button className='btn-primary' variant='primary' onClick={() => handleAddItem("Bebidas Geladas", bebidasId, quantidade)}>
                                    Adicionar
                                </Button>
                            </Modal.Footer>
                        
                        </Modal.Body>
                    </Modal.Header>
                </Modal>

                {/*
                modal da lista chas-----------------------------------------------------------
                */}
                <Modal show={chasModal} onHide={() => setChasModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Selecione o item e a quantidade do pedido</Modal.Title>
                        <Modal.Body>
                            <div className='Box_produto'>
                            <label htmlFor='produtoSelect'>Chás:</label>
                                <select className='produtoSelect' name='produtoSelect' onChange={handleChaChange}>

                                    {chas.map(cha =>(
                                    <option key={cha.id} value={cha.id}>
                                        {cha.nome} - R${cha.preco.toFixed(2)}
                                    </option>
                                    ))}
                                    
                                </select>
                    
                            </div>
                            <div className='Box_quantidade'>
                                <label> Quantidade:</label>
                                <input type="number" value={quantidade} onChange={handleQuantidadeChange} min="1"/>
                            </div>
                            <Modal.Footer>
                                <Button className='btn-secondary' variant='secondary' onClick={()=> setChasModal(false)}>
                                    Cancelar
                                </Button>
                                <Button className='btn-primary' variant='primary' onClick={() => handleAddItem("Chás", chasId, quantidade)}>
                                    Adicionar
                                </Button>
                            </Modal.Footer>
                        
                        </Modal.Body>
                    </Modal.Header>
                </Modal>
            </div>
        </section>
    );
}

export default ProductForm;