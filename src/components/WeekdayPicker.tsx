import { Datepicker } from "@aliakbarazizi/headless-datepicker";
import { useState, type ComponentProps } from "react";
import tw, { styled } from "twin.macro";
import dayjs from "dayjs";

const DatepickerItem = styled(Datepicker.Item, {
  ...tw`
    h-8 w-8 py-1.5
    flex items-center justify-center
    text-sm leading-none font-medium
    rounded-full select-none transition
  `,

  variants: {
    isHeader: {
      true: tw`cursor-default`,
      false: tw`hover:bg-gray-700`,
    },
    disabled: {
      true: tw`text-gray-500`,
    },
    isSelected: {
      true: tw`bg-gray-600 text-gray-200`,
    },
    isToday: {
      true: tw`border border-gray-500`,
    },
  },

  compoundVariants: [
    {
      isHeader: false,
      disabled: false,
      css: tw`hover:text-white`,
    },
  ],
});

interface WeekdayPickerProps {
  datePicked: any;
  setDatePicked: (date: any) => void;
}

const WeekdayPicker: React.FC<WeekdayPickerProps> = ({ datePicked, setDatePicked }) => {
  const today = dayjs();

  return (
    <Datepicker onChange={setDatePicked} value={datePicked}>
      <Datepicker.Picker
        defaultType="day"
        tw="p-4 max-w-xl mx-auto bg-white rounded-md shadow"
        alwaysOpen
      >
        <Datepicker.Items tw="grid w-full auto-rows-max gap-4 overflow-y-auto scroll-smooth grid-cols-7 justify-items-center">
          {({ items }) =>
            items
              .filter(
                (item) => item.isHeader || today.isSame(item.value, "week")
              )
              .map((item) => (
                <DatepickerItem
                  key={item.key}
                  item={item}
                  isHeader={item.isHeader}
                  disabled={item.disabled}
                  isSelected={item.isSelected}
                  isToday={item.isToday}
                >
                  {item.isHeader ? item.text.substring(0, 2) : item.text}
                </DatepickerItem>
              ))
          }
        </Datepicker.Items>
      </Datepicker.Picker>
    </Datepicker>
  );
};

export default WeekdayPicker;
