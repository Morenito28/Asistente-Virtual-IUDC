import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { getCurrentUser } from 'vuefire'

export default defineNuxtRouteMiddleware(async (to, from) => {
    const nuxtApp = useNuxtApp()

    // Set loading state to true
    nuxtApp.isLoading = true

    // Add a small delay to ensure the loader is shown
    await new Promise(resolve => setTimeout(resolve, 500))

    // Lista de rutas públicas que no requieren autenticación
    const publicRoutes = [
        '/',
        '/register',
    ]

    const user = await getCurrentUser()

    // Si no hay usuario y la ruta no es pública, redirigir a login
    if (!user && !publicRoutes.includes(to.path)) {
        nuxtApp.isLoading = false
        return navigateTo('/')
    }

    if (user) {
        const db = getFirestore()
        const userDoc = await getDoc(doc(db, 'usuarios', user.uid))
        const userData = userDoc.data()

        // Si el usuario tiene un rol, redirigir según su rol
        if (userData && userData.rol) {
            if (userData.rol === 'docente' && !to.path.startsWith('/docente') && !publicRoutes.includes(to.path)) {
                nuxtApp.isLoading = false
                return navigateTo('/docente/dashboard')
            } else if (userData.rol === 'estudiante' && !to.path.startsWith('/estudiante') && !publicRoutes.includes(to.path)) {
                nuxtApp.isLoading = false
                return navigateTo('/estudiante/asistente-virtual')
            }
        } else if (!publicRoutes.includes(to.path)) {
            // Si el usuario no tiene rol, redirigir a login
            nuxtApp.isLoading = false
            return navigateTo('/')
        }
    }

    // Set loading state to false after all checks
    nuxtApp.isLoading = false

    // Si la ruta no existe y no se ha redirigido antes, mostrar la página 404
    if (to.matched.length === 0) {
        return navigateTo('/error')
    }
})