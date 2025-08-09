import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setUser(null);

        try {
        const data = await fetchUserData(username);
        setUser(data);
        } catch (err) {
        setError('Looks like we can’t find the user');
        } finally {
        setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow">
        <form onSubmit={handleSubmit} className="flex gap-2">
            <input
                type="text"
                placeholder="Search GitHub username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="flex-grow border p-2 rounded"
            />
            <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
            Search
            </button>
        </form>

        {loading && <p className="mt-4 text-gray-500">Loading...</p>}
        {error && <p className="mt-4 text-red-500">{error}</p>}

        {user && (
            <div className="mt-4 text-center">
            <img
                src={user.avatar_url}
                alt={user.login}
                className="w-24 h-24 mx-auto rounded-full"
            />
            <h2 className="text-lg font-bold mt-2">{user.name || user.login}</h2>
            <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
            >
                View Profile
            </a>
            </div>
        )}
        </div>
    );
};

export default Search;
