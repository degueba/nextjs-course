import EventsList from "@/components/events/EventsList";
import styles from "@/styles/home.module.css";
import { getFeaturedEvents } from "../dummy-data";

function Main() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div className={styles.home}>
      <EventsList events={featuredEvents} />
    </div>
  );
}

export default Main;
