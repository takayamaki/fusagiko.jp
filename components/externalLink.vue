<template>
  <p>
    <a :href="dest">
      {{ linkStr }}
      <font-awesome-icon icon="external-link-alt" />
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
