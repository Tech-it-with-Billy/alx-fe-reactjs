import React, { useContext } from 'react';
import UserContext from './components/UserContext';

const UserDetails = () => {
    const { name, age, bio } = useContext(UserContext);

    return (
        <div>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>{bio}</p>
        </div>
    );
};

export default UserDetails;
