
import MyProject from "./components/MyProject";
import { useState } from "react";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  function handleDeleteClick() {
    setShowPopup(true); // show popup when delete is triggered
  }

  function handleYes() {
    alert("Item deleted!"); // replace with actual delete logic
    setShowPopup(false);
  }

  function handleNo() {
    setShowPopup(false); // close popup without deleting
  }

  return (
    <>
      <button
        onClick={handleDeleteClick}
        style={{
          backgroundColor: "red",
          color: "white",
          border: "none",
          padding: "10px 20px",
          marginTop: "20px",
          cursor: "pointer",
          borderRadius: "5px",
          fontSize: "16px",
          display: "block",
          margin: "20px auto",
        }}
      >
        Delete File
      </button>

      {showPopup && (
        <MyProject handleYes={handleYes} handleNo={handleNo} />
      )}
    </>
  );
}

export default App;
