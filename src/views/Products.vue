<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { IProduct } from "../interfaces";

const store = useStore();

const data: IProduct[] = computed(() => store.state.products);
const showMore = ref<string>("");
const handleShowMore = (id: string): void => {
  showMore.value === id ? (showMore.value = "") : (showMore.value = id);
};

onMounted(() => store.dispatch("getProducts"));
</script>

<template>
  <div class="view">
    <h1>Products</h1>
    <div v-if="!data.length" class="alert alert-warning">
      <p class="mb-0">
        <strong>Oops!</strong> There are no products to show at the moment.
      </p>
    </div>
    <div class="container-fluid">
      <div class="row row-cols-1 row-cols-md-3 g-4 pb-4">
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
                class="card-text m-0"
                :class="{ 'text-muted': product.description.length > 50 }"
                v-if="
                  product.description.length <= 50 || showMore === product.id
                "
              >
                {{ product.description }}
              </p>
              <p class="card-text m-0" v-else>
                {{ product.description.substring(0, 50) }}...
              </p>
              <button
                @click="handleShowMore(product.id)"
                class="btn btn-link p-0"
              >
                {{ showMore === product.id ? "Show Less" : "Show More" }}
              </button>
              <p class="card-text">Price: ${{ product.price }}</p>
              <p class="card-text">Category: {{ product.category }}</p>
              <p class="card-text">Rating: {{ product.rating.rate }}</p>
              <p class="card-text">Count: {{ product.rating.count }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
