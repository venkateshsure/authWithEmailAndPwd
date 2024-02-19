import { signOut } from "firebase/auth"
import {auth} from './firebase'

const Home=()=>{

    const onSignOut=async ()=>{
        await signOut(auth)
    }


    return (
        <div>
            <center>
                <h1>welcome user</h1>
                <button onClick={onSignOut}>Sign out</button>
            </center>
        </div>
    )
}

export default Home