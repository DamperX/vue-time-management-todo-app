<template>
  <nav class="purple darken-3">
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo">Tasks</router-link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <router-link
            to="/"
            custom
            v-slot="{ navigate, isActive }"
        >
          <li @click="navigate" @keypress.enter="navigate" :class="{ active: isActive }"><a href="#">Create</a></li>
        </router-link>
        <router-link
            to="/list"
            custom
            v-slot="{ navigate, isActive }"
        >
          <li @click="navigate" @keypress.enter="navigate" :class="{ active: isActive }"><a href="#">List</a></li>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
  nav {
    padding: 0 2rem;
  }
</style>