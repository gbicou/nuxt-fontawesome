import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils/e2e'

describe('ssr', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/basic', import.meta.url)),
  })

  it('renders the index page', async () => {
    // Get response to a server-rendered page with `$fetch`.
    const html = await $fetch('/')

    // Check if the fontawesome icon is rendered with svg
    expect(html).toContain('<svg')
    expect(html).toContain('data-icon="music"')
    expect(html).toContain('d="M499.1')
  })
})
