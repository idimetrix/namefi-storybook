import React, { ReactNode } from 'react'
import { cn } from '../../../utils/cn'
import { useToolTipContext } from './TooltipContext'
 
export interface ContentProps extends React.ComponentProps<'div'> {
    children: ReactNode
}

export const TooltipContent = ({children, ...props}: ContentProps) => {

  const {isOpen} = useToolTipContext()

  return (
    <div className={cn(' duration-200 w-100 border rounded-2.5 bg-[#313131] border-primary-500 pt-6 pr-12 pb-8 pl-8 flex gap-4 drop-shadow-[0_0px_1px_rgba(198, 238, 219, 0.1)]', isOpen &&' hidden')} {...props}>
        {children?.[0]}
        <div className={cn(' w-full flex flex-col gap-2.5 pt-0.5')}>
            {children?.[1]}
        </div>
    </div>
  )
}