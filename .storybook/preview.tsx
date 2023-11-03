import type { Preview } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApiProvider } from '@reduxjs/toolkit/query/react';

import { DogAppThemeProvider } from '../src/theme';
import { api } from '../src/services/api';

const preview: Preview = {
  decorators: [
    Story => (
      <DogAppThemeProvider>
        <ApiProvider api={api}>
          <BrowserRouter>
            <Story />
          </BrowserRouter>
        </ApiProvider>
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
