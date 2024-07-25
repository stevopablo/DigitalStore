import google from './gmail1.png'
import logo from './logo.png'
import tenis1 from './tenis1.png'
import tenis2 from './tenis2.png'
import './Account.css'
import Footer from './Footer'
import { Link } from 'react-router-dom'
const Account = () => {
    return ( 
        <>
        <nav>
            <img src={logo} alt="" />
        </nav>

        <div id='bg-color'>
        
        <section className='main-container'>
            <div>

                <div id='conta-container'>
                <h1>Crie sua conta</h1>
                <p>já possui uma conta? Entre <Link to={'/form'} >aqui</Link>  </p>
                <h6 id='email'>Email *</h6>
                <input type="text" placeholder='Insira seu email' />
                <button id='btn-create-account'>Criar Conta</button>
                    <div className='alternative-login'>
                <h5>ou faça login com</h5>
                <img  src={google} alt="" />
                    </div>                
                </div>


                <div className='img-container'>
                    <img id='tenis1' src={tenis1} alt="tenis1" />
                </div>
                    
                <img  id='tenis2' src={tenis2} alt="tenis2" />

            </div>
        </section>
        </div>
        <Footer/>
        </>
     );
}
 
export default Account;