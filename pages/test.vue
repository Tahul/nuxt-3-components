<template>
  <div class="text-8xl text-white">
    Hello Nuxt3!

    <DefaultComponent />

    <GlobalFalseComponent />

    <GlobalTrueComponent />

    <PrefetchComponent />

    <PreloadComponent />

    <NuxtLink to="/">
      Index page
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
console.log('Test page setup!')
</script>
