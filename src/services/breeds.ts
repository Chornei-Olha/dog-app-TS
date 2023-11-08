import { api } from './api';

export const breedsApi = api.injectEndpoints({
  endpoints: build => ({
    getBreeds: build.query<Breed[], void>({
      query: () => 'breeds'
    }),
    getBreedById: build.query<Breed, string>({
      query: breedId => `breeds/${breedId}`
    })
  })
});

export const { useGetBreedsQuery, useGetBreedByIdQuery } = breedsApi;

export interface Breed {
  id: string;
  name: string;
  temperament: string;
  origin: string;
}
