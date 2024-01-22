import "./home.css"
import { FaAppStoreIos } from "react-icons/fa";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { PiArticleNyTimes } from "react-icons/pi";
import { TiWeatherCloudy } from "react-icons/ti";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <h1>Projects</h1>

      <Link to="/web-shop" className="link">
      <div className='app'>
      <div className="icon">
        <FaShoppingCart size={60} style={{ color:'#0b2447'}}/>
        </div>
        <div className='text'>
          <h2>Web Shop</h2>
          <p>Filtering items by color, price and category</p>
        </div>
      </div>
      </Link>

      <Link to="/blog/home" className="link">
      <div className='app'>
      <div className="icon">
        <PiArticleNyTimes  size={60} style={{ color:'#0b2447'}}/>
        </div>
        <div className='text'>
          <h2>Blog</h2>
          <p>Simple blog to learn core concepts in react</p>
        </div>
      </div>
      </Link>

      
      <Link to="/weather-app" className="link">
      <div className='app'>
      <div className="icon">
      <TiWeatherCloudy size={70} style={{ color:'#0b2447'}}/>
      </div>
        <div className='text'>
          <h2>Weather app</h2>
          <p>Calling APIs using Fetch API</p>
        </div>
      </div>
      </Link>

      <Link to="/to-do-app" className="link">
      <div className='app'>
      <div className="icon">
        <FaAppStoreIos size={70} style={{ color:'#0b2447'}}/>
        </div>
        <div className='text'>
          <h2>TodoApp</h2>
          <p>Typescript Todo app, useReducer</p>
        </div>
      </div>
      </Link>

      <Link to="/social-app" className="link">
      <div className='app'>
        <div className="icon">
      <IoPeopleCircleOutline size={70} style={{ color:'#0b2447'}}/>
      </div>
        <div className='text'>
          <h2>social media app</h2>
          <p>Fullstack App using React and kotlin</p>
        </div>
      </div>
      </Link>

 

    </div>

  )
}

export default Home;