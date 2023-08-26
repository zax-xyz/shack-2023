import React from "react";
import { useState } from "react";

const moodForm = () => {
  const mockActivities = [
    "scrolling through tiktok",
    "doing algos assignment",
    "seeing friends",
  ];

  const [selectedMood, setSelectedMood] = useState(undefined);
  const [selectedActivities, setSelectedActivities] = useState([]);

  const [activityAndMood, setActivityAndMood] = useState([]);
  //   Example of activityAndMood
  //   User selects "very happy" as mood and then ticks the following 2 tasks:
  //   [
  //     { task: "scrolling through tiktok", mood: 2 },
  //     { task: "seeing friends", mood: 2 },
  //   ];

  const onMoodFaceClick = (mood) => {
    setSelectedMood(mood.target.id);
    mood.target.style.color = "black";
    console.log(selectedMood);
  };

  const handleSelectedActivity = (e) => {
    // Add to array of selected activities if checked
    if (e.target.checked == true) {
      selectedActivities.push(e.target.id);
      setSelectedActivities(selectedActivities);
    } else {
      // Remove from array of selected activities if unchecked
      const newSelectedActivities = selectedActivities.filter((activity) => {
        return activity !== e.target.id;
      });
      setSelectedActivities(newSelectedActivities);
    }
    console.log(selectedActivities);
  };

  return (
    <div className="p-10">
      <div id="mood">
        <div>How was your day?</div>
        <div id="faces" className="flex justify-between">
          <button
            id="-2"
            onClick={onMoodFaceClick}
            className={"rounded-sm bg-white p-1 outline"}
          >
            😭
          </button>
          <button
            id="-1"
            onClick={onMoodFaceClick}
            className="rounded-sm p-1 outline"
          >
            🙁
          </button>
          <button
            id="0"
            onClick={onMoodFaceClick}
            className="rounded-sm p-1 outline"
          >
            😐
          </button>
          <button
            id="1"
            onClick={onMoodFaceClick}
            className="rounded-sm p-1 outline"
          >
            🙂
          </button>

          <button
            id="2"
            onClick={onMoodFaceClick}
            className="rounded-sm p-1 outline"
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
