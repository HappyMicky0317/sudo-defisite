import SupplyAssets from "../components/landing/SupplyAssets";
import BorrowAssets from "../components/landing/BorrowAssets";

export default function Landing() {
  return (
    <div className="grid gap-y-40">
      <SupplyAssets />
      <BorrowAssets />
    </div>
  );
}