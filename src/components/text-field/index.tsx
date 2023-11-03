import { InputHTMLAttributes } from 'react'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
}

export const TextField = ({ label, name, ...rest }: TextFieldProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        {...rest}
        className="bg-slate-900 p-2 rounded-md text-slate-300 focus:outline-none focus:border-slate-900"
      />
    </div>
  )
}
