import * as Firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBuVD5OXCSQiHmhB_MENyY-en2YVrm9mbc",
  authDomain: "angle-control.firebaseapp.com",
  databaseURL: "https://angle-control.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "991417158966"
};

export const firebase = Firebase.initializeApp(firebaseConfig);