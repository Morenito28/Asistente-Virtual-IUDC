<template>
  <div :class="{'dark': isDark}" class="min-h-screen flex flex-col">
    <!-- Header -->
    <header class="bg-blue-600 text-white p-4 dark:bg-gray-900 dark:text-gray-100 flex justify-between items-center">
      <h1>Mi Aplicación</h1>
      <button
        class="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100 px-4 py-2 rounded"
        @click="toggleDarkMode"
      >
        {{ isDark ? 'Modo Claro' : 'Modo Oscuro' }}
      </button>
    </header>
    <div class="flex flex-1">
      <!-- Sidebar -->
      <aside class="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-100 w-64 p-4">
        <nav>
          <ul>
            <li><NuxtLink to="/">Inicio</NuxtLink></li>
            <li><NuxtLink to="/sessions">Sesiones</NuxtLink></li>
            <li><NuxtLink to="/crud">CRUD</NuxtLink></li>
          </ul>
        </nav>
      </aside>
      <!-- Main Content -->
      <main class="flex-1 p-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <NuxtPage />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDark: false, // Estado inicial del modo
    };
  },
  methods: {
    toggleDarkMode() {
      const html = document.documentElement;
      html.classList.toggle('dark');
      this.isDark = html.classList.contains('dark');
      // Guardar preferencia en localStorage
      localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
    },
  },
  mounted() {
    // Cargar preferencia del usuario al iniciar
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      this.isDark = true;
    }
  },
};
</script>

<style>
/* Personaliza aquí si necesitas más estilos para el modo oscuro */
</style>
