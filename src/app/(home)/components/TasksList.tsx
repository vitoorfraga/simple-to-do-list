import { Task as TaskCard } from '@/components/task'
import { authOptions } from '@/lib/auth'
import { prismaClient } from '@/lib/prisma'
import { getServerSession } from 'next-auth'

export const dynamic = 'force-dynamic'

export const TasksList = async () => {
  const session = await getServerSession(authOptions)
  console.log(session)

  const tasks = await prismaClient.task.findMany({
    where: {
      userId: session?.user.id,
    },
  })

  if (!session) {
    return (
      <p className="text-center flex-1 mt-16 h-full max-h-full">
        You need to be logged in.
      </p>
    )
  }

  return (
    <section className="flex flex-col gap-3 mt-8">
      {tasks.map((task) => {
        return (
          <TaskCard
            key={task.id}
            id={task.id}
            name={task.description}
            isChecked={task.done}
          />
        )
      })}
    </section>
  )
}
