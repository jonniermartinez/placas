import Form from "../../components/FormAlbum";
import AlbumCard from "../../components/albumcard";
import AlbumDataProvider from "../../context/albumContext";

export default function HastuPlaca() {
  return (
    <div className="section">
      <h3 className="title">
        Busca tu canción favorita o al artista del momento, disfruta de tu placa
        y <span className="text-custom-gradient ">escanea el codigo</span>.
      </h3>
      <div className="flex flex-wrap justify-around">
        <AlbumDataProvider>
          <Form></Form>
          <AlbumCard></AlbumCard>
        </AlbumDataProvider>
      </div>
    </div>
  );
}
