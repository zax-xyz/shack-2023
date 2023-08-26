import React, { useEffect } from "react";
import { useState } from "react";
import { useAtom } from "jotai";
import { datesInfoAtom } from ".";
import { useSearchParams } from 'next/navigation';

const moodForm = () => {
  const mockActivities = [
    "scrolling through tiktok",
    "doing algos assignment",
    "seeing friends",
  ];

  const [selectedMood, setSelectedMood] = useState(undefined);
  const [datesInfo, setDatesInfo] = useAtom(datesInfoAtom);
  const searchParams = useSearchParams();
  const date = new Date(searchParams.get('datePicked'));

  const [activityAndMood, setActivityAndMood] = useState([]);
  //   Example of activityAndMood
  //   User selects "very happy" as mood and then ticks the following 2 tasks:
  //   [
  //     { activity: "scrolling through tiktok", mood: 2 },
  //     { activity: "seeing friends", mood: 2 },
  //   ];

  useEffect(() => {
    console.log('aaa', findDateInfo())
  }, [])

  // Finds date object in datesInfo that matches with 'date'
  const findDateInfo = () => {
    for (const i in datesInfo) {
      const dateInfo = datesInfo[i];
      console.log(i, dateInfo)
      const d1 = new Date(Object.keys(dateInfo)[0]);
      if (isEqualDate(d1)) {
        return i; // TODO: can change this to return whatever u need, currently returns the index of datesInfo with corresponding dateInfo Object
      }
    }
  }

  // If given date is equal to 'datePicked'
  const isEqualDate = (d1) => {
   return d1.getDate() === date.getDate() &&
          d1.getMonth() === date.getMonth() &&
          d1.getFullYear() === date.getFullYear();
  }

  const onMoodFaceClick = (mood) => {
    setSelectedMood(mood.target.id);

    console.log(selectedMood);
  };

  const handleSelectedActivity = (e) => {
    // Add to array of selected activities if checked
    if (e.target.checked == true) {
      const newActivityAndMoodObj = {
        activity: e.target.id,
        mood: selectedMood,
      };
      activityAndMood.push(newActivityAndMoodObj);
      setActivityAndMood(activityAndMood);
    } else {
      // Remove from array of selected activities if unchecked
      const newActivityAndMoodObj = activityAndMood.filter((obj) => {
        return obj["activity"] !== e.target.id;
      });
      setActivityAndMood(newActivityAndMoodObj);
    }
    console.log(activityAndMood);
  };

  return (
    <div className="p-10">
      <div id="mood">
        <div>How was your day?</div>
        <div id="faces" className="flex justify-between">
          <button
            id="-2"
            onClick={onMoodFaceClick}
            className={`rounded-sm bg-white p-1 outline ${
              selectedMood == -2 ? "bg-purple-300" : ""
            }`}
          >
            😭
          </button>
          <button
            id="-1"
            onClick={onMoodFaceClick}
            className={`rounded-sm bg-white p-1 outline ${
              selectedMood == -1 ? "bg-purple-300" : ""
            }`}
          >
            🙁
          </button>
          <button
            id="0"
            onClick={onMoodFaceClick}
            className={`rounded-sm bg-white p-1 outline ${
              selectedMood == 0 ? "bg-purple-300" : ""
            }`}
          >
            😐
          </button>
          <button
            id="1"
            onClick={onMoodFaceClick}
            className={`rounded-sm bg-white p-1 outline ${
              selectedMood == 1 ? "bg-purple-300" : ""
            }`}
          >
            🙂
          </button>

          <button
            id="2"
            onClick={onMoodFaceClick}
            className={`rounded-sm bg-white p-1 outline ${
              selectedMood == 2 ? "bg-purple-300" : ""
            }`}
          >
            😁
          </button>
        </div>
      </div>
      <br></br>
      <div id="activities">
        {mockActivities.map((activity, index) => (
          <div key={index} className="flex space-x-6 p-2">
            <input
              type="checkbox"
              id={activity}
              onChange={handleSelectedActivity}
            />
            <div key={index}>{activity}</div>
          </div>
        ))}
      </div>
      <br></br>
      <div id="affirmations">
        <div>What's your mantra/word of affirmation for tomorrow?</div>
        <input id="affirmation" type="text"></input>
        <br></br>
        <div id="affirmation-buttons" className="py-4">
          <button className="rounded-sm p-2 outline">Finish Later</button>
          <button className="rounded-sm p-2 outline">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default moodForm;
