"use client";

import { CalendarIcon } from "@radix-ui/react-icons";
import * as dayjs from "dayjs";
import * as LocalizedFormat from "dayjs/plugin/localizedFormat";
import { useEffect, useState } from "react";
import { DateRange } from "react-day-picker";

import { Popover, PopoverContent, PopoverTrigger } from "../../display/popover";
import { cn } from "../../utils";
import { Button } from "../button";
import { Calendar } from "../calendar";

dayjs.extend(LocalizedFormat);

export { DateRange } from "react-day-picker";
export interface DateRangePickerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  date?: DateRange;
  placeholder?: string;
  onChange: (date: DateRange) => void;
}

export function DateRangePicker({
  className,
  date,
  placeholder = "Pick a date",
  onChange,
  ...props
}: DateRangePickerProps) {
  const [pickerDate, setPickerDate] = useState<DateRange | undefined>({
    from: date?.from,
    to: date?.to,
  });

  return (
    <div className={cn("grid gap-2", className)} {...props}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !pickerDate && "text-muted-foreground"
            )}>
            <CalendarIcon className="mr-2 h-4 w-4" />
            {pickerDate?.from ? (
              pickerDate.to ? (
                <>
                  {dayjs(pickerDate.from).format("LL")} -{" "}
                  {dayjs(pickerDate.to).format("LL")}
                </>
              ) : (
                dayjs(pickerDate.from).format("LL")
              )
            ) : (
              <span>{placeholder}</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={pickerDate?.from}
            selected={pickerDate}
            onSelect={setPickerDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
