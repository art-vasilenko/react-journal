import './App.sass'
import { Button } from './components/button/Button'
import { CardButton } from './components/CarbButton/CardButton'
import { Journalcard } from './components/Journalcard/Journalcard'

 export function App() {
  const data = [
    {
      title: 'Поход в горы',
      date: new Date,
      text: 'Поход в горы увлекательное занятие',
    },
    {
      title: 'Поход в годы',
      date: new Date,
      text: 'Поход в годы занимает много времени',
    }
  ]
  return (
    <>
     <Button/> 
     <CardButton>
        <Journalcard
            title={data[0].title}
            date={data[0].date}
            text={data[0].text}
        />
      </CardButton>
      <CardButton>
        <Journalcard
            title={data[1].title}
            date={data[1].date}
            text={data[1].text}
        />
      </CardButton>
    </>
  )
}

