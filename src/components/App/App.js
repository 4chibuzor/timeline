import "./App.css";
import { info } from "./data";
import Details from "../Details/Details";
import Timeline from "../Timeline/Timeline";
function App() {
  const timelineDetails = info.map((data, i) => (
    <Details
      key={`key${i}`}
      title={data.title}
      content={data.content}
      date={data.date}
      time={data.time}
      icon={data.icon}
    />
  ));
  return (
    <section>
      <Timeline>{timelineDetails}</Timeline>
    </section>
  );
}

export default App;
