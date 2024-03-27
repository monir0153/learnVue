const app = Vue.createApp({
  data() {
    return {
      enterValue: "",
      goals: []
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enterValue);
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    }
  },
});

app.mount('#user-goals');
