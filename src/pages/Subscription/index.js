import { useState } from "react";
import {
  PageHeader,
  ProgressBar,
  Modal,
  LottieImg,
  Button,
} from "../../components";
import { useReward } from "react-rewards";

import AppLayout from "../../layouts/AppLayout";

export default function Subscription() {
  const [isOpen, setIsOpen] = useState(false);
  const { reward, isAnimating } = useReward("subscribe", "confetti", {
    elementCount: 200,
  });

  const subscribe = () => {
    reward();
  };

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
            <div className="pt-5">
              <ProgressBar progress={"43%"}>
                <div className="text-white">43 out of 50 searches used</div>
              </ProgressBar>
            </div>
            <div className="pt-10">
              <div className="font-light text-grey-300">
                Business Due diligence
              </div>
              <div className="text-primary">Standard</div>
              <ul className="list-disc list-inside flex flex-col space-y-2 font-normal text-grey-300 pt-4 text-sm">
                <li>Company basic vital</li>
                <li>List of Directors (Current and Old)</li>
                <li>Related Entities</li>
                <li>Web & Media</li>
              </ul>
            </div>
            <div className="pt-10">
              <div className="text-xs text-grey-300">
                {" "}
                Don’t know which package to choose? See our{" "}
                <div
                  onClick={() => setIsOpen(true)}
                  className="text-primary font-bold  underline cursor-pointer"
                >
                  Plan and Pricing List
                </div>
              </div>
            </div>
            <Modal
              isOpen={isOpen}
              onDismiss={() => setIsOpen(false)}
              footer={
                <div className="mx-0 sm:m-10">
                  <Button
                    disabled={isAnimating}
                    id="subscribe"
                    onClick={() => subscribe()}
                  >
                    Subscribe
                  </Button>
                </div>
              }
              defaultSnap={({ maxHeight }) => maxHeight / 2}
              snapPoints={({ maxHeight }) => [
                maxHeight - maxHeight / 10,
                maxHeight / 4,
                maxHeight * 0.6,
              ]}
              expandOnContentDrag
            >
              <div>
                <div>
                  <LottieImg
                    src={require("../../assets/icons/coding.json")}
                    name="pricing"
                    className="h-72"
                  />
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </AppLayout>
    </>
  );
}
