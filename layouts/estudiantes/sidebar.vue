<!-- pages/index.vue -->
<!-- pages/index.vue -->
<template>
    <Header />
    <Aside :menuItems="menuItems" />

    <div class="p-4 sm:ml-64 flex flex-col min-h-screen">
        <div class="flex-1 mt-14 overflow-auto">
            <div class="grid grid-cols-1 w-full gap-4 mb-4">
                <div class="flex items-center justify-center w-full rounded bg-gray-50 dark:bg-gray-800">
                    <p class="text-2xl text-gray-400 dark:text-gray-500 w-full">
                        <slot />
                    </p>
                </div>
                <!-- Más elementos... -->
            </div>
        </div>
    </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
import Aside from '~/components/Aside.vue'

// Definimos las opciones del menú
const menuItems = [
    {
        href: "/estudiante/",
        label: "Asistente Virtual",
        icon: {
            viewBox: "0 0 24 24",
            path: "M7 9h5m3 0h2M7 12h2m3 0h5M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.616a1 1 0 0 0-.67.257l-2.88 2.592A.5.5 0 0 1 8 18.477V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
        },
        // badge: 5
    },
    {
        href: "/estudiante/contenido-programatico",
        label: "Contenido Programatico",
        icon: {
            viewBox: "0 0 24 24",
            path: "M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-3 5h3m-6 0h.01M12 16h3m-6 0h.01M10 3v4h4V3h-4Z"
        }
    }
]
</script>