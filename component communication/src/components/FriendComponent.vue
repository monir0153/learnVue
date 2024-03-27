<script>
export default {
    props: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        isFavourite: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    emits: {
        'toggle-favourite': function(id){
            if(id)
            {
                return true
            }
            else
            {
                console.warn("ID is missing !")
                return false
            }
        }
    },
    data() {
        return {
            showDetails: false,
        }
    },
    methods: {
        toggleDetails() {
            this.showDetails = !this.showDetails
        },
        toggleFavourite() {
            this.$emit('toggle-favourite', this.id)
        },
       
    }
}
</script>


<template>
    <div class="text-center mt-5 bg-slate-800 w-fit text-white rounded-lg mx-auto p-5">
        <h4>My Friend</h4>
        <ul>
            <li>
                <h2 class="text-2xl font-semibold">{{ name }} {{ isFavourite ? 'Favourite' : '' }}</h2>
                <button @click="toggleFavourite()" class="px-5 py-2 bg-green-500 rounded-md text-white me-5">toggle
                    Favourite</button>
                <button @click="toggleDetails()" class="px-5 py-2 bg-green-500 rounded-md text-white">
                    {{ showDetails ? 'Hide' : 'Show' }} Details
                </button>
                <ul v-if="showDetails">
                    <li class="font-semibold">Phone: {{ phoneNumber }}</li>
                    <li class="font-semibold">Email: {{ email }}</li>
                </ul>
                <button @click="$emit('delete', id)" class="px-5 py-2 ms-3 bg-green-500 rounded-md text-white">
                    Delete
                </button>
            </li>
        </ul>
    </div>
</template>
