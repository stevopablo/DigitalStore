import tenis from './White-Sneakers-PNG-Clipart 2.png'
import './Product.css'
import star from './Stars.png'
import tenis2 from './Layer 1aa 2.png'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'
const Product = () => {
    return (  
        <>
        <Header/>
        <div id='route'>
            <h6><span>Home</span> / Produtos / Tênis / Nike / Tênis Nike Revolution 6 Next Nature Masculino</h6>
        </div>


        <div className='product-container'>
            <div className='container-img'>

                <div>
                    <img id='main-img' src={tenis} alt="tenis" />
                </div>

                <div id='imgs-container'>
                <img className='card-1' src={tenis} alt="" />
                <img className='card-2'  src={tenis} alt="" />
                <img className='card-3'  src={tenis} alt="" />
                <img className='card-4'  src={tenis} alt="" />
                <img className='card-5'  src={tenis} alt="" />
                </div>

            </div>


            <div className='description-product'>
                <h1>Tênis Nike Revolution <br />
                6 Next Nature Masculino</h1>
                <h6>casual | Nike | REF:4241414</h6>
                <div>
                    <img src={star} alt="" />
                </div>
                <h3>R$<span>219,</span>00 <span className='price-underline'>219,00</span></h3>
                <h5>Descrição do produto</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque tempora accusamus necessitatibus blanditiis asgawegaweada.</p>

                <div className='size-tenis'>
                <h5>Tamanho</h5>
                <button>39</button>
                <button>40</button>
                <button>41</button>
                <button>42</button>
                <button>43</button>
                </div>
                <h5>Cor</h5>
                
                <div className='colors-options'>
                <div className='color-opt1'></div>
                <div className='color-opt2'></div>
                <div className='color-opt3'></div>
                <div className='color-opt4'></div>
                </div>
                <Link to={'/compras'}>
                <button style={{width:'240px',cursor:'pointer'}}  className='buy-btn'>COMPRAR</button>
                </Link>
            </div>
        </div>

        {/* Produtos relacionados */}
        <div style={{marginLeft:'240px'}} className='others-options'>
        <h5>produtos relacionados</h5>
        <h3>Ver mais</h3>
        </div>


        <div className='kwiss-container'>
        {/* 1 */}
        <div className='more-options'>
            <h2>30% OFF</h2>
            <img src={tenis2} alt="" />
        <div className='tenis-description'>
            <h5>Tênis</h5>
            <h1>k-Swiss V8 - Masculino</h1>
            <h1><span>R$200</span>R$100</h1>
        </div>
        </div>

        {/* 2 */}
        <div className='more-options'>
            <h2>30% OFF</h2>
            <img src={tenis2} alt="" />
        <div className='tenis-description'>
            <h5>Tênis</h5>
            <h1>k-Swiss V8 - Masculino</h1>
            <h1><span>R$200</span>R$100</h1>
        </div>
        </div>
        {/* 3 */}
        <div className='more-options'>
            <h2>30% OFF</h2>
            <img src={tenis2} alt="" />
        <div className='tenis-description'>
            <h5>Tênis</h5>
            <h1>k-Swiss V8 - Masculino</h1>
            <h1><span>R$200</span>R$100</h1>
        </div>
        </div>
        {/* 4 */}
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
        <Footer/>
        </>
     );
}
 
export default Product;