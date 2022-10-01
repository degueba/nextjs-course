import EventsList from "@/components/events/EventsList";
import styles from "@/styles/home.module.css";
import { getFeaturedEvents } from "../dummy-data";

function Main() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div className={styles.home}>
      <h1>Main Page</h1>
      <EventsList events={featuredEvents} />
    </div>
  );
}

export default Main;
