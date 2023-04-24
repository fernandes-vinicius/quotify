import React from 'react'

import * as SelectPrimitive from '@radix-ui/react-select'
import clsx from 'clsx'
import { Check } from 'phosphor-react'

type SelectItemRef = React.ElementRef<typeof SelectPrimitive.Item>

interface SelectItemProps extends SelectPrimitive.SelectItemProps {}

export const SelectItem = React.forwardRef<SelectItemRef, SelectItemProps>(
  (props, forwardedRef) => {
    const { children, className, ...rest } = props

    return (
      <SelectPrimitive.Item
        className={clsx(
          'text-xs leading-none text-slate-600 font-semibold rounded-2xl',
          'flex items-center h-12 px-6 relative select-none',
          'data-[disabled]:text-slate-300 data-[disabled]:pointer-events-none',
          'data-[highlighted]:outline-none data-[highlighted]:bg-amber-50',
          'data-[highlighted]:text-slate-900 data-[highlighted]:cursor-pointer',
          className,
        )}
        {...rest}
        ref={forwardedRef}
      >
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>

        <SelectPrimitive.ItemIndicator
          className="absolute right-6 w-6 inline-flex
          items-center justify-center text-amber-600"
        >
          <Check weight="bold" size={20} />
        </SelectPrimitive.ItemIndicator>
      </SelectPrimitive.Item>
    )
  },
)

SelectItem.displayName = 'SelectItem'
