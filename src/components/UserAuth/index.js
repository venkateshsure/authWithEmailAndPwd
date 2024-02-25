
import {useState} from 'react'


import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile, } from "firebase/auth";

import {auth} from '../../firebase'

import './index.css'

const UserAuth=()=>{
    const [name,setName]=useState("")
    const [number,setNumber]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const onChangeName=e=>{
        setName(e.target.value)
    }

    const onChangeNumber=e=>{
        setNumber(e.target.value)
    }

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
            console.log(user.email,user.displayName,user.phoneNumber)
            return updateProfile(user,{
                displayName:name,
                phoneNumber:number,
            })
    
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
        <div className='userAuth-con'>
            <center>
                <h1>Create Account</h1>
                <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
                    className="login-img"
                    alt="website login"
                    />
                <form className='form-con'>
                    <input type="text" placeholder="Full Name" value={name}  className="input-background" onChange={onChangeName}/>
                    <input type="number" placeholder="Phone" value={number} className="input-background" onChange={onChangeNumber}/>
                    <input type="email" placeholder="Email" value={email} className="input-background" onChange={onChangeMail}/>
                    <input type="password" placeholder="Password" value={password} className="input-background" onChange={onChangePassword}/>
                   <div className='button-con'>
                        <button className="btn" onClick={signIn}>Sign In</button>
                        <button className="btn" onClick={signUp}>Sign Up</button>
                    </div>
               </form>
            </center>
        </div>
        
    )
}

export default UserAuth