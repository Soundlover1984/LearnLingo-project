import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyC3CYPUxu5kyHNi64Kden-mHOlVfrj84L0',
  authDomain: 'learnlingo-e367c.firebaseapp.com',
  databaseURL: 'https://learnlingo-e367c-default-rtdb.firebaseio.com',
  projectId: 'learnlingo-e367c',
  storageBucket: 'learnlingo-e367c.appspot.com',
  messagingSenderId: '531778231414',
  appId: '1:531778231414:web:b0a4dce271323f79149357',
  measurementId: 'G-BNE4XJC73Q',
};


const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);

export const auth = getAuth(app);
