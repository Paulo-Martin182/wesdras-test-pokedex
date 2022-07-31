import { Story, Meta } from '@storybook/react'
import Card, { CardProps } from '.'

export default {
  title: 'Card',
  component: Card,
  args: {
    tag: '#138',
    image: 'img/pokeex.svg',
    title: 'Pokemon Ex'
  }
} as Meta

export const Default: Story<CardProps> = (args) => <Card {...args} />
