import { useEffect, useReducer} from "react"
import { Button } from "../button/Button"
import './JournalForm.sass'
import cn from 'classnames'
import { formReducer, INITIAL_STATE } from "./JournalForm.state"

export const JournalForm = ({onSubmit}) => {
    const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE)
    
    const { isValid, isFormReadyOnSubmit, values } = formState
    useEffect(() => {
        let timerId;
        if(!formState.isValid.date || !formState.isValid.title || !formState.isValid.post) {
           timerId = setTimeout(() => {
                dispatchForm({type: 'RESET_VALIDITY'})
            }, 2000);
        }
        return () => {
            clearTimeout(timerId)
        }
    }, [isValid])

    useEffect(() => {
        if(isFormReadyOnSubmit) {
            onSubmit(values)
            dispatchForm({type: 'CLEAR'})
        }
    }, [isFormReadyOnSubmit])

    const addJournalItem = (e) => {
        e.preventDefault()
        dispatchForm({type: 'SUBMIT'})
}

    const onChange = (e) => {
        console.log(e.target)
        dispatchForm({type: 'SET_VALUE', payload: {[e.target.name]: e.target.value}})
    }
    
  return (
        <form className="journal-form" onSubmit={addJournalItem}>
            <div>
                <input type="text" onChange={onChange} value={values.title} name="title" className={cn('input-title', {
                    invalid: !isValid.title
                })}/>
            </div>
            <div className="form-row">
                <label htmlFor="date" className='form-label'>
                    <img src="/calendar.svg" alt="Иконка календаря"/>
                    <span>Дата</span>
                </label>
                <input type="date" onChange={onChange} value={values.date} name="date" id="date" className={cn('input', {
                    invalid: !isValid.date
                })}/>
            </div>
            <div className="form-row">
                <label htmlFor="tag" className='form-label'>
                    <img src="/folder.svg" alt="Иконка меток"/>
                    <span>Метки</span>
                </label>
                <input type="text" onChange={onChange} id="tag" value={values.tag} name="tag" className='input'/>
            </div>
            <textarea name="post" onChange={onChange} value={values.post} cols='30' rows='10' className={cn('input input_post', {
                invalid: !isValid.post
            })}></textarea>
            <Button text='Сохранить' onClick={() => {
                console.log('Click')
            }}/>
        </form>
  )
}
