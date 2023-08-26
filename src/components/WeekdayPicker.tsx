import Datepicker from "~/components/Datepicker";
import { type ComponentProps } from "react";
import dayjs from "dayjs";

const WeekdayPicker = (props: ComponentProps<typeof Datepicker>) => {
  const today = dayjs();

  return (
    <Datepicker {...props}>
      <Datepicker.Picker>
        <Datepicker.Items>
          {({ items }) =>
            items
              .filter(
                (item) => item.isHeader || today.isSame(item.value, "week")
              )
              .map((item) => (
                <Datepicker.Item
                  key={item.key}
                  item={item}
                  isHeader={item.isHeader}
                  disabled={item.disabled}
                  isSelected={item.isSelected}
                  isToday={item.isToday}
                >
                  {item.isHeader ? item.text.substring(0, 2) : item.text}
                </Datepicker.Item>
              ))
          }
        </Datepicker.Items>
      </Datepicker.Picker>
    </Datepicker>
  );
};

export default WeekdayPicker;
