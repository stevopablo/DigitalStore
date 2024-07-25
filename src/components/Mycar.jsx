import tenis from './White-Sneakers-PNG-Clipart 2.png'
import './Mycar.css'
import Header from './Header';
import Footer from './Footer';
import tenis2 from './Layer 1aa 2.png'
const Mycar = () => {
    return ( 
        <>
        <Header/>
        <div className='mycar-container'>

        <div id='mycar-title'>
            <h3>MEU CARRINHO</h3>
            <ul>
                <li>QUANTIDADE</li>
                <li>UNITÁRIO</li>
                <li>TOTAL</li>
            </ul>
        </div>


        <div className='mycar-product'>

        <div id='mycar-img'>
            <img src={tenis} alt="" />
            <p>Tênis Nike Revolution 6 Next <br />
            Nature Masculino <br />
            <span>Cor:</span> Vermelho/Branco <br />
            <span>Tamanho:</span>
            42
            </p>
        </div>
        
        <div >
            <div id='qtd-btn'>
            <button>-</button>
            <h2>1</h2>
            <button>+</button>
            </div>
            <p style={{textDecoration:'underline'}}>remover</p>
        </div>

        <div id='price-total'>
            <h2><span>R$219</span></h2>
            <h2>R$219</h2>
        </div>

        <div id='price-total'>
            <h2><span>R$219</span></h2>
            <h2>R$219</h2>
        </div>


        <div id='aside-resumo'>
            <h5>resumo</h5>
            <div><span>Subtotal:</span>R$ 219,00</div>
            <div><span>Frete:</span>R$ 00</div>
            <div><span>Desconto</span>R$ 30,00</div>
            <div style={{display:'flex', gap:'100px'}} ><h1>Total</h1><h2 style={{color:'#EE4266'}} >R$210,00</h2></div>
            <p style={{marginLeft:'80px'}}>ou 10x de R$ 21,00 sem juros</p>
            <button style={{width:'300px', height:'40px', border:'none',borderRadius:'5px', backgroundColor:'#F6AA1C', fontWeight:'600', color:'white'}} >Continuar</button>
        </div>


        {/* mycar-product */}
        </div>


        <div style={{marginTop:'-50px'}} id='mycar-input'>
            <div>
            <h6>Cupom de desconto</h6>
            <input type="text" placeholder='insira seu código' />
            <button>OK</button>
            </div>

            <div>
            <h6>Cupom de desconto</h6>
            <input type="text" placeholder='insira seu código' />
            <button>OK</button>
            </div>
        </div>
        </div>

        <div id='mycar-seemore'>
             {/* main container */}
             <div id='mycard-seemore'>
            <div className='more-options'>
                <h2>30% OFF</h2>
                <img src={tenis2} alt="" />
                <div className='tenis-description'>
                <h5>Tênis</h5>
                <h1>k-Swiss V8 - Masculino</h1>
                <h1><span>R$200</span>R$100</h1>
            </div>
        </div>
        </div>


             {/* main container */}


             <div id='mycard-seemore'>
            <div className='more-options'>
                <h2>30% OFF</h2>
                <img src={tenis2} alt="" />
                <div className='tenis-description'>
                <h5>Tênis</h5>
                <h1>k-Swiss V8 - Masculino</h1>
                <h1><span>R$200</span>R$100</h1>
            </div>
        </div>
        </div>
       
        <div id='mycard-seemore'>
            <div className='more-options'>
                <h2>30% OFF</h2>
                <img src={tenis2} alt="" />
                <div className='tenis-description'>
                <h5>Tênis</h5>
                <h1>k-Swiss V8 - Masculino</h1>
                <h1><span>R$200</span>R$100</h1>
            </div>
        </div>
        </div>
        <div id='mycard-seemore'>
            <div className='more-options'>
                <h2>30% OFF</h2>
                <img src={tenis2} alt="" />
                <div className='tenis-description'>
                <h5>Tênis</h5>
                <h1>k-Swiss V8 - Masculino</h1>
                <h1><span>R$200</span>R$100</h1>
            </div>
        </div>
        </div>  
        </div>
        <Footer/>
        </>
     );
}
 
export default Mycar;