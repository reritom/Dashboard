<template>
  <div id="app" :class="{'light-theme': lightMode, 'dark-theme': !lightMode}">
    <div :class="{'navbar': true, 'collapsed': !showNav}">
      <div class="header">
        <h1>Vision</h1>
        <i @click="showNav=!showNav" href="#" class="fas fa-bars fa-2x toggle"></i>
      </div>
      <ul role="navigation" class="links">
        <li class="active"><router-link :to="{'name': 'home'}">Cycle</router-link></li>
        <li><router-link to="functions">Functions</router-link></li>
        <li><a href="#">Data</a></li>
        <li class="break"><hr></li>
        <li><a href="#">Docs</a></li>
        <li><a href="#">Metrics</a></li>
        <li class="break"><hr></li>
        <li><a href="#">Log in</a></li>
        <li><a @click="lightMode=!lightMode" href="#">{{lightMode ? "Dark" : "Light"}}</a></li>
      </ul>
    </div>
    <div class="content">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function() {
    return {
      lightMode: true,
      showNav: false
    }
  }
}
</script>
