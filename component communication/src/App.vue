<script>
import NewFriendComponent from './components/NewFriendComponent.vue';
export default {
  components: { NewFriendComponent },
  data() {
    return {
      friends: [{
        id: 'manuel',
        name: 'Manuel Lorenz',
        phone: '01234 5678 991',
        email: 'manuel@localhost.com',
        isFavourite: true,
      },
      {
        id: 'julie',
        name: 'julie update',
        phone: '01234 5678 991',
        email: 'julie@localhost.com',
        isFavourite: false,
      },]
    }
  },
  methods: {
    toggleFavouriteStatus(friendId) {
      const identifiedFriend = this.friends.find(friend => friend.id === friendId);
      identifiedFriend.isFavourite = !identifiedFriend.isFavourite;
      console.log(this.friends)
    },
    addContact(name, email, phone){
      const newFriendContact = {
        id: new Date().toISOString(),
        name: name,
        email: email,
        phone: phone,
        isFavourite: false,
      };
      this.friends.push(newFriendContact);
      console.log(this.friends)
    },
    deleteContact(friendId){
      this.friends = this.friends.filter((friend) => friend.id !== friendId)
    },
  }
}
</script>

<template>
  <div class="">
    <div class="w-3/12 mx-auto mt-16">
      <new-friend-component @add-contact="addContact"/>
    </div>
    <friend-component v-for="friend in friends" :key="friend.id" :id="friend.id" :name="friend.name"
      :phone-number="friend.phone" :email="friend.email" :is-favourite="friend.isFavourite"
      @toggle-favourite="toggleFavouriteStatus(friend.id)" @delete="deleteContact"/> 


  </div>
</template>
<!-- 
<script> 
export default {
  data() {
    return {
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
      ],
      showDetails: fal
  components: { FriendComponent },se
    }
  },
  methods: {
    toggleDetails() {
      this.showDetails =!this.showDetails
    }
  }
}
</script>-->

