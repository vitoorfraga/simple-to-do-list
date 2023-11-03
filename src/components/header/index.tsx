import { MenuIcon } from 'lucide-react'
import { NewTask } from '../new-task'

export function Header() {
  return (
    <header className="text-lg border-b-[1px] border-slate-700 h-16 flex justify-between items-center uppercase text-slate-300 px-4">
      <MenuIcon />
      <h1>
        Simple <span className="text-amber-400  font-bold">To Do</span> List
      </h1>

      <NewTask />
    </header>
  )
}
