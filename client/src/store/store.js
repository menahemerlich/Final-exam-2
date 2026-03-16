import {create} from 'zustand'

export const useLaunchers = create((set) => ({
    launchers: []
}))