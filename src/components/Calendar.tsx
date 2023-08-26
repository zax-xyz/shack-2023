import Datepicker from "~/components/Datepicker";
import { type ReactNode, type ComponentProps } from "react";
import dayjs, { type Dayjs } from "dayjs";

type Props = ComponentProps<typeof Datepicker> & {
  view: "month" | "week";
};

type Items = Parameters<
  Exclude<ComponentProps<typeof Datepicker.Items>["children"], ReactNode>
>[0]["items"];

const filterItems = (
  items: Items,
  view: Props["view"],
  today: Dayjs
): Items => {
  switch (view) {
    case "month":
      return items;
    case "week":
      return items.filter(
        (item) => item.isHeader || today.isSame(item.value, "week")
      );
  }
};

const Calendar = ({ view, ...props }: Props) => {
  const today = dayjs();

  return (
    <Datepicker {...props}>
      <Datepicker.Picker>
        <Datepicker.Items>
          {({ items }) =>
            filterItems(items, view, today).map((item) => (
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

export default Calendar;
