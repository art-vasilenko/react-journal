import { CardButton } from "../CarbButton/CardButton"
import "./JournalAddButton.sass"


export const JournalAddButton = ({clearForm}) => {
  return (
    <CardButton className='journal-add' onClick={clearForm}>
        <img className="add-icons" src="/public/add-icons.svg" alt="" />
        Новое воспоминание
    </CardButton>
  )
}
