const { initializeApp } = require('firebase/app');
const { getFirestore,collection, doc, getDoc, getDocs,setDoc } = require('firebase/firestore');

// dont touch the fb configuration
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

async function getUserData(user) {
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
async function writeUserData(user,data) {
    const docRef = doc(db, "allUsers", user);
    try {
        await setDoc(docRef, data);
        console.log("Document successfully written!");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}


async function getAllUsers() {
    try {
        const querySnapshot = await getDocs(collection(db, 'allUsers'));
        const users = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return users; // Return an array of User objects
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error; // Re-throw the error to be handled by the caller
    }
}












// Function to add multiple users with location data
async function addDummyUsers() {
    const users = [
        {
            full_name: "John Doe",
            age: 30,
            car: "Tesla Model 3",
            isAvailable: true,
            phone: "123-456-7890",
            position: { latitude: 37.7749, longitude: -122.4194 }, // Example: San Francisco
            price: 100000,
            score: 90,
            description: "Senior software engineer with 10 years of experience."
        },
        {
            full_name: "Jane Smith",
            age: 28,
            car: "Ford Mustang",
            isAvailable: false,
            phone: "098-765-4321",
            position: { latitude: 34.0522, longitude: -118.2437 }, // Example: Los Angeles
            price: 85000,
            score: 85,
            description: "Creative designer with a passion for User experience."
        },
        {
            full_name: "Alice Johnson",
            age: 35,
            car: "BMW X5",
            isAvailable: true,
            phone: "555-555-5555",
            position: { latitude: 40.7128, longitude: -74.0060 }, // Example: New York City
            price: 120000,
            score: 92,
            description: "Experienced project manager leading large teams."
        }
        // Add more users as needed
    ];

    for (let user of users) {
        const docRef = doc(collection(db, "allUsers")); // Automatically generate a new document ID
        await setDoc(docRef, user);
        console.log(`Added user: ${user.full_name}`);
    }
}






module.exports = { getData: getUserData, writeData: writeUserData ,getAllUsers};
