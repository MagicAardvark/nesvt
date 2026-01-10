import { ClubEvent } from "../../models/data/event";
import parseDate from "../parse/datetime";

export default function SignUpLink(props: {
  event: ClubEvent;
  msrEvents: any;
}) {
  const now = new Date();

  function hasMsrEvent(event: ClubEvent, msrEvents: any) {
    if (msrEvents === null || msrEvents === undefined) {
      return false;
    }

    if (!msrEvents.recordset || msrEvents.recordset.total === 0) {
      return false;
    }

    if (!msrEvents.events || !Array.isArray(msrEvents.events)) {
      return false;
    }

    const eventDate = parseDate(event.startDate);
    return msrEvents.events.some((msrEvent: any) => {
      const msrDate = parseDate(msrEvent.start);
      return (
        msrDate.getFullYear() === eventDate.getFullYear() &&
        msrDate.getMonth() === eventDate.getMonth() &&
        msrDate.getDate() === eventDate.getDate()
      );
    });
  }

  function getMsrEvent(
    event: ClubEvent,
    msrEvents: any
  ): { start: string; detailuri: string } {
    const foundMsrEvent = { start: "", detailuri: "" };
    const eventDate = parseDate(event.startDate);
    msrEvents.events.forEach((msrEvent: any) => {
      const msrDate = parseDate(msrEvent.start);

      if (
        msrDate.getFullYear() === eventDate.getFullYear() &&
        msrDate.getMonth() === eventDate.getMonth() &&
        msrDate.getDate() === eventDate.getDate()
      ) {
        foundMsrEvent.start = msrEvent.start;
        foundMsrEvent.detailuri = msrEvent.detailuri;
        return;
      }
    });
    return foundMsrEvent;
  }

  if (!hasMsrEvent(props.event, props.msrEvents) ) {
    return (
      <>
        <p className="desc">Registration will open 30 days prior.</p>
        <ul>
          <li className="signup-link-item">
              <span className="fa fa-globe"></span> {now < parseDate(props.event.startDate) ? "Event signup coming soon" : "Past Event"}
          </li>
        </ul>
      </>
    );
  }

  const msrEvent: { start: string; detailuri: string } = getMsrEvent(
    props.event,
    props.msrEvents
  );

  // event is in the past
  if (
    hasMsrEvent(props.event, props.msrEvents) &&
    now > parseDate(msrEvent.start)
  ) {
    return (
      <>
        <p className="desc">Registration Closed</p>
        <ul>
          <li className="signup-link-item">
            <a href={msrEvent.detailuri}>
              <span className="fa fa-globe"></span> Registration Closed
            </a>
          </li>
        </ul>
      </>
    );
  }

  // event is in the future
  if (
    hasMsrEvent(props.event, props.msrEvents) &&
    now < parseDate(msrEvent.start)
  ) {
    return (
      <>
        <p className="desc">Registration open now!</p>
        <ul>
          <li className="signup-link-item">
            <a href={msrEvent.detailuri}>
              <span className="fa fa-globe"></span> MotorsportReg Event Signup
            </a>
          </li>
        </ul>
      </>
    );
  }

  return <></>;
}
