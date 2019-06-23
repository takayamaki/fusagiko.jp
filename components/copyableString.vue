<template>
  <div>
    <p @click="copyMessage(message)">
      {{ message }}
      <fa-icon icon="clipboard" />
    </p>
  </div>
</template>
<script>
'use strict'
import copy from 'clipboard-copy'

const copyMessage = message => {
  copy(message)
}

export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  methods: {
    copyMessage: copyMessage,
  },
}
</script>
