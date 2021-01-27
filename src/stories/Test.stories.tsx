import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'

import Text from '../components/Test'

export default {
  title: 'Path/to/Text',
  component: Text,
} as Meta

const Template: Story = () => <Text />

export const LoggedIn = Template.bind({})
