<template>
  <div class="bg-black text-white w-64 h-screen fixed">
    <ul class="space-y-4 mt-4">
      <li>
        <NuxtLink to="/" class="block px-4 py-2 hover:bg-gray-700 rounded">
          🏠 Asistente Virtual
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/sessions" class="block px-4 py-2 hover:bg-gray-700 rounded">
          📚 Contenido Programático
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/crud" class="block px-4 py-2 hover:bg-gray-700 rounded">
          ⚙️ CRUD Page
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
