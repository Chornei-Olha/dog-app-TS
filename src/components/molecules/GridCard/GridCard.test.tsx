import { render } from '@testing-library/react';
import { GridCard, GridCardProps } from '.';

const sampleProps: GridCardProps = {
  id: 'id_test',
  imgUrl: 'http://via.placeholder.com/640x360',
  isFavorite: false,
  breed: 'Goldendoodle',
  cardType: 'main'
};

describe('GridCard', () => {
  test('should match snapshot GridCard', () => {
    const { container } = render(
      <GridCard
        id={sampleProps.id}
        imgUrl={sampleProps.imgUrl}
        isFavorite={sampleProps.isFavorite}
        breed={sampleProps.breed}
        cardType={sampleProps.cardType}
      />
    );
    expect(container).toMatchSnapshot();
  });

  test('renders MainCard with default state', () => {
    render(
      <GridCard
        id={sampleProps.id}
        imgUrl={sampleProps.imgUrl}
        isFavorite={sampleProps.isFavorite}
        breed={sampleProps.breed}
        cardType={sampleProps.cardType}
      />
    );
  });
});
