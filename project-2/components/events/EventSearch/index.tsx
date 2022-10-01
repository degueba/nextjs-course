import Button from '@/components/ui/button'
import styles from '@/styles/eventsSearch.module.css'
import { MONTHS_DATA } from 'dummy-data'
import { useRouter } from 'next/router'
import React, { useRef } from 'react'

interface AppProps {}

function EventSearch(props: AppProps) {
  const yearRef = useRef<HTMLSelectElement>(null)
  const monthRef = useRef<HTMLSelectElement>(null)
  const router = useRouter()

  function filterEventHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const year = yearRef.current?.value
    const month = monthRef.current?.value

    router.push(`/events/${year}/${month}`)
  }

  return (
    <form className={styles.form} onSubmit={filterEventHandler}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={styles.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthRef}>
            {MONTHS_DATA.map((month: string, index: number) => (
              <option value={index + 1} key={index}>
                {month}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Button type="submit">Find Events</Button>
    </form>
  )
}

export default EventSearch
