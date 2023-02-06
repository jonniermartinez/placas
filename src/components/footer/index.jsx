import assets from "../../assets";
export default function Footer() {
  return (
    <>
      <footer className="mt-20 flex h-fit w-full flex-wrap items-center justify-evenly gap-7 bg-black text-white">
        <img src={assets.logo} alt="" className="" />
        <div className="w-1/2 ">
          <p className="text-center">
            Dedicale la mejor canción a esa persona tan especial y regala un
            recuerdo único. ¡Podrás scanearla para escucharla en Spotify! El
            Regalo Perfecto.
          </p>
        </div>
        <div className="flex w-40 justify-evenly flex-wrap">
          <a
            href="https://www.linkedin.com/in/jonniermartinez/"
            target="_blank"
            className=""
          >
            <img src={assets.linkedig} alt="linkedig" className="w-7" />
          </a>
          <a href="https://github.com/jonniermartinez/placas" target="_blank">
            <img src={assets.github} alt="github" className="w-7" />
          </a>
          <a href="https://twitter.com/JonnierMartinez" target="_blank">
            <img src={assets.twitter} alt="twitter" className="w-7" />
          </a>
        </div>
      </footer>
    </>
  );
}
