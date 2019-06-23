<template>
  <div class="dispaly-area">
    <headerMenu />
    <div class="pages">
      <page1 />
      <page2 />
      <page3 />
    </div>
  </div>
</template>

<script>
import headerMenu from '../components/headerMenu'
import page1 from '../components/page1'
import page2 from '../components/page2'
import page3 from '../components/page3'

export default {
  components: {
    headerMenu,
    page1,
    page2,
    page3,
  },
}
</script>
