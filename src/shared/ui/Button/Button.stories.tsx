import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from './Button';

const meta = {
  title: 'shared/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ContainedLight: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.CONTAINED,
  },
  decorators: [
    ThemeDecorator(Theme.LIGHT),
  ],
};

export const ClearLight: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.CLEAR,
  },
  decorators: [
    ThemeDecorator(Theme.LIGHT),
  ],
};

export const OutlinedLight: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINED,
  },
  decorators: [
    ThemeDecorator(Theme.LIGHT),
  ],
};

export const OutlinedDark: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINED,
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};

export const ClearDark: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.CLEAR,
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};

export const ContainedDark: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.CONTAINED,
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};
