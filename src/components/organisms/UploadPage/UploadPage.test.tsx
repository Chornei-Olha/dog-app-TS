import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';

import * as stories from './UploadPage.stories';

describe('UploadPage', () => {
  const { Page } = composeStories(stories);
  it('should match snapshot UploadPage', () => {
    const { container } = render(<Page />);
    expect(container).toMatchSnapshot();
  });
});
