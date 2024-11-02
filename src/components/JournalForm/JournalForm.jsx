import { useContext, useEffect, useReducer, useRef } from "react"
import { Button } from "../button/Button"
import './JournalForm.sass'
import cn from 'classnames'
import { formReducer, INITIAL_STATE } from "./JournalForm.state"
import { Input } from "../Input/Input"
import { UserContext } from "../../context/user.context"

export const JournalForm = ({ onSubmit }) => {
    const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE)
    const { isValid, isFormReadyOnSubmit, values } = formState
    const titleRef = useRef()
    const dateRef = useRef()
    const postRef = useRef()
    const {userId} = useContext(UserContext)

    const focusError = (isValid) => {
        switch (true) {
            case !isValid.title:
                titleRef.current.focus()
                break
            case !isValid.date:
                dateRef.current.focus()
                break
            case !isValid.post:
                postRef.current.focus()
                break
        }
    }

    useEffect(() => {
        let timerId;
        focusError(isValid)
        if (!isValid.date || !isValid.title || !isValid.post) {
            timerId = setTimeout(() => {
                dispatchForm({ type: 'RESET_VALIDITY' })
            }, 2000);
        }
        return () => {
            clearTimeout(timerId)
        }
    }, [isValid])

    useEffect(() => {
        if (isFormReadyOnSubmit) {
            onSubmit(values)
            dispatchForm({ type: 'CLEAR' })
        }
    }, [isFormReadyOnSubmit, values, onSubmit])

    const addJournalItem = (e) => {
        e.preventDefault()
        dispatchForm({ type: 'SUBMIT' })
    }

    const onChange = (e) => {
        dispatchForm({ type: 'SET_VALUE', payload: { [e.target.name]: e.target.value } })
    }

    return (
        <form className="journal-form" onSubmit={addJournalItem}>
            {userId}
            <div>
                <Input type="text" ref={titleRef} isValid={isValid.title} onChange={onChange} value={values.title} name="title" appearence='title' />
            </div>
            <div className="form-row">
                <label htmlFor="date" className='form-label'>
                    <img src="/calendar.svg" alt="Иконка календаря" />
                    <span>Дата</span>
                </label>
                <Input type="date" ref={dateRef} isValid={isValid.date} onChange={onChange} value={values.date} name="date" id="date" />
            </div>
            <div className="form-row">
                <label htmlFor="tag" className='form-label'>
                    <img src="/folder.svg" alt="Иконка меток" />
                    <span>Метки</span>
                </label>
                <Input type="text" onChange={onChange} id="tag" value={values.tag} name="tag" />
            </div>
            <textarea name="post" ref={postRef} onChange={onChange} value={values.post} cols='30' rows='10' className={cn('input input_post', {
                invalid: !isValid.post
            })}></textarea>
            <Button text='Сохранить' onClick={() => {

            }} />
        </form>
    )
}
