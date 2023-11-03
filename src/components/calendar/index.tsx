export function Calendar() {
  // function get

  function getCurrentDate() {
    const fullCurrentDate = new Date()

    const dayOptions: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      timeZone: 'UTC',
    }

    const monthOptions: Intl.DateTimeFormatOptions = {
      month: 'long',
      timeZone: 'UTC',
    }
    const dayOfWeek: string = fullCurrentDate.toLocaleDateString(
      'en',
      dayOptions,
    )

    const monthIndex = new Date().getMonth()
    const monthName = new Date(
      new Date().getFullYear(),
      monthIndex,
      1,
    ).toLocaleDateString(undefined, monthOptions)

    const day = fullCurrentDate.getDate().toString().padStart(2, '0')
    const month = monthName
    const year = fullCurrentDate.getFullYear()
    return { day, month, year, dayOfWeek }
  }

  const currentDate = getCurrentDate()

  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2">
        <p className="font-semibold text-5xl">{currentDate.day}</p>
        <div>
          <p className="font-semibold">{currentDate.month}</p>
          <p>{currentDate.year}</p>
        </div>
      </div>

      <p>{currentDate.dayOfWeek.toUpperCase()}</p>
    </div>
  )
}
