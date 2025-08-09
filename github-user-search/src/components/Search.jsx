import { useState } from 'react';
import { fetchAdvancedUsers } from '../services/githubService';

function Search() {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(false);
        setUsers([]);

        try {
        const data = await fetchAdvancedUsers({ username, location, minRepos });
        setUsers(data.items || []);
        } catch (err) {
        setError(true);
        } finally {
        setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
        <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg p-4 space-y-4"
        >
            <h2 className="text-xl font-bold text-gray-700">Advanced GitHub User Search</h2>

            <input
            type="text"
            placeholder="Username (optional)"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded"
            />

            <input
            type="text"
            placeholder="Location (optional)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-2 border rounded"
            />

            <input
            type="number"
            placeholder="Minimum Public Repos (optional)"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="w-full p-2 border rounded"
            />

            <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded"
            >
            Search
            </button>
        </form>

        <div className="mt-6">
            {loading && <p className="text-gray-600">Loading...</p>}
            {error && <p className="text-red-500">Looks like we can't find users.</p>}

            {users.length > 0 && (
            <div className="space-y-4">
                {users.map((user) => (
                <div
                    key={user.id}
                    className="flex items-center bg-gray-100 p-4 rounded shadow"
                >
                    <img
                    src={user.avatar_url}
                    alt="User Avatar"
                    className="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                    <h3 className="font-semibold">{user.login}</h3>
                    <a
                        href={user.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                    >
                        View Profile
                    </a>
                    {user.location && <p>📍 {user.location}</p>}
                    {user.public_repos !== undefined && (
                        <p>📦 {user.public_repos} public repos</p>
                    )}
                    </div>
                </div>
                ))}
            </div>
            )}
        </div>
        </div>
    );
}

export default Search;
