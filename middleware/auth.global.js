import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { getCurrentUser } from 'vuefire'

export default defineNuxtRouteMiddleware(async (to, from) => {
    const nuxtApp = useNuxtApp()

    // Set loading state to true
    nuxtApp.isLoading = true

    // Añadir un pequeño retraso para asegurar que se muestra el loader
    //await new Promise(resolve => setTimeout(resolve, 500))

    // Lista de rutas públicas que no requieren autenticación
    const publicRoutes = [
        '/',
        '/register',
    ]

    // Verificar si Firebase y el usuario están disponibles
    const user = await getCurrentUser()

    // Si no hay usuario y la ruta no es pública, redirigir a login
    if (!user && !publicRoutes.includes(to.path)) {
        nuxtApp.isLoading = false
        return navigateTo('/')
    }

    if (user) {
        const db = getFirestore()
        const userDocRef = doc(db, 'usuarios', user.uid)
        
        // Obtener los datos del usuario desde Firestore
        const userDoc = await getDoc(userDocRef)
        const userData = userDoc.exists() ? userDoc.data() : null

        if (!userData || !userData.role) {
            // Si el usuario no tiene rol o los datos no existen, redirigir a login
            nuxtApp.isLoading = false
            return navigateTo('/')
        }

        // Si el usuario tiene un rol, redirigir según su rol
        if (userData.role === 'docente' && !to.path.startsWith('/docente') && !publicRoutes.includes(to.path)) {
            nuxtApp.isLoading = false
            return navigateTo('/docente')
        } else if (userData.role === 'estudiante' && !to.path.startsWith('/estudiante') && !publicRoutes.includes(to.path)) {
            nuxtApp.isLoading = false
            return navigateTo('/estudiante')
        }
    }

    // Set loading state to false después de todas las comprobaciones
    nuxtApp.isLoading = false

    // Si la ruta no existe y no se ha redirigido antes, mostrar la página 404
    if (to.matched.length === 0) {
        return navigateTo('/error')
    }
})