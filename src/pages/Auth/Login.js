import React, { useState } from "react";
import AuthLayout from "../../layouts/AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input, Select } from "../../components";

export default function Login() {
  const navigate = useNavigate();
  const [formStep, setFormStep] = useState(1);
  return (
    <AuthLayout>
      {formStep === 1 && (
        <div className="flex justify-center  md:px-8 animate__animated animate__fadeIn">
          <div className="w-8/12">
            <div className="text-center text-primary">
              Mazzaroth enables rapid, enhanced due diligence that reduces
              costs. Enter the required information to get started.
            </div>
            <form action="" className="pt-7">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Input type="text" placeholder="first name" />
                </div>
                <div>
                  <Input type="text" placeholder="last name" />
                </div>
              </div>
              <div className="pt-4">
                <Input type="email" placeholder="email address" />
              </div>
              <div className="pt-4">
                <Input type="text" placeholder="phone number" />
              </div>
              <div className="pt-4">
                <Input type="text" placeholder="name of organization" />
              </div>
              <div className="pt-5 flex justify-center">
                <div>
                  <Button onClick={() => setFormStep(2)} size="md" className="">
                    Continue
                  </Button>
                </div>
              </div>
              <div className="pt-9 text-grey-200 text-sm text-center">
                I already have an account
                <Link to="" className="text-primary font-bold  underline">
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      )}
      {formStep === 2 && (
        <div className="flex justify-center  md:px-8 animate__animated animate__fadeIn">
          <div className="w-8/12">
            <div className="text-center text-primary">
              Hello Simeon, now please enter your address information
            </div>
            <form action="" className="pt-7">
              <div className="pt-4">
                <Input type="email" placeholder="email address" />
              </div>

              <div className="pt-5 flex justify-center">
                <div>
                  <Button onClick={() => setFormStep(3)} size="md" className="">
                    Submit and Continue
                  </Button>
                </div>
              </div>
              <div className="pt-9 text-grey-200 text-sm text-center">
                By submitting this form, I agree to let Mazzaroth contact me via
                email/phone about this service to complete my onboarding. I
                acknowledge my information is protected under the
                <Link to="" className="text-primary font-bold  underline">
                  Mazzaroth Privacy Notice
                </Link>
              </div>
            </form>
          </div>
        </div>
      )}
      {formStep === 3 && (
        <div className="flex justify-center  md:px-8 animate__animated animate__fadeIn">
          <div className="w-8/12">
            <div className="text-center text-primary">
              Now select what package suites the purpose for which you want to
              use this platform
            </div>
            <form action="" className="pt-7">
              <div className="pt-4">
                <Select>
                  <option value="" disabled selected hidden>
                    select due diligence package
                  </option>
                  <option>Gold</option>
                  <option>Silver</option>
                </Select>
              </div>
              <div className="pt-4">
                <Select>
                  <option value="" disabled selected hidden>
                    select plan
                  </option>
                  <option>Gold</option>
                  <option>Silver</option>
                </Select>
              </div>

              <div className="pt-5 flex justify-center">
                <div>
                  <Button onClick={() => navigate("/")} size="md" className="">
                    Create my account
                  </Button>
                </div>
              </div>
              <div className="pt-9 text-grey-200 text-sm text-center">
                Don’t know which package to choose? See our
                <Link to="" className="text-primary font-bold  underline">
                  Plan and Pricing List
                </Link>
              </div>
            </form>
          </div>
        </div>
      )}
    </AuthLayout>
  );
}
