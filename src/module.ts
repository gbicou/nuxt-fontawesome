import { defineNuxtModule, addPlugin, createResolver, addComponent } from '@nuxt/kit'
import { name as packageName } from '../package.json'

export default defineNuxtModule({
  meta: {
    name: packageName,
    configKey: 'fontawesome',
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))

    // Add components from vue-fontawesome
    for (const cName of ['FontAwesomeIcon', 'FontAwesomeLayers', 'FontAwesomeLayersText'])
      addComponent({
        name: cName,
        export: cName,
        filePath: '@fortawesome/vue-fontawesome',
      })

    // Add css from fontawesome svg
    _nuxt.options.css.push('@fortawesome/fontawesome-svg-core/styles.css')
  },
  hooks: {
    'prepare:types': (ctx) => {
      ctx.references.push({ types: '@fortawesome/vue-fontawesome' })
    },
  },
})
