import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Header from '../components/Header'

function Post() {
  const { id } = useParams()

  const [post, setPost] = useState(null)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(data => {
        setPost(data)
      })
  }, [id])

  if (!post) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <Header />

      <div className="container">
        <div className="post-card">
          <h1>{post.title}</h1>

          <p>{post.body}</p>
        </div>
      </div>
    </>
  )
}

export default Post