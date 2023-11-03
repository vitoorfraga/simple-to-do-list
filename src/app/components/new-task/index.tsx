'use client'

import * as Dialog from '@radix-ui/react-dialog'
import Button from '../button'
import { XIcon } from 'lucide-react'

export function NewTask() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button variant="primary">New task</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black fixed inset-0 opacity-25" />
        <Dialog.Content className="bg-slate-800 rounded-md fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-6 max-h-[85vh] max-w-[450px]">
          <Dialog.Title className="DialogTitle">Create a new task</Dialog.Title>
          {/* <Dialog.Description className="DialogDescription">
            Make changes to your profile here. Click save when you're done.
          </Dialog.Description> */}

          <form>
            <input type="text" placeholder="task name" />
          </form>

          <div className="mt-4 flex items-center justify-end gap-2">
            <Dialog.Close>
              <Button variant="cancel">Cancel</Button>
            </Dialog.Close>
            <Button variant="confirm">Confirm</Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
