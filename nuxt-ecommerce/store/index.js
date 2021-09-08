import { productsCard } from "~/assets/productCard.js";
//state
export const state = () => ({
  myRentals: [],
  products: [],
});
//getters
export const getters = {
  // Cette méthode retourne une autre fonction qui elle retourne ce qu'on veut
  getProductById: (state) => (id) => {
    return state.products.find((product) => product.id == id);
  },
};
// mutation
export const mutations = {
  addItem(state, id) {
    let item = state.products.find((product) => product.id == id);
    state.myRentals.push(item);
  },
  GET_PRODUCT(state, products) {
    state.products = products;
  },
};

//actions
export const actions = {
  getProducts({ commit }) {
    commit("GET_PRODUCT", productsCard);
    console.log("action product :", productsCard);
  },
};
