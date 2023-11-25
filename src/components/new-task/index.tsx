'use client'

import * as Dialog from '@radix-ui/react-dialog'
import Button from '../button'
import { TextField } from '../text-field'
import { createTask } from '@/actions/new-task'
import { useSession } from 'next-auth/react'
import { FormEvent, useState } from 'react'
import { useFetching } from '@/hooks/useFetching'
import { InfoIcon } from 'lucide-react'
import { toast } from 'sonner'

export const NewTask = () => {
  const { data } = useSession()
  const [taskDescription, setTaskDescription] = useState('')
  const { isFetching, activeFetching, disableFetching } = useFetching()

  const isUserAuthenticated = !data?.user

  const handleCreateTaskClick = async (event: FormEvent) => {
    event.preventDefault()

    if (!data?.user) {
      // Redireciona para o login
      return
    }
    activeFetching()
    try {
      await createTask(taskDescription, (data?.user).id)
      disableFetching()
      setTaskDescription('')
      toast.success('Task created successfully 😃')
    } catch {
      toast.error("No, I couldn't create your task 😭")
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="primary">New task</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black fixed inset-0 opacity-25" />
        <Dialog.Content className="bg-slate-800 rounded-md fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-6 max-h-[85vh] max-w-[400px] w-full flex flex-col gap-3">
          <Dialog.Title>
            <h3 className="text-lg font-bold">Create a new task</h3>
          </Dialog.Title>

          {isUserAuthenticated && (
            <div className="flex gap-2 items-center bg-slate-700 text-slate-400 p-2 rounded-md text-sm">
              <InfoIcon size={16} />
              <p>Please log in to create new tasks.</p>
            </div>
          )}

          <form
            className="mt-4"
            onSubmit={(event) => handleCreateTaskClick(event)}
          >
            <TextField
              label="Description:"
              name="description"
              placeholder="type your task description"
              value={taskDescription}
              disabled={isFetching || isUserAuthenticated}
              onChange={({ target }) => setTaskDescription(target.value)}
            />

            <div className="mt-4 flex items-center justify-end gap-2">
              <Dialog.Close asChild>
                <Button variant="cancel">Cancel</Button>
              </Dialog.Close>

              <Button
                variant="confirm"
                disabled={isFetching || isUserAuthenticated}
              >
                Confirm
              </Button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
