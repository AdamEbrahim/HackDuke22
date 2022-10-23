import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
     <div className="space"></div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/nutrition">Nutrition</Link>
          </li>
          <li>
            <Link to="/workouts">WorkOuts</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;