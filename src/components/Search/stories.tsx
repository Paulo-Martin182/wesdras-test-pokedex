import { Story, Meta } from '@storybook/react'
import Search, { SearchProps } from '.'

export default {
  title: 'Search',
  component: Search
} as Meta

export const Default: Story<SearchProps> = (...args) => (
  <Search
    value={''}
    onChange={function (): void {
      throw new Error('Function not implemented.')
    }}
    {...args}
  />
)
