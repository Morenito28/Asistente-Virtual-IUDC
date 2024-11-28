<template>
  <div class="flex min-h-screen">
    <!-- Lado izquierdo con fondo azul y logo -->
    <div
      class="w-1/2 bg-gradient-to-r from-[#00AAFF] to-[#004099] flex justify-center items-center"
    >
      <img
        src="/assets/img/imglogoiudc-white.png"
        alt="Logo"
        class="max-w-[80%]"
      />
    </div>

    <!-- Lado derecho con formulario en fondo blanco -->
    <div class="w-1/2 bg-white flex justify-center items-center">
      <form @submit.prevent="handleLogin" class="max-w-sm w-full p-1 px-16" >
        <h1
          class="uppercase flex m-1 py-5 text-blue-700 justify-center items-center font-bold text-6xl text-center"
        >
          Asistente Virtual
        </h1>
        <!-- Correo -->
        <div class="relative mb-5">
          <input
            type="email"
            id="email"
            v-model="email"
            class="peer block w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-transparent dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
          <label
            for="email"
            class="absolute left-2 top-3 text-sm text-gray-500 transition-all duration-200 transform scale-75 origin-[0] peer-focus:scale-75 peer-focus:-top-5 peer-focus:text-blue-600"
            >Iniciar Sesión</label
          >
        </div>

        <!-- Contraseña -->
        <div class="relative mb-5">
          <input
            type="password"
            id="password"
            v-model="password"
            class="peer block w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-transparent dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
          <label
            for="password"
            class="absolute left-2 top-3 text-sm text-gray-500 transition-all duration-200 transform scale-75 origin-[0] peer-focus:scale-75 peer-focus:-top-5 peer-focus:text-blue-600"
            >Contraseña</label
          >
        </div>

        <!-- Mensaje de error -->
        <p class="text-red-500 text-sm text-center">{{ errorMessage }}</p>
        <!-- Botón de Iniciar Sesion -->
        <div class="flex justify-center">
          <button
            type="submit"
            class="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-gradient-to-r from-[#00AAFF] to-[#004099] transition-all duration-300 hover:bg-[#004099]"
          >
            Iniciar Sesion
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuth } from '~/composables/useAuth';
import { useRouter } from 'vue-router';

const { loginUser } = useAuth();
const router = useRouter();

const email = ref('');
const password = ref('');
const errorMessage = ref('');

const handleLogin = async () => {
  try {
    const userData = await loginUser({ email: email.value, password: password.value });
    // Redirigir según el rol
    if (userData.role === 'docente') { 
      router.push('/docente/dashboard');
    } else if (userData.role === 'estudiante') { 
      router.push('/estudiante/asistente-virtual');
    } else {
      throw new Error('Rol no reconocido');
    }
  } catch (error) {
    errorMessage.value = error.message;
  }
};
</script>
