import logofooter from './logo (2).png';
import icons from './icons.png';
import './Footer.css'
const Footer = () => {
    return (
        <>
        <footer>

            <section id='logo'>
                <div id='info'>
                <img id='logo-footer' src={logofooter} alt="logo" />
                <p id='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem fuga blanditiis dicta ea? Corrupti Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, eaque! </p>
                <img id='icons' src={icons} alt="" />
                </div>
            </section>

            <section>
                <ul>
                <li id='informacao'>Informação</li>
                    <li>Sobre Drip store</li>
                    <li>Segurança</li>
                    <li>Whistlist</li>
                    <li>Blog</li>
                    <li>Trabalhe conosco</li>
                    <li>Meus Pedidos</li>
                </ul>
            </section>

            <section id='categoria'>
                <ul>
                <li>Categoria</li>
                    <li>Camisetas</li>
                    <li>Calças</li>
                    <li>Bonês</li>
                    <li>Headphone</li>
                    <li>Tênis</li>
                </ul>
            </section>

            <section id='contato'>
                <ul>
                <li>Contato</li>
                    <li>Av. Santos Dumont, 1510 - 1 andar <br /> - Aldeota, Fortaleza - CE, 60150-161</li>                
                    <li>(85)3051-3411</li>                
                </ul>
            </section>
        </footer>
        
            <h5 style={{border:'1px'}} id='copy'>&copy;Digital College</h5>
        </>
    );
}

export default Footer;
