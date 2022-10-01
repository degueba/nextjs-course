import Button from "@/components/ui/button";
import { EventItemType } from "@/global/events";
import styles from "@/styles/eventItem.module.css";
import Image from "next/image";

interface AppProps {
  item: EventItemType;
}

function EventItem({ item }: AppProps) {
  const { id, title, date, location, image } = item;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");

  return (
    <li className={styles.eventItem}>
      <Image src={image} alt={title} width={200} height={200} />
      <div className={styles.content}>
        <h2>{title}</h2>
        <div className={styles.date}>
          <time>{humanReadableDate}</time>
        </div>
        <div className={styles.address}>
          <address>{formattedAddress}</address>
        </div>
        <div>
          <Button
            href={{
              pathname: "/events/[event_id]",
              query: {
                event_id: id,
              },
            }}
          >
            <span>Explore Event</span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
