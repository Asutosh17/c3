import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbar" style={{display:"flex",justifyContent:"space-around"}}>
        {/* Populate 5 buttons with EXACT same classnames as of their routes name */}
        {/* Example: 
            <button className="history"> Link to history here  </button>  */}
        {/* Home component will have `/` route and classname as `home`  */}
        <Link className="home" to={"/"}>Home</Link>
        <Link className="history" to={"/section/history"}>History</Link>
        <Link className="mystery" to={"/section/Mystery"}>Mystery</Link>
        <Link className="mythology" to={"/section/Mythology"}>Mythology</Link>
        <Link className="technology" to={"/section/Technology"}>Technology</Link>
      </div>
    </>
  );
};
