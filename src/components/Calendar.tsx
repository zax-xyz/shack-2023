import Datepicker from "~/components/Datepicker";
import {
  type ReactNode,
  type ComponentProps,
  type Dispatch,
  type SetStateAction,
} from "react";
import dayjs, { type Dayjs } from "dayjs";
import tw, { type TwStyle } from "twin.macro";

type View = "month" | "week";

type Items = Parameters<
  Exclude<ComponentProps<typeof Datepicker.Items>["children"], ReactNode>
>[0]["items"];

const filterItems = (items: Items, view: View, today: Dayjs): Items => {
  switch (view) {
    case "month":
      return items;
    case "week":
      return items.filter(
        (item) => item.isHeader || today.isSame(item.value, "week")
      );
  }
};

export type Level = 1 | 2 | 3 | 4 | 5;
export type Levels = Record<string, Level>;

const levelColors = [
  tw`bg-red-200 text-red-950 hover:bg-red-300`,
  tw`bg-orange-200 text-orange-950 hover:bg-orange-300`,
  tw`bg-yellow-200 text-yellow-950 hover:bg-yellow-300`,
  tw`bg-lime-200 text-lime-950 hover:bg-lime-300`,
  tw`bg-green-200 text-green-950 hover:bg-green-300`,
];

const getLevelColor = (
  date: number | Date,
  levels?: Levels
): TwStyle | null => {
  if (levels === undefined) {
    return null;
  }

  const level = levels[date.toString()];
  if (level === undefined) {
    return null;
  }

  return levelColors[level - 1]!;
};

type Props = ComponentProps<typeof Datepicker> & {
  view: View;
  levels?: Levels;
  datePicked: Date | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setDatePicked: Dispatch<SetStateAction<any>>;
};

const Calendar = ({
  view,
  levels,
  datePicked,
  setDatePicked,
  ...props
}: Props) => {
  const today = dayjs();

  return (
    <Datepicker value={datePicked} onChange={setDatePicked} {...props}>
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
                isColored={levels && item.value.toString() in levels}
                css={getLevelColor(item.value, levels) ?? undefined}
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
