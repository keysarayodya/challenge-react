import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Challenge</h1>
      <div className="links">
        <Link to="/transactions">Transactions</Link>
        <Link to="/user">User</Link>
        <Link to="/book">Book</Link>
      </div>
    </nav>
  );
};

export default Navbar;
