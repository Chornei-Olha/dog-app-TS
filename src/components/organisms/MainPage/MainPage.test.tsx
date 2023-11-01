import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import * as stories from './MainPage.stories';

describe('MainPage', () => {
  const { Page } = composeStories(stories);
  it('should match snapshot MainPage', () => {
    const { container } = render(
      <BrowserRouter>
        <Page />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
