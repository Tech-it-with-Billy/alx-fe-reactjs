import axios from 'axios';

const GITHUB_API = "https://api.github.com/search/users?q"

export const fetchAdvancedUsers = async ({ username, location, minRepos }) => {
    let queryParts = [];

    if (username) queryParts.push(`${username} in:login`);
    if (location) queryParts.push(`location:${location}`);
    if (minRepos) queryParts.push(`repos:>${minRepos}`);

    const query = queryParts.join(' ');

    const response = await axios.get(`${GITHUB_API}/search/users`, {
        params: { q: query },
    });

    const detailedUsers = await Promise.all(
        response.data.items.map(async (user) => {
        const details = await axios.get(`${GITHUB_API}/users/${user.login}`);
        return { ...user, ...details.data };
        })
    );
    return { items: detailedUsers };
};
