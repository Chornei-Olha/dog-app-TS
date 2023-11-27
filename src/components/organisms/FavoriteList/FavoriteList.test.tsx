import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';

import * as stories from './FavoriteList.stories';

describe('FavoriteList', () => {
  const { List } = composeStories(stories);
  it('should match snapshot FavoriteList', () => {
    const { container } = render(<List />);
    expect(container).toMatchSnapshot();
  });
});
