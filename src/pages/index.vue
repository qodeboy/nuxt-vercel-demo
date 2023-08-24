<script setup lang="ts">
import { useFetch } from '@vueuse/core';

const { data } = useFetch('api/info');
</script>

<template>
  <pre>{{ data }}</pre>
</template>
