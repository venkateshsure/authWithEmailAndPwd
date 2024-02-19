import UserAuth from './UserAuth'

import {  onAuthStateChanged } from "firebase/auth";

import {auth} from './firebase'


import Home from './Home'
import {useState,useEffect} from 'react'
import './index.css'

const App=()=>{
  const [presentUser,setPresentUser]=useState(null)
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user.email,user.uid)
      setPresentUser({uid:user.id,email:user.email})
    }
    else{
      setPresentUser(null)
    }
  })
  },[]);


return (
    <div>
      <center>
          {presentUser?<Home/>:<UserAuth/>}
      </center>
      </div>
      )
}

export default App