import React from 'react'
import { useAddAlbumMutation, useFetchAlbumsQuery } from '../../store';
import AlbumsListItem from '../albums-list-item/AlbumsListItem';

const ALbumsList = ({ user = {} }) => {
    const { data = [] } = useFetchAlbumsQuery(user);
    const [addAlbum, results] = useAddAlbumMutation();

    const renderedAlbums = data.map(curAlbum => {
        return <AlbumsListItem key={curAlbum.id} album={curAlbum} />;
    });

    return (
        <>
            <div>
                <span>Albums for {user.username}</span>
                <button onClick={() => addAlbum(user)}>Add album</button>
            </div>
            <div className='albums-list'>
                {renderedAlbums}
            </div>
        </>
    );
};

export default ALbumsList;