import { composeStories } from '@storybook/react';
import * as stories from './AddFavoriteVoteIcon.stories';
import { testSnapshot } from '../../../test/utils/snapshot.utils';

describe('Icon', () => {
  const { Primary } = composeStories(stories);
  testSnapshot(<Primary />);
});
