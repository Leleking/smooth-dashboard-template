import AppLayout from "../../layouts/AppLayout";
import { Button, LottieImg } from "../../components";

export default function PageNotFound() {
  return (
    <AppLayout>
      <div className="flex flex-col space-y-2 w-full items-center justify-center pt-10">
        <LottieImg
          src={require("../../assets/icons/404.json")}
          name="pricing"
          className="h-72"
        />
        <div>Opps.. The page you are looking for can't be found</div>
        <div className="pt-2">
          <Button className="px-5">Go Back</Button>
        </div>
      </div>
    </AppLayout>
  );
}
