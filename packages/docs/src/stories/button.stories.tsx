import { Button, ButtonProps } from '@jefyelin-ds-ig-learning/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Enviar',
  },
} as Meta

export const Primary: StoryObj<ButtonProps> = {}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  },
}
