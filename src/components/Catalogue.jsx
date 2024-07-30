import { Link } from 'react-router-dom';
import './Catalogue.css'
import Footer from './Footer';
import Header from './Header';
import tenis2 from './Layer 1aa 2.png'
const Catalogue = () => {
    


    return ( 
        <>
        <Header/>
        <div className="catalogue-title">

            <div>
                <h2>Resultados para</h2>
            </div>
            <div>
                <h2>Ordernar por: <span>mais relevante</span></h2>
            </div>
                
        </div>
        
        <div className='main-catalogue'>
            <div>
            <aside className='aside-filter'>
                <h5>Filtrar por</h5>
                <h3>Marka</h3>
                <div className='btn-consult'>
                <input type="checkbox" name="" id="" />
                <p>Adiddas</p>
                </div>
                <div className='btn-consult'>
                <input type="checkbox" name="" id="" />
                <p>Calenciage</p>
                </div>
                <div className='btn-consult'>
                <input type="checkbox" name="" id="" />
                <p>KSwiss</p>
                </div>
                <div className='btn-consult'>
                <input type="checkbox" name="" id="" />
                <p>Nike</p>
                </div>
                <div className='btn-consult'>
                <input type="checkbox" name="" id="" />
                <p>Puma</p>
                </div>
                {/* categoria */}
                <h3>Categoria</h3>
                <div className='btn-consult'>
                <input type="checkbox" name="" id="" />
                <p>Esporte&lazer</p>
                </div>
                <div className='btn-consult'>
                <input type="checkbox" name="" id="" />
                <p>Casual</p>
                </div>
                <div className='btn-consult'>
                <input type="checkbox" name="" id="" />
                <p>Utilitário</p>
                </div>
                <div className='btn-consult'>
                <input type="checkbox" name="" id="" />
                <p>Corrida</p>
                </div>
                <h3>Gênero</h3>
                <div className='btn-consult'>
                <input type="checkbox" name="" id="" />
                <p>Masculino</p>
                </div>

                <div className='btn-consult'>
                <input type="checkbox" name="" id="" />
                <p>Feminino</p>
                </div>
                <div className='btn-consult'>
                <input type="checkbox" name="" id="" />
                <p>Unisex</p>
                </div>
                <h3>Estado</h3>
                <div className='btn-consult'>
                <input type="radio" name="" id="" />
                <p>Novo</p>
                </div>
                <div className='btn-consult'>
                <input type="radio" name="" id="" />
                <p>Usado</p>
                </div>
            </aside>
            </div>

            <div className='cards-filter'>

            <div className='more-options'>
            <h2>30% OFF</h2>
            <Link to={'/produtos'}>
            <img src={tenis2} alt="" />
            </Link>
            <div className='tenis-description'>
            <h5>Tênis</h5>
            <h1>k-Swiss V8 - Masculino</h1>
            
            <h1><span>R$200</span>R$100</h1>
            </div>
            </div>
            <div className='more-options'>
            <h2>30% OFF</h2>
            <img src={tenis2} alt="" />
            <div className='tenis-description'>
            <h5>Tênis</h5>
            <h1>k-Swiss V8 - Masculino</h1>
            <h1><span>R$200</span>R$100</h1>
            </div>
            </div>
            <div className='more-options'>
            <h2>30% OFF</h2>
            <img src={tenis2} alt="" />
            <div className='tenis-description'>
            <h5>Tênis</h5>
            <h1>k-Swiss V8 - Masculino</h1>
            <h1><span>R$200</span>R$100</h1>
            </div>
            </div>
            <div className='more-options'>
            <h2>30% OFF</h2>
            <img src={tenis2} alt="" />
            <div className='tenis-description'>
            <h5>Tênis</h5>
            <h1>k-Swiss V8 - Masculino</h1>
            <h1><span>R$200</span>R$100</h1>
            </div>
            </div>
            <div className='more-options'>
            <h2>30% OFF</h2>
            <img src={tenis2} alt="" />
            <div className='tenis-description'>
            <h5>Tênis</h5>
            <h1>k-Swiss V8 - Masculino</h1>
            <h1><span>R$200</span>R$100</h1>
            </div>
            </div>
            <div className='more-options'>
            <h2>30% OFF</h2>
            <img src={tenis2} alt="" />
            <div className='tenis-description'>
            <h5>Tênis</h5>
            <h1>k-Swiss V8 - Masculino</h1>
            <h1><span>R$200</span>R$100</h1>
            </div>
            </div>
            <div className='more-options'>
            <h2>30% OFF</h2>
            <img src={tenis2} alt="" />
            <div className='tenis-description'>
            <h5>Tênis</h5>
            <h1>k-Swiss V8 - Masculino</h1>
            <h1><span>R$200</span>R$100</h1>
            </div>
            </div>
            <div className='more-options'>
            <h2>30% OFF</h2>
            <img src={tenis2} alt="" />
            <div className='tenis-description'>
            <h5>Tênis</h5>
            <h1>k-Swiss V8 - Masculino</h1>
            <h1><span>R$200</span>R$100</h1>
            </div>
            </div>
            <div className='more-options'>
            <h2>30% OFF</h2>
            <img src={tenis2} alt="" />
            <div className='tenis-description'>
            <h5>Tênis</h5>
            <h1>k-Swiss V8 - Masculino</h1>
            <h1><span>R$200</span>R$100</h1>
            </div>
            </div>
            <div className='more-options'>
            <h2>30% OFF</h2>
            <img src={tenis2} alt="" />
            <div className='tenis-description'>
            <h5>Tênis</h5>
            <h1>k-Swiss V8 - Masculino</h1>
            <h1><span>R$200</span>R$100</h1>
            </div>
            </div>
            <div className='more-options'>
            <h2>30% OFF</h2>
            <img src={tenis2} alt="" />
            <div className='tenis-description'>
            <h5>Tênis</h5>
            <h1>k-Swiss V8 - Masculino</h1>
            <h1><span>R$200</span>R$100</h1>
            </div>
            </div>
            <div className='more-options'>
            <h2>30% OFF</h2>
            <img src={tenis2} alt="" />
            <div className='tenis-description'>
            <h5>Tênis</h5>
            <h1>k-Swiss V8 - Masculino</h1>
            <h1><span>R$200</span>R$100</h1>
            </div>
            </div>
            <div className='more-options'>
            <h2>30% OFF</h2>
            <img src={tenis2} alt="" />
            <div className='tenis-description'>
            <h5>Tênis</h5>
            <h1>k-Swiss V8 - Masculino</h1>
            <h1><span>R$200</span>R$100</h1>
            </div>
            </div>
            <div className='more-options'>
            <h2>30% OFF</h2>
            <img src={tenis2} alt="" />
            <div className='tenis-description'>
            <h5>Tênis</h5>
            <h1>k-Swiss V8 - Masculino</h1>
            <h1><span>R$200</span>R$100</h1>
            </div>
            </div>
            
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

        {/* cards-filter */}
        </div>
        <Footer/>
        </>
     );
}
 
export default Catalogue;