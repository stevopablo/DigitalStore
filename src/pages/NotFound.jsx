import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const NotFound = () => {
    return (  
        <>
        <Header/>
        <div style={{height:'309px', marginLeft:'120px', paddingTop:'20px'}}>
        <h1>Página não existe, <Link><span style={{}}>Voltar</span></Link> </h1>
        </div>
        <Footer/>
        </>
     );
}
 
export default NotFound;