import './App.sass'
import { Header } from './components/Header/Header'
import { JournalAddButton } from './components/JournalAddButton/JournalAddButton'
import { JournalForm } from './components/JournalForm/JournalForm'
import { JounalList } from './components/JournalList/JounalList'
import { Body } from './layots/Body/Body'
import { LeftPanel } from './layots/LeftPanel/LeftPanel'
import { useLocalStorage } from './hooks/use-localstorage.hook'
import {  UserContextProvider } from './context/user.context'
import { useState } from 'react'


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
  const [selectedItem, setSelectedItem] = useState(null)
  
  const addItem = item => {
    if(!item.id) {
      setItems([...mapItems(items), {
        ...item,
        date: new Date(item.date),
        id: mapItems(items).length > 0 ? Math.max(...mapItems(items).map(el => el.id)) + 1 : 1
      }])
    } else {
      setItems([...mapItems(items).map(i => {
        if(i.id === item.id) {
          return {
            ...item,
          }
        }
        return i;
      })])
    }
  }

  const deleteItem = (id) => {
    setItems([...items.filter(i  => i.id !== id)])
  }

  return (
    <UserContextProvider>
      <div className='app'>
        <LeftPanel>
          <Header/>
          <JournalAddButton clearForm={() => setSelectedItem(null)}/>
          <JounalList items={ mapItems(items) } setItem={setSelectedItem}/>
        </LeftPanel>
        <Body>
            <JournalForm onSubmit={addItem} data={selectedItem} OnDelete={deleteItem}/>
        </Body>
      </div>
    </UserContextProvider>
  )
}

