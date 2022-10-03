import React from "react";
import { PageHeader } from "../../components";

import AppLayout from "../../layouts/AppLayout";

export default function Subscription() {
  return (
    <>
      <AppLayout>
        <div>
          <PageHeader title="Subscription" />

          <div className="pt-5">
            <div className="flex justify-between">
              <div>Current Package</div>
              <div className="text-primary">Upgrade</div>
            </div>
          </div>
        </div>
      </AppLayout>
    </>
  );
}
