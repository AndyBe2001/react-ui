"use client";

import * as dayjs from "dayjs";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../select";

export interface CalendarMonthProps {
  month?: Date;
  onMonthChange: (value: Date) => void;
}
export const CalendarMonth = ({ month, onMonthChange }: CalendarMonthProps) => {
  return (
    <Select
      defaultValue={dayjs(month).get("month").toString()}
      onValueChange={(value: string) =>
        onMonthChange(dayjs(month).set("month", Number(value)).toDate())
      }>
      <SelectTrigger className="w-fit h-8">
        <SelectValue className="font-semibold" />
      </SelectTrigger>
      <SelectContent>
        {new Array(12).fill(null).map((_, i) => (
          <SelectItem key={i} value={i.toString()}>
            {dayjs().set("month", i).format("MMMM")}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
