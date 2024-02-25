import { signOut } from "firebase/auth"

import {auth} from '../../firebase'

import {useState,useEffect} from 'react'

import Header from '../Header'


import './index.css'

const Home=()=>{

    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(userCredential=> {
            console.log(userCredential)
            const {displayName} = userCredential;
            
            if (displayName) {
                setUser(displayName);
        
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    const onSignOut=async ()=>{
        await signOut(auth)
    }

    return (
        <>
        <Header/>
        <div className="home-con">

            <div className="fir-con">
    
                
                    <h1 className="text-head">Hi! {user}</h1>
                    <button onClick={onSignOut}>Sign out</button>
                
            </div>
        </div>
        </>
    )
}

export default Home