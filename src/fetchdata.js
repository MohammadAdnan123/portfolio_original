import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyA2vRr2xd7P6QbZJwB7eGEcHy3GMsrHS0k",
  authDomain: "portfolio-9e620.firebaseapp.com",
  projectId: "portfolio-9e620",
  storageBucket: "portfolio-9e620.appspot.com",
  messagingSenderId: "741620647969",
  appId: "1:741620647969:web:806e2772d7c7014ec0bb60",
  measurementId: "G-5Y677Q5QPQ"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

const fetchSkillsFromFirestore = async () => {
  try {
    const querySnapshot = await db.collection('skills').get();
    const skillset = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      img: doc.data().img,
      title: doc.data().title,
    }));

    return skillset;
  } catch (error) {
    console.error('Error fetching skills:', error);
    return [];
  }
};
const fetchWorksFromFirestore = async () => {
    try {
      const querySnapshot = await db.collection('works').get();
      const works = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        title: doc.data().title,
        thumbnail: doc.data().thumbnail,
        url: doc.data().url,
        desc: doc.data().desc,
      }));
  
      return works;
    } catch (error) {
      console.error('Error fetching works:', error);
      return [];
    }
  };
const fetchVideosFromFirestore = async () => {
    try {
      const querySnapshot = await db.collection('videos').get();
      const videos = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        title: doc.data().title,
        thumbnail: doc.data().thumbnail,
        url: doc.data().url,
        desc: doc.data().desc,
      }));
  
      return videos;
    } catch (error) {
      console.error('Error fetching works:', error);
      return [];
    }
  };

export {fetchSkillsFromFirestore, fetchWorksFromFirestore, fetchVideosFromFirestore};