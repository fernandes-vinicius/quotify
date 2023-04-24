import React from 'react'

import clsx from 'clsx'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function Button({ className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'inline-flex items-center justify-center gap-4',
        'bg-slate-900 text-slate-50',
        'h-14 px-6 rounded-full capitalize text-sm font-semibold',
        'disabled:opacity-40 disabled:cursor-not-allowed',
        className,
      )}
    />
  )
}
