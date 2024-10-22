import { useState } from "react"
import { Button } from "../button/Button"

export const JournalForm = ({onSubmit}) => {
    const [validateForm, setValidateForm] = useState({
        title: true, 
        date: true,
        post: true,
    })

    const addJournalItem = (e) => {
        let isValidate = true;
        e.preventDefault()
        const formData = new FormData(e.target)
        const formProps = Object.fromEntries(formData)
        if(!formProps.title.trim().length){
            setValidateForm(state => ({...state, title: false}))
            isValidate = false;
        } else {
            setValidateForm(state => ({...state, title: true}))
        }
        if(!formProps.date.trim().length){
            setValidateForm(state => ({...state, date: false}))
            isValidate = false;
        } else {
            setValidateForm(state => ({...state, date: true}))
        }
        if(!formProps.post.trim().length){
            setValidateForm(state => ({...state, post: false}))
            isValidate = false;
        } else {
            setValidateForm(state => ({...state, post: true}))
        }
        if(!isValidate){
            return 0;
        }
        onSubmit(formProps)
}
    
  return (
        <form className="journal-form" onSubmit={addJournalItem}>
            <input type="text" name="title" style={{  border: validateForm.title === true ? undefined : '1px solid red' }}/>
            <input type="date" name="date" style={{  border: validateForm.date === true ? undefined : '1px solid red' }} />
            <input type="text" name="tag"/>
            <textarea name="post" cols='30' rows='10' style={{  border: validateForm.post === true ? undefined : '1px solid red' }}></textarea>
            <Button text='Сохранить' onClick={() => {
                console.log('Click')
            }}/>
        </form>
  )
}
