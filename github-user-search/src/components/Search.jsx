// src/components/Search.jsx
import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(false);
        setUserData(null);

        try {
        const data = await fetchUserData(username);
        setUserData(data);
        } catch (err) {
        setError(true);
        } finally {
        setLoading(false);
        }
    };

    return (
        <div className="search-container">
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Enter GitHub username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            <div className="result">
                {loading && <p>Loading...</p>}
                {error && <p>Looks like we can't find the user.</p>}
                {userData && (
                <div className="user-info">
                    <img src={userData.avatar_url} alt="User Avatar" width="100" />
                    <h3>{userData.name || userData.login}</h3>
                    <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                    Open Profile
                    </a>
                </div>
                )}
            </div>
        </div>
    );
}

export default Search;
