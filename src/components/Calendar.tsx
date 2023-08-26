import Datepicker from "~/components/Datepicker";
import { type ReactNode, type ComponentProps } from "react";
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
  tw`bg-red-400 text-red-950 hover:bg-red-500`,
  tw`bg-orange-400 text-orange-950 hover:bg-orange-500`,
  tw`bg-yellow-400 text-yellow-950 hover:bg-yellow-500`,
  tw`bg-lime-400 text-lime-950 hover:bg-lime-500`,
  tw`bg-green-400 text-green-950 hover:bg-green-500`,
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
};

const Calendar = ({ view, levels, ...props }: Props) => {
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
