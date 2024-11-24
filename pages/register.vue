<script setup>
import { ref } from 'vue';
import { useAuth } from '~/composables/useAuth';
import { useRouter } from 'vue-router';

const router = useRouter();
const { registerUser } = useAuth();

// Referencias para los campos del formulario
const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const errorMessage = ref('');

const handleRegister = async () => {
  // Validación básica
  if (password.value !== confirmPassword.value) {
    errorMessage.value = 'Las contraseñas no coinciden.';
    return;
  }

  if (password.value.length < 6) {
    errorMessage.value = 'La contraseña debe tener al menos 10 caracteres.';
    return;
  }

  try {
    // Registrar al usuario
    await registerUser({
      email: email.value,
      password: password.value,
      name: name.value,
    });

    // Redirigir al usuario después del registro
    router.push('/login'); // Cambia la ruta según flujo
  } catch (error) {
    errorMessage.value = error.message;
  }
};
</script>

<template>
  <div class="register">
    <h1>Registrarse</h1>
    <form @submit.prevent="handleRegister">
      <div>
        <label for="name">Nombre</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <div>
        <label for="email">Correo Electrónico</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Contraseña</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <div>
        <label for="confirmPassword">Confirmar Contraseña</label>
        <input type="password" id="confirmPassword" v-model="confirmPassword" required />
      </div>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      <button type="submit">Registrarse</button>
    </form>
  </div>
</template>
