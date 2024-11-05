import { useContext } from "react"
import { UserContext } from "../../context/user.context"
import "./JournalList.sass"
import { JournalCard } from "../JournalCard/JournalCard"
import { CardButton } from "../CarbButton/CardButton"


export const JounalList = ({items, setItem}) => {
  const {userId} = useContext(UserContext)

  const sortItems = (a , b) => {
    return b.date - a.date
  }

  return (
    <div className="journal-list">
        {items.length === 0 
              ? <p>Записей нет, добавьте новую!</p> 
              : items
              .filter(el => el.userId === userId)
              .sort(sortItems)
              .map(el => (
              <CardButton key={el.id} onClick={() => setItem(el)}>
                <JournalCard
                    title={el.title}
                    date={el.date}
                    post={el.post}
                />
            </CardButton>
            ))}
    </div>
  )
}
