
import './App.sass'
import { CardButton } from './components/CarbButton/CardButton'
import { Header } from './components/Header/Header'
import { JournalAddButton } from './components/JournalAddButton/JournalAddButton'
import { JournalCard } from './components/JournalCard/JournalCard'
import { JournalForm } from './components/JournalForm/JournalForm'
import { JounalList } from './components/JournalList/JounalList'
import { Body } from './layots/Body/Body'
import { LeftPanel } from './layots/LeftPanel/LeftPanel'
import { useLocalStorage } from './hooks/use-localstorage.hook'

function mapItems(items) {
  if(!items) {
    return []
  }
  return items.map(i => ({
    ...i,
    date: new Date(i.date)
  }))
}

 export function App() {
  const [items, setItems] = useLocalStorage('data')
  
  const addItem = item => {
    setItems([...mapItems(items), {
      title: item.title,
      text: item.post,
      date: new Date(item.date),
      id: mapItems(items).length > 0 ? Math.max(...mapItems(items).map(el => el.id)) + 1 : 1
    }])
  }

  const sortItems = (a , b) => {
    return b.date - a.date
  }

  return (
    <div className='app'>
      <LeftPanel>
        <Header/>
        <JournalAddButton/>
        <JounalList>
          {mapItems(items).length === 0 
            ? <p>Записей нет, добавьте новую!</p> 
            : mapItems(items).sort(sortItems).map(el => (
            <CardButton key={el.id}>
              <JournalCard
                  title={el.title}
                  date={el.date}
                  text={el.text}
              />
          </CardButton>
          ))}
        </JounalList>
      </LeftPanel>
      <Body>
          <JournalForm onSubmit={addItem}/>
      </Body>
    </div>
  )
}

