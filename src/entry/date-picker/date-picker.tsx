"use client";

import { CalendarIcon, CrossCircledIcon } from "@radix-ui/react-icons";
import * as dayjs from "dayjs";
import * as LocalizedFormat from "dayjs/plugin/localizedFormat";
import { useEffect, useState } from "react";

import { Popover, PopoverContent, PopoverTrigger } from "../../display/popover";
import { cn } from "../../utils";
import { Button } from "../button";
import { Calendar } from "../calendar";

dayjs.extend(LocalizedFormat);

export interface DatePickerProps {
  className?: string;
  clearable?: boolean;
  placeholder?: string;
  date?: Date;
  onChange?: (date: Date) => void;
}

export function DatePicker({
  className,
  clearable = false,
  date,
  onChange,
  placeholder,
}: DatePickerProps) {
  const [pickerDate, setPickerDate] = useState<Date>(date);

  useEffect(() => {
    onChange && onChange(pickerDate);
  }, [pickerDate]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "group w-full justify-start text-left font-normal",
            !pickerDate && "text-muted-foreground",
            className
          )}>
          <CalendarIcon className="mr-2 h-4 w-4" />
          {pickerDate
            ? dayjs(pickerDate).format("LL")
            : placeholder && <span>{placeholder}</span>}
          {clearable && pickerDate && (
            <CrossCircledIcon
              className="hidden ml-auto group-hover:block hover:text-primary-500"
              onClick={() => setPickerDate(undefined)}
            />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={pickerDate}
          onSelect={setPickerDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
