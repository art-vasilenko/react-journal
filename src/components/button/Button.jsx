import { useState } from 'react'
import './Button.sass'

export const Button = () => {
  const [text, setText] = useState('Открыть')

  const change = () => {
    setText('Закрыть')
  }

  return (
    <div>
        <button onClick={change} className='button button_blue'>{ text }</button>
    </div>
  )
}
