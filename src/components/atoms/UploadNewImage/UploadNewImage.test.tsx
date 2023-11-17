import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import * as stories from './UploadNewImage.stories';

describe('UploadImage', () => {
  const { UploadImage } = composeStories(stories);
  it('should match snapshot UploadImage', () => {
    const { container } = render(
      <BrowserRouter>
        <UploadImage />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
