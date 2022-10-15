import { Box, BoxProps, Text } from '@jefyelin-ds-ig-learning/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Box container</Text>,
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
