import { useFirestore } from "vuefire";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const useAuth = () => {
  const auth = useNuxtApp().$firebaseAuth; // Firebase Authentication
  const firestore = useFirestore(); // Firestore
  const registerUser = async ({
    email,
    password,
    name,
    role = "estudiante",
  }) => {
    try {
      // Registrar usuario en Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Guardar información adicional en Firestore
      const userDocRef = doc(firestore, "usuarios", user.uid);
      await setDoc(userDocRef, {
        name,
        email,
        role,
        createdAt: new Date(),
      });
      return user; // Retornar el usuario registrado
    } catch (error) {
      throw new Error(`Error al registrar el usuario: ${error.message}`);
    }
  };

  const loginUser = async ({ email, password }) => {
    try {
      // Iniciar sesión con Firebase Authentication
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Obtener el rol del usuario desde Firestore
      const userDocRef = doc(firestore, "usuarios", user.uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();
        return {
          ...userData,
          uid: user.uid,
        }; // Retornar datos del usuario, incluyendo su rol
      } else {
        throw new Error(
          "El usuario no tiene información adicional en Firestore."
        );
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      throw error;
    }
  };

  return {
    registerUser,
    loginUser,
  };
};
