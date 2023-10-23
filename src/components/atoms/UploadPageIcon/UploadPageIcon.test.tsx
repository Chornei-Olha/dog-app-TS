import { composeStories } from '@storybook/react';
import * as stories from './UploadPageIcon.stories';
import { testSnapshot } from '../../../test/utils/snapshot.utils';

describe('UploadPageIcon', () => {
  const { Primary } = composeStories(stories);
  testSnapshot(<Primary />);
});
