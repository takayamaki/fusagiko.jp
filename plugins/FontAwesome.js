import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faClipboard,
  faExternalLinkAlt,
  faEdit,
} from '@fortawesome/free-solid-svg-icons'
import {
  faTwitter,
  faGithub,
  faMastodon,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faClipboard, faExternalLinkAlt, faEdit)
library.add(faTwitter, faGithub, faMastodon)

Vue.component('fa-icon', FontAwesomeIcon)

Vue.config.productionTip = false
