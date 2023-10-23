import { composeStories } from '@storybook/react';
import * as stories from './FavoritePageIcon.stories';
import { testSnapshot } from '../../../test/utils/snapshot.utils';

describe('FavoritePageIcon', () => {
  const { Primary } = composeStories(stories);
  testSnapshot(<Primary />);
});
