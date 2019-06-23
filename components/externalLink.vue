<template>
  <p>
    <a :href="dest">
      {{ linkStr }}
      <fa-icon icon="external-link-alt" />
    </a>
  </p>
</template>
<script>
export default {
  props: {
    dest: {
      type: String,
      required: true,
    },
    linkStr: {
      type: String,
      required: true,
    },
  },
}
</script>
