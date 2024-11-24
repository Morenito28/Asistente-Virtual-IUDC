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
      router.push('/estudiante/dashboard');
    } else {
      throw new Error('Rol no reconocido');
    }
  } catch (error) {
    errorMessage.value = error.message;
  }
};
</script>

<template>
  <div>
    <h1>Iniciar Sesión</h1>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="email">Correo Electrónico</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Contraseña</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      <button type="submit">Iniciar Sesión</button>
    </form>
  </div>
</template>