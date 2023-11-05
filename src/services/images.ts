import { api } from './api';

export interface Images {
  id: string;
  url: string;
  width: number;
  height: number;
  mime_type: string;
  breeds: [
    {
      id: number;
      name: string;
      weight: string;
      height: string;
      life_span: string;
      breed_group: string;
    }
  ];
  categories: [];
}

type ImagesResponse = Images[];

export const imagesApi = api.injectEndpoints({
  endpoints: build => ({
    getImages: build.query<
      ImagesResponse,
      {
        limit?: number;
        page?: number;
        mime_type?: string;
        order?: string;
      }
    >({
      query: ({
        limit = 10,
        page = 0,
        mime_type = 'all',
        order = 'RANDOM'
      }) => ({
        url: `images/search?limit=${limit}&page=${page}&mime_types=${mime_type}&order=${order}`
      }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: 'Images', id }) as const),
        { type: 'Images' as const, id: 'LIST' }
      ]
    })
  })
});

export const { useGetImagesQuery } = imagesApi;
