'use client'

import { finishTask } from '@/actions/finish-task'
import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from 'lucide-react'
import { toast } from 'sonner'

interface TaskProps {
  id: number
  name: string
  isChecked?: boolean
}

export function Task({ id, name, isChecked }: TaskProps) {
  const handleFinishedTask = (id: number) => {
    finishTask(id)
      .then(() => {
        toast.success('Task completed successfully 🚀.')
      })
      .catch(() => {
        toast.error('Unable to complete your task 😭.')
      })
  }

  return (
    <label
      htmlFor={id.toString()}
      className={`flex items-center justify-between gap-2 h-14 p-4 rounded-md border-[1px] border-indigo-950 hover:bg-slate-900 cursor-pointer ${
        isChecked && 'bg-slate-900'
      }`}
    >
      <span className={`${isChecked && 'line-through'}`}>{name}</span>
      <Checkbox.Root
        id={id.toString()}
        checked={isChecked}
        onCheckedChange={() => {
          if (!isChecked) {
            handleFinishedTask(id)
          }
        }}
        className="border-[1px] border-none rounded-[4px] bg-indigo-900ß w-5 h-5 flex items-center justify-center text-green-500"
      >
        <Checkbox.Indicator>
          <CheckIcon className="w-5 h-5" />
        </Checkbox.Indicator>
      </Checkbox.Root>
    </label>
  )
}
