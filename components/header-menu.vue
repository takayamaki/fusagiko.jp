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
        <a class="navbar-item">
          item
        </a>

        <a class="navbar-item">
          item
        </a>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            item
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item">
              item
            </a>
            <a class="navbar-item">
              item
            </a>
            <a class="navbar-item">
              item
            </a>
            <hr class="navbar-divider" />
            <a class="navbar-item">
              item
            </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              item
            </a>
            <a class="button is-light">
              item
            </a>
          </div>
        </div>
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
