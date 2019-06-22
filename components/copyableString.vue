<template>
  <div>
    <p @click="copyMessage(message)">{{ message }}</p>
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
