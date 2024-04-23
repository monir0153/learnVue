<template lang="">
    <div v-if="job">
        <p class="text-2xl mt-4 text-center font-bold underline-offset-auto"> job details</p>
        <p class="text-center">  {{ id }}</p>
        <p class="text-center">  {{ job.title }}</p>
        <p class="text-center"> {{ job.price }}</p>
        <p class="text-center">  {{ job.stock }}</p>
        <p class="text-center">  {{ job.description }}</p>
    </div>
</template>
<script>
export default {
    props: ['id'],
    data() {
        return {
            job: null,
        }
    },
    mounted(){
        fetch('http://localhost:3000/data/' + this.id)
        .then(res => res.json())
        .then(data => this.job = data)
        .catch(err => console.log(err))
    }
}
</script>
<style lang="">
    
</style>