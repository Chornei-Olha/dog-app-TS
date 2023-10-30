import type { Preview } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { DogAppThemeProvider } from '../src/theme';

const preview: Preview = {
  decorators: [
    Story => (
      <DogAppThemeProvider>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </DogAppThemeProvider>
    )
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
};

export default preview;
