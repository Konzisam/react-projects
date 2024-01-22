import { Link } from "react-router-dom";

const Navbar = () => {

  // console.log("calling Navbar!!!!")
  return (
    <nav className="blog-navbar">
      <h1>My Blog</h1>
      <div className="links">
        <Link to="/blog/home">Home</Link>
        <Link to="/blog/create-blog" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>New Blog</Link>
        <Link to="/">Back to Projects</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;