import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { MsrEvents } from "./models/data/msr";
import Events from "./scenes/events/events";
import Faq from "./scenes/faq/faq";
import Gallery from "./scenes/gallery/gallery";

import Header from "./scenes/global/header";
import Footer from "./scenes/global/footer";
import HelmetAlert from "./scenes/global/helmetAlert";
import Home from "./scenes/home/home";
import Results from "./scenes/results/Results";

function App() {
  const [events, setEvents] = useState<MsrEvents>({} as MsrEvents);
  const location = useLocation();

  function getDateRange() {
    const now = new Date();
    const year = now.getFullYear();
    const start = new Date(year, 0, 1).toISOString().split("T")[0];
    const end = new Date(year + 1, 0, 1).toISOString().split("T")[0];
    return { start, end };
  }

  useEffect(() => {
    const { start, end } = getDateRange();
    const eventsPath = `https://api.motorsportreg.com/rest/calendars/organization/F9EADF5D-F9F5-4B6C-4951013B365A2F87.json?archive=true&start=${start}&end=${end}`;
    const opts = {
      headers: {
        "accept": "application/vnd.pukkasoft+json"
      }
    };

    fetch(eventsPath, opts)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setEvents(data.response))
      .catch((error) => {
        console.error("Failed to fetch events:", error);
      });
  }, []);

  const showHeaderAndAlert = location.pathname !== "/results";
  const isResultsPage = location.pathname === "/results";

  return (
    <div className={isResultsPage ? "results-page" : "main-app"}>
      {showHeaderAndAlert && <Header />}
      <Routes>
        <Route path="/" element={<Home msrEvents={events}/>} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/results" element={<Results />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/events" element={<Events msrEvents={events}/>} />
      </Routes>
      {showHeaderAndAlert && <HelmetAlert />}
      {showHeaderAndAlert && <Footer />}
    </div>
  );
}

export default App;
