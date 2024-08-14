"use client";

import { CalendarIcon, CrossCircledIcon } from "@radix-ui/react-icons";
import * as dayjs from "dayjs";
import * as LocalizedFormat from "dayjs/plugin/localizedFormat";
import { useEffect, useState } from "react";

import { Button, Calendar } from "../";
import { Separator } from "../../display";
import { Popover, PopoverContent, PopoverTrigger } from "../../display/popover";
import { ScrollArea } from "../../navigation";
import { cn } from "../../utils";

dayjs.extend(LocalizedFormat);

export interface DatetimePickerProps {
  className?: string;
  clearable?: boolean;
  placeholder?: string;
  date?: Date;
  onChange?: (date: Date) => void;
}

export const DatetimePicker = ({
  className,
  clearable = false,
  date,
  onChange,
  placeholder,
}: DatetimePickerProps) => {
  const [pickerDatetime, setPickerDatetime] = useState<Date>(date);

  useEffect(() => {
    onChange && onChange(pickerDatetime);
  }, [pickerDatetime]);

  const handleCalendarSelect = (date: Date) => {
    const selectedDate = dayjs(date);
    setPickerDatetime(
      dayjs(pickerDatetime)
        .set("date", selectedDate.get("date"))
        .set("month", selectedDate.get("month"))
        .set("year", selectedDate.get("year"))
        .toDate()
    );
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "group w-full justify-start text-left font-normal hover:bg-white",
            !pickerDatetime && "text-muted-foreground",
            className
          )}>
          <CalendarIcon className="mr-2 h-4 w-4" />
          {pickerDatetime
            ? dayjs(pickerDatetime).format("LL LTS")
            : placeholder && <span>{placeholder}</span>}
          {clearable && pickerDatetime && (
            <CrossCircledIcon
              className="hidden ml-auto group-hover:block hover:text-primary-500"
              onClick={() => setPickerDatetime(undefined)}
            />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 flex" align="start">
        <Calendar
          mode="single"
          selected={pickerDatetime}
          onSelect={handleCalendarSelect}
          initialFocus
        />
        <Separator orientation="vertical" className="h-64 my-auto" />
        <div className="p-3">
          <h5 className="text-sm font-medium pt-1 text-center h-6">
            {pickerDatetime
              ? dayjs(pickerDatetime).format("HH:mm:ss")
              : "--:--:--"}
          </h5>
          <ul className="mt-4 grid grid-cols-3 gap-x-1">
            <ScrollArea className="h-[220px] w-10">
              <li className="grid">
                {Array.apply(null, Array(24)).map((_, index) => (
                  <Button
                    variant={
                      dayjs(pickerDatetime).get("hour") === index
                        ? "default"
                        : "ghost"
                    }
                    className="size-8 font-normal"
                    onClick={() =>
                      setPickerDatetime(
                        dayjs(pickerDatetime).set("hour", index).toDate()
                      )
                    }>
                    {index}
                  </Button>
                ))}
              </li>
            </ScrollArea>
            <ScrollArea className="h-[220px] w-10">
              <li className="grid">
                {Array.apply(null, Array(60)).map(
                  (_: unknown, index: number) => (
                    <Button
                      variant={
                        dayjs(pickerDatetime).get("minute") === index
                          ? "default"
                          : "ghost"
                      }
                      className="size-8 font-normal"
                      onClick={() =>
                        setPickerDatetime(
                          dayjs(pickerDatetime).set("minute", index).toDate()
                        )
                      }>
                      {index}
                    </Button>
                  )
                )}
              </li>
            </ScrollArea>
            <ScrollArea className="h-[220px] w-10">
              <li className="grid">
                {Array.apply(null, Array(60)).map((_, index) => (
                  <Button
                    variant={
                      dayjs(pickerDatetime).get("second") === index
                        ? "default"
                        : "ghost"
                    }
                    className="size-8 font-normal"
                    onClick={() =>
                      setPickerDatetime(
                        dayjs(pickerDatetime).set("second", index).toDate()
                      )
                    }>
                    {index}
                  </Button>
                ))}
              </li>
            </ScrollArea>
          </ul>
        </div>
      </PopoverContent>
    </Popover>
  );
};
