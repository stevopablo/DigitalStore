import './Buy.css'
import Footer from './Footer';
import Header from './Header';
import tenis from './White-Sneakers-PNG-Clipart 2.png'
const Buy = () => {
    return ( 
        <>
        <Header/>
        <div id='info-container'>

        <div className='finalizar-compra'>
            <h2>Informaçoes pessoais</h2>
            <h7>Nome Completo *</h7>
            <input type="text" placeholder='Insira seu nome' />
            <h7>CPF *</h7>
            <input type="text" placeholder='Insira seu  CPF' />
            <h7>E-mail *</h7>
            <input type="text" placeholder='Insira seu  email' />
            <h7>Celular *</h7>
            <input type="text" placeholder='Insira seu  celular' />
        </div>
                {/* Resumo da compra */}
        <div>
            <h2>Resumo</h2>
            <div id='img-description'>
                <img src={tenis} alt="" />
                <p>Tênis Nike Revolution 6 Next Nature <br /> Masculino</p>
            </div>

            <div id='subtotal'>
                <p>Subtotal:</p>
                <p> <span>R$ 30,00</span></p>
            </div>
            <div id='subtotal-0'>
                <p>Frete:</p>
                <p><span>R$ 30,00</span></p>
            </div>
            <div id='subtotal'>
                <p>Desconto:</p>
                <p> <span>R$ 30,00</span></p>
            </div>
            {/* resumo-box */}
                <div id='total-resume'>
                    <h1>Total</h1>
                    <div>
                    <h1>R$ 219,00</h1>
                        <p>ou 10x de R$ 21,00 sem juros</p>
                    </div>
                </div>
                <button id='btn-payment'>Realizar Pagamento</button>
        </div>

        {/* Fechamento da div principal */}
        </div>

        <div id='delivery'>
            <div>
            <h2>Informações de Entrega</h2>
            <h6>Endereço *</h6>
            <input type="text"  placeholder='insira seu Endereço'/>
            <h6>Bairro *</h6>
            <input type="text"  placeholder='insira seu bairo'/>
            <h6>Cidade *</h6>
            <input type="text"  placeholder='insira sua cidade'/>
            <h6>CEP *</h6>
            <input type="text"  placeholder='insira seu Cep'/>
            <h6>Complemento *</h6>
            <input type="text"  placeholder='insira complemento'/>
            </div>
        </div>

        {/* opcao de pagamento */}
        <div id='info-payment'>
            <div>
            <h2>Opção de pagamento</h2>
            <h6>Forma de pagamento *</h6>
            <input type="text" placeholder='insira ' />
            <h6>Forma de pagamento</h6>

            <div id='payment-option'>
            <input type="radio" name="" id="btn-radio" />
            <label>Cartão de credito</label>
            <input type="radio" name="" id="btn-radio" />
            <label>Boleto Bancário</label>
            </div>
            <h6>Número do cartão *</h6>
            <input type="text" placeholder='insira o número do cartão'/>
            </div>

            <div className='cards'>
                <div>
                <h6>Data e Número do cartão</h6>
                <input type="text"  placeholder='insira número do cartão'/>
                </div>
                <div>
                <h6>Data de validade do cartão</h6>
                <input type="text" placeholder='insira validade do cartao' />
                </div>
            </div>
            <h6>CVV *</h6>
            <input type="text" placeholder='CVV' />
        </div>


        <div className='total-compra'>
            <h2>Finalizar Compra</h2>
            <div>
                <div className='total'>Total</div>
                <div><span>R$219,00</span></div>
            </div>
            <p>ou 10x de R$ 21,00 sem juros</p>
            <button>Realizar Pagamento</button>
        </div>
        <Footer/>
        </>
     );
}
 
export default Buy;