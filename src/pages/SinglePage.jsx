import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { GoBack } from '../components/GoBack'
const SinglePage = () => {

  const { id } = useParams()
  const [post, setPosts] = useState(null)
  const navigate = useNavigate();

  const goBack = ()=>  navigate(-1)


  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [id]);
  console.log(id);
  return (
    <>
     <div>
      {post && (
        <>
          <GoBack  />
          <h1>{post.title}</h1>
          <p>{post.body}</p>
            <Link to={`/postes/${id}/edit`} className="Editpost__btn">edit this post</Link>
        </>
      )

      }
     </div>
    </>
  )
}

export { SinglePage }