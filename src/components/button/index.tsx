import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'confirm' | 'cancel'
  children: ReactNode
}

export default function Button({
  variant = 'primary',
  children,
  ...rest
}: ButtonProps) {
  const defaultStyles =
    'flex gap-3 py-1 px-3 rounded-md items-center text-base transition delay-20 disabled:opacity-60 disabled:cursor-not-allowed'

  function getVariantStyles(
    variant: 'primary' | 'outline' | 'confirm' | 'cancel',
  ) {
    const variants = {
      primary: 'bg-cyan-900 hover:bg-cyan-800',
      outline:
        'bg-none border-[1px] border-slate-600 :not:disabled:hover:bg-cyan-900',
      confirm: 'text-slate-950 bg-green-500 :not:disabled:hover:bg-green-400 ',
      cancel: 'text-slate-200 bg-red-500 hover:bg-red-400',
    }

    return variants[variant]
  }

  const styles = getVariantStyles(variant)

  return (
    <button className={`${defaultStyles} ${styles}`} {...rest}>
      {children}
    </button>
  )
}
