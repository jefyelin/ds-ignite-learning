import { Text, TextProps } from '@jefyelin-ds-ig-learning/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias accusantium commodi architecto, velit maiores sequi excepturi facilis nesciunt facere optio? Ipsum nobis, officiis hic obcaecati culpa sed dolorem quasi fuga.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
