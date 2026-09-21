function ICard(props) {
  return (
    <div style={{ border: "10px solid red", height: "300px", width: "300px" }}>
      {props.pic && (
        <img
          src={props.pic}
          alt={`${props.name || "Student"} profile`}
          style={{ width: "100px", height: "100px", objectFit: "cover" }}
        />
      )}
      <h2>Roll:{props.roll}</h2>
      <h2>Name:{props.name}</h2>
      <h2>Branch:{props.branch}</h2>
      <h2>College:{props.college}</h2>
    </div>
  );
}

export default ICard;
