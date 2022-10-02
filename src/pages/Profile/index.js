import React from "react";
import { Input, PageHeader, Select, Textarea, Button } from "../../components";
import AppLayout from "../../layouts/AppLayout";

export default function History() {
  return (
    <>
      <AppLayout>
        <div>
          <PageHeader title="Profile" showLine={true} />
        </div>
        <div className="h-full">
          <div class="grid grid-cols-1 lg:grid-cols-2  lg:divide-x h-full gap-x-0 lg:gap-x-2 divide-grey-100">
            <div className=" w-full pt-8 pr-5">
              <div className="text-primary text-lg font-normal">
                Personal Information
              </div>
              <form className="pt-8">
                <div className="flex w-full space-x-5">
                  <div className="w-1/2">
                    <Input
                      placeholder="firstname"
                      type="text"
                      className="w-full"
                    />
                  </div>
                  <div className="w-1/2">
                    <Input placeholder="lastname" />
                  </div>
                </div>
                <div className="pt-5">
                  <Input placeholder="email" type="email" className="w-full" />
                </div>
                <div className="pt-5">
                  <Input
                    placeholder="telephone"
                    type="email"
                    className="w-full"
                  />
                </div>
                <div className="pt-5">
                  <Input
                    placeholder="Organization name"
                    type="email"
                    className="w-full"
                  />
                </div>
              </form>
              <div className="pt-2">
                <Button>Update</Button>
              </div>
            </div>
            <div className="pt-8  w-3/4 pl-10 ">
              <div className="text-primary text-lg font-normal">
                Address Information
              </div>
              <form className="pt-8">
                <div className=" w-full">
                  <Textarea rows="5" placeholder="address information" />
                </div>
                <div className="pt-5 w-full">
                  <div className="w-full">
                    <Select>
                      <option value="" disabled selected hidden>
                        select due diligence package
                      </option>
                      <option>Gold</option>
                      <option>Silver</option>
                    </Select>
                  </div>
                </div>
                <div className="pt-5">
                  <Select>
                    <option value="" disabled selected hidden>
                      select due diligence package
                    </option>
                    <option>Gold</option>
                    <option>Silver</option>
                  </Select>
                </div>
                <div className="pt-2">
                  <Button>Update</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </AppLayout>
    </>
  );
}
