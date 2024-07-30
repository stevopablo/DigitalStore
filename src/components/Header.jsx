


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from './logo.png';
import carrinho from './carrinho.png';
// import { hover } from '@testing-library/user-event/dist/hover';

const Header = () => {
 
      const Produtos = {
        hover:'#C92071',
      }

    // FUNÇÃO
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/tenis', { state: { inputValue } });
    };



 
    return ( 
        <>
            <header id="header">
                <Link to={'/'}>
                    <img id="logo" src={logo} alt="logo" />
                </Link>


                {/* INPUT DE PESQUISA */}
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        placeholder="Pesquise Produtos..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </form>



                <h2>Cadastre-se</h2>

                <button className="enter-account">
                    <Link style={{textDecoration:'none',color:'white',fontWeight:'700'}} to={"/criar"}>Entrar</Link>
                </button>

                <Link to={'/carrinho'}>
                    <img src={carrinho} alt="carrinho" />
                </Link>
            </header>

            <div className="navbar">
                <nav>
                    <ul style={{ marginLeft: '90px' }}>
                        <li id='home'><Link to={'/'}>Home</Link></li>
                        <li style={Produtos}>Produtos</li>
                        <li><Link to={'/tenis'}>Categoria</Link></li>
                        <li><Link to={'/meuspedidos'}>Meus Pedidos</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Header;
