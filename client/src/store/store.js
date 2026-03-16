import { create } from 'zustand'

export const useLaunchers = create((set) => ({
    launchers: [
        {
            id: 10,
            name: 'asd'
        },
        {
            id: 11,
            name: 'asd'
        }
    ]
}))