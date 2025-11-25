import { useState } from "react";
import axios from "axios";

export default function DatePicker() {
  const [date, setDate] = useState("");
  const [data, setData] = useState(null);

  const fetchByDate = () => {
    if (!date) return;

    axios.get(`http://localhost:8080/api/apod/${date}`)
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <input
        type="date"
        onChange={(e) => setDate(e.target.value)}
        style={{ padding: "10px", fontSize: "16px" }}
      />
      <button 
        onClick={fetchByDate}
        style={{ padding: "10px 20px", fontSize: "16px", marginLeft: "10px", cursor: "pointer" }}
      >
        Fetch
      </button>

      {data && (
        <div style={{ marginTop: "20px" }}>
          <h2>{data.title}</h2>
          <img src={data.url} alt="APOD" style={{ width: "60%", borderRadius: "10px" }} />
          <p style={{ width: "60%", margin: "20px auto" }}>
            {data.explanation}
          </p>
        </div>
      )}
    </div>
  );
}
