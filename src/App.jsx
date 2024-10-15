import './App.sass'
import { CardButton } from './components/CarbButton/CardButton'
import { Header } from './components/Header/Header'
import { JournalAddButton } from './components/JournalAddButton/JournalAddButton'
import { Journalcard } from './components/JournalCard/Journalcard'
import { JounalList } from './components/JournalList/JounalList'
import { Body } from './layots/Body/Body'
import { LeftPanel } from './layots/LeftPanel/LeftPanel'

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
    <div className='app'>
    <LeftPanel>
      <Header/>
      <JournalAddButton/>
      <JounalList>
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
        <CardButton>
          <Journalcard
              title={data[1].title}
              date={data[1].date}
              text={data[1].text}
          />
        </CardButton>
      </JounalList>
    </LeftPanel>
    <Body>
        Body
    </Body>
    </div>
  )
}

