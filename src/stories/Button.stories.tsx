import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'

import Button from '../components/Button'

export default {
  title: 'Components/Button',
  component: Button,
} as Meta

const Template: Story = (args) => <Button {...args}>버튼</Button>

export const BasicButton = Template.bind({})
