import { type Preview } from '@storybook/react';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { ThemeDecorator, RouteDecorator } from '../../src/shared/config/storybook';

const preview: Preview = {
  decorators: [
    RouteDecorator,
    ThemeDecorator(Theme.LIGHT),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globals: {
    locale: {
      name: 'Locale',
      description: 'Internationalization locale',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'en', title: 'English' },
          { value: 'pl', title: 'Polish' },
        ],
        showName: true,
      },
    },

  },
};

export default preview;
