const app = Vue.createApp({
    data() {
        return {
            showDetails: false,
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '01234 5678 991',
                    email: 'manuel@localhost.com',
                },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '09876 543 221',
                    email: 'julie@localhost.com',
                },
            ]
        }
    },
    methods: {
        toggleDetails() {
            this.showDetails = !this.showDetails;
        }
    },
})

app.component('friend-contact', {
    template: `
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails()">
            {{ showDetails ? 'Hide' : 'Show' }} Details
        </button>
        <ul v-if="showDetails">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
        </ul>
    </li>
    `,
    data() {
        return {
            showDetails: false,
            friend: {
                id: 'julie',
                name: 'Julie Jones',
                phone: '09876 543 221',
                email: 'julie@localhost.com',
            }
        }
    },
    methods: {
        toggleDetails() {
            this.showDetails = !this.showDetails;
        }
    },
});

app.mount('#app')