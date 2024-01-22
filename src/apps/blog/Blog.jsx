import BlogHome from './BlogHome';
import Navbar from './Navbar';
import Create from './components/Create';
import {  Route, Routes, Outlet } from 'react-router-dom';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';
import "./index.css"

function Blog() {

  // console.log("Rendering Blog")
  return (

      <div className="Blog">
         <Navbar />
     

        <div className="blog-content">
          {/* <BlogHome/> */}
          <Routes>
              <Route path='home' element={<BlogHome />} />
              <Route path='create-blog' element={< Create />}/>
              <Route path="blogs/:id" element={<BlogDetails />} />
              <Route path="*" element={<NotFound />} />
          </Routes> 
        </div>
      </div>
  );
}

export default Blog;





