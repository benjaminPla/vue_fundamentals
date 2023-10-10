<script setup lang="ts">
import HomeCards from "../components/HomeCards.vue";
import { homeItems } from "../utils/homeItems";
</script>

<template>
  <div class="view">
    <h1>Home</h1>
    <div class="alert alert-warning">
      <p>🚧 Under Construction 🚧</p>
      <p>
        This project is currently in development, and I'm actively working on
        it.
      </p>
    </div>
    <h2>Overview</h2>
    <p>
      Overview This project is a demonstration of a highly scalable web
      application built using Vue, Vite, TypeScript, and Jest. It covers all the
      front-end fundamentals.
    </p>
    <HomeCards :items="homeItems" />
  </div>
</template>
