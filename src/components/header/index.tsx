import { NewTask } from '../new-task'
import { Drawer } from '../drawer'

export function Header() {
  return (
    <header className="text-lg border-b-[1px] border-slate-700 h-16 flex justify-between items-center uppercase text-slate-300 px-4">
      <div className="w-24 flex items-center">
        <Drawer />
      </div>
      <h1 className="font-bold">TO DO</h1>

      <div className="w-24">
        <NewTask />
      </div>
    </header>
  )
}
