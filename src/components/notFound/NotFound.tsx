import React from "react";
import { Link } from "react-router-dom";
import "./notFound.css"

const NotFound: React.FC = () => {
  return ( 
    <div className="not-found">
      <h2>So Sorry</h2>
      <p>That page cannot be found</p>
      <Link to="/">Back to the homepage....</Link>
    </div>
  );
}

export default NotFound;
