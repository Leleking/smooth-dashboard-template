import AppLayout from "../../layouts/AppLayout";
import { LottieImg } from "../../components";

export default function UnderConstruction() {
  return (
    <AppLayout>
      <div className="flex flex-col space-y-2 w-full items-center justify-center pt-10">
        <LottieImg
          src={require("../../assets/icons/coding.json")}
          name="pricing"
          className="h-72"
        />
        <div>Opps.. page is still under construction</div>
      </div>
    </AppLayout>
  );
}
