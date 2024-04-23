<template>
    <div class="mt-5">
        <h1 class="text-4xl">Jobs</h1>
        <div v-for="job in jobs" :key="job.id" class="my-5 mx-auto bg-slate-700 rounded-lg p-3 hover:bg-slate-600" >
            <router-link :to="{ name: 'JobDetails', params: {id: job.id}}">
                <h2 class="text-3xl font-bold">{{ job.title }}</h2>
            <p class="text-xl">{{ job.price }}</p>
            <p class="text-xs">{{ job.description }}</p>
           
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            jobs: []
        }
    },
    mounted(){
        fetch('http://localhost:3000/data')
        .then(res => res.json())
        .then(data => this.jobs = data)
        .catch(err => console.log(err))
    }
}
</script>

<style>

</style>