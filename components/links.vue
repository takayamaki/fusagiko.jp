<template>
  <div id="links" class="page">
    <div class="container">
      <div class="content is-small">
        <h1 class="title">
          Links
        </h1>
        <div class="columns">
          <div class="column">
            <a href="https://twitter.com/fusagiko">
              <fa-icon :icon="['fab', 'twitter']" size="5x" />
              <div>
                <h2>Twitter</h2>
              </div>
            </a>
          </div>

          <div class="column">
            <a href="https://github.com/takayamaki">
              <fa-icon :icon="['fab', 'github']" size="5x" />
              <div>
                <h2>GitHub</h2>
              </div>
            </a>
          </div>
          <div class="column">
            <a href="https://imastodon.net/@fusagiko">
              <fa-icon :icon="['fab', 'mastodon']" size="5x" />
              <div>
                <h2>Mastodon</h2>
              </div>
            </a>
          </div>
          <div class="column">
            <a href="https://fusagiko.hatenablog.jp/">
              <fa-icon icon="edit" size="5x" />
              <div>
                <h2>Blog</h2>
              </div>
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
