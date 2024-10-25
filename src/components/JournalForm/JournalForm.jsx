import { useState } from "react"
import { Button } from "../button/Button"
import './JournalForm.sass'
import cn from 'classnames'

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
            <div>
                <input type="text" name="title" className={cn('input-title', {
                    invalid: !validateForm.title
                })}/>
            </div>
            <div className="form-row">
                <label htmlFor="date" className='form-label'>
                    <img src="/calendar.svg" alt="Иконка календаря"/>
                    <span>Дата</span>
                </label>
                <input type="date" name="date" id="date" className={cn('input', {
                    invalid: !validateForm.date
                })}/>
            </div>
            <div className="form-row">
                <label htmlFor="tag" className='form-label'>
                    <img src="/folder.svg" alt="Иконка меток"/>
                    <span>Метки</span>
                </label>
                <input type="text" id="tag" name="tag" className='input'/>
            </div>
            <textarea name="post" cols='30' rows='10' className={cn('input input_post', {
                invalid: !validateForm.post
            })}></textarea>
            <Button text='Сохранить' onClick={() => {
                console.log('Click')
            }}/>
        </form>
  )
}
