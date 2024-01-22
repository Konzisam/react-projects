import { Link } from "react-router-dom";


const  BlogLists = ({ blogs, title }) => {


  return (
    <div className='BlogLists'>
      <h2>{title}</h2>
      {blogs.map((blog)=>(
        <div className='blog-preview' key={blog.id}>
          <Link to={ `/blog/blogs/${blog.id}` }>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          </Link>
     

        </div>
      ))
      }
      <div></div>
    </div>
  );
}

export default BlogLists;

 
