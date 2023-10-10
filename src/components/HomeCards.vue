<script setup lang="ts">
import { IHomeItems } from "../utils/homeItems";

const props = defineProps({
  items: Array as () => IHomeItems[],
});
</script>

<template>
  <div v-for="(item, index) in items" :key="item">
    <h3>{{ item.title }}</h3>
    <ul>
      <li v-for="(check, checkIndex) in item.checks" :key="checkIndex">
        {{ check }}
      </li>
    </ul>
  </div>
</template>
