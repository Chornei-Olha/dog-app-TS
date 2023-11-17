import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import * as stories from './FavoriteList.stories';

describe('FavoriteList', () => {
  const { List } = composeStories(stories);
  it('should match snapshot FavoriteList', () => {
    const { container } = render(
      <BrowserRouter>
        <List />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
