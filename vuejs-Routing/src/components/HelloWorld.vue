<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings my-10">
    <h1 class="text-green-600">Hello</h1>
    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam accusamus aut aperiam eos veniam voluptates a itaque est modi eveniet. Sit dicta, neque rerum laborum eligendi voluptatibus molestias quis mollitia!
    Doloribus voluptates amet saepe quasi officiis nostrum ipsam illum temporibus porro voluptate praesentium adipisci maxime minima rerum, accusantium nisi eligendi voluptas. Modi quia blanditiis quisquam cumque error nobis amet odio?
    Sequi perspiciatis quae, odit exercitationem beatae fugit sint optio impedit pariatur adipisci dicta doloremque magnam, voluptas ea quisquam? Distinctio sapiente nesciunt quas, soluta maiores porro mollitia dolores natus voluptates placeat?
    Voluptate rem nulla animi laudantium magni doloremque unde, iure eius velit dolor minus maiores officiis impedit placeat qui harum similique maxime nemo obcaecati, repellendus natus ipsam at! Ipsum, nostrum facere.
    Velit sint maxime, perspiciatis labore et repellendus obcaecati quo praesentium voluptatum eveniet illum vitae culpa doloremque voluptatibus laboriosam laudantium. Deserunt nesciunt molestiae error voluptas accusamus voluptates nisi esse veniam consectetur.</h4>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
