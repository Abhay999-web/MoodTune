import { createContext } from "react";
import { useState } from "react";

export const SongContext = createContext()

export const SongContextProvider = ({ children }) => {

    const [ song, setSong ] = useState({
  
  "url": "https://ik.imagekit.io/aps999/cohort-2/moodify/songs/Hitman__From__Fateh____DOWNLOAD_MING___wGQpbD02.mp3",
  "posterUrl": "https://ik.imagekit.io/aps999/cohort-2/moodify/posters/Hitman__From__Fateh____DOWNLOAD_MING__MBEtzeFGK.jpeg",
  "title": "Hitman (From \"Fateh\") [DOWNLOAD MING]",
  "mood": "happy",
 
})

    const [ loading, setLoading ] = useState(false)

    return (
        <SongContext.Provider
            value={{ loading, setLoading, song, setSong }}
        >
            {children}
        </SongContext.Provider>
    )

}