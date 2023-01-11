import React from "react";  
import { useState } from "react";

export const AlbumContext = React.createContext({});

export default function AlbumDataProvider({children}){
  // la imagen
  // el titulo
  // mensaje o autor de la cancion
  
  const [albumData, setAlbumdata] = useState({})
  const [albumTitle, setAlbumTitle] = useState({})
  const [albumMessage, setAlbumMessage] = useState({})

  return(
    <AlbumContext.Provider value={{ albumData, setAlbumdata, albumTitle, setAlbumTitle, albumMessage, setAlbumMessage}}>
      {children}
    </AlbumContext.Provider>
  )
}