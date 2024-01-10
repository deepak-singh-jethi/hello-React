export const Hello = () => {
  let lectureNumber = 2;
  let pStyle = {
    marginInline: "auto",
    textAlign: "center",
    border: "10px solid blue",
    width: "300px",
  };
  return (
    <div className="container">
      <h1 style={{ textAlign: "center", border: "2px solid green" }}>
        Hello World
      </h1>
      <p style={pStyle}>it's Lecture number {lectureNumber}</p>
    </div>
  );
};
