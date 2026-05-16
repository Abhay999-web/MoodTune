import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router'

const Protected = ({children}) => {

   const {
    user,loading
   }= useAuth()
   const navigate = useNavigate()

    if(!loading && !user){
        return <Navigate to="/login"/>
    }

  return children
}

export default Protected
