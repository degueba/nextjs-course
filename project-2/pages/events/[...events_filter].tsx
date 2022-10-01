import EventSearch from '@/components/events/EventSearch'
import EventsList from '@/components/events/EventsList'
import styles from '@/styles/events.module.css'
import { getFilteredEvents, MONTHS_DATA } from 'dummy-data'
import { useRouter } from 'next/router'
import { Fragment } from 'react'

function EventFiltered() {
  const { query } = useRouter()
  const { events_filter } = query as {
    events_filter: Array<string>
  }

  const [year, month] = events_filter || []
  const selectedYear = Number(year)
  const selectedMonth = Number(month)

  if (
    isNaN(selectedYear) ||
    isNaN(selectedMonth) ||
    selectedYear > 2100 ||
    selectedYear < 2021 ||
    selectedMonth < 1 ||
    selectedMonth > 12
  ) {
    return <p>Invalid filter. Please adjust your values.</p>
  }

  const events = getFilteredEvents({ year: selectedYear, month: selectedMonth })
  return (
    <div className={styles.container}>
      <EventSearch />

      {!events.length ? (
        <p>No events found.</p>
      ) : (
        <Fragment>
          <h1>
            Events filtered by {year}, {month && MONTHS_DATA[Number(month) - 1]}
          </h1>
          <EventsList events={events} />
        </Fragment>
      )}
    </div>
  )
}

export default EventFiltered
