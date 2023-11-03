'use server'

import { prismaClient } from '@/lib/prisma'

export const createTask = async (task: string, userId: string) => {
  const newTask = await prismaClient.task.create({
    data: {
      userId,
      description: task,
    },
  })

  return newTask
}
