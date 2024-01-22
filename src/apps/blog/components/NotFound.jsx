import { Link } from "react-router-dom";

const NotFound = () => {
  console.log("Blog notfound called");
  return ( 
    <div className="blog-not-found">
    <h2>Sorry Blog</h2>
    <p>That page cannot be found</p>
    <Link to="/blog/home">Back to the homepage....</Link>
    </div>
  );
}

export default NotFound;