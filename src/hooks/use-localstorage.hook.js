import { useEffect, useState } from "react"

export function useLocalStorage(key) {
    const [data,setData] = useState() 

    //Вывод из LocalStorage
    useEffect(() => {
        const res = JSON.parse(localStorage.getItem(key))
        if(res) {
            setData(res)
        }
    }, [key])

    // Запись в LocalStorage
    const saveData = (newData) => {
        localStorage.setItem(key, JSON.stringify(newData))
        setData(newData)
    }
    
    return [data, saveData]
}