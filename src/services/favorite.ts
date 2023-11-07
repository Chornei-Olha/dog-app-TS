import { api } from './api';

export interface Favorite {
  image_id: string;
  sub_id?: string;
}

type FavoritesResponse = {
  created_at: string;
  id: number;
  image: {
    id: string;
    url: string;
  };
  image_id: string;
  sub_id: string | null;
  user_id: string;
}[];

export const favoritesApi = api.injectEndpoints({
  endpoints: build => ({
    addFavorite: build.mutation<unknown, Favorite>({
      query: body => ({
        url: `favourites`,
        method: 'POST',
        body
      }),
      invalidatesTags: [{ type: 'Favorites', id: 'LIST' }]
    }),

    getFavorites: build.query<FavoritesResponse, void>({
      query: () => ({
        url: `favourites`
      }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: 'Favorites', id }) as const),
        { type: 'Favorites' as const, id: 'LIST' }
      ]
    })
  })
});

export const { useAddFavoriteMutation, useGetFavoritesQuery } = favoritesApi;
