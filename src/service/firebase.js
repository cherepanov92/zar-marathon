import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAje9dkqyMdyaOfN0WM-Y7WCh-nNN6iUgU",
  authDomain: "pokemon-game-f2ef8.firebaseapp.com",
  databaseURL: "https://pokemon-game-f2ef8-default-rtdb.firebaseio.com",
  projectId: "pokemon-game-f2ef8",
  storageBucket: "pokemon-game-f2ef8.appspot.com",
  messagingSenderId: "636593100078",
  appId: "1:636593100078:web:36e9eb132b5fb5fd2fd6bf"
};

firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const database = firebase.database();

export default database;