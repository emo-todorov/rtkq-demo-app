import { faker } from "@faker-js/faker";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
    reducerPath: 'users',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005',
        fetchFn: async (...args) => {
            await new Promise(resolve => setTimeout(resolve, 1500));

            return fetch(...args);
        },
    }),
    endpoints: builder => ({
        fetchUsers: builder.query({
            query: () => ({
                url: '/users',
                method: 'GET',
            })
        }),
        addUser: builder.mutation({
            query: () => ({
                url: '/users',
                method: 'POST',
                body: {
                    // an ID will be generated automatically in the BE
                    username: faker.internet.username()
                }
            })
        }),
        deleteUser: builder.mutation({
            query: (user) => ({
                url: `/users/${user.id}`,
                method: 'DELETE'
            })
        }),
    }),
});

export const {
    useFetchUsersQuery,
    useAddUserMutation,
    useDeleteUserMutation,
} = usersApi;