import React from "react";
import { PageHeader, StatsItem } from "../../components";
import AppLayout from "../../layouts/AppLayout";

const dummyStats = [
  { title: "Total Cases", value: 24, status: "none" },
  { title: "Completed", value: 14, status: "primary" },
  { title: "In Progress", value: "09", status: "secondary" },
  { title: "Failed", value: "01", status: "danger" },
];

export default function History() {
  return (
    <>
      <AppLayout>
        <div>
          <PageHeader title="Histories">
            <div className="flex space-x-4">
              {dummyStats.map((item) => {
                return (
                  <div key={item.title}>
                    <StatsItem
                      type={item.status}
                      title={item.title}
                      value={item.value}
                    />
                  </div>
                );
              })}
            </div>
          </PageHeader>
        </div>
      </AppLayout>
    </>
  );
}
