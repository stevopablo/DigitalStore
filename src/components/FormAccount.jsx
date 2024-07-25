import logo from './logo.png'
import './FormAccount.css'
import Footer from './Footer';
const FormAccount = () => {
    return ( 
        <>
        <div id='form-logo'>
            <img src={logo} alt="" />
        </div>

        <h1 id='title-form'>Criar Conta</h1>  
        <div className='info-form'>
            <div>
                <h6>infomações pessoais</h6>
                <p>Nome Completo*</p>
                <input type="text" placeholder='Insira seu nome completo' />
                <p>CPF*</p>
                <input type="text" placeholder='Insira seu CPF' />
                <p>E-mail*</p>
                <input type="text" placeholder='Insira seu email' />
                <p>Celular*</p>
                <input type="text" placeholder='Insira seu nome celular' />
            </div>
        </div>

        <div className='info-form'>
        <h6>Informação de entrega</h6>
        <p>Endereço*</p>
        <input type="text" placeholder='insira seu endereço' />
        <p>Bairro*</p>
        <input type="text" placeholder='insira sua Cidade ' />
        <p>Cidade*</p>
        <input type="text" placeholder='insira sua Cidade ' />
        <p>CEP*</p>
        <input type="text" placeholder='insira seu CEP ' />
        <p>Complemento*</p>
        <input type="text" placeholder='insira complemento ' />
        </div>

        <div id='create-btn'>
            <div>
                <input type="checkbox" name="" id="" />
                <p>Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a interação do cliente.</p>
            </div>
            <button id='create-account-btn'>Criar Conta</button>
        </div>
        <Footer/>
        </>
     );
}
 
export default FormAccount;