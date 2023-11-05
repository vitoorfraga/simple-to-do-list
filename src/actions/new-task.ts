'use server'

import { prismaClient } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export const createTask = async (task: string, userId: string) => {
  const newTask = await prismaClient.task.create({
    data: {
      userId,
      description: task,
    },
  })

  revalidatePath('/')

  return newTask
}
