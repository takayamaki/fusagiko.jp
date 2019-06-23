<template>
  <div>
    <p class="copyableString" @click="copyMessage($event, message)">
      {{ message }}
      <fa-icon icon="clipboard" class="is-visible" />
      <fa-icon icon="check" />
    </p>
  </div>
</template>
<script>
'use strict'
import copy from 'clipboard-copy'

const copyMessage = (event, message) => {
  copy(message)

  const icons = event.target.querySelectorAll('svg')
  icons.forEach(element => {
    element.classList.toggle('is-visible')
  })

  setTimeout(() => {
    icons.forEach(element => {
      element.classList.toggle('is-visible')
    })
  }, 1000)
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
