import React, { useEffect, useRef, useState } from "react";

const CountDownTimer = () => {
  const [isTimerStart, setTimerStart] = useState(false);
  const timeRef = useRef(null);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    // console.log({ id, value });
    if (id === "hours") setHours(value);
    else if (id === "minutes") setMinutes(value);
    else setSeconds(value);
  };

  const startTimer = () => {
    // logic here ....
    // console.log({ hours, minutes, seconds });
    if (
      parseInt(hours) === 0 &&
      parseInt(minutes) === 0 &&
      parseInt(seconds) === 0
    ) {
      console.log("stop interval");
      clearInterval(timeRef.current);
    } else if (parseInt(seconds) > 0) {
      setSeconds((pre) => {
        if (pre <= 10) return `0${pre - 1}`;
        else return pre - 1;
      });
    } else if (parseInt(seconds) === 0 && parseInt(minutes) > 0) {
      setMinutes((pre) => {
        if (pre <= 10) return `0${pre - 1}`;
        else return pre - 1;
      });
      setSeconds(59);
    } else if (parseInt(minutes) === 0 && parseInt(hours) > 0) {
      setHours((pre) => {
        if (pre <= 10) return `0${pre - 1}`;
        else return pre - 1;
      });
      setMinutes(60);
    }
  };

  const resetTime = () => {
    setTimerStart(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  useEffect(() => {
    if (isTimerStart) {
      timeRef.current = setInterval(() => {
        startTimer();
      }, 1000);
    }

    return () => clearInterval(timeRef.current);
  }, [isTimerStart, hours, minutes, seconds]);

  return (
    <div className="bg-yellow-500 h-[93.5vh] grid place-content-center">
      <div className="bg-white w-[40rem] p-5">
        <h1 className="text-center my-3">Count Down Timer</h1>

        <div className="flex justify-center items-center gap-[1.85rem] my-2">
          <h2 className="text-md text-neutral-400">hours</h2>
          <h2 className="text-md text-neutral-400">minutes</h2>
          <h2 className="text-md text-neutral-400">seconds</h2>
        </div>

        <div className="flex justify-center items-center gap-3">
          <label htmlFor="">
            <input
              type="number"
              id="hours"
              value={hours}
              onChange={(e) => handleInputChange(e)}
              className="w-[5rem] h-[5rem] p-2 border-2 text-4xl outline-none text-center"
              placeholder="00"
            />
          </label>
          <label htmlFor="">
            <input
              type="number"
              id="minutes"
              value={minutes}
              onChange={(e) => handleInputChange(e)}
              className="w-[5rem] h-[5rem] p-2 border-2 text-4xl outline-none text-center"
              placeholder="00"
            />
          </label>
          <label htmlFor="">
            <input
              type="number"
              id="seconds"
              value={seconds}
              onChange={(e) => handleInputChange(e)}
              className="w-[5rem] h-[5rem] p-2 border-2 text-4xl outline-none text-center"
              placeholder="00"
            />
          </label>
        </div>
        <div className="flex justify-center items-center gap-3 my-5">
          {isTimerStart ? (
            <button
              className="bg-yellow-600 text-white py-2 px-4"
              onClick={() => setTimerStart(false)}
            >
              Pause
            </button>
          ) : (
            <button
              className="bg-orange-600 text-white py-2 px-4"
              onClick={() => setTimerStart(true)}
            >
              Start
            </button>
          )}

          <button
            className="bg-yellow-600 text-white py-2 px-4"
            onClick={resetTime}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountDownTimer;
