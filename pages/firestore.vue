<template>
  <div>
    <h1>Firestore</h1>
    <pre>UserId: {{ user?.uid }}</pre>
    <div>
      <p>You have {{ orders.length }} orders.</p>
      <ul>
        <li v-for="order in orders" :key="order.id">
          <pre>{{ order }}</pre>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { collection, query, where } from 'firebase/firestore'

definePageMeta({
  linkTitle: 'Firestore',
  order: 3,
  middleware: ['authenticated'],
})

const user = useCurrentUser()
const db = useFirestore()
const uCollection = collection(db, 'orders')
const uWhere = where('userId', '==', user.value?.uid)
const uQuery = query(uCollection, uWhere)
const orders = useCollection(uQuery, { ssrKey: 'user-orders' })
</script>