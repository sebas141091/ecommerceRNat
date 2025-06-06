import {
  getReactNativePersistence,
  initializeAuth,
} from 'firebase/auth';
import { initializeApp, } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
  apiKey: "AIzaSyBY2nGbYpDATuTBtZ5DhGscz1ySpaQ52aM",
  authDomain: "ecommerce-ad682.firebaseapp.com",
  projectId: "ecommerce-ad682",
  storageBucket: "ecommerce-ad682.firebasestorage.app",
  messagingSenderId: "931270712461",
  appId: "1:931270712461:web:e6051ea476438cec4e16c4"
};
const app = initializeApp(firebaseConfig);


const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export { auth };
export const db = getFirestore(app);