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

const FunctionalityDetailsTable = () => {
  const navigate = useNavigate();

  const addBtnHandleClick = () => {
    navigate("/admin/functionalityDetails/add");
  };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");

  const sampleData = [
    {
      id: 1,
      productGroup: "Group A",
      name: "Product 1",
      functionalityCode: "F-123",
      description: "Description 1",
      status: "Enable",
    },
    {
      id: 2,
      productGroup: "Group B",
      name: "Product 2",
      functionalityCode: "F-456",
      description: "Description 2",
      status: "Disable",
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
      { Header: "Product Group", accessor: "productGroup" },
      { Header: "Name", accessor: "name" },
      { Header: "Functionality Code", accessor: "functionalityCode" },
      { Header: "Description", accessor: "description" },
      { Header: "Status", accessor: "status" },
      {
        Header: "Action",
        accessor: "action",
        disableFilters: true,
        disableSortBy: true,
        Cell: ({ row }) => (
          <button onClick={() => editAction(row)}>Edit</button>
        ),
      },
    ],
    []
  );

  const editAction = (row) => {
    console.log("Editing row:", row.original);
    navigate(`/admin/functionalityDetails/edit/${row.original.id}`);
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
        <button className="add-button" onClick={addBtnHandleClick}>
          Add
        </button>
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

export default FunctionalityDetailsTable;
