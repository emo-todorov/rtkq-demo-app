import React from 'react'
import ExpandablePanel from '../expandable-panel/ExpandablePanel';
import { useRemoveAlbumMutation } from '../../store';
import PicturesList from '../pictures-list/PicturesList';

const AlbumsListItem = ({ album }) => {
  const [deleteAlbum, results] = useRemoveAlbumMutation(album);

  const deleteAlbumHandler = () => {
    deleteAlbum(album);
  }

  const header = (
    <div style={{ display: 'flex' }}>
      <button onClick={deleteAlbumHandler}>❌</button>
      <p >{album.title}</p>
    </div>
  );

  return (
    <div>
      <ExpandablePanel header={header}>
        <PicturesList />
      </ExpandablePanel>
    </div>
  )
}

export default AlbumsListItem;