"use client";

import * as dayjs from "dayjs";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../select";

const currentYear = dayjs().get("year");
export interface CalendarYearProps {
  fromYear?: number;
  toYear?: number;
  month?: Date;
  onMonthChange: (value: Date) => void;
}
export const CalendarYear = ({
  fromYear = currentYear - 100,
  toYear = currentYear + 30,
  month,
  onMonthChange,
}: CalendarYearProps) => {
  const displayYear = (() => {
    const years = [];
    for (let i = fromYear; i <= toYear; i++) years.push(i);
    return years;
  })();
  return (
    <Select
      defaultValue={dayjs(month).get("year").toString()}
      onValueChange={(value: string) =>
        onMonthChange(dayjs(month).set("year", Number(value)).toDate())
      }>
      <SelectTrigger className="w-fit h-8">
        <SelectValue className="font-semibold" />
      </SelectTrigger>
      <SelectContent>
        {displayYear.map(year => (
          <SelectItem key={year} value={year.toString()}>
            {year}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
