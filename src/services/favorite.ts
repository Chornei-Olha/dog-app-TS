import { api } from './api';

export interface Favorite {
  image_id: string;
  sub_id?: string;
}

export type FavoritesResponse = {
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

    deleteFavorite: build.mutation<unknown, { favourite_id: number }>({
      query: ({ favourite_id }) => ({
        url: `favourites/${favourite_id}`,
        method: 'DELETE'
      }),
      invalidatesTags: [{ type: 'Favorites', id: 'LIST' }]
    }),

    getFavorites: build.query<
      FavoritesResponse,
      { limit?: number; page?: number }
    >({
      query: ({ limit = 10, page = 0 }) => ({
        url: `favourites?limit=${limit}&page=${page}`
      }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: 'Favorites', id }) as const),
        { type: 'Favorites' as const, id: 'LIST' }
      ]
    })
  })
});

export const {
  useAddFavoriteMutation,
  useDeleteFavoriteMutation,
  useGetFavoritesQuery
} = favoritesApi;
