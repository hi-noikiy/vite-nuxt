import Vue from 'vue'

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faLinkin from '@fortawesome/fontawesome-free-brands/faLinkedin'
import faDiscord from '@fortawesome/fontawesome-free-brands/faDiscord'
import faPlusCircle from '@fortawesome/fontawesome-free-solid/faPlusCircle'

export default ({ app, store }) => {
  fontawesome.library.add(faGithub, faLinkin, faTwitter, faDiscord, faPlusCircle)

  Vue.component('fa-icon', FontAwesomeIcon)
}
