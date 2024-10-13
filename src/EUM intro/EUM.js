import "./EUM.css";

function EUM() {
  return (
    <>
      <div className="EUM">
        <h3>우리가 바라던 그 순간을 향해</h3>
        <h1 style={{ fontSize: "100px" }}>다시, ON</h1>
        <p style={{ fontSize: "30px" }}>E:UM 소개</p>
        <img alt="home" src={require("../image/home.jpg")} />
        <p style={{ fontSize: "30px" }}>강원대학교 미디어커뮤니케이션학과 36대 학생회 E:UM은 ...</p>
        <p style={{ fontSize: "30px" }}>(설명 추가 예정)</p>
      </div>
    </>
  );
}

export default EUM;
