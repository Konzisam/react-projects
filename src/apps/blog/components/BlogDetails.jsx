import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../useFetch";

const BlogDetails = () => {

  const { id } = useParams()
  const { data: blog , error , isPending} = useFetch('http://localhost:8000/blogs/'+ id)
  const navigate = useNavigate();

  const handleClick = () =>{
    fetch('http://localhost:8000/blogs/'+ blog.id,
    {
      method: 'DELETE'
    }).then(() => {
      navigate("/blog/home")

    })
  }

  return (
    <div className="blog-details">
      { isPending && <div>loading...</div>}
      { error && <div>{error}</div>}
      { blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written By { blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
      
    </div>
  );
}

export default BlogDetails;