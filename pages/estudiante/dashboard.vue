<script>
export default {
  middleware: 'authRole',
  meta: {
    role: 'estudiante',
  },
};
</script>
<template>
    <div>
        <h1>Dashboard del Estudiante</h1>
        <p>¡Bienvenido!</p>
    </div>
</template>