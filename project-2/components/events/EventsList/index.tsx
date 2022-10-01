import EventItem from "@/components/events/EventItem";
import { EventItemType } from "@/defs/events";
import styles from "@/styles/eventList.module.css";

interface AppProps {
  events: Array<EventItemType>;
}

function EventsList({ events }: AppProps) {
  return (
    <ul className={styles.eventList}>
      {events.map((item, index) => (
        <EventItem key={index} item={item} />
      ))}
    </ul>
  );
}

export default EventsList;
