<template>
  <no-ssr>
    <div class="dispaly-area">
      <headerMenu />
      <div class="pages">
        <topPage />
        <profile />
        <works />
        <links />
      </div>
    </div>
  </no-ssr>
</template>

<script>
import headerMenu from '../components/headerMenu'
import topPage from '../components/topPage'
import profile from '../components/profile'
import works from '../components/works'
import links from '../components/links'

export default {
  components: {
    headerMenu,
    topPage,
    profile,
    works,
    links,
  },
}
</script>
