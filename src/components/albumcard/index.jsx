import { useContext } from "react";
import { AlbumContext } from "../../context/albumContext";
import assets from "../../assets";
import { useState } from "react";
import { useEffect } from "react";

export default function AlbumCard() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const { albumData, albumTitle, albumMessage } = useContext(AlbumContext);
  const urlCode = "https://scannables.scdn.co/uri/plain/jpeg/000/white/500/";

  const data = albumData;
  const artists = data.artists;
  const albumDataLength = Object.keys(albumData).length;

  useEffect(() => {
    titleDesition();
    messageDesition();
  }, [albumData, albumTitle, albumMessage]);

  function titleDesition() {
    if (albumDataLength === 0) {
      setTitle("Joanne (Deluxe)");
    } else if (Object.keys(albumTitle).length === 0) {
      setTitle(data.name);
    } else {
      setTitle(albumTitle);
    }
  }
  function messageDesition() {
    if (albumDataLength === 0) {
      setMessage("Lady Gaga");
    } else if (Object.keys(albumMessage).length === 0) {
      artists.map((artist) => {
        return setMessage(artist.name);
      });
    } else {
      setMessage(albumMessage);
    }
  }

  return (
    <div className="flex flex-col items-center md:w-1/2">
      <div className="mx-auto bg-gray-400 p-4 md:w-1/2">
        <img src={
          albumDataLength === 0
          ? assets.Joanne
          : data.images[0].url
        } alt="" />
        
        <img src={
          albumDataLength === 0
          ? assets.JoanneQr
          : `${urlCode}${data.uri}`
        } alt="codigo qr" />


        <div className="my-5">
          <p className="text-lg font-bold">{title}</p>
          <p className="text-sm">{message}</p>
        </div>
        {albumDataLength === 0 ? (
          <img src={assets.reproduction} alt="" className="" />
        ) : (
          <img src={assets.reproduction} alt="" className="" />
        )}
      </div>
    </div>
  );
}
