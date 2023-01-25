import assets from "../../assets";
export default function Footer() {
  return (
    <>
      <footer className="mt-20 flex h-fit w-full flex-wrap items-center justify-evenly bg-black text-white">
        <img src={assets.logo} alt="" className=" " />
        <div className="w-1/2 ">
          <p className="text-center">
            Dedicale la mejor canción a esa persona tan especial y regala un
            recuerdo unico. ¡Podrás scanearla para escucharla en Spotify! El
            Regalo Perfecto.
          </p>
        </div>
        <div>Twitter LinkedIng Github</div>
      </footer>
    </>
  );
}
