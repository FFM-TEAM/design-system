import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'

import Icon from '../src/components/Icon'

export default {
  title: 'Components/Icon',
  component: Icon,
} as Meta

const Template: Story = () => <Icon name="star" />

export const LoggedIn = Template.bind({})
