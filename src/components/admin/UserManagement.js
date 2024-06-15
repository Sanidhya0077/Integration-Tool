import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  useTable,
  usePagination,
  useSortBy,
  useFilters,
  useGlobalFilter,
} from "react-table";
import "../../styles/admin.css";
import { useNavigate } from "react-router-dom";

const UserManagement = () => {
  const navigate = useNavigate();

  const approvalsBtnHandleClick = () => {
    // navigate('/admin/functionalityDetails/approvals');
  };

  const allUsersBtnHandleClick = () => {
    // navigate('/admin/functionalityDetails/allUsers');
  };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");

  const sampleData = [
    {
      id: 1,
      name: "User 1",
      email: "user1@example.com",
      subscribed: "Yes",
      requested: "No",
    },
    {
      id: 2,
      name: "User 2",
      email: "user2@example.com",
      subscribed: "No",
      requested: "Yes",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setData(sampleData);
      setLoading(false);
    }, 1000);
  }, []);

  const columns = React.useMemo(
    () => [
      { Header: "Sr. No", accessor: "id" },
      { Header: "Name", accessor: "name" },
      { Header: "Email", accessor: "email" },
      { Header: "Functionality Subscribed", accessor: "subscribed" },
      { Header: "Functionality Requested", accessor: "requested" },
      {
        Header: "Action",
        accessor: "action",
        disableFilters: true,
        disableSortBy: true,
        Cell: ({ row }) => (
          <div className="action-buttons">
            <button
              className="approve-button"
              onClick={() => approveAction(row)}
            >
              Approve
            </button>
            <button
              className="decline-button"
              onClick={() => declineAction(row)}
            >
              Decline
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const approveAction = (row) => {
    console.log("Approving row:", row.original);
  };

  const declineAction = (row) => {
    console.log("Declining row:", row.original);
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data: filteredData,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  useEffect(() => {
    const filtered = data.filter((row) => {
      return Object.values(row).some((cell) => {
        return String(cell).toLowerCase().includes(globalFilter.toLowerCase());
      });
    });
    setFilteredData(filtered);
  }, [globalFilter, data]);

  return (
    <div className="functionality-details-table-container mt-5">
      <div className="header">
        <div className="search-box">
          <input
            value={globalFilter || ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder={"Search"}
          />
        </div>
        <div className="button-group">
          <button className="add-button" onClick={approvalsBtnHandleClick}>
            Approvals
          </button>
          <button className="add-button" onClick={allUsersBtnHandleClick}>
            All Users
          </button>
        </div>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="table-container">
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {column.render("Header")}
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? " 🔽"
                            : " 🔼"
                          : ""}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row, i) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      <div className="pagination-container">
        <button
          className="pagination-button"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          Previous
        </button>
        <button
          className="pagination-button"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          Next
        </button>
        <span className="page-info">
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <select
          className="page-size-selector"
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[5, 10, 20].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default UserManagement;
