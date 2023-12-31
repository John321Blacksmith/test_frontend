import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {ServerResponse, IUser} from '../../models/models'


// here are the api addresses used for generation of the github API hooks

export const githubApi = createApi({
    reducerPath: 'github/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com/'
    }),
    endpoints: build => ({
        searchUsers: build.query<IUser[], string>({
            query: (search: string) => ({
                url: `search/users`,
                params: {
                    q: search,
                    per_page: 10
                },
            transformResponse: (response: ServerResponse<IUser>) => response.items
            })
        })
    })
})


export const {useSearchUsersQuery} = githubApi