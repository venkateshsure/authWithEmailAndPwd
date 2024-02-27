import UserAuth from './components/UserAuth'
import Home from './components/Home'

import {  onAuthStateChanged } from "firebase/auth";

import {auth} from './firebase'



import {useState,useEffect} from 'react'

import './index.css'

const App=()=>{
  const [presentUser,setPresentUser]=useState(null)
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
    if (user) {
      // console.log(user.email,user.uid)
      setPresentUser({uid:user.id,email:user.email})
    }
    else{
      setPresentUser(null)
    }
  })
  },[]);

  /* for the user login the credentials are
  fullname=venky
  number=12345
  email=user1@gmail.com
  password=123456 
  */


return (
    <div>
      <center>
          {presentUser?<Home/>:<UserAuth/>}
      </center>
      </div>
      )
}

export default App