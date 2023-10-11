<script setup lang="ts">
import { ref, onMounted } from "vue";
import { IProduct } from "../interfaces";

const data: ref<Array<IProduct>> = ref([]);
const showMore = ref<string>("");

const url: string = "https://fakestoreapi.com/products";
const fetchData = async (url: string): Promise<void> => {
  try {
    const response = await fetch(url);
    const result = await response.json();
    data.value = result;
  } catch (error) {
    console.error(error);
    data.value = [];
  }
};

onMounted(() => fetchData(url));
</script>

<template>
  <div>
    <h1>Products</h1>
    <div v-if="!data.length" class="alert alert-warning">
      <p class="mb-0">
        <strong>Oops!</strong> There are no products to show at the moment.
      </p>
    </div>
    <div v-else class="row" style="gap: 1rem">
      <div class="col-md-4" v-for="product in data" :key="product.id">
        <div class="card" style="width: 100%; height: 100%">
          <img
            :src="product.image"
            class="card-img-top mx-auto"
            alt="Product Image"
            style="width: 50%; display: block"
          />
          <div class="card-body">
            <h5 class="card-title">{{ product.title }}</h5>
            <p
              class="card-text"
              v-if="
                product.description.length <= 50 ||
                showMore === product.id.toString()
              "
            >
              {{ product.description }}
            </p>
            <p
              class="card-text"
              v-if="
                product.description.length >= 50 ||
                showMore !== product.id.toString()
              "
            >
              {{ product.description.substring(0, 50) }}
              <span @click="showMore = product.id">...</span>
            </p>
            <p class="card-text">Price: ${{ product.price }}</p>
            <p class="card-text">Category: {{ product.category }}</p>
            <p class="card-text">Rating: {{ product.rating.rate }}</p>
            <p class="card-text">Count: {{ product.rating.count }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
