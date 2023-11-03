'use client'

import * as Dialog from '@radix-ui/react-dialog'
import Button from '../button'
import {
  GithubIcon,
  ListTodoIcon,
  LogInIcon,
  MenuIcon,
  XIcon,
} from 'lucide-react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Avatar } from '../avatar'
import { NavLink } from '../navlink'

export const Drawer = () => {
  const { status, data } = useSession()

  const handleLoginClick = async () => {
    await signIn()
  }

  const handleLogoutClick = async () => {
    await signOut()
  }
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="flex items-center justify-center">
          <MenuIcon />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black fixed inset-0 opacity-25" />
        <Dialog.Content className="bg-slate-800 fixed top-[50%] left-[0] translate-y-[-50%] p-6 h-full max-w-[20rem] w-full rounded-none">
          <Dialog.Close asChild>
            <button className="bg-red-500 h-8 w-8 rounded-md flex items-center justify-center">
              <XIcon />
            </button>
          </Dialog.Close>
          <Dialog.Title className="my-4">
            <h3 className="text-lg font-bold">Simple To Do List</h3>
          </Dialog.Title>

          {/* => Exibe botão para login caso não tenha usuário autenticado. */}
          {status === 'unauthenticated' && (
            <Button onClick={() => handleLoginClick()}>
              <LogInIcon size={18} />
              Sign In
            </Button>
          )}

          {/* => Exibe botão para logout caso tenha usuário autenticado. */}
          {status === 'authenticated' && (
            <Button variant="outline" onClick={() => handleLogoutClick()}>
              <LogInIcon size={18} />
              Logout
            </Button>
          )}

          {/* => Exibe foto e nome do usuário (caso possua). */}
          {status === 'authenticated' && (
            <div className="mt-8 flex items-center gap-3">
              {data.user?.image && (
                <Avatar
                  imageUrl={data.user?.image}
                  userName={data.user?.name ? data.user?.name : ''}
                />
              )}
              <p>{data.user?.name}</p>
            </div>
          )}

          {/* => Navbar */}
          <nav className="flex flex-col gap-3 mt-6 ">
            <NavLink href="#">
              <ListTodoIcon />
              Daily Tasks
            </NavLink>
            <a
              href="https://github.com/vitoorfraga/simple-to-do-list"
              target="_blank"
              className="border-[2px] border-slate-600 w-full flex gap-3 p-2 rounded-md hover:bg-slate-600 transition-colors ease-linear"
            >
              <GithubIcon />
              Github
            </a>
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
