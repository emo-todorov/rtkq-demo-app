import React from 'react'
import "./styles.css";
import { useDeleteUserMutation } from '../../store';
import ExpandablePanel from '../expandable-panel/ExpandablePanel';

const UsersListItem = ({ user }) => {
    const [deleteUser, results] = useDeleteUserMutation();

    const { username } = user;

    const deleteUserHandler = () => {
        deleteUser(user);
    }

    const header = (
        <div style={{ display: 'flex' }}>
            <button onClick={deleteUserHandler}>❌</button>
            <p >{username}</p>
        </div>
    );

    return (
        <div className='users-list__item'>
            <ExpandablePanel header={header}>
                CONTENT !!!
            </ExpandablePanel>
        </div>
    )
}

export default UsersListItem;