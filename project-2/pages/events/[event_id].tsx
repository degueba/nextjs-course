import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import { getEventById } from "dummy-data";
import { useRouter } from "next/router";
import { EventItemType } from "../../global/events/events";

function EventDetails() {
  const { query } = useRouter();
  const event: EventItemType | undefined = getEventById(
    query.event_id as string
  );

  if (!event) {
    return (
      <div>
        <h1>There is no event with this ID.</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Event Detail</h1>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </div>
  );
}

export default EventDetails;
