import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import type { DateRangeType } from "react-tailwindcss-datepicker/dist/types";

import { IDatePickerProps } from "./types";

const DEFAULT_DATEPICKER_PROP = "2022-01-01";

const DatePicker: React.FC<IDatePickerProps> = ({
  startFromDate = DEFAULT_DATEPICKER_PROP,
}) => {
  const [value, setValue] = useState<DateRangeType>({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue: any) => {
    setValue(newValue);
  };

  return (
    <div className="max-w-[140px]">
      <Datepicker
        value={value}
        useRange={false}
        startFrom={new Date(startFromDate)}
        onChange={handleValueChange}
        asSingle
      />
    </div>
  );
};

export default DatePicker;
