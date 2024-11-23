<template>
    <div>
      <h1>Test de Conexión a Firebase</h1>
      <button @click="runTest">Probar Conexión</button>
      <p v-if="result">{{ result }}</p>
    </div>
  </template>
  
  <script>
  import { useFirebaseTest } from "~/composables/useFirebaseTest";
  
  export default {
    data() {
      return {
        result: null,
      };
    },
    methods: {
      async runTest() {
        const { testFirestore } = useFirebaseTest();
        const response = await testFirestore();
        if (response.success) {
          this.result = `Conexión exitosa: ${JSON.stringify(response.data)}`;
        } else {
          this.result = `Error: ${response.error}`;
        }
      },
    },
  };
  </script>
  