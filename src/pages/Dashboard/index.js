import React from "react";
import { PageHeader, Input, Table } from "../../components";
import AppLayout from "../../layouts/AppLayout";
import { ReactComponent as ActionIcon } from "../../assets/icons/action.svg";
import { dummyData } from "./dummyData";

export default function index() {
  const columns = [
    {
      Header: "ID",
      accessor: "id",
      className: "w-[100px] min-w-[100px] max-w-[100px]",
      Cell: (row) => {
        return <div>{row.row.original.id}</div>;
      },
    },
    {
      Header: "DATE SUBMITTED",
      accessor: "created_at",
      className: "min-w-[250px] w-[250px] max-w-[250px]",
      Cell: (row) => {
        return (
          <div className="text-grey-200">{row.row.original.created_at}</div>
        );
      },
    },
    {
      Header: "NAME OF COMPANY",
      accessor: "name",
      className: "min-w-[300px] w-[300px] max-w-[300px]",
      Cell: (row) => {
        return <div className="text-grey-200">{row.row.original.name}</div>;
      },
    },
    {
      Header: "STATUS",
      accessor: "status",
      className: "min-w-[200px] w-[200px] max-w-[200px]",
      Cell: (row) => {
        return <div>{row.row.original.status}</div>;
      },
    },
    {
      Header: "",
      accessor: "action",
      Cell: (row) => {
        return (
          <div>
            <ActionIcon />
          </div>
        );
      },
    },
  ];
  return (
    <>
      <AppLayout>
        <div>
          <PageHeader title="Dashboard">
            <div>
              <Input placeholder="Search..." />
            </div>
          </PageHeader>
          <div>
            <div className="text-primary text-lg font-normal">Recent cases</div>
          </div>
          <div className="pt-5">
            <Table columns={columns} data={dummyData} />
          </div>
        </div>
      </AppLayout>
    </>
  );
}
