<script setup>
import { defineComponent } from "vue";
import { NConfigProvider } from "naive-ui";
// theme
// locale & dateLocale
import { ruRU, dateRuRU } from "naive-ui";
</script>

<template>
  <n-config-provider :locale="ruRU" :date-locale="dateRuRU">
    <RouterView />
  </n-config-provider>
</template>

<style></style>
