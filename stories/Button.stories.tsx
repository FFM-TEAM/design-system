import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'

import Button, { buttonProps } from '../src/components/atom/Button'

export default {
  title: 'Components/Button',
  component: Button,
} as Meta

const Template: Story<buttonProps> = (args) => <Button {...args}>Button</Button>

export const Default = Template.bind({})
