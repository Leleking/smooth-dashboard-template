import React from "react";
import { PageHeader } from "../../components";
import AppLayout from "../../layouts/AppLayout";

export default function index() {
  return (
    <>
      <AppLayout>
        <div>
          <PageHeader>Dashboard</PageHeader>
        </div>
      </AppLayout>
    </>
  );
}
