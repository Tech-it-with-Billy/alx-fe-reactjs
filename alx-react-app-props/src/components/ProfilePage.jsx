// import React from 'react';
// import UserDetails from './UserDetails';

// const ProfilePage = () => {
//     return (
//         <div>
//             <h1>Profile Page</h1>
//             <UserDetails />
//         </div>
//     );
// };

// export default ProfilePage;

// src/components/UserDetails.jsx
import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

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
