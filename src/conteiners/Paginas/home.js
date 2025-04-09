import "./home.css";
import Data from "../data/data.json";

function Home(){
    return(
        <>
        <div className="logoPrincipal">
            <img alt="" src={`${process.env.PUBLIC_URL}/img/logoVertical.webp`} />
        </div>
        <div class="faixaOrange">
            <div class="title">
                <h2>Hotifruti</h2>
                <h1>Da Praça</h1>
                <h3>Qualidade,frescor e preço baixo</h3>
            </div>
            <div class="image">
                <img alt="" src={`${process.env.PUBLIC_URL}/img/mulher.png`} />
            </div>
        </div>
        <div class="beneficios">
            <div class="title">
                <h1>Conheça os benefícios</h1>
                <p>Descubra os benefícios e aprenda receitas deliciosas
                com verduras, legumes ou a sua fruta preferida!</p>
            </div>
            <div className="boxers">
                {
                    Data.frutas.map( (mapa,index) => {
                        const slug = Object.keys(mapa).find(Key => Key !== 'id');
                        return(
                            <div class="box">
                                
                                <h1>{mapa.id}</h1>
                                <img alt="" style={{width: mapa[slug].estilo.width, marginTop: mapa[slug].estilo.marginTop, marginLeft: mapa[slug].estilo.marginLeft}} src={`${process.env.PUBLIC_URL}/img/img${slug}/cesta_${slug}.png`}></img>
                                <a href={`/${slug}`}>DESCUBRA</a>
                            </div>
                        );

                    })
                }
            </div>
        </div>
        </>
    )
}
export default Home;