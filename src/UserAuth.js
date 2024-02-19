
import {useState} from 'react'


import {createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";

import {auth} from './firebase'


const UserAuth=()=>{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const onChangeMail=e=>{
        setEmail(e.target.value)
    }
    
    const onChangePassword=e=>{
        setPassword(e.target.value)
    }
    
    const signUp=(e)=>{
        e.preventDefault()
        createUserWithEmailAndPassword(auth,email,password)
        .then(userCredential=>{
            const user = userCredential.user;
            console.log(user.email)
        })
        .catch(err=>console.log(err))
    }

    const signIn=(e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(auth,email,password)
        .then(userCredential=>{
            const user = userCredential.user;
            console.log(user)
        })
        .catch(err=>console.log(err))
    }

    return (
        <div>
            <center>
                <h1>Authentication</h1>
                <form>
                    <input type="email" placeholder="Email" value={email} onChange={onChangeMail}/><br/>
                    <input type="password" placeholder="Password" value={password} onChange={onChangePassword}/><br/>
                    <button onClick={signIn}>Sign In</button>&nbsp;&nbsp;
                    <button onClick={signUp}>Sign Up</button>
               </form>
            </center>
        </div>
        
    )
}

export default UserAuth