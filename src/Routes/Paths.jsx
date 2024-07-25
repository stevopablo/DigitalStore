import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/Header";
import Account from "../components/Account";
import Footer from "../components/Footer";
import Carrosel from "../components/Carrosel";
import Product from "../components/Product";
import Catalogue from "../components/Catalogue";
// import Create from "../components/Create";
import Buy from "../components/Buy";
import Teste from "../components/teste";
import FormAccount from "../components/FormAccount";
import MyRequest from "../components/MyRequest";
import Create from "../components/Create";
import MyInfos from "../components/MyInfos";
import Mycar from "../components/Mycar";
import NotFound from "../pages/NotFound";
const Paths = () => {
    return (   
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/compras" element={<Buy/>}/>
                <Route path="/navbar" element={<Header/>}/>
                <Route path="/conta" element={<Account/>}/>
                <Route path="/footer" element={<Footer/>}/>
                <Route path="/produtos" element={<Product/>}/>
                <Route path="/carrossel" element={<Carrosel/>}/>
                <Route path="/Tenis" element={<Catalogue/>}/>
                <Route path="/teste" element={<Teste/>}/>
                <Route path="/form" element={<FormAccount/>}/>
                <Route path="/meuspedidos" element={<MyRequest/>}/>
                <Route path="/criar" element={<Create/>}/>
                <Route path="/info" element={<MyInfos/>}/>
                <Route path="/carrinho" element={<Mycar/>}/>
                <Route path="/*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
        </>
     );
}
 
export default Paths;