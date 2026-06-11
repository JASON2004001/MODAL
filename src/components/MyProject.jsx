function MyProject({ handleYes, handleNo }) {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "blueviolet",
        padding: "30px",
        borderRadius: "10px",
        textAlign: "center",
        color: "white",
        fontFamily: "Arial, sans-serif",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
        zIndex: 1000,
      }}
    >
      <p style={{ fontSize: "18px", marginBottom: "20px" }}>
        Do you want to delete file or not if yes then press yes
      </p>
      <button
        onClick={handleYes}
        style={{
          backgroundColor: "green",
          color: "white",
          border: "none",
          padding: "10px 20px",
          margin: "0 10px",
          cursor: "pointer",
          borderRadius: "5px",
          fontSize: "16px",
        }}
      >
        Yes
      </button>
      <button
        onClick={handleNo}
        style={{
          backgroundColor: "gray",
          color: "white",
          border: "none",
          padding: "10px 20px",
          margin: "0 10px",
          cursor: "pointer",
          borderRadius: "5px",
          fontSize: "16px",
        }}
      >
        No
      </button>
    </div>
  );
}

export default MyProject;
