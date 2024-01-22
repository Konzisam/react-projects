import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Create = () => {

  // console.log("create called");

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('samkons');
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    const blog = {title, body, author};

    setIsPending(true);


    fetch('http://localhost:8000/blogs',{
      method: 'POST',
      headers: {"content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added')
      setIsPending(false)
    })

    // navigate(-1);

    navigate("/blog/home")

  }
  return (
    <div className="create">
        <h2>Add New Blog</h2>
        <form onSubmit={handleSubmit}>
          <label>Blog title:</label>
        <input type="text" 
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />

        <label>Blog Body:</label>
        <textarea 
        required
        value={body}
        onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>

        <select value={author}
        onChange={(e) => setAuthor(e.target.value)}>
        <option value="samkons">samkons</option>
        <option value="Other">Other</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button>Adding Blog....</button>}
        {/* <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p> */}

        </form>
    </div>
    
  )
}

export default Create;