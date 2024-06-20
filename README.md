# FontAwesome Nuxt module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Minimal FontAwesome Nuxt module.

- [✨ Release Notes](/CHANGELOG.md)
- [🏀 Online playground](https://stackblitz.com/github/gbicou/nuxt-fontawesome?file=playground%2Fapp.vue)

## Features

- Adds components from vue-fontawesome (vue 3.x)
- Let nuxt handle css from fontawesome svg

## Quick Setup

Install the module to your Nuxt application with one command:

```bash
npx nuxi module add @bicou/nuxt-fontawesome
```

Install icon packages:

```bash
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/free-regular-svg-icons
npm install --save @fortawesome/free-brands-svg-icons
```

You can now use the `font-awesome-icon` component in your nuxt pages:

```vue
<template>
  <font-awesome-icon :icon="faMusic" />
</template>

<script setup lang="ts">
import { faMusic } from '@fortawesome/free-solid-svg-icons/faMusic'
</script>

```

## Contribution

<details>
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  npm install
  
  # Generate type stubs
  npm run dev:prepare
  
  # Develop with the playground
  npm run dev
  
  # Build the playground
  npm run dev:build
  
  # Run ESLint
  npm run lint
  
  # Run Vitest
  npm run test
  npm run test:watch
  
  # Release new version
  npm run release
  ```

</details>


<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@bicou/nuxt-fontawesome/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/@bicou/nuxt-fontawesome

[npm-downloads-src]: https://img.shields.io/npm/dm/@bicou/nuxt-fontawesome.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npmjs.com/package/@bicou/nuxt-fontawesome

[license-src]: https://img.shields.io/npm/l/@bicou/nuxt-fontawesome.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/@bicou/nuxt-fontawesome

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
