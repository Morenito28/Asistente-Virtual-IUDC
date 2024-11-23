// plugins/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Si usas autenticación
import { getFirestore } from "firebase/firestore"; // Si usas Firestore

export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig();
  
  const firebaseConfig = {
    apiKey: config.public.firebaseApiKey,
    authDomain: config.public.firebaseAuthDomain,
    projectId: config.public.firebaseProjectId,
    storageBucket: config.public.firebaseStorageBucket,
    messagingSenderId: config.public.firebaseMessagingSenderId,
    appId: config.public.firebaseAppId,
  };

  // Inicializar Firebase
  const app = initializeApp(firebaseConfig);

  // Exponer servicios de Firebase para usar en la aplicación
  nuxtApp.provide('firebase', app);
  nuxtApp.provide('auth', getAuth(app));
  nuxtApp.provide('db', getFirestore(app));
});
