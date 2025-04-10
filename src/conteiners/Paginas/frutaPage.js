import "./frutasStyles.css";
import Data from "../data/data.json";
import {useState} from "react";
import {useEffect} from 'react';
import {motion} from 'framer-motion';

function Home({fruta,titleReserva}){
    const [mostrarPagina , setMostrarPagina] = useState(false);
    const [mostrarTexto, setTexto] = useState(false)

    const [ativo, setAtivo] = useState(null);
    const alttivarElemento = (id) =>{
        setAtivo(ativo === id ? null : id);
    }
    const frutaData = Data.frutas.find(item => Object.keys(item).includes(fruta));
    const dados = frutaData?.[fruta];

    useEffect(() => {
        const tempo = setTimeout(() => {
            setTexto(true);
        },700  )
        return () => clearTimeout(tempo)
    })


    useEffect(() => {
        const timer = setTimeout(() => {
            setMostrarPagina(true);
        },2000)
        return () => clearTimeout(timer);
    }, []);



    return(
<>
        {mostrarPagina ? (<>
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}}>
        <div class="banner" style={{backgroundColor: dados.estilo.background}}>
            <img alt="" id="folhaDecor" style={{height: dados.estilo.heightGalha}} src={`${process.env.PUBLIC_URL}/img/img${fruta}/galhaDecor.png`} />
            <div class="titulo">
                <img alt="" style={{width: dados.estilo.widthTitle, marginLeft: dados.estilo.marginLeftTitle}} src={`${process.env.PUBLIC_URL}/img/img${fruta}/titulo.png`} />
            </div>
            <div class="fruta">
                <img alt="" style={{width: dados.estilo.widthFrutaCenter, marginLeft: dados.estilo.marginLeftFrutaCenter}} src={`${process.env.PUBLIC_URL}/img/img${fruta}/fruta.png`} />
            </div>
            <div class="conteudo">
                <h1 id="numero" style={{color: dados.estilo.cor}}>10</h1>
                <h1 id="titulo" style={{color: dados.estilo.cor}} >{dados.title}</h1>
                <div class="lista">
                    <ul>
            { dados.beneficios.map( mapando => { return(
                    <li style={{color: dados.estilo.corText,boxShadow: dados.estilo.boxShadow, borderColor: dados.estilo.cor, backgroundColor: dados.estilo.cor+"d9" }} key={mapando.id} onClick={ () => {alttivarElemento(mapando.id)}}><img alt="" src={`${process.env.PUBLIC_URL}/img/img${fruta}/icon.png`} /> {mapando.title}
                        <p style={{color: dados.estilo.corText,display: ativo === mapando.id ? "block" : "none"}}>{mapando.corpo}</p>
                        <img alt="" style={{transform: ativo === mapando.id ? "rotate(90deg)" : ""}} src={`${process.env.PUBLIC_URL}/img/seta.png`} class="seta" />
                    </li>
                    )})}
                    
                    </ul>
                </div>

            </div>
           
        </div>
        <div class="segundoConteudo" style={{backgroundColor: dados.estilo.cor}}>
        
            <img alt="" id="folhaDecorSecd" style={{height: dados.estilo.heightFolha, top: dados.estilo.top}} src={`${process.env.PUBLIC_URL}/img/img${fruta}/folhaDecor.png`} />
            <img alt="" id="bananaDecor" style={{height: dados.estilo.heightFruta}} src={`${process.env.PUBLIC_URL}/img/img${fruta}/frutaDeco.png`} />
            <h1 id="numero" style={{color: dados.estilo.corReceitas}}>5</h1>
            <h1 id="titulo" >Receitas com {titleReserva}</h1>
            <div class="receitas">

            {dados.receitas.map( receita => { return(
                <div class="box" >
                    <h1>{receita.titulo}</h1>
                    <div class="receitaImage" style={{backgroundImage: `url(${receita.img})`}} id="primeiraBox"></div>
                    <button type="button" target="_blank" rel="noopener noreferrer" style={{color: dados.estilo.cor}} onClick={() => {window.location.assign(receita.link) }}>clique e confira</button>
                </div>                                        
            )})}    
            </div>
        </div>
        <video autoplay muted loop id="loader-video">
  <source src={`${process.env.PUBLIC_URL}/video/loader.mp4`} type="video/mp4" />
</video>

    
    <footer>
        <div class="logo"><img alt="" src="./img/logoVertical.webp" /></div>
        <div class="links">
            <ul class="social">
                <li><a href="https://www.instagram.com/dapraca.ba/#" class="linksFooter"><img alt="" src="./img/insta.webp" /></a></li>
                <li><a href="https://www.facebook.com/DAPRACA.101" class="linksFooter"><img alt="" src="./img/face.webp" /></a></li>
                <li><a href="https://wa.me/7399525483" class="linksFooter"><img alt="" src="./img/wpp.webp" /></a></li>
                <li><a href="https://www.tiktok.com/@dapracasup" class="linksFooter"><img alt="" src="./img/ttk.webp" /></a></li>
            </ul>
            <h2><a href="https://www.instagram.com/matospedroo/">Desenvolvido por: @matospedroo</a></h2>
        </div>
    </footer>
    </motion.div>
    </>
) : (
<>

<>
    <video autoPlay muted loop className={`loader ${mostrarTexto ? 'aparece' : ""}`}>
        <source src={`${process.env.PUBLIC_URL}/video/loader.mp4`} type="video/mp4"/>
        Seu navegador não suporta vídeos.
    </video>
</>

</>
)}

       

</>
    )
}
export default Home;