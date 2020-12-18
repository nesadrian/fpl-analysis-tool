<template>
  <section className="sidebar-container">
    <section class="sidebar__title-container">
      <h1 class="sidebar__title">FPL Analysis Tool</h1>
    </section>
    <nav class="sidebar__nav-container">
      <router-link class="sidebar__nav__btn" to="/">Dasboard</router-link>
      <router-link class="sidebar__nav__btn" to="/leagues">Leagues</router-link>
    </nav>
    <section class="sidebar__footer-container sidebar__title-container">
      <h1 class="sidebar__footer">Footer</h1>
    </section>
  </section>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style>

</style>