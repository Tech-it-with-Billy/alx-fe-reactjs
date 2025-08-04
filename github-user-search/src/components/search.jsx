function Search(){
    return (
            <div>
                <h1>Github user search app</h1>
                <label for="Search"></label>
                <input type="text" id="username" name="username" placeholder="Enter username or repository name" />
                <button type="submit">Search</button>
            </div>
    )
}

export default Search;