import { useState } from "react";
import Card from "./components/Card";
import Products from "./components/Products/Products";
import Recommended from "./components/Recommended/Recommended";
import Sidebar from "./components/Sidebar/Sidebar";
import "./Webshop.css"
import products from "./db/data"
import Nav from "./components/Navigation/Nav";

function Webshop() {
  const [selectedcategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  //--------------------Input filter------------------
  const handleInputChange = event => {
    setQuery(event.target.value);
  }

  const filteredItems = products.filter((product) =>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase())  !== -1
  );

  //--------------------Radio filter------------------
  const handleChange = event => {
    setSelectedCategory(event.target.value);
  }
  //--------------------Buttons filter------------------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  }

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    //Filtering Input  Items
    if (query) {
      filteredProducts = filteredItems;
    }

    //Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

   

      return filteredProducts.map(
        ({img, title, star, reviews, newPrice, prevPrice}) =>(
        <Card 
        key = {Math.random()}
        img = {img}
        title = {title}
        star = {star}
        reviews = {reviews}
        newPrice = {newPrice}
        prevPrice = {prevPrice}
        />
      ))
  }

  const result = filteredData(products, selectedcategory, query)

  return (
  <div className="web-shop">
    <Sidebar handleChange={handleChange}/>
    <Nav query={query} handleInputChange= {handleInputChange}/>
    <Recommended handleClick={handleClick}/>
    <Products result={result}/>
  </div>
  );
}

export default Webshop;
