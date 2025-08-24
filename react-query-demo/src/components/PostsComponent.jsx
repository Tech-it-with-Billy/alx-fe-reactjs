import {useQuery} from 'react-query';

const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json();
}

function PostsComponent() {
    const {data: posts, error, isLoading, isError, refresh, isFetching
    } = useQuery('posts', fetchPosts, {
        statTime: 5000, cacheTime: 10000, refetchOnWindowFocus: false
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error fetching data</div>;

    return (
        <div>
            <h2>Posts</h2>
            <button onClick={() => refresh()}>Refresh</button>
            {isFetching && <span>Updating...</span>}
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );  
}

export default PostsComponent;