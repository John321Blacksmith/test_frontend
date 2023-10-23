import React, {useState, useEffect} from 'react'
import { useSearchUsersQuery } from '../store/github/github.api'
import {useDebounce} from '../hooks/debounce'


export function HomePage() {

    // define & use the state of the input
    const [search, setSearch] = useState('')

   
    const debounced = useDebounce(search)

    // prevent the query from the automatic loading
    const {isLoading, isError, data} = useSearchUsersQuery(debounced, {
        skip: debounced.length < 3
    })

    // observe the value of the search input
    // useEffect(()=> {
    //     console.log(search)
    // }, [search])

    // observing the property of the debounced value is better off now
    useEffect(()=> {
        console.log(debounced)
    }, [debounced])

    console.log(data)
    return (
        // define the dedicated page
        <div className='flex justify-center'>
            {isError && <p className='text-center text-red-600'>Some Errors occured</p>}
        <div className='relative'>
            <input
                type='text'
                className='border py-2 px-4'
                placeholder='Serach for user'
                value={search}
                // the state of the search will be changed with each input
                onChange={e => setSearch(e.target.value)}
            />
            {/* dropdown object */}
            
           
            <ul className='list-none absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white'>
                { isLoading && <p className='text-center'>Loading...</p> }
                { data?.map(user => (
                    <li key={user.id} className='py-2 px-4 hover:bg-gray-500 hover:text-white'>{user.login}</li>
                )) }
            </ul>
        </div>
        </div>
    )
}