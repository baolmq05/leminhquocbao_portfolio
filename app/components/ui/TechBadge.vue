<template>
  <span class="skill-badge">{{ tag }}</span>
</template>

<script setup lang="ts">
defineProps<{
  tag: string
}>()
</script>
