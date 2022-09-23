import { useMemo } from "react";
import { useRowSelect, useTable, useSortBy } from "react-table";
import { ReactComponent as SortIcon } from "../assets/icons/sort.svg";

function GetColumnSort({ isSortedDesc }) {
  return (
    <SortIcon
      alt=""
      className={`inline ${isSortedDesc ? "transform rotate-180" : ""}`}
    />
  );
}

export default function Table({ data, columns, tableClassName, onClickRow }) {
  const tableData = useMemo(() => data, [data]);
  const tableColumns = useMemo(() => columns, [columns]);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns: tableColumns,
        data: tableData,

        autoResetSelectedRows: false,
      },
      useSortBy,
      useRowSelect,
      (hooks) => {
        hooks.allColumns.push((hooksColumns) => [...hooksColumns]);
      }
    );

  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <table
          className="table-auto w-full"
          {...getTableProps({
            className: tableClassName,
          })}
        >
          <thead>
            {headerGroups.map((headerGroup) => {
              return (
                <tr
                  className="text-left"
                  {...headerGroup.getHeaderGroupProps({})}
                >
                  {headerGroup.headers.map((column) => {
                    return (
                      <th
                        {...column.getHeaderProps({
                          className:
                            column.className +
                            " text-xs font-semibold text-grey-200 pb-7",
                          ...column.getSortByToggleProps(),
                        })}
                      >
                        {column.render("Header")}
                        <span>
                          {column.isSorted && <GetColumnSort {...column} />}
                        </span>
                      </th>
                    );
                  })}
                </tr>
              );
            })}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  onClick={() => onClickRow(row.original)}
                  className="border-b border-b-grey-100"
                >
                  {row.cells.map((cell) => {
                    let className;
                    if (cell.column.className) {
                      className = ` ${cell.column.className}`;
                    }
                    return (
                      <td
                        {...cell.getCellProps({
                          className: className + " py-5",
                        })}
                      >
                        <span className="body-secondary-semibold md:body-primary-semibold text-secondary-black">
                          {cell.render("Cell")}
                        </span>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
