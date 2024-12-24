import { faker } from "@faker-js/faker";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const picturesApi = createApi({
    reducerPath: 'pictures',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005',
    }),
    endpoints: builder => ({
        fetchPictures: builder.query({
            query: (album) => ({
                url: '/pictures',
                params: {
                    albumId: album.id
                },
                method: 'GET',
            })
        }),
        addPicture: builder.mutation({
            query: (album) => ({
                url: '/pictures',
                method: 'POST',
                body: {
                    url: faker.image.urlLoremFlickr({ width: 150, height: 150 }),
                    albumId: album.id,
                }
            })
        })
    })
});

export const {
    useFetchPicturesQuery,
    useAddPictureMutation,
} = picturesApi;