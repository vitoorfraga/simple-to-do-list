'use client'

import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from 'lucide-react'
import { useState } from 'react'

interface TaskProps {
  id: number
  name: string
  isChecked?: boolean
}

export function Task({ id, name, isChecked }: TaskProps) {
  const [isCheckedState, setIsCheckedState] = useState(isChecked)
  return (
    <label
      htmlFor={id.toString()}
      className={`flex items-center justify-between gap-2 h-14 p-4 rounded-md border-[1px] border-indigo-950 hover:bg-slate-900 cursor-pointer ${
        isCheckedState && 'bg-slate-900'
      }`}
    >
      <span className={`${isCheckedState && 'line-through'}`}>{name}</span>
      <Checkbox.Root
        id={id.toString()}
        checked={isCheckedState}
        onCheckedChange={() => {
          setIsCheckedState(!isCheckedState)
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
