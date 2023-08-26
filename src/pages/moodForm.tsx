/* eslint-disable */
// @ts-nocheck
import React, { useEffect } from "react";
import { useState } from "react";
import { useAtom } from "jotai";
import datesInfoAtom from "~/atoms/datesInfoAtom";
import Link from "next/link";
import { useRouter } from "next/router";
import Card from "~/components/Card";
import tw, { styled } from "twin.macro";
import Checkbox from "~/components/Checkbox";
import Input from "~/components/Input";
import { XMarkIcon } from "@heroicons/react/24/solid";

const moods = ["😭", "🙁", "😐", "🙂", "😁"];

const MoodForm = () => {
  const mockActivities = [
    "scrolling through tiktok",
    "doing algos assignment",
    "seeing friends",
  ];

  const [datesInfo, setDatesInfo] = useAtom(datesInfoAtom);
  const [dateInfo, setDateInfo] = useState();

  const [selectedMood, setSelectedMood] = useState(undefined);
  const [message, setMessage] = useState("");

  const router = useRouter();

  const [activityAndMood, setActivityAndMood] = useState([]);
  //   Example of activityAndMood
  //   User selects "very happy" as mood and then ticks the following 2 tasks:
  //   [
  //     { activity: "scrolling through tiktok", mood: 2, message: "i am kenough" },
  //     { activity: "seeing friends", mood: 2, message: "i am kenough"},
  //   ];
  useEffect(() => {
    const { datePicked } = router.query;
    initDateInfo(new Date(datePicked));
  }, []);

  useEffect(() => {
    if (!dateInfo) return;
    setSelectedMood(dateInfo[0].mood);
    setMessage(dateInfo[0].message);
    setActivityAndMood(dateInfo);
  }, [dateInfo]);

  const initDateInfo = (datePicked) => {
    for (const dateInfo of datesInfo) {
      const d1 = new Date(Object.keys(dateInfo)[0]);
      if (isEqualDate(d1, datePicked)) {
        setDateInfo(Object.values(dateInfo)[0]);
        return;
      }
    }
    setDateInfo(null);
  };

  // If given date is equal to 'datePicked'
  const isEqualDate = (d1, datePicked) => {
    const d2 = new Date(datePicked);
    return (
      d1.getDate() === d2.getDate() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getFullYear() === d2.getFullYear()
    );
  };

  const onMoodFaceClick = (mood) => {
    setSelectedMood(mood.currentTarget.id);
  };

  const handleSelectedActivity = (e) => {
    // Add to array of selected activities if checked
    if (e.target.checked == true) {
      const copy = [...activityAndMood];
      const newActivityAndMoodObj = {
        activity: e.target.id,
        mood: selectedMood,
      };
      copy.push(newActivityAndMoodObj);
      setActivityAndMood(copy);
    } else {
      // Remove from array of selected activities if unchecked
      const newActivityAndMoodObj = activityAndMood.filter((obj) => {
        return obj["activity"] !== e.target.id;
      });
      setActivityAndMood(newActivityAndMoodObj);
    }
  };

  useEffect(() => {}, [activityAndMood]);

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    // Add message to all activityAndMood objects
    activityAndMood.forEach((obj) => {
      obj["message"] = message;
    });

    // Add mood to all activityAndMood objects
    activityAndMood.forEach((obj) => {
      obj["mood"] = selectedMood;
    });
    // setActivityAndMood(activityAndMood);
    updateDatesInfo();
  };

  const updateDatesInfo = () => {
    const { datePicked } = router.query;
    const i = findIndexDatesInfo(datePicked);

    const copy = [...datesInfo];
    if (i === -1) {
      // Add new entry to datesInfo
      copy.push({ [datePicked]: activityAndMood });
    } else {
      copy[i] = { [datePicked]: activityAndMood };
    }
    setDatesInfo(copy);
  };

  const findIndexDatesInfo = (date) => {
    for (const i in datesInfo) {
      const dateInfo = datesInfo[i];
      const d1 = new Date(Object.keys(dateInfo)[0]);
      if (isEqualDate(d1, date)) {
        return i;
      }
    }
    return -1;
  };
  console.log(selectedMood);

  const handleCheckedbox = (act) => {
    return activityAndMood.map((elem) => elem.activity).includes(act);
  };

  return (
    <div tw="flex flex-col py-4 px-4">
      <div className="self-end mb-2">
        <Link
            href="/home"
            tw="flex items-center justify-center rounded-full w-8 h-8 transition bg-white border border-violet-300 text-gray-900 shadow hover:bg-violet-50"
          >
            <XMarkIcon tw="h-4" />
          </Link>
      </div>

      <div className="mb-8">
        <h1 className="text-indigo-500 text-2xl mb-2">How was your day?</h1>
        <div id="faces" className="flex">
          {moods.map((mood, i) => (
            <MoodButton
              id={i - 2}
              onClick={onMoodFaceClick}
              selected={Number(selectedMood) == i - 2}
            >
              {mood}
            </MoodButton>
          ))}
        </div>
      </div>

      <div id="activities" className="mb-5">
        <h2 tw="text-lg text-indigo-500">
          Which of your tasks made you feel this mood?
        </h2>
        {mockActivities.map((activity, index) => (
          <label key={index} className="flex items-center gap-2 p-1 my-3 pl-4">
            <Checkbox
              id={activity}
              onChange={handleSelectedActivity}
              checked={handleCheckedbox(activity)}
            />
            <span>{activity}</span>
          </label>
        ))}
      </div>

      <div id="affirmations" className="mb-10">
        <label className="flex flex-col gap-2 text-lg text-indigo-500">
          What message do you want to leave for yourself in 24 hours?
          <Input
            value={message}
            tw="w-full"
            id="affirmation"
            type="text"
            onChange={handleMessage}
            className="text-black"
          ></Input>
        </label>
      </div>

      <div id="affirmation-buttons" className="flex justify-center gap-5">
        <Link
          href="/home"
          className="rounded bg-gradient-to-r from-indigo-600/70 to-purple-600/70 px-20 py-3 text-white shadow transition hover:bg-violet-700"
          onClick={handleSubmit}
        >
          Submit
        </Link>
      </div>
    </div>
  );
};

const MoodButton = ({ children, selected, ...props }) => (
  <button className="bg-white rounded-md group flex-1 p-0.5" {...props}>
    <MoodButtonContent selected={selected}>{children}</MoodButtonContent>
  </button>
);
const MoodButtonContent = styled("div", {
  ...tw`rounded p-4 flex items-center justify-center text-xl transition hover:bg-purple-100`,

  variants: {
    selected: {
      true: tw`bg-purple-200 hover:bg-purple-300`,
    },
  },
});

export default MoodForm;
