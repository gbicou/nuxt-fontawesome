import { config, noAuto } from '@fortawesome/fontawesome-svg-core'
import { defineNuxtPlugin } from '#app'

noAuto()
config.autoAddCss = false

export default defineNuxtPlugin(() => {})
