import { useEffect, useState } from "react";
import axios from "axios";

export default function TodayApod() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8080/api/apod/today")
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>{data.title}</h2>
      <img src={data.url} alt="APOD" style={{ width: "60%", borderRadius: "10px" }} />
      <p style={{ width: "60%", margin: "20px auto" }}>
        {data.explanation}
      </p>
    </div>
  );
}
