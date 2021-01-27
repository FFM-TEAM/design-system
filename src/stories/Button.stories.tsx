import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'

import Button from '../components/StyledButton'

export default {
  title: 'Components/StyledButton',
  component: Button,
} as Meta

const Template: Story = (args) => (
  <Button variant="outlined" size="lg" {...args}>
    asdsd
  </Button>
)

export const LoggedIn = Template.bind({})
