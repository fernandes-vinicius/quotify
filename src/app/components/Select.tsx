import React from 'react'

import * as SelectPrimitive from '@radix-ui/react-select'
import { ArrowCircleDown } from 'phosphor-react'

interface SelectProps extends SelectPrimitive.SelectProps {
  placeholder?: string
}

export function Select({ placeholder, children, ...rest }: SelectProps) {
  return (
    <SelectPrimitive.Root {...rest}>
      <SelectPrimitive.Trigger
        className="inline-flex items-center justify-between rounded-2xl px-6
        text-sm leading-none h-14 w-full bg-white text-slate-900
        font-semibold data-[placeholder]:text-slate-500 outline-none"
        aria-label={placeholder}
      >
        <SelectPrimitive.Value placeholder={placeholder} />

        <SelectPrimitive.Icon className="text-slate-500">
          <ArrowCircleDown weight="fill" size={20} />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          className="overflow-hidden bg-white rounded-2xl
          shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]"
        >
          <SelectPrimitive.Viewport className="p-2">
            {children}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}
