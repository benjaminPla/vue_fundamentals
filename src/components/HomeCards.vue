<script setup lang="ts">
import { IHomeItems } from "../utils/homeItems";

const props = defineProps({
  items: Array as () => IHomeItems[],
});
</script>

<template>
  <div class="container-fluid">
    <div class="row row-cols-1 row-cols-md-3 g-4 pb-4">
      <div class="col" v-for="(item, index) in items" :key="index">
        <div class="card w-100 h-100">
          <div class="card-body">
            <h3 class="card-title">{{ item.title }}</h3>
            <ul class="list-group list-group-flush">
              <li
                class="list-group-item"
                v-for="(check, checkIndex) in item.checks"
                :key="checkIndex"
              >
                <input type="checkbox" checked disabled />
                {{ check }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
