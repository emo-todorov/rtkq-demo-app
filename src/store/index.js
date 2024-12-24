import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./apis/usersApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { albumsApi } from "./apis/albumsApi";
import { picturesApi } from "./apis/picturesApi";

export const store = configureStore({
    reducer: {
        users: usersApi.reducer,
        albums: albumsApi.reducer,
        [picturesApi.reducerPath]: picturesApi.reducer,
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware()
            .concat(usersApi.middleware)
            .concat(albumsApi.middleware)
            .concat(picturesApi.middleware);
    }
});

setupListeners(store.dispatch);

export {
    useFetchUsersQuery,
    useAddUserMutation,
    useDeleteUserMutation,
} from './apis/usersApi';

export {
    useFetchAlbumsQuery,
    useAddAlbumMutation,
    useRemoveAlbumMutation,
} from './apis/albumsApi';

export {
    useFetchPicturesQuery,
    useAddPictureMutation,
} from './apis/picturesApi'