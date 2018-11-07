import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      menuIsOpen: false
    }),
    mutations: {
      toggleMenu(state) {
        state.menuIsOpen = !state.menuIsOpen;
      }
    }
  });
};

export default createStore;
