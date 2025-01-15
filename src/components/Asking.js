import React from "react";

const Asking = ({ gif, altText, handleAccept, handleReject, noButtonText }) => (
  <>
    {/* Displaying the chosen gif with alt text */}
    <img className="App-gif" src={gif} alt={altText} />
    {/* Asking the special question with personalized name */}
    <p className="App-text">Priya, Do you Love Me?</p>
    <div>
      {/* Button for accepting the proposal */}
      <button className="App-button" onClick={handleAccept}>
        Yes
      </button>
      {/* Button for rejecting the proposal with dynamic text */}
      <button className="App-button" onClick={handleReject}>
        {noButtonText}
      </button>
    </div>
  </>
);

export default Asking;
