<template>
  <div class="text-8xl text-white">
    Hello Nuxt3!

    <DefaultComponent />

    <GlobalFalseComponent />

    <GlobalTrueComponent />

    <PrefetchComponent />

    <PreloadComponent />

    <NuxtLink to="/test">
      Test page
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
console.log('Index page setup!')
</script>
