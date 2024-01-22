import { Route, BrowserRouter, Routes, } from "react-router-dom";
import TodoApp from "./apps/to-do-app/TodoApp"
import Webshop from "./apps/web-shop/Webshop.jsx"
import Blog from "./apps/blog/Blog.jsx";
import WeatherApp from "./apps/weather-app/WeatherApp";
import "./App.css"
import NotFound from "./components/notFound/NotFound";
import Home from "./components/home/Home";




const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Navbar /> */}
        <div className="content">
          <Routes>
            <Route path='/' element={< Home />}/>
            <Route path="/to-do-app" element={< TodoApp />}/>
            <Route path="/web-shop" element={<Webshop/>} />
            <Route path="/blog/*" element={<Blog/>} />
            <Route path="/weather-app" element={<WeatherApp/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App
