import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD92-FoFxq_WVtrjcS6wdKXlqMm85WhrPY',
  authDomain: 'shards-dashboard-vue.firebaseapp.com',
  databaseURL: 'https://shards-dashboard-vue.firebaseio.com',
  projectId: 'shards-dashboard-vue',
  storageBucket: 'shards-dashboard-vue.appspot.com',
  messagingSenderId: '483641989018',
  appId: '1:483641989018:web:34b67120c09869dbb84c23',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Get a Firestore instance
export const db = firebase.firestore();

export const storage = firebase.storage();


// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { TimeStamp, GeoPoint } = firebase.firestore;
export { TimeStamp, GeoPoint };
