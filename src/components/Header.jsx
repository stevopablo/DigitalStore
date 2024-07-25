// import { Link, useNavigate } from "react-router-dom";
// import './Header.css'
// import logo from './logo.png'
// import carrinho from './carrinho.png'
// // import Catalogue from './Catalogue';


// const Header = () => {
//     function ChangeRoute(event) => {
//         const[inputValue, setInputValue] = useState('')
//         const navigate = useNavigate()

//         const handleSubmit = (event) =>{
//             event.preventDefault()
//             navigate('/tenis',{state: {inputValue}})
//         }
//     }


//     return ( 
//         <>
        
//         <header id="header">
//             <Link to={'/'}>
//             <img id="logo" src={logo} alt="logo" />
//             </Link>
//             <input type="text"  placeholder="Pesquise Produtos..."
//             />
//             <h2>Cadastre-se</h2>
//             <button id="enter-account"><Link to={"/criar"}>Entrar</Link></button>
//             <Link to={'/carrinho'}>
//             <img src={carrinho} alt="" />
//             </Link>
    
//             {/* <img id="car" src={carrinho} alt="carrinho" /> */}
//         </header>

//         <div className="navbar">
//             <nav>
//                 <ul style={{marginLeft:'90px'}}>
//                     <li><Link to={'/'}>Home</Link></li>
//                     <li><Link to={'/catalogo'}>Produtos</Link></li>
//                     <li><Link to={'/Categoria'}>Categoria</Link></li>
//                     <li><Link to={'/meuspedidos'}>Meus Pedidos</Link></li>
//                 </ul>
//             </nav>
//         </div>
//         </>
//      );
// }
 
// export default Header;




import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from './logo.png';
import carrinho from './carrinho.png';

const Header = () => {



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
                <button id="enter-account"><Link to={"/criar"}>Entrar</Link></button>
                <Link to={'/carrinho'}>
                    <img src={carrinho} alt="carrinho" />
                </Link>
            </header>

            <div className="navbar">
                <nav>
                    <ul style={{ marginLeft: '90px' }}>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/catalogo'}>Produtos</Link></li>
                        <li><Link to={'/tenis'}>Categoria</Link></li>
                        <li><Link to={'/meuspedidos'}>Meus Pedidos</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Header;
