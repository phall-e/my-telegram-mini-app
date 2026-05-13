<template>
  <div class="p-5">
    <h1 class="text-2xl font-bold">
      Telegram Mini App
    </h1>

    <div v-if="user">
      <p>ID: {{ user.id }}</p>
      <p>Name: {{ user.first_name }}</p>
      <p>Username: {{ user.username }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTelegram } from '~/composables/useTelegram';

const { init, user } = useTelegram()

onMounted(() => {
  init()
})
</script>