'use client'

import * as Dialog from '@radix-ui/react-dialog'
import Button from '../button'
import { LogInIcon, MenuIcon, XIcon } from 'lucide-react'
import { signIn } from 'next-auth/react'

export const Drawer = () => {
  const handleLoginClick = async () => {
    console.log('ijasdijaisdj')
    await signIn()
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <button className="flex items-center justify-center">
          <MenuIcon />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black fixed inset-0 opacity-25" />
        <Dialog.Content className="bg-slate-800 rounded-md fixed top-[50%] left-[0] translate-y-[-50%] p-6 h-full max-w-[20rem] w-full">
          <Dialog.Close>
            <button className="bg-red-500 h-8 w-8 rounded-md flex items-center justify-center">
              <XIcon />
            </button>
          </Dialog.Close>
          <Dialog.Title className="my-4">
            <h3 className="text-lg font-bold">Simple To Do List</h3>
          </Dialog.Title>

          <div>
            <Button onClick={() => handleLoginClick()}>
              <LogInIcon size={18} />
              Sign In
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
