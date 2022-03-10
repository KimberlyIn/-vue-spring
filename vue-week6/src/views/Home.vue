<template>
  <div>
    <div class="home">
      <Navbar />
      <div class="container">
        <div id="nav">
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'Home',
  data() {
    return {
    };
  },
  components: {
    Navbar,
  },
};
</script>
