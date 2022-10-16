import { MultiStep, MultiStepProps } from '@jefyelin-ds-ig-learning/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Surfaces/MultiStep',
  component: MultiStep,
  args: {
    size: 4,
    currentStep: 1,
  },
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
}
