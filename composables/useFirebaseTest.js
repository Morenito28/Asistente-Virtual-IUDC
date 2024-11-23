import { doc, setDoc, getDoc } from "firebase/firestore";

export function useFirebaseTest() {
  const testFirestore = async () => {
    try {
      const { $db } = useNuxtApp();

      const testDocRef = doc($db, "test", "connection");
      await setDoc(testDocRef, { message: "Firebase is connected!" });

      // Leer el documento de prueba
      const docSnapshot = await getDoc(testDocRef);
      if (docSnapshot.exists()) {
        console.log("Document data:", docSnapshot.data());
        return { success: true, data: docSnapshot.data() };
      } else {
        console.log("No such document!");
        return { success: false, error: "Document not found" };
      }
    } catch (error) {
      console.error("Error testing Firestore:", error);
      return { success: false, error: error.message };
    }
  };

  return { testFirestore };
}
