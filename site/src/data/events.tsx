import { ClubEvent } from "../models/data/event";
import { MsrEvent } from "../models/data/msr";

function sortByDate(a: ClubEvent, b: ClubEvent): number {
  return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();  
}

export function nextEvent(): ClubEvent {
  const events: ClubEvent[] = getEvents().sort(sortByDate);
  const now: Date = new Date();

  for (let i = events.length - 1; i >= 0; i--) {
    let event = events[i]

    if (new Date(event.startDate) > now) {
      return event
    }
  }
  return events[events.length - 1];
}

export function getEvents(): ClubEvent[] {
  return [
    {
      type: "autocross",
      name: "#1",
      startDate: "2026-04-05T00:00:00.000",
    },
    {
      type: "autocross",
      name: "#2",
      startDate: "2026-04-18T00:00:00.000",
    },
    {
      type: "autocross",
      name: "#3",
      startDate: "2026-05-09T00:00:00.000",
    },
    {
      type: "autocross",
      name: "#4",
      startDate: "2026-05-24T00:00:00.000",
    },
    {
      type: "autocross",
      name: "#5",
      startDate: "2026-06-07T00:00:00.000",
    },
    {
      type: "autocross",
      name: "#6",
      startDate: "2026-06-13T00:00:00.000",
    },
    {
      type: "autocross",
      name: "#7",
      startDate: "2026-06-28T00:00:00.000",
    },
    {
      type: "autocross",
      name: "#8",
      startDate: "2026-07-05T00:00:00.000",
    },
    {
      type: "autocross",
      name: "#9",
      startDate: "2026-07-18T00:00:00.000",
    },
    {
      type: "autocross",
      name: "#10",
      startDate: "2026-07-26T00:00:00.000",
    },
    {
      type: "autocross",
      name: "#11",
      startDate: "2026-08-15T00:00:00.000",
    },
    {
      type: "autocross",
      name: "#12",
      startDate: "2026-09-13T00:00:00.000",
    },
    {
      type: "autocross",
      name: "#13",
      startDate: "2026-09-26T00:00:00.000",
    },
    {
      type: "autocross",
      name: "#14",
      startDate: "2026-10-11T00:00:00.000",
    },
    {
      type: "autocross",
      name: "#15",
      startDate: "2026-10-24T00:00:00.000",
    },
    {
      type: "autocross",
      name: "#16",
      startDate: "2026-11-01T00:00:00.000",
    },
  ];
}

export function defaultMembership(): MsrEvent {
  return {
    detailuri:  "https://www.motorsportreg.com/events/ne-svt-2026-membership-devens-airfield-731299",
    name: "NE-SVT 2026 Membership",
    start: "2026-01-01",
    type: "Membership"
  }
}
