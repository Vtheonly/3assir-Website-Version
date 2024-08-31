const { initializeApp } = require('firebase/app');
const { getFirestore, doc, getDoc ,setDoc}= require('firebase/firestore');
// Your Firebase config and initialization code
const firebaseConfig = {
    apiKey: "AIzaSyDIOTGZpDxode5VwMkqc0wFFZTG3MqE320",
    authDomain: "assir-5fb0c.firebaseapp.com",
    databaseURL: "https://assir-5fb0c-default-rtdb.firebaseio.com",
    projectId: "assir-5fb0c",
    storageBucket: "assir-5fb0c.appspot.com",
    messagingSenderId: "226936149096",
    appId: "1:226936149096:web:04afe5b3f9d4bd6eaf97dd"
};

const app = initializeApp(firebaseConfig);



const db = getFirestore();
const docRef = doc(db, "Index", "hi");

getDoc(docRef).then((docSnap) => {
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.error("Error getting document:", error);
});



// // Reference to the document 'hi' in the 'indexx' collection
// const docRef = doc(db, "indexx", "hi");

// Data to be written to the document


const data = {
    gg: "88888",
    dd: "wehfo",
    ehfeh: "ehoehfoq"
};

// Write data to the document
async function writeData() {
    try {
        await setDoc(docRef, data);
        console.log("Document successfully written!");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}

// writeData();
