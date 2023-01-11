import assets from "../../assets";
import HastuPlaca from "../Has_tu_placa";
export default function Home(){
    return(
        <>
            <div className="w-full flex content-center flex-wrap">
                <div className="md:w-1/2 self-center flex flex-col gap-16 my-1 max-md:text-center max-md:items-center max-md:gap-8">
                    <h1 className="text-4xl font-extrabold md:text-4xl" id="inicio">Crea tu propia <span className="text-custom-gradient">placa de spotify</span>  aquí. ¡Es muy fácil!</h1>    
                    <p className="md:w-10/12 normal-text">Dedicale la mejor canción a esa persona tan especial y regala un recuerdo unico. ¡Podrás scanearla para escucharla en Spotify! El Regalo Perfecto.</p>
                    <a className="button" href="">
                        <p className="button-text">¡Has tu placa YA!</p>
                    </a>
                </div>
                <img src={assets.womenImage} alt="" className="md:w-1/2 object-cover w-full drop-shadow-2xl" />
            </div>
            <div className="my-16 flex flex-col gap-10">
                <h2 className="title-regular text-center">¿Qué podrias <span className="text-custom-gradient"> hacer con </span> tu placa?</h2>
                <ul className="normal-text flex flex-col gap-3 text-center">
                    {/* con list-style-image */}
                    <li>💑 La canción de los dos.</li> 
                    <li>💙 Elige tu canción favorita.</li>
                    <li>🥳 La rola que te hace recordar esa época.</li>
                    <li>🤓 Promociona tu propia canción.</li>
                    <li>🚀 Y muchas cosas mas ...</li>
                </ul>
                <a className="button self-center" href="">
                    <p className="button-text">¡Has tu placa YA mismo!</p> 
                </a>
            </div>
            <HastuPlaca></HastuPlaca>
            {/* Contacto */}
            {/* fotter */}
        </>
    );
}