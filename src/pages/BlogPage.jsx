import  { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Blogpage = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  })

  return (
    <div>
      <h1>Blog Page</h1>
      <Link to="/postes/new">Add new post </Link>
      {
        posts.map((post,index) => (
          <Link key={index} to={`/postes/${post.id}`}>
            <li>{post.title}</li>
          </Link>
        ))
      }
    </div>
  )
}

export default Blogpage