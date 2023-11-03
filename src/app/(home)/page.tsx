import { Calendar } from '../../components/calendar'
import { TasksList } from './components/TasksList'

export default async function Home() {
  return (
    <main>
      <section className="my-4">
        <Calendar />
      </section>

      <TasksList />
    </main>
  )
}
