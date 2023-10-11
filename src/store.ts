import { createStore, Store } from "vuex";
import { IStore } from "./interfaces";

const defaultError = "There has been an error.";

const store: Store<IStore> = createStore({
  state: {
    apiUrl: "https://fakestoreapi.com/products",
    error: "",
    products: [],
  },
  mutations: {
    setProducts: (state, payload) => (state.products = payload),
    setError: (state, payload) => (state.error = payload),
  },
  actions: {
    async getProducts({ commit, state }) {
      try {
        const response = await fetch(state.apiUrl);
        const products = await response.json();
        commit("setProducts", products);
      } catch (error) {
        console.error(error);
        commit("setError", error?.message || defaultError);
      }
    },
  },
});

export default store;
