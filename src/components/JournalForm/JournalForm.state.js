export const INITIAL_STATE = {
    isValid: {
        post: true,
        date: true,
        title: true,
    },
    values: {
        post: '',
        date: '',
        title: '',
        tag: '',
        userId: '',
    },
    isFormReadyOnSubmit: false
}

export function formReducer(state, action) {
    switch(action.type) {
        case 'SET_VALUE':
            return {...state, values: {...state.values, ...action.payload}}
        case 'RESET_VALIDITY':
            return {...state, isValid: INITIAL_STATE.isValid}
        case 'CLEAR':
            return {...state, values: INITIAL_STATE.values, isFormReadyOnSubmit: false}
        case 'SUBMIT': {
            const titleValidity = state.values.title?.trim().length;
            const dateValidity = state.values.date;
            const postValidity = state.values.post?.trim().length;
            return {
                ...state,
                isValid: {
                    post: postValidity,
                    date: dateValidity,
                    title: titleValidity,
                },
                isFormReadyOnSubmit: postValidity && dateValidity && titleValidity
            }
        }
    }
}