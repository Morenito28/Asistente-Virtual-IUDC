export default defineNuxtRouteMiddleware(async (to, from) => {
  const { $firebaseAuth } = useNuxtApp();
  const user = $firebaseAuth.currentUser;

  if (!user) {
    return navigateTo("/login");
  }

  const role = to.meta.role;
  const userRole = await getUserRole(user.uid); // Llama a una función para obtener el rol

  if (role && userRole !== role) {
    console.error('Acceso denegado: Rol incorrecto');
    return navigateTo("/login"); // Página de acceso denegado
  }
});

const getUserRole = async (uid) => {
  const firestore = useNuxtApp().$firestore;
  const docRef = doc(firestore, "usuarios", uid);
  const userDoc = await getDoc(docRef);

  if (userDoc.exists()) {
    return userDoc.data().role;
  } else {
    throw new Error("No se encontró el rol del usuario.");
  }
};