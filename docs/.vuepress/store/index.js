import Vuex from "vuex";
import Vue from "vue";
import events from "./modules/events"
Vue.use(Vuex);

const getters = {
  upcoming_workshops(state) {
    return state.events.workshops.filter(event => event.date_start > Date.now())
  },

  previous_workshops(state) {
    return state.events.workshops.filter(event => event.date_start < Date.now())
  }
};

export default new Vuex.Store({
  getters,
  modules: {
    events
  }
});
