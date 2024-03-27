const app = Vue.createApp({
    data() {
        return {
            courseGoalA: "First app",
            courseGoalB: "Second app",
            vueLink: "http://vuejs.org",
        };
    },
    methods: {
        outputGoal() {
            const number = Math.random()
            if (number > 0.5) {
                return this.courseGoalA + " " + number;
            } else {
                return this.courseGoalB + " " + number;
            }
        }
    },
})
app.mount('#user-goal');