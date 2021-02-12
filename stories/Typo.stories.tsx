import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'

import Typo, { TypoProps } from '../src/components/Typo/Typo'

export default {
  title: 'Components/Typography',
  component: Typo,
} as Meta

const Template: Story<TypoProps> = (args) => <Typo {...args}>text</Typo>

export const BasicButton = Template.bind({})
