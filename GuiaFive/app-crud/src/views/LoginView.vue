<template id="fondoTemplate">
  <div id="fondo" class="container mt-5 col-md-4">
    <h3>Iniciar Sesión</h3>
    <input v-model="usuario" class="form-control mb-2" placeholder="Usuario" />
    <input v-model="clave" type="password" class="form-control mb-2" placeholder="Contraseña" />
    <button class="btn btn-primary w-100" @click="login">Entrar</button>
    <p v-if="error" class="text-danger mt-2">{{ error }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuario: '',
      clave: '',
      error: ''
    }
  },
  methods: {
    login() {
      const users = [
        { user: 'admin', pass: '1234' },
        { user: 'adrian', pass: '1111' }
      ]

      const valido = users.find(u => u.user === this.usuario && u.pass === this.clave)
      if (valido) {
        localStorage.setItem('logueado', 'true')
        this.$router.push('/dashboard')
      } else {
        this.error = 'Credenciales incorrectas'
      }
    }
  }
}
</script>
<style scoped>
#fondo {
  background-color: #4582c0; /* Un color de fondo gris claro */
  padding:4rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Una sombra suave */
}

</style>
