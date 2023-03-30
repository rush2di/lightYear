import type { NextPage } from "next";

import {
  Orders,
  exampleOrdersItems,
  TopSelling,
  exampleTopSellingItems,
} from "components/Tables";
import DashSection from "components/DashSection";
import Dropdown, { exampleDropdownItems } from "components/Dropdown";
import { DonutChart, LineChart } from "components/Charts";
import { CategoryCard } from "components/Cards";
import Sidebar from "components/Sidebar";
import DatePicker from "components/DatePicker";
import Scrollable from "components/Scrollable";

const Chainprizes: NextPage = () => {
  return (
    <div className="container mx-auto min-h-screen py-3 md:py-6">
      <div className="min-h-screen w-full flex items-stretch justify-stretch space-x-3 sm:space-x-6">
        <aside className="group relative">
          <Sidebar />
        </aside>
        <main className="w-full py-2">
          {/* HEADER */}
          <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-6 sm:space-y-0">
            <h1 className="text-2xl font-bold text-shade-1">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <DatePicker startFromDate="2023-01-10" />
              <DatePicker startFromDate="2023-03-25" />
            </div>
          </header>
          {/* CATEGORY CARDS */}
          <Scrollable className="my-3 sm:my-6 w-full h-[115px]">
            <div className="flex items-center space-x-3 sm:space-x-6 w-full">
              <div className="flex-none w-[250px] lg:w-[269px] h-[115px]">
                <CategoryCard title="Save Products" count={178} theme="blue" />
              </div>
              <div className="flex-none w-[250px] lg:w-[269px] h-[115px]">
                <CategoryCard
                  title="Stock Products"
                  count={20}
                  theme="yellow"
                />
              </div>
              <div className="flex-none w-[250px] lg:w-[269px] h-[115px]">
                <CategoryCard
                  title="Sales Products"
                  count={190}
                  theme="orange"
                />
              </div>
              <div className="flex-none w-[250px] lg:w-[269px] h-[115px]">
                <CategoryCard
                  title="Job Application"
                  count={12}
                  theme="indigo"
                />
              </div>
            </div>
          </Scrollable>
          {/* CHARTS */}
          <div className="grid grid-cols-12 gap-3 sm:gap-6">
            <div className="col-span-12 lg:col-span-7">
              <DashSection
                title="Reports"
                headingLevel="h2"
                dropdown={<Dropdown items={exampleDropdownItems} />}
              >
                <Scrollable className="w-full h-[300px] lg:h-[350px]">
                  <LineChart />
                </Scrollable>
              </DashSection>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <DashSection
                title="Analytics"
                headingLevel="h2"
                dropdown={<Dropdown items={exampleDropdownItems} />}
              >
                <DonutChart
                  distPercent={25}
                  salePercent={35}
                  returnPercent={20}
                />
              </DashSection>
            </div>
          </div>
          {/* TABLES */}
          <div className="grid grid-cols-12 gap-3 sm:gap-6 mt-3 sm:mt-6">
            <div className="col-span-12 lg:col-span-7">
              <DashSection
                title="Analytics"
                headingLevel="h2"
                dropdown={<Dropdown items={exampleDropdownItems} />}
              >
                <Scrollable className="w-full h-[320px]">
                  <Orders items={exampleOrdersItems} />
                </Scrollable>
              </DashSection>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <DashSection
                title="Top Selling Products"
                headingLevel="h2"
                dropdown={<Dropdown items={exampleDropdownItems} />}
              >
                <Scrollable className="w-full h-[315px]">
                  <TopSelling items={exampleTopSellingItems} />
                </Scrollable>
              </DashSection>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Chainprizes;