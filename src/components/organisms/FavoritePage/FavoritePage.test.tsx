import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import * as stories from './FavoritePage.stories';

describe('FavoritePage', () => {
  const { Page } = composeStories(stories);
  it('should match snapshot FavoritePage', () => {
    const { container } = render(
      <BrowserRouter>
        <Page />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
