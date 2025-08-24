import {QueryClient, QueryClientProvider} from 'react-query'
import PostsComponent from './components/PostsComponent';

const queryClient = new QueryClient()

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <div>
          <h1>
            React Query
          </h1>
          <PostsComponent />
        </div>
      </QueryClientProvider>
    </div>
  )
}

export default App;
