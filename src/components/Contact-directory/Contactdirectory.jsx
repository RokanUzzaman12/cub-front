import { useStore } from "@nanostores/react";
import React, { useEffect } from "react";
import { departmentList } from "../../stores/departmentsStore";
import { fetchDepartmentsAndFillStore } from "../../loaders/departmentsLoader";

const Contactdirectory = () => {
  let departmentDataList = useStore(departmentList) || [];
  departmentDataList = departmentDataList.filter(
    (dept) => dept.is_office === true,
  );
  useEffect(() => {
    fetchDepartmentsAndFillStore();
  }, [departmentList]);
  return (
    <>
      <section>
        <h4 className="text-center pt--40"> Office Wise Contact Numbers </h4>
        <table className="directory-table">
          <thead>
            <tr>
              <th>NAME</th>
              <th>DESIGNATION</th>
              <th>CONTACT</th>
              <th>E-MAIL</th>
            </tr>
          </thead>

          <tbody>
            {departmentDataList.map((item, index) => (
              <React.Fragment key={index}>
                {/* Office / Section Header */}
                {item.name && (
                  <tr className="office-row">
                    <td colSpan="4">{item.name}</td>
                  </tr>
                )}

                {/* Data Row */}
                <tr>
                  <td data-label="Name">{item.head_name}</td>
                  <td data-label="Designation">{item.head_designation}</td>
                  <td data-label="Contact">
                    <a href={`tel:${item.phone}`} className="phone">
                      {item.phone}
                    </a>
                  </td>
                  <td data-label="E-mail">
                    {item.email ? (
                      <a
                        href={`mailto:${item.email}`}
                        className="mail"
                      >
                        {item.email}
                      </a>
                    ) : (
                      "-"
                    )}
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </section>
      <style>
        {`
        .directory-table {
          width: 82%;
          border-collapse: collapse;
          font-family: "Montserrat", sans-serif;
          font-size: 15px;
          margin: 0 auto;
          margin-bottom: 40px;
          color: black;
        }

        .directory-table th,
        .directory-table td {
          border: 1px solid red;
          padding: 8px 10px;
          vertical-align: middle;
        }

      .directory-table th {
        text-align: center;
        font-weight: bold;
      }

    .directory-table td {
      text-align: left;
    }

    /* Office / Section Header */
    .office-row td {
      text-align: center;
      font-weight: bold;
      background-color: #fcd7d7;
      color: black;
    }

    /* Links */
    .directory-table a {
      color: #000;
      text-decoration: none;
    }

    .directory-table a:hover {
      text-decoration: underline;
    }

  /* Mobile devices */
@media (max-width: 768px) {
  .directory-table,
  .directory-table thead,
  .directory-table tbody,
  .directory-table th,
  .directory-table td,
  .directory-table tr {
    display: block;
    width: 100%;
  }

  /* Hide table header */
  .directory-table thead {
    display: none;
  }

  /* Data row as card */
  .directory-table tr {
    border: 1px solid red;
    margin-bottom: 15px;
    padding: 10px;
  }

  /* Office header row */
  .office-row td {
    background: #fcd7d7;
    font-size: 16px;
    text-align: center;
    padding: 10px;
  }

  .directory-table td {
    border: none;
    padding: 6px 0;
    position: relative;
  }

  /* Labels */
  .directory-table td::before {
    content: attr(data-label);
    font-weight: bold;
    display: block;
    margin-bottom: 2px;
  }
}`}
      </style>
    </>
  );
};

export default Contactdirectory;
