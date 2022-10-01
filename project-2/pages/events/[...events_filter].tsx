import { useRouter } from "next/router";

function EventFiltered() {
  const { query } = useRouter();
  const { events_filter } = query as {
    events_filter: Array<string | undefined>;
  };

  const [event_id, event_date] = events_filter || [];

  return (
    <div>
      <h1>
        Event {event_id} filtered by {event_date && event_date}
      </h1>
    </div>
  );
}

export default EventFiltered;
