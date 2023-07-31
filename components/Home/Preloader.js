import React, { useEffect, useState } from "react";

const Preloader = () => {
  const [Timer, setTimer] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setTimer("none");
    }, 6000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <div id="preloader" className={Timer}>
        <div className="text-container">
          <svg
            className="text-stroke"
            viewBox="0 0 900 100"
            width="80%"
            height="100%"
          >
            <text className="text" x="20" y="75">
              NEED FOR CODE 2.0
            </text>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Preloader;
