import { IDashSectionProps } from "./types";

const DashSection: React.FC<IDashSectionProps> = ({
  headingLevel,
  dropdown,
  children,
  title,
}) => {
  const CutomHeading = headingLevel || "h1";

  return (
    <section className="bg-white border border-shades-9 rounded-xl p-6 w-full space-y-2 h-full flex flex-col justify-between">
      <div className="flex items-center justify-between relative">
        <CutomHeading className="font-semibold text-lg">{title}</CutomHeading>
        {dropdown}
      </div>
      <div>{children}</div>
    </section>
  );
};

export default DashSection;
