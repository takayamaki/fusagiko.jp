<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a
        role="button"
        class="navbar-burger burger"
        @click="toggleMenuDisplay()"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbar" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" href="#profile">
          Profile
        </a>
        <a class="navbar-item" href="#works">
          Works
        </a>
        <a class="navbar-item" href="#links">
          Links
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
const toggleMenuDisplay = () => {
  const menu = document.getElementById('navbar')
  menu.classList.toggle('is-active')
}

export default {
  methods: {
    toggleMenuDisplay: toggleMenuDisplay,
  },
}
</script>
