import React from "react";
import kisses from "../kisses.gif";
import { Typewriter } from "react-simple-typewriter";
function getTodaysDate() {
  const today = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  return today.toLocaleDateString(undefined, options); // Example: "January 16, 2025"
}

const Success = () => (
  <div className="App-success">
    {/* Displaying a cute kisses gif */}
    <img className="App-gif" src={kisses} alt="Kisses" />
    {/* Personalized success messages */}
    <h1 style={{ margin: "auto 0", fontWeight: "normal" }}>
      How I feel --{" "}
      <span style={{ color: "red", fontWeight: "bold" }}>
        {/* Style will be inherited from the parent element */}
        <Typewriter
          words={[
            "I Love You! Priya",
            "I'm incomplete without you.",
            "I'm happy With You",
            "I feel bad when you are not close to me.",
            "I Miss You!😣 Priya",
            "I love spending time with you",
            "I feel You",
          ]}
          loop={100}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
    </h1>
    <p className="App-text-success">
      You're my favorite khadus Person, my princess, and the one I enjoy every
      moment with.
    </p>
    <p className="App-text-success">Mera Pyara Pedh(tree)</p>
    {/* Displaying the date of the special moment */}
    <p className="App-text-date">{getTodaysDate()}</p>
  </div>
);

export default Success;
