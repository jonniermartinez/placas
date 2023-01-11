import { useEffect, useState } from 'react'
export default function useToken() {
  const [accessToken, setAccessToket] = useState("");
  // Pedir el token temporal
    useEffect(() => {
      const authParameters = {
        method: 'POST',
        headers: {
          'Content-type': 'application/x-www-form-urlencoded'
        },
        body: `grant_type=client_credentials&client_id=${import.meta.env.VITE_CLIENT_ID}&client_secret=${import.meta.env.VITE_CLIENT_SECRET}`
      }
    
     const tokenPost = fetch(`${import.meta.env.VITE_API}token`, authParameters)
        .then(res => res.json())
        .then(data => setAccessToket(data.access_token))
    }, [])
  return accessToken;
}