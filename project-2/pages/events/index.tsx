import EventsList from '@/components/events/EventsList'
import { getAllEvents } from '../../dummy-data'

import EventSearch from '@/components/events/EventSearch'
import styles from '@/styles/events.module.css'

function Events() {
  const events = getAllEvents()

  return (
    <div className={styles.container}>
      <h1>All Events</h1>
      <EventSearch />
      <EventsList events={events} />
    </div>
  )
}
export default Events
