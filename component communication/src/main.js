import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import FriendComponent from './components/FriendComponent.vue'
import NewFriendComponent from './components/NewFriendComponent.vue'

const app = createApp(App)
app.component('friend-component', FriendComponent)
app.component('new-friend-component', NewFriendComponent)
app.mount('#app')
