'use client'

import * as Dialog from '@radix-ui/react-dialog'
import Button from '../button'
import { TextField } from '../text-field'
import { createTask } from '@/actions/new-task'
import { useSession } from 'next-auth/react'
import { FormEvent, useState } from 'react'

export const NewTask = () => {
  const { data } = useSession()
  const [taskDescription, setTaskDescription] = useState('')

  const handleCreateTaskClick = async (event: FormEvent) => {
    event.preventDefault()

    if (!data?.user) {
      // Redireciona para o login
      return
    }
    await createTask(taskDescription, (data?.user).id)
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="primary">New task</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black fixed inset-0 opacity-25" />
        <Dialog.Content className="bg-slate-800 rounded-md fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-6 max-h-[85vh] max-w-[400px] w-full">
          <Dialog.Title>
            <h3 className="text-lg font-bold">Create a new task</h3>
          </Dialog.Title>

          <form
            className="mt-4"
            onSubmit={(event) => handleCreateTaskClick(event)}
          >
            <TextField
              label="Description:"
              name="description"
              placeholder="type your task description"
              value={taskDescription}
              onChange={({ target }) => setTaskDescription(target.value)}
            />

            <div className="mt-4 flex items-center justify-end gap-2">
              <Dialog.Close asChild>
                <Button variant="cancel">Cancel</Button>
              </Dialog.Close>

              <Button variant="confirm">Confirm</Button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
