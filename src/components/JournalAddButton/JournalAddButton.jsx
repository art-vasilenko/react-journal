import { CardButton } from "../CarbButton/CardButton"
import "./JournalAddButton.sass"


export const JournalAddButton = () => {
  return (
    <CardButton className='journal-add'>
        <img className="add-icons" src="/public/add-icons.svg" alt="" />
        Новое воспоминание
    </CardButton>
  )
}
