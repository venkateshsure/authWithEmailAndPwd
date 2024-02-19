

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


import { getAuth} from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaXU9UvjUHO_dG4sJOHnemvpBndLWD8B0",
  authDomain: "authemailpwd-5a2da.firebaseapp.com",
  projectId: "authemailpwd-5a2da",
  storageBucket: "authemailpwd-5a2da.appspot.com",
  messagingSenderId: "890946405019",
  appId: "1:890946405019:web:4aa64c41b448b928fa7c3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db=getFirestore(app);

const auth=getAuth(app);

export  {auth};
export default db;
