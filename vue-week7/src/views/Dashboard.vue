<template>
  <div>
    <Navbar/>
    <router-view v-if="status"/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  data() {
    return {
      status: false,
    };
  },
  components: {
    Navbar
  },
  mounted() {
    
  },
  methods: {
    
  },
}
</script>