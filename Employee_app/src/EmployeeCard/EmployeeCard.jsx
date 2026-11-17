import "./EmployeeCard.css";

function EmployeeCard({ name,id, role, department, email, salary, employee }) {
// console.log(employee,'employee');
//   const { id, name, role, department, email, salary } = employee;

  return (
    <div className="employee-card">

      <h2>{name}</h2>

      <p><strong>Employee ID:</strong> {id}</p>

      <p><strong>Role:</strong> {role}</p>

      <p><strong>Department:</strong> {department}</p>

      <p><strong>Email:</strong> {email}</p>

      <p><strong>Salary:</strong> ₹{salary}</p>

    </div>
  );
}

export default EmployeeCard;