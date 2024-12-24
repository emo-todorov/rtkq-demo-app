import React from 'react'
import { useAddPictureMutation, useFetchPicturesQuery } from '../../store'

const PicturesList = ({ album }) => {
    const { data = [] } = useFetchPicturesQuery(album);
    const [addPicture, results] = useAddPictureMutation();

    const renderedPictures = data.map(picture => {
        return <div key={picture.id} >
            <img src={picture.url} alt="picture" />
        </div>;
    });

    return (
        <>
            <div>
                <button onClick={() => addPicture(album)}>Add picture</button>
            </div>
            <div className='pictures-list'>
                {renderedPictures}
            </div>
        </>
    )
}

export default PicturesList