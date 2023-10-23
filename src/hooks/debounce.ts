import {useState, useEffect} from 'react'


export function useDebounce(value: string, delay: number = 300): string {
    // this function takes a value in the string format
    // in order to use it as a search state with which 
    // the delay of 300ms in searching the result is set
    // so as not to overload the server.

    // create a local state with a time value
    const [debounced, setDebounced] = useState(value)

    // the observer will be looking at the value and the delay
    useEffect(()=> {
        const handler = setTimeout(()=> setDebounced(value), delay)
        return ()=> clearTimeout(handler)
    }, [value, delay])

    return debounced // return a property of the local state
}