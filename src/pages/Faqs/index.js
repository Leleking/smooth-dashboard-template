import React from "react";
import { Accordion } from "../../components";
import AuthLayout from "../../layouts/AuthLayout";

export default function index() {
  return (
    <AuthLayout>
      <div className="flex justify-center  md:px-8 animate__animated animate__fadeIn">
        <div className="w-full md:w-8/12">
          <div className="text-center text-primary">
            Basic things to know about Mazzaroth (FAQs)
          </div>
          <div className="pt-7">
            <Accordion>
              <Accordion.Item id="1" title="How do I reset my PIN?" height>
                <div className="pt-6">
                  This platform is designed to aid Investors, Risk Analysts,
                  Entrepreneurs, Lawyers and C- suite make informed decisions by
                  providing accurate and quick compliant reports on a potentials
                  investor, investee or business partner.
                </div>
              </Accordion.Item>
              <Accordion.Item id="2" title="What happens after I register??">
                <div className="pt-6">
                  This platform is designed to aid Investors, Risk Analysts,
                  Entrepreneurs, Lawyers and C- suite make informed decisions by
                  providing accurate and quick compliant reports on a potentials
                  investor, investee or business partner.
                </div>
              </Accordion.Item>
              <Accordion.Item id="3" title="Who can use Mazzaroth?">
                <div className="pt-6">
                  This platform is designed to aid Investors, Risk Analysts,
                  Entrepreneurs, Lawyers and C- suite make informed decisions by
                  providing accurate and quick compliant reports on a potentials
                  investor, investee or business partner.
                </div>
              </Accordion.Item>
              <Accordion.Item
                id="4"
                title="How much does using Mazzaroth cost?"
              >
                <div className="pt-6">
                  This platform is designed to aid Investors, Risk Analysts,
                  Entrepreneurs, Lawyers and C- suite make informed decisions by
                  providing accurate and quick compliant reports on a potentials
                  investor, investee or business partner.
                </div>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
