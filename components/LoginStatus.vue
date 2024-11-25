<template>
  <div>
    <div v-if="user">
      <div>Hello {{ user.displayName || user.email }}</div>
      <button @click="auth.signOut()">Sign out</button>
    </div>
    <div v-else>Not signed in</div>
  </div>
</template>

<script setup lang="ts">
const auth = useFirebaseAuth()!
const user = useCurrentUser()
</script>