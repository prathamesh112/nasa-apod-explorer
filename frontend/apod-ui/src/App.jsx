import TodayApod from "./components/TodayApod";
import DatePicker from "./components/DatePicker";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        NASA APOD Explorer
      </h1>

      <TodayApod />
      <DatePicker />
    </div>
  );
}

export default App;
