import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import './MyRequest.css'
import tenis from './White-Sneakers-PNG-Clipart 2.png'
import { info } from 'autoprefixer';
const MyRequest = () => {
    return ( 
        <>
        <Header/>
        <div className="request-container">
            <div className='nav-container'>
                <ul>
                    <li>Meu Perfil</li>
                    <li>Meu Pedidos</li>
                    <li><Link to={'/info'}>Minhas Informações</Link></li>
                    <li>Métedos de Pagamento</li>
                </ul>
            </div>

            <div className='my-request'>
                <div id='view-request'>
                <h5>Meus Pedidos</h5>
                <h5><span>STATUS</span></h5>
                </div>

                <div id='view-request'>
                <div id='request-num'>
                <img src={tenis} alt="" />
                <p>Pedido nº 2234981932 <br /><span>Tênis Nike Revolution 6 Next Nature Masculino</span></p>
                </div>
                <h5><span id='status-1'>Produto em trãnsito</span></h5>
                </div>

                {/* <div id='view-request'>
                <h5>Meus Pedidos</h5>
                <h5><span>STATUS</span></h5>
                </div> */}

                <div id='view-request'>
                <div id='request-num'>
                <img src={tenis} alt="" />
                <p>Pedido nº 2234981932 <br /><span>Tênis Nike Revolution 6 Next Nature Masculino</span></p>
                </div>
                <h5><span id='status-2'>Finalizado</span></h5>
                </div>

                <div id='view-request'>
                <div id='request-num'>
                <img src={tenis} alt="" />
                <p>Pedido nº 2234981932 <br /><span>Tênis Nike Revolution 6 Next Nature Masculino</span></p>
                </div>
                <h5><span id='status-3'>Finalizado</span></h5>
                </div>

                <div id='view-request'>
                <div id='request-num'>
                <img src={tenis} alt="" />
                <p>Pedido nº 2234981932 <br /><span>Tênis Nike Revolution 6 Next Nature Masculino</span></p>
                </div>
                <h5><span id='status-4'>Finalizado</span></h5>
                </div>
                
                <div id='view-request'>
                <div id='request-num'>
                <img src={tenis} alt="" />
                <p>Pedido nº 2234981932 <br /><span>Tênis Nike Revolution 6 Next Nature Masculino</span></p>
                </div>
                <h5><span id='status-5'>Finalizado</span></h5>
                </div>
            </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default MyRequest;