import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Using Firebase Documentation
const config = {
    apiKey: "AIzaSyAziNLnc4cXvKMHIkpvi-atGPkcONqBUvQ",
    authDomain: "tattletale-db.firebaseapp.com",
    projectId: "tattletale-db",
    storageBucket: "tattletale-db.appspot.com",
    messagingSenderId: "239846849247",
    appId: "1:239846849247:web:8568b75699abe1800fc76a",
    measurementId: "G-96QSD29KMQ"
};

// Creates a new user in the firestore database, storing neccesary info
// returns userRef which is used to check the user info in the database
export const createUserProfileDocument = async (userAuth, otherData) => {
    if (!userAuth) {
        return
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const {displayName, email} = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...otherData
            })
        } catch (error) {
            console.log("error creating user", error.message)
        }
    }
    return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: "select_account"})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase