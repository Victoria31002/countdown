import React from "react";

function Popup({ handleClose }) {
  return (
    <div className="popup">
      <div className="signPopup">
        <h1 className="popupHeader">SUCCESS!</h1>
        <p className="popupDescription">You have successfully subscribed to the email newsletter</p>
        <button onClick={handleClose} className="btnPopup">
          Close
        </button>
      </div>
    </div>
  );
}

export default Popup;
