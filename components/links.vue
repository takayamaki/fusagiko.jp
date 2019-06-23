<template>
  <div id="links" class="page">
    <div class="container">
      <div class="content is-small">
        <h2 class="title">
          Links
        </h2>
        <div class="columns">
          <div class="column">
            <a href="https://twitter.com/fusagiko">
              <fa-icon :icon="['fab', 'twitter']" size="5x" />
              <h3>Twitter</h3>
            </a>
          </div>

          <div class="column">
            <a href="https://github.com/takayamaki">
              <fa-icon :icon="['fab', 'github']" size="5x" />
              <h3>GitHub</h3>
            </a>
          </div>
          <div class="column">
            <a href="https://imastodon.net/@fusagiko">
              <fa-icon :icon="['fab', 'mastodon']" size="5x" />
              <h3>Mastodon</h3>
            </a>
          </div>
          <div class="column">
            <a href="https://fusagiko.hatenablog.jp/">
              <fa-icon icon="edit" size="5x" />
              <h3>Blog</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
