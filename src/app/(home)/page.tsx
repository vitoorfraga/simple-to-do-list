import { Calendar } from '../../components/calendar'
import { Task } from '../../components/task'

export default function Home() {
  return (
    <main>
      <section className="my-4">
        <Calendar />
      </section>
      <section className="flex flex-col gap-3 mt-8">
        <Task id="1" name="Criar banco de dados" isChecked={true} />
        <Task id="2" name="Arrumar tela de inicio do iphone" isChecked={true} />
        <Task id="3" name="asudhasudhuasdhasudh" isChecked={true} />
      </section>
    </main>
  )
}
