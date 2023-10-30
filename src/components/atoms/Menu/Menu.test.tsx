import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';

import * as stories from './Menu.stories';

describe('Menu', () => {
  const { Nav } = composeStories(stories);
  it('should match snapshot Menu', () => {
    const { container } = render(<Nav />);
    expect(container).toMatchSnapshot();
  });
});
