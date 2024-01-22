import BlogLists from "./components/BlogLists.jsx";
import useFetch from "./useFetch.jsx";
import data from "./data/db.jsx"
// import { Outlet } from "react-router-dom";
import { useEffect } from "react";


const BlogHome = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
    // console.log("rendering bloghome");
  
  return (
        
    // <div className="blog-home">
    //   { data && <BlogLists blogs ={ data } title="All blogs!" />}
    //   {/* <Outlet/> */}
    // </div>
    

    <div className="blog-home">
      { error && <div>{error}</div>}
      { isPending && <div>loading...</div>}
      { blogs && <BlogLists blogs ={blogs} title="All blogs!" />}
    </div>
  );
}
 
export default BlogHome;

