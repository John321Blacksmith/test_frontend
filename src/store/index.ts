import {configureStore} from '@reduxjs/toolkit'
import {githubApi} from './github/github.api'

// here is the reducer which directs the redux to the API

export const store = configureStore({
    reducer: {
        [githubApi.reducerPath]: githubApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(githubApi.middleware)
})