<template>
  <div>
    <h1>Nuxt fontawesome playground!</h1>
    <div>
      <font-awesome-icon :icon="faMusic" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { faMusic } from '@fortawesome/free-solid-svg-icons/faMusic'
</script>
