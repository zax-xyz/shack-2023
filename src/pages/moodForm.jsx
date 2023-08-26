import React, { useEffect } from "react";
import { useState } from "react";
import { useAtom } from "jotai";
import { datesInfoAtom } from ".";
import Link from "next/link";
import { useRouter } from "next/router";

const moodForm = () => {
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
    if (!dateInfo) return;
    setSelectedMood(dateInfo[0].mood);
    setMessage(dateInfo[0].message);
    setActivityAndMood(dateInfo)
  }, [dateInfo])

  useEffect(() => {
    const { datePicked } = router.query;
    initDateInfo(new Date(datePicked));
  }, [])


  const initDateInfo = (datePicked) => {
    for (const dateInfo of datesInfo) {
      const d1 = new Date(Object.keys(dateInfo)[0]);
      if (isEqualDate(d1, datePicked)) {
        setDateInfo(Object.values(dateInfo)[0]);
        return;
      }
    }
    setDateInfo(null);
  }

  // If given date is equal to 'datePicked'
  const isEqualDate = (d1, datePicked) => {
   return d1.getDate() === datePicked.getDate() &&
          d1.getMonth() === datePicked.getMonth() &&
          d1.getFullYear() === datePicked.getFullYear();
  }


  const onMoodFaceClick = (mood) => {
    setSelectedMood(mood.target.id);
  };

  const handleSelectedActivity = (e) => {
    console.log('clciked')
    // Add to array of selected activities if checked
    if (e.target.checked == true) {
      console.log('clciked 12')
      const newActivityAndMoodObj = {
        activity: e.target.id,
        mood: selectedMood,
      };
      activityAndMood.push(newActivityAndMoodObj);
      setActivityAndMood(activityAndMood);
    } else {
      console.log('ass')
      // Remove from array of selected activities if unchecked
      const newActivityAndMoodObj = activityAndMood.filter((obj) => {
        return obj["activity"] !== e.target.id;
      });
      setActivityAndMood(newActivityAndMoodObj);
    }
  };

  useEffect(() => {
    console.log(activityAndMood)
  }, [activityAndMood])

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
    setActivityAndMood(activityAndMood);
  };

  const handleCheckedbox = (act) => {
    return activityAndMood.map(elem => elem.activity).includes(act);
  }

  return (
    <div className="p-10">
      <div id="mood">
        <div className="font-bold">How was your day?</div>
        <div id="faces" className="flex justify-between">
          <button
            id="-2"
            onClick={onMoodFaceClick}
            className={`rounded-sm p-1 outline ${
              selectedMood == -2 ? "bg-purple-300" : ""
            }`}
          >
            😭
          </button>
          <button
            id="-1"
            onClick={onMoodFaceClick}
            className={`rounded-sm p-1 outline ${
              selectedMood == -1 ? "bg-purple-300" : ""
            }`}
          >
            🙁
          </button>
          <button
            id="0"
            onClick={onMoodFaceClick}
            className={`rounded-sm p-1 outline ${
              selectedMood == 0 ? "bg-purple-300" : ""
            }`}
          >
            😐
          </button>
          <button
            id="1"
            onClick={onMoodFaceClick}
            className={`rounded-sm p-1 outline ${
              selectedMood == 1 ? "bg-purple-300" : ""
            }`}
          >
            🙂
          </button>

          <button
            id="2"
            onClick={onMoodFaceClick}
            className={`rounded-sm p-1 outline ${
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
              checked={handleCheckedbox(activity)}
            />
            <div key={index}>{activity}</div>
          </div>
        ))}
      </div>
      <br></br>
      <div id="affirmations">
        <div className="font-bold">
          What's a message you want to leave for yourself in 24 hours?
        </div>
        <input value={message} id="affirmation" type="text" onChange={handleMessage}></input>
        <br></br>
        <div
          id="affirmation-buttons"
          className="flex justify-center space-x-8 py-8"
        >
          <Link href="/home" className="rounded-sm p-2 outline">
            Go Back
          </Link>

          <button className="rounded-sm p-2 outline" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default moodForm;
