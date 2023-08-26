import dayjs, { type Dayjs } from "dayjs";

export const formatDate = (date: Date | Dayjs) => {
  if (date instanceof Date) {
    date = dayjs(date);
  }

  return date.format("ddd DD MMM YYYY");
};

export const formatTime = (
  date: Date | Dayjs,
  { seconds = false }: { seconds?: boolean } = {}
) => {
  if (date instanceof Date) {
    date = dayjs(date);
  }

  return date.format("HH:mm" + (seconds ? ":SS" : ""));
};
