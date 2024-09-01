import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDIOTGZpDxode5VwMkqc0wFFZTG3MqE320",
    authDomain: "assir-5fb0c.firebaseapp.com",
    databaseURL: "https://assir-5fb0c-default-rtdb.firebaseio.com",
    projectId: "assir-5fb0c",
    storageBucket: "assir-5fb0c.appspot.com",
    messagingSenderId: "226936149096",
    appId: "1:226936149096:web:04afe5b3f9d4bd6eaf97dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Functions to interact with Firestore
export async function getUserData(user) {
    const docRef = doc(db, "allUsers", user);
    try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            console.log("No such document!");
        }
    } catch (error) {
        console.error("Error getting document:", error);
    }
}



// Function to write data to Firestore
export async function writeUserData(user, data) {
    const docRef = doc(db, "allUsers", user);
    try {
        await setDoc(docRef, data);
        console.log("Document successfully written!");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}



export async function getAllUsers() {
    try {
        const querySnapshot = await getDocs(collection(db, 'allUsers'));
        const users = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return users;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
}
