// @vitest-environment nuxt
import { it, expect } from 'vitest'

import { mountSuspended } from '@nuxt/test-utils/runtime'
import { faMusic, svgPathData } from '@fortawesome/free-solid-svg-icons/faMusic'
import { FontAwesomeIcon } from '#components'

it('render the component', async () => {
  const component = await mountSuspended(FontAwesomeIcon, { props: { icon: faMusic } })

  // Check if the fontawesome icon is rendered with svg
  expect(component.html()).toContain('<svg')
  expect(component.html()).toContain('data-icon="music"')
  expect(component.html()).toContain(`d="${svgPathData}`)
})
