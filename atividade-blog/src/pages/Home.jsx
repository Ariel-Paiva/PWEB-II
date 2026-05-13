import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Header from '../components/Header'

function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data)
      })
  }, [])

  return (
    <>
      <Header />

      <div className="container">
        <h1>Meu Blog</h1>

        {posts.slice(0, 10).map(post => (
          <div className="post-card" key={post.id}>
            <Link to={`/post/${post.id}`}>
              <h2>{post.title}</h2>
            </Link>

            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home