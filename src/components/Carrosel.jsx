import tenis from './White-Sneakers-PNG-Clipart 2.png'
import './Carrossel.css'
import camisa from './starwars.png'
import headphone from './d9db11953a2d185d37246bb1f500c957 1.png'
import teniscollection from './ddd 1.png'
import group from './group-items.png'
import kswiss from './Layer 1aa 2.png'
import airjordan from './Laye 1.png'
import { Link } from 'react-router-dom'
const Carrosel = () => {
    return (  
        <>
        <div className="carrossel-container">
            <div id='ofertas'>
                <p id='yellow'>Melhores Ofertas Personalizadas</p>
                <p id='stoque'>Queima de <br />stoque Nike🔥
                </p>
                <p id='lorem-stoque'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas officia cum iste, earum voluptates enim?</p>
                <button>Ver Ofertas</button>
            </div>

            <div className='tenis-img'> 
                <img src={tenis} alt="tenis" />
            </div>
        </div>


        <div id='btn-carrossel'>
        <div id='item-btm'></div>
        <div id='item-btm'></div>
        <div id='item-btm'></div>
        <div id='item-btm'></div>
        </div>

        {/* Coleção */}
        <h3 style={{marginTop:'50px',color:'black',marginLeft:'240px'}} id='destaque'>Coleção em destaque</h3>
        <div id='cards'>

        <div id='shirt-card'>

            <div id='shirt-content'>
            <h3 id='oferta'>30% OFF</h3>
            <h3 id='title-card'>Novo drop <br />Supreme</h3>
            <button>Ver ofertas</button>
            </div>
            <div>
                <img src={camisa} alt="" />
            </div>

        </div>

        <div id='shirt-card'>

        <div id='tenis-content'>
            <h3 id='oferta'>30% OFF</h3>
            <h3 id='title-card'>Novo drop <br />Supreme</h3>
            <button>Ver ofertas</button>
            </div>
            <div>
                <img src={teniscollection} alt="tenis" />
            </div>
        </div>

        <div id='shirt-card'>
            <div id='shirt-content'>
            <h3 id='oferta'>30% OFF</h3>
            <h3 id='title-card'>Novo drop <br />Supreme</h3>
            <button>Ver ofertas</button>
            </div>
            <div>
                <img src={headphone} alt="headphone" />
            </div>
            </div>

        {/* Card */}
        </div>
       
        <div id='images-group'>
            <h6 style={{marginLeft:'250px',color:'black'}} id='title-images'>Coleção de destaque</h6>
            <img id='img-group' src={group} alt="images" />
        </div>
        


        {/* Produtos em Alta */}
        <div id='see-more'>
            <h1 style={{marginLeft:'50px'}}>Produtos em alta</h1>
            <h2 style={{marginLeft:'440px'}}><Link to={'/tenis'} style={{textDecoration:'none', color:'#C92071'}}>Ver mais</Link></h2>
        </div>




        {/* Grandient */}


        <div id='gradient'>
            <div id='container-product'>

                <div id='image-container'>
                    <div><br /></div>
                <h3>30% OFF</h3>
                <Link to={'/produtos'}>
                <img src={kswiss}alt="" />
                </Link>
                </div>
                <div id='description-product'>
                    <h6>Tênis</h6>
                    <h5>K-Swiss V8 -Masculino</h5>
                    <h5><span id='description-descount'>R$200</span><span id='new-price'>$100</span></h5>
                </div>
            </div>

            {/* 2 */}
            <div id='container-product'>

                <div id='image-container'>
                    <div><br /></div>
                <h3>30% OFF</h3>
                <img src={kswiss}alt="" />
                </div>
                <div id='description-product'>
                    <h6>Tênis</h6>
                    <h5>K-Swiss V8 -Masculino</h5>
                    <h5><span id='description-descount'>R$200</span><span id='new-price'>$100</span></h5>
                </div>
            </div>

            {/* 3 */}
            <div id='container-product'>

                <div id='image-container'>
                    <div><br /></div>
                <h3>30% OFF</h3>

                <Link to={'/tenis'}>
                <img src={kswiss}alt="" />
                </Link>

                </div>
                <div id='description-product'>
                    <h6>Tênis</h6>
                    <h5>K-Swiss V8 -Masculino</h5>
                    <h5><span id='description-descount'>R$200</span><span id='new-price'>$100</span></h5>
                </div>
            </div>
            {/* 4 */}
            <div id='container-product'>

                <div id='image-container'>
                    <div><br /></div>
                <h3>30% OFF</h3>
                <img src={kswiss}alt="" />
                </div>
                <div id='description-product'>
                    <h6>Tênis</h6>
                    <h5>K-Swiss V8 - Masculino</h5>
                    <h5><span id='description-descount'>R$200</span><span id='new-price'>$100</span></h5>
                </div>
            </div>
            {/* 5 */}
            <div id='container-product'>

                <div id='image-container'>
                    <div><br /></div>
                <h3>30% OFF</h3>
                <img src={kswiss}alt="" />
                </div>
                <div id='description-product'>
                    <h6>Tênis</h6>
                    <h5>K-Swiss V8 - Masculino</h5>
                    <h5><span id='description-descount'>R$200</span><span id='new-price'>$100</span></h5>
                </div>
                </div>
            {/* 6 */}
            <div id='container-product'>

<div id='image-container'>
    <div><br /></div>
<h3>30% OFF</h3>
<img src={kswiss}alt="" />
</div>
<div id='description-product'>
    <h6>Tênis</h6>
    <h5>K-Swiss V8 -Masculino</h5>
    <h5><span id='description-descount'>R$200</span><span id='new-price'>$100</span></h5>
</div>
</div>
            {/* 7 */}
            <div id='container-product'>

<div id='image-container'>
    <div><br /></div>
<h3>30% OFF</h3>
<img src={kswiss}alt="" />
</div>
<div id='description-product'>
    <h6>Tênis</h6>
    <h5>K-Swiss V8 -Masculino</h5>
    <h5><span id='description-descount'>R$200</span><span id='new-price'>$100</span></h5>
</div>
</div>
            {/* 8 */}
            <div id='container-product'>

<div id='image-container'>
    <div><br /></div>
<h3>30% OFF</h3>
<img src={kswiss}alt="" />
</div>
<div id='description-product'>
    <h6>Tênis</h6>
    <h5>K-Swiss V8 -Masculino</h5>
    <h5><span id='description-descount'>R$200</span><span id='new-price'>$100</span></h5>
</div>
</div>
           
        {/* gradient */}
        </div>


        {/* Air jordan edição de colecionador */}
        <div className='air-jordan'>
            <div>
            <img id='jordan-img' src={airjordan} alt="jordan" />
            </div>
            <div id='jordan-description'>
                <h5 id='offers'>Oferta especial</h5>
                <h1 id='air-title'>Air Jordan edição de <br />
                colecionador</h1>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore perferendis maiores accusamus rem, repellendus est fugiat perspiciatis cumque mollitia sunt, magni laboriosam. Rerum corporis amet iste delectus saepe obcaecati iure.</h6>
                <br />
                <button id='btn-jordan'>Ver oferta</button>
            </div>
        </div>

        </>
       );
}
 
export default Carrosel;