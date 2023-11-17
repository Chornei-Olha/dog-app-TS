import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import * as stories from './UploadList.stories';

describe('UploadList', () => {
  const { List } = composeStories(stories);
  it('should match snapshot UploadList', () => {
    const { container } = render(
      <BrowserRouter>
        <List />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
