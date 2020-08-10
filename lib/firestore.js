/*** Connect to Firestore db ***/
// import admin from 'firebase-admin';

// try {
//   admin.initializeApp({
//     credential: admin.credential.cert({
//       projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//       privateKey: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
//       clientEmail: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL
//     }),
//     databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL
//   });
// } catch (error) {
//   /*
//    * We skip the "already exists" message which is
//    * not an actual error when we're hot-reloading.
//    */
//   if (!/already exists/u.test(error.message)) {
//     // eslint-disable-next-line no-console
//     console.error('Firebase admin initialization error', error.stack);
//   }
// }

// export default admin.firestore();


// Import firebase packages
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// To expose .env.local variables to browser, need to append `NEXT_PUBLIC_` to all variables. Set app config using environment variables.
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Was getting this error; `Firebase App named '[DEFAULT]' already exists (app/duplicate-app)`
// To solve this, use check to see if app is not already initialized. If not, initialize it.
export default !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig).firestore()
  : firebase.app().firestore();