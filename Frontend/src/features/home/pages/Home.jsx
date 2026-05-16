import React from 'react'
import FaceExpression from '../../Expression/component/FaceExpression'
import Player from '../components/Player'
import { useSong } from '../hooks/useSongs'

const Home = () => {

    const {handleGetSong} = useSong()

  return (
    <div>
      <FaceExpression 
      onClick={(expression)=>{handleGetSong({mood: expression})}}/>
    </div>
  )
}

export default Home



