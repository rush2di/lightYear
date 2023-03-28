import CategoryCard from "components/CategoryCard";
import { DonutChart } from "components/Charts";
import DashSection from "components/DashSection";
import type { NextPage } from "next";

const Chainprizes: NextPage = () => {
  return (
    <div className="w-full mx-auto min-h-screen flex flex-col align-items-center justify-center px-5">
      <CategoryCard title="Save Products" count={178} theme="indigo" />
      <DashSection title="Reports" headingLevel="h2">
        <DonutChart distPercent={25} salePercent={40} returnPercent={20} />
      </DashSection>
    </div>
  );
};

export default Chainprizes;
