import { render } from '@testing-library/react';
import { GridCardActions, GridCardActionsProps } from '.';

const sampleProps: GridCardActionsProps = {
  id: 'id_test',
  isFavorite: false,
  cardType: 'favorite'
};

describe('GridCardActions', () => {
  test('should match snapshot GridCardActions', () => {
    const { container } = render(
      <GridCardActions
        id={sampleProps.id}
        isFavorite={sampleProps.isFavorite}
        cardType={sampleProps.cardType}
      />
    );
    expect(container).toMatchSnapshot();
  });
});

//   test('renders GridCardActions with default state', () => {
//     render(
//       <GridCardActions
//         id={sampleProps.id}
//         isFavorite={sampleProps.isFavorite}
//         cardType={sampleProps.cardType}
//       />
//     );
//   });
// });

// import { composeStories } from '@storybook/react';
// import * as stories from './GridCardActions.stories';
// import { testSnapshot } from '../../../test/utils/snapshot.utils';

// describe('molecules/GridCardActions', () => {
//   const { Main } = composeStories(stories);
//   testSnapshot(<Main />);
// });
