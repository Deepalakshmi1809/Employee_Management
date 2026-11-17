import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">

      <h1>Welcome to Employee Management System</h1>

      <p>
        Manage employee information in one place.
      </p>

      <Link to="/employees">
        <button>View Employees</button>
      </Link>

    </div>
  );
}

export default Home;