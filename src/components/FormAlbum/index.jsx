import { useState, useContext } from "react";
import { AlbumContext } from "../../context/albumContext";
import useToken from "../../hooks/useToken";

export default function Form() {
  const [albums, SetAlmbums] = useState([]);
  const [wordtyped, setWordTyped] = useState("Joanne (Deluxe)");
  const { setAlbumdata, setAlbumTitle, setAlbumMessage } =
    useContext(AlbumContext);
  const token = useToken();

  const clearList = () => {
    albums.splice(0, albums.length);
  };
  if (wordtyped == "") {
    clearList();
  }

  const handleChangeInputSong = (event) => {
    setWordTyped(event.target.value);
    getAlbums(wordtyped);
  };
  const handleChangeInputTitle = (event) => {
    setAlbumTitle(event.target.value);
  };
  const handleChangeInputMessage = (event) => {
    setAlbumMessage(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleClickedSong = (album) => {
    setAlbumdata(album);
    setWordTyped(album.name);
    clearList();
  };

  async function getAlbums(word) {
    const artistParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    // Obtener el resultado de la busqueda
    if (word.length > 0) {
      const searchResult = await fetch(
        `https://api.spotify.com/v1/search?q=${word}&type=album,playlist`,
        artistParameters
      )
        .then((res) => res.json())
        .then((data) => {
          SetAlmbums(data.albums.items);
        });
    }
  }

  return (
    <form
      className="relative flex flex-col justify-evenly gap-14 w-1/2 max-md:w-full mb-10"
      onSubmit={() => handleSubmit(event)}
    >
      <div>
        <label htmlFor="song-input">Busca tu canción aquí :</label>
        <input
          className="input w-full"
          placeholder="Buscar canción o artista ..."
          type="text"
          name="song-input"
          value={wordtyped}
          onChange={() => handleChangeInputSong(event)}
        />
        <ul className="absolute top-22 max-w-full min-w-full z-30 flex flex-col max-h-32 overflow-auto bg-white shadow-lg ">
          {albums.map((album) => {
            const artist = album.artists;
            return (
              <li
                key={album.id}
                onClick={() => handleClickedSong(album)}
                className="cursor-pointer hover:bg-slate-300 max-w-full"
              >
                <p className="p-1 w-full">{`${album.name} (${artist[0].name})`}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <label htmlFor="nombre">Cambia el nombre de la canción :</label>
        <input
          type="text"
          placeholder="Titulo"
          name="nombre"
          onChange={() => handleChangeInputTitle(event)}
          className="input w-full"
        />
      </div>
      <div>
        <label htmlFor="subtitulo">Cambia el nombre del artista :</label>
        <input
          type="text"
          placeholder="Subtitulo"
          onChange={() => handleChangeInputMessage(event)}
          className="input w-full"
        />
      </div>
	  {/* <button className="button self-center">Descargar img</button> */}
    </form>
  );
}
