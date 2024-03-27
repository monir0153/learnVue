Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            confirmName: '',
        };
    },
    watch: {
        counter(value) {
            if (value > 50) {
                const that = this;
                setTimeout(function () {
                    that.counter = 0;
                }, 2000)
            }
        }
    },
    methods: {
        confirmInput() {
            this.confirmName = this.name
        },
        submitForm(event) {
            event.preventDefault();

            alert("alert");
        },
        setName(event, name) {
            this.name = name + event.target.value;
        },
        increment(num) {
            this.counter = this.counter + num;
        },
        decrement(num) {
            this.counter = this.counter - num;
        },
        resetInput() {
            this.name = '';
        }

    }
}).mount("#app");
