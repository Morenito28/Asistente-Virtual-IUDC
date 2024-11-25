<script>
export default {
  middleware: 'authRole',
  meta: {
    role: 'estudiante',
  },
};
</script>
<template>
    <Sidebar />
</template>