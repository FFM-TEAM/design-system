import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'

import Icon from '../src/components/atom/Icon'
import { TypoProps } from '../src/components/Typo/Typo'

export default {
  title: 'Components/Icon',
  component: Icon,
} as Meta

const Template: Story<TypoProps> = () => <Icon name="star" />

export const LoggedIn = Template.bind({})
