
import './Button.sass'

export const Button = ({text, onClick}) => {

  return (
    <div>
        <button className='button button_blue' onClick={onClick}>{text}</button>
    </div>
  )
}
