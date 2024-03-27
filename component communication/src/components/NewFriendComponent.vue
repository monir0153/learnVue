<template>
    <div>
        <form action="" @submit.prevent="submitData()">
            <div class="relative mb-4">
                <label for="name" class="leading-7 text-sm text-white">Name</label>
                <input type="name" id="name" name="name"
                    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-700 focus:ring-2 focus:ring-indigo-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" v-model="enteredName">
            </div>
            <div class="relative mb-4">
                <label for="email" class="leading-7 text-sm text-white">Email</label>
                <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-700 focus:ring-2 focus:ring-indigo-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" v-bind="enteredEmail">
            </div>
            <div class="relative mb-4">
                <label for="phone" class="leading-7 text-sm text-white">Phone</label>
                <input type="phone" id="phone" name="phone" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-700 focus:ring-2 focus:ring-indigo-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" v-model="enteredPhone">
            </div>
            <button class="inline-flex text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded text-sm">
                Add Contact
            </button>
        </form>
    </div>
</template>

<script>
export default {
    emits: ['add-contact'],
    data() {
        return {
            enteredName: '',
            enteredEmail: '',
            enteredPhone: ''
        }
    },
    methods: {
        submitData() {
            this.$emit(
                'add-contact', 
                this.enteredName,
                this.enteredEmail,
                this.enteredPhone
            )
        }
    }
};
</script>