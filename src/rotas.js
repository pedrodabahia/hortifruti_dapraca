import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Paginas from "./conteiners/Paginas/frutaPage";
import Home from "./conteiners/Paginas/home";

function MyRotas(){

        const location = useLocation();

        useEffect(() => {
            if(window.gtag){
                window.gtag('config', 'G-SY4438R9KV', {
                    page_path: location.pathname,
                })
            }
        }, [location])

    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/abacate" element={<Paginas titleReserva={"Abacate"} fruta={"abacate"} />} />
            <Route path="/abacaxi" element={<Paginas titleReserva={"Abacaxi"} fruta={"abacaxi"} />} />
            <Route path="/abobora" element={<Paginas titleReserva={"Abobora"} fruta={"abobora"} />} />
            <Route path="/aipim" element={<Paginas titleReserva={"Aipim"} fruta={"aipim"} />} />
            <Route path="/alho" element={<Paginas titleReserva={"Alho"} fruta={"alho"} />} />
            <Route path="/ameixa" element={<Paginas titleReserva={"Ameixa"} fruta={"ameixa"} />} />
            <Route path="/banana" element={<Paginas titleReserva={"Banana"} fruta={"banana"} />} />
            <Route path="/bananaDaTerra"  element={<Paginas titleReserva={"Banana"} fruta={"bananaDaTerra"} />} />
            <Route path="/batata"  element={<Paginas titleReserva={"Batata"} fruta={"batata"} />} />
            <Route path="/batataDoce"  element={<Paginas titleReserva={"Batata Doce"} fruta={"batataDoce"} />} />
            <Route path="/batataDoceAlbina"  element={<Paginas titleReserva={"Batata Doce"} fruta={"batataDoceAlbina"} />} />
            <Route path="/beringela"  element={<Paginas titleReserva={"Beringela"} fruta={"beringela"} />} />
            <Route path="/beterraba"  element={<Paginas titleReserva={"Beterraba"} fruta={"beterraba"} />} />
            <Route path="/brocolis"  element={<Paginas titleReserva={"Brocolis"} fruta={"brocolis"} />} />
            <Route path="/cara"  element={<Paginas titleReserva={"Cará"} fruta={"cara"} />} />
            <Route path="/cebola"  element={<Paginas titleReserva={"Cebola"} fruta={"cebola"} />} />
            <Route path="/cenoura"  element={<Paginas titleReserva={"Cenoura"} fruta={"cenoura"} />} />
            <Route path="/chuchu"  element={<Paginas titleReserva={"Chuchu"} fruta={"chuchu"} />} />
            <Route path="/cocoSeco"  element={<Paginas titleReserva={"cocoSeco"} fruta={"cocoSeco"}/>} />
            <Route path="/gengibre"  element={<Paginas titleReserva={"Gengibre"} fruta={"gengibre"} />} />
            <Route path="/goiaba"  element={<Paginas titleReserva={"Goiaba"} fruta={"goiaba"} />} />
            <Route path="/inhame"  element={<Paginas titleReserva={"Inhame"} fruta={"inhame"} />} />
            <Route path="/laranjaPera"  element={<Paginas titleReserva={"Laranja Pera"} fruta={"laranjaPera"} />} />
            <Route path="/macaNacional"  element={<Paginas titleReserva={"Maçã"} fruta={"macaNacional"} />} />
            <Route path="/manga"  element={<Paginas titleReserva={"Manga"} fruta={"manga"} />} />
            <Route path="/maracuja"  element={<Paginas titleReserva={"Maracuja"} fruta={"maracuja"} />} />
            <Route path="/melao"  element={<Paginas titleReserva={"Melão"} fruta={"melao"} />} />
            <Route path="/mexericaPokan"  element={<Paginas titleReserva={"Mexerica"} fruta={"mexericaPokan"} />} />
            <Route path="/pepino"  element={<Paginas titleReserva={"Pepino"} fruta={"pepino"} />} />
            <Route path="/pimentao"  element={<Paginas titleReserva={"Pimentão"} fruta={"pimentao"} />} />
            <Route path="/quiabo"  element={<Paginas titleReserva={"Quiabo"} fruta={"quiabo"} />} />
            <Route path="/repolho"  element={<Paginas titleReserva={"Repolho"} fruta={"repolho"} />} />
            <Route path="/repolhoRoxo"  element={<Paginas titleReserva={"Repolho Roxo"} fruta={"repolhoRoxo"} />} />
            <Route path="/tomate"  element={<Paginas titleReserva={"Tomate"} fruta={"tomate"} />} />
            <Route path="/uva"  element={<Paginas titleReserva={"Uva"} fruta={"uva"} />} />

        </Routes>
    )
}
export default MyRotas;