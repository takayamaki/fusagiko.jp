<template>
  <div class="dispaly-area">
    <headerMenu />
    <div class="pages">
      <profile />
      <works />
      <links />
    </div>
  </div>
</template>

<script>
import headerMenu from '../components/headerMenu'
import profile from '../components/profile'
import works from '../components/works'
import links from '../components/links'

export default {
  components: {
    headerMenu,
    profile,
    works,
    links,
  },
}
</script>
