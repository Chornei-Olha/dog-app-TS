import { render } from '@testing-library/react';
import { GridCardActions, GridCardActionsProps } from '.';

const sampleProps: GridCardActionsProps = {
  id: 'id_test',
  isFavorite: false,
  breed: 'Goldendoodle',
  cardType: 'main'
};

describe('GridCardActions', () => {
  test('should match snapshot GridCard', () => {
    const { container } = render(
      <GridCardActions
        id={sampleProps.id}
        isFavorite={sampleProps.isFavorite}
        breed={sampleProps.breed}
        cardType={sampleProps.cardType}
      />
    );
    expect(container).toMatchSnapshot();
  });

  test('renders GridCardActions with default state', () => {
    render(
      <GridCardActions
        id={sampleProps.id}
        isFavorite={sampleProps.isFavorite}
        breed={sampleProps.breed}
        cardType={sampleProps.cardType}
      />
    );
  });
});
