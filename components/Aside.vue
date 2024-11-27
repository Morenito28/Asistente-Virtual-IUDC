<template>
    <aside id="logo-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar">
        <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800 flex flex-col">
            <!-- Menu Items -->
            <ul class="space-y-2 font-medium flex-grow">
                <li v-for="(item, index) in menuItems" :key="index">
                    <a :href="item.href"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg v-if="item.icon"
                            class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            :viewBox="item.icon.viewBox">
                            <path :d="item.icon.path" />
                        </svg>
                        <span class="ms-3">{{ item.label }}</span>
                        <span v-if="item.badge"
                            class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                            {{ item.badge }}
                        </span>
                    </a>
                </li>
            </ul>

            <!-- Theme toggle button, positioned at the bottom -->
            <div class="mt-auto p-2">
                <button @click="toggleTheme"
                    class="w-full p-3 rounded-lg text-gray-600 dark:text-gray-400 flex justify-end">
                    <svg v-if="!isDarkMode" class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                        viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                            d="M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z"
                            clip-rule="evenodd" />
                    </svg>

                    <!-- Moon icon (Flowbite) -->
                    <svg v-if="isDarkMode" class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z" />
                    </svg>
                </button>
            </div>
        </div>
    </aside>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

import { getSavedTheme, saveTheme, applyTheme } from '@/utils/theme'

interface MenuIcon {
  viewBox: string;
  path: string;
}

interface MenuItem {
  href: string;
  label: string;
  icon?: MenuIcon;
  badge?: number | string;
}

const isDarkMode = ref<boolean>(false)

onMounted(() => {
    const savedTheme = getSavedTheme()
    if (savedTheme) {
        isDarkMode.value = savedTheme === 'dark'
        applyTheme(savedTheme)
    }
})

function toggleTheme(): void {
    isDarkMode.value = !isDarkMode.value
    const theme = isDarkMode.value ? 'dark' : 'light'
    saveTheme(theme)
    applyTheme(theme)
}

defineProps<{
    menuItems: MenuItem[]
}>()
</script>