import dayjs, { type Dayjs } from "dayjs";

export const formatDate = (date: Date | Dayjs) => {
  if (date instanceof Date) {
    date = dayjs(date);
  }

  return date.format("ddd DD MMM YYYY");
};
