import React from 'react'
import { useFetchUsersQuery } from '../../store';
import UserListItem from '../users-list-item/UsersListItem';
import './styles.css';

const UsersList = () => {
    const { data = [] } = useFetchUsersQuery();

    const renderedData = data.map(user => {
        return <UserListItem key={user.id} user={user} />;
    });

    return (
        <div className='users-list'>
            {renderedData}
        </div>
    )
}

export default UsersList;