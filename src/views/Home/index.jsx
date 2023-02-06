import assets from "../../assets";
import { Questions } from "../../components/Questions";
import HastuPlaca from "../Has_tu_placa";
import Footer from "../../components/footer";
export default function Home() {
  return (
    <>
      <div className="flex w-full flex-wrap content-center">
        <div className="my-1 flex flex-col gap-16 self-center max-md:items-center max-md:gap-8 max-md:text-center md:w-1/2">
          <h1 className="text-4xl font-extrabold md:text-4xl" id="inicio">
            Crea tu propia{" "}
            <span className="text-custom-gradient">placa de Spotify</span> aquí.
            ¡Es muy fácil!
          </h1>
          <p className="normal-text md:w-10/12">
            Dedicale la mejor canción a esa persona tan especial y regala un
            recuerdo único. ¡Podrás scanearla para escucharla en Spotify! El
            Regalo Perfecto.
          </p>
          <a className="button" href="#haz-tu-placa">
            <p className="button-text">¡Haz tu placa YA!</p>
          </a>
        </div>
        <img
          src={assets.solidarityPana}
          alt=""
          author="https://storyset.com/team"
          className="w-full object-cover drop-shadow-2xl md:w-1/2"
        />
      </div>
      <div className="section flex flex-col gap-10">
        <h3 className="title">
          ¿Qué podrias <span className="text-custom-gradient"> hacer con </span>{" "}
          tu placa?
        </h3>
        <ul className="normal-text flex flex-col gap-3 text-center">
          {/* con list-style-image */}
          <li>💑 La canción de los dos.</li>
          <li>💙 Elige tu canción favorita.</li>
          <li>🥳 La rola que te hace recordar esa época.</li>
          <li>🤓 Promociona tu propia canción.</li>
          <li>🚀 Y muchas cosas mas ...</li>
        </ul>
        <a className="button self-center" href="#haz-tu-placa">
          <p className="button-text">¡Haz tu placa YA mismo!</p>
        </a>
      </div>
      <HastuPlaca></HastuPlaca>
      <Questions></Questions>
      <Footer></Footer>
      {/* Contacto */}
      {/* fotter */}
    </>
  );
}
