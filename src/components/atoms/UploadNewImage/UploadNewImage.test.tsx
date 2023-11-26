import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';

import * as stories from './UploadNewImage.stories';

describe('UploadImage', () => {
  const { UploadImage } = composeStories(stories);
  it('should match snapshot UploadImage', () => {
    const { container } = render(<UploadImage />);
    expect(container).toMatchSnapshot();
  });
});
