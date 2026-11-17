import { useState } from "react";
import EmployeeCard from "../EmployeeCard/EmployeeCard";

import "./EmployeeList.css";

function EmployeeList() {

  // Employee data stored in an array

  const [employees, setEmployees] = useState([
    {
      id: 101,
      name: "Deepa Lakshmi",
      role: "Software Developer",
      department: "IT",
      email: "deepa@gmail.com",
      salary: 30000
    },

    {
      id: 102,
      name: "Priya Dharshini",
      role: "Frontend Developer",
      department: "IT",
      email: "priya@gmail.com",
      salary: 35000
    },

    {
      id: 103,
      name: "Bala Singam",
      role: "HR Manager",
      department: "HR",
      email: "bala@gmail.com",
      salary: 40000
    },

    {
      id: 104,
      name: "Mervin",
      role: "Software Tester",
      department: "Testing",
      email: "mervin@gmail.com",
      salary: 32000
    },

    {
      id: 105,
      name: "Sathish Kumar",
      role: "Backend Developer",
      department: "IT",
      email: "sathish@gmail.com",
      salary: 38000
    },
  ]);

  const [search, setSearch] = useState("");

  // Filter employee records

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="employee-list">

      <h1>Employee List</h1>

      <input
        type="text"
        placeholder="Search employee by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="employee-container">

        {filteredEmployees.length > 0 ? (

          filteredEmployees.map((employee) => (
            <EmployeeCard
              key={employee.id}
              name={employee.name}
              role={employee.role}
              department={employee.department}
              email={employee.email}
              salary={employee.salary}
            />
          ))

        ) : (

          <p>No employees found</p>

        )}

      </div>

    </div>
  );
}

export default EmployeeList;