import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  // Add your Firebase project configuration here
  apiKey: 'AIzaSyAUnbVwO40hLrpO2Z0ZaP4FlNPYrAmBpvc',
  authDomain: 'alectowatch.firebaseapp.com',
  projectId: 'alectowatch',
  storageBucket: 'alectowatch.appspot.com',
  messagingSenderId: '71024024661',
  appId: '1:71024024661:web:ad81f3d063b2d5e4ef48dc',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Function to register a new user
export const registerUser = async (email, password, username) => {
    try {
      // Create a user with email and password
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;
  
      // Save additional user data to Firestore
      await firestore.collection('users').doc(user.uid).set({
        username,
        email,
      });
  
      return user;
    } catch (error) {
      throw error;
    }
  };
  
  // Function to sign in a user
  export const signInUser = async (email, password) => {
    try {
      // Sign in the user with email and password
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  };
  
  // Function to get user data by email
  export const getUserByEmail = async (email) => {
    try {
      const querySnapshot = await db.collection('users').where('email', '==', email).get();
      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        return userDoc.data();
      }
      return null;
    } catch (error) {
      throw error;
    }
  };

// Get references to the auth and firestore services
const auth = firebase.auth();
const firestore = firebase.firestore();
const db = firebase.firestore();

export { firebase, auth, firestore, db };