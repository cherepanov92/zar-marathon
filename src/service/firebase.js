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

class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);

    this.fire = firebase;
    this.database = this.fire.database();
  }

  getPokemonsOnce = async () => {
    return await this.database.ref('pokemons')
    .once('value')
    .then(snapshot => snapshot.val());
  }

  postPokemon = (key, pokemon) => {
    this.database.ref(`pokemons/${key}`).set(pokemon);
  }

  addPokemon = (new_card, cb) => {
    const newKey = this.database.ref().child('pokemons').push().key;

    this.database.ref(`pokemons/${newKey}`)
    .set(new_card)
    .then(() => cb());
  }
}

export default Firebase;