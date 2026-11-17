
function Home({ goToEmployee,goToDetails }) {

  return (
    <div>
      <h1>Welcome Home!</h1>

      <button onClick={goToEmployee}>
        View Employees
      </button>
      <button onClick={goToDetails}>
        Details
      </button>
    </div>
  );
}

export default Home;
