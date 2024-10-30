import { forwardRef } from 'react'
import './Input.sass'
import cn from 'classnames'

export const Input = forwardRef(function Input({ className, isValid = true, appearence, ...props }, ref) {
  return (
    <input {...props} ref={ref} className={cn(className, 'input', {
        invalid: !isValid,
        'input-title': appearence === 'title'

    })}/>
  )
})
