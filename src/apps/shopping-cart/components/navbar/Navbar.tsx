import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <Link to="/shopping-cart" >
    Home
    </Link>
    <Link to="/shopping-cart/store" >
    Store
    </Link>
    <Link to="/shopping-cart/about" >
    About
    </Link>
    </>
  )
}

export default Navbar;