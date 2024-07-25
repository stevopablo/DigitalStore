import google from './gmail1.png'
import logo from './logo.png'
import tenis1 from './tenis1.png'
import tenis2 from './tenis2.png'
import './Create.css'
import Footer from './Footer'
import { Link } from 'react-router-dom'
const Create = () => {
    return (
        <>
         <nav>
            <img src={logo} alt="" />
        </nav>
          <div id='bg-color'>
        
        <section className='main-container'>
            <div >

                <div id='conta-container'>
                <div id='criar-conta'>

                <h1>Acesse sua conta</h1>
                <p style={{fontSize:'18px'}}>Novo cliente? Então registre-se <Link to={'/conta'}>aqui</Link> </p>
                <h6 id='login'>login*</h6>
                <input  style={{height:'40px', backgroundColor:'#cccc',borderRadius:'5px'}} type="text" placeholder='Insira seu login ou email' />
                <h6 id='senha'>Senha *</h6>
                <input style={{height:'40px', backgroundColor:'#cccc',borderRadius:'5px'}} type="text" placeholder='Insira sua senha' />
                <button id='btn-create-account'>Criar Conta</button>
                <h6 id='esqueci'>Esqueci minha senha</h6>
                    <div className='alternative-login'>
                <h5>ou faça login com</h5>
                <img  src={google} alt="" />
                    </div>                
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
 
export default Create;