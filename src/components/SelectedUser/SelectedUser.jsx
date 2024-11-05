import { useContext } from "react"
import { UserContext } from "../../context/user.context"

export const SelectedUser = () => {
    const {userId, setUserId} = useContext(UserContext)

  const changeUser = (e) => {
    setUserId(Number(e.target.value))
  }

  return (
    <select className='select' name="user" id="user" value={userId} onChange={changeUser}>
      <option value="1">Вася</option>
      <option value="2">Артём</option>
    </select>
  )
}