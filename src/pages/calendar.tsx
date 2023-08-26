import dayjs, { type Dayjs } from "dayjs";
import { type Dispatch, type SetStateAction, useEffect, useState } from "react";
import tw, { styled } from "twin.macro";
import Calendar, { type Level } from "~/components/Calendar";
import Card from "~/components/Card";
import { formatDate, formatTime } from "~/utils/dates";

const beginning = dayjs().startOf("month").add(9, "day");
const levels = Object.fromEntries(
  Array(10)
    .fill(null)
    .map(
      (_, i) =>
        [
          beginning
            .date(beginning.date() + i)
            .toDate()
            .toString(),
          1 + Math.floor(Math.random() * 5),
        ] as [string, Level]
    )
);

type Event = {
  id: number;
  name: string;
  startDate: Dayjs;
  endDate: Dayjs;
  location?: string;
};

const events: Event[] = [
  {
    id: 0,
    name: "Epic Event 😎",
    startDate: dayjs().hour(15).minute(0),
    endDate: dayjs().hour(17).minute(0),
    location: "University of Sydney",
  },
  {
    id: 1,
    name: "Doomed Event 💀",
    startDate: dayjs().hour(17).minute(0),
    endDate: dayjs().hour(19).minute(0),
    location: "University of New South Wales",
  },
  {
    id: 2,
    name: "Extra Doomed Event 💀💀💀",
    startDate: dayjs().hour(19).minute(0),
    endDate: dayjs().hour(21).minute(0),
    location: "University of New South Wales",
  },
];

const Day = () => {
  const [date, setDate] = useState<Date | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<Event>();

  useEffect(() => {
    console.log(date);
  }, [date]);

  return (
    <>
      <div className="px-3">
        <h1 tw="text-3xl mt-5 text-indigo-500">Monthly View</h1>
        <p>Chosen date: {date ? formatDate(date) : "No date chosen"}</p>
      </div>

      <div tw="max-w-4xl mx-auto my-4 flex flex-col items-center gap-4 md:flex-row">
        <Calendar
          view="month"
          levels={levels}
          tw="w-auto shrink-0"
          datePicked={date}
          setDatePicked={setDate}
        />

        <EventList
          events={events}
          selectedEvent={selectedEvent}
          setSelectedEvent={setSelectedEvent}
        />
      </div>

      {selectedEvent && <EventView event={selectedEvent} />}
    </>
  );
};

export default Day;

const EventList = ({
  events,
  selectedEvent,
  setSelectedEvent,
}: {
  events: Event[];
  selectedEvent?: Event;
  setSelectedEvent: Dispatch<SetStateAction<Event | undefined>>;
}) => (
  <Card header="Events" tw="mt-8 m-3
   max-w-xl md:max-w-none">
    <ul tw="flex flex-col gap-1">
      {events.map((event) => (
        <li key={event.id}>
          <EventListButton
            selected={event === selectedEvent}
            onClick={() => setSelectedEvent(event)}
          >
            <div tw="flex items-center gap-2">
              <h3 tw="font-medium shrink-0">{event.name}</h3>
              <span tw="text-gray-500">·</span>
              <span tw="text-sm font-light text-gray-500 truncate">
                {event.location}
              </span>
            </div>
            <div tw="text-sm font-light text-gray-800 hover:cursor-pointer">
              {formatTime(event.startDate)} - {formatTime(event.endDate)}
            </div>
          </EventListButton>
        </li>
      ))}
    </ul>
  </Card>
);

const EventListButton = styled("button", {
  ...tw`px-2 py-1.5 w-full text-left rounded transition hover:bg-gray-50`,

  variants: {
    selected: {
      true: tw`bg-gray-100 hover:bg-gray-200`,
    },
  },
});

const EventView = ({ event }: { event: Event }) => (
  <Card
    header="Event"
    tw="max-w-2xl mx-3"
    bodyProps={{ css: tw`flex flex-col gap-2` }}
  >
    <h2 tw="text-xl font-medium">{event.name}</h2>
    <div>
      <EventDetail name="Start time" value={formatTime(event.startDate)} />
      <EventDetail name="End time" value={formatTime(event.endDate)} />
      {event.location !== undefined && (
        <EventDetail name="Location" value={event.location} />
      )}
    </div>
  </Card>
);

const EventDetail = ({ name, value }: { name: string; value: string }) => (
  <p>
    <strong>{name}:</strong> {value}
  </p>
);
