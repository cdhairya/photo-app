import React from "react";

const Section = () => {
  return (
    <div>
      <div className="my-sec grid-2">
        <div className="sec-img-div">
          <img
            className="sec-img"
            src="https://images.pexels.com/photos/9534288/pexels-photo-9534288.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
        </div>

        <p className="flow-text" style={{ margin: "0 20px" }}>
          One common flaw we've seen in many frameworks is a lack of support for
          truly responsive text. While elements on the page resize fluidly, text
          still resizes on a fixed basis. To ameliorate this problem, for text
          heavy pages, we've created a class that fluidly scales text size and
          line-height to optimize readability for the user. Line length stays
          between 45-80 characters and line height scales to be larger on
          smaller screens.
        </p>
      </div>
    </div>
  );
};

export default Section;
