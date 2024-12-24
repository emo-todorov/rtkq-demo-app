import { faker } from "@faker-js/faker";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const albumsApi = createApi({
    reducerPath: 'albums',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005',
    }),
    endpoints: builder => ({
        fetchAlbums: builder.query({
            query: (user) => ({
                url: '/albums',
                params: {
                    userId: user.id
                },
                method: 'GET'
            })
        }),
        addAlbum: builder.mutation({
            query: (user) => ({
                url: '/albums',
                body: {
                    title: faker.book.title(),
                    userId: user.id
                },
                method: 'POST'
            })
        }),
        removeAlbum: builder.mutation({
            query: (album) => ({
                url: `/albums/${album.id}`,
                method: 'DELETE'
            })
        })
    })
});

export const {
    useFetchAlbumsQuery,
    useAddAlbumMutation,
    useRemoveAlbumMutation
} = albumsApi;