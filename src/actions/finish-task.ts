'use server'

import { prismaClient } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export const finishTask = async (taskId: number) => {
  try {
    const response = await prismaClient.task.update({
      where: {
        id: taskId,
      },
      data: {
        done: true,
      },
    })

    revalidatePath('/')
    return response
  } catch (err) {
    return err
  }
}
