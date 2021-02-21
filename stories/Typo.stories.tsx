import { Meta, Story } from '@storybook/react'
import React from 'react'

import Typo, { TypoProps } from '../src/components/atom/Typo'

export default {
  title: 'Components/Typography',
  component: Typo,
} as Meta

const Template: Story<TypoProps> = (args) => <Typo {...args}>텍스트</Typo>
const Template2: Story<TypoProps> = (args) => {
  return (
    <Typo style={{ color: 'red' }} {...args}>
      텍스트
    </Typo>
  )
}

export const Default = Template.bind({})
export const custom = Template2.bind({})
