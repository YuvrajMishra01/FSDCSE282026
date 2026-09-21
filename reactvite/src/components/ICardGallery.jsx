import ICard from "./ICard";

function ICardGallery({ studentImage }) {
  return (
    <div
      style={{
        height: "400px",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <ICard />
      <ICard
        pic={studentImage}
        roll="2400320101310"
        name="ABC"
        branch="CSE"
        college="ABESEC"
      />
      <ICard
        roll="2400320101311"
        name="DEF"
        branch="CSE"
        college="ABESEC"
      />
      <ICard
        roll="2400320101312"
        name="Yuvraj Mishra"
        branch="CSE"
        college="ABESEC"
      />
    </div>
  );
}
export default ICardGallery;
