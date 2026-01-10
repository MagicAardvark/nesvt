import { getEvents } from "../../data/events";
import { ClubEvent } from "../../models/data/event";
import { MsrEvents } from "../../models/data/msr";
import EventCard from "../global/eventCard";
import MembershipCard from "../global/membershipCard";

function Events(props: {msrEvents: MsrEvents}) {
  const events: ClubEvent[] = getEvents();

  return (
    <div className="container page-container">
      <div className="row">
        <div className="col-lg-12">
          <div className="page-header">
            <h1 className="page-title">
              Events
            </h1>
            <p className="lead page-description">
              Join us for exciting autocross events throughout the season
            </p>
          </div>
          <ul className="event-list">
            <MembershipCard />
            {events.map((event, i) => (
              <EventCard key={i} event={event} msrEvents={props.msrEvents}/>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Events;
