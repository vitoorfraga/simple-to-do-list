import { Task } from '@/components/task'

export const TasksList = async () => {
  return (
    <section className="flex flex-col gap-3 mt-8">
      <Task id="1" name="Criar banco de dados" isChecked={true} />
    </section>
  )
}
