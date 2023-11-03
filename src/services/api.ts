import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.thedogapi.com/v1',
  prepareHeaders: headers => {
    headers.set(
      'x-api-key',
      'live_w5vCya8Qwh0Fa7ePH01qgMstjclTDGvl37zsdHLdHIfxceGHingbihq1WrxCd822'
    );
    return headers;
  }
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 6 });

export const api = createApi({
  reducerPath: 'splitApi',
  baseQuery: baseQueryWithRetry,
  tagTypes: ['Breeds', 'Favorites', 'Images'],
  endpoints: () => ({})
});
