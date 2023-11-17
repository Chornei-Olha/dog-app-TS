import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import * as stories from './Grid.stories';

describe('MainGrid', () => {
  const { List } = composeStories(stories);
  it('should match snapshot MainGrid', () => {
    const { container } = render(
      <BrowserRouter>
        <List />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
