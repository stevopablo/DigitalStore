import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import './MyInfo.css'
const MyInfos = () => {
    return ( 
        <>
        <Header/>
        <div className="my-info">
        <div className='nav-container'>
                <ul>
                    <li>Meu Perfil</li>
                    <li><Link to={'/meuspedidos'}>Meus Pedidos</Link></li>
                    <li>Meu Informações</li>
                    <li>Métedos de Pagamento</li>
                </ul>
            </div>
            
        <div id='infos-container'>
            <div id='my-infos'>
            <h2>Minhas Informações</h2>
            <p id='edit'>Editar</p>
            </div>

            <div>
                <h5>Informações Pessoais</h5>
                <p><span>Nome:</span></p>
                <p><span>CPF:</span></p>
                <p><span>Email:</span></p>
                <p><span>Celular:</span></p>
            </div>
            <div>
            <h5>Informações de Entrefa</h5>
                <p><span>Endereço:</span></p>
                <p><span>Bairro:</span></p>
                <p><span>Cidade:</span></p>
                <p><span>CEP:</span></p>
            </div>
        </div>

        </div>
        <Footer/>
        </>
     );
}
 
export default MyInfos;