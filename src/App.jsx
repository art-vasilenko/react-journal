import { useState } from 'react'
import './App.sass'
import { CardButton } from './components/CarbButton/CardButton'
import { Header } from './components/Header/Header'
import { JournalAddButton } from './components/JournalAddButton/JournalAddButton'
import { JournalCard } from './components/JournalCard/JournalCard'
import { JournalForm } from './components/JournalForm/JournalForm'
import { JounalList } from './components/JournalList/JounalList'
import { Body } from './layots/Body/Body'
import { LeftPanel } from './layots/LeftPanel/LeftPanel'

 export function App() {
  const initialData = [
    // {
    //   id: 1,
    //   title: 'Поход в горы',
    //   date: new Date,
    //   text: 'Поход в горы увлекательное занятие',
    // },
    // {
    //   id: 2,
    //   title: 'Поход в годы',
    //   date: new Date,
    //   text: 'Поход в годы занимает много времени',
    // },
  ]
  const [data, setData] = useState(initialData)

  const addItems = items => {
    setData(oldItems => [...oldItems, {
      title: items.title,
      text: items.text,
      date: new Date(items.date),
      id: Math.max(...oldItems.map(el => el.id)) + 1
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
        {data.length === 0 
          ? <p>Записей нет, добавьте новую!</p> 
          : data.sort(sortItems).map(el => (
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
        <JournalForm onSubmit={addItems}/>
    </Body>
    </div>
  )
}

