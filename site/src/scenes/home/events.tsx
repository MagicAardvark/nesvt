import { getEvents, nextEvent } from "../../data/events";
import { ClubEvent } from "../../models/data/event";
import EventCard from "../global/eventCard";
import MembershipCard from "../global/membershipCard";
import { MsrEvents } from "../../models/data/msr";

function Events(props: { msrEvents: MsrEvents }) {
  const event: ClubEvent = nextEvent();

  return (
    <>
      <div className="col-md-6">
        <ul className="event-list">
          <MembershipCard />
          <EventCard event={event} msrEvents={props.msrEvents} />
        </ul>

        <p className="home-events-button">
          <a
            className="btn btn-primary"
            href="./#/events"
            role="button"
          >
            View All Events
          </a>
        </p>
      </div>
    </>
  );
}

export default Events;
