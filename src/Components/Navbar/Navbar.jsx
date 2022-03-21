import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        {/* Populate 5 buttons with EXACT same classnames as of their routes name */}
        {/* Example: 
            <button className="history"> Link to history here  </button>  */}
        {/* Home component will have `/` route and classname as `home`  */}
        <Link to={'/'}><button className="Home">Home</button></Link>
        <Link to={'/section/Mystery'}><button className="Mystery">Mystery</button></Link>
        <Link to={'/section/Technology'}><button className="Technology" >Technology</button></Link>
        <Link to={'/section/Mythology'}><button className="Mythology">Mythology</button></Link>
        <Link to={'/section/history'}><button className="history">history</button></Link>
      </div>
    </>
  );
};
